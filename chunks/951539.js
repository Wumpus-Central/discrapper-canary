t.d(n, {
    ZP: () => m,
    so: () => v,
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
    p = t(981631);
function v(e) {
    let [n, t, i, v] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.ZP, l.Z, c.Z, a.Z];
    if ((0, u.Z2)(e)) return !1;
    let { guild_id: m, channel_id: f } = e,
        g = e.entity_type === _.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(f),
        h = i.getGuild(m),
        b = v.getStageInstanceByChannel(f);
    return (
        !!(0, r.b)(s.Z, h, g, b) &&
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
            return null != r && d.Uu(p.Plq.VIEW_CHANNEL, r);
        })(e, [t])
    );
}
function m(e) {
    return (0, i.e7)([o.ZP, l.Z, c.Z, a.Z], () => v(e, [o.ZP, l.Z, c.Z, a.Z]), [e]);
}
