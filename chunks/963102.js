n.d(t, { I: () => B }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(120356),
    s = n.n(a),
    i = n(636977),
    o = n(442837),
    c = n(704215),
    u = n(481060),
    d = n(393903),
    f = n(410030),
    g = n(243778),
    b = n(984370),
    p = n(110560),
    m = n(892001),
    h = n(507808),
    C = n(825102),
    E = n(775451),
    v = n(594174),
    S = n(763941),
    x = n(501431),
    O = n(554067),
    _ = n(856908),
    y = n(215023),
    j = n(981631),
    k = n(741764),
    T = n(921944),
    I = n(228168),
    L = n(388032),
    A = n(379398);
function B(e) {
    let { selectedTab: t, handleTransition: n } = e,
        a = (0, f.ZP)(),
        B = (0, o.e7)([v.default], () => v.default.getCurrentUser()),
        { enabled: N } = (0, C.W)({ location: "collectibles_shop_header_bar" }),
        { searchQuery: R } = (0, x.S)(),
        P = l.useRef(null),
        [w, Z] = l.useState(!1);
    (0, d.s)(
        P,
        l.useCallback((e) => {
            Z(e.contentRect.width < k.J);
        }, []),
    );
    let D = (0, S.Pc)("CollectiblesShopHeaderBar"),
        M = D ? [c.z.ORB_RENTAL_NEW_BADGE] : [],
        [H, F] = (0, g.US)(M),
        W = D && H === c.z.ORB_RENTAL_NEW_BADGE;
    l.useEffect(
        () => () => {
            W && F(T.L.USER_DISMISS);
        },
        [W, F],
    );
    let U = l.useMemo(
            () => [
                {
                    tab: y.AW.HOME,
                    label: L.intl.string(L.t.ijDDwz),
                },
                {
                    tab: y.AW.CATALOG,
                    label: L.intl.string(L.t.Ah5sJo),
                    hasSubmenu: !0,
                },
                ...(N
                    ? [
                          {
                              tab: y.AW.ORBS,
                              label: L.intl.string(L.t.EBYkzk),
                          },
                      ]
                    : []),
            ],
            [N],
        ),
        z = t === y.AW.ORBS ? j.ZY5.SHOP_ORBS_TAB : j.ZY5.COLLECTIBLES_SHOP,
        V = l.useCallback(() => {
            (0, h.Y)({
                pageType: z,
                sectionType: j.jXE.ORBS_BALANCE_MENU,
                ctaObject: j.qAy.CTA_TO_QUEST_HOME,
            }),
                (0, p.navigateToQuestHome)({ fromContent: i.j.ORBS_BALANCE_MENU });
        }, [z]),
        G = l.useCallback(() => {
            (null == B ? void 0 : B.id) != null &&
                (0, m.openUserProfileModal)({
                    userId: B.id,
                    tabSection: I.oh.WISHLIST,
                    showGuildProfile: !1,
                });
        }, [null == B ? void 0 : B.id]),
        K = l.useCallback(
            (e) => {
                n(e), e === y.AW.ORBS && W && F(T.L.USER_DISMISS);
            },
            [n, W, F],
        );
    return (0, r.jsx)(u.f6W, {
        theme: a,
        children: (e) =>
            (0, r.jsx)("div", {
                ref: P,
                children: (0, r.jsxs)(b.Z, {
                    disableDoubleClick: !0,
                    className: s()(e, A.headerBar),
                    innerClassname: N ? A.headerBarInner : void 0,
                    children: [
                        (0, r.jsx)(u.P3F, {
                            className: A.shopHomeLink,
                            onClick: () => n(y.AW.HOME),
                            "aria-label": L.intl.string(L.t.pWG4ze) + " home",
                            children: (0, r.jsx)(u.EOn, {
                                size: "md",
                                color: u.TVs.colors.TEXT_DEFAULT,
                            }),
                        }),
                        (0, r.jsx)(_.Z, {
                            tabs: U,
                            selectedTab: t,
                            onTabSelect: K,
                            showOrbRentalNewBadge: W,
                        }),
                        (0, r.jsxs)("div", {
                            className: A.alignedRightContent,
                            children: [
                                (0, r.jsx)(O.Z, {
                                    handleTransition: n,
                                    selectedTab: t,
                                    isNarrow: w,
                                    hasText: "" !== R,
                                }),
                                (0, r.jsx)(u.P3F, {
                                    className: A.wishlistButton,
                                    onClick: G,
                                    "aria-label": L.intl.string(L.t["7lZ31J"]),
                                    children: (0, r.jsx)(u.h_8, {
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                }),
                                N &&
                                    (0, r.jsx)(E.V9, {
                                        analyticsPage: z,
                                        cardAlignment: E.V9.CardAlignment.END,
                                        ctaText: L.intl.string(L.t.VC4Mq0),
                                        ctaOnClick: V,
                                        className: A.balanceWidgetMenu,
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
    });
}
