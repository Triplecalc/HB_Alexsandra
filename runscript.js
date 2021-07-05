var a = new Audio("https://dl.dropbox.com/s/ladqsz9w7ybkwqg/Good%20Wishes%20For%20Your%20Birthday%20-%20Birthday%20Song%28M4A_128K%29_1.m4a?dl=0");

window.addEventListener('click',() => {
a.play();
});

function start(){
    document.getElementById("all").innerHTML=" ";
    document.getElementById("all").style.display="none";
    document.getElementById("all").style.background="trasparent";
}

setInterval(start, 5000);
