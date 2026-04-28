"use strict";
n.d(t, { D: () => c, c: () => o });
var r = n(636537),
    a = n(228366),
    i = n(395671),
    l = n(889227),
    s = n(652215);
async function o(e) {
    let t = (
        await r.Bo.get({
            url: s.Rsh.GUILD_INTEGRATIONS(e),
            query: { include_applications: !0, include_role_connections_metadata: !0 },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    ).body.map((e) => ({
        ...e,
        application: "application" in e && null != e.application ? i.kJ.createFromServer(e.application) : void 0,
        user: "user" in e && null != e.user ? new l.A(e.user) : void 0,
    }));
    return a.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INTEGRATIONS", guildId: e, integrations: t }), t;
}
function c(e) {
    return r.Bo.get({ url: s.Rsh.GUILD_WIDGET(e), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
        a.h.dispatch({ type: "GUILD_SETTINGS_SET_WIDGET", enabled: e.body.enabled, channelId: e.body.channel_id });
    });
}
