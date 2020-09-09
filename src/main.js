let clickers = 50;
let startTime = Date.now();

function sync(dom, pos) {
    dom.style.left = `${pos.x}px`;
    dom.style.top = `${pos.y}px`;
}