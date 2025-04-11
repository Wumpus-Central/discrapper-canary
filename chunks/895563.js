n.d(t, {
    P: () => y,
    l: () => h
}),
    n(388685);
var r = n(200651);
n(192379);
var i = n(392711),
    l = n.n(i),
    a = n(442837),
    o = n(481060),
    c = n(984933),
    s = n(853856),
    u = n(117984),
    d = n(593214),
    f = n(362658),
    O = n(981631),
    b = n(388032);
function p(e, t) {
    return e.type === O.d4z.GROUP_DM ? (t ? b.NW.string(b.t['0BWmSE']) : b.NW.string(b.t.uuVTOD)) : e.type === O.d4z.DM ? (t ? b.NW.string(b.t['2wfKGh']) : b.NW.string(b.t.wPbAsb)) : t ? b.NW.string(b.t.Bou7lZ) : b.NW.string(b.t['4wcdEx']);
}
function h(e) {
    let t = (0, a.e7)([c.ZP], () => c.ZP.getChannels(O.I_8))[O.d4z.GUILD_CATEGORY],
        { isFavoritesPerk: n } = (0, f.z)('58e21a_1'),
        { notifyFavoriteAdded: i } = (0, d.up)();
    if (!(0, d.li)(e)) return null;
    let [[s], b] = l().partition(t, (e) => 'null' === e.channel.id);
    function h(t) {
        i(), (0, u.kj)(e.id, t);
    }
    return 0 === b.length
        ? (0, r.jsx)(o.sNh, {
              id: 'favorite-channel',
              label: p(e, !1),
              action: () => h(null)
          })
        : (0, r.jsxs)(o.sNh, {
              id: 'favorite-channel',
              label: p(e, !1),
              action: () => h(null),
              children: [
                  n &&
                      (0, r.jsx)(o.kSQ, {
                          children: (0, r.jsx)(
                              o.sNh,
                              {
                                  id: 'favorite-'.concat(s.channel.id),
                                  label: s.channel.name,
                                  action: () => h('null' === s.channel.id ? null : s.channel.id)
                              },
                              s.channel.id
                          )
                      }),
                  (0, r.jsx)(o.kSQ, {
                      children: b.map((e) =>
                          (0, r.jsx)(
                              o.sNh,
                              {
                                  id: 'favorite-'.concat(e.channel.id),
                                  label: e.channel.name,
                                  action: () => h(e.channel.id)
                              },
                              e.channel.id
                          )
                      )
                  })
              ]
          });
}
function y(e) {
    let t = (0, a.e7)([s.Z], () => s.Z.isFavorite(e.id));
    return __OVERLAY__ || !t
        ? null
        : (0, r.jsx)(o.sNh, {
              id: 'favorite-channel',
              label: p(e, !0),
              color: 'danger',
              action: () =>
                  e.type === O.d4z.GUILD_CATEGORY
                      ? (0, o.ZDy)(async () => {
                            let { default: t } = await n.e('37720').then(n.bind(n, 357632));
                            return (n) => {
                                var i, l;
                                return (0, r.jsx)(
                                    t,
                                    ((i = (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (r = r.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                r.forEach(function (t) {
                                                    var r;
                                                    (r = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: r,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = r);
                                                });
                                        }
                                        return e;
                                    })({}, n)),
                                    (l = l =
                                        {
                                            onConfirm: () => {
                                                n.onClose(), (0, u.oC)(e.id);
                                            },
                                            channel: e
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(l)).forEach(function (e) {
                                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                          }),
                                    i)
                                );
                            };
                        })
                      : (0, u.oC)(e.id)
          });
}
