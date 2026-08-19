var n = r(367e3).off;
e.exports = function () {
    var e = this.element;
    n(e, "keypress", this.eventHandler), n(e, "keydown", this.eventHandler), n(e, "keyup", this.eventHandler);
};
