var l = n(582128),
    r = n(855986),
    i = n(540737),
    o = n(527212),
    s = n(287809),
    a = n(259464),
    u = n(449582);
function c(e, t) {
    let n = (0, r.bG)([s.default], () => s.default.getUser(e), [e]),
        i = (0, o.Ay)(e, t),
        c = (0, a.Z)(n, t),
        d = (0, u.r)({ user: n, guildId: t }),
        f = c?.skuId,
        p = d?.skuId,
        E = i?.profileEffect?.skuId,
        R = i?.profileFrame?.skuId;
    return l.useMemo(() => [f, p, E, R].filter((e) => null != e), [f, p, E, R]);
}
n.d(
    t,
    {},
    {
        A: function (e, t, n) {
            let r = c(e, t);
            l.useEffect(() => {
                n && 0 !== r.length && (0, i.tu)({ skuIds: r });
            }, [n, r]);
        },
        g: c,
    },
);
