const scoresList = document.querySelector('.list');

const displayScores = (scores) => {
  scoresList.innerHTML = '';

  if (Array.isArray(scores)) {
    scores.forEach((score) => {
      const listItem = document.createElement('li');
      listItem.classList.add('item');
      listItem.textContent = `${score.user}: ${score.score}`;
      scoresList.appendChild(listItem);
    });
  }
};

export default displayScores;