"use strict";
n.d(t, { d: () => g });
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
    p = n(650583),
    E = n(375708),
    m = n(379378);
function g(e) {
    let {
            showUpsell: t,
            text: n,
            textVariant: s,
            button: g,
            buttonAnalyticsObject: A,
            className: I,
            onSubscribeModalClose: T,
            position: S = "floating",
            hoveredNitroLockedSound: N,
            useUpdatedStyling: y = !1,
            subscribeButtonVariantOverride: C,
            leadingAction: v,
        } = e,
        { enabled: O } = d.useConfig({ location: "PremiumFloatingPickerUpsell" }),
        [R, b] = r.useState(t);
    t && !R && b(!0);
    let D = (0, l.z)({
            transform: t ? "translateY(0%)" : "translateY(120%)",
            opacity: +!!t,
            config: { tension: 120, friction: 14 },
            onRest: () => {
                t || b(!1);
            },
        }),
        L = O && null != N,
        w = N?.emojiId != null || N?.emojiName != null,
        M = n;
    if (L) {
        let e = _.A.getGuild(N.guildId);
        M = E.intl.format(E.t.eku049, { serverName: e?.name ?? E.intl.string(E.t.DmIUGK) });
    }
    return (0, i.jsxs)(o.animated.div, {
        style: { ...D, visibility: R ? "visible" : "hidden" },
        onKeyDown: (e) => {
            (e.key === p.dh.ENTER || e.key === p.dh.SPACE) && e.stopPropagation();
        },
        className: a()(m.Zj, y && m.ww, L && m.u8, { [m.tO]: "floating" === S, [m.Kx]: "inline" === S }, I),
        children: [
            L &&
                (0, i.jsxs)("div", {
                    className: m.Ed,
                    children: [
                        (0, i.jsxs)("div", {
                            className: m.vg,
                            children: [
                                w && (0, i.jsx)(c.A, { emojiId: N.emojiId, emojiName: N.emojiName }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    children: N.name,
                                }),
                            ],
                        }),
                        (0, i.jsx)(u.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: m.Fr,
                            children: M ?? n,
                        }),
                    ],
                }),
            !L &&
                (0, i.jsx)(u.E, { variant: s ?? "text-sm/medium", color: "text-strong", className: m.tD, children: n }),
            null != v && (0, i.jsx)("div", { className: m.Zv, children: v }),
            "string" == typeof g
                ? (0, i.jsx)(f.A, {
                      size: "sm",
                      subscriptionTier: h.pe.TIER_2,
                      buttonTextOverride: g,
                      premiumModalAnalyticsLocation: A,
                      tabIndex: t ? 0 : -1,
                      onSubscribeModalClose: T,
                      variantOverride: C,
                  })
                : g,
        ],
    });
}
