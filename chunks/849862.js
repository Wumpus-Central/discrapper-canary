n.d(t, {
    If: () => c,
    m$: () => o
}),
    n(47120);
var i = n(442837),
    l = n(372460),
    a = n(91896),
    r = n(699516);
function s(e, t) {
    let [n, i] = t,
        l = n.getPendingCount(),
        a = i.getPendingIncomingCount();
    return e ? l + a : l;
}
function o(e) {
    return s((0, l.r8)({ location: 'getIncomingFriendRequestCount' }), e);
}
function c() {
    let e = (0, l.wn)({ location: 'useIncomingFriendRequestCount' });
    return (0, i.e7)([r.Z, a.Z], () => s(e, [r.Z, a.Z]));
}
