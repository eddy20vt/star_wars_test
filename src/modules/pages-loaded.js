function reducer(state = 0, action){
    switch (action.type) {
        case "setPagesLoaded":
          return action.payload;
        default:
          return state;
      }
    }
     
    export default reducer;