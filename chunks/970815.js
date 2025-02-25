n.d(t, {
    A4: () => _,
    b6: () => l.b
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(317257),
    c = n(583478),
    u = n(960919),
    d = n(247489);
let f = () =>
        (0, r.jsx)('img', {
            className: d.notificationBadge,
            src: n(808824),
            alt: ''
        }),
    p = 'balance-widget-pill',
    _ = (0, i.forwardRef)(function (e, t) {
        let { balance: n, balanceWidgetMode: o = l.b.DEFAULT, showNotificationBadge: _, onClick: h, onMouseEnter: m, onMouseLeave: g, onMouseDown: E, className: v } = e,
            b = d.default;
        switch (o) {
            case l.b.HIGHLIGHTED:
                b = d.highlighted;
                break;
            case l.b.SELECTED:
                b = d.selected;
        }
        let [y, O] = (0, i.useState)(!1),
            S = null === n;
        (0, i.useEffect)(() => {
            S &&
                !y &&
                (O(!0),
                setTimeout(() => {
                    O(!1);
                }, 500));
        }, [S, O, y]);
        let I = S || y,
            T = y ? null : n;
        return (0, r.jsx)(s.P3F, {
            onClick: I ? void 0 : h,
            className: d.clickable,
            children: (0, r.jsxs)('span', {
                onMouseEnter: m,
                onMouseLeave: g,
                onMouseDown: E,
                id: p,
                ref: t,
                className: a()(d.container, b, v, { [d.containerLoading]: I }),
                children: [
                    (0, r.jsx)(u.M, { loading: I }),
                    (0, r.jsx)(c.Z, {
                        value: T,
                        className: I ? d.counterLoading : void 0
                    }),
                    _ && (0, r.jsx)(f, {})
                ]
            })
        });
    });
