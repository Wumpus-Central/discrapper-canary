"use strict";
let r;
n.d(t, { A: () => T });
var i = n(311907),
    a = n(73153),
    s = n(927813),
    o = n(661191),
    l = n(605510);
let u = 4,
    c = 5,
    d = 14 * s.A.Millis.DAY,
    _ = Object.freeze([]),
    f = {},
    p = {};
function h(e) {
    let { messageId: t, channelId: n, attachments: r } = e,
        i = { messageId: t, channelId: n, attachments: r, reportSubmit: !1 },
        a = p[n] ?? _;
    (p[n] = [...a, i]), (f[t] = i);
}
function m(e) {
    let { messageId: t, channelId: n } = e,
        r = p[n];
    null != r &&
        ((p[n] = r.map((e) => (e.messageId === t ? { ...e, reportSubmit: !0 } : e))),
        (f[t] = { ...f[t], reportSubmit: !0 }));
}
function g() {
    A();
}
function E(e) {
    let { explicitContentScanVersion: t } = e;
    (r = t), A();
}
function A() {
    (f = {}), (p = {});
}
class I extends i.Ay.Store {
    static displayName = "FalsePositiveStore";
    getFpMessageInfo(e) {
        return f[e];
    }
    getChannelFpInfo(e) {
        return p[e] ?? _;
    }
    canSubmitFpReport(e) {
        let t = f[e];
        return null != t && !t.reportSubmit && o.default.age(t.messageId) < d;
    }
    get validContentScanVersion() {
        return (0, l.jV)("ExplicitMediaStore.validContentScanVersion") ? (r ?? c) : Math.min(r ?? u, u);
    }
}
let T = new I(a.h, {
    LOGOUT: g,
    CONNECTION_OPEN: E,
    MESSAGE_EXPLICIT_CONTENT_FP_CREATE: h,
    MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: m,
});
