var i = n(855986),
    r = n(594061),
    a = n(617617),
    s = n(967198),
    l = n(927813),
    o = n(811091),
    d = n(460288),
    c = n(256787),
    u = n(543862),
    _ = n(68656);
function E(e) {
    let {
        bypassNewUserCheck: t = !1,
        cooldownDurationMs: n = l.A.Millis.WEEK,
        guildId: i,
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!t && (0, _.P3)(e)) return !0;
    if ((0, c.L0)(e)) return (0, u.En)(e).isDismissed;
    {
        if ((0, c.IL)(e)) return A(e, o.default.fromTimestamp(Date.now())).isDismissed;
        if ((0, c.ki)(e)) return (0, u.FZ)(e, { cooldownDurationMs: n }).isDismissed;
        if ((0, c.ef)(e)) return (0, u.iC)(e, i);
        if ((0, c.XQ)(e)) return (0, u.D8)(e, i);
        if ((0, c.PN)(e)) return (0, u.D4)(e, i);
        let t = a.A.settings.userContent?.dismissedContents;
        return null != t && (0, d.c0)(t, e);
    }
}
function A(e, t) {
    if ((0, _.P3)(e)) return { isDismissed: !0, lastDismissedSnowflakeId: null };
    let n = a.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedObjectId;
    return { isDismissed: null != n && 1 !== o.default.compare(t, n), lastDismissedSnowflakeId: n };
}
n.d(
    t,
    {},
    {
        Dr: async function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            E(e, { bypassNewUserCheck: !0 }) || ((0, u.YV)(e, t), await (0, r.o_)(e), (0, u.X0)(e, t));
        },
        HX: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return (0, i.bG)([a.A, s.A], () => E(e, t));
        },
        KO: async function (e, t, n) {
            let i = (0, u.Sx)(e, t);
            ((0, u.YV)(e, n), await (0, u.gG)(e, t, i), (0, u.X0)(e, n));
        },
        dX: async function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            ((0, u.YV)(e, n), await (0, u.wH)(e, t, 1), (0, u.X0)(e, n));
        },
        in: async function (e, t, n, i) {
            let r = (0, u.Sx)(e, n);
            ((0, u.YV)(e, { ...i, snowflakeId: t }), await (0, u.G4)(e, t, n, r), (0, u.X0)(e, i));
        },
        k8: E,
        u$: A,
    },
);
