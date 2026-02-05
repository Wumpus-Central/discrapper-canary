"use strict";
n.d(t, { O: () => h }), n(321073);
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(451988),
    l = n(627363),
    u = n(587895);
let c = 20,
    d = 6e4;
class _ {
    _lastFetchedAttempted = new Map();
    _pending = new Set();
    _flushHandler = new o.J_(32, () => this._flush());
    request(e) {
        if (this._pending.has(e)) return;
        let t = this._lastFetchedAttempted.get(e);
        (null != t && Date.now() - t < d) || (this._pending.add(e), this._flushHandler.delay(!1));
    }
    _flush() {
        let e = [];
        this._pending.forEach((t) => {
            this._lastFetchedAttempted.set(t, Date.now()), e.push(t);
        }),
            this._pending.clear();
        let t = [],
            n = [];
        e.forEach((e) => {
            u.A.didFetchingApplicationFail(e) ? n.push(e) : t.push(e);
        }),
            t.length > 0 &&
                a()
                    .chunk(t, c)
                    .forEach((e) => {
                        l.Ay.fetchApplications(e, !1);
                    }),
            n.length > 0 &&
                a()
                    .chunk(n, c)
                    .forEach((e) => {
                        l.Ay.fetchApplications(e, !0);
                    });
    }
}
let f = new _();
function p(e) {
    r.useEffect(() => {
        null != e && "" !== e && f.request(e);
    }, [e]);
}
function h(e) {
    return p(e), (0, s.bG)([u.A], () => (null != e && "" !== e ? u.A.getApplication(e) : null), [e]);
}
