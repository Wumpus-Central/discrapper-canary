n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(192379),
    r = n(410030),
    l = n(695346),
    a = n(798628),
    o = n(275344),
    s = n(918088),
    c = n(562293);
function u(e, t) {
    var n;
    let u = (0, o.v)(e),
        d = (0, a.cE)(u.getChannelId())[u.id],
        m = (0, c.Z)(null === (n = u.poll) || void 0 === n ? void 0 : n.expiry),
        h = l.Yk.useSetting(),
        f = (0, r.ZP)(),
        p = null != t ? t : f;
    return i.useMemo(
        () =>
            (0, s.ZP)(u, d, {
                animateEmoji: h,
                theme: p,
                formattedExpirationLabel: m
            }),
        [h, u, d, m, p]
    );
}
