n.d(t, { A: () => o }), n(896048);
var r = n(635377),
    i = n.n(r);
function a(e, t, n) {
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
let s = 3;
class o {
    reset() {
        this._subscriptions = {};
    }
    get(e) {
        return this._get(e).keys();
    }
    getSubscribedThreadIds() {
        let e = new Set();
        for (let t in this._subscriptions) for (let n of this._subscriptions[t].keys()) e.add(n);
        return e;
    }
    _get(e) {
        var t;
        return null != (t = this._subscriptions[e])
            ? t
            : new (i())({
                  max: s,
                  updateAgeOnGet: !0,
              });
    }
    clear(e) {
        e in this._subscriptions && (delete this._subscriptions[e], this._onChange(e, []));
    }
    subscribe(e, t, n) {
        let r = this._get(e);
        return r.has(t)
            ? (r.set(t, Date.now()), !1)
            : (null != n && r.has(n) && r.set(n, Date.now()),
              r.set(t, Date.now()),
              (this._subscriptions[e] = r),
              this._onChange(e, r.keys()),
              !0);
    }
    unsubscribe(e, t) {
        if (!(e in this._subscriptions)) return !1;
        let n = this._subscriptions[e];
        return !!n.has(t) && (n.del(t), this._onChange(e, n.keys()), !0);
    }
    constructor(e) {
        a(this, "_subscriptions", {}), a(this, "_onChange", void 0), (this._onChange = e);
    }
}
