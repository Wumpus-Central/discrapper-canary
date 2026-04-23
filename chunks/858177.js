"use strict";
n.d(t, { O: () => c }), n(321073);
var i = n(64700),
    r = n(735438),
    s = n.n(r),
    a = n(17928),
    o = n(451988),
    l = n(627363),
    d = n(587895);
class _ {
    _lastFetchedAttempted = new Map();
    _pending = new Set();
    _flushHandler = new o.J_(32, () => this._flush());
    request(e) {
        if (this._pending.has(e)) return;
        let t = this._lastFetchedAttempted.get(e);
        (null != t && Date.now() - t < 6e4) || (this._pending.add(e), this._flushHandler.delay(!1));
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
            d.A.didFetchingApplicationFail(e) ? n.push(e) : t.push(e);
        }),
            t.length > 0 &&
                s()
                    .chunk(t, 20)
                    .forEach((e) => {
                        l.Ay.fetchApplications(e, !1);
                    }),
            n.length > 0 &&
                s()
                    .chunk(n, 20)
                    .forEach((e) => {
                        l.Ay.fetchApplications(e, !0);
                    });
    }
}
let u = new _();
function c(e) {
    return (
        i.useEffect(() => {
            null != e && "" !== e && u.request(e);
        }, [e]),
        (0, a.bG)([d.A], () => (null != e && "" !== e ? d.A.getApplication(e) : null), [e])
    );
}
