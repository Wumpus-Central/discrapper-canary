"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(311907),
    a = n(827343),
    o = n(384059),
    c = n(20504),
    d = n(430452),
    u = n(824744),
    h = n(723702),
    A = n(447404),
    m = n(715109);
function p(e) {
    let {
            className: t,
            iconClassName: n,
            sliderClassName: s,
            userId: p,
            context: g,
            currentWindow: _ = window,
            location: f,
        } = e,
        { currentVolume: x, muted: C } = (0, r.cf)([d.Ay], () => ({
            currentVolume: d.Ay.getLocalVolume(p, g),
            muted: d.Ay.isLocalMute(p, g),
        }));
    return (0, i.jsx)(A.A, {
        children: (0, i.jsx)(c.A, {
            currentWindow: _,
            iconClassName: l()(n, m.pd),
            sliderClassName: s,
            className: t,
            value: (0, u.M)(x),
            muted: C,
            maxValue: h.isPlatformEmbedded ? 200 : 100,
            onValueChange: (e) => {
                e > 0 && C && a.A.toggleLocalMute(p, g), a.A.setLocalVolume(p, (0, u.w)(e), g);
            },
            onToggleMute: () => {
                null != f && (0, o.X)(f, o.O.VOLUME, C), a.A.toggleLocalMute(p, g);
            },
        }),
    });
}
