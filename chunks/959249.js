"use strict";
n.d(t, { d: () => m });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(873174),
    l = n(717421),
    u = n(834730),
    c = n(565645);
let d = (0, n(945810).mj)({
    name: "2026-03-soundboard-sound-preview",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var _ = n(71393),
    f = n(465794),
    h = n(788868),
    p = n(375708),
    E = n(379378);
function m(e) {
    let {
            showUpsell: t,
            text: n,
            textVariant: s,
            button: m,
            buttonAnalyticsObject: g,
            className: A,
            onSubscribeModalClose: I,
            position: T = "floating",
            hoveredNitroLockedSound: S,
            useUpdatedStyling: N = !1,
            subscribeButtonVariantOverride: y,
            leadingAction: C,
        } = e,
        { enabled: v } = d.useConfig({ location: "PremiumFloatingPickerUpsell" }),
        [O, R] = r.useState(t);
    t && !O && R(!0);
    let b = (0, l.z)({
            transform: t ? "translateY(0%)" : "translateY(120%)",
            opacity: +!!t,
            config: { tension: 120, friction: 14 },
            onRest: () => {
                t || R(!1);
            },
        }),
        D = v && null != S,
        L = S?.emojiId != null || S?.emojiName != null,
        w = n;
    if (D) {
        let e = _.A.getGuild(S.guildId);
        w = p.intl.format(p.t.eku049, { serverName: e?.name ?? p.intl.string(p.t.DmIUGK) });
    }
    return (0, i.jsxs)(o.animated.div, {
        style: { ...b, visibility: O ? "visible" : "hidden" },
        className: a()(E.Zj, N && E.ww, D && E.u8, { [E.tO]: "floating" === T, [E.Kx]: "inline" === T }, A),
        children: [
            D &&
                (0, i.jsxs)("div", {
                    className: E.Ed,
                    children: [
                        (0, i.jsxs)("div", {
                            className: E.vg,
                            children: [
                                L && (0, i.jsx)(c.A, { emojiId: S.emojiId, emojiName: S.emojiName }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    children: S.name,
                                }),
                            ],
                        }),
                        (0, i.jsx)(u.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: E.Fr,
                            children: w ?? n,
                        }),
                    ],
                }),
            !D &&
                (0, i.jsx)(u.E, { variant: s ?? "text-sm/medium", color: "text-strong", className: E.tD, children: n }),
            null != C && (0, i.jsx)("div", { className: E.Zv, children: C }),
            "string" == typeof m
                ? (0, i.jsx)(f.A, {
                      size: "sm",
                      subscriptionTier: h.pe.TIER_2,
                      buttonTextOverride: m,
                      premiumModalAnalyticsLocation: g,
                      tabIndex: t ? 0 : -1,
                      onSubscribeModalClose: I,
                      variantOverride: y,
                  })
                : m,
        ],
    });
}
