let i = (0, n(945810).mj)({
    name: "2025-05-search-results-feedback",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
n.d(
    t,
    {},
    {
        H: function (e) {
            let { location: t } = e,
                { enabled: n } = i.useConfig({ location: t });
            return n;
        },
        s: function (e) {
            let { location: t } = e,
                { enabled: n } = i.getConfig({ location: t });
            return n;
        },
    },
);
