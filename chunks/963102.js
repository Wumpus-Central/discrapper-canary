n.d(t, { I: () => R }), n(388685), n(539854);
var r = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    i = n(636977),
    o = n(442837),
    c = n(481060),
    u = n(37234),
    d = n(425493),
    g = n(410030),
    p = n(857595),
    f = n(607070),
    h = n(984370),
    _ = n(110560),
    C = n(959840),
    m = n(892001),
    b = n(507808),
    E = n(825102),
    S = n(775451),
    O = n(594174),
    v = n(471731),
    x = n(335131),
    T = n(870289),
    y = n(304742),
    L = n(554067),
    j = n(215023),
    k = n(981631),
    I = n(228168),
    B = n(388032),
    N = n(421200);
function A(e) {
    let { tab: t, displayText: n, selected: l, handleTransition: a } = e;
    return (0, r.jsx)(h.Z.Title, {
        onClick: () => a(t),
        wrapperClassName: N.tabWrapper,
        className: s()(N.tab, { [N.selected]: l }),
        children: n,
    });
}
function P(e) {
    let { tab: t, selected: n, displayText: a, handleTransition: i } = e,
        [o, u] = l.useState(!1),
        d = l.useRef(null),
        [g, _] = l.useState(0),
        C = l.useRef(!1),
        m = (e) => {
            clearTimeout(g),
                _(
                    setTimeout(() => {
                        u(e);
                    }, 100),
                ),
                e && (C.current = f.Z.keyboardModeEnabled);
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
            shouldShow: o,
            position: "bottom",
            align: "left",
            onRequestOpen: () => m(!0),
            onRequestClose: () => {
                var e;
                C.current && !f.Z.keyboardModeEnabled && (0, p.Qj)(), m(!1), null == (e = d.current) || e.focus();
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(y.Z, {
                    handleTransition: i,
                    onClose: t,
                });
            },
            children: (e, l) => {
                var o, u;
                let { isShown: g } = l;
                return (0, r.jsx)(
                    h.Z.Title,
                    ((o = (function (e) {
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
                            onClick: () => i(t),
                            onKeyDown: b,
                            wrapperClassName: N.tabWrapper,
                            className: s()(N.tab, { [N.selected]: n }),
                            children: (0, r.jsxs)("span", {
                                className: N.tabWithChevron,
                                children: [
                                    a,
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
                        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(u))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(u)).forEach(function (e) {
                              Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(u, e));
                          }),
                    o),
                );
            },
        }),
    });
}
function R(e) {
    let { isFullScreen: t, isLayer: n, onClose: a, selectedTab: p, handleTransition: f } = e,
        y = (0, g.ZP)(),
        R = (0, o.e7)([O.default], () => O.default.getCurrentUser()),
        Z = (null == R ? void 0 : R.isStaff()) || (null == R ? void 0 : R.isStaffPersonal()) || !1,
        { enabled: w } = (0, E.WX)({ location: "collectibles_shop_header_bar" }),
        M = (0, C.O)({ location: "CollectiblesShopHeaderBar" }),
        F = [
            {
                tab: j.AW.HOME,
                displayText: B.intl.string(B.t.ijDDw8),
            },
            {
                tab: j.AW.CATALOG,
                displayText: B.intl.string(B.t.Ah5sJi),
            },
        ];
    w &&
        F.push({
            tab: j.AW.ORBS,
            displayText: B.intl.string(B.t.EBYkzs),
        });
    let H = n ? x.DR : a,
        D = p === j.AW.ORBS ? k.ZY5.SHOP_ORBS_TAB : k.ZY5.COLLECTIBLES_SHOP,
        W = l.useCallback(() => {
            t && (H(), (0, u.Ou)()),
                (0, b.Y)({
                    pageType: D,
                    sectionType: k.jXE.ORBS_BALANCE_MENU,
                    ctaObject: k.qAy.CTA_TO_QUEST_HOME,
                }),
                (0, _.navigateToQuestHome)({ fromContent: i.j.ORBS_BALANCE_MENU });
        }, [H, t, D]),
        U = (0, T.eN)("collectibles_shop_header_bar"),
        V = l.useCallback(() => {
            (null == R ? void 0 : R.id) != null &&
                (0, m.openUserProfileModal)({
                    userId: R.id,
                    section: I.oh.WISHLIST,
                    showGuildProfile: !1,
                });
        }, [null == R ? void 0 : R.id]);
    return (0, r.jsx)(c.f6W, {
        theme: y,
        children: (e) =>
            (0, r.jsxs)(h.Z, {
                disableDoubleClick: !0,
                className: s()(e, N.headerBar, { [N.fullscreenHeaderBar]: t }),
                innerClassname: w ? N.headerBarInner : void 0,
                toolbar: t || !Z ? null : (0, r.jsx)(l.Fragment, {}),
                children: [
                    (0, r.jsxs)(c.P3F, {
                        className: N.shopHomeLink,
                        onClick: () => f(j.AW.HOME),
                        "aria-label": B.intl.string(B.t.pWG4zc) + " home",
                        children: [
                            (0, r.jsx)(v.Z, { className: N.discordLogo }),
                            (0, r.jsx)(h.Z.Title, { children: B.intl.string(B.t.pWG4zc) }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: N.tabs,
                        children: F.map((e) => {
                            let { tab: t, displayText: n } = e;
                            return t === j.AW.CATALOG
                                ? (0, r.jsx)(
                                      P,
                                      {
                                          tab: t,
                                          selected: (0, j.RE)(p) || p === t,
                                          displayText: n,
                                          handleTransition: f,
                                      },
                                      t,
                                  )
                                : (0, r.jsx)(
                                      A,
                                      {
                                          tab: t,
                                          displayText: n,
                                          selected: p === t,
                                          handleTransition: f,
                                      },
                                      t,
                                  );
                        }),
                    }),
                    (w || t || U || M) &&
                        (0, r.jsxs)("div", {
                            className: N.alignedRightContent,
                            children: [
                                U &&
                                    (0, r.jsx)(L.Z, {
                                        handleTransition: f,
                                        selectedTab: p,
                                    }),
                                M &&
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
                                    (0, r.jsx)(S.V9, {
                                        anchorPillType: t ? "SHOP_FULLSCREEN" : "SHOP",
                                        analyticsPage: D,
                                        cardAlignment: S.V9.CardAlignment.END,
                                        ctaText: B.intl.string(B.t.VC4Mq6),
                                        ctaOnClick: W,
                                        className: N.balanceWidgetMenu,
                                    }),
                                t &&
                                    (0, r.jsx)(d.Z, {
                                        closeAction: H,
                                        keybind: "ESC",
                                    }),
                            ],
                        }),
                ],
            }),
    });
}
