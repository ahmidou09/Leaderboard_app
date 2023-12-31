const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const submitScore = async (gameId, user, score) => {
  try {
    const response = await fetch(`${baseURL}games/${gameId}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user,
        score,
      }),
    });

    const data = await response.json();
    return data.result;
  } catch (err) {
    return null;
  }
};

const getScores = async (gameId) => {
  try {
    const response = await fetch(`${baseURL}games/${gameId}/scores/`);
    const data = await response.json();
    return data.result;
  } catch (err) {
    return null;
  }
};

export { submitScore, getScores };