n.d(t, { x: () => c });
var r = n(675478),
    i = n(709054),
    s = n(915486),
    a = n(428967),
    l = n(605236),
    o = n(644916);
function c(e, t) {
    if (-1 !== a.kg.indexOf(e)) {
        let t = (0, o.t)(e),
            { isDismissed: n, lastDismissedVersion: i } = (0, l.H4)(e);
        return {
            isDismissed: n,
            handleToggleDismissState: function () {
                n ? (0, r.Z1)(e) : (0, r.Bn)(e, t);
            },
            recurringDismissibleContentInfo: {
                lastDismissedVersion: null != i ? i : void 0,
                lastDismissedAtMs: void 0
            }
        };
    }
    if (-1 !== a.Z9.indexOf(e)) {
        var n = i.default.fromTimestamp(Date.now());
        let { isDismissed: t, lastDismissedSnowflakeId: s } = (0, l.$J)(e, n);
        return {
            isDismissed: t,
            handleToggleDismissState: function () {
                t ? (0, r.Z1)(e) : (0, r.po)(e, n);
            },
            recurringDismissibleContentInfo: {
                lastDismissedVersion: void 0,
                lastDismissedAtMs: void 0,
                lastDismissedSnowflakeId: null != s ? s : void 0
            }
        };
    }
    if (-1 !== a.NK.indexOf(e)) {
        let { isDismissed: t, lastDismissedAtMs: n } = (0, l.Fo)(e);
        return {
            isDismissed: t,
            handleToggleDismissState: function () {
                t ? (0, r.Z1)(e) : (0, r.z2)(e);
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
                n ? (0, r.w9)(e) : (0, r.nm)(e);
            },
            recurringDismissibleContentInfo: null
        };
    }
}
