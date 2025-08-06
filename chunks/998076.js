n.d(t, {
    Z: () => a,
    f: () => o,
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    kind: "user",
    id: "2025-08_premium_brand_refresh_upsell_roadblocks_experiment",
    label: "Premium Brand Refresh Upsell Roadblocks Experiment",
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: "User sees control premium brand refresh upsell roadblocks",
            config: { enabled: !1 },
        },
        {
            id: 1,
            label: "User sees premium brand refresh upsell roadblocks",
            config: { enabled: !0 },
        },
    ],
});
function a(e) {
    let { location: t } = e;
    return o.useExperiment({ location: t }, { autoTrackExposure: !0 }).enabled;
}
