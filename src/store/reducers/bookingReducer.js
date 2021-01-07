const bookingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_DEPARTURE":
      return { ...state, departure: action.payload };
    case "SET_DESTINATION":
      return { ...state, destination: action.payload };
    case "SET_STARTDATE":
      return { ...state, startDate: action.payload };
    case "SET_ENDDATE":
      return { ...state, endDate: action.payload };
    case "SET_ADULT":
      return { ...state, numOfAdult: action.payload };
    case "SET_INFANT":
      return { ...state, numOfInfant: action.payload };
    case "SET_DEPARTURE_ID":
      return { ...state, departure_id: action.payload };
    case "SET_DESTINATION_ID":
      return { ...state, destination_id: action.payload };
    default:
      return state;
  }
};

export default bookingReducer;

const INITIAL_STATE = {
  departure: "",
  departure_id: "",
  destination: "",
  destination_id: "",
  startDate: null,
  endDate: null,
  numOfAdult: 1,
  numOfInfant: 0,
};
