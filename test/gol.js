var automata;

window.addEventListener("load", () => {
    automata = Automata(100, 100, {
        canvas: document.getElementById("c")
    }, (x, y, value) => {
        var neighbours = automata.getNeighbours(x, y);
        var neighbourCount = 0;
        neighbours.forEach((v) => {
            if(v) {
                neighbourCount++;
            }
        });

        if(value && neighbourCount < 2) {
            return false;
        } else if(value && neighbourCount > 3) {
            return false;
        } else if(!value && neighbourCount == 3) {
            return true;
        } else {
            return value;
        }
    }, (automata) => {
        for(var x = 0; x < automata.width; x++) {
            for(var y = 0; y < automata.height; y++) {
                automata.setCell(x, y, Math.random() > 0.5);
            }
        }
    });
});

function start() {
    automata.start();
}
function stop() {
    automata.stop();
}
function step() {
    automata.tick();
}
function reset() {
    automata.reset();
}