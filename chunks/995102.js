n.d(t, { A: () => y, g: () => m });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(914430),
    o = n(832712),
    d = n(145408),
    s = n(543465),
    u = n(477427),
    c = n(812141),
    A = n(47167),
    h = n(652215),
    g = n(355097),
    f = n(985018);
let m = () => [
    { value: g.Xx.MINUTES_15, label: f.intl.string(f.t["8ot6gv"]) },
    { value: g.Xx.HOURS_1, label: f.intl.string(f.t.UMWBZr) },
    { value: g.Xx.HOURS_3, label: f.intl.string(f.t.QmYWtu) },
    { value: g.Xx.HOURS_8, label: f.intl.string(f.t.EpAXPC) },
    { value: g.Xx.HOURS_24, label: f.intl.string(f.t["755t4q"]) },
    { value: g.Xx.ALWAYS, label: f.intl.string(f.t.r3LawO) },
];
function y(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [g, y] = (0, i.yK)([s.Ay], () => [
            s.Ay.isChannelMuted(e.guild_id, e.id),
            s.Ay.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        p = (0, d.M)(y),
        v = (0, A.Ay)(e, !0);
    function _(t) {
        t && e.type === h.rbe.GUILD_CATEGORY && (0, a.Gv)(e.id),
            o.A.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, u.G_.muted(t));
    }
    let x = f.intl.string(f.t.tbeRRJ),
        b = f.intl.string(f.t.OYefme);
    switch (e.type) {
        case h.rbe.GUILD_CATEGORY:
            (x = f.intl.string(f.t.pNMCg2)), (b = f.intl.string(f.t.olaBeG));
            break;
        case h.rbe.GROUP_DM:
            (x = f.intl.string(f.t.LO3kaK)), (b = f.intl.string(f.t["s5/5fm"]));
            break;
        case h.rbe.DM:
            (x = n ? f.intl.format(f.t.byjuJm, { name: v }) : f.intl.string(f.t.LO3kaK)),
                (b = n ? f.intl.format(f.t["eC+9rj"], { name: v }) : f.intl.string(f.t["s5/5fm"]));
            break;
        default:
            (x = f.intl.string(f.t.tbeRRJ)), (b = f.intl.string(f.t.OYefme));
    }
    return g
        ? (0, r.jsx)(l.Drp, { id: "unmute-channel", label: b, subtext: p, action: () => _(!1) })
        : (0, r.jsx)(l.Drp, {
              id: "mute-channel",
              label: x,
              action: () => {
                  _(!0);
              },
              children: m().map((n) => {
                  let { value: i, label: d } = n;
                  return (0, r.jsx)(
                      l.Drp,
                      {
                          id: `${i}`,
                          label: d,
                          action: () => {
                              let n;
                              return (
                                  e.type === h.rbe.GUILD_CATEGORY && (0, a.Gv)(e.id),
                                  (n = c.p(i)),
                                  void o.A.updateChannelOverrideSettings(e.guild_id, e.id, n, u.fd.Muted, t)
                              );
                          },
                      },
                      i,
                  );
              }),
          });
}
