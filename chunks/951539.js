t.d(n, {
    ZP: () => p,
    so: () => h,
}),
    t(388685);
var a = t(442837),
    i = t(159300),
    r = t(427679),
    l = t(592125),
    o = t(984933),
    c = t(430824),
    d = t(496675),
    s = t(700785),
    u = t(924301),
    b = t(765305),
    f = t(981631);
function h(e) {
    let [n, t, a, h] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.ZP, l.Z, c.Z, r.Z];
    if ((0, u.Z2)(e)) return !1;
    let { guild_id: p, channel_id: m } = e,
        g = e.entity_type === b.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(m),
        v = a.getGuild(p),
        x = h.getStageInstanceByChannel(m);
    return (
        !!(0, i.b)(d.Z, v, g, x) &&
        null != g &&
        (function (e) {
            let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.Z],
                { entityType: t, channelId: a } =
                    "entity_type" in e
                        ? {
                              entityType: e.entity_type,
                              channelId: e.channel_id,
                          }
                        : e;
            if (t === b.WX.EXTERNAL) return !0;
            let i = n.getChannel(a);
            return null != i && s.Uu(f.Plq.VIEW_CHANNEL, i);
        })(e, [t])
    );
}
function p(e) {
    return (0, a.e7)([o.ZP, l.Z, c.Z, r.Z], () => h(e, [o.ZP, l.Z, c.Z, r.Z]), [e]);
}
