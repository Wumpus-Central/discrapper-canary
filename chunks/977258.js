n.d(t, { s: () => c });
var r = n(149765);
n(442837);
var i = n(430198),
    a = n(592125),
    o = n(700785),
    s = n(981631);
function l(e) {
    return null != e && s.TPd.GUILD_VOCAL.has(e.type) ? r.$e(s.Plq.VIEW_CHANNEL, s.Plq.CONNECT) : s.Plq.VIEW_CHANNEL;
}
function c(e, t) {
    let n = l(a.Z.getChannel(t));
    return i.Z.isChannelGated(e, t) || o.Uu(n, a.Z.getChannel(t));
}
