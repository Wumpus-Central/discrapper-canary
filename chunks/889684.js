a.d(t, { default: () => m });
var n = a(200651),
    s = a(192379),
    i = a(481060),
    o = a(230711),
    r = a(197115),
    c = a(626135),
    l = a(981631),
    d = a(474936),
    u = a(388032),
    h = a(354509);
let m = (e) => {
    let { transitionState: t, onClose: a } = e;
    return (
        s.useEffect(() => {
            c.default.track(l.rMx.PREMIUM_UPSELL_VIEWED, { type: d.cd.EMOJI_AUTOCOMPLETE_MODAL });
        }, []),
        (0, n.jsxs)(i.Y0X, {
            transitionState: t,
            size: i.CgR.SMALL,
            'aria-label': '',
            children: [
                (0, n.jsxs)(i.hzk, {
                    className: h.content,
                    children: [
                        (0, n.jsx)('div', {
                            role: 'image',
                            className: h.image
                        }),
                        (0, n.jsx)(i.X6q, {
                            variant: 'heading-xl/semibold',
                            className: h.header,
                            children: u.NW.string(u.t.Uq1zJS)
                        }),
                        (0, n.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            children: u.NW.format(u.t.xPaO3t, {
                                onLearnMore: () => {
                                    a(), o.Z.open(l.oAB.PREMIUM);
                                }
                            })
                        })
                    ]
                }),
                (0, n.jsx)(i.mzw, {
                    children: (0, n.jsx)(r.Z, {
                        onClick: a,
                        buttonText: 'Get Nitro',
                        subscriptionTier: d.Si.TIER_2,
                        premiumModalAnalyticsLocation: { page: l.ZY5.CHANNEL_AUTOCOMPLETE_EMOJI_UPSELL_MODAL }
                    })
                }),
                (0, n.jsx)(i.olH, {
                    className: h.closeButton,
                    onClick: a
                })
            ]
        })
    );
};
