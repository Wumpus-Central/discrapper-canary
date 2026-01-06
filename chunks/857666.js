n.d(t, {
    Z: () => b,
    f: () => x,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(494497),
    o = n(442837),
    a = n(481060),
    s = n(434404),
    u = n(905128),
    c = n(639777),
    d = n(196806),
    f = n(981631),
    p = n(556970),
    m = n(388032),
    g = n(592281),
    v = n(337003);
function x(e, t) {
    var x;
    let b = null != (x = (0, c.Z)(t)) && x,
        h = (0, o.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getStateForGuild(t)) ? void 0 : e.allPowerups;
        }),
        j = (0, o.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getStateForGuild(t)) ? void 0 : e.unlockedPowerups;
        });
    return i.useMemo(() => {
        let i = (e) =>
                "guildTagsBadgePacks" === e
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: i, allPowerups: o, unlockedPowerups: u } = e,
                              c = m.intl.string(p.default.KC9HRW),
                              x = m.intl.string(p.default.GJiSmP),
                              b = null == o ? void 0 : o[l.IN],
                              h = (null == u ? void 0 : u[l.IN]) != null,
                              j = m.intl.string(p.default["/egwJA"]),
                              Z = h ? void 0 : m.intl.string(p.default.W6Vwn3),
                              _ = h ? void 0 : m.intl.string(p.default.lvk1Gc),
                              C = h ? m.intl.string(p.default["9CfkLO"]) : m.intl.string(m.t["+7XY31"]),
                              w = h ? "secondary" : "expressive",
                              E = i
                                  ? () => {
                                        h
                                            ? s.Z.open(t, f.pNK.TAG, f.jXE.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != b && (0, d.Z)(t, b),
                                            (0, a.pTH)();
                                    }
                                  : void 0;
                          return {
                              title: c,
                              description: x,
                              openModal: function (e) {
                                  let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                  (0, a.ZDy)(
                                      async () => {
                                          let { default: l } = await n.e("64767").then(n.bind(n, 754887));
                                          return (n) =>
                                              (0, r.jsx)(
                                                  l,
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
                                                          title: c,
                                                          description: m.intl.string(p.default.BBRFRd),
                                                          powerups: e,
                                                          footerInfoText: _,
                                                          footerAction:
                                                              i && null != E && null != C
                                                                  ? {
                                                                        variant: w,
                                                                        text: C,
                                                                        icon: "expressive" === w ? a.Ucv : void 0,
                                                                        onClick: E,
                                                                    }
                                                                  : void 0,
                                                      },
                                                      n,
                                                  ),
                                              );
                                      },
                                      { onCloseCallback: null == l ? void 0 : l.onModalClose },
                                  );
                              },
                              viewCta: j,
                              viewCtaTooltip: Z,
                              image: {
                                  staticUrl: v.Z,
                                  animatedUrl: g.Z,
                              },
                          };
                      })({
                          guildId: t,
                          canUseBoosts: b,
                          allPowerups: h,
                          unlockedPowerups: j,
                      })
                    : void 0,
            o = {};
        for (let t of e) {
            let e = i(t);
            null != e && (o[t] = e);
        }
        return o;
    }, [e, t, b, h, j]);
}
function b(e, t) {
    return x([e], t)[e];
}
