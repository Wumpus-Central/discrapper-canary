n.d(t, { Ay: () => C, gv: () => _, pB: () => g });
var i = n(627968);
n(64700);
var r = n(989349),
    l = n.n(r),
    a = n(311907),
    o = n(397927),
    s = n(914430),
    d = n(832712),
    u = n(392567),
    c = n(543465),
    A = n(477427),
    E = n(47167),
    f = n(652215),
    h = n(815968),
    p = n(985018);
let _ = () => [
        { value: h.Xx.MINUTES_15, label: p.intl.string(p.t["8ot6gv"]) },
        { value: h.Xx.HOURS_1, label: p.intl.string(p.t.UMWBZr) },
        { value: h.Xx.HOURS_3, label: p.intl.string(p.t.QmYWtu) },
        { value: h.Xx.HOURS_8, label: p.intl.string(p.t.EpAXPC) },
        { value: h.Xx.HOURS_24, label: p.intl.string(p.t["755t4q"]) },
        { value: h.Xx.ALWAYS, label: p.intl.string(p.t.r3LawO) },
    ],
    g = (e) => {
        let t = e > 0 ? l()().add(e, "second").toISOString() : null;
        return { muted: !0, mute_config: { selected_time_window: e, end_time: t } };
    };
function C(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [r, l] = (0, a.yK)([c.Ay], () => [
            c.Ay.isChannelMuted(e.guild_id, e.id),
            c.Ay.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        h = (0, u.M)(l),
        C = (0, E.Ay)(e, !0);
    function v(t) {
        t && e.type === f.rbe.GUILD_CATEGORY && (0, s.Gv)(e.id),
            d.A.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, A.G_.muted(t));
    }
    let T = p.intl.string(p.t.tbeRRJ),
        I = p.intl.string(p.t.OYefme);
    switch (e.type) {
        case f.rbe.GUILD_CATEGORY:
            (T = p.intl.string(p.t.pNMCg2)), (I = p.intl.string(p.t.olaBeG));
            break;
        case f.rbe.GROUP_DM:
            (T = p.intl.string(p.t.LO3kaK)), (I = p.intl.string(p.t["s5/5fm"]));
            break;
        case f.rbe.DM:
            (T = n ? p.intl.format(p.t.byjuJm, { name: C }) : p.intl.string(p.t.LO3kaK)),
                (I = n ? p.intl.format(p.t["eC+9rj"], { name: C }) : p.intl.string(p.t["s5/5fm"]));
            break;
        default:
            (T = p.intl.string(p.t.tbeRRJ)), (I = p.intl.string(p.t.OYefme));
    }
    return r
        ? (0, i.jsx)(o.Drp, { id: "unmute-channel", label: I, subtext: h, action: () => v(!1) })
        : (0, i.jsx)(o.Drp, {
              id: "mute-channel",
              label: T,
              action: () => {
                  v(!0);
              },
              children: _().map((n) => {
                  let { value: r, label: l } = n;
                  return (0, i.jsx)(
                      o.Drp,
                      {
                          id: `${r}`,
                          label: l,
                          action: () => {
                              let n;
                              return (
                                  e.type === f.rbe.GUILD_CATEGORY && (0, s.Gv)(e.id),
                                  (n = g(r)),
                                  void d.A.updateChannelOverrideSettings(e.guild_id, e.id, n, A.fd.Muted, t)
                              );
                          },
                      },
                      r,
                  );
              }),
          });
}
