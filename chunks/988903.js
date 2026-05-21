"use strict";
n.d(t, { Cm: () => S, $b: () => N, mf: () => C, h6: () => y });
var i = n(554146),
    r = n(367727),
    s = n(994500),
    a = n(174459),
    o = n(927813),
    l = n(240921);
let u = (0, l.Ay)({
    name: "2026-05-block-user-feedback",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var c = n(17928),
    d = n(228366);
let _ = f();
function f() {
    return { ignoreTimestamps: {} };
}
class h extends c.Ay.PersistedStore {
    static displayName = "IgnoreNoticeStore";
    static persistKey = "IgnoreNoticeStore";
    initialize(e) {
        let t = e?.ignoreTimestamps ?? {};
        _ = { ...f(), ignoreTimestamps: t };
    }
    getState() {
        return _;
    }
    getIgnoreTimestamps() {
        return _.ignoreTimestamps;
    }
}
let p = new h(d.h, {
        RELATIONSHIP_IGNORE_USER_SUCCESS: function (e) {
            let { userId: t, timestamp: n } = e;
            _.ignoreTimestamps[t] = n;
        },
    }),
    E = (0, l.Ay)({
        name: "2026-05-ignore-user-feedback",
        kind: "user",
        defaultConfig: { enabled: !1, shouldGetShorterIgnoreDuration: !1 },
        variations: {
            0: { enabled: !1, shouldGetShorterIgnoreDuration: !1 },
            1: { enabled: !0, shouldGetShorterIgnoreDuration: !1 },
            2: { enabled: !0, shouldGetShorterIgnoreDuration: !0 },
        },
    });
var m = n(14594),
    g = n(652215);
let A = 3 * o.A.Millis.DAY,
    I = o.A.Millis.WEEK,
    T = o.A.Millis.DAYS_30,
    S = () => {
        if (!u.getConfig({ location: "block_user_feedback_utils" }).enabled) return !1;
        let e = s.A.getSinces();
        return Object.keys(e).some((t) => {
            let n = Date.now() - Date.parse(e[t]);
            return s.A.isBlocked(t) && n > I && n < T;
        });
    },
    N = (e, t, n, i) => {
        a.default.track(g.HAw.BLOCK_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: n, skipped: i });
    },
    y = () => {
        let { enabled: e, shouldGetShorterIgnoreDuration: t } = E.getConfig({ location: "ignore_user_feedback_utils" });
        if (!e) return !1;
        let { isDismissed: n } = (0, r.FZ)(i.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: m.aH });
        if (n) return !1;
        let a = t ? A : I,
            o = p.getIgnoreTimestamps();
        return Object.keys(o).some((e) => {
            let t = Date.now() - Number(o[e]);
            return s.A.isIgnored(e) && t > a && t < T;
        });
    },
    C = (e, t, n, i) => {
        a.default.track(g.HAw.IGNORE_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: n, skipped: i });
    };
