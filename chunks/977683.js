n.d(t, { Z: () => d });
var i = n(192379),
    l = n(410030),
    a = n(695346),
    r = n(798628),
    s = n(275344),
    o = n(918088),
    c = n(562293);
function d(e, t) {
    var n;
    let d = (0, s.v)(e),
        u = (0, r.cE)(d.getChannelId())[d.id],
        m = (0, c.Z)(null === (n = d.poll) || void 0 === n ? void 0 : n.expiry),
        _ = a.Yk.useSetting(),
        h = (0, l.ZP)(),
        p = null != t ? t : h;
    return i.useMemo(
        () =>
            (0, o.ZP)(d, u, {
                animateEmoji: _,
                theme: p,
                formattedExpirationLabel: m
            }),
        [_, d, u, m, p]
    );
}
