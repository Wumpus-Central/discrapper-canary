n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(192379),
    r = n(410030),
    l = n(695346),
    a = n(798628),
    o = n(275344),
    s = n(918088),
    c = n(562293);
function d(e, t) {
    var n;
    let d = (0, o.v)(e),
        u = (0, a.cE)(d.getChannelId())[d.id],
        m = (0, c.Z)(null === (n = d.poll) || void 0 === n ? void 0 : n.expiry),
        h = l.Yk.useSetting(),
        f = (0, r.ZP)(),
        p = null != t ? t : f;
    return i.useMemo(
        () =>
            (0, s.ZP)(d, u, {
                animateEmoji: h,
                theme: p,
                formattedExpirationLabel: m
            }),
        [h, d, u, m, p]
    );
}
