t.d(n, {
    ZP: () => h,
    so: () => f,
    wg: () => p,
}),
    t(388685);
var r = t(442837),
    o = t(159300),
    i = t(427679),
    a = t(592125),
    l = t(984933),
    c = t(430824),
    s = t(496675),
    d = t(700785),
    u = t(924301),
    _ = t(765305),
    b = t(981631);
function p(e) {
    let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Z],
        { entityType: t, channelId: r } =
            "entity_type" in e
                ? {
                      entityType: e.entity_type,
                      channelId: e.channel_id,
                  }
                : e;
    if (t === _.WX.EXTERNAL) return !0;
    let o = n.getChannel(r);
    return null != o && d.Uu(b.Plq.VIEW_CHANNEL, o);
}
function f(e) {
    let [n, t, r, d] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.ZP, a.Z, c.Z, i.Z];
    if ((0, u.Z2)(e)) return !1;
    let { guild_id: b, channel_id: f } = e,
        h = e.entity_type === _.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(f),
        m = r.getGuild(b),
        g = d.getStageInstanceByChannel(f);
    return !!(0, o.b)(s.Z, m, h, g) && null != h && p(e, [t]);
}
function h(e) {
    return (0, r.e7)([l.ZP, a.Z, c.Z, i.Z], () => f(e, [l.ZP, a.Z, c.Z, i.Z]), [e]);
}
