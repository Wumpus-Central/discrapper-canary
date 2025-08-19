r.d(t, { default: () => V }), r(388685);
var n = r(951288),
    a = r(647438),
    o = r(120356),
    i = r.n(o),
    s = r(238651),
    C = r(442837),
    l = r(481060),
    c = r(230711),
    d = r(211266),
    u = r(410030),
    m = r(607070),
    p = r(975298),
    h = r(530618),
    x = r(688465),
    j = r(98278),
    g = r(741245),
    _ = r(931331),
    f = r(55935),
    v = r(63063),
    N = r(272008),
    H = r(497505),
    b = r(502288),
    L = r(981631),
    y = r(675654),
    O = r(474936),
    M = r(388032),
    Z = r(192975),
    k = r(851750),
    w = r(946790),
    P = r(593639);
function R(e) {
    var t, r, o, c, d;
    let { transitionState: u, onClose: p, quest: x, location: j } = e,
        g = a.useRef(null),
        [_, f] = a.useState(null),
        v = a.useRef(new s.qA()),
        L = (0, C.e7)([m.Z], () => m.Z.useReducedMotion),
        O = (null == (t = x.userStatus) ? void 0 : t.claimedAt) != null,
        [M, k] = a.useState({ state: "loading" });
    a.useEffect(() => {
        O ||
            (0, N.QB)(x.id, H.y$.CROSS_PLATFORM, j)
                .then((e) => {
                    if ((null == e ? void 0 : e.claimedAt) != null)
                        return void k({
                            state: "claimed",
                            entitlements: e,
                        });
                    k({
                        state: "error",
                        errorReason: 0,
                    });
                })
                .catch(() => {
                    k({
                        state: "error",
                        errorReason: 0,
                    });
                });
    }, [x, j, O]);
    let w = "loading" === M.state,
        P = !L && !O && "claimed" === M.state,
        R = "claimed" === M.state && null != M.entitlements && M.entitlements.items.some((e) => e.consumed);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(s.O_, {
                ref: f,
                className: Z.confettiCanvas,
                environment: v.current,
            }),
            (0, n.jsx)("div", {
                ref: g,
                children: (0, n.jsx)(l.Y0X, {
                    "data-migration-pending": !0,
                    transitionState: u,
                    size: l.CgR.DYNAMIC,
                    className: i()(Z.rootContainer, { [Z.rootContainerLoading]: w }),
                    hideShadow: !0,
                    parentComponent: "QuestsNitroRewardModal",
                    children: w
                        ? (0, n.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE })
                        : "error" === M.state
                          ? (0, n.jsx)(S, {
                                errorReason: M.errorReason,
                                onClose: p,
                            })
                          : R
                            ? (0, n.jsx)(T, {
                                  duration: (0, b.kb)(
                                      null != (c = null == (r = M.entitlements) ? void 0 : r.items) ? c : [],
                                  ),
                                  onClose: p,
                              })
                            : (0, n.jsx)(A, {
                                  duration: (0, b.kb)(
                                      null != (d = null == (o = M.entitlements) ? void 0 : o.items) ? d : [],
                                  ),
                                  onClose: p,
                              }),
                }),
            }),
            P &&
                (0, n.jsx)(h.Z, {
                    confettiTarget: g.current,
                    confettiCanvas: _,
                    sprites: y.CA,
                    colors: y.Br,
                }),
        ],
    });
}
function S(e) {
    let { onClose: t } = e,
        r = M.intl.string(M.t.PbaUtr);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: Z.errorHeader,
                children: [
                    (0, n.jsx)(l.X6q, {
                        className: Z.errorTitle,
                        variant: "heading-xl/medium",
                        children: M.intl.string(M.t["UleS9/"]),
                    }),
                    (0, n.jsx)(l.olH, {
                        "data-migration-pending": !0,
                        onClick: t,
                        className: Z.errorModalCloseButton,
                    }),
                ],
            }),
            (0, n.jsx)(l.hzk, {
                "data-migration-pending": !0,
                className: Z.errorContent,
                children: (0, n.jsx)(l.Text, {
                    variant: "text-md/normal",
                    children: r,
                }),
            }),
            (0, n.jsx)(l.mzw, {
                "data-migration-pending": !0,
                className: Z.errorModalFooter,
                children: (0, n.jsx)(l.zxk, {
                    variant: "primary",
                    text: M.intl.string(M.t.cpT0Cg),
                    onClick: t,
                }),
            }),
        ],
    });
}
function T(e) {
    let { duration: t, onClose: r } = e,
        { theme: o } = (0, l.TCT)(),
        i = (0, p.Z)({ forceFetch: !0 }),
        s = (0, f.vc)(i.endsAt, "L"),
        C = a.useCallback(() => {
            (0, j.$)(r);
        }, [r]);
    return i.fractionalState === O.a$.NONE
        ? (0, n.jsx)("div", {
              className: Z.spinnerContainer,
              children: (0, n.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE }),
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsxs)("div", {
                      className: Z.nitroHeaderContainer,
                      children: [
                          (0, n.jsx)("div", { className: Z.nitroHeaderClouds }),
                          (0, n.jsx)(_.Z, { className: Z.nitroHeaderWordmark }),
                          (0, n.jsx)(l.Eep, {
                              src: w,
                              width: 110,
                              height: 82,
                              zoomable: !1,
                              className: Z.nitroHeaderWumpus,
                          }),
                          (0, n.jsx)(l.olH, {
                              "data-migration-pending": !0,
                              className: Z.nitroHeaderClose,
                              onClick: r,
                          }),
                      ],
                  }),
                  (0, n.jsxs)(l.mzw, {
                      "data-migration-pending": !0,
                      className: Z.footerContainer,
                      separator: !1,
                      children: [
                          (0, n.jsx)(x.Z, { className: Z.beta }),
                          (0, n.jsx)(g.ZP, {
                              className: Z.nitroHeading,
                              premiumType: O.p9.TIER_2,
                              type: g.ZP.Types.PREMIUM_ACTIVATED,
                              theme: o,
                          }),
                          (0, n.jsx)(l.Text, {
                              variant: "text-md/normal",
                              className: Z.text,
                              children: M.intl.format(M.t.tgc1oq, {
                                  helpCenterLink: v.Z.getArticleURL(L.BhN.FRACTIONAL_PREMIUM_ABOUT),
                                  duration: t,
                                  expirationDate: s,
                              }),
                          }),
                          (0, n.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: Z.cta,
                              children: (0, n.jsx)(l.zxk, {
                                  variant: "primary",
                                  text: M.intl.string(M.t["eQX+go"]),
                                  onClick: C,
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function A(e) {
    let { duration: t, onClose: r } = e,
        o = (0, p.Z)({ forceFetch: !0 }),
        s = (0, u.ZP)(),
        C = a.useCallback(() => {
            c.Z.open(L.oAB.SUBSCRIPTIONS, null, {}), r();
        }, [r]);
    if (!o.fetched)
        return (0, n.jsx)("div", {
            className: Z.spinnerContainer,
            children: (0, n.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE }),
        });
    let d = o.isFractionalPremiumActive
        ? M.intl.string(M.t["1ku8i4"])
        : M.intl.format(M.t.fI1nLy, {
              helpCenterLink: v.Z.getArticleURL(L.BhN.FRACTIONAL_PREMIUM_ABOUT),
              duration: t,
          });
    return (0, n.jsx)(l.f6W, {
        theme: s,
        children: (e) =>
            (0, n.jsxs)("div", {
                className: i()(Z.claimedRootContainer, e),
                children: [
                    (0, n.jsxs)("div", {
                        className: Z.headerContainer,
                        children: [
                            (0, n.jsx)("img", {
                                className: Z.headerBackground,
                                src: k,
                                alt: M.intl.string(M.t["8SsCa2"]),
                            }),
                            (0, n.jsx)(x.Z, { className: Z.beta }),
                            (0, n.jsxs)("div", {
                                className: Z.headerForeground,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: Z.rewardAssetContainer,
                                        children: (0, n.jsx)("img", {
                                            src: P,
                                            alt: M.intl.string(M.t.OhPMam),
                                            height: 120,
                                        }),
                                    }),
                                    (0, n.jsx)(l.olH, {
                                        "data-migration-pending": !0,
                                        className: Z.close,
                                        withCircleBackground: !0,
                                        onClick: r,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsxs)(l.mzw, {
                        "data-migration-pending": !0,
                        className: Z.footerContainer,
                        separator: !1,
                        children: [
                            (0, n.jsx)(l.X6q, {
                                variant: "heading-lg/bold",
                                className: Z.heading,
                                children: M.intl.string(M.t["+PHEo6"]),
                            }),
                            (0, n.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                className: Z.text,
                                children: d,
                            }),
                            (0, n.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: Z.cta2,
                                children: (0, n.jsx)(l.zxk, {
                                    variant: "primary",
                                    text: M.intl.string(M.t.LnsQGR),
                                    onClick: C,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
    });
}
function V(e) {
    let { quest: t, location: r, onClose: o, transitionState: i } = e,
        s = (0, d.Z)(() => {
            var e;
            return (null == (e = t.userStatus) ? void 0 : e.claimedAt) != null;
        });
    return (a.useEffect(() => {
        s && o();
    }, [o, s]),
    s)
        ? null
        : (0, n.jsx)(R, {
              onClose: o,
              transitionState: i,
              quest: t,
              location: r,
          });
}
