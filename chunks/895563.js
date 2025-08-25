t.d(n, {
    P: () => j,
    l: () => Z,
}),
    t(388685);
var r = t(951288);
t(647438);
var i = t(392711),
    l = t.n(i),
    a = t(442837),
    o = t(481060),
    c = t(984933),
    s = t(853856),
    u = t(117984),
    d = t(593214),
    f = t(362658),
    h = t(981631),
    b = t(388032);
function p(e, n) {
    return e.type === h.d4z.GROUP_DM
        ? n
            ? b.intl.string(b.t["0BWmSE"])
            : b.intl.string(b.t.uuVTOD)
        : e.type === h.d4z.DM
          ? n
              ? b.intl.string(b.t["2wfKGh"])
              : b.intl.string(b.t.wPbAsb)
          : n
            ? b.intl.string(b.t.Bou7lZ)
            : b.intl.string(b.t["4wcdEx"]);
}
function Z(e) {
    let n = (0, a.e7)([c.ZP], () => c.ZP.getChannels(h.I_8))[h.d4z.GUILD_CATEGORY],
        { isFavoritesPerk: t } = (0, f.z)("58e21a_1"),
        { notifyFavoriteAdded: i } = (0, d.up)();
    if (!(0, d.li)(e)) return null;
    let [[s], b] = l().partition(n, (e) => "null" === e.channel.id);
    function Z(n) {
        i(), (0, u.kj)(e.id, n);
    }
    return 0 === b.length
        ? (0, r.jsx)(o.sNh, {
              id: "favorite-channel",
              label: p(e, !1),
              action: () => Z(null),
          })
        : (0, r.jsxs)(o.sNh, {
              id: "favorite-channel",
              label: p(e, !1),
              action: () => Z(null),
              children: [
                  t &&
                      (0, r.jsx)(o.kSQ, {
                          children: (0, r.jsx)(
                              o.sNh,
                              {
                                  id: "favorite-".concat(s.channel.id),
                                  label: s.channel.name,
                                  action: () => Z("null" === s.channel.id ? null : s.channel.id),
                              },
                              s.channel.id,
                          ),
                      }),
                  (0, r.jsx)(o.kSQ, {
                      children: b.map((e) =>
                          (0, r.jsx)(
                              o.sNh,
                              {
                                  id: "favorite-".concat(e.channel.id),
                                  label: e.channel.name,
                                  action: () => Z(e.channel.id),
                              },
                              e.channel.id,
                          ),
                      ),
                  }),
              ],
          });
}
function j(e) {
    let n = (0, a.e7)([s.Z], () => s.Z.isFavorite(e.id));
    return __OVERLAY__ || !n
        ? null
        : (0, r.jsx)(o.sNh, {
              id: "favorite-channel",
              label: p(e, !0),
              color: "danger",
              action: () =>
                  e.type === h.d4z.GUILD_CATEGORY
                      ? (0, o.ZDy)(async () => {
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
                                                t.onClose(), (0, u.oC)(e.id);
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
                      : (0, u.oC)(e.id),
          });
}
