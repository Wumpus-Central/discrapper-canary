"use strict";
a.d(t, { _: () => x });
var l = a(627968);
a(64700);
var i = a(990078),
    r = a(821609),
    n = a(339654),
    s = a(827734),
    o = a(403581),
    d = a(834730),
    c = a(935462),
    u = a(87719),
    _ = a(465794),
    h = a(757036),
    m = a(954571),
    p = a(652215),
    g = a(788868),
    f = a(864386),
    b = a(985018),
    A = a(277041);
function x(e) {
    let { onApply: t, onSurpriseMe: a, onClose: x, canApply: v } = e,
        C = (0, h.L)(g.PremiumTypes.TIER_2),
        E = (0, l.jsx)(r.$, {
            variant: "secondary",
            size: "md",
            onClick: a,
            icon: { type: "rive", asset: n.m, riveProps: { dataBinding: { fill: s.A.colors.ICON_STRONG } } },
            text: b.intl.string(f.default.NOGFds),
        }),
        y = (0, l.jsxs)("div", {
            className: A.k0,
            children: [
                E,
                (0, l.jsx)(i.m, {
                    text: b.intl.string(f.default.cVTpnj),
                    shouldShow: !v,
                    children: (0, l.jsx)(r.$, {
                        onClick: t,
                        disabled: !v,
                        text: b.intl.string(b.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        I = (0, l.jsxs)("div", {
            className: A.UX,
            children: [
                (0, l.jsxs)("div", {
                    className: A.iQ,
                    children: [
                        (0, l.jsx)(i.m, {
                            text: b.intl.string(b.t["5AFxuK"]),
                            children: (0, l.jsx)(o.t, { size: "md", color: s.A.colors.ICON_STRONG }),
                        }),
                        (0, l.jsx)(d.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: A.h_,
                            children: b.intl.format(f.default.PWf0xS, {
                                onClickNitro: () => {
                                    m.default.track(p.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, u.x)(x);
                                },
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: A.UD,
                    children: [
                        E,
                        (0, l.jsx)(_.A, {
                            premiumModalAnalyticsLocation: {
                                section: p.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: p.ZSU.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: g.pe.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, l.jsx)(c.jl, { "data-migration-pending": !0, className: A.qr, children: C ? y : I });
}
