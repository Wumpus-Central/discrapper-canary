n.d(t, {
    K: () => g,
    O: () => u,
});
var r = n(54381),
    i = n(481060),
    l = n(37234),
    a = n(749681),
    s = n(258971),
    o = n(49898),
    c = n(388032),
    d = n(912743);
function u(e) {
    let { guildId: t, section: n } = e;
    (0, a.transitionToGlobalDiscovery)({
        tab: o.GlobalDiscoveryTab.APPS,
        newSessionState: {
            guildId: t,
            entrypoint: {
                name: s.xF.GUILD_SETTINGS,
                guildSettingsSection: n,
            },
        },
    }),
        (0, l.xf)();
}
function g() {
    return (0, r.jsxs)("div", {
        className: d.rowContainer,
        children: [
            (0, r.jsx)("div", { children: c.intl.string(c.t.AKcFUj) }),
            (0, r.jsx)(i.rgF, {
                size: "xs",
                color: "currentColor",
                className: d.linkIcon,
            }),
        ],
    });
}
