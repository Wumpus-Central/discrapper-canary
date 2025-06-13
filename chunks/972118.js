n.d(t, { Z: () => u });
var i = n(675478),
    r = n(709054),
    s = n(915486),
    l = n(883904),
    a = n(428967),
    o = n(605236),
    c = n(644916);
function d(e, t) {
    (0, l.pR)(t ? null : e);
}
function u(e, t) {
    if ((0, a.lg)(e)) {
        let t = (0, c.t)(e),
            { isDismissed: n } = (0, o.H4)(e);
        return {
            isDismissed: n,
            handleToggleDismissState: function () {
                d(e, n), n ? (0, i.Z1)(e) : (0, o.Bn)(e, t);
            }
        };
    }
    if ((0, a.I0)(e)) {
        let { isDismissed: t } = (0, o.$J)(e, r.default.fromTimestamp(Date.now()));
        return {
            isDismissed: t,
            handleToggleDismissState: function () {
                d(e, t), t ? (0, i.Z1)(e) : (0, o.po)(e, r.default.fromTimestamp(Date.now() + o.wx));
            }
        };
    }
    if ((0, a.OQ)(e)) {
        let { isDismissed: t } = (0, o.Fo)(e);
        return {
            isDismissed: t,
            handleToggleDismissState: function () {
                d(e, t), t ? (0, i.Z1)(e) : (0, o.z2)(e);
            }
        };
    }
    {
        let n = (0, s.jl)(t, e);
        return {
            isDismissed: n,
            handleToggleDismissState: function () {
                d(e, n), n ? (0, i.w9)(e) : (0, i.nm)(e);
            }
        };
    }
}
