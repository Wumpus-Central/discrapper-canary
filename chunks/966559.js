"use strict";
e.exports = function () {
    var e = r(367e3),
        t = this.element;
    (this.eventHandler = r(86882).bind(this)),
        e(t, "keypress", this.eventHandler),
        e(t, "keydown", this.eventHandler),
        e(t, "keyup", this.eventHandler);
};
