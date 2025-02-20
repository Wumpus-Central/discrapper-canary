n.d(t, { Z: () => r });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-07_native_screen_share_picker',
    label: 'Use system picker for screen sharing',
    defaultConfig: {
        enableSystemPicker: !1,
        useSystemPickerInModalByDefault: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Enable system picker',
            config: {
                enableSystemPicker: !0,
                useSystemPickerInModalByDefault: !0
            }
        },
        {
            id: 2,
            label: 'Enable system picker behind pref gate',
            config: {
                enableSystemPicker: !0,
                useSystemPickerInModalByDefault: !1
            }
        }
    ]
});
