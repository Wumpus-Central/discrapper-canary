let a = (0, n(945810).mj)({
    name: "2026-09-connected-thread-sidebar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
n.d(
    t,
    {},
    {
        UN: function (e) {
            return a.getConfig({ location: e }).enabled;
        },
        f4: function (e) {
            return a.useConfig({ location: e }).enabled;
        },
    },
);
