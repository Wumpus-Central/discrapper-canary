var i = n(574381);
let r = (0, n(945810).mj)({
    name: "2026-07-desktop-channel-tabs",
    kind: "user",
    defaultConfig: { enabled: !1, newTabExperience: "popout" },
    variations: {
        1: { enabled: !0, newTabExperience: "popout" },
        2: { enabled: !0, newTabExperience: "friends" },
        3: { enabled: !0, newTabExperience: "quickswitcher" },
    },
});
n.d(
    t,
    {},
    {
        Ay: r,
        SU: function (e) {
            return r.useConfig({ location: e }, { autoTrackExposure: (0, i.xl)() }).enabled && (0, i.xl)();
        },
        Z6: function (e) {
            return (0, i.xl)() && r.getConfig({ location: e }).enabled;
        },
    },
);
