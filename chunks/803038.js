var r = n(818083),
    i = n(987338);
(0, r.B)({
    id: "2025-05_client_theme_color_picker",
    kind: "user",
    label: "Client Theme Color Picker",
    defaultConfig: {
        enabled: !1,
        v2EditorEnabled: !1,
        mobileRenderingEnabled: !1,
    },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: "Enables setting client theme color picker",
            config: {
                enabled: !0,
                v2EditorEnabled: !1,
                mobileRenderingEnabled: !1,
            },
        },
        {
            id: 2,
            label: "Enables the V2 custom theme editor and mobile rendering",
            config: {
                enabled: !0,
                v2EditorEnabled: !0,
                mobileRenderingEnabled: !0,
            },
        },
        {
            id: 3,
            label: "Same as 2 but for people who were previously in treatment 1",
            config: {
                enabled: !0,
                v2EditorEnabled: !0,
                mobileRenderingEnabled: !0,
            },
        },
    ],
});
