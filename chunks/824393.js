n.r(t),
    n.d(t, {
        default: function () {
            return E;
        }
    }),
    n(47120);
var r,
    a,
    o = n(200651),
    s = n(192379),
    C = n(120356),
    i = n.n(C),
    d = n(119617),
    l = n(442837),
    c = n(481060),
    u = n(230711),
    m = n(211266),
    h = n(607070),
    x = n(975298),
    j = n(530618),
    g = n(436774),
    p = n(688465),
    H = n(98278),
    f = n(741245),
    M = n(931331),
    N = n(55935),
    v = n(70956),
    _ = n(63063),
    L = n(74538),
    Z = n(272008),
    R = n(497505),
    B = n(981631),
    k = n(675654),
    S = n(474936),
    V = n(388032),
    T = n(83266),
    F = n(499018),
    I = n(946790);
function A(e) {
    var t;
    let { transitionState: n, onClose: r, quest: a, location: C } = e,
        m = s.useRef(null),
        [x, g] = s.useState(null),
        p = s.useRef(new d.qA()),
        f = (0, l.e7)([h.Z], () => h.Z.useReducedMotion),
        M = (null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        [N, v] = s.useState({ state: 'loading' }),
        _ = s.useCallback(() => {
            u.Z.open(B.oAB.SUBSCRIPTIONS, null, {}), r();
        }, [r]),
        L = s.useCallback(() => {
            (0, H.$)(r);
        }, [r]);
    s.useEffect(() => {
        !M &&
            (0, Z.QB)(a.id, R.y$.CROSS_PLATFORM, C)
                .then((e) => {
                    if ((null == e ? void 0 : e.claimedAt) != null) {
                        v({
                            state: 'claimed',
                            entitlements: e
                        });
                        return;
                    }
                    v({
                        state: 'error',
                        errorReason: 0
                    });
                })
                .catch(() => {
                    v({
                        state: 'error',
                        errorReason: 0
                    });
                });
    }, [a, C, M]);
    let S = 'loading' === N.state,
        V = !f && !M && 'claimed' === N.state,
        F = 'claimed' === N.state && null != N.entitlements && N.entitlements.items.some((e) => e.consumed);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(d.O_, {
                ref: g,
                className: T.confettiCanvas,
                environment: p.current
            }),
            (0, o.jsx)('div', {
                ref: m,
                children: (0, o.jsx)(c.ModalRoot, {
                    transitionState: n,
                    size: c.ModalSize.DYNAMIC,
                    className: i()(T.rootContainer, { [T.rootContainerLoading]: S }),
                    hideShadow: !0,
                    children: S
                        ? (0, o.jsx)(c.Spinner, { type: c.Spinner.Type.SPINNING_CIRCLE })
                        : 'error' === N.state
                          ? (0, o.jsx)(b, {
                                errorReason: N.errorReason,
                                onClose: r
                            })
                          : F
                            ? (0, o.jsx)(U, {
                                  entitlements: N.entitlements,
                                  onClose: r,
                                  onLearnMore: L
                              })
                            : (0, o.jsx)(y, {
                                  entitlements: N.entitlements,
                                  onClose: r,
                                  onLearnMore: _
                              })
                })
            }),
            V &&
                (0, o.jsx)(j.Z, {
                    confettiTarget: m.current,
                    confettiCanvas: x,
                    sprites: k.CA,
                    colors: k.Br
                })
        ]
    });
}
function b(e) {
    let { onClose: t } = e,
        n = V.intl.string(V.t.PbaUtr);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)(c.ModalHeader, {
                separator: !1,
                className: T.errorHeader,
                children: [
                    (0, o.jsx)(c.Heading, {
                        className: T.errorTitle,
                        variant: 'heading-xl/medium',
                        children: V.intl.string(V.t['UleS9/'])
                    }),
                    (0, o.jsx)(c.ModalCloseButton, {
                        onClick: t,
                        className: T.errorModalCloseButton
                    })
                ]
            }),
            (0, o.jsx)(c.ModalContent, {
                className: T.errorContent,
                children: (0, o.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children: n
                })
            }),
            (0, o.jsx)(c.ModalFooter, {
                className: T.errorModalFooter,
                children: (0, o.jsx)(c.Button, {
                    color: c.Button.Colors.BRAND,
                    size: c.Button.Sizes.MEDIUM,
                    onClick: t,
                    children: V.intl.string(V.t.cpT0Cg)
                })
            })
        ]
    });
}
function O(e) {
    let t = (0, L.xG)(e.map((e) => e.skuId)),
        n = {
            days: V.t.fYmir6,
            hours: V.t['C3RO+v'],
            minutes: V.t.r77oHR
        },
        r = (0, N.TD)(0, t * v.Z.Millis.HOUR);
    return (0, N.QX)(r, n);
}
function U(e) {
    var t;
    let { entitlements: n, onClose: r, onLearnMore: a } = e,
        { theme: s } = (0, c.useThemeContext)(),
        C = O(null !== (t = null == n ? void 0 : n.items) && void 0 !== t ? t : []),
        i = (0, x.Z)({ forceFetch: !0 }),
        d = (0, N.vc)(i.endsAt, 'L');
    return i.fractionalState === S.a$.NONE
        ? (0, o.jsx)(c.Spinner, { type: c.Spinner.Type.SPINNING_CIRCLE })
        : (0, o.jsxs)(o.Fragment, {
              children: [
                  (0, o.jsxs)('div', {
                      className: T.nitroHeaderContainer,
                      children: [
                          (0, o.jsx)('div', { className: T.nitroHeaderClouds }),
                          (0, o.jsx)(M.Z, { className: T.nitroHeaderWordmark }),
                          (0, o.jsx)(c.Image, {
                              src: I,
                              width: 110,
                              height: 82,
                              zoomable: !1,
                              className: T.nitroHeaderWumpus
                          }),
                          (0, o.jsx)(c.ModalCloseButton, {
                              className: T.nitroHeaderClose,
                              onClick: r
                          })
                      ]
                  }),
                  (0, o.jsxs)(c.ModalFooter, {
                      className: T.footerContainer,
                      separator: !1,
                      children: [
                          (0, o.jsx)(p.Z, { className: T.beta }),
                          (0, o.jsx)(f.C, {
                              className: T.nitroHeading,
                              premiumType: S.p9.TIER_2,
                              type: f.C.Types.PREMIUM_ACTIVATED,
                              theme: s
                          }),
                          (0, o.jsx)(c.Text, {
                              variant: 'text-sm/normal',
                              className: T.text,
                              children: V.intl.format(V.t['jzW5/P'], {
                                  helpCenterLink: _.Z.getArticleURL(B.BhN.NITRO),
                                  duration: C,
                                  date: d
                              })
                          }),
                          (0, o.jsx)(c.Button, {
                              className: T.cta,
                              onClick: a,
                              children: V.intl.string(V.t['eQX+go'])
                          })
                      ]
                  })
              ]
          });
}
function y(e) {
    var t;
    let { entitlements: n, onClose: r, onLearnMore: a } = e,
        s = O(null !== (t = null == n ? void 0 : n.items) && void 0 !== t ? t : []);
    return (0, o.jsx)(c.ThemeProvider, {
        theme: B.BRd.DARK,
        children: (e) =>
            (0, o.jsxs)('div', {
                className: i()(T.claimedRootContainer, e),
                children: [
                    (0, o.jsxs)('div', {
                        className: T.headerContainer,
                        children: [
                            (0, o.jsx)('img', {
                                className: T.headerBackground,
                                src: F,
                                alt: V.intl.string(V.t['8SsCa2'])
                            }),
                            (0, o.jsx)(p.Z, { className: T.beta }),
                            (0, o.jsxs)('div', {
                                className: T.headerForeground,
                                children: [
                                    (0, o.jsx)('div', {
                                        className: T.iconBackgroundFractional,
                                        children: (0, o.jsx)(c.NitroWheelIcon, {
                                            size: 'lg',
                                            className: T.iconFractional,
                                            color: g.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND
                                        })
                                    }),
                                    (0, o.jsx)(c.ModalCloseButton, {
                                        className: T.close,
                                        withCircleBackground: !0,
                                        onClick: r
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, o.jsxs)(c.ModalFooter, {
                        className: i()(T.footerContainer, T.gradient),
                        separator: !1,
                        children: [
                            (0, o.jsx)(c.Heading, {
                                variant: 'heading-lg/bold',
                                className: T.heading,
                                children: V.intl.string(V.t.dOQ9RU)
                            }),
                            (0, o.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                className: T.text,
                                children: V.intl.format(V.t.KnH4jo, {
                                    helpCenterLink: _.Z.getArticleURL(B.BhN.NITRO),
                                    duration: s
                                })
                            }),
                            (0, o.jsx)(c.Button, {
                                className: T.cta2,
                                onClick: a,
                                children: V.intl.string(V.t.LnsQGR)
                            })
                        ]
                    })
                ]
            })
    });
}
function E(e) {
    let { quest: t, location: n, onClose: r, transitionState: a } = e,
        C = (0, m.Z)(() => {
            var e;
            return (null === (e = t.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null;
        });
    return (s.useEffect(() => {
        C && r();
    }, [r, C]),
    C)
        ? null
        : (0, o.jsx)(A, {
              onClose: r,
              transitionState: a,
              quest: t,
              location: n
          });
}
(a = r || (r = {}))[(a.Other = 0)] = 'Other';
