"use strict";
n.d(t, { Cm: () => S, $b: () => N, mf: () => O, h6: () => C });
var i = n(554146),
    r = n(367727),
    a = n(994500),
    s = n(174459),
    l = n(927813),
    o = n(240921);
let d = (0, o.Ay)({
    name: "2026-05-block-user-feedback",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var c = n(17928),
    u = n(228366);
let _ = E();
function E() {
    return { ignoreTimestamps: {} };
}
class A extends c.Ay.PersistedStore {
    static displayName = "IgnoreNoticeStore";
    static persistKey = "IgnoreNoticeStore";
    initialize(e) {
        let t = e?.ignoreTimestamps ?? {};
        _ = { ...E(), ignoreTimestamps: t };
    }
    getState() {
        return _;
    }
    getIgnoreTimestamps() {
        return _.ignoreTimestamps;
    }
}
let h = new A(u.h, {
        RELATIONSHIP_IGNORE_USER_SUCCESS: function (e) {
            let { userId: t, timestamp: n } = e;
            _.ignoreTimestamps[t] = n;
        },
    }),
    I = (0, o.Ay)({
        name: "2026-05-ignore-user-feedback",
        kind: "user",
        defaultConfig: { enabled: !1, shouldGetShorterIgnoreDuration: !1 },
        variations: {
            0: { enabled: !1, shouldGetShorterIgnoreDuration: !1 },
            1: { enabled: !0, shouldGetShorterIgnoreDuration: !1 },
            2: { enabled: !0, shouldGetShorterIgnoreDuration: !0 },
        },
    });
var f = n(14594),
    p = n(652215);
let T = 3 * l.A.Millis.DAY,
    m = l.A.Millis.WEEK,
    g = l.A.Millis.DAYS_30;
function S() {
    if (!d.getConfig({ location: "block_user_feedback_utils" }).enabled) return !1;
    let e = a.A.getSinces();
    return Object.keys(e).some((t) => {
        let n = Date.now() - Date.parse(e[t]);
        return a.A.isBlocked(t) && n > m && n < g;
    });
}
function N(e, t, n, i) {
    s.default.track(p.HAw.BLOCK_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: n, skipped: i });
}
function C() {
    let { enabled: e, shouldGetShorterIgnoreDuration: t } = I.getConfig({ location: "ignore_user_feedback_utils" });
    if (!e) return !1;
    let { isDismissed: n } = (0, r.FZ)(i.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: f.aH });
    if (n) return !1;
    let s = t ? T : m,
        l = h.getIgnoreTimestamps();
    return Object.keys(l).some((e) => {
        let t = Date.now() - Number(l[e]);
        return a.A.isIgnored(e) && t > s && t < g;
    });
}
function O(e, t, n, i) {
    s.default.track(p.HAw.IGNORE_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: n, skipped: i });
}
