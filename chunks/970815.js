n.d(t, {
    A: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(317257),
    c = n(960919),
    d = n(289173);
let u = () =>
        (0, i.jsx)('img', {
            className: d.notificationBadge,
            src: n(808824),
            alt: ''
        }),
    m = (e) => {
        let { value: t, placeholderValue: n } = e,
            [s, a] = (0, r.useState)(null),
            o = (0, r.useRef)(null);
        return (
            (0, r.useEffect)(() => {
                if (null !== t)
                    null === s
                        ? a(t)
                        : s !== t &&
                          null === o.current &&
                          (o.current = setTimeout(() => {
                              (o.current = null), s < t ? a(s + 1) : s > t && a(s - 1);
                          }, 20));
            }, [s, t, a]),
            (0, i.jsx)(l.Text, {
                variant: 'text-md/semibold',
                className: d.text,
                children: null === s ? n : s
            })
        );
    },
    g = (e) => {
        let { balance: t, placeholderBalance: n, balanceWidgetMode: r = o.b.DEFAULT, showNotificationBadge: s, onClick: g, onMouseEnter: h, onMouseLeave: p } = e,
            x = d.default;
        switch (r) {
            case o.b.HIGHLIGHTED:
                x = d.highlighted;
                break;
            case o.b.SELECTED:
                x = d.selected;
        }
        return (0, i.jsx)('span', {
            onMouseEnter: void 0 !== h ? h : () => {},
            onMouseLeave: void 0 !== p ? p : () => {},
            children: (0, i.jsxs)(l.Clickable, {
                className: a()(d.container, x),
                onClick: void 0 !== g ? g : () => {},
                children: [
                    (0, i.jsx)(c.M, {}),
                    (0, i.jsx)(m, {
                        value: t,
                        placeholderValue: n
                    }),
                    s && (0, i.jsx)(u, {})
                ]
            })
        });
    };
g.BalanceWidgetMode = o.b;
