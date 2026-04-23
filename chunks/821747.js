t.d(n, { A: () => m });
var l = t(627968);
t(64700);
var i = t(503698),
    a = t.n(i),
    s = t(311907),
    r = t(827343),
    o = t(384059),
    c = t(20504),
    u = t(430452),
    d = t(824744),
    A = t(723702),
    h = t(447404),
    p = t(329333);
function m(e) {
    let {
            className: n,
            iconClassName: t,
            sliderClassName: i,
            userId: m,
            context: g,
            currentWindow: f = window,
            location: C,
        } = e,
        { currentVolume: E, muted: v } = (0, s.cf)([u.Ay], () => ({
            currentVolume: u.Ay.getLocalVolume(m, g),
            muted: u.Ay.isLocalMute(m, g),
        }));
    return (0, l.jsx)(h.A, {
        children: (0, l.jsx)(c.A, {
            currentWindow: f,
            iconClassName: a()(t, p.pd),
            sliderClassName: i,
            className: n,
            value: (0, d.M)(E),
            muted: v,
            maxValue: A.isPlatformEmbedded ? 200 : 100,
            onValueChange: (e) => {
                e > 0 && v && r.A.toggleLocalMute(m, g), r.A.setLocalVolume(m, (0, d.w)(e), g);
            },
            onToggleMute: () => {
                null != C && (0, o.X)(C, o.O.VOLUME, v), r.A.toggleLocalMute(m, g);
            },
        }),
    });
}
