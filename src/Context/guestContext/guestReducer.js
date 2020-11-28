import {

  SUS_THEM,
  Active_NAV
} from '../types'

export default (state, { type, payload }) => {
  switch (type) {

    case SUS_THEM:
       return {
        ...state,
        backMode:state.backMode=== "light" ? "dark" : "light" 
       }

       case Active_NAV:
        return {
         ...state,
         active: !state.active,
        }
 
    default:
      return state
  }
}

