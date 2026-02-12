"use strict";
n.d(t, { H: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(292666),
    s = n(732955),
    o = n(397927),
    l = n(398590),
    u = n(102815),
    c = n(976860),
    d = n(652215);
let _ = {
    title: "Perks",
    stories: [
        {
            name: "Perk Card",
            component: f,
            id: "perk-card",
            controls: {
                title: { label: "Title", type: "text", defaultValue: "Perk Title" },
                description: {
                    label: "Description",
                    type: "text",
                    defaultValue: "This is the perk description. When hovered or focused, it will be revealed in full.",
                },
                caption: { label: "Caption", type: "text", defaultValue: "" },
                pillText: { label: "Pill Text", type: "text", defaultValue: "" },
                primaryAsset: { label: "Primary Asset", type: "text", defaultValue: "https://i.imgur.com/xJL1c3t.png" },
                backgroundAssetUrl: { label: "Background Asset", type: "text", defaultValue: "" },
                ctaText: { label: "CTA Text", type: "text", defaultValue: "Learn More" },
                progress: { label: "Progress (0 - 1.0)", type: "slider", defaultValue: 0, minValue: 0, maxValue: 1 },
                featured: { label: "Featured", type: "boolean", defaultValue: !1 },
                glowing: { label: "Glowing", type: "boolean", defaultValue: !1 },
            },
        },
    ],
};
function f(e) {
    let { ...t } = e;
    return (0, r.jsxs)("div", {
        style: { maxWidth: "100%", width: t.featured ? 752 : 364 },
        children: [
            (0, r.jsx)(u.S, {
                ...t,
                progress: null != t.progress && t.progress > 0 ? t.progress : void 0,
                onCtaClick: () => (0, o.showToast)((0, o.createToast)("CTA Clicked!", o.ToastType.SUCCESS)),
            }),
            (0, r.jsx)(h, {}),
        ],
    });
}
function h() {
    let [e, t] = (0, i.useState)("displayNameStyles"),
        n = `${d.BVt.NITRO_HOME}?perk=${e}`;
    return (0, r.jsxs)("div", {
        style: { marginTop: 64, display: "flex", flexDirection: "column", gap: 10 },
        children: [
            (0, r.jsx)(a.k, { label: "Deep Linking", value: e, onChange: (e) => t(e), placeholder: "Perk ID" }),
            (0, r.jsx)(s.$nd, {
                text: "Test Deep Link",
                variant: "primary",
                size: "sm",
                onClick: () => {
                    (0, l.jH)(), (0, c.pX)(n);
                },
            }),
        ],
    });
}
