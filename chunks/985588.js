n.d(t, {
    V: () => f,
    s: () => d
});
var i = n(442837),
    r = n(163612),
    a = n(314897),
    s = n(523746),
    o = n(592125),
    l = n(699516),
    u = n(979651),
    c = n(981631);
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'useCanRing',
        n = arguments.length > 2 ? arguments[2] : void 0,
        s = (0, i.e7)([o.Z], () => o.Z.getChannel(n)),
        { enabled: u } = r.Z.useExperiment({
            guildId: null == s ? void 0 : s.guild_id,
            location: t
        });
    return (0, i.e7)([l.Z, a.default], () => {
        let t = l.Z.isFriend(e.id),
            n = a.default.getId() === e.id,
            i = null == s ? void 0 : s.type,
            r = i === c.d4z.GUILD_VOICE,
            o = null != i && c.TPd.CALLABLE.has(i),
            d = (r && u) || o;
        return t && !n && !e.bot && !e.system && !e.isProvisional && d;
    });
}
function f(e) {
    let t = c.TPd.CALLABLE.has(e.type),
        n = e.type === c.d4z.GUILD_VOICE;
    if (t) {
        let t = s.Z.getCall(e.id);
        return null != t && null != t.messageId && !s.Z.isCallUnavailable(e.id);
    }
    if (n) {
        let { enabled: t } = r.Z.getCurrentConfig({
                guildId: e.guild_id,
                location: 'ring'
            }),
            n = u.Z.getVoiceState(e.guild_id, a.default.getId());
        return t && null != n && n.channelId === e.id;
    }
    return !1;
}
