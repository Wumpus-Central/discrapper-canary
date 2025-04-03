n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(120356),
    o = n.n(r),
    l = n(481060),
    a = n(809357),
    s = n(514835);
function c(e) {
    let { onClick: t, keybind: n, className: r, IconComponent: c } = e,
        u = (0, a.o)();
    return (0, i.jsxs)('div', {
        className: o()(s.buttonContainer, r),
        children: [
            (0, i.jsx)(l.P3F, {
                className: s.button,
                onClick: t,
                'aria-hidden': !0,
                children: (0, i.jsx)(c, {
                    size: 'md',
                    color: 'currentColor',
                    'aria-hidden': !0
                })
            }),
            null != n && u
                ? (0, i.jsx)(l.Text, {
                      className: s.keybind,
                      'aria-hidden': !0,
                      variant: 'text-xxs/bold',
                      color: 'interactive-normal',
                      children: n
                  })
                : null
        ]
    });
}
