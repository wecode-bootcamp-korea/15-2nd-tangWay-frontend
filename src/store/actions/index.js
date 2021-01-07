export const setDeparture = (location) => {
  return {
    type: "SET_DEPARTURE",
    payload: location,
  };
};

export const setDestination = (location) => {
  return {
    type: "SET_DESTINATION",
    payload: location,
  };
};

export const setStartDate = (date) => {
  return {
    type: "SET_STARTDATE",
    payload: date,
  };
};

export const setEndDate = (date) => {
  return {
    type: "SET_ENDDATE",
    payload: date,
  };
};

export const setNumOfAdult = (number) => {
  return {
    type: "SET_ADULT",
    payload: number,
  };
};

export const setNumOfInfant = (number) => {
  return {
    type: "SET_INFANT",
    payload: number,
  };
};

export const setDepartureID = (number) => {
  return {
    type: "SET_DEPARTURE_ID",
    payload: number,
  };
};

export const setDestinationID = (number) => {
  return {
    type: "SET_DESTINATION_ID",
    payload: number,
  };
};
