n.d(e, { A: () => v, g: () => p });
var i = n(627968);
n(64700);
var l = n(17928),
    r = n(477782),
    a = n(914430),
    d = n(832712),
    u = n(145408),
    s = n(543465),
    g = n(477427),
    b = n(812141),
    c = n(47167),
    o = n(652215),
    _ = n(355097),
    m = n(375708);
function p() {
    return [
        { value: _.Xx.MINUTES_15, label: m.intl.string(m.t["8ot6gv"]) },
        { value: _.Xx.HOURS_1, label: m.intl.string(m.t.UMWBZr) },
        { value: _.Xx.HOURS_3, label: m.intl.string(m.t.QmYWtu) },
        { value: _.Xx.HOURS_8, label: m.intl.string(m.t.EpAXPC) },
        { value: _.Xx.HOURS_24, label: m.intl.string(m.t["755t4q"]) },
        { value: _.Xx.ALWAYS, label: m.intl.string(m.t.r3LawO) },
    ];
}
function v(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [_, v] = (0, l.yK)([s.Ay], () => [
            s.Ay.isChannelMuted(t.guild_id, t.id),
            s.Ay.getChannelMuteConfig(t.guild_id, t.id),
        ]),
        O = (0, u.M)(v),
        f = (0, c.Ay)(t, !0);
    function h(e) {
        e && t.type === o.rbe.GUILD_CATEGORY && (0, a.Gv)(t.id),
            d.A.updateChannelOverrideSettings(t.guild_id, t.id, { muted: e }, g.G_.muted(e));
    }
    let A = m.intl.string(m.t.tbeRRJ),
        C = m.intl.string(m.t.OYefme);
    switch (t.type) {
        case o.rbe.GUILD_CATEGORY:
            (A = m.intl.string(m.t.pNMCg2)), (C = m.intl.string(m.t.olaBeG));
            break;
        case o.rbe.GROUP_DM:
            (A = m.intl.string(m.t.LO3kaK)), (C = m.intl.string(m.t["s5/5fm"]));
            break;
        case o.rbe.DM:
            (A = n ? m.intl.format(m.t.byjuJm, { name: f }) : m.intl.string(m.t.LO3kaK)),
                (C = n ? m.intl.format(m.t["eC+9rj"], { name: f }) : m.intl.string(m.t["s5/5fm"]));
            break;
        default:
            (A = m.intl.string(m.t.tbeRRJ)), (C = m.intl.string(m.t.OYefme));
    }
    return _
        ? (0, i.jsx)(r.Dr, { id: "unmute-channel", label: C, subtext: O, action: () => h(!1) })
        : (0, i.jsx)(r.Dr, {
              id: "mute-channel",
              label: A,
              action: () => {
                  h(!0);
              },
              children: p().map((n) => {
                  let { value: l, label: u } = n;
                  return (0, i.jsx)(
                      r.Dr,
                      {
                          id: `${l}`,
                          label: u,
                          action: () => {
                              let n;
                              return (
                                  t.type === o.rbe.GUILD_CATEGORY && (0, a.Gv)(t.id),
                                  (n = b.p(l)),
                                  void d.A.updateChannelOverrideSettings(t.guild_id, t.id, n, g.fd.Muted, e)
                              );
                          },
                      },
                      l,
                  );
              }),
          });
}
