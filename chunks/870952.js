l.d(t, { default: () => ak });
var n,
    i,
    a,
    s = l(477900),
    r = l(582128),
    c = l.t(r, 2),
    o = l(503698),
    u = l.n(o),
    d = l(535185),
    m = l(17928),
    x = l(521489),
    h = l(192308),
    g = l(964486),
    f = l(793574),
    j = l(688810),
    p = l(206828),
    v = l(587895),
    E = l(590703),
    A = l(180170),
    I = l(583846),
    N = l(569926),
    b = l(570962),
    S = l(38145),
    C = l(773669),
    T = l(409626),
    y = (((n = {}).OVERVIEW = "overview"), (n.COMMUNITIES = "communities"), (n.COMMERCE = "commerce"), n),
    L = l(422069),
    k = l(205184),
    R = l(957807);
let G = {
    [y.OVERVIEW]: T.GameProfileTrackActionActions.Overview,
    [y.COMMUNITIES]: T.GameProfileTrackActionActions.Communities,
    [y.COMMERCE]: T.GameProfileTrackActionActions.GameShop,
};
var O = l(49491),
    M = l(429913),
    P = l(832163),
    _ = l(820847),
    w = l(862772),
    D = l(287809);
let V = r.createContext(void 0);
function U() {
    let e = r.useContext(V);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var F = l(109112),
    Y = l(761508),
    W = l(834730),
    B = l(858899),
    H = l(265872),
    z = l(980707),
    X = l(477782),
    K = l(821609),
    J = l(663341),
    $ = l(866665),
    q = l(408278),
    Q = l(34188),
    Z = l(173936),
    ee = l(365199),
    et = l(789645),
    el = l(442433),
    en = l(50268),
    ei = l(44724),
    ea = l(676924),
    es = l(957565),
    er = l(945810);
let ec = { enabled: !1 },
    eo = (0, er.mj)({
        name: "2026-09-game-profiles-v3-commerce-tab",
        kind: "user",
        defaultConfig: ec,
        variations: { 0: ec, 1: { enabled: !0 } },
    });
function eu(e) {
    let { location: t } = e;
    return eo.useConfig({ location: t }).enabled;
}
var ed = l(695366),
    em = l(105292);
l(321073);
var ex = l(540185),
    eh = l(926268),
    eg = l(53788),
    ef = l(831453),
    ej = l(785866),
    ep = l(555704),
    ev = l(47675),
    eE = l(633075),
    eA = l(289173),
    eI = l(321191),
    eN = l(958805),
    eb = l(735321),
    eS = l(96173),
    eC = l(280450),
    eT = l(403362);
async function ey(e) {
    let t = e((0, eb.BF)());
    await eN.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
var eL = l(652215);
function ek(e) {
    var t;
    let n,
        i,
        { className: a, activeTab: o } = e,
        { game: u, closeModal: d, trackAction: x } = U(),
        g = r.useRef(null),
        j = r.useRef(null),
        p = (0, en.A)({ id: u.id, label: em.intl.string(em.t.SHQGPj) }),
        v =
            ((t = u.id),
            (n = c.useContext(V)?.trackAction),
            (i = r.useCallback(() => {
                null != t &&
                    (n?.(T.GameProfileTrackActionActions.Feedback),
                    (0, h.openModalLazy)(async () => {
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
                        return (l) => (0, s.jsx)(e, { ...l, detected: { gameId: t } });
                    }));
            }, [t, n])),
            null == t
                ? null
                : (0, s.jsx)(X.Dr, {
                      id: "game-profile-something-wrong",
                      label: em.intl.string(em.t.qP2cXd),
                      action: i,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: ed.E },
                  })),
        E = (function (e) {
            let t = e?.id,
                l = e?.name ?? "",
                n = (0, m.bG)([eC.default], () => eC.default.getId()),
                i = r.useMemo(
                    () => [
                        {
                            type: ex.x.FAVORITE_GAMES,
                            addLabel: em.intl.string(em.t.fgmitg),
                            removeLabel: em.intl.string(em.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: eh.HeartIcon,
                        },
                        {
                            type: ex.x.PLAYED_GAMES,
                            addLabel: em.intl.string(em.t["0xIVLR"]),
                            removeLabel: em.intl.string(em.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: eg.G,
                        },
                        {
                            type: ex.x.CURRENT_GAMES,
                            addLabel: em.intl.string(em.t.G0c4En),
                            removeLabel: em.intl.string(em.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: ef.H,
                        },
                        {
                            type: ex.x.WANT_TO_PLAY_GAMES,
                            addLabel: em.intl.string(em.t.UuBS4K),
                            removeLabel: em.intl.string(em.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: ej._,
                        },
                    ],
                    [],
                ),
                a = (0, m.yK)([eI.A], () => (null == n ? [] : (eI.A.getUserProfile(n)?.widgets ?? [])), [n]),
                c = (0, eS.A)(),
                o = r.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...c, ...a].filter((e) => e instanceof eE.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(eT.Vq).find((e) => t.has(e)) ?? null;
                }, [c, a, e]),
                u = r.useCallback(
                    async (e, l) => {
                        let n;
                        if (
                            (await ey((i) => {
                                let a = i.filter(eA.fu).find((t) => t.type === e) ?? null;
                                if (l) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, eb.uA)(a))) return i;
                                    let l = { gameId: t },
                                        s = null != a ? [l, ...(a.games ?? [])] : [l];
                                    n = new eA.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    n = new eA.Yy({ ...a, games: e });
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
                        (0, ev.un)({
                            action: l ? "GAME_ADDED" : "GAME_REMOVED",
                            gameId: t,
                            ...i.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [t],
                ),
                d = r.useCallback(
                    async (e) => {
                        let t;
                        if (
                            null == o ||
                            (await ey((l) =>
                                e
                                    ? l.some((e) => e instanceof eE.R && e.applicationId === o)
                                        ? l
                                        : [(t = new eE.R({ applicationId: o })), ...l]
                                    : ((t = l.find((e) => e instanceof eE.R && e.applicationId === o) ?? null),
                                      l.filter((e) => !(e instanceof eE.R && e.applicationId === o))),
                            ),
                            null == t)
                        )
                            return;
                        let l = t;
                        (0, ev.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...l.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [o],
                );
            if (null == n) return null;
            let x = null != e && (0, eb.XX)(e),
                h = [];
            if (null != o) {
                let e = a.some((e) => e instanceof eE.R && e.applicationId === o);
                h.push(
                    (0, s.jsx)(
                        X.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? em.intl.formatToPlainString(em.t.Ktb1n8, { name: l })
                                : em.intl.formatToPlainString(em.t.Xp6iZt, { name: l }),
                            action: () => d(!e),
                            leadingAccessory: { type: "icon", icon: ep.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (x)
                for (let e of i) {
                    let l = a.filter(eA.fu).find((t) => t.type === e.type) ?? null,
                        n = null != l && l.games.some((e) => e.gameId === t),
                        i = !n && null != l && (0, eb.uA)(l);
                    h.push(
                        (0, s.jsx)(
                            X.Dr,
                            {
                                id: e.menuId,
                                label: n ? e.removeLabel : e.addLabel,
                                subtext: i ? em.intl.string(em.t["86OoiH"]) : void 0,
                                subtextLineClamp: 1,
                                action: () => u(e.type, !n),
                                leadingAccessory: { type: "icon", icon: e.icon },
                                disabled: i,
                            },
                            e.type,
                        ),
                    );
                }
            return 0 === h.length ? null : h;
        })(u),
        A = eu({ location: "GameProfileOverflowMenu" }),
        I = (0, m.bG)([P.A], () => P.A.getApplicationIdFromDetectableId(u.id)),
        N = (0, m.bG)([P.A], () => P.A.hasStorefrontForApplicationId(I), [I]),
        b = r.useCallback(() => {
            null != I && (0, ei.G)({ applicationId: I });
        }, [I]),
        S = r.useCallback(() => {
            null != I && (x(T.GameProfileTrackActionActions.GameShop), (0, ei.default)({ applicationId: I }), d());
        }, [I, x, d]),
        C = r.useCallback(() => d(!1), [d]),
        L = r.useCallback(() => {
            x(T.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eL.BVt.GAME_PROFILE(u.id)}`;
            (0, es.C)(e, () => {
                (0, B.P0)({ text: em.intl.string(em.t["+5kSoW"]), variant: "success" });
            });
        }, [u.id, x]);
    return (0, s.jsxs)("div", {
        className: a,
        children: [
            o === y.COMMERCE &&
                (0, s.jsx)(ea.A, {
                    location: f.A.GAME_PROFILE,
                    onNavigate: d,
                    variant: "overlay-secondary",
                    themeOverride: "dark",
                }),
            null != E &&
                o !== y.COMMERCE &&
                (0, s.jsx)(H.Y, {
                    targetElementRef: j,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, s.jsx)(z.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                ((0, el.Z_)(), t());
                            },
                            "aria-label": em.intl.string(em.t.sidPSo),
                            onSelect: () => {},
                            children: (0, s.jsx)(X.rX, { children: E }),
                        });
                    },
                    children: (e) =>
                        (0, s.jsx)("div", {
                            ...e,
                            ref: j,
                            children: (0, s.jsx)(K.$, {
                                icon: J.PlusLargeIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: em.intl.string(em.t.sidPSo),
                            }),
                        }),
                }),
            N &&
                !A &&
                (0, s.jsx)($.m, {
                    text: em.intl.string(em.t.apFNLU),
                    children: (0, s.jsx)(q.K, {
                        icon: Q.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": em.intl.string(em.t.apFNLU),
                        onMouseDown: b,
                        onClick: S,
                    }),
                }),
            o !== y.COMMERCE &&
                (0, s.jsx)($.m, {
                    text: em.intl.string(em.t.WqhZss),
                    children: (0, s.jsx)(q.K, {
                        icon: Z.LinkIcon,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": em.intl.string(em.t.WqhZss),
                        onClick: L,
                    }),
                }),
            (null != p || null != v) &&
                o !== y.COMMERCE &&
                (0, s.jsx)(H.Y, {
                    targetElementRef: g,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, s.jsx)(z.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                ((0, el.Z_)(), t());
                            },
                            "aria-label": em.intl.string(em.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(X.rX, { children: v }), (0, s.jsx)(X.rX, { children: p })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, s.jsx)($.m, {
                            text: em.intl.string(em.t["UKOtz+"]),
                            children: (0, s.jsx)("div", {
                                ...e,
                                ref: g,
                                children: (0, s.jsx)(q.K, {
                                    icon: ee.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": em.intl.string(em.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, s.jsx)(q.K, {
                icon: et.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: C,
                "aria-label": em.intl.string(em.t.cpT0Cq),
            }),
        ],
    });
}
let eR = { enabled: !1 },
    eG = (0, er.mj)({
        name: "2026-09-game-profiles-v3-communities-tab",
        kind: "user",
        defaultConfig: eR,
        variations: { 0: eR, 1: { enabled: !0 } },
    });
function eO(e) {
    let { className: t, navigation: l } = e,
        { selectedTab: n, selectTab: i } = l;
    if (
        !(function (e) {
            let { location: t } = e;
            return eG.useConfig({ location: t }).enabled;
        })({ location: "GameProfileCommunitiesTabBar" })
    )
        return null;
    let a = em.intl.string(em.t["3xFZEo"]);
    return (0, s.jsx)(Y.V.Item, {
        id: y.COMMUNITIES,
        look: "brand",
        disableItemStyles: !0,
        selectedItem: n,
        onClick: () => i(y.COMMUNITIES),
        className: t,
        "aria-label": a,
        children: (0, s.jsx)(W.E, { variant: "text-md/medium", color: "none", children: a }),
    });
}
function eM(e) {
    let { className: t, navigation: l } = e,
        { game: n } = U();
    return (n.communityGuildIds?.length ?? 0) < 3 ? null : (0, s.jsx)(eO, { className: t, navigation: l });
}
var eP = l(661531),
    e_ = l(331322),
    ew = l(278416),
    eD = l(478016),
    eV = l(900797),
    eU = l(847374),
    eF = l(421773),
    eY = l(421108);
let eW = "text-md/medium",
    eB = [];
function eH(e) {
    let { label: t, chevron: l, socialLayerStorefront: n } = e,
        i = (function (e) {
            let { hasCommerceTab: t, storefront: l } = e,
                n = Object.values(l?.promotions ?? {}).find((e) => {
                    let { flavor: t, endsAt: l } = e;
                    return "nitro" === t && (null == l || null != (0, eY.ZH)(l));
                }),
                i = (0, eY.tm)(n?.endsAt);
            return t && null != n && !i;
        })(n);
    return (0, s.jsxs)(e_.B, {
        as: "span",
        direction: "horizontal",
        align: "center",
        gap: 8,
        fullWidth: !1,
        children: [
            i &&
                (0, s.jsx)(ew.TagIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: eP.A.colors.ICON_FEEDBACK_POSITIVE,
                    "aria-hidden": "true",
                }),
            (0, s.jsxs)(e_.B, {
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
function ez(e) {
    let { className: t, label: l, navigation: n, socialLayerStorefront: i } = e,
        { selectedTab: a, selectTab: c } = n,
        { storefront: o, selectedStorefrontPageIndex: u, selectStorefrontPage: d } = i,
        m = o?.pages ?? eB,
        x = r.useRef(null),
        { isHovered: h, setIsHovered: g, onMouseEnter: f, onMouseLeave: j, cancelTimers: p } = (0, eF.A)(100, 100),
        v = em.intl.string(em.t["J3/JCl"]),
        E = r.useCallback(
            (e) => {
                (p(), g(e));
            },
            [p, g],
        );
    return (0, s.jsx)(H.Y, {
        targetElementRef: x,
        shouldShow: h,
        position: "bottom",
        align: "left",
        useMouseEnter: !0,
        onRequestOpen: () => E(!0),
        onRequestClose: () => E(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)("div", {
                onMouseEnter: f,
                onMouseLeave: j,
                children: (0, s.jsx)(z.W, {
                    navId: "game-profile-commerce-pages",
                    "aria-label": v,
                    onClose: t,
                    onSelect: void 0,
                    children: (0, s.jsx)(X.rX, {
                        children: m.map((e, t) => {
                            var l;
                            let n,
                                i = a === y.COMMERCE && t === u,
                                r =
                                    ((l = e.title),
                                    null != (n = l?.trim()) && n.length > 0
                                        ? n
                                        : em.intl.formatToPlainString(em.t.IGMs8S, { pageNumber: t + 1 }));
                            return (0, s.jsx)(
                                X.Dr,
                                {
                                    id: `commerce-page-${t}`,
                                    label: r,
                                    color: i ? "brand" : "default",
                                    trailingIndicator: i ? { type: "icon", icon: eD.U } : void 0,
                                    action: () => d(t),
                                },
                                t,
                            );
                        }),
                    }),
                }),
            });
        },
        children: (e, n) => {
            let { isShown: r } = n,
                o = r ? eV.t : eU.a;
            return (0, s.jsx)(Y.V.Item, {
                ...e,
                id: y.COMMERCE,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: a === y.COMMERCE ? y.COMMERCE : void 0,
                onClick: (t) => {
                    (c(y.COMMERCE), e.onClick(t));
                },
                onMouseLeave: j,
                clickableRef: (e) => {
                    x.current = e?.ref ?? null;
                },
                className: t,
                "aria-label": v,
                "aria-haspopup": "menu",
                children: (0, s.jsx)(W.E, {
                    variant: eW,
                    color: "none",
                    children: (0, s.jsx)(eH, {
                        label: l,
                        chevron: (0, s.jsx)(o, { size: "xs", color: "currentColor" }),
                        socialLayerStorefront: i,
                    }),
                }),
            });
        },
    });
}
function eX(e) {
    let { className: t, navigation: l, socialLayerStorefront: n } = e,
        { selectedTab: i, selectTab: a } = l,
        { hasCommerceTab: r, storefront: c } = n;
    if (!r) return null;
    let o = em.intl.string(em.t.apFNLU);
    return (c?.pages.length ?? 0) > 1
        ? (0, s.jsx)(ez, { className: t, label: o, navigation: l, socialLayerStorefront: n })
        : (0, s.jsx)(Y.V.Item, {
              id: y.COMMERCE,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: i,
              onClick: () => a(y.COMMERCE),
              className: t,
              "aria-label": o,
              children: (0, s.jsx)(W.E, {
                  variant: eW,
                  color: "none",
                  children: (0, s.jsx)(eH, { label: o, socialLayerStorefront: n }),
              }),
          });
}
var eK = l(510954);
function eJ(e) {
    let { navigation: t, socialLayerStorefront: l } = e,
        { game: n } = U(),
        { selectedTab: i, selectTab: a } = t,
        c = n.getIconURL(64),
        [o, u] = r.useState(null),
        d = r.useCallback(() => u(c), [c]),
        m = em.intl.string(em.t.qHmbyh);
    return (0, s.jsx)("div", {
        className: eK.wx,
        children: (0, s.jsxs)("div", {
            className: eK.ap,
            children: [
                (0, s.jsx)("div", {
                    className: eK.wE,
                    children:
                        null != c && c !== o
                            ? (0, s.jsx)("img", { src: c, alt: "", className: eK.FC, draggable: !1, onError: d })
                            : (0, s.jsx)(F._, { size: "md" }),
                }),
                (0, s.jsxs)(Y.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: i,
                    onItemSelect: a,
                    className: eK.vR,
                    children: [
                        (0, s.jsx)(Y.V.Item, {
                            id: y.OVERVIEW,
                            disableItemStyles: !0,
                            className: eK.Mf,
                            "aria-label": m,
                            children: (0, s.jsx)(W.E, { variant: "text-md/medium", color: "none", children: m }),
                        }),
                        (0, s.jsx)(eM, { className: eK.Mf, navigation: t }),
                        (0, s.jsx)(eX, { className: eK.Mf, navigation: t, socialLayerStorefront: l }),
                    ],
                }),
                (0, s.jsx)(ek, { className: eK.HK, activeTab: i }),
            ],
        }),
    });
}
var e$ = l(435558),
    eq = l.n(e$),
    eQ = l(689175),
    eZ = l(448741),
    e0 = l(71393),
    e1 = l(309010),
    e8 = l(449054),
    e2 = l(60465),
    e3 = l(311043),
    e4 = l(636537),
    e6 = l(73153);
let e5 = {};
class e9 extends m.Ay.Store {
    static displayName = "DiscoverableGuildsStore";
    initialize() {
        this.waitFor(eC.default);
    }
    getGuild(e) {
        return e5[e]?.guild ?? null;
    }
    getGuilds(e) {
        return e.map((e) => e5[e]?.guild).filter(eT.Vq);
    }
    isFetching(e) {
        return e.some((e) => e5[e]?.fetchState === "fetching");
    }
    getStaleGuildIds(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return e.filter((e) => {
            let l = e5[e];
            return (
                null == l ||
                "failed" === l.fetchState ||
                ("fetching" !== l.fetchState && (null == l.fetchedAt || t - l.fetchedAt >= 36e5))
            );
        });
    }
}
let e7 = new e9(e6.h, {
        DISCOVERABLE_GUILDS_FETCH_START: function (e) {
            let { guildIds: t } = e;
            for (let e of t)
                e5[e] = { guild: e5[e]?.guild ?? null, fetchState: "fetching", fetchedAt: e5[e]?.fetchedAt ?? null };
        },
        DISCOVERABLE_GUILDS_FETCH_SUCCESS: function (e) {
            let { guildIds: t, guilds: l } = e,
                n = Date.now(),
                i = new Map(l.map((e) => [e.id, (0, e8.jE)(e)]));
            for (let e of t) e5[e] = { guild: i.get(e) ?? null, fetchState: "succeeded", fetchedAt: n };
        },
        DISCOVERABLE_GUILDS_FETCH_FAILURE: function (e) {
            let { guildIds: t } = e;
            for (let e of t)
                e5[e] = { guild: e5[e]?.guild ?? null, fetchState: "failed", fetchedAt: e5[e]?.fetchedAt ?? null };
        },
    }),
    te = new Map();
async function tt(e) {
    e6.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_START", guildIds: e });
    try {
        let t = await e4.Bo.get({
                url: eL.Rsh.GUILD_DISCOVERY,
                query: { guild_ids: e },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            l = t.body?.guilds ?? [];
        e6.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_SUCCESS", guildIds: e, guilds: l });
    } catch (t) {
        throw (e6.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_FAILURE", guildIds: e }), t);
    }
}
async function tl(e) {
    let t = e7.getStaleGuildIds(e),
        l = new Set();
    for (let t of e) {
        let e = te.get(t);
        null != e && l.add(e);
    }
    if (t.length > 0) {
        let e = tt(t).finally(() => {
            for (let l of t) te.get(l) === e && te.delete(l);
        });
        for (let l of t) te.set(l, e);
        l.add(e);
    }
    await Promise.all(l);
}
var tn = l(927813);
let ti = [];
function ta(e) {
    return e3.A.getGame(e)?.communityGuildIds ?? ti;
}
let ts = (0, m.UT)(e7, {
    getQueryId: (e) => (ta(e).length > 0 ? `game-community-guilds/${e}` : null),
    get: (e) => e7.getGuilds(ta(e)),
    load: async (e) => {
        let t = ta(e);
        t.length > 0 && (await tl(t));
    },
    staleAfter: tn.A.Seconds.HOUR,
    failureStaleAfter: tn.A.Seconds.MINUTE,
});
var tr = l(196765);
let tc = new Set(),
    to = (0, tr.v)((e) => ({
        gameId: null,
        excludedLocales: tc,
        toggleLocale: (t, l) => {
            e((e) => {
                let n = new Set(e.gameId === t ? e.excludedLocales : tc);
                return (n.has(l) ? n.delete(l) : n.add(l), { gameId: t, excludedLocales: n });
            });
        },
    }));
function tu(e) {
    return to((t) => (t.gameId === e ? t.excludedLocales : tc));
}
var td = l(297264),
    tm = l(37537),
    tx = l(714991),
    th = l(486020),
    tg = l(240248);
function tf(e) {
    let { guildName: t, isMember: l, onClick: n, size: i, fullWidth: a } = e;
    return (0, s.jsx)(K.$, {
        variant: "secondary",
        size: i,
        fullWidth: a,
        text: l ? em.intl.string(em.t.cEnaWx) : em.intl.string(em.t.XpeFYr),
        "aria-label": l
            ? em.intl.formatToPlainString(em.t.lQqwQi, { guildName: t })
            : em.intl.formatToPlainString(em.t["8rL1QB"], { guildName: t }),
        onClick: n,
    });
}
var tj = l(810729);
let tp = { sm: tj.nz, md: tj.a };
function tv(e) {
    let { className: t, width: l } = e;
    return (0, s.jsx)("div", { "aria-hidden": !0, className: u()(tj.qf, t), style: { width: l } });
}
function tE(e) {
    let { animationDelayMs: t, children: l, className: n } = e,
        i = null != t ? { "--custom-game-profile-skeleton-animation-delay": `${t}ms` } : void 0;
    return (0, s.jsx)("div", { "aria-hidden": !0, className: n, style: i, children: l });
}
function tA(e) {
    let { className: t, size: l = "md" } = e;
    return (0, s.jsx)(tv, { className: u()(tj.x6, tp[l], t) });
}
var tI = l(827085);
function tN(e) {
    let { className: t } = e;
    return (0, s.jsx)(tv, { className: u()(tI.qV, t) });
}
function tb(e) {
    let { presenceCount: t, memberCount: l } = e;
    return null == t && null == l
        ? null
        : (0, s.jsxs)("div", {
              className: tI.kL,
              children: [
                  null != t &&
                      (0, s.jsxs)("div", {
                          className: tI.U9,
                          children: [
                              (0, s.jsx)("i", { className: tI._o }),
                              (0, s.jsx)(W.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: em.intl.format(em.t["LC+S+m"], { membersOnline: t }),
                              }),
                          ],
                      }),
                  null != l &&
                      (0, s.jsxs)("div", {
                          className: tI.U9,
                          children: [
                              (0, s.jsx)("i", { className: tI.jk }),
                              (0, s.jsx)(W.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: em.intl.format(em.t.zRl6XR, { count: l }),
                              }),
                          ],
                      }),
              ],
          });
}
var tS = l(213098);
function tC() {
    return (0, s.jsxs)(tE, {
        className: tS.uW,
        animationDelayMs: 300,
        children: [
            (0, s.jsx)(tv, { className: tS.dU, width: "30%" }),
            (0, s.jsx)(tE, {
                className: tS.nV,
                children: (0, s.jsxs)("div", { className: tS.hQ, children: [(0, s.jsx)(tT, {}), (0, s.jsx)(tA, {})] }),
            }),
        ],
    });
}
function tT() {
    return (0, s.jsxs)("div", {
        className: tS.To,
        children: [
            (0, s.jsx)(tv, { className: tS.QV }),
            (0, s.jsxs)("div", {
                className: tS.Yv,
                children: [
                    (0, s.jsx)(tv, { className: tS.Ag }),
                    (0, s.jsx)(tv, { className: tS.zl }),
                    (0, s.jsx)(tN, { className: tS.P2 }),
                ],
            }),
        ],
    });
}
function ty(e) {
    let { guild: t } = e,
        l = th.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [n, i] = r.useState(void 0),
        a = null != l && n !== l,
        c = r.useCallback(() => {
            i(l);
        }, [l]);
    return (0, s.jsxs)("div", {
        className: tS._C,
        children: [
            a && (0, s.jsx)(tv, { className: tS.EQ }),
            (0, s.jsx)("img", {
                className: tS.$f,
                src: l,
                alt: em.intl.formatToPlainString(em.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: c,
                onError: c,
            }),
        ],
    });
}
function tL(e) {
    let { guild: t, presenceCount: l, memberCount: n } = e;
    return (0, s.jsxs)("div", {
        className: tS.To,
        children: [
            (0, s.jsx)(ty, { guild: t }),
            (0, s.jsxs)("div", {
                className: tS.yj,
                children: [
                    (0, s.jsxs)("div", {
                        className: tS.YS,
                        children: [
                            (0, s.jsx)(tx.A, { guild: t, size: 16 }),
                            (0, s.jsx)(td.D, {
                                className: tS.J5,
                                variant: "heading-md/semibold",
                                color: "text-default",
                                children: t.name,
                            }),
                        ],
                    }),
                    !(0, tg.uJ)(t.description) &&
                        (0, s.jsx)(W.E, {
                            className: tS.h_,
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: t.description,
                        }),
                    (0, s.jsx)(tb, { presenceCount: l, memberCount: n }),
                ],
            }),
        ],
    });
}
function tk(e) {
    let { guild: t, presenceCount: l, memberCount: n, button: i, className: a } = e;
    return (0, s.jsx)("div", {
        className: u()(tS.kL, a),
        children: (0, s.jsxs)("div", {
            className: tS.hQ,
            children: [(0, s.jsx)(tL, { guild: t, presenceCount: l, memberCount: n }), i],
        }),
    });
}
function tR() {
    let e = (0, tm.c)("GameProfileGuildInvite"),
        {
            invite: t,
            hasDiscordWebsite: l,
            isCommunityInviteResolving: n,
            isMember: i,
            closeModal: a,
            trackAction: c,
        } = U(),
        o = r.useCallback(() => {
            null != t &&
                (c(T.GameProfileTrackActionActions.JoinServer),
                a(),
                e6.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: t.code, context: eL.BRT.APP }));
        }, [t, c, a]);
    return null == t || null == t.guild
        ? l && n
            ? (0, s.jsx)(tC, {})
            : null
        : (0, s.jsxs)("div", {
              className: tS.uW,
              children: [
                  (0, s.jsx)(td.D, {
                      className: tS.Gf,
                      variant: e ? "text-md/medium" : "heading-sm/semibold",
                      color: e ? "text-subtle" : "text-strong",
                      children: em.intl.string(em.t["U2N+ci"]),
                  }),
                  (0, s.jsx)(tk, {
                      guild: t.guild,
                      presenceCount: t.approximate_presence_count,
                      memberCount: t.approximate_member_count,
                      button: (0, s.jsx)(tf, { guildName: t.guild.name, isMember: i, onClick: o, fullWidth: !0 }),
                  }),
              ],
          });
}
var tG = l(320448),
    tO = l(152594);
function tM(e) {
    let { children: t, skeletonTitleWidth: l, showViewAllSkeleton: n } = e;
    return (0, s.jsxs)("div", {
        className: tO.kL,
        "aria-busy": !0,
        children: [
            (0, s.jsxs)("div", {
                className: tO.wR,
                children: [(0, s.jsx)(tv, { className: tO.Iz, width: l }), n && (0, s.jsx)(tA, { size: "sm" })],
            }),
            t,
        ],
    });
}
function tP(e) {
    let { children: t, title: l, onClickViewAll: n, trailing: i } = e;
    return (0, s.jsxs)("div", {
        className: tO.kL,
        children: [
            (0, s.jsxs)("div", {
                className: tO.wR,
                children: [
                    (0, s.jsx)(td.D, { variant: "heading-lg/medium", children: l }),
                    null != n &&
                        (0, s.jsx)(K.$, {
                            size: "sm",
                            icon: tG._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: n,
                            text: em.intl.string(em.t.budhsM),
                        }),
                    i,
                ],
            }),
            t,
        ],
    });
}
var t_ = (((i = {}).LIST = "list"), (i.GRID = "grid"), i);
let tw = (0, tr.v)((e) => ({
    layout: "grid",
    setLayout: (t) => {
        e({ layout: t });
    },
}));
var tD = l(876798),
    tV = l(481901),
    tU = l(916099),
    tF = l(461353);
function tY() {
    let { layout: e, setLayout: t } = tw(),
        l = em.intl.string(em.t.VGRZh7),
        n = em.intl.string(em.t["NJFr+g"]);
    return (0, s.jsxs)("div", {
        className: tF.k,
        role: "group",
        "aria-label": em.intl.string(em.t.mFMDSq),
        children: [
            (0, s.jsx)($.m, {
                text: l,
                asContainer: !0,
                children: (0, s.jsx)(tD.k, {
                    icon: tV.d,
                    pressed: e === t_.GRID,
                    size: "sm",
                    "aria-label": l,
                    onClick: () => t(t_.GRID),
                }),
            }),
            (0, s.jsx)($.m, {
                text: n,
                asContainer: !0,
                children: (0, s.jsx)(tD.k, {
                    icon: tU.ListBulletsIcon,
                    pressed: e === t_.LIST,
                    size: "sm",
                    "aria-label": n,
                    onClick: () => t(t_.LIST),
                }),
            }),
        ],
    });
}
var tW = l(37646),
    tB = l(846183);
function tH(e) {
    var t;
    let l,
        n,
        i,
        { locales: a, onClose: c } = e,
        { game: o } = U(),
        { options: u, toggleLocale: d } =
            ((t = o.id),
            (l = tu(t)),
            (n = to((e) => e.toggleLocale)),
            (i = r.useMemo(() => {
                let e;
                return (
                    (e = (0, em.getAvailableLocales)()),
                    a
                        .map((t) => {
                            if ("en-US" === t) return { locale: t, label: em.intl.string(em.t.LQLMGP) };
                            let l = e.find((e) => {
                                let { value: l } = e;
                                return l === t;
                            });
                            return { locale: t, label: null != l ? em.intl.string(l.localizedName) : t };
                        })
                        .sort((e, t) => e.label.localeCompare(t.label))
                );
            }, [a])),
            {
                options: r.useMemo(() => {
                    let e = a.filter((e) => !l.has(e)).length;
                    return i.map((t) => {
                        let { locale: n, label: i } = t,
                            a = !l.has(n);
                        return { locale: n, label: i, checked: a, disabled: a && 1 === e };
                    });
                }, [i, a, l]),
                toggleLocale: r.useCallback((e) => n(t, e), [n, t]),
            });
    return (0, s.jsx)(z.W, {
        "data-menu-migrated": !0,
        navId: "game-profile-communities-locale-filter",
        "aria-label": em.intl.string(em.t.OlOHDH),
        onClose: c,
        onSelect: void 0,
        children: u.map((e) => {
            let { locale: t, label: l, checked: n, disabled: i } = e;
            return (0, s.jsx)(X.sL, { id: t, label: l, checked: n, disabled: i, action: () => d(t) }, t);
        }),
    });
}
function tz(e) {
    let { locales: t } = e,
        l = r.useRef(null),
        n = em.intl.string(em.t.OlOHDH);
    return (0, s.jsx)("div", {
        className: tB.k,
        children: (0, s.jsx)(H.Y, {
            targetElementRef: l,
            position: "bottom",
            align: "right",
            renderPopout: (e) => {
                let { closePopout: l } = e;
                return (0, s.jsx)(tH, { locales: t, onClose: l });
            },
            children: (e) =>
                (0, s.jsx)($.m, {
                    text: n,
                    asContainer: !0,
                    children: (0, s.jsx)(q.K, {
                        buttonRef: l,
                        icon: tW.U,
                        variant: "icon-only",
                        size: "sm",
                        "aria-label": n,
                        ...e,
                    }),
                }),
        }),
    });
}
var tX = l(939249),
    tK = l(762841);
function tJ(e) {
    let { className: t, ariaLabel: l, onClick: n, children: i } = e;
    return (0, s.jsx)(tX.D, { className: u()(tK.v, t), onClick: n, "aria-label": l, children: i });
}
var t$ = l(759020);
function tq(e) {
    let { guild: t, presenceCount: l, memberCount: n, ariaLabel: i, onClick: a } = e;
    return (0, s.jsxs)(tJ, {
        className: t$.kL,
        onClick: a,
        ariaLabel: i,
        children: [
            (0, s.jsxs)("div", {
                className: t$.OA,
                children: [
                    (0, s.jsx)(ty, { guild: t }),
                    (0, s.jsxs)("div", {
                        className: t$.FS,
                        children: [
                            (0, s.jsxs)("div", {
                                className: t$.YS,
                                children: [
                                    (0, s.jsx)(tx.A, { guild: t, size: 16 }),
                                    (0, s.jsx)(td.D, {
                                        className: t$.J5,
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: t.name,
                                    }),
                                ],
                            }),
                            !(0, tg.uJ)(t.description) &&
                                (0, s.jsx)(W.E, {
                                    className: t$.h_,
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    lineClamp: 2,
                                    children: t.description,
                                }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", { className: t$.Rn, children: (0, s.jsx)(tb, { presenceCount: l, memberCount: n }) }),
        ],
    });
}
var tQ = l(620387);
function tZ(e) {
    let { animationDelayMs: t } = e;
    return (0, s.jsx)(tE, { className: tQ.s7, animationDelayMs: t, children: (0, s.jsx)(tT, {}) });
}
function t0(e) {
    let { animationDelayMs: t } = e;
    return (0, s.jsxs)(tE, {
        className: tQ.fv,
        animationDelayMs: t,
        children: [
            (0, s.jsx)(tv, { className: tQ.VR }),
            (0, s.jsxs)("div", {
                className: tQ.hG,
                children: [
                    (0, s.jsx)(tv, { className: tQ.t_ }),
                    (0, s.jsx)(tv, { className: tQ.Aj }),
                    (0, s.jsx)(tv, { className: tQ.ax }),
                ],
            }),
            (0, s.jsx)(tv, { className: tQ.Ah }),
        ],
    });
}
function t1(e) {
    let { guild: t, presenceCount: l, memberCount: n, ariaLabel: i, onClick: a } = e;
    return (0, s.jsx)(tJ, {
        className: tQ.Nr,
        onClick: a,
        ariaLabel: i,
        children: (0, s.jsx)(tL, { guild: t, presenceCount: l, memberCount: n }),
    });
}
function t8(e) {
    let { guild: t, layout: l } = e,
        { game: n, closeModal: i, trackAction: a, viewId: c } = U(),
        o = (0, m.bG)([e0.A], () => e0.A.getGuild(t.id)?.joinedAt != null, [t.id]),
        u = r.useCallback(async () => {
            (a(T.GameProfileTrackActionActions.CommunityClicked, { communityGuildId: t.id }), i());
            try {
                await e8.Z2(t.id, {}, { joinSource: eL.Q4z.GAME_PROFILE_COMMUNITIES, loadId: c }, [
                    f.A.GAME_PROFILE_COMMUNITIES,
                ]);
            } catch (e) {
                (0, eZ._)(e);
                return;
            }
            let e = e1.Ay.getCurrentlySelectedChannelId(t.id);
            null != e &&
                e2.default.setGameProfilePendingReturn({
                    gameId: n.id,
                    channelId: e,
                    tab: y.COMMUNITIES,
                    source: T.GameProfileSources.CommunityPreviewReturn,
                });
        }, [t.id, a, i, c, n.id]),
        d = l === t_.LIST ? tq : t1;
    return (0, s.jsx)(d, {
        guild: t,
        presenceCount: t.presenceCount,
        memberCount: t.memberCount,
        ariaLabel: o
            ? em.intl.formatToPlainString(em.t.AEfs1D, { guildName: t.name })
            : em.intl.formatToPlainString(em.t.TUZ50q, { guildName: t.name }),
        onClick: u,
    });
}
function t2() {
    var e;
    let t,
        l,
        { game: n } = U(),
        { data: i, isLoading: a } = ts(n.id),
        c = tw((e) => e.layout),
        {
            locales: o,
            filteredGuilds: u,
            showLocaleFilter: d,
        } = ((e = n.id),
        (t = tu(e)),
        {
            locales: (l = r.useMemo(() => eq().uniq((i ?? []).map((e) => e.preferredLocale).filter(eT.Vq)), [i])),
            filteredGuilds: r.useMemo(
                () => (i ?? []).filter((e) => null == e.preferredLocale || !t.has(e.preferredLocale)),
                [i, t],
            ),
            showLocaleFilter: l.length >= 2,
        }),
        m = c === t_.LIST,
        x = m ? t0 : tZ,
        h = a && (null == i || 0 === i.length);
    return (0, s.jsxs)(eQ.Ch, {
        className: tQ.XG,
        children: [
            (0, s.jsx)("div", { className: tQ.xY, "aria-hidden": !0 }),
            (0, s.jsx)("div", {
                className: tQ.uW,
                children: (0, s.jsx)(tP, {
                    title: em.intl.string(em.t.r6bvTh),
                    trailing: (0, s.jsxs)("div", {
                        className: tQ.AA,
                        children: [d && (0, s.jsx)(tz, { locales: o }), (0, s.jsx)(tY, {})],
                    }),
                    children: (0, s.jsx)("div", {
                        className: m ? tQ.p_ : tQ.Vg,
                        children: h
                            ? eq()
                                  .range(8)
                                  .map((e) => (0, s.jsx)(x, { animationDelayMs: 150 * e }, e))
                            : u.map((e) => (0, s.jsx)(t8, { guild: e, layout: c }, e.id)),
                    }),
                }),
            }),
        ],
    });
}
var t3 = l(707554),
    t4 = l(369606),
    t6 = l(775602),
    t5 = l(21161),
    t9 = l(400492),
    t7 = l(541830),
    le = l(459746);
let lt = "1552821538409939044";
var ll = l(175213);
let ln = l(892799);
function li(e) {
    let { ref: t } = e,
        { game: l } = U(),
        n = (function (e) {
            let [t] = r.useState(() => Math.random());
            return r.useMemo(() => {
                let l = e.getBannerURL(1400);
                if (null != l) return l;
                let n = e.screenshotUrls?.length ?? 0;
                return 0 === n ? null : e.getScreenshotURL(Math.floor(t * n), 1400);
            }, [1400, e, t]);
        })(l);
    return (0, tg.uJ)(n)
        ? null
        : (0, s.jsxs)("div", {
              ref: t,
              children: [
                  (0, s.jsx)("div", { className: ll.y1, style: { backgroundImage: `url("${n}")` } }),
                  (0, s.jsx)("div", { className: ll.N4 }),
              ],
          });
}
function la() {
    let { game: e } = U(),
        t = (e.genres ?? []).map(t7.du).join(", ");
    return (0, tg.uJ)(t) ? null : (0, s.jsx)(W.E, { variant: "text-md/normal", color: "text-muted", children: t });
}
function ls(e) {
    let { rank: t } = e;
    return (0, s.jsxs)("div", {
        className: ll.Qc,
        children: [
            (0, s.jsx)(t4.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, s.jsx)(W.E, {
                variant: "text-xs/bold",
                color: "none",
                children: em.intl.formatToPlainString(em.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function lr() {
    let { game: e } = U();
    return (0, s.jsx)(lc, { className: u()(ll._M, (0, le.cO)(e) && ll.i3), imageClassName: ll.xe });
}
function lc(e) {
    let { className: t, imageClassName: l } = e,
        { game: n } = U(),
        i = (0, s.jsx)(le.Ay, { game: n, className: l, size: le.wu.LARGE });
    return n.id !== lt
        ? (0, s.jsx)("div", { className: t, children: i })
        : (0, s.jsx)(lo, { className: t, children: i });
}
function lo(e) {
    let { children: t, className: l } = e,
        { createMultipleConfettiAt: n } = r.useContext(t5.x),
        i = (0, m.bG)([t6.Ay], () => t6.Ay.useReducedMotion),
        a = r.useRef({ count: 0, lastTime: 0 });
    return (0, s.jsx)(tX.D, {
        className: u()(l, ll.b3),
        "aria-label": em.intl.string(em.t.M2b74O),
        onClick: function (e) {
            let t = Date.now(),
                l = a.current,
                s = t - l.lastTime > 1e4 ? 1 : l.count + 1;
            if (((a.current = { count: s, lastTime: t }), 3 === s)) {
                if (((a.current = { count: 0, lastTime: 0 }), !i)) {
                    let t = e.currentTarget.getBoundingClientRect();
                    n(t.left + t.width / 2, t.top + t.height / 2);
                }
                (0, t9.Ak)("discodo");
            }
        },
        children: t,
    });
}
let lu = function () {
    let { game: e, isTwoColumn: t } = U(),
        l = e.name;
    return (0, s.jsxs)("div", {
        className: ll.ap,
        children: [
            t && (0, s.jsx)(lc, { className: u()(ll.Tf, (0, le.cO)(e) && ll.wS), imageClassName: ll.w$ }),
            (0, s.jsxs)("div", {
                className: ll.lu,
                children: [
                    null != e.l30Rank && (0, s.jsx)(ls, { rank: e.l30Rank }),
                    (0, s.jsxs)("div", {
                        className: ll.$,
                        children: [
                            (0, s.jsx)(td.D, { variant: "heading-xxl/semibold", children: l }),
                            e.id === lt &&
                                (0, s.jsx)("img", {
                                    src: ln,
                                    className: ll.IU,
                                    alt: "",
                                    "aria-hidden": "true",
                                    draggable: !1,
                                }),
                        ],
                    }),
                    (0, s.jsx)(la, {}),
                ],
            }),
        ],
    });
};
var ld = l(638495),
    lm = l(871123),
    lx = l(439303),
    lh = l(317560),
    lg = l(467884),
    lf = l(480713),
    lj = l(449543),
    lp = l(197935),
    lv = l(761812);
function lE(e) {
    return e;
}
function lA(e) {
    let { children: t } = e;
    return (0, s.jsx)("div", { className: lv.B, children: t });
}
function lI(e) {
    let { skuIds: t, analyticsLocations: l, onCardClick: n } = e,
        i = (0, lf.l)("social_layer_storefront_card_row"),
        a = r.useMemo(() => {
            if (null != n)
                return (e, t) => {
                    let { skuId: l, applicationId: i } = t;
                    (e.preventDefault(), n(l, i));
                };
        }, [n]);
    return null == t || 0 === t.length
        ? null
        : i
          ? (0, s.jsx)(lp.A, {
                gap: "md",
                "aria-label": `${em.intl.string(em.t["kocF+6"])}`,
                items: t,
                getItemKey: lE,
                disableFocusRingScope: !0,
                renderItem: (e, t, n) =>
                    (0, s.jsx)(lA, {
                        children: (0, s.jsx)(lg.Ay, {
                            positionInSection: n,
                            skuId: e,
                            variant: lg.s6.SMALL,
                            analyticsLocations: l,
                            onClick: a,
                            listItemProps: t,
                        }),
                    }),
            })
          : (0, s.jsx)(lj.A, {
                gap: "md",
                "aria-label": em.intl.string(em.t["kocF+6"]),
                children: t.map((e, t) =>
                    (0, s.jsx)(
                        lA,
                        {
                            children: (0, s.jsx)(lg.Ay, {
                                positionInSection: t,
                                skuId: e,
                                variant: lg.s6.SMALL,
                                analyticsLocations: l,
                                onClick: a,
                            }),
                        },
                        `${e}-${t}`,
                    ),
                ),
            });
}
var lN = l(369435);
function lb(e) {
    let { children: t, gap: l = "md" } = e;
    return (0, s.jsx)("div", { "aria-hidden": !0, className: u()(lN.n, { [lN.C]: 16 === l }), children: t });
}
var lS = l(936785),
    lC = l(403581),
    lT = l(812095),
    ly = l(647474),
    lL = l(162536);
function lk(e) {
    let { promotion: t, className: l } = e,
        n = t.endsAt;
    if ((0, eY.tm)(n)) return null;
    let i = "nitro" === t.flavor,
        a = i ? lC.t : t.Icon;
    return (0, s.jsx)(ly.A, {
        className: u()(lL.vK, l),
        color: i ? "nitro-pink" : void 0,
        children: (0, s.jsxs)("div", {
            className: lL.Qs,
            children: [
                null != a && (0, s.jsx)(a, { size: "xs", color: "currentColor", className: lL.Kk }),
                (0, s.jsx)(W.E, { variant: "text-sm/normal", color: "currentColor", children: (0, lT.U)(t.text) }),
            ],
        }),
    });
}
var lR = l(521058);
function lG() {
    let { storefrontPromotion: e } = U();
    if (null == e || "nitro" !== e.flavor) return null;
    let { endsAt: t, flavor: l, pdp: n, rewardRequirements: i, storefront: a } = e;
    if (null == a || (0, tg.uJ)(a.headerText)) return null;
    let r = {
        Icon: (0, lS.LZ)(n?.icon ?? null),
        text: a.headerText,
        tooltip: null,
        endsAt: (0, lS.RD)(t),
        flavor: l,
        rewardRequirements: i,
    };
    return (0, s.jsx)(lk, { className: lR.v, promotion: r });
}
let lO = [0, 1, 2, 3],
    lM = { placement: lx.Ye.GAME_PROFILE };
function lP() {
    return (0, s.jsx)(tM, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, s.jsx)(lb, { children: lO.map((e) => (0, s.jsx)(lA, { children: (0, s.jsx)(lg.yf, {}) }, e)) }),
    });
}
function l_(e) {
    let { selectTab: t } = e,
        l = (0, ld.k)(),
        {
            trackAction: n,
            socialLayerStorefrontRecommendationsData: i,
            socialLayerStorefrontRecommendationsLoading: a,
            hasCommerceTab: c,
            closeModal: o,
        } = U(),
        { analyticsLocations: u } = (0, j.Ay)([f.A.GAME_PROFILE]),
        d = r.useCallback(() => {
            if (i?.application != null) {
                if (c) return void t(y.COMMERCE);
                (n(T.GameProfileTrackActionActions.GameShop),
                    o(),
                    (0, ei.default)({ applicationId: i.application.id }));
            }
        }, [i, n, c, t, o]),
        m = r.useCallback(
            (e, t) => {
                let a = i?.guildId;
                null != a &&
                    (n(T.GameProfileTrackActionActions.GameShopItem),
                    (0, lh.R)({
                        skuId: e,
                        applicationId: t,
                        isStorefront: !1,
                        analyticsLocations: u,
                        contextKey: l,
                        onClose: () => {
                            let { pathname: e, search: l } = location;
                            (0, lm.rG)(e, l, t, a) && o();
                        },
                    }));
            },
            [n, o, u, i, l],
        );
    if (a) return (0, s.jsx)(lP, {});
    if (null == i) return null;
    let { skuIds: x } = i;
    return (0, s.jsxs)(tP, {
        title: em.intl.string(em.t.WDdlUb),
        onClickViewAll: d,
        children: [
            (0, s.jsx)(lG, {}),
            (0, s.jsx)(lx.E9, {
                newValue: lM,
                children: (0, s.jsx)(lI, { skuIds: x, analyticsLocations: u, onCardClick: m }),
            }),
        ],
    });
}
var lw = l(621466),
    lD = l(966697),
    lV = l(346055),
    lU = l(460905),
    lF = l(776231),
    lY = l(46054),
    lW = l(58703),
    lB = l(317097),
    lH = l(155718),
    lz = l(387408),
    lX = l(731068),
    lK = l(59318),
    lJ = l(320095),
    l$ = l(708676),
    lq = l(383233),
    lQ = l(998218);
let lZ = /^#{1,3}\s+(.+)$/,
    l0 = /^https?:\/\/\S+$/;
var l1 = l(158390),
    l8 = l(103348),
    l2 = l(371794);
let l3 = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function l4(e) {
    e6.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
                await (0, l2.aP)({
                    url: eL.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: C.default.locale, include_pricing: !0, with_bundled_skus: !0 },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.map(l8.A.fromServer),
            l = t.flatMap((e) => e.skuIds);
        (e6.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: l, products: t }),
            e6.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: l }));
    } catch (t) {
        e6.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function l6(e) {
    let t = ((await e4.Bo.get({ url: eL.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !l3.has(t),
    );
    e6.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let l5 = (0, m.UT)(L.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => L.A.getSimilarGames(e) ?? null,
    load: (e) => l6(e),
    retryConfig: { backoff: () => new l1.A(5 * tn.A.Millis.SECOND, 5 * tn.A.Millis.MINUTE) },
    failureStaleAfter: tn.A.Seconds.MINUTE,
});
async function l9(e, t) {
    e6.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let l = {};
        t?.limit != null && (l.limit = t.limit);
        let n = (await e4.Bo.get({ url: eL.Rsh.GAME_ANNOUNCEMENTS(e), query: l, rejectWithError: !1 })).body;
        e6.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: n.messages.map((e) => {
                let t,
                    l,
                    n = (0, lz.A)((0, lJ.rh)(e)),
                    i = n.content,
                    a = (function (e) {
                        if ((0, lq._c)(e))
                            return e.components
                                .filter((e) => e.type === lH.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || l0.test(t.trim())
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
                        if ((0, lq._c)(e)) {
                            let t = e.components.find((e) => e.type === lH.I5.MEDIA_GALLERY),
                                l = t?.items[0]?.media;
                            if (null != l) {
                                let t = (0, lX.FE)(l);
                                if ("INVALID" !== t) return { ...l, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, lK.tT)(e.content_type));
                        if (null != t) return (0, lX.Rr)(t, e);
                        let l = e.attachments.find((e) => (0, lK.XB)(e.content_type));
                        if (null != l) return (0, lX.Rr)(l, e);
                        let n = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (n?.thumbnail != null)
                            return (0, lX.oU)(
                                n.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === n) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, lX.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, lX.oU)(
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
                        (l = (-1 === t ? a : a.slice(0, t)).match(lZ)),
                        null != l
                            ? { title: l[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    u =
                        a === i || (0, lq._c)(n)
                            ? void 0
                            : (function (e) {
                                  let t = e.embeds[0];
                                  if (null == t) return;
                                  let l = t.author?.name,
                                      n = t.author?.iconProxyURL ?? t.author?.iconURL,
                                      i = t.footer?.text ?? t.provider?.name,
                                      a = t.footer?.iconProxyURL ?? t.footer?.iconURL,
                                      s = t.url,
                                      r = null != t.color ? (0, lB.$k)(t.color, !0) : void 0;
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
                    embedSource: u,
                    poll: n.poll,
                };
            }),
            channelId: n.channel_id ?? void 0,
            guildId: n.guild_id ?? void 0,
        });
    } catch (t) {
        e6.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var l7 = l(284009),
    ne = l.n(l7),
    nt = l(376728),
    nl = l(976860);
async function nn(e) {
    let { invite: t, guildId: l, channelId: n, messageId: i, analyticsLocationStack: a } = e;
    ne()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((l = t.guild?.id), (r = new Set(t.guild?.features))), null == l)) return;
    let c = e0.A.getGuild(l);
    if (c?.joinedAt == null)
        if (null == r || r.has(eL.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, e8.Z2)(
                l,
                {},
                { shouldNavigate: !0, channelId: n, messageId: i, joinSource: eL.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await nt.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, nl.pX)(eL.BVt.CHANNEL(l, n, i), { sourceLocationStack: a });
}
var ni = l(806244),
    na = l(165648);
function ns(e, t) {
    return lY.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function nr(e) {
    return e.id;
}
function nc() {
    return (0, s.jsxs)(tE, {
        className: ni.s7,
        children: [
            (0, s.jsx)(tv, { className: ni.o$ }),
            (0, s.jsxs)("div", {
                className: ni.UF,
                children: [(0, s.jsx)(tv, { className: ni.iX }), (0, s.jsx)(tv, { className: ni.jt })],
            }),
        ],
    });
}
function no(e, t) {
    var l;
    let n,
        i = (0, lF.kr)(364 * (0, lF.mZ)());
    return (
        (l = Math.round(i / t)),
        (null == (n = lQ.A.toURLSafe(e))
            ? null
            : (n.searchParams.append("format", "webp"),
              null != i && n.searchParams.append("width", i.toString()),
              null != l && n.searchParams.append("height", l.toString()),
              n.toString())) ?? e
    );
}
function nu(e) {
    let { message: t, src: l, aspectRatio: n } = e,
        [i, a] = r.useState(!1),
        c = r.useCallback(() => a(!0), []);
    return null == t.media
        ? null
        : (0, s.jsx)(lD.y, {
              readyState: i ? eL.Rv1.READY : eL.Rv1.LOADING,
              aspectRatio: n,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, s.jsx)("img", {
                  src: l,
                  className: ni.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: c,
              }),
          });
}
function nd(e) {
    let { message: t, channelId: l, onCardClick: n, listItemProps: i } = e,
        a = r.useCallback(
            (e) => {
                if (
                    !(
                        (0, lw.vq)(e.target, HTMLAnchorElement) ||
                        ((0, lw.vq)(e.target, HTMLSpanElement) && (0, lw.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return n(t.id);
            },
            [n, t.id],
        ),
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        o = t.media?.proxyUrl ?? t.media?.url,
        d = null != o ? no(o, c) : void 0,
        { embedSource: m } = t;
    return null == m
        ? null
        : (0, s.jsx)(tX.D, {
              ...i,
              className: ni.Nr,
              onClick: a,
              children: (0, s.jsxs)(lV.M, {
                  className: ni.zI,
                  children: [
                      null != m.url &&
                          (0, s.jsx)(W.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: ni.Ow,
                              children: m.url,
                          }),
                      (0, s.jsxs)("div", {
                          className: ni._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, s.jsxs)("div", {
                                      className: ni.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, s.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: ni.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, s.jsx)(W.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-strong",
                                              children: m.authorName,
                                          }),
                                      ],
                                  }),
                              null != t.media &&
                                  null != d &&
                                  (0, s.jsx)("div", {
                                      className: ni.ax,
                                      children: (0, s.jsx)(nu, { message: t, src: d, aspectRatio: c }),
                                  }),
                              null != t.title &&
                                  (0, s.jsx)(td.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: ni.DD,
                                      children: ns(t.title, l),
                                  }),
                              t.body.length > 0 &&
                                  (0, s.jsxs)("div", {
                                      className: u()(ni.h_, na.PT),
                                      children: [ns(t.body, l), (0, s.jsx)("div", { className: ni.fm })],
                                  }),
                              (0, s.jsxs)("div", {
                                  className: ni.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, s.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: ni.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, s.jsxs)(W.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, lW.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, s.jsxs)("div", {
                                              className: ni.a5,
                                              children: [
                                                  (0, s.jsx)(lU.n, { size: "xs", color: "currentColor" }),
                                                  (0, s.jsx)(W.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(em.intl.currentLocale).format(
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
let nm = r.memo(function (e) {
    let { message: t, channelId: l } = e;
    return (0, s.jsxs)(lV.M, {
        className: ni.zI,
        children: [
            null != t.title &&
                (0, s.jsx)(td.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: ni.DD,
                    children: ns(t.title, l),
                }),
            t.body.length > 0 &&
                (0, s.jsxs)("div", {
                    className: u()(ni.h_, na.PT),
                    children: [ns(t.body, l), (0, s.jsx)("div", { className: ni.fm })],
                }),
            (0, s.jsxs)("div", {
                className: ni.ov,
                children: [
                    (0, s.jsx)(W.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, lW.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, s.jsxs)("div", {
                            className: ni.a5,
                            children: [
                                (0, s.jsx)(lU.n, { size: "xs", color: "currentColor" }),
                                (0, s.jsx)(W.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: new Intl.NumberFormat(em.intl.currentLocale).format(t.reactionCount),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
});
function nx(e) {
    let { message: t, channelId: l, onCardClick: n, listItemProps: i } = e,
        a = r.useCallback(
            (e) => {
                if (
                    !(
                        (0, lw.vq)(e.target, HTMLAnchorElement) ||
                        ((0, lw.vq)(e.target, HTMLSpanElement) && (0, lw.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return n(t.id);
            },
            [n, t.id],
        ),
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        o = t.media?.proxyUrl ?? t.media?.url,
        u = null != o ? no(o, c) : void 0;
    return (0, s.jsxs)(tX.D, {
        ...i,
        className: ni.Nr,
        onClick: a,
        children: [
            null != t.media &&
                null != u &&
                (0, s.jsx)("div", {
                    className: ni.Vl,
                    children: (0, s.jsx)(nu, { message: t, src: u, aspectRatio: c }),
                }),
            (0, s.jsx)(nm, { message: t, channelId: l }),
        ],
    });
}
function nh(e) {
    let { message: t, onCardClick: l, listItemProps: n } = e,
        { poll: i } = t,
        a = r.useCallback(() => l(t.id), [l, t.id]);
    if (null == i) return null;
    let c = i.answers.slice(0, 3),
        o = i.answers.length - c.length;
    return (0, s.jsx)(tX.D, {
        ...n,
        className: ni.Nr,
        onClick: a,
        children: (0, s.jsxs)(lV.M, {
            className: ni.zI,
            children: [
                (0, s.jsx)(td.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: ni.MH,
                    children: i.question.text,
                }),
                (0, s.jsxs)("div", {
                    className: ni.xd,
                    children: [
                        c.map((e) =>
                            (0, s.jsx)(
                                "div",
                                {
                                    className: ni.Nf,
                                    children: (0, s.jsx)(W.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: ni.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        o > 0 &&
                            (0, s.jsx)(W.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: ni.PF,
                                children: em.intl.format(em.t["mv/nIa"], { count: o }),
                            }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: ni.ov,
                    children: (0, s.jsx)(W.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: em.intl.format(em.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, l$.J)(i.expiry) ?? em.intl.string(em.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function ng(e) {
    return null != e.message.poll
        ? (0, s.jsx)(nh, { ...e })
        : null != e.message.embedSource
          ? (0, s.jsx)(nd, { ...e })
          : (0, s.jsx)(nx, { ...e });
}
let nf = r.memo(function (e) {
    let { getScrollOffset: t } = e,
        { analyticsLocations: l } = (0, j.Ay)(),
        { game: n, invite: i, hasDiscordWebsite: a, closeModal: c, trackAction: o } = U(),
        u = n.id,
        {
            messages: d,
            guildId: x,
            channelId: h,
            loading: g,
            hasFetched: f,
        } = (function (e) {
            let {
                data: t,
                hasFetched: l,
                isFetching: n,
            } = (0, m.cf)([L.A], () => ({
                data: null != e ? L.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && L.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && L.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, r.useEffect)(() => {
                    null == e || l || L.A.isAnnouncementsFetching(e) || l9(e, { limit: 8 });
                }, [e, l, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: n, hasFetched: l }
            );
        })(u),
        p = (0, lf.l)("game_profile_announcements"),
        v = r.useCallback(() => {
            let e = i?.guild?.id ?? x;
            null != e &&
                null != h &&
                (o(T.GameProfileTrackActionActions.Announcements),
                e2.default.setGameProfilePendingReturn({ gameId: u, channelId: h, initialScrollOffset: t() }),
                c(),
                nn({ invite: i, guildId: e, channelId: h, analyticsLocationStack: l }));
        }, [o, c, t, i, x, h, l, u]),
        E = r.useCallback(
            (e) => {
                let n = i?.guild?.id ?? x;
                null != n &&
                    null != h &&
                    (o(T.GameProfileTrackActionActions.AnnouncementsItem),
                    e2.default.setGameProfilePendingReturn({ gameId: u, channelId: h, initialScrollOffset: t() }),
                    c(),
                    nn({ invite: i, guildId: n, channelId: h, messageId: e, analyticsLocationStack: l }));
            },
            [o, c, t, i, x, h, l, u],
        ),
        A = null != h && d.length > 0;
    return (!f || g) && a
        ? (0, s.jsx)(tM, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, s.jsx)(lb, {
                  gap: 16,
                  children: eq()
                      .range(3)
                      .map((e) => (0, s.jsx)(nc, {}, e)),
              }),
          })
        : A
          ? (0, s.jsx)(tP, {
                title: em.intl.string(em.t.B0BV3Y),
                onClickViewAll: v,
                children: p
                    ? (0, s.jsx)(lp.A, {
                          gap: 16,
                          items: d,
                          getItemKey: nr,
                          itemClassName: ni.hu,
                          renderItem: (e, t) =>
                              (0, s.jsx)(ng, { message: e, channelId: h, onCardClick: E, listItemProps: t }, e.id),
                      })
                    : (0, s.jsx)(lj.A, {
                          gap: 16,
                          children: d.map((e) => (0, s.jsx)(ng, { message: e, channelId: h, onCardClick: E }, e.id)),
                      }),
            })
          : null;
});
var nj = l(28863),
    np = l(975807),
    nv = l(194362);
function nE() {
    let { game: e, trackAction: t } = U(),
        l = r.useCallback(async () => {
            t(T.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, nv.a)(eL.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, np.A)(e);
        }, [t]),
        n = r.useCallback((e) => (0, s.jsx)(nj.Anchor, { onClick: l, children: e }), [l]);
    return e.linkedApplications?.some((e) => e.type === lH.Mh.OFFICIAL)
        ? null
        : (0, s.jsx)(W.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: em.intl.format(em.t.KAjfKl, { claimLink: n }),
          });
}
var nA = l(505779),
    nI = l(998445),
    nN = l(274997),
    nb = l(80500),
    nS = l(319745),
    nC = l(488225),
    nT = l(967492),
    ny = l(72265),
    nL = l(454346),
    nk = l(37948),
    nR = l(693558);
let nG = { size: "xs", colorClass: nR.w };
function nO(e) {
    let { website: t } = e,
        { trackAction: l } = U(),
        n = (0, nk.A)(),
        {
            action: i,
            icon: a,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case nA.V.OFFICIAL:
                    return {
                        icon: (0, s.jsx)(nI.GlobeEarthIcon, { ...t }),
                        action: T.GameProfileTrackActionActions.WebsiteLink,
                        title: em.intl.string(em.t.fOUKvg),
                    };
                case nA.V.TWITTER:
                    return {
                        icon: (0, s.jsx)(nN.p, { ...t }),
                        action: T.GameProfileTrackActionActions.XLink,
                        title: em.intl.string(em.t.INic4y),
                    };
                case nA.V.YOUTUBE:
                    return {
                        action: T.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, s.jsx)(nb.C, { ...t }),
                        title: em.intl.string(em.t.lNmxbE),
                    };
                case nA.V.FACEBOOK:
                    return {
                        icon: (0, s.jsx)(nS.Z, { ...t }),
                        action: T.GameProfileTrackActionActions.FacebookLink,
                        title: em.intl.string(em.t.FjyREK),
                    };
                case nA.V.INSTAGRAM:
                    return {
                        icon: (0, s.jsx)(nC.L, { ...t }),
                        action: T.GameProfileTrackActionActions.InstagramLink,
                        title: em.intl.string(em.t["cgR+IK"]),
                    };
                case nA.V.BLUESKY:
                    return {
                        icon: (0, s.jsx)(nT.a, { ...t }),
                        action: T.GameProfileTrackActionActions.BlueskyLink,
                        title: em.intl.string(em.t["D/PHq5"]),
                    };
                case nA.V.REDDIT:
                    return {
                        icon: (0, s.jsx)(ny.T, { ...t }),
                        action: T.GameProfileTrackActionActions.RedditLink,
                        title: em.intl.string(em.t["Hgb+fc"]),
                    };
                case nA.V.TWITCH:
                    return {
                        icon: (0, s.jsx)(nL.a, { ...t }),
                        action: T.GameProfileTrackActionActions.TwitchLink,
                        title: em.intl.string(em.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, nG),
        o = r.useCallback(() => {
            (l(i), n(t.url));
        }, [i, n, l, t.url]);
    return (0, s.jsx)($.m, {
        text: c,
        children: (0, s.jsx)(tX.D, { onClick: o, className: nR.y, title: c, children: a }),
    });
}
var nM = l(808380),
    nP = l(31300),
    n_ = l(802516),
    nw = l(22363),
    nD = l(418524);
function nV(e) {
    let { platform: t, ...l } = e;
    switch (t) {
        case nM.Y.DESKTOP:
            return (0, s.jsx)(nP.k, { size: "xs", ...l });
        case nM.Y.XBOX:
            return (0, s.jsx)(n_.Y, { size: "xs", ...l });
        case nM.Y.PLAYSTATION:
            return (0, s.jsx)(nw.X, { size: "xs", ...l });
        case nM.Y.NINTENDO:
            return (0, s.jsx)(nD.M, { size: "xs", ...l });
        default:
            return null;
    }
}
function nU(e) {
    let { platform: t } = e;
    return (0, s.jsx)(
        $.m,
        {
            text: (function (e) {
                switch (e) {
                    case nM.Y.DESKTOP:
                        return em.intl.string(em.t.KT6uCJ);
                    case nM.Y.XBOX:
                        return em.intl.string(em.t.DDWUJp);
                    case nM.Y.PLAYSTATION:
                        return em.intl.string(em.t.fzMz2s);
                    case nM.Y.NINTENDO:
                        return em.intl.string(em.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, s.jsx)(nV, { platform: t }),
        },
        t,
    );
}
let nF = [nM.Y.DESKTOP, nM.Y.XBOX, nM.Y.PLAYSTATION, nM.Y.NINTENDO];
var nY = l(424994),
    nW = l(623828);
function nB() {
    return (0, s.jsx)(W.E, { variant: "text-sm/normal", color: "text-subtle", children: em.intl.string(em.t.GruYxV) });
}
let nH = function () {
    let { game: e } = U(),
        t = (0, tm.c)("GameProfileGameDetails"),
        l = r.useMemo(() => e.genres.map(t7.du).join(", "), [e]),
        n = e.getCompanyByRole(lH.wk.PUBLISHER),
        i = e.getCompanyByRole(lH.wk.DEVELOPER),
        a = n.map((e) => e.name).join(", "),
        c = i.map((e) => e.name).join(", "),
        o = e.firstReleaseDate,
        u = r.useMemo(() => {
            let t = new Set(e.platforms),
                l = [...t];
            return (
                !t.has(nM.Y.DESKTOP) && (t.has(nM.Y.MACOS) || t.has(nM.Y.LINUX)) && l.push(nM.Y.DESKTOP),
                l.filter((e) => nF.includes(e)).sort((e, t) => nF.indexOf(e) - nF.indexOf(t))
            );
        }, [e.platforms]),
        d = (e?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return nA.p.includes(t);
            })
            .sort((e, t) => nA.p.indexOf(e.category) - nA.p.indexOf(t.category)),
        m = !(0, tg.uJ)(l),
        x = !(0, tg.uJ)(a),
        h = !(0, tg.uJ)(c),
        g = !(0, tg.uJ)(o),
        f = u.length > 0,
        j = d.length > 0 && !d.every((e) => (0, tg.uJ)(e.url));
    return (0, s.jsxs)("div", {
        className: nW.uW,
        children: [
            (0, s.jsx)("div", {
                className: nW.Gf,
                children: (0, s.jsx)(td.D, {
                    variant: t ? "text-md/medium" : "heading-sm/semibold",
                    color: t ? "text-subtle" : "text-strong",
                    children: em.intl.string(em.t["7OjmmH"]),
                }),
            }),
            (0, s.jsxs)("div", {
                className: nW.kL,
                children: [
                    (0, s.jsxs)("div", {
                        className: nW.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== e.genres.length ? em.intl.string(em.t.pDgwYB) : em.intl.string(em.t.mjFKqn),
                            }),
                            m
                                ? (0, s.jsx)(W.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: nW.Gu,
                                      children: l,
                                  })
                                : (0, s.jsx)(nB, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: nW.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== n.length ? em.intl.string(em.t.Hc7Enk) : em.intl.string(em.t["4Byy/G"]),
                            }),
                            x
                                ? (0, s.jsx)(W.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: nW.Gu,
                                      children: a,
                                  })
                                : (0, s.jsx)(nB, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: nW.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== i.length ? em.intl.string(em.t.KATEJB) : em.intl.string(em.t.na3PT0),
                            }),
                            h
                                ? (0, s.jsx)(W.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: nW.Gu,
                                      children: c,
                                  })
                                : (0, s.jsx)(nB, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: nW.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t.H3mPDT),
                            }),
                            g
                                ? (0, s.jsx)(W.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: nW.Gu,
                                      children: lW.i$(new Date(o), "LL"),
                                  })
                                : (0, s.jsx)(nB, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: nW.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: u.length > 1 ? em.intl.string(em.t.PNqxNe) : em.intl.string(em.t["UxAag+"]),
                            }),
                            f
                                ? (0, s.jsx)("div", {
                                      className: nW.Gu,
                                      children: u.map((e) => (0, s.jsx)(nU, { platform: e }, e)),
                                  })
                                : (0, s.jsx)(nB, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: nW.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t["Oj3o1/"]),
                            }),
                            j
                                ? (0, s.jsx)("div", {
                                      className: nW.Gu,
                                      children: d.map((e) => (0, s.jsx)(nO, { website: e }, e.url)),
                                  })
                                : (0, s.jsx)(nB, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: nW.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t["BwQ+9e"]),
                            }),
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: nW.Gu,
                                children: em.intl.format(em.t.XPFZVl, { igdbLink: nY.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", { className: nW.OQ, children: (0, s.jsx)(nE, {}) }),
        ],
    });
};
var nz = l(141628),
    nX = l(289363),
    nK = l(793919);
function nJ() {
    return (0, s.jsxs)("div", {
        "aria-hidden": !0,
        className: nK.uW,
        children: [
            (0, s.jsx)(tv, { className: nK.dU, width: "30%" }),
            (0, s.jsxs)(tE, {
                className: nK.nV,
                children: [
                    (0, s.jsx)("div", { className: nK.sB, children: (0, s.jsx)(nX.default, { isLoading: !0 }) }),
                    (0, s.jsxs)("div", {
                        className: nK.hQ,
                        children: [
                            (0, s.jsxs)("div", {
                                className: nK.Yv,
                                children: [(0, s.jsx)(tv, { width: "55%" }), (0, s.jsx)(tv, { width: "85%" })],
                            }),
                            (0, s.jsx)(tA, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function n$(e) {
    let { analyticsLocations: t } = e,
        l = (0, tm.c)("GameProfileLinkAccount"),
        {
            trackAction: n,
            fetchedAuthorization: i,
            hasAlreadyLinked: a,
            canStartAuthorization: c,
            startAuthorization: o,
            connectionApp: u,
            hasOfficialApplication: d,
            officialApplicationFetchFailed: x,
        } = U(),
        h = (0, m.bG)([D.default], () => D.default.getCurrentUser()),
        g = r.useCallback(() => {
            (n(T.GameProfileTrackActionActions.LinkAccount), o({ analyticsLocations: t }));
        }, [n, o, t]);
    return !d || x || null == h
        ? null
        : null == u || (c && !i)
          ? (0, s.jsx)(nJ, {})
          : !c || a
            ? null
            : (0, s.jsxs)("div", {
                  className: nK.uW,
                  children: [
                      (0, s.jsx)(td.D, {
                          className: nK.Gf,
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: em.intl.string(em.t["VDAhr+"]),
                      }),
                      (0, s.jsxs)("div", {
                          className: nK.kL,
                          children: [
                              (0, s.jsx)("div", {
                                  className: nK.sB,
                                  children: (0, s.jsx)(nX.default, { application: u }),
                              }),
                              (0, s.jsxs)("div", {
                                  className: nK.hQ,
                                  children: [
                                      (0, s.jsxs)("div", {
                                          className: nK.FS,
                                          children: [
                                              (0, s.jsx)(td.D, {
                                                  variant: "heading-md/semibold",
                                                  color: "text-default",
                                                  children: em.intl.formatToPlainString(em.t.hUbQT2, {
                                                      gameName: u.name,
                                                  }),
                                              }),
                                              (0, s.jsx)(W.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: em.intl.string(em.t["JKqu+4"]),
                                              }),
                                          ],
                                      }),
                                      (0, s.jsx)(K.$, {
                                          variant: "secondary",
                                          icon: nz.A,
                                          text: em.intl.string(em.t.jynBQ5),
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
var nq = l(635377),
    nQ = l.n(nq),
    nZ = l(80687),
    n0 = l(534573),
    n1 = l(248643),
    n8 = l(256905),
    n2 = l(684519),
    n3 = l(191096),
    n4 = l(90721),
    n6 = l(140128);
function n5(e) {
    let { item: t, index: l } = e;
    return `${l}-${t.url}`;
}
function n9(e, t) {
    return (0, n0.Ec)(e, { size: t, keepAspectRatio: !0, format: th.QB ? "webp" : null });
}
let n7 = new (nQ())({ max: 100 }),
    ie = r.memo(function (e) {
        let { url: t, alt: l, className: n } = e,
            [i, a] = r.useState(null),
            c = null != i && i.url === t ? i.isPortrait : (n7.get(t) ?? !1),
            o = r.useCallback(
                (e) => {
                    if (null == e || 0 === e.naturalWidth || 0 === e.naturalHeight) return;
                    let l = e.naturalHeight > e.naturalWidth;
                    (n7.set(t, l),
                        a((e) => (null != e && e.url === t && e.isPortrait === l ? e : { url: t, isPortrait: l })));
                },
                [t],
            ),
            d = r.useCallback((e) => o(e.currentTarget), [o]);
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)("img", {
                    ref: o,
                    src: n9(t, 106),
                    className: u()(n6.r4, !c && n6.l5),
                    alt: "",
                    draggable: !1,
                    onLoad: d,
                }),
                (0, s.jsx)("img", { ref: o, src: n9(t, 900), className: u()(n6.c8, c && n6.D7, n), alt: l, onLoad: d }),
            ],
        });
    }),
    it = r.memo(function (e) {
        var t;
        let { item: l, index: n, isSelected: i, isPlaying: a, onSelect: c, gameName: o, listItemProps: d } = e,
            m = r.useCallback(() => c(n), [c, n]),
            x = d?.tabIndex;
        return (0, s.jsx)(tX.D, {
            ...d,
            className: u()(n6.JS, i && n6.Y4),
            onClick: m,
            children: (0, s.jsxs)("div", {
                className: n6.ub,
                children: [
                    (0, s.jsx)("img", {
                        src: n9("VIDEO" === (t = l).type ? (t.poster ?? t.url) : t.url, 106),
                        className: n6.xn,
                        alt: em.intl.formatToPlainString(em.t.COYYrn, { game: o }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === l.type &&
                        (0, s.jsx)("div", {
                            className: n6.UZ,
                            children: (0, s.jsx)(nZ.D, { playing: i && a, size: "sm", tabIndex: x }),
                        }),
                ],
            }),
        });
    }),
    il = r.memo(function (e) {
        let {
                item: t,
                reducedMotion: l,
                autoPlay: n,
                videoRef: i,
                mediaPlayerRef: a,
                onPlay: c,
                onPause: o,
                onFullscreenChange: u,
            } = e,
            d = r.useRef(null);
        return (
            (0, n4.A)({ videoRef: i, canvasRef: d, enabled: !l }),
            (0, s.jsxs)(s.Fragment, {
                children: [
                    !l && (0, s.jsx)("canvas", { ref: d, className: n6.HW, "aria-hidden": "true" }),
                    (0, s.jsx)("div", {
                        className: n6.tN,
                        children: (0, s.jsx)(n1.A, {
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
                            renderLinkComponent: n2.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: u,
                            mediaPlayerClassName: n6.T9,
                            videoRef: i,
                            mediaPlayerRef: a,
                        }),
                    }),
                ],
            })
        );
    });
function ii() {
    let { game: e, trackAction: t } = U(),
        [l, n] = r.useState(0),
        [i, a] = r.useState(null),
        [c, o] = r.useState(e.screenshotUrls),
        u = r.useRef(null),
        d = r.useRef(null),
        x = (0, m.bG)([t6.Ay], () => t6.Ay.useReducedMotion),
        { obscured: h } = (0, n3.I3)(),
        g = (0, lf.l)("game_profile_media");
    c !== e.screenshotUrls && (o(e.screenshotUrls), n(0));
    let f = r.useMemo(
            () => [
                ...(e.trailers ?? []).map((e) => {
                    let t = (0, l2.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, l2.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                ...(e.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })),
            ],
            [e.trailers, e.screenshotUrls],
        ),
        j = r.useMemo(() => f.map((e, t) => ({ item: e, index: t })), [f]),
        p = f.length > 0 ? Math.min(l, f.length - 1) : 0,
        v = f[p],
        E = v?.type === "VIDEO",
        A = r.useCallback(
            (e) => {
                let t = f[p],
                    l = f[e];
                (t?.type === "IMAGE" && l?.type === "IMAGE" && t.url !== l.url ? a(t.url) : a(null), n(e));
            },
            [f, p],
        ),
        [I, N] = r.useState(!1),
        b = r.useRef(null),
        S = r.useCallback(() => {
            t(E ? T.GameProfileTrackActionActions.ClickTrailer : T.GameProfileTrackActionActions.ClickImage);
            let e = u.current,
                l = b.current,
                i = null != e && !e.paused,
                a = e?.muted ?? !0,
                s = e?.currentTime ?? 0;
            l?.setPlay(!1);
            let r = f.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let l = t === p;
                    return { ...e, autoPlay: !!l && i, autoMute: !l || a, initialTimeSec: l ? s : void 0, videoRef: d };
                }
                return e;
            });
            (0, n8.R)({
                items: r,
                startingIndex: p,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: n,
                onClose: () => {
                    let e = d.current,
                        t = b.current,
                        l = null != e ? !e.paused : i;
                    (e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), l && t.setPlay(!0), t.setMuted(e.muted))
                            : l && t?.setPlay(!0),
                        N(l));
                },
            });
        }, [t, f, p, E]),
        C = r.useCallback(() => N(!0), []),
        y = r.useCallback(() => N(!1), []),
        L = r.useCallback(() => a(null), []),
        k = r.useCallback(
            (e) => {
                e && S();
            },
            [S],
        );
    return 0 === f.length
        ? null
        : (0, s.jsxs)("div", {
              className: n6.kL,
              children: [
                  E
                      ? (0, s.jsx)("div", {
                            className: n6.ND,
                            children: (0, s.jsx)(
                                il,
                                {
                                    item: v,
                                    reducedMotion: x,
                                    autoPlay: !x && !h,
                                    videoRef: u,
                                    mediaPlayerRef: b,
                                    onPlay: C,
                                    onPause: y,
                                    onFullscreenChange: k,
                                },
                                `${p}-${v.url}`,
                            ),
                        })
                      : (0, s.jsxs)("div", {
                            className: n6.wp,
                            children: [
                                null != i &&
                                    !x &&
                                    (0, s.jsx)(
                                        "div",
                                        {
                                            className: n6.Jy,
                                            onAnimationEnd: L,
                                            children: (0, s.jsx)(ie, { url: i, alt: "" }),
                                        },
                                        i,
                                    ),
                                (0, s.jsx)("div", { className: n6.QN }),
                                (0, s.jsx)(tX.D, {
                                    className: n6.gv,
                                    onClick: S,
                                    children: (0, s.jsx)("div", {
                                        className: n6.cs,
                                        children: (0, s.jsx)(
                                            ie,
                                            {
                                                url: v.url,
                                                className: n6.Jf,
                                                alt: em.intl.formatToPlainString(em.t.COYYrn, { game: e.name }),
                                            },
                                            v.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  g
                      ? (0, s.jsx)(lp.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            items: j,
                            getItemKey: n5,
                            renderItem: (t, l) => {
                                let { item: n, index: i } = t;
                                return (0, s.jsx)(
                                    it,
                                    {
                                        item: n,
                                        index: i,
                                        isPlaying: I,
                                        isSelected: i === p,
                                        onSelect: A,
                                        gameName: e.name,
                                        listItemProps: l,
                                    },
                                    `${i}-${n.url}`,
                                );
                            },
                        })
                      : (0, s.jsx)(lj.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            children: f.map((t, l) =>
                                (0, s.jsx)(
                                    it,
                                    {
                                        item: t,
                                        index: l,
                                        isPlaying: I,
                                        isSelected: l === p,
                                        onSelect: A,
                                        gameName: e.name,
                                    },
                                    `${l}-${t.url}`,
                                ),
                            ),
                        }),
              ],
          });
}
var ia = l(610509),
    is = l(575888),
    ir = l(49381),
    ic = l(223273);
function io(e, t, l) {
    if (null == e || null == t || t < 10) return ic.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !l
            ? ic.vI.POSITIVE
            : t < (l ? 100 : 500) || e < 95
              ? ic.vI.VERY_POSITIVE
              : ic.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return ic.vI.MOSTLY_POSITIVE;
    if (e >= 40) return ic.vI.MIXED;
    if (e >= 20) return ic.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !l) return ic.vI.NEGATIVE;
    else if (t < (l ? 100 : 500)) return ic.vI.VERY_NEGATIVE;
    return ic.vI.OVERWHELMINGLY_NEGATIVE;
}
(l(323874), l(14289), l(35956));
var iu = l(989441),
    id = l(792216);
let im = {
    appStore: {
        getTitle: () => em.intl.string(em.t.LVy7Ug),
        websiteCategories: [nA.V.IPHONE, nA.V.IPAD],
        websiteHostnames: ["apps.apple.com", "itunes.apple.com"],
        distributor: iu.D.APPLE_APP_STORE,
        buildUrl: (e) => `https://apps.apple.com/app/id${e}`,
        action: T.GameProfileTrackActionActions.AppStoreReviews,
    },
    googlePlay: {
        getTitle: () => em.intl.string(em.t.V6rllO),
        websiteCategories: [nA.V.ANDROID],
        websiteHostnames: ["play.google.com"],
        distributor: iu.D.GOOGLE_PLAY,
        buildUrl: (e) => `https://play.google.com/store/apps/details?id=${encodeURIComponent(e)}`,
        action: T.GameProfileTrackActionActions.GooglePlayReviews,
    },
};
function ix(e) {
    switch (e) {
        case ic.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case ic.vI.OVERWHELMINGLY_POSITIVE:
        case ic.vI.VERY_POSITIVE:
        case ic.vI.POSITIVE:
        case ic.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case ic.vI.MIXED:
            return "steam-review-text-mixed";
        case ic.vI.MOSTLY_NEGATIVE:
        case ic.vI.NEGATIVE:
        case ic.vI.VERY_NEGATIVE:
        case ic.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
let ih = { enabled: !1 },
    ig = (0, er.mj)({
        name: "2026-10-game-profile-mobile-reviews",
        kind: "user",
        defaultConfig: ih,
        variations: { 0: ih, 1: { enabled: !0 } },
    });
var ij =
        (((a = {})[(a.MIGHTY = 1)] = "MIGHTY"),
        (a[(a.STRONG = 2)] = "STRONG"),
        (a[(a.FAIR = 3)] = "FAIR"),
        (a[(a.WEAK = 4)] = "WEAK"),
        a),
    ip = l(778591);
function iv(e) {
    let { rating: t, strokeColor: l } = e,
        n = 2 * Math.PI * 16,
        i = Math.min(Math.max(t, 0), 100) / 100,
        a = i * n;
    return (0, s.jsx)("svg", {
        width: 30,
        height: 30,
        viewBox: "0 0 36 36",
        style: { transform: `rotate(${((1 - i) * 360) / 2}deg)` },
        children: (0, s.jsx)("circle", {
            r: 16,
            cx: 18,
            cy: 18,
            fill: "none",
            stroke: l,
            strokeWidth: 2.4,
            strokeDasharray: `${a} ${n - a}`,
        }),
    });
}
var iE = l(315189);
let iA = { appStore: ia.z, googlePlay: is.O };
function iI(e) {
    let { review: t } = e,
        { trackAction: l } = U(),
        n = (0, nk.A)(),
        i = iA[t.key],
        { action: a, url: c } = t,
        o = r.useCallback(() => {
            (l(a), n(c));
        }, [a, n, l, c]);
    return (0, s.jsx)(tX.D, {
        onClick: o,
        className: iE.nf,
        role: "link",
        "aria-label": t.accessibilityLabel,
        children: (0, s.jsxs)("div", {
            className: iE.tF,
            children: [
                (0, s.jsxs)("div", {
                    className: iE.hU,
                    children: [
                        (0, s.jsx)(i, { size: "sm", color: eP.A.colors.ICON_STRONG.css }),
                        (0, s.jsx)(td.D, { variant: "heading-sm/medium", color: "text-strong", children: t.title }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: iE.nK,
                    children: [
                        (0, s.jsx)(W.E, {
                            variant: "text-xs/medium",
                            color: "text-strong",
                            className: iE.yX,
                            children: t.ratingText,
                        }),
                        (0, s.jsx)(W.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: t.ratingCountText,
                        }),
                    ],
                }),
            ],
        }),
    });
}
function iN(e) {
    let { url: t, title: l, rating: n, ratingCount: i, tooltipVariant: a = "all" } = e,
        { trackAction: c } = U(),
        o = (0, nk.A)(),
        u = io(n, i, "recent" === a),
        d = ix(u),
        m = r.useCallback(() => {
            (c(T.GameProfileTrackActionActions.SteamReviews), o(t));
        }, [o, c, t]);
    return (0, s.jsx)(tX.D, {
        onClick: m,
        className: iE.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.YNC5Di),
        children: (0, s.jsxs)("div", {
            className: iE.tF,
            children: [
                (0, s.jsxs)("div", {
                    className: iE.hU,
                    children: [
                        (0, s.jsx)(ir.N, { size: "sm", color: eP.A.colors.ICON_STRONG.css }),
                        (0, s.jsx)(td.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, s.jsx)(
                    $.m,
                    {
                        text:
                            u === ic.vI.NO_USER_REVIEWS
                                ? em.intl.string(em.t.CLMt8J)
                                : em.intl
                                      .format(
                                          "recent" === a
                                              ? em.t.TzvC0k
                                              : "localized" === a
                                                ? em.t.EOfrwm
                                                : em.t["lzANJ/"],
                                          { rating: n, rating_count: i?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, s.jsxs)("div", {
                            className: iE.nK,
                            children: [
                                (0, s.jsx)(W.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    className: iE.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case ic.vI.NO_USER_REVIEWS:
                                                return em.intl.string(em.t.CLMt8J);
                                            case ic.vI.OVERWHELMINGLY_POSITIVE:
                                                return em.intl.string(em.t["75sx1S"]);
                                            case ic.vI.VERY_POSITIVE:
                                                return em.intl.string(em.t["EkOVg+"]);
                                            case ic.vI.POSITIVE:
                                                return em.intl.string(em.t.ZUkFtr);
                                            case ic.vI.MOSTLY_POSITIVE:
                                                return em.intl.string(em.t.M7Z09a);
                                            case ic.vI.MIXED:
                                                return em.intl.string(em.t.c8yuHR);
                                            case ic.vI.MOSTLY_NEGATIVE:
                                                return em.intl.string(em.t.H0MSjG);
                                            case ic.vI.NEGATIVE:
                                                return em.intl.string(em.t.vpLrgz);
                                            case ic.vI.VERY_NEGATIVE:
                                                return em.intl.string(em.t["5spYuX"]);
                                            case ic.vI.OVERWHELMINGLY_NEGATIVE:
                                                return em.intl.string(em.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != i &&
                                    u !== ic.vI.NO_USER_REVIEWS &&
                                    (0, s.jsx)(W.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: em.intl
                                            .format(em.t.sgIoin, { rating_count: i.toLocaleString() })
                                            .toString(),
                                    }),
                            ],
                        }),
                    },
                    `open-steam-page-${a}`,
                ),
            ],
        }),
    });
}
function ib(e) {
    let { url: t } = e,
        { game: l, trackAction: n } = U(),
        { reviews: i } = l,
        a = i?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = a.tier,
        o = a.topCriticRating ?? -1,
        u = a.topCriticRatingCount ?? -1,
        d = (o <= 0 || u <= 0) && null == c,
        m = (0, nk.A)(),
        x = r.useCallback(() => {
            (n(T.GameProfileTrackActionActions.OpenCriticReviews), m(t));
        }, [m, n, t]);
    return (0, s.jsx)(tX.D, {
        onClick: x,
        className: iE.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.aLNBAw),
        children: (0, s.jsxs)("div", {
            className: iE.Ur,
            children: [
                (0, s.jsx)(td.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: em.intl.string(em.t["UxvER+"]),
                }),
                (0, s.jsxs)("div", {
                    className: iE.WA,
                    children: [
                        null != c ? (0, s.jsx)(iS, { tier: c }) : null,
                        null != c && o > 0 && u > 0 ? (0, s.jsx)(iC, { rating: o, tier: c }) : null,
                        d
                            ? (0, s.jsx)(W.E, {
                                  variant: "text-xs/medium",
                                  color: ix(ic.vI.NO_USER_REVIEWS),
                                  children: em.intl.string(em.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function iS(e) {
    let { tier: t } = e,
        l = (function (e) {
            switch (e) {
                case ij.MIGHTY:
                    return em.intl.string(em.t.aZej2g);
                case ij.STRONG:
                    return em.intl.string(em.t.MLxnSg);
                case ij.FAIR:
                    return em.intl.string(em.t["3f19KA"]);
                case ij.WEAK:
                    return em.intl.string(em.t.jtVgSh);
            }
        })(t),
        n = (function (e) {
            switch (e) {
                case ij.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case ij.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case ij.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case ij.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, s.jsx)(
        $.m,
        {
            text: l,
            children: (0, s.jsx)("div", {
                className: iE.TE,
                children: (0, s.jsx)("img", { src: n, alt: l, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function iC(e) {
    let { rating: t, tier: l } = e,
        { foregroundColor: n, backgroundColor: i } = (function (e) {
            let t = "";
            switch (e) {
                case ij.MIGHTY:
                    t = "#fc430a";
                    break;
                case ij.STRONG:
                    t = "#9e00b4";
                    break;
                case ij.FAIR:
                    t = "#4aa1ce";
                    break;
                case ij.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(l);
    return (0, s.jsx)(
        $.m,
        {
            text: em.intl.string(em.t.Ub4YR1),
            children: (0, s.jsxs)("div", {
                className: iE.TE,
                style: { backgroundColor: i },
                children: [
                    (0, s.jsx)(iv, { rating: t, strokeColor: n }),
                    (0, s.jsx)(W.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: iE.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let iT = function () {
    var e;
    let { game: t } = U(),
        l = (0, tm.c)("GameProfileReviews"),
        n = (0, ip.I)(t.id),
        i = t.opencriticUrl,
        a = r.useMemo(() => {
            let e = t.reviews?.steam,
                l = t.steamReleaseStatus !== id.Y.RETIRED_ABANDONED && null != n,
                i = io(e?.recentRating, e?.recentRatingCount, !0),
                a = l && i !== ic.vI.NO_USER_REVIEWS,
                s =
                    null != e &&
                    null != e.localizedRating &&
                    null != e.localizedRatingCount &&
                    null != e.ratingCount &&
                    e.localizedRatingCount >= 200 &&
                    e.ratingCount >= 2e3;
            return {
                steamReview: e,
                showSteamReview: l,
                showRecentSteamReview: a,
                showLocalizedReview: s,
                primarySteamRating: s ? e?.localizedRating : e?.rating,
                primarySteamRatingCount: s ? e?.localizedRatingCount : e?.ratingCount,
                primarySteamTitleKey: s ? em.t["aWb+V4"] : em.t["8e4LiB"],
                mobileStoreReviews: Object.entries(im).flatMap((e) => {
                    let l,
                        n,
                        [i, a] = e,
                        s = t.reviews?.[i],
                        r = s?.rating,
                        c = s?.ratingCount;
                    if (null == r || null == c) return [];
                    let o = (function (e, t) {
                        let l = e.websites.find((e) => {
                            let { category: l, url: n } = e;
                            try {
                                return (
                                    t.websiteCategories.includes(l) && t.websiteHostnames.includes(new URL(n).hostname)
                                );
                            } catch {
                                return !1;
                            }
                        });
                        if (null != l) return l.url;
                        let n = e.thirdPartySkus.find((e) => e.distributor === t.distributor)?.id;
                        return null != n ? t.buildUrl(n) : null;
                    })(t, a);
                    return null != o
                        ? [
                              ((l = a.getTitle()),
                              (n = new Intl.NumberFormat(em.intl.currentLocale, {
                                  minimumFractionDigits: 1,
                                  maximumFractionDigits: 1,
                              }).format(r)),
                              {
                                  key: i,
                                  url: o,
                                  title: l,
                                  ratingText: em.intl.format(em.t["zdL4/T"], { rating: n }).toString(),
                                  ratingCountText: em.intl.format(em.t.u1m2hs, { rating_count: c }).toString(),
                                  accessibilityLabel: em.intl
                                      .format(em.t["63jSRx"], { store: l, rating: n, rating_count: c })
                                      .toString(),
                                  action: a.action,
                              }),
                          ]
                        : [];
                }),
            };
        }, [t, n]),
        c =
            ((e = a.mobileStoreReviews),
            !(function (e) {
                let { location: t } = e;
                return ig.useConfig({ location: t }).enabled;
            })({ location: "GameProfileReviews" })
                ? []
                : e),
        {
            steamReview: o,
            showSteamReview: u,
            showRecentSteamReview: d,
            showLocalizedReview: m,
            primarySteamRating: x,
            primarySteamRatingCount: h,
            primarySteamTitleKey: g,
        } = a,
        f =
            (t.steamReleaseStatus !== id.Y.RETIRED_ABANDONED || c.length > 0) &&
            t.reviews?.opencritic != null &&
            null != t.opencriticUrl;
    return u || f || 0 !== c.length
        ? (0, s.jsxs)("div", {
              className: iE.uW,
              children: [
                  (0, s.jsx)("div", {
                      className: iE.Gf,
                      children: (0, s.jsx)(td.D, {
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: em.intl.string(em.t.GaAQXP),
                      }),
                  }),
                  (0, s.jsxs)("div", {
                      className: iE.kL,
                      children: [
                          d && null != n
                              ? (0, s.jsx)("div", {
                                    className: iE.WH,
                                    children: (0, s.jsx)(iN, {
                                        url: n,
                                        title: em.intl.string(em.t.MQGNsN),
                                        rating: o?.recentRating,
                                        ratingCount: o?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          u && null != n
                              ? (0, s.jsx)("div", {
                                    className: iE.WH,
                                    children: (0, s.jsx)(iN, {
                                        url: n,
                                        title: em.intl.string(g),
                                        rating: x,
                                        ratingCount: h,
                                        tooltipVariant: m ? "localized" : "all",
                                    }),
                                })
                              : null,
                          c.map((e) =>
                              (0, s.jsx)("div", { className: iE.WH, children: (0, s.jsx)(iI, { review: e }) }, e.key),
                          ),
                          f && null != i
                              ? (0, s.jsx)("div", { className: iE.WH, children: (0, s.jsx)(ib, { url: i }) })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var iy = l(815996),
    iL = l(722258),
    ik = l(258245),
    iR = l(561769),
    iG = l(484469),
    iO = l(57020),
    iM = l(682301);
let iP = [];
var i_ = l(758836),
    iw = l(399872);
let iD = [0, 1, 2, 3, 4];
function iV(e) {
    return e.skuId;
}
function iU(e) {
    let { product: t, aspectRatio: l, listItemProps: n } = e,
        { skuId: i } = t,
        { flattenProductVariants: a, prioritizedCurrency: c, standalonePreview: o } = r.useContext(iR.v3),
        { trackAction: u } = U(),
        d = r.useRef(null),
        m = r.useCallback(
            (e) => {
                (u(T.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (d.current = e.currentTarget),
                    (0, iL.B)({
                        skuId: i,
                        analyticsLocations: [f.A.GAME_PROFILE],
                        analyticsSource: f.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, iO.A)({ product: t }),
                        returnRef: d,
                    }));
            },
            [u, i, t],
        ),
        x = r.useMemo(
            () => ({
                flattenProductVariants: a ?? !0,
                prioritizedCurrency: c,
                standalonePreview: o,
                productOverride: t,
            }),
            [a, c, o, t],
        );
    return (0, s.jsx)(iR.v3.Provider, {
        value: x,
        children: (0, s.jsx)(ik.A, {
            skuId: i,
            aspectRatio: l,
            cardClassName: iw.N,
            onClickCard: m,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: n,
        }),
    });
}
function iF() {
    return (0, s.jsx)(iG.A, {});
}
function iY() {
    let { game: e, closeModal: t, trackAction: l } = U(),
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
                    } = (0, m.cf)([L.A], () => ({
                        hasFetched: null != e && L.A.hasShopCollectionBeenFetched(e),
                        isFetching: null != e && L.A.isShopCollectionFetching(e),
                        skuIds: null != e ? L.A.getShopCollectionSkuIds(e) : void 0,
                    }));
                    return (
                        (0, r.useEffect)(() => {
                            null == e || t || L.A.isShopCollectionFetching(e) || l4(e);
                        }, [e, t]),
                        { skuIds: n ?? iP, hasFetched: t, isFetching: l }
                    );
                })(e),
                i = (0, iM.hv)(t, { flattenVariants: !0 }),
                a = (0, r.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                s = t.some((e) => i[e]?.state === "loading");
            return { products: a, isLoading: null != e && (!l || n || (t.length > 0 && s)) };
        })(e.shopCollectionIds?.[0]),
        a = r.useCallback(() => {
            (l(T.GameProfileTrackActionActions.DiscordCollectiblesShop),
                t(),
                (0, iy.Cz)({
                    analyticsLocations: [f.A.GAME_PROFILE],
                    analyticsSource: f.A.GAME_PROFILE,
                    tab: i_.G2.CATALOG,
                }));
        }, [l, t]),
        c = (0, lf.l)("game_profile_shop_carousel");
    return i
        ? (0, s.jsx)(tM, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, s.jsx)(lb, { children: iD.map((e) => (0, s.jsx)(iF, {}, e)) }),
          })
        : 0 === n.length
          ? null
          : (0, s.jsx)(tP, {
                title: em.intl.string(em.t["5DYPT8"]),
                onClickViewAll: a,
                children: c
                    ? (0, s.jsx)(lp.A, {
                          gap: "md",
                          items: n,
                          getItemKey: iV,
                          renderItem: (e, t) => (0, s.jsx)(iU, { product: e, listItemProps: t }, e.skuId),
                      })
                    : (0, s.jsx)(lj.A, { gap: "md", children: n.map((e) => (0, s.jsx)(iU, { product: e }, e.skuId)) }),
            });
}
var iW = l(921138);
let iB = [],
    iH = [];
var iz = l(987070);
let iX = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function iK(e) {
    return e.id;
}
function iJ(e) {
    let { className: t } = e;
    return (0, s.jsx)(tE, { className: t, children: (0, s.jsx)(tv, { className: iz.Lg }) });
}
function i$(e) {
    let { game: t, listItemProps: l } = e,
        { navigateToGame: n, trackAction: i } = U(),
        a = t.getCoverURL(256),
        [c, o] = r.useState(null),
        u = null == a || c === a,
        { shouldOpenGameProfile: d, gameId: m } = (0, iW.Ay)({
            gameId: t.id,
            source: T.GameProfileSources.SimilarGames,
        }),
        x = r.useCallback(() => {
            (i(T.GameProfileTrackActionActions.ClickSimilarGame, { similarGameId: t.id }),
                d && null != m && n(m, T.GameProfileSources.SimilarGames));
        }, [t.id, m, i, d, n]),
        h = r.useCallback(() => o(a), [a]);
    return (0, s.jsx)($.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, s.jsxs)(tX.D, {
            ...l,
            className: iz.Nr,
            onClick: x,
            "aria-label": em.intl.formatToPlainString(em.t["8QLQB+"], { gameName: t.name }),
            children: [
                (0, s.jsx)(le.Ay, {
                    game: t,
                    className: iz.xe,
                    size: le.wu.SMALL,
                    imageSize: 256,
                    onLoad: h,
                    onError: h,
                }),
                !u && (0, s.jsx)(iJ, { className: iz.uz }),
            ],
        }),
    });
}
function iq() {
    let { game: e } = U(),
        t = e.id,
        { isFetching: l, similarGames: n } = (function (e) {
            let t = !l3.has(e),
                { data: l, isLoading: n, error: i } = l5(e, t),
                a = t && null != l ? l : iB;
            (0, N.x)(a);
            let s = (0, m.bG)(
                    [e3.A],
                    () => a.some((e) => null == e3.A.getGame(e) && !e3.A.hasNoData(e) && !e3.A.didFetchingFail(e)),
                    [a],
                ),
                r = (0, m.yK)(
                    [e3.A, D.default],
                    () => {
                        let e = D.default.getCurrentUser()?.nsfwAllowed;
                        return a
                            .map((e) => e3.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => (0, iW.T_)(t) && !(0, O.b)(t, e));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == l) || n || s, similarGames: r }
                : { isFetching: !1, similarGames: iH };
        })(t),
        i = (0, lf.l)("game_profile_similar_games");
    return l3.has(t)
        ? null
        : l
          ? (0, s.jsx)(tM, {
                showViewAllSkeleton: !1,
                skeletonTitleWidth: 124,
                children: (0, s.jsx)("div", {
                    className: iz.XG,
                    style: iX,
                    children: (0, s.jsx)(lb, {
                        children: eq()
                            .range(0, 8)
                            .map((e) => (0, s.jsx)(iJ, { className: iz.aZ }, e)),
                    }),
                }),
            })
          : 0 === n.length
            ? null
            : (0, s.jsx)(tP, {
                  title: em.intl.string(em.t["6rLyQB"]),
                  children: (0, s.jsx)("div", {
                      className: iz.XG,
                      style: iX,
                      children: i
                          ? (0, s.jsx)(lp.A, {
                                gap: "md",
                                items: n,
                                getItemKey: iK,
                                itemClassName: iz.cW,
                                renderItem: (e, t) => (0, s.jsx)(i$, { game: e, listItemProps: t }, e.id),
                            })
                          : (0, s.jsx)(lj.A, { gap: "md", children: n.map((e) => (0, s.jsx)(i$, { game: e }, e.id)) }),
                  }),
              });
}
l(667532);
var iQ = l(853022);
let iZ = new Set(["1402418703554842694", "356877880938070016"]),
    i0 = [nA.V.EPICGAMES, nA.V.STEAM, nA.V.ROBLOX, nA.V.BATTLENET, nA.V.RIOT, nA.V.MINECRAFT];
function i1(e) {
    return (0, s.jsx)(K.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var i8 = l(349361),
    i2 = l(924895),
    i3 = l(422688),
    i4 = l(505200),
    i6 = l(695250);
let i5 = function (e) {
    switch (e.category) {
        case nA.V.STEAM:
            return {
                icon: ir.N,
                text: em.intl.string(em.t.FsANs4),
                ariaLabel: em.intl.string(em.t["P+ePTG"]),
                action: T.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case nA.V.EPICGAMES:
            return {
                icon: i8.r,
                text: em.intl.string(em.t.ZbBMHa),
                ariaLabel: em.intl.string(em.t.BwX0UW),
                action: T.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case nA.V.ROBLOX:
            return {
                icon: i2.H,
                text: em.intl.string(em.t["pJ+P+h"]),
                ariaLabel: em.intl.string(em.t.tYxpdf),
                action: T.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case nA.V.BATTLENET:
            return {
                icon: i3.a,
                text: em.intl.string(em.t["A7grp+"]),
                ariaLabel: em.intl.string(em.t.x9at20),
                action: T.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case nA.V.RIOT:
            return {
                icon: i4.A,
                text: em.intl.string(em.t.h6MapL),
                ariaLabel: em.intl.string(em.t["528nvc"]),
                action: T.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case nA.V.MINECRAFT:
            return {
                icon: i6.m,
                text: em.intl.string(em.t["HZbmO+"]),
                ariaLabel: em.intl.string(em.t.WWTqYn),
                action: T.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: n_.Y,
                text: em.intl.string(em.t["QpN/Iz"]),
                ariaLabel: em.intl.string(em.t["8JZmmF"]),
                action: T.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
var i9 = l(242216);
function i7(e) {
    let t,
        l,
        n,
        i,
        a,
        s =
            ((t = (0, ip.I)(e?.id)),
            (l = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eL.d3x.XBOX_GAME_PASS && !(0, tg.uJ)(e.id));
                return t?.id == null ? null : (0, iQ.jA)(t.id);
            })(e)),
            (n = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            r.useMemo(() => {
                if ((null == i && null == l) || null == n) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== nA.V.EPICGAMES || !!iZ.has(n)) &&
                            (e.category !== nA.V.STEAM || a !== id.Y.RETIRED_ABANDONED) &&
                            i0.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === id.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === nA.V.STEAM) ||
                    e.push({ category: nA.V.STEAM, url: t });
                let s = e.sort((e, t) => (e.category === nA.V.STEAM ? -1 : +(t.category === nA.V.STEAM)));
                return (null != l && s.unshift({ category: "XBOX_GAME_PASS", url: l }), s);
            }, [t, i, n, a, l]));
    return { storeWebsites: s, showsStoreLinks: s.length > 0 && null != e };
}
function ae(e) {
    let { data: t } = e,
        { trackAction: l } = U(),
        n = (0, nk.A)();
    return (0, s.jsx)(i1, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (l(t.action), n(t.url));
        },
    });
}
let at = function () {
    let { game: e, trackAction: t } = U(),
        { showsStoreLinks: n, storeWebsites: i } = i7(e),
        a = r.useMemo(() => i.map(i5).filter((e) => null != e), [i]);
    if (!n) return null;
    if (1 === a.length) {
        let [e] = a;
        return (0, s.jsx)(ae, { data: e });
    }
    if (2 === a.length)
        return (0, s.jsxs)("div", {
            className: i9.G,
            children: [(0, s.jsx)(ae, { data: a[0] }), (0, s.jsx)(ae, { data: a[1] })],
        });
    let c = (0, s.jsx)(i1, {
        text: em.intl.string(em.t["/hMurx"]),
        "aria-label": em.intl.string(em.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: n, trackAction: i } = e;
                (0, h.openModalLazy)(async () => {
                    let { default: e } = await l.e("307898").then(l.bind(l, 679361));
                    return (l) => (0, s.jsx)(e, { game: t, websiteButtons: n, trackAction: i, ...l });
                });
            })({ game: e, websiteButtons: a, trackAction: t }),
    });
    return i.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, s.jsxs)("div", { className: i9.G, children: [(0, s.jsx)(ae, { data: a[0] }), c] })
        : c;
};
var al = l(123292),
    an = l(672572),
    ai = l(94936);
function aa() {
    let e = r.useRef(null),
        {
            isExpanded: t,
            showToggle: l,
            handleToggleExpanded: n,
        } = (function (e) {
            let { trackAction: t } = U(),
                [l, n] = r.useState("full");
            r.useEffect(() => {
                let t = e.current;
                if (null == t) return;
                let l = new ResizeObserver(() => {
                    let t = e.current;
                    null != t &&
                        n((e) => ("expanded" === e ? e : t.scrollHeight - t.clientHeight > 1 ? "collapsed" : "full"));
                });
                return (l.observe(t), () => l.disconnect());
            }, [e]);
            let i = r.useCallback(() => {
                "expanded" === l
                    ? (t(T.GameProfileTrackActionActions.ShowLess), n("collapsed"))
                    : "collapsed" === l && (t(T.GameProfileTrackActionActions.ShowMore), n("expanded"));
            }, [t, l]);
            return {
                isExpanded: "expanded" === l,
                showToggle: "expanded" === l || "collapsed" === l,
                handleToggleExpanded: i,
            };
        })(e),
        { game: i, isTwoColumn: a } = U(),
        c = r.useMemo(() => (a ? 8 : 5), [a]);
    if (null == i.description) return null;
    let o = t ? em.intl.string(em.t["6MwJo/"]) : em.intl.string(em.t.lBeKY2);
    return (0, s.jsxs)("div", {
        className: u()(an.fi, ai.k),
        children: [
            (0, s.jsx)(W.E, {
                ref: e,
                className: ai.Q,
                lineClamp: t ? void 0 : c,
                variant: "text-md/medium",
                children: i.description,
            }),
            l && (0, s.jsx)(al.Q, { onClick: n, text: o }),
        ],
    });
}
var as = l(40478),
    ar = l(764948);
let ac = r.memo(function (e) {
    let { analyticsLocations: t, selectTab: l, getScrollOffset: n } = e;
    return (0, s.jsxs)("div", {
        className: ar.V,
        children: [
            (0, s.jsx)(ii, {}),
            (0, s.jsxs)("div", {
                className: as.h,
                children: [
                    (0, s.jsx)(lr, {}),
                    (0, s.jsxs)("div", { className: as.X, children: [(0, s.jsx)(at, {}), (0, s.jsx)(aa, {})] }),
                ],
            }),
            (0, s.jsx)(n$, { analyticsLocations: t }),
            (0, s.jsx)(tR, {}),
            (0, s.jsx)(nf, { getScrollOffset: n }),
            (0, s.jsx)(l_, { selectTab: l }),
            (0, s.jsx)(iY, {}),
            (0, s.jsx)(iq, {}),
            (0, s.jsx)(iT, {}),
            (0, s.jsx)(nH, {}),
        ],
    });
});
var ao = l(164135);
let au = r.memo(function (e) {
    let { selectTab: t, getScrollOffset: l } = e;
    return (0, s.jsxs)("div", {
        className: ao.V,
        children: [
            (0, s.jsxs)("div", { className: ao.B, children: [(0, s.jsx)(ii, {}), (0, s.jsx)(aa, {})] }),
            (0, s.jsx)(nf, { getScrollOffset: l }),
            (0, s.jsx)(l_, { selectTab: t }),
            (0, s.jsx)(iY, {}),
            (0, s.jsx)(iq, {}),
        ],
    });
});
var ad = l(881698),
    am = l(928550),
    ax = l(562708),
    ah = l(414499),
    ag = l(359549),
    af = l(139286),
    aj = l(873516);
function ap(e) {
    let { onCloudPlayClick: t, analyticsLocations: l } = e,
        { closeModal: n, trackAction: i } = U();
    (0, af.A)({
        name: ax.ImpressionNames.CLOUD_PLAY_CTA,
        type: ax.ImpressionTypes.VIEW,
        properties: { location_stack: l },
    });
    let a = r.useCallback(() => {
        (i(T.GameProfileTrackActionActions.CloudPlay), n(), t());
    }, [n, t, i]);
    return (0, s.jsx)($.m, {
        text: em.intl.string(em.t.JVwWva),
        position: "top",
        children: (0, s.jsx)(K.$, {
            icon: ah.h,
            text: em.intl.string(em.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: a,
            fullWidth: !0,
        }),
    });
}
function av(e) {
    let { cloudPlayAppId: t, analyticsLocations: l } = e,
        { game: n } = U(),
        i = (0, ag.rC)({ applicationId: t, sourceApplicationId: n.id, analyticsLocations: l });
    return null == i
        ? null
        : (0, s.jsx)("div", {
              className: aj.k,
              children: (0, s.jsx)(ap, { onCloudPlayClick: i, analyticsLocations: l }),
          });
}
var aE = l(768626);
function aA(e) {
    let { analyticsLocations: t } = e,
        { game: l } = U(),
        n = (0, ad.A)(l.linkedApplications)?.id,
        [i] = (0, am.L_)(l.getOfficialApplicationId()),
        [a] = (0, am.L_)(l.id),
        { showsStoreLinks: r } = i7(l);
    return (0, s.jsxs)("div", {
        className: u()(aE.pz, an.fi, r ? aE.FJ : aE.dg),
        children: [
            null == n || i || a ? null : (0, s.jsx)(av, { cloudPlayAppId: n, analyticsLocations: t }),
            (0, s.jsxs)("div", {
                className: ar.V,
                children: [
                    (0, s.jsx)(at, {}),
                    (0, s.jsx)(n$, { analyticsLocations: t }),
                    (0, s.jsx)(tR, {}),
                    (0, s.jsx)(iT, {}),
                    (0, s.jsx)(nH, {}),
                ],
            }),
        ],
    });
}
var aI = l(105865);
function aN(e) {
    let { isTwoColumn: t, selectTab: l, selectionVersion: n, initialScrollOffset: i, analyticsLocations: a } = e,
        c = r.useRef(null),
        o = r.useRef(null),
        u = r.useRef(n);
    (r.useLayoutEffect(() => {
        0 === n && null != i && i > 0 && o.current?.getScrollerNode()?.scrollTo({ top: i, behavior: "instant" });
    }, [i, n]),
        r.useLayoutEffect(() => {
            n !== u.current &&
                (o.current?.getScrollerNode()?.scrollTo({ top: 0, behavior: "instant" }), (u.current = n));
        }, [n]));
    let d = r.useCallback(() => o.current?.getScrollerNode()?.scrollTop ?? 0, []),
        m = r.useCallback((e) => {
            if (null != c.current) {
                let t = Math.max(0, 1 - e.currentTarget.scrollTop / 150);
                c.current.style.opacity = String(t);
            }
        }, []);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(li, { ref: c }),
            (0, s.jsxs)(eQ.Ch, {
                ref: o,
                className: aI.XG,
                onScroll: m,
                children: [
                    (0, s.jsx)("div", { className: aI.xY, "aria-hidden": !0 }),
                    (0, s.jsx)(lu, {}),
                    (0, s.jsx)(t3.F, {
                        children: t
                            ? (0, s.jsxs)("div", {
                                  className: aI.jC,
                                  children: [
                                      (0, s.jsx)(au, { selectTab: l, getScrollOffset: d }),
                                      (0, s.jsx)(aA, { analyticsLocations: a }),
                                  ],
                              })
                            : (0, s.jsx)("div", {
                                  className: aI.b9,
                                  children: (0, s.jsx)(ac, { analyticsLocations: a, selectTab: l, getScrollOffset: d }),
                              }),
                    }),
                ],
            }),
        ],
    });
}
var ab = l(883912),
    aS = l(787188);
function aC(e) {
    let { applicationId: t, selectedPageIndex: l } = e;
    return (0, s.jsx)(ab.SocialLayerStorefrontInnerWrapper, {
        applicationId: t,
        pageIndex: l,
        analyticsLocation: f.A.GAME_PROFILE_GAME_SHOP,
        analyticsPlacement: lx.Ye.GAME_PROFILE_GAME_SHOP,
        className: aS.kL,
        scrollerClassName: aS.XG,
        promotionBannerClassName: aS.Rv,
    });
}
var aT = l(733391),
    ay = l(171616);
function aL(e) {
    let {
            gameId: t,
            source: l,
            sourceUserId: n,
            transitionState: i,
            onClose: a,
            initialScrollOffset: c,
            initialTab: o,
            navigateToGame: U,
        } = e,
        [F, Y] = r.useState(!0),
        [W, B] = r.useState(null),
        { clientThemesClassName: H } = (0, E.Ay)(),
        z = (0, m.bG)([C.default], () => C.default.locale),
        X = r.useMemo(() => (0, T.generateViewId)(), []),
        { analyticsLocations: K } = (0, j.Ay)(f.A.GAME_PROFILE),
        J = (0, k.s)(t),
        { data: $ } = (0, N.I)(t),
        q = $?.getOfficialApplicationId(),
        Q = (0, R.rG)($),
        Z = null != q,
        ee = (0, m.bG)([v.A], () => null != q && v.A.didFetchingApplicationFail(q), [q]),
        et = $?.name ?? "",
        el = (0, O.A)($),
        en = r.useRef(null);
    r.useEffect(() => {
        en.current = W;
    }, [W]);
    let {
            hasAlreadyLinked: ei,
            canStartAuthorization: ea,
            fetched: es,
            startAuthorization: er,
            connectionApp: ec,
        } = (0, p.RD)($),
        { invite: eo, isMember: ed, isResolving: em } = (0, R.Ay)($, B),
        { socialLayerStorefrontRecommendationsData: ex, socialLayerStorefrontRecommendationsLoading: eh } = (function (
            e,
        ) {
            let t = D.default.getCurrentUser()?.id,
                l = r.useMemo(() => (null != t ? [t] : []), [t]),
                { storefrontApplicationId: n, isStorefrontConfigLoaded: i } = (0, m.cf)(
                    [P.A],
                    () => ({
                        storefrontApplicationId: null != e ? P.A.getApplicationIdFromDetectableId(e) : void 0,
                        isStorefrontConfigLoaded: "success" === P.A.getConfigFetchState().state,
                    }),
                    [e],
                ),
                a = (0, M.h)(n),
                s = (0, m.bG)([v.A], () => null != n && v.A.didFetchingApplicationFail(n), [n]),
                c = r.useMemo(() => (null != n ? [n] : []), [n]),
                { recommendations: o, status: u } = (0, w.XQ)({
                    applicationIds: c,
                    userIds: l,
                    numItems: 6,
                    source: _.B.USER_PROFILE,
                }),
                d = r.useMemo(
                    () =>
                        null == a || null == a.guildId || "success" !== u || 0 === o.length
                            ? null
                            : { application: a, skuIds: o.map((e) => e.id), guildId: a.guildId },
                    [a, u, o],
                ),
                x = "loading" === u,
                h = "success" === u && o.length > 0 && null == a && !s;
            return {
                socialLayerStorefrontRecommendationsData: d,
                socialLayerStorefrontRecommendationsLoading: i && null != n && (x || h),
            };
        })(t),
        eg = r.useCallback(
            function (e) {
                let { similarGameId: n, communityGuildId: i } =
                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = (0, T.getGuildIdAndVerifiedFromInvite)(en.current);
                (0, T.trackGameProfileAction)({
                    gameName: et,
                    gameId: t,
                    action: e,
                    similarGameId: n,
                    viewId: X,
                    guildId: i ?? a.guildId,
                    isVerified: null == i && a.isVerified,
                    source: l,
                });
            },
            [et, t, X, l],
        );
    ((0, g.Ay)(() => {
        ((0, T.trackGameProfileOpen)({
            source: l,
            viewId: X,
            gameId: t,
            gameName: et,
            authorId: n,
            profileType: T.GameProfileTypes.FullProfile,
        }),
            (0, A.He)());
    }),
        (0, g.Ay)(() => () => {
            let { isVerified: e, guildId: l } = (0, T.getGuildIdAndVerifiedFromInvite)(en.current),
                n = Date.now(),
                i = J.map((e) => {
                    let t = (0, I.JM)(e) ? (0, I.W6)(e, n) : (0, I.aJ)(e, z);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, T.trackGameProfileClose)({
                viewId: X,
                gameId: t,
                gameName: et,
                playedFriendIds: J.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: L.A.getSimilarGames(t) ?? [],
                guildId: l,
                isVerified: e,
            });
        }));
    let ef = r.useCallback((e) => {
            Y(e.contentRect.width >= 800);
        }, []),
        ej = (0, d.w)(ef, [], { fireOnMount: !0 }),
        ep = r.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, h.closeAllModals)(), (0, S.M)()) : a();
            },
            [a],
        ),
        ev = r.useCallback(() => ep(!1), [ep]),
        { navigation: eE, selectionVersion: eA } = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y.OVERVIEW,
                [l, n] = r.useState(t),
                [i, a] = r.useState(0),
                s = r.useCallback((e) => {
                    (n(e), a((e) => e + 1));
                }, []),
                c = r.useCallback(
                    (t) => {
                        if (t !== l) {
                            let l = G[t];
                            null != l && e(l);
                        }
                        s(t);
                    },
                    [l, s, e],
                );
            return { navigation: r.useMemo(() => ({ selectedTab: l, selectTab: c }), [l, c]), selectionVersion: i };
        })(eg, o),
        { selectedTab: eI } = eE,
        eN = (function (e) {
            let { game: t, navigation: l } = e,
                { selectedTab: n, selectTab: i } = l,
                a = t?.id,
                s = t?.getOfficialApplicationId(),
                c = eu({ location: "GameProfileModal" });
            r.useEffect(() => {
                c && (0, aT.Xw)();
            }, [c]);
            let o = (0, m.bG)(
                    [P.A],
                    () =>
                        (null != a ? P.A.getApplicationIdFromDetectableId(a) : void 0) ??
                        (null != s && P.A.hasStorefrontForApplicationId(s) ? s : null),
                    [a, s],
                ),
                u = c && null != o,
                { storefront: d } = (0, ay.A)({ applicationId: u ? o : null }),
                [x, h] = r.useState({ storefrontId: d?.id, index: 0 }),
                [g, f] = r.useState(n);
            n !== g && (f(n), n !== y.COMMERCE && h({ storefrontId: d?.id, index: 0 }));
            let j = x.storefrontId === d?.id && x.index < (d?.pages.length ?? 0) ? x.index : 0,
                p = r.useCallback(
                    (e) => {
                        !u ||
                            e < 0 ||
                            e >= (d?.pages.length ?? 0) ||
                            (h({ storefrontId: d?.id, index: e }), i(y.COMMERCE));
                    },
                    [u, i, d],
                );
            return {
                hasCommerceTab: u,
                storefrontApplicationId: o,
                storefront: d,
                selectedStorefrontPageIndex: j,
                selectStorefrontPage: p,
            };
        })({ game: $, navigation: eE }),
        { hasCommerceTab: eb, storefrontApplicationId: eS, storefront: eC, selectedStorefrontPageIndex: eT } = eN,
        ey = Object.values(eC?.promotions ?? {})[0] ?? null,
        eL = r.useMemo(() => {
            if (null != $)
                return {
                    game: $,
                    isTwoColumn: F,
                    canStartAuthorization: ea,
                    hasAlreadyLinked: ei,
                    fetchedAuthorization: es,
                    startAuthorization: er,
                    connectionApp: ec,
                    invite: eo,
                    hasDiscordWebsite: Q,
                    hasOfficialApplication: Z,
                    officialApplicationFetchFailed: ee,
                    isCommunityInviteResolving: em,
                    isMember: ed,
                    socialLayerStorefrontRecommendationsData: ex,
                    socialLayerStorefrontRecommendationsLoading: eh,
                    hasCommerceTab: eb,
                    storefrontPromotion: ey,
                    closeModal: ep,
                    navigateToGame: U,
                    trackAction: eg,
                    viewId: X,
                };
        }, [$, F, ea, ei, es, er, ec, eo, Q, Z, ee, em, ed, ex, eh, eb, ey, ep, U, eg, X]);
    return null == $
        ? null
        : (0, s.jsx)(j.f5, {
              value: K,
              children: (0, s.jsx)(x.N, {
                  transitionState: i,
                  onClose: a,
                  children: (0, s.jsx)(V.Provider, {
                      value: eL,
                      children: (0, s.jsx)("div", {
                          className: u()(H, an.kL),
                          ref: ej,
                          children: (0, s.jsxs)(b.A, {
                              obscured: el,
                              onClose: ev,
                              children: [
                                  (0, s.jsx)("div", {
                                      className: u()(an.sx, { [an.Tk]: eI !== y.COMMERCE }),
                                      children: (0, s.jsx)(eJ, { navigation: eE, socialLayerStorefront: eN }),
                                  }),
                                  eI === y.OVERVIEW &&
                                      (0, s.jsx)(aN, {
                                          selectTab: eE.selectTab,
                                          selectionVersion: eA,
                                          initialScrollOffset: c,
                                          isTwoColumn: F,
                                          analyticsLocations: K,
                                      }),
                                  eI === y.COMMUNITIES && (0, s.jsx)(t2, {}),
                                  eI === y.COMMERCE && (0, s.jsx)(aC, { applicationId: eS, selectedPageIndex: eT }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
}
let ak = function (e) {
    let { gameId: t, source: l, sourceUserId: n, initialScrollOffset: i, initialTab: a, ...c } = e,
        [o, u] = r.useState({ gameId: t, source: l, sourceUserId: n, initialScrollOffset: i, initialTab: a }),
        d = o.gameId,
        m = r.useCallback(
            (e, t) => {
                e !== d && ((0, R.UT)(e), u({ gameId: e, source: t }));
            },
            [d],
        );
    return (0, s.jsx)(
        aL,
        {
            gameId: o.gameId,
            source: o.source,
            sourceUserId: o.sourceUserId,
            initialScrollOffset: o.initialScrollOffset,
            initialTab: o.initialTab,
            navigateToGame: m,
            ...c,
        },
        o.gameId,
    );
};
