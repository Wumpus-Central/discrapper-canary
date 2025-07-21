(t.d(e, {
    P: () => j,
    l: () => p
}),
    t(388685));
var r = t(255367);
t(73800);
var i = t(392711),
    l = t.n(i),
    c = t(442837),
    o = t(481060),
    a = t(984933),
    s = t(853856),
    u = t(117984),
    d = t(593214),
    f = t(362658),
    b = t(981631),
    h = t(388032);
function O(n, e) {
    return n.type === b.d4z.GROUP_DM ? (e ? h.intl.string(h.t['0BWmSE']) : h.intl.string(h.t.uuVTOD)) : n.type === b.d4z.DM ? (e ? h.intl.string(h.t['2wfKGh']) : h.intl.string(h.t.wPbAsb)) : e ? h.intl.string(h.t.Bou7lZ) : h.intl.string(h.t['4wcdEx']);
}
function p(n) {
    let e = (0, c.e7)([a.ZP], () => a.ZP.getChannels(b.I_8))[b.d4z.GUILD_CATEGORY],
        { isFavoritesPerk: t } = (0, f.z)('58e21a_1'),
        { notifyFavoriteAdded: i } = (0, d.up)();
    if (!(0, d.li)(n)) return null;
    let [[s], h] = l().partition(e, (n) => 'null' === n.channel.id);
    function p(e) {
        (i(), (0, u.kj)(n.id, e));
    }
    return 0 === h.length
        ? (0, r.jsx)(o.sNh, {
              id: 'favorite-channel',
              label: O(n, !1),
              action: () => p(null)
          })
        : (0, r.jsxs)(o.sNh, {
              id: 'favorite-channel',
              label: O(n, !1),
              action: () => p(null),
              children: [
                  t &&
                      (0, r.jsx)(o.kSQ, {
                          children: (0, r.jsx)(
                              o.sNh,
                              {
                                  id: 'favorite-'.concat(s.channel.id),
                                  label: s.channel.name,
                                  action: () => p('null' === s.channel.id ? null : s.channel.id)
                              },
                              s.channel.id
                          )
                      }),
                  (0, r.jsx)(o.kSQ, {
                      children: h.map((n) =>
                          (0, r.jsx)(
                              o.sNh,
                              {
                                  id: 'favorite-'.concat(n.channel.id),
                                  label: n.channel.name,
                                  action: () => p(n.channel.id)
                              },
                              n.channel.id
                          )
                      )
                  })
              ]
          });
}
function j(n) {
    let e = (0, c.e7)([s.Z], () => s.Z.isFavorite(n.id));
    return __OVERLAY__ || !e
        ? null
        : (0, r.jsx)(o.sNh, {
              id: 'favorite-channel',
              label: O(n, !0),
              color: 'danger',
              action: () =>
                  n.type === b.d4z.GUILD_CATEGORY
                      ? (0, o.ZDy)(async () => {
                            let { default: e } = await t.e('37720').then(t.bind(t, 357632));
                            return (t) => {
                                var i, l;
                                return (0, r.jsx)(
                                    e,
                                    ((i = (function (n) {
                                        for (var e = 1; e < arguments.length; e++) {
                                            var t = null != arguments[e] ? arguments[e] : {},
                                                r = Object.keys(t);
                                            ('function' == typeof Object.getOwnPropertySymbols &&
                                                (r = r.concat(
                                                    Object.getOwnPropertySymbols(t).filter(function (n) {
                                                        return Object.getOwnPropertyDescriptor(t, n).enumerable;
                                                    })
                                                )),
                                                r.forEach(function (e) {
                                                    var r;
                                                    ((r = t[e]),
                                                        e in n
                                                            ? Object.defineProperty(n, e, {
                                                                  value: r,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (n[e] = r));
                                                }));
                                        }
                                        return n;
                                    })({}, t)),
                                    (l = l =
                                        {
                                            onConfirm: () => {
                                                (t.onClose(), (0, u.oC)(n.id));
                                            },
                                            channel: n
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                        : (function (n, e) {
                                              var t = Object.keys(n);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(n);
                                                  t.push.apply(t, r);
                                              }
                                              return t;
                                          })(Object(l)).forEach(function (n) {
                                              Object.defineProperty(i, n, Object.getOwnPropertyDescriptor(l, n));
                                          }),
                                    i)
                                );
                            };
                        })
                      : (0, u.oC)(n.id)
          });
}
