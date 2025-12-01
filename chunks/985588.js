n.d(t, {
    V: () => g,
    s: () => h,
});
var r = n(442837),
    i = n(387343),
    a = n(66999),
    o = n(163612),
    s = n(314897),
    l = n(523746),
    c = n(592125),
    u = n(271383),
    d = n(607744),
    f = n(496675),
    p = n(699516),
    _ = n(979651),
    m = n(981631);
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "useCanRing",
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = (0, r.e7)([c.Z], () => c.Z.getChannel(n)),
        a = (0, r.e7)([s.default], () => s.default.getId() === e.id),
        o = (0, r.e7)([p.Z], () => p.Z.isFriend(e.id)),
        l = null == i ? void 0 : i.type,
        u = null != l && m.TPd.CALLABLE.has(l),
        d = E(e, t, i) || u;
    return o && !a && !e.bot && !e.system && !e.isProvisional && d;
}
function g(e) {
    let t = m.TPd.CALLABLE.has(e.type),
        n = e.type === m.d4z.GUILD_VOICE;
    if (t) {
        let t = l.Z.getCall(e.id);
        return null != t && null != t.messageId && !l.Z.isCallUnavailable(e.id);
    }
    if (n) {
        let { enabled: t } = o.Z.getCurrentConfig({
                guildId: e.guild_id,
                location: "ring",
            }),
            n = _.Z.getVoiceState(e.guild_id, s.default.getId());
        return t && null != n && n.channelId === e.id;
    }
    return !1;
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "useCanRingToGuildVoiceChannel",
        n = arguments.length > 2 ? arguments[2] : void 0,
        s = (0, r.e7)([f.Z], () => null != n && (0, i.Z)(n, f.Z)),
        l = (0, r.e7)([u.ZP, d.Z], () => {
            let t = null == n ? void 0 : n.guild_id;
            if (null == t) return !1;
            let r = null != u.ZP.getMember(t, e.id),
                i = d.Z.getCheck(t).canChat;
            return r && i;
        }),
        { needSubscriptionToAccess: c } = (0, a.Z)(null == n ? void 0 : n.id),
        { enabled: p } = o.Z.useExperiment({
            guildId: null == n ? void 0 : n.guild_id,
            location: t,
        }),
        _ = (null == n ? void 0 : n.type) === m.d4z.GUILD_VOICE;
    return p && _ && l && s && !c;
}
