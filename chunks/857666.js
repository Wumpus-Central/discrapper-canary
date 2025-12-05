n.d(t, {
    Z: () => _,
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
    d = n(279604),
    p = n(981631),
    f = n(810878),
    m = n(388032),
    g = n(46310),
    v = n(175435);
function x(e, t) {
    var x;
    let _ = null != (x = (0, c.Z)(t)) && x,
        b = (0, o.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getStateForGuild(t)) ? void 0 : e.allPowerups;
        }),
        h = (0, o.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getStateForGuild(t)) ? void 0 : e.unlockedPowerups;
        });
    return i.useMemo(() => {
        let i = (e) =>
                "guildTagsBadgePacks" === e
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: i, allPowerups: o, unlockedPowerups: u } = e,
                              c = m.intl.string(f.default.KC9HRW),
                              x = m.intl.string(f.default.GJiSmP),
                              _ = null == o ? void 0 : o[l.IN],
                              b = (null == u ? void 0 : u[l.IN]) != null,
                              h = m.intl.string(f.default["/egwJA"]),
                              j = b ? void 0 : m.intl.string(f.default.W6Vwn3),
                              C = b ? void 0 : m.intl.string(f.default.lvk1Gc),
                              Z = b ? m.intl.string(f.default["9CfkLO"]) : m.intl.string(m.t["+7XY31"]),
                              w = b ? "secondary" : "expressive",
                              I = i
                                  ? () => {
                                        b
                                            ? s.Z.open(t, p.pNK.TAG, p.jXE.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != _ && (0, d.KE)(t, _),
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
                                                          description: m.intl.string(f.default.BBRFRd),
                                                          powerups: e,
                                                          footerInfoText: C,
                                                          footerAction:
                                                              i && null != I && null != Z
                                                                  ? {
                                                                        variant: w,
                                                                        text: Z,
                                                                        icon: "expressive" === w ? a.Ucv : void 0,
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
                              viewCta: h,
                              viewCtaTooltip: j,
                              image: {
                                  staticUrl: v.Z,
                                  animatedUrl: g.Z,
                              },
                          };
                      })({
                          guildId: t,
                          canUseBoosts: _,
                          allPowerups: b,
                          unlockedPowerups: h,
                      })
                    : void 0,
            o = {};
        for (let t of e) {
            let e = i(t);
            null != e && (o[t] = e);
        }
        return o;
    }, [e, t, _, b, h]);
}
function _(e, t) {
    return x([e], t)[e];
}
