function reducer(state = 1, action){
    switch (action.type) {
        case "nextPage":
          return state+1;
        case "previousPage":
          return state-1;
        default:
          return state;
      }
    }
     
    export default reducer;