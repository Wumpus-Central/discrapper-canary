"use strict";
n.d(t, { Dr: () => p, JZ: () => h, KO: () => A, dX: () => E, in: () => I, k8: () => f, u$: () => g });
var r = n(311907),
    i = n(594061),
    a = n(617617),
    s = n(967198),
    o = n(927813),
    l = n(661191),
    u = n(460288),
    c = n(256787),
    d = n(367727),
    _ = n(757792);
function f(e) {
    let {
        bypassNewUserCheck: t = !1,
        cooldownDurationMs: n = o.A.Millis.WEEK,
        guildId: r,
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!t && (0, _.P3)(e)) return !0;
    if ((0, c.L0)(e)) return (0, d.En)(e).isDismissed;
    {
        if ((0, c.IL)(e)) return g(e, l.default.fromTimestamp(Date.now())).isDismissed;
        if ((0, c.ki)(e)) return (0, d.FZ)(e, { cooldownDurationMs: n }).isDismissed;
        if ((0, c.ef)(e)) return (0, d.iC)(e, r);
        if ((0, c.XQ)(e)) return (0, d.D8)(e, r);
        if ((0, c.PN)(e)) return (0, d.D4)(e, r);
        let t = a.A.settings.userContent?.dismissedContents;
        return null != t && (0, u.c0)(t, e);
    }
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, r.bG)([a.A, s.A], () => f(e, t));
}
async function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    f(e, { bypassNewUserCheck: !0 }) || ((0, d.YV)(e, t), await (0, i.o_)(e), (0, d.X0)(e, t));
}
function g(e, t) {
    if ((0, _.P3)(e)) return { isDismissed: !0, lastDismissedSnowflakeId: null };
    let n = a.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedObjectId;
    return { isDismissed: null != n && 1 !== l.default.compare(t, n), lastDismissedSnowflakeId: n };
}
async function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    (0, d.YV)(e, n), await (0, d.wH)(e, t, 1), (0, d.X0)(e, n);
}
async function A(e, t, n) {
    let r = (0, d.Sx)(e, t);
    (0, d.YV)(e, n), await (0, d.gG)(e, t, r), (0, d.X0)(e, n);
}
async function I(e, t, n, r) {
    let i = (0, d.Sx)(e, n);
    (0, d.YV)(e, r), await (0, d.G4)(e, t, n, i), (0, d.X0)(e, r);
}
