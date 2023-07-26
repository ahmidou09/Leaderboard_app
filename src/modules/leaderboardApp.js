import { submitScore, getScores } from './leaderboardApi.js';
import displayScores from './displayScores.js';

class LeaderboardApp {
  constructor(gameName) {
    this.gameName = gameName;
    this.refreshBtn = document.querySelector('.refresh');
    this.submitBtn = document.querySelector('.submit');
    this.inputName = document.querySelector('.inputName');
    this.inputScore = document.querySelector('.inputScore');
  }

  async init() {
    const gameId = 'Zf6Cjb5kljJ6O27oiQX3';
    if (!gameId) return;

    this.submitBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      const name = this.inputName.value;
      const score = +this.inputScore.value;

      if (score && name) {
        const result = await submitScore(gameId, name, score);
        if (result) {
          const updatedScores = await getScores(gameId);
          if (updatedScores) {
            displayScores(updatedScores);
          }
        }
      }

      this.inputName.value = '';
      this.inputScore.value = '';
    });

    this.refreshBtn.addEventListener('click', async () => {
      const scores = await getScores(gameId);
      if (scores) {
        displayScores(scores);
      }
    });
  }
}

export default LeaderboardApp;
