
document.addEventListener("DOMContentLoaded", () => {
const App = document.createElement("div");
    App.innerHTML = "Touch the screen";
    App.id = "App";
    App.style.position = "absolute";
    App.style.height = "100%";
    App.style.width = "100%";
    App.style.color = "white";
    App.style.fontSize = "20px";
    App.style.fontWeight = "bold";
    App.style.margin = "0px";
    App.style.padding = "0px";
    App.style.textAlign = "center";
    App.style.backgroundColor = "black";
    let Square = false;
    App.onpointerdown = (e) => {
        capturePointer(e);
        if (!Square) {
            Square = document.createElement("div");
            Square.style.position = "absolute";
            Square.style.left = `${e.x}px`;
            Square.style.top = `${e.y}px`;
            Square.style.width = "100px";
            Square.style.height = "100px";
        
            Square.style.transform = "translate(-50%, -50%)";
            Square.style.pointerEvents = "none"
            Square.style.backgroundColor = "pink";
            document.body.appendChild(Square);
        }
    
    };
    App.onpointermove = (e) => {
        if (Square) {
            Square.style.left = `${e.x}px`;
            Square.style.top = `${e.y}px`;
        }
    };

    document.body.appendChild(App);

});

function toggleFullscreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
}

function capturePointer(e) {
    e.target.setPointerCapture(e.pointerId);
    
}