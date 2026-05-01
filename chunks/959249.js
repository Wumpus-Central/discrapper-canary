"use strict";
n.d(t, { d: () => E });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(785651),
    o = n(717421),
    l = n(834730),
    u = n(565645);
let c = (0, n(945810).mj)({
    name: "2026-03-soundboard-sound-preview",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var d = n(71393),
    _ = n(465794),
    f = n(788868),
    h = n(375708),
    p = n(379378);
function E(e) {
    let {
            showUpsell: t,
            text: n,
            textVariant: r,
            button: E,
            buttonAnalyticsObject: m,
            className: g,
            onSubscribeModalClose: A,
            position: I = "floating",
            hoveredNitroLockedSound: T,
            useUpdatedStyling: S = !1,
            subscribeButtonVariantOverride: N,
            leadingAction: y,
        } = e,
        { enabled: C } = c.useConfig({ location: "PremiumFloatingPickerUpsell" }),
        v = (0, o.z)({
            transform: t ? "translateY(0%)" : "translateY(120%)",
            opacity: +!!t,
            config: { tension: 120, friction: 14 },
        }),
        O = C && null != T,
        R = T?.emojiId != null || T?.emojiName != null,
        b = n;
    if (O) {
        let e = d.A.getGuild(T.guildId);
        b = h.intl.format(h.t.eku049, { serverName: e?.name ?? h.intl.string(h.t.DmIUGK) });
    }
    return (0, i.jsxs)(a.animated.div, {
        style: { ...v },
        className: s()(p.Zj, S && p.ww, O && p.u8, { [p.tO]: "floating" === I, [p.Kx]: "inline" === I }, g),
        children: [
            O &&
                (0, i.jsxs)("div", {
                    className: p.Ed,
                    children: [
                        (0, i.jsxs)("div", {
                            className: p.vg,
                            children: [
                                R && (0, i.jsx)(u.A, { emojiId: T.emojiId, emojiName: T.emojiName }),
                                (0, i.jsx)(l.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    children: T.name,
                                }),
                            ],
                        }),
                        (0, i.jsx)(l.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: p.Fr,
                            children: b ?? n,
                        }),
                    ],
                }),
            !O &&
                (0, i.jsx)(l.E, { variant: r ?? "text-sm/medium", color: "text-strong", className: p.tD, children: n }),
            null != y && (0, i.jsx)("div", { className: p.Zv, children: y }),
            "string" == typeof E
                ? (0, i.jsx)(_.A, {
                      size: "sm",
                      subscriptionTier: f.pe.TIER_2,
                      buttonTextOverride: E,
                      premiumModalAnalyticsLocation: m,
                      tabIndex: t ? 0 : -1,
                      onSubscribeModalClose: A,
                      variantOverride: N,
                  })
                : E,
        ],
    });
}
