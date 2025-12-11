n.d(t, {
    Z: () => b,
    f: () => x,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(494497),
    a = n(442837),
    o = n(481060),
    s = n(434404),
    c = n(905128),
    u = n(238343),
    d = n(639777),
    f = n(981631),
    p = n(44542),
    m = n(388032),
    g = n(592281),
    v = n(337003);
function x(e, t) {
    var x;
    let b = null != (x = (0, d.Z)(t)) && x,
        h = (0, a.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getStateForGuild(t)) ? void 0 : e.allPowerups;
        }),
        j = (0, a.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getStateForGuild(t)) ? void 0 : e.unlockedPowerups;
        });
    return i.useMemo(() => {
        let i = (e) =>
                "guildTagsBadgePacks" === e
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: i, allPowerups: a, unlockedPowerups: c } = e,
                              d = m.intl.string(p.default.KC9HRW),
                              x = m.intl.string(p.default.GJiSmP),
                              b = null == a ? void 0 : a[l.IN],
                              h = (null == c ? void 0 : c[l.IN]) != null,
                              j = m.intl.string(p.default["/egwJA"]),
                              _ = h ? void 0 : m.intl.string(p.default.W6Vwn3),
                              C = h ? void 0 : m.intl.string(p.default.lvk1Gc),
                              Z = h ? m.intl.string(p.default["9CfkLO"]) : m.intl.string(m.t["+7XY31"]),
                              w = h ? "secondary" : "expressive",
                              I = i
                                  ? () => {
                                        h
                                            ? s.Z.open(t, f.pNK.TAG, f.jXE.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != b && (0, u.KE)(t, b),
                                            (0, o.pTH)();
                                    }
                                  : void 0;
                          return {
                              title: d,
                              description: x,
                              openModal: function (e) {
                                  let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                  (0, o.ZDy)(
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
                                                          title: d,
                                                          description: m.intl.string(p.default.BBRFRd),
                                                          powerups: e,
                                                          footerInfoText: C,
                                                          footerAction:
                                                              i && null != I && null != Z
                                                                  ? {
                                                                        variant: w,
                                                                        text: Z,
                                                                        icon: "expressive" === w ? o.Ucv : void 0,
                                                                        onClick: I,
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
                              viewCtaTooltip: _,
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
            a = {};
        for (let t of e) {
            let e = i(t);
            null != e && (a[t] = e);
        }
        return a;
    }, [e, t, b, h, j]);
}
function b(e, t) {
    return x([e], t)[e];
}
