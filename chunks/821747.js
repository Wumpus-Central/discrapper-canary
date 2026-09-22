t.d(n, { A: () => C });
var i = t(477900);
t(582128);
var l = t(503698),
    s = t.n(l),
    a = t(17928),
    o = t(827343),
    r = t(384059),
    c = t(20504),
    u = t(544576),
    d = t(824744),
    A = t(723702),
    m = t(447404),
    h = t(609142);
function C(e) {
    let {
            className: n,
            iconClassName: t,
            sliderClassName: l,
            userId: C,
            context: p,
            currentWindow: x = window,
            location: g,
        } = e,
        { currentVolume: f, muted: E } = (0, a.cf)([u.Ay], () => ({
            currentVolume: u.Ay.getLocalVolume(C, p),
            muted: u.Ay.isLocalMute(C, p),
        }));
    return (0, i.jsx)(m.A, {
        children: (0, i.jsx)(c.A, {
            currentWindow: x,
            iconClassName: s()(t, h.pd),
            sliderClassName: l,
            className: n,
            value: (0, d.M)(f),
            muted: E,
            maxValue: A.isPlatformEmbedded ? 200 : 100,
            onValueChange: (e) => {
                (e > 0 && E && o.A.toggleLocalMute(C, p), o.A.setLocalVolume(C, (0, d.w)(e), p));
            },
            onToggleMute: () => {
                (null != g && (0, r.X)(g, r.O.VOLUME, E), o.A.toggleLocalMute(C, p));
            },
        }),
    });
}
