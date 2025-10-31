n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    o = n(846027),
    s = n(522651),
    c = n(793148),
    u = n(131951),
    d = n(36703),
    p = n(358085),
    f = n(618158),
    h = n(119421);
function m(e) {
    let {
            className: t,
            iconClassName: n,
            sliderClassName: i,
            userId: m,
            context: g,
            currentWindow: b = window,
            location: _,
        } = e,
        { currentVolume: y, muted: C } = (0, a.cj)([u.Z], () => ({
            currentVolume: u.Z.getLocalVolume(m, g),
            muted: u.Z.isLocalMute(m, g),
        }));
    return (0, r.jsx)(f.Z, {
        children: (0, r.jsx)(c.Z, {
            currentWindow: b,
            iconClassName: l()(n, h.controlIcon),
            sliderClassName: i,
            className: t,
            value: (0, d.P)(y),
            muted: C,
            maxValue: p.isPlatformEmbedded ? 200 : 100,
            onValueChange: (e) => {
                e > 0 && C && o.Z.toggleLocalMute(m, g), o.Z.setLocalVolume(m, (0, d.A)(e), g);
            },
            onToggleMute: () => {
                null != _ && (0, s.v)(_, s.d.VOLUME, C), o.Z.toggleLocalMute(m, g);
            },
        }),
    });
}
