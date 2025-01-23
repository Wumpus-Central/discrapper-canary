r.d(n, {
    V: function () {
        return p;
    },
    s: function () {
        return f;
    }
});
var i = r(442837),
    a = r(163612),
    o = r(314897),
    s = r(523746),
    l = r(592125),
    u = r(699516),
    c = r(979651),
    d = r(981631);
function f(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'useCanRing',
        r = arguments.length > 2 ? arguments[2] : void 0,
        s = (0, i.e7)([l.Z], () => l.Z.getChannel(r)),
        { enabled: c } = a.Z.useExperiment({
            guildId: null == s ? void 0 : s.guild_id,
            location: n
        });
    return (0, i.e7)([u.Z, o.default], () => {
        let n = u.Z.isFriend(e.id),
            r = o.default.getId() === e.id,
            i = null == s ? void 0 : s.type,
            a = i === d.d4z.GUILD_VOICE,
            l = null != i && d.TPd.CALLABLE.has(i),
            f = (a && c) || l;
        return n && !r && !e.bot && !e.system && !e.isProvisional && f;
    });
}
function p(e) {
    let n = d.TPd.CALLABLE.has(e.type),
        r = e.type === d.d4z.GUILD_VOICE;
    if (n) {
        let n = s.Z.getCall(e.id);
        return null != n && null != n.messageId && !s.Z.isCallUnavailable(e.id);
    }
    if (r) {
        let { enabled: n } = a.Z.getCurrentConfig({
                guildId: e.guild_id,
                location: 'ring'
            }),
            r = c.Z.getVoiceState(e.guild_id, o.default.getId());
        return n && null != r && r.channelId === e.id;
    }
    return !1;
}
