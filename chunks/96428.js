n.d(t, { N: () => r });
var r = (function () {
    function e(e, t, n, r) {
        return (this.x = e), (this.y = t), (this.width = n), (this.height = r), (this.top = this.y), (this.left = this.x), (this.bottom = this.top + this.height), (this.right = this.left + this.width), Object.freeze(this);
    }
    return (
        (e.prototype.toJSON = function () {
            var e = this;
            return {
                x: e.x,
                y: e.y,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: e.width,
                height: e.height
            };
        }),
        (e.fromRect = function (t) {
            return new e(t.x, t.y, t.width, t.height);
        }),
        e
    );
})();
