n.d(t, {
    A: () => r,
});
let r = (0, n(600975).C)({
    kind: "user",
    id: "2025-03_message_attachment_uploads_checksum",
    label: "Validate checksum of message attachment uploads",
    defaultConfig: {
        enabled: !1,
        enforced: !1,
        largerChunks: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Control 2",
            config: {
                enabled: !1,
                enforced: !1,
                largerChunks: !1,
            },
        },
        {
            id: 2,
            label: "Validate without enforcement",
            config: {
                enabled: !0,
                enforced: !1,
                largerChunks: !1,
            },
        },
        {
            id: 3,
            label: "Validate without enforcement (larger chunks)",
            config: {
                enabled: !0,
                enforced: !1,
                largerChunks: !0,
            },
        },
        {
            id: 4,
            label: "Validate with enforcement",
            config: {
                enabled: !0,
                enforced: !0,
                largerChunks: !1,
            },
        },
    ],
});
