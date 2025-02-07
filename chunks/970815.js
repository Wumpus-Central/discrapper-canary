n.d(t, {
    A4: () => E,
    b6: () => o.b
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(481060),
    o = n(317257),
    c = n(583478),
    d = n(960919),
    u = n(289173);
let _ = () =>
        (0, i.jsx)('img', {
            className: u.notificationBadge,
            src: n(808824),
            alt: ''
        }),
    E = (0, l.forwardRef)(function (e, t) {
        let { balance: n, placeholderBalance: l = 0, balanceWidgetMode: r = o.b.DEFAULT, showNotificationBadge: E, onClick: h, onMouseEnter: p, onMouseLeave: I, className: m } = e,
            C = u.default;
        switch (r) {
            case o.b.HIGHLIGHTED:
                C = u.highlighted;
                break;
            case o.b.SELECTED:
                C = u.selected;
        }
        return (0, i.jsx)(a.P3F, {
            onClick: void 0 !== h ? h : () => {},
            className: u.clickable,
            children: (0, i.jsxs)('span', {
                onMouseEnter: void 0 !== p ? p : () => {},
                onMouseLeave: void 0 !== I ? I : () => {},
                id: 'balance-widget-pill',
                ref: t,
                className: s()(u.container, C, m),
                children: [
                    (0, i.jsx)(d.M, {}),
                    (0, i.jsx)(c.Z, {
                        value: n,
                        placeholderValue: l
                    }),
                    E && (0, i.jsx)(_, {})
                ]
            })
        });
    });
