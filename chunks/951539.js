t.d(n, {
    ZP: () => I,
    so: () => m,
    wg: () => p
}),
    t(388685);
var i = t(442837),
    l = t(159300),
    r = t(427679),
    a = t(592125),
    d = t(984933),
    o = t(430824),
    s = t(496675),
    c = t(700785),
    u = t(924301),
    _ = t(765305),
    g = t(981631);
function p(e) {
    let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Z],
        { entityType: t, channelId: i } =
            'entity_type' in e
                ? {
                      entityType: e.entity_type,
                      channelId: e.channel_id
                  }
                : e;
    if (t === _.WX.EXTERNAL) return !0;
    let l = n.getChannel(i);
    return null != l && c.Uu(g.Plq.VIEW_CHANNEL, l);
}
function m(e) {
    let [n, t, i, c] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [d.ZP, a.Z, o.Z, r.Z];
    if ((0, u.Z2)(e)) return !1;
    let { guild_id: g, channel_id: m } = e,
        I = e.entity_type === _.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(m),
        f = i.getGuild(g),
        v = c.getStageInstanceByChannel(m);
    return !!(0, l.b)(s.Z, f, I, v) && null != I && p(e, [t]);
}
function I(e) {
    return (0, i.e7)([d.ZP, a.Z, o.Z, r.Z], () => m(e, [d.ZP, a.Z, o.Z, r.Z]), [e]);
}
