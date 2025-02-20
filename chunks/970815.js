n.d(t, {
    A4: () => E,
    b6: () => a.b
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(481060),
    a = n(317257),
    c = n(583478),
    u = n(960919),
    d = n(247489);
let _ = () =>
        (0, r.jsx)('img', {
            className: d.notificationBadge,
            src: n(808824),
            alt: ''
        }),
    E = (0, i.forwardRef)(function (e, t) {
        let { balance: n, balanceWidgetMode: l = a.b.DEFAULT, showNotificationBadge: E, onClick: p, onMouseEnter: h, onMouseLeave: f, onMouseDown: m, className: O } = e,
            N = d.default;
        switch (l) {
            case a.b.HIGHLIGHTED:
                N = d.highlighted;
                break;
            case a.b.SELECTED:
                N = d.selected;
        }
        let [g, I] = (0, i.useState)(!1),
            C = null === n;
        (0, i.useEffect)(() => {
            C &&
                !g &&
                (I(!0),
                setTimeout(() => {
                    I(!1);
                }, 500));
        }, [C, I, g]);
        let b = C || g,
            T = g ? null : n;
        return (0, r.jsx)(s.P3F, {
            onClick: b ? void 0 : p,
            className: d.clickable,
            children: (0, r.jsxs)('span', {
                onMouseEnter: h,
                onMouseLeave: f,
                onMouseDown: m,
                id: 'balance-widget-pill',
                ref: t,
                className: o()(d.container, N, O, { [d.containerLoading]: b }),
                children: [
                    (0, r.jsx)(u.M, { loading: b }),
                    (0, r.jsx)(c.Z, {
                        value: T,
                        className: b ? d.counterLoading : void 0
                    }),
                    E && (0, r.jsx)(_, {})
                ]
            })
        });
    });
