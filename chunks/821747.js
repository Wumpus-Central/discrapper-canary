n.d(t, { A: () => p });
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
    m = n(35204);
function p(e) {
    let {
            className: t,
            iconClassName: n,
            sliderClassName: l,
            userId: p,
            context: g,
            currentWindow: _ = window,
            location: f,
        } = e,
        { currentVolume: x, muted: C } = (0, a.cf)([c.Ay], () => ({
            currentVolume: c.Ay.getLocalVolume(p, g),
            muted: c.Ay.isLocalMute(p, g),
        }));
    return (0, i.jsx)(A.A, {
        children: (0, i.jsx)(d.A, {
            currentWindow: _,
            iconClassName: s()(n, m.pd),
            sliderClassName: l,
            className: t,
            value: (0, u.M)(x),
            muted: C,
            maxValue: h.isPlatformEmbedded ? 200 : 100,
            onValueChange: (e) => {
                e > 0 && C && r.A.toggleLocalMute(p, g), r.A.setLocalVolume(p, (0, u.w)(e), g);
            },
            onToggleMute: () => {
                null != f && (0, o.X)(f, o.O.VOLUME, C), r.A.toggleLocalMute(p, g);
            },
        }),
    });
}
