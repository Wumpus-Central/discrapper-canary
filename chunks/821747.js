"use strict";
n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(311907),
    r = n(827343),
    o = n(384059),
    c = n(20504),
    d = n(430452),
    u = n(824744),
    h = n(723702),
    A = n(447404),
    m = n(35204);
function _(e) {
    let {
            className: t,
            iconClassName: n,
            sliderClassName: s,
            userId: _,
            context: p,
            currentWindow: g = window,
            location: f,
        } = e,
        { currentVolume: x, muted: C } = (0, a.cf)([d.Ay], () => ({
            currentVolume: d.Ay.getLocalVolume(_, p),
            muted: d.Ay.isLocalMute(_, p),
        }));
    return (0, i.jsx)(A.A, {
        children: (0, i.jsx)(c.A, {
            currentWindow: g,
            iconClassName: l()(n, m.pd),
            sliderClassName: s,
            className: t,
            value: (0, u.M)(x),
            muted: C,
            maxValue: h.isPlatformEmbedded ? 200 : 100,
            onValueChange: (e) => {
                e > 0 && C && r.A.toggleLocalMute(_, p), r.A.setLocalVolume(_, (0, u.w)(e), p);
            },
            onToggleMute: () => {
                null != f && (0, o.X)(f, o.O.VOLUME, C), r.A.toggleLocalMute(_, p);
            },
        }),
    });
}
