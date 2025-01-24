i.d(e, {
    Z: function () {
        return u;
    }
});
var n = i(200651);
i(192379);
var l = i(120356),
    o = i.n(l),
    r = i(481060),
    s = i(809357),
    a = i(163752);
function u(t) {
    let { onClick: e, keybind: i, className: l, IconComponent: u } = t,
        d = (0, s.o)();
    return (0, n.jsxs)('div', {
        className: o()(a.buttonContainer, l),
        children: [
            (0, n.jsx)(r.Clickable, {
                className: a.button,
                onClick: e,
                'aria-hidden': !0,
                children: (0, n.jsx)(u, {
                    size: 'md',
                    color: 'currentColor',
                    'aria-hidden': !0
                })
            }),
            null != i && d
                ? (0, n.jsx)(r.Text, {
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
