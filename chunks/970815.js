i.d(e, {
    A4: () => E,
    b6: () => a.b
}),
    i(47120);
var n = i(200651),
    r = i(192379),
    s = i(120356),
    o = i.n(s),
    l = i(481060),
    a = i(317257),
    c = i(583478),
    d = i(960919),
    h = i(15268);
let u = () =>
        (0, n.jsx)('img', {
            className: h.notificationBadge,
            src: i(808824),
            alt: ''
        }),
    E = (0, r.forwardRef)(function (t, e) {
        let { balance: i, balanceWidgetMode: s = a.b.DEFAULT, showNotificationBadge: E, onClick: g, onMouseEnter: _, onMouseLeave: L, onMouseDown: C, className: m } = t,
            p = h.default;
        switch (s) {
            case a.b.HIGHLIGHTED:
                p = h.highlighted;
                break;
            case a.b.SELECTED:
                p = h.selected;
        }
        let [O, T] = (0, r.useState)(!1),
            k = null === i;
        (0, r.useEffect)(() => {
            k &&
                !O &&
                (T(!0),
                setTimeout(() => {
                    T(!1);
                }, 500));
        }, [k, T, O]);
        let f = k || O,
            U = O ? null : i;
        return (0, n.jsx)(l.P3F, {
            onClick: f ? void 0 : g,
            className: h.clickable,
            children: (0, n.jsxs)('span', {
                onMouseEnter: _,
                onMouseLeave: L,
                onMouseDown: C,
                id: 'balance-widget-pill',
                ref: e,
                className: o()(h.container, p, m, { [h.containerLoading]: f }),
                children: [
                    (0, n.jsx)(d.M, { loading: f }),
                    (0, n.jsx)(c.Z, {
                        value: U,
                        className: f ? h.counterLoading : void 0
                    }),
                    E && (0, n.jsx)(u, {})
                ]
            })
        });
    });
