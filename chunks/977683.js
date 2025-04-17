n.d(t, { Z: () => u });
var r = n(192379),
    i = n(410030),
    a = n(695346),
    l = n(798628),
    o = n(275344),
    s = n(918088),
    c = n(562293);
function u(e, t) {
    var n;
    let u = (0, o.v)(e),
        d = (0, l.cE)(u.getChannelId())[u.id],
        p = (0, c.Z)(null == (n = u.poll) ? void 0 : n.expiry),
        m = a.Yk.useSetting(),
        f = (0, i.ZP)(),
        h = null != t ? t : f;
    return r.useMemo(
        () =>
            (0, s.ZP)(u, d, {
                animateEmoji: m,
                theme: h,
                formattedExpirationLabel: p
            }),
        [m, u, d, p, h]
    );
}
