e.exports = function () {
    var e = this,
        t = n(367000),
        r = e.element;
    (e.eventHandler = n(86882).bind(e)),
        t(r, "keypress", e.eventHandler),
        t(r, "keydown", e.eventHandler),
        t(r, "keyup", e.eventHandler);
};
