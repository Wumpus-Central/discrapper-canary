(e.d(n, {
    P: () => b,
    l: () => Z
}),
    e(388685));
var i = e(255367);
e(73800);
var r = e(392711),
    l = e.n(r),
    a = e(442837),
    o = e(481060),
    s = e(984933),
    d = e(853856),
    u = e(117984),
    c = e(593214),
    f = e(362658),
    h = e(981631),
    v = e(388032);
function g(t, n) {
    return t.type === h.d4z.GROUP_DM ? (n ? v.intl.string(v.t['0BWmSE']) : v.intl.string(v.t.uuVTOD)) : t.type === h.d4z.DM ? (n ? v.intl.string(v.t['2wfKGh']) : v.intl.string(v.t.wPbAsb)) : n ? v.intl.string(v.t.Bou7lZ) : v.intl.string(v.t['4wcdEx']);
}
function Z(t) {
    let n = (0, a.e7)([s.ZP], () => s.ZP.getChannels(h.I_8))[h.d4z.GUILD_CATEGORY],
        { isFavoritesPerk: e } = (0, f.z)('58e21a_1'),
        { notifyFavoriteAdded: r } = (0, c.up)();
    if (!(0, c.li)(t)) return null;
    let [[d], v] = l().partition(n, (t) => 'null' === t.channel.id);
    function Z(n) {
        (r(), (0, u.kj)(t.id, n));
    }
    return 0 === v.length
        ? (0, i.jsx)(o.sNh, {
              id: 'favorite-channel',
              label: g(t, !1),
              action: () => Z(null)
          })
        : (0, i.jsxs)(o.sNh, {
              id: 'favorite-channel',
              label: g(t, !1),
              action: () => Z(null),
              children: [
                  e &&
                      (0, i.jsx)(o.kSQ, {
                          children: (0, i.jsx)(
                              o.sNh,
                              {
                                  id: 'favorite-'.concat(d.channel.id),
                                  label: d.channel.name,
                                  action: () => Z('null' === d.channel.id ? null : d.channel.id)
                              },
                              d.channel.id
                          )
                      }),
                  (0, i.jsx)(o.kSQ, {
                      children: v.map((t) =>
                          (0, i.jsx)(
                              o.sNh,
                              {
                                  id: 'favorite-'.concat(t.channel.id),
                                  label: t.channel.name,
                                  action: () => Z(t.channel.id)
                              },
                              t.channel.id
                          )
                      )
                  })
              ]
          });
}
function b(t) {
    let n = (0, a.e7)([d.Z], () => d.Z.isFavorite(t.id));
    return __OVERLAY__ || !n
        ? null
        : (0, i.jsx)(o.sNh, {
              id: 'favorite-channel',
              label: g(t, !0),
              color: 'danger',
              action: () =>
                  t.type === h.d4z.GUILD_CATEGORY
                      ? (0, o.ZDy)(async () => {
                            let { default: n } = await e.e('37720').then(e.bind(e, 357632));
                            return (e) => {
                                var r, l;
                                return (0, i.jsx)(
                                    n,
                                    ((r = (function (t) {
                                        for (var n = 1; n < arguments.length; n++) {
                                            var e = null != arguments[n] ? arguments[n] : {},
                                                i = Object.keys(e);
                                            ('function' == typeof Object.getOwnPropertySymbols &&
                                                (i = i.concat(
                                                    Object.getOwnPropertySymbols(e).filter(function (t) {
                                                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                                                    })
                                                )),
                                                i.forEach(function (n) {
                                                    var i;
                                                    ((i = e[n]),
                                                        n in t
                                                            ? Object.defineProperty(t, n, {
                                                                  value: i,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (t[n] = i));
                                                }));
                                        }
                                        return t;
                                    })({}, e)),
                                    (l = l =
                                        {
                                            onConfirm: () => {
                                                (e.onClose(), (0, u.oC)(t.id));
                                            },
                                            channel: t
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                        : (function (t, n) {
                                              var e = Object.keys(t);
                                              if (Object.getOwnPropertySymbols) {
                                                  var i = Object.getOwnPropertySymbols(t);
                                                  e.push.apply(e, i);
                                              }
                                              return e;
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
