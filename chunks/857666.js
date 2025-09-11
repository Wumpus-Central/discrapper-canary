n.d(t, {
    Z: () => h,
    f: () => x,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    o = n(494497),
    s = n(442837),
    l = n(481060),
    a = n(434404),
    c = n(905128),
    u = n(639777),
    d = n(169010),
    p = n(279604),
    m = n(981631),
    g = n(989308),
    f = n(388032),
    v = n(592281),
    _ = n(337003);
function x(e, t) {
    var x;
    let h = null != (x = (0, u.Z)(t)) && x,
        b = (0, s.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getStateForGuild(t)) ? void 0 : e.allPowerups;
        }),
        C = (0, s.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getStateForGuild(t)) ? void 0 : e.unlockedPowerups;
        });
    return i.useMemo(() => {
        let i = (e) =>
                "guildTagsBadgePacks" === e
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: i, allPowerups: s, unlockedPowerups: c, skuIds: u } = e,
                              d = f.intl.string(g.default.KC9HRU),
                              x = f.intl.string(g.default.GJiSmJ),
                              h = null == s ? void 0 : s[o.IN],
                              b = (null == c ? void 0 : c[o.IN]) != null,
                              C = f.intl.string(g.default["/egwJC"]),
                              j = b ? void 0 : f.intl.string(g.default.W6Vwn5),
                              T = b ? void 0 : f.intl.string(g.default.lvk1GR),
                              E = b ? f.intl.string(g.default["9CfkLC"]) : f.intl.string(f.t["+7XY39"]),
                              P = b ? "secondary" : "expressive",
                              I = i
                                  ? () => {
                                        b
                                            ? a.Z.open(t, m.pNK.TAG, m.jXE.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != h && (0, p.KE)(t, h),
                                            (0, l.pTH)();
                                    }
                                  : void 0;
                          return {
                              title: d,
                              description: x,
                              openModal: function (e) {
                                  let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                  (0, l.ZDy)(
                                      async () => {
                                          let { default: o } = await n.e("64767").then(n.bind(n, 754887));
                                          return (n) =>
                                              (0, r.jsx)(
                                                  o,
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
                                                              i && null != I && null != E
                                                                  ? {
                                                                        variant: P,
                                                                        text: E,
                                                                        icon: "expressive" === P ? l.$Eu : void 0,
                                                                        onClick: I,
                                                                    }
                                                                  : void 0,
                                                      },
                                                      n,
                                                  ),
                                              );
                                      },
                                      { onCloseCallback: null == o ? void 0 : o.onModalClose },
                                  );
                              },
                              viewCta: C,
                              viewCtaTooltip: j,
                              badge: "beta",
                              image: {
                                  staticUrl: _.Z,
                                  animatedUrl: v.Z,
                              },
                              skuIds: u,
                          };
                      })({
                          guildId: t,
                          canUseBoosts: h,
                          allPowerups: b,
                          unlockedPowerups: C,
                          skuIds: d.z[e],
                      })
                    : void 0,
            s = {};
        for (let t of e) {
            let e = i(t);
            null != e && (s[t] = e);
        }
        return s;
    }, [e, t, h, b, C]);
}
function h(e, t) {
    return x([e], t)[e];
}
