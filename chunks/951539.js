t.d(n, {
    ZP: () => v,
    so: () => h,
    wg: () => f,
}),
    t(388685);
var i = t(442837),
    r = t(159300),
    l = t(427679),
    o = t(592125),
    c = t(984933),
    a = t(430824),
    s = t(496675),
    u = t(700785),
    d = t(924301),
    g = t(765305),
    p = t(981631);
function f(e) {
    let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z],
        { entityType: t, channelId: i } =
            "entity_type" in e
                ? {
                      entityType: e.entity_type,
                      channelId: e.channel_id,
                  }
                : e;
    if (t === g.WX.EXTERNAL) return !0;
    let r = n.getChannel(i);
    return null != r && u.Uu(p.Plq.VIEW_CHANNEL, r);
}
function h(e) {
    let [n, t, i, u] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [c.ZP, o.Z, a.Z, l.Z];
    if ((0, d.Z2)(e)) return !1;
    let { guild_id: p, channel_id: h } = e,
        v = e.entity_type === g.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(h),
        m = i.getGuild(p),
        j = u.getStageInstanceByChannel(h);
    return !!(0, r.b)(s.Z, m, v, j) && null != v && f(e, [t]);
}
function v(e) {
    return (0, i.e7)([c.ZP, o.Z, a.Z, l.Z], () => h(e, [c.ZP, o.Z, a.Z, l.Z]), [e]);
}
