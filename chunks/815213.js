"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(310953),
    a = n(173860),
    o = n(455234),
    c = n(152007),
    d = n(734057),
    u = n(222823),
    h = n(543465),
    A = n(531685);
function p(e) {
    let t = d.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? c.A.isMuted(t.id) : h.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, o.Y)(t)
    );
}
function g(e) {
    let t = d.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = h.Ay.isGuildCollapsed(n),
        s = h.Ay.isChannelMuted(n, t.id);
    return (!i || !s) && u.Ay.getMentionCount(e) > 0;
}
let m = s.forwardRef(function (e, t) {
    let { guildId: n, guildChannels: s, guildChannelsVersion: o, ...c } = e,
        d = (0, r.W)(n, s, o, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        u = (0, l.bG)([A.A], () => A.A.isFocused());
    return (0, i.jsx)(a.A, { ref: t, ...c, isUnread: p, isMentioned: g, items: d, animate: u });
});
