n.d(t, { default: () => a7 });
var l,
    i,
    a,
    r = n(477900),
    s = n(582128),
    o = n.t(s, 2),
    c = n(503698),
    d = n.n(c),
    u = n(535185),
    m = n(17928),
    h = n(521489),
    g = n(192308),
    x = n(964486),
    f = n(793574),
    p = n(688810),
    j = n(206828),
    v = n(587895),
    A = n(590703),
    E = n(180170),
    I = n(583846),
    b = n(454908),
    N = n(570962),
    S = n(38145),
    C = n(773669),
    k = n(409626),
    y = (((l = {}).OVERVIEW = "overview"), (l.COMMUNITIES = "communities"), (l.COMMERCE = "commerce"), l),
    T = n(422069),
    L = n(205184),
    R = n(957807);
let M = {
    [y.OVERVIEW]: k.GameProfileTrackActionActions.Overview,
    [y.COMMUNITIES]: k.GameProfileTrackActionActions.Communities,
    [y.COMMERCE]: k.GameProfileTrackActionActions.GameShop,
};
var O = n(49491),
    G = n(429913),
    P = n(832163),
    _ = n(820847),
    w = n(862772),
    D = n(287809);
let V = s.createContext(void 0);
function F() {
    let e = s.useContext(V);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var U = n(109112),
    Y = n(761508),
    B = n(834730),
    W = n(858899),
    z = n(265872),
    H = n(980707),
    X = n(477782),
    $ = n(821609),
    K = n(663341),
    J = n(866665),
    q = n(408278),
    Q = n(34188),
    Z = n(173936),
    ee = n(365199),
    et = n(789645),
    en = n(442433),
    el = n(50268),
    ei = n(44724),
    ea = n(676924),
    er = n(957565),
    es = n(945810);
let eo = { enabled: !1 },
    ec = (0, es.mj)({
        name: "2026-09-game-profiles-v3-commerce-tab",
        kind: "user",
        defaultConfig: eo,
        variations: { 0: eo, 1: { enabled: !0 } },
    });
function ed(e) {
    let { location: t } = e;
    return ec.useConfig({ location: t }).enabled;
}
var eu = n(695366),
    em = n(105292);
n(321073);
var eh = n(540185),
    eg = n(926268),
    ex = n(53788),
    ef = n(831453),
    ep = n(785866),
    ej = n(555704),
    ev = n(47675),
    eA = n(633075),
    eE = n(289173),
    eI = n(321191),
    eb = n(958805),
    eN = n(735321),
    eS = n(96173),
    eC = n(280450),
    ek = n(403362);
async function ey(e) {
    let t = e((0, eN.BF)());
    await eb.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
var eT = n(652215);
function eL(e) {
    var t;
    let l,
        i,
        { className: a, activeTab: c } = e,
        { game: d, closeModal: u, trackAction: h } = F(),
        x = s.useRef(null),
        p = s.useRef(null),
        j = (0, el.A)({ id: d.id, label: em.intl.string(em.t.SHQGPj) }),
        v =
            ((t = d.id),
            (l = o.useContext(V)?.trackAction),
            (i = s.useCallback(() => {
                null != t &&
                    (l?.(k.GameProfileTrackActionActions.Feedback),
                    (0, g.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("250440"),
                            n.e("568035"),
                            n.e("733771"),
                            n.e("946039"),
                            n.e("55266"),
                            n.e("627495"),
                        ]).then(n.bind(n, 651930));
                        return (n) => (0, r.jsx)(e, { ...n, detected: { gameId: t } });
                    }));
            }, [t, l])),
            null == t
                ? null
                : (0, r.jsx)(X.Dr, {
                      id: "game-profile-something-wrong",
                      label: em.intl.string(em.t.qP2cXd),
                      action: i,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: eu.E },
                  })),
        A = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, m.bG)([eC.default], () => eC.default.getId()),
                i = s.useMemo(
                    () => [
                        {
                            type: eh.x.FAVORITE_GAMES,
                            addLabel: em.intl.string(em.t.fgmitg),
                            removeLabel: em.intl.string(em.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: eg.HeartIcon,
                        },
                        {
                            type: eh.x.PLAYED_GAMES,
                            addLabel: em.intl.string(em.t["0xIVLR"]),
                            removeLabel: em.intl.string(em.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: ex.G,
                        },
                        {
                            type: eh.x.CURRENT_GAMES,
                            addLabel: em.intl.string(em.t.G0c4En),
                            removeLabel: em.intl.string(em.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: ef.H,
                        },
                        {
                            type: eh.x.WANT_TO_PLAY_GAMES,
                            addLabel: em.intl.string(em.t.UuBS4K),
                            removeLabel: em.intl.string(em.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: ep._,
                        },
                    ],
                    [],
                ),
                a = (0, m.yK)([eI.A], () => (null == l ? [] : (eI.A.getUserProfile(l)?.widgets ?? [])), [l]),
                o = (0, eS.A)(),
                c = s.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...o, ...a].filter((e) => e instanceof eA.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(ek.Vq).find((e) => t.has(e)) ?? null;
                }, [o, a, e]),
                d = s.useCallback(
                    async (e, n) => {
                        let l;
                        if (
                            (await ey((i) => {
                                let a = i.filter(eE.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, eN.uA)(a))) return i;
                                    let n = { gameId: t },
                                        r = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new eE.Yy({ ...(a ?? { type: e }), games: r });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    l = new eE.Yy({ ...a, games: e });
                                }
                                var r = l;
                                let s = i.findIndex((e) => e.getUniqueKey() === r.getUniqueKey());
                                if (-1 === s) return [r, ...i];
                                let o = [...i];
                                return ((o[s] = r), o);
                            }),
                            null == l)
                        )
                            return;
                        let i = l;
                        (0, ev.un)({
                            action: n ? "GAME_ADDED" : "GAME_REMOVED",
                            gameId: t,
                            ...i.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [t],
                ),
                u = s.useCallback(
                    async (e) => {
                        let t;
                        if (
                            null == c ||
                            (await ey((n) =>
                                e
                                    ? n.some((e) => e instanceof eA.R && e.applicationId === c)
                                        ? n
                                        : [(t = new eA.R({ applicationId: c })), ...n]
                                    : ((t = n.find((e) => e instanceof eA.R && e.applicationId === c) ?? null),
                                      n.filter((e) => !(e instanceof eA.R && e.applicationId === c))),
                            ),
                            null == t)
                        )
                            return;
                        let n = t;
                        (0, ev.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...n.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [c],
                );
            if (null == l) return null;
            let h = null != e && (0, eN.XX)(e),
                g = [];
            if (null != c) {
                let e = a.some((e) => e instanceof eA.R && e.applicationId === c);
                g.push(
                    (0, r.jsx)(
                        X.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? em.intl.formatToPlainString(em.t.Ktb1n8, { name: n })
                                : em.intl.formatToPlainString(em.t.Xp6iZt, { name: n }),
                            action: () => u(!e),
                            leadingAccessory: { type: "icon", icon: ej.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (h)
                for (let e of i) {
                    let n = a.filter(eE.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.gameId === t),
                        i = !l && null != n && (0, eN.uA)(n);
                    g.push(
                        (0, r.jsx)(
                            X.Dr,
                            {
                                id: e.menuId,
                                label: l ? e.removeLabel : e.addLabel,
                                subtext: i ? em.intl.string(em.t["86OoiH"]) : void 0,
                                subtextLineClamp: 1,
                                action: () => d(e.type, !l),
                                leadingAccessory: { type: "icon", icon: e.icon },
                                disabled: i,
                            },
                            e.type,
                        ),
                    );
                }
            return 0 === g.length ? null : g;
        })(d),
        E = ed({ location: "GameProfileOverflowMenu" }),
        I = (0, m.bG)([P.A], () => P.A.getApplicationIdFromDetectableId(d.id)),
        b = (0, m.bG)([P.A], () => P.A.hasStorefrontForApplicationId(I), [I]),
        N = s.useCallback(() => {
            null != I && (0, ei.G)({ applicationId: I });
        }, [I]),
        S = s.useCallback(() => {
            null != I && (h(k.GameProfileTrackActionActions.GameShop), (0, ei.default)({ applicationId: I }), u());
        }, [I, h, u]),
        C = s.useCallback(() => u(!1), [u]),
        T = s.useCallback(() => {
            h(k.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eT.BVt.GAME_PROFILE(d.id)}`;
            (0, er.C)(e, () => {
                (0, W.P0)({ text: em.intl.string(em.t["+5kSoW"]), variant: "success" });
            });
        }, [d.id, h]);
    return (0, r.jsxs)("div", {
        className: a,
        children: [
            c === y.COMMERCE &&
                (0, r.jsx)(ea.A, {
                    location: f.A.GAME_PROFILE,
                    onNavigate: u,
                    variant: "overlay-secondary",
                    themeOverride: "dark",
                }),
            null != A &&
                c !== y.COMMERCE &&
                (0, r.jsx)(z.Y, {
                    targetElementRef: p,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(H.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                ((0, en.Z_)(), t());
                            },
                            "aria-label": em.intl.string(em.t.sidPSo),
                            onSelect: () => {},
                            children: (0, r.jsx)(X.rX, { children: A }),
                        });
                    },
                    children: (e) =>
                        (0, r.jsx)("div", {
                            ...e,
                            ref: p,
                            children: (0, r.jsx)($.$, {
                                icon: K.PlusLargeIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: em.intl.string(em.t.sidPSo),
                            }),
                        }),
                }),
            b &&
                !E &&
                (0, r.jsx)(J.m, {
                    text: em.intl.string(em.t.apFNLU),
                    children: (0, r.jsx)(q.K, {
                        icon: Q.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": em.intl.string(em.t.apFNLU),
                        onMouseDown: N,
                        onClick: S,
                    }),
                }),
            c !== y.COMMERCE &&
                (0, r.jsx)(J.m, {
                    text: em.intl.string(em.t.WqhZss),
                    children: (0, r.jsx)(q.K, {
                        icon: Z.LinkIcon,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": em.intl.string(em.t.WqhZss),
                        onClick: T,
                    }),
                }),
            (null != j || null != v) &&
                c !== y.COMMERCE &&
                (0, r.jsx)(z.Y, {
                    targetElementRef: x,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(H.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                ((0, en.Z_)(), t());
                            },
                            "aria-label": em.intl.string(em.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(X.rX, { children: v }), (0, r.jsx)(X.rX, { children: j })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, r.jsx)(J.m, {
                            text: em.intl.string(em.t["UKOtz+"]),
                            children: (0, r.jsx)("div", {
                                ...e,
                                ref: x,
                                children: (0, r.jsx)(q.K, {
                                    icon: ee.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": em.intl.string(em.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, r.jsx)(q.K, {
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
    eM = (0, es.mj)({
        name: "2026-09-game-profiles-v3-communities-tab",
        kind: "user",
        defaultConfig: eR,
        variations: { 0: eR, 1: { enabled: !0 } },
    });
function eO(e) {
    let { className: t, navigation: n } = e,
        { selectedTab: l, selectTab: i } = n;
    if (
        !(function (e) {
            let { location: t } = e;
            return eM.useConfig({ location: t }).enabled;
        })({ location: "GameProfileCommunitiesTabBar" })
    )
        return null;
    let a = em.intl.string(em.t["3xFZEo"]);
    return (0, r.jsx)(Y.V.Item, {
        id: y.COMMUNITIES,
        look: "brand",
        disableItemStyles: !0,
        selectedItem: l,
        onClick: () => i(y.COMMUNITIES),
        className: t,
        "aria-label": a,
        children: (0, r.jsx)(B.E, { variant: "text-md/medium", color: "none", children: a }),
    });
}
function eG(e) {
    let { className: t, navigation: n } = e,
        { game: l } = F();
    return (l.communityGuildIds?.length ?? 0) < 3 ? null : (0, r.jsx)(eO, { className: t, navigation: n });
}
var eP = n(661531),
    e_ = n(331322),
    ew = n(278416),
    eD = n(478016),
    eV = n(900797),
    eF = n(847374),
    eU = n(421773),
    eY = n(225647),
    eB = n(421108);
let eW = "text-md/medium",
    ez = [];
function eH(e) {
    let { label: t, chevron: n, socialLayerStorefront: l } = e,
        i = (function (e) {
            let { hasCommerceTab: t, storefront: n } = e,
                l = Object.values(n?.promotions ?? {}).find((e) => {
                    let { flavor: t, endsAt: n } = e;
                    return "nitro" === t && (null == n || null != (0, eB.ZH)(n));
                }),
                i = (0, eB.tm)(l?.endsAt);
            return t && null != l && !i;
        })(l);
    return (0, r.jsxs)(e_.B, {
        as: "span",
        direction: "horizontal",
        align: "center",
        gap: 8,
        fullWidth: !1,
        children: [
            i &&
                (0, r.jsx)(ew.TagIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: eP.A.colors.ICON_FEEDBACK_POSITIVE,
                    "aria-hidden": "true",
                }),
            (0, r.jsxs)(e_.B, {
                as: "span",
                direction: "horizontal",
                align: "center",
                gap: 4,
                fullWidth: !1,
                children: [t, n],
            }),
        ],
    });
}
function eX(e) {
    let { className: t, label: n, navigation: l, socialLayerStorefront: i } = e,
        { selectedTab: a, selectTab: o } = l,
        { storefront: c, selectedStorefrontPageIndex: d, selectStorefrontPage: u } = i,
        m = c?.pages ?? ez,
        h = s.useRef(null),
        { isHovered: g, setIsHovered: x, onMouseEnter: f, onMouseLeave: p, cancelTimers: j } = (0, eU.A)(100, 100),
        v = em.intl.string(em.t["J3/JCl"]),
        A = s.useCallback(
            (e) => {
                (j(), x(e));
            },
            [j, x],
        );
    return (0, r.jsx)(z.Y, {
        targetElementRef: h,
        shouldShow: g,
        position: "bottom",
        align: "left",
        useMouseEnter: !0,
        onRequestOpen: () => A(!0),
        onRequestClose: () => A(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)("div", {
                onMouseEnter: f,
                onMouseLeave: p,
                children: (0, r.jsx)(H.W, {
                    navId: "game-profile-commerce-pages",
                    "aria-label": v,
                    onClose: t,
                    onSelect: void 0,
                    children: (0, r.jsx)(X.rX, {
                        children: m.map((e, t) => {
                            var n;
                            let l,
                                i = a === y.COMMERCE && t === d,
                                s =
                                    ((n = e.title),
                                    null != (l = (0, eY.A)(n?.trim())) && l.length > 0
                                        ? l
                                        : em.intl.formatToPlainString(em.t.IGMs8S, { pageNumber: t + 1 }));
                            return (0, r.jsx)(
                                X.Dr,
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
        children: (e, l) => {
            let { isShown: s } = l,
                c = s ? eV.t : eF.a;
            return (0, r.jsx)(Y.V.Item, {
                ...e,
                id: y.COMMERCE,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: a === y.COMMERCE ? y.COMMERCE : void 0,
                onClick: (t) => {
                    (o(y.COMMERCE), e.onClick(t));
                },
                onMouseLeave: p,
                clickableRef: (e) => {
                    h.current = e?.ref ?? null;
                },
                className: t,
                "aria-label": v,
                "aria-haspopup": "menu",
                children: (0, r.jsx)(B.E, {
                    variant: eW,
                    color: "none",
                    children: (0, r.jsx)(eH, {
                        label: n,
                        chevron: (0, r.jsx)(c, { size: "xs", color: "currentColor" }),
                        socialLayerStorefront: i,
                    }),
                }),
            });
        },
    });
}
function e$(e) {
    let { className: t, navigation: n, socialLayerStorefront: l } = e,
        { selectedTab: i, selectTab: a } = n,
        { hasCommerceTab: s, storefront: o } = l;
    if (!s) return null;
    let c = em.intl.string(em.t.apFNLU);
    return (o?.pages.length ?? 0) > 1
        ? (0, r.jsx)(eX, { className: t, label: c, navigation: n, socialLayerStorefront: l })
        : (0, r.jsx)(Y.V.Item, {
              id: y.COMMERCE,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: i,
              onClick: () => a(y.COMMERCE),
              className: t,
              "aria-label": c,
              children: (0, r.jsx)(B.E, {
                  variant: eW,
                  color: "none",
                  children: (0, r.jsx)(eH, { label: c, socialLayerStorefront: l }),
              }),
          });
}
var eK = n(510954);
function eJ(e) {
    let { navigation: t, socialLayerStorefront: n } = e,
        { game: l } = F(),
        { selectedTab: i, selectTab: a } = t,
        o = l.getIconURL(64),
        [c, d] = s.useState(null),
        u = s.useCallback(() => d(o), [o]),
        m = em.intl.string(em.t.qHmbyh);
    return (0, r.jsx)("div", {
        className: eK.wx,
        children: (0, r.jsxs)("div", {
            className: eK.ap,
            children: [
                (0, r.jsx)("div", {
                    className: eK.wE,
                    children:
                        null != o && o !== c
                            ? (0, r.jsx)("img", { src: o, alt: "", className: eK.FC, draggable: !1, onError: u })
                            : (0, r.jsx)(U._, { size: "md" }),
                }),
                (0, r.jsxs)(Y.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: i,
                    onItemSelect: a,
                    className: eK.vR,
                    children: [
                        (0, r.jsx)(Y.V.Item, {
                            id: y.OVERVIEW,
                            disableItemStyles: !0,
                            className: eK.Mf,
                            "aria-label": m,
                            children: (0, r.jsx)(B.E, { variant: "text-md/medium", color: "none", children: m }),
                        }),
                        (0, r.jsx)(eG, { className: eK.Mf, navigation: t }),
                        (0, r.jsx)(e$, { className: eK.Mf, navigation: t, socialLayerStorefront: n }),
                    ],
                }),
                (0, r.jsx)(eL, { className: eK.HK, activeTab: i }),
            ],
        }),
    });
}
var eq = n(435558),
    eQ = n.n(eq),
    eZ = n(689175),
    e0 = n(448741),
    e1 = n(71393),
    e8 = n(309010),
    e2 = n(449054),
    e3 = n(60465),
    e4 = n(311043),
    e6 = n(636537),
    e5 = n(73153);
let e9 = {};
class e7 extends m.Ay.Store {
    static displayName = "DiscoverableGuildsStore";
    initialize() {
        this.waitFor(eC.default);
    }
    getGuild(e) {
        return e9[e]?.guild ?? null;
    }
    getGuilds(e) {
        return e.map((e) => e9[e]?.guild).filter(ek.Vq);
    }
    isFetching(e) {
        return e.some((e) => e9[e]?.fetchState === "fetching");
    }
    getStaleGuildIds(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return e.filter((e) => {
            let n = e9[e];
            return (
                null == n ||
                "failed" === n.fetchState ||
                ("fetching" !== n.fetchState && (null == n.fetchedAt || t - n.fetchedAt >= 36e5))
            );
        });
    }
}
let te = new e7(e5.h, {
        DISCOVERABLE_GUILDS_FETCH_START: function (e) {
            let { guildIds: t } = e;
            for (let e of t)
                e9[e] = { guild: e9[e]?.guild ?? null, fetchState: "fetching", fetchedAt: e9[e]?.fetchedAt ?? null };
        },
        DISCOVERABLE_GUILDS_FETCH_SUCCESS: function (e) {
            let { guildIds: t, guilds: n } = e,
                l = Date.now(),
                i = new Map(n.map((e) => [e.id, (0, e2.jE)(e)]));
            for (let e of t) e9[e] = { guild: i.get(e) ?? null, fetchState: "succeeded", fetchedAt: l };
        },
        DISCOVERABLE_GUILDS_FETCH_FAILURE: function (e) {
            let { guildIds: t } = e;
            for (let e of t)
                e9[e] = { guild: e9[e]?.guild ?? null, fetchState: "failed", fetchedAt: e9[e]?.fetchedAt ?? null };
        },
    }),
    tt = new Map();
async function tn(e) {
    e5.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_START", guildIds: e });
    try {
        let t = await e6.Bo.get({
                url: eT.Rsh.GUILD_DISCOVERY,
                query: { guild_ids: e },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            n = t.body?.guilds ?? [];
        e5.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_SUCCESS", guildIds: e, guilds: n });
    } catch (t) {
        throw (e5.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_FAILURE", guildIds: e }), t);
    }
}
async function tl(e) {
    let t = te.getStaleGuildIds(e),
        n = new Set();
    for (let t of e) {
        let e = tt.get(t);
        null != e && n.add(e);
    }
    if (t.length > 0) {
        let e = tn(t).finally(() => {
            for (let n of t) tt.get(n) === e && tt.delete(n);
        });
        for (let n of t) tt.set(n, e);
        n.add(e);
    }
    await Promise.all(n);
}
var ti = n(927813);
let ta = [];
function tr(e) {
    return e4.A.getGame(e)?.communityGuildIds ?? ta;
}
let ts = (0, m.UT)(te, {
    getQueryId: (e) => (tr(e).length > 0 ? `game-community-guilds/${e}` : null),
    get: (e) => te.getGuilds(tr(e)),
    load: async (e) => {
        let t = tr(e);
        t.length > 0 && (await tl(t));
    },
    staleAfter: ti.A.Seconds.HOUR,
    failureStaleAfter: ti.A.Seconds.MINUTE,
});
var to = n(196765);
let tc = new Set(),
    td = (0, to.v)((e) => ({
        gameId: null,
        excludedLocales: tc,
        toggleLocale: (t, n) => {
            e((e) => {
                let l = new Set(e.gameId === t ? e.excludedLocales : tc);
                return (l.has(n) ? l.delete(n) : l.add(n), { gameId: t, excludedLocales: l });
            });
        },
    }));
function tu(e) {
    return td((t) => (t.gameId === e ? t.excludedLocales : tc));
}
var tm = n(297264),
    th = n(37537),
    tg = n(714991),
    tx = n(486020),
    tf = n(240248);
function tp(e) {
    let { guildName: t, isMember: n, onClick: l, size: i, fullWidth: a } = e;
    return (0, r.jsx)($.$, {
        variant: "secondary",
        size: i,
        fullWidth: a,
        text: n ? em.intl.string(em.t.cEnaWx) : em.intl.string(em.t.XpeFYr),
        "aria-label": n
            ? em.intl.formatToPlainString(em.t.lQqwQi, { guildName: t })
            : em.intl.formatToPlainString(em.t["8rL1QB"], { guildName: t }),
        onClick: l,
    });
}
var tj = n(810729);
let tv = { sm: tj.nz, md: tj.a };
function tA(e) {
    let { className: t, width: n } = e;
    return (0, r.jsx)("div", { "aria-hidden": !0, className: d()(tj.qf, t), style: { width: n } });
}
function tE(e) {
    let { animationDelayMs: t, children: n, className: l } = e,
        i = null != t ? { "--custom-game-profile-skeleton-animation-delay": `${t}ms` } : void 0;
    return (0, r.jsx)("div", { "aria-hidden": !0, className: l, style: i, children: n });
}
function tI(e) {
    let { className: t, size: n = "md" } = e;
    return (0, r.jsx)(tA, { className: d()(tj.x6, tv[n], t) });
}
var tb = n(827085);
function tN(e) {
    let { className: t } = e;
    return (0, r.jsx)(tA, { className: d()(tb.qV, t) });
}
function tS(e) {
    let { presenceCount: t, memberCount: n } = e;
    return null == t && null == n
        ? null
        : (0, r.jsxs)("div", {
              className: tb.kL,
              children: [
                  null != t &&
                      (0, r.jsxs)("div", {
                          className: tb.U9,
                          children: [
                              (0, r.jsx)("i", { className: tb._o }),
                              (0, r.jsx)(B.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: em.intl.format(em.t["LC+S+m"], { membersOnline: t }),
                              }),
                          ],
                      }),
                  null != n &&
                      (0, r.jsxs)("div", {
                          className: tb.U9,
                          children: [
                              (0, r.jsx)("i", { className: tb.jk }),
                              (0, r.jsx)(B.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: em.intl.format(em.t.zRl6XR, { count: n }),
                              }),
                          ],
                      }),
              ],
          });
}
var tC = n(213098);
function tk() {
    return (0, r.jsxs)(tE, {
        className: tC.uW,
        animationDelayMs: 300,
        children: [
            (0, r.jsx)(tA, { className: tC.dU, width: "30%" }),
            (0, r.jsx)(tE, {
                className: tC.nV,
                children: (0, r.jsxs)("div", { className: tC.hQ, children: [(0, r.jsx)(ty, {}), (0, r.jsx)(tI, {})] }),
            }),
        ],
    });
}
function ty() {
    return (0, r.jsxs)("div", {
        className: tC.To,
        children: [
            (0, r.jsx)(tA, { className: tC.QV }),
            (0, r.jsxs)("div", {
                className: tC.Yv,
                children: [
                    (0, r.jsx)(tA, { className: tC.Ag }),
                    (0, r.jsx)(tA, { className: tC.zl }),
                    (0, r.jsx)(tN, { className: tC.P2 }),
                ],
            }),
        ],
    });
}
function tT(e) {
    let { guild: t } = e,
        n = tx.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [l, i] = s.useState(void 0),
        a = null != n && l !== n,
        o = s.useCallback(() => {
            i(n);
        }, [n]);
    return (0, r.jsxs)("div", {
        className: tC._C,
        children: [
            a && (0, r.jsx)(tA, { className: tC.EQ }),
            (0, r.jsx)("img", {
                className: tC.$f,
                src: n,
                alt: em.intl.formatToPlainString(em.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: o,
                onError: o,
            }),
        ],
    });
}
function tL(e) {
    let { guild: t, presenceCount: n, memberCount: l } = e;
    return (0, r.jsxs)("div", {
        className: tC.To,
        children: [
            (0, r.jsx)(tT, { guild: t }),
            (0, r.jsxs)("div", {
                className: tC.yj,
                children: [
                    (0, r.jsxs)("div", {
                        className: tC.YS,
                        children: [
                            (0, r.jsx)(tg.A, { guild: t, size: 16 }),
                            (0, r.jsx)(tm.D, {
                                className: tC.J5,
                                variant: "heading-md/semibold",
                                color: "text-default",
                                children: t.name,
                            }),
                        ],
                    }),
                    !(0, tf.uJ)(t.description) &&
                        (0, r.jsx)(B.E, {
                            className: tC.h_,
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: t.description,
                        }),
                    (0, r.jsx)(tS, { presenceCount: n, memberCount: l }),
                ],
            }),
        ],
    });
}
function tR(e) {
    let { guild: t, presenceCount: n, memberCount: l, button: i, className: a } = e;
    return (0, r.jsx)("div", {
        className: d()(tC.kL, a),
        children: (0, r.jsxs)("div", {
            className: tC.hQ,
            children: [(0, r.jsx)(tL, { guild: t, presenceCount: n, memberCount: l }), i],
        }),
    });
}
function tM() {
    let e = (0, th.c)("GameProfileGuildInvite"),
        {
            invite: t,
            hasDiscordWebsite: n,
            isCommunityInviteResolving: l,
            isMember: i,
            closeModal: a,
            trackAction: o,
        } = F(),
        c = s.useCallback(() => {
            null != t &&
                (o(k.GameProfileTrackActionActions.JoinServer),
                a(),
                e5.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: t.code, context: eT.BRT.APP }));
        }, [t, o, a]);
    return null == t || null == t.guild
        ? n && l
            ? (0, r.jsx)(tk, {})
            : null
        : (0, r.jsxs)("div", {
              className: tC.uW,
              children: [
                  (0, r.jsx)(tm.D, {
                      className: tC.Gf,
                      variant: e ? "text-md/medium" : "heading-sm/semibold",
                      color: e ? "text-subtle" : "text-strong",
                      children: em.intl.string(em.t["U2N+ci"]),
                  }),
                  (0, r.jsx)(tR, {
                      guild: t.guild,
                      presenceCount: t.approximate_presence_count,
                      memberCount: t.approximate_member_count,
                      button: (0, r.jsx)(tp, { guildName: t.guild.name, isMember: i, onClick: c, fullWidth: !0 }),
                  }),
              ],
          });
}
var tO = n(320448),
    tG = n(152594);
function tP(e) {
    let { children: t, skeletonTitleWidth: n, showViewAllSkeleton: l } = e;
    return (0, r.jsxs)("div", {
        className: tG.kL,
        "aria-busy": !0,
        children: [
            (0, r.jsxs)("div", {
                className: tG.wR,
                children: [(0, r.jsx)(tA, { className: tG.Iz, width: n }), l && (0, r.jsx)(tI, { size: "sm" })],
            }),
            t,
        ],
    });
}
function t_(e) {
    let { children: t, title: n, onClickViewAll: l, trailing: i } = e;
    return (0, r.jsxs)("div", {
        className: tG.kL,
        children: [
            (0, r.jsxs)("div", {
                className: tG.wR,
                children: [
                    (0, r.jsx)(tm.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, r.jsx)($.$, {
                            size: "sm",
                            icon: tO._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: l,
                            text: em.intl.string(em.t.budhsM),
                        }),
                    i,
                ],
            }),
            t,
        ],
    });
}
var tw = (((i = {}).LIST = "list"), (i.GRID = "grid"), i);
let tD = (0, to.v)((e) => ({
    layout: "grid",
    setLayout: (t) => {
        e({ layout: t });
    },
}));
var tV = n(876798),
    tF = n(481901),
    tU = n(916099),
    tY = n(461353);
function tB() {
    let { layout: e, setLayout: t } = tD(),
        n = em.intl.string(em.t.VGRZh7),
        l = em.intl.string(em.t["NJFr+g"]);
    return (0, r.jsxs)("div", {
        className: tY.k,
        role: "group",
        "aria-label": em.intl.string(em.t.mFMDSq),
        children: [
            (0, r.jsx)(J.m, {
                text: n,
                asContainer: !0,
                children: (0, r.jsx)(tV.k, {
                    icon: tF.d,
                    pressed: e === tw.GRID,
                    size: "sm",
                    "aria-label": n,
                    onClick: () => t(tw.GRID),
                }),
            }),
            (0, r.jsx)(J.m, {
                text: l,
                asContainer: !0,
                children: (0, r.jsx)(tV.k, {
                    icon: tU.ListBulletsIcon,
                    pressed: e === tw.LIST,
                    size: "sm",
                    "aria-label": l,
                    onClick: () => t(tw.LIST),
                }),
            }),
        ],
    });
}
var tW = n(37646),
    tz = n(846183);
function tH(e) {
    var t;
    let n,
        l,
        i,
        { locales: a, onClose: o } = e,
        { game: c } = F(),
        { options: d, toggleLocale: u } =
            ((t = c.id),
            (n = tu(t)),
            (l = td((e) => e.toggleLocale)),
            (i = s.useMemo(() => {
                let e;
                return (
                    (e = (0, em.getAvailableLocales)()),
                    a
                        .map((t) => {
                            if ("en-US" === t) return { locale: t, label: em.intl.string(em.t.LQLMGP) };
                            let n = e.find((e) => {
                                let { value: n } = e;
                                return n === t;
                            });
                            return { locale: t, label: null != n ? em.intl.string(n.localizedName) : t };
                        })
                        .sort((e, t) => e.label.localeCompare(t.label))
                );
            }, [a])),
            {
                options: s.useMemo(() => {
                    let e = a.filter((e) => !n.has(e)).length;
                    return i.map((t) => {
                        let { locale: l, label: i } = t,
                            a = !n.has(l);
                        return { locale: l, label: i, checked: a, disabled: a && 1 === e };
                    });
                }, [i, a, n]),
                toggleLocale: s.useCallback((e) => l(t, e), [l, t]),
            });
    return (0, r.jsx)(H.W, {
        "data-menu-migrated": !0,
        navId: "game-profile-communities-locale-filter",
        "aria-label": em.intl.string(em.t.OlOHDH),
        onClose: o,
        onSelect: void 0,
        children: d.map((e) => {
            let { locale: t, label: n, checked: l, disabled: i } = e;
            return (0, r.jsx)(X.sL, { id: t, label: n, checked: l, disabled: i, action: () => u(t) }, t);
        }),
    });
}
function tX(e) {
    let { locales: t } = e,
        n = s.useRef(null),
        l = em.intl.string(em.t.OlOHDH);
    return (0, r.jsx)("div", {
        className: tz.k,
        children: (0, r.jsx)(z.Y, {
            targetElementRef: n,
            position: "bottom",
            align: "right",
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, r.jsx)(tH, { locales: t, onClose: n });
            },
            children: (e) =>
                (0, r.jsx)(J.m, {
                    text: l,
                    asContainer: !0,
                    children: (0, r.jsx)(q.K, {
                        buttonRef: n,
                        icon: tW.U,
                        variant: "icon-only",
                        size: "sm",
                        "aria-label": l,
                        ...e,
                    }),
                }),
        }),
    });
}
var t$ = n(939249),
    tK = n(762841);
function tJ(e) {
    let { className: t, ariaLabel: n, onClick: l, children: i } = e;
    return (0, r.jsx)(t$.D, { className: d()(tK.v, t), onClick: l, "aria-label": n, children: i });
}
var tq = n(759020);
function tQ(e) {
    let { guild: t, presenceCount: n, memberCount: l, ariaLabel: i, onClick: a } = e;
    return (0, r.jsxs)(tJ, {
        className: tq.kL,
        onClick: a,
        ariaLabel: i,
        children: [
            (0, r.jsxs)("div", {
                className: tq.OA,
                children: [
                    (0, r.jsx)(tT, { guild: t }),
                    (0, r.jsxs)("div", {
                        className: tq.FS,
                        children: [
                            (0, r.jsxs)("div", {
                                className: tq.YS,
                                children: [
                                    (0, r.jsx)(tg.A, { guild: t, size: 16 }),
                                    (0, r.jsx)(tm.D, {
                                        className: tq.J5,
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: t.name,
                                    }),
                                ],
                            }),
                            !(0, tf.uJ)(t.description) &&
                                (0, r.jsx)(B.E, {
                                    className: tq.h_,
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    lineClamp: 2,
                                    children: t.description,
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: tq.Rn, children: (0, r.jsx)(tS, { presenceCount: n, memberCount: l }) }),
        ],
    });
}
var tZ = n(620387);
function t0(e) {
    let { animationDelayMs: t } = e;
    return (0, r.jsx)(tE, { className: tZ.s7, animationDelayMs: t, children: (0, r.jsx)(ty, {}) });
}
function t1(e) {
    let { animationDelayMs: t } = e;
    return (0, r.jsxs)(tE, {
        className: tZ.fv,
        animationDelayMs: t,
        children: [
            (0, r.jsx)(tA, { className: tZ.VR }),
            (0, r.jsxs)("div", {
                className: tZ.hG,
                children: [
                    (0, r.jsx)(tA, { className: tZ.t_ }),
                    (0, r.jsx)(tA, { className: tZ.Aj }),
                    (0, r.jsx)(tA, { className: tZ.ax }),
                ],
            }),
            (0, r.jsx)(tA, { className: tZ.Ah }),
        ],
    });
}
function t8(e) {
    let { guild: t, presenceCount: n, memberCount: l, ariaLabel: i, onClick: a } = e;
    return (0, r.jsx)(tJ, {
        className: tZ.Nr,
        onClick: a,
        ariaLabel: i,
        children: (0, r.jsx)(tL, { guild: t, presenceCount: n, memberCount: l }),
    });
}
function t2(e) {
    let { guild: t, layout: n } = e,
        { game: l, closeModal: i, trackAction: a, viewId: o } = F(),
        c = (0, m.bG)([e1.A], () => e1.A.getGuild(t.id)?.joinedAt != null, [t.id]),
        d = s.useCallback(async () => {
            (a(k.GameProfileTrackActionActions.CommunityClicked, { communityGuildId: t.id }), i());
            try {
                await e2.Z2(t.id, {}, { joinSource: eT.Q4z.GAME_PROFILE_COMMUNITIES, loadId: o }, [
                    f.A.GAME_PROFILE_COMMUNITIES,
                ]);
            } catch (e) {
                (0, e0._)(e);
                return;
            }
            let e = e8.Ay.getCurrentlySelectedChannelId(t.id);
            null != e &&
                e3.default.setGameProfilePendingReturn({
                    gameId: l.id,
                    channelId: e,
                    tab: y.COMMUNITIES,
                    source: k.GameProfileSources.CommunityPreviewReturn,
                });
        }, [t.id, a, i, o, l.id]),
        u = n === tw.LIST ? tQ : t8;
    return (0, r.jsx)(u, {
        guild: t,
        presenceCount: t.presenceCount,
        memberCount: t.memberCount,
        ariaLabel: c
            ? em.intl.formatToPlainString(em.t.AEfs1D, { guildName: t.name })
            : em.intl.formatToPlainString(em.t.TUZ50q, { guildName: t.name }),
        onClick: d,
    });
}
function t3() {
    var e;
    let t,
        n,
        { game: l } = F(),
        { data: i, isLoading: a } = ts(l.id),
        o = tD((e) => e.layout),
        {
            locales: c,
            filteredGuilds: d,
            showLocaleFilter: u,
        } = ((e = l.id),
        (t = tu(e)),
        {
            locales: (n = s.useMemo(() => eQ().uniq((i ?? []).map((e) => e.preferredLocale).filter(ek.Vq)), [i])),
            filteredGuilds: s.useMemo(
                () => (i ?? []).filter((e) => null == e.preferredLocale || !t.has(e.preferredLocale)),
                [i, t],
            ),
            showLocaleFilter: n.length >= 2,
        }),
        m = o === tw.LIST,
        h = m ? t1 : t0,
        g = a && (null == i || 0 === i.length);
    return (0, r.jsxs)(eZ.Ch, {
        className: tZ.XG,
        children: [
            (0, r.jsx)("div", { className: tZ.xY, "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: tZ.uW,
                children: (0, r.jsx)(t_, {
                    title: em.intl.string(em.t.r6bvTh),
                    trailing: (0, r.jsxs)("div", {
                        className: tZ.AA,
                        children: [u && (0, r.jsx)(tX, { locales: c }), (0, r.jsx)(tB, {})],
                    }),
                    children: (0, r.jsx)("div", {
                        className: m ? tZ.p_ : tZ.Vg,
                        children: g
                            ? eQ()
                                  .range(8)
                                  .map((e) => (0, r.jsx)(h, { animationDelayMs: 150 * e }, e))
                            : d.map((e) => (0, r.jsx)(t2, { guild: e, layout: o }, e.id)),
                    }),
                }),
            }),
        ],
    });
}
var t4 = n(707554),
    t6 = n(369606),
    t5 = n(775602),
    t9 = n(21161),
    t7 = n(400492),
    ne = n(541830),
    nt = n(459746);
let nn = "1552821538409939044";
var nl = n(175213);
let ni = n(892799);
function na(e) {
    let { ref: t } = e,
        { game: n } = F(),
        l = (function (e) {
            let [t] = s.useState(() => Math.random());
            return s.useMemo(() => {
                let n = e.getBannerURL(1400);
                if (null != n) return n;
                let l = e.screenshotUrls?.length ?? 0;
                return 0 === l ? null : e.getScreenshotURL(Math.floor(t * l), 1400);
            }, [1400, e, t]);
        })(n);
    return (0, tf.uJ)(l)
        ? null
        : (0, r.jsxs)("div", {
              ref: t,
              children: [
                  (0, r.jsx)("div", { className: nl.y1, style: { backgroundImage: `url("${l}")` } }),
                  (0, r.jsx)("div", { className: nl.N4 }),
              ],
          });
}
function nr() {
    let { game: e } = F(),
        t = (e.genres ?? []).map(ne.du).join(", ");
    return (0, tf.uJ)(t) ? null : (0, r.jsx)(B.E, { variant: "text-md/normal", color: "text-muted", children: t });
}
function ns(e) {
    let { rank: t } = e;
    return (0, r.jsxs)("div", {
        className: nl.Qc,
        children: [
            (0, r.jsx)(t6.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, r.jsx)(B.E, {
                variant: "text-xs/bold",
                color: "none",
                children: em.intl.formatToPlainString(em.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function no() {
    return (0, r.jsx)(nc, { className: nl._M, imageClassName: nl.xe });
}
function nc(e) {
    let { className: t, imageClassName: n } = e,
        { game: l } = F(),
        i = (0, r.jsx)(nt.Ay, { game: l, className: n, size: nt.wu.LARGE });
    return l.id !== nn
        ? (0, r.jsx)("div", { className: t, children: i })
        : (0, r.jsx)(nd, { className: t, children: i });
}
function nd(e) {
    let { children: t, className: n } = e,
        { createMultipleConfettiAt: l } = s.useContext(t9.x),
        i = (0, m.bG)([t5.Ay], () => t5.Ay.useReducedMotion),
        a = s.useRef({ count: 0, lastTime: 0 });
    return (0, r.jsx)(t$.D, {
        className: d()(n, nl.b3),
        "aria-label": em.intl.string(em.t.M2b74O),
        onClick: function (e) {
            let t = Date.now(),
                n = a.current,
                r = t - n.lastTime > 1e4 ? 1 : n.count + 1;
            if (((a.current = { count: r, lastTime: t }), 3 === r)) {
                if (((a.current = { count: 0, lastTime: 0 }), !i)) {
                    let t = e.currentTarget.getBoundingClientRect();
                    l(t.left + t.width / 2, t.top + t.height / 2);
                }
                (0, t7.Ak)("discodo");
            }
        },
        children: t,
    });
}
let nu = function () {
    let { game: e, isTwoColumn: t } = F(),
        n = e.name;
    return (0, r.jsxs)("div", {
        className: nl.ap,
        children: [
            t && (0, r.jsx)(nc, { className: nl.Tf, imageClassName: nl.w$ }),
            (0, r.jsxs)("div", {
                className: nl.lu,
                children: [
                    null != e.l30Rank && (0, r.jsx)(ns, { rank: e.l30Rank }),
                    (0, r.jsxs)("div", {
                        className: nl.$,
                        children: [
                            (0, r.jsx)(tm.D, { variant: "heading-xxl/semibold", children: n }),
                            e.id === nn &&
                                (0, r.jsx)("img", {
                                    src: ni,
                                    className: nl.IU,
                                    alt: "",
                                    "aria-hidden": "true",
                                    draggable: !1,
                                }),
                        ],
                    }),
                    (0, r.jsx)(nr, {}),
                ],
            }),
        ],
    });
};
var nm = n(638495),
    nh = n(871123),
    ng = n(439303),
    nx = n(317560),
    nf = n(467884),
    np = n(480713),
    nj = n(449543),
    nv = n(197935),
    nA = n(761812);
function nE(e) {
    return e;
}
function nI(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: nA.B, children: t });
}
function nb(e) {
    let { skuIds: t, analyticsLocations: n, onCardClick: l } = e,
        i = (0, np.l)("social_layer_storefront_card_row"),
        a = s.useMemo(() => {
            if (null != l)
                return (e, t) => {
                    let { skuId: n, applicationId: i } = t;
                    (e.preventDefault(), l(n, i));
                };
        }, [l]);
    return null == t || 0 === t.length
        ? null
        : i
          ? (0, r.jsx)(nv.A, {
                gap: "md",
                "aria-label": `${em.intl.string(em.t["kocF+6"])}`,
                items: t,
                getItemKey: nE,
                disableFocusRingScope: !0,
                renderItem: (e, t, l) =>
                    (0, r.jsx)(nI, {
                        children: (0, r.jsx)(nf.Ay, {
                            positionInSection: l,
                            skuId: e,
                            variant: nf.s6.SMALL,
                            analyticsLocations: n,
                            onClick: a,
                            listItemProps: t,
                        }),
                    }),
            })
          : (0, r.jsx)(nj.A, {
                gap: "md",
                "aria-label": em.intl.string(em.t["kocF+6"]),
                children: t.map((e, t) =>
                    (0, r.jsx)(
                        nI,
                        {
                            children: (0, r.jsx)(nf.Ay, {
                                positionInSection: t,
                                skuId: e,
                                variant: nf.s6.SMALL,
                                analyticsLocations: n,
                                onClick: a,
                            }),
                        },
                        `${e}-${t}`,
                    ),
                ),
            });
}
var nN = n(369435);
function nS(e) {
    let { children: t, gap: n = "md" } = e;
    return (0, r.jsx)("div", { "aria-hidden": !0, className: d()(nN.n, { [nN.C]: 16 === n }), children: t });
}
var nC = n(936785),
    nk = n(403581),
    ny = n(812095),
    nT = n(647474),
    nL = n(162536);
function nR(e) {
    let { promotion: t, className: n } = e,
        l = t.endsAt;
    if ((0, eB.tm)(l)) return null;
    let i = "nitro" === t.flavor,
        a = i ? nk.t : t.Icon;
    return (0, r.jsx)(nT.A, {
        className: d()(nL.vK, n),
        color: i ? "nitro-pink" : void 0,
        children: (0, r.jsxs)("div", {
            className: nL.Qs,
            children: [
                null != a && (0, r.jsx)(a, { size: "xs", color: "currentColor", className: nL.Kk }),
                (0, r.jsx)(B.E, { variant: "text-sm/normal", color: "currentColor", children: (0, ny.U)(t.text) }),
            ],
        }),
    });
}
var nM = n(521058);
function nO() {
    let { storefrontPromotion: e } = F();
    if (null == e || "nitro" !== e.flavor) return null;
    let { endsAt: t, flavor: n, pdp: l, rewardRequirements: i, storefront: a } = e;
    if (null == a || (0, tf.uJ)(a.headerText)) return null;
    let s = {
        Icon: (0, nC.LZ)(l?.icon ?? null),
        text: a.headerText,
        tooltip: null,
        endsAt: (0, nC.RD)(t),
        flavor: n,
        rewardRequirements: i,
    };
    return (0, r.jsx)(nR, { className: nM.v, promotion: s });
}
let nG = [0, 1, 2, 3],
    nP = { placement: ng.Ye.GAME_PROFILE };
function n_() {
    return (0, r.jsx)(tP, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, r.jsx)(nS, { children: nG.map((e) => (0, r.jsx)(nI, { children: (0, r.jsx)(nf.yf, {}) }, e)) }),
    });
}
function nw(e) {
    let { selectTab: t } = e,
        n = (0, nm.k)(),
        {
            trackAction: l,
            socialLayerStorefrontRecommendationsData: i,
            socialLayerStorefrontRecommendationsLoading: a,
            hasCommerceTab: o,
            closeModal: c,
        } = F(),
        { analyticsLocations: d } = (0, p.Ay)([f.A.GAME_PROFILE]),
        u = s.useCallback(() => {
            if (i?.application != null) {
                if (o) return void t(y.COMMERCE);
                (l(k.GameProfileTrackActionActions.GameShop),
                    c(),
                    (0, ei.default)({ applicationId: i.application.id }));
            }
        }, [i, l, o, t, c]),
        m = s.useCallback(
            (e, t) => {
                let a = i?.guildId;
                null != a &&
                    (l(k.GameProfileTrackActionActions.GameShopItem),
                    (0, nx.R)({
                        skuId: e,
                        applicationId: t,
                        isStorefront: !1,
                        analyticsLocations: d,
                        contextKey: n,
                        onClose: () => {
                            let { pathname: e, search: n } = location;
                            (0, nh.rG)(e, n, t, a) && c();
                        },
                    }));
            },
            [l, c, d, i, n],
        );
    if (a) return (0, r.jsx)(n_, {});
    if (null == i) return null;
    let { skuIds: h } = i;
    return (0, r.jsxs)(t_, {
        title: em.intl.string(em.t.WDdlUb),
        onClickViewAll: u,
        children: [
            (0, r.jsx)(nO, {}),
            (0, r.jsx)(ng.E9, {
                newValue: nP,
                children: (0, r.jsx)(nb, { skuIds: h, analyticsLocations: d, onCardClick: m }),
            }),
        ],
    });
}
var nD = n(621466),
    nV = n(966697),
    nF = n(346055),
    nU = n(460905),
    nY = n(776231),
    nB = n(46054),
    nW = n(58703),
    nz = n(317097),
    nH = n(155718),
    nX = n(387408),
    n$ = n(731068),
    nK = n(59318),
    nJ = n(320095),
    nq = n(708676),
    nQ = n(383233),
    nZ = n(998218);
let n0 = /^#{1,3}\s+(.+)$/,
    n1 = /^https?:\/\/\S+$/;
var n8 = n(158390),
    n2 = n(103348),
    n3 = n(371794);
let n4 = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function n6(e) {
    e5.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
                await (0, n3.aP)({
                    url: eT.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: C.default.locale, include_pricing: !0, with_bundled_skus: !0 },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.map(n2.A.fromServer),
            n = t.flatMap((e) => e.skuIds);
        (e5.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: n, products: t }),
            e5.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: n }));
    } catch (t) {
        e5.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function n5(e) {
    let t = ((await e6.Bo.get({ url: eT.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !n4.has(t),
    );
    e5.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let n9 = (0, m.UT)(T.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => T.A.getSimilarGames(e) ?? null,
    load: (e) => n5(e),
    retryConfig: { backoff: () => new n8.A(5 * ti.A.Millis.SECOND, 5 * ti.A.Millis.MINUTE) },
    failureStaleAfter: ti.A.Seconds.MINUTE,
});
async function n7(e, t) {
    e5.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let n = {};
        t?.limit != null && (n.limit = t.limit);
        let l = (await e6.Bo.get({ url: eT.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
        e5.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: l.messages.map((e) => {
                let t,
                    n,
                    l = (0, nX.A)((0, nJ.rh)(e)),
                    i = l.content,
                    a = (function (e) {
                        if ((0, nQ._c)(e))
                            return e.components
                                .filter((e) => e.type === nH.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || n1.test(t.trim())
                            ? ((function (e) {
                                  let t = e.embeds[0];
                                  if (null == t) return null;
                                  let n = [];
                                  return (
                                      null != t.rawTitle && n.push(`# ${t.rawTitle}`),
                                      null != t.rawDescription && n.push(t.rawDescription),
                                      n.length > 0 ? n.join("\n") : null
                                  );
                              })(e) ?? t)
                            : t;
                    })(l),
                    r = (function (e) {
                        if ((0, nQ._c)(e)) {
                            let t = e.components.find((e) => e.type === nH.I5.MEDIA_GALLERY),
                                n = t?.items[0]?.media;
                            if (null != n) {
                                let t = (0, n$.FE)(n);
                                if ("INVALID" !== t) return { ...n, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, nK.tT)(e.content_type));
                        if (null != t) return (0, n$.Rr)(t, e);
                        let n = e.attachments.find((e) => (0, nK.XB)(e.content_type));
                        if (null != n) return (0, n$.Rr)(n, e);
                        let l = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (l?.thumbnail != null)
                            return (0, n$.oU)(
                                l.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === l) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, n$.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, n$.oU)(
                                a.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === a) },
                                },
                                "IMAGE",
                            );
                    })(l),
                    { title: s, body: o } =
                        ((t = a.indexOf("\n")),
                        (n = (-1 === t ? a : a.slice(0, t)).match(n0)),
                        null != n
                            ? { title: n[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    c = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    d =
                        a === i || (0, nQ._c)(l)
                            ? void 0
                            : (function (e) {
                                  let t = e.embeds[0];
                                  if (null == t) return;
                                  let n = t.author?.name,
                                      l = t.author?.iconProxyURL ?? t.author?.iconURL,
                                      i = t.footer?.text ?? t.provider?.name,
                                      a = t.footer?.iconProxyURL ?? t.footer?.iconURL,
                                      r = t.url,
                                      s = null != t.color ? (0, nz.$k)(t.color, !0) : void 0;
                                  if (null != n || null != i || null != r)
                                      return {
                                          authorName: n,
                                          authorIconUrl: l,
                                          providerName: i,
                                          providerIconUrl: a,
                                          url: r,
                                          color: s,
                                      };
                              })(l);
                return {
                    id: l.id,
                    media: r,
                    title: s,
                    body: o,
                    content: a,
                    timestamp: e.timestamp,
                    reactionCount: c,
                    embedSource: d,
                    poll: l.poll,
                };
            }),
            channelId: l.channel_id ?? void 0,
            guildId: l.guild_id ?? void 0,
        });
    } catch (t) {
        e5.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var le = n(284009),
    lt = n.n(le),
    ln = n(376728),
    ll = n(976860);
async function li(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    lt()(a.length > 0, "analyticsLocationStack must have at least one location");
    let r = a[a.length - 1],
        s = null;
    if ((null != t && ((n = t.guild?.id), (s = new Set(t.guild?.features))), null == n)) return;
    let o = e1.A.getGuild(n);
    if (o?.joinedAt == null)
        if (null == s || s.has(eT.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, e2.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: eT.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await ln.Ay.acceptInvite({ inviteKey: t.code, context: { location: r }, skipOnboarding: !0 }));
    (0, ll.pX)(eT.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var la = n(806244),
    lr = n(165648);
function ls(e, t) {
    return nB.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function lo(e) {
    return e.id;
}
function lc() {
    return (0, r.jsxs)(tE, {
        className: la.s7,
        children: [
            (0, r.jsx)(tA, { className: la.o$ }),
            (0, r.jsxs)("div", {
                className: la.UF,
                children: [(0, r.jsx)(tA, { className: la.iX }), (0, r.jsx)(tA, { className: la.jt })],
            }),
        ],
    });
}
function ld(e, t) {
    var n;
    let l,
        i = (0, nY.kr)(364 * (0, nY.mZ)());
    return (
        (n = Math.round(i / t)),
        (null == (l = nZ.A.toURLSafe(e))
            ? null
            : (l.searchParams.append("format", "webp"),
              null != i && l.searchParams.append("width", i.toString()),
              null != n && l.searchParams.append("height", n.toString()),
              l.toString())) ?? e
    );
}
function lu(e) {
    let { message: t, src: n, aspectRatio: l } = e,
        [i, a] = s.useState(!1),
        o = s.useCallback(() => a(!0), []);
    return null == t.media
        ? null
        : (0, r.jsx)(nV.y, {
              readyState: i ? eT.Rv1.READY : eT.Rv1.LOADING,
              aspectRatio: l,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, r.jsx)("img", {
                  src: n,
                  className: la.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: o,
              }),
          });
}
function lm(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: i } = e,
        a = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, nD.vq)(e.target, HTMLAnchorElement) ||
                        ((0, nD.vq)(e.target, HTMLSpanElement) && (0, nD.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return l(t.id);
            },
            [l, t.id],
        ),
        o = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        c = t.media?.proxyUrl ?? t.media?.url,
        u = null != c ? ld(c, o) : void 0,
        { embedSource: m } = t;
    return null == m
        ? null
        : (0, r.jsx)(t$.D, {
              ...i,
              className: la.Nr,
              onClick: a,
              children: (0, r.jsxs)(nF.M, {
                  className: la.zI,
                  children: [
                      null != m.url &&
                          (0, r.jsx)(B.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: la.Ow,
                              children: m.url,
                          }),
                      (0, r.jsxs)("div", {
                          className: la._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, r.jsxs)("div", {
                                      className: la.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, r.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: la.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, r.jsx)(B.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-strong",
                                              children: m.authorName,
                                          }),
                                      ],
                                  }),
                              null != t.media &&
                                  null != u &&
                                  (0, r.jsx)("div", {
                                      className: la.ax,
                                      children: (0, r.jsx)(lu, { message: t, src: u, aspectRatio: o }),
                                  }),
                              null != t.title &&
                                  (0, r.jsx)(tm.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: la.DD,
                                      children: ls(t.title, n),
                                  }),
                              t.body.length > 0 &&
                                  (0, r.jsxs)("div", {
                                      className: d()(la.h_, lr.PT),
                                      children: [ls(t.body, n), (0, r.jsx)("div", { className: la.fm })],
                                  }),
                              (0, r.jsxs)("div", {
                                  className: la.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, r.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: la.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, r.jsxs)(B.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, nW.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, r.jsxs)("div", {
                                              className: la.a5,
                                              children: [
                                                  (0, r.jsx)(nU.n, { size: "xs", color: "currentColor" }),
                                                  (0, r.jsx)(B.E, {
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
let lh = s.memo(function (e) {
    let { message: t, channelId: n } = e;
    return (0, r.jsxs)(nF.M, {
        className: la.zI,
        children: [
            null != t.title &&
                (0, r.jsx)(tm.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: la.DD,
                    children: ls(t.title, n),
                }),
            t.body.length > 0 &&
                (0, r.jsxs)("div", {
                    className: d()(la.h_, lr.PT),
                    children: [ls(t.body, n), (0, r.jsx)("div", { className: la.fm })],
                }),
            (0, r.jsxs)("div", {
                className: la.ov,
                children: [
                    (0, r.jsx)(B.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, nW.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, r.jsxs)("div", {
                            className: la.a5,
                            children: [
                                (0, r.jsx)(nU.n, { size: "xs", color: "currentColor" }),
                                (0, r.jsx)(B.E, {
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
function lg(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: i } = e,
        a = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, nD.vq)(e.target, HTMLAnchorElement) ||
                        ((0, nD.vq)(e.target, HTMLSpanElement) && (0, nD.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return l(t.id);
            },
            [l, t.id],
        ),
        o = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        c = t.media?.proxyUrl ?? t.media?.url,
        d = null != c ? ld(c, o) : void 0;
    return (0, r.jsxs)(t$.D, {
        ...i,
        className: la.Nr,
        onClick: a,
        children: [
            null != t.media &&
                null != d &&
                (0, r.jsx)("div", {
                    className: la.Vl,
                    children: (0, r.jsx)(lu, { message: t, src: d, aspectRatio: o }),
                }),
            (0, r.jsx)(lh, { message: t, channelId: n }),
        ],
    });
}
function lx(e) {
    let { message: t, onCardClick: n, listItemProps: l } = e,
        { poll: i } = t,
        a = s.useCallback(() => n(t.id), [n, t.id]);
    if (null == i) return null;
    let o = i.answers.slice(0, 3),
        c = i.answers.length - o.length;
    return (0, r.jsx)(t$.D, {
        ...l,
        className: la.Nr,
        onClick: a,
        children: (0, r.jsxs)(nF.M, {
            className: la.zI,
            children: [
                (0, r.jsx)(tm.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: la.MH,
                    children: i.question.text,
                }),
                (0, r.jsxs)("div", {
                    className: la.xd,
                    children: [
                        o.map((e) =>
                            (0, r.jsx)(
                                "div",
                                {
                                    className: la.Nf,
                                    children: (0, r.jsx)(B.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: la.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        c > 0 &&
                            (0, r.jsx)(B.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: la.PF,
                                children: em.intl.format(em.t["mv/nIa"], { count: c }),
                            }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: la.ov,
                    children: (0, r.jsx)(B.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: em.intl.format(em.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, nq.J)(i.expiry) ?? em.intl.string(em.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function lf(e) {
    return null != e.message.poll
        ? (0, r.jsx)(lx, { ...e })
        : null != e.message.embedSource
          ? (0, r.jsx)(lm, { ...e })
          : (0, r.jsx)(lg, { ...e });
}
let lp = s.memo(function (e) {
    let { getScrollOffset: t } = e,
        { analyticsLocations: n } = (0, p.Ay)(),
        { game: l, invite: i, hasDiscordWebsite: a, closeModal: o, trackAction: c } = F(),
        d = l.id,
        {
            messages: u,
            guildId: h,
            channelId: g,
            loading: x,
            hasFetched: f,
        } = (function (e) {
            let {
                data: t,
                hasFetched: n,
                isFetching: l,
            } = (0, m.cf)([T.A], () => ({
                data: null != e ? T.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && T.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && T.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, s.useEffect)(() => {
                    null == e || n || T.A.isAnnouncementsFetching(e) || n7(e, { limit: 8 });
                }, [e, n, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l, hasFetched: n }
            );
        })(d),
        j = (0, np.l)("game_profile_announcements"),
        v = s.useCallback(() => {
            let e = i?.guild?.id ?? h;
            null != e &&
                null != g &&
                (c(k.GameProfileTrackActionActions.Announcements),
                e3.default.setGameProfilePendingReturn({ gameId: d, channelId: g, initialScrollOffset: t() }),
                o(),
                li({ invite: i, guildId: e, channelId: g, analyticsLocationStack: n }));
        }, [c, o, t, i, h, g, n, d]),
        A = s.useCallback(
            (e) => {
                let l = i?.guild?.id ?? h;
                null != l &&
                    null != g &&
                    (c(k.GameProfileTrackActionActions.AnnouncementsItem),
                    e3.default.setGameProfilePendingReturn({ gameId: d, channelId: g, initialScrollOffset: t() }),
                    o(),
                    li({ invite: i, guildId: l, channelId: g, messageId: e, analyticsLocationStack: n }));
            },
            [c, o, t, i, h, g, n, d],
        ),
        E = null != g && u.length > 0;
    return (!f || x) && a
        ? (0, r.jsx)(tP, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, r.jsx)(nS, {
                  gap: 16,
                  children: eQ()
                      .range(3)
                      .map((e) => (0, r.jsx)(lc, {}, e)),
              }),
          })
        : E
          ? (0, r.jsx)(t_, {
                title: em.intl.string(em.t.B0BV3Y),
                onClickViewAll: v,
                children: j
                    ? (0, r.jsx)(nv.A, {
                          gap: 16,
                          items: u,
                          getItemKey: lo,
                          itemClassName: la.hu,
                          renderItem: (e, t) =>
                              (0, r.jsx)(lf, { message: e, channelId: g, onCardClick: A, listItemProps: t }, e.id),
                      })
                    : (0, r.jsx)(nj.A, {
                          gap: 16,
                          children: u.map((e) => (0, r.jsx)(lf, { message: e, channelId: g, onCardClick: A }, e.id)),
                      }),
            })
          : null;
});
var lj = n(505779);
(n(323874), n(14289), n(35956));
var lv = n(989441);
let lA = {
        appStore: {
            websiteCategories: [lj.V1.IPHONE, lj.V1.IPAD],
            websiteHostnames: lj.FU,
            distributor: lv.D.APPLE_APP_STORE,
            buildUrl: (e) => `https://${lj.FU["0"]}/app/id${e}`,
        },
        googlePlay: {
            websiteCategories: [lj.V1.ANDROID],
            websiteHostnames: lj.SX,
            distributor: lv.D.GOOGLE_PLAY,
            buildUrl: (e) => `https://${lj.SX["0"]}/store/apps/details?id=${encodeURIComponent(e)}`,
        },
    },
    lE = new Set(
        Object.values(lA).flatMap((e) => {
            let { websiteCategories: t } = e;
            return t;
        }),
    );
function lI(e, t) {
    let n;
    return (
        (function (e, t) {
            for (let n of t.websiteCategories) {
                let l = e.websites.find((e) => {
                    let { category: l, url: i } = e;
                    if (l !== n) return !1;
                    try {
                        let e = new URL(i);
                        return (
                            ("http:" === e.protocol || "https:" === e.protocol) &&
                            t.websiteHostnames.includes(e.hostname)
                        );
                    } catch {
                        return !1;
                    }
                });
                if (null != l) return l;
            }
            return null;
        })(e, t) ??
        (null != (n = e.thirdPartySkus.find((e) => e.distributor === t.distributor)?.id)
            ? { category: t.websiteCategories[0], url: t.buildUrl(n) }
            : null)
    );
}
var lb = n(808380);
let lN = [lb.Y.DESKTOP, "mobile", lb.Y.XBOX, lb.Y.PLAYSTATION, lb.Y.NINTENDO, lb.Y.ROBLOX];
var lS = n(28863),
    lC = n(975807),
    lk = n(194362);
function ly() {
    let { game: e, trackAction: t } = F(),
        n = s.useCallback(async () => {
            t(k.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, lk.a)(eT.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, lC.A)(e);
        }, [t]),
        l = s.useCallback((e) => (0, r.jsx)(lS.Anchor, { onClick: n, children: e }), [n]);
    return e.linkedApplications?.some((e) => e.type === nH.Mh.OFFICIAL)
        ? null
        : (0, r.jsx)(B.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: em.intl.format(em.t.KAjfKl, { claimLink: l }),
          });
}
var lT = n(998445),
    lL = n(274997),
    lR = n(80500),
    lM = n(319745),
    lO = n(488225),
    lG = n(967492),
    lP = n(72265),
    l_ = n(454346),
    lw = n(610509),
    lD = n(575888),
    lV = n(924895),
    lF = n(37948),
    lU = n(693558);
let lY = { size: "xs", colorClass: lU.w };
function lB(e) {
    let { website: t } = e,
        { trackAction: n } = F(),
        l = (0, lF.A)(),
        {
            action: i,
            icon: a,
            title: o,
        } = (function (e, t) {
            switch (e.category) {
                case lj.V1.OFFICIAL:
                    return {
                        icon: (0, r.jsx)(lT.GlobeEarthIcon, { ...t }),
                        action: k.GameProfileTrackActionActions.WebsiteLink,
                        title: em.intl.string(em.t.fOUKvg),
                    };
                case lj.V1.TWITTER:
                    return {
                        icon: (0, r.jsx)(lL.p, { ...t }),
                        action: k.GameProfileTrackActionActions.XLink,
                        title: em.intl.string(em.t.INic4y),
                    };
                case lj.V1.YOUTUBE:
                    return {
                        action: k.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, r.jsx)(lR.C, { ...t }),
                        title: em.intl.string(em.t.lNmxbE),
                    };
                case lj.V1.FACEBOOK:
                    return {
                        icon: (0, r.jsx)(lM.Z, { ...t }),
                        action: k.GameProfileTrackActionActions.FacebookLink,
                        title: em.intl.string(em.t.FjyREK),
                    };
                case lj.V1.INSTAGRAM:
                    return {
                        icon: (0, r.jsx)(lO.L, { ...t }),
                        action: k.GameProfileTrackActionActions.InstagramLink,
                        title: em.intl.string(em.t["cgR+IK"]),
                    };
                case lj.V1.BLUESKY:
                    return {
                        icon: (0, r.jsx)(lG.a, { ...t }),
                        action: k.GameProfileTrackActionActions.BlueskyLink,
                        title: em.intl.string(em.t["D/PHq5"]),
                    };
                case lj.V1.REDDIT:
                    return {
                        icon: (0, r.jsx)(lP.T, { ...t }),
                        action: k.GameProfileTrackActionActions.RedditLink,
                        title: em.intl.string(em.t["Hgb+fc"]),
                    };
                case lj.V1.TWITCH:
                    return {
                        icon: (0, r.jsx)(l_.a, { ...t }),
                        action: k.GameProfileTrackActionActions.TwitchLink,
                        title: em.intl.string(em.t["7xtz4G"]),
                    };
                case lj.V1.IPHONE:
                case lj.V1.IPAD:
                    return {
                        icon: (0, r.jsx)(lw.z, { ...t }),
                        action: k.GameProfileTrackActionActions.AppStoreLink,
                        title: em.intl.string(em.t.LVy7Ug),
                    };
                case lj.V1.ANDROID:
                    return {
                        icon: (0, r.jsx)(lD.O, { ...t }),
                        action: k.GameProfileTrackActionActions.GooglePlayStoreLink,
                        title: em.intl.string(em.t.V6rllO),
                    };
                case lj.V1.ROBLOX:
                    return {
                        icon: (0, r.jsx)(lV.H, { ...t }),
                        action: k.GameProfileTrackActionActions.RobloxStoreLink,
                        title: em.intl.string(em.t["pJ+P+h"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, lY),
        c = s.useCallback(() => {
            (n(i), l(t.url));
        }, [i, l, n, t.url]);
    return (0, r.jsx)(J.m, {
        text: o,
        children: (0, r.jsx)(t$.D, { onClick: c, className: lU.y, title: o, children: a }),
    });
}
var lW = n(31300),
    lz = n(646270),
    lH = n(802516),
    lX = n(22363),
    l$ = n(418524);
let lK = {
    [lb.Y.DESKTOP]: lW.k,
    mobile: lz.u,
    [lb.Y.XBOX]: lH.Y,
    [lb.Y.PLAYSTATION]: lX.X,
    [lb.Y.NINTENDO]: l$.M,
    [lb.Y.ROBLOX]: lV.H,
};
function lJ(e) {
    let { platform: t } = e,
        n = (function (e) {
            switch (e) {
                case lb.Y.DESKTOP:
                    return em.intl.string(em.t.KT6uCJ);
                case "mobile":
                    return em.intl.string(em.t["0DvssQ"]);
                case lb.Y.XBOX:
                    return em.intl.string(em.t.DDWUJp);
                case lb.Y.PLAYSTATION:
                    return em.intl.string(em.t.fzMz2s);
                case lb.Y.NINTENDO:
                    return em.intl.string(em.t.AMW8je);
                case lb.Y.ROBLOX:
                    return em.intl.string(em.t.MPURhG);
            }
        })(t),
        l = lK[t];
    return (0, r.jsx)(
        J.m,
        {
            text: n,
            ariaHidden: !0,
            children: (0, r.jsx)("span", { role: "img", "aria-label": n, children: (0, r.jsx)(l, { size: "xs" }) }),
        },
        t,
    );
}
var lq = n(424994),
    lQ = n(623828);
function lZ() {
    return (0, r.jsx)(B.E, { variant: "text-sm/normal", color: "text-subtle", children: em.intl.string(em.t.GruYxV) });
}
let l0 = function () {
    let { game: e } = F(),
        t = (0, th.c)("GameProfileGameDetails"),
        n = s.useMemo(() => e.genres.map(ne.du).join(", "), [e]),
        l = e.getCompanyByRole(nH.wk.PUBLISHER),
        i = e.getCompanyByRole(nH.wk.DEVELOPER),
        a = l.map((e) => e.name).join(", "),
        o = i.map((e) => e.name).join(", "),
        c = e.firstReleaseDate,
        d = s.useMemo(() => {
            let t = new Set(e.platforms);
            (t.has(lb.Y.MACOS) || t.has(lb.Y.LINUX)) && t.add(lb.Y.DESKTOP);
            let n = t.has(lb.Y.IOS) || t.has(lb.Y.ANDROID);
            return lN.filter((e) => ("mobile" === e ? n : t.has(e)));
        }, [e.platforms]),
        u = s.useMemo(() => {
            let t = e.websites.filter((e) => {
                    let { category: t } = e;
                    return lj.pF.includes(t) && !lE.has(t);
                }),
                n = Object.values(lA)
                    .map((t) => lI(e, t))
                    .filter(ek.Vq);
            return t.sort((e, t) => lj.pF.indexOf(e.category) - lj.pF.indexOf(t.category)).concat(n);
        }, [e]),
        m = !(0, tf.uJ)(n),
        h = !(0, tf.uJ)(a),
        g = !(0, tf.uJ)(o),
        x = !(0, tf.uJ)(c),
        f = d.length > 0,
        p = u.length > 0 && !u.every((e) => (0, tf.uJ)(e.url));
    return (0, r.jsxs)("div", {
        className: lQ.uW,
        children: [
            (0, r.jsx)("div", {
                className: lQ.Gf,
                children: (0, r.jsx)(tm.D, {
                    variant: t ? "text-md/medium" : "heading-sm/semibold",
                    color: t ? "text-subtle" : "text-strong",
                    children: em.intl.string(em.t["7OjmmH"]),
                }),
            }),
            (0, r.jsxs)("div", {
                className: lQ.kL,
                children: [
                    (0, r.jsxs)("div", {
                        className: lQ.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== e.genres.length ? em.intl.string(em.t.pDgwYB) : em.intl.string(em.t.mjFKqn),
                            }),
                            m
                                ? (0, r.jsx)(B.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: lQ.Gu,
                                      children: n,
                                  })
                                : (0, r.jsx)(lZ, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lQ.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== l.length ? em.intl.string(em.t.Hc7Enk) : em.intl.string(em.t["4Byy/G"]),
                            }),
                            h
                                ? (0, r.jsx)(B.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: lQ.Gu,
                                      children: a,
                                  })
                                : (0, r.jsx)(lZ, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lQ.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== i.length ? em.intl.string(em.t.KATEJB) : em.intl.string(em.t.na3PT0),
                            }),
                            g
                                ? (0, r.jsx)(B.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: lQ.Gu,
                                      children: o,
                                  })
                                : (0, r.jsx)(lZ, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lQ.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t.H3mPDT),
                            }),
                            x
                                ? (0, r.jsx)(B.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: lQ.Gu,
                                      children: nW.i$(new Date(c), "LL"),
                                  })
                                : (0, r.jsx)(lZ, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lQ.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: d.length > 1 ? em.intl.string(em.t.PNqxNe) : em.intl.string(em.t["UxAag+"]),
                            }),
                            f
                                ? (0, r.jsx)("div", {
                                      className: lQ.Gu,
                                      children: d.map((e) => (0, r.jsx)(lJ, { platform: e }, e)),
                                  })
                                : (0, r.jsx)(lZ, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lQ.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t["Oj3o1/"]),
                            }),
                            p
                                ? (0, r.jsx)("div", {
                                      className: lQ.Gu,
                                      children: u.map((e) => (0, r.jsx)(lB, { website: e }, e.url)),
                                  })
                                : (0, r.jsx)(lZ, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lQ.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t["BwQ+9e"]),
                            }),
                            (0, r.jsx)(B.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: lQ.Gu,
                                children: em.intl.format(em.t.XPFZVl, { igdbLink: lq.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: lQ.OQ, children: (0, r.jsx)(ly, {}) }),
        ],
    });
};
var l1 = n(141628),
    l8 = n(289363),
    l2 = n(793919);
function l3() {
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: l2.uW,
        children: [
            (0, r.jsx)(tA, { className: l2.dU, width: "30%" }),
            (0, r.jsxs)(tE, {
                className: l2.nV,
                children: [
                    (0, r.jsx)("div", { className: l2.sB, children: (0, r.jsx)(l8.default, { isLoading: !0 }) }),
                    (0, r.jsxs)("div", {
                        className: l2.hQ,
                        children: [
                            (0, r.jsxs)("div", {
                                className: l2.Yv,
                                children: [(0, r.jsx)(tA, { width: "55%" }), (0, r.jsx)(tA, { width: "85%" })],
                            }),
                            (0, r.jsx)(tI, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function l4(e) {
    let { analyticsLocations: t } = e,
        n = (0, th.c)("GameProfileLinkAccount"),
        {
            trackAction: l,
            fetchedAuthorization: i,
            hasAlreadyLinked: a,
            canStartAuthorization: o,
            startAuthorization: c,
            connectionApp: d,
            hasOfficialApplication: u,
            officialApplicationFetchFailed: h,
        } = F(),
        g = (0, m.bG)([D.default], () => D.default.getCurrentUser()),
        x = s.useCallback(() => {
            (l(k.GameProfileTrackActionActions.LinkAccount), c({ analyticsLocations: t }));
        }, [l, c, t]);
    return !u || h || null == g
        ? null
        : null == d || (o && !i)
          ? (0, r.jsx)(l3, {})
          : !o || a
            ? null
            : (0, r.jsxs)("div", {
                  className: l2.uW,
                  children: [
                      (0, r.jsx)(tm.D, {
                          className: l2.Gf,
                          variant: n ? "text-md/medium" : "heading-sm/semibold",
                          color: n ? "text-subtle" : "text-strong",
                          children: em.intl.string(em.t["VDAhr+"]),
                      }),
                      (0, r.jsxs)("div", {
                          className: l2.kL,
                          children: [
                              (0, r.jsx)("div", {
                                  className: l2.sB,
                                  children: (0, r.jsx)(l8.default, { application: d }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: l2.hQ,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: l2.FS,
                                          children: [
                                              (0, r.jsx)(tm.D, {
                                                  variant: "heading-md/semibold",
                                                  color: "text-default",
                                                  children: em.intl.formatToPlainString(em.t.hUbQT2, {
                                                      gameName: d.name,
                                                  }),
                                              }),
                                              (0, r.jsx)(B.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: em.intl.string(em.t["JKqu+4"]),
                                              }),
                                          ],
                                      }),
                                      (0, r.jsx)($.$, {
                                          variant: "secondary",
                                          icon: l1.A,
                                          text: em.intl.string(em.t.jynBQ5),
                                          onClick: x,
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
}
var l6 = n(80687),
    l5 = n(534573),
    l9 = n(248643),
    l7 = n(256905),
    ie = n(44788),
    it = n(191096),
    il = n(90721),
    ii = n(635377);
let ia = new (n.n(ii)())({ max: 100 });
function ir() {
    let e = new Map();
    return (ia.forEach((t, n) => e.set(n, t)), e);
}
var is = n(140128);
function io(e) {
    let { item: t, index: n } = e;
    return `${n}-${t.url}`;
}
function ic(e, t) {
    return (0, l5.Ec)(e, { size: t, keepAspectRatio: !0, format: tx.QB ? "webp" : null });
}
let id = s.memo(function (e) {
        let { url: t, alt: n, className: l } = e,
            { dimensions: i, recordDimensions: a } = (function () {
                let [e, t] = s.useState(ir);
                return {
                    dimensions: e,
                    recordDimensions: s.useCallback(
                        (e, n) => {
                            let l = (function (e, t) {
                                if (
                                    !Number.isFinite(e.width) ||
                                    !Number.isFinite(e.height) ||
                                    e.width <= 0 ||
                                    e.height <= 0
                                )
                                    return;
                                if (null == t) return e;
                                let n = t / Math.max(e.width, e.height);
                                return {
                                    width: Math.max(1, Math.round(e.width * n)),
                                    height: Math.max(1, Math.round(e.height * n)),
                                };
                            })(n, void 0);
                            if (null == l) return;
                            let i = ia.get(e) ?? l;
                            (ia.set(e, i),
                                t((t) => {
                                    let n = t.get(e);
                                    return n?.width === i.width && n.height === i.height ? t : new Map(t).set(e, i);
                                }));
                        },
                        [void 0],
                    ),
                };
            })(),
            o = i.get(t),
            c = null != o && o.height > o.width,
            u = s.useCallback(
                (e) => {
                    null != e &&
                        0 !== e.naturalWidth &&
                        0 !== e.naturalHeight &&
                        a(t, { width: e.naturalWidth, height: e.naturalHeight });
                },
                [t, a],
            ),
            m = s.useCallback((e) => u(e.currentTarget), [u]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("img", {
                    ref: u,
                    src: ic(t, 106),
                    className: d()(is.r4, !c && is.l5),
                    alt: "",
                    draggable: !1,
                    onLoad: m,
                }),
                (0, r.jsx)("img", { ref: u, src: ic(t, 900), className: d()(is.c8, c && is.D7, l), alt: n, onLoad: m }),
            ],
        });
    }),
    iu = s.memo(function (e) {
        var t;
        let { item: n, index: l, isSelected: i, isPlaying: a, onSelect: o, gameName: c, listItemProps: u } = e,
            m = s.useCallback(() => o(l), [o, l]),
            h = u?.tabIndex;
        return (0, r.jsx)(t$.D, {
            ...u,
            className: d()(is.JS, i && is.Y4),
            onClick: m,
            children: (0, r.jsxs)("div", {
                className: is.ub,
                children: [
                    (0, r.jsx)("img", {
                        src: ic("VIDEO" === (t = n).type ? (t.poster ?? t.url) : t.url, 106),
                        className: is.xn,
                        alt: em.intl.formatToPlainString(em.t.COYYrn, { game: c }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === n.type &&
                        (0, r.jsx)("div", {
                            className: is.UZ,
                            children: (0, r.jsx)(l6.D, { playing: i && a, size: "sm", tabIndex: h }),
                        }),
                ],
            }),
        });
    }),
    im = s.memo(function (e) {
        let {
                item: t,
                reducedMotion: n,
                autoPlay: l,
                videoRef: i,
                mediaPlayerRef: a,
                onPlay: o,
                onPause: c,
                onFullscreenChange: d,
            } = e,
            u = s.useRef(null);
        return (
            (0, il.A)({ videoRef: i, canvasRef: u, enabled: !n }),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    !n && (0, r.jsx)("canvas", { ref: u, className: is.HW, "aria-hidden": "true" }),
                    (0, r.jsx)("div", {
                        className: is.tN,
                        children: (0, r.jsx)(l9.A, {
                            src: t.url,
                            poster: t.poster ?? "",
                            width: t.width ?? 1920,
                            height: t.height ?? 1080,
                            naturalWidth: t.width ?? 1920,
                            naturalHeight: t.height ?? 1080,
                            maxWidth: 1 / 0,
                            maxHeight: 1 / 0,
                            autoPlay: l,
                            autoMute: !0,
                            useFullWidth: !0,
                            responsive: !0,
                            renderLinkComponent: ie.bU,
                            onPlay: o,
                            onPause: c,
                            onFullscreenChange: d,
                            mediaPlayerClassName: is.T9,
                            videoRef: i,
                            mediaPlayerRef: a,
                        }),
                    }),
                ],
            })
        );
    });
function ih() {
    let { game: e, trackAction: t } = F(),
        [n, l] = s.useState(0),
        [i, a] = s.useState(null),
        [o, c] = s.useState(e.screenshotUrls),
        d = s.useRef(null),
        u = s.useRef(null),
        h = (0, m.bG)([t5.Ay], () => t5.Ay.useReducedMotion),
        { obscured: g } = (0, it.I3)(),
        x = (0, np.l)("game_profile_media");
    o !== e.screenshotUrls && (c(e.screenshotUrls), l(0));
    let f = s.useMemo(
            () => [
                ...(e.trailers ?? []).map((e) => {
                    let t = (0, n3.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, n3.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                ...(e.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })),
            ],
            [e.trailers, e.screenshotUrls],
        ),
        p = s.useMemo(() => f.map((e, t) => ({ item: e, index: t })), [f]),
        j = f.length > 0 ? Math.min(n, f.length - 1) : 0,
        v = f[j],
        A = v?.type === "VIDEO",
        E = s.useCallback(
            (e) => {
                let t = f[j],
                    n = f[e];
                (t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? a(t.url) : a(null), l(e));
            },
            [f, j],
        ),
        [I, b] = s.useState(!1),
        N = s.useRef(null),
        S = s.useCallback(() => {
            t(A ? k.GameProfileTrackActionActions.ClickTrailer : k.GameProfileTrackActionActions.ClickImage);
            let e = d.current,
                n = N.current,
                i = null != e && !e.paused,
                a = e?.muted ?? !0,
                r = e?.currentTime ?? 0;
            n?.setPlay(!1);
            let s = f.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === j;
                    return { ...e, autoPlay: !!n && i, autoMute: !n || a, initialTimeSec: n ? r : void 0, videoRef: u };
                }
                return e;
            });
            (0, l7.R)({
                items: s,
                startingIndex: j,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: l,
                onClose: () => {
                    let e = u.current,
                        t = N.current,
                        n = null != e ? !e.paused : i;
                    (e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted))
                            : n && t?.setPlay(!0),
                        b(n));
                },
            });
        }, [t, f, j, A]),
        C = s.useCallback(() => b(!0), []),
        y = s.useCallback(() => b(!1), []),
        T = s.useCallback(() => a(null), []),
        L = s.useCallback(
            (e) => {
                e && S();
            },
            [S],
        );
    return 0 === f.length
        ? null
        : (0, r.jsxs)("div", {
              className: is.kL,
              children: [
                  A
                      ? (0, r.jsx)("div", {
                            className: is.ND,
                            children: (0, r.jsx)(
                                im,
                                {
                                    item: v,
                                    reducedMotion: h,
                                    autoPlay: !h && !g,
                                    videoRef: d,
                                    mediaPlayerRef: N,
                                    onPlay: C,
                                    onPause: y,
                                    onFullscreenChange: L,
                                },
                                `${j}-${v.url}`,
                            ),
                        })
                      : (0, r.jsxs)("div", {
                            className: is.wp,
                            children: [
                                null != i &&
                                    !h &&
                                    (0, r.jsx)(
                                        "div",
                                        {
                                            className: is.Jy,
                                            onAnimationEnd: T,
                                            children: (0, r.jsx)(id, { url: i, alt: "" }),
                                        },
                                        i,
                                    ),
                                (0, r.jsx)("div", { className: is.QN }),
                                (0, r.jsx)(t$.D, {
                                    className: is.gv,
                                    onClick: S,
                                    children: (0, r.jsx)("div", {
                                        className: is.cs,
                                        children: (0, r.jsx)(
                                            id,
                                            {
                                                url: v.url,
                                                className: is.Jf,
                                                alt: em.intl.formatToPlainString(em.t.COYYrn, { game: e.name }),
                                            },
                                            v.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  x
                      ? (0, r.jsx)(nv.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            items: p,
                            getItemKey: io,
                            renderItem: (t, n) => {
                                let { item: l, index: i } = t;
                                return (0, r.jsx)(
                                    iu,
                                    {
                                        item: l,
                                        index: i,
                                        isPlaying: I,
                                        isSelected: i === j,
                                        onSelect: E,
                                        gameName: e.name,
                                        listItemProps: n,
                                    },
                                    `${i}-${l.url}`,
                                );
                            },
                        })
                      : (0, r.jsx)(nj.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            children: f.map((t, n) =>
                                (0, r.jsx)(
                                    iu,
                                    {
                                        item: t,
                                        index: n,
                                        isPlaying: I,
                                        isSelected: n === j,
                                        onSelect: E,
                                        gameName: e.name,
                                    },
                                    `${n}-${t.url}`,
                                ),
                            ),
                        }),
              ],
          });
}
var ig = n(49381),
    ix = n(223273);
function ip(e, t, n) {
    if (null == e || null == t || t < 10) return ix.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? ix.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? ix.vI.VERY_POSITIVE
              : ix.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return ix.vI.MOSTLY_POSITIVE;
    if (e >= 40) return ix.vI.MIXED;
    if (e >= 20) return ix.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return ix.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return ix.vI.VERY_NEGATIVE;
    return ix.vI.OVERWHELMINGLY_NEGATIVE;
}
var ij = n(792216);
let iv = {
    appStore: { getTitle: () => em.intl.string(em.t.LVy7Ug), action: k.GameProfileTrackActionActions.AppStoreReviews },
    googlePlay: {
        getTitle: () => em.intl.string(em.t.V6rllO),
        action: k.GameProfileTrackActionActions.GooglePlayReviews,
    },
};
function iA(e) {
    switch (e) {
        case ix.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case ix.vI.OVERWHELMINGLY_POSITIVE:
        case ix.vI.VERY_POSITIVE:
        case ix.vI.POSITIVE:
        case ix.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case ix.vI.MIXED:
            return "steam-review-text-mixed";
        case ix.vI.MOSTLY_NEGATIVE:
        case ix.vI.NEGATIVE:
        case ix.vI.VERY_NEGATIVE:
        case ix.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var iE =
        (((a = {})[(a.MIGHTY = 1)] = "MIGHTY"),
        (a[(a.STRONG = 2)] = "STRONG"),
        (a[(a.FAIR = 3)] = "FAIR"),
        (a[(a.WEAK = 4)] = "WEAK"),
        a),
    iI = n(778591);
function ib(e) {
    let { rating: t, strokeColor: n } = e,
        l = 2 * Math.PI * 16,
        i = Math.min(Math.max(t, 0), 100) / 100,
        a = i * l;
    return (0, r.jsx)("svg", {
        width: 30,
        height: 30,
        viewBox: "0 0 36 36",
        style: { transform: `rotate(${((1 - i) * 360) / 2}deg)` },
        children: (0, r.jsx)("circle", {
            r: 16,
            cx: 18,
            cy: 18,
            fill: "none",
            stroke: n,
            strokeWidth: 2.4,
            strokeDasharray: `${a} ${l - a}`,
        }),
    });
}
var iN = n(315189);
let iS = { appStore: lw.z, googlePlay: lD.O };
function iC(e) {
    let { review: t } = e,
        { trackAction: n } = F(),
        l = (0, lF.A)(),
        i = iS[t.key],
        { action: a, url: o } = t,
        c = s.useCallback(() => {
            (n(a), l(o));
        }, [a, l, n, o]);
    return (0, r.jsx)(t$.D, {
        onClick: c,
        className: iN.nf,
        role: "link",
        "aria-label": t.accessibilityLabel,
        children: (0, r.jsxs)("div", {
            className: iN.tF,
            children: [
                (0, r.jsxs)("div", {
                    className: iN.hU,
                    children: [
                        (0, r.jsx)(i, { size: "sm", color: eP.A.colors.ICON_STRONG.css }),
                        (0, r.jsx)(tm.D, { variant: "heading-sm/medium", color: "text-strong", children: t.title }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iN.nK,
                    children: [
                        (0, r.jsx)(B.E, {
                            variant: "text-xs/medium",
                            color: "text-strong",
                            className: iN.yX,
                            children: t.ratingText,
                        }),
                        (0, r.jsx)(B.E, {
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
function ik(e) {
    let { url: t, title: n, rating: l, ratingCount: i, tooltipVariant: a = "all" } = e,
        { trackAction: o } = F(),
        c = (0, lF.A)(),
        d = ip(l, i, "recent" === a),
        u = iA(d),
        m = s.useCallback(() => {
            (o(k.GameProfileTrackActionActions.SteamReviews), c(t));
        }, [c, o, t]);
    return (0, r.jsx)(t$.D, {
        onClick: m,
        className: iN.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.YNC5Di),
        children: (0, r.jsxs)("div", {
            className: iN.tF,
            children: [
                (0, r.jsxs)("div", {
                    className: iN.hU,
                    children: [
                        (0, r.jsx)(ig.N, { size: "sm", color: eP.A.colors.ICON_STRONG.css }),
                        (0, r.jsx)(tm.D, { variant: "heading-sm/medium", color: "text-strong", children: n }),
                    ],
                }),
                (0, r.jsx)(
                    J.m,
                    {
                        text:
                            d === ix.vI.NO_USER_REVIEWS
                                ? em.intl.string(em.t.CLMt8J)
                                : em.intl
                                      .format(
                                          "recent" === a
                                              ? em.t.TzvC0k
                                              : "localized" === a
                                                ? em.t.EOfrwm
                                                : em.t["lzANJ/"],
                                          { rating: l, rating_count: i?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, r.jsxs)("div", {
                            className: iN.nK,
                            children: [
                                (0, r.jsx)(B.E, {
                                    variant: "text-xs/medium",
                                    color: u,
                                    className: iN.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case ix.vI.NO_USER_REVIEWS:
                                                return em.intl.string(em.t.CLMt8J);
                                            case ix.vI.OVERWHELMINGLY_POSITIVE:
                                                return em.intl.string(em.t["75sx1S"]);
                                            case ix.vI.VERY_POSITIVE:
                                                return em.intl.string(em.t["EkOVg+"]);
                                            case ix.vI.POSITIVE:
                                                return em.intl.string(em.t.ZUkFtr);
                                            case ix.vI.MOSTLY_POSITIVE:
                                                return em.intl.string(em.t.M7Z09a);
                                            case ix.vI.MIXED:
                                                return em.intl.string(em.t.c8yuHR);
                                            case ix.vI.MOSTLY_NEGATIVE:
                                                return em.intl.string(em.t.H0MSjG);
                                            case ix.vI.NEGATIVE:
                                                return em.intl.string(em.t.vpLrgz);
                                            case ix.vI.VERY_NEGATIVE:
                                                return em.intl.string(em.t["5spYuX"]);
                                            case ix.vI.OVERWHELMINGLY_NEGATIVE:
                                                return em.intl.string(em.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(d),
                                }),
                                null != i &&
                                    d !== ix.vI.NO_USER_REVIEWS &&
                                    (0, r.jsx)(B.E, {
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
function iy(e) {
    let { url: t } = e,
        { game: n, trackAction: l } = F(),
        { reviews: i } = n,
        a = i?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        o = a.tier,
        c = a.topCriticRating ?? -1,
        d = a.topCriticRatingCount ?? -1,
        u = (c <= 0 || d <= 0) && null == o,
        m = (0, lF.A)(),
        h = s.useCallback(() => {
            (l(k.GameProfileTrackActionActions.OpenCriticReviews), m(t));
        }, [m, l, t]);
    return (0, r.jsx)(t$.D, {
        onClick: h,
        className: iN.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.aLNBAw),
        children: (0, r.jsxs)("div", {
            className: iN.Ur,
            children: [
                (0, r.jsx)(tm.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: em.intl.string(em.t["UxvER+"]),
                }),
                (0, r.jsxs)("div", {
                    className: iN.WA,
                    children: [
                        null != o ? (0, r.jsx)(iT, { tier: o }) : null,
                        null != o && c > 0 && d > 0 ? (0, r.jsx)(iL, { rating: c, tier: o }) : null,
                        u
                            ? (0, r.jsx)(B.E, {
                                  variant: "text-xs/medium",
                                  color: iA(ix.vI.NO_USER_REVIEWS),
                                  children: em.intl.string(em.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function iT(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case iE.MIGHTY:
                    return em.intl.string(em.t.aZej2g);
                case iE.STRONG:
                    return em.intl.string(em.t.MLxnSg);
                case iE.FAIR:
                    return em.intl.string(em.t["3f19KA"]);
                case iE.WEAK:
                    return em.intl.string(em.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case iE.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case iE.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case iE.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case iE.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, r.jsx)(
        J.m,
        {
            text: n,
            children: (0, r.jsx)("div", {
                className: iN.TE,
                children: (0, r.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function iL(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: i } = (function (e) {
            let t = "";
            switch (e) {
                case iE.MIGHTY:
                    t = "#fc430a";
                    break;
                case iE.STRONG:
                    t = "#9e00b4";
                    break;
                case iE.FAIR:
                    t = "#4aa1ce";
                    break;
                case iE.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, r.jsx)(
        J.m,
        {
            text: em.intl.string(em.t.Ub4YR1),
            children: (0, r.jsxs)("div", {
                className: iN.TE,
                style: { backgroundColor: i },
                children: [
                    (0, r.jsx)(ib, { rating: t, strokeColor: l }),
                    (0, r.jsx)(B.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: iN.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let iR = function () {
    let { game: e } = F(),
        t = (0, th.c)("GameProfileReviews"),
        n = (0, iI.I)(e.id),
        l = e.opencriticUrl,
        {
            steamReview: i,
            showSteamReview: a,
            showRecentSteamReview: o,
            showLocalizedReview: c,
            primarySteamRating: d,
            primarySteamRatingCount: u,
            primarySteamTitleKey: m,
            mobileStoreReviews: h,
        } = s.useMemo(() => {
            let t = e.reviews?.steam,
                l = e.steamReleaseStatus !== ij.Y.RETIRED_ABANDONED && null != n,
                i = ip(t?.recentRating, t?.recentRatingCount, !0),
                a = l && i !== ix.vI.NO_USER_REVIEWS,
                r =
                    null != t &&
                    null != t.localizedRating &&
                    null != t.localizedRatingCount &&
                    null != t.ratingCount &&
                    t.localizedRatingCount >= 200 &&
                    t.ratingCount >= 2e3;
            return {
                steamReview: t,
                showSteamReview: l,
                showRecentSteamReview: a,
                showLocalizedReview: r,
                primarySteamRating: r ? t?.localizedRating : t?.rating,
                primarySteamRatingCount: r ? t?.localizedRatingCount : t?.ratingCount,
                primarySteamTitleKey: r ? em.t["aWb+V4"] : em.t["8e4LiB"],
                mobileStoreReviews: Object.entries(iv).flatMap((t) => {
                    var n;
                    let l,
                        i,
                        [a, r] = t,
                        s = e.reviews?.[a],
                        o = s?.rating,
                        c = s?.ratingCount;
                    if (null == o || null == c) return [];
                    let d = lI(e, lA[a]);
                    return null != d
                        ? [
                              ((n = d.url),
                              (l = r.getTitle()),
                              (i = new Intl.NumberFormat(em.intl.currentLocale, {
                                  minimumFractionDigits: 1,
                                  maximumFractionDigits: 1,
                              }).format(o)),
                              {
                                  key: a,
                                  url: n,
                                  title: l,
                                  ratingText: em.intl.format(em.t["zdL4/T"], { rating: i }).toString(),
                                  ratingCountText: em.intl.format(em.t.u1m2hs, { rating_count: c }).toString(),
                                  accessibilityLabel: em.intl
                                      .format(em.t["63jSRx"], { store: l, rating: i, rating_count: c })
                                      .toString(),
                                  action: r.action,
                              }),
                          ]
                        : [];
                }),
            };
        }, [e, n]),
        g =
            (e.steamReleaseStatus !== ij.Y.RETIRED_ABANDONED || h.length > 0) &&
            e.reviews?.opencritic != null &&
            null != e.opencriticUrl;
    return a || g || 0 !== h.length
        ? (0, r.jsxs)("div", {
              className: iN.uW,
              children: [
                  (0, r.jsx)("div", {
                      className: iN.Gf,
                      children: (0, r.jsx)(tm.D, {
                          variant: t ? "text-md/medium" : "heading-sm/semibold",
                          color: t ? "text-subtle" : "text-strong",
                          children: em.intl.string(em.t.GaAQXP),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: iN.kL,
                      children: [
                          o && null != n
                              ? (0, r.jsx)("div", {
                                    className: iN.WH,
                                    children: (0, r.jsx)(ik, {
                                        url: n,
                                        title: em.intl.string(em.t.MQGNsN),
                                        rating: i?.recentRating,
                                        ratingCount: i?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          a && null != n
                              ? (0, r.jsx)("div", {
                                    className: iN.WH,
                                    children: (0, r.jsx)(ik, {
                                        url: n,
                                        title: em.intl.string(m),
                                        rating: d,
                                        ratingCount: u,
                                        tooltipVariant: c ? "localized" : "all",
                                    }),
                                })
                              : null,
                          h.map((e) =>
                              (0, r.jsx)("div", { className: iN.WH, children: (0, r.jsx)(iC, { review: e }) }, e.key),
                          ),
                          g && null != l
                              ? (0, r.jsx)("div", { className: iN.WH, children: (0, r.jsx)(iy, { url: l }) })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var iM = n(815996),
    iO = n(722258),
    iG = n(905276),
    iP = n(561769),
    i_ = n(484469),
    iw = n(57020),
    iD = n(682301);
let iV = [];
var iF = n(758836),
    iU = n(399872);
let iY = [0, 1, 2, 3, 4];
function iB(e) {
    return e.skuId;
}
function iW(e) {
    let { product: t, aspectRatio: n, listItemProps: l } = e,
        { skuId: i } = t,
        { flattenProductVariants: a, prioritizedCurrency: o, standalonePreview: c } = s.useContext(iP.v3),
        { trackAction: d } = F(),
        u = s.useRef(null),
        m = s.useCallback(
            (e) => {
                (d(k.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (u.current = e.currentTarget),
                    (0, iO.B)({
                        skuId: i,
                        analyticsLocations: [f.A.GAME_PROFILE],
                        analyticsSource: f.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, iw.A)({ product: t }),
                        returnRef: u,
                    }));
            },
            [d, i, t],
        ),
        h = s.useMemo(
            () => ({
                flattenProductVariants: a ?? !0,
                prioritizedCurrency: o,
                standalonePreview: c,
                productOverride: t,
            }),
            [a, o, c, t],
        );
    return (0, r.jsx)(iP.v3.Provider, {
        value: h,
        children: (0, r.jsx)(iG.A, {
            skuId: i,
            aspectRatio: n,
            cardClassName: iU.N,
            onClickCard: m,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: l,
        }),
    });
}
function iz() {
    return (0, r.jsx)(i_.A, {});
}
function iH() {
    let { game: e, closeModal: t, trackAction: n } = F(),
        { products: l, isLoading: i } = (function (e) {
            let {
                    skuIds: t,
                    hasFetched: n,
                    isFetching: l,
                } = (function (e) {
                    let {
                        hasFetched: t,
                        isFetching: n,
                        skuIds: l,
                    } = (0, m.cf)([T.A], () => ({
                        hasFetched: null != e && T.A.hasShopCollectionBeenFetched(e),
                        isFetching: null != e && T.A.isShopCollectionFetching(e),
                        skuIds: null != e ? T.A.getShopCollectionSkuIds(e) : void 0,
                    }));
                    return (
                        (0, s.useEffect)(() => {
                            null == e || t || T.A.isShopCollectionFetching(e) || n6(e);
                        }, [e, t]),
                        { skuIds: l ?? iV, hasFetched: t, isFetching: n }
                    );
                })(e),
                i = (0, iD.hv)(t, { flattenVariants: !0 }),
                a = (0, s.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                r = t.some((e) => i[e]?.state === "loading");
            return { products: a, isLoading: null != e && (!n || l || (t.length > 0 && r)) };
        })(e.shopCollectionIds?.[0]),
        a = s.useCallback(() => {
            (n(k.GameProfileTrackActionActions.DiscordCollectiblesShop),
                t(),
                (0, iM.Cz)({
                    analyticsLocations: [f.A.GAME_PROFILE],
                    analyticsSource: f.A.GAME_PROFILE,
                    tab: iF.G2.CATALOG,
                }));
        }, [n, t]),
        o = (0, np.l)("game_profile_shop_carousel");
    return i
        ? (0, r.jsx)(tP, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, r.jsx)(nS, { children: iY.map((e) => (0, r.jsx)(iz, {}, e)) }),
          })
        : 0 === l.length
          ? null
          : (0, r.jsx)(t_, {
                title: em.intl.string(em.t["5DYPT8"]),
                onClickViewAll: a,
                children: o
                    ? (0, r.jsx)(nv.A, {
                          gap: "md",
                          items: l,
                          getItemKey: iB,
                          renderItem: (e, t) => (0, r.jsx)(iW, { product: e, listItemProps: t }, e.skuId),
                      })
                    : (0, r.jsx)(nj.A, { gap: "md", children: l.map((e) => (0, r.jsx)(iW, { product: e }, e.skuId)) }),
            });
}
var iX = n(611656),
    i$ = n(5399);
let iK = [],
    iJ = [];
var iq = n(987070);
let iQ = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function iZ(e) {
    return e.id;
}
function i0(e) {
    let { className: t } = e;
    return (0, r.jsx)(tE, { className: t, children: (0, r.jsx)(tA, { className: iq.Lg }) });
}
function i1(e) {
    let { game: t, listItemProps: n } = e,
        { navigateToGame: l, trackAction: i } = F(),
        { shouldOpenGameProfile: a, gameId: o } = (0, iX.Ay)({
            gameId: t.id,
            source: k.GameProfileSources.SimilarGames,
        }),
        c = s.useCallback(() => {
            (i(k.GameProfileTrackActionActions.ClickSimilarGame, { similarGameId: t.id }),
                a && null != o && l(o, k.GameProfileSources.SimilarGames));
        }, [t.id, o, i, a, l]);
    return (0, r.jsx)(J.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, r.jsx)(t$.D, {
            ...n,
            className: iq.Nr,
            onClick: c,
            "aria-label": em.intl.formatToPlainString(em.t["8QLQB+"], { gameName: t.name }),
            children: (0, r.jsx)(nt.Ay, {
                game: t,
                className: iq.xe,
                size: nt.wu.SMALL,
                imageSize: 256,
                loadingPlaceholder: (0, r.jsx)(i0, { className: iq.uz }),
            }),
        }),
    });
}
function i8() {
    let { game: e } = F(),
        { isFetching: t, similarGames: n } = (function (e) {
            let t = !n4.has(e),
                { data: n, isLoading: l, error: i } = n9(e, t),
                a = t && null != n ? n : iK;
            (0, b.x)(a);
            let r = (0, m.bG)(
                    [e4.A],
                    () => a.some((e) => null == e4.A.getGame(e) && !e4.A.hasNoData(e) && !e4.A.didFetchingFail(e)),
                    [a],
                ),
                s = (0, m.yK)(
                    [e4.A, D.default],
                    () => {
                        let e = D.default.getCurrentUser()?.nsfwAllowed;
                        return a
                            .map((e) => e4.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => (0, iX.T_)(t) && !(0, O.b)(t, e) && (0, i$.zu)(t));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == n) || l || r, similarGames: s }
                : { isFetching: !1, similarGames: iJ };
        })(e.id),
        l = (0, np.l)("game_profile_similar_games");
    return t
        ? (0, r.jsx)(tP, {
              showViewAllSkeleton: !1,
              skeletonTitleWidth: 124,
              children: (0, r.jsx)("div", {
                  className: iq.XG,
                  style: iQ,
                  children: (0, r.jsx)(nS, {
                      children: eQ()
                          .range(0, 8)
                          .map((e) => (0, r.jsx)(i0, { className: iq.aZ }, e)),
                  }),
              }),
          })
        : 0 === n.length
          ? null
          : (0, r.jsx)(t_, {
                title: em.intl.string(em.t["6rLyQB"]),
                children: (0, r.jsx)("div", {
                    className: iq.XG,
                    style: iQ,
                    children: l
                        ? (0, r.jsx)(nv.A, {
                              gap: "md",
                              items: n,
                              getItemKey: iZ,
                              itemClassName: iq.cW,
                              renderItem: (e, t) => (0, r.jsx)(i1, { game: e, listItemProps: t }, e.id),
                          })
                        : (0, r.jsx)(nj.A, { gap: "md", children: n.map((e) => (0, r.jsx)(i1, { game: e }, e.id)) }),
                }),
            });
}
n(667532);
var i2 = n(853022);
let i3 = new Set(["1402418703554842694", "356877880938070016"]),
    i4 = [lj.V1.EPICGAMES, lj.V1.STEAM, lj.V1.ROBLOX, lj.V1.BATTLENET, lj.V1.RIOT, lj.V1.MINECRAFT];
function i6(e) {
    return (0, r.jsx)($.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var i5 = n(349361),
    i9 = n(422688),
    i7 = n(505200),
    ae = n(695250);
let at = function (e) {
    switch (e.category) {
        case lj.V1.STEAM:
            return {
                icon: ig.N,
                text: em.intl.string(em.t.FsANs4),
                ariaLabel: em.intl.string(em.t["P+ePTG"]),
                action: k.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case lj.V1.EPICGAMES:
            return {
                icon: i5.r,
                text: em.intl.string(em.t.ZbBMHa),
                ariaLabel: em.intl.string(em.t.BwX0UW),
                action: k.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case lj.V1.ROBLOX:
            return {
                icon: lV.H,
                text: em.intl.string(em.t["pJ+P+h"]),
                ariaLabel: em.intl.string(em.t.tYxpdf),
                action: k.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case lj.V1.BATTLENET:
            return {
                icon: i9.a,
                text: em.intl.string(em.t["A7grp+"]),
                ariaLabel: em.intl.string(em.t.x9at20),
                action: k.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case lj.V1.RIOT:
            return {
                icon: i7.A,
                text: em.intl.string(em.t.h6MapL),
                ariaLabel: em.intl.string(em.t["528nvc"]),
                action: k.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case lj.V1.MINECRAFT:
            return {
                icon: ae.m,
                text: em.intl.string(em.t["HZbmO+"]),
                ariaLabel: em.intl.string(em.t.WWTqYn),
                action: k.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: lH.Y,
                text: em.intl.string(em.t["QpN/Iz"]),
                ariaLabel: em.intl.string(em.t["8JZmmF"]),
                action: k.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
var an = n(242216);
function al(e) {
    let t,
        n,
        l,
        i,
        a,
        r =
            ((t = (0, iI.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eT.d3x.XBOX_GAME_PASS && !(0, tf.uJ)(e.id));
                return t?.id == null ? null : (0, i2.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            s.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== lj.V1.EPICGAMES || !!i3.has(l)) &&
                            (e.category !== lj.V1.STEAM || a !== ij.Y.RETIRED_ABANDONED) &&
                            i4.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === ij.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === lj.V1.STEAM) ||
                    e.push({ category: lj.V1.STEAM, url: t });
                let r = e.sort((e, t) => (e.category === lj.V1.STEAM ? -1 : +(t.category === lj.V1.STEAM)));
                return (null != n && r.unshift({ category: "XBOX_GAME_PASS", url: n }), r);
            }, [t, i, l, a, n]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function ai(e) {
    let { data: t } = e,
        { trackAction: n } = F(),
        l = (0, lF.A)();
    return (0, r.jsx)(i6, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (n(t.action), l(t.url));
        },
    });
}
let aa = function () {
    let { game: e, trackAction: t } = F(),
        { showsStoreLinks: l, storeWebsites: i } = al(e),
        a = s.useMemo(() => i.map(at).filter((e) => null != e), [i]);
    if (!l) return null;
    if (1 === a.length) {
        let [e] = a;
        return (0, r.jsx)(ai, { data: e });
    }
    if (2 === a.length)
        return (0, r.jsxs)("div", {
            className: an.G,
            children: [(0, r.jsx)(ai, { data: a[0] }), (0, r.jsx)(ai, { data: a[1] })],
        });
    let o = (0, r.jsx)(i6, {
        text: em.intl.string(em.t["/hMurx"]),
        "aria-label": em.intl.string(em.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: l, trackAction: i } = e;
                (0, g.openModalLazy)(async () => {
                    let { default: e } = await n.e("307898").then(n.bind(n, 679361));
                    return (n) => (0, r.jsx)(e, { game: t, websiteButtons: l, trackAction: i, ...n });
                });
            })({ game: e, websiteButtons: a, trackAction: t }),
    });
    return i.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, r.jsxs)("div", { className: an.G, children: [(0, r.jsx)(ai, { data: a[0] }), o] })
        : o;
};
var ar = n(123292),
    as = n(318076);
let ao = new Map(
        Object.entries({
            b: { style: "bold" },
            strong: { style: "bold" },
            i: { style: "italic" },
            em: { style: "italic" },
            u: { style: "underline" },
            h1: { heading: "h1", breaks: 2 },
            h2: { heading: "h2", breaks: 2 },
            h3: { heading: "h3", breaks: 2 },
            h4: { heading: "h4", breaks: 2 },
            p: { breaks: 2 },
            blockquote: { breaks: 2 },
            hr: { breaks: 2 },
            div: { breaks: 1 },
            br: { lineBreak: !0 },
            ul: { breaks: 1, list: "unordered" },
            ol: { breaks: 1, list: "ordered" },
            li: { breaks: 1, item: !0 },
            a: { link: !0 },
            span: {},
            small: {},
            sup: {},
            script: { hidden: !0 },
            style: { hidden: !0 },
        }),
    ),
    ac = { bold: !1, italic: !1, underline: !1 },
    ad = /[\uD800-\uDBFF]/,
    au = /^[a-z][a-z0-9:-]*$/,
    am = /^<[a-z][a-z0-9:-]*\s*(?:\/+\s*)?>$/i,
    ah = /^<[a-z][a-z0-9:-]*(?:\s+[a-z0-9:+-]+)*(?:\s*\/+\s*[a-z0-9:+-]+(?:\s+[a-z0-9:+-]+)*)+\s*>$/i,
    ag = /^<\/{2,}[\s/a-z0-9:+-]*>$/i,
    ax = new Set([
        "area",
        "base",
        "basefont",
        "br",
        "col",
        "command",
        "embed",
        "frame",
        "hr",
        "img",
        "input",
        "isindex",
        "keygen",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr",
    ]),
    af = new Set([
        "abbr",
        "address",
        "article",
        "aside",
        "audio",
        "bdi",
        "bdo",
        "body",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "dl",
        "dt",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "html",
        "iframe",
        "ins",
        "kbd",
        "label",
        "legend",
        "main",
        "map",
        "mark",
        "math",
        "menu",
        "meter",
        "nav",
        "noscript",
        "object",
        "optgroup",
        "option",
        "output",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "search",
        "section",
        "select",
        "slot",
        "sub",
        "summary",
        "svg",
        "table",
        "tbody",
        "td",
        "template",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "var",
        "video",
    ]);
function ap(e, t) {
    let n = e.charCodeAt(t);
    return 32 === n || 10 === n || 9 === n || 13 === n || 12 === n;
}
function aj(e, t) {
    let n = e.charCodeAt(t);
    return 32 === n || 9 === n || 12 === n;
}
function av(e) {
    let t = 0;
    for (; t < e.length && ap(e, t);) t++;
    return t;
}
function aA(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = e.length;
    for (; n > t && ap(e, n - 1);) n--;
    return n;
}
function aE(e, t) {
    let n = "",
        l = 0,
        i = t,
        a = -1;
    for (let t = e.indexOf("\n"); -1 !== t; t = e.indexOf("\n", t + 1)) {
        let r = a + 1,
            s = !0;
        for (let n = r; n < t; n++)
            if (!aj(e, n)) {
                s = !1;
                break;
            }
        (i > 0 && s ? ((n += e.slice(l, r)), i < 2 && (n += "\n"), (l = t + 1), i++) : (i = 1), (a = t));
    }
    return 0 === l ? e : n + e.slice(l);
}
function aI(e) {
    for (; e.length > 0;) {
        let t = e[e.length - 1],
            n = t.text.length;
        for (; n > 0 && aj(t.text, n - 1);) n--;
        if (n === t.text.length) break;
        if (0 === n) e.pop();
        else {
            t.text = t.text.slice(0, n);
            break;
        }
    }
}
function ab(e) {
    return e.includes("\r") ? e.replace(/\r\n?/g, "\n") : e;
}
function aN(e) {
    let t = e.links[e.links.length - 1];
    return {
        bold: e.styles.bold > 0 || null != e.heading,
        italic: e.styles.italic > 0,
        underline: e.styles.underline > 0,
        ...(null != e.heading ? { heading: e.heading } : {}),
        ...(null != t ? { link: t } : {}),
    };
}
function aS(e, t) {
    var n;
    let l,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ac,
        a = t.indexOf("\n");
    if (e.trailingNewlines > 0 && -1 !== a) {
        let n = !0;
        for (let e = 0; e < a; e++)
            if (!aj(t, e)) {
                n = !1;
                break;
            }
        n && aI(e.runs);
    }
    let r = e.trailingNewlines,
        s = aE(t, e.trailingNewlines);
    if ((0 === e.runs.length && (s = s.slice(av(s))), 0 === s.length)) return;
    ((n = s),
        null != (l = e.runs[e.runs.length - 1]) &&
        l.bold === i.bold &&
        l.italic === i.italic &&
        l.underline === i.underline &&
        l.heading === i.heading &&
        l.link === i.link
            ? (l.text += n)
            : e.runs.push({ ...i, text: n }));
    let o = (function (e) {
        let t = 0;
        for (let n = e.length - 1; n >= 0; n--)
            if (10 === e.charCodeAt(n)) t++;
            else if (!aj(e, n)) break;
        return t;
    })(s);
    e.trailingNewlines = av(s) === s.length ? Math.min(2, r + o) : o;
}
function aC(e) {
    if (0 === e.pendingBreaks) for (let t of e.held) aS(e, t.text, t);
    else
        e.runs.length > 0 &&
            (e.trailingNewlines > 0 && aI(e.runs),
            aS(e, "\n".repeat(Math.max(0, e.pendingBreaks - e.trailingNewlines))));
    ((e.held = []), (e.pendingBreaks = 0));
}
function ak(e, t) {
    let n = e.atBoundary ? av(t) : 0,
        l = aA(t, n),
        i = aN(e);
    (l > n && (aC(e), aS(e, t.slice(n, l), i), (e.atBoundary = e.afterMarker = !1)),
        l < t.length && e.held.push({ ...i, text: t.slice(l) }));
}
function ay(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    null != t &&
        ((n && e.afterMarker) || (e.pendingBreaks = Math.max(e.pendingBreaks, e.itemDepth > 0 ? 1 : t)),
        (e.atBoundary = !0),
        n || (e.afterMarker = !1));
}
let aT = { h1: "heading-lg/bold", h2: "heading-md/bold", h3: "heading-sm/bold", h4: "heading-sm/semibold" };
var aL = n(599126);
let aR = { h1: 2, h2: 3, h3: 4, h4: 5 };
function aM(e) {
    let { italic: t, underline: n } = e;
    return d()({ [aL.T]: t, [aL.V]: n });
}
function aO(e) {
    let { run: t } = e,
        { text: n, bold: l, italic: i, underline: a } = t;
    return l || i || a
        ? (0, r.jsx)(B.E, {
              tag: l ? "strong" : "span",
              variant: l ? "text-md/bold" : "text-md/medium",
              color: "none",
              className: aM(t),
              children: i ? (0, r.jsx)("em", { children: n }) : n,
          })
        : n;
}
function aG(e) {
    let { run: t } = e,
        { text: n, italic: l, underline: i } = t;
    if (!l && !i) return n;
    let a = aM(t);
    return l && i
        ? (0, r.jsx)("u", { className: a, children: (0, r.jsx)("em", { children: n }) })
        : l
          ? (0, r.jsx)("em", { className: a, children: n })
          : (0, r.jsx)("u", { className: a, children: n });
}
function aP(e) {
    let { runs: t } = e;
    return (function (e) {
        let t = [];
        for (let n of e) {
            let e = t[t.length - 1];
            null != e && e.heading === n.heading ? e.runs.push(n) : t.push({ heading: n.heading, runs: [n] });
        }
        return t;
    })(t).map((e, t) =>
        null == e.heading
            ? (0, r.jsx)(s.Fragment, { children: e.runs.map((e, t) => (0, r.jsx)(aO, { run: e }, t)) }, t)
            : (0, r.jsx)(
                  t4.F,
                  {
                      forceLevel: aR[e.heading],
                      children: (0, r.jsx)(tm.D, {
                          variant: aT[e.heading],
                          color: "text-strong",
                          children: e.runs.map((e, t) => (0, r.jsx)(aG, { run: e }, t)),
                      }),
                  },
                  t,
              ),
    );
}
var a_ = n(672572),
    aw = n(94936);
function aD() {
    let e = s.useRef(null),
        { game: t, isTwoColumn: n } = F(),
        l = s.useMemo(
            () =>
                null != t.description
                    ? (function (e) {
                          let t,
                              n,
                              l,
                              { maxLength: i = 1e4 } =
                                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                          if (!e.includes("<") && !e.includes("&")) {
                              let t, n, l;
                              return (
                                  (n = av((t = aE(ab(e), 0)))),
                                  (l = aA(t, n)) > n ? [{ text: t.slice(n, l), ...ac }] : []
                              );
                          }
                          let a = {
                                  markup:
                                      ((t = Math.max(0, Math.floor(i))),
                                      (n = ad.test(e.charAt(t - 1)) ? t - 1 : t),
                                      ab(e.slice(0, n))),
                                  runs: [],
                                  styles: { bold: 0, italic: 0, underline: 0 },
                                  links: [],
                                  lists: [],
                                  itemDepth: 0,
                                  hiddenDepth: 0,
                                  ending: !1,
                                  held: [],
                                  pendingBreaks: 0,
                                  atBoundary: !0,
                                  afterMarker: !1,
                                  trailingNewlines: 0,
                              },
                              r = (function (e) {
                                  let t;
                                  class n extends as.iX {
                                      onclosetag(n, l) {
                                          let i = this.startIndex,
                                              a = e.markup.slice(n, l).toLowerCase();
                                          ((t = void 0), super.onclosetag(n, l));
                                          let r = a.replace(/\/+$/, "");
                                          if (e.hiddenDepth > 0 || t === a || ao.has(r) || ax.has(r) || af.has(r))
                                              return;
                                          let s = e.markup.indexOf(">", l);
                                          -1 !== s && ak(e, e.markup.slice(i, s + 1));
                                      }
                                  }
                                  let l = new n(
                                      {
                                          onopentagname() {
                                              e.unfinishedTag = l.startIndex;
                                          },
                                          onopentag: (t, n) =>
                                              (function (e, t, n, l) {
                                                  var i, a;
                                                  let r;
                                                  e.unfinishedTag = void 0;
                                                  let s = ao.get(t);
                                                  if (e.hiddenDepth > 0 || s?.hidden === !0)
                                                      return void e.hiddenDepth++;
                                                  if (null == s) {
                                                      let n,
                                                          r,
                                                          s = e.markup.slice(l.startIndex, l.endIndex + 1);
                                                      (!au.test(t) ||
                                                          ((am.test(s) || ah.test(s)) &&
                                                              !ax.has(t) &&
                                                              !af.has(t) &&
                                                              ((i = l.endIndex),
                                                              (e.closingTags ??= e.markup.includes("</")
                                                                  ? ((a = e.markup),
                                                                    (n = new Map()),
                                                                    (r = new as.iX(
                                                                        {
                                                                            onclosetag(e) {
                                                                                let t = r.startIndex;
                                                                                a
                                                                                    .slice(t, t + e.length + 2)
                                                                                    .toLowerCase() === `</${e}` &&
                                                                                    n.set(e, t);
                                                                            },
                                                                        },
                                                                        {
                                                                            decodeEntities: !0,
                                                                            recognizeSelfClosing: !0,
                                                                        },
                                                                    )).end(a),
                                                                    n)
                                                                  : new Map()),
                                                              !((e.closingTags.get(t) ?? -1) > i)))) &&
                                                          ak(e, s);
                                                      return;
                                                  }
                                                  (ay(e, s.breaks, !0),
                                                      null != s.style && e.styles[s.style]++,
                                                      !0 === s.link &&
                                                          e.links.push(
                                                              (function (e) {
                                                                  if (null != e)
                                                                      try {
                                                                          let t = new URL(e);
                                                                          return [
                                                                              "http:",
                                                                              "https:",
                                                                              "mailto:",
                                                                          ].includes(t.protocol)
                                                                              ? t.href
                                                                              : void 0;
                                                                      } catch {
                                                                          return;
                                                                      }
                                                              })(n.href),
                                                          ),
                                                      null != s.heading && (e.heading = s.heading),
                                                      null != s.list &&
                                                          e.lists.push({ ordered: "ordered" === s.list, index: 0 }),
                                                      !0 === s.lineBreak &&
                                                          (aC(e),
                                                          aS(e, "\n", null != e.heading ? aN(e) : ac),
                                                          (e.atBoundary = !0),
                                                          (e.afterMarker = !1)),
                                                      !0 === s.item &&
                                                          (aC(e),
                                                          (r = e.lists[e.lists.length - 1]),
                                                          aS(e, r?.ordered === !0 ? `${++r.index}. ` : "\u2022 "),
                                                          e.itemDepth++,
                                                          (e.afterMarker = !0)));
                                              })(e, t, n, l),
                                          onclosetag(n, l) {
                                              (l || (t = n),
                                                  (function (e, t) {
                                                      if (e.ending) return;
                                                      if (e.hiddenDepth > 0) return e.hiddenDepth--;
                                                      let n = ao.get(t);
                                                      null != n &&
                                                          (ay(e, n.breaks),
                                                          null != n.style && e.styles[n.style]--,
                                                          !0 === n.link && e.links.pop(),
                                                          null != n.heading && (e.heading = void 0),
                                                          null != n.list && e.lists.pop(),
                                                          !0 === n.item && e.itemDepth--);
                                                  })(e, n));
                                          },
                                          oncomment() {
                                              let t = e.markup.slice(l.startIndex, l.endIndex + 1);
                                              0 === e.hiddenDepth && ag.test(t) && ak(e, t);
                                          },
                                          ontext(t) {
                                              0 === e.hiddenDepth && ak(e, t);
                                          },
                                      },
                                      { decodeEntities: !0, recognizeSelfClosing: !0 },
                                  );
                                  return l;
                              })(a);
                          (r.write(a.markup),
                              (a.ending = !0),
                              r.end(),
                              "" === (l = a.markup.slice(a.unfinishedTag ?? r.startIndex)) ||
                                  /^<\/?br\/?$/i.test(l) ||
                                  new as.iX({ ontext: (e) => ak(a, e) }, { decodeEntities: !0 }).end(
                                      l.replace(/</g, "&lt;"),
                                  ));
                          for (var s = a.runs; s.length > 0;) {
                              let e = s[s.length - 1];
                              if (((e.text = e.text.slice(0, aA(e.text))), e.text.length > 0)) break;
                              s.pop();
                          }
                          return s;
                      })(t.description)
                    : [],
            [t.description],
        ),
        i = n ? 8 : 5,
        {
            isExpanded: a,
            showToggle: o,
            handleToggleExpanded: c,
        } = (function (e, t, n) {
            let { trackAction: l } = F(),
                [i, a] = s.useState("full");
            s.useEffect(() => {
                let t = e.current;
                if (null == t) return;
                let n = new ResizeObserver(() => {
                    a((e) => ("expanded" === e ? e : t.scrollHeight - t.clientHeight > 1 ? "collapsed" : "full"));
                });
                return (n.observe(t), () => n.disconnect());
            }, [e, t, n]);
            let r = s.useCallback(() => {
                "expanded" === i
                    ? (l(k.GameProfileTrackActionActions.ShowLess), a("collapsed"))
                    : "collapsed" === i && (l(k.GameProfileTrackActionActions.ShowMore), a("expanded"));
            }, [l, i]);
            return {
                isExpanded: "expanded" === i,
                showToggle: "expanded" === i || "collapsed" === i,
                handleToggleExpanded: r,
            };
        })(e, t.description, i);
    if (0 === l.length) return null;
    let u = a ? em.intl.string(em.t["6MwJo/"]) : em.intl.string(em.t.lBeKY2);
    return (0, r.jsxs)("div", {
        className: d()(a_.fi, aw.k),
        children: [
            (0, r.jsx)(B.E, {
                ref: e,
                className: aw.Q,
                lineClamp: a ? void 0 : i,
                variant: "text-md/medium",
                children: (0, r.jsx)(aP, { runs: l }),
            }),
            o && (0, r.jsx)(ar.Q, { onClick: c, text: u, "aria-expanded": a }),
        ],
    });
}
var aV = n(40478),
    aF = n(764948);
let aU = s.memo(function (e) {
    let { analyticsLocations: t, selectTab: n, getScrollOffset: l } = e;
    return (0, r.jsxs)("div", {
        className: aF.V,
        children: [
            (0, r.jsx)(ih, {}),
            (0, r.jsxs)("div", {
                className: aV.h,
                children: [
                    (0, r.jsx)(no, {}),
                    (0, r.jsxs)("div", { className: aV.X, children: [(0, r.jsx)(aa, {}), (0, r.jsx)(aD, {})] }),
                ],
            }),
            (0, r.jsx)(l4, { analyticsLocations: t }),
            (0, r.jsx)(tM, {}),
            (0, r.jsx)(lp, { getScrollOffset: l }),
            (0, r.jsx)(nw, { selectTab: n }),
            (0, r.jsx)(iH, {}),
            (0, r.jsx)(i8, {}),
            (0, r.jsx)(iR, {}),
            (0, r.jsx)(l0, {}),
        ],
    });
});
var aY = n(164135);
let aB = s.memo(function (e) {
    let { selectTab: t, getScrollOffset: n } = e;
    return (0, r.jsxs)("div", {
        className: aY.V,
        children: [
            (0, r.jsxs)("div", { className: aY.B, children: [(0, r.jsx)(ih, {}), (0, r.jsx)(aD, {})] }),
            (0, r.jsx)(lp, { getScrollOffset: n }),
            (0, r.jsx)(nw, { selectTab: t }),
            (0, r.jsx)(iH, {}),
            (0, r.jsx)(i8, {}),
        ],
    });
});
var aW = n(881698),
    az = n(928550),
    aH = n(562708),
    aX = n(414499),
    a$ = n(359549),
    aK = n(139286),
    aJ = n(873516);
function aq(e) {
    let { onCloudPlayClick: t, analyticsLocations: n } = e,
        { closeModal: l, trackAction: i } = F();
    (0, aK.A)({
        name: aH.ImpressionNames.CLOUD_PLAY_CTA,
        type: aH.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let a = s.useCallback(() => {
        (i(k.GameProfileTrackActionActions.CloudPlay), l(), t());
    }, [l, t, i]);
    return (0, r.jsx)(J.m, {
        text: em.intl.string(em.t.JVwWva),
        position: "top",
        children: (0, r.jsx)($.$, {
            icon: aX.h,
            text: em.intl.string(em.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: a,
            fullWidth: !0,
        }),
    });
}
function aQ(e) {
    let { cloudPlayAppId: t, analyticsLocations: n } = e,
        { game: l } = F(),
        i = (0, a$.rC)({ applicationId: t, sourceApplicationId: l.id, analyticsLocations: n });
    return null == i
        ? null
        : (0, r.jsx)("div", {
              className: aJ.k,
              children: (0, r.jsx)(aq, { onCloudPlayClick: i, analyticsLocations: n }),
          });
}
var aZ = n(768626);
function a0(e) {
    let { analyticsLocations: t } = e,
        { game: n } = F(),
        l = (0, aW.A)(n.linkedApplications)?.id,
        [i] = (0, az.L_)(n.getOfficialApplicationId()),
        [a] = (0, az.L_)(n.id),
        { showsStoreLinks: s } = al(n);
    return (0, r.jsxs)("div", {
        className: d()(aZ.pz, a_.fi, s ? aZ.FJ : aZ.dg),
        children: [
            null == l || i || a ? null : (0, r.jsx)(aQ, { cloudPlayAppId: l, analyticsLocations: t }),
            (0, r.jsxs)("div", {
                className: aF.V,
                children: [
                    (0, r.jsx)(aa, {}),
                    (0, r.jsx)(l4, { analyticsLocations: t }),
                    (0, r.jsx)(tM, {}),
                    (0, r.jsx)(iR, {}),
                    (0, r.jsx)(l0, {}),
                ],
            }),
        ],
    });
}
var a1 = n(105865);
function a8(e) {
    let { isTwoColumn: t, selectTab: n, selectionVersion: l, initialScrollOffset: i, analyticsLocations: a } = e,
        o = s.useRef(null),
        c = s.useRef(null),
        d = s.useRef(l);
    (s.useLayoutEffect(() => {
        0 === l && null != i && i > 0 && c.current?.getScrollerNode()?.scrollTo({ top: i, behavior: "instant" });
    }, [i, l]),
        s.useLayoutEffect(() => {
            l !== d.current &&
                (c.current?.getScrollerNode()?.scrollTo({ top: 0, behavior: "instant" }), (d.current = l));
        }, [l]));
    let u = s.useCallback(() => c.current?.getScrollerNode()?.scrollTop ?? 0, []),
        m = s.useCallback((e) => {
            if (null != o.current) {
                let t = Math.max(0, 1 - e.currentTarget.scrollTop / 150);
                o.current.style.opacity = String(t);
            }
        }, []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(na, { ref: o }),
            (0, r.jsxs)(eZ.Ch, {
                ref: c,
                className: a1.XG,
                onScroll: m,
                children: [
                    (0, r.jsx)("div", { className: a1.xY, "aria-hidden": !0 }),
                    (0, r.jsx)(nu, {}),
                    (0, r.jsx)(t4.F, {
                        children: t
                            ? (0, r.jsxs)("div", {
                                  className: a1.jC,
                                  children: [
                                      (0, r.jsx)(aB, { selectTab: n, getScrollOffset: u }),
                                      (0, r.jsx)(a0, { analyticsLocations: a }),
                                  ],
                              })
                            : (0, r.jsx)("div", {
                                  className: a1.b9,
                                  children: (0, r.jsx)(aU, { analyticsLocations: a, selectTab: n, getScrollOffset: u }),
                              }),
                    }),
                ],
            }),
        ],
    });
}
var a2 = n(897503),
    a3 = n(787188);
function a4(e) {
    let { applicationId: t, selectedPageIndex: n } = e;
    return (0, r.jsx)(a2.SocialLayerStorefrontInnerWrapper, {
        applicationId: t,
        pageIndex: n,
        analyticsLocation: f.A.GAME_PROFILE_GAME_SHOP,
        analyticsPlacement: ng.Ye.GAME_PROFILE_GAME_SHOP,
        className: a3.kL,
        scrollerClassName: a3.XG,
        promotionBannerClassName: a3.Rv,
    });
}
var a6 = n(733391),
    a5 = n(171616);
function a9(e) {
    let {
            gameId: t,
            source: n,
            sourceUserId: l,
            transitionState: i,
            onClose: a,
            initialScrollOffset: o,
            initialTab: c,
            navigateToGame: F,
        } = e,
        [U, Y] = s.useState(!0),
        [B, W] = s.useState(null),
        { clientThemesClassName: z } = (0, A.Ay)(),
        H = (0, m.bG)([C.default], () => C.default.locale),
        X = s.useMemo(() => (0, k.generateViewId)(), []),
        { analyticsLocations: $ } = (0, p.Ay)(f.A.GAME_PROFILE),
        K = (0, L.s)(t),
        { data: J } = (0, b.I)(t),
        q = J?.getOfficialApplicationId(),
        Q = (0, R.rG)(J),
        Z = null != q,
        ee = (0, m.bG)([v.A], () => null != q && v.A.didFetchingApplicationFail(q), [q]),
        et = J?.name ?? "",
        en = (0, O.A)(J),
        el = s.useRef(null);
    s.useEffect(() => {
        el.current = B;
    }, [B]);
    let {
            hasAlreadyLinked: ei,
            canStartAuthorization: ea,
            fetched: er,
            startAuthorization: es,
            connectionApp: eo,
        } = (0, j.RD)(J),
        { invite: ec, isMember: eu, isResolving: em } = (0, R.Ay)(J, W),
        { socialLayerStorefrontRecommendationsData: eh, socialLayerStorefrontRecommendationsLoading: eg } = (function (
            e,
        ) {
            let t = D.default.getCurrentUser()?.id,
                n = s.useMemo(() => (null != t ? [t] : []), [t]),
                { storefrontApplicationId: l, isStorefrontConfigLoaded: i } = (0, m.cf)(
                    [P.A],
                    () => ({
                        storefrontApplicationId: null != e ? P.A.getApplicationIdFromDetectableId(e) : void 0,
                        isStorefrontConfigLoaded: "success" === P.A.getConfigFetchState().state,
                    }),
                    [e],
                ),
                a = (0, G.h)(l),
                r = (0, m.bG)([v.A], () => null != l && v.A.didFetchingApplicationFail(l), [l]),
                o = s.useMemo(() => (null != l ? [l] : []), [l]),
                { recommendations: c, status: d } = (0, w.XQ)({
                    applicationIds: o,
                    userIds: n,
                    numItems: 6,
                    source: _.B.USER_PROFILE,
                }),
                u = s.useMemo(
                    () =>
                        null == a || null == a.guildId || "success" !== d || 0 === c.length
                            ? null
                            : { application: a, skuIds: c.map((e) => e.id), guildId: a.guildId },
                    [a, d, c],
                ),
                h = "loading" === d,
                g = "success" === d && c.length > 0 && null == a && !r;
            return {
                socialLayerStorefrontRecommendationsData: u,
                socialLayerStorefrontRecommendationsLoading: i && null != l && (h || g),
            };
        })(t),
        ex = s.useCallback(
            function (e) {
                let { similarGameId: l, communityGuildId: i } =
                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = (0, k.getGuildIdAndVerifiedFromInvite)(el.current);
                (0, k.trackGameProfileAction)({
                    gameName: et,
                    gameId: t,
                    action: e,
                    similarGameId: l,
                    viewId: X,
                    guildId: i ?? a.guildId,
                    isVerified: null == i && a.isVerified,
                    source: n,
                });
            },
            [et, t, X, n],
        );
    ((0, x.Ay)(() => {
        ((0, k.trackGameProfileOpen)({
            source: n,
            viewId: X,
            gameId: t,
            gameName: et,
            authorId: l,
            profileType: k.GameProfileTypes.FullProfile,
        }),
            (0, E.He)());
    }),
        (0, x.Ay)(() => () => {
            let { isVerified: e, guildId: n } = (0, k.getGuildIdAndVerifiedFromInvite)(el.current),
                l = Date.now(),
                i = K.map((e) => {
                    let t = (0, I.JM)(e) ? (0, I.W6)(e, l) : (0, I.aJ)(e, H);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, k.trackGameProfileClose)({
                viewId: X,
                gameId: t,
                gameName: et,
                playedFriendIds: K.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: T.A.getSimilarGames(t) ?? [],
                guildId: n,
                isVerified: e,
            });
        }));
    let ef = s.useCallback((e) => {
            Y(e.contentRect.width >= 800);
        }, []),
        ep = (0, u.w)(ef, [], { fireOnMount: !0 }),
        ej = s.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, g.closeAllModals)(), (0, S.M)()) : a();
            },
            [a],
        ),
        ev = s.useCallback(() => ej(!1), [ej]),
        { navigation: eA, selectionVersion: eE } = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y.OVERVIEW,
                [n, l] = s.useState(t),
                [i, a] = s.useState(0),
                r = s.useCallback((e) => {
                    (l(e), a((e) => e + 1));
                }, []),
                o = s.useCallback(
                    (t) => {
                        if (t !== n) {
                            let n = M[t];
                            null != n && e(n);
                        }
                        r(t);
                    },
                    [n, r, e],
                );
            return { navigation: s.useMemo(() => ({ selectedTab: n, selectTab: o }), [n, o]), selectionVersion: i };
        })(ex, c),
        { selectedTab: eI } = eA,
        eb = (function (e) {
            let { game: t, navigation: n } = e,
                { selectedTab: l, selectTab: i } = n,
                a = t?.id,
                r = t?.getOfficialApplicationId(),
                o = ed({ location: "GameProfileModal" });
            s.useEffect(() => {
                o && (0, a6.Xw)();
            }, [o]);
            let c = (0, m.bG)(
                    [P.A],
                    () =>
                        (null != a ? P.A.getApplicationIdFromDetectableId(a) : void 0) ??
                        (null != r && P.A.hasStorefrontForApplicationId(r) ? r : null),
                    [a, r],
                ),
                d = o && null != c,
                { storefront: u } = (0, a5.A)({ applicationId: d ? c : null }),
                [h, g] = s.useState({ storefrontId: u?.id, index: 0 }),
                [x, f] = s.useState(l);
            l !== x && (f(l), l !== y.COMMERCE && g({ storefrontId: u?.id, index: 0 }));
            let p = h.storefrontId === u?.id && h.index < (u?.pages.length ?? 0) ? h.index : 0,
                j = s.useCallback(
                    (e) => {
                        !d ||
                            e < 0 ||
                            e >= (u?.pages.length ?? 0) ||
                            (g({ storefrontId: u?.id, index: e }), i(y.COMMERCE));
                    },
                    [d, i, u],
                );
            return {
                hasCommerceTab: d,
                storefrontApplicationId: c,
                storefront: u,
                selectedStorefrontPageIndex: p,
                selectStorefrontPage: j,
            };
        })({ game: J, navigation: eA }),
        { hasCommerceTab: eN, storefrontApplicationId: eS, storefront: eC, selectedStorefrontPageIndex: ek } = eb,
        ey = Object.values(eC?.promotions ?? {})[0] ?? null,
        eT = s.useMemo(() => {
            if (null != J)
                return {
                    game: J,
                    isTwoColumn: U,
                    canStartAuthorization: ea,
                    hasAlreadyLinked: ei,
                    fetchedAuthorization: er,
                    startAuthorization: es,
                    connectionApp: eo,
                    invite: ec,
                    hasDiscordWebsite: Q,
                    hasOfficialApplication: Z,
                    officialApplicationFetchFailed: ee,
                    isCommunityInviteResolving: em,
                    isMember: eu,
                    socialLayerStorefrontRecommendationsData: eh,
                    socialLayerStorefrontRecommendationsLoading: eg,
                    hasCommerceTab: eN,
                    storefrontPromotion: ey,
                    closeModal: ej,
                    navigateToGame: F,
                    trackAction: ex,
                    viewId: X,
                };
        }, [J, U, ea, ei, er, es, eo, ec, Q, Z, ee, em, eu, eh, eg, eN, ey, ej, F, ex, X]);
    return null == J
        ? null
        : (0, r.jsx)(p.f5, {
              value: $,
              children: (0, r.jsx)(h.N, {
                  transitionState: i,
                  onClose: a,
                  children: (0, r.jsx)(V.Provider, {
                      value: eT,
                      children: (0, r.jsx)("div", {
                          className: d()(z, a_.kL),
                          ref: ep,
                          children: (0, r.jsxs)(N.A, {
                              obscured: en,
                              onClose: ev,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: d()(a_.sx, { [a_.Tk]: eI !== y.COMMERCE }),
                                      children: (0, r.jsx)(eJ, { navigation: eA, socialLayerStorefront: eb }),
                                  }),
                                  eI === y.OVERVIEW &&
                                      (0, r.jsx)(a8, {
                                          selectTab: eA.selectTab,
                                          selectionVersion: eE,
                                          initialScrollOffset: o,
                                          isTwoColumn: U,
                                          analyticsLocations: $,
                                      }),
                                  eI === y.COMMUNITIES && (0, r.jsx)(t3, {}),
                                  eI === y.COMMERCE && (0, r.jsx)(a4, { applicationId: eS, selectedPageIndex: ek }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
}
let a7 = function (e) {
    let { gameId: t, source: n, sourceUserId: l, initialScrollOffset: i, initialTab: a, ...o } = e,
        [c, d] = s.useState({ gameId: t, source: n, sourceUserId: l, initialScrollOffset: i, initialTab: a }),
        u = c.gameId,
        m = s.useCallback(
            (e, t) => {
                e !== u && ((0, R.UT)(e), d({ gameId: e, source: t }));
            },
            [u],
        );
    return (0, r.jsx)(
        a9,
        {
            gameId: c.gameId,
            source: c.source,
            sourceUserId: c.sourceUserId,
            initialScrollOffset: c.initialScrollOffset,
            initialTab: c.initialTab,
            navigateToGame: m,
            ...o,
        },
        c.gameId,
    );
};
