n.d(t, { A: () => b });
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(311907),
    s = n(827343),
    o = n(384059),
    c = n(20504),
    u = n(430452),
    d = n(824744),
    f = n(723702),
    p = n(447404),
    h = n(35204);
function b(e) {
    let {
            className: t,
            iconClassName: n,
            sliderClassName: l,
            userId: b,
            context: g,
            currentWindow: m = window,
            location: A,
        } = e,
        { currentVolume: y, muted: O } = (0, a.cf)([u.A], () => ({
            currentVolume: u.A.getLocalVolume(b, g),
            muted: u.A.isLocalMute(b, g),
        }));
    return (0, r.jsx)(p.A, {
        children: (0, r.jsx)(c.A, {
            currentWindow: m,
            iconClassName: i()(n, h.pd),
            sliderClassName: l,
            className: t,
            value: (0, d.M)(y),
            muted: O,
            maxValue: f.isPlatformEmbedded ? 200 : 100,
            onValueChange: (e) => {
                e > 0 && O && s.A.toggleLocalMute(b, g), s.A.setLocalVolume(b, (0, d.w)(e), g);
            },
            onToggleMute: () => {
                null != A && (0, o.X)(A, o.O.VOLUME, O), s.A.toggleLocalMute(b, g);
            },
        }),
    });
}
