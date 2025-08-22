t.d(n, {
    P: () => b,
    l: () => O,
}),
    t(388685);
var i = t(951288);
t(647438);
var r = t(392711),
    l = t.n(r),
    a = t(442837),
    o = t(481060),
    s = t(984933),
    c = t(853856),
    u = t(117984),
    d = t(593214),
    f = t(362658),
    h = t(981631),
    p = t(388032);
function g(e, n) {
    return e.type === h.d4z.GROUP_DM
        ? n
            ? p.intl.string(p.t["0BWmSE"])
            : p.intl.string(p.t.uuVTOD)
        : e.type === h.d4z.DM
          ? n
              ? p.intl.string(p.t["2wfKGh"])
              : p.intl.string(p.t.wPbAsb)
          : n
            ? p.intl.string(p.t.Bou7lZ)
            : p.intl.string(p.t["4wcdEx"]);
}
function O(e) {
    let n = (0, a.e7)([s.ZP], () => s.ZP.getChannels(h.I_8))[h.d4z.GUILD_CATEGORY],
        { isFavoritesPerk: t } = (0, f.z)("58e21a_1"),
        { notifyFavoriteAdded: r } = (0, d.up)();
    if (!(0, d.li)(e)) return null;
    let [[c], p] = l().partition(n, (e) => "null" === e.channel.id);
    function O(n) {
        r(), (0, u.kj)(e.id, n);
    }
    return 0 === p.length
        ? (0, i.jsx)(o.sNh, {
              id: "favorite-channel",
              label: g(e, !1),
              action: () => O(null),
          })
        : (0, i.jsxs)(o.sNh, {
              id: "favorite-channel",
              label: g(e, !1),
              action: () => O(null),
              children: [
                  t &&
                      (0, i.jsx)(o.kSQ, {
                          children: (0, i.jsx)(
                              o.sNh,
                              {
                                  id: "favorite-".concat(c.channel.id),
                                  label: c.channel.name,
                                  action: () => O("null" === c.channel.id ? null : c.channel.id),
                              },
                              c.channel.id,
                          ),
                      }),
                  (0, i.jsx)(o.kSQ, {
                      children: p.map((e) =>
                          (0, i.jsx)(
                              o.sNh,
                              {
                                  id: "favorite-".concat(e.channel.id),
                                  label: e.channel.name,
                                  action: () => O(e.channel.id),
                              },
                              e.channel.id,
                          ),
                      ),
                  }),
              ],
          });
}
function b(e) {
    let n = (0, a.e7)([c.Z], () => c.Z.isFavorite(e.id));
    return __OVERLAY__ || !n
        ? null
        : (0, i.jsx)(o.sNh, {
              id: "favorite-channel",
              label: g(e, !0),
              color: "danger",
              action: () =>
                  e.type === h.d4z.GUILD_CATEGORY
                      ? (0, o.ZDy)(async () => {
                            let { default: n } = await t.e("37720").then(t.bind(t, 357632));
                            return (t) => {
                                var r, l;
                                return (0, i.jsx)(
                                    n,
                                    ((r = (function (e) {
                                        for (var n = 1; n < arguments.length; n++) {
                                            var t = null != arguments[n] ? arguments[n] : {},
                                                i = Object.keys(t);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (i = i.concat(
                                                    Object.getOwnPropertySymbols(t).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                    }),
                                                )),
                                                i.forEach(function (n) {
                                                    var i;
                                                    (i = t[n]),
                                                        n in e
                                                            ? Object.defineProperty(e, n, {
                                                                  value: i,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0,
                                                              })
                                                            : (e[n] = i);
                                                });
                                        }
                                        return e;
                                    })({}, t)),
                                    (l = l =
                                        {
                                            onConfirm: () => {
                                                t.onClose(), (0, u.oC)(e.id);
                                            },
                                            channel: e,
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                        : (function (e, n) {
                                              var t = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var i = Object.getOwnPropertySymbols(e);
                                                  t.push.apply(t, i);
                                              }
                                              return t;
                                          })(Object(l)).forEach(function (e) {
                                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                                          }),
                                    r),
                                );
                            };
                        })
                      : (0, u.oC)(e.id),
          });
}
