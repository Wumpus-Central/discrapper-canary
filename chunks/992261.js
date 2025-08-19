n.d(t, { HG: () => i });
let r = (0, n(427164).le)({
    kind: "user",
    name: "2025-08-voice-user-affinity",
    defaultConfig: { enabled: !1 },
    variations: {
        0: {
            enabled: !1,
            sortType: void 0,
        },
        1: {
            enabled: !0,
            sortType: "vc_probability",
        },
        2: {
            enabled: !0,
            sortType: "communication_probability",
        },
    },
});
function i(e) {
    return r.getConfig({ location: e }).sortType;
}
