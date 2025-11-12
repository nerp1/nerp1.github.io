var swfobject = {};

swfobject.embedSWF = function(url, cont, width, height){
    var ruffle = window.RufflePlayer.newest(),
        player = Object.assign(document.getElementById(cont).appendChild(ruffle.createPlayer()), {
            width: width,
            height: height,
            style: 'width: 100vw' + width + 'px; height: 10vh' + height + 'px',
        });

    player.load({ url: url });
}

