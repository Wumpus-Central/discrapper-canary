n.d(t, { Z: () => s }), n(47120);
var r = n(348327),
    i = n.n(r);
function o(e, t, n) {
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
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
class s {
    shouldCommit() {
        return !0;
    }
    setState(e) {
        this.state = a({}, this.state, e);
    }
    getState() {
        return this.state;
    }
    reset() {
        (this.dirty = !1), (this.state = this.getInitialState());
    }
    update() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.getNextState(a({}, this.state, e));
        if (t) this.dirty = !i()(n, this.getInitialState());
        else for (let e of Object.keys(n)) this.dirty = this.dirty || !i()(this.state[e], n[e]);
        let r = this.dirty && this.shouldCommit();
        return (r || this.alwaysUpdateState) && (this.state = n), !!r && ((this.dirty = !1), this.didCommit(this.state), !0);
    }
    forceUpdate() {
        (this.dirty = !1), this.didCommit(this.state);
    }
    constructor(e = !0) {
        o(this, 'alwaysUpdateState', void 0), o(this, 'dirty', void 0), o(this, 'state', void 0), (this.alwaysUpdateState = e), (this.dirty = !1), (this.state = this.getInitialState());
    }
}
