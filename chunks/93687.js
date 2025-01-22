let l = (0, n(818083).B)({
    kind: 'user',
    id: '2024-04_gdm_presence',
    label: 'Group DM Presence',
    defaultConfig: {
        isFacepileEnabled: !1,
        isStatusIndicatorEnabled: !1,
        isTypingIndicatorEnabled: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Status Indicator Only',
            config: {
                isFacepileEnabled: !1,
                isStatusIndicatorEnabled: !0,
                isTypingIndicatorEnabled: !1
            }
        },
        {
            id: 2,
            label: 'Typing Indicator Only',
            config: {
                isFacepileEnabled: !1,
                isStatusIndicatorEnabled: !1,
                isTypingIndicatorEnabled: !0
            }
        },
        {
            id: 3,
            label: 'Status Indicator + Typing Indicator',
            config: {
                isFacepileEnabled: !1,
                isStatusIndicatorEnabled: !0,
                isTypingIndicatorEnabled: !0
            }
        },
        {
            id: 4,
            label: 'Facepile Only',
            config: {
                isFacepileEnabled: !0,
                isStatusIndicatorEnabled: !1,
                isTypingIndicatorEnabled: !1
            }
        },
        {
            id: 5,
            label: 'Facepile + Status Indicator',
            config: {
                isFacepileEnabled: !0,
                isStatusIndicatorEnabled: !0,
                isTypingIndicatorEnabled: !1
            }
        },
        {
            id: 6,
            label: 'Facepile + Typing Indicator',
            config: {
                isFacepileEnabled: !0,
                isStatusIndicatorEnabled: !1,
                isTypingIndicatorEnabled: !0
            }
        },
        {
            id: 7,
            label: 'Facepile + Typing Indicator + Status Indicator',
            config: {
                isFacepileEnabled: !0,
                isStatusIndicatorEnabled: !0,
                isTypingIndicatorEnabled: !0
            }
        }
    ]
});
t.Z = l;
