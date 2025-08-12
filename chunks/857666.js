n.d(t, {
    Z: () => b,
    f: () => _,
}),
    n(388685);
var r = n(255367),
    o = n(73800),
    i = n(442837),
    l = n(481060),
    s = n(434404),
    a = n(905128),
    u = n(639777),
    c = n(169010),
    d = n(279604),
    p = n(535396),
    f = n(981631),
    m = n(93841),
    g = n(388032),
    x = n(46310),
    v = n(175435);
function _(e, t) {
    var _;
    let b = null != (_ = (0, u.Z)(t)) && _,
        j = (0, i.e7)([a.Z], () => {
            var e;
            return null == (e = a.Z.getStateForGuild(t)) ? void 0 : e.allPowerups;
        }),
        h = (0, i.e7)([a.Z], () => {
            var e;
            return null == (e = a.Z.getStateForGuild(t)) ? void 0 : e.unlockedPowerups;
        });
    return o.useMemo(() => {
        let o = (e) =>
                "guildTagsBadgePacks" === e
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: o, allPowerups: i, unlockedPowerups: a, skuIds: u } = e,
                              c = g.intl.string(m.default.KC9HRU),
                              _ = g.intl.string(m.default.GJiSmJ),
                              b = null == i ? void 0 : i[p.IN],
                              j = (null == a ? void 0 : a[p.IN]) != null,
                              h = g.intl.string(m.default["/egwJC"]),
                              E = j ? void 0 : g.intl.string(m.default.W6Vwn5),
                              C = j ? void 0 : g.intl.string(m.default.lvk1GR),
                              I = j ? g.intl.string(m.default["9CfkLC"]) : g.intl.string(m.default.NTuNw8),
                              O = j ? "secondary" : "primary",
                              y = o
                                  ? () => {
                                        j
                                            ? s.Z.open(t, f.pNK.TAG, f.jXE.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != b && (0, d.KE)(t, b),
                                            (0, l.pTH)();
                                    }
                                  : void 0;
                          return {
                              title: c,
                              description: _,
                              openModal: (e) => {
                                  (0, l.ZDy)(async () => {
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
                                                      title: c,
                                                      description: _,
                                                      powerups: e,
                                                      footerInfoText: C,
                                                      footerAction:
                                                          o && null != y && null != I
                                                              ? {
                                                                    variant: null != O ? O : "secondary",
                                                                    text: I,
                                                                    onClick: y,
                                                                }
                                                              : void 0,
                                                  },
                                                  n,
                                              ),
                                          );
                                  });
                              },
                              viewCta: h,
                              viewCtaTooltip: E,
                              badge: "beta",
                              image: {
                                  staticUrl: v.Z,
                                  animatedUrl: x.Z,
                              },
                              skuIds: u,
                          };
                      })({
                          guildId: t,
                          canUseBoosts: b,
                          allPowerups: j,
                          unlockedPowerups: h,
                          skuIds: c.z[e],
                      })
                    : void 0,
            i = {};
        for (let t of e) {
            let e = o(t);
            null != e && (i[t] = e);
        }
        return i;
    }, [e, t, b, j, h]);
}
function b(e, t) {
    return _([e], t)[e];
}
