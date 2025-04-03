n.d(t, {
    If: () => c,
    m$: () => s
}),
    n(47120);
var r = n(442837),
    i = n(372460),
    a = n(91896),
    l = n(699516);
function o(e, t) {
    let [n, r] = t,
        i = n.getPendingCount(),
        a = r.getPendingIncomingCount();
    return e ? i + a : i;
}
function s(e) {
    return o((0, i.r8)({ location: 'getIncomingFriendRequestCount' }), e);
}
function c() {
    let e = (0, i.wn)({ location: 'useIncomingFriendRequestCount' });
    return (0, r.e7)([l.Z, a.Z], () => o(e, [l.Z, a.Z]));
}
