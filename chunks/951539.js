t.d(n, {
    ZP: () => g,
    so: () => m,
    wg: () => b
}),
    t(47120);
var i = t(442837),
    a = t(159300),
    r = t(427679),
    o = t(592125),
    d = t(984933),
    _ = t(430824),
    l = t(496675),
    c = t(700785),
    s = t(924301),
    p = t(765305),
    u = t(981631);
function b(e) {
    let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z],
        { entityType: t, channelId: i } =
            'entity_type' in e
                ? {
                      entityType: e.entity_type,
                      channelId: e.channel_id
                  }
                : e;
    if (t === p.WX.EXTERNAL) return !0;
    let a = n.getChannel(i);
    return null != a && c.Uu(u.Plq.VIEW_CHANNEL, a);
}
function m(e) {
    let [n, t, i, c] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [d.ZP, o.Z, _.Z, r.Z];
    if ((0, s.Z2)(e)) return !1;
    let { guild_id: u, channel_id: m } = e,
        g = e.entity_type === p.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(m),
        I = i.getGuild(u),
        N = c.getStageInstanceByChannel(m);
    return !!(0, a.b)(l.Z, I, g, N) && null != g && b(e, [t]);
}
function g(e) {
    return (0, i.e7)([d.ZP, o.Z, _.Z, r.Z], () => m(e, [d.ZP, o.Z, _.Z, r.Z]), [e]);
}
