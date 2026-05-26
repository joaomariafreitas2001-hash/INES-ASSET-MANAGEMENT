/* Background music via YouTube IFrame API — user must click Play */
(function () {
  'use strict';

  const VIDEO_ID = 'pTdihu-mp90';
  const WATCH_URL = 'https://www.youtube.com/watch?v=' + VIDEO_ID;

  let player = null;
  let apiReady = false;
  let pendingPlay = false;
  let isPlaying = false;

  function $(id) { return document.getElementById(id); }

  function loadYouTubeAPI(callback) {
    if (window.YT && window.YT.Player) {
      callback();
      return;
    }
    window._ytMusicQueue = window._ytMusicQueue || [];
    window._ytMusicQueue.push(callback);
    if (document.getElementById('yt-api-script')) return;

    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = function () {
      if (typeof prev === 'function') prev();
      (window._ytMusicQueue || []).forEach(function (fn) { fn(); });
      window._ytMusicQueue = [];
    };

    const s = document.createElement('script');
    s.id = 'yt-api-script';
    s.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(s);
  }

  function createPlayer() {
    if (player || !window.YT) return;
    player = new YT.Player('yt-music-player', {
      height: '1',
      width: '1',
      videoId: VIDEO_ID,
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        loop: 1,
        playlist: VIDEO_ID,
        modestbranding: 1,
        rel: 0,
        playsinline: 1
      },
      events: {
        onReady: function () {
          apiReady = true;
          try { player.setVolume(55); } catch (e) { /* ignore */ }
          if (pendingPlay) play();
        },
        onStateChange: function (e) {
          if (e.data === YT.PlayerState.PLAYING) setPlayingUI(true);
          if (e.data === YT.PlayerState.PAUSED || e.data === YT.PlayerState.ENDED) {
            setPlayingUI(false);
          }
        }
      }
    });
  }

  function setPlayingUI(playing) {
    isPlaying = playing;
    const fab = $('music-fab-btn');
    const playBtn = $('music-play-btn');
    const lang = window.ARC_I18N ? window.ARC_I18N.getLang() : 'en';
    const T = window.ARC_I18N ? window.ARC_I18N.T[lang] : {};
    const playLbl = T['music.play'] || 'Play music';
    const pauseLbl = T['music.pause'] || 'Pause music';
    if (fab) {
      fab.setAttribute('aria-label', playing ? pauseLbl : playLbl);
      fab.classList.toggle('is-playing', playing);
    }
    if (playBtn) playBtn.textContent = playing ? pauseLbl : playLbl;
  }

  function play() {
    pendingPlay = true;
    loadYouTubeAPI(function () {
      if (!player) createPlayer();
      else if (apiReady) {
        try { player.playVideo(); } catch (e) { /* ignore */ }
      }
    });
  }

  function pause() {
    pendingPlay = false;
    if (player && apiReady) {
      try { player.pauseVideo(); } catch (e) { /* ignore */ }
    }
    setPlayingUI(false);
  }

  function toggle() {
    if (isPlaying) pause();
    else play();
  }

  function showMusicUI() {
    const prompt = $('music-prompt');
    const fab = $('music-fab');
    if (prompt) prompt.classList.remove('is-hidden');
    if (fab) fab.classList.remove('is-hidden');
  }

  function hidePrompt() {
    const prompt = $('music-prompt');
    if (prompt) prompt.classList.add('is-dismissed');
  }

  function bindControls() {
    const playBtn = $('music-play-btn');
    const fabBtn = $('music-fab-btn');
    const dismiss = $('music-dismiss');

    if (playBtn) playBtn.addEventListener('click', toggle);
    if (fabBtn) fabBtn.addEventListener('click', toggle);
    if (dismiss) dismiss.addEventListener('click', hidePrompt);

    document.querySelectorAll('[data-music-watch]').forEach(function (a) {
      if (!a.getAttribute('href')) a.setAttribute('href', WATCH_URL);
    });
  }

  window.ARC_MUSIC = {
    show: showMusicUI,
    play: play,
    pause: pause,
    toggle: toggle,
    watchUrl: WATCH_URL,
    refreshLabels: function () { setPlayingUI(isPlaying); }
  };

  document.addEventListener('DOMContentLoaded', bindControls);
})();
