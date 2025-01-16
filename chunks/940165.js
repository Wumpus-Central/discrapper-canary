e.d(n, {
    Z: function () {
        return u;
    }
});
var i = e(200651);
e(192379);
var o = e(120356),
    a = e.n(o),
    r = e(793030),
    c = e(481060),
    s = e(759198),
    l = e(552958),
    p = e(767157),
    C = e(388032),
    d = e(270207);
function u(t) {
    let { label: n, className: e, description: o, soundpack: u, location: _ } = t,
        { playSound: f, isPlaying: I } = (0, l.Z)();
    return (0, i.jsxs)(c.Clickable, {
        'aria-label': C.intl.string(C.t.RscU7O),
        className: a()(d.container, e, { [d.containerActive]: I }),
        onClick: () => {
            (0, p.Z)(u, _), f(u);
        },
        children: [
            (0, i.jsx)(c.CirclePlayIcon, {
                className: d.playButton,
                color: I ? c.tokens.colors.INTERACTIVE_ACTIVE : c.tokens.colors.INTERACTIVE_NORMAL
            }),
            (0, i.jsxs)('div', {
                className: d.textContainer,
                children: [
                    (0, i.jsx)(s.Z, {
                        variant: 'text-md/medium',
                        children: n
                    }),
                    (0, i.jsx)(r.xv, {
                        variant: 'text-sm/normal',
                        children: o
                    })
                ]
            })
        ]
    });
}
