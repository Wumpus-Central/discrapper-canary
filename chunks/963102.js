n.d(t, { I: () => B }), n(388685), n(539854);
var r = n(54381),
    l = n(473749),
    a = n(120356),
    o = n.n(a),
    i = n(636977),
    s = n(442837),
    c = n(481060),
    u = n(410030),
    d = n(857595),
    f = n(607070),
    g = n(984370),
    p = n(110560),
    b = n(567400),
    m = n(892001),
    C = n(507808),
    h = n(825102),
    v = n(775451),
    E = n(594174),
    S = n(471731),
    _ = n(304742),
    O = n(554067),
    x = n(215023),
    y = n(981631),
    j = n(228168),
    k = n(388032),
    T = n(379398);
function L(e) {
    let { tab: t, displayText: n, selected: l, handleTransition: a } = e;
    return (0, r.jsx)(g.Z.Title, {
        onClick: () => a(t),
        wrapperClassName: T.tabWrapper,
        className: o()(T.tab, { [T.selected]: l }),
        children: n,
    });
}
function I(e) {
    let { tab: t, selected: n, displayText: a, handleTransition: i } = e,
        [s, u] = l.useState(!1),
        p = l.useRef(null),
        [b, m] = l.useState(0),
        C = l.useRef(!1),
        h = (e) => {
            clearTimeout(b),
                m(
                    setTimeout(() => {
                        u(e);
                    }, 100),
                ),
                e && (C.current = f.Z.keyboardModeEnabled);
        },
        v = (e) => {
            ("Enter" === e.key || " " === e.key) && (e.preventDefault(), h(!0));
        };
    return (0, r.jsx)("div", {
        className: T.tabWithMenuContainer,
        onMouseEnter: () => h(!0),
        onMouseLeave: () => h(!1),
        children: (0, r.jsx)(c.yRy, {
            targetElementRef: p,
            shouldShow: s,
            position: "bottom",
            align: "left",
            onRequestOpen: () => h(!0),
            onRequestClose: () => {
                var e;
                C.current && !f.Z.keyboardModeEnabled && (0, d.Qj)(), h(!1), null == (e = p.current) || e.focus();
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(_.Z, {
                    handleTransition: i,
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
                            onClick: () => i(t),
                            onKeyDown: v,
                            wrapperClassName: T.tabWrapper,
                            className: o()(T.tab, { [T.selected]: n }),
                            children: (0, r.jsxs)("span", {
                                className: T.tabWithChevron,
                                children: [
                                    a,
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
        a = (0, u.ZP)(),
        d = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
        { enabled: f } = (0, h.W)({ location: "collectibles_shop_header_bar" }),
        _ = (0, b.Y)({ location: "CollectiblesShopHeaderBar" }),
        B = [
            {
                tab: x.AW.HOME,
                displayText: k.intl.string(k.t.ijDDwz),
            },
            {
                tab: x.AW.CATALOG,
                displayText: k.intl.string(k.t.Ah5sJo),
            },
        ];
    f &&
        B.push({
            tab: x.AW.ORBS,
            displayText: k.intl.string(k.t.EBYkzk),
        });
    let A = t === x.AW.ORBS ? y.ZY5.SHOP_ORBS_TAB : y.ZY5.COLLECTIBLES_SHOP,
        N = l.useCallback(() => {
            (0, C.Y)({
                pageType: A,
                sectionType: y.jXE.ORBS_BALANCE_MENU,
                ctaObject: y.qAy.CTA_TO_QUEST_HOME,
            }),
                (0, p.navigateToQuestHome)({ fromContent: i.j.ORBS_BALANCE_MENU });
        }, [A]),
        P = l.useCallback(() => {
            (null == d ? void 0 : d.id) != null &&
                (0, m.openUserProfileModal)({
                    userId: d.id,
                    tabSection: j.oh.WISHLIST,
                    showGuildProfile: !1,
                });
        }, [null == d ? void 0 : d.id]);
    return (0, r.jsx)(c.f6W, {
        theme: a,
        children: (e) =>
            (0, r.jsxs)(g.Z, {
                disableDoubleClick: !0,
                className: o()(e, T.headerBar),
                innerClassname: f ? T.headerBarInner : void 0,
                children: [
                    (0, r.jsxs)(c.P3F, {
                        className: T.shopHomeLink,
                        onClick: () => n(x.AW.HOME),
                        "aria-label": k.intl.string(k.t.pWG4ze) + " home",
                        children: [
                            (0, r.jsx)(S.Z, { className: T.discordLogo }),
                            (0, r.jsx)(g.Z.Title, { children: k.intl.string(k.t.pWG4ze) }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: T.tabs,
                        children: B.map((e) => {
                            let { tab: l, displayText: a } = e;
                            return l === x.AW.CATALOG
                                ? (0, r.jsx)(
                                      I,
                                      {
                                          tab: l,
                                          selected: (0, x.RE)(t) || t === l,
                                          displayText: a,
                                          handleTransition: n,
                                      },
                                      l,
                                  )
                                : (0, r.jsx)(
                                      L,
                                      {
                                          tab: l,
                                          displayText: a,
                                          selected: t === l,
                                          handleTransition: n,
                                      },
                                      l,
                                  );
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: T.alignedRightContent,
                        children: [
                            (0, r.jsx)(O.Z, {
                                handleTransition: n,
                                selectedTab: t,
                            }),
                            _ &&
                                (0, r.jsx)(c.P3F, {
                                    className: T.wishlistButton,
                                    onClick: P,
                                    "aria-label": k.intl.string(k.t["7lZ31J"]),
                                    children: (0, r.jsx)(c.h_8, {
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                }),
                            f &&
                                (0, r.jsx)(v.V9, {
                                    analyticsPage: A,
                                    cardAlignment: v.V9.CardAlignment.END,
                                    ctaText: k.intl.string(k.t.VC4Mq0),
                                    ctaOnClick: N,
                                    className: T.balanceWidgetMenu,
                                }),
                        ],
                    }),
                ],
            }),
    });
}
