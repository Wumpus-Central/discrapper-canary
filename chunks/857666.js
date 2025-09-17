n.d(t, {
    Z: () => C,
    f: () => x,
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
    _ = n(592281),
    v = n(337003);
function x(e, t) {
    var x;
    let C = null != (x = (0, u.Z)(t)) && x,
        h = (0, l.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getStateForGuild(t)) ? void 0 : e.allPowerups;
        }),
        b = (0, l.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getStateForGuild(t)) ? void 0 : e.unlockedPowerups;
        });
    return o.useMemo(() => {
        let o = (e) =>
                "guildTagsBadgePacks" === e
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: o, allPowerups: l, unlockedPowerups: c, skuIds: u } = e,
                              d = f.intl.string(g.default.KC9HRU),
                              x = f.intl.string(g.default.GJiSmJ),
                              C = null == l ? void 0 : l[i.IN],
                              h = (null == c ? void 0 : c[i.IN]) != null,
                              b = f.intl.string(g.default["/egwJC"]),
                              E = h ? void 0 : f.intl.string(g.default.W6Vwn5),
                              T = h ? void 0 : f.intl.string(g.default.lvk1GR),
                              I = h ? f.intl.string(g.default["9CfkLC"]) : f.intl.string(f.t["+7XY39"]),
                              j = h ? "secondary" : "expressive",
                              P = o
                                  ? () => {
                                        h
                                            ? s.Z.open(t, m.pNK.TAG, m.jXE.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != C && (0, p.KE)(t, C),
                                            (0, a.pTH)();
                                    }
                                  : void 0;
                          return {
                              title: d,
                              description: x,
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
                                                          footerInfoText: T,
                                                          footerAction:
                                                              o && null != P && null != I
                                                                  ? {
                                                                        variant: j,
                                                                        text: I,
                                                                        icon: "expressive" === j ? a.$Eu : void 0,
                                                                        onClick: P,
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
                              viewCta: b,
                              viewCtaTooltip: E,
                              badge: "new",
                              image: {
                                  staticUrl: v.Z,
                                  animatedUrl: _.Z,
                              },
                              skuIds: u,
                          };
                      })({
                          guildId: t,
                          canUseBoosts: C,
                          allPowerups: h,
                          unlockedPowerups: b,
                          skuIds: d.z[e],
                      })
                    : void 0,
            l = {};
        for (let t of e) {
            let e = o(t);
            null != e && (l[t] = e);
        }
        return l;
    }, [e, t, C, h, b]);
}
function C(e, t) {
    return x([e], t)[e];
}
