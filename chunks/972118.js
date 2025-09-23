n.d(t, { Z: () => x });
var a = n(647438),
    r = n(442837),
    i = n(675478),
    l = n(914010),
    s = n(70956),
    o = n(709054),
    c = n(883904),
    d = n(428967),
    u = n(266454),
    m = n(605236),
    h = n(644916);
function p(e, t) {
    (0, c.pR)(t ? null : e);
}
function x(e) {
    let t = (0, r.e7)([l.Z], () => l.Z.getGuildId()),
        n = (0, u.Nj)(e, {
            cooldownDurationMs: s.Z.Millis.WEEK,
            guildId: t,
        }),
        c = (0, a.useCallback)(() => {
            if ((0, d.lg)(e)) {
                let t = (0, h.t)(e),
                    a = (0, m.mA)(e, {});
                return (p(e, n), n) ? ((0, i.Z1)(e), !1) : ((0, m.Bn)(e, t, a), !0);
            }
            if ((0, d.I0)(e)) {
                let t = (0, m.mA)(e, {});
                return (p(e, n), n)
                    ? ((0, i.Z1)(e), !1)
                    : ((0, m.po)(e, o.default.fromTimestamp(Date.now() + m.wx), t), !0);
            }
            if ((0, d.OQ)(e)) return (p(e, n), n) ? ((0, i.Z1)(e), !1) : ((0, m.z2)(e, (0, m.mA)(e, {})), !0);
            if ((0, d.Vc)(e)) {
                if (null == t) return !1;
                let a = null != t ? (0, m.qN)(e, t) : 1;
                return (p(e, n), n) ? ((0, m.ZF)(e, t, a - 1), !1) : ((0, m.XM)(e, t, a), !0);
            }
            if (!(0, d.ms)(e)) return (p(e, n), n) ? ((0, i.w9)(e), !1) : ((0, i.nm)(e), !0);
            else {
                if (null == t) return !1;
                let a = null != t ? (0, m.qN)(e, t) : 1;
                return (p(e, n), n) ? ((0, m.J0)(e, t, a - 1), !1) : ((0, m.Ei)(e, t, a), !0);
            }
        }, [e, t, n]);
    return {
        isDismissed: n,
        handleToggleDismissState: c,
    };
}
