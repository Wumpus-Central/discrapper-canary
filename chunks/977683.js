n.d(t, { Z: () => u });
var r = n(473749),
    i = n(410030),
    a = n(695346),
    o = n(798628),
    s = n(275344),
    l = n(918088),
    c = n(562293);
function u(e, t) {
    var n;
    let u = (0, s.v)(e),
        d = (0, o.cE)(u.getChannelId())[u.id],
        f = (0, c.Z)(null == (n = u.poll) ? void 0 : n.expiry),
        p = a.Yk.useSetting(),
        _ = (0, i.ZP)(),
        m = null != t ? t : _;
    return r.useMemo(
        () =>
            (0, l.ZP)(u, d, {
                animateEmoji: p,
                theme: m,
                formattedExpirationLabel: f,
            }),
        [p, u, d, f, m],
    );
}
