n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(846027),
    l = n(522651),
    c = n(793148),
    u = n(131951),
    d = n(36703),
    f = n(358085),
    _ = n(618158),
    p = n(434580);
function h(e, t, n, r) {
    (e > 0 && n && s.Z.toggleLocalMute(t, r), s.Z.setLocalVolume(t, (0, d.A)(e), r));
}
function m(e, t) {
    s.Z.toggleLocalMute(e, t);
}
function g(e) {
    let { className: t, iconClassName: n, sliderClassName: i, userId: s, context: g, currentWindow: E = window, location: b } = e,
        { currentVolume: y, muted: O } = (0, a.cj)([u.Z], () => ({
            currentVolume: u.Z.getLocalVolume(s, g),
            muted: u.Z.isLocalMute(s, g)
        }));
    return (0, r.jsx)(_.Z, {
        children: (0, r.jsx)(c.Z, {
            currentWindow: E,
            iconClassName: o()(n, p.controlIcon),
            sliderClassName: i,
            className: t,
            value: (0, d.P)(y),
            muted: O,
            maxValue: f.isPlatformEmbedded ? 200 : 100,
            onValueChange: (e) => h(e, s, O, g),
            onToggleMute: () => {
                (null != b && (0, l.v)(b, l.d.VOLUME, O), m(s, g));
            }
        })
    });
}
