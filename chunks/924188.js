n.d(e, { default: () => u });
var a = n(255367),
    i = n(73800),
    r = n(481060),
    s = n(313201),
    o = n(468706),
    l = n(470734),
    c = n(388032),
    d = n(782410);
function u(t) {
    let { channelId: e, messageId: n, onClose: u, transitionState: m } = t,
        h = (0, s.Dt)(),
        x = (0, l.pn)('ForumExplicitMediaModal'),
        p = i.useMemo(() => (x ? c.intl.string(c.t.i4AbAQ) : c.intl.string(c.t.bNMQVF)), [x]);
    return (0, a.jsx)(r.Y0X, {
        transitionState: m,
        'aria-labelledby': h,
        size: r.CgR.SMALL,
        parentComponent: 'ForumExplicitMediaModal',
        children: (0, a.jsxs)(r.hzk, {
            className: d.container,
            children: [
                (0, a.jsx)(r.X6q, {
                    id: h,
                    variant: 'heading-lg/bold',
                    color: 'header-primary',
                    className: d.header,
                    children: c.intl.string(c.t.B3vFdX)
                }),
                (0, a.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    className: d.__invalid_subheader,
                    children: p
                }),
                (0, a.jsxs)('div', {
                    className: d.buttonContainer,
                    children: [
                        (0, a.jsx)('div', {
                            'data-button-hoisted-classname-wrapper': !0,
                            className: d.button,
                            children: (0, a.jsx)(r.zxk, {
                                variant: 'primary',
                                text: c.intl.string(c.t.WAI6xs),
                                onClick: u
                            })
                        }),
                        (0, a.jsx)(r.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: c.intl.format(c.t.Ge0HUl, {
                                handleFalsePositiveHook: () => {
                                    (u(), (0, o.e)(e, n));
                                }
                            })
                        })
                    ]
                })
            ]
        })
    });
}
