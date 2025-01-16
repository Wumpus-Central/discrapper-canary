var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(442837),
    c = n(547280),
    d = n(678513),
    u = n(981631),
    h = n(388032),
    m = n(804648);
t.Z = function (e) {
    let { guild: t } = e,
        l = (0, o.e7)([d.Z], () => d.Z.getActiveGuildSignUp(t.id)),
        p = r.useCallback(() => {
            null != l &&
                (0, s.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('22862'), n.e('20965')]).then(n.bind(n, 646202));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            target: l,
                            guildId: t.id
                        });
                });
        }, [l, t.id]),
        g = r.useCallback(() => {
            null != l && (0, c.b)(l.key, l.dismissibleContent);
        }, [l]);
    if (null == l) return null;
    let f = 'url('.concat(l.backgroundAssetUrl, ') black top / cover no-repeat');
    return (0, i.jsx)(s.ThemeProvider, {
        theme: u.BRd.DARK,
        children: (e) =>
            (0, i.jsx)('div', {
                className: a()(m.container, e),
                children: (0, i.jsxs)('div', {
                    className: m.card,
                    style: { background: f },
                    children: [
                        (0, i.jsxs)('div', {
                            className: m.eyebrow,
                            children: [
                                (0, i.jsx)(s.EnvelopeIcon, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'none',
                                    children: h.intl.string(h.t.hhKpxs)
                                })
                            ]
                        }),
                        (0, i.jsx)(s.Heading, {
                            variant: 'heading-sm/medium',
                            children: l.noticeHeader
                        }),
                        (0, i.jsx)(s.Button, {
                            className: m.button,
                            color: 'none',
                            onClick: p,
                            children: (0, i.jsx)(s.Text, {
                                variant: 'text-sm/medium',
                                color: 'none',
                                children: h.intl.string(h.t.vv0Nsb)
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: m.dismiss,
                            children: (0, i.jsx)(s.Clickable, {
                                onClick: g,
                                'aria-label': h.intl.string(h.t.cpT0Cg),
                                children: (0, i.jsx)(s.XSmallIcon, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            })
                        })
                    ]
                })
            })
    });
};
