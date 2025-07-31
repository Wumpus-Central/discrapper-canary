n.d(t, { M: () => a });
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    id: '2025-05_client_theme_color_picker',
    kind: 'user',
    label: 'Client Theme Color Picker',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enables setting client theme color picker',
            config: { enabled: !0 }
        },
        {
            id: 2,
            label: 'Enables the V2 custom theme editor',
            config: {
                enabled: !0,
                v2EditorEnabled: !0
            }
        }
    ]
});
