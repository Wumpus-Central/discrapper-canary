n.d(t, { Z: () => f });
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(358230),
    o = n(18998),
    s = n(220444),
    c = n(569471),
    d = n(592125),
    u = n(306680),
    h = n(9156),
    p = n(451478);
function g(e) {
    let t = d.Z.getChannel(e);
    return null != t && null != t.getGuildId() && !(t.isThread() ? c.Z.isMuted(t.id) : h.ZP.isChannelMuted(t.getGuildId(), t.id)) && (0, s.d)(t);
}
function m(e) {
    let t = d.Z.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = h.ZP.isGuildCollapsed(n),
        l = h.ZP.isChannelMuted(n, t.id);
    return (!i || !l) && u.ZP.getMentionCount(e) > 0;
}
let f = l.forwardRef(function (e, t) {
    let { guildId: n, guildChannels: l, guildChannelsVersion: s, ...c } = e,
        d = (0, a.T)(n, l, s, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        u = (0, r.e7)([p.Z], () => p.Z.isFocused());
    return (0, i.jsx)(o.Z, {
        ref: t,
        ...c,
        isUnread: g,
        isMentioned: m,
        items: d,
        animate: u
    });
});
