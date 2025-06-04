n.d(t, { Z: () => o });
var r = n(818083),
    i = n(70956);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-02_hotwheels_overlay_invites_3',
    label: 'Overlay Invites Notification Pt3',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled, no date cutoff',
            config: { enabled: !0 }
        },
        {
            id: 2,
            label: 'Enabled, within past week',
            config: {
                enabled: !0,
                dateLookbackMs: i.Z.Millis.WEEK
            }
        }
    ]
});
