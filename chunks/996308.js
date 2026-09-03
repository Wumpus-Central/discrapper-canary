n.d(t, { Le: () => E, Ng: () => c, QZ: () => _, Zf: () => u, tN: () => A });
var i = n(129014),
    r = n(636401),
    a = n(289919),
    s = n(38405),
    l = n(92277),
    o = n(652215),
    d = n(613057);
function c() {
    i.default.connect();
}
function u() {
    i.default.disconnect();
}
function _(e, t) {
    if (!__OVERLAY__) throw new r.A({ errorCode: o.Lw6.UNKNOWN_ERROR }, "called from wrong app context");
    i.default.subscribe(o.ZE4.OVERLAY, { token: t }, (t) => e((0, l.$)(t)));
}
function E(e, t) {
    if (__OVERLAY__) throw new r.A({ errorCode: o.Lw6.UNKNOWN_ERROR }, "called from wrong app context");
    a.A.setCommandHandler(o.e$_.OVERLAY, {
        scope: d.LQ,
        handler(n) {
            let { args: i } = n;
            if (!t(i.token)) throw new r.A({ errorCode: o.Lw6.INVALID_TOKEN }, "Invalid RPC auth token provided");
            e((0, l.$)(i));
        },
    }),
        a.A.setEventHandler(o.ZE4.OVERLAY, {
            scope: d.LQ,
            handler(e) {
                let { args: n } = e;
                if (!t(n.token)) throw new r.A({ errorCode: o.Lw6.INVALID_TOKEN }, "Invalid RPC auth token provided");
            },
        });
}
function A(e) {
    if (__OVERLAY__) return i.default.request(o.e$_.OVERLAY, (0, l.g)(e));
    try {
        return a.A.dispatchToSubscriptions(o.ZE4.OVERLAY, {}, (0, l.g)(e)), Promise.resolve();
    } catch (r) {
        let t = e.type,
            n = [];
        t === o.kGV.DISPATCH && (n = e.payloads.map((e) => e.type));
        let i = Error(`Error dispatching overlay RPC: ${r.message}`);
        throw (
            (r.stack && (i.stack = r.stack),
            s.A.captureException(i, { tags: { source: "legacy-overlay" }, extra: { eventType: t, payloadTypes: n } }),
            i)
        );
    }
}
