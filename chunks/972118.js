n.d(t, { Z: () => b });
var r = n(675478),
    i = n(914010),
    a = n(709054),
    o = n(915486),
    s = n(883904),
    l = n(428967),
    c = n(266454),
    u = n(605236),
    d = n(644916);
function f(e, t) {
    (0, s.pR)(t ? null : e);
}
function _(e) {
    let t = (0, d.t)(e),
        { isDismissed: n } = (0, u.H4)(e);
    function i() {
        f(e, n), n ? (0, r.Z1)(e) : (0, u.Bn)(e, t);
    }
    return {
        isDismissed: n,
        handleToggleDismissState: i,
    };
}
function p(e) {
    let { isDismissed: t } = (0, c.Ob)(e, a.default.fromTimestamp(Date.now()));
    function n() {
        f(e, t), t ? (0, r.Z1)(e) : (0, u.po)(e, a.default.fromTimestamp(Date.now() + u.wx));
    }
    return {
        isDismissed: t,
        handleToggleDismissState: n,
    };
}
function h(e) {
    let { isDismissed: t } = (0, u.Fo)(e);
    function n() {
        f(e, t), t ? (0, r.Z1)(e) : (0, u.z2)(e);
    }
    return {
        isDismissed: t,
        handleToggleDismissState: n,
    };
}
function m(e, t) {
    let n = (0, o.jl)(t, e);
    function i() {
        f(e, n), n ? (0, r.w9)(e) : (0, r.nm)(e);
    }
    return {
        isDismissed: n,
        handleToggleDismissState: i,
    };
}
function g(e) {
    let t = i.Z.getGuildId();
    if (null == t)
        return {
            isDismissed: !1,
            handleToggleDismissState: () => {},
        };
    let n = (0, u.XY)(e, t);
    function r() {
        null != t && (f(e, n), n ? (0, u.ZF)(e, t) : (0, u.XM)(e, t));
    }
    return {
        isDismissed: n,
        handleToggleDismissState: r,
    };
}
function E(e) {
    let t = i.Z.getGuildId();
    if (null == t)
        return {
            isDismissed: !1,
            handleToggleDismissState: () => {},
        };
    let n = (0, u.oK)(e, t);
    function r() {
        null != t && (f(e, n), n ? (0, u.J0)(e, t) : (0, u.Ei)(e, t));
    }
    return {
        isDismissed: n,
        handleToggleDismissState: r,
    };
}
function b(e, t) {
    if ((0, l.lg)(e)) return _(e);
    if ((0, l.I0)(e)) return p(e);
    if ((0, l.OQ)(e)) return h(e);
    if ((0, l.Vc)(e)) return g(e);
    if ((0, l.ms)(e)) return E(e);
    else return m(e, t);
}
