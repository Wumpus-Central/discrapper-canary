t.d(n, {
    ZP: () => f,
    so: () => h,
    wg: () => v
}),
    t(47120);
var r = t(442837),
    i = t(159300),
    l = t(427679),
    o = t(592125),
    c = t(984933),
    a = t(430824),
    s = t(496675),
    u = t(700785),
    d = t(924301),
    g = t(765305),
    p = t(981631);
function v(e) {
    let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z],
        { entityType: t, channelId: r } =
            'entity_type' in e
                ? {
                      entityType: e.entity_type,
                      channelId: e.channel_id
                  }
                : e;
    if (t === g.WX.EXTERNAL) return !0;
    let i = n.getChannel(r);
    return null != i && u.Uu(p.Plq.VIEW_CHANNEL, i);
}
function h(e) {
    let [n, t, r, u] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [c.ZP, o.Z, a.Z, l.Z];
    if ((0, d.Z2)(e)) return !1;
    let { guild_id: p, channel_id: h } = e,
        f = e.entity_type === g.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(h),
        m = r.getGuild(p),
        j = u.getStageInstanceByChannel(h);
    return !!(0, i.b)(s.Z, m, f, j) && null != f && v(e, [t]);
}
function f(e) {
    return (0, r.e7)([c.ZP, o.Z, a.Z, l.Z], () => h(e, [c.ZP, o.Z, a.Z, l.Z]), [e]);
}
