t.d(n, {
    P: () => b,
    l: () => p
}),
    t(388685);
var i = t(255367);
t(73800);
var r = t(392711),
    a = t.n(r),
    l = t(442837),
    o = t(481060),
    d = t(984933),
    u = t(853856),
    s = t(117984),
    c = t(593214),
    f = t(362658),
    h = t(981631),
    v = t(388032);
function g(e, n) {
    return e.type === h.d4z.GROUP_DM ? (n ? v.intl.string(v.t['0BWmSE']) : v.intl.string(v.t.uuVTOD)) : e.type === h.d4z.DM ? (n ? v.intl.string(v.t['2wfKGh']) : v.intl.string(v.t.wPbAsb)) : n ? v.intl.string(v.t.Bou7lZ) : v.intl.string(v.t['4wcdEx']);
}
function p(e) {
    let n = (0, l.e7)([d.ZP], () => d.ZP.getChannels(h.I_8))[h.d4z.GUILD_CATEGORY],
        { isFavoritesPerk: t } = (0, f.z)('58e21a_1'),
        { notifyFavoriteAdded: r } = (0, c.up)();
    if (!(0, c.li)(e)) return null;
    let [[u], v] = a().partition(n, (e) => 'null' === e.channel.id);
    function p(n) {
        r(), (0, s.kj)(e.id, n);
    }
    return 0 === v.length
        ? (0, i.jsx)(o.sNh, {
              id: 'favorite-channel',
              label: g(e, !1),
              action: () => p(null)
          })
        : (0, i.jsxs)(o.sNh, {
              id: 'favorite-channel',
              label: g(e, !1),
              action: () => p(null),
              children: [
                  t &&
                      (0, i.jsx)(o.kSQ, {
                          children: (0, i.jsx)(
                              o.sNh,
                              {
                                  id: 'favorite-'.concat(u.channel.id),
                                  label: u.channel.name,
                                  action: () => p('null' === u.channel.id ? null : u.channel.id)
                              },
                              u.channel.id
                          )
                      }),
                  (0, i.jsx)(o.kSQ, {
                      children: v.map((e) =>
                          (0, i.jsx)(
                              o.sNh,
                              {
                                  id: 'favorite-'.concat(e.channel.id),
                                  label: e.channel.name,
                                  action: () => p(e.channel.id)
                              },
                              e.channel.id
                          )
                      )
                  })
              ]
          });
}
function b(e) {
    let n = (0, l.e7)([u.Z], () => u.Z.isFavorite(e.id));
    return __OVERLAY__ || !n
        ? null
        : (0, i.jsx)(o.sNh, {
              id: 'favorite-channel',
              label: g(e, !0),
              color: 'danger',
              action: () =>
                  e.type === h.d4z.GUILD_CATEGORY
                      ? (0, o.ZDy)(async () => {
                            let { default: n } = await t.e('37720').then(t.bind(t, 357632));
                            return (t) => {
                                var r, a;
                                return (0, i.jsx)(
                                    n,
                                    ((r = (function (e) {
                                        for (var n = 1; n < arguments.length; n++) {
                                            var t = null != arguments[n] ? arguments[n] : {},
                                                i = Object.keys(t);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (i = i.concat(
                                                    Object.getOwnPropertySymbols(t).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                    })
                                                )),
                                                i.forEach(function (n) {
                                                    var i;
                                                    (i = t[n]),
                                                        n in e
                                                            ? Object.defineProperty(e, n, {
                                                                  value: i,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[n] = i);
                                                });
                                        }
                                        return e;
                                    })({}, t)),
                                    (a = a =
                                        {
                                            onConfirm: () => {
                                                t.onClose(), (0, s.oC)(e.id);
                                            },
                                            channel: e
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
                                        : (function (e, n) {
                                              var t = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var i = Object.getOwnPropertySymbols(e);
                                                  t.push.apply(t, i);
                                              }
                                              return t;
                                          })(Object(a)).forEach(function (e) {
                                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e));
                                          }),
                                    r)
                                );
                            };
                        })
                      : (0, s.oC)(e.id)
          });
}
