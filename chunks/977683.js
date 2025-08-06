n.d(t, { Z: () => u });
var r = n(73800),
    i = n(410030),
    o = n(695346),
    a = n(798628),
    s = n(275344),
    l = n(918088),
    c = n(562293);
function u(e, t) {
    var n;
    let u = (0, s.v)(e),
        d = (0, a.cE)(u.getChannelId())[u.id],
        f = (0, c.Z)(null == (n = u.poll) ? void 0 : n.expiry),
        _ = o.Yk.useSetting(),
        p = (0, i.ZP)(),
        h = null != t ? t : p;
    return r.useMemo(
        () =>
            (0, l.ZP)(u, d, {
                animateEmoji: _,
                theme: h,
                formattedExpirationLabel: f
            }),
        [_, u, d, f, h]
    );
}
