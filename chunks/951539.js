t.d(n, {
    ZP: () => v,
    so: () => _,
    wg: () => h,
}),
    t(388685);
var l = t(442837),
    i = t(159300),
    r = t(427679),
    o = t(592125),
    c = t(984933),
    s = t(430824),
    a = t(496675),
    u = t(700785),
    d = t(924301),
    f = t(765305),
    g = t(981631);
function h(e) {
    let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z],
        { entityType: t, channelId: l } =
            "entity_type" in e
                ? {
                      entityType: e.entity_type,
                      channelId: e.channel_id,
                  }
                : e;
    if (t === f.WX.EXTERNAL) return !0;
    let i = n.getChannel(l);
    return null != i && u.Uu(g.Plq.VIEW_CHANNEL, i);
}
function _(e) {
    let [n, t, l, u] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [c.ZP, o.Z, s.Z, r.Z];
    if ((0, d.Z2)(e)) return !1;
    let { guild_id: g, channel_id: _ } = e,
        v = e.entity_type === f.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(_),
        m = l.getGuild(g),
        x = u.getStageInstanceByChannel(_);
    return !!(0, i.b)(a.Z, m, v, x) && null != v && h(e, [t]);
}
function v(e) {
    return (0, l.e7)([c.ZP, o.Z, s.Z, r.Z], () => _(e, [c.ZP, o.Z, s.Z, r.Z]), [e]);
}
