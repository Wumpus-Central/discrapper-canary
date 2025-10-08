r.d(t, { default: () => E }), r(388685);
var n = r(951288),
    a = r(647438),
    i = r(120356),
    s = r.n(i),
    o = r(238651),
    l = r(442837),
    c = r(481060),
    d = r(211266),
    m = r(410030),
    u = r(607070),
    C = r(975298),
    x = r(530618),
    _ = r(688465),
    h = r(98278),
    g = r(741245),
    p = r(313789),
    N = r(518596),
    j = r(931331),
    f = r(55935),
    v = r(63063),
    k = r(272008),
    R = r(497505),
    T = r(502288),
    H = r(981631),
    A = r(675654),
    I = r(474936),
    S = r(388032),
    P = r(77397),
    B = r(851750),
    L = r(946790),
    M = r(593639);
function b(e) {
    var t, r, i, d, m;
    let { transitionState: C, onClose: _, quest: h, location: g } = e,
        p = a.useRef(null),
        [N, j] = a.useState(null),
        f = a.useRef(new o.qA()),
        v = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        H = (null == (t = h.userStatus) ? void 0 : t.claimedAt) != null,
        [I, S] = a.useState({ state: "loading" });
    a.useEffect(() => {
        H ||
            (0, k.QB)(h.id, R.y$.CROSS_PLATFORM, g)
                .then((e) => {
                    if ((null == e ? void 0 : e.claimedAt) != null)
                        return void S({
                            state: "claimed",
                            entitlements: e,
                        });
                    S({
                        state: "error",
                        errorReason: 0,
                    });
                })
                .catch(() => {
                    S({
                        state: "error",
                        errorReason: 0,
                    });
                });
    }, [h, g, H]);
    let B = "loading" === I.state,
        L = !v && !H && "claimed" === I.state,
        M = "claimed" === I.state && null != I.entitlements && I.entitlements.items.some((e) => e.consumed);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(o.O_, {
                ref: j,
                className: P.confettiCanvas,
                environment: f.current,
            }),
            (0, n.jsx)("div", {
                ref: p,
                children: (0, n.jsx)(c.Y0X, {
                    "data-migration-pending": !0,
                    transitionState: C,
                    size: c.CgR.DYNAMIC,
                    className: s()(P.rootContainer, { [P.rootContainerLoading]: B }),
                    hideShadow: !0,
                    parentComponent: "QuestsNitroRewardModal",
                    children: B
                        ? (0, n.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE })
                        : "error" === I.state
                          ? (0, n.jsx)(w, {
                                errorReason: I.errorReason,
                                onClose: _,
                            })
                          : M
                            ? (0, n.jsx)(y, {
                                  duration: (0, T.kb)(
                                      null != (d = null == (r = I.entitlements) ? void 0 : r.items) ? d : [],
                                  ),
                                  onClose: _,
                              })
                            : (0, n.jsx)(F, {
                                  duration: (0, T.kb)(
                                      null != (m = null == (i = I.entitlements) ? void 0 : i.items) ? m : [],
                                  ),
                                  onClose: _,
                              }),
                }),
            }),
            L &&
                (0, n.jsx)(x.Z, {
                    confettiTarget: p.current,
                    confettiCanvas: N,
                    sprites: A.CA,
                    colors: A.Br,
                }),
        ],
    });
}
function w(e) {
    let { onClose: t } = e,
        r = S.intl.string(S.t.PbaUtr);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(c.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: P.errorHeader,
                children: [
                    (0, n.jsx)(c.X6q, {
                        className: P.errorTitle,
                        variant: "heading-xl/medium",
                        children: S.intl.string(S.t["UleS9/"]),
                    }),
                    (0, n.jsx)(c.olH, {
                        "data-migration-pending": !0,
                        onClick: t,
                        className: P.errorModalCloseButton,
                    }),
                ],
            }),
            (0, n.jsx)(c.hzk, {
                "data-migration-pending": !0,
                className: P.errorContent,
                children: (0, n.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children: r,
                }),
            }),
            (0, n.jsx)(c.mzw, {
                "data-migration-pending": !0,
                className: P.errorModalFooter,
                children: (0, n.jsx)(c.zxk, {
                    variant: "primary",
                    text: S.intl.string(S.t.cpT0Cg),
                    onClick: t,
                }),
            }),
        ],
    });
}
function y(e) {
    let { duration: t, onClose: r } = e,
        { theme: i } = (0, c.TCT)(),
        s = (0, C.Z)({ forceFetch: !0 }),
        o = (0, f.vc)(s.endsAt, "L"),
        l = a.useCallback(() => {
            (0, h.$)(r);
        }, [r]);
    return s.fractionalState === I.a$.NONE
        ? (0, n.jsx)("div", {
              className: P.spinnerContainer,
              children: (0, n.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE }),
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsxs)("div", {
                      className: P.nitroHeaderContainer,
                      children: [
                          (0, n.jsx)("div", { className: P.nitroHeaderClouds }),
                          (0, n.jsx)(j.Z, { className: P.nitroHeaderWordmark }),
                          (0, n.jsx)(c.Eep, {
                              src: L,
                              width: 110,
                              height: 82,
                              zoomable: !1,
                              className: P.nitroHeaderWumpus,
                          }),
                          (0, n.jsx)(c.olH, {
                              "data-migration-pending": !0,
                              className: P.nitroHeaderClose,
                              onClick: r,
                          }),
                      ],
                  }),
                  (0, n.jsxs)(c.mzw, {
                      "data-migration-pending": !0,
                      className: P.footerContainer,
                      separator: !1,
                      children: [
                          (0, n.jsx)(_.Z, { className: P.beta }),
                          (0, n.jsx)(g.ZP, {
                              className: P.nitroHeading,
                              premiumType: I.PremiumTypes.TIER_2,
                              type: g.ZP.Types.PREMIUM_ACTIVATED,
                              theme: i,
                          }),
                          (0, n.jsx)(c.Text, {
                              variant: "text-md/normal",
                              className: P.text,
                              children: S.intl.format(S.t.tgc1oq, {
                                  helpCenterLink: v.Z.getArticleURL(H.BhN.FRACTIONAL_PREMIUM_ABOUT),
                                  duration: t,
                                  expirationDate: o,
                              }),
                          }),
                          (0, n.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: P.cta,
                              children: (0, n.jsx)(c.zxk, {
                                  variant: "primary",
                                  text: S.intl.string(S.t["eQX+go"]),
                                  onClick: l,
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function F(e) {
    let { duration: t, onClose: r } = e,
        i = (0, C.Z)({ forceFetch: !0 }),
        o = (0, m.ZP)(),
        l = a.useCallback(() => {
            (0, N.openUserSettings)(p.n.SUBSCRIPTIONS_PANEL, { section: H.oAB.SUBSCRIPTIONS }), r();
        }, [r]);
    if (!i.fetched)
        return (0, n.jsx)("div", {
            className: P.spinnerContainer,
            children: (0, n.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE }),
        });
    let d = i.isFractionalPremiumActive
        ? S.intl.string(S.t["1ku8i4"])
        : S.intl.format(S.t.fI1nLy, {
              helpCenterLink: v.Z.getArticleURL(H.BhN.FRACTIONAL_PREMIUM_ABOUT),
              duration: t,
          });
    return (0, n.jsx)(c.f6W, {
        theme: o,
        children: (e) =>
            (0, n.jsxs)("div", {
                className: s()(P.claimedRootContainer, e),
                children: [
                    (0, n.jsxs)("div", {
                        className: P.headerContainer,
                        children: [
                            (0, n.jsx)("img", {
                                className: P.headerBackground,
                                src: B,
                                alt: S.intl.string(S.t["8SsCa2"]),
                            }),
                            (0, n.jsx)(_.Z, { className: P.beta }),
                            (0, n.jsxs)("div", {
                                className: P.headerForeground,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: P.rewardAssetContainer,
                                        children: (0, n.jsx)("img", {
                                            src: M,
                                            alt: S.intl.string(S.t.OhPMam),
                                            height: 120,
                                        }),
                                    }),
                                    (0, n.jsx)(c.olH, {
                                        "data-migration-pending": !0,
                                        className: P.close,
                                        withCircleBackground: !0,
                                        onClick: r,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsxs)(c.mzw, {
                        "data-migration-pending": !0,
                        className: P.footerContainer,
                        separator: !1,
                        children: [
                            (0, n.jsx)(c.X6q, {
                                variant: "heading-lg/bold",
                                className: P.heading,
                                children: S.intl.string(S.t["+PHEo6"]),
                            }),
                            (0, n.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                className: P.text,
                                children: d,
                            }),
                            (0, n.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: P.cta2,
                                children: (0, n.jsx)(c.zxk, {
                                    variant: "primary",
                                    text: S.intl.string(S.t.LnsQGR),
                                    onClick: l,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
    });
}
function E(e) {
    let { quest: t, location: r, onClose: i, transitionState: s } = e,
        o = (0, d.Z)(() => {
            var e;
            return (null == (e = t.userStatus) ? void 0 : e.claimedAt) != null;
        });
    return (a.useEffect(() => {
        o && i();
    }, [i, o]),
    o)
        ? null
        : (0, n.jsx)(b, {
              onClose: i,
              transitionState: s,
              quest: t,
              location: r,
          });
}
