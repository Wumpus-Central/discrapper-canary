n.d(t, {
    A: function () {
        return u;
    }
});
var i = n(200651),
    r = n(120356),
    s = n.n(r),
    a = n(481060),
    l = n(317257),
    o = n(960919),
    c = n(289173);
let d = () =>
        (0, i.jsx)('img', {
            className: c.notificationBadge,
            src: n(808824),
            alt: ''
        }),
    u = (e) => {
        let { balance: t, balanceWidgetMode: n = l.b.DEFAULT, showNotificationBadge: r, onClick: u, onMouseEnter: m, onMouseLeave: g } = e,
            h = c.default;
        switch (n) {
            case l.b.HIGHLIGHTED:
                h = c.highlighted;
                break;
            case l.b.SELECTED:
                h = c.selected;
        }
        return (0, i.jsx)('span', {
            onMouseEnter: void 0 !== m ? m : () => {},
            onMouseLeave: void 0 !== g ? g : () => {},
            children: (0, i.jsxs)(a.Clickable, {
                className: s()(c.container, h),
                onClick: void 0 !== u ? u : () => {},
                children: [
                    (0, i.jsx)(o.M, {}),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-md/semibold',
                        className: c.text,
                        children: t
                    }),
                    r && (0, i.jsx)(d, {})
                ]
            })
        });
    };
u.BalanceWidgetMode = l.b;
