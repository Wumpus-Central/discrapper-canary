n.d(t, {
    V: () => g,
    s: () => m
});
var r = n(442837),
    i = n(387343),
    o = n(66999),
    a = n(163612),
    s = n(314897),
    l = n(523746),
    c = n(592125),
    u = n(271383),
    d = n(607744),
    f = n(496675),
    _ = n(699516),
    p = n(979651),
    h = n(981631);
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'useCanRing',
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = (0, r.e7)([c.Z], () => c.Z.getChannel(n)),
        o = (0, r.e7)([s.default], () => s.default.getId() === e.id),
        a = (0, r.e7)([_.Z], () => _.Z.isFriend(e.id)),
        l = null == i ? void 0 : i.type,
        u = null != l && h.TPd.CALLABLE.has(l),
        d = E(e, t, i) || u;
    return a && !o && !e.bot && !e.system && !e.isProvisional && d;
}
function g(e) {
    let t = h.TPd.CALLABLE.has(e.type),
        n = e.type === h.d4z.GUILD_VOICE;
    if (t) {
        let t = l.Z.getCall(e.id);
        return null != t && null != t.messageId && !l.Z.isCallUnavailable(e.id);
    }
    if (n) {
        let { enabled: t } = a.Z.getCurrentConfig({
                guildId: e.guild_id,
                location: 'ring'
            }),
            n = p.Z.getVoiceState(e.guild_id, s.default.getId());
        return t && null != n && n.channelId === e.id;
    }
    return !1;
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'useCanRingToGuildVoiceChannel',
        n = arguments.length > 2 ? arguments[2] : void 0,
        s = (0, r.e7)([f.Z], () => null != n && (0, i.Z)(n, f.Z)),
        l = (0, r.e7)([u.ZP, d.Z], () => {
            let t = null == n ? void 0 : n.guild_id;
            if (null == t) return !1;
            let r = null != u.ZP.getMember(t, e.id),
                i = d.Z.getCheck(t).canChat;
            return r && i;
        }),
        { needSubscriptionToAccess: c } = (0, o.Z)(null == n ? void 0 : n.id),
        { enabled: _ } = a.Z.useExperiment({
            guildId: null == n ? void 0 : n.guild_id,
            location: t
        }),
        p = (null == n ? void 0 : n.type) === h.d4z.GUILD_VOICE;
    return _ && p && l && s && !c;
}
