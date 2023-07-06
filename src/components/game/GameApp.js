import React, { useState } from 'react';
import GameAnswer from './GameAnswer';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    questionText: '数学Ⅲで一番難しい分野は',
    answerOptions: [
      { answerText: '微分積分', isCorrect: true },
      { answerText: 'ベクトル', isCorrect: true },
      { answerText: '2次曲線', isCorrect: true },
    ],
  },
  {
    questionText: '数学Ⅲで一番難しい分野は',
    answerOptions: [
      { answerText: '微分積分', isCorrect: true },
      { answerText: 'ベクトル', isCorrect: false },
      { answerText: '2次曲線', isCorrect: false },
    ],
  },
  {
    questionText: 'この中で難易度が低いプログラミング言語は',
    answerOptions: [
      { answerText: 'React.js', isCorrect: false },
      { answerText: 'Angular.js', isCorrect: false },
      { answerText: 'HTML', isCorrect: true },
    ],
  },
  {
    questionText: 'この中でYouTuberのゲーム実況者は',
    answerOptions: [
      { answerText: 'Taiman', isCorrect: false },
      { answerText: 'ガッチマン', isCorrect: true },
      { answerText: 'ハクア', isCorrect: false },
    ],
  },
  {
    questionText: '数学Ⅲで一番難しい分野は',
    answerOptions: [
      { answerText: '微分積分', isCorrect: true },
      { answerText: 'ベクトル', isCorrect: false },
      { answerText: '2次曲線', isCorrect: false },
    ],
  },
  {
    questionText: '数学Ⅲで一番難しい分野は',
    answerOptions: [
      { answerText: '微分積分', isCorrect: true },
      { answerText: 'ベクトル', isCorrect: false },
      { answerText: '2次曲線', isCorrect: false },
    ],
  },
  {
    questionText: 'この中でYouTuberのゲーム実況者は',
    answerOptions: [
      { answerText: 'Taiman', isCorrect: false },
      { answerText: 'ガッチマン', isCorrect: true },
      { answerText: 'ハクア', isCorrect: false },
    ],
  },
  {
    questionText: '数学Ⅲで一番難しい分野は',
    answerOptions: [
      { answerText: '微分積分', isCorrect: true },
      { answerText: 'ベクトル', isCorrect: false },
      { answerText: '2次曲線', isCorrect: false },
    ],
  },
  {
    questionText: '数学Ⅲで一番難しい分野は',
    answerOptions: [
      { answerText: '微分積分', isCorrect: true },
      { answerText: 'ベクトル', isCorrect: false },
      { answerText: '2次曲線', isCorrect: false },
    ],
  },
];

const GameApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState(0);
  const navigate = useNavigate();
  // setScore(score + 1);
  // setWrong(wrong + 1);

  const handleAnswerButtonClick = (isCorrect) => {
    // if(score == 0) setScore(score + 1);
    // if(wrong == 0) setScore(wrong + 1);
    console.log(score,wrong)


    if (isCorrect) {
      setScore(score + 1);
      alert('正解です:' + score + ":" + wrong);
    } else {
      setWrong(wrong + 1);
      alert('不正解です' + score + ":" + wrong);
    }

    const nextQuestion = currentQuestion + 1;

    if (wrong < 3) { //&& nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }


  };

  return (
    <div className="GameApp">
      {showScore ? (
        <p>
          お疲れ様でした!<br />
          <span className="correct">{currentQuestion + 1}問中{score}問</span>正解です
        </p>
      ) : (
        <GameAnswer
          handleAnswerButtonClick={handleAnswerButtonClick}
          questions={questions}
          currentQuestion={currentQuestion}
        />
      )}
    </div>
  );
};


export default GameApp;



/*
import React, { useState } from 'react';
import GameAnswer from './GameAnswer';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    questionText: '数学Ⅲで一番難しい分野は',
    answerOptions: [
      { answerText: '微分積分', isCorrect: true },
      { answerText: 'ベクトル', isCorrect: false },
      { answerText: '2次曲線', isCorrect: false },
    ],
  },
  {
    questionText: 'この中で難易度が低いプログラミング言語は',
    answerOptions: [
      { answerText: 'React.js', isCorrect: false },
      { answerText: 'Angular.js', isCorrect: false },
      { answerText: 'HTML', isCorrect: true },
    ],
  },
  {
    questionText: 'この中でYouTuberのゲーム実況者は',
    answerOptions: [
      { answerText: 'Taiman', isCorrect: false },
      { answerText: 'ガッチマン', isCorrect: true },
      { answerText: 'ハクア', isCorrect: false },
    ],
  },
];

const GameApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const formData = {};

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      };

      const apiUrl = 'https://jsonplaceholder.typicode.com/users';

      const response = await fetch(apiUrl, requestOptions);
      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      console.log('Registration successful!', data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      alert('正解です');
      setScore(score + 1);
    } else {
      alert('不正解です');
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="GameApp">
      {showScore ? (
        <p>
          お疲れ様でした!<br />
          <span className="correct">3問中{score}問</span>正解です
        </p>
      ) : (
        <GameAnswer
          handleAnswerButtonClick={handleAnswerButtonClick}
          questions={questions}
          currentQuestion={currentQuestion}
        />
      )}

    </div>
  );
};

export default GameApp;

*/