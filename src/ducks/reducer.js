const initialState = {
  houses: [],
  propName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  img: "",
  mortgage: 0,
  rent: 0
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_HOUSE:
      return { houses: [...state.houses, { action }] }
    case GET_HOUSE:
      return { ...state, houses: action.payload }
    case UPDATE_INFO:
      return { ...state, [action.payload.name]: action.payload.value }
      case CANCEL_ADD:
        return {...action.payload, houses: state.houses}

    default:
      return state
  }
}

const ADD_HOUSE = "ADD_HOUSE"
const GET_HOUSE = "GET_HOUSE"
const UPDATE_INFO = "UPDATE_INFO"
const CANCEL_ADD = "CANCEL_ADD"

export function getHouses(data) {
  return {
    type: GET_HOUSE,
    payload: data
  }
}
export function updateInfo(targ) {
  return {
    type: UPDATE_INFO,
    payload: {
      name: targ.name,
      value: targ.value
    }
  }
}

export function submitHouse(data) {
  return {
    type: ADD_HOUSE,
    payload: data
  }
}
export function cancelAdd() {
  return {
    type: CANCEL_ADD,
    payload: initialState
  }
}
