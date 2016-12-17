const ADD_QUESTIONS = 'ADD_QUESTIONS'
const SET_ANSWER = 'SET_ANSWER'


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

function setQuestionAnswer (state, action) {
  switch (action.type) {
    case SET_ANSWER :
      return {
        ...state,
        [action.currentQuestion]: {
          ...state[action.currentQuestion],
          answer: action.answer
        }
      }
    default :
      return {
        ...state
      }
  }
}

export function questionnaire (state=initialState, action) {
  switch (action.type) {
    case SET_ANSWER :
      return {
        ...state,
        questions: setQuestionAnswer(state.questions, action),
        currentQuestion: state.currentQuestion + 1
      }
    default :
      return state
  }
}
