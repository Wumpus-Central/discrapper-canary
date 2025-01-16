n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    s = n(846027),
    o = n(793148),
    c = n(131951),
    d = n(36703),
    u = n(358085),
    h = n(618158),
    p = n(32390);
function m(e) {
    let { className: t, iconClassName: n, sliderClassName: l, userId: m, context: f, currentWindow: g = window } = e,
        { currentVolume: C, muted: x } = (0, a.cj)([c.Z], () => ({
            currentVolume: c.Z.getLocalVolume(m, f),
            muted: c.Z.isLocalMute(m, f)
        }));
    return (0, i.jsx)(h.Z, {
        children: (0, i.jsx)(o.Z, {
            currentWindow: g,
            iconClassName: r()(n, p.controlIcon),
            sliderClassName: l,
            className: t,
            value: (0, d.P)(C),
            muted: x,
            maxValue: u.isPlatformEmbedded ? 200 : 100,
            onValueChange: (e) => {
                var t, n, i, l;
                return (t = e), (n = m), (i = x), (l = f), void (t > 0 && i && s.Z.toggleLocalMute(n, l), s.Z.setLocalVolume(n, (0, d.A)(t), l));
            },
            onToggleMute: () => {
                var e, t;
                return (e = m), (t = f), void s.Z.toggleLocalMute(e, t);
            }
        })
    });
}
