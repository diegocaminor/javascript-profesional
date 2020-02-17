import MediaPlayer from './media-player'
import AutoPlay from './plugins/autoplay'
import AutoPause from './plugins/autopause'
import Ads from './plugins/Ads'

const video = document.querySelector('video');
const player = new MediaPlayer({
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
        new Ads()
    ]
});

const buttonPlay: HTMLElement = document.querySelector('#button-play');
const buttonMute: HTMLElement = document.querySelector('#button-mute');

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js').catch(error => {
        console.log(error.message);
    })
}