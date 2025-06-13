n.d(e, { default: () => u });
var a = n(255367),
    i = n(73800),
    o = n(481060),
    s = n(313201),
    r = n(468706),
    l = n(470734),
    c = n(388032),
    d = n(782410);
function u(t) {
    let { channelId: e, messageId: n, onClose: u, transitionState: m } = t,
        x = (0, s.Dt)(),
        h = (0, l.pn)('ForumExplicitMediaModal'),
        _ = i.useMemo(() => (h ? c.intl.string(c.t.i4AbAQ) : c.intl.string(c.t.bNMQVF)), [h]);
    return (0, a.jsx)(o.Y0X, {
        transitionState: m,
        'aria-labelledby': x,
        size: o.CgR.SMALL,
        parentComponent: 'ForumExplicitMediaModal',
        children: (0, a.jsxs)(o.hzk, {
            className: d.container,
            children: [
                (0, a.jsx)(o.X6q, {
                    id: x,
                    variant: 'heading-lg/bold',
                    color: 'header-primary',
                    className: d.header,
                    children: c.intl.string(c.t.B3vFdX)
                }),
                (0, a.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    className: d.__invalid_subheader,
                    children: _
                }),
                (0, a.jsxs)('div', {
                    className: d.buttonContainer,
                    children: [
                        (0, a.jsx)(o.zxk, {
                            className: d.button,
                            size: o.zxk.Sizes.MEDIUM,
                            color: o.zxk.Colors.BRAND,
                            onClick: u,
                            children: c.intl.string(c.t.WAI6xs)
                        }),
                        (0, a.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: c.intl.format(c.t.Ge0HUl, {
                                handleFalsePositiveHook: () => {
                                    u(), (0, r.e)(e, n);
                                }
                            })
                        })
                    ]
                })
            ]
        })
    });
}
