let musicDivs = document.querySelectorAll('.music-div');
let albumImg = document.querySelectorAll('.album-img');
let players = document.querySelectorAll('audio');

function hideAll() {
  musicDivs.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();
albumImg.forEach(function(el) {
  el.onclick = (e) => {
    hideAll();
    players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });
 
    switch (e.target.getAttribute('id')) {
      case 'naturally':
        document.querySelector('#alone')
        	.style.display = 'block';
        break;
      case 'arms':
        document.querySelector('#butterfly')
        	.style.display = 'block';
        break;
      case 'shadow':
        document.querySelector('#remember')
            .style.display = 'block';
        break;
      case 'story':
        document.querySelector('#far')
            .style.display = 'block';
        break;
    } 
    
  };

}); 
