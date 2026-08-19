t.d(n, { A: () => C });
var l = t(477900);
t(582128);
var i = t(503698),
    s = t.n(i),
    a = t(17928),
    r = t(827343),
    o = t(384059),
    c = t(20504),
    u = t(453028),
    d = t(824744),
    A = t(723702),
    m = t(447404),
    h = t(486205);
function C(e) {
    let {
            className: n,
            iconClassName: t,
            sliderClassName: i,
            userId: C,
            context: E,
            currentWindow: p = window,
            location: g,
        } = e,
        { currentVolume: f, muted: x } = (0, a.cf)([u.Ay], () => ({
            currentVolume: u.Ay.getLocalVolume(C, E),
            muted: u.Ay.isLocalMute(C, E),
        }));
    return (0, l.jsx)(m.A, {
        children: (0, l.jsx)(c.A, {
            currentWindow: p,
            iconClassName: s()(t, h.pd),
            sliderClassName: i,
            className: n,
            value: (0, d.M)(f),
            muted: x,
            maxValue: A.isPlatformEmbedded ? 200 : 100,
            onValueChange: (e) => {
                e > 0 && x && r.A.toggleLocalMute(C, E), r.A.setLocalVolume(C, (0, d.w)(e), E);
            },
            onToggleMute: () => {
                null != g && (0, o.X)(g, o.O.VOLUME, x), r.A.toggleLocalMute(C, E);
            },
        }),
    });
}
