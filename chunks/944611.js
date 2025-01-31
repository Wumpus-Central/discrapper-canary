function i(e, t, n) {
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
n.d(t, { w: () => r }), n(653041);
class r {
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
        i(this, '_elements', void 0), i(this, '_createElement', void 0), i(this, '_cleanElement', void 0), (this._elements = []), (this._createElement = e), (this._cleanElement = t);
    }
}
