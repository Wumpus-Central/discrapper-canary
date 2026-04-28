n.d(t, { A: () => h });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(17928),
    r = n(827343),
    o = n(384059),
    c = n(20504),
    u = n(969341),
    d = n(824744),
    A = n(723702),
    E = n(447404),
    m = n(329333);
function h(e) {
    let {
            className: t,
            iconClassName: n,
            sliderClassName: i,
            userId: h,
            context: C,
            currentWindow: g = window,
            location: I,
        } = e,
        { currentVolume: p, muted: x } = (0, a.cf)([u.Ay], () => ({
            currentVolume: u.Ay.getLocalVolume(h, C),
            muted: u.Ay.isLocalMute(h, C),
        }));
    return (0, l.jsx)(E.A, {
        children: (0, l.jsx)(c.A, {
            currentWindow: g,
            iconClassName: s()(n, m.pd),
            sliderClassName: i,
            className: t,
            value: (0, d.M)(p),
            muted: x,
            maxValue: A.isPlatformEmbedded ? 200 : 100,
            onValueChange: (e) => {
                e > 0 && x && r.A.toggleLocalMute(h, C), r.A.setLocalVolume(h, (0, d.w)(e), C);
            },
            onToggleMute: () => {
                null != I && (0, o.X)(I, o.O.VOLUME, x), r.A.toggleLocalMute(h, C);
            },
        }),
    });
}
