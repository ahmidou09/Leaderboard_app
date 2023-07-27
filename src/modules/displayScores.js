const scoresList = document.querySelector('.list');
const currentPageElem = document.getElementById('currentPage');

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

const updateScoresList = (scores, currentPage, itemsPerPage) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const scoresToShow = scores.slice(startIndex, endIndex);
  displayScores(scoresToShow);
  currentPageElem.innerText = currentPage;
};

export { displayScores, updateScoresList };