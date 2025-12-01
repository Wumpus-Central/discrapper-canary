n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(666917),
    l = n(442837),
    a = n(481060),
    s = n(536442),
    o = n(984933),
    c = n(496675),
    u = n(51382),
    d = n(91326),
    p = n(503856),
    f = n(981631);
function h(e) {
    let { channel: t, guild: n } = e,
        o = (0, l.e7)([s.qc], () => s.qc.hasHotspot(s.v6.HUB_STUDY_ROOM_NOTICE)),
        c = (0, p.r)(t.guild_id),
        f = (0, a.q_F)({
            maxHeight: 300 * !c,
            overflow: "hidden",
            delay: 400,
        });
    return (0, r.jsx)(i.animated.div, {
        style: f,
        children: o
            ? (0, r.jsx)(u.Z, {
                  channel: t,
                  guild: n,
              })
            : (0, r.jsx)(d.Z, {
                  name: "\uD83D\uDCDA\u2615 ".concat(t.name),
                  channel: t,
              }),
    });
}
let g = function (e) {
    let { guild: t } = e,
        n = (0, l.e7)([o.ZP], () => o.ZP.getChannels(t.id)[o.Zb][0]),
        i = (0, l.e7)([c.Z], () => null != n && c.Z.can(f.Plq.CONNECT, n.channel));
    return t.features.has(f.GuildFeatures.HUB) && null != n && i
        ? (0, r.jsx)(h, {
              channel: n.channel,
              guild: t,
          })
        : null;
};
