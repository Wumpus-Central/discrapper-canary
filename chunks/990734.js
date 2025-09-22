n.d(t, { p: () => i });
let r = (0, n(427164).le)({
    name: "2025-09-threads-in-channel-list-qol",
    kind: "user",
    defaultConfig: {
        enabled: !1,
        variant: "none",
    },
    variations: {
        1: {
            enabled: !0,
            variant: "icon-with-avatar",
        },
        2: {
            enabled: !0,
            variant: "icon-in-bubble",
        },
        3: {
            enabled: !0,
            variant: "small-text-only",
        },
    },
});
function i(e) {
    let { location: t } = e;
    return r.useConfig({ location: t });
}
