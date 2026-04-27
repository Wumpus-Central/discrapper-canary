n.d(t, { A: () => p, g: () => h });
var r = n(627968);
n(64700);
var i = n(17928),
    l = n(477782),
    a = n(914430),
    o = n(832712),
    s = n(145408),
    u = n(543465),
    c = n(477427),
    d = n(812141),
    f = n(47167),
    A = n(652215),
    g = n(355097),
    m = n(985018);
let h = () => [
    { value: g.Xx.MINUTES_15, label: m.intl.string(m.t["8ot6gv"]) },
    { value: g.Xx.HOURS_1, label: m.intl.string(m.t.UMWBZr) },
    { value: g.Xx.HOURS_3, label: m.intl.string(m.t.QmYWtu) },
    { value: g.Xx.HOURS_8, label: m.intl.string(m.t.EpAXPC) },
    { value: g.Xx.HOURS_24, label: m.intl.string(m.t["755t4q"]) },
    { value: g.Xx.ALWAYS, label: m.intl.string(m.t.r3LawO) },
];
function p(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [g, p] = (0, i.yK)([u.Ay], () => [
            u.Ay.isChannelMuted(e.guild_id, e.id),
            u.Ay.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        _ = (0, s.M)(p),
        E = (0, f.Ay)(e, !0);
    function b(t) {
        t && e.type === A.rbe.GUILD_CATEGORY && (0, a.Gv)(e.id),
            o.A.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, c.G_.muted(t));
    }
    let y = m.intl.string(m.t.tbeRRJ),
        I = m.intl.string(m.t.OYefme);
    switch (e.type) {
        case A.rbe.GUILD_CATEGORY:
            (y = m.intl.string(m.t.pNMCg2)), (I = m.intl.string(m.t.olaBeG));
            break;
        case A.rbe.GROUP_DM:
            (y = m.intl.string(m.t.LO3kaK)), (I = m.intl.string(m.t["s5/5fm"]));
            break;
        case A.rbe.DM:
            (y = n ? m.intl.format(m.t.byjuJm, { name: E }) : m.intl.string(m.t.LO3kaK)),
                (I = n ? m.intl.format(m.t["eC+9rj"], { name: E }) : m.intl.string(m.t["s5/5fm"]));
            break;
        default:
            (y = m.intl.string(m.t.tbeRRJ)), (I = m.intl.string(m.t.OYefme));
    }
    return g
        ? (0, r.jsx)(l.Dr, { id: "unmute-channel", label: I, subtext: _, action: () => b(!1) })
        : (0, r.jsx)(l.Dr, {
              id: "mute-channel",
              label: y,
              action: () => {
                  b(!0);
              },
              children: h().map((n) => {
                  let { value: i, label: s } = n;
                  return (0, r.jsx)(
                      l.Dr,
                      {
                          id: `${i}`,
                          label: s,
                          action: () => {
                              let n;
                              return (
                                  e.type === A.rbe.GUILD_CATEGORY && (0, a.Gv)(e.id),
                                  (n = d.p(i)),
                                  void o.A.updateChannelOverrideSettings(e.guild_id, e.id, n, c.fd.Muted, t)
                              );
                          },
                      },
                      i,
                  );
              }),
          });
}
