i.d(e, {
    A4: () => E,
    b6: () => a.b
});
var n = i(200651),
    r = i(192379),
    s = i(120356),
    o = i.n(s),
    l = i(481060),
    a = i(317257),
    c = i(583478),
    d = i(960919),
    h = i(369120);
let u = () =>
        (0, n.jsx)('img', {
            className: h.notificationBadge,
            src: i(808824),
            alt: ''
        }),
    E = (0, r.forwardRef)(function (t, e) {
        let { balance: i, placeholderBalance: r = 0, balanceWidgetMode: s = a.b.DEFAULT, showNotificationBadge: E, onClick: g, onMouseEnter: _, onMouseLeave: L, className: C } = t,
            m = h.default;
        switch (s) {
            case a.b.HIGHLIGHTED:
                m = h.highlighted;
                break;
            case a.b.SELECTED:
                m = h.selected;
        }
        return (0, n.jsx)(l.P3F, {
            onClick: void 0 !== g ? g : () => {},
            className: h.clickable,
            children: (0, n.jsxs)('span', {
                onMouseEnter: void 0 !== _ ? _ : () => {},
                onMouseLeave: void 0 !== L ? L : () => {},
                id: 'balance-widget-pill',
                ref: e,
                className: o()(h.container, m, C),
                children: [
                    (0, n.jsx)(d.M, {}),
                    (0, n.jsx)(c.Z, {
                        value: i,
                        placeholderValue: r
                    }),
                    E && (0, n.jsx)(u, {})
                ]
            })
        });
    });
