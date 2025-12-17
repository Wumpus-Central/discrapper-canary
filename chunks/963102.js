n.d(t, { I: () => R }), n(388685), n(539854);
var r = n(54381),
    l = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(636977),
    i = n(442837),
    c = n(704215),
    u = n(481060),
    d = n(410030),
    f = n(857595),
    g = n(607070),
    p = n(243778),
    b = n(984370),
    m = n(110560),
    C = n(567400),
    h = n(892001),
    v = n(507808),
    E = n(825102),
    S = n(775451),
    _ = n(594174),
    O = n(471731),
    x = n(763941),
    y = n(304742),
    j = n(554067),
    k = n(215023),
    T = n(981631),
    L = n(921944),
    I = n(228168),
    B = n(388032),
    A = n(379398);
function N(e) {
    let { tab: t, displayText: n, selected: l, handleTransition: a, showNewBadge: s } = e;
    return (0, r.jsxs)(b.Z.Title, {
        onClick: () => a(t),
        wrapperClassName: A.tabWrapper,
        className: o()(A.tab, { [A.selected]: l }),
        children: [
            n,
            s &&
                (0, r.jsx)(u.IGR, {
                    text: B.intl.string(B.t.y2b7CA),
                    className: A.newBadge,
                }),
        ],
    });
}
function P(e) {
    let { tab: t, selected: n, displayText: a, handleTransition: s } = e,
        [i, c] = l.useState(!1),
        d = l.useRef(null),
        [p, m] = l.useState(0),
        C = l.useRef(!1),
        h = (e) => {
            clearTimeout(p),
                m(
                    setTimeout(() => {
                        c(e);
                    }, 100),
                ),
                e && (C.current = g.Z.keyboardModeEnabled);
        },
        v = (e) => {
            ("Enter" === e.key || " " === e.key) && (e.preventDefault(), h(!0));
        };
    return (0, r.jsx)("div", {
        className: A.tabWithMenuContainer,
        onMouseEnter: () => h(!0),
        onMouseLeave: () => h(!1),
        children: (0, r.jsx)(u.yRy, {
            targetElementRef: d,
            shouldShow: i,
            position: "bottom",
            align: "left",
            onRequestOpen: () => h(!0),
            onRequestClose: () => {
                var e;
                C.current && !g.Z.keyboardModeEnabled && (0, f.Qj)(), h(!1), null == (e = d.current) || e.focus();
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(y.Z, {
                    handleTransition: s,
                    onClose: t,
                });
            },
            children: (e, l) => {
                var i, c;
                let { isShown: f } = l;
                return (0, r.jsx)(
                    b.Z.Title,
                    ((i = (function (e) {
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
                    (c = c =
                        {
                            ref: d,
                            onClick: () => s(t),
                            onKeyDown: v,
                            wrapperClassName: A.tabWrapper,
                            className: o()(A.tab, { [A.selected]: n }),
                            children: (0, r.jsxs)("span", {
                                className: A.tabWithChevron,
                                children: [
                                    a,
                                    f
                                        ? (0, r.jsx)(u.u04, {
                                              size: "sm",
                                              color: "currentColor",
                                          })
                                        : (0, r.jsx)(u.CJ0, {
                                              size: "sm",
                                              color: "currentColor",
                                          }),
                                ],
                            }),
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(c))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(c)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(c, e));
                          }),
                    i),
                );
            },
        }),
    });
}
function R(e) {
    let { selectedTab: t, handleTransition: n } = e,
        a = (0, d.ZP)(),
        f = (0, i.e7)([_.default], () => _.default.getCurrentUser()),
        { enabled: g } = (0, E.W)({ location: "collectibles_shop_header_bar" }),
        y = (0, C.Y)({ location: "CollectiblesShopHeaderBar" }),
        R = (0, x.Pc)("CollectiblesShopHeaderBar"),
        Z = R ? [c.z.ORB_RENTAL_NEW_BADGE] : [],
        [w, H] = (0, p.US)(Z),
        D = R && w === c.z.ORB_RENTAL_NEW_BADGE;
    l.useEffect(
        () => () => {
            D && H(L.L.USER_DISMISS);
        },
        [D, H],
    );
    let M = [
        {
            tab: k.AW.HOME,
            displayText: B.intl.string(B.t.ijDDwz),
        },
        {
            tab: k.AW.CATALOG,
            displayText: B.intl.string(B.t.Ah5sJo),
        },
    ];
    g &&
        M.push({
            tab: k.AW.ORBS,
            displayText: B.intl.string(B.t.EBYkzk),
        });
    let F = t === k.AW.ORBS ? T.ZY5.SHOP_ORBS_TAB : T.ZY5.COLLECTIBLES_SHOP,
        W = l.useCallback(() => {
            (0, v.Y)({
                pageType: F,
                sectionType: T.jXE.ORBS_BALANCE_MENU,
                ctaObject: T.qAy.CTA_TO_QUEST_HOME,
            }),
                (0, m.navigateToQuestHome)({ fromContent: s.j.ORBS_BALANCE_MENU });
        }, [F]),
        U = l.useCallback(() => {
            (null == f ? void 0 : f.id) != null &&
                (0, h.openUserProfileModal)({
                    userId: f.id,
                    tabSection: I.oh.WISHLIST,
                    showGuildProfile: !1,
                });
        }, [null == f ? void 0 : f.id]);
    return (0, r.jsx)(u.f6W, {
        theme: a,
        children: (e) =>
            (0, r.jsxs)(b.Z, {
                disableDoubleClick: !0,
                className: o()(e, A.headerBar),
                innerClassname: g ? A.headerBarInner : void 0,
                children: [
                    (0, r.jsxs)(u.P3F, {
                        className: A.shopHomeLink,
                        onClick: () => n(k.AW.HOME),
                        "aria-label": B.intl.string(B.t.pWG4ze) + " home",
                        children: [
                            (0, r.jsx)(O.Z, { className: A.discordLogo }),
                            (0, r.jsx)(b.Z.Title, { children: B.intl.string(B.t.pWG4ze) }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: A.tabs,
                        children: M.map((e) => {
                            let { tab: l, displayText: a } = e;
                            return l === k.AW.CATALOG
                                ? (0, r.jsx)(
                                      P,
                                      {
                                          tab: l,
                                          selected: (0, k.RE)(t) || t === l,
                                          displayText: a,
                                          handleTransition: n,
                                      },
                                      l,
                                  )
                                : (0, r.jsx)(
                                      N,
                                      {
                                          tab: l,
                                          displayText: a,
                                          selected: t === l,
                                          handleTransition: () => {
                                              n(l), l === k.AW.ORBS && D && H(L.L.USER_DISMISS);
                                          },
                                          showNewBadge: l === k.AW.ORBS && D,
                                      },
                                      l,
                                  );
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: A.alignedRightContent,
                        children: [
                            (0, r.jsx)(j.Z, {
                                handleTransition: n,
                                selectedTab: t,
                            }),
                            y &&
                                (0, r.jsx)(u.P3F, {
                                    className: A.wishlistButton,
                                    onClick: U,
                                    "aria-label": B.intl.string(B.t["7lZ31J"]),
                                    children: (0, r.jsx)(u.h_8, {
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                }),
                            g &&
                                (0, r.jsx)(S.V9, {
                                    analyticsPage: F,
                                    cardAlignment: S.V9.CardAlignment.END,
                                    ctaText: B.intl.string(B.t.VC4Mq0),
                                    ctaOnClick: W,
                                    className: A.balanceWidgetMenu,
                                }),
                        ],
                    }),
                ],
            }),
    });
}
