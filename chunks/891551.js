n.d(t, { Z: () => m });
var i = n(54381);
n(473749);
var r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(846027),
    s = n(522651),
    c = n(793148),
    u = n(131951),
    d = n(36703),
    p = n(358085),
    h = n(618158),
    f = n(119421);
function m(e) {
    let {
            className: t,
            iconClassName: n,
            sliderClassName: r,
            userId: m,
            context: g,
            currentWindow: b = window,
            location: C,
        } = e,
        { currentVolume: y, muted: _ } = (0, a.cj)([u.Z], () => ({
            currentVolume: u.Z.getLocalVolume(m, g),
            muted: u.Z.isLocalMute(m, g),
        }));
    return (0, i.jsx)(h.Z, {
        children: (0, i.jsx)(c.Z, {
            currentWindow: b,
            iconClassName: l()(n, f.controlIcon),
            sliderClassName: r,
            className: t,
            value: (0, d.P)(y),
            muted: _,
            maxValue: p.isPlatformEmbedded ? 200 : 100,
            onValueChange: (e) => {
                e > 0 && _ && o.Z.toggleLocalMute(m, g), o.Z.setLocalVolume(m, (0, d.A)(e), g);
            },
            onToggleMute: () => {
                null != C && (0, s.v)(C, s.d.VOLUME, _), o.Z.toggleLocalMute(m, g);
            },
        }),
    });
}
