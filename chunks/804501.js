n.d(t, { x: () => c });
var i = n(675478),
    r = n(709054),
    s = n(915486),
    l = n(428967),
    a = n(605236),
    o = n(644916);
function c(e, t) {
    if (-1 !== l.kg.indexOf(e)) {
        let t = (0, o.t)(e),
            { isDismissed: n, lastDismissedVersion: r } = (0, a.H4)(e);
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
    }
    if (-1 !== l.Z9.indexOf(e)) {
        var n = r.default.fromTimestamp(Date.now());
        let { isDismissed: t, lastDismissedSnowflakeId: s } = (0, a.$J)(e, n);
        return {
            isDismissed: t,
            handleToggleDismissState: function () {
                t ? (0, i.Z1)(e) : (0, i.po)(e, n);
            },
            recurringDismissibleContentInfo: {
                lastDismissedVersion: void 0,
                lastDismissedAtMs: void 0,
                lastDismissedSnowflakeId: null != s ? s : void 0
            }
        };
    }
    if (-1 !== l.NK.indexOf(e)) {
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
    }
    {
        let n = (0, s.jl)(t, e);
        return {
            isDismissed: n,
            handleToggleDismissState: function () {
                n ? (0, i.w9)(e) : (0, i.nm)(e);
            },
            recurringDismissibleContentInfo: null
        };
    }
}
