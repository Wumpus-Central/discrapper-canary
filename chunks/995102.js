"use strict";
n.d(t, { A: () => E, g: () => m });
var r = n(627968);
n(64700);
var i = n(17928),
    l = n(477782),
    a = n(914430),
    o = n(832712),
    s = n(145408),
    c = n(543465),
    _ = n(477427),
    u = n(812141),
    d = n(47167),
    f = n(652215),
    g = n(355097),
    h = n(985018);
let m = () => [
    { value: g.Xx.MINUTES_15, label: h.intl.string(h.t["8ot6gv"]) },
    { value: g.Xx.HOURS_1, label: h.intl.string(h.t.UMWBZr) },
    { value: g.Xx.HOURS_3, label: h.intl.string(h.t.QmYWtu) },
    { value: g.Xx.HOURS_8, label: h.intl.string(h.t.EpAXPC) },
    { value: g.Xx.HOURS_24, label: h.intl.string(h.t["755t4q"]) },
    { value: g.Xx.ALWAYS, label: h.intl.string(h.t.r3LawO) },
];
function E(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [g, E] = (0, i.yK)([c.Ay], () => [
            c.Ay.isChannelMuted(e.guild_id, e.id),
            c.Ay.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        b = (0, s.M)(E),
        p = (0, d.Ay)(e, !0);
    function A(t) {
        t && e.type === f.rbe.GUILD_CATEGORY && (0, a.Gv)(e.id),
            o.A.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, _.G_.muted(t));
    }
    let S = h.intl.string(h.t.tbeRRJ),
        C = h.intl.string(h.t.OYefme);
    switch (e.type) {
        case f.rbe.GUILD_CATEGORY:
            (S = h.intl.string(h.t.pNMCg2)), (C = h.intl.string(h.t.olaBeG));
            break;
        case f.rbe.GROUP_DM:
            (S = h.intl.string(h.t.LO3kaK)), (C = h.intl.string(h.t["s5/5fm"]));
            break;
        case f.rbe.DM:
            (S = n ? h.intl.format(h.t.byjuJm, { name: p }) : h.intl.string(h.t.LO3kaK)),
                (C = n ? h.intl.format(h.t["eC+9rj"], { name: p }) : h.intl.string(h.t["s5/5fm"]));
            break;
        default:
            (S = h.intl.string(h.t.tbeRRJ)), (C = h.intl.string(h.t.OYefme));
    }
    return g
        ? (0, r.jsx)(l.Dr, { id: "unmute-channel", label: C, subtext: b, action: () => A(!1) })
        : (0, r.jsx)(l.Dr, {
              id: "mute-channel",
              label: S,
              action: () => {
                  A(!0);
              },
              children: m().map((n) => {
                  let { value: i, label: s } = n;
                  return (0, r.jsx)(
                      l.Dr,
                      {
                          id: `${i}`,
                          label: s,
                          action: () => {
                              let n;
                              return (
                                  e.type === f.rbe.GUILD_CATEGORY && (0, a.Gv)(e.id),
                                  (n = u.p(i)),
                                  void o.A.updateChannelOverrideSettings(e.guild_id, e.id, n, _.fd.Muted, t)
                              );
                          },
                      },
                      i,
                  );
              }),
          });
}
