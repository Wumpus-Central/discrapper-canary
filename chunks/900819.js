"use strict";
let r;
n.d(t, { A: () => p });
var i = n(311907),
    s = n(73153),
    a = n(927813),
    o = n(661191),
    l = n(605510);
let u = 14 * a.A.Millis.DAY,
    c = Object.freeze([]),
    d = {},
    _ = {};
class f extends i.Ay.Store {
    static displayName = "FalsePositiveStore";
    getFpMessageInfo(e) {
        return d[e];
    }
    getChannelFpInfo(e) {
        return _[e] ?? c;
    }
    canSubmitFpReport(e) {
        let t = d[e];
        return null != t && !t.reportSubmit && o.default.age(t.messageId) < u;
    }
    get validContentScanVersion() {
        return (0, l.jV)("ExplicitMediaStore.validContentScanVersion") ? (r ?? 5) : Math.min(r ?? 4, 4);
    }
}
let p = new f(s.h, {
    LOGOUT: function () {
        (d = {}), (_ = {});
    },
    CONNECTION_OPEN: function (e) {
        let { explicitContentScanVersion: t } = e;
        (r = t), (d = {}), (_ = {});
    },
    MESSAGE_EXPLICIT_CONTENT_FP_CREATE: function (e) {
        let { messageId: t, channelId: n, attachments: r } = e,
            i = { messageId: t, channelId: n, attachments: r, reportSubmit: !1 },
            s = _[n] ?? c;
        (_[n] = [...s, i]), (d[t] = i);
    },
    MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: function (e) {
        let { messageId: t, channelId: n } = e,
            r = _[n];
        null != r &&
            ((_[n] = r.map((e) => (e.messageId === t ? { ...e, reportSubmit: !0 } : e))),
            (d[t] = { ...d[t], reportSubmit: !0 }));
    },
});
