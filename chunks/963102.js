n.d(t, { I: () => B }), n(388685), n(539854);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(636977),
    s = n(442837),
    c = n(481060),
    u = n(410030),
    d = n(857595),
    f = n(607070),
    g = n(984370),
    p = n(110560),
    m = n(567400),
    h = n(892001),
    C = n(507808),
    _ = n(825102),
    b = n(775451),
    v = n(594174),
    x = n(471731),
    E = n(870289),
    O = n(304742),
    S = n(554067),
    y = n(215023),
    j = n(981631),
    k = n(228168),
    I = n(388032),
    T = n(421200);
function L(e) {
    let { tab: t, displayText: n, selected: l, handleTransition: i } = e;
    return (0, r.jsx)(g.Z.Title, {
        onClick: () => i(t),
        wrapperClassName: T.tabWrapper,
        className: a()(T.tab, { [T.selected]: l }),
        children: n,
    });
}
function P(e) {
    let { tab: t, selected: n, displayText: i, handleTransition: o } = e,
        [s, u] = l.useState(!1),
        p = l.useRef(null),
        [m, h] = l.useState(0),
        C = l.useRef(!1),
        _ = (e) => {
            clearTimeout(m),
                h(
                    setTimeout(() => {
                        u(e);
                    }, 100),
                ),
                e && (C.current = f.Z.keyboardModeEnabled);
        },
        b = (e) => {
            ("Enter" === e.key || " " === e.key) && (e.preventDefault(), _(!0));
        };
    return (0, r.jsx)("div", {
        className: T.tabWithMenuContainer,
        onMouseEnter: () => _(!0),
        onMouseLeave: () => _(!1),
        children: (0, r.jsx)(c.yRy, {
            targetElementRef: p,
            shouldShow: s,
            position: "bottom",
            align: "left",
            onRequestOpen: () => _(!0),
            onRequestClose: () => {
                var e;
                C.current && !f.Z.keyboardModeEnabled && (0, d.Qj)(), _(!1), null == (e = p.current) || e.focus();
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(O.Z, {
                    handleTransition: o,
                    onClose: t,
                });
            },
            children: (e, l) => {
                var s, u;
                let { isShown: d } = l;
                return (0, r.jsx)(
                    g.Z.Title,
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
                            ref: p,
                            onClick: () => o(t),
                            onKeyDown: b,
                            wrapperClassName: T.tabWrapper,
                            className: a()(T.tab, { [T.selected]: n }),
                            children: (0, r.jsxs)("span", {
                                className: T.tabWithChevron,
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
function B(e) {
    let { selectedTab: t, handleTransition: n } = e,
        i = (0, u.ZP)(),
        d = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        { enabled: f } = (0, _.WX)({ location: "collectibles_shop_header_bar" }),
        O = (0, m.Y)({ location: "CollectiblesShopHeaderBar" }),
        B = [
            {
                tab: y.AW.HOME,
                displayText: I.intl.string(I.t.ijDDwz),
            },
            {
                tab: y.AW.CATALOG,
                displayText: I.intl.string(I.t.Ah5sJo),
            },
        ];
    f &&
        B.push({
            tab: y.AW.ORBS,
            displayText: I.intl.string(I.t.EBYkzk),
        });
    let N = t === y.AW.ORBS ? j.ZY5.SHOP_ORBS_TAB : j.ZY5.COLLECTIBLES_SHOP,
        A = l.useCallback(() => {
            (0, C.Y)({
                pageType: N,
                sectionType: j.jXE.ORBS_BALANCE_MENU,
                ctaObject: j.qAy.CTA_TO_QUEST_HOME,
            }),
                (0, p.navigateToQuestHome)({ fromContent: o.j.ORBS_BALANCE_MENU });
        }, [N]),
        R = (0, E.eN)("collectibles_shop_header_bar"),
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
            (0, r.jsxs)(g.Z, {
                disableDoubleClick: !0,
                className: a()(e, T.headerBar),
                innerClassname: f ? T.headerBarInner : void 0,
                children: [
                    (0, r.jsxs)(c.P3F, {
                        className: T.shopHomeLink,
                        onClick: () => n(y.AW.HOME),
                        "aria-label": I.intl.string(I.t.pWG4ze) + " home",
                        children: [
                            (0, r.jsx)(x.Z, { className: T.discordLogo }),
                            (0, r.jsx)(g.Z.Title, { children: I.intl.string(I.t.pWG4ze) }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: T.tabs,
                        children: B.map((e) => {
                            let { tab: l, displayText: i } = e;
                            return l === y.AW.CATALOG
                                ? (0, r.jsx)(
                                      P,
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
                    (f || R || O) &&
                        (0, r.jsxs)("div", {
                            className: T.alignedRightContent,
                            children: [
                                R &&
                                    (0, r.jsx)(S.Z, {
                                        handleTransition: n,
                                        selectedTab: t,
                                    }),
                                O &&
                                    (0, r.jsx)(c.P3F, {
                                        className: T.wishlistButton,
                                        onClick: Z,
                                        "aria-label": I.intl.string(I.t["7lZ31J"]),
                                        children: (0, r.jsx)(c.h_8, {
                                            size: "xs",
                                            color: "currentColor",
                                        }),
                                    }),
                                f &&
                                    (0, r.jsx)(b.V9, {
                                        analyticsPage: N,
                                        cardAlignment: b.V9.CardAlignment.END,
                                        ctaText: I.intl.string(I.t.VC4Mq0),
                                        ctaOnClick: A,
                                        className: T.balanceWidgetMenu,
                                    }),
                            ],
                        }),
                ],
            }),
    });
}
