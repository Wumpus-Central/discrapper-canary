n.d(t, { P: () => s, U: () => r });
var i,
    l = n(890687),
    a = n(710969),
    r =
        (((i = {})[(i.UNENROLLED = 0)] = "UNENROLLED"),
        (i[(i.ENROLLED = 1)] = "ENROLLED"),
        (i[(i.INCOMPLETE = 2)] = "INCOMPLETE"),
        (i[(i.COMPLETED = 3)] = "COMPLETED"),
        (i[(i.CLAIMED = 4)] = "CLAIMED"),
        (i[(i.EXPIRED = 5)] = "EXPIRED"),
        i);
function s(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        i = e.userStatus?.claimedAt != null,
        r = (0, l.fc)(e).percentComplete > 0;
    return (0, a.Ic)(e) ? 5 : i ? 4 : t && n ? 3 : t && r ? 2 : +!!t;
}
