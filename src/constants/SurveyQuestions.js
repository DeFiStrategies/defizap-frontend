const surveyQuestions = [
  {
    questionNumber: 0,
    question: 'What is your investing style?',
    options: [
      {
        value: 'Conservative: I prefer fixed income',
        key: 'conservative'
      },
      {
        value: "Moderate: I'm comfortable accepting some risk for more growth",
        key: 'moderate'
      },
      {
        value:
          "Aggressive: I'm comfortable accepting higher risk for higher returns",
        key: 'aggressive'
      }
    ]
  },
  {
    questionNumber: 1,
    question:
      'How much experience do you have interacting with DeFi protocols?',
    options: [
      {
        value: "Beginner: I'm fairly new and can't wait to learn more.",
        key: 'beginner'
      },
      {
        value:
          "Experienced: I'm generally familiar with lending/borrowing on Compound.",
        key: 'expert'
      },
      {
        value:
          'Advanced: I have a deep understanding of how margin trading works on Fulcrum.',
        key: 'advanced'
      }
    ]
  },
  {
    questionNumber: 2,
    question: 'What is your current strategy?',
    options: [
      {
        value: 'Capturing short-term price fluctuations',
        key: 'shortTerm'
      },
      {
        value: 'Capitalizing on medium-term trends',
        key: 'mediumTerm'
      },
      {
        value: 'Long-term buy & hold',
        key: 'longTerm'
      }
    ]
  },
  {
    questionNumber: 3,
    question: 'What is your outlook on ETH/USD for the next 3 MONTHS?',
    options: [
      {
        value: 'Bullish',
        key: 'bull'
      },
      {
        value: 'Bearish',
        key: 'bear'
      },
      {
        value: 'Flat',
        key: 'flat'
      },
      {
        value: 'Not sure',
        key: 'notSure'
      }
    ]
  },
  {
    questionNumber: 4,
    question: 'Result',
    options: []
  }
];

export default surveyQuestions;
