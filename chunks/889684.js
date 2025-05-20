a.d(t, { default: () => m });
var i = a(255367),
    n = a(73800),
    s = a(481060),
    r = a(230711),
    o = a(767714),
    c = a(626135),
    l = a(981631),
    d = a(474936),
    x = a(388032),
    h = a(354509);
let m = (e) => {
    let { transitionState: t, onClose: a } = e;
    return (
        n.useEffect(() => {
            c.default.track(l.rMx.PREMIUM_UPSELL_VIEWED, { type: d.cd.EMOJI_AUTOCOMPLETE_MODAL });
        }, []),
        (0, i.jsxs)(s.Y0X, {
            transitionState: t,
            size: s.CgR.SMALL,
            'aria-label': '',
            children: [
                (0, i.jsxs)(s.hzk, {
                    className: h.content,
                    children: [
                        (0, i.jsx)('div', {
                            role: 'image',
                            className: h.image
                        }),
                        (0, i.jsx)(s.X6q, {
                            variant: 'heading-xl/semibold',
                            className: h.header,
                            children: x.intl.string(x.t.Uq1zJS)
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            children: x.intl.format(x.t.xPaO3t, {
                                onLearnMore: () => {
                                    a(), r.Z.open(l.oAB.PREMIUM);
                                }
                            })
                        })
                    ]
                }),
                (0, i.jsx)(s.mzw, {
                    children: (0, i.jsx)(o.Z, {
                        onClick: a,
                        textOptions: { textOverride: x.intl.string(x.t.pj0XBA) },
                        subscriptionTier: d.Si.TIER_2,
                        premiumModalAnalyticsLocation: { page: l.ZY5.CHANNEL_AUTOCOMPLETE_EMOJI_UPSELL_MODAL }
                    })
                }),
                (0, i.jsx)(s.olH, {
                    className: h.closeButton,
                    onClick: a
                })
            ]
        })
    );
};
