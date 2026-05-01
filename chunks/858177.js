i.d(t, { O: () => m }), i(321073);
var n = i(64700),
    l = i(735438),
    s = i.n(l),
    a = i(17928),
    r = i(451988),
    d = i(627363),
    o = i(587895);
class u {
    _lastFetchedAttempted = new Map();
    _pending = new Set();
    _flushHandler = new r.J_(32, () => this._flush());
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
            i = [];
        e.forEach((e) => {
            o.A.didFetchingApplicationFail(e) ? i.push(e) : t.push(e);
        }),
            t.length > 0 &&
                s()
                    .chunk(t, 20)
                    .forEach((e) => {
                        d.Ay.fetchApplications(e, !1);
                    }),
            i.length > 0 &&
                s()
                    .chunk(i, 20)
                    .forEach((e) => {
                        d.Ay.fetchApplications(e, !0);
                    });
    }
}
let c = new u();
function m(e) {
    return (
        n.useEffect(() => {
            null != e && "" !== e && c.request(e);
        }, [e]),
        (0, a.bG)([o.A], () => (null != e && "" !== e ? o.A.getApplication(e) : null), [e])
    );
}
