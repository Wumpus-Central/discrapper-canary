t.d(n, { A: () => C });
var l = t(477900);
t(582128);
var i = t(503698),
    a = t.n(i),
    s = t(17928),
    o = t(827343),
    r = t(384059),
    c = t(20504),
    u = t(192820),
    d = t(824744),
    A = t(723702),
    h = t(447404),
    m = t(609142);
function C(e) {
    let {
            className: n,
            iconClassName: t,
            sliderClassName: i,
            userId: C,
            context: p,
            currentWindow: x = window,
            location: g,
        } = e,
        { currentVolume: f, muted: E } = (0, s.cf)([u.Ay], () => ({
            currentVolume: u.Ay.getLocalVolume(C, p),
            muted: u.Ay.isLocalMute(C, p),
        }));
    return (0, l.jsx)(h.A, {
        children: (0, l.jsx)(c.A, {
            currentWindow: x,
            iconClassName: a()(t, m.pd),
            sliderClassName: i,
            className: n,
            value: (0, d.M)(f),
            muted: E,
            maxValue: A.isPlatformEmbedded ? 200 : 100,
            onValueChange: (e) => {
                (e > 0 && E && o.default.toggleLocalMute(C, p), o.default.setLocalVolume(C, (0, d.w)(e), p));
            },
            onToggleMute: () => {
                (null != g && (0, r.X)(g, r.O.VOLUME, E), o.default.toggleLocalMute(C, p));
            },
        }),
    });
}
