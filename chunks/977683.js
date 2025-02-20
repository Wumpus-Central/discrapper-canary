n.d(t, { Z: () => d });
var r = n(192379),
    i = n(410030),
    a = n(695346),
    o = n(798628),
    l = n(275344),
    s = n(918088),
    c = n(562293);
function d(e, t) {
    var n;
    let d = (0, l.v)(e),
        u = (0, o.cE)(d.getChannelId())[d.id],
        p = (0, c.Z)(null === (n = d.poll) || void 0 === n ? void 0 : n.expiry),
        m = a.Yk.useSetting(),
        f = (0, i.ZP)(),
        h = null != t ? t : f;
    return r.useMemo(
        () =>
            (0, s.ZP)(d, u, {
                animateEmoji: m,
                theme: h,
                formattedExpirationLabel: p
            }),
        [m, d, u, p, h]
    );
}
