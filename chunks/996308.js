"use strict";
n.d(t, { Le: () => f, Ng: () => c, QZ: () => _, Zf: () => d, tN: () => p });
var r = n(129014),
    i = n(636401),
    s = n(474951),
    a = n(728458),
    o = n(92277),
    l = n(652215),
    u = n(613057);
function c() {
    r.default.connect();
}
function d() {
    r.default.disconnect();
}
function _(e, t) {
    if (!__OVERLAY__) throw new i.A({ errorCode: l.Lw6.UNKNOWN_ERROR }, "called from wrong app context");
    r.default.subscribe(l.ZE4.OVERLAY, { token: t }, (t) => e((0, o.$)(t)));
}
function f(e, t) {
    if (__OVERLAY__) throw new i.A({ errorCode: l.Lw6.UNKNOWN_ERROR }, "called from wrong app context");
    s.A.setCommandHandler(l.e$_.OVERLAY, {
        scope: u.LQ,
        handler(n) {
            let { args: r } = n;
            if (!t(r.token)) throw new i.A({ errorCode: l.Lw6.INVALID_TOKEN }, "Invalid RPC auth token provided");
            e((0, o.$)(r));
        },
    }),
        s.A.setEventHandler(l.ZE4.OVERLAY, {
            scope: u.LQ,
            handler(e) {
                let { args: n } = e;
                if (!t(n.token)) throw new i.A({ errorCode: l.Lw6.INVALID_TOKEN }, "Invalid RPC auth token provided");
            },
        });
}
function p(e) {
    if (__OVERLAY__) return r.default.request(l.e$_.OVERLAY, (0, o.g)(e));
    try {
        return s.A.dispatchToSubscriptions(l.ZE4.OVERLAY, {}, (0, o.g)(e)), Promise.resolve();
    } catch (i) {
        let t = e.type,
            n = [];
        t === l.kGV.DISPATCH && (n = e.payloads.map((e) => e.type));
        let r = Error(`Error dispatching overlay RPC: ${i.message}`);
        throw (
            (i.stack && (r.stack = i.stack),
            a.A.captureException(r, { tags: { source: "legacy-overlay" }, extra: { eventType: t, payloadTypes: n } }),
            r)
        );
    }
}
