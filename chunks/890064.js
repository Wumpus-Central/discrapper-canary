n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(951394),
    c = n(858523),
    d = n(388032),
    u = n(877184);
t.Z = function (e) {
    let { guild: t, className: n } = e,
        [l, h] = r.useState(!1),
        m = r.useCallback(() => h(!0), [h]),
        p = r.useCallback(() => h(!0), [h]);
    return (0, i.jsx)('div', {
        className: a()(u.actionButtonsContainer, n, { [u.forceButtonsShow]: l }),
        children: (0, i.jsx)(o.ZP, {
            children: (0, i.jsx)(c.GlobalDiscoveryServerCardPopout, {
                onRequestOpen: m,
                onRequestClose: p,
                guild: t,
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(s.Tooltip, {
                        text: d.intl.string(d.t.UKOtz8),
                        hideOnClick: !0,
                        children: (e) => {
                            let { onClick: r, ...l } = e;
                            return (0, i.jsx)(o.zx, {
                                ...n,
                                ...l,
                                onClick: (e) => {
                                    e.stopPropagation(), null == r || r(), t(e);
                                },
                                'aria-label': d.intl.string(d.t.UKOtz8),
                                children: (0, i.jsx)(s.MoreHorizontalIcon, {
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
