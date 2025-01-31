i.d(e, { Z: () => d });
var n = i(200651);
i(192379);
var l = i(120356),
    s = i.n(l),
    o = i(481060),
    r = i(809357),
    a = i(163752);
function d(t) {
    let { onClick: e, keybind: i, className: l, IconComponent: d } = t,
        u = (0, r.o)();
    return (0, n.jsxs)('div', {
        className: s()(a.buttonContainer, l),
        children: [
            (0, n.jsx)(o.P3F, {
                className: a.button,
                onClick: e,
                'aria-hidden': !0,
                children: (0, n.jsx)(d, {
                    size: 'md',
                    color: 'currentColor',
                    'aria-hidden': !0
                })
            }),
            null != i && u
                ? (0, n.jsx)(o.Text, {
                      className: s()(a.keybind),
                      'aria-hidden': !0,
                      variant: 'text-xxs/bold',
                      color: 'interactive-normal',
                      children: i
                  })
                : null
        ]
    });
}
