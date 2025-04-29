n.d(t, { default: () => m });
var s = n(255367),
    e = n(73800),
    l = n(481060),
    a = n(230711),
    r = n(695346),
    c = n(626135),
    d = n(981631),
    o = n(676654),
    x = n(388032),
    h = n(951874);
let m = (i) => {
    let { transitionState: t, onClose: n, onScrollToGuildsSection: m } = i;
    return (
        e.useEffect(() => {
            c.default.track(d.rMx.OPEN_MODAL, { type: 'Confirm Disable Activity Sharing' });
        }, []),
        (0, s.jsxs)(l.Y0X, {
            transitionState: t,
            'aria-label': '',
            children: [
                (0, s.jsx)(l.xBx, {
                    children: (0, s.jsx)(l.X6q, {
                        variant: 'heading-lg/bold',
                        children: x.intl.string(x.t['3k4hTU'])
                    })
                }),
                (0, s.jsxs)(l.hzk, {
                    children: [
                        (0, s.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: x.intl.string(o.default.IR0Bf3)
                        }),
                        (0, s.jsx)(l.Text, {
                            className: h.otherOptions,
                            variant: 'text-md/normal',
                            children: x.intl.string(x.t.TpDXm5)
                        }),
                        (0, s.jsxs)('div', {
                            className: h.linksContainer,
                            children: [
                                (0, s.jsxs)(l.P3F, {
                                    onClick: () => {
                                        n(), m();
                                    },
                                    className: h.link,
                                    children: [
                                        (0, s.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: x.intl.string(o.default['4I+VjI'])
                                        }),
                                        (0, s.jsx)(l.LJT, { size: 'sm' })
                                    ]
                                }),
                                (0, s.jsx)(l.$i$, { className: h.linkDivider }),
                                (0, s.jsxs)(l.P3F, {
                                    onClick: () => {
                                        n(), a.Z.open(d.oAB.REGISTERED_GAMES);
                                    },
                                    className: h.link,
                                    children: [
                                        (0, s.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: x.intl.string(o.default.sbwbEB)
                                        }),
                                        (0, s.jsx)(l.LJT, { size: 'sm' })
                                    ]
                                }),
                                (0, s.jsx)(l.$i$, { className: h.linkDivider }),
                                (0, s.jsxs)(l.P3F, {
                                    onClick: () => {
                                        n(), a.Z.open(d.oAB.CONNECTIONS);
                                    },
                                    className: h.link,
                                    children: [
                                        (0, s.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: x.intl.string(o.default.QPiPpa)
                                        }),
                                        (0, s.jsx)(l.LJT, { size: 'sm' })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                (0, s.jsxs)(l.mzw, {
                    className: h.footer,
                    children: [
                        (0, s.jsx)(l.zxk, {
                            onClick: () => {
                                r.G6.updateSetting(!1), n();
                            },
                            color: l.Ttl.RED,
                            children: x.intl.string(x.t.R9GHyc)
                        }),
                        (0, s.jsx)(l.zxk, {
                            onClick: n,
                            color: l.Ttl.PRIMARY,
                            children: x.intl.string(x.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    );
};
