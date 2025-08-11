n.d(t, { I: () => N }), n(388685), n(539854);
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(636977),
    s = n(442837),
    c = n(481060),
    u = n(37234),
    d = n(425493),
    p = n(410030),
    g = n(857595),
    f = n(607070),
    b = n(984370),
    h = n(110560),
    m = n(507808),
    _ = n(822857),
    v = n(775451),
    O = n(594174),
    C = n(471731),
    E = n(335131),
    S = n(870289),
    y = n(304742),
    x = n(554067),
    j = n(215023),
    T = n(981631),
    P = n(388032),
    L = n(774457);
function k(e) {
    let { tab: t, displayText: n, selected: l, handleTransition: a } = e;
    return (0, r.jsx)(b.Z.Title, {
        onClick: () => a(t),
        wrapperClassName: L.tabWrapper,
        className: i()(L.tab, { [L.selected]: l }),
        children: n,
    });
}
function I(e) {
    let { tab: t, selected: n, displayText: a, handleTransition: o } = e,
        [s, u] = l.useState(!1),
        d = l.useRef(null),
        [p, h] = l.useState(0),
        m = l.useRef(!1),
        _ = (e) => {
            clearTimeout(p),
                h(
                    setTimeout(() => {
                        u(e);
                    }, 100),
                ),
                e && (m.current = f.Z.keyboardModeEnabled);
        },
        v = (e) => {
            ("Enter" === e.key || " " === e.key) && (e.preventDefault(), _(!0));
        };
    return (0, r.jsx)("div", {
        className: L.tabWithMenuContainer,
        onMouseEnter: () => _(!0),
        onMouseLeave: () => _(!1),
        children: (0, r.jsx)(c.yRy, {
            targetElementRef: d,
            shouldShow: s,
            position: "bottom",
            align: "left",
            onRequestOpen: () => _(!0),
            onRequestClose: () => {
                var e;
                m.current && !f.Z.keyboardModeEnabled && (0, g.Qj)(), _(!1), null == (e = d.current) || e.focus();
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(y.Z, {
                    handleTransition: o,
                    onClose: t,
                });
            },
            children: (e, l) => {
                var s, u;
                let { isShown: p } = l;
                return (0, r.jsx)(
                    b.Z.Title,
                    ((s = (function (e) {
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
                            onKeyDown: v,
                            wrapperClassName: L.tabWrapper,
                            className: i()(L.tab, { [L.selected]: n }),
                            children: (0, r.jsxs)("span", {
                                className: L.tabWithChevron,
                                children: [
                                    a,
                                    p
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
                        ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(u))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(u)).forEach(function (e) {
                              Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(u, e));
                          }),
                    s),
                );
            },
        }),
    });
}
function N(e) {
    let { isFullScreen: t, isLayer: n, onClose: a, selectedTab: g, handleTransition: f } = e,
        y = (0, p.ZP)(),
        N = (0, s.e7)([O.default], () => O.default.getCurrentUser()),
        A = (null == N ? void 0 : N.isStaff()) || (null == N ? void 0 : N.isStaffPersonal()) || !1,
        { enabled: w } = (0, _.WX)({ location: "collectibles_shop_header_bar" }),
        B = [
            {
                tab: j.AW.HOME,
                displayText: P.intl.string(P.t.ijDDw8),
            },
            {
                tab: j.AW.CATALOG,
                displayText: P.intl.string(P.t.Ah5sJi),
            },
        ];
    w &&
        B.push({
            tab: j.AW.ORBS,
            displayText: P.intl.string(P.t.EBYkzs),
        });
    let R = n ? E.DR : a,
        Z = g === j.AW.ORBS ? T.ZY5.SHOP_ORBS_TAB : T.ZY5.COLLECTIBLES_SHOP,
        D = l.useCallback(() => {
            t && (R(), (0, u.Ou)()),
                (0, m.Y)({
                    pageType: Z,
                    sectionType: T.jXE.ORBS_BALANCE_MENU,
                    ctaObject: T.qAy.CTA_TO_QUEST_HOME,
                }),
                (0, h.navigateToQuestHome)({ fromContent: o.j.ORBS_BALANCE_MENU });
        }, [R, t, Z]),
        M = (0, S.eN)("collectibles_shop_header_bar");
    return (0, r.jsx)(c.f6W, {
        theme: y,
        children: (e) =>
            (0, r.jsxs)(b.Z, {
                disableDoubleClick: !0,
                className: i()(e, L.headerBar, { [L.fullscreenHeaderBar]: t }),
                innerClassname: w ? L.headerBarInner : void 0,
                toolbar: t || !A ? null : (0, r.jsx)(l.Fragment, {}),
                children: [
                    (0, r.jsxs)(c.P3F, {
                        className: L.shopHomeLink,
                        onClick: () => f(j.AW.HOME),
                        "aria-label": P.intl.string(P.t.pWG4zc) + " home",
                        children: [
                            (0, r.jsx)(C.Z, { className: L.discordLogo }),
                            (0, r.jsx)(b.Z.Title, { children: P.intl.string(P.t.pWG4zc) }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: L.tabs,
                        children: B.map((e) => {
                            let { tab: t, displayText: n } = e;
                            return t === j.AW.CATALOG
                                ? (0, r.jsx)(
                                      I,
                                      {
                                          tab: t,
                                          selected: (0, j.RE)(g) || g === t,
                                          displayText: n,
                                          handleTransition: f,
                                      },
                                      t,
                                  )
                                : (0, r.jsx)(
                                      k,
                                      {
                                          tab: t,
                                          displayText: n,
                                          selected: g === t,
                                          handleTransition: f,
                                      },
                                      t,
                                  );
                        }),
                    }),
                    (w || t || M) &&
                        (0, r.jsxs)("div", {
                            className: L.alignedRightContent,
                            children: [
                                M &&
                                    (0, r.jsx)(x.Z, {
                                        handleTransition: f,
                                        selectedTab: g,
                                    }),
                                w &&
                                    (0, r.jsx)(v.V9, {
                                        anchorPillType: t ? "SHOP_FULLSCREEN" : "SHOP",
                                        analyticsPage: Z,
                                        cardAlignment: v.V9.CardAlignment.END,
                                        ctaText: P.intl.string(P.t.VC4Mq6),
                                        ctaOnClick: D,
                                        className: L.balanceWidgetMenu,
                                    }),
                                t &&
                                    (0, r.jsx)(d.Z, {
                                        closeAction: R,
                                        keybind: "ESC",
                                    }),
                            ],
                        }),
                ],
            }),
    });
}
