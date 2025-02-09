e.d(n, { Z: () => _ });
var i = e(200651);
e(192379);
var o = e(120356),
    a = e.n(o),
    s = e(793030),
    r = e(481060),
    c = e(759198),
    l = e(552958),
    p = e(767157),
    C = e(388032),
    d = e(593743);
function _(t) {
    let { label: n, className: e, description: o, soundpack: _, location: u } = t,
        { playSound: x, isPlaying: I } = (0, l.Z)();
    return (0, i.jsxs)(r.P3F, {
        'aria-label': C.intl.string(C.t.RscU7O),
        className: a()(d.container, e, { [d.containerActive]: I }),
        onClick: () => {
            (0, p.Z)(_, u), x(_);
        },
        children: [
            (0, i.jsx)(r.g8d, {
                className: d.playButton,
                color: I ? r.TVs.colors.INTERACTIVE_ACTIVE : r.TVs.colors.INTERACTIVE_NORMAL
            }),
            (0, i.jsxs)('div', {
                className: d.textContainer,
                children: [
                    (0, i.jsx)(c.Z, {
                        variant: 'text-md/medium',
                        children: n
                    }),
                    (0, i.jsx)(s.xv, {
                        variant: 'text-sm/normal',
                        children: o
                    })
                ]
            })
        ]
    });
}
