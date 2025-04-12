n.d(t, {
    default: () => U,
    h: () => j,
    j: () => k
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(9971),
    l = n(442837),
    c = n(481060),
    u = n(230711),
    d = n(211266),
    f = n(607070),
    _ = n(975298),
    p = n(530618),
    h = n(436774),
    m = n(688465),
    g = n(98278),
    E = n(741245),
    b = n(931331),
    y = n(55935),
    v = n(70956),
    O = n(63063),
    I = n(74538),
    S = n(272008),
    T = n(497505),
    N = n(981631),
    A = n(675654),
    C = n(474936),
    P = n(388032),
    R = n(639220),
    w = n(499018),
    D = n(946790);
function L(e) {
    var t, n, o, u, d;
    let { transitionState: _, onClose: h, quest: m, location: g } = e,
        E = i.useRef(null),
        [b, y] = i.useState(null),
        v = i.useRef(new s.qA()),
        O = (0, l.e7)([f.Z], () => f.Z.useReducedMotion),
        I = (null == (t = m.userStatus) ? void 0 : t.claimedAt) != null,
        [N, C] = i.useState({ state: 'loading' });
    i.useEffect(() => {
        I ||
            (0, S.QB)(m.id, T.y$.CROSS_PLATFORM, g)
                .then((e) => {
                    if ((null == e ? void 0 : e.claimedAt) != null)
                        return void C({
                            state: 'claimed',
                            entitlements: e
                        });
                    C({
                        state: 'error',
                        errorReason: 0
                    });
                })
                .catch(() => {
                    C({
                        state: 'error',
                        errorReason: 0
                    });
                });
    }, [m, g, I]);
    let P = 'loading' === N.state,
        w = !O && !I && 'claimed' === N.state,
        D = 'claimed' === N.state && null != N.entitlements && N.entitlements.items.some((e) => e.consumed);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.O_, {
                ref: y,
                className: R.confettiCanvas,
                environment: v.current
            }),
            (0, r.jsx)('div', {
                ref: E,
                children: (0, r.jsx)(c.Y0X, {
                    transitionState: _,
                    size: c.CgR.DYNAMIC,
                    className: a()(R.rootContainer, { [R.rootContainerLoading]: P }),
                    hideShadow: !0,
                    children: P
                        ? (0, r.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE })
                        : 'error' === N.state
                          ? (0, r.jsx)(x, {
                                errorReason: N.errorReason,
                                onClose: h
                            })
                          : D
                            ? (0, r.jsx)(k, {
                                  duration: M(null != (u = null == (n = N.entitlements) ? void 0 : n.items) ? u : []),
                                  onClose: h
                              })
                            : (0, r.jsx)(j, {
                                  duration: M(null != (d = null == (o = N.entitlements) ? void 0 : o.items) ? d : []),
                                  onClose: h
                              })
                })
            }),
            w &&
                (0, r.jsx)(p.Z, {
                    confettiTarget: E.current,
                    confettiCanvas: b,
                    sprites: A.CA,
                    colors: A.Br
                })
        ]
    });
}
function x(e) {
    let { onClose: t } = e,
        n = P.NW.string(P.t.PbaUtr);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(c.xBx, {
                separator: !1,
                className: R.errorHeader,
                children: [
                    (0, r.jsx)(c.X6q, {
                        className: R.errorTitle,
                        variant: 'heading-xl/medium',
                        children: P.NW.string(P.t['UleS9/'])
                    }),
                    (0, r.jsx)(c.olH, {
                        onClick: t,
                        className: R.errorModalCloseButton
                    })
                ]
            }),
            (0, r.jsx)(c.hzk, {
                className: R.errorContent,
                children: (0, r.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children: n
                })
            }),
            (0, r.jsx)(c.mzw, {
                className: R.errorModalFooter,
                children: (0, r.jsx)(c.zxk, {
                    color: c.zxk.Colors.BRAND,
                    size: c.zxk.Sizes.MEDIUM,
                    onClick: t,
                    children: P.NW.string(P.t.cpT0Cg)
                })
            })
        ]
    });
}
function M(e) {
    let t = (0, I.xG)(e.map((e) => e.skuId)),
        n = {
            days: P.t.fYmir6,
            hours: P.t['C3RO+v'],
            minutes: P.t.r77oHR
        },
        r = (0, y.TD)(0, t * v.Z.Millis.HOUR);
    return (0, y.QX)(r, n);
}
function k(e) {
    let { duration: t, onClose: n } = e,
        { theme: o } = (0, c.TCT)(),
        a = (0, _.Z)({ forceFetch: !0 }),
        s = (0, y.vc)(a.endsAt, 'L'),
        l = i.useCallback(() => {
            (0, g.$)(n);
        }, [n]);
    return a.fractionalState === C.a$.NONE
        ? (0, r.jsx)('div', {
              className: R.spinnerContainer,
              children: (0, r.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE })
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: R.nitroHeaderContainer,
                      children: [
                          (0, r.jsx)('div', { className: R.nitroHeaderClouds }),
                          (0, r.jsx)(b.Z, { className: R.nitroHeaderWordmark }),
                          (0, r.jsx)(c.Eep, {
                              src: D,
                              width: 110,
                              height: 82,
                              zoomable: !1,
                              className: R.nitroHeaderWumpus
                          }),
                          (0, r.jsx)(c.olH, {
                              className: R.nitroHeaderClose,
                              onClick: n
                          })
                      ]
                  }),
                  (0, r.jsxs)(c.mzw, {
                      className: R.footerContainer,
                      separator: !1,
                      children: [
                          (0, r.jsx)(m.Z, { className: R.beta }),
                          (0, r.jsx)(E.C, {
                              className: R.nitroHeading,
                              premiumType: C.p9.TIER_2,
                              type: E.C.Types.PREMIUM_ACTIVATED,
                              theme: o
                          }),
                          (0, r.jsx)(c.Text, {
                              variant: 'text-md/normal',
                              className: R.text,
                              children: P.NW.format(P.t['jzW5/P'], {
                                  helpCenterLink: O.Z.getArticleURL(N.BhN.FRACTIONAL_PREMIUM_ABOUT),
                                  duration: t,
                                  date: s
                              })
                          }),
                          (0, r.jsx)(c.zxk, {
                              className: R.cta,
                              onClick: l,
                              children: P.NW.string(P.t['eQX+go'])
                          })
                      ]
                  })
              ]
          });
}
function j(e) {
    let { duration: t, onClose: n } = e,
        { theme: o } = (0, c.TCT)(),
        s = (0, _.Z)({ forceFetch: !0 }),
        l = (0, y.vc)(s.endsAt, 'L'),
        d = i.useCallback(() => {
            u.Z.open(N.oAB.SUBSCRIPTIONS, null, {}), n();
        }, [n]);
    return s.fetched
        ? s.isFractionalPremiumActive
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)('div', {
                          className: R.nitroHeaderContainer,
                          children: [
                              (0, r.jsx)('div', { className: R.nitroHeaderClouds }),
                              (0, r.jsx)(b.Z, { className: R.nitroHeaderWordmark }),
                              (0, r.jsx)(c.Eep, {
                                  src: D,
                                  width: 110,
                                  height: 82,
                                  zoomable: !1,
                                  className: R.nitroHeaderWumpus
                              }),
                              (0, r.jsx)(c.olH, {
                                  className: R.nitroHeaderClose,
                                  onClick: n
                              })
                          ]
                      }),
                      (0, r.jsxs)(c.mzw, {
                          className: R.footerContainer,
                          separator: !1,
                          children: [
                              (0, r.jsx)(m.Z, { className: R.beta }),
                              (0, r.jsx)(E.C, {
                                  className: R.nitroHeading,
                                  premiumType: C.p9.TIER_2,
                                  type: E.C.Types.PREMIUM_UPDATED,
                                  theme: o
                              }),
                              (0, r.jsx)(c.Text, {
                                  variant: 'text-md/normal',
                                  className: R.text,
                                  children: P.NW.format(P.t.tft2ur, { expirationDate: l })
                              }),
                              (0, r.jsx)(c.zxk, {
                                  className: R.cta,
                                  onClick: d,
                                  children: P.NW.string(P.t.LnsQGR)
                              })
                          ]
                      })
                  ]
              })
            : (0, r.jsx)(c.f6W, {
                  theme: N.BRd.DARK,
                  children: (e) =>
                      (0, r.jsxs)('div', {
                          className: a()(R.claimedRootContainer, e),
                          children: [
                              (0, r.jsxs)('div', {
                                  className: R.headerContainer,
                                  children: [
                                      (0, r.jsx)('img', {
                                          className: R.headerBackground,
                                          src: w,
                                          alt: P.NW.string(P.t['8SsCa2'])
                                      }),
                                      (0, r.jsx)(m.Z, { className: R.beta }),
                                      (0, r.jsxs)('div', {
                                          className: R.headerForeground,
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: R.iconBackgroundFractional,
                                                  children: (0, r.jsx)(c.SrA, {
                                                      size: 'lg',
                                                      className: R.iconFractional,
                                                      color: h.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND
                                                  })
                                              }),
                                              (0, r.jsx)(c.olH, {
                                                  className: R.close,
                                                  withCircleBackground: !0,
                                                  onClick: n
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              (0, r.jsxs)(c.mzw, {
                                  className: a()(R.footerContainer, R.gradient),
                                  separator: !1,
                                  children: [
                                      (0, r.jsx)(c.X6q, {
                                          variant: 'heading-lg/bold',
                                          className: R.heading,
                                          children: P.NW.string(P.t.dOQ9RU)
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: 'text-sm/normal',
                                          className: R.text,
                                          children: P.NW.format(P.t.KnH4jo, {
                                              helpCenterLink: O.Z.getArticleURL(N.BhN.FRACTIONAL_PREMIUM_ABOUT),
                                              duration: t
                                          })
                                      }),
                                      (0, r.jsx)(c.zxk, {
                                          className: R.cta2,
                                          onClick: d,
                                          children: P.NW.string(P.t.LnsQGR)
                                      })
                                  ]
                              })
                          ]
                      })
              })
        : (0, r.jsx)('div', {
              className: R.spinnerContainer,
              children: (0, r.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE })
          });
}
function U(e) {
    let { quest: t, location: n, onClose: o, transitionState: a } = e,
        s = (0, d.Z)(() => {
            var e;
            return (null == (e = t.userStatus) ? void 0 : e.claimedAt) != null;
        });
    return (i.useEffect(() => {
        s && o();
    }, [o, s]),
    s)
        ? null
        : (0, r.jsx)(L, {
              onClose: o,
              transitionState: a,
              quest: t,
              location: n
          });
}
