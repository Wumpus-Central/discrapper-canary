"use strict";
n.d(t, { Le: () => h, Ng: () => c, QZ: () => _, Zf: () => d, tN: () => f });
var i = n(129014),
    r = n(636401),
    s = n(289919),
    a = n(38405),
    o = n(92277),
    l = n(652215),
    u = n(613057);
function c() {
    i.default.connect();
}
function d() {
    i.default.disconnect();
}
function _(e, t) {
    if (!__OVERLAY__) throw new r.A({ errorCode: l.Lw6.UNKNOWN_ERROR }, "called from wrong app context");
    i.default.subscribe(l.ZE4.OVERLAY, { token: t }, (t) => e((0, o.$)(t)));
}
function h(e, t) {
    if (__OVERLAY__) throw new r.A({ errorCode: l.Lw6.UNKNOWN_ERROR }, "called from wrong app context");
    s.A.setCommandHandler(l.e$_.OVERLAY, {
        scope: u.LQ,
        handler(n) {
            let { args: i } = n;
            if (!t(i.token)) throw new r.A({ errorCode: l.Lw6.INVALID_TOKEN }, "Invalid RPC auth token provided");
            e((0, o.$)(i));
        },
    }),
        s.A.setEventHandler(l.ZE4.OVERLAY, {
            scope: u.LQ,
            handler(e) {
                let { args: n } = e;
                if (!t(n.token)) throw new r.A({ errorCode: l.Lw6.INVALID_TOKEN }, "Invalid RPC auth token provided");
            },
        });
}
function f(e) {
    if (__OVERLAY__) return i.default.request(l.e$_.OVERLAY, (0, o.g)(e));
    try {
        return s.A.dispatchToSubscriptions(l.ZE4.OVERLAY, {}, (0, o.g)(e)), Promise.resolve();
    } catch (r) {
        let t = e.type,
            n = [];
        t === l.kGV.DISPATCH && (n = e.payloads.map((e) => e.type));
        let i = Error(`Error dispatching overlay RPC: ${r.message}`);
        throw (
            (r.stack && (i.stack = r.stack),
            a.A.captureException(i, { tags: { source: "legacy-overlay" }, extra: { eventType: t, payloadTypes: n } }),
            i)
        );
    }
}
