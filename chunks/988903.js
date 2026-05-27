n.d(t, { Cm: () => S, $b: () => O, mf: () => h, h6: () => g });
var i = n(554146),
    l = n(367727),
    r = n(994500),
    s = n(174459),
    a = n(927813),
    c = n(240921);
let o = (0, c.Ay)({
    name: "2026-05-block-user-feedback",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var d = n(17928),
    u = n(228366);
let E = A();
function A() {
    return { ignoreTimestamps: {} };
}
class _ extends d.Ay.PersistedStore {
    static displayName = "IgnoreNoticeStore";
    static persistKey = "IgnoreNoticeStore";
    initialize(e) {
        let t = e?.ignoreTimestamps ?? {};
        E = { ...A(), ignoreTimestamps: t };
    }
    getState() {
        return E;
    }
    getIgnoreTimestamps() {
        return E.ignoreTimestamps;
    }
}
let T = new _(u.h, {
        RELATIONSHIP_IGNORE_USER_SUCCESS: function (e) {
            let { userId: t, timestamp: n } = e;
            E.ignoreTimestamps[t] = n;
        },
    }),
    I = (0, c.Ay)({
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
let m = 3 * a.A.Millis.DAY,
    C = a.A.Millis.WEEK,
    p = a.A.Millis.DAYS_30,
    S = () => {
        if (!o.getConfig({ location: "block_user_feedback_utils" }).enabled) return !1;
        let e = r.A.getSinces();
        return Object.keys(e).some((t) => {
            let n = Date.now() - Date.parse(e[t]);
            return r.A.isBlocked(t) && n > C && n < p;
        });
    },
    O = (e, t, n, i) => {
        s.default.track(R.HAw.BLOCK_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: n, skipped: i });
    },
    g = () => {
        let { enabled: e, shouldGetShorterIgnoreDuration: t } = I.getConfig({ location: "ignore_user_feedback_utils" });
        if (!e) return !1;
        let { isDismissed: n } = (0, l.FZ)(i.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: N.aH });
        if (n) return !1;
        let s = t ? m : C,
            a = T.getIgnoreTimestamps();
        return Object.keys(a).some((e) => {
            let t = Date.now() - Number(a[e]);
            return r.A.isIgnored(e) && t > s && t < p;
        });
    },
    h = (e, t, n, i) => {
        s.default.track(R.HAw.IGNORE_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: n, skipped: i });
    };
