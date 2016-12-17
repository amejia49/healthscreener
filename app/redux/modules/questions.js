const ADD_QUESTIONS = 'ADD_QUESTIONS'

const initialState = {
  questions:[
    {
      question: 'Little interest or pleasure in doing things?',
      answer: ''
    },
    {
      question: 'Feeling down, depressed, or hopeless?',
      answer: ''
  }
  ]
}

// const questions = {
//   onQuestion: '',
//   'question1': {
//     question: 'Little interest or pleasure in doing things?',
//     answer: ''
//   },
//   'question2': {
//     question: 'Feeling down, depressed, or hopeless?',
//     answer: ''
// }
// }
function addQuestions () {

}

export function questions (state=initialState, action) {
  switch (action.type) {
    case ADD_QUESTIONS :
      return state
    default :
      return state
  }
}
