n.d(e, { default: () => u });
var a = n(255367),
    i = n(73800),
    o = n(481060),
    r = n(313201),
    l = n(468706),
    s = n(470734),
    c = n(388032),
    d = n(782410);
function u(t) {
    let { channelId: e, messageId: n, onClose: u, transitionState: m } = t,
        _ = (0, r.Dt)(),
        p = (0, s.pn)('ForumExplicitMediaModal'),
        x = i.useMemo(() => (p ? c.intl.string(c.t.i4AbAQ) : c.intl.string(c.t.bNMQVF)), [p]);
    return (0, a.jsx)(o.Y0X, {
        transitionState: m,
        'aria-labelledby': _,
        size: o.CgR.SMALL,
        parentComponent: 'ForumExplicitMediaModal',
        children: (0, a.jsxs)(o.hzk, {
            className: d.container,
            children: [
                (0, a.jsx)(o.X6q, {
                    id: _,
                    variant: 'heading-lg/bold',
                    color: 'header-primary',
                    className: d.header,
                    children: c.intl.string(c.t.B3vFdX)
                }),
                (0, a.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    className: d.__invalid_subheader,
                    children: x
                }),
                (0, a.jsxs)('div', {
                    className: d.buttonContainer,
                    children: [
                        (0, a.jsx)('div', {
                            'data-button-hoisted-classname-wrapper': !0,
                            className: d.button,
                            children: (0, a.jsx)(o.zxk, {
                                variant: 'primary',
                                text: c.intl.string(c.t.WAI6xs),
                                onClick: u
                            })
                        }),
                        (0, a.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: c.intl.format(c.t.Ge0HUl, {
                                handleFalsePositiveHook: () => {
                                    (u(), (0, l.e)(e, n));
                                }
                            })
                        })
                    ]
                })
            ]
        })
    });
}
