(t.r(n), t.d(n, { default: () => ei }));
var a = t(477900),
    l = t(582128),
    i = t(503698),
    o = t.n(i),
    s = t(855986),
    r = t(289873),
    c = t(944791),
    d = t(976860),
    u = t(439303),
    p = t(832163),
    C = t(953331),
    S = t(696292),
    E = t(939249),
    A = t(34188),
    I = t(646514),
    L = t(926268),
    m = t(885574),
    x = t(834730),
    f = t(793574),
    g = t(688810),
    h = t(742589),
    _ = t(321538),
    j = t(702476),
    O = t(318346),
    b = t(32163),
    k = t(287809),
    T = t(129230),
    N = t(975571),
    v = t(225647),
    y = t(165862),
    R = t(477782),
    M = t(478016),
    B = t(847374),
    P = t(265872),
    H = t(900797),
    w = t(587895),
    D = t(421773),
    F = t(486020),
    U = t(429913),
    V = t(733391),
    z = t(652215),
    G = t(792996),
    Y = t(348701);
function X(e) {
    let { shops: n, currentApplicationId: t, onClose: l, onMouseEnter: i, onMouseLeave: o } = e;
    return (0, a.jsx)("div", {
        onMouseEnter: i,
        onMouseLeave: o,
        children: (0, a.jsx)(y.W, {
            "data-menu-migrated": !0,
            navId: "slayer-storefront-shop-dropdown",
            onClose: l,
            "aria-label": G.intl.string(G.t.FkjcWY),
            onSelect: () => {},
            children: n.map((e) => {
                let n =
                    null != e.application.icon
                        ? F.Ay.getApplicationIconURL({ id: e.application.id, icon: e.application.icon, size: 32 })
                        : void 0;
                return (0, a.jsx)(
                    R.Dr,
                    {
                        id: e.applicationId,
                        label: e.application.name,
                        leadingAccessory: null != n ? { type: "image", src: n } : void 0,
                        color: e.applicationId === t ? "brand" : "default",
                        trailingIndicator:
                            t === e.applicationId ? { type: "icon", icon: M.CheckmarkSmallIcon } : void 0,
                        action: () => {
                            ((0, d.pX)(z.BVt.COLLECTIBLES_SHOP_GAME_SHOP(e.applicationId)), l());
                        },
                    },
                    e.applicationId,
                );
            }),
        }),
    });
}
function q(e) {
    let n,
        t,
        i,
        { selectedApplicationId: r, className: c } = e,
        d = l.useRef(null),
        { isHovered: u, setIsHovered: C, onMouseEnter: S, onMouseLeave: A, cancelTimers: I } = (0, D.A)(100, 100),
        L =
            ((n = (0, s.yK)([p.A], () =>
                (p.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled),
            )),
            (t = l.useMemo(() => n.map((e) => e.applicationId), [n])),
            (i = (0, U.A)(t)),
            l.useEffect(() => {
                (0, V.Xw)();
            }, []),
            l.useMemo(
                () =>
                    n.flatMap((e) => {
                        let n = i.find((n) => n?.id === e.applicationId);
                        return null == n ? [] : [{ ...e, application: n }];
                    }),
                [n, i],
            )),
        m = (0, s.bG)([w.A], () => w.A.getApplication(r)),
        f = l.useCallback(
            (e) => {
                (I(), C(e));
            },
            [I, C],
        ),
        g = l.useCallback(() => {
            f(!u);
        }, [u, f]);
    if (null == m)
        return (0, a.jsxs)("div", {
            className: o()(Y.hZ, Y.qf, c),
            "aria-hidden": "true",
            children: [
                (0, a.jsx)("span", { className: Y.wm }),
                (0, a.jsx)(B.ChevronSmallDownIcon, { size: "xs", color: "currentColor" }),
            ],
        });
    let h = null != m.icon ? F.Ay.getApplicationIconURL({ id: m.id, icon: m.icon, size: 32 }) : null;
    return (0, a.jsx)(P.Y, {
        targetElementRef: d,
        shouldShow: u,
        position: "bottom",
        align: "left",
        useMouseEnter: !0,
        onRequestOpen: () => f(!0),
        onRequestClose: () => f(!1),
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, a.jsx)(X, { shops: L, currentApplicationId: r, onClose: n, onMouseEnter: S, onMouseLeave: A });
        },
        children: (e) => {
            let n = u ? H.ChevronSmallUpIcon : B.ChevronSmallDownIcon;
            return (0, a.jsxs)(E.D, {
                ...e,
                innerRef: d,
                onClick: g,
                onMouseLeave: A,
                className: o()(Y.hZ, c),
                "aria-label": m.name,
                "aria-haspopup": "menu",
                "aria-expanded": u,
                children: [
                    null != h && (0, a.jsx)("img", { className: Y.wm, src: h, alt: "" }),
                    (0, a.jsx)(x.E, { variant: "body-md/medium", color: "text-default", children: m.name }),
                    (0, a.jsx)(n, { size: "xs", color: "currentColor" }),
                ],
            });
        },
    });
}
var W = t(995393),
    Z = t(518477),
    J = t(709514);
