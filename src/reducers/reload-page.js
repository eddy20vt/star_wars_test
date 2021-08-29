function reducer(state = true, action){
    switch (action.type) {
        case "setReloadPage":
          return action.payload;
        default:
          return state;
      }
    }
     
    export default reducer;