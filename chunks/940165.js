n.d(e, { Z: () => b }), n(266796);
var r = n(200651);
n(192379);
var o = n(120356),
    i = n.n(o),
    a = n(793030),
    c = n(481060),
    s = n(759198),
    l = n(552958),
    p = n(767157),
    u = n(388032),
    O = n(267129);
function b(t) {
    let { label: e, className: n, description: o, soundpack: b, location: f } = t,
        { playSound: d, isPlaying: y } = (0, l.Z)();
    return (0, r.jsxs)(c.P3F, {
        'aria-label': u.NW.string(u.t.RscU7O),
        className: i()(O.container, n, { [O.containerActive]: y }),
        onClick: () => {
            (0, p.Z)(b, f), d(b);
        },
        children: [
            (0, r.jsx)(c.g8d, {
                className: O.playButton,
                color: y ? c.TVs.colors.INTERACTIVE_ACTIVE : c.TVs.colors.INTERACTIVE_NORMAL
            }),
            (0, r.jsxs)('div', {
                className: O.textContainer,
                children: [
                    (0, r.jsx)(s.Z, {
                        variant: 'text-md/medium',
                        children: e
                    }),
                    (0, r.jsx)(a.xv, {
                        variant: 'text-sm/normal',
                        children: o
                    })
                ]
            })
        ]
    });
}
