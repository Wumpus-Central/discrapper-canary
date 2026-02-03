n.d(e, {
    Eq: () => l,
});
let i = (0, n(945810).mj)({
    kind: "user",
    name: "2026-01-family-center-v3",
    defaultConfig: {
        enabled: !1,
    },
    variations: {
        0: {
            enabled: !1,
        },
        1: {
            enabled: !0,
        },
    },
});

function l(t) {
    let { location: e } = t;
    return i.getConfig({
        location: e,
    }).enabled;
}
