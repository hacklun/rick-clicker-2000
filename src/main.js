let clickers = 50;
let startTime = Date.now();

function sync(dom, pos) {
    dom.style.left = `${pos.x}px`;
    dom.style.top = `${pos.y}px`;
}

function addClicker() {
    const pos = {
        x: Math.random() * 500,
        y: Math.random() * 300
    };

    const img = new Image();
    img.src = "res/images/rick.png";
    
}