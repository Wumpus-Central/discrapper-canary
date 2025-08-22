t.d(n, {
    ZP: () => h,
    so: () => b,
}),
    t(388685);
var r = t(442837),
    i = t(159300),
    a = t(427679),
    l = t(592125),
    o = t(984933),
    c = t(430824),
    s = t(496675),
    d = t(700785),
    u = t(924301),
    _ = t(765305),
    p = t(981631);
function b(e) {
    let [n, t, r, b] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.ZP, l.Z, c.Z, a.Z];
    if ((0, u.Z2)(e)) return !1;
    let { guild_id: h, channel_id: m } = e,
        g = e.entity_type === _.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(m),
        f = r.getGuild(h),
        v = b.getStageInstanceByChannel(m);
    return (
        !!(0, i.b)(s.Z, f, g, v) &&
        null != g &&
        (function (e) {
            let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.Z],
                { entityType: t, channelId: r } =
                    "entity_type" in e
                        ? {
                              entityType: e.entity_type,
                              channelId: e.channel_id,
                          }
                        : e;
            if (t === _.WX.EXTERNAL) return !0;
            let i = n.getChannel(r);
            return null != i && d.Uu(p.Plq.VIEW_CHANNEL, i);
        })(e, [t])
    );
}
function h(e) {
    return (0, r.e7)([o.ZP, l.Z, c.Z, a.Z], () => b(e, [o.ZP, l.Z, c.Z, a.Z]), [e]);
}