function Q(e) {
    let { content: n, onClick: t, ariaLabel: l } = e;
    return (0, a.jsx)(E.D, { className: J.gb, onClick: t, "aria-label": l, children: n });
}
function K() {
    let e = l.useCallback(() => {
        (0, d.pX)(z.BVt.COLLECTIBLES_SHOP);
    }, []);
    return (0, a.jsx)(E.D, {
        className: J.Ak,
        onClick: e,
        "aria-label": G.intl.string(G.t["5upuqx"]),
        children: (0, a.jsx)(A.ShopIcon, { size: "md", color: I.A.colors.TEXT_DEFAULT }),
    });
}
function $() {
    let e = (0, s.bG)([k.default], () => k.default.getCurrentUser()),
        n = l.useCallback(() => {
            e?.id != null &&
                (0, j.openUserProfileModal)({
                    userId: e.id,
                    tabSection: Z.RP.WISHLIST,
                    sourceAnalyticsLocations: [f.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [e]);
    return (0, a.jsx)(Q, {
        content: (0, a.jsx)(L.HeartIcon, { size: "xs", color: "currentColor" }),
        onClick: n,
        ariaLabel: G.intl.string(G.t["7lZ31J"]),
    });
}
function ee() {
    let e = l.useCallback(() => {
        ((0, O.Y)({
            pageType: z.liQ.COLLECTIBLES_SHOP,
            sectionType: z.JJy.ORBS_BALANCE_MENU,
            ctaObject: z.ZSU.CTA_TO_QUEST_HOME,
        }),
            (0, _.mA)({ fromContent: S.u.ORBS_BALANCE_MENU }));
    }, []);
    return (0, a.jsx)(b.SS, {
        analyticsPage: z.liQ.COLLECTIBLES_SHOP,
        cardAlignment: b.SS.CardAlignment.END,
        ctaText: G.intl.string(G.t.VC4Mq0),
        ctaOnClick: e,
    });
}
function en() {
    let e = (0, u.jM)(),
        { analyticsLocations: n } = (0, g.Ay)(),
        t = l.useCallback(() => {
            (T.default.track(z.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: e?.sessionId,
                cta_type: W.ST.LEARN_MORE,
                location_stack: n,
            }),
                window.open(N.A.getArticleURL(z.MVz.SOCIAL_LAYER_STOREFRONT), "_blank", "noopener,noreferrer"));
        }, [e, n]);
    return (0, a.jsx)(Q, {
        content: (0, a.jsx)(m.CircleInformationIcon, { size: "xs", color: "currentColor" }),
        onClick: t,
        ariaLabel: G.intl.string(G.t.hvVgAZ),
    });
}
function et(e) {
    let { storefront: n, selectedPageIndex: t } = e;
    return null == n
        ? null
        : (0, a.jsxs)(h.A, {
              disableDoubleClick: !0,
              hideSearch: !0,
              className: J.N1,
              toolbar: (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)($, {}), (0, a.jsx)(ee, {}), (0, a.jsx)(en, {})],
              }),
              children: [
                  (0, a.jsx)(K, {}),
                  (0, a.jsx)("div", { className: J.yF, "aria-hidden": "true" }),
                  (0, a.jsx)(q, { selectedApplicationId: n.applicationId, className: J.Wm }),
                  n.pages.length > 1 &&
                      (0, a.jsx)("div", {
                          className: J.YC,
                          children: n.pages.map((e, l) =>
                              (0, a.jsx)(
                                  h.A.Title,
                                  {
                                      onClick: () => {
                                          (0, d.pX)(
                                              z.BVt.COLLECTIBLES_SHOP_GAME_SHOP(n.applicationId, l > 0 ? l : void 0),
                                          );
                                      },
                                      wrapperClassName: J.oB,
                                      className: o()(J.xT, { [J.ys]: t === l }),
                                      children: (0, a.jsx)(x.E, {
                                          variant: "body-sm/medium",
                                          children: (0, v.A)(e.title),
                                      }),
                                  },
                                  `${e.title}-${l}`,
                              ),
                          ),
                      }),
              ],
          });
}
var ea = t(901123),
    el = t(537067);
function ei(e) {
    let { applicationId: n, pageIndex: t, skuId: i } = e,
        { guildId: S, configFetchState: E } = (0, s.cf)([p.A], () => ({
            guildId: p.A.getGuildIdFromApplicationId(n),
            configFetchState: p.A.getConfigFetchState(),
        })),
        A = (0, s.bG)([p.A], () => p.A.getStorefrontDataForApplicationId(n)),
        I = null != t ? parseInt(t, 10) : 0;
    (l.useEffect(() => {
        (0, c.I)(ea.BV.COLLECTIBLES_SHOP);
    }, []),
        l.useEffect(() => {
            "idle" !== E.state && "loading" !== E.state && A?.state === "error" && (0, d.pX)(ea.BV.COLLECTIBLES_SHOP);
        }, [E.state, A?.state]));
    let L = l.useCallback((e, n) => (0, a.jsx)(et, { storefront: n, selectedPageIndex: e }), []),
        m = l.useCallback((e, t, a) => ea.BV.COLLECTIBLES_SHOP_GAME_SHOP(n, e, t, a), [n]);
    return null == n || "success" !== E.state
        ? (0, a.jsx)("div", { className: o()(el.u1, el.kL, el.gI), children: (0, a.jsx)(r.y, {}) })
        : (0, a.jsx)(C.SocialLayerStorefrontInnerWrapper, {
              applicationId: n,
              guildId: S,
              skuId: i,
              pageIndex: I,
              analyticsPlacement: u.Ye.COLLECTIBLES_SHOP,
              renderHeader: L,
              getSocialLayerStorefrontLink: m,
          });
}
