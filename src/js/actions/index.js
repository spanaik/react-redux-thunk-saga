import { ADD_ARTICLE } from "../constants/action-types";
import { FOUND_BAD_WORD } from "../constants/action-types";
import { fetchRemotePostsMiddleware } from "../middleware/index";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
 
}

export function foundBadWord(payload) {
  return { type: FOUND_BAD_WORD, payload};
}


// export function getData() {
//   return fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(json => {
//       return { type: "DATA_LOADED", payload: json };
//     });
// }

// export function getData() {
//   return function(dispatch) {
//     return fetchRemotePostsMiddleware({dispatch})
//   };
// }

/* Redux Saga */

    export function getData() {
      return { type: "DATA_REQUESTED" };
    }