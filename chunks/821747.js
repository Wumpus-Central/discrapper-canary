n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(311907),
    r = n(827343),
    o = n(384059),
    d = n(20504),
    c = n(430452),
    u = n(824744),
    h = n(723702),
    A = n(447404),
    g = n(35204);
function m(e) {
    let {
            className: t,
            iconClassName: n,
            sliderClassName: l,
            userId: m,
            context: p,
            currentWindow: _ = window,
            location: x,
        } = e,
        { currentVolume: f, muted: E } = (0, a.cf)([c.A], () => ({
            currentVolume: c.A.getLocalVolume(m, p),
            muted: c.A.isLocalMute(m, p),
        }));
    return (0, i.jsx)(A.A, {
        children: (0, i.jsx)(d.A, {
            currentWindow: _,
            iconClassName: s()(n, g.pd),
            sliderClassName: l,
            className: t,
            value: (0, u.M)(f),
            muted: E,
            maxValue: h.isPlatformEmbedded ? 200 : 100,
            onValueChange: (e) => {
                e > 0 && E && r.A.toggleLocalMute(m, p), r.A.setLocalVolume(m, (0, u.w)(e), p);
            },
            onToggleMute: () => {
                null != x && (0, o.X)(x, o.O.VOLUME, E), r.A.toggleLocalMute(m, p);
            },
        }),
    });
}
