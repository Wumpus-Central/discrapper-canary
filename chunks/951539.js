(t.d(n, {
    ZP: () => m,
    so: () => g,
    wg: () => h
}),
    t(388685));
var l = t(442837),
    i = t(159300),
    r = t(427679),
    o = t(592125),
    c = t(984933),
    s = t(430824),
    a = t(496675),
    u = t(700785),
    d = t(924301),
    _ = t(765305),
    f = t(981631);
function h(e) {
    let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z],
        { entityType: t, channelId: l } =
            'entity_type' in e
                ? {
                      entityType: e.entity_type,
                      channelId: e.channel_id
                  }
                : e;
    if (t === _.WX.EXTERNAL) return !0;
    let i = n.getChannel(l);
    return null != i && u.Uu(f.Plq.VIEW_CHANNEL, i);
}
function g(e) {
    let [n, t, l, u] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [c.ZP, o.Z, s.Z, r.Z];
    if ((0, d.Z2)(e)) return !1;
    let { guild_id: f, channel_id: g } = e,
        m = e.entity_type === _.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(g),
        v = l.getGuild(f),
        p = u.getStageInstanceByChannel(g);
    return !!(0, i.b)(a.Z, v, m, p) && null != m && h(e, [t]);
}
function m(e) {
    return (0, l.e7)([c.ZP, o.Z, s.Z, r.Z], () => g(e, [c.ZP, o.Z, s.Z, r.Z]), [e]);
}
