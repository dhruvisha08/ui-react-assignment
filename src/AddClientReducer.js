import { USER_INPUT } from './AddClientAction';

const initialState = {
    client: [
               {firstName:"",
                email:"",
                contact:""}
    ],
  }
  
  export default function AddClientReducer(state = initialState, action) {
    switch (action.type) {
      case USER_INPUT:
        return {
          ...state,
          client: action.client,
        }
      default:
        return state
    }
  }