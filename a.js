import DPlayer from 'dplayer';
import 'dplayer/dist/DPlayer.min.css';

const dp = new DPlayer({
  container: document.getElementById('dplayer'),
  video: {
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    pic: 'https://www.w3schools.com/html/img_girl.jpg',
  },
});