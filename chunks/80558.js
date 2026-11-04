n(321073);
var h = n(582128),
    s = n(435558),
    i = n.n(s),
    l = n(855986),
    a = n(451988),
    p = n(627363),
    c = n(587895);
let d = new (class {
    _lastFetchedAttempted = new Map();
    _pending = new Set();
    _flushHandler = new a.J_(32, () => this._flush());
    request(e) {
        if (this._pending.has(e)) return;
        let t = this._lastFetchedAttempted.get(e);
        (null != t && Date.now() - t < 6e4) || (this._pending.add(e), this._flushHandler.delay(!1));
    }
    _flush() {
        let e = [];
        (this._pending.forEach((t) => {
            (this._lastFetchedAttempted.set(t, Date.now()), e.push(t));
        }),
            this._pending.clear());
        let t = [],
            n = [];
        (e.forEach((e) => {
            c.A.didFetchingApplicationFail(e) ? n.push(e) : t.push(e);
        }),
            t.length > 0 &&
                i()
                    .chunk(t, 20)
                    .forEach((e) => {
                        p.Ay.fetchApplications(e, !1);
                    }),
            n.length > 0 &&
                i()
                    .chunk(n, 20)
                    .forEach((e) => {
                        p.Ay.fetchApplications(e, !0);
                    }));
    }
})();
n.d(
    t,
    {},
    {
        O: function (e) {
            return (
                h.useEffect(() => {
                    null != e && "" !== e && d.request(e);
                }, [e]),
                (0, l.bG)([c.A], () => (null != e && "" !== e ? c.A.getApplication(e) : null), [e])
            );
        },
    },
);
