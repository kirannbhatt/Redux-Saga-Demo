import { put, takeLatest, all } from "redux-saga/effects";

function* fetchNews() {
  const json = yield fetch(
    "https://newsapi.org/v2/everything?q=bitcoin&from=2019-03-22&sortBy=publishedAt&apiKey=a39fca133d1b4634ba9738166e7fd44f"
  ).then(res => res.json());
  yield put({ type: "NEWS_RECEIVED", json: json.articles });
}

function* actionWatcher() {
  yield takeLatest("GET_NEWS", fetchNews);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
