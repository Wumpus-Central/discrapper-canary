n.d(t, { Dr: () => A, JZ: () => I, KO: () => N, dX: () => S, in: () => O, k8: () => u, u$: () => T });
var i = n(17928),
    r = n(594061),
    a = n(617617),
    s = n(967198),
    _ = n(927813),
    l = n(935208),
    o = n(460288),
    E = n(256787),
    d = n(367727),
    c = n(757792);
function u(e) {
    let {
        bypassNewUserCheck: t = !1,
        cooldownDurationMs: n = _.A.Millis.WEEK,
        guildId: i,
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!t && (0, c.P3)(e)) return !0;
    if ((0, E.L0)(e)) return (0, d.En)(e).isDismissed;
    {
        if ((0, E.IL)(e)) return T(e, l.default.fromTimestamp(Date.now())).isDismissed;
        if ((0, E.ki)(e)) return (0, d.FZ)(e, { cooldownDurationMs: n }).isDismissed;
        if ((0, E.ef)(e)) return (0, d.iC)(e, i);
        if ((0, E.XQ)(e)) return (0, d.D8)(e, i);
        if ((0, E.PN)(e)) return (0, d.D4)(e, i);
        let t = a.A.settings.userContent?.dismissedContents;
        return null != t && (0, o.c0)(t, e);
    }
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, i.bG)([a.A, s.A], () => u(e, t));
}
async function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    u(e, { bypassNewUserCheck: !0 }) || ((0, d.YV)(e, t), await (0, r.o_)(e), (0, d.X0)(e, t));
}
function T(e, t) {
    if ((0, c.P3)(e)) return { isDismissed: !0, lastDismissedSnowflakeId: null };
    let n = a.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedObjectId;
    return { isDismissed: null != n && 1 !== l.default.compare(t, n), lastDismissedSnowflakeId: n };
}
async function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    (0, d.YV)(e, n), await (0, d.wH)(e, t, 1), (0, d.X0)(e, n);
}
async function N(e, t, n) {
    let i = (0, d.Sx)(e, t);
    (0, d.YV)(e, n), await (0, d.gG)(e, t, i), (0, d.X0)(e, n);
}
async function O(e, t, n, i) {
    let r = (0, d.Sx)(e, n);
    (0, d.YV)(e, i), await (0, d.G4)(e, t, n, r), (0, d.X0)(e, i);
}
