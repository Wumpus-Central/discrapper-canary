n.d(t, { I: () => A }), n(388685), n(539854);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(636977),
    o = n(442837),
    c = n(481060),
    u = n(410030),
    d = n(857595),
    g = n(607070),
    p = n(984370),
    f = n(110560),
    C = n(567400),
    h = n(892001),
    _ = n(507808),
    m = n(825102),
    b = n(775451),
    v = n(594174),
    E = n(471731),
    x = n(870289),
    O = n(304742),
    S = n(554067),
    y = n(215023),
    j = n(981631),
    k = n(228168),
    T = n(388032),
    L = n(421200);
function I(e) {
    let { tab: t, displayText: n, selected: l, handleTransition: i } = e;
    return (0, r.jsx)(p.Z.Title, {
        onClick: () => i(t),
        wrapperClassName: L.tabWrapper,
        className: a()(L.tab, { [L.selected]: l }),
        children: n,
    });
}
function B(e) {
    let { tab: t, selected: n, displayText: i, handleTransition: s } = e,
        [o, u] = l.useState(!1),
        f = l.useRef(null),
        [C, h] = l.useState(0),
        _ = l.useRef(!1),
        m = (e) => {
            clearTimeout(C),
                h(
                    setTimeout(() => {
                        u(e);
                    }, 100),
                ),
                e && (_.current = g.Z.keyboardModeEnabled);
        },
        b = (e) => {
            ("Enter" === e.key || " " === e.key) && (e.preventDefault(), m(!0));
        };
    return (0, r.jsx)("div", {
        className: L.tabWithMenuContainer,
        onMouseEnter: () => m(!0),
        onMouseLeave: () => m(!1),
        children: (0, r.jsx)(c.yRy, {
            targetElementRef: f,
            shouldShow: o,
            position: "bottom",
            align: "left",
            onRequestOpen: () => m(!0),
            onRequestClose: () => {
                var e;
                _.current && !g.Z.keyboardModeEnabled && (0, d.Qj)(), m(!1), null == (e = f.current) || e.focus();
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(O.Z, {
                    handleTransition: s,
                    onClose: t,
                });
            },
            children: (e, l) => {
                var o, u;
                let { isShown: d } = l;
                return (0, r.jsx)(
                    p.Z.Title,
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
                            ref: f,
                            onClick: () => s(t),
                            onKeyDown: b,
                            wrapperClassName: L.tabWrapper,
                            className: a()(L.tab, { [L.selected]: n }),
                            children: (0, r.jsxs)("span", {
                                className: L.tabWithChevron,
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
function A(e) {
    let { selectedTab: t, handleTransition: n } = e,
        i = (0, u.ZP)(),
        d = (0, o.e7)([v.default], () => v.default.getCurrentUser()),
        { enabled: g } = (0, m.WX)({ location: "collectibles_shop_header_bar" }),
        O = (0, C.Y)({ location: "CollectiblesShopHeaderBar" }),
        A = [
            {
                tab: y.AW.HOME,
                displayText: T.intl.string(T.t.ijDDwz),
            },
            {
                tab: y.AW.CATALOG,
                displayText: T.intl.string(T.t.Ah5sJo),
            },
        ];
    g &&
        A.push({
            tab: y.AW.ORBS,
            displayText: T.intl.string(T.t.EBYkzk),
        });
    let N = t === y.AW.ORBS ? j.ZY5.SHOP_ORBS_TAB : j.ZY5.COLLECTIBLES_SHOP,
        P = l.useCallback(() => {
            (0, _.Y)({
                pageType: N,
                sectionType: j.jXE.ORBS_BALANCE_MENU,
                ctaObject: j.qAy.CTA_TO_QUEST_HOME,
            }),
                (0, f.navigateToQuestHome)({ fromContent: s.j.ORBS_BALANCE_MENU });
        }, [N]),
        R = (0, x.eN)("collectibles_shop_header_bar"),
        Z = l.useCallback(() => {
            (null == d ? void 0 : d.id) != null &&
                (0, h.openUserProfileModal)({
                    userId: d.id,
                    section: k.oh.WISHLIST,
                    showGuildProfile: !1,
                });
        }, [null == d ? void 0 : d.id]);
    return (0, r.jsx)(c.f6W, {
        theme: i,
        children: (e) =>
            (0, r.jsxs)(p.Z, {
                disableDoubleClick: !0,
                className: a()(e, L.headerBar),
                innerClassname: g ? L.headerBarInner : void 0,
                children: [
                    (0, r.jsxs)(c.P3F, {
                        className: L.shopHomeLink,
                        onClick: () => n(y.AW.HOME),
                        "aria-label": T.intl.string(T.t.pWG4ze) + " home",
                        children: [
                            (0, r.jsx)(E.Z, { className: L.discordLogo }),
                            (0, r.jsx)(p.Z.Title, { children: T.intl.string(T.t.pWG4ze) }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: L.tabs,
                        children: A.map((e) => {
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
                                      I,
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
                    (g || R || O) &&
                        (0, r.jsxs)("div", {
                            className: L.alignedRightContent,
                            children: [
                                R &&
                                    (0, r.jsx)(S.Z, {
                                        handleTransition: n,
                                        selectedTab: t,
                                    }),
                                O &&
                                    (0, r.jsx)(c.P3F, {
                                        className: L.wishlistButton,
                                        onClick: Z,
                                        "aria-label": T.intl.string(T.t["7lZ31J"]),
                                        children: (0, r.jsx)(c.h_8, {
                                            size: "xs",
                                            color: "currentColor",
                                        }),
                                    }),
                                g &&
                                    (0, r.jsx)(b.V9, {
                                        analyticsPage: N,
                                        cardAlignment: b.V9.CardAlignment.END,
                                        ctaText: T.intl.string(T.t.VC4Mq0),
                                        ctaOnClick: P,
                                        className: L.balanceWidgetMenu,
                                    }),
                            ],
                        }),
                ],
            }),
    });
}
