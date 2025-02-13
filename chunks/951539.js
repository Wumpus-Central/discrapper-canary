t.d(n, {
    ZP: () => v,
    so: () => p,
    wg: () => g
}),
    t(47120);
var i = t(442837),
    l = t(159300),
    a = t(427679),
    r = t(592125),
    d = t(984933),
    s = t(430824),
    o = t(496675),
    c = t(700785),
    u = t(924301),
    _ = t(765305),
    m = t(981631);
function g(e) {
    let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Z],
        { entityType: t, channelId: i } =
            'entity_type' in e
                ? {
                      entityType: e.entity_type,
                      channelId: e.channel_id
                  }
                : e;
    if (t === _.WX.EXTERNAL) return !0;
    let l = n.getChannel(i);
    return null != l && c.Uu(m.Plq.VIEW_CHANNEL, l);
}
function p(e) {
    let [n, t, i, c] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [d.ZP, r.Z, s.Z, a.Z];
    if ((0, u.Z2)(e)) return !1;
    let { guild_id: m, channel_id: p } = e,
        v = e.entity_type === _.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(p),
        h = i.getGuild(m),
        I = c.getStageInstanceByChannel(p);
    return !!(0, l.b)(o.Z, h, v, I) && null != v && g(e, [t]);
}
function v(e) {
    return (0, i.e7)([d.ZP, r.Z, s.Z, a.Z], () => p(e, [d.ZP, r.Z, s.Z, a.Z]), [e]);
}
