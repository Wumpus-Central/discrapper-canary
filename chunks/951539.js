t.d(n, {
    ZP: () => g,
    so: () => b,
}),
    t(388685);
var i = t(442837),
    a = t(159300),
    r = t(427679),
    l = t(592125),
    o = t(984933),
    c = t(430824),
    s = t(496675),
    d = t(700785),
    u = t(924301),
    _ = t(765305),
    p = t(981631);
function b(e) {
    let [n, t, i, b] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.ZP, l.Z, c.Z, r.Z];
    if ((0, u.Z2)(e)) return !1;
    let { guild_id: g, channel_id: h } = e,
        m = e.entity_type === _.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(h),
        f = i.getGuild(g),
        v = b.getStageInstanceByChannel(h);
    return (
        !!(0, a.b)(s.Z, f, m, v) &&
        null != m &&
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
            let a = n.getChannel(i);
            return null != a && d.Uu(p.Plq.VIEW_CHANNEL, a);
        })(e, [t])
    );
}
function g(e) {
    return (0, i.e7)([o.ZP, l.Z, c.Z, r.Z], () => b(e, [o.ZP, l.Z, c.Z, r.Z]), [e]);
}
