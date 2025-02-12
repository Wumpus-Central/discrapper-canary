t.d(n, {
    ZP: () => f,
    so: () => p,
    wg: () => h
}),
    t(47120);
var a = t(442837),
    i = t(159300),
    o = t(427679),
    r = t(592125),
    c = t(984933),
    l = t(430824),
    _ = t(496675),
    d = t(700785),
    s = t(924301),
    u = t(765305),
    b = t(981631);
function h(e) {
    let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Z],
        { entityType: t, channelId: a } =
            'entity_type' in e
                ? {
                      entityType: e.entity_type,
                      channelId: e.channel_id
                  }
                : e;
    if (t === u.WX.EXTERNAL) return !0;
    let i = n.getChannel(a);
    return null != i && d.Uu(b.Plq.VIEW_CHANNEL, i);
}
function p(e) {
    let [n, t, a, d] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [c.ZP, r.Z, l.Z, o.Z];
    if ((0, s.Z2)(e)) return !1;
    let { guild_id: b, channel_id: p } = e,
        f = e.entity_type === u.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(p),
        m = a.getGuild(b),
        v = d.getStageInstanceByChannel(p);
    return !!(0, i.b)(_.Z, m, f, v) && null != f && h(e, [t]);
}
function f(e) {
    return (0, a.e7)([c.ZP, r.Z, l.Z, o.Z], () => p(e, [c.ZP, r.Z, l.Z, o.Z]), [e]);
}
