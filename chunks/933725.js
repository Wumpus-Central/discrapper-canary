n.d(t, { m: () => s });
var i = n(636537),
    r = n(228366),
    a = n(287809),
    l = n(652215);
async function s(e, t) {
    try {
        let n = await i.Bo.put({
            url: l.Rsh.USER_SET_GUILD_IDENTITY,
            body: { identity_guild_id: e, identity_enabled: t },
            rejectWithError: !1,
        });
        return (
            n.ok && r.h.dispatch({ type: "CURRENT_USER_UPDATE", user: { ...a.default.getCurrentUser(), ...n.body } }), n
        );
    } catch (e) {
        return e;
    }
}
