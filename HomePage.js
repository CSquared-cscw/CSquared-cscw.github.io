function Click1(){
    document.getElementById("slide1").style.display="block";
    document.getElementById("slide2").style.display="none";
    document.getElementById("slide3").style.display="none";
    document.getElementById("dot1").style.backgroundColor="#9647B7";
    document.getElementById("dot2").style.backgroundColor="rgba(0, 0, 0, 0.6)";
    document.getElementById("dot3").style.backgroundColor="rgba(0, 0, 0, 0.6)";
}
function Click2(){
    document.getElementById("slide1").style.display="none";
    document.getElementById("slide2").style.display="block";
    document.getElementById("slide3").style.display="none";
    document.getElementById("dot1").style.backgroundColor="rgba(0, 0, 0, 0.6)";
    document.getElementById("dot2").style.backgroundColor="#9647B7";
    document.getElementById("dot3").style.backgroundColor="rgba(0, 0, 0, 0.6)";
}
function Click3(){
    document.getElementById("slide1").style.display="none";
    document.getElementById("slide2").style.display="none";
    document.getElementById("slide3").style.display="block";
    document.getElementById("dot1").style.backgroundColor="rgba(0, 0, 0, 0.6)";
    document.getElementById("dot2").style.backgroundColor="rgba(0, 0, 0, 0.6)";
    document.getElementById("dot3").style.backgroundColor="#9647B7";
}

function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function Right1(){
    document.getElementById("slide1").style.display="none";
    document.getElementById("slide2").style.display="block";
    document.getElementById("dot1").style.backgroundColor="rgba(0, 0, 0, 0.6)";
    document.getElementById("dot2").style.backgroundColor="#9647B7";
}
function Left2(){
    document.getElementById("slide1").style.display="block";
    document.getElementById("slide2").style.display="none";
    document.getElementById("dot1").style.backgroundColor="#9647B7";
    document.getElementById("dot2").style.backgroundColor="rgba(0, 0, 0, 0.6)";
    
}
function Right2(){
    document.getElementById("slide2").style.display="none";
    document.getElementById("slide3").style.display="block";
    document.getElementById("dot2").style.backgroundColor="rgba(0, 0, 0, 0.6)";
    document.getElementById("dot3").style.backgroundColor="#9647B7";
}
function Left3(){
    document.getElementById("slide3").style.display="none";
    document.getElementById("slide2").style.display="block";
    document.getElementById("dot2").style.backgroundColor="#9647B7";
    document.getElementById("dot3").style.backgroundColor="rgba(0, 0, 0, 0.6)";
}
