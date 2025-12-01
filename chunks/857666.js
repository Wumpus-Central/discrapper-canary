n.d(t, {
    Z: () => b,
    f: () => _,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    o = n(494497),
    l = n(442837),
    a = n(481060),
    s = n(434404),
    c = n(905128),
    u = n(639777),
    d = n(169010),
    p = n(279604),
    f = n(981631),
    m = n(130231),
    g = n(388032),
    v = n(46310),
    x = n(175435);
function _(e, t) {
    var _;
    let b = null != (_ = (0, u.Z)(t)) && _,
        h = (0, l.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getStateForGuild(t)) ? void 0 : e.allPowerups;
        }),
        j = (0, l.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getStateForGuild(t)) ? void 0 : e.unlockedPowerups;
        });
    return i.useMemo(() => {
        let i = (e) =>
                "guildTagsBadgePacks" === e
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: i, allPowerups: l, unlockedPowerups: c, skuIds: u } = e,
                              d = g.intl.string(m.default.KC9HRW),
                              _ = g.intl.string(m.default.GJiSmP),
                              b = null == l ? void 0 : l[o.IN],
                              h = (null == c ? void 0 : c[o.IN]) != null,
                              j = g.intl.string(m.default["/egwJA"]),
                              C = h ? void 0 : g.intl.string(m.default.W6Vwn3),
                              w = h ? void 0 : g.intl.string(m.default.lvk1Gc),
                              I = h ? g.intl.string(m.default["9CfkLO"]) : g.intl.string(g.t["+7XY31"]),
                              E = h ? "secondary" : "expressive",
                              Z = i
                                  ? () => {
                                        h
                                            ? s.Z.open(t, f.pNK.TAG, f.jXE.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != b && (0, p.KE)(t, b),
                                            (0, a.pTH)();
                                    }
                                  : void 0;
                          return {
                              title: d,
                              description: _,
                              openModal: function (e) {
                                  let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                  (0, a.ZDy)(
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
                                                          description: g.intl.string(m.default.BBRFRd),
                                                          powerups: e,
                                                          footerInfoText: w,
                                                          footerAction:
                                                              i && null != Z && null != I
                                                                  ? {
                                                                        variant: E,
                                                                        text: I,
                                                                        icon: "expressive" === E ? a.Ucv : void 0,
                                                                        onClick: Z,
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
                              viewCta: j,
                              viewCtaTooltip: C,
                              image: {
                                  staticUrl: x.Z,
                                  animatedUrl: v.Z,
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
            let e = i(t);
            null != e && (l[t] = e);
        }
        return l;
    }, [e, t, b, h, j]);
}
function b(e, t) {
    return _([e], t)[e];
}
