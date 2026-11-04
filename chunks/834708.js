var n = l(855986),
    t = l(812020),
    u = l(46653),
    s = l(994500),
    r = l(474090),
    d = l(851746),
    c = l(103411);
l.d(
    i,
    {},
    {
        d: function (e) {
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
        },
    },
);
