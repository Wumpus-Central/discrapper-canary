r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(47120);
var a = r(31775),
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
let l = 3;
class u {
    reset() {
        this._subscriptions = {};
    }
    get(e) {
        return this._get(e).keys();
    }
    getSubscribedThreadIds() {
        let e = new Set();
        for (let n in this._subscriptions) for (let r of this._subscriptions[n].keys()) e.add(r);
        return e;
    }
    _get(e) {
        var n;
        return null !== (n = this._subscriptions[e]) && void 0 !== n
            ? n
            : new (o())({
                  max: l,
                  updateAgeOnGet: !0
              });
    }
    clear(e) {
        e in this._subscriptions && (delete this._subscriptions[e], this._onChange(e, []));
    }
    subscribe(e, n, r) {
        let i = this._get(e);
        return i.has(n) ? (i.set(n, Date.now()), !1) : (null != r && i.has(r) && i.set(r, Date.now()), i.set(n, Date.now()), (this._subscriptions[e] = i), this._onChange(e, i.keys()), !0);
    }
    unsubscribe(e, n) {
        if (!(e in this._subscriptions)) return !1;
        let r = this._subscriptions[e];
        return !!r.has(n) && (r.del(n), this._onChange(e, r.keys()), !0);
    }
    constructor(e) {
        s(this, '_subscriptions', {}), s(this, '_onChange', void 0), (this._onChange = e);
    }
}
