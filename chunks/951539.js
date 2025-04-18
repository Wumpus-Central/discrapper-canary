t.d(n, {
    ZP: () => h,
    so: () => f,
    wg: () => p
}),
    t(388685);
var r = t(442837),
    a = t(159300),
    i = t(427679),
    o = t(592125),
    l = t(984933),
    c = t(430824),
    s = t(496675),
    d = t(700785),
    u = t(924301),
    _ = t(765305),
    b = t(981631);
function p(e) {
    let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z],
        { entityType: t, channelId: r } =
            'entity_type' in e
                ? {
                      entityType: e.entity_type,
                      channelId: e.channel_id
                  }
                : e;
    if (t === _.WX.EXTERNAL) return !0;
    let a = n.getChannel(r);
    return null != a && d.Uu(b.Plq.VIEW_CHANNEL, a);
}
function f(e) {
    let [n, t, r, d] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.ZP, o.Z, c.Z, i.Z];
    if ((0, u.Z2)(e)) return !1;
    let { guild_id: b, channel_id: f } = e,
        h = e.entity_type === _.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(f),
        m = r.getGuild(b),
        g = d.getStageInstanceByChannel(f);
    return !!(0, a.b)(s.Z, m, h, g) && null != h && p(e, [t]);
}
function h(e) {
    return (0, r.e7)([l.ZP, o.Z, c.Z, i.Z], () => f(e, [l.ZP, o.Z, c.Z, i.Z]), [e]);
}
