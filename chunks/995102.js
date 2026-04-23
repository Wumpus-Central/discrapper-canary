"use strict";
n.d(t, { A: () => b, g: () => f });
var i = n(627968);
n(64700);
var r = n(17928),
    a = n(477782),
    l = n(914430),
    s = n(832712),
    o = n(145408),
    d = n(543465),
    c = n(477427),
    u = n(812141),
    _ = n(47167),
    g = n(652215),
    h = n(355097),
    m = n(985018);
let f = () => [
    { value: h.Xx.MINUTES_15, label: m.intl.string(m.t["8ot6gv"]) },
    { value: h.Xx.HOURS_1, label: m.intl.string(m.t.UMWBZr) },
    { value: h.Xx.HOURS_3, label: m.intl.string(m.t.QmYWtu) },
    { value: h.Xx.HOURS_8, label: m.intl.string(m.t.EpAXPC) },
    { value: h.Xx.HOURS_24, label: m.intl.string(m.t["755t4q"]) },
    { value: h.Xx.ALWAYS, label: m.intl.string(m.t.r3LawO) },
];
function b(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [h, b] = (0, r.yK)([d.Ay], () => [
            d.Ay.isChannelMuted(e.guild_id, e.id),
            d.Ay.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        p = (0, o.M)(b),
        A = (0, _.Ay)(e, !0);
    function S(t) {
        t && e.type === g.rbe.GUILD_CATEGORY && (0, l.Gv)(e.id),
            s.A.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, c.G_.muted(t));
    }
    let E = m.intl.string(m.t.tbeRRJ),
        I = m.intl.string(m.t.OYefme);
    switch (e.type) {
        case g.rbe.GUILD_CATEGORY:
            (E = m.intl.string(m.t.pNMCg2)), (I = m.intl.string(m.t.olaBeG));
            break;
        case g.rbe.GROUP_DM:
            (E = m.intl.string(m.t.LO3kaK)), (I = m.intl.string(m.t["s5/5fm"]));
            break;
        case g.rbe.DM:
            (E = n ? m.intl.format(m.t.byjuJm, { name: A }) : m.intl.string(m.t.LO3kaK)),
                (I = n ? m.intl.format(m.t["eC+9rj"], { name: A }) : m.intl.string(m.t["s5/5fm"]));
            break;
        default:
            (E = m.intl.string(m.t.tbeRRJ)), (I = m.intl.string(m.t.OYefme));
    }
    return h
        ? (0, i.jsx)(a.Dr, { id: "unmute-channel", label: I, subtext: p, action: () => S(!1) })
        : (0, i.jsx)(a.Dr, {
              id: "mute-channel",
              label: E,
              action: () => {
                  S(!0);
              },
              children: f().map((n) => {
                  let { value: r, label: o } = n;
                  return (0, i.jsx)(
                      a.Dr,
                      {
                          id: `${r}`,
                          label: o,
                          action: () => {
                              let n;
                              return (
                                  e.type === g.rbe.GUILD_CATEGORY && (0, l.Gv)(e.id),
                                  (n = u.p(r)),
                                  void s.A.updateChannelOverrideSettings(e.guild_id, e.id, n, c.fd.Muted, t)
                              );
                          },
                      },
                      r,
                  );
              }),
          });
}
