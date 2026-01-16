n.d(t, {
    B: () => o,
    w: () => a,
});
var r = n(968843),
    i = n(862657),
    a = (function (e) {
        return (
            (e[(e.UNENROLLED = 0)] = "UNENROLLED"),
            (e[(e.ENROLLED = 1)] = "ENROLLED"),
            (e[(e.INCOMPLETE = 2)] = "INCOMPLETE"),
            (e[(e.COMPLETED = 3)] = "COMPLETED"),
            (e[(e.CLAIMED = 4)] = "CLAIMED"),
            (e[(e.EXPIRED = 5)] = "EXPIRED"),
            e
        );
    })({});
function o(e) {
    var t, n, a;
    let o = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        s = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        l = (null == (a = e.userStatus) ? void 0 : a.claimedAt) != null,
        c = (0, r.Rf)(e).percentComplete > 0;
    return (0, i.zi)(e) ? 5 : l ? 4 : o && s ? 3 : o && c ? 2 : +!!o;
}
