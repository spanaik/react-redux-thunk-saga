import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";
import uuidv1 from "uuid";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === ADD_ARTICLE) {
        
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );
        if (foundWord.length) {
          return dispatch({ type: FOUND_BAD_WORD, payload: {title:"Comment Moderated for violation", id:uuidv1()} });
        }
      }
      return next(action);
    };
  };
}

export function fetchRemotePostsMiddleware({ dispatch }) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      })
      .catch( (error) => console.log("error occured", error))
}