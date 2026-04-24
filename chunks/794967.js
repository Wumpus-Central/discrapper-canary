n.d(t, { D: () => c, c: () => s });
var a = n(636537),
    i = n(228366),
    l = n(395671),
    r = n(889227),
    o = n(652215);
async function s(e) {
    let t = (
        await a.Bo.get({
            url: o.Rsh.GUILD_INTEGRATIONS(e),
            query: { include_applications: !0, include_role_connections_metadata: !0 },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    ).body.map((e) => ({
        ...e,
        application: "application" in e && null != e.application ? l.kJ.createFromServer(e.application) : void 0,
        user: "user" in e && null != e.user ? new r.A(e.user) : void 0,
    }));
    return i.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INTEGRATIONS", guildId: e, integrations: t }), t;
}
function c(e) {
    return a.Bo.get({ url: o.Rsh.GUILD_WIDGET(e), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
        i.h.dispatch({ type: "GUILD_SETTINGS_SET_WIDGET", enabled: e.body.enabled, channelId: e.body.channel_id });
    });
}
