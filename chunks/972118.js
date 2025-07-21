n.d(t, { Z: () => p });
var i = n(675478),
    r = n(914010),
    s = n(709054),
    a = n(915486),
    l = n(883904),
    o = n(428967),
    c = n(266454),
    d = n(605236),
    u = n(644916);
function m(e, t) {
    (0, l.pR)(t ? null : e);
}
function p(e, t) {
    if ((0, o.lg)(e)) {
        let t = (0, u.t)(e),
            { isDismissed: n } = (0, d.H4)(e);
        return {
            isDismissed: n,
            handleToggleDismissState: function () {
                (m(e, n), n ? (0, i.Z1)(e) : (0, d.Bn)(e, t));
            }
        };
    }
    if ((0, o.I0)(e)) {
        let { isDismissed: t } = (0, c.Ob)(e, s.default.fromTimestamp(Date.now()));
        return {
            isDismissed: t,
            handleToggleDismissState: function () {
                (m(e, t), t ? (0, i.Z1)(e) : (0, d.po)(e, s.default.fromTimestamp(Date.now() + d.wx)));
            }
        };
    }
    if ((0, o.OQ)(e)) {
        let { isDismissed: t } = (0, d.Fo)(e);
        return {
            isDismissed: t,
            handleToggleDismissState: function () {
                (m(e, t), t ? (0, i.Z1)(e) : (0, d.z2)(e));
            }
        };
    }
    if ((0, o.Vc)(e)) {
        let t = r.Z.getGuildId();
        if (null == t)
            return {
                isDismissed: !1,
                handleToggleDismissState: () => {}
            };
        let n = (0, d.XY)(e, t);
        return {
            isDismissed: n,
            handleToggleDismissState: function () {
                null != t && (m(e, n), n ? (0, d.ZF)(e, t) : (0, d.XM)(e, t));
            }
        };
    }
    if ((0, o.ms)(e)) {
        let t = r.Z.getGuildId();
        if (null == t)
            return {
                isDismissed: !1,
                handleToggleDismissState: () => {}
            };
        let n = (0, d.oK)(e, t);
        return {
            isDismissed: n,
            handleToggleDismissState: function () {
                null != t && (m(e, n), n ? (0, d.J0)(e, t) : (0, d.Ei)(e, t));
            }
        };
    } else {
        let n = (0, a.jl)(t, e);
        return {
            isDismissed: n,
            handleToggleDismissState: function () {
                (m(e, n), n ? (0, i.w9)(e) : (0, i.nm)(e));
            }
        };
    }
}
