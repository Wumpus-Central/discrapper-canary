n.d(e, { default: () => c });
var a = n(255367);
n(73800);
var i = n(481060),
    s = n(313201),
    r = n(468706),
    o = n(388032),
    l = n(782410);
function c(t) {
    let { channelId: e, messageId: n, onClose: c, transitionState: d } = t,
        u = (0, s.Dt)();
    return (0, a.jsx)(i.Y0X, {
        transitionState: d,
        'aria-labelledby': u,
        size: i.CgR.SMALL,
        children: (0, a.jsxs)(i.hzk, {
            className: l.container,
            children: [
                (0, a.jsx)(i.X6q, {
                    id: u,
                    variant: 'heading-lg/bold',
                    color: 'header-primary',
                    className: l.header,
                    children: o.intl.string(o.t.B3vFdX)
                }),
                (0, a.jsx)(i.Text, {
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    className: l.__invalid_subheader,
                    children: o.intl.string(o.t.bNMQVF)
                }),
                (0, a.jsxs)('div', {
                    className: l.buttonContainer,
                    children: [
                        (0, a.jsx)(i.zxk, {
                            className: l.button,
                            size: i.zxk.Sizes.MEDIUM,
                            color: i.zxk.Colors.BRAND,
                            onClick: c,
                            children: o.intl.string(o.t.WAI6xs)
                        }),
                        (0, a.jsx)(i.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: o.intl.format(o.t.Ge0HUl, {
                                handleFalsePositiveHook: () => {
                                    c(), (0, r.e)(e, n);
                                }
                            })
                        })
                    ]
                })
            ]
        })
    });
}
