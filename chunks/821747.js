t.d(n, { A: () => C });
var l = t(477900);
t(582128);
var i = t(503698),
    a = t.n(i),
    s = t(17928),
    r = t(827343),
    o = t(384059),
    c = t(20504),
    u = t(453028),
    d = t(824744),
    A = t(723702),
    m = t(447404),
    h = t(609142);
function C(e) {
    let {
            className: n,
            iconClassName: t,
            sliderClassName: i,
            userId: C,
            context: f,
            currentWindow: E = window,
            location: p,
        } = e,
        { currentVolume: g, muted: x } = (0, s.cf)([u.Ay], () => ({
            currentVolume: u.Ay.getLocalVolume(C, f),
            muted: u.Ay.isLocalMute(C, f),
        }));
    return (0, l.jsx)(m.A, {
        children: (0, l.jsx)(c.A, {
            currentWindow: E,
            iconClassName: a()(t, h.pd),
            sliderClassName: i,
            className: n,
            value: (0, d.M)(g),
            muted: x,
            maxValue: A.isPlatformEmbedded ? 200 : 100,
            onValueChange: (e) => {
                e > 0 && x && r.A.toggleLocalMute(C, f), r.A.setLocalVolume(C, (0, d.w)(e), f);
            },
            onToggleMute: () => {
                null != p && (0, o.X)(p, o.O.VOLUME, x), r.A.toggleLocalMute(C, f);
            },
        }),
    });
}
