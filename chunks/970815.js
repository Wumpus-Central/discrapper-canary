n.d(t, {
    A4: () => h,
    b6: () => c.b
});
var e = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    o = n(481060),
    c = n(317257),
    a = n(583478),
    d = n(960919),
    E = n(15268);
let _ = () =>
        (0, e.jsx)('img', {
            className: E.notificationBadge,
            src: n(808824),
            alt: ''
        }),
    h = (0, r.forwardRef)(function (i, t) {
        let { balance: n, placeholderBalance: r = 0, balanceWidgetMode: l = c.b.DEFAULT, showNotificationBadge: h, onClick: L, onMouseEnter: u, onMouseLeave: O, className: p } = i,
            T = E.default;
        switch (l) {
            case c.b.HIGHLIGHTED:
                T = E.highlighted;
                break;
            case c.b.SELECTED:
                T = E.selected;
        }
        return (0, e.jsx)(o.P3F, {
            onClick: void 0 !== L ? L : () => {},
            className: E.clickable,
            children: (0, e.jsxs)('span', {
                onMouseEnter: void 0 !== u ? u : () => {},
                onMouseLeave: void 0 !== O ? O : () => {},
                id: 'balance-widget-pill',
                ref: t,
                className: s()(E.container, T, p),
                children: [
                    (0, e.jsx)(d.M, {}),
                    (0, e.jsx)(a.Z, {
                        value: n,
                        placeholderValue: r
                    }),
                    h && (0, e.jsx)(_, {})
                ]
            })
        });
    });
