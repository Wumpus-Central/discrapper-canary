n.d(t, {
    Z: () => x,
    f: () => h,
}),
    n(388685);
var r = n(951288),
    o = n(647438),
    i = n(494497),
    l = n(442837),
    a = n(481060),
    s = n(434404),
    c = n(905128),
    u = n(639777),
    d = n(169010),
    p = n(279604),
    m = n(981631),
    g = n(989308),
    f = n(388032),
    v = n(592281),
    _ = n(337003);
function h(e, t) {
    var h;
    let x = null != (h = (0, u.Z)(t)) && h,
        b = (0, l.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getStateForGuild(t)) ? void 0 : e.allPowerups;
        }),
        C = (0, l.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getStateForGuild(t)) ? void 0 : e.unlockedPowerups;
        });
    return o.useMemo(() => {
        let o = (e) =>
                "guildTagsBadgePacks" === e
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: o, allPowerups: l, unlockedPowerups: c, skuIds: u } = e,
                              d = f.intl.string(g.default.KC9HRU),
                              h = f.intl.string(g.default.GJiSmJ),
                              x = null == l ? void 0 : l[i.IN],
                              b = (null == c ? void 0 : c[i.IN]) != null,
                              C = f.intl.string(g.default["/egwJC"]),
                              j = b ? void 0 : f.intl.string(g.default.W6Vwn5),
                              E = b ? void 0 : f.intl.string(g.default.lvk1GR),
                              T = b ? f.intl.string(g.default["9CfkLC"]) : f.intl.string(f.t["+7XY39"]),
                              P = b ? "secondary" : "expressive",
                              I = o
                                  ? () => {
                                        b
                                            ? s.Z.open(t, m.pNK.TAG, m.jXE.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != x && (0, p.KE)(t, x),
                                            (0, a.pTH)();
                                    }
                                  : void 0;
                          return {
                              title: d,
                              description: h,
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
                                                          description: f.intl.string(g.default.BBRFRU),
                                                          powerups: e,
                                                          footerInfoText: E,
                                                          footerAction:
                                                              o && null != I && null != T
                                                                  ? {
                                                                        variant: P,
                                                                        text: T,
                                                                        icon: "expressive" === P ? a.$Eu : void 0,
                                                                        onClick: I,
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
                              viewCta: C,
                              viewCtaTooltip: j,
                              image: {
                                  staticUrl: _.Z,
                                  animatedUrl: v.Z,
                              },
                              skuIds: u,
                          };
                      })({
                          guildId: t,
                          canUseBoosts: x,
                          allPowerups: b,
                          unlockedPowerups: C,
                          skuIds: d.z[e],
                      })
                    : void 0,
            l = {};
        for (let t of e) {
            let e = o(t);
            null != e && (l[t] = e);
        }
        return l;
    }, [e, t, x, b, C]);
}
function x(e, t) {
    return h([e], t)[e];
}
