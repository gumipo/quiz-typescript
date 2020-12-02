import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import * as History from "history";

//import react-router
import { connectRouter, routerMiddleware } from "connected-react-router";

//reducer
// import { QuizzesReducer } from "../Quiz/reducers";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function createStore(history: any) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      // quizzes: QuizzesReducer,
    }),
    composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
  );
}