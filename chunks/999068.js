n.d(t, { y: () => d });
var i = n(64700),
    r = n(311907),
    a = n(73153),
    l = n(622543),
    s = n(576622),
    o = n(287809);
function d(e) {
    let t = (0, r.bG)([o.default], () => o.default.getUser(e)),
        n = (0, r.yK)([l.A], () => l.A.getMutualGuilds(e)?.map((e) => e.guild) ?? []);
    return (
        i.useEffect(() => {
            0 === n.length &&
                null != t &&
                null == l.A.getMutualGuilds(e) &&
                a.h.wait(() => (0, s.A)(e, void 0, { withMutualGuilds: !0 }));
        }, [n, t, e]),
        n
    );
}
