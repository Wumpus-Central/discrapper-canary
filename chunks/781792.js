n.d(t, { e: () => l }), n(789020);
var i = n(544891),
    r = n(570140),
    a = n(962086),
    s = n(160404),
    o = n(981631);
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (s.Z.isFullServerPreview(e)) {
        (0, a.aq)(e, { memberOptions: t });
        return;
    }
    return (
        r.Z.dispatch({
            type: 'GUILD_MEMBER_UPDATE_LOCAL',
            guildId: e,
            roles: t.roles,
            flags: t.flags
        }),
        i.tn.patch({
            url: o.ANM.SET_GUILD_MEMBER(e),
            body: t,
            oldFormErrors: !!n || void 0,
            rejectWithError: !1
        })
    );
}
