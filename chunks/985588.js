n.d(t, {
    V: () => p,
    s: () => f
});
var r = n(442837),
    i = n(163612),
    o = n(314897),
    a = n(523746),
    s = n(592125),
    l = n(271383),
    c = n(699516),
    u = n(979651),
    d = n(981631);
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'useCanRing',
        n = arguments.length > 2 ? arguments[2] : void 0,
        a = (0, r.e7)([s.Z], () => s.Z.getChannel(n)),
        u = (0, r.e7)([o.default], () => o.default.getId() === e.id),
        f = (0, r.e7)([c.Z], () => c.Z.isFriend(e.id)),
        p = (0, r.e7)([l.ZP], () => (null == a ? void 0 : a.guild_id) != null && null != l.ZP.getMember(a.guild_id, e.id)),
        { enabled: _ } = i.Z.useExperiment({
            guildId: null == a ? void 0 : a.guild_id,
            location: t
        }),
        h = null == a ? void 0 : a.type,
        m = h === d.d4z.GUILD_VOICE,
        g = null != h && d.TPd.CALLABLE.has(h),
        E = (m && _ && p) || g;
    return f && !u && !e.bot && !e.system && !e.isProvisional && E;
}
function p(e) {
    let t = d.TPd.CALLABLE.has(e.type),
        n = e.type === d.d4z.GUILD_VOICE;
    if (t) {
        let t = a.Z.getCall(e.id);
        return null != t && null != t.messageId && !a.Z.isCallUnavailable(e.id);
    }
    if (n) {
        let { enabled: t } = i.Z.getCurrentConfig({
                guildId: e.guild_id,
                location: 'ring'
            }),
            n = u.Z.getVoiceState(e.guild_id, o.default.getId());
        return t && null != n && n.channelId === e.id;
    }
    return !1;
}
