t.d(r, { D: () => s, c: () => E });
var n = t(636537),
    i = t(228366),
    l = t(395671),
    o = t(889227),
    a = t(652215);
async function E(e) {
    let r = (
        await n.Bo.get({
            url: a.Rsh.GUILD_INTEGRATIONS(e),
            query: { include_applications: !0, include_role_connections_metadata: !0 },
            oldFormErrors: !0,
            rejectWithError: (0, n.fT)(),
        })
    ).body.map((e) => ({
        ...e,
        application: "application" in e && null != e.application ? l.kJ.createFromServer(e.application) : void 0,
        user: "user" in e && null != e.user ? new o.A(e.user) : void 0,
    }));
    return i.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INTEGRATIONS", guildId: e, integrations: r }), r;
}
function s(e) {
    return n.Bo.get({ url: a.Rsh.GUILD_WIDGET(e), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
        i.h.dispatch({ type: "GUILD_SETTINGS_SET_WIDGET", enabled: e.body.enabled, channelId: e.body.channel_id });
    });
}
