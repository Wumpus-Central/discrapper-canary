t.d(n, {
    P: () => b,
    l: () => _,
}),
    t(388685);
var i = t(54381);
t(473749);
var l = t(392711),
    r = t.n(l),
    a = t(442837),
    o = t(481060),
    u = t(984933),
    s = t(853856),
    d = t(117984),
    c = t(593214),
    f = t(362658),
    g = t(981631),
    v = t(388032);
function h(e, n) {
    return e.type === g.d4z.GROUP_DM
        ? n
            ? v.intl.string(v.t["0BWmSM"])
            : v.intl.string(v.t.uuVTOK)
        : e.type === g.d4z.DM
          ? n
              ? v.intl.string(v.t["2wfKGo"])
              : v.intl.string(v.t.wPbAse)
          : n
            ? v.intl.string(v.t.Bou7lT)
            : v.intl.string(v.t["4wcdE/"]);
}
function _(e) {
    let n = (0, a.e7)([u.ZP], () => u.ZP.getChannels(g.I_8))[g.d4z.GUILD_CATEGORY],
        { isFavoritesPerk: t } = (0, f.z)("58e21a_1"),
        { notifyFavoriteAdded: l } = (0, c.up)();
    if (!(0, c.li)(e)) return null;
    let [[s], v] = r().partition(n, (e) => "null" === e.channel.id);
    function _(n) {
        l(), (0, d.kj)(e.id, n);
    }
    return 0 === v.length
        ? (0, i.jsx)(o.sNh, {
              id: "favorite-channel",
              label: h(e, !1),
              action: () => _(null),
          })
        : (0, i.jsxs)(o.sNh, {
              id: "favorite-channel",
              label: h(e, !1),
              action: () => _(null),
              children: [
                  t &&
                      (0, i.jsx)(o.kSQ, {
                          children: (0, i.jsx)(
                              o.sNh,
                              {
                                  id: "favorite-".concat(s.channel.id),
                                  label: s.channel.name,
                                  action: () => _("null" === s.channel.id ? null : s.channel.id),
                              },
                              s.channel.id,
                          ),
                      }),
                  (0, i.jsx)(o.kSQ, {
                      children: v.map((e) =>
                          (0, i.jsx)(
                              o.sNh,
                              {
                                  id: "favorite-".concat(e.channel.id),
                                  label: e.channel.name,
                                  action: () => _(e.channel.id),
                              },
                              e.channel.id,
                          ),
                      ),
                  }),
              ],
          });
}
function b(e) {
    let n = (0, a.e7)([s.Z], () => s.Z.isFavorite(e.id));
    return __OVERLAY__ || !n
        ? null
        : (0, i.jsx)(o.sNh, {
              id: "favorite-channel",
              label: h(e, !0),
              color: "danger",
              action: () =>
                  e.type === g.d4z.GUILD_CATEGORY
                      ? (0, o.ZDy)(async () => {
                            let { default: n } = await t.e("37720").then(t.bind(t, 357632));
                            return (t) => {
                                var l, r;
                                return (0, i.jsx)(
                                    n,
                                    ((l = (function (e) {
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
                                    (r = r =
                                        {
                                            onConfirm: () => {
                                                t.onClose(), (0, d.oC)(e.id);
                                            },
                                            channel: e,
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r))
                                        : (function (e, n) {
                                              var t = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var i = Object.getOwnPropertySymbols(e);
                                                  t.push.apply(t, i);
                                              }
                                              return t;
                                          })(Object(r)).forEach(function (e) {
                                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e));
                                          }),
                                    l),
                                );
                            };
                        })
                      : (0, d.oC)(e.id),
          });
}
