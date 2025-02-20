function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
n.d(t, { w: () => i }), n(653041);
class i {
    getElement() {
        return 0 === this._elements.length ? this._createElement() : this._elements.pop();
    }
    poolElement(e) {
        this._cleanElement(e), this._elements.push(e);
    }
    clearPool() {
        this._elements.length = 0;
    }
    constructor(e, t) {
        r(this, '_elements', void 0), r(this, '_createElement', void 0), r(this, '_cleanElement', void 0), (this._elements = []), (this._createElement = e), (this._cleanElement = t);
    }
}
