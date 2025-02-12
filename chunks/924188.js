t.d(a, { default: () => d });
var n = t(200651);
t(192379);
var i = t(481060),
    r = t(313201),
    s = t(468706),
    o = t(388032),
    l = t(474849);
function d(e) {
    let { channelId: a, messageId: t, onClose: d, transitionState: c } = e,
        h = (0, r.Dt)();
    return (0, n.jsx)(i.Y0X, {
        transitionState: c,
        'aria-labelledby': h,
        size: i.CgR.SMALL,
        children: (0, n.jsxs)(i.hzk, {
            className: l.container,
            children: [
                (0, n.jsx)(i.X6q, {
                    id: h,
                    variant: 'heading-lg/bold',
                    color: 'header-primary',
                    className: l.header,
                    children: o.intl.string(o.t.B3vFdX)
                }),
                (0, n.jsx)(i.Text, {
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    className: l.__invalid_subheader,
                    children: o.intl.string(o.t.bNMQVF)
                }),
                (0, n.jsxs)('div', {
                    className: l.buttonContainer,
                    children: [
                        (0, n.jsx)(i.zxk, {
                            className: l.button,
                            size: i.zxk.Sizes.MEDIUM,
                            color: i.zxk.Colors.BRAND,
                            onClick: d,
                            children: o.intl.string(o.t.WAI6xs)
                        }),
                        (0, n.jsx)(i.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: o.intl.format(o.t.Ge0HUl, {
                                handleFalsePositiveHook: () => {
                                    d(), (0, s.e)(a, t);
                                }
                            })
                        })
                    ]
                })
            ]
        })
    });
}
