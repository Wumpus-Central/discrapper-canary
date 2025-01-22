r.d(n, {
    s: function () {
        return c;
    }
});
var i = r(149765);
r(442837);
var a = r(430198),
    o = r(592125),
    s = r(700785),
    l = r(981631);
function u(e) {
    return null != e && l.TPd.GUILD_VOCAL.has(e.type) ? i.$e(l.Plq.VIEW_CHANNEL, l.Plq.CONNECT) : l.Plq.VIEW_CHANNEL;
}
function c(e, n) {
    let r = u(o.Z.getChannel(n));
    return a.Z.isChannelGated(e, n) || s.Uu(r, o.Z.getChannel(n));
}
