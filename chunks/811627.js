n.d(t, { Z: () => e });
let e = (0, n(818083).B)({
    kind: 'user',
    id: '2025-03_desktop_communication_notifications',
    label: 'Desktop Communication Notifications',
    defaultConfig: {
        enabled: !1,
        includeImages: !1,
        includeStickers: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Enable communication notifications',
            config: {
                enabled: !0,
                includeImages: !1,
                includeStickers: !1
            }
        },
        {
            id: 2,
            label: 'Also embed (SFW) images in notification content',
            config: {
                enabled: !0,
                includeImages: !0,
                includeStickers: !1
            }
        },
        {
            id: 3,
            label: 'Also embed stickers in notification content',
            config: {
                enabled: !0,
                includeImages: !0,
                includeStickers: !0
            }
        }
    ]
});
