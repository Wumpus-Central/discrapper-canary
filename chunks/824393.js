r.d(t, { default: () => E }), r(47120);
var n = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    C = r(119617),
    i = r(442837),
    l = r(481060),
    c = r(230711),
    d = r(211266),
    u = r(607070),
    m = r(975298),
    x = r(530618),
    h = r(436774),
    _ = r(688465),
    j = r(98278),
    g = r(741245),
    H = r(931331),
    p = r(55935),
    N = r(70956),
    v = r(63063),
    L = r(74538),
    f = r(272008),
    M = r(497505),
    Z = r(981631),
    R = r(675654),
    k = r(474936),
    B = r(388032),
    V = r(83266),
    T = r(499018),
    S = r(946790);
function A(e) {
    var t;
    let { transitionState: r, onClose: o, quest: d, location: m } = e,
        h = a.useRef(null),
        [_, g] = a.useState(null),
        H = a.useRef(new C.qA()),
        p = (0, i.e7)([u.Z], () => u.Z.useReducedMotion),
        N = (null === (t = d.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        [v, L] = a.useState({ state: 'loading' }),
        k = a.useCallback(() => {
            c.Z.open(Z.oAB.SUBSCRIPTIONS, null, {}), o();
        }, [o]),
        B = a.useCallback(() => {
            (0, j.$)(o);
        }, [o]);
    a.useEffect(() => {
        N ||
            (0, f.QB)(d.id, M.y$.CROSS_PLATFORM, m)
                .then((e) => {
                    if ((null == e ? void 0 : e.claimedAt) != null) {
                        L({
                            state: 'claimed',
                            entitlements: e
                        });
                        return;
                    }
                    L({
                        state: 'error',
                        errorReason: 0
                    });
                })
                .catch(() => {
                    L({
                        state: 'error',
                        errorReason: 0
                    });
                });
    }, [d, m, N]);
    let T = 'loading' === v.state,
        S = !p && !N && 'claimed' === v.state,
        A = 'claimed' === v.state && null != v.entitlements && v.entitlements.items.some((e) => e.consumed);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(C.O_, {
                ref: g,
                className: V.confettiCanvas,
                environment: H.current
            }),
            (0, n.jsx)('div', {
                ref: h,
                children: (0, n.jsx)(l.Y0X, {
                    transitionState: r,
                    size: l.CgR.DYNAMIC,
                    className: s()(V.rootContainer, { [V.rootContainerLoading]: T }),
                    hideShadow: !0,
                    children: T
                        ? (0, n.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE })
                        : 'error' === v.state
                          ? (0, n.jsx)(I, {
                                errorReason: v.errorReason,
                                onClose: o
                            })
                          : A
                            ? (0, n.jsx)(b, {
                                  entitlements: v.entitlements,
                                  onClose: o,
                                  onLearnMore: B
                              })
                            : (0, n.jsx)(z, {
                                  entitlements: v.entitlements,
                                  onClose: o,
                                  onLearnMore: k
                              })
                })
            }),
            S &&
                (0, n.jsx)(x.Z, {
                    confettiTarget: h.current,
                    confettiCanvas: _,
                    sprites: R.CA,
                    colors: R.Br
                })
        ]
    });
}
function I(e) {
    let { onClose: t } = e,
        r = B.intl.string(B.t.PbaUtr);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.xBx, {
                separator: !1,
                className: V.errorHeader,
                children: [
                    (0, n.jsx)(l.X6q, {
                        className: V.errorTitle,
                        variant: 'heading-xl/medium',
                        children: B.intl.string(B.t['UleS9/'])
                    }),
                    (0, n.jsx)(l.olH, {
                        onClick: t,
                        className: V.errorModalCloseButton
                    })
                ]
            }),
            (0, n.jsx)(l.hzk, {
                className: V.errorContent,
                children: (0, n.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    children: r
                })
            }),
            (0, n.jsx)(l.mzw, {
                className: V.errorModalFooter,
                children: (0, n.jsx)(l.zxk, {
                    color: l.zxk.Colors.BRAND,
                    size: l.zxk.Sizes.MEDIUM,
                    onClick: t,
                    children: B.intl.string(B.t.cpT0Cg)
                })
            })
        ]
    });
}
function F(e) {
    let t = (0, L.xG)(e.map((e) => e.skuId)),
        r = {
            days: B.t.fYmir6,
            hours: B.t['C3RO+v'],
            minutes: B.t.r77oHR
        },
        n = (0, p.TD)(0, t * N.Z.Millis.HOUR);
    return (0, p.QX)(n, r);
}
function b(e) {
    var t;
    let { entitlements: r, onClose: a, onLearnMore: o } = e,
        { theme: s } = (0, l.TCT)(),
        C = F(null !== (t = null == r ? void 0 : r.items) && void 0 !== t ? t : []),
        i = (0, m.Z)({ forceFetch: !0 }),
        c = (0, p.vc)(i.endsAt, 'L');
    return i.fractionalState === k.a$.NONE
        ? (0, n.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsxs)('div', {
                      className: V.nitroHeaderContainer,
                      children: [
                          (0, n.jsx)('div', { className: V.nitroHeaderClouds }),
                          (0, n.jsx)(H.Z, { className: V.nitroHeaderWordmark }),
                          (0, n.jsx)(l.Eep, {
                              src: S,
                              width: 110,
                              height: 82,
                              zoomable: !1,
                              className: V.nitroHeaderWumpus
                          }),
                          (0, n.jsx)(l.olH, {
                              className: V.nitroHeaderClose,
                              onClick: a
                          })
                      ]
                  }),
                  (0, n.jsxs)(l.mzw, {
                      className: V.footerContainer,
                      separator: !1,
                      children: [
                          (0, n.jsx)(_.Z, { className: V.beta }),
                          (0, n.jsx)(g.C, {
                              className: V.nitroHeading,
                              premiumType: k.p9.TIER_2,
                              type: g.C.Types.PREMIUM_ACTIVATED,
                              theme: s
                          }),
                          (0, n.jsx)(l.Text, {
                              variant: 'text-sm/normal',
                              className: V.text,
                              children: B.intl.format(B.t['jzW5/P'], {
                                  helpCenterLink: v.Z.getArticleURL(Z.BhN.NITRO),
                                  duration: C,
                                  date: c
                              })
                          }),
                          (0, n.jsx)(l.zxk, {
                              className: V.cta,
                              onClick: o,
                              children: B.intl.string(B.t['eQX+go'])
                          })
                      ]
                  })
              ]
          });
}
function z(e) {
    var t;
    let { entitlements: r, onClose: a, onLearnMore: o } = e,
        C = F(null !== (t = null == r ? void 0 : r.items) && void 0 !== t ? t : []);
    return (0, n.jsx)(l.f6W, {
        theme: Z.BRd.DARK,
        children: (e) =>
            (0, n.jsxs)('div', {
                className: s()(V.claimedRootContainer, e),
                children: [
                    (0, n.jsxs)('div', {
                        className: V.headerContainer,
                        children: [
                            (0, n.jsx)('img', {
                                className: V.headerBackground,
                                src: T,
                                alt: B.intl.string(B.t['8SsCa2'])
                            }),
                            (0, n.jsx)(_.Z, { className: V.beta }),
                            (0, n.jsxs)('div', {
                                className: V.headerForeground,
                                children: [
                                    (0, n.jsx)('div', {
                                        className: V.iconBackgroundFractional,
                                        children: (0, n.jsx)(l.SrA, {
                                            size: 'lg',
                                            className: V.iconFractional,
                                            color: h.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND
                                        })
                                    }),
                                    (0, n.jsx)(l.olH, {
                                        className: V.close,
                                        withCircleBackground: !0,
                                        onClick: a
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, n.jsxs)(l.mzw, {
                        className: s()(V.footerContainer, V.gradient),
                        separator: !1,
                        children: [
                            (0, n.jsx)(l.X6q, {
                                variant: 'heading-lg/bold',
                                className: V.heading,
                                children: B.intl.string(B.t.dOQ9RU)
                            }),
                            (0, n.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                className: V.text,
                                children: B.intl.format(B.t.KnH4jo, {
                                    helpCenterLink: v.Z.getArticleURL(Z.BhN.NITRO),
                                    duration: C
                                })
                            }),
                            (0, n.jsx)(l.zxk, {
                                className: V.cta2,
                                onClick: o,
                                children: B.intl.string(B.t.LnsQGR)
                            })
                        ]
                    })
                ]
            })
    });
}
function E(e) {
    let { quest: t, location: r, onClose: o, transitionState: s } = e,
        C = (0, d.Z)(() => {
            var e;
            return (null === (e = t.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null;
        });
    return (a.useEffect(() => {
        C && o();
    }, [o, C]),
    C)
        ? null
        : (0, n.jsx)(A, {
              onClose: o,
              transitionState: s,
              quest: t,
              location: r
          });
}
