n.d(t, {
    O: () => m,
}),
    n(321073),
    n(896048);
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(451988),
    l = n(627363),
    c = n(587895);

function u(e, t, n) {
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
let d = 20,
    f = 6e4;
class p {
    request(e) {
        if (this._pending.has(e)) return;
        let t = this._lastFetchedAttempted.get(e);
        (null != t && Date.now() - t < f) || (this._pending.add(e), this._flushHandler.delay(!1));
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
            c.A.didFetchingApplicationFail(e) ? n.push(e) : t.push(e);
        }),
            t.length > 0 &&
                a()
                    .chunk(t, d)
                    .forEach((e) => {
                        l.Ay.fetchApplications(e, !1);
                    }),
            n.length > 0 &&
                a()
                    .chunk(n, d)
                    .forEach((e) => {
                        l.Ay.fetchApplications(e, !0);
                    });
    }
    constructor() {
        u(this, "_lastFetchedAttempted", new Map()),
            u(this, "_pending", new Set()),
            u(this, "_flushHandler", new o.J_(32, () => this._flush()));
    }
}
let _ = new p();

function h(e) {
    r.useEffect(() => {
        null != e && "" !== e && _.request(e);
    }, [e]);
}

function m(e) {
    return h(e), (0, s.bG)([c.A], () => (null != e && "" !== e ? c.A.getApplication(e) : null), [e]);
}
