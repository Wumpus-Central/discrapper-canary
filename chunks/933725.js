"use strict";
a.d(t, { m: () => l });
var n = a(562465),
    r = a(73153),
    i = a(287809),
    s = a(652215);
async function l(e, t) {
    try {
        let a = await n.Bo.put({
            url: s.Rsh.USER_SET_GUILD_IDENTITY,
            body: { identity_guild_id: e, identity_enabled: t },
            rejectWithError: !1,
        });
        return (
            a.ok && r.h.dispatch({ type: "CURRENT_USER_UPDATE", user: { ...i.default.getCurrentUser(), ...a.body } }), a
        );
    } catch (e) {
        return e;
    }
}
