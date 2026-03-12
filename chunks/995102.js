"use strict";
a.d(t, { Ay: () => h, gv: () => g });
var n = a(627968);
a(64700);
var i = a(989349),
    r = a.n(i),
    s = a(311907),
    l = a(397927),
    o = a(914430),
    c = a(832712),
    _ = a(392567),
    d = a(543465),
    u = a(477427),
    f = a(47167),
    m = a(652215),
    p = a(815968),
    A = a(985018);
let g = () => [
    { value: p.Xx.MINUTES_15, label: A.intl.string(A.t["8ot6gv"]) },
    { value: p.Xx.HOURS_1, label: A.intl.string(A.t.UMWBZr) },
    { value: p.Xx.HOURS_3, label: A.intl.string(A.t.QmYWtu) },
    { value: p.Xx.HOURS_8, label: A.intl.string(A.t.EpAXPC) },
    { value: p.Xx.HOURS_24, label: A.intl.string(A.t["755t4q"]) },
    { value: p.Xx.ALWAYS, label: A.intl.string(A.t.r3LawO) },
];
function h(e, t) {
    let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [i, p] = (0, s.yK)([d.Ay], () => [
            d.Ay.isChannelMuted(e.guild_id, e.id),
            d.Ay.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        h = (0, _.M)(p),
        b = (0, f.Ay)(e, !0);
    function I(t) {
        t && e.type === m.rbe.GUILD_CATEGORY && (0, o.Gv)(e.id),
            c.A.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, u.G_.muted(t));
    }
    let C = A.intl.string(A.t.tbeRRJ),
        v = A.intl.string(A.t.OYefme);
    switch (e.type) {
        case m.rbe.GUILD_CATEGORY:
            (C = A.intl.string(A.t.pNMCg2)), (v = A.intl.string(A.t.olaBeG));
            break;
        case m.rbe.GROUP_DM:
            (C = A.intl.string(A.t.LO3kaK)), (v = A.intl.string(A.t["s5/5fm"]));
            break;
        case m.rbe.DM:
            (C = a ? A.intl.format(A.t.byjuJm, { name: b }) : A.intl.string(A.t.LO3kaK)),
                (v = a ? A.intl.format(A.t["eC+9rj"], { name: b }) : A.intl.string(A.t["s5/5fm"]));
            break;
        default:
            (C = A.intl.string(A.t.tbeRRJ)), (v = A.intl.string(A.t.OYefme));
    }
    return i
        ? (0, n.jsx)(l.Drp, { id: "unmute-channel", label: v, subtext: h, action: () => I(!1) })
        : (0, n.jsx)(l.Drp, {
              id: "mute-channel",
              label: C,
              action: () => {
                  I(!0);
              },
              children: g().map((a) => {
                  let { value: i, label: s } = a;
                  return (0, n.jsx)(
                      l.Drp,
                      {
                          id: `${i}`,
                          label: s,
                          action: () => {
                              let a, n;
                              return (
                                  e.type === m.rbe.GUILD_CATEGORY && (0, o.Gv)(e.id),
                                  (a = i > 0 ? r()().add(i, "second").toISOString() : null),
                                  (n = { muted: !0, mute_config: { selected_time_window: i, end_time: a } }),
                                  void c.A.updateChannelOverrideSettings(e.guild_id, e.id, n, u.fd.Muted, t)
                              );
                          },
                      },
                      i,
                  );
              }),
          });
}
