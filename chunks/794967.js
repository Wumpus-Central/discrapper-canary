r.d(t, { D: () => a, c: () => s });
var n = r(562465),
    l = r(73153),
    i = r(611010),
    o = r(427157),
    E = r(652215);
async function s(e) {
    let t = (
        await n.Bo.get({
            url: E.Rsh.GUILD_INTEGRATIONS(e),
            query: { include_applications: !0, include_role_connections_metadata: !0 },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    ).body.map((e) => ({
        ...e,
        application: "application" in e && null != e.application ? i.kJ.createFromServer(e.application) : void 0,
        user: "user" in e && null != e.user ? new o.A(e.user) : void 0,
    }));
    return l.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INTEGRATIONS", guildId: e, integrations: t }), t;
}
function a(e) {
    return n.Bo.get({ url: E.Rsh.GUILD_WIDGET(e), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
        l.h.dispatch({ type: "GUILD_SETTINGS_SET_WIDGET", enabled: e.body.enabled, channelId: e.body.channel_id });
    });
}
