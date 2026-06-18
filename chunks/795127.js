"use strict";
function i(e) {
    switch (e) {
        case "top":
            return "bottom";
        case "bottom":
        default:
            return "top";
        case "left":
            return "right";
        case "right":
            return "left";
    }
}
n.d(t, { g: () => i });
