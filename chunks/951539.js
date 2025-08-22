t.d(n, {
    ZP: () => h,
    so: () => p,
}),
    t(388685);
var i = t(442837),
    r = t(159300),
    a = t(427679),
    l = t(592125),
    o = t(984933),
    c = t(430824),
    s = t(496675),
    d = t(700785),
    u = t(924301),
    _ = t(765305),
    b = t(981631);
function p(e) {
    let [n, t, i, p] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.ZP, l.Z, c.Z, a.Z];
    if ((0, u.Z2)(e)) return !1;
    let { guild_id: h, channel_id: f } = e,
        g = e.entity_type === _.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(f),
        m = i.getGuild(h),
        v = p.getStageInstanceByChannel(f);
    return (
        !!(0, r.b)(s.Z, m, g, v) &&
        null != g &&
        (function (e) {
            let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.Z],
                { entityType: t, channelId: i } =
                    "entity_type" in e
                        ? {
                              entityType: e.entity_type,
                              channelId: e.channel_id,
                          }
                        : e;
            if (t === _.WX.EXTERNAL) return !0;
            let r = n.getChannel(i);
            return null != r && d.Uu(b.Plq.VIEW_CHANNEL, r);
        })(e, [t])
    );
}
function h(e) {
    return (0, i.e7)([o.ZP, l.Z, c.Z, a.Z], () => p(e, [o.ZP, l.Z, c.Z, a.Z]), [e]);
}
