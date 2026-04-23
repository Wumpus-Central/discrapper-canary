n.d(t, { y: () => d });
var s = n(64700),
    l = n(311907),
    a = n(73153),
    i = n(622543),
    r = n(576622),
    c = n(287809);
function d(e) {
    let t = (0, l.bG)([c.default], () => c.default.getUser(e)),
        n = (0, l.yK)([i.A], () => i.A.getMutualGuilds(e)?.map((e) => e.guild) ?? []);
    return (
        s.useEffect(() => {
            0 === n.length &&
                null != t &&
                null == i.A.getMutualGuilds(e) &&
                a.h.wait(() => (0, r.A)(e, void 0, { withMutualGuilds: !0 }));
        }, [n, t, e]),
        n
    );
}
