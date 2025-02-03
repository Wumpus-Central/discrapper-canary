n.d(t, {
    A4: () => E,
    b6: () => a.b
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    o = n(481060),
    a = n(317257),
    c = n(960919),
    d = n(289173);
let u = () =>
        (0, i.jsx)('img', {
            className: d.notificationBadge,
            src: n(808824),
            alt: ''
        }),
    _ = (e) => {
        let { value: t, placeholderValue: n } = e,
            [r, a] = (0, l.useState)(null),
            c = (0, l.useRef)(null);
        (0, l.useEffect)(() => {
            null !== t &&
                (null === r
                    ? a(t)
                    : r !== t &&
                      null === c.current &&
                      (c.current = setTimeout(() => {
                          (c.current = null), r < t ? a(r + 1) : r > t && a(r - 1);
                      }, 20)));
        }, [r, t, a]);
        let u = null === r ? n : r,
            _ = null !== u ? ''.concat(u).length : 1;
        return (0, i.jsx)(o.Text, {
            variant: 'text-md/semibold',
            className: s()(d.balanceCounterText),
            style: { width: ''.concat(_, 'ch') },
            children: u
        });
    },
    E = (0, l.forwardRef)(function (e, t) {
        let { balance: n, placeholderBalance: l, balanceWidgetMode: r = a.b.DEFAULT, showNotificationBadge: E, onClick: h, onMouseEnter: p, onMouseLeave: I, className: m } = e,
            T = d.default;
        switch (r) {
            case a.b.HIGHLIGHTED:
                T = d.highlighted;
                break;
            case a.b.SELECTED:
                T = d.selected;
        }
        return (0, i.jsx)(o.P3F, {
            onClick: void 0 !== h ? h : () => {},
            className: d.clickable,
            children: (0, i.jsxs)('span', {
                onMouseEnter: void 0 !== p ? p : () => {},
                onMouseLeave: void 0 !== I ? I : () => {},
                id: 'balance-widget-pill',
                ref: t,
                className: s()(d.container, T, m),
                children: [
                    (0, i.jsx)(c.M, {}),
                    (0, i.jsx)(_, {
                        value: n,
                        placeholderValue: l
                    }),
                    E && (0, i.jsx)(u, {})
                ]
            })
        });
    });
