"use strict";
n.d(t, { Ay: () => b, gv: () => m, pB: () => A });
var r = n(627968);
n(64700);
var a = n(989349),
    s = n.n(a),
    i = n(311907),
    l = n(397927),
    o = n(914430),
    c = n(832712),
    d = n(392567),
    u = n(543465),
    _ = n(477427),
    p = n(47167),
    f = n(652215),
    g = n(815968),
    h = n(985018);
let m = () => [
        { value: g.Xx.MINUTES_15, label: h.intl.string(h.t["8ot6gv"]) },
        { value: g.Xx.HOURS_1, label: h.intl.string(h.t.UMWBZr) },
        { value: g.Xx.HOURS_3, label: h.intl.string(h.t.QmYWtu) },
        { value: g.Xx.HOURS_8, label: h.intl.string(h.t.EpAXPC) },
        { value: g.Xx.HOURS_24, label: h.intl.string(h.t["755t4q"]) },
        { value: g.Xx.ALWAYS, label: h.intl.string(h.t.r3LawO) },
    ],
    A = (e) => {
        let t = e > 0 ? s()().add(e, "second").toISOString() : null;
        return { muted: !0, mute_config: { selected_time_window: e, end_time: t } };
    };
function b(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [a, s] = (0, i.yK)([u.Ay], () => [
            u.Ay.isChannelMuted(e.guild_id, e.id),
            u.Ay.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        g = (0, d.M)(s),
        b = (0, p.Ay)(e, !0);
    function x(t) {
        t && e.type === f.rbe.GUILD_CATEGORY && (0, o.Gv)(e.id),
            c.A.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, _.G_.muted(t));
    }
    let I = h.intl.string(h.t.tbeRRJ),
        C = h.intl.string(h.t.OYefme);
    switch (e.type) {
        case f.rbe.GUILD_CATEGORY:
            (I = h.intl.string(h.t.pNMCg2)), (C = h.intl.string(h.t.olaBeG));
            break;
        case f.rbe.GROUP_DM:
            (I = h.intl.string(h.t.LO3kaK)), (C = h.intl.string(h.t["s5/5fm"]));
            break;
        case f.rbe.DM:
            (I = n ? h.intl.format(h.t.byjuJm, { name: b }) : h.intl.string(h.t.LO3kaK)),
                (C = n ? h.intl.format(h.t["eC+9rj"], { name: b }) : h.intl.string(h.t["s5/5fm"]));
            break;
        default:
            (I = h.intl.string(h.t.tbeRRJ)), (C = h.intl.string(h.t.OYefme));
    }
    return a
        ? (0, r.jsx)(l.Drp, { id: "unmute-channel", label: C, subtext: g, action: () => x(!1) })
        : (0, r.jsx)(l.Drp, {
              id: "mute-channel",
              label: I,
              action: () => {
                  x(!0);
              },
              children: m().map((n) => {
                  let { value: a, label: s } = n;
                  return (0, r.jsx)(
                      l.Drp,
                      {
                          id: `${a}`,
                          label: s,
                          action: () => {
                              let n;
                              return (
                                  e.type === f.rbe.GUILD_CATEGORY && (0, o.Gv)(e.id),
                                  (n = A(a)),
                                  void c.A.updateChannelOverrideSettings(e.guild_id, e.id, n, _.fd.Muted, t)
                              );
                          },
                      },
                      a,
                  );
              }),
          });
}
