"use strict";
let i;
n.d(t, { A: () => A });
var r = n(17928),
    a = n(228366),
    s = n(927813),
    l = n(935208);
let o = (0, n(945810).mj)({
        name: "2025-09-sensitive-content-self-harm",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    d = 14 * s.A.Millis.DAY,
    c = Object.freeze([]),
    u = {},
    _ = {};
class E extends r.Ay.Store {
    static displayName = "FalsePositiveStore";
    getFpMessageInfo(e) {
        return u[e];
    }
    getChannelFpInfo(e) {
        return _[e] ?? c;
    }
    canSubmitFpReport(e) {
        let t = u[e];
        return null != t && !t.reportSubmit && l.default.age(t.messageId) < d;
    }
    get validContentScanVersion() {
        return o.getConfig({ location: "ExplicitMediaStore.validContentScanVersion" }).enabled
            ? (i ?? 5)
            : Math.min(i ?? 4, 4);
    }
}
let A = new E(a.h, {
    LOGOUT: function () {
        (u = {}), (_ = {});
    },
    CONNECTION_OPEN: function (e) {
        let { explicitContentScanVersion: t } = e;
        (i = t), (u = {}), (_ = {});
    },
    MESSAGE_EXPLICIT_CONTENT_FP_CREATE: function (e) {
        let { messageId: t, channelId: n, attachments: i } = e,
            r = { messageId: t, channelId: n, attachments: i, reportSubmit: !1 },
            a = _[n] ?? c;
        (_[n] = [...a, r]), (u[t] = r);
    },
    MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: function (e) {
        let { messageId: t, channelId: n } = e,
            i = _[n];
        null != i &&
            ((_[n] = i.map((e) => (e.messageId === t ? { ...e, reportSubmit: !0 } : e))),
            (u[t] = { ...u[t], reportSubmit: !0 }));
    },
});
