function reducer(state = [], action){
    switch (action.type) {
        case "setCharacters":
          return action.payload;
        case "addCharacters":
          return [...state, ...action.payload];
        default:
          return state;
      }
    }
     
    export default reducer;