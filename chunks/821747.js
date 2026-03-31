n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(311907),
    r = n(827343),
    o = n(384059),
    c = n(20504),
    d = n(430452),
    u = n(824744),
    h = n(723702),
    A = n(447404),
    _ = n(715109);
function m(e) {
    let {
            className: t,
            iconClassName: n,
            sliderClassName: l,
            userId: m,
            context: g,
            currentWindow: p = window,
            location: f,
        } = e,
        { currentVolume: x, muted: E } = (0, a.cf)([d.Ay], () => ({
            currentVolume: d.Ay.getLocalVolume(m, g),
            muted: d.Ay.isLocalMute(m, g),
        }));
    return (0, i.jsx)(A.A, {
        children: (0, i.jsx)(c.A, {
            currentWindow: p,
            iconClassName: s()(n, _.pd),
            sliderClassName: l,
            className: t,
            value: (0, u.M)(x),
            muted: E,
            maxValue: h.isPlatformEmbedded ? 200 : 100,
            onValueChange: (e) => {
                e > 0 && E && r.A.toggleLocalMute(m, g), r.A.setLocalVolume(m, (0, u.w)(e), g);
            },
            onToggleMute: () => {
                null != f && (0, o.X)(f, o.O.VOLUME, E), r.A.toggleLocalMute(m, g);
            },
        }),
    });
}
