"use strict";
n.d(t, { d: () => x });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(419354),
    r = n(717421),
    o = n(834730),
    c = n(315629),
    u = n(565645);
let d = (0, n(945810).mj)({
    name: "2026-03-soundboard-sound-preview",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var h = n(71393),
    m = n(725807),
    p = n(465794),
    f = n(788868),
    g = n(985018),
    _ = n(379378);
function x(e) {
    let {
            showUpsell: t,
            text: n,
            textVariant: i,
            button: c,
            buttonAnalyticsObject: x,
            className: A,
            onSubscribeModalClose: E,
            position: I = "floating",
            useGradientBg: v = !1,
            hoveredNitroLockedSound: y,
            useUpdatedStyling: b = !1,
            subscribeButtonVariantOverride: S,
            useLegacyButton: N = !1,
            leadingAction: j,
        } = e,
        { enabled: T } = d.useConfig({ location: "PremiumFloatingPickerUpsell" }),
        w = (0, r.z)({
            transform: t ? "translateY(0%)" : "translateY(120%)",
            opacity: +!!t,
            config: { tension: 120, friction: 14 },
        }),
        R = T && null != y,
        L = y?.emojiId != null || y?.emojiName != null,
        k = n;
    if (R) {
        let e = h.A.getGuild(y.guildId);
        k = g.intl.format(g.t.eku049, { serverName: e?.name ?? g.intl.string(g.t.DmIUGK) });
    }
    return (0, l.jsx)(a.animated.div, {
        style: { ...w },
        className: s()(_.Zj, v && _.Me, b && _.ww, R && _.u8, { [_.tO]: "floating" === I, [_.Kx]: "inline" === I }, A),
        children: (0, l.jsxs)(C, {
            hasPreviewSound: R,
            useGradientBg: v,
            children: [
                R &&
                    (0, l.jsxs)("div", {
                        className: _.Ed,
                        children: [
                            (0, l.jsxs)("div", {
                                className: _.vg,
                                children: [
                                    L && (0, l.jsx)(u.A, { emojiId: y.emojiId, emojiName: y.emojiName }),
                                    (0, l.jsx)(o.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: y.name,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(o.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: _.Fr,
                                children: k ?? n,
                            }),
                        ],
                    }),
                !R &&
                    (0, l.jsx)(o.E, {
                        variant: i ?? "text-sm/medium",
                        color: "text-strong",
                        className: _.tD,
                        children: n,
                    }),
                null != j && (0, l.jsx)("div", { className: _.Zv, children: j }),
                "string" == typeof c
                    ? N
                        ? (0, l.jsx)(m.A, {
                              size: "m",
                              className: _.Z3,
                              shinyButtonClassName: _.Z3,
                              subscriptionTier: f.pe.TIER_2,
                              textOptions: { textOverride: c },
                              premiumModalAnalyticsLocation: x,
                              tabIndex: t ? 0 : -1,
                              onSubscribeModalClose: E,
                          })
                        : (0, l.jsx)(p.A, {
                              size: "sm",
                              subscriptionTier: f.pe.TIER_2,
                              buttonTextOverride: c,
                              premiumModalAnalyticsLocation: x,
                              tabIndex: t ? 0 : -1,
                              onSubscribeModalClose: E,
                              variantOverride: S,
                          })
                    : c,
            ],
        }),
    });
}
function C(e) {
    let { hasPreviewSound: t, useGradientBg: n, children: i } = e;
    return n
        ? (0, l.jsx)(c.h, { color: "nitro-pink", offsetBottom: -3, className: s()(_.nC, { [_.u8]: t }), children: i })
        : i;
}
