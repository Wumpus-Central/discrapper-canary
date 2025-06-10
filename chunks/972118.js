n.d(t, { Z: () => c });
var i = n(675478),
    r = n(709054),
    s = n(915486),
    l = n(428967),
    a = n(605236),
    o = n(644916);
function c(e, t) {
    if ((0, l.lg)(e)) {
        let t = (0, o.t)(e),
            { isDismissed: n } = (0, a.H4)(e);
        return {
            isDismissed: n,
            handleToggleDismissState: function () {
                n ? (0, i.Z1)(e) : (0, a.Bn)(e, t);
            }
        };
    }
    if ((0, l.I0)(e)) {
        let { isDismissed: t } = (0, a.$J)(e, r.default.fromTimestamp(Date.now()));
        return {
            isDismissed: t,
            handleToggleDismissState: function () {
                t ? (0, i.Z1)(e) : (0, a.po)(e, r.default.fromTimestamp(Date.now() + a.wx));
            }
        };
    }
    if ((0, l.OQ)(e)) {
        let { isDismissed: t } = (0, a.Fo)(e);
        return {
            isDismissed: t,
            handleToggleDismissState: function () {
                t ? (0, i.Z1)(e) : (0, a.z2)(e);
            }
        };
    }
    {
        let n = (0, s.jl)(t, e);
        return {
            isDismissed: n,
            handleToggleDismissState: function () {
                n ? (0, i.w9)(e) : (0, i.nm)(e);
            }
        };
    }
}
