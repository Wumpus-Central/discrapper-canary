n.d(t, { Z: () => u });
var r = n(647438),
    i = n(410030),
    l = n(695346),
    o = n(798628),
    a = n(275344),
    s = n(918088),
    c = n(562293);
function u(e, t) {
    var n;
    let u = (0, a.v)(e),
        d = (0, o.cE)(u.getChannelId())[u.id],
        p = (0, c.Z)(null == (n = u.poll) ? void 0 : n.expiry),
        m = l.Yk.useSetting(),
        f = (0, i.ZP)(),
        g = null != t ? t : f;
    return r.useMemo(
        () =>
            (0, s.ZP)(u, d, {
                animateEmoji: m,
                theme: g,
                formattedExpirationLabel: p,
            }),
        [m, u, d, p, g],
    );
}
