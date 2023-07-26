const scoresList = document.querySelector('.list');

const displayScores = (scores) => {
  scoresList.innerHTML = '';

  if (Array.isArray(scores)) {
    scores.forEach((score) => {
      const listItem = document.createElement('li');
      listItem.classList.add('item');
      listItem.innerHTML = `<mark>${score.user}</mark> <small>${score.score}</small>`;
      scoresList.appendChild(listItem);
    });
  }
};

export default displayScores;