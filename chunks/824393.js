n.d(t, {
    default: () => U,
    h: () => j,
    j: () => k
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(119617),
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
    v = n(931331),
    b = n(55935),
    y = n(70956),
    O = n(63063),
    I = n(74538),
    S = n(272008),
    T = n(497505),
    N = n(981631),
    A = n(675654),
    C = n(474936),
    R = n(388032),
    P = n(269114),
    w = n(499018),
    D = n(946790);
function L(e) {
    var t, n, o, u, d;
    let { transitionState: _, onClose: h, quest: m, location: g } = e,
        E = i.useRef(null),
        [v, b] = i.useState(null),
        y = i.useRef(new s.qA()),
        O = (0, l.e7)([f.Z], () => f.Z.useReducedMotion),
        I = (null === (t = m.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        [N, C] = i.useState({ state: 'loading' });
    i.useEffect(() => {
        I ||
            (0, S.QB)(m.id, T.y$.CROSS_PLATFORM, g)
                .then((e) => {
                    if ((null == e ? void 0 : e.claimedAt) != null) {
                        C({
                            state: 'claimed',
                            entitlements: e
                        });
                        return;
                    }
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
    let R = 'loading' === N.state,
        w = !O && !I && 'claimed' === N.state,
        D = 'claimed' === N.state && null != N.entitlements && N.entitlements.items.some((e) => e.consumed);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.O_, {
                ref: b,
                className: P.confettiCanvas,
                environment: y.current
            }),
            (0, r.jsx)('div', {
                ref: E,
                children: (0, r.jsx)(c.Y0X, {
                    transitionState: _,
                    size: c.CgR.DYNAMIC,
                    className: a()(P.rootContainer, { [P.rootContainerLoading]: R }),
                    hideShadow: !0,
                    children: R
                        ? (0, r.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE })
                        : 'error' === N.state
                          ? (0, r.jsx)(x, {
                                errorReason: N.errorReason,
                                onClose: h
                            })
                          : D
                            ? (0, r.jsx)(k, {
                                  duration: M(null !== (u = null === (n = N.entitlements) || void 0 === n ? void 0 : n.items) && void 0 !== u ? u : []),
                                  onClose: h
                              })
                            : (0, r.jsx)(j, {
                                  duration: M(null !== (d = null === (o = N.entitlements) || void 0 === o ? void 0 : o.items) && void 0 !== d ? d : []),
                                  onClose: h
                              })
                })
            }),
            w &&
                (0, r.jsx)(p.Z, {
                    confettiTarget: E.current,
                    confettiCanvas: v,
                    sprites: A.CA,
                    colors: A.Br
                })
        ]
    });
}
function x(e) {
    let { onClose: t } = e,
        n = R.NW.string(R.t.PbaUtr);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(c.xBx, {
                separator: !1,
                className: P.errorHeader,
                children: [
                    (0, r.jsx)(c.X6q, {
                        className: P.errorTitle,
                        variant: 'heading-xl/medium',
                        children: R.NW.string(R.t['UleS9/'])
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
                    children: R.NW.string(R.t.cpT0Cg)
                })
            })
        ]
    });
}
function M(e) {
    let t = (0, I.xG)(e.map((e) => e.skuId)),
        n = {
            days: R.t.fYmir6,
            hours: R.t['C3RO+v'],
            minutes: R.t.r77oHR
        },
        r = (0, b.TD)(0, t * y.Z.Millis.HOUR);
    return (0, b.QX)(r, n);
}
function k(e) {
    let { duration: t, onClose: n } = e,
        { theme: o } = (0, c.TCT)(),
        a = (0, _.Z)({ forceFetch: !0 }),
        s = (0, b.vc)(a.endsAt, 'L'),
        l = i.useCallback(() => {
            (0, g.$)(n);
        }, [n]);
    return a.fractionalState === C.a$.NONE
        ? (0, r.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: P.nitroHeaderContainer,
                      children: [
                          (0, r.jsx)('div', { className: P.nitroHeaderClouds }),
                          (0, r.jsx)(v.Z, { className: P.nitroHeaderWordmark }),
                          (0, r.jsx)(c.Eep, {
                              src: D,
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
                              premiumType: C.p9.TIER_2,
                              type: E.C.Types.PREMIUM_ACTIVATED,
                              theme: o
                          }),
                          (0, r.jsx)(c.Text, {
                              variant: 'text-sm/normal',
                              className: P.text,
                              children: R.NW.format(R.t['jzW5/P'], {
                                  helpCenterLink: O.Z.getArticleURL(N.BhN.NITRO),
                                  duration: t,
                                  date: s
                              })
                          }),
                          (0, r.jsx)(c.zxk, {
                              className: P.cta,
                              onClick: l,
                              children: R.NW.string(R.t['eQX+go'])
                          })
                      ]
                  })
              ]
          });
}
function j(e) {
    let { duration: t, onClose: n } = e,
        o = i.useCallback(() => {
            u.Z.open(N.oAB.SUBSCRIPTIONS, null, {}), n();
        }, [n]);
    return (0, r.jsx)(c.f6W, {
        theme: N.BRd.DARK,
        children: (e) =>
            (0, r.jsxs)('div', {
                className: a()(P.claimedRootContainer, e),
                children: [
                    (0, r.jsxs)('div', {
                        className: P.headerContainer,
                        children: [
                            (0, r.jsx)('img', {
                                className: P.headerBackground,
                                src: w,
                                alt: R.NW.string(R.t['8SsCa2'])
                            }),
                            (0, r.jsx)(m.Z, { className: P.beta }),
                            (0, r.jsxs)('div', {
                                className: P.headerForeground,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: P.iconBackgroundFractional,
                                        children: (0, r.jsx)(c.SrA, {
                                            size: 'lg',
                                            className: P.iconFractional,
                                            color: h.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND
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
                        className: a()(P.footerContainer, P.gradient),
                        separator: !1,
                        children: [
                            (0, r.jsx)(c.X6q, {
                                variant: 'heading-lg/bold',
                                className: P.heading,
                                children: R.NW.string(R.t.dOQ9RU)
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                className: P.text,
                                children: R.NW.format(R.t.KnH4jo, {
                                    helpCenterLink: O.Z.getArticleURL(N.BhN.NITRO),
                                    duration: t
                                })
                            }),
                            (0, r.jsx)(c.zxk, {
                                className: P.cta2,
                                onClick: o,
                                children: R.NW.string(R.t.LnsQGR)
                            })
                        ]
                    })
                ]
            })
    });
}
function U(e) {
    let { quest: t, location: n, onClose: o, transitionState: a } = e,
        s = (0, d.Z)(() => {
            var e;
            return (null === (e = t.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null;
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
