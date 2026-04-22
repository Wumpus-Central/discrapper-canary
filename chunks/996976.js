"use strict";
n.d(t, { p: () => r });
var r = (function () {
    function e(e, t, n, r) {
        return (
            (this.x = e),
            (this.y = t),
            (this.width = n),
            (this.height = r),
            (this.top = this.y),
            (this.left = this.x),
            (this.bottom = this.top + this.height),
            (this.right = this.left + this.width),
            Object.freeze(this)
        );
    }
    return (
        (e.prototype.toJSON = function () {
            return {
                x: this.x,
                y: this.y,
                top: this.top,
                right: this.right,
                bottom: this.bottom,
                left: this.left,
                width: this.width,
                height: this.height,
            };
        }),
        (e.fromRect = function (t) {
            return new e(t.x, t.y, t.width, t.height);
        }),
        e
    );
})();
