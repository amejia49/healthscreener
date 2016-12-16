const ADD_QUESTIONS = 'ADD_QUESTIONS'

const initialState = {
  questions:[]
}

export function questions (state=initialState, action) {
  switch (action.type) {
    case ADD_QUESTIONS :
      return state
    default :
      return state
  }
}
