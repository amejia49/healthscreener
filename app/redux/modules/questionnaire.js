const CLEAR_ANSWERS = 'CLEAR_ANSWERS'
const SET_ANSWER = 'SET_ANSWER'
const CALCULATE_SCORE = 'CALCULATE_SCORE'
const PREVIOUS_QUESTION = 'PREVIOUS_QUESTION'

const questionText = [
  'Little interest or pleasure in doing things?',
  'Feeling down, depressed, or hopeless?',
  'Trouble falling or staying asleep, or sleeping too much?',
  'Feeling tired or having little energy?',
  'Poor appetite or overeating?',
  'Feeling bad about yourself - or that you are a failure or have let yourself or your family down?',
  'Trouble concentrating on things, such as reading the newspaper or watching television?',
  `Moving or speaking so slowly that other people could have noticed?
    Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?`,
  'Thoughts that you would be better off dead, or of hurting yourself in some way?'
]

const questions = questionText.reduce((prev, question, index) => {
  prev[index] = {
    userAnswer: 0,
    text: question
  }
  return prev
},{})

const initialState = {
  questions,
  currentQuestion: 0, //keeps track of what question should appear
  numOfQuestions: questionText.length, //when currentQuestion === numOfQuestions, calculate and show score
  answers:[
    {
      text: 'Not At All',
      value: 0
    },
    {
      text: 'Several Days',
      value: 1
    },
    {
      text: 'More than half the days',
      value: 2
    },
    {
      text: 'Nearly every day',
      value: 3
    }
],
  score: 0
}

export function setAnswer (answer, currentQuestion) {
  return {
    answer,
    currentQuestion,
    type: SET_ANSWER
  }
}
export function calculateScore () {
  return {
    type: CALCULATE_SCORE
  }
}

function userAnswer (state, action) {
  switch (action.type) {
    case SET_ANSWER :
      return {
        ...state,
        [action.currentQuestion]: {
          ...state[action.currentQuestion],
          userAnswer: action.answer
        }
      }
    default :
      return {
        ...state
      }
  }
}

function score (questions, action) {
  switch (action.type) {
    case CALCULATE_SCORE :
      let total = 0;
      Object.keys(questions).forEach((questionNumber) => {
        total = total + questions[questionNumber].userAnswer
      })
      return total
    default :
      return {
        ...state
      }
  }
}

export function clearAnswers () {
  return {
    type: CLEAR_ANSWERS
  }
}

export function previousQuestion () {
  return {
    type: PREVIOUS_QUESTION
  }
}

export function questionnaire (state=initialState, action) {
  switch (action.type) {
    case CLEAR_ANSWERS :
      return {
        ...state,
        currentQuestion:0
      }
    case SET_ANSWER :
      return {
        ...state,
        questions: userAnswer(state.questions, action),
        currentQuestion: state.currentQuestion + 1
      }
    case PREVIOUS_QUESTION :
      return {
        ...state,
        currentQuestion: state.currentQuestion - 1
      }
    case CALCULATE_SCORE :
      return {
        ...state,
        score: score(state.questions, action)
      }
    default :
      return state
  }
}
