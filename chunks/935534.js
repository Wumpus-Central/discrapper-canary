var i = n(367e3).off;
e.exports = function () {
    var e = this.element;
    i(e, "keypress", this.eventHandler), i(e, "keydown", this.eventHandler), i(e, "keyup", this.eventHandler);
};
