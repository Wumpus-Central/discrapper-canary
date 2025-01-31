i.d(e, {
    P: () => v,
    l: () => x
}),
    i(47120);
var t = i(200651);
i(192379);
var l = i(392711),
    r = i.n(l),
    a = i(442837),
    d = i(481060),
    s = i(984933),
    o = i(853856),
    c = i(117984),
    u = i(593214),
    h = i(362658),
    Z = i(981631),
    f = i(388032);
function j(n, e) {
    return n.type === Z.d4z.GROUP_DM ? (e ? f.intl.string(f.t['0BWmSE']) : f.intl.string(f.t.uuVTOD)) : n.type === Z.d4z.DM ? (e ? f.intl.string(f.t['2wfKGh']) : f.intl.string(f.t.wPbAsb)) : e ? f.intl.string(f.t.Bou7lZ) : f.intl.string(f.t['4wcdEx']);
}
function x(n) {
    let e = (0, a.e7)([s.ZP], () => s.ZP.getChannels(Z.I_8))[Z.d4z.GUILD_CATEGORY],
        { isFavoritesPerk: i } = (0, h.z)('58e21a_1'),
        { notifyFavoriteAdded: l } = (0, u.up)();
    if (!(0, u.li)(n)) return null;
    let [[o], f] = r().partition(e, (n) => 'null' === n.channel.id);
    function x(e) {
        l(), (0, c.kj)(n.id, e);
    }
    return 0 === f.length
        ? (0, t.jsx)(d.sNh, {
              id: 'favorite-channel',
              label: j(n, !1),
              action: () => x(null)
          })
        : (0, t.jsxs)(d.sNh, {
              id: 'favorite-channel',
              label: j(n, !1),
              action: () => x(null),
              children: [
                  i &&
                      (0, t.jsx)(d.kSQ, {
                          children: (0, t.jsx)(
                              d.sNh,
                              {
                                  id: 'favorite-'.concat(o.channel.id),
                                  label: o.channel.name,
                                  action: () => x('null' === o.channel.id ? null : o.channel.id)
                              },
                              o.channel.id
                          )
                      }),
                  (0, t.jsx)(d.kSQ, {
                      children: f.map((n) =>
                          (0, t.jsx)(
                              d.sNh,
                              {
                                  id: 'favorite-'.concat(n.channel.id),
                                  label: n.channel.name,
                                  action: () => x(n.channel.id)
                              },
                              n.channel.id
                          )
                      )
                  })
              ]
          });
}
function v(n) {
    let e = (0, a.e7)([o.Z], () => o.Z.isFavorite(n.id));
    return __OVERLAY__ || !e
        ? null
        : (0, t.jsx)(d.sNh, {
              id: 'favorite-channel',
              label: j(n, !0),
              color: 'danger',
              action: () =>
                  n.type === Z.d4z.GUILD_CATEGORY
                      ? (0, d.ZDy)(async () => {
                            let { default: e } = await i.e('37720').then(i.bind(i, 357632));
                            return (i) =>
                                (0, t.jsx)(e, {
                                    ...i,
                                    onConfirm: () => {
                                        i.onClose(), (0, c.oC)(n.id);
                                    },
                                    channel: n
                                });
                        })
                      : (0, c.oC)(n.id)
          });
}
