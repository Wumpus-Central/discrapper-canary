"use strict";
n.d(t, { m: () => l });
var i = n(636537),
    a = n(228366),
    r = n(287809),
    s = n(652215);
async function l(e, t) {
    try {
        let n = await i.Bo.put({
            url: s.Rsh.USER_SET_GUILD_IDENTITY,
            body: { identity_guild_id: e, identity_enabled: t },
            rejectWithError: !1,
        });
        return (
            n.ok && a.h.dispatch({ type: "CURRENT_USER_UPDATE", user: { ...r.default.getCurrentUser(), ...n.body } }), n
        );
    } catch (e) {
        return e;
    }
}
