n.d(t, { Cm: () => P, $b: () => D, mf: () => p, h6: () => M });
var i = n(554146),
    l = n(367727),
    r = n(994500),
    s = n(174459),
    a = n(927813),
    E = n(240921);
let o = (0, E.Ay)({
    name: "2026-05-block-user-feedback",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var c = n(17928),
    _ = n(228366);
let u = A();
function A() {
    return { ignoreTimestamps: {} };
}
class T extends c.Ay.PersistedStore {
    static displayName = "IgnoreNoticeStore";
    static persistKey = "IgnoreNoticeStore";
    initialize(e) {
        let t = e?.ignoreTimestamps ?? {};
        u = { ...A(), ignoreTimestamps: t };
    }
    getState() {
        return u;
    }
    getIgnoreTimestamps() {
        return u.ignoreTimestamps;
    }
}
let d = new T(_.h, {
        RELATIONSHIP_IGNORE_USER_SUCCESS: function (e) {
            let { userId: t, timestamp: n } = e;
            u.ignoreTimestamps[t] = n;
        },
    }),
    I = (0, E.Ay)({
        name: "2026-05-ignore-user-feedback",
        kind: "user",
        defaultConfig: { enabled: !1, shouldGetShorterIgnoreDuration: !1 },
        variations: {
            0: { enabled: !1, shouldGetShorterIgnoreDuration: !1 },
            1: { enabled: !0, shouldGetShorterIgnoreDuration: !1 },
            2: { enabled: !0, shouldGetShorterIgnoreDuration: !0 },
        },
    });
var N = n(14594),
    R = n(652215);
let S = 3 * a.A.Millis.DAY,
    O = a.A.Millis.WEEK,
    C = a.A.Millis.DAYS_30,
    P = () => {
        if (!o.getConfig({ location: "block_user_feedback_utils" }).enabled) return !1;
        let e = r.A.getSinces();
        return Object.keys(e).some((t) => {
            let n = Date.now() - Date.parse(e[t]);
            return r.A.isBlocked(t) && n > O && n < C;
        });
    },
    D = (e, t, n, i) => {
        s.default.track(R.HAw.BLOCK_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: n, skipped: i });
    },
    M = () => {
        let { enabled: e, shouldGetShorterIgnoreDuration: t } = I.getConfig({ location: "ignore_user_feedback_utils" });
        if (!e) return !1;
        let { isDismissed: n } = (0, l.FZ)(i.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: N.aH });
        if (n) return !1;
        let s = t ? S : O,
            a = d.getIgnoreTimestamps();
        return Object.keys(a).some((e) => {
            let t = Date.now() - Number(a[e]);
            return r.A.isIgnored(e) && t > s && t < C;
        });
    },
    p = (e, t, n, i) => {
        s.default.track(R.HAw.IGNORE_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: n, skipped: i });
    };
