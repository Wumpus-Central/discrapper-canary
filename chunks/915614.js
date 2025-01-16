i.d(t, {
    Z: function () {
        return u;
    }
});
var n = i(200651);
i(192379);
var l = i(120356),
    o = i.n(l),
    s = i(481060),
    r = i(809357),
    a = i(163752);
function u(e) {
    let { onClick: t, keybind: i, className: l, IconComponent: u } = e,
        d = (0, r.o)();
    return (0, n.jsxs)('div', {
        className: o()(a.buttonContainer, l),
        children: [
            (0, n.jsx)(s.Clickable, {
                className: a.button,
                onClick: t,
                'aria-hidden': !0,
                children: (0, n.jsx)(u, {
                    size: 'md',
                    color: 'currentColor',
                    'aria-hidden': !0
                })
            }),
            null != i && d
                ? (0, n.jsx)(s.Text, {
                      className: o()(a.keybind),
                      'aria-hidden': !0,
                      variant: 'text-xxs/bold',
                      color: 'interactive-normal',
                      children: i
                  })
                : null
        ]
    });
}
