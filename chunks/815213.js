n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(310953),
    r = n(173860),
    o = n(455234),
    c = n(152007),
    d = n(734057),
    u = n(222823),
    h = n(543465),
    A = n(531685);
function _(e) {
    let t = d.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? c.A.isMuted(t.id) : h.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, o.Y)(t)
    );
}
function m(e) {
    let t = d.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = h.Ay.isGuildCollapsed(n),
        l = h.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && u.Ay.getMentionCount(e) > 0;
}
let g = l.forwardRef(function (e, t) {
    let { guildId: n, guildChannels: l, guildChannelsVersion: o, ...c } = e,
        d = (0, a.W)(n, l, o, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        u = (0, s.bG)([A.A], () => A.A.isFocused());
    return (0, i.jsx)(r.A, { ref: t, ...c, isUnread: _, isMentioned: m, items: d, animate: u });
});
