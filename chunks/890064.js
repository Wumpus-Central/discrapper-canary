n.d(t, { Z: () => h }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(951394),
    c = n(858523),
    d = n(388032),
    u = n(123621);
let h = function (e) {
    let { guild: t, className: n } = e,
        [r, h] = l.useState(!1),
        m = l.useCallback(() => h(!0), [h]),
        p = l.useCallback(() => h(!0), [h]);
    return (0, i.jsx)('div', {
        className: a()(u.actionButtonsContainer, n, { [u.forceButtonsShow]: r }),
        children: (0, i.jsx)(o.ZP, {
            children: (0, i.jsx)(c.R, {
                onRequestOpen: m,
                onRequestClose: p,
                guild: t,
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(s.ua7, {
                        text: d.intl.string(d.t.UKOtz8),
                        hideOnClick: !0,
                        children: (e) => {
                            let { onClick: l, ...r } = e;
                            return (0, i.jsx)(o.zx, {
                                ...n,
                                ...r,
                                onClick: (e) => {
                                    e.stopPropagation(), null == l || l(), t(e);
                                },
                                'aria-label': d.intl.string(d.t.UKOtz8),
                                children: (0, i.jsx)(s.xhG, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: u.overflowIcon
                                })
                            });
                        }
                    });
                }
            })
        })
    });
};
