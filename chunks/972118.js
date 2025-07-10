n.d(t, { Z: () => m });
var i = n(675478),
    r = n(709054),
    s = n(915486),
    a = n(883904),
    l = n(428967),
    o = n(266454),
    c = n(605236),
    d = n(644916);
function u(e, t) {
    (0, a.pR)(t ? null : e);
}
function m(e, t) {
    if ((0, l.lg)(e)) {
        let t = (0, d.t)(e),
            { isDismissed: n } = (0, c.H4)(e);
        return {
            isDismissed: n,
            handleToggleDismissState: function () {
                (u(e, n), n ? (0, i.Z1)(e) : (0, c.Bn)(e, t));
            }
        };
    }
    if ((0, l.I0)(e)) {
        let { isDismissed: t } = (0, o.Ob)(e, r.default.fromTimestamp(Date.now()));
        return {
            isDismissed: t,
            handleToggleDismissState: function () {
                (u(e, t), t ? (0, i.Z1)(e) : (0, c.po)(e, r.default.fromTimestamp(Date.now() + c.wx)));
            }
        };
    }
    if ((0, l.OQ)(e)) {
        let { isDismissed: t } = (0, c.Fo)(e);
        return {
            isDismissed: t,
            handleToggleDismissState: function () {
                (u(e, t), t ? (0, i.Z1)(e) : (0, c.z2)(e));
            }
        };
    }
    {
        let n = (0, s.jl)(t, e);
        return {
            isDismissed: n,
            handleToggleDismissState: function () {
                (u(e, n), n ? (0, i.w9)(e) : (0, i.nm)(e));
            }
        };
    }
}
