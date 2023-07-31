import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME_KEY = `video-player-timekey`;
function getCurrentTimeKey(timeKey){
    localStorage.setItem(CURRENT_TIME_KEY, timeKey.second);
}
player.on('timeupdate', throttle(getCurrentTimeKey, 1000));

const currentTimeValue = localStorage.getItem(CURRENT_TIME_KEY || 0);
player.setCurrentTime(currentTimeValue);


// v.1
// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// player.on('timeupdate',  throttle( e => {
//     localStorage.setItem('videoplayer-current-time', e.seconds);
//     }, 1000)
// );
    
// player
// .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
// .catch(function (error) {
//     console.error(error)
// });
