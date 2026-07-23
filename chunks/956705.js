t.d(s, { G: () => n, r: () => l });
let i = (0, t(945810).mj)({
    name: "2026-04-consistent-profiles",
    kind: "user",
    defaultConfig: { enabled: !1, showMutualFriendsNameplate: !1 },
    variations: {
        1: { enabled: !0, showMutualFriendsNameplate: !1 },
        2: { enabled: !0, showMutualFriendsNameplate: !0 },
    },
});
function l(e) {
    let { enabled: s } = i.useConfig({ location: e });
    return s;
}
function n(e) {
    let { showMutualFriendsNameplate: s } = i.useConfig({ location: e });
    return s;
}
