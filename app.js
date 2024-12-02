
document.addEventListener("DOMContentLoaded", () => {
const App = document.createElement("div");
    App.innerHTML = "Hello";
    App.style.position = "absolute";
    App.style.height = "100%";
    App.style.width = "100%";
    App.style.color = "red";
    App.style.fontSize = "20px";
    App.style.fontWeight = "bold";
    App.style.margin = "0px";
    App.style.padding = "0px";
    App.style.textAlign = "center";
    App.style.backgroundColor = "black";
    let Square = false;
    App.onpointerdown = (e) => {
        if (!Square) {
            Square = document.createElement("div");
            Square.style.position = "absolute";
            Square.style.left = `${e.x}px`;
            Square.style.top = `${e.y}px`;
            Square.style.width = "100px";
            Square.style.height = "100px";
            Square.style.backgroundColor = "red";
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
