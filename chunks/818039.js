n.d(t, { A: () => i });
var r = n(600975),
    l = n(688151);
let i = (0, r.C)({
    kind: "user",
    id: "2025-02_settings_search_in_quick_switcher",
    label: "Settings in Quick Switcher",
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: l.$G.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: "Control",
            config: { enabled: !1 },
        },
        {
            id: 1,
            label: "Enable Settings search in Quick Switcher",
            config: { enabled: !0 },
        },
    ],
});
