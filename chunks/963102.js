n.d(t, { I: () => N }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(636977),
    i = n(442837),
    c = n(704215),
    u = n(481060),
    d = n(393903),
    f = n(410030),
    g = n(243778),
    b = n(984370),
    p = n(110560),
    m = n(567400),
    h = n(892001),
    C = n(507808),
    E = n(825102),
    v = n(775451),
    S = n(594174),
    _ = n(763941),
    x = n(501431),
    O = n(554067),
    y = n(856908),
    k = n(215023),
    T = n(981631),
    j = n(741764),
    L = n(921944),
    I = n(228168),
    A = n(388032),
    B = n(379398);
function N(e) {
    let { selectedTab: t, handleTransition: n } = e,
        a = (0, f.ZP)(),
        N = (0, i.e7)([S.default], () => S.default.getCurrentUser()),
        { enabled: R } = (0, E.W)({ location: "collectibles_shop_header_bar" }),
        P = (0, m.Y)({ location: "CollectiblesShopHeaderBar" }),
        { searchQuery: w } = (0, x.S)(),
        Z = l.useRef(null),
        [D, H] = l.useState(!1);
    (0, d.s)(
        Z,
        l.useCallback((e) => {
            H(e.contentRect.width < j.J);
        }, []),
    );
    let M = (0, _.Pc)("CollectiblesShopHeaderBar"),
        F = M ? [c.z.ORB_RENTAL_NEW_BADGE] : [],
        [W, U] = (0, g.US)(F),
        z = M && W === c.z.ORB_RENTAL_NEW_BADGE;
    l.useEffect(
        () => () => {
            z && U(L.L.USER_DISMISS);
        },
        [z, U],
    );
    let V = l.useMemo(
            () => [
                {
                    tab: k.AW.HOME,
                    label: A.intl.string(A.t.ijDDwz),
                },
                {
                    tab: k.AW.CATALOG,
                    label: A.intl.string(A.t.Ah5sJo),
                    hasSubmenu: !0,
                },
                ...(R
                    ? [
                          {
                              tab: k.AW.ORBS,
                              label: A.intl.string(A.t.EBYkzk),
                          },
                      ]
                    : []),
            ],
            [R],
        ),
        G = t === k.AW.ORBS ? T.ZY5.SHOP_ORBS_TAB : T.ZY5.COLLECTIBLES_SHOP,
        K = l.useCallback(() => {
            (0, C.Y)({
                pageType: G,
                sectionType: T.jXE.ORBS_BALANCE_MENU,
                ctaObject: T.qAy.CTA_TO_QUEST_HOME,
            }),
                (0, p.navigateToQuestHome)({ fromContent: o.j.ORBS_BALANCE_MENU });
        }, [G]),
        Y = l.useCallback(() => {
            (null == N ? void 0 : N.id) != null &&
                (0, h.openUserProfileModal)({
                    userId: N.id,
                    tabSection: I.oh.WISHLIST,
                    showGuildProfile: !1,
                });
        }, [null == N ? void 0 : N.id]),
        q = l.useCallback(
            (e) => {
                n(e), e === k.AW.ORBS && z && U(L.L.USER_DISMISS);
            },
            [n, z, U],
        );
    return (0, r.jsx)(u.f6W, {
        theme: a,
        children: (e) =>
            (0, r.jsx)("div", {
                ref: Z,
                children: (0, r.jsxs)(b.Z, {
                    disableDoubleClick: !0,
                    className: s()(e, B.headerBar),
                    innerClassname: R ? B.headerBarInner : void 0,
                    children: [
                        (0, r.jsx)(u.P3F, {
                            className: B.shopHomeLink,
                            onClick: () => n(k.AW.HOME),
                            "aria-label": A.intl.string(A.t.pWG4ze) + " home",
                            children: (0, r.jsx)(u.EOn, {
                                size: "md",
                                color: u.TVs.colors.TEXT_DEFAULT,
                            }),
                        }),
                        (0, r.jsx)(y.Z, {
                            tabs: V,
                            selectedTab: t,
                            onTabSelect: q,
                            showOrbRentalNewBadge: z,
                        }),
                        (0, r.jsxs)("div", {
                            className: B.alignedRightContent,
                            children: [
                                (0, r.jsx)(O.Z, {
                                    handleTransition: n,
                                    selectedTab: t,
                                    isNarrow: D,
                                    hasText: "" !== w,
                                }),
                                P &&
                                    (0, r.jsx)(u.P3F, {
                                        className: B.wishlistButton,
                                        onClick: Y,
                                        "aria-label": A.intl.string(A.t["7lZ31J"]),
                                        children: (0, r.jsx)(u.h_8, {
                                            size: "xs",
                                            color: "currentColor",
                                        }),
                                    }),
                                R &&
                                    (0, r.jsx)(v.V9, {
                                        analyticsPage: G,
                                        cardAlignment: v.V9.CardAlignment.END,
                                        ctaText: A.intl.string(A.t.VC4Mq0),
                                        ctaOnClick: K,
                                        className: B.balanceWidgetMenu,
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
    });
}
