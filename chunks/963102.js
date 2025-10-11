n.d(t, { I: () => R }), n(388685), n(539854);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    o = n(636977),
    a = n(442837),
    c = n(481060),
    u = n(37234),
    d = n(425493),
    g = n(410030),
    f = n(857595),
    p = n(607070),
    C = n(984370),
    h = n(110560),
    _ = n(567400),
    m = n(892001),
    b = n(507808),
    E = n(825102),
    v = n(775451),
    S = n(594174),
    O = n(471731),
    x = n(335131),
    y = n(870289),
    j = n(304742),
    T = n(554067),
    L = n(215023),
    k = n(981631),
    I = n(228168),
    B = n(388032),
    N = n(421200);
function P(e) {
    let { tab: t, displayText: n, selected: l, handleTransition: i } = e;
    return (0, r.jsx)(C.Z.Title, {
        onClick: () => i(t),
        wrapperClassName: N.tabWrapper,
        className: s()(N.tab, { [N.selected]: l }),
        children: n,
    });
}
function A(e) {
    let { tab: t, selected: n, displayText: i, handleTransition: o } = e,
        [a, u] = l.useState(!1),
        d = l.useRef(null),
        [g, h] = l.useState(0),
        _ = l.useRef(!1),
        m = (e) => {
            clearTimeout(g),
                h(
                    setTimeout(() => {
                        u(e);
                    }, 100),
                ),
                e && (_.current = p.Z.keyboardModeEnabled);
        },
        b = (e) => {
            ("Enter" === e.key || " " === e.key) && (e.preventDefault(), m(!0));
        };
    return (0, r.jsx)("div", {
        className: N.tabWithMenuContainer,
        onMouseEnter: () => m(!0),
        onMouseLeave: () => m(!1),
        children: (0, r.jsx)(c.yRy, {
            targetElementRef: d,
            shouldShow: a,
            position: "bottom",
            align: "left",
            onRequestOpen: () => m(!0),
            onRequestClose: () => {
                var e;
                _.current && !p.Z.keyboardModeEnabled && (0, f.Qj)(), m(!1), null == (e = d.current) || e.focus();
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(j.Z, {
                    handleTransition: o,
                    onClose: t,
                });
            },
            children: (e, l) => {
                var a, u;
                let { isShown: g } = l;
                return (0, r.jsx)(
                    C.Z.Title,
                    ((a = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, e)),
                    (u = u =
                        {
                            ref: d,
                            onClick: () => o(t),
                            onKeyDown: b,
                            wrapperClassName: N.tabWrapper,
                            className: s()(N.tab, { [N.selected]: n }),
                            children: (0, r.jsxs)("span", {
                                className: N.tabWithChevron,
                                children: [
                                    i,
                                    g
                                        ? (0, r.jsx)(c.u04, {
                                              size: "sm",
                                              color: "currentColor",
                                          })
                                        : (0, r.jsx)(c.CJ0, {
                                              size: "sm",
                                              color: "currentColor",
                                          }),
                                ],
                            }),
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(u)).forEach(function (e) {
                              Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(u, e));
                          }),
                    a),
                );
            },
        }),
    });
}
function R(e) {
    let { isFullScreen: t, isLayer: n, onClose: i, selectedTab: f, handleTransition: p } = e,
        j = (0, g.ZP)(),
        R = (0, a.e7)([S.default], () => S.default.getCurrentUser()),
        Z = (null == R ? void 0 : R.isStaff()) || (null == R ? void 0 : R.isStaffPersonal()) || !1,
        { enabled: w } = (0, E.WX)({ location: "collectibles_shop_header_bar" }),
        H = (0, _.Y)({ location: "CollectiblesShopHeaderBar" }),
        F = [
            {
                tab: L.AW.HOME,
                displayText: B.intl.string(B.t.ijDDw8),
            },
            {
                tab: L.AW.CATALOG,
                displayText: B.intl.string(B.t.Ah5sJi),
            },
        ];
    w &&
        F.push({
            tab: L.AW.ORBS,
            displayText: B.intl.string(B.t.EBYkzs),
        });
    let D = n ? x.DR : i,
        M = f === L.AW.ORBS ? k.ZY5.SHOP_ORBS_TAB : k.ZY5.COLLECTIBLES_SHOP,
        W = l.useCallback(() => {
            t && (D(), (0, u.Ou)()),
                (0, b.Y)({
                    pageType: M,
                    sectionType: k.jXE.ORBS_BALANCE_MENU,
                    ctaObject: k.qAy.CTA_TO_QUEST_HOME,
                }),
                (0, h.navigateToQuestHome)({ fromContent: o.j.ORBS_BALANCE_MENU });
        }, [D, t, M]),
        U = (0, y.eN)("collectibles_shop_header_bar"),
        V = l.useCallback(() => {
            (null == R ? void 0 : R.id) != null &&
                (0, m.openUserProfileModal)({
                    userId: R.id,
                    section: I.oh.WISHLIST,
                    showGuildProfile: !1,
                });
        }, [null == R ? void 0 : R.id]);
    return (0, r.jsx)(c.f6W, {
        theme: j,
        children: (e) =>
            (0, r.jsxs)(C.Z, {
                disableDoubleClick: !0,
                className: s()(e, N.headerBar, { [N.fullscreenHeaderBar]: t }),
                innerClassname: w ? N.headerBarInner : void 0,
                toolbar: t || !Z ? null : (0, r.jsx)(l.Fragment, {}),
                children: [
                    (0, r.jsxs)(c.P3F, {
                        className: N.shopHomeLink,
                        onClick: () => p(L.AW.HOME),
                        "aria-label": B.intl.string(B.t.pWG4zc) + " home",
                        children: [
                            (0, r.jsx)(O.Z, { className: N.discordLogo }),
                            (0, r.jsx)(C.Z.Title, { children: B.intl.string(B.t.pWG4zc) }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: N.tabs,
                        children: F.map((e) => {
                            let { tab: t, displayText: n } = e;
                            return t === L.AW.CATALOG
                                ? (0, r.jsx)(
                                      A,
                                      {
                                          tab: t,
                                          selected: (0, L.RE)(f) || f === t,
                                          displayText: n,
                                          handleTransition: p,
                                      },
                                      t,
                                  )
                                : (0, r.jsx)(
                                      P,
                                      {
                                          tab: t,
                                          displayText: n,
                                          selected: f === t,
                                          handleTransition: p,
                                      },
                                      t,
                                  );
                        }),
                    }),
                    (w || t || U || H) &&
                        (0, r.jsxs)("div", {
                            className: N.alignedRightContent,
                            children: [
                                U &&
                                    (0, r.jsx)(T.Z, {
                                        handleTransition: p,
                                        selectedTab: f,
                                    }),
                                H &&
                                    (0, r.jsx)(c.P3F, {
                                        className: N.wishlistButton,
                                        onClick: V,
                                        "aria-label": B.intl.string(B.t["7lZ31N"]),
                                        children: (0, r.jsx)(c.h_8, {
                                            size: "xs",
                                            color: "currentColor",
                                        }),
                                    }),
                                w &&
                                    (0, r.jsx)(v.V9, {
                                        anchorPillType: t ? "SHOP_FULLSCREEN" : "SHOP",
                                        analyticsPage: M,
                                        cardAlignment: v.V9.CardAlignment.END,
                                        ctaText: B.intl.string(B.t.VC4Mq6),
                                        ctaOnClick: W,
                                        className: N.balanceWidgetMenu,
                                    }),
                                t &&
                                    (0, r.jsx)(d.Z, {
                                        closeAction: D,
                                        keybind: "ESC",
                                    }),
                            ],
                        }),
                ],
            }),
    });
}
