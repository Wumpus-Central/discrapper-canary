n.d(e, { A: () => v, g: () => p });
var i = n(477900);
n(582128);
var l = n(17928),
    a = n(477782),
    r = n(914430),
    d = n(832712),
    s = n(145408),
    u = n(543465),
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
        [_, v] = (0, l.yK)([u.Ay], () => [
            u.Ay.isChannelMuted(t.guild_id, t.id),
            u.Ay.getChannelMuteConfig(t.guild_id, t.id),
        ]),
        h = (0, s.M)(v),
        O = (0, c.Ay)(t, !0);
    function f(e) {
        (e && t.type === o.rbe.GUILD_CATEGORY && (0, r.Gv)(t.id),
            d.A.updateChannelOverrideSettings({
                guildId: t.guild_id,
                channelId: t.id,
                settings: { muted: e },
                label: g.G_.muted(e),
            }));
    }
    let A = m.intl.string(m.t.tbeRRJ),
        C = m.intl.string(m.t.OYefme);
    switch (t.type) {
        case o.rbe.GUILD_CATEGORY:
            ((A = m.intl.string(m.t.pNMCg2)), (C = m.intl.string(m.t.olaBeG)));
            break;
        case o.rbe.GROUP_DM:
            ((A = m.intl.string(m.t.LO3kaK)), (C = m.intl.string(m.t["s5/5fm"])));
            break;
        case o.rbe.DM:
            ((A = n ? m.intl.format(m.t.byjuJm, { name: O }) : m.intl.string(m.t.LO3kaK)),
                (C = n ? m.intl.format(m.t["eC+9rj"], { name: O }) : m.intl.string(m.t["s5/5fm"])));
            break;
        default:
            ((A = m.intl.string(m.t.tbeRRJ)), (C = m.intl.string(m.t.OYefme)));
    }
    return _
        ? (0, i.jsx)(a.Dr, { id: "unmute-channel", label: C, subtext: h, action: () => f(!1) })
        : (0, i.jsx)(a.Dr, {
              id: "mute-channel",
              label: A,
              action: () => {
                  f(!0);
              },
              children: p().map((n) => {
                  let { value: l, label: s } = n;
                  return (0, i.jsx)(
                      a.Dr,
                      {
                          id: `${l}`,
                          label: s,
                          action: () => {
                              let n;
                              return (
                                  t.type === o.rbe.GUILD_CATEGORY && (0, r.Gv)(t.id),
                                  (n = b.p(l)),
                                  void d.A.updateChannelOverrideSettings({
                                      guildId: t.guild_id,
                                      channelId: t.id,
                                      settings: n,
                                      label: g.fd.Muted,
                                      location: e,
                                  })
                              );
                          },
                      },
                      l,
                  );
              }),
          });
}
