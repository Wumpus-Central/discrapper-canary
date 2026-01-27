n.d(t, {
    P: () => s,
    U: () => a,
});
var r,
    i = n(890687),
    l = n(710969),
    a =
        (((r = {})[(r.UNENROLLED = 0)] = "UNENROLLED"),
        (r[(r.ENROLLED = 1)] = "ENROLLED"),
        (r[(r.INCOMPLETE = 2)] = "INCOMPLETE"),
        (r[(r.COMPLETED = 3)] = "COMPLETED"),
        (r[(r.CLAIMED = 4)] = "CLAIMED"),
        (r[(r.EXPIRED = 5)] = "EXPIRED"),
        r);

function s(e) {
    var t, n, r;
    let a = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        s = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        o = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        c = (0, i.fc)(e).percentComplete > 0;
    return (0, l.Ic)(e) ? 5 : o ? 4 : a && s ? 3 : a && c ? 2 : +!!a;
}
