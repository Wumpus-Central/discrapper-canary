n.d(e, {
    P: () => Z,
    l: () => O
}),
    n(388685);
var i = n(255367);
n(73800);
var r = n(392711),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(984933),
    s = n(853856),
    u = n(117984),
    d = n(593214),
    f = n(362658),
    b = n(981631),
    h = n(388032);
function g(t, e) {
    return t.type === b.d4z.GROUP_DM ? (e ? h.intl.string(h.t['0BWmSE']) : h.intl.string(h.t.uuVTOD)) : t.type === b.d4z.DM ? (e ? h.intl.string(h.t['2wfKGh']) : h.intl.string(h.t.wPbAsb)) : e ? h.intl.string(h.t.Bou7lZ) : h.intl.string(h.t['4wcdEx']);
}
function O(t) {
    let e = (0, a.e7)([c.ZP], () => c.ZP.getChannels(b.I_8))[b.d4z.GUILD_CATEGORY],
        { isFavoritesPerk: n } = (0, f.z)('58e21a_1'),
        { notifyFavoriteAdded: r } = (0, d.up)();
    if (!(0, d.li)(t)) return null;
    let [[s], h] = l().partition(e, (t) => 'null' === t.channel.id);
    function O(e) {
        r(), (0, u.kj)(t.id, e);
    }
    return 0 === h.length
        ? (0, i.jsx)(o.sNh, {
              id: 'favorite-channel',
              label: g(t, !1),
              action: () => O(null)
          })
        : (0, i.jsxs)(o.sNh, {
              id: 'favorite-channel',
              label: g(t, !1),
              action: () => O(null),
              children: [
                  n &&
                      (0, i.jsx)(o.kSQ, {
                          children: (0, i.jsx)(
                              o.sNh,
                              {
                                  id: 'favorite-'.concat(s.channel.id),
                                  label: s.channel.name,
                                  action: () => O('null' === s.channel.id ? null : s.channel.id)
                              },
                              s.channel.id
                          )
                      }),
                  (0, i.jsx)(o.kSQ, {
                      children: h.map((t) =>
                          (0, i.jsx)(
                              o.sNh,
                              {
                                  id: 'favorite-'.concat(t.channel.id),
                                  label: t.channel.name,
                                  action: () => O(t.channel.id)
                              },
                              t.channel.id
                          )
                      )
                  })
              ]
          });
}
function Z(t) {
    let e = (0, a.e7)([s.Z], () => s.Z.isFavorite(t.id));
    return __OVERLAY__ || !e
        ? null
        : (0, i.jsx)(o.sNh, {
              id: 'favorite-channel',
              label: g(t, !0),
              color: 'danger',
              action: () =>
                  t.type === b.d4z.GUILD_CATEGORY
                      ? (0, o.ZDy)(async () => {
                            let { default: e } = await n.e('37720').then(n.bind(n, 357632));
                            return (n) => {
                                var r, l;
                                return (0, i.jsx)(
                                    e,
                                    ((r = (function (t) {
                                        for (var e = 1; e < arguments.length; e++) {
                                            var n = null != arguments[e] ? arguments[e] : {},
                                                i = Object.keys(n);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (i = i.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (t) {
                                                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                    })
                                                )),
                                                i.forEach(function (e) {
                                                    var i;
                                                    (i = n[e]),
                                                        e in t
                                                            ? Object.defineProperty(t, e, {
                                                                  value: i,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (t[e] = i);
                                                });
                                        }
                                        return t;
                                    })({}, n)),
                                    (l = l =
                                        {
                                            onConfirm: () => {
                                                n.onClose(), (0, u.oC)(t.id);
                                            },
                                            channel: t
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                        : (function (t, e) {
                                              var n = Object.keys(t);
                                              if (Object.getOwnPropertySymbols) {
                                                  var i = Object.getOwnPropertySymbols(t);
                                                  n.push.apply(n, i);
                                              }
                                              return n;
                                          })(Object(l)).forEach(function (t) {
                                              Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(l, t));
                                          }),
                                    r)
                                );
                            };
                        })
                      : (0, u.oC)(t.id)
          });
}
