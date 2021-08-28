function reducer(state = {}, action){
    switch (action.type) {
        case "setCharacter":
          return action.payload;
        default:
          return state;
      }
    }
     
    export default reducer;