"use strict";
a.d(t, { A: () => g, g: () => A });
var n = a(627968);
a(64700);
var i = a(311907),
    r = a(397927),
    s = a(914430),
    l = a(832712),
    o = a(145408),
    _ = a(543465),
    c = a(477427),
    d = a(812141),
    u = a(47167),
    f = a(652215),
    p = a(355097),
    m = a(985018);
let A = () => [
    { value: p.Xx.MINUTES_15, label: m.intl.string(m.t["8ot6gv"]) },
    { value: p.Xx.HOURS_1, label: m.intl.string(m.t.UMWBZr) },
    { value: p.Xx.HOURS_3, label: m.intl.string(m.t.QmYWtu) },
    { value: p.Xx.HOURS_8, label: m.intl.string(m.t.EpAXPC) },
    { value: p.Xx.HOURS_24, label: m.intl.string(m.t["755t4q"]) },
    { value: p.Xx.ALWAYS, label: m.intl.string(m.t.r3LawO) },
];
function g(e, t) {
    let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [p, g] = (0, i.yK)([_.Ay], () => [
            _.Ay.isChannelMuted(e.guild_id, e.id),
            _.Ay.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        h = (0, o.M)(g),
        b = (0, u.Ay)(e, !0);
    function I(t) {
        t && e.type === f.rbe.GUILD_CATEGORY && (0, s.Gv)(e.id),
            l.A.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, c.G_.muted(t));
    }
    let v = m.intl.string(m.t.tbeRRJ),
        C = m.intl.string(m.t.OYefme);
    switch (e.type) {
        case f.rbe.GUILD_CATEGORY:
            (v = m.intl.string(m.t.pNMCg2)), (C = m.intl.string(m.t.olaBeG));
            break;
        case f.rbe.GROUP_DM:
            (v = m.intl.string(m.t.LO3kaK)), (C = m.intl.string(m.t["s5/5fm"]));
            break;
        case f.rbe.DM:
            (v = a ? m.intl.format(m.t.byjuJm, { name: b }) : m.intl.string(m.t.LO3kaK)),
                (C = a ? m.intl.format(m.t["eC+9rj"], { name: b }) : m.intl.string(m.t["s5/5fm"]));
            break;
        default:
            (v = m.intl.string(m.t.tbeRRJ)), (C = m.intl.string(m.t.OYefme));
    }
    return p
        ? (0, n.jsx)(r.Drp, { id: "unmute-channel", label: C, subtext: h, action: () => I(!1) })
        : (0, n.jsx)(r.Drp, {
              id: "mute-channel",
              label: v,
              action: () => {
                  I(!0);
              },
              children: A().map((a) => {
                  let { value: i, label: o } = a;
                  return (0, n.jsx)(
                      r.Drp,
                      {
                          id: `${i}`,
                          label: o,
                          action: () => {
                              let a;
                              return (
                                  e.type === f.rbe.GUILD_CATEGORY && (0, s.Gv)(e.id),
                                  (a = d.p(i)),
                                  void l.A.updateChannelOverrideSettings(e.guild_id, e.id, a, c.fd.Muted, t)
                              );
                          },
                      },
                      i,
                  );
              }),
          });
}
