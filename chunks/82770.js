n.d(e, { A: () => c });
var l = n(627968);
n(64700);
var t = n(477782),
    a = n(323384),
    d = n(837057),
    r = n(310419),
    s = n(488995),
    o = n(985018);
function c(i) {
    return (0, l.jsx)(t.Dr, {
        id: "application-directory",
        label: o.intl.string(o.t.AKcFUj),
        icon: a.k,
        leadingAccessory: { type: "icon", icon: a.k },
        action: () => {
            (0, d.transitionToGlobalDiscovery)({
                tab: s.GlobalDiscoveryTab.APPS,
                newSessionState: { entrypoint: { name: r.sW.GUILD_HEADER_POPOUT }, guildId: i.id },
            });
        },
    });
}
