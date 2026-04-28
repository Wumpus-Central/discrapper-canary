n.d(t, { d: () => x });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    a = n(487514),
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
    h = n(465794),
    m = n(788868),
    _ = n(985018),
    g = n(379378);
function x(e) {
    let {
            showUpsell: t,
            text: n,
            textVariant: l,
            button: u,
            buttonAnalyticsObject: x,
            className: A,
            onSubscribeModalClose: j,
            position: b = "floating",
            useGradientBg: y = !1,
            hoveredNitroLockedSound: C,
            useUpdatedStyling: w = !1,
            subscribeButtonVariantOverride: N,
            useLegacyButton: I = !1,
            leadingAction: E,
        } = e,
        { enabled: R } = d.useConfig({ location: "PremiumFloatingPickerUpsell" }),
        k = (0, s.z)({
            transform: t ? "translateY(0%)" : "translateY(120%)",
            opacity: +!!t,
            config: { tension: 120, friction: 14 },
        }),
        T = R && null != C,
        V = C?.emojiId != null || C?.emojiName != null,
        B = n;
    if (T) {
        let e = f.A.getGuild(C.guildId);
        B = _.intl.format(_.t.eku049, { serverName: e?.name ?? _.intl.string(_.t.DmIUGK) });
    }
    return (0, i.jsx)(a.animated.div, {
        style: { ...k },
        className: r()(g.Zj, y && g.Me, w && g.ww, T && g.u8, { [g.tO]: "floating" === b, [g.Kx]: "inline" === b }, A),
        children: (0, i.jsxs)(v, {
            hasPreviewSound: T,
            useGradientBg: y,
            children: [
                T &&
                    (0, i.jsxs)("div", {
                        className: g.Ed,
                        children: [
                            (0, i.jsxs)("div", {
                                className: g.vg,
                                children: [
                                    V && (0, i.jsx)(c.A, { emojiId: C.emojiId, emojiName: C.emojiName }),
                                    (0, i.jsx)(o.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: C.name,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(o.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: g.Fr,
                                children: B ?? n,
                            }),
                        ],
                    }),
                !T &&
                    (0, i.jsx)(o.E, {
                        variant: l ?? "text-sm/medium",
                        color: "text-strong",
                        className: g.tD,
                        children: n,
                    }),
                null != E && (0, i.jsx)("div", { className: g.Zv, children: E }),
                "string" == typeof u
                    ? I
                        ? (0, i.jsx)(p.A, {
                              size: "m",
                              className: g.Z3,
                              shinyButtonClassName: g.Z3,
                              subscriptionTier: m.pe.TIER_2,
                              textOptions: { textOverride: u },
                              premiumModalAnalyticsLocation: x,
                              tabIndex: t ? 0 : -1,
                              onSubscribeModalClose: j,
                          })
                        : (0, i.jsx)(h.A, {
                              size: "sm",
                              subscriptionTier: m.pe.TIER_2,
                              buttonTextOverride: u,
                              premiumModalAnalyticsLocation: x,
                              tabIndex: t ? 0 : -1,
                              onSubscribeModalClose: j,
                              variantOverride: N,
                          })
                    : u,
            ],
        }),
    });
}
function v(e) {
    let { hasPreviewSound: t, useGradientBg: n, children: l } = e;
    return n
        ? (0, i.jsx)(u.h, { color: "nitro-pink", offsetBottom: -3, className: r()(g.nC, { [g.u8]: t }), children: l })
        : l;
}
