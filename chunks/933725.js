"use strict";
n.d(t, { m: () => a });
var s = n(562465),
    i = n(73153),
    r = n(287809),
    l = n(652215);
async function a(e, t) {
    try {
        let n = await s.Bo.put({
            url: l.Rsh.USER_SET_GUILD_IDENTITY,
            body: { identity_guild_id: e, identity_enabled: t },
            rejectWithError: !1,
        });
        return (
            n.ok && i.h.dispatch({ type: "CURRENT_USER_UPDATE", user: { ...r.default.getCurrentUser(), ...n.body } }), n
        );
    } catch (e) {
        return e;
    }
}
