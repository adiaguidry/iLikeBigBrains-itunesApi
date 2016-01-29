var lyrics = [
    "I like big brains..",
    "and I can not lie..",
    "you other brains can not deny..",
    "when a girl walks in with itty bitty frames..",
    "and a big book in her hand..",
    "YOU GET SPRUNG!!!",
    "ok ok... tweet -ilikebigbrains"
];
var i =0;

function sing(){
    var song_lines = document.getElementById('song');
    song_lines.innerHTML = lyrics[i];
        i++;
    if(i===lyrics.length){
        i =0;
    }

}
setInterval(
    function(){
        sing();
    },
    3000);
