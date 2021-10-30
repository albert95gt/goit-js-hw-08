import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = "videoplayer-current-time";
const iframeEl = document.querySelector("#vimeo-player")
const player = new Player(iframeEl);

player.on("timeupdate", throttle(getCurrentTime, 1000))

function getCurrentTime(data) {

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds));
}

const savedPlayerTimeForStorage = localStorage.getItem(STORAGE_KEY);

if(savedPlayerTimeForStorage) {
    const parsedSavedPlayerTime = JSON.parse(savedPlayerTimeForStorage) 
    player.setCurrentTime(parsedSavedPlayerTime)
}










