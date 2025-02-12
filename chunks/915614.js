n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    l = n(481060),
    a = n(809357),
    s = n(4119);
function d(e) {
    let { onClick: t, keybind: n, className: o, IconComponent: d } = e,
        c = (0, a.o)();
    return (0, i.jsxs)('div', {
        className: r()(s.buttonContainer, o),
        children: [
            (0, i.jsx)(l.P3F, {
                className: s.button,
                onClick: t,
                'aria-hidden': !0,
                children: (0, i.jsx)(d, {
                    size: 'md',
                    color: 'currentColor',
                    'aria-hidden': !0
                })
            }),
            null != n && c
                ? (0, i.jsx)(l.Text, {
                      className: r()(s.keybind),
                      'aria-hidden': !0,
                      variant: 'text-xxs/bold',
                      color: 'interactive-normal',
                      children: n
                  })
                : null
        ]
    });
}
