i.d(n, { default: () => o });
var e = i(200651);
i(192379);
var s = i(481060),
    l = i(230711),
    r = i(695346),
    a = i(981631),
    c = i(388032),
    d = i(298858);
let o = (t) => {
    let { transitionState: n, onClose: i } = t,
        o = [
            {
                title: c.intl.string(c.t['wnt8/P']),
                description: c.intl.string(c.t.VupM1t)
            },
            {
                title: c.intl.string(c.t.Arohq6),
                description: c.intl.string(c.t.nYLud3)
            },
            {
                title: c.intl.string(c.t.MDXRKi),
                description: c.intl.string(c.t.EG31Wl)
            }
        ];
    return (0, e.jsx)(s.Y0X, {
        transitionState: n,
        'aria-label': '',
        children: (0, e.jsxs)(s.hzk, {
            className: d.content,
            children: [
                (0, e.jsxs)('div', {
                    className: d.header,
                    children: [
                        (0, e.jsx)(s.X6q, {
                            variant: 'heading-xl/bold',
                            children: c.intl.string(c.t['3k4hTU'])
                        }),
                        (0, e.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            children: c.intl.string(c.t.IR0Bf3)
                        })
                    ]
                }),
                (0, e.jsx)('div', {
                    className: d.notes,
                    children: o.map((t, n) => {
                        let { title: i, description: l } = t;
                        return (0, e.jsxs)(e.Fragment, {
                            children: [
                                (0, e.jsxs)(
                                    'div',
                                    {
                                        className: d.note,
                                        children: [
                                            (0, e.jsx)(s.k$p, {}),
                                            (0, e.jsxs)('div', {
                                                children: [
                                                    (0, e.jsx)(s.X6q, {
                                                        variant: 'heading-md/semibold',
                                                        children: i
                                                    }),
                                                    (0, e.jsx)(s.Text, {
                                                        variant: 'text-xs/normal',
                                                        children: l
                                                    })
                                                ]
                                            })
                                        ]
                                    },
                                    n
                                ),
                                n !== o.length - 1 && (0, e.jsx)(s.$i$, { className: d.noteDivider })
                            ]
                        });
                    })
                }),
                (0, e.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    children: c.intl.string(c.t.cEjHRk)
                }),
                (0, e.jsxs)('div', {
                    className: d.linksContainer,
                    children: [
                        (0, e.jsxs)(s.P3F, {
                            onClick: () => {
                                i(), l.Z.open(a.oAB.REGISTERED_GAMES);
                            },
                            className: d.link,
                            children: [
                                (0, e.jsx)(s.Text, {
                                    variant: 'text-md/medium',
                                    children: c.intl.string(c.t['8uoLf3'])
                                }),
                                (0, e.jsx)(s.LJT, { size: 'md' })
                            ]
                        }),
                        (0, e.jsx)(s.$i$, { className: d.linkDivider }),
                        (0, e.jsxs)(s.P3F, {
                            onClick: () => {
                                i(), l.Z.open(a.oAB.CONNECTIONS);
                            },
                            className: d.link,
                            children: [
                                (0, e.jsx)(s.Text, {
                                    variant: 'text-md/medium',
                                    children: c.intl.string(c.t.Q42xe3)
                                }),
                                (0, e.jsx)(s.LJT, { size: 'md' })
                            ]
                        })
                    ]
                }),
                (0, e.jsxs)('div', {
                    className: d.buttonsContainer,
                    children: [
                        (0, e.jsx)(s.zxk, {
                            onClick: i,
                            color: s.Ttl.PRIMARY,
                            children: c.intl.string(c.t['ETE/oK'])
                        }),
                        (0, e.jsx)(s.zxk, {
                            onClick: () => {
                                r.G6.updateSetting(!1), i();
                            },
                            color: s.Ttl.RED,
                            children: c.intl.string(c.t.R9GHyc)
                        })
                    ]
                })
            ]
        })
    });
};
