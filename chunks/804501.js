n.d(t, {
    x: function () {
        return o;
    }
});
var i = n(675478),
    r = n(915486),
    s = n(428967),
    a = n(605236),
    l = n(644916);
function o(e, t) {
    if (-1 !== s.k.indexOf(e)) {
        let t = (0, l.t)(e);
        return (function (e, t) {
            let { isDismissed: n, lastDismissedVersion: r } = (0, a.H4)(e);
            return {
                isDismissed: n,
                handleToggleDismissState: function () {
                    n ? (0, i.Z1)(e) : (0, i.Bn)(e, t);
                },
                recurringDismissibleContentInfo: {
                    lastDismissedVersion: null != r ? r : void 0,
                    lastDismissedAtMs: void 0
                }
            };
        })(e, t);
    }
    if (-1 !== s.N.indexOf(e))
        return (function (e) {
            let { isDismissed: t, lastDismissedAtMs: n } = (0, a.Fo)(e);
            return {
                isDismissed: t,
                handleToggleDismissState: function () {
                    t ? (0, i.Z1)(e) : (0, i.z2)(e);
                },
                recurringDismissibleContentInfo: {
                    lastDismissedVersion: void 0,
                    lastDismissedAtMs: null != n ? n : void 0
                }
            };
        })(e);
    return (function (e, t) {
        let n = (0, r.jl)(t, e);
        return {
            isDismissed: n,
            handleToggleDismissState: function () {
                n ? (0, i.w9)(e) : (0, i.nm)(e);
            },
            recurringDismissibleContentInfo: null
        };
    })(e, t);
}
