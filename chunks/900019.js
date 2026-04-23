"use strict";
let i;
n.d(t, { A: () => h });
var r = n(17928),
    s = n(228366),
    a = n(927813),
    o = n(935208);
let l = (0, n(945810).mj)({
        name: "2025-09-sensitive-content-self-harm",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    d = 14 * a.A.Millis.DAY,
    _ = Object.freeze([]),
    u = {},
    c = {};
class E extends r.Ay.Store {
    static displayName = "FalsePositiveStore";
    getFpMessageInfo(e) {
        return u[e];
    }
    getChannelFpInfo(e) {
        return c[e] ?? _;
    }
    canSubmitFpReport(e) {
        let t = u[e];
        return null != t && !t.reportSubmit && o.default.age(t.messageId) < d;
    }
    get validContentScanVersion() {
        return l.getConfig({ location: "ExplicitMediaStore.validContentScanVersion" }).enabled
            ? (i ?? 5)
            : Math.min(i ?? 4, 4);
    }
}
let h = new E(s.h, {
    LOGOUT: function () {
        (u = {}), (c = {});
    },
    CONNECTION_OPEN: function (e) {
        let { explicitContentScanVersion: t } = e;
        (i = t), (u = {}), (c = {});
    },
    MESSAGE_EXPLICIT_CONTENT_FP_CREATE: function (e) {
        let { messageId: t, channelId: n, attachments: i } = e,
            r = { messageId: t, channelId: n, attachments: i, reportSubmit: !1 },
            s = c[n] ?? _;
        (c[n] = [...s, r]), (u[t] = r);
    },
    MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: function (e) {
        let { messageId: t, channelId: n } = e,
            i = c[n];
        null != i &&
            ((c[n] = i.map((e) => (e.messageId === t ? { ...e, reportSubmit: !0 } : e))),
            (u[t] = { ...u[t], reportSubmit: !0 }));
    },
});
