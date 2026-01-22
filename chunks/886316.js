function t(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
e.exports = (function () {
    function e(e) {
        t(this, "_uri", void 0), (this._uri = e);
    }
    return (
        (e.prototype.toString = function () {
            return this._uri;
        }),
        e
    );
})();
