n.d(t, {
    default: () => U,
    h: () => j,
    j: () => M
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(505266),
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
    O = n(63063),
    v = n(74538),
    I = n(272008),
    S = n(497505),
    T = n(981631),
    A = n(675654),
    N = n(474936),
    C = n(388032),
    P = n(239562),
    R = n(851750),
    w = n(946790),
    D = n(593639);
function L(e) {
    var t, n, a, u, d;
    let { transitionState: f, onClose: p, quest: m, location: g } = e,
        E = i.useRef(null),
        [b, y] = i.useState(null),
        O = i.useRef(new s.qA()),
        v = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        T = (null == (t = m.userStatus) ? void 0 : t.claimedAt) != null,
        [N, C] = i.useState({ state: 'loading' });
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
    let R = 'loading' === N.state,
        w = !v && !T && 'claimed' === N.state,
        D = 'claimed' === N.state && null != N.entitlements && N.entitlements.items.some((e) => e.consumed);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.O_, {
                ref: y,
                className: P.confettiCanvas,
                environment: O.current
            }),
            (0, r.jsx)('div', {
                ref: E,
                children: (0, r.jsx)(c.Y0X, {
                    transitionState: f,
                    size: c.CgR.DYNAMIC,
                    className: o()(P.rootContainer, { [P.rootContainerLoading]: R }),
                    hideShadow: !0,
                    children: R
                        ? (0, r.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE })
                        : 'error' === N.state
                          ? (0, r.jsx)(x, {
                                errorReason: N.errorReason,
                                onClose: p
                            })
                          : D
                            ? (0, r.jsx)(M, {
                                  duration: k(null != (u = null == (n = N.entitlements) ? void 0 : n.items) ? u : []),
                                  onClose: p
                              })
                            : (0, r.jsx)(j, {
                                  duration: k(null != (d = null == (a = N.entitlements) ? void 0 : a.items) ? d : []),
                                  onClose: p
                              })
                })
            }),
            w &&
                (0, r.jsx)(h.Z, {
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
        n = C.intl.string(C.t.PbaUtr);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(c.xBx, {
                separator: !1,
                className: P.errorHeader,
                children: [
                    (0, r.jsx)(c.X6q, {
                        className: P.errorTitle,
                        variant: 'heading-xl/medium',
                        children: C.intl.string(C.t['UleS9/'])
                    }),
                    (0, r.jsx)(c.olH, {
                        onClick: t,
                        className: P.errorModalCloseButton
                    })
                ]
            }),
            (0, r.jsx)(c.hzk, {
                className: P.errorContent,
                children: (0, r.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children: n
                })
            }),
            (0, r.jsx)(c.mzw, {
                className: P.errorModalFooter,
                children: (0, r.jsx)(c.zxk, {
                    color: c.zxk.Colors.BRAND,
                    size: c.zxk.Sizes.MEDIUM,
                    onClick: t,
                    children: C.intl.string(C.t.cpT0Cg)
                })
            })
        ]
    });
}
function k(e) {
    let t = (0, v.xG)(e.map((e) => e.skuId));
    return t % 24 == 0 ? C.intl.formatToPlainString(C.t['Cz1G9/'], { days: t / 24 }) : C.intl.formatToPlainString(C.t.J9Lu4u, { hours: t });
}
function M(e) {
    let { duration: t, onClose: n } = e,
        { theme: a } = (0, c.TCT)(),
        o = (0, p.Z)({ forceFetch: !0 }),
        s = (0, y.vc)(o.endsAt, 'L'),
        l = i.useCallback(() => {
            (0, g.$)(n);
        }, [n]);
    return o.fractionalState === N.a$.NONE
        ? (0, r.jsx)('div', {
              className: P.spinnerContainer,
              children: (0, r.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE })
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: P.nitroHeaderContainer,
                      children: [
                          (0, r.jsx)('div', { className: P.nitroHeaderClouds }),
                          (0, r.jsx)(b.Z, { className: P.nitroHeaderWordmark }),
                          (0, r.jsx)(c.Eep, {
                              src: w,
                              width: 110,
                              height: 82,
                              zoomable: !1,
                              className: P.nitroHeaderWumpus
                          }),
                          (0, r.jsx)(c.olH, {
                              className: P.nitroHeaderClose,
                              onClick: n
                          })
                      ]
                  }),
                  (0, r.jsxs)(c.mzw, {
                      className: P.footerContainer,
                      separator: !1,
                      children: [
                          (0, r.jsx)(m.Z, { className: P.beta }),
                          (0, r.jsx)(E.C, {
                              className: P.nitroHeading,
                              premiumType: N.p9.TIER_2,
                              type: E.C.Types.PREMIUM_ACTIVATED,
                              theme: a
                          }),
                          (0, r.jsx)(c.Text, {
                              variant: 'text-md/normal',
                              className: P.text,
                              children: C.intl.format(C.t.tgc1oq, {
                                  helpCenterLink: O.Z.getArticleURL(T.BhN.FRACTIONAL_PREMIUM_ABOUT),
                                  duration: t,
                                  expirationDate: s
                              })
                          }),
                          (0, r.jsx)(c.zxk, {
                              className: P.cta,
                              onClick: l,
                              children: C.intl.string(C.t['eQX+go'])
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
            className: P.spinnerContainer,
            children: (0, r.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE })
        });
    let d = a.isFractionalPremiumActive
        ? C.intl.string(C.t['1ku8i4'])
        : C.intl.format(C.t.fI1nLy, {
              helpCenterLink: O.Z.getArticleURL(T.BhN.FRACTIONAL_PREMIUM_ABOUT),
              duration: t
          });
    return (0, r.jsx)(c.f6W, {
        theme: s,
        children: (e) =>
            (0, r.jsxs)('div', {
                className: o()(P.claimedRootContainer, e),
                children: [
                    (0, r.jsxs)('div', {
                        className: P.headerContainer,
                        children: [
                            (0, r.jsx)('img', {
                                className: P.headerBackground,
                                src: R,
                                alt: C.intl.string(C.t['8SsCa2'])
                            }),
                            (0, r.jsx)(m.Z, { className: P.beta }),
                            (0, r.jsxs)('div', {
                                className: P.headerForeground,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: P.rewardAssetContainer,
                                        children: (0, r.jsx)('img', {
                                            src: D,
                                            alt: C.intl.string(C.t.OhPMam),
                                            height: 120
                                        })
                                    }),
                                    (0, r.jsx)(c.olH, {
                                        className: P.close,
                                        withCircleBackground: !0,
                                        onClick: n
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsxs)(c.mzw, {
                        className: P.footerContainer,
                        separator: !1,
                        children: [
                            (0, r.jsx)(c.X6q, {
                                variant: 'heading-lg/bold',
                                className: P.heading,
                                children: C.intl.string(C.t['+PHEo6'])
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                className: P.text,
                                children: d
                            }),
                            (0, r.jsx)(c.zxk, {
                                className: P.cta2,
                                onClick: l,
                                children: C.intl.string(C.t.LnsQGR)
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
