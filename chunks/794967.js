n.d(e, { D: () => l, c: () => d });
var i = n(636537),
    t = n(228366),
    a = n(395671),
    o = n(889227),
    c = n(652215);
async function d(r) {
    let e = (
        await i.Bo.get({
            url: c.Rsh.GUILD_INTEGRATIONS(r),
            query: { include_applications: !0, include_role_connections_metadata: !0 },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    ).body.map((r) => ({
        ...r,
        application: "application" in r && null != r.application ? a.kJ.createFromServer(r.application) : void 0,
        user: "user" in r && null != r.user ? new o.A(r.user) : void 0,
    }));
    return t.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INTEGRATIONS", guildId: r, integrations: e }), e;
}
function l(r) {
    return i.Bo.get({ url: c.Rsh.GUILD_WIDGET(r), oldFormErrors: !0, rejectWithError: !0 }).then((r) => {
        t.h.dispatch({ type: "GUILD_SETTINGS_SET_WIDGET", enabled: r.body.enabled, channelId: r.body.channel_id });
    });
}
