n.d(i, { default: () => h });
var e = n(200651),
    s = n(192379),
    l = n(481060),
    r = n(230711),
    a = n(695346),
    c = n(626135),
    d = n(981631),
    o = n(388032),
    x = n(88920);
let h = (t) => {
    let { transitionState: i, onClose: n } = t;
    s.useEffect(() => {
        c.default.track(d.rMx.OPEN_MODAL, { type: 'Confirm Disable Activity Sharing' });
    }, []);
    let h = [
        {
            title: o.intl.string(o.t['wnt8/P']),
            description: o.intl.string(o.t.VupM1t)
        },
        {
            title: o.intl.string(o.t.Arohq6),
            description: o.intl.string(o.t.nYLud3)
        },
        {
            title: o.intl.string(o.t.MDXRKi),
            description: o.intl.string(o.t.EG31Wl)
        }
    ];
    return (0, e.jsx)(l.Y0X, {
        transitionState: i,
        'aria-label': '',
        children: (0, e.jsxs)(l.hzk, {
            className: x.content,
            children: [
                (0, e.jsxs)('div', {
                    className: x.header,
                    children: [
                        (0, e.jsx)(l.X6q, {
                            variant: 'heading-xl/bold',
                            children: o.intl.string(o.t['3k4hTU'])
                        }),
                        (0, e.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: o.intl.string(o.t.IR0Bf3)
                        })
                    ]
                }),
                (0, e.jsx)('div', {
                    className: x.notes,
                    children: h.map((t, i) => {
                        let { title: n, description: s } = t;
                        return (0, e.jsxs)(e.Fragment, {
                            children: [
                                (0, e.jsxs)(
                                    'div',
                                    {
                                        className: x.note,
                                        children: [
                                            (0, e.jsx)(l.k$p, {}),
                                            (0, e.jsxs)('div', {
                                                children: [
                                                    (0, e.jsx)(l.X6q, {
                                                        variant: 'heading-md/semibold',
                                                        children: n
                                                    }),
                                                    (0, e.jsx)(l.Text, {
                                                        variant: 'text-xs/normal',
                                                        children: s
                                                    })
                                                ]
                                            })
                                        ]
                                    },
                                    i
                                ),
                                i !== h.length - 1 && (0, e.jsx)(l.$i$, { className: x.noteDivider })
                            ]
                        });
                    })
                }),
                (0, e.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    children: o.intl.string(o.t.cEjHRk)
                }),
                (0, e.jsxs)('div', {
                    className: x.linksContainer,
                    children: [
                        (0, e.jsxs)(l.P3F, {
                            onClick: () => {
                                n(), r.Z.open(d.oAB.REGISTERED_GAMES);
                            },
                            className: x.link,
                            children: [
                                (0, e.jsx)(l.Text, {
                                    variant: 'text-md/medium',
                                    children: o.intl.string(o.t['8uoLf3'])
                                }),
                                (0, e.jsx)(l.LJT, { size: 'md' })
                            ]
                        }),
                        (0, e.jsx)(l.$i$, { className: x.linkDivider }),
                        (0, e.jsxs)(l.P3F, {
                            onClick: () => {
                                n(), r.Z.open(d.oAB.CONNECTIONS);
                            },
                            className: x.link,
                            children: [
                                (0, e.jsx)(l.Text, {
                                    variant: 'text-md/medium',
                                    children: o.intl.string(o.t.Q42xe3)
                                }),
                                (0, e.jsx)(l.LJT, { size: 'md' })
                            ]
                        })
                    ]
                }),
                (0, e.jsxs)('div', {
                    className: x.buttonsContainer,
                    children: [
                        (0, e.jsx)(l.zxk, {
                            onClick: n,
                            color: l.Ttl.PRIMARY,
                            children: o.intl.string(o.t['ETE/oK'])
                        }),
                        (0, e.jsx)(l.zxk, {
                            onClick: () => {
                                a.G6.updateSetting(!1), n();
                            },
                            color: l.Ttl.RED,
                            children: o.intl.string(o.t.R9GHyc)
                        })
                    ]
                })
            ]
        })
    });
};
