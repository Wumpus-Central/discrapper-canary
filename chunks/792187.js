l.d(t, { default: () => i2 });
var n,
    i,
    a = l(477900),
    s = l(582128),
    r = l.t(s, 2),
    c = l(503698),
    o = l.n(c),
    d = l(535185),
    u = l(17928),
    m = l(521489),
    x = l(192308),
    h = l(964486),
    g = l(793574),
    f = l(688810),
    j = l(206828),
    p = l(587895),
    E = l(590703),
    A = l(180170),
    v = l(583846),
    I = l(569926),
    N = l(570962),
    S = l(38145),
    C = l(773669),
    b = l(409626),
    T = (((n = {}).OVERVIEW = "overview"), (n.COMMUNITIES = "communities"), (n.COMMERCE = "commerce"), n),
    y = l(422069),
    R = l(205184),
    k = l(957807);
let L = {
    [T.OVERVIEW]: b.GameProfileTrackActionActions.Overview,
    [T.COMMUNITIES]: b.GameProfileTrackActionActions.Communities,
    [T.COMMERCE]: b.GameProfileTrackActionActions.GameShop,
};
var G = l(49491),
    M = l(429913),
    O = l(832163),
    P = l(820847),
    _ = l(862772),
    w = l(287809);
let V = s.createContext(void 0);
function D() {
    let e = s.useContext(V);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var U = l(109112),
    F = l(761508),
    Y = l(834730),
    W = l(739187),
    B = l(857250),
    H = l(97483),
    z = l(922016),
    X = l(980707),
    K = l(477782),
    J = l(821609),
    $ = l(663341),
    Q = l(866665),
    q = l(408278),
    Z = l(34188),
    ee = l(173936),
    et = l(365199),
    el = l(789645),
    en = l(442433),
    ei = l(50268),
    ea = l(44724),
    es = l(676924),
    er = l(957565),
    ec = l(945810);
let eo = { enabled: !1 },
    ed = (0, ec.mj)({
        name: "2026-09-game-profiles-v3-commerce-tab",
        kind: "user",
        defaultConfig: eo,
        variations: { 0: eo, 1: { enabled: !0 } },
    });
function eu(e) {
    let { location: t } = e;
    return ed.useConfig({ location: t }).enabled;
}
var em = l(695366),
    ex = l(660183);
l(321073);
var eh = l(540185),
    eg = l(926268),
    ef = l(53788),
    ej = l(831453),
    ep = l(785866),
    eE = l(555704),
    eA = l(47675),
    ev = l(633075),
    eI = l(289173),
    eN = l(321191),
    eS = l(958805),
    eC = l(735321),
    eb = l(96173),
    eT = l(280450),
    ey = l(403362);
async function eR(e) {
    let t = e((0, eC.BF)());
    await eS.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
var ek = l(652215);
function eL(e) {
    var t;
    let n,
        i,
        { className: c, activeTab: o } = e,
        { game: d, closeModal: m, trackAction: h } = D(),
        f = s.useRef(null),
        j = s.useRef(null),
        p = (0, ei.A)({ id: d.id, label: ex.intl.string(ex.t.SHQGPj) }),
        E =
            ((t = d.id),
            (n = r.useContext(V)?.trackAction),
            (i = s.useCallback(() => {
                null != t &&
                    (n?.(b.GameProfileTrackActionActions.Feedback),
                    (0, x.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            l.e("142753"),
                            l.e("250440"),
                            l.e("568035"),
                            l.e("268582"),
                            l.e("733771"),
                            l.e("946039"),
                            l.e("55266"),
                            l.e("627495"),
                        ]).then(l.bind(l, 651930));
                        return (l) => (0, a.jsx)(e, { ...l, detected: { gameId: t } });
                    }));
            }, [t, n])),
            null == t
                ? null
                : (0, a.jsx)(K.Dr, {
                      id: "game-profile-something-wrong",
                      label: ex.intl.string(ex.t.qP2cXd),
                      action: i,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: em.E },
                  })),
        A = (function (e) {
            let t = e?.id,
                l = e?.name ?? "",
                n = (0, u.bG)([eT.default], () => eT.default.getId()),
                i = s.useMemo(
                    () => [
                        {
                            type: eh.x.FAVORITE_GAMES,
                            addLabel: ex.intl.string(ex.t.fgmitg),
                            removeLabel: ex.intl.string(ex.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: eg.HeartIcon,
                        },
                        {
                            type: eh.x.PLAYED_GAMES,
                            addLabel: ex.intl.string(ex.t["0xIVLR"]),
                            removeLabel: ex.intl.string(ex.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: ef.G,
                        },
                        {
                            type: eh.x.CURRENT_GAMES,
                            addLabel: ex.intl.string(ex.t.G0c4En),
                            removeLabel: ex.intl.string(ex.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: ej.H,
                        },
                        {
                            type: eh.x.WANT_TO_PLAY_GAMES,
                            addLabel: ex.intl.string(ex.t.UuBS4K),
                            removeLabel: ex.intl.string(ex.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: ep._,
                        },
                    ],
                    [],
                ),
                r = (0, u.yK)([eN.A], () => (null == n ? [] : (eN.A.getUserProfile(n)?.widgets ?? [])), [n]),
                c = (0, eb.A)(),
                o = s.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...c, ...r].filter((e) => e instanceof ev.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(ey.Vq).find((e) => t.has(e)) ?? null;
                }, [c, r, e]),
                d = s.useCallback(
                    async (e, l) => {
                        let n;
                        if (
                            (await eR((i) => {
                                let a = i.filter(eI.fu).find((t) => t.type === e) ?? null;
                                if (l) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, eC.uA)(a))) return i;
                                    let l = { gameId: t },
                                        s = null != a ? [l, ...(a.games ?? [])] : [l];
                                    n = new eI.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    n = new eI.Yy({ ...a, games: e });
                                }
                                var s = n;
                                let r = i.findIndex((e) => e.getUniqueKey() === s.getUniqueKey());
                                if (-1 === r) return [s, ...i];
                                let c = [...i];
                                return ((c[r] = s), c);
                            }),
                            null == n)
                        )
                            return;
                        let i = n;
                        (0, eA.un)({
                            action: l ? "GAME_ADDED" : "GAME_REMOVED",
                            gameId: t,
                            ...i.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [t],
                ),
                m = s.useCallback(
                    async (e) => {
                        let t;
                        if (
                            null == o ||
                            (await eR((l) =>
                                e
                                    ? l.some((e) => e instanceof ev.R && e.applicationId === o)
                                        ? l
                                        : [(t = new ev.R({ applicationId: o })), ...l]
                                    : ((t = l.find((e) => e instanceof ev.R && e.applicationId === o) ?? null),
                                      l.filter((e) => !(e instanceof ev.R && e.applicationId === o))),
                            ),
                            null == t)
                        )
                            return;
                        let l = t;
                        (0, eA.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...l.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [o],
                );
            if (null == n) return null;
            let x = null != e && (0, eC.XX)(e),
                h = [];
            if (null != o) {
                let e = r.some((e) => e instanceof ev.R && e.applicationId === o);
                h.push(
                    (0, a.jsx)(
                        K.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? ex.intl.formatToPlainString(ex.t.Ktb1n8, { name: l })
                                : ex.intl.formatToPlainString(ex.t.Xp6iZt, { name: l }),
                            action: () => m(!e),
                            leadingAccessory: { type: "icon", icon: eE.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (x)
                for (let e of i) {
                    let l = r.filter(eI.fu).find((t) => t.type === e.type) ?? null,
                        n = null != l && l.games.some((e) => e.gameId === t),
                        i = !n && null != l && (0, eC.uA)(l);
                    h.push(
                        (0, a.jsx)(
                            K.Dr,
                            {
                                id: e.menuId,
                                label: n ? e.removeLabel : e.addLabel,
                                subtext: i ? ex.intl.string(ex.t["86OoiH"]) : void 0,
                                subtextLineClamp: 1,
                                action: () => d(e.type, !n),
                                leadingAccessory: { type: "icon", icon: e.icon },
                                disabled: i,
                            },
                            e.type,
                        ),
                    );
                }
            return 0 === h.length ? null : h;
        })(d),
        v = eu({ location: "GameProfileOverflowMenu" }),
        I = (0, u.bG)([O.A], () => O.A.getApplicationIdFromDetectableId(d.id)),
        N = (0, u.bG)([O.A], () => O.A.hasStorefrontForApplicationId(I), [I]),
        S = s.useCallback(() => {
            null != I && (0, ea.G)({ applicationId: I });
        }, [I]),
        C = s.useCallback(() => {
            null != I && (h(b.GameProfileTrackActionActions.GameShop), (0, ea.default)({ applicationId: I }), m());
        }, [I, h, m]),
        y = s.useCallback(() => m(!1), [m]),
        R = s.useCallback(() => {
            h(b.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${ek.BVt.GAME_PROFILE(d.id)}`;
            (0, er.C)(e, () => {
                (0, W.P)((0, B.o)(ex.intl.string(ex.t["+5kSoW"]), H.Ck.SUCCESS));
            });
        }, [d.id, h]);
    return (0, a.jsxs)("div", {
        className: c,
        children: [
            o === T.COMMERCE &&
                (0, a.jsx)(es.A, {
                    location: g.A.GAME_PROFILE,
                    onNavigate: m,
                    variant: "overlay-secondary",
                    themeOverride: "dark",
                }),
            null != A &&
                o !== T.COMMERCE &&
                (0, a.jsx)(z.Y, {
                    targetElementRef: j,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(X.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                ((0, en.Z_)(), t());
                            },
                            "aria-label": ex.intl.string(ex.t.sidPSo),
                            onSelect: () => {},
                            children: (0, a.jsx)(K.rX, { children: A }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)("div", {
                            ...e,
                            ref: j,
                            children: (0, a.jsx)(J.$, {
                                icon: $.PlusLargeIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: ex.intl.string(ex.t.sidPSo),
                            }),
                        }),
                }),
            N &&
                !v &&
                (0, a.jsx)(Q.m, {
                    text: ex.intl.string(ex.t.apFNLU),
                    children: (0, a.jsx)(q.K, {
                        icon: Z.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": ex.intl.string(ex.t.apFNLU),
                        onMouseDown: S,
                        onClick: C,
                    }),
                }),
            o !== T.COMMERCE &&
                (0, a.jsx)(Q.m, {
                    text: ex.intl.string(ex.t.WqhZss),
                    children: (0, a.jsx)(q.K, {
                        icon: ee.LinkIcon,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": ex.intl.string(ex.t.WqhZss),
                        onClick: R,
                    }),
                }),
            (null != p || null != E) &&
                o !== T.COMMERCE &&
                (0, a.jsx)(z.Y, {
                    targetElementRef: f,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(X.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                ((0, en.Z_)(), t());
                            },
                            "aria-label": ex.intl.string(ex.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(K.rX, { children: E }), (0, a.jsx)(K.rX, { children: p })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)(Q.m, {
                            text: ex.intl.string(ex.t["UKOtz+"]),
                            children: (0, a.jsx)("div", {
                                ...e,
                                ref: f,
                                children: (0, a.jsx)(q.K, {
                                    icon: et.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": ex.intl.string(ex.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, a.jsx)(q.K, {
                icon: el.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: y,
                "aria-label": ex.intl.string(ex.t.cpT0Cq),
            }),
        ],
    });
}
let eG = { enabled: !1 },
    eM = (0, ec.mj)({
        name: "2026-09-game-profiles-v3-communities-tab",
        kind: "user",
        defaultConfig: eG,
        variations: { 0: eG, 1: { enabled: !0 } },
    });
function eO(e) {
    let { className: t, navigation: l } = e,
        { selectedTab: n, selectTab: i } = l;
    if (
        !(function (e) {
            let { location: t } = e;
            return eM.useConfig({ location: t }).enabled;
        })({ location: "GameProfileCommunitiesTabBar" })
    )
        return null;
    let s = ex.intl.string(ex.t["3xFZEo"]);
    return (0, a.jsx)(F.V.Item, {
        id: T.COMMUNITIES,
        look: "brand",
        disableItemStyles: !0,
        selectedItem: n,
        onClick: () => i(T.COMMUNITIES),
        className: t,
        "aria-label": s,
        children: (0, a.jsx)(Y.E, { variant: "text-md/medium", color: "none", children: s }),
    });
}
function eP(e) {
    let { className: t, navigation: l } = e,
        { game: n } = D();
    return (n.communityGuildIds?.length ?? 0) < 3 ? null : (0, a.jsx)(eO, { className: t, navigation: l });
}
var e_ = l(661531),
    ew = l(331322),
    eV = l(278416),
    eD = l(478016),
    eU = l(900797),
    eF = l(847374),
    eY = l(421773),
    eW = l(421108);
let eB = "text-md/medium",
    eH = [];
function ez(e) {
    let { label: t, chevron: l, socialLayerStorefront: n } = e,
        i = (function (e) {
            let { hasCommerceTab: t, storefront: l } = e,
                n = Object.values(l?.promotions ?? {}).find((e) => {
                    let { flavor: t, endsAt: l } = e;
                    return "nitro" === t && (null == l || null != (0, eW.ZH)(l));
                }),
                i = (0, eW.tm)(n?.endsAt);
            return t && null != n && !i;
        })(n);
    return (0, a.jsxs)(ew.B, {
        as: "span",
        direction: "horizontal",
        align: "center",
        gap: 8,
        fullWidth: !1,
        children: [
            i &&
                (0, a.jsx)(eV.TagIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: e_.A.colors.ICON_FEEDBACK_POSITIVE,
                    "aria-hidden": "true",
                }),
            (0, a.jsxs)(ew.B, {
                as: "span",
                direction: "horizontal",
                align: "center",
                gap: 4,
                fullWidth: !1,
                children: [t, l],
            }),
        ],
    });
}
function eX(e) {
    let { className: t, label: l, navigation: n, socialLayerStorefront: i } = e,
        { selectedTab: r, selectTab: c } = n,
        { storefront: o, selectedStorefrontPageIndex: d, selectStorefrontPage: u } = i,
        m = o?.pages ?? eH,
        x = s.useRef(null),
        { isHovered: h, setIsHovered: g, onMouseEnter: f, onMouseLeave: j, cancelTimers: p } = (0, eY.A)(100, 100),
        E = ex.intl.string(ex.t["J3/JCl"]),
        A = s.useCallback(
            (e) => {
                (p(), g(e));
            },
            [p, g],
        );
    return (0, a.jsx)(z.Y, {
        targetElementRef: x,
        shouldShow: h,
        position: "bottom",
        align: "left",
        useMouseEnter: !0,
        onRequestOpen: () => A(!0),
        onRequestClose: () => A(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)("div", {
                onMouseEnter: f,
                onMouseLeave: j,
                children: (0, a.jsx)(X.W, {
                    navId: "game-profile-commerce-pages",
                    "aria-label": E,
                    onClose: t,
                    onSelect: void 0,
                    children: (0, a.jsx)(K.rX, {
                        children: m.map((e, t) => {
                            var l;
                            let n,
                                i = r === T.COMMERCE && t === d,
                                s =
                                    ((l = e.title),
                                    null != (n = l?.trim()) && n.length > 0
                                        ? n
                                        : ex.intl.formatToPlainString(ex.t.IGMs8S, { pageNumber: t + 1 }));
                            return (0, a.jsx)(
                                K.Dr,
                                {
                                    id: `commerce-page-${t}`,
                                    label: s,
                                    color: i ? "brand" : "default",
                                    trailingIndicator: i ? { type: "icon", icon: eD.U } : void 0,
                                    action: () => u(t),
                                },
                                t,
                            );
                        }),
                    }),
                }),
            });
        },
        children: (e, n) => {
            let { isShown: s } = n,
                o = s ? eU.t : eF.a;
            return (0, a.jsx)(F.V.Item, {
                ...e,
                id: T.COMMERCE,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: r === T.COMMERCE ? T.COMMERCE : void 0,
                onClick: (t) => {
                    (c(T.COMMERCE), e.onClick(t));
                },
                onMouseLeave: j,
                clickableRef: (e) => {
                    x.current = e?.ref ?? null;
                },
                className: t,
                "aria-label": E,
                "aria-haspopup": "menu",
                children: (0, a.jsx)(Y.E, {
                    variant: eB,
                    color: "none",
                    children: (0, a.jsx)(ez, {
                        label: l,
                        chevron: (0, a.jsx)(o, { size: "xs", color: "currentColor" }),
                        socialLayerStorefront: i,
                    }),
                }),
            });
        },
    });
}
function eK(e) {
    let { className: t, navigation: l, socialLayerStorefront: n } = e,
        { selectedTab: i, selectTab: s } = l,
        { hasCommerceTab: r, storefront: c } = n;
    if (!r) return null;
    let o = ex.intl.string(ex.t.apFNLU);
    return (c?.pages.length ?? 0) > 1
        ? (0, a.jsx)(eX, { className: t, label: o, navigation: l, socialLayerStorefront: n })
        : (0, a.jsx)(F.V.Item, {
              id: T.COMMERCE,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: i,
              onClick: () => s(T.COMMERCE),
              className: t,
              "aria-label": o,
              children: (0, a.jsx)(Y.E, {
                  variant: eB,
                  color: "none",
                  children: (0, a.jsx)(ez, { label: o, socialLayerStorefront: n }),
              }),
          });
}
var eJ = l(510954);
function e$(e) {
    let { navigation: t, socialLayerStorefront: l } = e,
        { game: n } = D(),
        { selectedTab: i, selectTab: r } = t,
        c = n.getIconURL(64),
        [o, d] = s.useState(null),
        u = s.useCallback(() => d(c), [c]),
        m = ex.intl.string(ex.t.qHmbyh);
    return (0, a.jsx)("div", {
        className: eJ.wx,
        children: (0, a.jsxs)("div", {
            className: eJ.ap,
            children: [
                (0, a.jsx)("div", {
                    className: eJ.wE,
                    children:
                        null != c && c !== o
                            ? (0, a.jsx)("img", { src: c, alt: "", className: eJ.FC, draggable: !1, onError: u })
                            : (0, a.jsx)(U._, { size: "md" }),
                }),
                (0, a.jsxs)(F.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: i,
                    onItemSelect: r,
                    className: eJ.vR,
                    children: [
                        (0, a.jsx)(F.V.Item, {
                            id: T.OVERVIEW,
                            disableItemStyles: !0,
                            className: eJ.Mf,
                            "aria-label": m,
                            children: (0, a.jsx)(Y.E, { variant: "text-md/medium", color: "none", children: m }),
                        }),
                        (0, a.jsx)(eP, { className: eJ.Mf, navigation: t }),
                        (0, a.jsx)(eK, { className: eJ.Mf, navigation: t, socialLayerStorefront: l }),
                    ],
                }),
                (0, a.jsx)(eL, { className: eJ.HK, activeTab: i }),
            ],
        }),
    });
}
var eQ = l(435558),
    eq = l.n(eQ),
    eZ = l(689175),
    e0 = l(448741),
    e1 = l(71393),
    e8 = l(449054),
    e3 = l(297264),
    e2 = l(73153),
    e4 = l(37537),
    e6 = l(714991),
    e5 = l(486020),
    e7 = l(240248),
    e9 = l(810729);
let te = { sm: e9.nz, md: e9.a };
function tt(e) {
    let { className: t, width: l } = e;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: o()(e9.qf, t), style: { width: l } });
}
function tl(e) {
    let { animationDelayMs: t, children: l, className: n } = e,
        i = null != t ? { "--custom-game-profile-skeleton-animation-delay": `${t}ms` } : void 0;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: n, style: i, children: l });
}
function tn(e) {
    let { className: t, size: l = "md" } = e;
    return (0, a.jsx)(tt, { className: o()(e9.x6, te[l], t) });
}
var ti = l(213098);
function ta() {
    return (0, a.jsxs)(tl, {
        className: ti.uW,
        animationDelayMs: 300,
        children: [
            (0, a.jsx)(tt, { className: ti.dU, width: "30%" }),
            (0, a.jsx)(tl, {
                className: ti.nV,
                children: (0, a.jsxs)("div", {
                    className: ti.hQ,
                    children: [
                        (0, a.jsxs)("div", {
                            className: ti.To,
                            children: [
                                (0, a.jsx)(tt, { className: ti.QV }),
                                (0, a.jsxs)("div", {
                                    className: ti.Yv,
                                    children: [
                                        (0, a.jsx)(tt, { className: ti.Ag }),
                                        (0, a.jsx)(tt, { className: ti.zl }),
                                        (0, a.jsx)(tt, { className: ti.P2 }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)(tn, {}),
                    ],
                }),
            }),
        ],
    });
}
function ts(e) {
    let { guild: t } = e,
        l = e5.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [n, i] = s.useState(void 0),
        r = null != l && n !== l,
        c = s.useCallback(() => {
            i(l);
        }, [l]);
    return (0, a.jsxs)("div", {
        className: ti._C,
        children: [
            r && (0, a.jsx)(tt, { className: ti.EQ }),
            (0, a.jsx)("img", {
                className: ti.$f,
                src: l,
                alt: ex.intl.formatToPlainString(ex.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: c,
                onError: c,
            }),
        ],
    });
}
function tr(e) {
    let { guild: t, presenceCount: l, memberCount: n, isMember: i, onJoin: s, className: r } = e;
    return (0, a.jsx)("div", {
        className: o()(ti.kL, r),
        children: (0, a.jsxs)("div", {
            className: ti.hQ,
            children: [
                (0, a.jsxs)("div", {
                    className: ti.To,
                    children: [
                        (0, a.jsx)(ts, { guild: t }),
                        (0, a.jsxs)("div", {
                            className: ti.yj,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: ti.YS,
                                    children: [
                                        (0, a.jsx)(e6.A, { guild: t, size: 16 }),
                                        (0, a.jsx)(e3.D, {
                                            className: ti.J5,
                                            variant: "heading-md/semibold",
                                            color: "text-default",
                                            children: t.name,
                                        }),
                                    ],
                                }),
                                !(0, e7.uJ)(t.description) &&
                                    (0, a.jsx)(Y.E, {
                                        className: ti.h_,
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: t.description,
                                    }),
                                null != l || null != n
                                    ? (0, a.jsxs)("div", {
                                          className: ti.iR,
                                          children: [
                                              null != l &&
                                                  (0, a.jsxs)("div", {
                                                      className: ti.Tb,
                                                      children: [
                                                          (0, a.jsx)("i", { className: ti._o }),
                                                          (0, a.jsx)(Y.E, {
                                                              variant: "text-xs/normal",
                                                              color: "text-muted",
                                                              children: ex.intl.format(ex.t["LC+S+m"], {
                                                                  membersOnline: l,
                                                              }),
                                                          }),
                                                      ],
                                                  }),
                                              null != n &&
                                                  (0, a.jsxs)("div", {
                                                      className: ti.Tb,
                                                      children: [
                                                          (0, a.jsx)("i", { className: ti.jk }),
                                                          (0, a.jsx)(Y.E, {
                                                              variant: "text-xs/normal",
                                                              color: "text-muted",
                                                              children: ex.intl.format(ex.t.zRl6XR, { count: n }),
                                                          }),
                                                      ],
                                                  }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(J.$, {
                    variant: "secondary",
                    text: i ? ex.intl.string(ex.t.cEnaWx) : ex.intl.string(ex.t.XpeFYr),
                    onClick: s,
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
function tc() {
    let e = (0, e4.c)("GameProfileGuildInvite"),
        {
            invite: t,
            hasDiscordWebsite: l,
            isCommunityInviteResolving: n,
            isMember: i,
            closeModal: r,
            trackAction: c,
        } = D(),
        o = s.useCallback(() => {
            null != t &&
                (c(b.GameProfileTrackActionActions.JoinServer),
                r(),
                e2.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: t.code, context: ek.BRT.APP }));
        }, [t, c, r]);
    return null == t || null == t.guild
        ? l && n
            ? (0, a.jsx)(ta, {})
            : null
        : (0, a.jsxs)("div", {
              className: ti.uW,
              children: [
                  (0, a.jsx)(e3.D, {
                      className: ti.Gf,
                      variant: e ? "text-md/medium" : "heading-sm/semibold",
                      color: e ? "text-subtle" : "text-strong",
                      children: ex.intl.string(ex.t["U2N+ci"]),
                  }),
                  (0, a.jsx)(tr, {
                      guild: t.guild,
                      presenceCount: t.approximate_presence_count,
                      memberCount: t.approximate_member_count,
                      isMember: i,
                      onJoin: o,
                  }),
              ],
          });
}
var to = l(320448),
    td = l(152594);
function tu(e) {
    let { children: t, skeletonTitleWidth: l, showViewAllSkeleton: n } = e;
    return (0, a.jsxs)("div", {
        className: td.kL,
        "aria-busy": !0,
        children: [
            (0, a.jsxs)("div", {
                className: td.wR,
                children: [(0, a.jsx)(tt, { className: td.Iz, width: l }), n && (0, a.jsx)(tn, { size: "sm" })],
            }),
            t,
        ],
    });
}
function tm(e) {
    let { children: t, title: l, onClickViewAll: n } = e;
    return (0, a.jsxs)("div", {
        className: td.kL,
        children: [
            (0, a.jsxs)("div", {
                className: td.wR,
                children: [
                    (0, a.jsx)(e3.D, { variant: "heading-lg/medium", children: l }),
                    null != n &&
                        (0, a.jsx)(J.$, {
                            size: "sm",
                            icon: to._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: n,
                            text: ex.intl.string(ex.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var tx = l(311043),
    th = l(636537);
let tg = {};
class tf extends u.Ay.Store {
    static displayName = "DiscoverableGuildsStore";
    initialize() {
        this.waitFor(eT.default);
    }
    getGuild(e) {
        return tg[e]?.guild ?? null;
    }
    getGuilds(e) {
        return e.map((e) => tg[e]?.guild).filter(ey.Vq);
    }
    isFetching(e) {
        return e.some((e) => tg[e]?.fetchState === "fetching");
    }
    getStaleGuildIds(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return e.filter((e) => {
            let l = tg[e];
            return (
                null == l ||
                "failed" === l.fetchState ||
                ("fetching" !== l.fetchState && (null == l.fetchedAt || t - l.fetchedAt >= 36e5))
            );
        });
    }
}
let tj = new tf(e2.h, {
        DISCOVERABLE_GUILDS_FETCH_START: function (e) {
            let { guildIds: t } = e;
            for (let e of t)
                tg[e] = { guild: tg[e]?.guild ?? null, fetchState: "fetching", fetchedAt: tg[e]?.fetchedAt ?? null };
        },
        DISCOVERABLE_GUILDS_FETCH_SUCCESS: function (e) {
            let { guildIds: t, guilds: l } = e,
                n = Date.now(),
                i = new Map(l.map((e) => [e.id, (0, e8.jE)(e)]));
            for (let e of t) tg[e] = { guild: i.get(e) ?? null, fetchState: "succeeded", fetchedAt: n };
        },
        DISCOVERABLE_GUILDS_FETCH_FAILURE: function (e) {
            let { guildIds: t } = e;
            for (let e of t)
                tg[e] = { guild: tg[e]?.guild ?? null, fetchState: "failed", fetchedAt: tg[e]?.fetchedAt ?? null };
        },
    }),
    tp = new Map();
async function tE(e) {
    e2.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_START", guildIds: e });
    try {
        let t = await th.Bo.get({
                url: ek.Rsh.GUILD_DISCOVERY,
                query: { guild_ids: e },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            l = t.body?.guilds ?? [];
        e2.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_SUCCESS", guildIds: e, guilds: l });
    } catch (t) {
        throw (e2.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_FAILURE", guildIds: e }), t);
    }
}
async function tA(e) {
    let t = tj.getStaleGuildIds(e),
        l = new Set();
    for (let t of e) {
        let e = tp.get(t);
        null != e && l.add(e);
    }
    if (t.length > 0) {
        let e = tE(t).finally(() => {
            for (let l of t) tp.get(l) === e && tp.delete(l);
        });
        for (let l of t) tp.set(l, e);
        l.add(e);
    }
    await Promise.all(l);
}
var tv = l(927813);
let tI = [];
function tN(e) {
    return tx.A.getGame(e)?.communityGuildIds ?? tI;
}
let tS = (0, u.UT)(tj, {
    getQueryId: (e) => (tN(e).length > 0 ? `game-community-guilds/${e}` : null),
    get: (e) => tj.getGuilds(tN(e)),
    load: async (e) => {
        let t = tN(e);
        t.length > 0 && (await tA(t));
    },
    staleAfter: tv.A.Seconds.HOUR,
    failureStaleAfter: tv.A.Seconds.MINUTE,
});
var tC = l(620387);
function tb(e) {
    let { animationDelayMs: t } = e;
    return (0, a.jsxs)(tl, {
        className: tC.s7,
        animationDelayMs: t,
        children: [
            (0, a.jsxs)("div", {
                className: tC.Xc,
                children: [
                    (0, a.jsx)(tt, { className: tC.VR }),
                    (0, a.jsxs)("div", {
                        className: tC.hG,
                        children: [
                            (0, a.jsx)(tt, { className: tC.t_ }),
                            (0, a.jsx)(tt, { className: tC.Aj }),
                            (0, a.jsx)(tt, { className: tC.Ah }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(tn, {}),
        ],
    });
}
function tT(e) {
    let { guild: t } = e,
        { closeModal: l, trackAction: n, viewId: i } = D(),
        r = (0, u.bG)([e1.A], () => e1.A.getGuild(t.id)?.joinedAt != null, [t.id]),
        c = s.useCallback(async () => {
            (n(b.GameProfileTrackActionActions.CommunityClicked, void 0, t.id), l());
            try {
                await e8.Z2(t.id, {}, { joinSource: ek.Q4z.GAME_PROFILE_COMMUNITIES, loadId: i }, [
                    g.A.GAME_PROFILE_COMMUNITIES,
                ]);
            } catch (e) {
                (0, e0._)(e);
            }
        }, [t.id, n, l, i]);
    return (0, a.jsx)(tr, {
        guild: t,
        presenceCount: t.presenceCount,
        memberCount: t.memberCount,
        isMember: r,
        onJoin: c,
    });
}
function ty() {
    let { game: e } = D(),
        { data: t, isLoading: l } = tS(e.id),
        n = l && (null == t || 0 === t.length);
    return (0, a.jsxs)(eZ.Ch, {
        className: tC.XG,
        children: [
            (0, a.jsx)("div", { className: tC.xY, "aria-hidden": !0 }),
            (0, a.jsx)("div", {
                className: tC.uW,
                children: (0, a.jsx)(tm, {
                    title: ex.intl.string(ex.t.r6bvTh),
                    children: (0, a.jsx)("div", {
                        className: tC.Vg,
                        children: n
                            ? eq()
                                  .range(8)
                                  .map((e) => (0, a.jsx)(tb, { animationDelayMs: 150 * e }, e))
                            : (t ?? []).map((e) => (0, a.jsx)(tT, { guild: e }, e.id)),
                    }),
                }),
            }),
        ],
    });
}
var tR = l(707554),
    tk = l(369606),
    tL = l(939249),
    tG = l(775602),
    tM = l(21161),
    tO = l(400492),
    tP = l(541830),
    t_ = l(459746);
let tw = "1552821538409939044";
var tV = l(175213);
let tD = l(892799);
function tU(e) {
    let { ref: t } = e,
        { game: l } = D(),
        n = (function (e) {
            let [t] = s.useState(() => Math.random());
            return s.useMemo(() => {
                let l = e.getBannerURL(1400);
                if (null != l) return l;
                let n = e.screenshotUrls?.length ?? 0;
                return 0 === n ? null : e.getScreenshotURL(Math.floor(t * n), 1400);
            }, [1400, e, t]);
        })(l);
    return (0, e7.uJ)(n)
        ? null
        : (0, a.jsxs)("div", {
              ref: t,
              children: [
                  (0, a.jsx)("div", { className: tV.y1, style: { backgroundImage: `url("${n}")` } }),
                  (0, a.jsx)("div", { className: tV.N4 }),
              ],
          });
}
function tF() {
    let { game: e } = D(),
        t = (e.genres ?? []).map(tP.du).join(", ");
    return (0, e7.uJ)(t) ? null : (0, a.jsx)(Y.E, { variant: "text-md/normal", color: "text-muted", children: t });
}
function tY(e) {
    let { rank: t } = e;
    return (0, a.jsxs)("div", {
        className: tV.Qc,
        children: [
            (0, a.jsx)(tk.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, a.jsx)(Y.E, {
                variant: "text-xs/bold",
                color: "none",
                children: ex.intl.formatToPlainString(ex.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function tW() {
    let { game: e } = D();
    return (0, a.jsx)(tB, { className: o()(tV._M, (0, t_.cO)(e) && tV.i3), imageClassName: tV.xe });
}
function tB(e) {
    let { className: t, imageClassName: l } = e,
        { game: n } = D(),
        i = (0, a.jsx)(t_.Ay, { game: n, className: l, size: t_.wu.LARGE });
    return n.id !== tw
        ? (0, a.jsx)("div", { className: t, children: i })
        : (0, a.jsx)(tH, { className: t, children: i });
}
function tH(e) {
    let { children: t, className: l } = e,
        { createMultipleConfettiAt: n } = s.useContext(tM.x),
        i = (0, u.bG)([tG.Ay], () => tG.Ay.useReducedMotion),
        r = s.useRef({ count: 0, lastTime: 0 });
    return (0, a.jsx)(tL.D, {
        className: o()(l, tV.b3),
        "aria-label": ex.intl.string(ex.t.M2b74O),
        onClick: function (e) {
            let t = Date.now(),
                l = r.current,
                a = t - l.lastTime > 1e4 ? 1 : l.count + 1;
            if (((r.current = { count: a, lastTime: t }), 3 === a)) {
                if (((r.current = { count: 0, lastTime: 0 }), !i)) {
                    let t = e.currentTarget.getBoundingClientRect();
                    n(t.left + t.width / 2, t.top + t.height / 2);
                }
                (0, tO.Ak)("discodo");
            }
        },
        children: t,
    });
}
let tz = function () {
    let { game: e, isTwoColumn: t } = D(),
        l = e.name;
    return (0, a.jsxs)("div", {
        className: tV.ap,
        children: [
            t && (0, a.jsx)(tB, { className: o()(tV.Tf, (0, t_.cO)(e) && tV.wS), imageClassName: tV.w$ }),
            (0, a.jsxs)("div", {
                className: tV.lu,
                children: [
                    null != e.l30Rank && (0, a.jsx)(tY, { rank: e.l30Rank }),
                    (0, a.jsxs)("div", {
                        className: tV.$,
                        children: [
                            (0, a.jsx)(e3.D, { variant: "heading-xxl/semibold", children: l }),
                            e.id === tw &&
                                (0, a.jsx)("img", {
                                    src: tD,
                                    className: tV.IU,
                                    alt: "",
                                    "aria-hidden": "true",
                                    draggable: !1,
                                }),
                        ],
                    }),
                    (0, a.jsx)(tF, {}),
                ],
            }),
        ],
    });
};
var tX = l(792216),
    tK = l(638495),
    tJ = l(871123),
    t$ = l(439303),
    tQ = l(317560),
    tq = l(467884),
    tZ = l(480713),
    t0 = l(449543),
    t1 = l(197935),
    t8 = l(761812);
function t3(e) {
    return e;
}
function t2(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: t8.B, children: t });
}
function t4(e) {
    let { skuIds: t, analyticsLocations: l, onCardClick: n } = e,
        i = (0, tZ.l)("social_layer_storefront_card_row"),
        r = s.useMemo(() => {
            if (null != n)
                return (e, t) => {
                    let { skuId: l, applicationId: i } = t;
                    (e.preventDefault(), n(l, i));
                };
        }, [n]);
    return null == t || 0 === t.length
        ? null
        : i
          ? (0, a.jsx)(t1.A, {
                gap: "md",
                "aria-label": `${ex.intl.string(ex.t["kocF+6"])}`,
                items: t,
                getItemKey: t3,
                disableFocusRingScope: !0,
                renderItem: (e, t, n) =>
                    (0, a.jsx)(t2, {
                        children: (0, a.jsx)(tq.Ay, {
                            positionInSection: n,
                            skuId: e,
                            variant: tq.s6.SMALL,
                            analyticsLocations: l,
                            onClick: r,
                            listItemProps: t,
                        }),
                    }),
            })
          : (0, a.jsx)(t0.A, {
                gap: "md",
                "aria-label": ex.intl.string(ex.t["kocF+6"]),
                children: t.map((e, t) =>
                    (0, a.jsx)(
                        t2,
                        {
                            children: (0, a.jsx)(tq.Ay, {
                                positionInSection: t,
                                skuId: e,
                                variant: tq.s6.SMALL,
                                analyticsLocations: l,
                                onClick: r,
                            }),
                        },
                        `${e}-${t}`,
                    ),
                ),
            });
}
var t6 = l(369435);
function t5(e) {
    let { children: t, gap: l = "md" } = e;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: o()(t6.n, { [t6.C]: 16 === l }), children: t });
}
var t7 = l(936785),
    t9 = l(403581),
    le = l(812095),
    lt = l(647474),
    ll = l(162536);
function ln(e) {
    let { promotion: t, className: l } = e,
        n = t.endsAt;
    if ((0, eW.tm)(n)) return null;
    let i = "nitro" === t.flavor,
        s = i ? t9.t : t.Icon;
    return (0, a.jsx)(lt.A, {
        className: o()(ll.vK, l),
        color: i ? "nitro-pink" : void 0,
        children: (0, a.jsxs)("div", {
            className: ll.Qs,
            children: [
                null != s && (0, a.jsx)(s, { size: "xs", color: "currentColor", className: ll.Kk }),
                (0, a.jsx)(Y.E, { variant: "text-sm/normal", color: "currentColor", children: (0, le.U)(t.text) }),
            ],
        }),
    });
}
var li = l(521058);
function la() {
    let { storefrontPromotion: e } = D();
    if (null == e || "nitro" !== e.flavor) return null;
    let { endsAt: t, flavor: l, pdp: n, rewardRequirements: i, storefront: s } = e;
    if (null == s || (0, e7.uJ)(s.headerText)) return null;
    let r = {
        Icon: (0, t7.LZ)(n?.icon ?? null),
        text: s.headerText,
        tooltip: null,
        endsAt: (0, t7.RD)(t),
        flavor: l,
        rewardRequirements: i,
    };
    return (0, a.jsx)(ln, { className: li.v, promotion: r });
}
let ls = [0, 1, 2, 3],
    lr = { placement: t$.Ye.GAME_PROFILE };
function lc() {
    return (0, a.jsx)(tu, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, a.jsx)(t5, { children: ls.map((e) => (0, a.jsx)(t2, { children: (0, a.jsx)(tq.yf, {}) }, e)) }),
    });
}
function lo(e) {
    let { selectTab: t } = e,
        l = (0, tK.k)(),
        {
            trackAction: n,
            socialLayerStorefrontRecommendationsData: i,
            socialLayerStorefrontRecommendationsLoading: r,
            hasCommerceTab: c,
            closeModal: o,
        } = D(),
        { analyticsLocations: d } = (0, f.Ay)([g.A.GAME_PROFILE]),
        u = s.useCallback(() => {
            if (i?.application != null) {
                if (c) return void t(T.COMMERCE);
                (n(b.GameProfileTrackActionActions.GameShop),
                    o(),
                    (0, ea.default)({ applicationId: i.application.id }));
            }
        }, [i, n, c, t, o]),
        m = s.useCallback(
            (e, t) => {
                let a = i?.guildId;
                null != a &&
                    (n(b.GameProfileTrackActionActions.GameShopItem),
                    (0, tQ.R)({
                        skuId: e,
                        applicationId: t,
                        isStorefront: !1,
                        analyticsLocations: d,
                        contextKey: l,
                        onClose: () => {
                            let { pathname: e, search: l } = location;
                            (0, tJ.rG)(e, l, t, a) && o();
                        },
                    }));
            },
            [n, o, d, i, l],
        );
    if (r) return (0, a.jsx)(lc, {});
    if (null == i) return null;
    let { skuIds: x } = i;
    return (0, a.jsxs)(tm, {
        title: ex.intl.string(ex.t.WDdlUb),
        onClickViewAll: u,
        children: [
            (0, a.jsx)(la, {}),
            (0, a.jsx)(t$.E9, {
                newValue: lr,
                children: (0, a.jsx)(t4, { skuIds: x, analyticsLocations: d, onCardClick: m }),
            }),
        ],
    });
}
var ld = l(621466),
    lu = l(966697),
    lm = l(346055),
    lx = l(460905),
    lh = l(776231),
    lg = l(46054),
    lf = l(58703),
    lj = l(155718),
    lp = l(387408),
    lE = l(731068),
    lA = l(59318),
    lv = l(320095),
    lI = l(708676),
    lN = l(383233),
    lS = l(998218);
let lC = /^#{1,3}\s+(.+)$/,
    lb = /^https?:\/\/\S+$/;
var lT = l(60465),
    ly = l(158390),
    lR = l(103348),
    lk = l(371794);
let lL = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function lG(e) {
    e2.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
                await (0, lk.aP)({
                    url: ek.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: C.default.locale, include_pricing: !0, with_bundled_skus: !0 },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.map(lR.A.fromServer),
            l = t.flatMap((e) => e.skuIds);
        (e2.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: l, products: t }),
            e2.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: l }));
    } catch (t) {
        e2.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function lM(e) {
    let t = ((await th.Bo.get({ url: ek.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !lL.has(t),
    );
    e2.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let lO = (0, u.UT)(y.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => y.A.getSimilarGames(e) ?? null,
    load: (e) => lM(e),
    retryConfig: { backoff: () => new ly.A(5 * tv.A.Millis.SECOND, 5 * tv.A.Millis.MINUTE) },
    failureStaleAfter: tv.A.Seconds.MINUTE,
});
async function lP(e, t) {
    e2.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let l = {};
        t?.limit != null && (l.limit = t.limit);
        let n = (await th.Bo.get({ url: ek.Rsh.GAME_ANNOUNCEMENTS(e), query: l, rejectWithError: !1 })).body;
        e2.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: n.messages.map((e) => {
                let t,
                    l,
                    n = (0, lp.A)((0, lv.rh)(e)),
                    i = n.content,
                    a = (function (e) {
                        if ((0, lN._c)(e))
                            return e.components
                                .filter((e) => e.type === lj.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || lb.test(t.trim())
                            ? ((function (e) {
                                  let t = e.embeds[0];
                                  if (null == t) return null;
                                  let l = [];
                                  return (
                                      null != t.rawTitle && l.push(`# ${t.rawTitle}`),
                                      null != t.rawDescription && l.push(t.rawDescription),
                                      l.length > 0 ? l.join("\n") : null
                                  );
                              })(e) ?? t)
                            : t;
                    })(n),
                    s = (function (e) {
                        if ((0, lN._c)(e)) {
                            let t = e.components.find((e) => e.type === lj.I5.MEDIA_GALLERY),
                                l = t?.items[0]?.media;
                            if (null != l) {
                                let t = (0, lE.FE)(l);
                                if ("INVALID" !== t) return { ...l, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, lA.tT)(e.content_type));
                        if (null != t) return (0, lE.Rr)(t, e);
                        let l = e.attachments.find((e) => (0, lA.XB)(e.content_type));
                        if (null != l) return (0, lE.Rr)(l, e);
                        let n = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (n?.thumbnail != null)
                            return (0, lE.oU)(
                                n.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === n) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, lE.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, lE.oU)(
                                a.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === a) },
                                },
                                "IMAGE",
                            );
                    })(n),
                    { title: r, body: c } =
                        ((t = a.indexOf("\n")),
                        (l = (-1 === t ? a : a.slice(0, t)).match(lC)),
                        null != l
                            ? { title: l[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    d =
                        a === i || (0, lN._c)(n)
                            ? void 0
                            : (function (e) {
                                  let t = e.embeds[0];
                                  if (null == t) return;
                                  let l = t.author?.name,
                                      n = t.author?.iconProxyURL ?? t.author?.iconURL,
                                      i = t.footer?.text ?? t.provider?.name,
                                      a = t.footer?.iconProxyURL ?? t.footer?.iconURL,
                                      s = t.url,
                                      r = t.color ?? void 0;
                                  if (null != l || null != i || null != s)
                                      return {
                                          authorName: l,
                                          authorIconUrl: n,
                                          providerName: i,
                                          providerIconUrl: a,
                                          url: s,
                                          color: r,
                                      };
                              })(n);
                return {
                    id: n.id,
                    media: s,
                    title: r,
                    body: c,
                    content: a,
                    timestamp: e.timestamp,
                    reactionCount: o,
                    embedSource: d,
                    poll: n.poll,
                };
            }),
            channelId: n.channel_id ?? void 0,
            guildId: n.guild_id ?? void 0,
        });
    } catch (t) {
        e2.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var l_ = l(284009),
    lw = l.n(l_),
    lV = l(376728),
    lD = l(976860);
async function lU(e) {
    let { invite: t, guildId: l, channelId: n, messageId: i, analyticsLocationStack: a } = e;
    lw()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((l = t.guild?.id), (r = new Set(t.guild?.features))), null == l)) return;
    let c = e1.A.getGuild(l);
    if (c?.joinedAt == null)
        if (null == r || r.has(ek.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, e8.Z2)(
                l,
                {},
                { shouldNavigate: !0, channelId: n, messageId: i, joinSource: ek.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await lV.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, lD.pX)(ek.BVt.CHANNEL(l, n, i), { sourceLocationStack: a });
}
var lF = l(806244),
    lY = l(165648);
function lW(e, t) {
    return lg.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function lB(e) {
    return e.id;
}
function lH() {
    return (0, a.jsxs)(tl, {
        className: lF.s7,
        children: [
            (0, a.jsx)(tt, { className: lF.o$ }),
            (0, a.jsxs)("div", {
                className: lF.UF,
                children: [(0, a.jsx)(tt, { className: lF.iX }), (0, a.jsx)(tt, { className: lF.jt })],
            }),
        ],
    });
}
function lz(e, t) {
    var l;
    let n,
        i = (0, lh.kr)(364 * (0, lh.mZ)());
    return (
        (l = Math.round(i / t)),
        (null == (n = lS.A.toURLSafe(e))
            ? null
            : (n.searchParams.append("format", "webp"),
              null != i && n.searchParams.append("width", i.toString()),
              null != l && n.searchParams.append("height", l.toString()),
              n.toString())) ?? e
    );
}
function lX(e) {
    let { message: t, src: l, aspectRatio: n } = e,
        [i, r] = s.useState(!1),
        c = s.useCallback(() => r(!0), []);
    return null == t.media
        ? null
        : (0, a.jsx)(lu.y, {
              readyState: i ? ek.Rv1.READY : ek.Rv1.LOADING,
              aspectRatio: n,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, a.jsx)("img", {
                  src: l,
                  className: lF.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: c,
              }),
          });
}
function lK(e) {
    let { message: t, channelId: l, onCardClick: n, listItemProps: i } = e,
        r = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, ld.vq)(e.target, HTMLAnchorElement) ||
                        ((0, ld.vq)(e.target, HTMLSpanElement) && (0, ld.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return n(t.id);
            },
            [n, t.id],
        ),
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        d = t.media?.proxyUrl ?? t.media?.url,
        u = null != d ? lz(d, c) : void 0,
        { embedSource: m } = t;
    return null == m
        ? null
        : (0, a.jsx)(tL.D, {
              ...i,
              className: lF.Nr,
              onClick: r,
              children: (0, a.jsxs)(lm.M, {
                  className: lF.zI,
                  children: [
                      null != m.url &&
                          (0, a.jsx)(Y.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: lF.Ow,
                              children: m.url,
                          }),
                      (0, a.jsxs)("div", {
                          className: lF._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, a.jsxs)("div", {
                                      className: lF.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, a.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: lF.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, a.jsx)(Y.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-strong",
                                              children: m.authorName,
                                          }),
                                      ],
                                  }),
                              null != t.media &&
                                  null != u &&
                                  (0, a.jsx)("div", {
                                      className: lF.ax,
                                      children: (0, a.jsx)(lX, { message: t, src: u, aspectRatio: c }),
                                  }),
                              null != t.title &&
                                  (0, a.jsx)(e3.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: lF.DD,
                                      children: lW(t.title, l),
                                  }),
                              t.body.length > 0 &&
                                  (0, a.jsxs)("div", {
                                      className: o()(lF.h_, lY.PT),
                                      children: [lW(t.body, l), (0, a.jsx)("div", { className: lF.fm })],
                                  }),
                              (0, a.jsxs)("div", {
                                  className: lF.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, a.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: lF.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, a.jsxs)(Y.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, lf.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, a.jsxs)("div", {
                                              className: lF.a5,
                                              children: [
                                                  (0, a.jsx)(lx.n, { size: "xs", color: "currentColor" }),
                                                  (0, a.jsx)(Y.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(ex.intl.currentLocale).format(
                                                          t.reactionCount,
                                                      ),
                                                  }),
                                              ],
                                          }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
let lJ = s.memo(function (e) {
    let { message: t, channelId: l } = e;
    return (0, a.jsxs)(lm.M, {
        className: lF.zI,
        children: [
            null != t.title &&
                (0, a.jsx)(e3.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: lF.DD,
                    children: lW(t.title, l),
                }),
            t.body.length > 0 &&
                (0, a.jsxs)("div", {
                    className: o()(lF.h_, lY.PT),
                    children: [lW(t.body, l), (0, a.jsx)("div", { className: lF.fm })],
                }),
            (0, a.jsxs)("div", {
                className: lF.ov,
                children: [
                    (0, a.jsx)(Y.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, lf.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, a.jsxs)("div", {
                            className: lF.a5,
                            children: [
                                (0, a.jsx)(lx.n, { size: "xs", color: "currentColor" }),
                                (0, a.jsx)(Y.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: new Intl.NumberFormat(ex.intl.currentLocale).format(t.reactionCount),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
});
function l$(e) {
    let { message: t, channelId: l, onCardClick: n, listItemProps: i } = e,
        r = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, ld.vq)(e.target, HTMLAnchorElement) ||
                        ((0, ld.vq)(e.target, HTMLSpanElement) && (0, ld.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return n(t.id);
            },
            [n, t.id],
        ),
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        o = t.media?.proxyUrl ?? t.media?.url,
        d = null != o ? lz(o, c) : void 0;
    return (0, a.jsxs)(tL.D, {
        ...i,
        className: lF.Nr,
        onClick: r,
        children: [
            null != t.media &&
                null != d &&
                (0, a.jsx)("div", {
                    className: lF.Vl,
                    children: (0, a.jsx)(lX, { message: t, src: d, aspectRatio: c }),
                }),
            (0, a.jsx)(lJ, { message: t, channelId: l }),
        ],
    });
}
function lQ(e) {
    let { message: t, onCardClick: l, listItemProps: n } = e,
        { poll: i } = t,
        r = s.useCallback(() => l(t.id), [l, t.id]);
    if (null == i) return null;
    let c = i.answers.slice(0, 3),
        o = i.answers.length - c.length;
    return (0, a.jsx)(tL.D, {
        ...n,
        className: lF.Nr,
        onClick: r,
        children: (0, a.jsxs)(lm.M, {
            className: lF.zI,
            children: [
                (0, a.jsx)(e3.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: lF.MH,
                    children: i.question.text,
                }),
                (0, a.jsxs)("div", {
                    className: lF.xd,
                    children: [
                        c.map((e) =>
                            (0, a.jsx)(
                                "div",
                                {
                                    className: lF.Nf,
                                    children: (0, a.jsx)(Y.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: lF.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        o > 0 &&
                            (0, a.jsx)(Y.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: lF.PF,
                                children: ex.intl.format(ex.t["mv/nIa"], { count: o }),
                            }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: lF.ov,
                    children: (0, a.jsx)(Y.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: ex.intl.format(ex.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, lI.J)(i.expiry) ?? ex.intl.string(ex.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function lq(e) {
    return null != e.message.poll
        ? (0, a.jsx)(lQ, { ...e })
        : null != e.message.embedSource
          ? (0, a.jsx)(lK, { ...e })
          : (0, a.jsx)(l$, { ...e });
}
let lZ = s.memo(function (e) {
    let { getScrollOffset: t } = e,
        { analyticsLocations: l } = (0, f.Ay)(),
        { game: n, invite: i, hasDiscordWebsite: r, closeModal: c, trackAction: o } = D(),
        d = n.id,
        {
            messages: m,
            guildId: x,
            channelId: h,
            loading: g,
            hasFetched: j,
        } = (function (e) {
            let {
                data: t,
                hasFetched: l,
                isFetching: n,
            } = (0, u.cf)([y.A], () => ({
                data: null != e ? y.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && y.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && y.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, s.useEffect)(() => {
                    null == e || l || y.A.isAnnouncementsFetching(e) || lP(e, { limit: 8 });
                }, [e, l, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: n, hasFetched: l }
            );
        })(d),
        p = (0, tZ.l)("game_profile_announcements"),
        E = s.useCallback(() => {
            let e = i?.guild?.id ?? x;
            null != e &&
                null != h &&
                (o(b.GameProfileTrackActionActions.Announcements),
                lT.default.setGameProfilePendingReturn({ gameId: d, channelId: h, initialScrollOffset: t() }),
                c(),
                lU({ invite: i, guildId: e, channelId: h, analyticsLocationStack: l }));
        }, [o, c, t, i, x, h, l, d]),
        A = s.useCallback(
            (e) => {
                let n = i?.guild?.id ?? x;
                null != n &&
                    null != h &&
                    (o(b.GameProfileTrackActionActions.AnnouncementsItem),
                    lT.default.setGameProfilePendingReturn({ gameId: d, channelId: h, initialScrollOffset: t() }),
                    c(),
                    lU({ invite: i, guildId: n, channelId: h, messageId: e, analyticsLocationStack: l }));
            },
            [o, c, t, i, x, h, l, d],
        ),
        v = null != h && m.length > 0;
    return (!j || g) && r
        ? (0, a.jsx)(tu, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, a.jsx)(t5, {
                  gap: 16,
                  children: eq()
                      .range(3)
                      .map((e) => (0, a.jsx)(lH, {}, e)),
              }),
          })
        : v
          ? (0, a.jsx)(tm, {
                title: ex.intl.string(ex.t.B0BV3Y),
                onClickViewAll: E,
                children: p
                    ? (0, a.jsx)(t1.A, {
                          gap: 16,
                          items: m,
                          getItemKey: lB,
                          itemClassName: lF.hu,
                          renderItem: (e, t) =>
                              (0, a.jsx)(lq, { message: e, channelId: h, onCardClick: A, listItemProps: t }, e.id),
                      })
                    : (0, a.jsx)(t0.A, {
                          gap: 16,
                          children: m.map((e) => (0, a.jsx)(lq, { message: e, channelId: h, onCardClick: A }, e.id)),
                      }),
            })
          : null;
});
var l0 = l(28863),
    l1 = l(975807),
    l8 = l(194362);
function l3() {
    let { game: e, trackAction: t } = D(),
        l = s.useCallback(async () => {
            t(b.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, l8.a)(ek.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, l1.A)(e);
        }, [t]),
        n = s.useCallback((e) => (0, a.jsx)(l0.Anchor, { onClick: l, children: e }), [l]);
    return e.linkedApplications?.some((e) => e.type === lj.Mh.OFFICIAL)
        ? null
        : (0, a.jsx)(Y.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: ex.intl.format(ex.t.KAjfKl, { claimLink: n }),
          });
}
var l2 = l(505779),
    l4 = l(998445),
    l6 = l(274997),
    l5 = l(80500),
    l7 = l(319745),
    l9 = l(488225),
    ne = l(967492),
    nt = l(72265),
    nl = l(454346),
    nn = l(37948),
    ni = l(693558);
let na = { size: "xs", colorClass: ni.w };
function ns(e) {
    let { website: t } = e,
        { trackAction: l } = D(),
        n = (0, nn.A)(),
        {
            action: i,
            icon: r,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case l2.V.OFFICIAL:
                    return {
                        icon: (0, a.jsx)(l4.GlobeEarthIcon, { ...t }),
                        action: b.GameProfileTrackActionActions.WebsiteLink,
                        title: ex.intl.string(ex.t.fOUKvg),
                    };
                case l2.V.TWITTER:
                    return {
                        icon: (0, a.jsx)(l6.p, { ...t }),
                        action: b.GameProfileTrackActionActions.XLink,
                        title: ex.intl.string(ex.t.INic4y),
                    };
                case l2.V.YOUTUBE:
                    return {
                        action: b.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, a.jsx)(l5.C, { ...t }),
                        title: ex.intl.string(ex.t.lNmxbE),
                    };
                case l2.V.FACEBOOK:
                    return {
                        icon: (0, a.jsx)(l7.Z, { ...t }),
                        action: b.GameProfileTrackActionActions.FacebookLink,
                        title: ex.intl.string(ex.t.FjyREK),
                    };
                case l2.V.INSTAGRAM:
                    return {
                        icon: (0, a.jsx)(l9.L, { ...t }),
                        action: b.GameProfileTrackActionActions.InstagramLink,
                        title: ex.intl.string(ex.t["cgR+IK"]),
                    };
                case l2.V.BLUESKY:
                    return {
                        icon: (0, a.jsx)(ne.a, { ...t }),
                        action: b.GameProfileTrackActionActions.BlueskyLink,
                        title: ex.intl.string(ex.t["D/PHq5"]),
                    };
                case l2.V.REDDIT:
                    return {
                        icon: (0, a.jsx)(nt.T, { ...t }),
                        action: b.GameProfileTrackActionActions.RedditLink,
                        title: ex.intl.string(ex.t["Hgb+fc"]),
                    };
                case l2.V.TWITCH:
                    return {
                        icon: (0, a.jsx)(nl.a, { ...t }),
                        action: b.GameProfileTrackActionActions.TwitchLink,
                        title: ex.intl.string(ex.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, na),
        o = s.useCallback(() => {
            (l(i), n(t.url));
        }, [i, n, l, t.url]);
    return (0, a.jsx)(Q.m, {
        text: c,
        children: (0, a.jsx)(tL.D, { onClick: o, className: ni.y, title: c, children: r }),
    });
}
var nr = l(808380),
    nc = l(31300),
    no = l(802516),
    nd = l(22363),
    nu = l(418524);
function nm(e) {
    let { platform: t, ...l } = e;
    switch (t) {
        case nr.Y.DESKTOP:
            return (0, a.jsx)(nc.k, { size: "xs", ...l });
        case nr.Y.XBOX:
            return (0, a.jsx)(no.Y, { size: "xs", ...l });
        case nr.Y.PLAYSTATION:
            return (0, a.jsx)(nd.X, { size: "xs", ...l });
        case nr.Y.NINTENDO:
            return (0, a.jsx)(nu.M, { size: "xs", ...l });
        default:
            return null;
    }
}
function nx(e) {
    let { platform: t } = e;
    return (0, a.jsx)(
        Q.m,
        {
            text: (function (e) {
                switch (e) {
                    case nr.Y.DESKTOP:
                        return ex.intl.string(ex.t.KT6uCJ);
                    case nr.Y.XBOX:
                        return ex.intl.string(ex.t.DDWUJp);
                    case nr.Y.PLAYSTATION:
                        return ex.intl.string(ex.t.fzMz2s);
                    case nr.Y.NINTENDO:
                        return ex.intl.string(ex.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, a.jsx)(nm, { platform: t }),
        },
        t,
    );
}
let nh = [nr.Y.DESKTOP, nr.Y.XBOX, nr.Y.PLAYSTATION, nr.Y.NINTENDO];
var ng = l(424994),
    nf = l(623828);
function nj() {
    return (0, a.jsx)(Y.E, { variant: "text-sm/normal", color: "text-subtle", children: ex.intl.string(ex.t.GruYxV) });
}
let np = function () {
    let { game: e } = D(),
        t = (0, e4.c)("GameProfileGameDetails"),
        l = s.useMemo(() => e.genres.map(tP.du).join(", "), [e]),
        n = e.getCompanyByRole(lj.wk.PUBLISHER),
        i = e.getCompanyByRole(lj.wk.DEVELOPER),
        r = n.map((e) => e.name).join(", "),
        c = i.map((e) => e.name).join(", "),
        o = e.firstReleaseDate,
        d = s.useMemo(() => {
            let t = new Set(e.platforms),
                l = [...t];
            return (
                !t.has(nr.Y.DESKTOP) && (t.has(nr.Y.MACOS) || t.has(nr.Y.LINUX)) && l.push(nr.Y.DESKTOP),
                l.filter((e) => nh.includes(e)).sort((e, t) => nh.indexOf(e) - nh.indexOf(t))
            );
        }, [e.platforms]),
        u = (e?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return l2.p.includes(t);
            })
            .sort((e, t) => l2.p.indexOf(e.category) - l2.p.indexOf(t.category)),
        m = !(0, e7.uJ)(l),
        x = !(0, e7.uJ)(r),
        h = !(0, e7.uJ)(c),
        g = !(0, e7.uJ)(o),
        f = d.length > 0,
        j = u.length > 0 && !u.every((e) => (0, e7.uJ)(e.url));
    return (0, a.jsxs)("div", {
        className: nf.uW,
        children: [
            (0, a.jsx)("div", {
                className: nf.Gf,
                children: (0, a.jsx)(e3.D, {
                    variant: t ? "text-md/medium" : "heading-sm/semibold",
                    color: t ? "text-subtle" : "text-strong",
                    children: ex.intl.string(ex.t["7OjmmH"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: nf.kL,
                children: [
                    (0, a.jsxs)("div", {
                        className: nf.J1,
                        children: [
                            (0, a.jsx)(Y.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== e.genres.length ? ex.intl.string(ex.t.pDgwYB) : ex.intl.string(ex.t.mjFKqn),
                            }),
                            m
                                ? (0, a.jsx)(Y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: nf.Gu,
                                      children: l,
                                  })
                                : (0, a.jsx)(nj, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: nf.J1,
                        children: [
                            (0, a.jsx)(Y.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== n.length ? ex.intl.string(ex.t.Hc7Enk) : ex.intl.string(ex.t["4Byy/G"]),
                            }),
                            x
                                ? (0, a.jsx)(Y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: nf.Gu,
                                      children: r,
                                  })
                                : (0, a.jsx)(nj, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: nf.J1,
                        children: [
                            (0, a.jsx)(Y.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== i.length ? ex.intl.string(ex.t.KATEJB) : ex.intl.string(ex.t.na3PT0),
                            }),
                            h
                                ? (0, a.jsx)(Y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: nf.Gu,
                                      children: c,
                                  })
                                : (0, a.jsx)(nj, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: nf.J1,
                        children: [
                            (0, a.jsx)(Y.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: ex.intl.string(ex.t.H3mPDT),
                            }),
                            g
                                ? (0, a.jsx)(Y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: nf.Gu,
                                      children: lf.i$(new Date(o), "LL"),
                                  })
                                : (0, a.jsx)(nj, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: nf.J1,
                        children: [
                            (0, a.jsx)(Y.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: d.length > 1 ? ex.intl.string(ex.t.PNqxNe) : ex.intl.string(ex.t["UxAag+"]),
                            }),
                            f
                                ? (0, a.jsx)("div", {
                                      className: nf.Gu,
                                      children: d.map((e) => (0, a.jsx)(nx, { platform: e }, e)),
                                  })
                                : (0, a.jsx)(nj, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: nf.J1,
                        children: [
                            (0, a.jsx)(Y.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: ex.intl.string(ex.t["Oj3o1/"]),
                            }),
                            j
                                ? (0, a.jsx)("div", {
                                      className: nf.Gu,
                                      children: u.map((e) => (0, a.jsx)(ns, { website: e }, e.url)),
                                  })
                                : (0, a.jsx)(nj, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: nf.J1,
                        children: [
                            (0, a.jsx)(Y.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: ex.intl.string(ex.t["BwQ+9e"]),
                            }),
                            (0, a.jsx)(Y.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: nf.Gu,
                                children: ex.intl.format(ex.t.XPFZVl, { igdbLink: ng.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: nf.OQ, children: (0, a.jsx)(l3, {}) }),
        ],
    });
};
var nE = l(141628),
    nA = l(289363),
    nv = l(793919);
function nI() {
    return (0, a.jsxs)("div", {
        "aria-hidden": !0,
        className: nv.uW,
        children: [
            (0, a.jsx)(tt, { className: nv.dU, width: "30%" }),
            (0, a.jsxs)(tl, {
                className: nv.nV,
                children: [
                    (0, a.jsx)("div", { className: nv.sB, children: (0, a.jsx)(nA.default, { isLoading: !0 }) }),
                    (0, a.jsxs)("div", {
                        className: nv.hQ,
                        children: [
                            (0, a.jsxs)("div", {
                                className: nv.Yv,
                                children: [(0, a.jsx)(tt, { width: "55%" }), (0, a.jsx)(tt, { width: "85%" })],
                            }),
                            (0, a.jsx)(tn, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function nN(e) {
    let { analyticsLocations: t } = e,
        l = (0, e4.c)("GameProfileLinkAccount"),
        {
            trackAction: n,
            fetchedAuthorization: i,
            hasAlreadyLinked: r,
            canStartAuthorization: c,
            startAuthorization: o,
            connectionApp: d,
            hasOfficialApplication: m,
            officialApplicationFetchFailed: x,
        } = D(),
        h = (0, u.bG)([w.default], () => w.default.getCurrentUser()),
        g = s.useCallback(() => {
            (n(b.GameProfileTrackActionActions.LinkAccount), o({ analyticsLocations: t }));
        }, [n, o, t]);
    return !m || x || null == h
        ? null
        : null == d || (c && !i)
          ? (0, a.jsx)(nI, {})
          : !c || r
            ? null
            : (0, a.jsxs)("div", {
                  className: nv.uW,
                  children: [
                      (0, a.jsx)(e3.D, {
                          className: nv.Gf,
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: ex.intl.string(ex.t["VDAhr+"]),
                      }),
                      (0, a.jsxs)("div", {
                          className: nv.kL,
                          children: [
                              (0, a.jsx)("div", {
                                  className: nv.sB,
                                  children: (0, a.jsx)(nA.default, { application: d }),
                              }),
                              (0, a.jsxs)("div", {
                                  className: nv.hQ,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: nv.FS,
                                          children: [
                                              (0, a.jsx)(e3.D, {
                                                  variant: "heading-md/semibold",
                                                  color: "text-default",
                                                  children: ex.intl.formatToPlainString(ex.t.hUbQT2, {
                                                      gameName: d.name,
                                                  }),
                                              }),
                                              (0, a.jsx)(Y.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: ex.intl.string(ex.t["JKqu+4"]),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsx)(J.$, {
                                          variant: "secondary",
                                          icon: nE.A,
                                          text: ex.intl.string(ex.t.jynBQ5),
                                          onClick: g,
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
}
var nS = l(635377),
    nC = l.n(nS),
    nb = l(80687),
    nT = l(534573),
    ny = l(248643),
    nR = l(256905),
    nk = l(684519),
    nL = l(191096),
    nG = l(90721),
    nM = l(140128);
function nO(e) {
    let { item: t, index: l } = e;
    return `${l}-${t.url}`;
}
function nP(e, t) {
    return (0, nT.Ec)(e, { size: t, keepAspectRatio: !0, format: e5.QB ? "webp" : null });
}
let n_ = new (nC())({ max: 100 }),
    nw = s.memo(function (e) {
        let { url: t, alt: l, className: n } = e,
            [i, r] = s.useState(null),
            c = null != i && i.url === t ? i.isPortrait : (n_.get(t) ?? !1),
            d = s.useCallback(
                (e) => {
                    if (null == e || 0 === e.naturalWidth || 0 === e.naturalHeight) return;
                    let l = e.naturalHeight > e.naturalWidth;
                    (n_.set(t, l),
                        r((e) => (null != e && e.url === t && e.isPortrait === l ? e : { url: t, isPortrait: l })));
                },
                [t],
            ),
            u = s.useCallback((e) => d(e.currentTarget), [d]);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("img", {
                    ref: d,
                    src: nP(t, 106),
                    className: o()(nM.r4, !c && nM.l5),
                    alt: "",
                    draggable: !1,
                    onLoad: u,
                }),
                (0, a.jsx)("img", { ref: d, src: nP(t, 900), className: o()(nM.c8, c && nM.D7, n), alt: l, onLoad: u }),
            ],
        });
    }),
    nV = s.memo(function (e) {
        var t;
        let { item: l, index: n, isSelected: i, isPlaying: r, onSelect: c, gameName: d, listItemProps: u } = e,
            m = s.useCallback(() => c(n), [c, n]),
            x = u?.tabIndex;
        return (0, a.jsx)(tL.D, {
            ...u,
            className: o()(nM.JS, i && nM.Y4),
            onClick: m,
            children: (0, a.jsxs)("div", {
                className: nM.ub,
                children: [
                    (0, a.jsx)("img", {
                        src: nP("VIDEO" === (t = l).type ? (t.poster ?? t.url) : t.url, 106),
                        className: nM.xn,
                        alt: ex.intl.formatToPlainString(ex.t.COYYrn, { game: d }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === l.type &&
                        (0, a.jsx)("div", {
                            className: nM.UZ,
                            children: (0, a.jsx)(nb.D, { playing: i && r, size: "sm", tabIndex: x }),
                        }),
                ],
            }),
        });
    }),
    nD = s.memo(function (e) {
        let {
                item: t,
                reducedMotion: l,
                autoPlay: n,
                videoRef: i,
                mediaPlayerRef: r,
                onPlay: c,
                onPause: o,
                onFullscreenChange: d,
            } = e,
            u = s.useRef(null);
        return (
            (0, nG.A)({ videoRef: i, canvasRef: u, enabled: !l }),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    !l && (0, a.jsx)("canvas", { ref: u, className: nM.HW, "aria-hidden": "true" }),
                    (0, a.jsx)("div", {
                        className: nM.tN,
                        children: (0, a.jsx)(ny.A, {
                            src: t.url,
                            poster: t.poster ?? "",
                            width: t.width ?? 1920,
                            height: t.height ?? 1080,
                            naturalWidth: t.width ?? 1920,
                            naturalHeight: t.height ?? 1080,
                            maxWidth: 1 / 0,
                            maxHeight: 1 / 0,
                            autoPlay: n,
                            autoMute: !0,
                            useFullWidth: !0,
                            responsive: !0,
                            renderLinkComponent: nk.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: d,
                            mediaPlayerClassName: nM.T9,
                            videoRef: i,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function nU() {
    let { game: e, trackAction: t } = D(),
        [l, n] = s.useState(0),
        [i, r] = s.useState(null),
        [c, o] = s.useState(e.screenshotUrls),
        d = s.useRef(null),
        m = s.useRef(null),
        x = (0, u.bG)([tG.Ay], () => tG.Ay.useReducedMotion),
        { obscured: h } = (0, nL.I3)(),
        g = (0, tZ.l)("game_profile_media");
    c !== e.screenshotUrls && (o(e.screenshotUrls), n(0));
    let f = s.useMemo(
            () => [
                ...(e.trailers ?? []).map((e) => {
                    let t = (0, lk.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, lk.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                ...(e.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })),
            ],
            [e.trailers, e.screenshotUrls],
        ),
        j = s.useMemo(() => f.map((e, t) => ({ item: e, index: t })), [f]),
        p = f.length > 0 ? Math.min(l, f.length - 1) : 0,
        E = f[p],
        A = E?.type === "VIDEO",
        v = s.useCallback(
            (e) => {
                let t = f[p],
                    l = f[e];
                (t?.type === "IMAGE" && l?.type === "IMAGE" && t.url !== l.url ? r(t.url) : r(null), n(e));
            },
            [f, p],
        ),
        [I, N] = s.useState(!1),
        S = s.useRef(null),
        C = s.useCallback(() => {
            t(A ? b.GameProfileTrackActionActions.ClickTrailer : b.GameProfileTrackActionActions.ClickImage);
            let e = d.current,
                l = S.current,
                i = null != e && !e.paused,
                a = e?.muted ?? !0,
                s = e?.currentTime ?? 0;
            l?.setPlay(!1);
            let r = f.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let l = t === p;
                    return { ...e, autoPlay: !!l && i, autoMute: !l || a, initialTimeSec: l ? s : void 0, videoRef: m };
                }
                return e;
            });
            (0, nR.R)({
                items: r,
                startingIndex: p,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: n,
                onClose: () => {
                    let e = m.current,
                        t = S.current,
                        l = null != e ? !e.paused : i;
                    (e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), l && t.setPlay(!0), t.setMuted(e.muted))
                            : l && t?.setPlay(!0),
                        N(l));
                },
            });
        }, [t, f, p, A]),
        T = s.useCallback(() => N(!0), []),
        y = s.useCallback(() => N(!1), []),
        R = s.useCallback(() => r(null), []),
        k = s.useCallback(
            (e) => {
                e && C();
            },
            [C],
        );
    return 0 === f.length
        ? null
        : (0, a.jsxs)("div", {
              className: nM.kL,
              children: [
                  A
                      ? (0, a.jsx)("div", {
                            className: nM.ND,
                            children: (0, a.jsx)(
                                nD,
                                {
                                    item: E,
                                    reducedMotion: x,
                                    autoPlay: !x && !h,
                                    videoRef: d,
                                    mediaPlayerRef: S,
                                    onPlay: T,
                                    onPause: y,
                                    onFullscreenChange: k,
                                },
                                `${p}-${E.url}`,
                            ),
                        })
                      : (0, a.jsxs)("div", {
                            className: nM.wp,
                            children: [
                                null != i &&
                                    !x &&
                                    (0, a.jsx)(
                                        "div",
                                        {
                                            className: nM.Jy,
                                            onAnimationEnd: R,
                                            children: (0, a.jsx)(nw, { url: i, alt: "" }),
                                        },
                                        i,
                                    ),
                                (0, a.jsx)("div", { className: nM.QN }),
                                (0, a.jsx)(tL.D, {
                                    className: nM.gv,
                                    onClick: C,
                                    children: (0, a.jsx)("div", {
                                        className: nM.cs,
                                        children: (0, a.jsx)(
                                            nw,
                                            {
                                                url: E.url,
                                                className: nM.Jf,
                                                alt: ex.intl.formatToPlainString(ex.t.COYYrn, { game: e.name }),
                                            },
                                            E.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  g
                      ? (0, a.jsx)(t1.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            items: j,
                            getItemKey: nO,
                            renderItem: (t, l) => {
                                let { item: n, index: i } = t;
                                return (0, a.jsx)(
                                    nV,
                                    {
                                        item: n,
                                        index: i,
                                        isPlaying: I,
                                        isSelected: i === p,
                                        onSelect: v,
                                        gameName: e.name,
                                        listItemProps: l,
                                    },
                                    `${i}-${n.url}`,
                                );
                            },
                        })
                      : (0, a.jsx)(t0.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            children: f.map((t, l) =>
                                (0, a.jsx)(
                                    nV,
                                    {
                                        item: t,
                                        index: l,
                                        isPlaying: I,
                                        isSelected: l === p,
                                        onSelect: v,
                                        gameName: e.name,
                                    },
                                    `${l}-${t.url}`,
                                ),
                            ),
                        }),
              ],
          });
}
var nF = l(49381),
    nY = l(223273);
function nW(e, t, l) {
    if (null == e || null == t || t < 10) return nY.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !l
            ? nY.vI.POSITIVE
            : t < (l ? 100 : 500) || e < 95
              ? nY.vI.VERY_POSITIVE
              : nY.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return nY.vI.MOSTLY_POSITIVE;
    if (e >= 40) return nY.vI.MIXED;
    if (e >= 20) return nY.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !l) return nY.vI.NEGATIVE;
    else if (t < (l ? 100 : 500)) return nY.vI.VERY_NEGATIVE;
    return nY.vI.OVERWHELMINGLY_NEGATIVE;
}
function nB(e) {
    switch (e) {
        case nY.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case nY.vI.OVERWHELMINGLY_POSITIVE:
        case nY.vI.VERY_POSITIVE:
        case nY.vI.POSITIVE:
        case nY.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case nY.vI.MIXED:
            return "steam-review-text-mixed";
        case nY.vI.MOSTLY_NEGATIVE:
        case nY.vI.NEGATIVE:
        case nY.vI.VERY_NEGATIVE:
        case nY.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var nH =
        (((i = {})[(i.MIGHTY = 1)] = "MIGHTY"),
        (i[(i.STRONG = 2)] = "STRONG"),
        (i[(i.FAIR = 3)] = "FAIR"),
        (i[(i.WEAK = 4)] = "WEAK"),
        i),
    nz = l(778591);
function nX(e) {
    let { rating: t, strokeColor: l } = e,
        n = 2 * Math.PI * 16,
        i = Math.min(Math.max(t, 0), 100) / 100,
        s = i * n;
    return (0, a.jsx)("svg", {
        width: 30,
        height: 30,
        viewBox: "0 0 36 36",
        style: { transform: `rotate(${((1 - i) * 360) / 2}deg)` },
        children: (0, a.jsx)("circle", {
            r: 16,
            cx: 18,
            cy: 18,
            fill: "none",
            stroke: l,
            strokeWidth: 2.4,
            strokeDasharray: `${s} ${n - s}`,
        }),
    });
}
var nK = l(315189);
function nJ(e) {
    let { url: t, title: l, rating: n, ratingCount: i, tooltipVariant: r = "all" } = e,
        { trackAction: c } = D(),
        o = (0, nn.A)(),
        d = nW(n, i, "recent" === r),
        u = nB(d),
        m = s.useCallback(() => {
            (c(b.GameProfileTrackActionActions.SteamReviews), o(t));
        }, [o, c, t]);
    return (0, a.jsx)(tL.D, {
        onClick: m,
        className: nK.nf,
        role: "link",
        "aria-label": ex.intl.string(ex.t.YNC5Di),
        children: (0, a.jsxs)("div", {
            className: nK.U6,
            children: [
                (0, a.jsxs)("div", {
                    className: nK.tN,
                    children: [
                        (0, a.jsx)(nF.N, { size: "sm", color: e_.A.colors.ICON_STRONG.css }),
                        (0, a.jsx)(e3.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, a.jsx)(
                    Q.m,
                    {
                        text:
                            d === nY.vI.NO_USER_REVIEWS
                                ? ex.intl.string(ex.t.CLMt8J)
                                : ex.intl
                                      .format(
                                          "recent" === r
                                              ? ex.t.TzvC0k
                                              : "localized" === r
                                                ? ex.t.EOfrwm
                                                : ex.t["lzANJ/"],
                                          { rating: n, rating_count: i?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, a.jsxs)("div", {
                            className: nK.Z0,
                            children: [
                                (0, a.jsx)(Y.E, {
                                    variant: "text-xs/medium",
                                    color: u,
                                    className: nK.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case nY.vI.NO_USER_REVIEWS:
                                                return ex.intl.string(ex.t.CLMt8J);
                                            case nY.vI.OVERWHELMINGLY_POSITIVE:
                                                return ex.intl.string(ex.t["75sx1S"]);
                                            case nY.vI.VERY_POSITIVE:
                                                return ex.intl.string(ex.t["EkOVg+"]);
                                            case nY.vI.POSITIVE:
                                                return ex.intl.string(ex.t.ZUkFtr);
                                            case nY.vI.MOSTLY_POSITIVE:
                                                return ex.intl.string(ex.t.M7Z09a);
                                            case nY.vI.MIXED:
                                                return ex.intl.string(ex.t.c8yuHR);
                                            case nY.vI.MOSTLY_NEGATIVE:
                                                return ex.intl.string(ex.t.H0MSjG);
                                            case nY.vI.NEGATIVE:
                                                return ex.intl.string(ex.t.vpLrgz);
                                            case nY.vI.VERY_NEGATIVE:
                                                return ex.intl.string(ex.t["5spYuX"]);
                                            case nY.vI.OVERWHELMINGLY_NEGATIVE:
                                                return ex.intl.string(ex.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(d),
                                }),
                                null != i &&
                                    d !== nY.vI.NO_USER_REVIEWS &&
                                    (0, a.jsx)(Y.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: ex.intl
                                            .format(ex.t.sgIoin, { rating_count: i.toLocaleString() })
                                            .toString(),
                                    }),
                            ],
                        }),
                    },
                    `open-steam-page-${r}`,
                ),
            ],
        }),
    });
}
function n$(e) {
    let { url: t } = e,
        { game: l, trackAction: n } = D(),
        { reviews: i } = l,
        r = i?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        d = r.topCriticRatingCount ?? -1,
        u = (o <= 0 || d <= 0) && null == c,
        m = (0, nn.A)(),
        x = s.useCallback(() => {
            (n(b.GameProfileTrackActionActions.OpenCriticReviews), m(t));
        }, [m, n, t]);
    return (0, a.jsx)(tL.D, {
        onClick: x,
        className: nK.nf,
        role: "link",
        "aria-label": ex.intl.string(ex.t.aLNBAw),
        children: (0, a.jsxs)("div", {
            className: nK.Ur,
            children: [
                (0, a.jsx)(e3.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: ex.intl.string(ex.t["UxvER+"]),
                }),
                (0, a.jsxs)("div", {
                    className: nK.WA,
                    children: [
                        null != c ? (0, a.jsx)(nQ, { tier: c }) : null,
                        null != c && o > 0 && d > 0 ? (0, a.jsx)(nq, { rating: o, tier: c }) : null,
                        u
                            ? (0, a.jsx)(Y.E, {
                                  variant: "text-xs/medium",
                                  color: nB(nY.vI.NO_USER_REVIEWS),
                                  children: ex.intl.string(ex.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function nQ(e) {
    let { tier: t } = e,
        l = (function (e) {
            switch (e) {
                case nH.MIGHTY:
                    return ex.intl.string(ex.t.aZej2g);
                case nH.STRONG:
                    return ex.intl.string(ex.t.MLxnSg);
                case nH.FAIR:
                    return ex.intl.string(ex.t["3f19KA"]);
                case nH.WEAK:
                    return ex.intl.string(ex.t.jtVgSh);
            }
        })(t),
        n = (function (e) {
            switch (e) {
                case nH.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case nH.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case nH.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case nH.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, a.jsx)(
        Q.m,
        {
            text: l,
            children: (0, a.jsx)("div", {
                className: nK.TE,
                children: (0, a.jsx)("img", { src: n, alt: l, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function nq(e) {
    let { rating: t, tier: l } = e,
        { foregroundColor: n, backgroundColor: i } = (function (e) {
            let t = "";
            switch (e) {
                case nH.MIGHTY:
                    t = "#fc430a";
                    break;
                case nH.STRONG:
                    t = "#9e00b4";
                    break;
                case nH.FAIR:
                    t = "#4aa1ce";
                    break;
                case nH.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(l);
    return (0, a.jsx)(
        Q.m,
        {
            text: ex.intl.string(ex.t.Ub4YR1),
            children: (0, a.jsxs)("div", {
                className: nK.TE,
                style: { backgroundColor: i },
                children: [
                    (0, a.jsx)(nX, { rating: t, strokeColor: n }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: nK.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let nZ = function () {
    let { game: e } = D(),
        t = (0, e4.c)("GameProfileReviews"),
        l = (0, nz.I)(e.id),
        n = e.opencriticUrl,
        i = e.steamReleaseStatus !== tX.Y.RETIRED_ABANDONED && null != l,
        s = e.reviews?.steam,
        r = nW(s?.recentRating, s?.recentRatingCount, !0),
        c = i && r !== nY.vI.NO_USER_REVIEWS,
        o =
            null != s &&
            null != s.localizedRating &&
            null != s.localizedRatingCount &&
            null != s.ratingCount &&
            s.localizedRatingCount >= 200 &&
            s.ratingCount >= 2e3,
        d = o ? s?.localizedRating : s?.rating,
        u = o ? s?.localizedRatingCount : s?.ratingCount,
        m = o ? ex.t["aWb+V4"] : ex.t["8e4LiB"],
        x = e.reviews?.opencritic != null && null != n;
    return i || c || x
        ? (0, a.jsxs)("div", {
              className: nK.uW,
              children: [
                  (0, a.jsx)("div", {
                      className: nK.Gf,
                      children: (0, a.jsx)(e3.D, {
                          variant: t ? "text-md/medium" : "heading-sm/semibold",
                          color: t ? "text-subtle" : "text-strong",
                          children: ex.intl.string(ex.t.GaAQXP),
                      }),
                  }),
                  (0, a.jsxs)("div", {
                      className: nK.kL,
                      children: [
                          c && null != l
                              ? (0, a.jsx)("div", {
                                    className: nK.WH,
                                    children: (0, a.jsx)(nJ, {
                                        url: l,
                                        title: ex.intl.string(ex.t.MQGNsN),
                                        rating: s?.recentRating,
                                        ratingCount: s?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          i && null != l
                              ? (0, a.jsx)("div", {
                                    className: nK.WH,
                                    children: (0, a.jsx)(nJ, {
                                        url: l,
                                        title: ex.intl.string(m),
                                        rating: d,
                                        ratingCount: u,
                                        tooltipVariant: o ? "localized" : "all",
                                    }),
                                })
                              : null,
                          x && null != n
                              ? (0, a.jsx)("div", { className: nK.WH, children: (0, a.jsx)(n$, { url: n }) })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var n0 = l(815996),
    n1 = l(722258),
    n8 = l(258245),
    n3 = l(561769),
    n2 = l(484469),
    n4 = l(57020),
    n6 = l(682301);
let n5 = [];
var n7 = l(758836),
    n9 = l(399872);
let ie = [0, 1, 2, 3, 4];
function it(e) {
    return e.skuId;
}
function il(e) {
    let { product: t, aspectRatio: l, listItemProps: n } = e,
        { skuId: i } = t,
        r = s.useContext(n3.v3),
        { trackAction: c } = D(),
        o = s.useRef(null),
        d = s.useCallback(
            (e) => {
                (c(b.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (o.current = e.currentTarget),
                    (0, n1.B)({
                        skuId: i,
                        analyticsLocations: [g.A.GAME_PROFILE],
                        analyticsSource: g.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, n4.A)({ product: t }),
                        returnRef: o,
                    }));
            },
            [c, i, t],
        ),
        { flattenProductVariants: u, ...m } = r;
    return (0, a.jsx)(n3.v3.Provider, {
        value: { flattenProductVariants: u ?? !0, ...m, productOverride: t },
        children: (0, a.jsx)(n8.A, {
            skuId: i,
            aspectRatio: l,
            cardClassName: n9.N,
            onClickCard: d,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: n,
        }),
    });
}
function ii() {
    return (0, a.jsx)(n2.A, {});
}
function ia() {
    let { game: e, closeModal: t, trackAction: l } = D(),
        { products: n, isLoading: i } = (function (e) {
            let {
                    skuIds: t,
                    hasFetched: l,
                    isFetching: n,
                } = (function (e) {
                    let {
                        hasFetched: t,
                        isFetching: l,
                        skuIds: n,
                    } = (0, u.cf)([y.A], () => ({
                        hasFetched: null != e && y.A.hasShopCollectionBeenFetched(e),
                        isFetching: null != e && y.A.isShopCollectionFetching(e),
                        skuIds: null != e ? y.A.getShopCollectionSkuIds(e) : void 0,
                    }));
                    return (
                        (0, s.useEffect)(() => {
                            null == e || t || y.A.isShopCollectionFetching(e) || lG(e);
                        }, [e, t]),
                        { skuIds: n ?? n5, hasFetched: t, isFetching: l }
                    );
                })(e),
                i = (0, n6.hv)(t, { flattenVariants: !0 }),
                a = (0, s.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                r = t.some((e) => i[e]?.state === "loading");
            return { products: a, isLoading: null != e && (!l || n || (t.length > 0 && r)) };
        })(e.shopCollectionIds?.[0]),
        r = s.useCallback(() => {
            (l(b.GameProfileTrackActionActions.DiscordCollectiblesShop),
                t(),
                (0, n0.Cz)({
                    analyticsLocations: [g.A.GAME_PROFILE],
                    analyticsSource: g.A.GAME_PROFILE,
                    tab: n7.G2.CATALOG,
                }));
        }, [l, t]),
        c = (0, tZ.l)("game_profile_shop_carousel");
    return i
        ? (0, a.jsx)(tu, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, a.jsx)(t5, { children: ie.map((e) => (0, a.jsx)(ii, {}, e)) }),
          })
        : 0 === n.length
          ? null
          : (0, a.jsx)(tm, {
                title: ex.intl.string(ex.t["5DYPT8"]),
                onClickViewAll: r,
                children: c
                    ? (0, a.jsx)(t1.A, {
                          gap: "md",
                          items: n,
                          getItemKey: it,
                          renderItem: (e, t) => (0, a.jsx)(il, { product: e, listItemProps: t }, e.skuId),
                      })
                    : (0, a.jsx)(t0.A, { gap: "md", children: n.map((e) => (0, a.jsx)(il, { product: e }, e.skuId)) }),
            });
}
var is = l(921138);
let ir = [],
    ic = [];
var io = l(987070);
let id = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function iu(e) {
    return e.id;
}
function im(e) {
    let { className: t } = e;
    return (0, a.jsx)(tl, { className: t, children: (0, a.jsx)(tt, { className: io.Lg }) });
}
function ix(e) {
    let { game: t, listItemProps: l } = e,
        { navigateToGame: n, trackAction: i } = D(),
        r = t.getCoverURL(256),
        [c, o] = s.useState(null),
        d = null == r || c === r,
        { shouldOpenGameProfile: u, gameId: m } = (0, is.Ay)({
            gameId: t.id,
            source: b.GameProfileSources.SimilarGames,
        }),
        x = s.useCallback(() => {
            (i(b.GameProfileTrackActionActions.ClickSimilarGame, t.id),
                u && null != m && n(m, b.GameProfileSources.SimilarGames));
        }, [t.id, m, i, u, n]),
        h = s.useCallback(() => o(r), [r]);
    return (0, a.jsx)(Q.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, a.jsxs)(tL.D, {
            ...l,
            className: io.Nr,
            onClick: x,
            "aria-label": ex.intl.formatToPlainString(ex.t["8QLQB+"], { gameName: t.name }),
            children: [
                (0, a.jsx)(t_.Ay, {
                    game: t,
                    className: io.xe,
                    size: t_.wu.SMALL,
                    imageSize: 256,
                    onLoad: h,
                    onError: h,
                }),
                !d && (0, a.jsx)(im, { className: io.uz }),
            ],
        }),
    });
}
function ih() {
    let { game: e } = D(),
        t = e.id,
        { isFetching: l, similarGames: n } = (function (e) {
            let t = !lL.has(e),
                { data: l, isLoading: n, error: i } = lO(e, t),
                a = t && null != l ? l : ir;
            (0, I.x)(a);
            let s = (0, u.bG)(
                    [tx.A],
                    () => a.some((e) => null == tx.A.getGame(e) && !tx.A.hasNoData(e) && !tx.A.didFetchingFail(e)),
                    [a],
                ),
                r = (0, u.yK)(
                    [tx.A, w.default],
                    () => {
                        let e = w.default.getCurrentUser()?.nsfwAllowed;
                        return a
                            .map((e) => tx.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => (0, is.T_)(t) && !(0, G.b)(t, e));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == l) || n || s, similarGames: r }
                : { isFetching: !1, similarGames: ic };
        })(t),
        i = (0, tZ.l)("game_profile_similar_games");
    return lL.has(t)
        ? null
        : l
          ? (0, a.jsx)(tu, {
                showViewAllSkeleton: !1,
                skeletonTitleWidth: 124,
                children: (0, a.jsx)("div", {
                    className: io.XG,
                    style: id,
                    children: (0, a.jsx)(t5, {
                        children: eq()
                            .range(0, 8)
                            .map((e) => (0, a.jsx)(im, { className: io.aZ }, e)),
                    }),
                }),
            })
          : 0 === n.length
            ? null
            : (0, a.jsx)(tm, {
                  title: ex.intl.string(ex.t["6rLyQB"]),
                  children: (0, a.jsx)("div", {
                      className: io.XG,
                      style: id,
                      children: i
                          ? (0, a.jsx)(t1.A, {
                                gap: "md",
                                items: n,
                                getItemKey: iu,
                                itemClassName: io.cW,
                                renderItem: (e, t) => (0, a.jsx)(ix, { game: e, listItemProps: t }, e.id),
                            })
                          : (0, a.jsx)(t0.A, { gap: "md", children: n.map((e) => (0, a.jsx)(ix, { game: e }, e.id)) }),
                  }),
              });
}
l(667532);
var ig = l(853022);
let ij = new Set(["1402418703554842694", "356877880938070016"]),
    ip = [l2.V.EPICGAMES, l2.V.STEAM, l2.V.ROBLOX, l2.V.BATTLENET, l2.V.RIOT, l2.V.MINECRAFT];
function iE(e) {
    return (0, a.jsx)(J.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var iA = l(349361),
    iv = l(924895),
    iI = l(422688),
    iN = l(505200),
    iS = l(695250);
let iC = function (e) {
    switch (e.category) {
        case l2.V.STEAM:
            return {
                icon: nF.N,
                text: ex.intl.string(ex.t.FsANs4),
                ariaLabel: ex.intl.string(ex.t["P+ePTG"]),
                action: b.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case l2.V.EPICGAMES:
            return {
                icon: iA.r,
                text: ex.intl.string(ex.t.ZbBMHa),
                ariaLabel: ex.intl.string(ex.t.BwX0UW),
                action: b.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case l2.V.ROBLOX:
            return {
                icon: iv.H,
                text: ex.intl.string(ex.t["pJ+P+h"]),
                ariaLabel: ex.intl.string(ex.t.tYxpdf),
                action: b.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case l2.V.BATTLENET:
            return {
                icon: iI.a,
                text: ex.intl.string(ex.t["A7grp+"]),
                ariaLabel: ex.intl.string(ex.t.x9at20),
                action: b.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case l2.V.RIOT:
            return {
                icon: iN.A,
                text: ex.intl.string(ex.t.h6MapL),
                ariaLabel: ex.intl.string(ex.t["528nvc"]),
                action: b.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case l2.V.MINECRAFT:
            return {
                icon: iS.m,
                text: ex.intl.string(ex.t["HZbmO+"]),
                ariaLabel: ex.intl.string(ex.t.WWTqYn),
                action: b.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: no.Y,
                text: ex.intl.string(ex.t["QpN/Iz"]),
                ariaLabel: ex.intl.string(ex.t["8JZmmF"]),
                action: b.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
var ib = l(242216);
function iT(e) {
    let t,
        l,
        n,
        i,
        a,
        r =
            ((t = (0, nz.I)(e?.id)),
            (l = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === ek.d3x.XBOX_GAME_PASS && !(0, e7.uJ)(e.id));
                return t?.id == null ? null : (0, ig.jA)(t.id);
            })(e)),
            (n = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            s.useMemo(() => {
                if ((null == i && null == l) || null == n) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== l2.V.EPICGAMES || !!ij.has(n)) &&
                            (e.category !== l2.V.STEAM || a !== tX.Y.RETIRED_ABANDONED) &&
                            ip.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === tX.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === l2.V.STEAM) ||
                    e.push({ category: l2.V.STEAM, url: t });
                let s = e.sort((e, t) => (e.category === l2.V.STEAM ? -1 : +(t.category === l2.V.STEAM)));
                return (null != l && s.unshift({ category: "XBOX_GAME_PASS", url: l }), s);
            }, [t, i, n, a, l]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function iy(e) {
    let { data: t } = e,
        { trackAction: l } = D(),
        n = (0, nn.A)();
    return (0, a.jsx)(iE, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (l(t.action), n(t.url));
        },
    });
}
let iR = function () {
    let { game: e, trackAction: t } = D(),
        { showsStoreLinks: n, storeWebsites: i } = iT(e),
        r = s.useMemo(() => i.map(iC).filter((e) => null != e), [i]);
    if (!n) return null;
    if (1 === r.length) {
        let [e] = r;
        return (0, a.jsx)(iy, { data: e });
    }
    if (2 === r.length)
        return (0, a.jsxs)("div", {
            className: ib.G,
            children: [(0, a.jsx)(iy, { data: r[0] }), (0, a.jsx)(iy, { data: r[1] })],
        });
    let c = (0, a.jsx)(iE, {
        text: ex.intl.string(ex.t["/hMurx"]),
        "aria-label": ex.intl.string(ex.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: n, trackAction: i } = e;
                (0, x.openModalLazy)(async () => {
                    let { default: e } = await l.e("307898").then(l.bind(l, 679361));
                    return (l) => (0, a.jsx)(e, { game: t, websiteButtons: n, trackAction: i, ...l });
                });
            })({ game: e, websiteButtons: r, trackAction: t }),
    });
    return i.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, a.jsxs)("div", { className: ib.G, children: [(0, a.jsx)(iy, { data: r[0] }), c] })
        : c;
};
var ik = l(123292),
    iL = l(672572),
    iG = l(94936);
function iM() {
    let e = s.useRef(null),
        {
            isExpanded: t,
            showToggle: l,
            handleToggleExpanded: n,
        } = (function (e) {
            let { trackAction: t } = D(),
                [l, n] = s.useState("full");
            s.useEffect(() => {
                let t = e.current;
                if (null == t) return;
                let l = new ResizeObserver(() => {
                    let t = e.current;
                    null != t &&
                        n((e) => ("expanded" === e ? e : t.scrollHeight - t.clientHeight > 1 ? "collapsed" : "full"));
                });
                return (l.observe(t), () => l.disconnect());
            }, [e]);
            let i = s.useCallback(() => {
                "expanded" === l
                    ? (t(b.GameProfileTrackActionActions.ShowLess), n("collapsed"))
                    : "collapsed" === l && (t(b.GameProfileTrackActionActions.ShowMore), n("expanded"));
            }, [t, l]);
            return {
                isExpanded: "expanded" === l,
                showToggle: "expanded" === l || "collapsed" === l,
                handleToggleExpanded: i,
            };
        })(e),
        { game: i, isTwoColumn: r } = D(),
        c = s.useMemo(() => (r ? 8 : 5), [r]);
    if (null == i.description) return null;
    let d = t ? ex.intl.string(ex.t["6MwJo/"]) : ex.intl.string(ex.t.lBeKY2);
    return (0, a.jsxs)("div", {
        className: o()(iL.fi, iG.k),
        children: [
            (0, a.jsx)(Y.E, {
                ref: e,
                className: iG.Q,
                lineClamp: t ? void 0 : c,
                variant: "text-md/medium",
                children: i.description,
            }),
            l && (0, a.jsx)(ik.Q, { onClick: n, text: d }),
        ],
    });
}
var iO = l(40478),
    iP = l(764948);
let i_ = s.memo(function (e) {
    let { analyticsLocations: t, selectTab: l, getScrollOffset: n } = e,
        { game: i } = D(),
        s = i.steamReleaseStatus !== tX.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: iP.V,
        children: [
            (0, a.jsx)(nU, {}),
            (0, a.jsxs)("div", {
                className: iO.h,
                children: [
                    (0, a.jsx)(tW, {}),
                    (0, a.jsxs)("div", { className: iO.X, children: [(0, a.jsx)(iR, {}), (0, a.jsx)(iM, {})] }),
                ],
            }),
            (0, a.jsx)(nN, { analyticsLocations: t }),
            (0, a.jsx)(tc, {}),
            (0, a.jsx)(lZ, { getScrollOffset: n }),
            (0, a.jsx)(lo, { selectTab: l }),
            (0, a.jsx)(ia, {}),
            (0, a.jsx)(ih, {}),
            s && (0, a.jsx)(nZ, {}),
            (0, a.jsx)(np, {}),
        ],
    });
});
var iw = l(164135);
let iV = s.memo(function (e) {
    let { selectTab: t, getScrollOffset: l } = e;
    return (0, a.jsxs)("div", {
        className: iw.V,
        children: [
            (0, a.jsxs)("div", { className: iw.B, children: [(0, a.jsx)(nU, {}), (0, a.jsx)(iM, {})] }),
            (0, a.jsx)(lZ, { getScrollOffset: l }),
            (0, a.jsx)(lo, { selectTab: t }),
            (0, a.jsx)(ia, {}),
            (0, a.jsx)(ih, {}),
        ],
    });
});
var iD = l(881698),
    iU = l(928550),
    iF = l(562708),
    iY = l(414499),
    iW = l(359549),
    iB = l(139286),
    iH = l(873516);
function iz(e) {
    let { onCloudPlayClick: t, analyticsLocations: l } = e,
        { closeModal: n, trackAction: i } = D();
    (0, iB.A)({
        name: iF.ImpressionNames.CLOUD_PLAY_CTA,
        type: iF.ImpressionTypes.VIEW,
        properties: { location_stack: l },
    });
    let r = s.useCallback(() => {
        (i(b.GameProfileTrackActionActions.CloudPlay), n(), t());
    }, [n, t, i]);
    return (0, a.jsx)(Q.m, {
        text: ex.intl.string(ex.t.JVwWva),
        position: "top",
        children: (0, a.jsx)(J.$, {
            icon: iY.h,
            text: ex.intl.string(ex.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: r,
            fullWidth: !0,
        }),
    });
}
function iX(e) {
    let { cloudPlayAppId: t, analyticsLocations: l } = e,
        { game: n } = D(),
        i = (0, iW.rC)({ applicationId: t, sourceApplicationId: n.id, analyticsLocations: l });
    return null == i
        ? null
        : (0, a.jsx)("div", {
              className: iH.k,
              children: (0, a.jsx)(iz, { onCloudPlayClick: i, analyticsLocations: l }),
          });
}
var iK = l(768626);
function iJ(e) {
    let { analyticsLocations: t } = e,
        { game: l } = D(),
        n = (0, iD.A)(l.linkedApplications)?.id,
        [i] = (0, iU.L_)(l.getOfficialApplicationId()),
        [s] = (0, iU.L_)(l.id),
        { showsStoreLinks: r } = iT(l),
        c = l.steamReleaseStatus !== tX.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: o()(iK.pz, iL.fi, r ? iK.FJ : iK.dg),
        children: [
            null == n || i || s ? null : (0, a.jsx)(iX, { cloudPlayAppId: n, analyticsLocations: t }),
            (0, a.jsxs)("div", {
                className: iP.V,
                children: [
                    (0, a.jsx)(iR, {}),
                    (0, a.jsx)(nN, { analyticsLocations: t }),
                    (0, a.jsx)(tc, {}),
                    c && (0, a.jsx)(nZ, {}),
                    (0, a.jsx)(np, {}),
                ],
            }),
        ],
    });
}
var i$ = l(105865);
function iQ(e) {
    let { isTwoColumn: t, selectTab: l, selectionVersion: n, initialScrollOffset: i, analyticsLocations: r } = e,
        c = s.useRef(null),
        o = s.useRef(null),
        d = s.useRef(n);
    (s.useLayoutEffect(() => {
        0 === n && null != i && i > 0 && o.current?.getScrollerNode()?.scrollTo({ top: i, behavior: "instant" });
    }, [i, n]),
        s.useLayoutEffect(() => {
            n !== d.current &&
                (o.current?.getScrollerNode()?.scrollTo({ top: 0, behavior: "instant" }), (d.current = n));
        }, [n]));
    let u = s.useCallback(() => o.current?.getScrollerNode()?.scrollTop ?? 0, []),
        m = s.useCallback((e) => {
            if (null != c.current) {
                let t = Math.max(0, 1 - e.currentTarget.scrollTop / 150);
                c.current.style.opacity = String(t);
            }
        }, []);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(tU, { ref: c }),
            (0, a.jsxs)(eZ.Ch, {
                ref: o,
                className: i$.XG,
                onScroll: m,
                children: [
                    (0, a.jsx)("div", { className: i$.xY, "aria-hidden": !0 }),
                    (0, a.jsx)(tz, {}),
                    (0, a.jsx)(tR.F, {
                        children: t
                            ? (0, a.jsxs)("div", {
                                  className: i$.jC,
                                  children: [
                                      (0, a.jsx)(iV, { selectTab: l, getScrollOffset: u }),
                                      (0, a.jsx)(iJ, { analyticsLocations: r }),
                                  ],
                              })
                            : (0, a.jsx)("div", {
                                  className: i$.b9,
                                  children: (0, a.jsx)(i_, { analyticsLocations: r, selectTab: l, getScrollOffset: u }),
                              }),
                    }),
                ],
            }),
        ],
    });
}
var iq = l(658820),
    iZ = l(787188);
function i0(e) {
    let { applicationId: t, selectedPageIndex: l } = e;
    return (0, a.jsx)(iq.SocialLayerStorefrontInnerWrapper, {
        applicationId: t,
        pageIndex: l,
        analyticsLocation: g.A.GAME_PROFILE_GAME_SHOP,
        analyticsPlacement: t$.Ye.GAME_PROFILE_GAME_SHOP,
        className: iZ.kL,
        scrollerClassName: iZ.XG,
        promotionBannerClassName: iZ.Rv,
    });
}
var i1 = l(733391),
    i8 = l(171616);
function i3(e) {
    let {
            gameId: t,
            source: l,
            sourceUserId: n,
            transitionState: i,
            onClose: r,
            initialScrollOffset: c,
            navigateToGame: D,
        } = e,
        [U, F] = s.useState(!0),
        [Y, W] = s.useState(null),
        { clientThemesClassName: B } = (0, E.Ay)(),
        H = (0, u.bG)([C.default], () => C.default.locale),
        z = s.useMemo(() => (0, b.generateViewId)(), []),
        { analyticsLocations: X } = (0, f.Ay)(g.A.GAME_PROFILE),
        K = (0, R.s)(t),
        { data: J } = (0, I.I)(t),
        $ = J?.getOfficialApplicationId(),
        Q = (0, k.rG)(J),
        q = null != $,
        Z = (0, u.bG)([p.A], () => null != $ && p.A.didFetchingApplicationFail($), [$]),
        ee = J?.name ?? "",
        et = (0, G.A)(J),
        el = s.useRef(null);
    s.useEffect(() => {
        el.current = Y;
    }, [Y]);
    let {
            hasAlreadyLinked: en,
            canStartAuthorization: ei,
            fetched: ea,
            startAuthorization: es,
            connectionApp: er,
        } = (0, j.RD)(J),
        { invite: ec, isMember: eo, isResolving: ed } = (0, k.Ay)(J, W),
        { socialLayerStorefrontRecommendationsData: em, socialLayerStorefrontRecommendationsLoading: ex } = (function (
            e,
        ) {
            let t = w.default.getCurrentUser()?.id,
                l = s.useMemo(() => (null != t ? [t] : []), [t]),
                { storefrontApplicationId: n, isStorefrontConfigLoaded: i } = (0, u.cf)(
                    [O.A],
                    () => ({
                        storefrontApplicationId: null != e ? O.A.getApplicationIdFromDetectableId(e) : void 0,
                        isStorefrontConfigLoaded: "success" === O.A.getConfigFetchState().state,
                    }),
                    [e],
                ),
                a = (0, M.h)(n),
                r = (0, u.bG)([p.A], () => null != n && p.A.didFetchingApplicationFail(n), [n]),
                c = s.useMemo(() => (null != n ? [n] : []), [n]),
                { recommendations: o, status: d } = (0, _.XQ)({
                    applicationIds: c,
                    userIds: l,
                    numItems: 6,
                    source: P.B.USER_PROFILE,
                }),
                m = s.useMemo(
                    () =>
                        null == a || null == a.guildId || "success" !== d || 0 === o.length
                            ? null
                            : { application: a, skuIds: o.map((e) => e.id), guildId: a.guildId },
                    [a, d, o],
                ),
                x = "loading" === d,
                h = "success" === d && o.length > 0 && null == a && !r;
            return {
                socialLayerStorefrontRecommendationsData: m,
                socialLayerStorefrontRecommendationsLoading: i && null != n && (x || h),
            };
        })(t),
        eh = s.useCallback(
            function (e, n, i) {
                let a = (0, b.getGuildIdAndVerifiedFromInvite)(el.current);
                (0, b.trackGameProfileAction)({
                    gameName: ee,
                    gameId: t,
                    action: e,
                    similarGameId: n,
                    viewId: z,
                    guildId: i ?? a.guildId,
                    isVerified: null == i && a.isVerified,
                    source: l,
                });
            },
            [ee, t, z, l],
        );
    ((0, h.Ay)(() => {
        ((0, b.trackGameProfileOpen)({
            source: l,
            viewId: z,
            gameId: t,
            gameName: ee,
            authorId: n,
            profileType: b.GameProfileTypes.FullProfile,
        }),
            (0, A.He)());
    }),
        (0, h.Ay)(() => () => {
            let { isVerified: e, guildId: l } = (0, b.getGuildIdAndVerifiedFromInvite)(el.current),
                n = Date.now(),
                i = K.map((e) => {
                    let t = (0, v.JM)(e) ? (0, v.W6)(e, n) : (0, v.aJ)(e, H);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, b.trackGameProfileClose)({
                viewId: z,
                gameId: t,
                gameName: ee,
                playedFriendIds: K.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: y.A.getSimilarGames(t) ?? [],
                guildId: l,
                isVerified: e,
            });
        }));
    let eg = s.useCallback((e) => {
            F(e.contentRect.width >= 800);
        }, []),
        ef = (0, d.w)(eg, [], { fireOnMount: !0 }),
        ej = s.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, x.closeAllModals)(), (0, S.M)()) : r();
            },
            [r],
        ),
        ep = s.useCallback(() => ej(!1), [ej]),
        { navigation: eE, selectionVersion: eA } = (function (e) {
            let [t, l] = s.useState(T.OVERVIEW),
                [n, i] = s.useState(0),
                a = s.useCallback((e) => {
                    (l(e), i((e) => e + 1));
                }, []),
                r = s.useCallback(
                    (l) => {
                        if (l !== t) {
                            let t = L[l];
                            null != t && e(t);
                        }
                        a(l);
                    },
                    [t, a, e],
                );
            return { navigation: s.useMemo(() => ({ selectedTab: t, selectTab: r }), [t, r]), selectionVersion: n };
        })(eh),
        { selectedTab: ev } = eE,
        eI = (function (e) {
            let { game: t, navigation: l } = e,
                { selectedTab: n, selectTab: i } = l,
                a = t?.id,
                r = t?.getOfficialApplicationId(),
                c = eu({ location: "GameProfileModal" });
            s.useEffect(() => {
                c && (0, i1.Xw)();
            }, [c]);
            let o = (0, u.bG)(
                    [O.A],
                    () =>
                        (null != a ? O.A.getApplicationIdFromDetectableId(a) : void 0) ??
                        (null != r && O.A.hasStorefrontForApplicationId(r) ? r : null),
                    [a, r],
                ),
                d = c && null != o,
                { storefront: m } = (0, i8.A)({ applicationId: d ? o : null }),
                [x, h] = s.useState({ storefrontId: m?.id, index: 0 }),
                [g, f] = s.useState(n);
            n !== g && (f(n), n !== T.COMMERCE && h({ storefrontId: m?.id, index: 0 }));
            let j = x.storefrontId === m?.id && x.index < (m?.pages.length ?? 0) ? x.index : 0,
                p = s.useCallback(
                    (e) => {
                        !d ||
                            e < 0 ||
                            e >= (m?.pages.length ?? 0) ||
                            (h({ storefrontId: m?.id, index: e }), i(T.COMMERCE));
                    },
                    [d, i, m],
                );
            return {
                hasCommerceTab: d,
                storefrontApplicationId: o,
                storefront: m,
                selectedStorefrontPageIndex: j,
                selectStorefrontPage: p,
            };
        })({ game: J, navigation: eE }),
        { hasCommerceTab: eN, storefrontApplicationId: eS, storefront: eC, selectedStorefrontPageIndex: eb } = eI,
        eT = Object.values(eC?.promotions ?? {})[0] ?? null,
        ey = s.useMemo(() => {
            if (null != J)
                return {
                    game: J,
                    isTwoColumn: U,
                    canStartAuthorization: ei,
                    hasAlreadyLinked: en,
                    fetchedAuthorization: ea,
                    startAuthorization: es,
                    connectionApp: er,
                    invite: ec,
                    hasDiscordWebsite: Q,
                    hasOfficialApplication: q,
                    officialApplicationFetchFailed: Z,
                    isCommunityInviteResolving: ed,
                    isMember: eo,
                    socialLayerStorefrontRecommendationsData: em,
                    socialLayerStorefrontRecommendationsLoading: ex,
                    hasCommerceTab: eN,
                    storefrontPromotion: eT,
                    closeModal: ej,
                    navigateToGame: D,
                    trackAction: eh,
                    viewId: z,
                };
        }, [J, U, ei, en, ea, es, er, ec, Q, q, Z, ed, eo, em, ex, eN, eT, ej, D, eh, z]);
    return null == J
        ? null
        : (0, a.jsx)(f.f5, {
              value: X,
              children: (0, a.jsx)(m.N, {
                  transitionState: i,
                  onClose: r,
                  children: (0, a.jsx)(V.Provider, {
                      value: ey,
                      children: (0, a.jsx)("div", {
                          className: o()(B, iL.kL),
                          ref: ef,
                          children: (0, a.jsxs)(N.A, {
                              obscured: et,
                              onClose: ep,
                              children: [
                                  (0, a.jsx)("div", {
                                      className: iL.sx,
                                      children: (0, a.jsx)(e$, { navigation: eE, socialLayerStorefront: eI }),
                                  }),
                                  ev === T.OVERVIEW &&
                                      (0, a.jsx)(iQ, {
                                          selectTab: eE.selectTab,
                                          selectionVersion: eA,
                                          initialScrollOffset: c,
                                          isTwoColumn: U,
                                          analyticsLocations: X,
                                      }),
                                  ev === T.COMMUNITIES && (0, a.jsx)(ty, {}),
                                  ev === T.COMMERCE && (0, a.jsx)(i0, { applicationId: eS, selectedPageIndex: eb }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
}
let i2 = function (e) {
    let { gameId: t, source: l, sourceUserId: n, initialScrollOffset: i, ...r } = e,
        [c, o] = s.useState({ gameId: t, source: l, sourceUserId: n, initialScrollOffset: i }),
        d = c.gameId,
        u = s.useCallback(
            (e, t) => {
                e !== d && ((0, k.UT)(e), o({ gameId: e, source: t }));
            },
            [d],
        );
    return (0, a.jsx)(
        i3,
        {
            gameId: c.gameId,
            source: c.source,
            sourceUserId: c.sourceUserId,
            initialScrollOffset: c.initialScrollOffset,
            navigateToGame: u,
            ...r,
        },
        c.gameId,
    );
};
