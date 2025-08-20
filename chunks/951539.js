n.d(t, {
    ZP: () => I,
    so: () => m,
    wg: () => p,
}),
    n(388685);
var i = n(442837),
    l = n(159300),
    r = n(427679),
    a = n(592125),
    d = n(984933),
    s = n(430824),
    o = n(496675),
    c = n(700785),
    u = n(924301),
    _ = n(765305),
    g = n(981631);
function p(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Z],
        { entityType: n, channelId: i } =
            "entity_type" in e
                ? {
                      entityType: e.entity_type,
                      channelId: e.channel_id,
                  }
                : e;
    if (n === _.WX.EXTERNAL) return !0;
    let l = t.getChannel(i);
    return null != l && c.Uu(g.Plq.VIEW_CHANNEL, l);
}
function m(e) {
    let [t, n, i, c] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [d.ZP, a.Z, s.Z, r.Z];
    if ((0, u.Z2)(e)) return !1;
    let { guild_id: g, channel_id: m } = e,
        I = e.entity_type === _.WX.EXTERNAL ? t.getDefaultChannel(e.guild_id) : n.getChannel(m),
        E = i.getGuild(g),
        f = c.getStageInstanceByChannel(m);
    return !!(0, l.b)(o.Z, E, I, f) && null != I && p(e, [n]);
}
function I(e) {
    return (0, i.e7)([d.ZP, a.Z, s.Z, r.Z], () => m(e, [d.ZP, a.Z, s.Z, r.Z]), [e]);
}
