a.d(t, { default: () => h });
var n = a(255367),
    i = a(73800),
    s = a(481060),
    o = a(230711),
    l = a(767714),
    r = a(626135),
    c = a(981631),
    d = a(474936),
    p = a(388032),
    m = a(354509);
let h = (e) => {
    let { transitionState: t, onClose: a } = e;
    return (
        i.useEffect(() => {
            r.default.track(c.rMx.PREMIUM_UPSELL_VIEWED, { type: d.cd.EMOJI_AUTOCOMPLETE_MODAL });
        }, []),
        (0, n.jsxs)(s.Y0X, {
            transitionState: t,
            size: s.CgR.SMALL,
            'aria-label': '',
            parentComponent: 'ChannelAutocompleteEmojiUpsellModal',
            children: [
                (0, n.jsxs)(s.hzk, {
                    className: m.content,
                    children: [
                        (0, n.jsx)('div', {
                            role: 'image',
                            className: m.image
                        }),
                        (0, n.jsx)(s.X6q, {
                            variant: 'heading-xl/semibold',
                            className: m.header,
                            children: p.intl.string(p.t.Uq1zJS)
                        }),
                        (0, n.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            children: p.intl.format(p.t.xPaO3t, {
                                onLearnMore: () => {
                                    (a(), o.Z.open(c.oAB.PREMIUM));
                                }
                            })
                        })
                    ]
                }),
                (0, n.jsx)(s.mzw, {
                    children: (0, n.jsx)(l.Z, {
                        onClick: a,
                        textOptions: { textOverride: p.intl.string(p.t.pj0XBA) },
                        subscriptionTier: d.Si.TIER_2,
                        premiumModalAnalyticsLocation: { page: c.ZY5.CHANNEL_AUTOCOMPLETE_EMOJI_UPSELL_MODAL }
                    })
                }),
                (0, n.jsx)(s.olH, {
                    className: m.closeButton,
                    onClick: a
                })
            ]
        })
    );
};
