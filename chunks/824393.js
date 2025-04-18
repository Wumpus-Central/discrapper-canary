n.d(t, {
    default: () => U,
    h: () => j,
    j: () => k
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(995899),
    l = n(442837),
    c = n(481060),
    u = n(230711),
    d = n(211266),
    f = n(410030),
    _ = n(607070),
    p = n(975298),
    h = n(530618),
    m = n(688465),
    g = n(98278),
    E = n(741245),
    b = n(931331),
    y = n(55935),
    v = n(63063),
    O = n(74538),
    I = n(272008),
    S = n(497505),
    T = n(981631),
    N = n(675654),
    A = n(474936),
    C = n(388032),
    R = n(639220),
    P = n(851750),
    w = n(946790),
    D = n(593639);
function L(e) {
    var t, n, a, u, d;
    let { transitionState: f, onClose: p, quest: m, location: g } = e,
        E = i.useRef(null),
        [b, y] = i.useState(null),
        v = i.useRef(new s.qA()),
        O = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        T = (null == (t = m.userStatus) ? void 0 : t.claimedAt) != null,
        [A, C] = i.useState({ state: 'loading' });
    i.useEffect(() => {
        T ||
            (0, I.QB)(m.id, S.y$.CROSS_PLATFORM, g)
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
    }, [m, g, T]);
    let P = 'loading' === A.state,
        w = !O && !T && 'claimed' === A.state,
        D = 'claimed' === A.state && null != A.entitlements && A.entitlements.items.some((e) => e.consumed);
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
                    transitionState: f,
                    size: c.CgR.DYNAMIC,
                    className: o()(R.rootContainer, { [R.rootContainerLoading]: P }),
                    hideShadow: !0,
                    children: P
                        ? (0, r.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE })
                        : 'error' === A.state
                          ? (0, r.jsx)(x, {
                                errorReason: A.errorReason,
                                onClose: p
                            })
                          : D
                            ? (0, r.jsx)(k, {
                                  duration: M(null != (u = null == (n = A.entitlements) ? void 0 : n.items) ? u : []),
                                  onClose: p
                              })
                            : (0, r.jsx)(j, {
                                  duration: M(null != (d = null == (a = A.entitlements) ? void 0 : a.items) ? d : []),
                                  onClose: p
                              })
                })
            }),
            w &&
                (0, r.jsx)(h.Z, {
                    confettiTarget: E.current,
                    confettiCanvas: b,
                    sprites: N.CA,
                    colors: N.Br
                })
        ]
    });
}
function x(e) {
    let { onClose: t } = e,
        n = C.NW.string(C.t.PbaUtr);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(c.xBx, {
                separator: !1,
                className: R.errorHeader,
                children: [
                    (0, r.jsx)(c.X6q, {
                        className: R.errorTitle,
                        variant: 'heading-xl/medium',
                        children: C.NW.string(C.t['UleS9/'])
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
                    children: C.NW.string(C.t.cpT0Cg)
                })
            })
        ]
    });
}
function M(e) {
    let t = (0, O.xG)(e.map((e) => e.skuId));
    return t % 24 == 0 ? C.NW.formatToPlainString(C.t['Cz1G9/'], { days: t / 24 }) : C.NW.formatToPlainString(C.t.J9Lu4u, { hours: t });
}
function k(e) {
    let { duration: t, onClose: n } = e,
        { theme: a } = (0, c.TCT)(),
        o = (0, p.Z)({ forceFetch: !0 }),
        s = (0, y.vc)(o.endsAt, 'L'),
        l = i.useCallback(() => {
            (0, g.$)(n);
        }, [n]);
    return o.fractionalState === A.a$.NONE
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
                              src: w,
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
                              premiumType: A.p9.TIER_2,
                              type: E.C.Types.PREMIUM_ACTIVATED,
                              theme: a
                          }),
                          (0, r.jsx)(c.Text, {
                              variant: 'text-md/normal',
                              className: R.text,
                              children: C.NW.format(C.t.tgc1oq, {
                                  helpCenterLink: v.Z.getArticleURL(T.BhN.FRACTIONAL_PREMIUM_ABOUT),
                                  duration: t,
                                  expirationDate: s
                              })
                          }),
                          (0, r.jsx)(c.zxk, {
                              className: R.cta,
                              onClick: l,
                              children: C.NW.string(C.t['eQX+go'])
                          })
                      ]
                  })
              ]
          });
}
function j(e) {
    let { duration: t, onClose: n } = e,
        a = (0, p.Z)({ forceFetch: !0 }),
        s = (0, f.ZP)(),
        l = i.useCallback(() => {
            u.Z.open(T.oAB.SUBSCRIPTIONS, null, {}), n();
        }, [n]);
    if (!a.fetched)
        return (0, r.jsx)('div', {
            className: R.spinnerContainer,
            children: (0, r.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE })
        });
    let d = a.isFractionalPremiumActive
        ? C.NW.string(C.t['1ku8i4'])
        : C.NW.format(C.t.fI1nLy, {
              helpCenterLink: v.Z.getArticleURL(T.BhN.FRACTIONAL_PREMIUM_ABOUT),
              duration: t
          });
    return (0, r.jsx)(c.f6W, {
        theme: s,
        children: (e) =>
            (0, r.jsxs)('div', {
                className: o()(R.claimedRootContainer, e),
                children: [
                    (0, r.jsxs)('div', {
                        className: R.headerContainer,
                        children: [
                            (0, r.jsx)('img', {
                                className: R.headerBackground,
                                src: P,
                                alt: C.NW.string(C.t['8SsCa2'])
                            }),
                            (0, r.jsx)(m.Z, { className: R.beta }),
                            (0, r.jsxs)('div', {
                                className: R.headerForeground,
                                children: [
                                    (0, r.jsx)('div', {
                                        children: (0, r.jsx)('img', {
                                            src: D,
                                            alt: C.NW.string(C.t.OhPMam),
                                            height: 120
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
                        className: R.footerContainer,
                        separator: !1,
                        children: [
                            (0, r.jsx)(c.X6q, {
                                variant: 'heading-lg/bold',
                                className: R.heading,
                                children: C.NW.string(C.t['+PHEo6'])
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                className: R.text,
                                children: d
                            }),
                            (0, r.jsx)(c.zxk, {
                                className: R.cta2,
                                onClick: l,
                                children: C.NW.string(C.t.LnsQGR)
                            })
                        ]
                    })
                ]
            })
    });
}
function U(e) {
    let { quest: t, location: n, onClose: a, transitionState: o } = e,
        s = (0, d.Z)(() => {
            var e;
            return (null == (e = t.userStatus) ? void 0 : e.claimedAt) != null;
        });
    return (i.useEffect(() => {
        s && a();
    }, [a, s]),
    s)
        ? null
        : (0, r.jsx)(L, {
              onClose: a,
              transitionState: o,
              quest: t,
              location: n
          });
}
