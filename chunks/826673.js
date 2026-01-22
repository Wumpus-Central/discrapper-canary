n.d(t, {
    Dr: () => h,
    JZ: () => _,
    dX: () => g,
    in: () => E,
    k8: () => p,
    u$: () => m,
});
var r = n(311907),
    i = n(594061),
    a = n(617617),
    s = n(967198),
    o = n(927813),
    l = n(661191),
    c = n(460288),
    u = n(256787),
    d = n(367727),
    f = n(757792);

function p(e) {
    let {
        bypassNewUserCheck: t = !1,
        cooldownDurationMs: n = o.A.Millis.WEEK,
        guildId: r,
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!t && (0, f.P3)(e)) return !0;
    if ((0, u.L0)(e)) return (0, d.En)(e).isDismissed;
    {
        var i;
        if ((0, u.IL)(e)) return m(e, l.default.fromTimestamp(Date.now())).isDismissed;
        if ((0, u.ki)(e))
            return (0, d.FZ)(e, {
                cooldownDurationMs: n,
            }).isDismissed;
        if ((0, u.ef)(e)) return (0, d.iC)(e, r);
        if ((0, u.XQ)(e)) return (0, d.D8)(e, r);
        if ((0, u.PN)(e)) return (0, d.D4)(e, r);
        let t = null == (i = a.A.settings.userContent) ? void 0 : i.dismissedContents;
        return null != t && (0, c.c0)(t, e);
    }
}

function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, r.bG)([a.A, s.A], () => p(e, t));
}
async function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    p(e, {
        bypassNewUserCheck: !0,
    }) || ((0, d.YV)(e, t), await (0, i.o_)(e), (0, d.X0)(e, t));
}

function m(e, t) {
    var n, r;
    if ((0, f.P3)(e))
        return {
            isDismissed: !0,
            lastDismissedSnowflakeId: null,
        };
    let i =
        null == (r = a.A.settings.userContent) || null == (n = r.recurringDismissibleContentStates[e])
            ? void 0
            : n.lastDismissedObjectId;
    return {
        isDismissed: null != i && 1 !== l.default.compare(t, i),
        lastDismissedSnowflakeId: i,
    };
}
async function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    (0, d.YV)(e, n), await (0, d.wH)(e, t, 1), (0, d.X0)(e, n);
}
async function E(e, t, n, r) {
    let i = (0, d.Sx)(e, n);
    (0, d.YV)(e, r), await (0, d.G4)(e, t, n, i), (0, d.X0)(e, r);
}
