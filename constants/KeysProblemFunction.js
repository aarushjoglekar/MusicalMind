function KeysProblemFunction(Array) {
  let MajorOrMinor = Math.round(Math.random());
  let randomQuestion = Math.round(Math.random() * (Array.length - 1))
  let imagePath = Array[randomQuestion]['uri']
  if (MajorOrMinor == 0){
    var answers = Array[randomQuestion]['MajorAnswers']
  } else {
    var answers = Array[randomQuestion]['MinorAnswers']
  }
  let correctAnswer = answers[0]
  let wrongAnswer1 = answers[1]
  let wrongAnswer2 = answers[2]
  let wrongAnswer3 = answers[3]
  let problem = [
    imagePath,
    correctAnswer,
    wrongAnswer1,
    wrongAnswer2,
    wrongAnswer3,
  ];
  return problem;
}

export default KeysProblemFunction;