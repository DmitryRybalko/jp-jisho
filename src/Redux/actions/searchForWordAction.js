import axios from "axios";
import { getWordFromJisho, getDefinition } from "../../api.js";

export const searchWord = (word) => async (dispatch) => {
  try {
    const searchedJisho = await axios.get(getWordFromJisho(word));
    const searchedDefinition = await axios.get(getDefinition(word));

    dispatch({
      type: "SEARCH_WORD",
      payload: {
        jisho: searchedJisho.data,
        wiki: searchedDefinition.data,
      },
    });
  } catch (error) {
    alert("No results :(");
  }
};
