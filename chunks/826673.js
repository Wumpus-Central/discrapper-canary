n.d(t, { Dr: () => I, JZ: () => A, KO: () => S, dX: () => h, in: () => N, k8: () => u, u$: () => T });
var i = n(17928),
    a = n(594061),
    r = n(617617),
    s = n(967198),
    l = n(927813),
    o = n(935208),
    d = n(460288),
    c = n(256787),
    _ = n(367727),
    E = n(757792);
function u(e) {
    let {
        bypassNewUserCheck: t = !1,
        cooldownDurationMs: n = l.A.Millis.WEEK,
        guildId: i,
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!t && (0, E.P3)(e)) return !0;
    if ((0, c.L0)(e)) return (0, _.En)(e).isDismissed;
    {
        if ((0, c.IL)(e)) return T(e, o.default.fromTimestamp(Date.now())).isDismissed;
        if ((0, c.ki)(e)) return (0, _.FZ)(e, { cooldownDurationMs: n }).isDismissed;
        if ((0, c.ef)(e)) return (0, _.iC)(e, i);
        if ((0, c.XQ)(e)) return (0, _.D8)(e, i);
        if ((0, c.PN)(e)) return (0, _.D4)(e, i);
        let t = r.A.settings.userContent?.dismissedContents;
        return null != t && (0, d.c0)(t, e);
    }
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, i.bG)([r.A, s.A], () => u(e, t));
}
async function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    u(e, { bypassNewUserCheck: !0 }) || ((0, _.YV)(e, t), await (0, a.o_)(e), (0, _.X0)(e, t));
}
function T(e, t) {
    if ((0, E.P3)(e)) return { isDismissed: !0, lastDismissedSnowflakeId: null };
    let n = r.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedObjectId;
    return { isDismissed: null != n && 1 !== o.default.compare(t, n), lastDismissedSnowflakeId: n };
}
async function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    (0, _.YV)(e, n), await (0, _.wH)(e, t, 1), (0, _.X0)(e, n);
}
async function S(e, t, n) {
    let i = (0, _.Sx)(e, t);
    (0, _.YV)(e, n), await (0, _.gG)(e, t, i), (0, _.X0)(e, n);
}
async function N(e, t, n, i) {
    let a = (0, _.Sx)(e, n);
    (0, _.YV)(e, i), await (0, _.G4)(e, t, n, a), (0, _.X0)(e, i);
}
