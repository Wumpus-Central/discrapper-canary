i.d(e, { A: () => v, g: () => p });
var n = i(627968);
i(64700);
var l = i(17928),
    r = i(477782),
    a = i(914430),
    d = i(832712),
    s = i(145408),
    u = i(543465),
    g = i(477427),
    b = i(812141),
    c = i(47167),
    _ = i(652215),
    m = i(355097),
    o = i(985018);
let p = () => [
    { value: m.Xx.MINUTES_15, label: o.intl.string(o.t["8ot6gv"]) },
    { value: m.Xx.HOURS_1, label: o.intl.string(o.t.UMWBZr) },
    { value: m.Xx.HOURS_3, label: o.intl.string(o.t.QmYWtu) },
    { value: m.Xx.HOURS_8, label: o.intl.string(o.t.EpAXPC) },
    { value: m.Xx.HOURS_24, label: o.intl.string(o.t["755t4q"]) },
    { value: m.Xx.ALWAYS, label: o.intl.string(o.t.r3LawO) },
];
function v(t, e) {
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [m, v] = (0, l.yK)([u.Ay], () => [
            u.Ay.isChannelMuted(t.guild_id, t.id),
            u.Ay.getChannelMuteConfig(t.guild_id, t.id),
        ]),
        O = (0, s.M)(v),
        h = (0, c.Ay)(t, !0);
    function A(e) {
        e && t.type === _.rbe.GUILD_CATEGORY && (0, a.Gv)(t.id),
            d.A.updateChannelOverrideSettings(t.guild_id, t.id, { muted: e }, g.G_.muted(e));
    }
    let C = o.intl.string(o.t.tbeRRJ),
        f = o.intl.string(o.t.OYefme);
    switch (t.type) {
        case _.rbe.GUILD_CATEGORY:
            (C = o.intl.string(o.t.pNMCg2)), (f = o.intl.string(o.t.olaBeG));
            break;
        case _.rbe.GROUP_DM:
            (C = o.intl.string(o.t.LO3kaK)), (f = o.intl.string(o.t["s5/5fm"]));
            break;
        case _.rbe.DM:
            (C = i ? o.intl.format(o.t.byjuJm, { name: h }) : o.intl.string(o.t.LO3kaK)),
                (f = i ? o.intl.format(o.t["eC+9rj"], { name: h }) : o.intl.string(o.t["s5/5fm"]));
            break;
        default:
            (C = o.intl.string(o.t.tbeRRJ)), (f = o.intl.string(o.t.OYefme));
    }
    return m
        ? (0, n.jsx)(r.Dr, { id: "unmute-channel", label: f, subtext: O, action: () => A(!1) })
        : (0, n.jsx)(r.Dr, {
              id: "mute-channel",
              label: C,
              action: () => {
                  A(!0);
              },
              children: p().map((i) => {
                  let { value: l, label: s } = i;
                  return (0, n.jsx)(
                      r.Dr,
                      {
                          id: `${l}`,
                          label: s,
                          action: () => {
                              let i;
                              return (
                                  t.type === _.rbe.GUILD_CATEGORY && (0, a.Gv)(t.id),
                                  (i = b.p(l)),
                                  void d.A.updateChannelOverrideSettings(t.guild_id, t.id, i, g.fd.Muted, e)
                              );
                          },
                      },
                      l,
                  );
              }),
          });
}
