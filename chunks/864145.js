let i = (0, n(945810).mj)({
    name: "2026-03-soundmoji-rendering",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
n.d(
    t,
    {},
    {
        K: function (e) {
            let { location: t } = e;
            return i.getConfig({ location: t }).enabled;
        },
        X: function (e) {
            let { location: t } = e;
            return i.useConfig({ location: t }).enabled;
        },
    },
);
