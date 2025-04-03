e.d(s, { default: () => m });
var n = e(200651),
    t = e(192379),
    r = e(481060),
    a = e(230711),
    l = e(695346),
    c = e(626135),
    o = e(981631),
    x = e(676654),
    d = e(388032),
    h = e(951874);
let m = (i) => {
    let { transitionState: s, onClose: e, onScrollToGuildsSection: m } = i;
    return (
        t.useEffect(() => {
            c.default.track(o.rMx.OPEN_MODAL, { type: 'Confirm Disable Activity Sharing' });
        }, []),
        (0, n.jsxs)(r.Y0X, {
            transitionState: s,
            'aria-label': '',
            children: [
                (0, n.jsx)(r.xBx, {
                    children: (0, n.jsx)(r.X6q, {
                        variant: 'heading-lg/bold',
                        children: d.NW.string(d.t['3k4hTU'])
                    })
                }),
                (0, n.jsxs)(r.hzk, {
                    children: [
                        (0, n.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            children: d.NW.string(x.Z.IR0Bf3)
                        }),
                        (0, n.jsx)(r.Text, {
                            className: h.otherOptions,
                            variant: 'text-md/normal',
                            children: d.NW.string(d.t.TpDXm5)
                        }),
                        (0, n.jsxs)('div', {
                            className: h.linksContainer,
                            children: [
                                (0, n.jsxs)(r.P3F, {
                                    onClick: () => {
                                        e(), m();
                                    },
                                    className: h.link,
                                    children: [
                                        (0, n.jsx)(r.Text, {
                                            variant: 'text-sm/medium',
                                            children: d.NW.string(x.Z['4I+VjI'])
                                        }),
                                        (0, n.jsx)(r.LJT, { size: 'sm' })
                                    ]
                                }),
                                (0, n.jsx)(r.$i$, { className: h.linkDivider }),
                                (0, n.jsxs)(r.P3F, {
                                    onClick: () => {
                                        e(), a.Z.open(o.oAB.REGISTERED_GAMES);
                                    },
                                    className: h.link,
                                    children: [
                                        (0, n.jsx)(r.Text, {
                                            variant: 'text-sm/medium',
                                            children: d.NW.string(x.Z.sbwbEB)
                                        }),
                                        (0, n.jsx)(r.LJT, { size: 'sm' })
                                    ]
                                }),
                                (0, n.jsx)(r.$i$, { className: h.linkDivider }),
                                (0, n.jsxs)(r.P3F, {
                                    onClick: () => {
                                        e(), a.Z.open(o.oAB.CONNECTIONS);
                                    },
                                    className: h.link,
                                    children: [
                                        (0, n.jsx)(r.Text, {
                                            variant: 'text-sm/medium',
                                            children: d.NW.string(x.Z.QPiPpa)
                                        }),
                                        (0, n.jsx)(r.LJT, { size: 'sm' })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsxs)(r.mzw, {
                    className: h.footer,
                    children: [
                        (0, n.jsx)(r.zxk, {
                            onClick: () => {
                                l.G6.updateSetting(!1), e();
                            },
                            color: r.Ttl.RED,
                            children: d.NW.string(d.t.R9GHyc)
                        }),
                        (0, n.jsx)(r.zxk, {
                            onClick: e,
                            color: r.Ttl.PRIMARY,
                            children: d.NW.string(d.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    );
};
