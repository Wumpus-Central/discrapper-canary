n.d(t, { I: () => N }), n(388685), n(539854);
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
    f = n(857595),
    p = n(607070),
    m = n(984370),
    _ = n(110560),
    h = n(507808),
    b = n(822857),
    C = n(775451),
    E = n(594174),
    S = n(471731),
    O = n(335131),
    v = n(870289),
    x = n(304742),
    y = n(554067),
    T = n(215023),
    L = n(981631),
    j = n(388032),
    k = n(421200);
function I(e) {
    let { tab: t, displayText: n, selected: l, handleTransition: a } = e;
    return (0, r.jsx)(m.Z.Title, {
        onClick: () => a(t),
        wrapperClassName: k.tabWrapper,
        className: s()(k.tab, { [k.selected]: l }),
        children: n,
    });
}
function B(e) {
    let { tab: t, selected: n, displayText: a, handleTransition: i } = e,
        [o, u] = l.useState(!1),
        d = l.useRef(null),
        [g, _] = l.useState(0),
        h = l.useRef(!1),
        b = (e) => {
            clearTimeout(g),
                _(
                    setTimeout(() => {
                        u(e);
                    }, 100),
                ),
                e && (h.current = p.Z.keyboardModeEnabled);
        },
        C = (e) => {
            ("Enter" === e.key || " " === e.key) && (e.preventDefault(), b(!0));
        };
    return (0, r.jsx)("div", {
        className: k.tabWithMenuContainer,
        onMouseEnter: () => b(!0),
        onMouseLeave: () => b(!1),
        children: (0, r.jsx)(c.yRy, {
            targetElementRef: d,
            shouldShow: o,
            position: "bottom",
            align: "left",
            onRequestOpen: () => b(!0),
            onRequestClose: () => {
                var e;
                h.current && !p.Z.keyboardModeEnabled && (0, f.Qj)(), b(!1), null == (e = d.current) || e.focus();
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(x.Z, {
                    handleTransition: i,
                    onClose: t,
                });
            },
            children: (e, l) => {
                var o, u;
                let { isShown: g } = l;
                return (0, r.jsx)(
                    m.Z.Title,
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
                            onKeyDown: C,
                            wrapperClassName: k.tabWrapper,
                            className: s()(k.tab, { [k.selected]: n }),
                            children: (0, r.jsxs)("span", {
                                className: k.tabWithChevron,
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
function N(e) {
    let { isFullScreen: t, isLayer: n, onClose: a, selectedTab: f, handleTransition: p } = e,
        x = (0, g.ZP)(),
        N = (0, o.e7)([E.default], () => E.default.getCurrentUser()),
        P = (null == N ? void 0 : N.isStaff()) || (null == N ? void 0 : N.isStaffPersonal()) || !1,
        { enabled: A } = (0, b.WX)({ location: "collectibles_shop_header_bar" }),
        R = [
            {
                tab: T.AW.HOME,
                displayText: j.intl.string(j.t.ijDDw8),
            },
            {
                tab: T.AW.CATALOG,
                displayText: j.intl.string(j.t.Ah5sJi),
            },
        ];
    A &&
        R.push({
            tab: T.AW.ORBS,
            displayText: j.intl.string(j.t.EBYkzs),
        });
    let Z = n ? O.DR : a,
        w = f === T.AW.ORBS ? L.ZY5.SHOP_ORBS_TAB : L.ZY5.COLLECTIBLES_SHOP,
        F = l.useCallback(() => {
            t && (Z(), (0, u.Ou)()),
                (0, h.Y)({
                    pageType: w,
                    sectionType: L.jXE.ORBS_BALANCE_MENU,
                    ctaObject: L.qAy.CTA_TO_QUEST_HOME,
                }),
                (0, _.navigateToQuestHome)({ fromContent: i.j.ORBS_BALANCE_MENU });
        }, [Z, t, w]),
        D = (0, v.eN)("collectibles_shop_header_bar");
    return (0, r.jsx)(c.f6W, {
        theme: x,
        children: (e) =>
            (0, r.jsxs)(m.Z, {
                disableDoubleClick: !0,
                className: s()(e, k.headerBar, { [k.fullscreenHeaderBar]: t }),
                innerClassname: A ? k.headerBarInner : void 0,
                toolbar: t || !P ? null : (0, r.jsx)(l.Fragment, {}),
                children: [
                    (0, r.jsxs)(c.P3F, {
                        className: k.shopHomeLink,
                        onClick: () => p(T.AW.HOME),
                        "aria-label": j.intl.string(j.t.pWG4zc) + " home",
                        children: [
                            (0, r.jsx)(S.Z, { className: k.discordLogo }),
                            (0, r.jsx)(m.Z.Title, { children: j.intl.string(j.t.pWG4zc) }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: k.tabs,
                        children: R.map((e) => {
                            let { tab: t, displayText: n } = e;
                            return t === T.AW.CATALOG
                                ? (0, r.jsx)(
                                      B,
                                      {
                                          tab: t,
                                          selected: (0, T.RE)(f) || f === t,
                                          displayText: n,
                                          handleTransition: p,
                                      },
                                      t,
                                  )
                                : (0, r.jsx)(
                                      I,
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
                    (A || t || D) &&
                        (0, r.jsxs)("div", {
                            className: k.alignedRightContent,
                            children: [
                                D &&
                                    (0, r.jsx)(y.Z, {
                                        handleTransition: p,
                                        selectedTab: f,
                                    }),
                                A &&
                                    (0, r.jsx)(C.V9, {
                                        anchorPillType: t ? "SHOP_FULLSCREEN" : "SHOP",
                                        analyticsPage: w,
                                        cardAlignment: C.V9.CardAlignment.END,
                                        ctaText: j.intl.string(j.t.VC4Mq6),
                                        ctaOnClick: F,
                                        className: k.balanceWidgetMenu,
                                    }),
                                t &&
                                    (0, r.jsx)(d.Z, {
                                        closeAction: Z,
                                        keybind: "ESC",
                                    }),
                            ],
                        }),
                ],
            }),
    });
}
