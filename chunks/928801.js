r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(348327),
    o = r.n(a);
function s(e, n, r) {
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
class l {
    shouldCommit() {
        return !0;
    }
    setState(e) {
        this.state = {
            ...this.state,
            ...e
        };
    }
    getState() {
        return this.state;
    }
    reset() {
        (this.dirty = !1), (this.state = this.getInitialState());
    }
    update() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = this.getNextState({
                ...this.state,
                ...e
            });
        if (n) this.dirty = !o()(r, this.getInitialState());
        else for (let e of Object.keys(r)) this.dirty = this.dirty || !o()(this.state[e], r[e]);
        let i = this.dirty && this.shouldCommit();
        return (i || this.alwaysUpdateState) && (this.state = r), !!i && ((this.dirty = !1), this.didCommit(this.state), !0);
    }
    forceUpdate() {
        (this.dirty = !1), this.didCommit(this.state);
    }
    constructor(e = !0) {
        s(this, 'alwaysUpdateState', void 0), s(this, 'dirty', void 0), s(this, 'state', void 0), (this.alwaysUpdateState = e), (this.dirty = !1), (this.state = this.getInitialState());
    }
}
