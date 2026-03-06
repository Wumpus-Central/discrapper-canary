"use strict";
a.d(t, { Ay: () => h, gv: () => b });
var n = a(627968);
a(64700);
var r = a(989349),
    i = a.n(r),
    s = a(311907),
    o = a(397927),
    l = a(914430),
    c = a(832712),
    _ = a(392567),
    d = a(543465),
    u = a(477427),
    f = a(47167),
    m = a(652215),
    p = a(815968),
    g = a(985018);
let b = () => [
    { value: p.Xx.MINUTES_15, label: g.intl.string(g.t["8ot6gv"]) },
    { value: p.Xx.HOURS_1, label: g.intl.string(g.t.UMWBZr) },
    { value: p.Xx.HOURS_3, label: g.intl.string(g.t.QmYWtu) },
    { value: p.Xx.HOURS_8, label: g.intl.string(g.t.EpAXPC) },
    { value: p.Xx.HOURS_24, label: g.intl.string(g.t["755t4q"]) },
    { value: p.Xx.ALWAYS, label: g.intl.string(g.t.r3LawO) },
];
function h(e, t) {
    let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [r, p] = (0, s.yK)([d.Ay], () => [
            d.Ay.isChannelMuted(e.guild_id, e.id),
            d.Ay.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        h = (0, _.M)(p),
        A = (0, f.Ay)(e, !0);
    function I(t) {
        t && e.type === m.rbe.GUILD_CATEGORY && (0, l.Gv)(e.id),
            c.A.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, u.G_.muted(t));
    }
    let v = g.intl.string(g.t.tbeRRJ),
        C = g.intl.string(g.t.OYefme);
    switch (e.type) {
        case m.rbe.GUILD_CATEGORY:
            (v = g.intl.string(g.t.pNMCg2)), (C = g.intl.string(g.t.olaBeG));
            break;
        case m.rbe.GROUP_DM:
            (v = g.intl.string(g.t.LO3kaK)), (C = g.intl.string(g.t["s5/5fm"]));
            break;
        case m.rbe.DM:
            (v = a ? g.intl.format(g.t.byjuJm, { name: A }) : g.intl.string(g.t.LO3kaK)),
                (C = a ? g.intl.format(g.t["eC+9rj"], { name: A }) : g.intl.string(g.t["s5/5fm"]));
            break;
        default:
            (v = g.intl.string(g.t.tbeRRJ)), (C = g.intl.string(g.t.OYefme));
    }
    return r
        ? (0, n.jsx)(o.Drp, { id: "unmute-channel", label: C, subtext: h, action: () => I(!1) })
        : (0, n.jsx)(o.Drp, {
              id: "mute-channel",
              label: v,
              action: () => {
                  I(!0);
              },
              children: b().map((a) => {
                  let { value: r, label: s } = a;
                  return (0, n.jsx)(
                      o.Drp,
                      {
                          id: `${r}`,
                          label: s,
                          action: () => {
                              let a, n;
                              return (
                                  e.type === m.rbe.GUILD_CATEGORY && (0, l.Gv)(e.id),
                                  (a = r > 0 ? i()().add(r, "second").toISOString() : null),
                                  (n = { muted: !0, mute_config: { selected_time_window: r, end_time: a } }),
                                  void c.A.updateChannelOverrideSettings(e.guild_id, e.id, n, u.fd.Muted, t)
                              );
                          },
                      },
                      r,
                  );
              }),
          });
}
