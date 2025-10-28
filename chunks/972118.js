n.d(t, { Z: () => x });
var a = n(647438),
    r = n(442837),
    l = n(675478),
    i = n(914010),
    o = n(70956),
    s = n(709054),
    c = n(883904),
    d = n(428967),
    u = n(266454),
    m = n(605236),
    p = n(644916);
function h(e, t) {
    (0, c.pR)(t ? null : e);
}
function x(e) {
    let t = (0, r.e7)([i.Z], () => i.Z.getGuildId()),
        n = (0, u.Nj)(e, {
            cooldownDurationMs: o.Z.Millis.WEEK,
            guildId: t,
        }),
        c = (0, a.useCallback)(() => {
            if ((0, d.lg)(e)) {
                let t = (0, p.t)(e),
                    a = (0, m.mA)(e, {});
                return (h(e, n), n) ? ((0, l.Z1)(e), !1) : ((0, m.Bn)(e, t, a), !0);
            }
            if ((0, d.I0)(e)) {
                let t = (0, m.mA)(e, {});
                return (h(e, n), n)
                    ? ((0, l.Z1)(e), !1)
                    : ((0, m.po)(e, s.default.fromTimestamp(Date.now() + m.wx), t), !0);
            }
            if ((0, d.OQ)(e)) return (h(e, n), n) ? ((0, l.Z1)(e), !1) : ((0, m.z2)(e, (0, m.mA)(e, {})), !0);
            if ((0, d.Vc)(e)) {
                if (null == t) return !1;
                let a = null != t ? (0, m.qN)(e, t) : 1;
                return (h(e, n), n) ? ((0, m.ZF)(e, t, a - 1), !1) : ((0, m.XM)(e, t, a), !0);
            }
            if (!(0, d.ms)(e)) return (h(e, n), n) ? ((0, l.w9)(e), !1) : ((0, l.nm)(e), !0);
            else {
                if (null == t) return !1;
                let a = null != t ? (0, m.qN)(e, t) : 1;
                return (h(e, n), n) ? ((0, m.J0)(e, t, a - 1), !1) : ((0, m.Ei)(e, t, a), !0);
            }
        }, [e, t, n]);
    return {
        isDismissed: n,
        handleToggleDismissState: c,
    };
}
