n.d(t, { default: () => h });
var a = n(951288),
    i = n(647438),
    s = n(481060),
    o = n(767714),
    l = n(313789),
    r = n(518596),
    c = n(626135),
    d = n(981631),
    p = n(474936),
    m = n(388032),
    E = n(457048);
let h = (e) => {
    let { transitionState: t, onClose: n } = e;
    return (
        i.useEffect(() => {
            c.default.track(d.rMx.PREMIUM_UPSELL_VIEWED, { type: p.cd.EMOJI_AUTOCOMPLETE_MODAL });
        }, []),
        (0, a.jsxs)(s.Y0X, {
            transitionState: t,
            size: s.CgR.SMALL,
            "aria-label": "",
            parentComponent: "ChannelAutocompleteEmojiUpsellModal",
            children: [
                (0, a.jsxs)(s.hzk, {
                    className: E.content,
                    children: [
                        (0, a.jsx)("div", {
                            role: "image",
                            className: E.image,
                        }),
                        (0, a.jsx)(s.X6q, {
                            variant: "heading-xl/semibold",
                            className: E.header,
                            children: m.intl.string(m.t.Uq1zJS),
                        }),
                        (0, a.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: m.intl.format(m.t.xPaO3t, {
                                onLearnMore: () => {
                                    n(), (0, r.openUserSettings)(l.n.NITRO_PANEL, { section: d.oAB.PREMIUM });
                                },
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)(s.mzw, {
                    children: (0, a.jsx)(o.Z, {
                        onClick: n,
                        textOptions: { textOverride: m.intl.string(m.t.pj0XBA) },
                        subscriptionTier: p.Si.TIER_2,
                        premiumModalAnalyticsLocation: { page: d.ZY5.CHANNEL_AUTOCOMPLETE_EMOJI_UPSELL_MODAL },
                    }),
                }),
                (0, a.jsx)(s.olH, {
                    className: E.closeButton,
                    onClick: n,
                }),
            ],
        })
    );
};
