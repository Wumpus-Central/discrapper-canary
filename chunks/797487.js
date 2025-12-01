var r = n(449439),
    i = n(574369),
    a = n(169774),
    o = a.isPlatform("Mac OS X"),
    s = o && a.isBrowser("Firefox < 29"),
    l = r.hasCommandModifier,
    c = r.isCtrlKeyCommand;
function u(e) {
    return (o && e.altKey) || c(e);
}
function d(e) {
    return l(e) ? (e.shiftKey ? "redo" : "undo") : null;
}
function f(e) {
    return !o && e.shiftKey ? null : u(e) ? "delete-word" : "delete";
}
function p(e) {
    return l(e) && o ? "backspace-to-start-of-line" : u(e) ? "backspace-word" : "backspace";
}
e.exports = function (e) {
    switch (e.keyCode) {
        case 66:
            return l(e) ? "bold" : null;
        case 68:
            return c(e) ? "delete" : null;
        case 72:
            return c(e) ? "backspace" : null;
        case 73:
            return l(e) ? "italic" : null;
        case 74:
            return l(e) ? "code" : null;
        case 75:
            return o && c(e) ? "secondary-cut" : null;
        case 77:
        case 79:
            return c(e) ? "split-block" : null;
        case 84:
            return o && c(e) ? "transpose-characters" : null;
        case 85:
            return l(e) ? "underline" : null;
        case 87:
            return o && c(e) ? "backspace-word" : null;
        case 89:
            if (c(e)) return o ? "secondary-paste" : "redo";
            return null;
        case 90:
            return d(e) || null;
        case i.RETURN:
            return "split-block";
        case i.DELETE:
            return f(e);
        case i.BACKSPACE:
            return p(e);
        case i.LEFT:
            return s && l(e) ? "move-selection-to-start-of-block" : null;
        case i.RIGHT:
            return s && l(e) ? "move-selection-to-end-of-block" : null;
        default:
            return null;
    }
};
