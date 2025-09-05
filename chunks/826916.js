n.d(t, {
    E: () => a,
    N: () => l,
});
let r = (0, n(427164).le)({
        name: "2025-09-collectibles-hero-button",
        kind: "user",
        defaultConfig: {
            showAbbreviatedButtonText: !1,
            showButtonLeftAligned: !1,
        },
        variations: {
            0: {
                showButtonLeftAligned: !1,
                showAbbreviatedButtonText: !1,
            },
            1: {
                showButtonLeftAligned: !1,
                showAbbreviatedButtonText: !0,
            },
            2: {
                showButtonLeftAligned: !0,
                showAbbreviatedButtonText: !1,
            },
            3: {
                showButtonLeftAligned: !0,
                showAbbreviatedButtonText: !0,
            },
        },
    }),
    l = (e) => r.useConfig({ location: e }).showButtonLeftAligned,
    a = (e) => r.useConfig({ location: e }).showAbbreviatedButtonText;
