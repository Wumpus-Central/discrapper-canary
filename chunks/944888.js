n.d(t, {
    YB: () => l,
    ZP: () => s
});
var r = n(442837),
    i = n(271383),
    a = n(430824),
    o = n(232062);
function s(e, t) {
    let n = (0, r.e7)([i.ZP, a.Z], () => {
        let n = c(e, t);
        return null != n && l(n);
    });
    return (0, o.W)(e, 'useIsUserServerBoosterForGuild') && n;
}
function l(e) {
    return null != e.tags && void 0 !== e.tags.premium_subscriber;
}
function c(e, t) {
    if (null == e || null == t) return null;
    let n = i.ZP.getMember(e, t);
    if (null == n) return null;
    let r = a.Z.getRoles(e),
        o = n.colorRoleId;
    return null == o ? null : r[o];
}
