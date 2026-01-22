n.d(t, {
    P: () => s,
    U: () => a,
});
var r = n(890687),
    i = n(710969),
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
function s(e) {
    var t, n, a;
    let s = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        o = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        l = (null == (a = e.userStatus) ? void 0 : a.claimedAt) != null,
        c = (0, r.fc)(e).percentComplete > 0;
    return (0, i.Ic)(e) ? 5 : l ? 4 : s && o ? 3 : s && c ? 2 : +!!s;
}
