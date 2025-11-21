r.d(t, { default: () => y }), r(388685);
var n = r(54381),
    a = r(473749),
    i = r(120356),
    o = r.n(i),
    s = r(921254),
    d = r(442837),
    l = r(481060),
    c = r(211266),
    m = r(410030),
    u = r(607070),
    C = r(975298),
    h = r(530618),
    x = r(688465),
    g = r(98278),
    f = r(741245),
    p = r(313789),
    N = r(518596),
    j = r(931331),
    b = r(55935),
    _ = r(63063),
    v = r(22095),
    H = r(49436),
    R = r(502288),
    T = r(981631),
    k = r(675654),
    A = r(474936),
    I = r(388032),
    S = r(46662),
    B = r(851750),
    P = r(946790),
    L = r(593639);
function M(e) {
    var t, r, i, c, m;
    let { transitionState: C, onClose: x, quest: g, location: f } = e,
        p = a.useRef(null),
        [N, j] = a.useState(null),
        b = a.useRef(new s.qA()),
        _ = (0, d.e7)([u.Z], () => u.Z.useReducedMotion),
        T = (null == (t = g.userStatus) ? void 0 : t.claimedAt) != null,
        [A, I] = a.useState({ state: "loading" });
    a.useEffect(() => {
        T ||
            (0, v.QB)(g.id, H.y$.CROSS_PLATFORM, f)
                .then((e) => {
                    if ((null == e ? void 0 : e.claimedAt) != null)
                        return void I({
                            state: "claimed",
                            entitlements: e,
                        });
                    I({
                        state: "error",
                        errorReason: 0,
                    });
                })
                .catch(() => {
                    I({
                        state: "error",
                        errorReason: 0,
                    });
                });
    }, [g, f, T]);
    let B = "loading" === A.state,
        P = !_ && !T && "claimed" === A.state,
        L = "claimed" === A.state && null != A.entitlements && A.entitlements.items.some((e) => e.consumed);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(s.O_, {
                ref: j,
                className: S.confettiCanvas,
                environment: b.current,
            }),
            (0, n.jsx)("div", {
                ref: p,
                children: (0, n.jsx)(l.Y0X, {
                    "data-migration-pending": !0,
                    transitionState: C,
                    size: l.CgR.DYNAMIC,
                    className: o()(S.rootContainer, { [S.rootContainerLoading]: B }),
                    hideShadow: !0,
                    parentComponent: "QuestsNitroRewardModal",
                    children: B
                        ? (0, n.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE })
                        : "error" === A.state
                          ? (0, n.jsx)(w, {
                                errorReason: A.errorReason,
                                onClose: x,
                            })
                          : L
                            ? (0, n.jsx)(F, {
                                  duration: (0, R.kb)(
                                      null != (c = null == (r = A.entitlements) ? void 0 : r.items) ? c : [],
                                  ),
                                  onClose: x,
                              })
                            : (0, n.jsx)(Z, {
                                  duration: (0, R.kb)(
                                      null != (m = null == (i = A.entitlements) ? void 0 : i.items) ? m : [],
                                  ),
                                  onClose: x,
                              }),
                }),
            }),
            P &&
                (0, n.jsx)(h.Z, {
                    confettiTarget: p.current,
                    confettiCanvas: N,
                    sprites: k.CA,
                    colors: k.Br,
                }),
        ],
    });
}
function w(e) {
    let { onClose: t } = e,
        r = I.intl.string(I.t.PbaUtv);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: S.errorHeader,
                children: [
                    (0, n.jsx)(l.Heading, {
                        className: S.errorTitle,
                        variant: "heading-xl/medium",
                        children: I.intl.string(I.t.UleS91),
                    }),
                    (0, n.jsx)(l.olH, {
                        "data-migration-pending": !0,
                        onClick: t,
                        className: S.errorModalCloseButton,
                    }),
                ],
            }),
            (0, n.jsx)(l.hzk, {
                "data-migration-pending": !0,
                className: S.errorContent,
                children: (0, n.jsx)(l.Text, {
                    variant: "text-md/normal",
                    children: r,
                }),
            }),
            (0, n.jsx)(l.mzw, {
                "data-migration-pending": !0,
                className: S.errorModalFooter,
                children: (0, n.jsx)(l.Button, {
                    variant: "primary",
                    text: I.intl.string(I.t.cpT0Cq),
                    onClick: t,
                }),
            }),
        ],
    });
}
function F(e) {
    let { duration: t, onClose: r } = e,
        { theme: i } = (0, l.TCT)(),
        o = (0, C.Z)({ forceFetch: !0 }),
        s = (0, b.vc)(o.endsAt, "L"),
        d = a.useCallback(() => {
            (0, g.$)(r);
        }, [r]);
    return o.fractionalState === A.a$.NONE
        ? (0, n.jsx)("div", {
              className: S.spinnerContainer,
              children: (0, n.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE }),
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsxs)("div", {
                      className: S.nitroHeaderContainer,
                      children: [
                          (0, n.jsx)("div", { className: S.nitroHeaderClouds }),
                          (0, n.jsx)(j.Z, { className: S.nitroHeaderWordmark }),
                          (0, n.jsx)(l.Eep, {
                              src: P,
                              width: 110,
                              height: 82,
                              zoomable: !1,
                              className: S.nitroHeaderWumpus,
                          }),
                          (0, n.jsx)(l.olH, {
                              "data-migration-pending": !0,
                              className: S.nitroHeaderClose,
                              onClick: r,
                          }),
                      ],
                  }),
                  (0, n.jsxs)(l.mzw, {
                      "data-migration-pending": !0,
                      className: S.footerContainer,
                      separator: !1,
                      children: [
                          (0, n.jsx)(x.Z, { className: S.beta }),
                          (0, n.jsx)(f.ZP, {
                              className: S.nitroHeading,
                              premiumType: A.PremiumTypes.TIER_2,
                              type: f.ZP.Types.PREMIUM_ACTIVATED,
                              theme: i,
                          }),
                          (0, n.jsx)(l.Text, {
                              variant: "text-md/normal",
                              className: S.text,
                              children: I.intl.format(I.t.tgc1ol, {
                                  helpCenterLink: _.Z.getArticleURL(T.BhN.FRACTIONAL_PREMIUM_ABOUT),
                                  duration: t,
                                  expirationDate: s,
                              }),
                          }),
                          (0, n.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: S.cta,
                              children: (0, n.jsx)(l.Button, {
                                  variant: "primary",
                                  text: I.intl.string(I.t["eQX+gg"]),
                                  onClick: d,
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function Z(e) {
    let { duration: t, onClose: r } = e,
        i = (0, C.Z)({ forceFetch: !0 }),
        s = (0, m.ZP)(),
        d = a.useCallback(() => {
            (0, N.openUserSettings)(p.n.SUBSCRIPTIONS_PANEL, { section: T.oAB.SUBSCRIPTIONS }), r();
        }, [r]);
    if (!i.fetched)
        return (0, n.jsx)("div", {
            className: S.spinnerContainer,
            children: (0, n.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE }),
        });
    let c = i.isFractionalPremiumActive
        ? I.intl.string(I.t["1ku8i2"])
        : I.intl.format(I.t.fI1nL2, {
              helpCenterLink: _.Z.getArticleURL(T.BhN.FRACTIONAL_PREMIUM_ABOUT),
              duration: t,
          });
    return (0, n.jsx)(l.f6W, {
        theme: s,
        children: (e) =>
            (0, n.jsxs)("div", {
                className: o()(S.claimedRootContainer, e),
                children: [
                    (0, n.jsxs)("div", {
                        className: S.headerContainer,
                        children: [
                            (0, n.jsx)("img", {
                                className: S.headerBackground,
                                src: B,
                                alt: I.intl.string(I.t["8SsCa3"]),
                            }),
                            (0, n.jsx)(x.Z, { className: S.beta }),
                            (0, n.jsxs)("div", {
                                className: S.headerForeground,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: S.rewardAssetContainer,
                                        children: (0, n.jsx)("img", {
                                            src: L,
                                            alt: I.intl.string(I.t.OhPMaq),
                                            height: 120,
                                        }),
                                    }),
                                    (0, n.jsx)(l.olH, {
                                        "data-migration-pending": !0,
                                        className: S.close,
                                        withCircleBackground: !0,
                                        onClick: r,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsxs)(l.mzw, {
                        "data-migration-pending": !0,
                        className: S.footerContainer,
                        separator: !1,
                        children: [
                            (0, n.jsx)(l.Heading, {
                                variant: "heading-lg/bold",
                                className: S.heading,
                                children: I.intl.string(I.t["+PHEo+"]),
                            }),
                            (0, n.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                className: S.text,
                                children: c,
                            }),
                            (0, n.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: S.cta2,
                                children: (0, n.jsx)(l.Button, {
                                    variant: "primary",
                                    text: I.intl.string(I.t.LnsQGZ),
                                    onClick: d,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
    });
}
function y(e) {
    let { quest: t, location: r, onClose: i, transitionState: o } = e,
        s = (0, c.Z)(() => {
            var e;
            return (null == (e = t.userStatus) ? void 0 : e.claimedAt) != null;
        });
    return (a.useEffect(() => {
        s && i();
    }, [i, s]),
    s)
        ? null
        : (0, n.jsx)(M, {
              onClose: i,
              transitionState: o,
              quest: t,
              location: r,
          });
}
