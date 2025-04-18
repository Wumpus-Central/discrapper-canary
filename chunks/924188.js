t.d(a, { default: () => c });
var n = t(200651);
t(192379);
var r = t(481060),
    i = t(313201),
    s = t(468706),
    o = t(388032),
    d = t(782410);
function c(e) {
    let { channelId: a, messageId: t, onClose: c, transitionState: l } = e,
        h = (0, i.Dt)();
    return (0, n.jsx)(r.Y0X, {
        transitionState: l,
        'aria-labelledby': h,
        size: r.CgR.SMALL,
        children: (0, n.jsxs)(r.hzk, {
            className: d.container,
            children: [
                (0, n.jsx)(r.X6q, {
                    id: h,
                    variant: 'heading-lg/bold',
                    color: 'header-primary',
                    className: d.header,
                    children: o.NW.string(o.t.B3vFdX)
                }),
                (0, n.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    className: d.__invalid_subheader,
                    children: o.NW.string(o.t.bNMQVF)
                }),
                (0, n.jsxs)('div', {
                    className: d.buttonContainer,
                    children: [
                        (0, n.jsx)(r.zxk, {
                            className: d.button,
                            size: r.zxk.Sizes.MEDIUM,
                            color: r.zxk.Colors.BRAND,
                            onClick: c,
                            children: o.NW.string(o.t.WAI6xs)
                        }),
                        (0, n.jsx)(r.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: o.NW.format(o.t.Ge0HUl, {
                                handleFalsePositiveHook: () => {
                                    c(), (0, s.e)(a, t);
                                }
                            })
                        })
                    ]
                })
            ]
        })
    });
}
