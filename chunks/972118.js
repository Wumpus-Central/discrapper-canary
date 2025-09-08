n.d(t, { Z: () => b });
var r = n(675478),
    i = n(914010),
    a = n(70956),
    o = n(709054),
    s = n(883904),
    l = n(428967),
    c = n(266454),
    u = n(605236),
    d = n(644916);
function f(e, t) {
    (0, s.pR)(t ? null : e);
}
function _(e) {
    let t = (0, d.t)(e);
    function n() {
        return (0, u.H4)(e).isDismissed;
    }
    function i() {
        let i = n();
        return (f(e, i), i) ? ((0, r.Z1)(e), !1) : ((0, u.Bn)(e, t), !0);
    }
    return {
        isDismissed: n(),
        handleToggleDismissState: i,
    };
}
function p(e) {
    function t() {
        return (0, c.Ob)(e, o.default.fromTimestamp(Date.now())).isDismissed;
    }
    function n() {
        let n = t();
        return (f(e, n), n) ? ((0, r.Z1)(e), !1) : ((0, u.po)(e, o.default.fromTimestamp(Date.now() + u.wx)), !0);
    }
    return {
        isDismissed: t(),
        handleToggleDismissState: n,
    };
}
function h(e) {
    function t() {
        return (0, u.Fo)(e, { cooldownDurationMs: a.Z.Millis.WEEK }).isDismissed;
    }
    function n() {
        let n = t();
        return (f(e, n), n) ? ((0, r.Z1)(e), !1) : ((0, u.z2)(e), !0);
    }
    return {
        isDismissed: t(),
        handleToggleDismissState: n,
    };
}
function m(e) {
    function t() {
        return (0, c.zu)(e);
    }
    function n() {
        let n = t();
        return (f(e, n), n) ? ((0, r.w9)(e), !1) : ((0, r.nm)(e), !0);
    }
    return {
        isDismissed: t(),
        handleToggleDismissState: n,
    };
}
function g(e) {
    let t = i.Z.getGuildId();
    function n() {
        return null != t && (0, u.XY)(e, t);
    }
    function r() {
        if (null == t) return !1;
        let r = n();
        return (f(e, r), r) ? ((0, u.ZF)(e, t), !1) : ((0, u.XM)(e, t), !0);
    }
    return {
        isDismissed: n(),
        handleToggleDismissState: r,
    };
}
function E(e) {
    let t = i.Z.getGuildId();
    function n() {
        return null != t && (0, u.oK)(e, t);
    }
    function r() {
        if (null == t) return !1;
        let r = n();
        return (f(e, r), r) ? ((0, u.J0)(e, t), !1) : ((0, u.Ei)(e, t), !0);
    }
    return {
        isDismissed: n(),
        handleToggleDismissState: r,
    };
}
function b(e) {
    if ((0, l.lg)(e)) return _(e);
    if ((0, l.I0)(e)) return p(e);
    if ((0, l.OQ)(e)) return h(e);
    if ((0, l.Vc)(e)) return g(e);
    if ((0, l.ms)(e)) return E(e);
    else return m(e);
}
