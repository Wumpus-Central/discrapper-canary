"use strict";
n.d(t, { A: () => s });
var r = n(635377),
    i = n.n(r);
class s {
    _subscriptions = {};
    _onChange;
    constructor(e) {
        this._onChange = e;
    }
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
        return this._subscriptions[e] ?? new (i())({ max: 3, updateAgeOnGet: !0 });
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
}
