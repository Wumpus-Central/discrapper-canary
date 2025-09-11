n.d(t, { Z: () => y });
var r = n(442837),
    i = n(675478),
    a = n(914010),
    o = n(70956),
    s = n(709054),
    l = n(883904),
    c = n(428967),
    u = n(266454),
    d = n(605236),
    f = n(644916);
function _(e, t) {
    (0, l.pR)(t ? null : e);
}
function p(e, t) {
    let n = (0, f.t)(e),
        r = (0, d.mA)(e, {});
    return (_(e, t), t) ? ((0, i.Z1)(e), !1) : ((0, d.Bn)(e, n, r), !0);
}
function h(e, t) {
    let n = (0, d.mA)(e, {});
    return (_(e, t), t) ? ((0, i.Z1)(e), !1) : ((0, d.po)(e, s.default.fromTimestamp(Date.now() + d.wx), n), !0);
}
function m(e, t) {
    return (_(e, t), t) ? ((0, i.Z1)(e), !1) : ((0, d.z2)(e, (0, d.mA)(e, {})), !0);
}
function g(e, t) {
    return (_(e, t), t) ? ((0, i.w9)(e), !1) : ((0, i.nm)(e), !0);
}
function E(e, t, n) {
    if (null == t) return !1;
    let r = null != t ? (0, d.qN)(e, t) : 1;
    return (_(e, n), n) ? ((0, d.ZF)(e, t, r - 1), !1) : ((0, d.XM)(e, t, r), !0);
}
function b(e, t, n) {
    if (null == t) return !1;
    let r = null != t ? (0, d.qN)(e, t) : 1;
    return (_(e, n), n) ? ((0, d.J0)(e, t, r - 1), !1) : ((0, d.Ei)(e, t, r), !0);
}
function y(e) {
    let t = (0, r.e7)([a.Z], () => a.Z.getGuildId()),
        n = (0, u.Nj)(e, {
            cooldownDurationMs: o.Z.Millis.WEEK,
            guildId: t,
        });
    if ((0, c.lg)(e))
        return {
            isDismissed: n,
            handleToggleDismissState: () => p(e, n),
        };
    if ((0, c.I0)(e))
        return {
            isDismissed: n,
            handleToggleDismissState: () => h(e, n),
        };
    if ((0, c.OQ)(e))
        return {
            isDismissed: n,
            handleToggleDismissState: () => m(e, n),
        };
    if ((0, c.Vc)(e))
        return {
            isDismissed: n,
            handleToggleDismissState: () => E(e, t, n),
        };
    if ((0, c.ms)(e))
        return {
            isDismissed: n,
            handleToggleDismissState: () => b(e, t, n),
        };
    else
        return {
            isDismissed: n,
            handleToggleDismissState: () => g(e, n),
        };
}
