e.d(t, { Z: () => a });
var i = e(570140),
    l = e(149071),
    r = e(9156);
let a = {
    update(n) {
        i.Z.dispatch({
            type: "CHANNEL_COLLAPSE",
            channelId: n,
        });
    },
    toggleCollapseGuild(n) {
        l.Z.saveUserGuildSettings(n, { hide_muted_channels: !r.ZP.isGuildCollapsed(n) }),
            i.Z.dispatch({
                type: "GUILD_TOGGLE_COLLAPSE_MUTED",
                guildId: n,
            });
    },
};
