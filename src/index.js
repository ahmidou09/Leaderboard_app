import './style.css';
import LeaderboardApp from './modules/leaderboardApp.js';

window.addEventListener('DOMContentLoaded', () => {
  const gameName = 'Golf';
  const leaderboardApp = new LeaderboardApp(gameName);
  leaderboardApp.init();
});