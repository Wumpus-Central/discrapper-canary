n.d(t, { p: () => i });
let r = (0, n(818083).B)({
    kind: 'guild',
    id: '2025-04_report_to_mod_survey',
    label: 'Report to mod survey',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show report to mod survey',
            config: { enabled: !0 }
        }
    ]
});
function i(e, t) {
    return r.getCurrentConfig(
        {
            guildId: e,
            location: t
        },
        { autoTrackExposure: !0 }
    ).enabled;
}
