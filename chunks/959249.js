"use strict";
n.d(t, { d: () => p });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(419354),
    o = n(717421),
    l = n(834730),
    d = n(315629),
    _ = n(565645);
let u = (0, n(945810).mj)({
    name: "2026-03-soundboard-sound-preview",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var c = n(71393),
    E = n(725807),
    h = n(465794),
    m = n(788868),
    f = n(985018),
    g = n(379378);
function p(e) {
    let {
            showUpsell: t,
            text: n,
            textVariant: r,
            button: d,
            buttonAnalyticsObject: p,
            className: I,
            onSubscribeModalClose: T,
            position: S = "floating",
            useGradientBg: N = !1,
            hoveredNitroLockedSound: C,
            useUpdatedStyling: R = !1,
            subscribeButtonVariantOverride: O,
            useLegacyButton: y = !1,
            leadingAction: v,
        } = e,
        { enabled: D } = u.useConfig({ location: "PremiumFloatingPickerUpsell" }),
        L = (0, o.z)({
            transform: t ? "translateY(0%)" : "translateY(120%)",
            opacity: +!!t,
            config: { tension: 120, friction: 14 },
        }),
        b = D && null != C,
        w = C?.emojiId != null || C?.emojiName != null,
        P = n;
    if (b) {
        let e = c.A.getGuild(C.guildId);
        P = f.intl.format(f.t.eku049, { serverName: e?.name ?? f.intl.string(f.t.DmIUGK) });
    }
    return (0, i.jsx)(a.animated.div, {
        style: { ...L },
        className: s()(g.Zj, N && g.Me, R && g.ww, b && g.u8, { [g.tO]: "floating" === S, [g.Kx]: "inline" === S }, I),
        children: (0, i.jsxs)(A, {
            hasPreviewSound: b,
            useGradientBg: N,
            children: [
                b &&
                    (0, i.jsxs)("div", {
                        className: g.Ed,
                        children: [
                            (0, i.jsxs)("div", {
                                className: g.vg,
                                children: [
                                    w && (0, i.jsx)(_.A, { emojiId: C.emojiId, emojiName: C.emojiName }),
                                    (0, i.jsx)(l.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: C.name,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(l.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: g.Fr,
                                children: P ?? n,
                            }),
                        ],
                    }),
                !b &&
                    (0, i.jsx)(l.E, {
                        variant: r ?? "text-sm/medium",
                        color: "text-strong",
                        className: g.tD,
                        children: n,
                    }),
                null != v && (0, i.jsx)("div", { className: g.Zv, children: v }),
                "string" == typeof d
                    ? y
                        ? (0, i.jsx)(E.A, {
                              size: "m",
                              className: g.Z3,
                              shinyButtonClassName: g.Z3,
                              subscriptionTier: m.pe.TIER_2,
                              textOptions: { textOverride: d },
                              premiumModalAnalyticsLocation: p,
                              tabIndex: t ? 0 : -1,
                              onSubscribeModalClose: T,
                          })
                        : (0, i.jsx)(h.A, {
                              size: "sm",
                              subscriptionTier: m.pe.TIER_2,
                              buttonTextOverride: d,
                              premiumModalAnalyticsLocation: p,
                              tabIndex: t ? 0 : -1,
                              onSubscribeModalClose: T,
                              variantOverride: O,
                          })
                    : d,
            ],
        }),
    });
}
function A(e) {
    let { hasPreviewSound: t, useGradientBg: n, children: r } = e;
    return n
        ? (0, i.jsx)(d.h, { color: "nitro-pink", offsetBottom: -3, className: s()(g.nC, { [g.u8]: t }), children: r })
        : r;
}
