t.d(n, { A: () => g });
var i = t(477900);
t(582128);
var l = t(503698),
    s = t.n(l),
    a = t(17928),
    r = t(827343),
    o = t(384059),
    c = t(20504),
    u = t(192820),
    d = t(824744),
    A = t(723702),
    h = t(447404),
    m = t(609142);
function g(e) {
    let {
            className: n,
            iconClassName: t,
            sliderClassName: l,
            userId: g,
            context: x,
            currentWindow: C = window,
            location: f,
        } = e,
        { currentVolume: p, muted: E } = (0, a.cf)([u.Ay], () => ({
            currentVolume: u.Ay.getLocalVolume(g, x),
            muted: u.Ay.isLocalMute(g, x),
        }));
    return (0, i.jsx)(h.A, {
        children: (0, i.jsx)(c.A, {
            currentWindow: C,
            iconClassName: s()(t, m.pd),
            sliderClassName: l,
            className: n,
            value: (0, d.M)(p),
            muted: E,
            maxValue: A.isPlatformEmbedded ? 200 : 100,
            onValueChange: (e) => {
                (e > 0 && E && r.default.toggleLocalMute(g, x), r.default.setLocalVolume(g, (0, d.w)(e), x));
            },
            onToggleMute: () => {
                (null != f && (0, o.X)(f, o.O.VOLUME, E), r.default.toggleLocalMute(g, x));
            },
        }),
    });
}
