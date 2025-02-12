n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(442837),
    s = n(846027),
    o = n(793148),
    c = n(131951),
    d = n(36703),
    u = n(358085),
    h = n(618158),
    p = n(607820);
function m(e) {
    let { className: t, iconClassName: n, sliderClassName: l, userId: m, context: f, currentWindow: g = window } = e,
        { currentVolume: _, muted: C } = (0, r.cj)([c.Z], () => ({
            currentVolume: c.Z.getLocalVolume(m, f),
            muted: c.Z.isLocalMute(m, f)
        }));
    return (0, i.jsx)(h.Z, {
        children: (0, i.jsx)(o.Z, {
            currentWindow: g,
            iconClassName: a()(n, p.controlIcon),
            sliderClassName: l,
            className: t,
            value: (0, d.P)(_),
            muted: C,
            maxValue: u.isPlatformEmbedded ? 200 : 100,
            onValueChange: (e) => {
                e > 0 && C && s.Z.toggleLocalMute(m, f), s.Z.setLocalVolume(m, (0, d.A)(e), f);
            },
            onToggleMute: () => {
                s.Z.toggleLocalMute(m, f);
            }
        })
    });
}
