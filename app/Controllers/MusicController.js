import MusicService from "../Services/MusicService.js";
import store from "../store.js";

//Private
function _drawResults() {
  let songs = store.State.songs;
  let template = "";
  songs.forEach(s => {
    template += s.previewTemplate;
  });
  document.getElementById("search-results").innerHTML = template;
}

function _drawActive() {
  document.getElementById("active-song").innerHTML =
    store.State.activeSong.activeTemplate;
}

//Public
export default class MusicController {
  constructor() {
    store.subscribe("songs", _drawResults);
  }
  getMusicByQuery(event) {
    event.preventDefault();
    let formData = event.target;
    MusicService.getMusicByQuery(formData.query.value);

    formData.reset();
  }
  setActive(id) {
    MusicService.setActive(id); //not my problem
  }
}
