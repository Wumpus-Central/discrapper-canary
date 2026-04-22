"use strict";
let r;
n.d(t, { A: () => E });
var i = n(311907),
    s = n(73153),
    a = n(927813),
    o = n(661191),
    l = n(605510);
let u = 14 * a.A.Millis.DAY,
    d = Object.freeze([]),
    c = {},
    _ = {};
class f extends i.Ay.Store {
    static displayName = "FalsePositiveStore";
    getFpMessageInfo(e) {
        return c[e];
    }
    getChannelFpInfo(e) {
        return _[e] ?? d;
    }
    canSubmitFpReport(e) {
        let t = c[e];
        return null != t && !t.reportSubmit && o.default.age(t.messageId) < u;
    }
    get validContentScanVersion() {
        return (0, l.jV)("ExplicitMediaStore.validContentScanVersion") ? (r ?? 5) : Math.min(r ?? 4, 4);
    }
}
let E = new f(s.h, {
    LOGOUT: function () {
        (c = {}), (_ = {});
    },
    CONNECTION_OPEN: function (e) {
        let { explicitContentScanVersion: t } = e;
        (r = t), (c = {}), (_ = {});
    },
    MESSAGE_EXPLICIT_CONTENT_FP_CREATE: function (e) {
        let { messageId: t, channelId: n, attachments: r } = e,
            i = { messageId: t, channelId: n, attachments: r, reportSubmit: !1 },
            s = _[n] ?? d;
        (_[n] = [...s, i]), (c[t] = i);
    },
    MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: function (e) {
        let { messageId: t, channelId: n } = e,
            r = _[n];
        null != r &&
            ((_[n] = r.map((e) => (e.messageId === t ? { ...e, reportSubmit: !0 } : e))),
            (c[t] = { ...c[t], reportSubmit: !0 }));
    },
});
