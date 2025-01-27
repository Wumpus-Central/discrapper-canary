n.d(t, {
    If: function () {
        return c;
    },
    m$: function () {
        return s;
    }
}),
    n(47120);
var i = n(442837),
    r = n(372460),
    l = n(91896),
    a = n(699516);
function o(e, t) {
    let [n, i] = t,
        r = n.getPendingCount(),
        l = i.getPendingIncomingCount();
    return e ? r + l : r;
}
function s(e) {
    return o((0, r.r8)({ location: 'getIncomingFriendRequestCount' }), e);
}
function c() {
    let e = (0, r.wn)({ location: 'useIncomingFriendRequestCount' });
    return (0, i.e7)([a.Z, l.Z], () => o(e, [a.Z, l.Z]));
}
