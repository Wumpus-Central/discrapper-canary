"use strict";
n.d(t, { Ay: () => A, gv: () => h, pB: () => b });
var a = n(627968);
n(64700);
var r = n(989349),
    s = n.n(r),
    i = n(311907),
    l = n(397927),
    o = n(914430),
    c = n(832712),
    _ = n(392567),
    d = n(543465),
    u = n(477427),
    f = n(47167),
    p = n(652215),
    g = n(815968),
    m = n(985018);
let h = () => [
        { value: g.Xx.MINUTES_15, label: m.intl.string(m.t["8ot6gv"]) },
        { value: g.Xx.HOURS_1, label: m.intl.string(m.t.UMWBZr) },
        { value: g.Xx.HOURS_3, label: m.intl.string(m.t.QmYWtu) },
        { value: g.Xx.HOURS_8, label: m.intl.string(m.t.EpAXPC) },
        { value: g.Xx.HOURS_24, label: m.intl.string(m.t["755t4q"]) },
        { value: g.Xx.ALWAYS, label: m.intl.string(m.t.r3LawO) },
    ],
    b = (e) => {
        let t = e > 0 ? s()().add(e, "second").toISOString() : null;
        return { muted: !0, mute_config: { selected_time_window: e, end_time: t } };
    };
function A(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [r, s] = (0, i.yK)([d.Ay], () => [
            d.Ay.isChannelMuted(e.guild_id, e.id),
            d.Ay.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        g = (0, _.M)(s),
        A = (0, f.Ay)(e, !0);
    function v(t) {
        t && e.type === p.rbe.GUILD_CATEGORY && (0, o.Gv)(e.id),
            c.A.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, u.G_.muted(t));
    }
    let I = m.intl.string(m.t.tbeRRJ),
        x = m.intl.string(m.t.OYefme);
    switch (e.type) {
        case p.rbe.GUILD_CATEGORY:
            (I = m.intl.string(m.t.pNMCg2)), (x = m.intl.string(m.t.olaBeG));
            break;
        case p.rbe.GROUP_DM:
            (I = m.intl.string(m.t.LO3kaK)), (x = m.intl.string(m.t["s5/5fm"]));
            break;
        case p.rbe.DM:
            (I = n ? m.intl.format(m.t.byjuJm, { name: A }) : m.intl.string(m.t.LO3kaK)),
                (x = n ? m.intl.format(m.t["eC+9rj"], { name: A }) : m.intl.string(m.t["s5/5fm"]));
            break;
        default:
            (I = m.intl.string(m.t.tbeRRJ)), (x = m.intl.string(m.t.OYefme));
    }
    return r
        ? (0, a.jsx)(l.Drp, { id: "unmute-channel", label: x, subtext: g, action: () => v(!1) })
        : (0, a.jsx)(l.Drp, {
              id: "mute-channel",
              label: I,
              action: () => {
                  v(!0);
              },
              children: h().map((n) => {
                  let { value: r, label: s } = n;
                  return (0, a.jsx)(
                      l.Drp,
                      {
                          id: `${r}`,
                          label: s,
                          action: () => {
                              let n;
                              return (
                                  e.type === p.rbe.GUILD_CATEGORY && (0, o.Gv)(e.id),
                                  (n = b(r)),
                                  void c.A.updateChannelOverrideSettings(e.guild_id, e.id, n, u.fd.Muted, t)
                              );
                          },
                      },
                      r,
                  );
              }),
          });
}
