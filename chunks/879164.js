a.d(t, { _: () => v });
var l = a(627968);
a(64700);
var n = a(990078),
    s = a(821609),
    r = a(339654),
    i = a(827734),
    o = a(403581),
    c = a(834730),
    d = a(935462),
    u = a(87719),
    m = a(465794),
    _ = a(757036),
    h = a(954571),
    p = a(652215),
    f = a(788868),
    g = a(864386),
    x = a(985018),
    A = a(277041);
function v(e) {
    let { onApply: t, onSurpriseMe: a, onClose: v, canApply: N } = e,
        C = (0, _.L)(f.PremiumTypes.TIER_2),
        b = (0, l.jsx)(s.$, {
            variant: "secondary",
            size: "md",
            onClick: a,
            icon: { type: "rive", asset: r.m, riveProps: { dataBinding: { fill: i.A.colors.ICON_STRONG } } },
            text: x.intl.string(g.default.NOGFds),
        }),
        S = (0, l.jsxs)("div", {
            className: A.k0,
            children: [
                b,
                (0, l.jsx)(n.m, {
                    text: x.intl.string(g.default.cVTpnj),
                    shouldShow: !N,
                    children: (0, l.jsx)(s.$, {
                        onClick: t,
                        disabled: !N,
                        text: x.intl.string(x.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        E = (0, l.jsxs)("div", {
            className: A.UX,
            children: [
                (0, l.jsxs)("div", {
                    className: A.iQ,
                    children: [
                        (0, l.jsx)(n.m, {
                            text: x.intl.string(x.t["5AFxuK"]),
                            children: (0, l.jsx)(o.t, { size: "md", color: i.A.colors.ICON_STRONG }),
                        }),
                        (0, l.jsx)(c.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: A.h_,
                            children: x.intl.format(g.default.PWf0xS, {
                                onClickNitro: () => {
                                    h.default.track(p.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, u.x)(v);
                                },
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: A.UD,
                    children: [
                        b,
                        (0, l.jsx)(m.A, {
                            premiumModalAnalyticsLocation: {
                                section: p.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: p.ZSU.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: f.pe.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, l.jsx)(d.jl, { "data-migration-pending": !0, className: A.qr, children: C ? S : E });
}
