n.d(t, { D: () => o, c: () => l });
var i = n(636537),
    r = n(228366),
    a = n(395671),
    s = n(889227),
    _ = n(652215);
async function l(e) {
    let t = (
        await i.Bo.get({
            url: _.Rsh.GUILD_INTEGRATIONS(e),
            query: { include_applications: !0, include_role_connections_metadata: !0 },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    ).body.map((e) => ({
        ...e,
        application: "application" in e && null != e.application ? a.kJ.createFromServer(e.application) : void 0,
        user: "user" in e && null != e.user ? new s.A(e.user) : void 0,
    }));
    return r.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INTEGRATIONS", guildId: e, integrations: t }), t;
}
function o(e) {
    return i.Bo.get({ url: _.Rsh.GUILD_WIDGET(e), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
        r.h.dispatch({ type: "GUILD_SETTINGS_SET_WIDGET", enabled: e.body.enabled, channelId: e.body.channel_id });
    });
}
