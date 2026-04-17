"use strict";
n.d(t, { A: () => S, g: () => p });
var a = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    c = n(914430),
    o = n(832712),
    _ = n(145408),
    l = n(543465),
    s = n(477427),
    d = n(812141),
    u = n(47167),
    b = n(652215),
    m = n(355097),
    g = n(985018);
let p = () => [
    { value: m.Xx.MINUTES_15, label: g.intl.string(g.t["8ot6gv"]) },
    { value: m.Xx.HOURS_1, label: g.intl.string(g.t.UMWBZr) },
    { value: m.Xx.HOURS_3, label: g.intl.string(g.t.QmYWtu) },
    { value: m.Xx.HOURS_8, label: g.intl.string(g.t.EpAXPC) },
    { value: m.Xx.HOURS_24, label: g.intl.string(g.t["755t4q"]) },
    { value: m.Xx.ALWAYS, label: g.intl.string(g.t.r3LawO) },
];
function S(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [m, S] = (0, i.yK)([l.Ay], () => [
            l.Ay.isChannelMuted(e.guild_id, e.id),
            l.Ay.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        A = (0, _.M)(S),
        C = (0, u.Ay)(e, !0);
    function E(t) {
        t && e.type === b.rbe.GUILD_CATEGORY && (0, c.Gv)(e.id),
            o.A.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, s.G_.muted(t));
    }
    let h = g.intl.string(g.t.tbeRRJ),
        I = g.intl.string(g.t.OYefme);
    switch (e.type) {
        case b.rbe.GUILD_CATEGORY:
            (h = g.intl.string(g.t.pNMCg2)), (I = g.intl.string(g.t.olaBeG));
            break;
        case b.rbe.GROUP_DM:
            (h = g.intl.string(g.t.LO3kaK)), (I = g.intl.string(g.t["s5/5fm"]));
            break;
        case b.rbe.DM:
            (h = n ? g.intl.format(g.t.byjuJm, { name: C }) : g.intl.string(g.t.LO3kaK)),
                (I = n ? g.intl.format(g.t["eC+9rj"], { name: C }) : g.intl.string(g.t["s5/5fm"]));
            break;
        default:
            (h = g.intl.string(g.t.tbeRRJ)), (I = g.intl.string(g.t.OYefme));
    }
    return m
        ? (0, a.jsx)(r.Drp, { id: "unmute-channel", label: I, subtext: A, action: () => E(!1) })
        : (0, a.jsx)(r.Drp, {
              id: "mute-channel",
              label: h,
              action: () => {
                  E(!0);
              },
              children: p().map((n) => {
                  let { value: i, label: _ } = n;
                  return (0, a.jsx)(
                      r.Drp,
                      {
                          id: `${i}`,
                          label: _,
                          action: () => {
                              let n;
                              return (
                                  e.type === b.rbe.GUILD_CATEGORY && (0, c.Gv)(e.id),
                                  (n = d.p(i)),
                                  void o.A.updateChannelOverrideSettings(e.guild_id, e.id, n, s.fd.Muted, t)
                              );
                          },
                      },
                      i,
                  );
              }),
          });
}
