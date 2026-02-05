"use strict";
n.d(t, { g: () => r });
let r = (e) => {
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
};
