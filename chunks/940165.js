n.d(t, { Z: () => g }), n(953529);
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(793030),
    a = n(481060),
    o = n(759198),
    d = n(552958),
    c = n(767157),
    u = n(388032),
    h = n(267129);
function g(e) {
    let { label: t, className: n, description: s, soundpack: g, location: m } = e,
        { playSound: x, isPlaying: p } = (0, d.Z)();
    return (0, i.jsxs)(a.P3F, {
        'aria-label': u.intl.string(u.t.RscU7O),
        className: l()(h.container, n, { [h.containerActive]: p }),
        onClick: () => {
            (0, c.Z)(g, m), x(g);
        },
        children: [
            (0, i.jsx)(a.g8d, {
                className: h.playButton,
                color: p ? a.TVs.colors.INTERACTIVE_ACTIVE : a.TVs.colors.INTERACTIVE_NORMAL
            }),
            (0, i.jsxs)('div', {
                className: h.textContainer,
                children: [
                    (0, i.jsx)(o.Z, {
                        variant: 'text-md/medium',
                        children: t
                    }),
                    (0, i.jsx)(r.xv, {
                        variant: 'text-sm/normal',
                        children: s
                    })
                ]
            })
        ]
    });
}
