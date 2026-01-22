var r = n(367000).off;
e.exports = function () {
    var e = this,
        t = e.element;
    r(t, "keypress", e.eventHandler), r(t, "keydown", e.eventHandler), r(t, "keyup", e.eventHandler);
};
