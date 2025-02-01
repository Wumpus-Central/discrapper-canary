n.d(t, {
    V: () => _,
    s: () => f
});
var i = n(442837),
    r = n(163612),
    a = n(314897),
    s = n(523746),
    o = n(592125),
    l = n(271383),
    u = n(699516),
    c = n(979651),
    d = n(981631);
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'useCanRing',
        n = arguments.length > 2 ? arguments[2] : void 0,
        s = (0, i.e7)([o.Z], () => o.Z.getChannel(n)),
        c = (0, i.e7)([a.default], () => a.default.getId() === e.id),
        f = (0, i.e7)([u.Z], () => u.Z.isFriend(e.id)),
        _ = (0, i.e7)([l.ZP], () => (null == s ? void 0 : s.guild_id) != null && null != l.ZP.getMember(s.guild_id, e.id)),
        { enabled: p } = r.Z.useExperiment({
            guildId: null == s ? void 0 : s.guild_id,
            location: t
        }),
        h = null == s ? void 0 : s.type,
        m = h === d.d4z.GUILD_VOICE,
        g = null != h && d.TPd.CALLABLE.has(h),
        E = (m && p && _) || g;
    return f && !c && !e.bot && !e.system && !e.isProvisional && E;
}
function _(e) {
    let t = d.TPd.CALLABLE.has(e.type),
        n = e.type === d.d4z.GUILD_VOICE;
    if (t) {
        let t = s.Z.getCall(e.id);
        return null != t && null != t.messageId && !s.Z.isCallUnavailable(e.id);
    }
    if (n) {
        let { enabled: t } = r.Z.getCurrentConfig({
                guildId: e.guild_id,
                location: 'ring'
            }),
            n = c.Z.getVoiceState(e.guild_id, a.default.getId());
        return t && null != n && n.channelId === e.id;
    }
    return !1;
}
