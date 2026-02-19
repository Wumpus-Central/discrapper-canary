n.d(t, { Ay: () => C, gv: () => h, pB: () => _ });
var i = n(627968);
n(64700);
var l = n(989349),
    r = n.n(l),
    a = n(311907),
    u = n(397927),
    s = n(914430),
    d = n(832712),
    o = n(392567),
    c = n(543465),
    f = n(477427),
    A = n(47167),
    E = n(652215),
    v = n(815968),
    g = n(985018);
let h = () => [
        { value: v.Xx.MINUTES_15, label: g.intl.string(g.t["8ot6gv"]) },
        { value: v.Xx.HOURS_1, label: g.intl.string(g.t.UMWBZr) },
        { value: v.Xx.HOURS_3, label: g.intl.string(g.t.QmYWtu) },
        { value: v.Xx.HOURS_8, label: g.intl.string(g.t.EpAXPC) },
        { value: v.Xx.HOURS_24, label: g.intl.string(g.t["755t4q"]) },
        { value: v.Xx.ALWAYS, label: g.intl.string(g.t.r3LawO) },
    ],
    _ = (e) => {
        let t = e > 0 ? r()().add(e, "second").toISOString() : null;
        return { muted: !0, mute_config: { selected_time_window: e, end_time: t } };
    };
function C(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [l, r] = (0, a.yK)([c.Ay], () => [
            c.Ay.isChannelMuted(e.guild_id, e.id),
            c.Ay.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        v = (0, o.M)(r),
        C = (0, A.Ay)(e, !0);
    function p(t) {
        t && e.type === E.rbe.GUILD_CATEGORY && (0, s.Gv)(e.id),
            d.A.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, f.G_.muted(t));
    }
    let N = g.intl.string(g.t.tbeRRJ),
        I = g.intl.string(g.t.OYefme);
    switch (e.type) {
        case E.rbe.GUILD_CATEGORY:
            (N = g.intl.string(g.t.pNMCg2)), (I = g.intl.string(g.t.olaBeG));
            break;
        case E.rbe.GROUP_DM:
            (N = g.intl.string(g.t.LO3kaK)), (I = g.intl.string(g.t["s5/5fm"]));
            break;
        case E.rbe.DM:
            (N = n ? g.intl.format(g.t.byjuJm, { name: C }) : g.intl.string(g.t.LO3kaK)),
                (I = n ? g.intl.format(g.t["eC+9rj"], { name: C }) : g.intl.string(g.t["s5/5fm"]));
            break;
        default:
            (N = g.intl.string(g.t.tbeRRJ)), (I = g.intl.string(g.t.OYefme));
    }
    return l
        ? (0, i.jsx)(u.Drp, { id: "unmute-channel", label: I, subtext: v, action: () => p(!1) })
        : (0, i.jsx)(u.Drp, {
              id: "mute-channel",
              label: N,
              action: () => {
                  p(!0);
              },
              children: h().map((n) => {
                  let { value: l, label: r } = n;
                  return (0, i.jsx)(
                      u.Drp,
                      {
                          id: `${l}`,
                          label: r,
                          action: () => {
                              let n;
                              return (
                                  e.type === E.rbe.GUILD_CATEGORY && (0, s.Gv)(e.id),
                                  (n = _(l)),
                                  void d.A.updateChannelOverrideSettings(e.guild_id, e.id, n, f.fd.Muted, t)
                              );
                          },
                      },
                      l,
                  );
              }),
          });
}
