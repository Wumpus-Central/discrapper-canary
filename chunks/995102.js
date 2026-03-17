a.d(t, { A: () => g, g: () => A });
var n = a(627968);
a(64700);
var i = a(311907),
    r = a(397927),
    l = a(914430),
    o = a(832712),
    s = a(392567),
    _ = a(543465),
    c = a(477427),
    d = a(812141),
    u = a(47167),
    f = a(652215),
    m = a(815968),
    p = a(985018);
let A = () => [
    { value: m.Xx.MINUTES_15, label: p.intl.string(p.t["8ot6gv"]) },
    { value: m.Xx.HOURS_1, label: p.intl.string(p.t.UMWBZr) },
    { value: m.Xx.HOURS_3, label: p.intl.string(p.t.QmYWtu) },
    { value: m.Xx.HOURS_8, label: p.intl.string(p.t.EpAXPC) },
    { value: m.Xx.HOURS_24, label: p.intl.string(p.t["755t4q"]) },
    { value: m.Xx.ALWAYS, label: p.intl.string(p.t.r3LawO) },
];
function g(e, t) {
    let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [m, g] = (0, i.yK)([_.Ay], () => [
            _.Ay.isChannelMuted(e.guild_id, e.id),
            _.Ay.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        h = (0, s.M)(g),
        b = (0, u.Ay)(e, !0);
    function I(t) {
        t && e.type === f.rbe.GUILD_CATEGORY && (0, l.Gv)(e.id),
            o.A.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, c.G_.muted(t));
    }
    let C = p.intl.string(p.t.tbeRRJ),
        v = p.intl.string(p.t.OYefme);
    switch (e.type) {
        case f.rbe.GUILD_CATEGORY:
            (C = p.intl.string(p.t.pNMCg2)), (v = p.intl.string(p.t.olaBeG));
            break;
        case f.rbe.GROUP_DM:
            (C = p.intl.string(p.t.LO3kaK)), (v = p.intl.string(p.t["s5/5fm"]));
            break;
        case f.rbe.DM:
            (C = a ? p.intl.format(p.t.byjuJm, { name: b }) : p.intl.string(p.t.LO3kaK)),
                (v = a ? p.intl.format(p.t["eC+9rj"], { name: b }) : p.intl.string(p.t["s5/5fm"]));
            break;
        default:
            (C = p.intl.string(p.t.tbeRRJ)), (v = p.intl.string(p.t.OYefme));
    }
    return m
        ? (0, n.jsx)(r.Drp, { id: "unmute-channel", label: v, subtext: h, action: () => I(!1) })
        : (0, n.jsx)(r.Drp, {
              id: "mute-channel",
              label: C,
              action: () => {
                  I(!0);
              },
              children: A().map((a) => {
                  let { value: i, label: s } = a;
                  return (0, n.jsx)(
                      r.Drp,
                      {
                          id: `${i}`,
                          label: s,
                          action: () => {
                              let a;
                              return (
                                  e.type === f.rbe.GUILD_CATEGORY && (0, l.Gv)(e.id),
                                  (a = d.p(i)),
                                  void o.A.updateChannelOverrideSettings(e.guild_id, e.id, a, c.fd.Muted, t)
                              );
                          },
                      },
                      i,
                  );
              }),
          });
}
