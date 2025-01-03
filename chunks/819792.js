var i = n(200651);
n(192379);
var r = n(752877),
    l = n(442837),
    a = n(481060),
    s = n(536442),
    o = n(984933),
    c = n(496675),
    d = n(51382),
    u = n(91326),
    h = n(503856),
    m = n(981631);
function p(e) {
    let { channel: t, guild: n } = e,
        o = (0, l.e7)([s.qc], () => s.qc.hasHotspot(s.v6.HUB_STUDY_ROOM_NOTICE)),
        c = (0, h.r)(t.guild_id),
        m = (0, a.useSpring)({
            maxHeight: c ? 0 : 300,
            overflow: 'hidden',
            delay: 400
        });
    return (0, i.jsx)(r.animated.div, {
        style: m,
        children: o
            ? (0, i.jsx)(d.Z, {
                  channel: t,
                  guild: n
              })
            : (0, i.jsx)(u.Z, {
                  name: '\uD83D\uDCDA\u2615 '.concat(t.name),
                  channel: t
              })
    });
}
t.Z = function (e) {
    let { guild: t } = e,
        n = (0, l.e7)([o.ZP], () => o.ZP.getChannels(t.id)[o.Zb][0]),
        r = (0, l.e7)([c.Z], () => null != n && c.Z.can(m.Plq.CONNECT, n.channel));
    return t.hasFeature(m.oNc.HUB) && null != n && r
        ? (0, i.jsx)(p, {
              channel: n.channel,
              guild: t
          })
        : null;
};
