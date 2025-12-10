t.d(n, {
    P: () => b,
    l: () => p,
}),
    t(388685);
var i = t(54381);
t(473749);
var r = t(392711),
    l = t.n(r),
    a = t(442837),
    s = t(481060),
    o = t(984933),
    d = t(853856),
    c = t(117984),
    u = t(593214),
    f = t(362658),
    h = t(981631),
    g = t(388032);
function j(e, n) {
    return e.type === h.d4z.GROUP_DM
        ? n
            ? g.intl.string(g.t["0BWmSM"])
            : g.intl.string(g.t.uuVTOK)
        : e.type === h.d4z.DM
          ? n
              ? g.intl.string(g.t["2wfKGo"])
              : g.intl.string(g.t.wPbAse)
          : n
            ? g.intl.string(g.t.Bou7lT)
            : g.intl.string(g.t["4wcdE/"]);
}
function p(e) {
    let n = (0, a.e7)([o.ZP], () => o.ZP.getChannels(h.I_8))[h.d4z.GUILD_CATEGORY],
        { isFavoritesPerk: t } = (0, f.z)("58e21a_1"),
        { notifyFavoriteAdded: r } = (0, u.up)();
    if (!(0, u.li)(e)) return null;
    let [[d], g] = l().partition(n, (e) => "null" === e.channel.id);
    function p(n) {
        r(), (0, c.kj)(e.id, n);
    }
    return 0 === g.length
        ? (0, i.jsx)(s.sNh, {
              id: "favorite-channel",
              label: j(e, !1),
              action: () => p(null),
          })
        : (0, i.jsxs)(s.sNh, {
              id: "favorite-channel",
              label: j(e, !1),
              action: () => p(null),
              children: [
                  t &&
                      (0, i.jsx)(s.kSQ, {
                          children: (0, i.jsx)(
                              s.sNh,
                              {
                                  id: "favorite-".concat(d.channel.id),
                                  label: d.channel.name,
                                  action: () => p("null" === d.channel.id ? null : d.channel.id),
                              },
                              d.channel.id,
                          ),
                      }),
                  (0, i.jsx)(s.kSQ, {
                      children: g.map((e) =>
                          (0, i.jsx)(
                              s.sNh,
                              {
                                  id: "favorite-".concat(e.channel.id),
                                  label: e.channel.name,
                                  action: () => p(e.channel.id),
                              },
                              e.channel.id,
                          ),
                      ),
                  }),
              ],
          });
}
function b(e) {
    let n = (0, a.e7)([d.Z], () => d.Z.isFavorite(e.id));
    return __OVERLAY__ || !n
        ? null
        : (0, i.jsx)(s.sNh, {
              id: "favorite-channel",
              label: j(e, !0),
              color: "danger",
              action: () =>
                  e.type === h.d4z.GUILD_CATEGORY
                      ? (0, s.ZDy)(async () => {
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
                                                t.onClose(), (0, c.oC)(e.id);
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
                      : (0, c.oC)(e.id),
          });
}
