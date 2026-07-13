n.d(t, { m: () => r });
var i = n(636537),
    l = n(228366),
    s = n(287809),
    a = n(652215);
async function r(e, t) {
    try {
        let n = await i.Bo.put({
            url: a.Rsh.USER_SET_GUILD_IDENTITY,
            body: { identity_guild_id: e, identity_enabled: t },
            rejectWithError: !1,
        });
        return (
            n.ok && l.h.dispatch({ type: "CURRENT_USER_UPDATE", user: { ...s.default.getCurrentUser(), ...n.body } }), n
        );
    } catch (e) {
        return e;
    }
}
