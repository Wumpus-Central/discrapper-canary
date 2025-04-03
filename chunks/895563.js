n.d(t, {
    P: () => g,
    l: () => p
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(392711),
    a = n.n(r),
    l = n(442837),
    o = n(481060),
    d = n(984933),
    u = n(853856),
    s = n(117984),
    c = n(593214),
    f = n(362658),
    h = n(981631),
    v = n(388032);
function b(e, t) {
    return e.type === h.d4z.GROUP_DM ? (t ? v.NW.string(v.t['0BWmSE']) : v.NW.string(v.t.uuVTOD)) : e.type === h.d4z.DM ? (t ? v.NW.string(v.t['2wfKGh']) : v.NW.string(v.t.wPbAsb)) : t ? v.NW.string(v.t.Bou7lZ) : v.NW.string(v.t['4wcdEx']);
}
function p(e) {
    let t = (0, l.e7)([d.ZP], () => d.ZP.getChannels(h.I_8))[h.d4z.GUILD_CATEGORY],
        { isFavoritesPerk: n } = (0, f.z)('58e21a_1'),
        { notifyFavoriteAdded: r } = (0, c.up)();
    if (!(0, c.li)(e)) return null;
    let [[u], v] = a().partition(t, (e) => 'null' === e.channel.id);
    function p(t) {
        r(), (0, s.kj)(e.id, t);
    }
    return 0 === v.length
        ? (0, i.jsx)(o.sNh, {
              id: 'favorite-channel',
              label: b(e, !1),
              action: () => p(null)
          })
        : (0, i.jsxs)(o.sNh, {
              id: 'favorite-channel',
              label: b(e, !1),
              action: () => p(null),
              children: [
                  n &&
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
function g(e) {
    let t = (0, l.e7)([u.Z], () => u.Z.isFavorite(e.id));
    return __OVERLAY__ || !t
        ? null
        : (0, i.jsx)(o.sNh, {
              id: 'favorite-channel',
              label: b(e, !0),
              color: 'danger',
              action: () =>
                  e.type === h.d4z.GUILD_CATEGORY
                      ? (0, o.ZDy)(async () => {
                            let { default: t } = await n.e('37720').then(n.bind(n, 357632));
                            return (n) => {
                                var r, a;
                                return (0, i.jsx)(
                                    t,
                                    ((r = (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                i = Object.keys(n);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (i = i.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                i.forEach(function (t) {
                                                    var i;
                                                    (i = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: i,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = i);
                                                });
                                        }
                                        return e;
                                    })({}, n)),
                                    (a = a =
                                        {
                                            onConfirm: () => {
                                                n.onClose(), (0, s.oC)(e.id);
                                            },
                                            channel: e
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var i = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, i);
                                              }
                                              return n;
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
