import './style.css';
import LeaderboardApp from './modules/leaderboardApp.js';

window.addEventListener('DOMContentLoaded', () => {
  const leaderboardApp = new LeaderboardApp();
  leaderboardApp.init();
});