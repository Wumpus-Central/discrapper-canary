a.d(t, { A: () => h, g: () => A });
var n = a(627968);
a(64700);
var i = a(311907),
    r = a(397927),
    l = a(914430),
    o = a(832712),
    s = a(145408),
    _ = a(543465),
    c = a(477427),
    d = a(812141),
    u = a(47167),
    f = a(652215),
    m = a(355097),
    p = a(985018);
let A = () => [
    { value: m.Xx.MINUTES_15, label: p.intl.string(p.t["8ot6gv"]) },
    { value: m.Xx.HOURS_1, label: p.intl.string(p.t.UMWBZr) },
    { value: m.Xx.HOURS_3, label: p.intl.string(p.t.QmYWtu) },
    { value: m.Xx.HOURS_8, label: p.intl.string(p.t.EpAXPC) },
    { value: m.Xx.HOURS_24, label: p.intl.string(p.t["755t4q"]) },
    { value: m.Xx.ALWAYS, label: p.intl.string(p.t.r3LawO) },
];
function h(e, t) {
    let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [m, h] = (0, i.yK)([_.Ay], () => [
            _.Ay.isChannelMuted(e.guild_id, e.id),
            _.Ay.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        g = (0, s.M)(h),
        b = (0, u.Ay)(e, !0);
    function I(t) {
        t && e.type === f.rbe.GUILD_CATEGORY && (0, l.Gv)(e.id),
            o.A.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, c.G_.muted(t));
    }
    let v = p.intl.string(p.t.tbeRRJ),
        C = p.intl.string(p.t.OYefme);
    switch (e.type) {
        case f.rbe.GUILD_CATEGORY:
            (v = p.intl.string(p.t.pNMCg2)), (C = p.intl.string(p.t.olaBeG));
            break;
        case f.rbe.GROUP_DM:
            (v = p.intl.string(p.t.LO3kaK)), (C = p.intl.string(p.t["s5/5fm"]));
            break;
        case f.rbe.DM:
            (v = a ? p.intl.format(p.t.byjuJm, { name: b }) : p.intl.string(p.t.LO3kaK)),
                (C = a ? p.intl.format(p.t["eC+9rj"], { name: b }) : p.intl.string(p.t["s5/5fm"]));
            break;
        default:
            (v = p.intl.string(p.t.tbeRRJ)), (C = p.intl.string(p.t.OYefme));
    }
    return m
        ? (0, n.jsx)(r.Drp, { id: "unmute-channel", label: C, subtext: g, action: () => I(!1) })
        : (0, n.jsx)(r.Drp, {
              id: "mute-channel",
              label: v,
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
