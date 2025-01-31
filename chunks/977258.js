n.d(t, { s: () => u });
var i = n(149765);
n(442837);
var r = n(430198),
    a = n(592125),
    s = n(700785),
    o = n(981631);
function l(e) {
    return null != e && o.TPd.GUILD_VOCAL.has(e.type) ? i.$e(o.Plq.VIEW_CHANNEL, o.Plq.CONNECT) : o.Plq.VIEW_CHANNEL;
}
function u(e, t) {
    let n = l(a.Z.getChannel(t));
    return r.Z.isChannelGated(e, t) || s.Uu(n, a.Z.getChannel(t));
}
