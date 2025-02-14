i.d(e, {
    A4: () => g,
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
    h = i(981631),
    u = i(15268);
let E = () =>
        (0, n.jsx)('img', {
            className: u.notificationBadge,
            src: i(808824),
            alt: ''
        }),
    g = (0, r.forwardRef)(function (t, e) {
        let { balance: i, balanceWidgetMode: s = a.b.DEFAULT, showNotificationBadge: g, onClick: _, onMouseEnter: L, onMouseLeave: C, className: m } = t,
            p = u.default;
        switch (s) {
            case a.b.HIGHLIGHTED:
                p = u.highlighted;
                break;
            case a.b.SELECTED:
                p = u.selected;
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
            U = O ? null : i,
            v = void 0 === _ || f ? h.dG4 : _,
            R = void 0 !== L ? L : h.dG4,
            b = void 0 !== C ? C : h.dG4;
        return (0, n.jsx)(l.P3F, {
            onClick: v,
            className: u.clickable,
            children: (0, n.jsxs)('span', {
                onMouseEnter: R,
                onMouseLeave: b,
                id: 'balance-widget-pill',
                ref: e,
                className: o()(u.container, p, m, { [u.containerLoading]: f }),
                children: [
                    (0, n.jsx)(d.M, { loading: f }),
                    (0, n.jsx)(c.Z, {
                        value: U,
                        className: f ? u.counterLoading : void 0
                    }),
                    g && (0, n.jsx)(E, {})
                ]
            })
        });
    });
