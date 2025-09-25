n.d(t, {
    K: () => m,
    O: () => u,
});
var r = n(951288),
    i = n(481060),
    l = n(37234),
    s = n(749681),
    a = n(258971),
    o = n(49898),
    c = n(388032),
    d = n(912743);
function u(e) {
    let { guildId: t, section: n } = e;
    (0, s.transitionToGlobalDiscovery)({
        tab: o.GlobalDiscoveryTab.APPS,
        newSessionState: {
            guildId: t,
            entrypoint: {
                name: a.xF.GUILD_SETTINGS,
                guildSettingsSection: n,
            },
        },
    }),
        (0, l.xf)();
}
function m() {
    return (0, r.jsxs)("div", {
        className: d.rowContainer,
        children: [
            (0, r.jsx)("div", { children: c.intl.string(c.t.AKcFUl) }),
            (0, r.jsx)(i.rgF, {
                size: "xs",
                color: "currentColor",
                className: d.linkIcon,
            }),
        ],
    });
}
