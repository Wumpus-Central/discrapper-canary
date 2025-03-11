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
        { channel: l, canJoin: p } = (0, r.cj)([c.Z, f.Z], () => {
            let e = c.Z.getChannel(n);
            if (null == e)
                return {
                    channel: null,
                    canJoin: !1
                };
            let t = (0, i.Z)(e, f.Z);
            return {
                channel: e,
                canJoin: t
            };
        }),
        m = (0, r.e7)([s.default], () => s.default.getId() === e.id),
        g = (0, r.e7)([_.Z], () => _.Z.isFriend(e.id)),
        E = (0, r.e7)([u.ZP, d.Z], () => (null == l ? void 0 : l.guild_id) != null && (null != u.ZP.getMember(l.guild_id, e.id) || d.Z.getCheck(l.guild_id).canChat)),
        { needSubscriptionToAccess: v } = (0, o.Z)(n),
        { enabled: b } = a.Z.useExperiment({
            guildId: null == l ? void 0 : l.guild_id,
            location: t
        }),
        y = null == l ? void 0 : l.type,
        O = y === h.d4z.GUILD_VOICE,
        I = null != y && h.TPd.CALLABLE.has(y),
        S = (O && b && E && p && !v) || I;
    return g && !m && !e.bot && !e.system && !e.isProvisional && S;
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
