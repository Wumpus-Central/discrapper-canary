t.d(n, {
    P: () => m,
    l: () => j,
}),
    t(388685);
var r = t(54381);
t(473749);
var i = t(392711),
    l = t.n(i),
    o = t(442837),
    a = t(481060),
    u = t(984933),
    c = t(853856),
    d = t(117984),
    s = t(593214),
    f = t(362658),
    h = t(981631),
    b = t(388032);
function p(e, n) {
    return e.type === h.d4z.GROUP_DM
        ? n
            ? b.intl.string(b.t["0BWmSM"])
            : b.intl.string(b.t.uuVTOK)
        : e.type === h.d4z.DM
          ? n
              ? b.intl.string(b.t["2wfKGo"])
              : b.intl.string(b.t.wPbAse)
          : n
            ? b.intl.string(b.t.Bou7lT)
            : b.intl.string(b.t["4wcdE/"]);
}
function j(e) {
    let n = (0, o.e7)([u.ZP], () => u.ZP.getChannels(h.I_8))[h.d4z.GUILD_CATEGORY],
        { isFavoritesPerk: t } = (0, f.z)("58e21a_1"),
        { notifyFavoriteAdded: i } = (0, s.up)();
    if (!(0, s.li)(e)) return null;
    let [[c], b] = l().partition(n, (e) => "null" === e.channel.id);
    function j(n) {
        i(), (0, d.kj)(e.id, n);
    }
    return 0 === b.length
        ? (0, r.jsx)(a.sNh, {
              id: "favorite-channel",
              label: p(e, !1),
              action: () => j(null),
          })
        : (0, r.jsxs)(a.sNh, {
              id: "favorite-channel",
              label: p(e, !1),
              action: () => j(null),
              children: [
                  t &&
                      (0, r.jsx)(a.kSQ, {
                          children: (0, r.jsx)(
                              a.sNh,
                              {
                                  id: "favorite-".concat(c.channel.id),
                                  label: c.channel.name,
                                  action: () => j("null" === c.channel.id ? null : c.channel.id),
                              },
                              c.channel.id,
                          ),
                      }),
                  (0, r.jsx)(a.kSQ, {
                      children: b.map((e) =>
                          (0, r.jsx)(
                              a.sNh,
                              {
                                  id: "favorite-".concat(e.channel.id),
                                  label: e.channel.name,
                                  action: () => j(e.channel.id),
                              },
                              e.channel.id,
                          ),
                      ),
                  }),
              ],
          });
}
function m(e) {
    let n = (0, o.e7)([c.Z], () => c.Z.isFavorite(e.id));
    return __OVERLAY__ || !n
        ? null
        : (0, r.jsx)(a.sNh, {
              id: "favorite-channel",
              label: p(e, !0),
              color: "danger",
              action: () =>
                  e.type === h.d4z.GUILD_CATEGORY
                      ? (0, a.ZDy)(async () => {
                            let { default: n } = await t.e("37720").then(t.bind(t, 357632));
                            return (t) => {
                                var i, l;
                                return (0, r.jsx)(
                                    n,
                                    ((i = (function (e) {
                                        for (var n = 1; n < arguments.length; n++) {
                                            var t = null != arguments[n] ? arguments[n] : {},
                                                r = Object.keys(t);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (r = r.concat(
                                                    Object.getOwnPropertySymbols(t).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                    }),
                                                )),
                                                r.forEach(function (n) {
                                                    var r;
                                                    (r = t[n]),
                                                        n in e
                                                            ? Object.defineProperty(e, n, {
                                                                  value: r,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0,
                                                              })
                                                            : (e[n] = r);
                                                });
                                        }
                                        return e;
                                    })({}, t)),
                                    (l = l =
                                        {
                                            onConfirm: () => {
                                                t.onClose(), (0, d.oC)(e.id);
                                            },
                                            channel: e,
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                        : (function (e, n) {
                                              var t = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  t.push.apply(t, r);
                                              }
                                              return t;
                                          })(Object(l)).forEach(function (e) {
                                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                          }),
                                    i),
                                );
                            };
                        })
                      : (0, d.oC)(e.id),
          });
}
