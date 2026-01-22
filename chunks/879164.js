l.d(t, { _: () => p }), l(228524);
var n = l(627968);
l(64700);
var a = l(990078),
    s = l(397927),
    r = l(87719),
    i = l(857586),
    o = l(757036),
    c = l(954571),
    d = l(652215),
    u = l(788868),
    f = l(927961),
    m = l(985018),
    b = l(127134);
function p(e) {
    let { onApply: t, onSurpriseMe: l, onClose: p, canApply: x } = e,
        g = (0, o.L)(u.PremiumTypes.TIER_2),
        j = (0, n.jsx)(s.Button, {
            variant: "secondary",
            size: "md",
            onClick: l,
            icon: {
                type: "rive",
                asset: s.mdx,
                riveProps: { dataBinding: { fill: s.LU0.colors.ICON_STRONG } },
            },
            text: m.intl.string(f.default.NOGFds),
        }),
        h = (0, n.jsxs)("div", {
            className: b.k0,
            children: [
                j,
                (0, n.jsx)(a.m, {
                    text: m.intl.string(f.default.cVTpnj),
                    shouldShow: !x,
                    children: (0, n.jsx)(s.Button, {
                        onClick: t,
                        disabled: !x,
                        text: m.intl.string(m.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        v = (0, n.jsxs)("div", {
            className: b.UX,
            children: [
                (0, n.jsxs)("div", {
                    className: b.iQ,
                    children: [
                        (0, n.jsx)(a.m, {
                            text: m.intl.string(m.t["5AFxuK"]),
                            children: (0, n.jsx)(s.tvc, {
                                size: "md",
                                color: s.LU0.colors.ICON_STRONG,
                            }),
                        }),
                        (0, n.jsx)(s.Text, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: b.h_,
                            children: m.intl.format(f.default.PWf0xS, {
                                onClickNitro: () => {
                                    c.default.track(d.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, r.x)(p);
                                },
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: b.UD,
                    children: [
                        j,
                        (0, n.jsx)(i.A, {
                            premiumModalAnalyticsLocation: {
                                section: d.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: d.ZSU.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: u.pe.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, n.jsx)(s.jlY, {
        "data-migration-pending": !0,
        className: b.qr,
        children: g ? h : v,
    });
}
