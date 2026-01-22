n.d(t, {
    y: () => c,
});
var r = n(64700),
    i = n(311907),
    l = n(73153),
    a = n(622543),
    s = n(576622),
    o = n(287809);

function c(e) {
    let t = (0, i.bG)([o.default], () => o.default.getUser(e)),
        n = (0, i.yK)([a.A], () => {
            var t, n;
            return null != (t = null == (n = a.A.getMutualGuilds(e)) ? void 0 : n.map((e) => e.guild)) ? t : [];
        });
    return (
        r.useEffect(() => {
            0 === n.length &&
                null != t &&
                null == a.A.getMutualGuilds(e) &&
                l.h.wait(() =>
                    (0, s.A)(e, void 0, {
                        withMutualGuilds: !0,
                    }),
                );
        }, [n, t, e]),
        n
    );
}
