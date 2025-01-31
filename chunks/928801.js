n.d(t, { Z: () => s }), n(47120);
var i = n(348327),
    r = n.n(i);
function a(e, t, n) {
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
class s {
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
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.getNextState({
                ...this.state,
                ...e
            });
        if (t) this.dirty = !r()(n, this.getInitialState());
        else for (let e of Object.keys(n)) this.dirty = this.dirty || !r()(this.state[e], n[e]);
        let i = this.dirty && this.shouldCommit();
        return (i || this.alwaysUpdateState) && (this.state = n), !!i && ((this.dirty = !1), this.didCommit(this.state), !0);
    }
    forceUpdate() {
        (this.dirty = !1), this.didCommit(this.state);
    }
    constructor(e = !0) {
        a(this, 'alwaysUpdateState', void 0), a(this, 'dirty', void 0), a(this, 'state', void 0), (this.alwaysUpdateState = e), (this.dirty = !1), (this.state = this.getInitialState());
    }
}
