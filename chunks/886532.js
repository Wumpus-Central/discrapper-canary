"use strict";
n.d(t, { H: () => s });
var r = n(627968),
    i = n(397927),
    a = n(102815);
let s = {
    title: "Perks",
    stories: [
        {
            name: "Perk Card",
            component: o,
            id: "perk-card",
            controls: {
                title: { label: "Title", type: "text", defaultValue: "Perk Title" },
                description: { label: "Description", type: "text", defaultValue: "This is the perk description." },
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
function o(e) {
    let { featured: t, ...n } = e;
    return (0, r.jsx)("div", {
        style: { maxWidth: "100%", width: t ? 752 : 364 },
        children: (0, r.jsx)(a.S, {
            ...n,
            progress: null != n.progress && n.progress > 0 ? n.progress : void 0,
            onCtaClick: () => (0, i.showToast)((0, i.createToast)("CTA Clicked!", i.ToastType.SUCCESS)),
        }),
    });
}
