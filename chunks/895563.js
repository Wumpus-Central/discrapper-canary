(n.d(t, {
    P: () => Z,
    l: () => b
}),
    n(388685));
var i = n(255367);
n(73800);
var r = n(392711),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    s = n(984933),
    d = n(853856),
    u = n(117984),
    c = n(593214),
    f = n(362658),
    h = n(981631),
    g = n(388032);
function v(e, t) {
    return e.type === h.d4z.GROUP_DM ? (t ? g.intl.string(g.t['0BWmSE']) : g.intl.string(g.t.uuVTOD)) : e.type === h.d4z.DM ? (t ? g.intl.string(g.t['2wfKGh']) : g.intl.string(g.t.wPbAsb)) : t ? g.intl.string(g.t.Bou7lZ) : g.intl.string(g.t['4wcdEx']);
}
function b(e) {
    let t = (0, a.e7)([s.ZP], () => s.ZP.getChannels(h.I_8))[h.d4z.GUILD_CATEGORY],
        { isFavoritesPerk: n } = (0, f.z)('58e21a_1'),
        { notifyFavoriteAdded: r } = (0, c.up)();
    if (!(0, c.li)(e)) return null;
    let [[d], g] = l().partition(t, (e) => 'null' === e.channel.id);
    function b(t) {
        (r(), (0, u.kj)(e.id, t));
    }
    return 0 === g.length
        ? (0, i.jsx)(o.sNh, {
              id: 'favorite-channel',
              label: v(e, !1),
              action: () => b(null)
          })
        : (0, i.jsxs)(o.sNh, {
              id: 'favorite-channel',
              label: v(e, !1),
              action: () => b(null),
              children: [
                  n &&
                      (0, i.jsx)(o.kSQ, {
                          children: (0, i.jsx)(
                              o.sNh,
                              {
                                  id: 'favorite-'.concat(d.channel.id),
                                  label: d.channel.name,
                                  action: () => b('null' === d.channel.id ? null : d.channel.id)
                              },
                              d.channel.id
                          )
                      }),
                  (0, i.jsx)(o.kSQ, {
                      children: g.map((e) =>
                          (0, i.jsx)(
                              o.sNh,
                              {
                                  id: 'favorite-'.concat(e.channel.id),
                                  label: e.channel.name,
                                  action: () => b(e.channel.id)
                              },
                              e.channel.id
                          )
                      )
                  })
              ]
          });
}
function Z(e) {
    let t = (0, a.e7)([d.Z], () => d.Z.isFavorite(e.id));
    return __OVERLAY__ || !t
        ? null
        : (0, i.jsx)(o.sNh, {
              id: 'favorite-channel',
              label: v(e, !0),
              color: 'danger',
              action: () =>
                  e.type === h.d4z.GUILD_CATEGORY
                      ? (0, o.ZDy)(async () => {
                            let { default: t } = await n.e('37720').then(n.bind(n, 357632));
                            return (n) => {
                                var r, l;
                                return (0, i.jsx)(
                                    t,
                                    ((r = (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                i = Object.keys(n);
                                            ('function' == typeof Object.getOwnPropertySymbols &&
                                                (i = i.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                i.forEach(function (t) {
                                                    var i;
                                                    ((i = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: i,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = i));
                                                }));
                                        }
                                        return e;
                                    })({}, n)),
                                    (l = l =
                                        {
                                            onConfirm: () => {
                                                (n.onClose(), (0, u.oC)(e.id));
                                            },
                                            channel: e
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var i = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, i);
                                              }
                                              return n;
                                          })(Object(l)).forEach(function (e) {
                                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                                          }),
                                    r)
                                );
                            };
                        })
                      : (0, u.oC)(e.id)
          });
}
