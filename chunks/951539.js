t.d(n, {
    ZP: () => b,
    so: () => f,
}),
    t(388685);
var a = t(442837),
    i = t(159300),
    r = t(427679),
    o = t(592125),
    c = t(984933),
    l = t(430824),
    s = t(496675),
    d = t(700785),
    _ = t(924301),
    u = t(765305),
    p = t(981631);
function f(e) {
    let [n, t, a, f] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [c.ZP, o.Z, l.Z, r.Z];
    if ((0, _.Z2)(e)) return !1;
    let { guild_id: b, channel_id: v } = e,
        g = e.entity_type === u.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(v),
        m = a.getGuild(b),
        x = f.getStageInstanceByChannel(v);
    return (
        !!(0, i.b)(s.Z, m, g, x) &&
        null != g &&
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
            let i = n.getChannel(a);
            return null != i && d.Uu(p.Plq.VIEW_CHANNEL, i);
        })(e, [t])
    );
}
function b(e) {
    return (0, a.e7)([c.ZP, o.Z, l.Z, r.Z], () => f(e, [c.ZP, o.Z, l.Z, r.Z]), [e]);
}
