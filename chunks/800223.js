n.d(t, { c: () => i });
var r = n(570140);
function i(e, t, n) {
    return (
        r.Z.dispatch({
            type: 'GUILD_SETTINGS_WIDGET_UPDATE',
            guildId: e,
            enabled: t,
            channelId: null != n ? n : null
        }),
        Promise.resolve(!0)
    );
}
