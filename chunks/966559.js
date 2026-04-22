"use strict";
e.exports = function () {
    var e = n(367e3),
        t = this.element;
    (this.eventHandler = n(86882).bind(this)),
        e(t, "keypress", this.eventHandler),
        e(t, "keydown", this.eventHandler),
        e(t, "keyup", this.eventHandler);
};
