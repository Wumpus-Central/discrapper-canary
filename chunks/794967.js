l.d(t, { D: () => c, c: () => o });
var n = l(636537),
    i = l(228366),
    r = l(395671),
    a = l(889227),
    s = l(652215);
async function o(e) {
    let t = (
        await n.Bo.get({
            url: s.Rsh.GUILD_INTEGRATIONS(e),
            query: { include_applications: !0, include_role_connections_metadata: !0 },
            oldFormErrors: !0,
            rejectWithError: (0, n.fT)(),
        })
    ).body.map((e) => ({
        ...e,
        application: "application" in e && null != e.application ? r.kJ.createFromServer(e.application) : void 0,
        user: "user" in e && null != e.user ? new a.A(e.user) : void 0,
    }));
    return i.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INTEGRATIONS", guildId: e, integrations: t }), t;
}
function c(e) {
    return n.Bo.get({ url: s.Rsh.GUILD_WIDGET(e), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
        i.h.dispatch({ type: "GUILD_SETTINGS_SET_WIDGET", enabled: e.body.enabled, channelId: e.body.channel_id });
    });
}
