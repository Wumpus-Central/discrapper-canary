"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(616356),
    s = n(961350),
    o = n(383501),
    l = n(310323),
    u = n(571044),
    c = n(338771);
class d extends l.A {
    _initialize() {
        super._initialize(), u.Ay.initializeIfNeeded();
    }
    platformShowStreamFull() {
        (0, i.mMO)(async () => {
            let { default: e } = await n.e("25894").then(n.bind(n, 389170));
            return (t) => (0, r.jsx)(e, { ...t });
        });
    }
    platformHandleStreamStart() {}
    platformHandleVoiceStateUpdate(e) {
        let { userId: t, sessionId: n } = e;
        if (t !== s.default.getId() || n !== s.default.getSessionId()) return;
        let r = a.A.getAllActiveStreams(),
            i = o.A.getChannelId();
        r.forEach((e) => {
            e.channelId !== i && (0, c.A)(e, !1);
        });
    }
}
let _ = new d();
