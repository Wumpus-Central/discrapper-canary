t.d(n, {
    ZP: () => h,
    so: () => p,
}),
    t(388685);
var a = t(442837),
    r = t(159300),
    i = t(427679),
    o = t(592125),
    l = t(984933),
    c = t(430824),
    d = t(496675),
    _ = t(700785),
    s = t(924301),
    u = t(765305),
    b = t(981631);
function p(e) {
    let [n, t, a, p] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.ZP, o.Z, c.Z, i.Z];
    if ((0, s.Z2)(e)) return !1;
    let { guild_id: h, channel_id: f } = e,
        m = e.entity_type === u.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(f),
        g = a.getGuild(h),
        v = p.getStageInstanceByChannel(f);
    return (
        !!(0, r.b)(d.Z, g, m, v) &&
        null != m &&
        (function (e) {
            let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z],
                { entityType: t, channelId: a } =
                    "entity_type" in e
                        ? {
                              entityType: e.entity_type,
                              channelId: e.channel_id,
                          }
                        : e;
            if (t === u.WX.EXTERNAL) return !0;
            let r = n.getChannel(a);
            return null != r && _.Uu(b.Plq.VIEW_CHANNEL, r);
        })(e, [t])
    );
}
function h(e) {
    return (0, a.e7)([l.ZP, o.Z, c.Z, i.Z], () => p(e, [l.ZP, o.Z, c.Z, i.Z]), [e]);
}
