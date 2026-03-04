"use strict";
a.d(t, { Ay: () => A, gv: () => h, pB: () => b });
var n = a(627968);
a(64700);
var r = a(989349),
    i = a.n(r),
    s = a(311907),
    l = a(397927),
    o = a(914430),
    c = a(832712),
    _ = a(392567),
    d = a(543465),
    u = a(477427),
    m = a(47167),
    f = a(652215),
    p = a(815968),
    g = a(985018);
let h = () => [
        { value: p.Xx.MINUTES_15, label: g.intl.string(g.t["8ot6gv"]) },
        { value: p.Xx.HOURS_1, label: g.intl.string(g.t.UMWBZr) },
        { value: p.Xx.HOURS_3, label: g.intl.string(g.t.QmYWtu) },
        { value: p.Xx.HOURS_8, label: g.intl.string(g.t.EpAXPC) },
        { value: p.Xx.HOURS_24, label: g.intl.string(g.t["755t4q"]) },
        { value: p.Xx.ALWAYS, label: g.intl.string(g.t.r3LawO) },
    ],
    b = (e) => {
        let t = e > 0 ? i()().add(e, "second").toISOString() : null;
        return { muted: !0, mute_config: { selected_time_window: e, end_time: t } };
    };
function A(e, t) {
    let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [r, i] = (0, s.yK)([d.Ay], () => [
            d.Ay.isChannelMuted(e.guild_id, e.id),
            d.Ay.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        p = (0, _.M)(i),
        A = (0, m.Ay)(e, !0);
    function I(t) {
        t && e.type === f.rbe.GUILD_CATEGORY && (0, o.Gv)(e.id),
            c.A.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, u.G_.muted(t));
    }
    let v = g.intl.string(g.t.tbeRRJ),
        x = g.intl.string(g.t.OYefme);
    switch (e.type) {
        case f.rbe.GUILD_CATEGORY:
            (v = g.intl.string(g.t.pNMCg2)), (x = g.intl.string(g.t.olaBeG));
            break;
        case f.rbe.GROUP_DM:
            (v = g.intl.string(g.t.LO3kaK)), (x = g.intl.string(g.t["s5/5fm"]));
            break;
        case f.rbe.DM:
            (v = a ? g.intl.format(g.t.byjuJm, { name: A }) : g.intl.string(g.t.LO3kaK)),
                (x = a ? g.intl.format(g.t["eC+9rj"], { name: A }) : g.intl.string(g.t["s5/5fm"]));
            break;
        default:
            (v = g.intl.string(g.t.tbeRRJ)), (x = g.intl.string(g.t.OYefme));
    }
    return r
        ? (0, n.jsx)(l.Drp, { id: "unmute-channel", label: x, subtext: p, action: () => I(!1) })
        : (0, n.jsx)(l.Drp, {
              id: "mute-channel",
              label: v,
              action: () => {
                  I(!0);
              },
              children: h().map((a) => {
                  let { value: r, label: i } = a;
                  return (0, n.jsx)(
                      l.Drp,
                      {
                          id: `${r}`,
                          label: i,
                          action: () => {
                              let a;
                              return (
                                  e.type === f.rbe.GUILD_CATEGORY && (0, o.Gv)(e.id),
                                  (a = b(r)),
                                  void c.A.updateChannelOverrideSettings(e.guild_id, e.id, a, u.fd.Muted, t)
                              );
                          },
                      },
                      r,
                  );
              }),
          });
}
