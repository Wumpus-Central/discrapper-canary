n.d(i, { A: () => c });
var t = n(627968);
n(64700);
var l = n(397927),
    a = n(837057),
    d = n(310419),
    r = n(488995),
    s = n(985018);
function c(e) {
    return (0, t.jsx)(l.Drp, {
        id: "application-directory",
        label: s.intl.string(s.t.AKcFUj),
        icon: l.k9F,
        leadingAccessory: { type: "icon", icon: l.k9F },
        action: () => {
            (0, a.transitionToGlobalDiscovery)({
                tab: r.GlobalDiscoveryTab.APPS,
                newSessionState: { entrypoint: { name: d.sW.GUILD_HEADER_POPOUT }, guildId: e.id },
            });
        },
    });
}
