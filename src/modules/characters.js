function reducer(state = [], action){
    switch (action.type) {
        case "setCharacters":
          return action.payload;
        case "addCharacters":
            console.log('YOOOO????');
          return [...state, action.payload];
        default:
          return state;
      }
    }
     
    export default reducer;