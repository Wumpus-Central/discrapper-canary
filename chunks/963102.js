n.d(t, { I: () => N }), n(388685), n(539854);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    s = n.n(i),
    o = n(636977),
    a = n(442837),
    c = n(481060),
    u = n(410030),
    d = n(857595),
    g = n(607070),
    f = n(984370),
    p = n(110560),
    m = n(567400),
    C = n(892001),
    h = n(507808),
    _ = n(825102),
    b = n(775451),
    E = n(594174),
    v = n(471731),
    S = n(870289),
    x = n(304742),
    O = n(554067),
    y = n(215023),
    k = n(981631),
    T = n(228168),
    j = n(388032),
    I = n(421200);
function L(e) {
    let { tab: t, displayText: n, selected: l, handleTransition: i } = e;
    return (0, r.jsx)(f.Z.Title, {
        onClick: () => i(t),
        wrapperClassName: I.tabWrapper,
        className: s()(I.tab, { [I.selected]: l }),
        children: n,
    });
}
function B(e) {
    let { tab: t, selected: n, displayText: i, handleTransition: o } = e,
        [a, u] = l.useState(!1),
        p = l.useRef(null),
        [m, C] = l.useState(0),
        h = l.useRef(!1),
        _ = (e) => {
            clearTimeout(m),
                C(
                    setTimeout(() => {
                        u(e);
                    }, 100),
                ),
                e && (h.current = g.Z.keyboardModeEnabled);
        },
        b = (e) => {
            ("Enter" === e.key || " " === e.key) && (e.preventDefault(), _(!0));
        };
    return (0, r.jsx)("div", {
        className: I.tabWithMenuContainer,
        onMouseEnter: () => _(!0),
        onMouseLeave: () => _(!1),
        children: (0, r.jsx)(c.yRy, {
            targetElementRef: p,
            shouldShow: a,
            position: "bottom",
            align: "left",
            onRequestOpen: () => _(!0),
            onRequestClose: () => {
                var e;
                h.current && !g.Z.keyboardModeEnabled && (0, d.Qj)(), _(!1), null == (e = p.current) || e.focus();
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(x.Z, {
                    handleTransition: o,
                    onClose: t,
                });
            },
            children: (e, l) => {
                var a, u;
                let { isShown: d } = l;
                return (0, r.jsx)(
                    f.Z.Title,
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
                            ref: p,
                            onClick: () => o(t),
                            onKeyDown: b,
                            wrapperClassName: I.tabWrapper,
                            className: s()(I.tab, { [I.selected]: n }),
                            children: (0, r.jsxs)("span", {
                                className: I.tabWithChevron,
                                children: [
                                    i,
                                    d
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
function N(e) {
    let { selectedTab: t, handleTransition: n } = e,
        i = (0, u.ZP)(),
        d = (0, a.e7)([E.default], () => E.default.getCurrentUser()),
        { enabled: g } = (0, _.WX)({ location: "collectibles_shop_header_bar" }),
        x = (0, m.Y)({ location: "CollectiblesShopHeaderBar" }),
        N = [
            {
                tab: y.AW.HOME,
                displayText: j.intl.string(j.t.ijDDwz),
            },
            {
                tab: y.AW.CATALOG,
                displayText: j.intl.string(j.t.Ah5sJo),
            },
        ];
    g &&
        N.push({
            tab: y.AW.ORBS,
            displayText: j.intl.string(j.t.EBYkzk),
        });
    let A = t === y.AW.ORBS ? k.ZY5.SHOP_ORBS_TAB : k.ZY5.COLLECTIBLES_SHOP,
        P = l.useCallback(() => {
            (0, h.Y)({
                pageType: A,
                sectionType: k.jXE.ORBS_BALANCE_MENU,
                ctaObject: k.qAy.CTA_TO_QUEST_HOME,
            }),
                (0, p.navigateToQuestHome)({ fromContent: o.j.ORBS_BALANCE_MENU });
        }, [A]),
        R = (0, S.eN)("collectibles_shop_header_bar"),
        Z = l.useCallback(() => {
            (null == d ? void 0 : d.id) != null &&
                (0, C.openUserProfileModal)({
                    userId: d.id,
                    section: T.oh.WISHLIST,
                    showGuildProfile: !1,
                });
        }, [null == d ? void 0 : d.id]);
    return (0, r.jsx)(c.f6W, {
        theme: i,
        children: (e) =>
            (0, r.jsxs)(f.Z, {
                disableDoubleClick: !0,
                className: s()(e, I.headerBar),
                innerClassname: g ? I.headerBarInner : void 0,
                children: [
                    (0, r.jsxs)(c.P3F, {
                        className: I.shopHomeLink,
                        onClick: () => n(y.AW.HOME),
                        "aria-label": j.intl.string(j.t.pWG4ze) + " home",
                        children: [
                            (0, r.jsx)(v.Z, { className: I.discordLogo }),
                            (0, r.jsx)(f.Z.Title, { children: j.intl.string(j.t.pWG4ze) }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: I.tabs,
                        children: N.map((e) => {
                            let { tab: l, displayText: i } = e;
                            return l === y.AW.CATALOG
                                ? (0, r.jsx)(
                                      B,
                                      {
                                          tab: l,
                                          selected: (0, y.RE)(t) || t === l,
                                          displayText: i,
                                          handleTransition: n,
                                      },
                                      l,
                                  )
                                : (0, r.jsx)(
                                      L,
                                      {
                                          tab: l,
                                          displayText: i,
                                          selected: t === l,
                                          handleTransition: n,
                                      },
                                      l,
                                  );
                        }),
                    }),
                    (g || R || x) &&
                        (0, r.jsxs)("div", {
                            className: I.alignedRightContent,
                            children: [
                                R &&
                                    (0, r.jsx)(O.Z, {
                                        handleTransition: n,
                                        selectedTab: t,
                                    }),
                                x &&
                                    (0, r.jsx)(c.P3F, {
                                        className: I.wishlistButton,
                                        onClick: Z,
                                        "aria-label": j.intl.string(j.t["7lZ31J"]),
                                        children: (0, r.jsx)(c.h_8, {
                                            size: "xs",
                                            color: "currentColor",
                                        }),
                                    }),
                                g &&
                                    (0, r.jsx)(b.V9, {
                                        analyticsPage: A,
                                        cardAlignment: b.V9.CardAlignment.END,
                                        ctaText: j.intl.string(j.t.VC4Mq0),
                                        ctaOnClick: P,
                                        className: I.balanceWidgetMenu,
                                    }),
                            ],
                        }),
                ],
            }),
    });
}
