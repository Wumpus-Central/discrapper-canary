n.d(t, { F: () => s }), n(35282);
var r = n(592125),
    i = n(979651),
    a = n(574176);
let o = [null, null];
function s(e, t) {
    var n, s;
    if (null == t) return o;
    let l =
            null == (n = r.Z.getChannel(null == (s = i.Z.getVoiceStateForUser(e)) ? void 0 : s.channelId))
                ? void 0
                : n.guild_id,
        { defaultStatusVariant: c } = (0, a.gx)({
            guildId: l,
            location: "parseHangStatus",
        }),
        u = t.split(":");
    return u.length > 1 && u[1] !== c ? [u[0], c] : u;
}
