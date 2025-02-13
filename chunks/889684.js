a.d(t, { default: () => m });
var n = a(200651),
    i = a(192379),
    s = a(481060),
    o = a(230711),
    r = a(197115),
    c = a(626135),
    l = a(981631),
    d = a(474936),
    u = a(388032),
    h = a(542943);
let m = (e) => {
    let { transitionState: t, onClose: a } = e;
    return (
        i.useEffect(() => {
            c.default.track(l.rMx.PREMIUM_UPSELL_VIEWED, { type: d.cd.EMOJI_AUTOCOMPLETE_MODAL });
        }, []),
        (0, n.jsxs)(s.Y0X, {
            transitionState: t,
            size: s.CgR.SMALL,
            'aria-label': '',
            children: [
                (0, n.jsxs)(s.hzk, {
                    className: h.content,
                    children: [
                        (0, n.jsx)('div', {
                            role: 'image',
                            className: h.image
                        }),
                        (0, n.jsx)(s.X6q, {
                            variant: 'heading-xl/semibold',
                            className: h.header,
                            children: u.intl.string(u.t.Uq1zJS)
                        }),
                        (0, n.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            children: u.intl.format(u.t.xPaO3t, {
                                onLearnMore: () => {
                                    a(), o.Z.open(l.oAB.PREMIUM);
                                }
                            })
                        })
                    ]
                }),
                (0, n.jsx)(s.mzw, {
                    children: (0, n.jsx)(r.Z, {
                        onClick: a,
                        buttonText: 'Get Nitro',
                        subscriptionTier: d.Si.TIER_2,
                        premiumModalAnalyticsLocation: { page: l.ZY5.CHANNEL_AUTOCOMPLETE_EMOJI_UPSELL_MODAL }
                    })
                }),
                (0, n.jsx)(s.olH, {
                    className: h.closeButton,
                    onClick: a
                })
            ]
        })
    );
};
