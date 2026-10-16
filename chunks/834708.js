l.d(i, { d: () => a });
var n = l(17928),
    t = l(427358),
    u = l(280450),
    s = l(994500),
    r = l(474090),
    d = l(851746),
    c = l(103411);
function a(e) {
    let i = (0, c.m)(),
        l = (0, n.bG)([d.A], () => d.A.getReferralsRemaining()),
        a = (0, n.bG)([d.A], () => null != e && d.A.getSentUserIds().includes(e.id), [e]),
        A = (0, n.bG)([u.default], () => u.default.getId()),
        b = (0, n.bG)([s.A], () => null != e && s.A.isBlockedOrIgnored(e.id), [e]),
        g = (0, n.bG)(
            [t.A],
            () => {
                if (null == e) return !1;
                let i = t.A.getUserAffinity(e.id);
                return null != i && null != i.communicationRank && i.communicationRank <= 20;
            },
            [e],
        );
    return null != e && e.id !== A && !0 !== e.bot && !(0, r.ki)(e) && !b && !a && i && null != l && l > 0 && g;
}
