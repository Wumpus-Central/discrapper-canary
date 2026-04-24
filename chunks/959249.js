n.d(t, { d: () => x });
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    a = n(419354),
    s = n(717421),
    o = n(834730),
    u = n(315629),
    c = n(565645);
let d = (0, n(945810).mj)({
    name: "2026-03-soundboard-sound-preview",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var f = n(71393),
    p = n(725807),
    m = n(465794),
    _ = n(788868),
    h = n(985018),
    g = n(379378);
function x(e) {
    let {
            showUpsell: t,
            text: n,
            textVariant: r,
            button: u,
            buttonAnalyticsObject: x,
            className: v,
            onSubscribeModalClose: b,
            position: E = "floating",
            useGradientBg: C = !1,
            hoveredNitroLockedSound: j,
            useUpdatedStyling: y = !1,
            subscribeButtonVariantOverride: I,
            useLegacyButton: w = !1,
            leadingAction: S,
        } = e,
        { enabled: N } = d.useConfig({ location: "PremiumFloatingPickerUpsell" }),
        T = (0, s.z)({
            transform: t ? "translateY(0%)" : "translateY(120%)",
            opacity: +!!t,
            config: { tension: 120, friction: 14 },
        }),
        R = N && null != j,
        k = j?.emojiId != null || j?.emojiName != null,
        D = n;
    if (R) {
        let e = f.A.getGuild(j.guildId);
        D = h.intl.format(h.t.eku049, { serverName: e?.name ?? h.intl.string(h.t.DmIUGK) });
    }
    return (0, i.jsx)(a.animated.div, {
        style: { ...T },
        className: l()(g.Zj, C && g.Me, y && g.ww, R && g.u8, { [g.tO]: "floating" === E, [g.Kx]: "inline" === E }, v),
        children: (0, i.jsxs)(A, {
            hasPreviewSound: R,
            useGradientBg: C,
            children: [
                R &&
                    (0, i.jsxs)("div", {
                        className: g.Ed,
                        children: [
                            (0, i.jsxs)("div", {
                                className: g.vg,
                                children: [
                                    k && (0, i.jsx)(c.A, { emojiId: j.emojiId, emojiName: j.emojiName }),
                                    (0, i.jsx)(o.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: j.name,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(o.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: g.Fr,
                                children: D ?? n,
                            }),
                        ],
                    }),
                !R &&
                    (0, i.jsx)(o.E, {
                        variant: r ?? "text-sm/medium",
                        color: "text-strong",
                        className: g.tD,
                        children: n,
                    }),
                null != S && (0, i.jsx)("div", { className: g.Zv, children: S }),
                "string" == typeof u
                    ? w
                        ? (0, i.jsx)(p.A, {
                              size: "m",
                              className: g.Z3,
                              shinyButtonClassName: g.Z3,
                              subscriptionTier: _.pe.TIER_2,
                              textOptions: { textOverride: u },
                              premiumModalAnalyticsLocation: x,
                              tabIndex: t ? 0 : -1,
                              onSubscribeModalClose: b,
                          })
                        : (0, i.jsx)(m.A, {
                              size: "sm",
                              subscriptionTier: _.pe.TIER_2,
                              buttonTextOverride: u,
                              premiumModalAnalyticsLocation: x,
                              tabIndex: t ? 0 : -1,
                              onSubscribeModalClose: b,
                              variantOverride: I,
                          })
                    : u,
            ],
        }),
    });
}
function A(e) {
    let { hasPreviewSound: t, useGradientBg: n, children: r } = e;
    return n
        ? (0, i.jsx)(u.h, { color: "nitro-pink", offsetBottom: -3, className: l()(g.nC, { [g.u8]: t }), children: r })
        : r;
}
