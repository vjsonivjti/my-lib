const initialState = {
    locations: [],
  };
  
  export default (state: any = initialState, action: any) => {
    switch (action.type) {
      case "UPDATE_LOCATION":
        return {
          ...state,
          locations: action.payload,
        };
  
      default:
        return state || null;
    }
  };
  