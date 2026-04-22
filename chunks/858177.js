t.d(i, { O: () => p }), t(321073);
var n = t(64700),
    l = t(735438),
    a = t.n(l),
    o = t(311907),
    r = t(451988),
    s = t(627363),
    d = t(587895);
class u {
    _lastFetchedAttempted = new Map();
    _pending = new Set();
    _flushHandler = new r.J_(32, () => this._flush());
    request(e) {
        if (this._pending.has(e)) return;
        let i = this._lastFetchedAttempted.get(e);
        (null != i && Date.now() - i < 6e4) || (this._pending.add(e), this._flushHandler.delay(!1));
    }
    _flush() {
        let e = [];
        this._pending.forEach((i) => {
            this._lastFetchedAttempted.set(i, Date.now()), e.push(i);
        }),
            this._pending.clear();
        let i = [],
            t = [];
        e.forEach((e) => {
            d.A.didFetchingApplicationFail(e) ? t.push(e) : i.push(e);
        }),
            i.length > 0 &&
                a()
                    .chunk(i, 20)
                    .forEach((e) => {
                        s.Ay.fetchApplications(e, !1);
                    }),
            t.length > 0 &&
                a()
                    .chunk(t, 20)
                    .forEach((e) => {
                        s.Ay.fetchApplications(e, !0);
                    });
    }
}
let c = new u();
function p(e) {
    return (
        n.useEffect(() => {
            null != e && "" !== e && c.request(e);
        }, [e]),
        (0, o.bG)([d.A], () => (null != e && "" !== e ? d.A.getApplication(e) : null), [e])
    );
}
