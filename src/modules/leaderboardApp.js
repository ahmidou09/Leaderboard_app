import { submitScore, getScores } from './leaderboardApi.js';
import { displayScores, updateScoresList } from './displayScores.js';

class LeaderboardApp {
  constructor() {
    this.gameId = 'Zf6Cjb5kljJ6O27oiQX3';
    this.itemsPerPage = 7;
    this.currentPage = 1;
    this.refreshBtn = document.querySelector('.refresh');
    this.submitBtn = document.querySelector('.submit');
    this.inputName = document.querySelector('.inputName');
    this.inputScore = document.querySelector('.inputScore');
    this.prevBtn = document.getElementById('prevBtn');
    this.nextBtn = document.getElementById('nextBtn');
  }

  init = async () => {
    const initialScores = await getScores(this.gameId);
    this.submitBtn.addEventListener('click', this.handleSubmission);
    this.refreshBtn.addEventListener('click', this.handleRefresh);
    this.prevBtn.addEventListener('click', this.handlePrevPage);
    this.nextBtn.addEventListener('click', this.handleNextPage);

    if (!initialScores) return;
    this.displayAndUpdateScores(initialScores);
  }

   handleSubmission = async (e) => {
     e.preventDefault();
     const name = this.inputName.value;
     const score = +this.inputScore.value;

     if (score && name) {
       const result = await submitScore(this.gameId, name, score);
       if (result) {
         const updatedScores = await getScores(this.gameId);
         if (updatedScores) {
           this.displayAndUpdateScores(updatedScores);
         }
       }
     }

     this.inputName.value = '';
     this.inputScore.value = '';
   }

    handleRefresh = async () => {
      const scores = await getScores(this.gameId);
      if (scores) {
        this.displayAndUpdateScores(scores);
      }
    }

   handlePrevPage = async () => {
     const scores = await getScores(this.gameId);
     if (this.currentPage > 1) {
       this.currentPage -= 1;
       this.updateScoresList(scores);
     }
   }

    handleNextPage = async () => {
      const scores = await getScores(this.gameId);
      if (this.currentPage < Math.ceil(scores.length / this.itemsPerPage)) {
        this.currentPage += 1;
        this.updateScoresList(scores);
      }
    }

    displayAndUpdateScores = async (scores) => {
      displayScores(scores);
      this.updateScoresList(scores);
    }

    updateScoresList = async (scores) => {
      updateScoresList(scores, this.currentPage, this.itemsPerPage);
    }
}

export default LeaderboardApp;
