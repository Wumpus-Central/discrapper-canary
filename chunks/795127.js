r.d(t, { g: () => n });
function n(e) {
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
