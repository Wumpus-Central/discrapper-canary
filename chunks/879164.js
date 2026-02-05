l.d(t, { _: () => g });
var s = l(627968);
l(64700);
var a = l(990078),
    n = l(397927),
    i = l(87719),
    r = l(857586),
    o = l(757036),
    d = l(954571),
    c = l(652215),
    u = l(788868),
    m = l(927961),
    _ = l(985018),
    x = l(127134);
function g(e) {
    let { onApply: t, onSurpriseMe: l, onClose: g, canApply: h } = e,
        p = (0, o.L)(u.PremiumTypes.TIER_2),
        f = (0, s.jsx)(n.Button, {
            variant: "secondary",
            size: "md",
            onClick: l,
            icon: { type: "rive", asset: n.mdx, riveProps: { dataBinding: { fill: n.LU0.colors.ICON_STRONG } } },
            text: _.intl.string(m.default.NOGFds),
        }),
        N = (0, s.jsxs)("div", {
            className: x.k0,
            children: [
                f,
                (0, s.jsx)(a.m, {
                    text: _.intl.string(m.default.cVTpnj),
                    shouldShow: !h,
                    children: (0, s.jsx)(n.Button, {
                        onClick: t,
                        disabled: !h,
                        text: _.intl.string(_.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        A = (0, s.jsxs)("div", {
            className: x.UX,
            children: [
                (0, s.jsxs)("div", {
                    className: x.iQ,
                    children: [
                        (0, s.jsx)(a.m, {
                            text: _.intl.string(_.t["5AFxuK"]),
                            children: (0, s.jsx)(n.tvc, { size: "md", color: n.LU0.colors.ICON_STRONG }),
                        }),
                        (0, s.jsx)(n.Text, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: x.h_,
                            children: _.intl.format(m.default.PWf0xS, {
                                onClickNitro: () => {
                                    d.default.track(c.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, i.x)(g);
                                },
                            }),
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: x.UD,
                    children: [
                        f,
                        (0, s.jsx)(r.A, {
                            premiumModalAnalyticsLocation: {
                                section: c.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: c.ZSU.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: u.pe.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, s.jsx)(n.jlY, { "data-migration-pending": !0, className: x.qr, children: p ? N : A });
}
