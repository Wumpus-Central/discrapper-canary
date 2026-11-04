a.d(l, { SS: () => H, cP: () => z });
var t = a(477900),
    s = a(582128),
    n = a(503698),
    i = a.n(n),
    r = a(82495),
    c = a(793574),
    o = a(482589),
    d = a(892227),
    u = a(492462),
    h = a(855986),
    m = a(195118),
    x = a(916845),
    A = a(834730),
    f = a(43990),
    R = a(821609),
    E = a(303136),
    N = a(622886),
    j = a(976860),
    k = a(309954),
    p = a(287809),
    _ = a(975571),
    b = a(474090),
    C = a(920050),
    v = a(94264);
a(159975);
var O = a(566119),
    g = a(682901),
    L = a(652215),
    T = a(901123),
    S = a(17268),
    y = a(792996),
    B = a(226068),
    w = a(268920),
    M = a(633217),
    D = a(909340);
function U() {
    return (0, t.jsx)("div", {
        className: B.s,
        children: (0, t.jsx)(E.A, { src: M.A, fallbackImage: w.A, className: B.Cb }),
    });
}
function W() {
    ((0, O.b)(), window.open(_.A.getArticleURL(L.MVz.ORBS_FAQ), "_blank"));
}
function I(e) {
    let { targetElementRef: l, shouldShow: a, onRequestClose: n, onNavigate: r, ctaText: c, ctaOnClick: o } = e,
        { passesGeneralUIInvariant: _, programReward: w } = (0, N.F)(),
        M = (0, h.bG)([p.default], () => p.default.getCurrentUser()),
        { balance: I } = (0, k.W)(),
        P = !(0, b.ki)(M),
        F = s.useCallback(() => {
            ((0, O.RQ)(),
                n(),
                null != r && r(),
                (0, j.pX)(T.BV.NITRO_HOME, { search: (0, u.As)({ perk: C.NITRO_ORBS_REWARDS_CARD_ID }) }));
        }, [n, r]),
        K = s.useCallback(() => {
            ((0, O.gP)(),
                n(),
                null != r && r(),
                (0, j.pX)(T.BV.NITRO_HOME, { search: (0, u.As)({ section: "orbs" }) }));
        }, [n, r]),
        V = s.useMemo(() => {
            let e = (0, b.YE)(M, g.PremiumTypes.TIER_2);
            if (!_ || P) return null;
            if (e && null != w) {
                let e = (0, d.default)(new Date(w.next_reward_date), new Date());
                return (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(A.E, {
                            variant: "body-xs/normal",
                            color: "text-default",
                            children: y.intl.format(S.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: F,
                            }),
                        }),
                        (0, t.jsx)(v.A, {}),
                    ],
                });
            }
            return null;
        }, [M, P, w, _, F]),
        q = (I ?? 0) >= 4100;
    return (0, t.jsx)(m.x, {
        targetElementRef: l,
        shouldShow: a,
        onRequestClose: n,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, t.jsx)(f.N, {
            theme: q ? L.NJ8.DARK : void 0,
            children: (e) =>
                (0, t.jsxs)("div", {
                    className: i()(e, B.j),
                    children: [
                        q && (0, t.jsx)(E.A, { src: D.A, className: B.yG }),
                        (0, t.jsxs)("div", {
                            className: B.Qs,
                            children: [
                                (0, t.jsx)(x.q, { onClick: n }),
                                (0, t.jsxs)("div", {
                                    className: B.hQ,
                                    children: [
                                        (0, t.jsx)(U, {}),
                                        (0, t.jsxs)("div", {
                                            className: B.y$,
                                            children: [
                                                (I ?? 0) > 0 &&
                                                    (0, t.jsxs)("div", {
                                                        className: B.E2,
                                                        children: [
                                                            (0, t.jsx)(A.E, {
                                                                variant: "display-lg",
                                                                className: B.K,
                                                                children: I ?? 0,
                                                            }),
                                                            (0, t.jsx)(A.E, {
                                                                variant: "body-xs/normal",
                                                                color: "text-muted",
                                                                children: y.intl.string(S.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                V,
                                            ],
                                        }),
                                        (0, t.jsx)(R.$, {
                                            text: c,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: o,
                                            fullWidth: !0,
                                        }),
                                        (0, t.jsx)(A.E, {
                                            variant: "body-xs/normal",
                                            color: P ? "text-default" : "text-muted",
                                            className: B.CU,
                                            children: P
                                                ? y.intl.format(S.default.juvXqj, { deepLinkToNitroOrbs: K })
                                                : y.intl.format(S.default.fhAVek, { helpdeskArticle: W }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
        }),
    });
}
var P = a(318346),
    F = a(362862),
    K = a(923138),
    V = a(305003),
    q = a(219980),
    J = a(150849),
    Q = a(226346);
let z = { START: Q.Vl, END: Q.Wk };
function H(e) {
    let {
            showNotificationBadge: l,
            ctaText: a,
            ctaOnClick: n,
            onNavigate: d,
            analyticsPage: u,
            className: h,
            pillVariant: m,
            themeOverride: x,
        } = e,
        { balance: A } = (0, k.W)(),
        [f, R] = s.useState(V.k.DEFAULT),
        [E, N] = s.useState(!1),
        [j, p] = s.useState(!1),
        _ = s.useRef(null),
        b = s.useRef(null);
    (0, o.j)(!E);
    let C = (0, F.Hy)({ location: "BalanceWidgetMenu" }),
        v = s.useCallback(() => {
            let e = !E;
            (e &&
                null != u &&
                (0, P.Y)({
                    pageType: u,
                    sectionType: C ? c.A.ORB_WALLET : L.JJy.ORBS_BALANCE_MENU,
                    ctaObject: C ? c.A.ORB_WALLET_OPEN_FROM_BALANCE_PILL : L.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                }),
                R(e ? V.k.SELECTED : V.k.DEFAULT),
                N(e));
        }, [E, u, C]),
        O = s.useCallback(() => {
            E && v();
        }, [E, v]),
        g = (0, r.A)(null, O),
        { hasUnreadUpdate: T } = (0, K.I)({ enabled: C }),
        S = l ?? T,
        y = s.useMemo(
            () =>
                (0, t.jsx)(q.J, {
                    pillRef: _,
                    clickableRef: b,
                    ariaExpanded: E,
                    balance: A,
                    balanceWidgetMode: f,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: v,
                    variant: m,
                    themeOverride: x,
                    showNotificationBadge: S,
                }),
            [A, f, m, x, S, v, E],
        ),
        B = s.useCallback(
            (e) =>
                C
                    ? e
                        ? (0, t.jsx)(J.EA, {
                              cardRef: g,
                              returnRef: b,
                              targetElementRef: _,
                              shouldShow: e,
                              analyticsPage: u,
                              onCloseWallet: (e) => {
                                  (v(), "navigation" === e && null != d && d());
                              },
                          })
                        : null
                    : (0, t.jsx)(I, {
                          targetElementRef: _,
                          shouldShow: e,
                          onRequestClose: v,
                          ctaText: a,
                          onNavigate: d,
                          ctaOnClick: () => {
                              (v(), n());
                          },
                      }),
            [C, g, _, v, a, n, u, d],
        );
    return (0, t.jsxs)("div", { className: i()(Q.kL, h, { [Q.R]: j, [Q.RK]: !j }), children: [y, B(E)] });
}
H.CardAlignment = z;
