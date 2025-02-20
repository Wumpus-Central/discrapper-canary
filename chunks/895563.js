t.d(n, {
    P: () => Z,
    l: () => y
}),
    t(47120);
var r = t(200651);
t(192379);
var i = t(392711),
    a = t.n(i),
    o = t(442837),
    l = t(481060),
    d = t(984933),
    c = t(853856),
    s = t(117984),
    u = t(593214),
    f = t(362658),
    h = t(981631),
    v = t(388032);
function p(e, n) {
    return e.type === h.d4z.GROUP_DM ? (n ? v.NW.string(v.t['0BWmSE']) : v.NW.string(v.t.uuVTOD)) : e.type === h.d4z.DM ? (n ? v.NW.string(v.t['2wfKGh']) : v.NW.string(v.t.wPbAsb)) : n ? v.NW.string(v.t.Bou7lZ) : v.NW.string(v.t['4wcdEx']);
}
function y(e) {
    let n = (0, o.e7)([d.ZP], () => d.ZP.getChannels(h.I_8))[h.d4z.GUILD_CATEGORY],
        { isFavoritesPerk: t } = (0, f.z)('58e21a_1'),
        { notifyFavoriteAdded: i } = (0, u.up)();
    if (!(0, u.li)(e)) return null;
    let [[c], v] = a().partition(n, (e) => 'null' === e.channel.id);
    function y(n) {
        i(), (0, s.kj)(e.id, n);
    }
    return 0 === v.length
        ? (0, r.jsx)(l.sNh, {
              id: 'favorite-channel',
              label: p(e, !1),
              action: () => y(null)
          })
        : (0, r.jsxs)(l.sNh, {
              id: 'favorite-channel',
              label: p(e, !1),
              action: () => y(null),
              children: [
                  t &&
                      (0, r.jsx)(l.kSQ, {
                          children: (0, r.jsx)(
                              l.sNh,
                              {
                                  id: 'favorite-'.concat(c.channel.id),
                                  label: c.channel.name,
                                  action: () => y('null' === c.channel.id ? null : c.channel.id)
                              },
                              c.channel.id
                          )
                      }),
                  (0, r.jsx)(l.kSQ, {
                      children: v.map((e) =>
                          (0, r.jsx)(
                              l.sNh,
                              {
                                  id: 'favorite-'.concat(e.channel.id),
                                  label: e.channel.name,
                                  action: () => y(e.channel.id)
                              },
                              e.channel.id
                          )
                      )
                  })
              ]
          });
}
function Z(e) {
    let n = (0, o.e7)([c.Z], () => c.Z.isFavorite(e.id));
    return __OVERLAY__ || !n
        ? null
        : (0, r.jsx)(l.sNh, {
              id: 'favorite-channel',
              label: p(e, !0),
              color: 'danger',
              action: () =>
                  e.type === h.d4z.GUILD_CATEGORY
                      ? (0, l.ZDy)(async () => {
                            let { default: n } = await t.e('37720').then(t.bind(t, 357632));
                            return (t) => {
                                var i, a;
                                return (0, r.jsx)(
                                    n,
                                    ((i = (function (e) {
                                        for (var n = 1; n < arguments.length; n++) {
                                            var t = null != arguments[n] ? arguments[n] : {},
                                                r = Object.keys(t);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (r = r.concat(
                                                    Object.getOwnPropertySymbols(t).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                    })
                                                )),
                                                r.forEach(function (n) {
                                                    var r;
                                                    (r = t[n]),
                                                        n in e
                                                            ? Object.defineProperty(e, n, {
                                                                  value: r,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[n] = r);
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
                                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                                        : (function (e, n) {
                                              var t = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  t.push.apply(t, r);
                                              }
                                              return t;
                                          })(Object(a)).forEach(function (e) {
                                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                                          }),
                                    i)
                                );
                            };
                        })
                      : (0, s.oC)(e.id)
          });
}
