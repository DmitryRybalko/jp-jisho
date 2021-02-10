const initState = {
  jisho: [],
  wiki: [],
};

export const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case "SEARCH_WORD":
      return {
        ...state,
        jisho: action.payload.jisho,
        wiki: action.payload.wiki,
      };
    default:
      return { ...state };
  }
};
