r.d(n, {
    w: function () {
        return o;
    }
});
var i = r(653041);
function a(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class o {
    getElement() {
        return 0 === this._elements.length ? this._createElement() : this._elements.pop();
    }
    poolElement(e) {
        this._cleanElement(e), this._elements.push(e);
    }
    clearPool() {
        this._elements.length = 0;
    }
    constructor(e, n) {
        a(this, '_elements', void 0), a(this, '_createElement', void 0), a(this, '_cleanElement', void 0), (this._elements = []), (this._createElement = e), (this._cleanElement = n);
    }
}
