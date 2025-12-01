n.d(t, { Z: () => O });
var r = n(473749),
    i = n(442837),
    a = n(675478),
    o = n(914010),
    s = n(70956),
    l = n(709054),
    c = n(883904),
    u = n(428967),
    d = n(266454),
    f = n(605236),
    p = n(644916);
function _(e, t) {
    (0, c.pR)(t ? null : e);
}
function m(e, t) {
    let n = (0, p.t)(e),
        r = (0, f.mA)(e, {});
    return (_(e, t), t) ? ((0, a.Z1)(e), !1) : ((0, f.Bn)(e, n, r), !0);
}
function h(e, t) {
    let n = (0, f.mA)(e, {});
    return (_(e, t), t) ? ((0, a.Z1)(e), !1) : ((0, f.po)(e, l.default.fromTimestamp(Date.now() + f.wx), n), !0);
}
function g(e, t) {
    return (_(e, t), t) ? ((0, a.Z1)(e), !1) : ((0, f.z2)(e, (0, f.mA)(e, {})), !0);
}
function E(e, t) {
    return (_(e, t), t) ? ((0, a.w9)(e), !1) : ((0, a.nm)(e), !0);
}
function b(e, t, n) {
    if (null == t) return !1;
    let r = null != t ? (0, f.qN)(e, t) : 1;
    return (_(e, n), n) ? ((0, f.ZF)(e, t, r - 1), !1) : ((0, f.XM)(e, t, r), !0);
}
function y(e, t, n) {
    if (null == t) return !1;
    let r = null != t ? (0, f.qN)(e, t) : 1;
    return (_(e, n), n) ? ((0, f.J0)(e, t, r - 1), !1) : ((0, f.Ei)(e, t, r), !0);
}
function O(e) {
    let t = (0, i.e7)([o.Z], () => o.Z.getGuildId()),
        n = (0, d.Nj)(e, {
            cooldownDurationMs: s.Z.Millis.WEEK,
            guildId: t,
        }),
        a = (0, r.useCallback)(() => {
            if ((0, u.lg)(e)) return m(e, n);
            if ((0, u.I0)(e)) return h(e, n);
            if ((0, u.OQ)(e)) return g(e, n);
            if ((0, u.Vc)(e)) return b(e, t, n);
            if ((0, u.ms)(e)) return y(e, t, n);
            else return E(e, n);
        }, [e, t, n]);
    return {
        isDismissed: n,
        handleToggleDismissState: a,
    };
}
