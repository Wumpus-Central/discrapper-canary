n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(442837),
    a = n(846027),
    s = n(793148),
    c = n(131951),
    u = n(36703),
    d = n(358085),
    p = n(618158),
    h = n(570105);
function f(e) {
    let { className: t, iconClassName: n, sliderClassName: i, userId: f, context: m, currentWindow: g = window } = e,
        { currentVolume: b, muted: _ } = (0, o.cj)([c.Z], () => ({
            currentVolume: c.Z.getLocalVolume(f, m),
            muted: c.Z.isLocalMute(f, m)
        }));
    return (0, r.jsx)(p.Z, {
        children: (0, r.jsx)(s.Z, {
            currentWindow: g,
            iconClassName: l()(n, h.controlIcon),
            sliderClassName: i,
            className: t,
            value: (0, u.P)(b),
            muted: _,
            maxValue: d.isPlatformEmbedded ? 200 : 100,
            onValueChange: (e) => {
                e > 0 && _ && a.Z.toggleLocalMute(f, m), a.Z.setLocalVolume(f, (0, u.A)(e), m);
            },
            onToggleMute: () => {
                a.Z.toggleLocalMute(f, m);
            }
        })
    });
}
