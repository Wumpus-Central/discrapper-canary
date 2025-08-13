n.d(t, {
    Z: () => b,
    f: () => v,
}),
    n(388685);
var r = n(255367),
    o = n(73800),
    i = n(494497),
    l = n(442837),
    a = n(481060),
    s = n(434404),
    c = n(905128),
    u = n(639777),
    d = n(169010),
    p = n(279604),
    m = n(981631),
    f = n(93841),
    _ = n(388032),
    x = n(46310),
    g = n(175435);
function v(e, t) {
    var v;
    let b = null != (v = (0, u.Z)(t)) && v,
        h = (0, l.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getStateForGuild(t)) ? void 0 : e.allPowerups;
        }),
        j = (0, l.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getStateForGuild(t)) ? void 0 : e.unlockedPowerups;
        });
    return o.useMemo(() => {
        let o = (e) =>
                "guildTagsBadgePacks" === e
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: o, allPowerups: l, unlockedPowerups: c, skuIds: u } = e,
                              d = _.intl.string(f.default.KC9HRU),
                              v = _.intl.string(f.default.GJiSmJ),
                              b = null == l ? void 0 : l[i.IN],
                              h = (null == c ? void 0 : c[i.IN]) != null,
                              j = _.intl.string(f.default["/egwJC"]),
                              C = h ? void 0 : _.intl.string(f.default.W6Vwn5),
                              E = h ? void 0 : _.intl.string(f.default.lvk1GR),
                              I = h ? _.intl.string(f.default["9CfkLC"]) : _.intl.string(f.default.NTuNw8),
                              N = h ? "secondary" : "primary",
                              w = o
                                  ? () => {
                                        h
                                            ? s.Z.open(t, m.pNK.TAG, m.jXE.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != b && (0, p.KE)(t, b),
                                            (0, a.pTH)();
                                    }
                                  : void 0;
                          return {
                              title: d,
                              description: v,
                              openModal: function (e) {
                                  let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                  (0, a.ZDy)(
                                      async () => {
                                          let { default: i } = await n.e("64767").then(n.bind(n, 754887));
                                          return (n) =>
                                              (0, r.jsx)(
                                                  i,
                                                  (function (e) {
                                                      for (var t = 1; t < arguments.length; t++) {
                                                          var n = null != arguments[t] ? arguments[t] : {},
                                                              r = Object.keys(n);
                                                          "function" == typeof Object.getOwnPropertySymbols &&
                                                              (r = r.concat(
                                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                      return Object.getOwnPropertyDescriptor(n, e)
                                                                          .enumerable;
                                                                  }),
                                                              )),
                                                              r.forEach(function (t) {
                                                                  var r;
                                                                  (r = n[t]),
                                                                      t in e
                                                                          ? Object.defineProperty(e, t, {
                                                                                value: r,
                                                                                enumerable: !0,
                                                                                configurable: !0,
                                                                                writable: !0,
                                                                            })
                                                                          : (e[t] = r);
                                                              });
                                                      }
                                                      return e;
                                                  })(
                                                      {
                                                          guildId: t,
                                                          title: d,
                                                          description: _.intl.string(f.default.BBRFRU),
                                                          powerups: e,
                                                          footerInfoText: E,
                                                          footerAction:
                                                              o && null != w && null != I
                                                                  ? {
                                                                        variant: null != N ? N : "secondary",
                                                                        text: I,
                                                                        onClick: w,
                                                                    }
                                                                  : void 0,
                                                      },
                                                      n,
                                                  ),
                                              );
                                      },
                                      { onCloseCallback: null == i ? void 0 : i.onModalClose },
                                  );
                              },
                              viewCta: j,
                              viewCtaTooltip: C,
                              badge: "beta",
                              image: {
                                  staticUrl: g.Z,
                                  animatedUrl: x.Z,
                              },
                              skuIds: u,
                          };
                      })({
                          guildId: t,
                          canUseBoosts: b,
                          allPowerups: h,
                          unlockedPowerups: j,
                          skuIds: d.z[e],
                      })
                    : void 0,
            l = {};
        for (let t of e) {
            let e = o(t);
            null != e && (l[t] = e);
        }
        return l;
    }, [e, t, b, h, j]);
}
function b(e, t) {
    return v([e], t)[e];
}
