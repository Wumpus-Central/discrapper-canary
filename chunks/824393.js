(r.d(t, { default: () => V }), r(388685));
var n = r(255367),
    a = r(73800),
    o = r(120356),
    s = r.n(o),
    i = r(505266),
    C = r(442837),
    l = r(481060),
    c = r(230711),
    d = r(211266),
    u = r(410030),
    m = r(607070),
    h = r(975298),
    x = r(530618),
    p = r(688465),
    j = r(98278),
    _ = r(741245),
    f = r(931331),
    g = r(55935),
    v = r(63063),
    N = r(272008),
    H = r(497505),
    b = r(502288),
    L = r(981631),
    y = r(675654),
    O = r(474936),
    M = r(388032),
    Z = r(639220),
    k = r(851750),
    w = r(946790),
    P = r(593639);
function R(e) {
    var t, r, o, c, d;
    let { transitionState: u, onClose: h, quest: p, location: j } = e,
        _ = a.useRef(null),
        [f, g] = a.useState(null),
        v = a.useRef(new i.qA()),
        L = (0, C.e7)([m.Z], () => m.Z.useReducedMotion),
        O = (null == (t = p.userStatus) ? void 0 : t.claimedAt) != null,
        [M, k] = a.useState({ state: 'loading' });
    a.useEffect(() => {
        O ||
            (0, N.QB)(p.id, H.y$.CROSS_PLATFORM, j)
                .then((e) => {
                    if ((null == e ? void 0 : e.claimedAt) != null)
                        return void k({
                            state: 'claimed',
                            entitlements: e
                        });
                    k({
                        state: 'error',
                        errorReason: 0
                    });
                })
                .catch(() => {
                    k({
                        state: 'error',
                        errorReason: 0
                    });
                });
    }, [p, j, O]);
    let w = 'loading' === M.state,
        P = !L && !O && 'claimed' === M.state,
        R = 'claimed' === M.state && null != M.entitlements && M.entitlements.items.some((e) => e.consumed);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.O_, {
                ref: g,
                className: Z.confettiCanvas,
                environment: v.current
            }),
            (0, n.jsx)('div', {
                ref: _,
                children: (0, n.jsx)(l.Y0X, {
                    transitionState: u,
                    size: l.CgR.DYNAMIC,
                    className: s()(Z.rootContainer, { [Z.rootContainerLoading]: w }),
                    hideShadow: !0,
                    parentComponent: 'QuestsNitroRewardModal',
                    children: w
                        ? (0, n.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE })
                        : 'error' === M.state
                          ? (0, n.jsx)(S, {
                                errorReason: M.errorReason,
                                onClose: h
                            })
                          : R
                            ? (0, n.jsx)(T, {
                                  duration: (0, b.kb)(null != (c = null == (r = M.entitlements) ? void 0 : r.items) ? c : []),
                                  onClose: h
                              })
                            : (0, n.jsx)(A, {
                                  duration: (0, b.kb)(null != (d = null == (o = M.entitlements) ? void 0 : o.items) ? d : []),
                                  onClose: h
                              })
                })
            }),
            P &&
                (0, n.jsx)(x.Z, {
                    confettiTarget: _.current,
                    confettiCanvas: f,
                    sprites: y.CA,
                    colors: y.Br
                })
        ]
    });
}
function S(e) {
    let { onClose: t } = e,
        r = M.intl.string(M.t.PbaUtr);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.xBx, {
                separator: !1,
                className: Z.errorHeader,
                children: [
                    (0, n.jsx)(l.X6q, {
                        className: Z.errorTitle,
                        variant: 'heading-xl/medium',
                        children: M.intl.string(M.t['UleS9/'])
                    }),
                    (0, n.jsx)(l.olH, {
                        onClick: t,
                        className: Z.errorModalCloseButton
                    })
                ]
            }),
            (0, n.jsx)(l.hzk, {
                className: Z.errorContent,
                children: (0, n.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    children: r
                })
            }),
            (0, n.jsx)(l.mzw, {
                className: Z.errorModalFooter,
                children: (0, n.jsx)(l.zxk, {
                    variant: 'primary',
                    text: M.intl.string(M.t.cpT0Cg),
                    onClick: t
                })
            })
        ]
    });
}
function T(e) {
    let { duration: t, onClose: r } = e,
        { theme: o } = (0, l.TCT)(),
        s = (0, h.Z)({ forceFetch: !0 }),
        i = (0, g.vc)(s.endsAt, 'L'),
        C = a.useCallback(() => {
            (0, j.$)(r);
        }, [r]);
    return s.fractionalState === O.a$.NONE
        ? (0, n.jsx)('div', {
              className: Z.spinnerContainer,
              children: (0, n.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE })
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsxs)('div', {
                      className: Z.nitroHeaderContainer,
                      children: [
                          (0, n.jsx)('div', { className: Z.nitroHeaderClouds }),
                          (0, n.jsx)(f.Z, { className: Z.nitroHeaderWordmark }),
                          (0, n.jsx)(l.Eep, {
                              src: w,
                              width: 110,
                              height: 82,
                              zoomable: !1,
                              className: Z.nitroHeaderWumpus
                          }),
                          (0, n.jsx)(l.olH, {
                              className: Z.nitroHeaderClose,
                              onClick: r
                          })
                      ]
                  }),
                  (0, n.jsxs)(l.mzw, {
                      className: Z.footerContainer,
                      separator: !1,
                      children: [
                          (0, n.jsx)(p.Z, { className: Z.beta }),
                          (0, n.jsx)(_.ZP, {
                              className: Z.nitroHeading,
                              premiumType: O.p9.TIER_2,
                              type: _.ZP.Types.PREMIUM_ACTIVATED,
                              theme: o
                          }),
                          (0, n.jsx)(l.Text, {
                              variant: 'text-md/normal',
                              className: Z.text,
                              children: M.intl.format(M.t.tgc1oq, {
                                  helpCenterLink: v.Z.getArticleURL(L.BhN.FRACTIONAL_PREMIUM_ABOUT),
                                  duration: t,
                                  expirationDate: i
                              })
                          }),
                          (0, n.jsx)('div', {
                              'data-button-hoisted-classname-wrapper': !0,
                              className: Z.cta,
                              children: (0, n.jsx)(l.zxk, {
                                  variant: 'primary',
                                  text: M.intl.string(M.t['eQX+go']),
                                  onClick: C
                              })
                          })
                      ]
                  })
              ]
          });
}
function A(e) {
    let { duration: t, onClose: r } = e,
        o = (0, h.Z)({ forceFetch: !0 }),
        i = (0, u.ZP)(),
        C = a.useCallback(() => {
            (c.Z.open(L.oAB.SUBSCRIPTIONS, null, {}), r());
        }, [r]);
    if (!o.fetched)
        return (0, n.jsx)('div', {
            className: Z.spinnerContainer,
            children: (0, n.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE })
        });
    let d = o.isFractionalPremiumActive
        ? M.intl.string(M.t['1ku8i4'])
        : M.intl.format(M.t.fI1nLy, {
              helpCenterLink: v.Z.getArticleURL(L.BhN.FRACTIONAL_PREMIUM_ABOUT),
              duration: t
          });
    return (0, n.jsx)(l.f6W, {
        theme: i,
        children: (e) =>
            (0, n.jsxs)('div', {
                className: s()(Z.claimedRootContainer, e),
                children: [
                    (0, n.jsxs)('div', {
                        className: Z.headerContainer,
                        children: [
                            (0, n.jsx)('img', {
                                className: Z.headerBackground,
                                src: k,
                                alt: M.intl.string(M.t['8SsCa2'])
                            }),
                            (0, n.jsx)(p.Z, { className: Z.beta }),
                            (0, n.jsxs)('div', {
                                className: Z.headerForeground,
                                children: [
                                    (0, n.jsx)('div', {
                                        className: Z.rewardAssetContainer,
                                        children: (0, n.jsx)('img', {
                                            src: P,
                                            alt: M.intl.string(M.t.OhPMam),
                                            height: 120
                                        })
                                    }),
                                    (0, n.jsx)(l.olH, {
                                        className: Z.close,
                                        withCircleBackground: !0,
                                        onClick: r
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, n.jsxs)(l.mzw, {
                        className: Z.footerContainer,
                        separator: !1,
                        children: [
                            (0, n.jsx)(l.X6q, {
                                variant: 'heading-lg/bold',
                                className: Z.heading,
                                children: M.intl.string(M.t['+PHEo6'])
                            }),
                            (0, n.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                className: Z.text,
                                children: d
                            }),
                            (0, n.jsx)('div', {
                                'data-button-hoisted-classname-wrapper': !0,
                                className: Z.cta2,
                                children: (0, n.jsx)(l.zxk, {
                                    variant: 'primary',
                                    text: M.intl.string(M.t.LnsQGR),
                                    onClick: C
                                })
                            })
                        ]
                    })
                ]
            })
    });
}
function V(e) {
    let { quest: t, location: r, onClose: o, transitionState: s } = e,
        i = (0, d.Z)(() => {
            var e;
            return (null == (e = t.userStatus) ? void 0 : e.claimedAt) != null;
        });
    return (a.useEffect(() => {
        i && o();
    }, [o, i]),
    i)
        ? null
        : (0, n.jsx)(R, {
              onClose: o,
              transitionState: s,
              quest: t,
              location: r
          });
}
