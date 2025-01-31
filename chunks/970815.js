n.d(t, { A: () => h }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
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
            [r, o] = (0, s.useState)(null),
            c = (0, s.useRef)(null);
        (0, s.useEffect)(() => {
            null !== t &&
                (null === r
                    ? o(t)
                    : r !== t &&
                      null === c.current &&
                      (c.current = setTimeout(() => {
                          (c.current = null), r < t ? o(r + 1) : r > t && o(r - 1);
                      }, 20)));
        }, [r, t, o]);
        let u = null === r ? n : r,
            m = null !== u ? ''.concat(u).length : 1;
        return (0, i.jsx)(a.Text, {
            variant: 'text-md/semibold',
            className: l()(d.balanceCounterText),
            style: { width: ''.concat(m, 'ch') },
            children: u
        });
    },
    h = (e) => {
        let { balance: t, placeholderBalance: n, balanceWidgetMode: s = o.b.DEFAULT, showNotificationBadge: r, onClick: h, onMouseEnter: g, onMouseLeave: _ } = e,
            x = d.default;
        switch (s) {
            case o.b.HIGHLIGHTED:
                x = d.highlighted;
                break;
            case o.b.SELECTED:
                x = d.selected;
        }
        return (0, i.jsx)('span', {
            onMouseEnter: void 0 !== g ? g : () => {},
            onMouseLeave: void 0 !== _ ? _ : () => {},
            children: (0, i.jsxs)(a.P3F, {
                className: l()(d.container, x),
                onClick: void 0 !== h ? h : () => {},
                children: [
                    (0, i.jsx)(c.M, {}),
                    (0, i.jsx)(m, {
                        value: t,
                        placeholderValue: n
                    }),
                    r && (0, i.jsx)(u, {})
                ]
            })
        });
    };
h.BalanceWidgetMode = o.b;
