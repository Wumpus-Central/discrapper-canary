t.d(n, { A: () => C });
var l = t(627968);
t(64700);
var i = t(503698),
    s = t.n(i),
    a = t(17928),
    r = t(827343),
    o = t(384059),
    c = t(20504),
    u = t(235058),
    d = t(824744),
    A = t(723702),
    h = t(447404),
    m = t(329333);
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
        { currentVolume: x, muted: I } = (0, a.cf)([u.Ay], () => ({
            currentVolume: u.Ay.getLocalVolume(C, E),
            muted: u.Ay.isLocalMute(C, E),
        }));
    return (0, l.jsx)(h.A, {
        children: (0, l.jsx)(c.A, {
            currentWindow: p,
            iconClassName: s()(t, m.pd),
            sliderClassName: i,
            className: n,
            value: (0, d.M)(x),
            muted: I,
            maxValue: A.isPlatformEmbedded ? 200 : 100,
            onValueChange: (e) => {
                e > 0 && I && r.A.toggleLocalMute(C, E), r.A.setLocalVolume(C, (0, d.w)(e), E);
            },
            onToggleMute: () => {
                null != g && (0, o.X)(g, o.O.VOLUME, I), r.A.toggleLocalMute(C, E);
            },
        }),
    });
}
