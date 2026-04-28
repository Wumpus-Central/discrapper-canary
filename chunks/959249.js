t.d(i, { d: () => b });
var n = t(627968);
t(64700);
var s = t(503698),
    a = t.n(s),
    r = t(123924),
    l = t(717421),
    o = t(834730),
    d = t(315629),
    m = t(565645);
let c = (0, t(945810).mj)({
    name: "2026-03-soundboard-sound-preview",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var u = t(71393),
    x = t(725807),
    j = t(465794),
    v = t(788868),
    p = t(985018),
    h = t(379378);
function b(e) {
    let {
            showUpsell: i,
            text: t,
            textVariant: s,
            button: d,
            buttonAnalyticsObject: b,
            className: g,
            onSubscribeModalClose: N,
            position: I = "floating",
            useGradientBg: k = !1,
            hoveredNitroLockedSound: C,
            useUpdatedStyling: w = !1,
            subscribeButtonVariantOverride: y,
            useLegacyButton: A = !1,
            leadingAction: E,
        } = e,
        { enabled: M } = c.useConfig({ location: "PremiumFloatingPickerUpsell" }),
        O = (0, l.z)({
            transform: i ? "translateY(0%)" : "translateY(120%)",
            opacity: +!!i,
            config: { tension: 120, friction: 14 },
        }),
        T = M && null != C,
        Z = C?.emojiId != null || C?.emojiName != null,
        _ = t;
    if (T) {
        let e = u.A.getGuild(C.guildId);
        _ = p.intl.format(p.t.eku049, { serverName: e?.name ?? p.intl.string(p.t.DmIUGK) });
    }
    return (0, n.jsx)(r.animated.div, {
        style: { ...O },
        className: a()(h.Zj, k && h.Me, w && h.ww, T && h.u8, { [h.tO]: "floating" === I, [h.Kx]: "inline" === I }, g),
        children: (0, n.jsxs)(f, {
            hasPreviewSound: T,
            useGradientBg: k,
            children: [
                T &&
                    (0, n.jsxs)("div", {
                        className: h.Ed,
                        children: [
                            (0, n.jsxs)("div", {
                                className: h.vg,
                                children: [
                                    Z && (0, n.jsx)(m.A, { emojiId: C.emojiId, emojiName: C.emojiName }),
                                    (0, n.jsx)(o.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: C.name,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(o.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: h.Fr,
                                children: _ ?? t,
                            }),
                        ],
                    }),
                !T &&
                    (0, n.jsx)(o.E, {
                        variant: s ?? "text-sm/medium",
                        color: "text-strong",
                        className: h.tD,
                        children: t,
                    }),
                null != E && (0, n.jsx)("div", { className: h.Zv, children: E }),
                "string" == typeof d
                    ? A
                        ? (0, n.jsx)(x.A, {
                              size: "m",
                              className: h.Z3,
                              shinyButtonClassName: h.Z3,
                              subscriptionTier: v.pe.TIER_2,
                              textOptions: { textOverride: d },
                              premiumModalAnalyticsLocation: b,
                              tabIndex: i ? 0 : -1,
                              onSubscribeModalClose: N,
                          })
                        : (0, n.jsx)(j.A, {
                              size: "sm",
                              subscriptionTier: v.pe.TIER_2,
                              buttonTextOverride: d,
                              premiumModalAnalyticsLocation: b,
                              tabIndex: i ? 0 : -1,
                              onSubscribeModalClose: N,
                              variantOverride: y,
                          })
                    : d,
            ],
        }),
    });
}
function f(e) {
    let { hasPreviewSound: i, useGradientBg: t, children: s } = e;
    return t
        ? (0, n.jsx)(d.h, { color: "nitro-pink", offsetBottom: -3, className: a()(h.nC, { [h.u8]: i }), children: s })
        : s;
}
