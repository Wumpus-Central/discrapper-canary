"use strict";
n.d(t, { A: () => f, g: () => b });
var i = n(627968);
n(64700);
var r = n(311907),
    a = n(477782),
    l = n(914430),
    s = n(832712),
    o = n(145408),
    c = n(543465),
    d = n(477427),
    _ = n(812141),
    u = n(47167),
    g = n(652215),
    m = n(355097),
    h = n(985018);
let b = () => [
    { value: m.Xx.MINUTES_15, label: h.intl.string(h.t["8ot6gv"]) },
    { value: m.Xx.HOURS_1, label: h.intl.string(h.t.UMWBZr) },
    { value: m.Xx.HOURS_3, label: h.intl.string(h.t.QmYWtu) },
    { value: m.Xx.HOURS_8, label: h.intl.string(h.t.EpAXPC) },
    { value: m.Xx.HOURS_24, label: h.intl.string(h.t["755t4q"]) },
    { value: m.Xx.ALWAYS, label: h.intl.string(h.t.r3LawO) },
];
function f(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [m, f] = (0, r.yK)([c.Ay], () => [
            c.Ay.isChannelMuted(e.guild_id, e.id),
            c.Ay.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        p = (0, o.M)(f),
        A = (0, u.Ay)(e, !0);
    function S(t) {
        t && e.type === g.rbe.GUILD_CATEGORY && (0, l.Gv)(e.id),
            s.A.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, d.G_.muted(t));
    }
    let E = h.intl.string(h.t.tbeRRJ),
        I = h.intl.string(h.t.OYefme);
    switch (e.type) {
        case g.rbe.GUILD_CATEGORY:
            (E = h.intl.string(h.t.pNMCg2)), (I = h.intl.string(h.t.olaBeG));
            break;
        case g.rbe.GROUP_DM:
            (E = h.intl.string(h.t.LO3kaK)), (I = h.intl.string(h.t["s5/5fm"]));
            break;
        case g.rbe.DM:
            (E = n ? h.intl.format(h.t.byjuJm, { name: A }) : h.intl.string(h.t.LO3kaK)),
                (I = n ? h.intl.format(h.t["eC+9rj"], { name: A }) : h.intl.string(h.t["s5/5fm"]));
            break;
        default:
            (E = h.intl.string(h.t.tbeRRJ)), (I = h.intl.string(h.t.OYefme));
    }
    return m
        ? (0, i.jsx)(a.Dr, { id: "unmute-channel", label: I, subtext: p, action: () => S(!1) })
        : (0, i.jsx)(a.Dr, {
              id: "mute-channel",
              label: E,
              action: () => {
                  S(!0);
              },
              children: b().map((n) => {
                  let { value: r, label: o } = n;
                  return (0, i.jsx)(
                      a.Dr,
                      {
                          id: `${r}`,
                          label: o,
                          action: () => {
                              let n;
                              return (
                                  e.type === g.rbe.GUILD_CATEGORY && (0, l.Gv)(e.id),
                                  (n = _.p(r)),
                                  void s.A.updateChannelOverrideSettings(e.guild_id, e.id, n, d.fd.Muted, t)
                              );
                          },
                      },
                      r,
                  );
              }),
          });
}
