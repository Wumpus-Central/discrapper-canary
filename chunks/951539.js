t.d(e, {
    ZP: () => g,
    so: () => I,
    wg: () => m
}),
    t(47120);
var i = t(442837),
    a = t(159300),
    r = t(427679),
    o = t(592125),
    l = t(984933),
    d = t(430824),
    _ = t(496675),
    c = t(700785),
    s = t(924301),
    p = t(765305),
    u = t(981631);
function m(n) {
    let [e] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z],
        { entityType: t, channelId: i } =
            'entity_type' in n
                ? {
                      entityType: n.entity_type,
                      channelId: n.channel_id
                  }
                : n;
    if (t === p.WX.EXTERNAL) return !0;
    let a = e.getChannel(i);
    return null != a && c.Uu(u.Plq.VIEW_CHANNEL, a);
}
function I(n) {
    let [e, t, i, c] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.ZP, o.Z, d.Z, r.Z];
    if ((0, s.Z2)(n)) return !1;
    let { guild_id: u, channel_id: I } = n,
        g = n.entity_type === p.WX.EXTERNAL ? e.getDefaultChannel(n.guild_id) : t.getChannel(I),
        b = i.getGuild(u),
        C = c.getStageInstanceByChannel(I);
    return !!(0, a.b)(_.Z, b, g, C) && null != g && m(n, [t]);
}
function g(n) {
    return (0, i.e7)([l.ZP, o.Z, d.Z, r.Z], () => I(n, [l.ZP, o.Z, d.Z, r.Z]), [n]);
}
