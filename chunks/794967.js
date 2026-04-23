"use strict";
n.d(t, { D: () => u, c: () => l });
var r = n(562465),
    i = n(73153),
    s = n(611010),
    a = n(427157),
    o = n(652215);
async function l(e) {
    let t = (
        await r.Bo.get({
            url: o.Rsh.GUILD_INTEGRATIONS(e),
            query: { include_applications: !0, include_role_connections_metadata: !0 },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    ).body.map((e) => ({
        ...e,
        application: "application" in e && null != e.application ? s.kJ.createFromServer(e.application) : void 0,
        user: "user" in e && null != e.user ? new a.A(e.user) : void 0,
    }));
    return i.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INTEGRATIONS", guildId: e, integrations: t }), t;
}
function u(e) {
    return r.Bo.get({ url: o.Rsh.GUILD_WIDGET(e), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
        i.h.dispatch({ type: "GUILD_SETTINGS_SET_WIDGET", enabled: e.body.enabled, channelId: e.body.channel_id });
    });
}
