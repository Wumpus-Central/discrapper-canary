r.d(t, { default: () => I }), r(47120);
var n = r(200651),
    o = r(192379),
    a = r(120356),
    s = r.n(a),
    i = r(119617),
    C = r(442837),
    c = r(481060),
    l = r(230711),
    d = r(211266),
    u = r(607070),
    m = r(975298),
    h = r(530618),
    x = r(436774),
    j = r(688465),
    _ = r(98278),
    p = r(741245),
    g = r(931331),
    f = r(55935),
    N = r(70956),
    v = r(63063),
    H = r(74538),
    b = r(272008),
    L = r(497505),
    O = r(981631),
    M = r(675654),
    y = r(474936),
    Z = r(388032),
    k = r(349885),
    R = r(499018),
    S = r(946790);
function B(e) {
    var t;
    let { transitionState: r, onClose: a, quest: d, location: m } = e,
        x = o.useRef(null),
        [j, p] = o.useState(null),
        g = o.useRef(new i.qA()),
        f = (0, C.e7)([u.Z], () => u.Z.useReducedMotion),
        N = (null === (t = d.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        [v, H] = o.useState({ state: 'loading' }),
        y = o.useCallback(() => {
            l.Z.open(O.oAB.SUBSCRIPTIONS, null, {}), a();
        }, [a]),
        Z = o.useCallback(() => {
            (0, _.$)(a);
        }, [a]);
    o.useEffect(() => {
        N ||
            (0, b.QB)(d.id, L.y$.CROSS_PLATFORM, m)
                .then((e) => {
                    if ((null == e ? void 0 : e.claimedAt) != null) {
                        H({
                            state: 'claimed',
                            entitlements: e
                        });
                        return;
                    }
                    H({
                        state: 'error',
                        errorReason: 0
                    });
                })
                .catch(() => {
                    H({
                        state: 'error',
                        errorReason: 0
                    });
                });
    }, [d, m, N]);
    let R = 'loading' === v.state,
        S = !f && !N && 'claimed' === v.state,
        B = 'claimed' === v.state && null != v.entitlements && v.entitlements.items.some((e) => e.consumed);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.O_, {
                ref: p,
                className: k.confettiCanvas,
                environment: g.current
            }),
            (0, n.jsx)('div', {
                ref: x,
                children: (0, n.jsx)(c.Y0X, {
                    transitionState: r,
                    size: c.CgR.DYNAMIC,
                    className: s()(k.rootContainer, { [k.rootContainerLoading]: R }),
                    hideShadow: !0,
                    children: R
                        ? (0, n.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE })
                        : 'error' === v.state
                          ? (0, n.jsx)(w, {
                                errorReason: v.errorReason,
                                onClose: a
                            })
                          : B
                            ? (0, n.jsx)(T, {
                                  entitlements: v.entitlements,
                                  onClose: a,
                                  onLearnMore: Z
                              })
                            : (0, n.jsx)(P, {
                                  entitlements: v.entitlements,
                                  onClose: a,
                                  onLearnMore: y
                              })
                })
            }),
            S &&
                (0, n.jsx)(h.Z, {
                    confettiTarget: x.current,
                    confettiCanvas: j,
                    sprites: M.CA,
                    colors: M.Br
                })
        ]
    });
}
function w(e) {
    let { onClose: t } = e,
        r = Z.NW.string(Z.t.PbaUtr);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(c.xBx, {
                separator: !1,
                className: k.errorHeader,
                children: [
                    (0, n.jsx)(c.X6q, {
                        className: k.errorTitle,
                        variant: 'heading-xl/medium',
                        children: Z.NW.string(Z.t['UleS9/'])
                    }),
                    (0, n.jsx)(c.olH, {
                        onClick: t,
                        className: k.errorModalCloseButton
                    })
                ]
            }),
            (0, n.jsx)(c.hzk, {
                className: k.errorContent,
                children: (0, n.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children: r
                })
            }),
            (0, n.jsx)(c.mzw, {
                className: k.errorModalFooter,
                children: (0, n.jsx)(c.zxk, {
                    color: c.zxk.Colors.BRAND,
                    size: c.zxk.Sizes.MEDIUM,
                    onClick: t,
                    children: Z.NW.string(Z.t.cpT0Cg)
                })
            })
        ]
    });
}
function V(e) {
    let t = (0, H.xG)(e.map((e) => e.skuId)),
        r = {
            days: Z.t.fYmir6,
            hours: Z.t['C3RO+v'],
            minutes: Z.t.r77oHR
        },
        n = (0, f.TD)(0, t * N.Z.Millis.HOUR);
    return (0, f.QX)(n, r);
}
function T(e) {
    var t;
    let { entitlements: r, onClose: o, onLearnMore: a } = e,
        { theme: s } = (0, c.TCT)(),
        i = V(null !== (t = null == r ? void 0 : r.items) && void 0 !== t ? t : []),
        C = (0, m.Z)({ forceFetch: !0 }),
        l = (0, f.vc)(C.endsAt, 'L');
    return C.fractionalState === y.a$.NONE
        ? (0, n.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsxs)('div', {
                      className: k.nitroHeaderContainer,
                      children: [
                          (0, n.jsx)('div', { className: k.nitroHeaderClouds }),
                          (0, n.jsx)(g.Z, { className: k.nitroHeaderWordmark }),
                          (0, n.jsx)(c.Eep, {
                              src: S,
                              width: 110,
                              height: 82,
                              zoomable: !1,
                              className: k.nitroHeaderWumpus
                          }),
                          (0, n.jsx)(c.olH, {
                              className: k.nitroHeaderClose,
                              onClick: o
                          })
                      ]
                  }),
                  (0, n.jsxs)(c.mzw, {
                      className: k.footerContainer,
                      separator: !1,
                      children: [
                          (0, n.jsx)(j.Z, { className: k.beta }),
                          (0, n.jsx)(p.C, {
                              className: k.nitroHeading,
                              premiumType: y.p9.TIER_2,
                              type: p.C.Types.PREMIUM_ACTIVATED,
                              theme: s
                          }),
                          (0, n.jsx)(c.Text, {
                              variant: 'text-sm/normal',
                              className: k.text,
                              children: Z.NW.format(Z.t['jzW5/P'], {
                                  helpCenterLink: v.Z.getArticleURL(O.BhN.NITRO),
                                  duration: i,
                                  date: l
                              })
                          }),
                          (0, n.jsx)(c.zxk, {
                              className: k.cta,
                              onClick: a,
                              children: Z.NW.string(Z.t['eQX+go'])
                          })
                      ]
                  })
              ]
          });
}
function P(e) {
    var t;
    let { entitlements: r, onClose: o, onLearnMore: a } = e,
        i = V(null !== (t = null == r ? void 0 : r.items) && void 0 !== t ? t : []);
    return (0, n.jsx)(c.f6W, {
        theme: O.BRd.DARK,
        children: (e) =>
            (0, n.jsxs)('div', {
                className: s()(k.claimedRootContainer, e),
                children: [
                    (0, n.jsxs)('div', {
                        className: k.headerContainer,
                        children: [
                            (0, n.jsx)('img', {
                                className: k.headerBackground,
                                src: R,
                                alt: Z.NW.string(Z.t['8SsCa2'])
                            }),
                            (0, n.jsx)(j.Z, { className: k.beta }),
                            (0, n.jsxs)('div', {
                                className: k.headerForeground,
                                children: [
                                    (0, n.jsx)('div', {
                                        className: k.iconBackgroundFractional,
                                        children: (0, n.jsx)(c.SrA, {
                                            size: 'lg',
                                            className: k.iconFractional,
                                            color: x.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND
                                        })
                                    }),
                                    (0, n.jsx)(c.olH, {
                                        className: k.close,
                                        withCircleBackground: !0,
                                        onClick: o
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, n.jsxs)(c.mzw, {
                        className: s()(k.footerContainer, k.gradient),
                        separator: !1,
                        children: [
                            (0, n.jsx)(c.X6q, {
                                variant: 'heading-lg/bold',
                                className: k.heading,
                                children: Z.NW.string(Z.t.dOQ9RU)
                            }),
                            (0, n.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                className: k.text,
                                children: Z.NW.format(Z.t.KnH4jo, {
                                    helpCenterLink: v.Z.getArticleURL(O.BhN.NITRO),
                                    duration: i
                                })
                            }),
                            (0, n.jsx)(c.zxk, {
                                className: k.cta2,
                                onClick: a,
                                children: Z.NW.string(Z.t.LnsQGR)
                            })
                        ]
                    })
                ]
            })
    });
}
function I(e) {
    let { quest: t, location: r, onClose: a, transitionState: s } = e,
        i = (0, d.Z)(() => {
            var e;
            return (null === (e = t.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null;
        });
    return (o.useEffect(() => {
        i && a();
    }, [a, i]),
    i)
        ? null
        : (0, n.jsx)(B, {
              onClose: a,
              transitionState: s,
              quest: t,
              location: r
          });
}
