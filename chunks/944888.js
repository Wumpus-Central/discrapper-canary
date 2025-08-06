n.d(t, {
    YB: () => c,
    ZP: () => l
});
var r = n(442837),
    i = n(271383),
    o = n(485386),
    a = n(430824),
    s = n(232062);
function l(e, t) {
    let n = (0, r.e7)([i.ZP, a.Z], () => {
        let n = u(e, t);
        return null != n && c(n);
    });
    return (0, s.W)(e, 'useIsUserServerBoosterForGuild') && n;
}
function c(e) {
    return null != e.tags && void 0 !== e.tags.premium_subscriber;
}
function u(e, t) {
    if (null == e || null == t) return;
    let n = i.ZP.getMember(e, t);
    if (null == n) return;
    let r = n.colorRoleId;
    if (null != r) return o.Z.getRole(e, r);
}
