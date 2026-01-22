n.d(t, {
    A: () => d,
});
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(837057),
    a = n(310419),
    o = n(488995),
    c = n(985018);

function d(e) {
    return (0, i.jsx)(r.Drp, {
        id: "application-directory",
        label: (0, i.jsx)(i.Fragment, {
            children: c.intl.string(c.t.AKcFUj),
        }),
        icon: r.k9F,
        action: () => {
            (0, l.transitionToGlobalDiscovery)({
                tab: o.GlobalDiscoveryTab.APPS,
                newSessionState: {
                    entrypoint: {
                        name: a.sW.GUILD_HEADER_POPOUT,
                    },
                    guildId: e.id,
                },
            });
        },
    });
}
