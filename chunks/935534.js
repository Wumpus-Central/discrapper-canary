var r = n(367e3).off;
e.exports = function () {
    var e = this.element;
    r(e, "keypress", this.eventHandler), r(e, "keydown", this.eventHandler), r(e, "keyup", this.eventHandler);
};
