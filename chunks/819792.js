n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(620792),
    l = n(442837),
    a = n(481060),
    o = n(536442),
    s = n(984933),
    c = n(496675),
    u = n(51382),
    d = n(91326),
    p = n(503856),
    f = n(981631);
function g(e) {
    let { channel: t, guild: n } = e,
        s = (0, l.e7)([o.qc], () => o.qc.hasHotspot(o.v6.HUB_STUDY_ROOM_NOTICE)),
        c = (0, p.r)(t.guild_id),
        f = (0, a.q_F)({
            maxHeight: 300 * !c,
            overflow: "hidden",
            delay: 400,
        });
    return (0, r.jsx)(i.animated.div, {
        style: f,
        children: s
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
let h = function (e) {
    let { guild: t } = e,
        n = (0, l.e7)([s.ZP], () => s.ZP.getChannels(t.id)[s.Zb][0]),
        i = (0, l.e7)([c.Z], () => null != n && c.Z.can(f.Plq.CONNECT, n.channel));
    return t.features.has(f.GuildFeatures.HUB) && null != n && i
        ? (0, r.jsx)(g, {
              channel: n.channel,
              guild: t,
          })
        : null;
};
