n.d(i, { default: () => h }), n(266796);
var e = n(200651),
    s = n(192379),
    r = n(481060),
    a = n(230711),
    l = n(695346),
    c = n(626135),
    d = n(981631),
    o = n(388032),
    x = n(890905);
let h = (t) => {
    let { transitionState: i, onClose: n } = t;
    s.useEffect(() => {
        c.default.track(d.rMx.OPEN_MODAL, { type: 'Confirm Disable Activity Sharing' });
    }, []);
    let h = [
        {
            title: o.NW.string(o.t['wnt8/P']),
            description: o.NW.string(o.t.VupM1t)
        },
        {
            title: o.NW.string(o.t.Arohq6),
            description: o.NW.string(o.t.nYLud3)
        },
        {
            title: o.NW.string(o.t.MDXRKi),
            description: o.NW.string(o.t.EG31Wl)
        }
    ];
    return (0, e.jsx)(r.Y0X, {
        transitionState: i,
        'aria-label': '',
        children: (0, e.jsxs)(r.hzk, {
            className: x.content,
            children: [
                (0, e.jsxs)('div', {
                    className: x.header,
                    children: [
                        (0, e.jsx)(r.X6q, {
                            variant: 'heading-xl/bold',
                            children: o.NW.string(o.t['3k4hTU'])
                        }),
                        (0, e.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            children: o.NW.string(o.t.IR0Bf3)
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
                                            (0, e.jsx)(r.k$p, {}),
                                            (0, e.jsxs)('div', {
                                                children: [
                                                    (0, e.jsx)(r.X6q, {
                                                        variant: 'heading-md/semibold',
                                                        children: n
                                                    }),
                                                    (0, e.jsx)(r.Text, {
                                                        variant: 'text-xs/normal',
                                                        children: s
                                                    })
                                                ]
                                            })
                                        ]
                                    },
                                    i
                                ),
                                i !== h.length - 1 && (0, e.jsx)(r.$i$, { className: x.noteDivider })
                            ]
                        });
                    })
                }),
                (0, e.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    children: o.NW.string(o.t.cEjHRk)
                }),
                (0, e.jsxs)('div', {
                    className: x.linksContainer,
                    children: [
                        (0, e.jsxs)(r.P3F, {
                            onClick: () => {
                                n(), a.Z.open(d.oAB.REGISTERED_GAMES);
                            },
                            className: x.link,
                            children: [
                                (0, e.jsx)(r.Text, {
                                    variant: 'text-md/medium',
                                    children: o.NW.string(o.t['8uoLf3'])
                                }),
                                (0, e.jsx)(r.LJT, { size: 'md' })
                            ]
                        }),
                        (0, e.jsx)(r.$i$, { className: x.linkDivider }),
                        (0, e.jsxs)(r.P3F, {
                            onClick: () => {
                                n(), a.Z.open(d.oAB.CONNECTIONS);
                            },
                            className: x.link,
                            children: [
                                (0, e.jsx)(r.Text, {
                                    variant: 'text-md/medium',
                                    children: o.NW.string(o.t.Q42xe3)
                                }),
                                (0, e.jsx)(r.LJT, { size: 'md' })
                            ]
                        })
                    ]
                }),
                (0, e.jsxs)('div', {
                    className: x.buttonsContainer,
                    children: [
                        (0, e.jsx)(r.zxk, {
                            onClick: n,
                            color: r.Ttl.PRIMARY,
                            children: o.NW.string(o.t['ETE/oK'])
                        }),
                        (0, e.jsx)(r.zxk, {
                            onClick: () => {
                                l.G6.updateSetting(!1), n();
                            },
                            color: r.Ttl.RED,
                            children: o.NW.string(o.t.R9GHyc)
                        })
                    ]
                })
            ]
        })
    });
};
