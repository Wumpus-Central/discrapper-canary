"use strict";
r.d(t, { D: () => c, c: () => o });
var n = r(636537),
    i = r(228366),
    a = r(395671),
    s = r(889227),
    l = r(652215);
async function o(e) {
    let t = (
        await n.Bo.get({
            url: l.Rsh.GUILD_INTEGRATIONS(e),
            query: { include_applications: !0, include_role_connections_metadata: !0 },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    ).body.map((e) => ({
        ...e,
        application: "application" in e && null != e.application ? a.kJ.createFromServer(e.application) : void 0,
        user: "user" in e && null != e.user ? new s.A(e.user) : void 0,
    }));
    return i.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INTEGRATIONS", guildId: e, integrations: t }), t;
}
function c(e) {
    return n.Bo.get({ url: l.Rsh.GUILD_WIDGET(e), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
        i.h.dispatch({ type: "GUILD_SETTINGS_SET_WIDGET", enabled: e.body.enabled, channelId: e.body.channel_id });
    });
}
