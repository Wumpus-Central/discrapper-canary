var l = n(582128),
    r = n(855986),
    i = n(540737),
    o = n(527212),
    a = n(287809),
    s = n(259464),
    u = n(449582);
function c(e, t) {
    let n = (0, r.bG)([a.default], () => a.default.getUser(e), [e]),
        i = (0, o.Ay)(e, t),
        c = (0, s.Z)(n, t),
        d = (0, u.r)({ user: n, guildId: t }),
        f = c?.skuId,
        A = d?.skuId,
        p = i?.profileEffect?.skuId,
        E = i?.profileFrame?.skuId;
    return l.useMemo(() => [f, A, p, E].filter((e) => null != e), [f, A, p, E]);
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
