n.d(t, { default: () => rm });
var l,
    i,
    a,
    r = n(477900),
    s = n(582128),
    o = n.t(s, 2),
    c = n(503698),
    u = n.n(c),
    d = n(535185),
    m = n(855986),
    h = n(521489),
    g = n(192308),
    x = n(964486),
    f = n(793574),
    p = n(688810),
    j = n(660298),
    v = n(587895),
    I = n(590703),
    b = n(396696),
    N = n(583846),
    E = n(454908),
    y = n(570962),
    A = n(38145),
    C = n(773669),
    k = n(409626),
    S = (((l = {}).OVERVIEW = "overview"), (l.COMMUNITIES = "communities"), (l.COMMERCE = "commerce"), l),
    L = n(422069),
    R = n(205184),
    T = n(957807);
let M = { [S.OVERVIEW]: k.Ws.Overview, [S.COMMUNITIES]: k.Ws.Communities, [S.COMMERCE]: k.Ws.GameShop };
var O = n(49491),
    w = n(429913),
    P = n(832163),
    D = n(820847),
    V = n(802494),
    G = n(287809);
let _ = s.createContext(void 0);
function W() {
    let e = s.useContext(_);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var F = n(109112),
    U = n(761508),
    Y = n(834730),
    B = n(858899),
    z = n(265872),
    H = n(165862),
    X = n(477782),
    K = n(821609),
    $ = n(663341),
    J = n(866665),
    q = n(408278),
    Q = n(173936),
    Z = n(365199),
    ee = n(789645),
    et = n(442433),
    en = n(50268),
    el = n(676924),
    ei = n(957565),
    ea = n(859574),
    er = n(695366),
    es = n(792996);
n(321073);
var eo = n(540185),
    ec = n(926268),
    eu = n(53788),
    ed = n(831453),
    em = n(785866),
    eh = n(555704),
    eg = n(741534),
    ex = n(633075),
    ef = n(289173),
    ep = n(851767),
    ej = n(958805),
    ev = n(735321),
    eI = n(116281),
    eb = n(46653),
    eN = n(403362);
async function eE(e) {
    let t = e((0, ev.BF)());
    await ej.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function ey(e) {
    var t;
    let l,
        i,
        { className: a, activeTab: c } = e,
        { game: u, closeModal: d, trackAction: h } = W(),
        x = s.useRef(null),
        p = s.useRef(null),
        j = (0, en.A)({ id: u.id, label: es.intl.string(es.t.SHQGPj) }),
        v =
            ((t = u.id),
            (l = o.useContext(_)?.trackAction),
            (i = s.useCallback(() => {
                null != t &&
                    (l?.(k.Ws.Feedback),
                    (0, g.mM)(async () => {
                        let { default: e } = await Promise.all([
                            n.e(250440),
                            n.e(568035),
                            n.e(733771),
                            n.e(946039),
                            n.e(55266),
                            n.e(627495),
                        ]).then(n.bind(n, 651930));
                        return (n) => (0, r.jsx)(e, { ...n, detected: { gameId: t } });
                    }));
            }, [t, l])),
            null == t
                ? null
                : (0, r.jsx)(X.Dr, {
                      id: "game-profile-something-wrong",
                      label: es.intl.string(es.t.qP2cXd),
                      action: i,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: er.CircleErrorIcon },
                  })),
        I = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, m.bG)([eb.default], () => eb.default.getId()),
                i = s.useMemo(
                    () => [
                        {
                            type: eo.x.FAVORITE_GAMES,
                            addLabel: es.intl.string(es.t.fgmitg),
                            removeLabel: es.intl.string(es.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: ec.HeartIcon,
                        },
                        {
                            type: eo.x.PLAYED_GAMES,
                            addLabel: es.intl.string(es.t["0xIVLR"]),
                            removeLabel: es.intl.string(es.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: eu.ThumbsUpIcon,
                        },
                        {
                            type: eo.x.CURRENT_GAMES,
                            addLabel: es.intl.string(es.t.G0c4En),
                            removeLabel: es.intl.string(es.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: ed.RotateIcon,
                        },
                        {
                            type: eo.x.WANT_TO_PLAY_GAMES,
                            addLabel: es.intl.string(es.t.UuBS4K),
                            removeLabel: es.intl.string(es.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: em.JoystickIcon,
                        },
                    ],
                    [],
                ),
                a = (0, m.yK)([ep.A], () => (null == l ? [] : (ep.A.getUserProfile(l)?.widgets ?? [])), [l]),
                o = (0, eI.A)(),
                c = s.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...o, ...a].filter((e) => e instanceof ex.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(eN.Vq).find((e) => t.has(e)) ?? null;
                }, [o, a, e]),
                u = s.useCallback(
                    async (e, n) => {
                        let l;
                        if (
                            (await eE((i) => {
                                let a = i.filter(ef.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, ev.uA)(a))) return i;
                                    let n = { gameId: t },
                                        r = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new ef.Yy({ ...(a ?? { type: e }), games: r });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    l = new ef.Yy({ ...a, games: e });
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
                        (0, eg.un)({
                            action: n ? "GAME_ADDED" : "GAME_REMOVED",
                            gameId: t,
                            ...i.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [t],
                ),
                d = s.useCallback(
                    async (e) => {
                        let t;
                        if (
                            null == c ||
                            (await eE((n) =>
                                e
                                    ? n.some((e) => e instanceof ex.R && e.applicationId === c)
                                        ? n
                                        : [(t = new ex.R({ applicationId: c })), ...n]
                                    : ((t = n.find((e) => e instanceof ex.R && e.applicationId === c) ?? null),
                                      n.filter((e) => !(e instanceof ex.R && e.applicationId === c))),
                            ),
                            null == t)
                        )
                            return;
                        let n = t;
                        (0, eg.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...n.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [c],
                );
            if (null == l) return null;
            let h = null != e && (0, ev.XX)(e),
                g = [];
            if (null != c) {
                let e = a.some((e) => e instanceof ex.R && e.applicationId === c);
                g.push(
                    (0, r.jsx)(
                        X.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? es.intl.formatToPlainString(es.t.Ktb1n8, { name: n })
                                : es.intl.formatToPlainString(es.t.Xp6iZt, { name: n }),
                            action: () => d(!e),
                            leadingAccessory: { type: "icon", icon: eh.AnalyticsIcon },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (h)
                for (let e of i) {
                    let n = a.filter(ef.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.gameId === t),
                        i = !l && null != n && (0, ev.uA)(n);
                    g.push(
                        (0, r.jsx)(
                            X.Dr,
                            {
                                id: e.menuId,
                                label: l ? e.removeLabel : e.addLabel,
                                subtext: i ? es.intl.string(es.t["86OoiH"]) : void 0,
                                subtextLineClamp: 1,
                                action: () => u(e.type, !l),
                                leadingAccessory: { type: "icon", icon: e.icon },
                                disabled: i,
                            },
                            e.type,
                        ),
                    );
                }
            return 0 === g.length ? null : g;
        })(u),
        b = s.useCallback(() => d(!1), [d]),
        N = s.useCallback(() => {
            h(k.Ws.CopyLink);
            let e = (0, ea.A)(u.id);
            (0, ei.C)(e, () => {
                (0, B.P0)({ text: es.intl.string(es.t["+5kSoW"]), variant: "success" });
            });
        }, [u.id, h]);
    return (0, r.jsxs)("div", {
        className: a,
        children: [
            c === S.COMMERCE &&
                (0, r.jsx)(el.A, {
                    location: f.A.GAME_PROFILE,
                    onNavigate: d,
                    variant: "overlay-secondary",
                    themeOverride: "dark",
                }),
            null != I &&
                c !== S.COMMERCE &&
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
                                ((0, et.Z_)(), t());
                            },
                            "aria-label": es.intl.string(es.t.sidPSo),
                            onSelect: () => {},
                            children: (0, r.jsx)(X.rX, { children: I }),
                        });
                    },
                    children: (e) =>
                        (0, r.jsx)("div", {
                            ...e,
                            ref: p,
                            children: (0, r.jsx)(K.$, {
                                icon: $.PlusLargeIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: es.intl.string(es.t.sidPSo),
                            }),
                        }),
                }),
            c !== S.COMMERCE &&
                (0, r.jsx)(J.m, {
                    text: es.intl.string(es.t.WqhZss),
                    children: (0, r.jsx)(q.K, {
                        icon: Q.LinkIcon,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": es.intl.string(es.t.WqhZss),
                        onClick: N,
                    }),
                }),
            (null != j || null != v) &&
                c !== S.COMMERCE &&
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
                                ((0, et.Z_)(), t());
                            },
                            "aria-label": es.intl.string(es.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(X.rX, { children: v }), (0, r.jsx)(X.rX, { children: j })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, r.jsx)(J.m, {
                            text: es.intl.string(es.t["UKOtz+"]),
                            children: (0, r.jsx)("div", {
                                ...e,
                                ref: x,
                                children: (0, r.jsx)(q.K, {
                                    icon: Z.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": es.intl.string(es.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, r.jsx)(q.K, {
                icon: ee.XSmallIcon,
                variant: "overlay-secondary",
                size: "sm",
                onClick: b,
                "aria-label": es.intl.string(es.t.cpT0Cq),
            }),
        ],
    });
}
var eA = n(945810);
let eC = { enabled: !1 },
    ek = (0, eA.mj)({
        name: "2026-09-game-profiles-v3-communities-tab",
        kind: "user",
        defaultConfig: eC,
        variations: { 0: eC, 1: { enabled: !0 } },
    });
function eS(e) {
    let { className: t, navigation: n } = e,
        { selectedTab: l, selectTab: i } = n;
    if (
        !(function (e) {
            let { location: t } = e;
            return ek.useConfig({ location: t }).enabled;
        })({ location: "GameProfileCommunitiesTabBar" })
    )
        return null;
    let a = es.intl.string(es.t["3xFZEo"]);
    return (0, r.jsx)(U.V.Item, {
        id: S.COMMUNITIES,
        look: "brand",
        disableItemStyles: !0,
        selectedItem: l,
        onClick: () => i(S.COMMUNITIES),
        className: t,
        "aria-label": a,
        children: (0, r.jsx)(Y.E, { variant: "body-md/medium", color: "none", children: a }),
    });
}
function eL(e) {
    let { className: t, navigation: n } = e,
        { game: l } = W();
    return (l.communityGuildIds?.length ?? 0) < 3 ? null : (0, r.jsx)(eS, { className: t, navigation: n });
}
var eR = n(646514),
    eT = n(331322),
    eM = n(278416),
    eO = n(478016),
    ew = n(900797),
    eP = n(847374),
    eD = n(421773),
    eV = n(225647),
    eG = n(421108);
let e_ = "body-md/medium",
    eW = [];
function eF(e) {
    let { label: t, chevron: n, socialLayerStorefront: l } = e,
        i = (function (e) {
            let { hasCommerceTab: t, storefront: n } = e,
                l = Object.values(n?.promotions ?? {}).find((e) => {
                    let { flavor: t, endsAt: n } = e;
                    return "nitro" === t && (null == n || null != (0, eG.ZH)(n));
                }),
                i = (0, eG.tm)(l?.endsAt);
            return t && null != l && !i;
        })(l);
    return (0, r.jsxs)(eT.B, {
        as: "span",
        direction: "horizontal",
        align: "center",
        gap: 8,
        fullWidth: !1,
        children: [
            i &&
                (0, r.jsx)(eM.TagIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: eR.A.colors.ICON_FEEDBACK_POSITIVE,
                    "aria-hidden": "true",
                }),
            (0, r.jsxs)(eT.B, {
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
function eU(e) {
    let { className: t, label: n, navigation: l, socialLayerStorefront: i } = e,
        { selectedTab: a, selectTab: o } = l,
        { storefront: c, selectedStorefrontPageIndex: u, selectStorefrontPage: d } = i,
        m = c?.pages ?? eW,
        h = s.useRef(null),
        { isHovered: g, setIsHovered: x, onMouseEnter: f, onMouseLeave: p, cancelTimers: j } = (0, eD.A)(100, 100),
        v = es.intl.string(es.t["J3/JCl"]),
        I = s.useCallback(
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
        onRequestOpen: () => I(!0),
        onRequestClose: () => I(!1),
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
                                i = a === S.COMMERCE && t === u,
                                s =
                                    ((n = e.title),
                                    null != (l = (0, eV.A)(n?.trim())) && l.length > 0
                                        ? l
                                        : es.intl.formatToPlainString(es.t.IGMs8S, { pageNumber: t + 1 }));
                            return (0, r.jsx)(
                                X.Dr,
                                {
                                    id: `commerce-page-${t}`,
                                    label: s,
                                    color: i ? "brand" : "default",
                                    trailingIndicator: i ? { type: "icon", icon: eO.CheckmarkSmallIcon } : void 0,
                                    action: () => d(t),
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
                c = s ? ew.ChevronSmallUpIcon : eP.ChevronSmallDownIcon;
            return (0, r.jsx)(U.V.Item, {
                ...e,
                id: S.COMMERCE,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: a === S.COMMERCE ? S.COMMERCE : void 0,
                onClick: (t) => {
                    (o(S.COMMERCE), e.onClick(t));
                },
                onMouseLeave: p,
                clickableRef: (e) => {
                    h.current = e?.ref ?? null;
                },
                className: t,
                "aria-label": v,
                "aria-haspopup": "menu",
                children: (0, r.jsx)(Y.E, {
                    variant: e_,
                    color: "none",
                    children: (0, r.jsx)(eF, {
                        label: n,
                        chevron: (0, r.jsx)(c, { size: "xs", color: "currentColor" }),
                        socialLayerStorefront: i,
                    }),
                }),
            });
        },
    });
}
function eY(e) {
    let { className: t, navigation: n, socialLayerStorefront: l } = e,
        { selectedTab: i, selectTab: a } = n,
        { hasCommerceTab: s, storefront: o } = l;
    if (!s) return null;
    let c = es.intl.string(es.t.apFNLU);
    return (o?.pages.length ?? 0) > 1
        ? (0, r.jsx)(eU, { className: t, label: c, navigation: n, socialLayerStorefront: l })
        : (0, r.jsx)(U.V.Item, {
              id: S.COMMERCE,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: i,
              onClick: () => a(S.COMMERCE),
              className: t,
              "aria-label": c,
              children: (0, r.jsx)(Y.E, {
                  variant: e_,
                  color: "none",
                  children: (0, r.jsx)(eF, { label: c, socialLayerStorefront: l }),
              }),
          });
}
var eB = n(510954);
function ez(e) {
    let { navigation: t, socialLayerStorefront: n } = e,
        { game: l } = W(),
        { selectedTab: i, selectTab: a } = t,
        o = l.getIconURL(64),
        [c, u] = s.useState(null),
        d = s.useCallback(() => u(o), [o]),
        m = es.intl.string(es.t.qHmbyh);
    return (0, r.jsx)("div", {
        className: eB.wx,
        children: (0, r.jsxs)("div", {
            className: eB.ap,
            children: [
                (0, r.jsx)("div", {
                    className: eB.wE,
                    children:
                        null != o && o !== c
                            ? (0, r.jsx)("img", { src: o, alt: "", className: eB.FC, draggable: !1, onError: d })
                            : (0, r.jsx)(F.UnknownGameIcon, { size: "md" }),
                }),
                (0, r.jsxs)(U.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: i,
                    onItemSelect: a,
                    className: eB.vR,
                    children: [
                        (0, r.jsx)(U.V.Item, {
                            id: S.OVERVIEW,
                            disableItemStyles: !0,
                            className: eB.Mf,
                            "aria-label": m,
                            children: (0, r.jsx)(Y.E, { variant: "body-md/medium", color: "none", children: m }),
                        }),
                        (0, r.jsx)(eL, { className: eB.Mf, navigation: t }),
                        (0, r.jsx)(eY, { className: eB.Mf, navigation: t, socialLayerStorefront: n }),
                    ],
                }),
                (0, r.jsx)(ey, { className: eB.HK, activeTab: i }),
            ],
        }),
    });
}
var eH = n(435558),
    eX = n.n(eH),
    eK = n(516521),
    e$ = n(448741),
    eJ = n(71393),
    eq = n(309010),
    eQ = n(449054),
    eZ = n(60465),
    e0 = n(311043),
    e1 = n(620632),
    e2 = n(73153);
let e8 = {};
class e4 extends m.Ay.Store {
    static displayName = "DiscoverableGuildsStore";
    initialize() {
        this.waitFor(eb.default);
    }
    getGuild(e) {
        return e8[e]?.guild ?? null;
    }
    getGuilds(e) {
        return e.map((e) => e8[e]?.guild).filter(eN.Vq);
    }
    isFetching(e) {
        return e.some((e) => e8[e]?.fetchState === "fetching");
    }
    getStaleGuildIds(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return e.filter((e) => {
            let n = e8[e];
            return (
                null == n ||
                "failed" === n.fetchState ||
                ("fetching" !== n.fetchState && (null == n.fetchedAt || t - n.fetchedAt >= 36e5))
            );
        });
    }
}
let e6 = new e4(e2.h, {
    DISCOVERABLE_GUILDS_FETCH_START: function (e) {
        let { guildIds: t } = e;
        for (let e of t)
            e8[e] = { guild: e8[e]?.guild ?? null, fetchState: "fetching", fetchedAt: e8[e]?.fetchedAt ?? null };
    },
    DISCOVERABLE_GUILDS_FETCH_SUCCESS: function (e) {
        let { guildIds: t, guilds: n } = e,
            l = Date.now(),
            i = new Map(n.map((e) => [e.id, (0, eQ.jE)(e)]));
        for (let e of t) e8[e] = { guild: i.get(e) ?? null, fetchState: "succeeded", fetchedAt: l };
    },
    DISCOVERABLE_GUILDS_FETCH_FAILURE: function (e) {
        let { guildIds: t } = e;
        for (let e of t)
            e8[e] = { guild: e8[e]?.guild ?? null, fetchState: "failed", fetchedAt: e8[e]?.fetchedAt ?? null };
    },
});
var e3 = n(652215);
let e9 = new Map();
var e5 = n(927813);
let e7 = [];
function te(e) {
    return e0.A.getGame(e)?.communityGuildIds ?? e7;
}
let tt = (0, m.UT)(e6, {
    getQueryId: (e) => (te(e).length > 0 ? `game-community-guilds/${e}` : null),
    get: (e) => e6.getGuilds(te(e)),
    load: async (e) => {
        let t = te(e);
        t.length > 0 &&
            (await (async function (e) {
                let t = e6.getStaleGuildIds(e),
                    n = new Set();
                for (let t of e) {
                    let e = e9.get(t);
                    null != e && n.add(e);
                }
                if (t.length > 0) {
                    let e = (async function (e) {
                        e2.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_START", guildIds: e });
                        try {
                            let t = await e1.Bo.get({
                                    url: e3.Rsh.GUILD_DISCOVERY,
                                    query: { guild_ids: e },
                                    oldFormErrors: !0,
                                    rejectWithError: !0,
                                }),
                                n = t.body?.guilds ?? [];
                            e2.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_SUCCESS", guildIds: e, guilds: n });
                        } catch (t) {
                            throw (e2.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_FAILURE", guildIds: e }), t);
                        }
                    })(t).finally(() => {
                        for (let n of t) e9.get(n) === e && e9.delete(n);
                    });
                    for (let n of t) e9.set(n, e);
                    n.add(e);
                }
                await Promise.all(n);
            })(t));
    },
    staleAfter: e5.A.Seconds.HOUR,
    failureStaleAfter: e5.A.Seconds.MINUTE,
});
var tn = n(196765);
let tl = new Set(),
    ti = (0, tn.v)((e) => ({
        gameId: null,
        excludedLocales: tl,
        toggleLocale: (t, n) => {
            e((e) => {
                let l = new Set(e.gameId === t ? e.excludedLocales : tl);
                return (l.has(n) ? l.delete(n) : l.add(n), { gameId: t, excludedLocales: l });
            });
        },
    }));
function ta(e) {
    return ti((t) => (t.gameId === e ? t.excludedLocales : tl));
}
var tr = n(534514),
    ts = n(714991),
    to = n(486020),
    tc = n(240248);
function tu(e) {
    let { guildName: t, isMember: n, onClick: l, size: i, fullWidth: a } = e;
    return (0, r.jsx)(K.$, {
        variant: "secondary",
        size: i,
        fullWidth: a,
        text: n ? es.intl.string(es.t.cEnaWx) : es.intl.string(es.t.XpeFYr),
        "aria-label": n
            ? es.intl.formatToPlainString(es.t.lQqwQi, { guildName: t })
            : es.intl.formatToPlainString(es.t["8rL1QB"], { guildName: t }),
        onClick: l,
    });
}
var td = n(799699),
    tm = n(827085);
function th(e) {
    let { className: t } = e;
    return (0, r.jsx)(td.Ay, { className: u()(tm.qV, t) });
}
function tg(e) {
    let { presenceCount: t, memberCount: n } = e;
    return null == t && null == n
        ? null
        : (0, r.jsxs)("div", {
              className: tm.kL,
              children: [
                  null != t &&
                      (0, r.jsxs)("div", {
                          className: tm.U9,
                          children: [
                              (0, r.jsx)("i", { className: tm._o }),
                              (0, r.jsx)(Y.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: es.intl.format(es.t["LC+S+m"], { membersOnline: t }),
                              }),
                          ],
                      }),
                  null != n &&
                      (0, r.jsxs)("div", {
                          className: tm.U9,
                          children: [
                              (0, r.jsx)("i", { className: tm.jk }),
                              (0, r.jsx)(Y.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: es.intl.format(es.t.zRl6XR, { count: n }),
                              }),
                          ],
                      }),
              ],
          });
}
var tx = n(213098);
function tf() {
    return (0, r.jsxs)(td.qT, {
        className: tx.uW,
        animationDelayMs: 300,
        children: [
            (0, r.jsx)(td.Ay, { className: tx.dU, width: "30%" }),
            (0, r.jsx)(td.qT, {
                className: tx.nV,
                children: (0, r.jsxs)("div", {
                    className: tx.hQ,
                    children: [(0, r.jsx)(tp, {}), (0, r.jsx)(td.pv, {})],
                }),
            }),
        ],
    });
}
function tp() {
    return (0, r.jsxs)("div", {
        className: tx.To,
        children: [
            (0, r.jsx)(td.Ay, { className: tx.QV }),
            (0, r.jsxs)("div", {
                className: tx.Yv,
                children: [
                    (0, r.jsx)(td.Ay, { className: tx.Ag }),
                    (0, r.jsx)(td.Ay, { className: tx.zl }),
                    (0, r.jsx)(th, { className: tx.P2 }),
                ],
            }),
        ],
    });
}
function tj(e) {
    let { guild: t } = e,
        n = to.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [l, i] = s.useState(void 0),
        a = null != n && l !== n,
        o = s.useCallback(() => {
            i(n);
        }, [n]);
    return (0, r.jsxs)("div", {
        className: tx._C,
        children: [
            a && (0, r.jsx)(td.Ay, { className: tx.EQ }),
            (0, r.jsx)("img", {
                className: tx.$f,
                src: n,
                alt: es.intl.formatToPlainString(es.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: o,
                onError: o,
            }),
        ],
    });
}
function tv(e) {
    let { guild: t, presenceCount: n, memberCount: l } = e;
    return (0, r.jsxs)("div", {
        className: tx.To,
        children: [
            (0, r.jsx)(tj, { guild: t }),
            (0, r.jsxs)("div", {
                className: tx.yj,
                children: [
                    (0, r.jsxs)("div", {
                        className: tx.YS,
                        children: [
                            (0, r.jsx)(ts.A, { guild: t, size: 16 }),
                            (0, r.jsx)(tr.D, {
                                className: tx.J5,
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                children: t.name,
                            }),
                        ],
                    }),
                    !(0, tc.uJ)(t.description) &&
                        (0, r.jsx)(Y.E, {
                            className: tx.h_,
                            variant: "body-sm/medium",
                            color: "text-muted",
                            children: t.description,
                        }),
                    (0, r.jsx)(tg, { presenceCount: n, memberCount: l }),
                ],
            }),
        ],
    });
}
function tI(e) {
    let { guild: t, presenceCount: n, memberCount: l, button: i, className: a } = e;
    return (0, r.jsx)("div", {
        className: u()(tx.kL, a),
        children: (0, r.jsxs)("div", {
            className: tx.hQ,
            children: [(0, r.jsx)(tv, { guild: t, presenceCount: n, memberCount: l }), i],
        }),
    });
}
function tb() {
    let {
            invite: e,
            hasDiscordWebsite: t,
            isCommunityInviteResolving: n,
            isMember: l,
            closeModal: i,
            trackAction: a,
        } = W(),
        o = s.useCallback(() => {
            null != e &&
                (a(k.Ws.JoinServer),
                i(),
                e2.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: e, code: e.code, context: e3.BRT.APP }));
        }, [e, a, i]);
    return null == e || null == e.guild
        ? t && n
            ? (0, r.jsx)(tf, {})
            : null
        : (0, r.jsxs)("div", {
              className: tx.uW,
              children: [
                  (0, r.jsx)(tr.D, {
                      className: tx.Gf,
                      variant: "body-md/medium",
                      color: "text-subtle",
                      children: es.intl.string(es.t["U2N+ci"]),
                  }),
                  (0, r.jsx)(tI, {
                      guild: e.guild,
                      presenceCount: e.approximate_presence_count,
                      memberCount: e.approximate_member_count,
                      button: (0, r.jsx)(tu, { guildName: e.guild.name, isMember: l, onClick: o, fullWidth: !0 }),
                  }),
              ],
          });
}
var tN = n(320448),
    tE = n(152594);
function ty(e) {
    let { children: t, skeletonTitleWidth: n, showViewAllSkeleton: l } = e;
    return (0, r.jsxs)("div", {
        className: tE.kL,
        "aria-busy": !0,
        children: [
            (0, r.jsxs)("div", {
                className: tE.wR,
                children: [(0, r.jsx)(td.Ay, { className: tE.Iz, width: n }), l && (0, r.jsx)(td.pv, { size: "sm" })],
            }),
            t,
        ],
    });
}
function tA(e) {
    let { children: t, title: n, onClickViewAll: l, trailing: i } = e;
    return (0, r.jsxs)("div", {
        className: tE.kL,
        children: [
            (0, r.jsxs)("div", {
                className: tE.wR,
                children: [
                    (0, r.jsx)(tr.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, r.jsx)(K.$, {
                            size: "sm",
                            icon: tN.ChevronSmallRightIcon,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: l,
                            text: es.intl.string(es.t.budhsM),
                        }),
                    i,
                ],
            }),
            t,
        ],
    });
}
var tC = (((i = {}).LIST = "list"), (i.GRID = "grid"), i);
let tk = (0, tn.v)((e) => ({
    layout: "grid",
    setLayout: (t) => {
        e({ layout: t });
    },
}));
var tS = n(876798),
    tL = n(481901),
    tR = n(916099),
    tT = n(461353);
function tM() {
    let { layout: e, setLayout: t } = tk(),
        n = es.intl.string(es.t.VGRZh7),
        l = es.intl.string(es.t["NJFr+g"]);
    return (0, r.jsxs)("div", {
        className: tT.k,
        role: "group",
        "aria-label": es.intl.string(es.t.mFMDSq),
        children: [
            (0, r.jsx)(J.m, {
                text: n,
                asContainer: !0,
                children: (0, r.jsx)(tS.k, {
                    icon: tL.GridSquareIcon,
                    pressed: e === tC.GRID,
                    size: "sm",
                    "aria-label": n,
                    onClick: () => t(tC.GRID),
                }),
            }),
            (0, r.jsx)(J.m, {
                text: l,
                asContainer: !0,
                children: (0, r.jsx)(tS.k, {
                    icon: tR.ListBulletsIcon,
                    pressed: e === tC.LIST,
                    size: "sm",
                    "aria-label": l,
                    onClick: () => t(tC.LIST),
                }),
            }),
        ],
    });
}
var tO = n(37646),
    tw = n(846183);
function tP(e) {
    var t;
    let n,
        l,
        i,
        { locales: a, onClose: o } = e,
        { game: c } = W(),
        { options: u, toggleLocale: d } =
            ((t = c.id),
            (n = ta(t)),
            (l = ti((e) => e.toggleLocale)),
            (i = s.useMemo(() => {
                let e;
                return (
                    (e = (0, es.getAvailableLocales)()),
                    a
                        .map((t) => {
                            if ("en-US" === t) return { locale: t, label: es.intl.string(es.t.LQLMGP) };
                            let n = e.find((e) => {
                                let { value: n } = e;
                                return n === t;
                            });
                            return { locale: t, label: null != n ? es.intl.string(n.localizedName) : t };
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
        "aria-label": es.intl.string(es.t.OlOHDH),
        onClose: o,
        onSelect: void 0,
        children: u.map((e) => {
            let { locale: t, label: n, checked: l, disabled: i } = e;
            return (0, r.jsx)(X.sL, { id: t, label: n, checked: l, disabled: i, action: () => d(t) }, t);
        }),
    });
}
function tD(e) {
    let { locales: t } = e,
        n = s.useRef(null),
        l = es.intl.string(es.t.OlOHDH);
    return (0, r.jsx)("div", {
        className: tw.k,
        children: (0, r.jsx)(z.Y, {
            targetElementRef: n,
            position: "bottom",
            align: "right",
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, r.jsx)(tP, { locales: t, onClose: n });
            },
            children: (e) =>
                (0, r.jsx)(J.m, {
                    text: l,
                    asContainer: !0,
                    children: (0, r.jsx)(q.K, {
                        buttonRef: n,
                        icon: tO.LanguageIcon,
                        variant: "icon-only",
                        size: "sm",
                        "aria-label": l,
                        ...e,
                    }),
                }),
        }),
    });
}
var tV = n(939249),
    tG = n(762841);
function t_(e) {
    let { className: t, ariaLabel: n, onClick: l, children: i } = e;
    return (0, r.jsx)(tV.D, { className: u()(tG.v, t), onClick: l, "aria-label": n, children: i });
}
var tW = n(759020);
function tF(e) {
    let { guild: t, presenceCount: n, memberCount: l, ariaLabel: i, onClick: a } = e;
    return (0, r.jsxs)(t_, {
        className: tW.kL,
        onClick: a,
        ariaLabel: i,
        children: [
            (0, r.jsxs)("div", {
                className: tW.OA,
                children: [
                    (0, r.jsx)(tj, { guild: t }),
                    (0, r.jsxs)("div", {
                        className: tW.FS,
                        children: [
                            (0, r.jsxs)("div", {
                                className: tW.YS,
                                children: [
                                    (0, r.jsx)(ts.A, { guild: t, size: 16 }),
                                    (0, r.jsx)(tr.D, {
                                        className: tW.J5,
                                        variant: "heading-sm/semibold",
                                        color: "text-default",
                                        children: t.name,
                                    }),
                                ],
                            }),
                            !(0, tc.uJ)(t.description) &&
                                (0, r.jsx)(Y.E, {
                                    className: tW.h_,
                                    variant: "body-sm/medium",
                                    color: "text-muted",
                                    lineClamp: 2,
                                    children: t.description,
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: tW.Rn, children: (0, r.jsx)(tg, { presenceCount: n, memberCount: l }) }),
        ],
    });
}
var tU = n(620387);
function tY(e) {
    let { animationDelayMs: t } = e;
    return (0, r.jsx)(td.qT, { className: tU.s7, animationDelayMs: t, children: (0, r.jsx)(tp, {}) });
}
function tB(e) {
    let { animationDelayMs: t } = e;
    return (0, r.jsxs)(td.qT, {
        className: tU.fv,
        animationDelayMs: t,
        children: [
            (0, r.jsx)(td.Ay, { className: tU.VR }),
            (0, r.jsxs)("div", {
                className: tU.hG,
                children: [
                    (0, r.jsx)(td.Ay, { className: tU.t_ }),
                    (0, r.jsx)(td.Ay, { className: tU.Aj }),
                    (0, r.jsx)(td.Ay, { className: tU.ax }),
                ],
            }),
            (0, r.jsx)(td.Ay, { className: tU.Ah }),
        ],
    });
}
function tz(e) {
    let { guild: t, presenceCount: n, memberCount: l, ariaLabel: i, onClick: a } = e;
    return (0, r.jsx)(t_, {
        className: tU.Nr,
        onClick: a,
        ariaLabel: i,
        children: (0, r.jsx)(tv, { guild: t, presenceCount: n, memberCount: l }),
    });
}
function tH(e) {
    let { guild: t, layout: n } = e,
        { game: l, closeModal: i, trackAction: a, viewId: o } = W(),
        c = (0, m.bG)([eJ.A], () => eJ.A.getGuild(t.id)?.joinedAt != null, [t.id]),
        u = s.useCallback(async () => {
            (a(k.Ws.CommunityClicked, { communityGuildId: t.id }), i());
            try {
                await eQ.Z2(t.id, {}, { joinSource: e3.Q4z.GAME_PROFILE_COMMUNITIES, loadId: o }, [
                    f.A.GAME_PROFILE_COMMUNITIES,
                ]);
            } catch (e) {
                (0, e$._)(e);
                return;
            }
            let e = eq.Ay.getCurrentlySelectedChannelId(t.id);
            null != e &&
                eZ.default.setGameProfilePendingReturn({
                    gameId: l.id,
                    channelId: e,
                    tab: S.COMMUNITIES,
                    source: k.GameProfileSources.CommunityPreviewReturn,
                });
        }, [t.id, a, i, o, l.id]),
        d = n === tC.LIST ? tF : tz;
    return (0, r.jsx)(d, {
        guild: t,
        presenceCount: t.presenceCount,
        memberCount: t.memberCount,
        ariaLabel: c
            ? es.intl.formatToPlainString(es.t.AEfs1D, { guildName: t.name })
            : es.intl.formatToPlainString(es.t.TUZ50q, { guildName: t.name }),
        onClick: u,
    });
}
function tX() {
    var e;
    let t,
        n,
        { game: l } = W(),
        { data: i, isLoading: a } = tt(l.id),
        o = tk((e) => e.layout),
        {
            locales: c,
            filteredGuilds: u,
            showLocaleFilter: d,
        } = ((e = l.id),
        (t = ta(e)),
        {
            locales: (n = s.useMemo(() => eX().uniq((i ?? []).map((e) => e.preferredLocale).filter(eN.Vq)), [i])),
            filteredGuilds: s.useMemo(
                () => (i ?? []).filter((e) => null == e.preferredLocale || !t.has(e.preferredLocale)),
                [i, t],
            ),
            showLocaleFilter: n.length >= 2,
        }),
        m = o === tC.LIST,
        h = m ? tB : tY,
        g = a && (null == i || 0 === i.length);
    return (0, r.jsxs)(eK.Ch, {
        className: tU.XG,
        children: [
            (0, r.jsx)("div", { className: tU.xY, "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: tU.uW,
                children: (0, r.jsx)(tA, {
                    title: es.intl.string(es.t.r6bvTh),
                    trailing: (0, r.jsxs)("div", {
                        className: tU.AA,
                        children: [d && (0, r.jsx)(tD, { locales: c }), (0, r.jsx)(tM, {})],
                    }),
                    children: (0, r.jsx)("div", {
                        className: m ? tU.p_ : tU.Vg,
                        children: g
                            ? eX()
                                  .range(8)
                                  .map((e) => (0, r.jsx)(h, { animationDelayMs: 150 * e }, e))
                            : u.map((e) => (0, r.jsx)(tH, { guild: e, layout: o }, e.id)),
                    }),
                }),
            }),
        ],
    });
}
var tK = n(707554),
    t$ = n(369606),
    tJ = n(775602),
    tq = n(21161),
    tQ = n(400492),
    tZ = n(541830),
    t0 = n(459746);
let t1 = "1552821538409939044";
var t2 = n(175213);
let t8 = n(892799);
function t4(e) {
    let { ref: t } = e,
        { game: n } = W(),
        l = (function (e) {
            let [t] = s.useState(() => Math.random());
            return s.useMemo(() => {
                let n = e.getBannerURL(1400);
                if (null != n) return n;
                let l = e.screenshotUrls?.length ?? 0;
                return 0 === l ? null : e.getScreenshotURL(Math.floor(t * l), 1400);
            }, [1400, e, t]);
        })(n);
    return (0, tc.uJ)(l)
        ? null
        : (0, r.jsxs)("div", {
              ref: t,
              children: [
                  (0, r.jsx)("div", { className: t2.y1, style: { backgroundImage: `url("${l}")` } }),
                  (0, r.jsx)("div", { className: t2.N4 }),
              ],
          });
}
function t6() {
    let { game: e } = W(),
        t = (e.genres ?? []).map(tZ.du).join(", ");
    return (0, tc.uJ)(t) ? null : (0, r.jsx)(Y.E, { variant: "body-md/normal", color: "text-muted", children: t });
}
function t3(e) {
    let { rank: t } = e;
    return (0, r.jsxs)("div", {
        className: t2.Qc,
        children: [
            (0, r.jsx)(t$.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, r.jsx)(Y.E, {
                variant: "body-xs/semibold",
                color: "none",
                children: es.intl.formatToPlainString(es.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function t9() {
    return (0, r.jsx)(t5, { className: t2._M, imageClassName: t2.xe });
}
function t5(e) {
    let { className: t, imageClassName: n } = e,
        { game: l } = W(),
        i = (0, r.jsx)(t0.Ay, { game: l, className: n, size: t0.wu.LARGE });
    return l.id !== t1
        ? (0, r.jsx)("div", { className: t, children: i })
        : (0, r.jsx)(t7, { className: t, children: i });
}
function t7(e) {
    let { children: t, className: n } = e,
        { createMultipleConfettiAt: l } = s.useContext(tq.x),
        i = (0, m.bG)([tJ.Ay], () => tJ.Ay.useReducedMotion),
        a = s.useRef({ count: 0, lastTime: 0 });
    return (0, r.jsx)(tV.D, {
        className: u()(n, t2.b3),
        "aria-label": es.intl.string(es.t.M2b74O),
        onClick: function (e) {
            let t = Date.now(),
                n = a.current,
                r = t - n.lastTime > 1e4 ? 1 : n.count + 1;
            if (((a.current = { count: r, lastTime: t }), 3 === r)) {
                if (((a.current = { count: 0, lastTime: 0 }), !i)) {
                    let t = e.currentTarget.getBoundingClientRect();
                    l(t.left + t.width / 2, t.top + t.height / 2);
                }
                (0, tQ.Ak)("discodo");
            }
        },
        children: t,
    });
}
let ne = function () {
    let { game: e, isTwoColumn: t } = W(),
        n = e.name;
    return (0, r.jsxs)("div", {
        className: t2.ap,
        children: [
            t && (0, r.jsx)(t5, { className: t2.Tf, imageClassName: t2.w$ }),
            (0, r.jsxs)("div", {
                className: t2.lu,
                children: [
                    null != e.l30Rank && (0, r.jsx)(t3, { rank: e.l30Rank }),
                    (0, r.jsxs)("div", {
                        className: t2.$,
                        children: [
                            (0, r.jsx)(tr.D, { variant: "heading-xxl/semibold", children: n }),
                            e.id === t1 &&
                                (0, r.jsx)("img", {
                                    src: t8,
                                    className: t2.IU,
                                    alt: "",
                                    "aria-hidden": "true",
                                    draggable: !1,
                                }),
                        ],
                    }),
                    (0, r.jsx)(t6, {}),
                ],
            }),
        ],
    });
};
var nt = n(638495),
    nn = n(871123),
    nl = n(439303),
    ni = n(44724),
    na = n(317560),
    nr = n(869099),
    ns = n(151869),
    no = n(761812);
function nc(e) {
    return e;
}
function nu(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: no.B, children: t });
}
function nd(e) {
    let { skuIds: t, analyticsLocations: n, onCardClick: l } = e,
        i = s.useMemo(() => {
            if (null != l)
                return (e, t) => {
                    let { skuId: n, applicationId: i } = t;
                    (e.preventDefault(), l(n, i));
                };
        }, [l]);
    return null == t || 0 === t.length
        ? null
        : (0, r.jsx)(ns.A, {
              gap: "md",
              "aria-label": `${es.intl.string(es.t["kocF+6"])}`,
              items: t,
              getItemKey: nc,
              disableFocusRingScope: !0,
              renderItem: (e, t, l) =>
                  (0, r.jsx)(nu, {
                      children: (0, r.jsx)(nr.Ay, {
                          positionInSection: l,
                          skuId: e,
                          variant: nr.s6.SMALL,
                          analyticsLocations: n,
                          onClick: i,
                          listItemProps: t,
                      }),
                  }),
          });
}
var nm = n(326369),
    nh = n(936785),
    ng = n(403581),
    nx = n(812095),
    nf = n(647474),
    np = n(162536);
function nj(e) {
    let { promotion: t, className: n } = e,
        l = t.endsAt;
    if ((0, eG.tm)(l)) return null;
    let i = "nitro" === t.flavor,
        a = i ? ng.NitroWheelIcon : t.Icon;
    return (0, r.jsx)(nf.A, {
        className: u()(np.vK, n),
        color: i ? "nitro-pink" : void 0,
        children: (0, r.jsxs)("div", {
            className: np.Qs,
            children: [
                null != a && (0, r.jsx)(a, { size: "xs", color: "currentColor", className: np.Kk }),
                (0, r.jsx)(Y.E, { variant: "body-sm/normal", color: "currentColor", children: (0, nx.U)(t.text) }),
            ],
        }),
    });
}
var nv = n(521058);
function nI() {
    let { storefrontPromotion: e } = W();
    if (null == e || "nitro" !== e.flavor) return null;
    let { id: t, endsAt: n, flavor: l, pdp: i, rewardRequirements: a, storefront: s } = e;
    if (null == s || (0, tc.uJ)(s.headerText)) return null;
    let o = {
        id: t,
        Icon: (0, nh.LZ)(i?.icon ?? null),
        text: s.headerText,
        tooltip: null,
        endsAt: (0, nh.RD)(n),
        flavor: l,
        rewardRequirements: a,
    };
    return (0, r.jsx)(nj, { className: nv.v, promotion: o });
}
let nb = [0, 1, 2, 3],
    nN = { placement: nl.Ye.GAME_PROFILE };
function nE() {
    return (0, r.jsx)(ty, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, r.jsx)(nm.A, { children: nb.map((e) => (0, r.jsx)(nu, { children: (0, r.jsx)(nr.yf, {}) }, e)) }),
    });
}
function ny(e) {
    let { selectTab: t } = e,
        n = (0, nt.k)(),
        {
            trackAction: l,
            socialLayerStorefrontRecommendationsData: i,
            socialLayerStorefrontRecommendationsLoading: a,
            hasCommerceTab: o,
            closeModal: c,
        } = W(),
        { analyticsLocations: u } = (0, p.Ay)([f.A.GAME_PROFILE]),
        d = s.useCallback(() => {
            if (i?.application != null) {
                if (o) return void t(S.COMMERCE);
                (l(k.Ws.GameShop), c(), (0, ni.default)({ applicationId: i.application.id }));
            }
        }, [i, l, o, t, c]),
        m = s.useCallback(
            (e, t) => {
                let a = i?.guildId;
                null != a &&
                    (l(k.Ws.GameShopItem),
                    (0, na.R)({
                        skuId: e,
                        applicationId: t,
                        isStorefront: !1,
                        analyticsLocations: u,
                        contextKey: n,
                        onClose: () => {
                            let { pathname: e, search: n } = location;
                            (0, nn.rG)(e, n, t, a) && c();
                        },
                    }));
            },
            [l, c, u, i, n],
        );
    if (a) return (0, r.jsx)(nE, {});
    if (null == i) return null;
    let { skuIds: h } = i;
    return (0, r.jsxs)(tA, {
        title: es.intl.string(es.t.WDdlUb),
        onClickViewAll: d,
        children: [
            (0, r.jsx)(nI, {}),
            (0, r.jsx)(nl.E9, {
                newValue: nN,
                children: (0, r.jsx)(nd, { skuIds: h, analyticsLocations: u, onCardClick: m }),
            }),
        ],
    });
}
var nA = n(621466),
    nC = n(710793),
    nk = n(346055),
    nS = n(460905),
    nL = n(5377),
    nR = n(890060),
    nT = n(880405),
    nM = n(284009),
    nO = n.n(nM),
    nw = n(574332),
    nP = n(976860);
async function nD(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    nO()(a.length > 0, "analyticsLocationStack must have at least one location");
    let r = a[a.length - 1],
        s = null;
    if ((null != t && ((n = t.guild?.id), (s = new Set(t.guild?.features))), null == n)) return;
    let o = eJ.A.getGuild(n);
    if (o?.joinedAt == null)
        if (null == s || s.has(e3.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, eQ.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: e3.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await nw.Ay.acceptInvite({ inviteKey: t.code, context: { location: r }, skipOnboarding: !0 }));
    (0, nP.pX)(e3.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var nV = n(46054),
    nG = n(997141),
    n_ = n(146849),
    nW = n(647660),
    nF = n(78377);
function nU(e) {
    let { content: t, guildId: n, channelId: l } = e,
        { enabled: i } = (0, n_.I2)({ location: "GameProfileAnnouncements" }),
        a = (0, nG.j)({ excluded: nG.Z }),
        o = (0, nW.N)(t, { enabled: i, syntax: a }),
        c = s.useMemo(() => ({ guildId: n, channelId: l, formatInline: !0 }), [n, l]);
    return i
        ? (0, r.jsx)(s.Suspense, {
              children: (0, r.jsx)(nF.O.Provider, {
                  value: c,
                  children: (0, r.jsx)(nW.A, { content: t, parsed: o, allowJumboEmoji: !1 }),
              }),
          })
        : nV.A.parse(t, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: l });
}
var nY = n(806244),
    nB = n(165648);
function nz(e) {
    return e.id;
}
function nH() {
    return (0, r.jsxs)(td.qT, {
        className: nY.s7,
        children: [
            (0, r.jsx)(td.Ay, { className: nY.XN }),
            (0, r.jsxs)("div", {
                className: nY.UF,
                children: [(0, r.jsx)(td.Ay, { className: nY.iX }), (0, r.jsx)(td.Ay, { className: nY.jt })],
            }),
        ],
    });
}
function nX(e) {
    let { message: t, src: n, aspectRatio: l } = e,
        [i, a] = s.useState(!1),
        o = s.useCallback(() => a(!0), []);
    return null == t.media
        ? null
        : (0, r.jsx)(nC.y, {
              readyState: i ? e3.Rv1.READY : e3.Rv1.LOADING,
              aspectRatio: l,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, r.jsx)("img", {
                  src: n,
                  className: nY.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: o,
              }),
          });
}
function nK(e) {
    let { message: t, guildId: n, channelId: l, onCardClick: i, listItemProps: a } = e,
        o = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, nA.vq)(e.target, HTMLAnchorElement) ||
                        ((0, nA.vq)(e.target, HTMLSpanElement) && (0, nA.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return i(t.id);
            },
            [i, t.id],
        ),
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        d = t.media?.proxyUrl ?? t.media?.url,
        m = null != d ? (0, nR.x2)(d, c, 364) : void 0,
        { embedSource: h } = t;
    return null == h
        ? null
        : (0, r.jsx)(tV.D, {
              ...a,
              className: nY.Nr,
              onClick: o,
              children: (0, r.jsxs)(nk.M, {
                  className: nY.zI,
                  children: [
                      null != h.url &&
                          (0, r.jsx)(Y.E, {
                              variant: "body-xs/medium",
                              color: "text-link",
                              className: nY.Ow,
                              children: h.url,
                          }),
                      (0, r.jsxs)("div", {
                          className: nY._d,
                          style: null != h.color ? { borderInlineStartColor: h.color } : void 0,
                          children: [
                              null != h.authorName &&
                                  (0, r.jsxs)("div", {
                                      className: nY.Tu,
                                      children: [
                                          null != h.authorIconUrl &&
                                              (0, r.jsx)("img", {
                                                  src: h.authorIconUrl,
                                                  className: nY.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, r.jsx)(Y.E, {
                                              variant: "body-xs/semibold",
                                              color: "text-strong",
                                              children: h.authorName,
                                          }),
                                      ],
                                  }),
                              null != t.media &&
                                  null != m &&
                                  (0, r.jsx)("div", {
                                      className: nY.ax,
                                      children: (0, r.jsx)(nX, { message: t, src: m, aspectRatio: c }),
                                  }),
                              null != t.title &&
                                  (0, r.jsx)(tr.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-strong",
                                      className: nY.DD,
                                      children: (0, r.jsx)(nU, { content: t.title, guildId: n, channelId: l }),
                                  }),
                              t.body.length > 0 &&
                                  (0, r.jsxs)("div", {
                                      className: u()(nY.h_, nB.PT),
                                      children: [
                                          (0, r.jsx)(Y.E, {
                                              variant: "body-sm/medium",
                                              color: "none",
                                              tag: "div",
                                              children: (0, r.jsx)(nU, { content: t.body, guildId: n, channelId: l }),
                                          }),
                                          (0, r.jsx)("div", { className: nY.fm }),
                                      ],
                                  }),
                              (0, r.jsxs)("div", {
                                  className: nY.ov,
                                  children: [
                                      null != h.providerIconUrl &&
                                          (0, r.jsx)("img", {
                                              src: h.providerIconUrl,
                                              className: nY.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, r.jsxs)(Y.E, {
                                          variant: "body-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != h.providerName ? `${h.providerName} \xb7 ` : "",
                                              (0, nL.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, r.jsxs)("div", {
                                              className: nY.a5,
                                              children: [
                                                  (0, r.jsx)(nS.ReactionIcon, { size: "xs", color: "currentColor" }),
                                                  (0, r.jsx)(Y.E, {
                                                      variant: "body-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(es.intl.currentLocale).format(
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
let n$ = s.memo(function (e) {
    let { message: t, guildId: n, channelId: l } = e;
    return (0, r.jsxs)(nk.M, {
        className: nY.zI,
        children: [
            null != t.title &&
                (0, r.jsx)(tr.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    className: nY.DD,
                    children: (0, r.jsx)(nU, { content: t.title, guildId: n, channelId: l }),
                }),
            t.body.length > 0 &&
                (0, r.jsxs)("div", {
                    className: u()(nY.h_, nB.PT),
                    children: [
                        (0, r.jsx)(Y.E, {
                            variant: "body-sm/medium",
                            color: "none",
                            tag: "div",
                            children: (0, r.jsx)(nU, { content: t.body, guildId: n, channelId: l }),
                        }),
                        (0, r.jsx)("div", { className: nY.fm }),
                    ],
                }),
            (0, r.jsxs)("div", {
                className: nY.ov,
                children: [
                    (0, r.jsx)(Y.E, {
                        variant: "body-xs/medium",
                        color: "text-muted",
                        children: (0, nL.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, r.jsxs)("div", {
                            className: nY.a5,
                            children: [
                                (0, r.jsx)(nS.ReactionIcon, { size: "xs", color: "currentColor" }),
                                (0, r.jsx)(Y.E, {
                                    variant: "body-xs/medium",
                                    color: "text-muted",
                                    children: new Intl.NumberFormat(es.intl.currentLocale).format(t.reactionCount),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
});
function nJ(e) {
    let { message: t, guildId: n, channelId: l, onCardClick: i, listItemProps: a } = e,
        o = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, nA.vq)(e.target, HTMLAnchorElement) ||
                        ((0, nA.vq)(e.target, HTMLSpanElement) && (0, nA.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return i(t.id);
            },
            [i, t.id],
        ),
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        u = t.media?.proxyUrl ?? t.media?.url,
        d = null != u ? (0, nR.x2)(u, c, 364) : void 0;
    return (0, r.jsxs)(tV.D, {
        ...a,
        className: nY.Nr,
        onClick: o,
        children: [
            null != t.media &&
                null != d &&
                (0, r.jsx)("div", {
                    className: nY.Vl,
                    children: (0, r.jsx)(nX, { message: t, src: d, aspectRatio: c }),
                }),
            (0, r.jsx)(n$, { message: t, guildId: n, channelId: l }),
        ],
    });
}
function nq(e) {
    let { message: t, onCardClick: n, listItemProps: l } = e,
        { poll: i } = t,
        a = s.useCallback(() => n(t.id), [n, t.id]);
    if (null == i) return null;
    let o = i.answers.slice(0, 3),
        c = i.answers.length - o.length;
    return (0, r.jsx)(tV.D, {
        ...l,
        className: nY.Nr,
        onClick: a,
        children: (0, r.jsxs)(nk.M, {
            className: nY.zI,
            children: [
                (0, r.jsx)(tr.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    className: nY.MH,
                    children: i.question.text,
                }),
                (0, r.jsxs)("div", {
                    className: nY.xd,
                    children: [
                        o.map((e) =>
                            (0, r.jsx)(
                                "div",
                                {
                                    className: nY.Nf,
                                    children: (0, r.jsx)(Y.E, {
                                        variant: "body-sm/medium",
                                        color: "text-default",
                                        className: nY.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        c > 0 &&
                            (0, r.jsx)(Y.E, {
                                variant: "body-xs/medium",
                                color: "text-muted",
                                className: nY.PF,
                                children: es.intl.format(es.t["mv/nIa"], { count: c }),
                            }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: nY.ov,
                    children: (0, r.jsx)(Y.E, {
                        variant: "body-xs/medium",
                        color: "text-muted",
                        children: es.intl.format(es.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, nR.jL)(i),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function nQ(e) {
    return null != e.message.poll
        ? (0, r.jsx)(nq, { ...e })
        : null != e.message.embedSource
          ? (0, r.jsx)(nK, { ...e })
          : (0, r.jsx)(nJ, { ...e });
}
let nZ = s.memo(function (e) {
    let { getScrollOffset: t } = e,
        { analyticsLocations: n } = (0, p.Ay)(),
        { game: l, invite: i, hasDiscordWebsite: a, closeModal: o, trackAction: c } = W(),
        u = l.id,
        {
            messages: d,
            guildId: h,
            channelId: g,
            loading: x,
            hasFetched: f,
        } = (function (e) {
            let {
                data: t,
                hasFetched: n,
                isFetching: l,
            } = (0, m.cf)([L.A], () => ({
                data: null != e ? L.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && L.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && L.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, s.useEffect)(() => {
                    null == e || n || L.A.isAnnouncementsFetching(e) || (0, nT.Rf)(e, { limit: 8 });
                }, [e, n, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l, hasFetched: n }
            );
        })(u),
        j = s.useCallback(() => {
            let e = i?.guild?.id ?? h;
            null != e &&
                null != g &&
                (c(k.Ws.Announcements),
                eZ.default.setGameProfilePendingReturn({ gameId: u, channelId: g, initialScrollOffset: t() }),
                o(),
                nD({ invite: i, guildId: e, channelId: g, analyticsLocationStack: n }));
        }, [c, o, t, i, h, g, n, u]),
        v = s.useCallback(
            (e) => {
                let l = i?.guild?.id ?? h;
                null != l &&
                    null != g &&
                    (c(k.Ws.AnnouncementsItem),
                    eZ.default.setGameProfilePendingReturn({ gameId: u, channelId: g, initialScrollOffset: t() }),
                    o(),
                    nD({ invite: i, guildId: l, channelId: g, messageId: e, analyticsLocationStack: n }));
            },
            [c, o, t, i, h, g, n, u],
        ),
        I = null != g && d.length > 0;
    return (!f || x) && a
        ? (0, r.jsx)(ty, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, r.jsx)(nm.A, {
                  gap: 16,
                  children: eX()
                      .range(3)
                      .map((e) => (0, r.jsx)(nH, {}, e)),
              }),
          })
        : I
          ? (0, r.jsx)(tA, {
                title: es.intl.string(es.t.B0BV3Y),
                onClickViewAll: j,
                children: (0, r.jsx)(ns.A, {
                    gap: 16,
                    items: d,
                    getItemKey: nz,
                    itemClassName: nY.hu,
                    renderItem: (e, t) =>
                        (0, r.jsx)(
                            nQ,
                            { message: e, guildId: h, channelId: g, onCardClick: v, listItemProps: t },
                            e.id,
                        ),
                }),
            })
          : null;
});
var n0 = n(155718),
    n1 = n(505779);
(n(323874), n(14289), n(35956));
var n2 = n(989441);
let n8 = {
        appStore: {
            websiteCategories: [n1.V1.IPHONE, n1.V1.IPAD],
            websiteHostnames: n1.FU,
            distributor: n2.D.APPLE_APP_STORE,
            buildUrl: (e) => `https://${n1.FU["0"]}/app/id${e}`,
        },
        googlePlay: {
            websiteCategories: [n1.V1.ANDROID],
            websiteHostnames: n1.SX,
            distributor: n2.D.GOOGLE_PLAY,
            buildUrl: (e) => `https://${n1.SX["0"]}/store/apps/details?id=${encodeURIComponent(e)}`,
        },
    },
    n4 = new Set(
        Object.values(n8).flatMap((e) => {
            let { websiteCategories: t } = e;
            return t;
        }),
    );
function n6(e, t) {
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
var n3 = n(808380);
let n9 = [n3.Y.DESKTOP, "mobile", n3.Y.XBOX, n3.Y.PLAYSTATION, n3.Y.NINTENDO, n3.Y.ROBLOX];
var n5 = n(28863),
    n7 = n(975807),
    le = n(194362);
function lt() {
    let { game: e, trackAction: t } = W(),
        n = s.useCallback(async () => {
            t(k.Ws.ClaimGame);
            let e = await (0, le.a)(e3.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, n7.A)(e);
        }, [t]),
        l = s.useCallback((e) => (0, r.jsx)(n5.Anchor, { onClick: n, children: e }), [n]);
    return e.linkedApplications?.some((e) => e.type === n0.Mh.OFFICIAL)
        ? null
        : (0, r.jsx)(Y.E, {
              variant: "body-xs/normal",
              color: "text-muted",
              children: es.intl.format(es.t.KAjfKl, { claimLink: l }),
          });
}
var ln = n(998445),
    ll = n(274997),
    li = n(80500),
    la = n(319745),
    lr = n(488225),
    ls = n(967492),
    lo = n(72265),
    lc = n(454346),
    lu = n(341904),
    ld = n(423438),
    lm = n(610509),
    lh = n(575888),
    lg = n(924895),
    lx = n(37948),
    lf = n(471177);
let lp = { size: "xs", colorClass: lf.w };
function lj(e) {
    let { website: t } = e,
        { trackAction: n } = W(),
        l = (0, lx.A)(),
        {
            action: i,
            icon: a,
            title: o,
        } = (function (e, t) {
            switch (e.category) {
                case n1.V1.OFFICIAL:
                    return {
                        icon: (0, r.jsx)(ln.GlobeEarthIcon, { ...t }),
                        action: k.Ws.WebsiteLink,
                        title: es.intl.string(es.t.fOUKvg),
                    };
                case n1.V1.TWITTER:
                    return {
                        icon: (0, r.jsx)(ll.XNeutralIcon, { ...t }),
                        action: k.Ws.XLink,
                        title: es.intl.string(es.t.INic4y),
                    };
                case n1.V1.YOUTUBE:
                    return {
                        action: k.Ws.YouTubeLink,
                        icon: (0, r.jsx)(li.YoutubeNeutralIcon, { ...t }),
                        title: es.intl.string(es.t.lNmxbE),
                    };
                case n1.V1.FACEBOOK:
                    return {
                        icon: (0, r.jsx)(la.FacebookNeutralIcon, { ...t }),
                        action: k.Ws.FacebookLink,
                        title: es.intl.string(es.t.FjyREK),
                    };
                case n1.V1.INSTAGRAM:
                    return {
                        icon: (0, r.jsx)(lr.InstagramNeutralIcon, { ...t }),
                        action: k.Ws.InstagramLink,
                        title: es.intl.string(es.t["cgR+IK"]),
                    };
                case n1.V1.BLUESKY:
                    return {
                        icon: (0, r.jsx)(ls.BlueskyNeutralIcon, { ...t }),
                        action: k.Ws.BlueskyLink,
                        title: es.intl.string(es.t["D/PHq5"]),
                    };
                case n1.V1.REDDIT:
                    return {
                        icon: (0, r.jsx)(lo.RedditNeutralIcon, { ...t }),
                        action: k.Ws.RedditLink,
                        title: es.intl.string(es.t["Hgb+fc"]),
                    };
                case n1.V1.TWITCH:
                    return {
                        icon: (0, r.jsx)(lc.TwitchNeutralIcon, { ...t }),
                        action: k.Ws.TwitchLink,
                        title: es.intl.string(es.t["7xtz4G"]),
                    };
                case n1.V1.ITCH:
                    return {
                        icon: (0, r.jsx)(lu.ItchNeutralIcon, { ...t }),
                        action: k.Ws.ItchLink,
                        title: es.intl.string(es.t.nOrtg9),
                    };
                case n1.V1.WIKIA:
                    return {
                        icon: (0, r.jsx)(ld.FandomNeutralIcon, { ...t }),
                        action: k.Ws.FandomLink,
                        title: es.intl.string(es.t.xDtQAQ),
                    };
                case n1.V1.IPHONE:
                case n1.V1.IPAD:
                    return {
                        icon: (0, r.jsx)(lm.AppleNeutralIcon, { ...t }),
                        action: k.Ws.AppStoreLink,
                        title: es.intl.string(es.t.LVy7Ug),
                    };
                case n1.V1.ANDROID:
                    return {
                        icon: (0, r.jsx)(lh.GooglePlayNeutralIcon, { ...t }),
                        action: k.Ws.GooglePlayStoreLink,
                        title: es.intl.string(es.t.V6rllO),
                    };
                case n1.V1.ROBLOX:
                    return {
                        icon: (0, r.jsx)(lg.RobloxNeutralIcon, { ...t }),
                        action: k.Ws.RobloxStoreLink,
                        title: es.intl.string(es.t["pJ+P+h"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, lp),
        c = s.useCallback(() => {
            (n(i), l(t.url));
        }, [i, l, n, t.url]);
    return (0, r.jsx)(J.m, {
        text: o,
        children: (0, r.jsx)(tV.D, { onClick: c, className: lf.y, title: o, children: a }),
    });
}
var lv = n(31300),
    lI = n(646270),
    lb = n(802516),
    lN = n(22363),
    lE = n(418524);
let ly = {
    [n3.Y.DESKTOP]: lv.ScreenIcon,
    mobile: lI.MobilePhoneIcon,
    [n3.Y.XBOX]: lb.XboxNeutralIcon,
    [n3.Y.PLAYSTATION]: lN.PlaystationNeutralIcon,
    [n3.Y.NINTENDO]: lE.NintendoSwitchNeutralIcon,
    [n3.Y.ROBLOX]: lg.RobloxNeutralIcon,
};
function lA(e) {
    let { platform: t } = e,
        n = (function (e) {
            switch (e) {
                case n3.Y.DESKTOP:
                    return es.intl.string(es.t.KT6uCJ);
                case "mobile":
                    return es.intl.string(es.t["0DvssQ"]);
                case n3.Y.XBOX:
                    return es.intl.string(es.t.DDWUJp);
                case n3.Y.PLAYSTATION:
                    return es.intl.string(es.t.fzMz2s);
                case n3.Y.NINTENDO:
                    return es.intl.string(es.t.AMW8je);
                case n3.Y.ROBLOX:
                    return es.intl.string(es.t.MPURhG);
            }
        })(t),
        l = ly[t];
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
var lC = n(424994),
    lk = n(623828);
function lS() {
    return (0, r.jsx)(Y.E, { variant: "body-sm/normal", color: "text-subtle", children: es.intl.string(es.t.GruYxV) });
}
let lL = function () {
    let { game: e } = W(),
        t = s.useMemo(() => e.genres.map(tZ.du).join(", "), [e]),
        n = e.getCompanyByRole(n0.wk.PUBLISHER),
        l = e.getCompanyByRole(n0.wk.DEVELOPER),
        i = n.map((e) => e.name).join(", "),
        a = l.map((e) => e.name).join(", "),
        o = e.firstReleaseDate,
        c = s.useMemo(() => {
            let t = new Set(e.platforms);
            (t.has(n3.Y.MACOS) || t.has(n3.Y.LINUX)) && t.add(n3.Y.DESKTOP);
            let n = t.has(n3.Y.IOS) || t.has(n3.Y.ANDROID);
            return n9.filter((e) => ("mobile" === e ? n : t.has(e)));
        }, [e.platforms]),
        u = s.useMemo(() => {
            let t = e.websites.filter((e) => {
                    let { category: t } = e;
                    return n1.pF.includes(t) && !n4.has(t);
                }),
                n = Object.values(n8)
                    .map((t) => n6(e, t))
                    .filter(eN.Vq);
            return t.sort((e, t) => n1.pF.indexOf(e.category) - n1.pF.indexOf(t.category)).concat(n);
        }, [e]),
        d = !(0, tc.uJ)(t),
        m = !(0, tc.uJ)(i),
        h = !(0, tc.uJ)(a),
        g = !(0, tc.uJ)(o),
        x = c.length > 0,
        f = u.length > 0 && !u.every((e) => (0, tc.uJ)(e.url));
    return (0, r.jsxs)("div", {
        className: lk.uW,
        children: [
            (0, r.jsx)("div", {
                className: lk.Gf,
                children: (0, r.jsx)(tr.D, {
                    variant: "body-md/medium",
                    color: "text-subtle",
                    children: es.intl.string(es.t["7OjmmH"]),
                }),
            }),
            (0, r.jsxs)("div", {
                className: lk.kL,
                children: [
                    (0, r.jsxs)("div", {
                        className: lk.J1,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== e.genres.length ? es.intl.string(es.t.pDgwYB) : es.intl.string(es.t.mjFKqn),
                            }),
                            d
                                ? (0, r.jsx)(Y.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      className: lk.Gu,
                                      children: t,
                                  })
                                : (0, r.jsx)(lS, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lk.J1,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: 1 !== n.length ? es.intl.string(es.t.Hc7Enk) : es.intl.string(es.t["4Byy/G"]),
                            }),
                            m
                                ? (0, r.jsx)(Y.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      className: lk.Gu,
                                      children: i,
                                  })
                                : (0, r.jsx)(lS, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lk.J1,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: 1 !== l.length ? es.intl.string(es.t.KATEJB) : es.intl.string(es.t.na3PT0),
                            }),
                            h
                                ? (0, r.jsx)(Y.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      className: lk.Gu,
                                      children: a,
                                  })
                                : (0, r.jsx)(lS, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lk.J1,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: es.intl.string(es.t.H3mPDT),
                            }),
                            g
                                ? (0, r.jsx)(Y.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      className: lk.Gu,
                                      children: nL.i$(new Date(o), "LL"),
                                  })
                                : (0, r.jsx)(lS, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lk.J1,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: c.length > 1 ? es.intl.string(es.t.PNqxNe) : es.intl.string(es.t["UxAag+"]),
                            }),
                            x
                                ? (0, r.jsx)("div", {
                                      className: lk.Gu,
                                      children: c.map((e) => (0, r.jsx)(lA, { platform: e }, e)),
                                  })
                                : (0, r.jsx)(lS, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lk.J1,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: es.intl.string(es.t["Oj3o1/"]),
                            }),
                            f
                                ? (0, r.jsx)("div", {
                                      className: lk.Gu,
                                      children: u.map((e) => (0, r.jsx)(lj, { website: e }, e.url)),
                                  })
                                : (0, r.jsx)(lS, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lk.J1,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: es.intl.string(es.t["BwQ+9e"]),
                            }),
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                className: lk.Gu,
                                children: es.intl.format(es.t.XPFZVl, { igdbLink: lC.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: lk.OQ, children: (0, r.jsx)(lt, {}) }),
        ],
    });
};
var lR = n(141628),
    lT = n(289363),
    lM = n(793919);
function lO() {
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: lM.uW,
        children: [
            (0, r.jsx)(td.Ay, { className: lM.dU, width: "30%" }),
            (0, r.jsxs)(td.qT, {
                className: lM.nV,
                children: [
                    (0, r.jsx)("div", { className: lM.sB, children: (0, r.jsx)(lT.default, { isLoading: !0 }) }),
                    (0, r.jsxs)("div", {
                        className: lM.hQ,
                        children: [
                            (0, r.jsxs)("div", {
                                className: lM.Yv,
                                children: [(0, r.jsx)(td.Ay, { width: "55%" }), (0, r.jsx)(td.Ay, { width: "85%" })],
                            }),
                            (0, r.jsx)(td.pv, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function lw(e) {
    let { analyticsLocations: t } = e,
        {
            trackAction: n,
            fetchedAuthorization: l,
            hasAlreadyLinked: i,
            canStartAuthorization: a,
            startAuthorization: o,
            connectionApp: c,
            hasOfficialApplication: u,
            officialApplicationFetchFailed: d,
        } = W(),
        h = (0, m.bG)([G.default], () => G.default.getCurrentUser()),
        g = s.useCallback(() => {
            (n(k.Ws.LinkAccount), o({ analyticsLocations: t }));
        }, [n, o, t]);
    return !u || d || null == h
        ? null
        : null == c || (a && !l)
          ? (0, r.jsx)(lO, {})
          : !a || i
            ? null
            : (0, r.jsxs)("div", {
                  className: lM.uW,
                  children: [
                      (0, r.jsx)(tr.D, {
                          className: lM.Gf,
                          variant: "body-md/medium",
                          color: "text-subtle",
                          children: es.intl.string(es.t["VDAhr+"]),
                      }),
                      (0, r.jsxs)("div", {
                          className: lM.kL,
                          children: [
                              (0, r.jsx)("div", {
                                  className: lM.sB,
                                  children: (0, r.jsx)(lT.default, { application: c }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: lM.hQ,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: lM.FS,
                                          children: [
                                              (0, r.jsx)(tr.D, {
                                                  variant: "heading-sm/semibold",
                                                  color: "text-default",
                                                  children: es.intl.formatToPlainString(es.t.hUbQT2, {
                                                      gameName: c.name,
                                                  }),
                                              }),
                                              (0, r.jsx)(Y.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-muted",
                                                  children: es.intl.string(es.t["JKqu+4"]),
                                              }),
                                          ],
                                      }),
                                      (0, r.jsx)(K.$, {
                                          variant: "secondary",
                                          icon: lR.ExperimentalGameControllerLinkIcon,
                                          text: es.intl.string(es.t.jynBQ5),
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
var lP = n(80687),
    lD = n(248643),
    lV = n(256905),
    lG = n(383055),
    l_ = n(191096),
    lW = n(90721),
    lF = n(371794),
    lU = n(534573),
    lY = n(635377);
let lB = new (n.n(lY)())({ max: 100 });
function lz() {
    let e = new Map();
    return (lB.forEach((t, n) => e.set(n, t)), e);
}
var lH = n(342857);
function lX(e, t) {
    return (0, lU.Ec)(e, { size: t, keepAspectRatio: !0, format: to.QB ? "webp" : null });
}
let lK = s.memo(function (e) {
    let { url: t, size: n, alt: l, className: i, ...a } = e,
        { dimensions: o, recordDimensions: c } = (function () {
            let [e, t] = s.useState(lz);
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
                        let i = lB.get(e) ?? l;
                        (lB.set(e, i),
                            t((t) => {
                                let n = t.get(e);
                                return n?.width === i.width && n.height === i.height ? t : new Map(t).set(e, i);
                            }));
                    },
                    [void 0],
                ),
            };
        })(),
        d = o.get(t),
        m = null != d && d.height > d.width,
        h = s.useCallback(
            (e) => {
                null != e &&
                    0 !== e.naturalWidth &&
                    0 !== e.naturalHeight &&
                    c(t, { width: e.naturalWidth, height: e.naturalHeight });
            },
            [t, c],
        ),
        g = s.useCallback((e) => h(e.currentTarget), [h]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            m && (0, r.jsx)("img", { ...a, src: lX(t, 106), className: lH.cL, alt: "", draggable: !1 }),
            (0, r.jsx)("img", {
                ...a,
                ref: h,
                src: lX(t, n),
                className: u()(i, lH.Sl, m && lH.F1),
                "data-portrait": m || void 0,
                alt: l,
                onLoad: g,
            }),
        ],
    });
});
var l$ = n(140128);
function lJ(e) {
    let { item: t, index: n } = e;
    return `${n}-${t.url}`;
}
let lq = s.memo(function (e) {
        let { item: t, index: n, isSelected: l, isPlaying: i, onSelect: a, gameName: o, listItemProps: c } = e,
            d = s.useCallback(() => a(n), [a, n]),
            m = c?.tabIndex;
        return (0, r.jsx)(tV.D, {
            ...c,
            className: u()(l$.JS, l && l$.Y4),
            onClick: d,
            children: (0, r.jsxs)("div", {
                className: l$.ub,
                children: [
                    (0, r.jsx)("div", {
                        className: l$.kV,
                        children: (0, r.jsx)(lK, {
                            url: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                            size: 106,
                            className: l$.xn,
                            alt: es.intl.formatToPlainString(es.t.COYYrn, { game: o }),
                            loading: "lazy",
                            decoding: "async",
                            draggable: !1,
                        }),
                    }),
                    "VIDEO" === t.type &&
                        (0, r.jsx)("div", {
                            className: l$.UZ,
                            children: (0, r.jsx)(lP.D, { playing: l && i, size: "sm", tabIndex: m }),
                        }),
                ],
            }),
        });
    }),
    lQ = s.memo(function (e) {
        let {
                item: t,
                reducedMotion: n,
                autoPlay: l,
                videoRef: i,
                mediaPlayerRef: a,
                onPlay: o,
                onPause: c,
                onFullscreenChange: u,
            } = e,
            d = s.useRef(null);
        return (
            (0, lW.A)({ videoRef: i, canvasRef: d, enabled: !n }),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    !n && (0, r.jsx)("canvas", { ref: d, className: l$.HW, "aria-hidden": "true" }),
                    (0, r.jsx)("div", {
                        className: l$.tN,
                        children: (0, r.jsx)(lD.A, {
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
                            renderLinkComponent: lG.bU,
                            onPlay: o,
                            onPause: c,
                            onFullscreenChange: u,
                            mediaPlayerClassName: l$.T9,
                            videoRef: i,
                            mediaPlayerRef: a,
                        }),
                    }),
                ],
            })
        );
    });
function lZ() {
    let { game: e, trackAction: t } = W(),
        [n, l] = s.useState(0),
        [i, a] = s.useState(null),
        [o, c] = s.useState(e.screenshotUrls),
        d = s.useRef(null),
        h = s.useRef(null),
        g = (0, m.bG)([tJ.Ay], () => tJ.Ay.useReducedMotion),
        { obscured: x } = (0, l_.I3)();
    o !== e.screenshotUrls && (c(e.screenshotUrls), l(0));
    let f = s.useMemo(() => {
            let t = (e.trailers ?? []).map((e) => {
                    let t = (0, lF.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, lF.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                n = (e.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" }));
            return [...t, ...n];
        }, [e.trailers, e.screenshotUrls]),
        p = s.useMemo(() => f.map((e, t) => ({ item: e, index: t })), [f]),
        j = f.length > 0 ? Math.min(n, f.length - 1) : 0,
        v = f[j],
        I = v?.type === "VIDEO",
        b = s.useCallback(
            (e) => {
                let t = f[j],
                    n = f[e];
                (t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? a(t.url) : a(null), l(e));
            },
            [f, j],
        ),
        [N, E] = s.useState(!1),
        y = s.useRef(null),
        A = s.useCallback(() => {
            t(I ? k.Ws.ClickTrailer : k.Ws.ClickImage);
            let e = d.current,
                n = y.current,
                i = null != e && !e.paused,
                a = e?.muted ?? !0,
                r = e?.currentTime ?? 0;
            n?.setPlay(!1);
            let s = f.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === j;
                    return { ...e, autoPlay: !!n && i, autoMute: !n || a, initialTimeSec: n ? r : void 0, videoRef: h };
                }
                return e;
            });
            (0, lV.R)({
                items: s,
                startingIndex: j,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: l,
                onClose: () => {
                    let e = h.current,
                        t = y.current,
                        n = null != e ? !e.paused : i;
                    (e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted))
                            : n && t?.setPlay(!0),
                        E(n));
                },
            });
        }, [t, f, j, I]),
        C = s.useCallback(() => E(!0), []),
        S = s.useCallback(() => E(!1), []),
        L = s.useCallback(() => a(null), []),
        R = s.useCallback(
            (e) => {
                e && A();
            },
            [A],
        );
    return 0 === f.length
        ? null
        : (0, r.jsxs)("div", {
              className: l$.kL,
              children: [
                  I
                      ? (0, r.jsx)("div", {
                            className: l$.ND,
                            children: (0, r.jsx)(
                                lQ,
                                {
                                    item: v,
                                    reducedMotion: g,
                                    autoPlay: !g && !x,
                                    videoRef: d,
                                    mediaPlayerRef: y,
                                    onPlay: C,
                                    onPause: S,
                                    onFullscreenChange: R,
                                },
                                `${j}-${v.url}`,
                            ),
                        })
                      : (0, r.jsxs)("div", {
                            className: l$.wp,
                            children: [
                                null != i &&
                                    !g &&
                                    (0, r.jsx)(
                                        "div",
                                        {
                                            className: l$.Jy,
                                            onAnimationEnd: L,
                                            children: (0, r.jsx)(lK, { url: i, size: 900, className: l$.c8, alt: "" }),
                                        },
                                        i,
                                    ),
                                (0, r.jsx)("div", { className: l$.QN }),
                                (0, r.jsx)(tV.D, {
                                    className: l$.gv,
                                    onClick: A,
                                    children: (0, r.jsx)("div", {
                                        className: l$.cs,
                                        children: (0, r.jsx)(
                                            lK,
                                            {
                                                url: v.url,
                                                size: 900,
                                                className: u()(l$.c8, l$.Jf),
                                                alt: es.intl.formatToPlainString(es.t.COYYrn, { game: e.name }),
                                            },
                                            v.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  (0, r.jsx)(ns.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      items: p,
                      getItemKey: lJ,
                      renderItem: (t, n) => {
                          let { item: l, index: i } = t;
                          return (0, r.jsx)(
                              lq,
                              {
                                  item: l,
                                  index: i,
                                  isPlaying: N,
                                  isSelected: i === j,
                                  onSelect: b,
                                  gameName: e.name,
                                  listItemProps: n,
                              },
                              `${i}-${l.url}`,
                          );
                      },
                  }),
              ],
          });
}
var l0 = n(49381),
    l1 = n(223273);
function l2(e, t, n) {
    if (null == e || null == t || t < 10) return l1.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? l1.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? l1.vI.VERY_POSITIVE
              : l1.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return l1.vI.MOSTLY_POSITIVE;
    if (e >= 40) return l1.vI.MIXED;
    if (e >= 20) return l1.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return l1.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return l1.vI.VERY_NEGATIVE;
    return l1.vI.OVERWHELMINGLY_NEGATIVE;
}
var l8 = n(792216);
let l4 = {
    appStore: { getTitle: () => es.intl.string(es.t.LVy7Ug), action: k.Ws.AppStoreReviews },
    googlePlay: { getTitle: () => es.intl.string(es.t.V6rllO), action: k.Ws.GooglePlayReviews },
};
function l6(e) {
    switch (e) {
        case l1.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case l1.vI.OVERWHELMINGLY_POSITIVE:
        case l1.vI.VERY_POSITIVE:
        case l1.vI.POSITIVE:
        case l1.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case l1.vI.MIXED:
            return "steam-review-text-mixed";
        case l1.vI.MOSTLY_NEGATIVE:
        case l1.vI.NEGATIVE:
        case l1.vI.VERY_NEGATIVE:
        case l1.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var l3 =
        (((a = {})[(a.MIGHTY = 1)] = "MIGHTY"),
        (a[(a.STRONG = 2)] = "STRONG"),
        (a[(a.FAIR = 3)] = "FAIR"),
        (a[(a.WEAK = 4)] = "WEAK"),
        a),
    l9 = n(778591);
function l5(e) {
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
            strokeWidth: 2 / (30 / 36),
            strokeDasharray: `${a} ${l - a}`,
        }),
    });
}
var l7 = n(315189);
let ie = { appStore: lm.AppleNeutralIcon, googlePlay: lh.GooglePlayNeutralIcon };
function it(e) {
    let { review: t } = e,
        { trackAction: n } = W(),
        l = (0, lx.A)(),
        i = ie[t.key],
        { action: a, url: o } = t,
        c = s.useCallback(() => {
            (n(a), l(o));
        }, [a, l, n, o]);
    return (0, r.jsx)(tV.D, {
        onClick: c,
        className: l7.nf,
        role: "link",
        "aria-label": t.accessibilityLabel,
        children: (0, r.jsxs)("div", {
            className: l7.tF,
            children: [
                (0, r.jsxs)("div", {
                    className: l7.hU,
                    children: [
                        (0, r.jsx)(i, { size: "sm", color: eR.A.colors.ICON_STRONG.css }),
                        (0, r.jsx)(tr.D, { variant: "heading-xs/medium", color: "text-strong", children: t.title }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: l7.nK,
                    children: [
                        (0, r.jsx)(Y.E, {
                            variant: "body-xs/medium",
                            color: "text-strong",
                            className: l7.yX,
                            children: t.ratingText,
                        }),
                        (0, r.jsx)(Y.E, {
                            variant: "body-xs/medium",
                            color: "text-subtle",
                            children: t.ratingCountText,
                        }),
                    ],
                }),
            ],
        }),
    });
}
function il(e) {
    let { url: t, title: n, rating: l, ratingCount: i, tooltipVariant: a = "all" } = e,
        { trackAction: o } = W(),
        c = (0, lx.A)(),
        u = l2(l, i, "recent" === a),
        d = l6(u),
        m = s.useCallback(() => {
            (o(k.Ws.SteamReviews), c(t));
        }, [c, o, t]);
    return (0, r.jsx)(tV.D, {
        onClick: m,
        className: l7.nf,
        role: "link",
        "aria-label": es.intl.string(es.t.YNC5Di),
        children: (0, r.jsxs)("div", {
            className: l7.tF,
            children: [
                (0, r.jsxs)("div", {
                    className: l7.hU,
                    children: [
                        (0, r.jsx)(l0.SteamNeutralIcon, { size: "sm", color: eR.A.colors.ICON_STRONG.css }),
                        (0, r.jsx)(tr.D, { variant: "heading-xs/medium", color: "text-strong", children: n }),
                    ],
                }),
                (0, r.jsx)(
                    J.m,
                    {
                        text:
                            u === l1.vI.NO_USER_REVIEWS
                                ? es.intl.string(es.t.CLMt8J)
                                : es.intl
                                      .format(
                                          "recent" === a
                                              ? es.t.TzvC0k
                                              : "localized" === a
                                                ? es.t.EOfrwm
                                                : es.t["lzANJ/"],
                                          { rating: l, rating_count: i?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, r.jsxs)("div", {
                            className: l7.nK,
                            children: [
                                (0, r.jsx)(Y.E, {
                                    variant: "body-xs/medium",
                                    color: d,
                                    className: l7.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case l1.vI.NO_USER_REVIEWS:
                                                return es.intl.string(es.t.CLMt8J);
                                            case l1.vI.OVERWHELMINGLY_POSITIVE:
                                                return es.intl.string(es.t["75sx1S"]);
                                            case l1.vI.VERY_POSITIVE:
                                                return es.intl.string(es.t["EkOVg+"]);
                                            case l1.vI.POSITIVE:
                                                return es.intl.string(es.t.ZUkFtr);
                                            case l1.vI.MOSTLY_POSITIVE:
                                                return es.intl.string(es.t.M7Z09a);
                                            case l1.vI.MIXED:
                                                return es.intl.string(es.t.c8yuHR);
                                            case l1.vI.MOSTLY_NEGATIVE:
                                                return es.intl.string(es.t.H0MSjG);
                                            case l1.vI.NEGATIVE:
                                                return es.intl.string(es.t.vpLrgz);
                                            case l1.vI.VERY_NEGATIVE:
                                                return es.intl.string(es.t["5spYuX"]);
                                            case l1.vI.OVERWHELMINGLY_NEGATIVE:
                                                return es.intl.string(es.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != i &&
                                    u !== l1.vI.NO_USER_REVIEWS &&
                                    (0, r.jsx)(Y.E, {
                                        variant: "body-xs/medium",
                                        color: "text-subtle",
                                        children: es.intl
                                            .format(es.t.sgIoin, { rating_count: i.toLocaleString() })
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
function ii(e) {
    let { url: t } = e,
        { game: n, trackAction: l } = W(),
        { reviews: i } = n,
        a = i?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        o = a.tier,
        c = a.topCriticRating ?? -1,
        u = a.topCriticRatingCount ?? -1,
        d = (c <= 0 || u <= 0) && null == o,
        m = (0, lx.A)(),
        h = s.useCallback(() => {
            (l(k.Ws.OpenCriticReviews), m(t));
        }, [m, l, t]);
    return (0, r.jsx)(tV.D, {
        onClick: h,
        className: l7.nf,
        role: "link",
        "aria-label": es.intl.string(es.t.aLNBAw),
        children: (0, r.jsxs)("div", {
            className: l7.Ur,
            children: [
                (0, r.jsx)(tr.D, {
                    variant: "heading-xs/medium",
                    color: "text-strong",
                    children: es.intl.string(es.t["UxvER+"]),
                }),
                (0, r.jsxs)("div", {
                    className: l7.WA,
                    children: [
                        null != o ? (0, r.jsx)(ia, { tier: o }) : null,
                        null != o && c > 0 && u > 0 ? (0, r.jsx)(ir, { rating: c, tier: o }) : null,
                        d
                            ? (0, r.jsx)(Y.E, {
                                  variant: "body-xs/medium",
                                  color: l6(l1.vI.NO_USER_REVIEWS),
                                  children: es.intl.string(es.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function ia(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case l3.MIGHTY:
                    return es.intl.string(es.t.aZej2g);
                case l3.STRONG:
                    return es.intl.string(es.t.MLxnSg);
                case l3.FAIR:
                    return es.intl.string(es.t["3f19KA"]);
                case l3.WEAK:
                    return es.intl.string(es.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case l3.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case l3.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case l3.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case l3.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, r.jsx)(
        J.m,
        {
            text: n,
            children: (0, r.jsx)("div", {
                className: l7.TE,
                children: (0, r.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function ir(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: i } = (function (e) {
            let t = "";
            switch (e) {
                case l3.MIGHTY:
                    t = "#fc430a";
                    break;
                case l3.STRONG:
                    t = "#9e00b4";
                    break;
                case l3.FAIR:
                    t = "#4aa1ce";
                    break;
                case l3.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, r.jsx)(
        J.m,
        {
            text: es.intl.string(es.t.Ub4YR1),
            children: (0, r.jsxs)("div", {
                className: l7.TE,
                style: { backgroundColor: i },
                children: [
                    (0, r.jsx)(l5, { rating: t, strokeColor: l }),
                    (0, r.jsx)(Y.E, {
                        variant: "body-xs/semibold",
                        color: "text-overlay-light",
                        className: l7.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let is = function () {
    let { game: e } = W(),
        t = (0, l9.I)(e.id),
        n = e.opencriticUrl,
        {
            steamReview: l,
            showSteamReview: i,
            showRecentSteamReview: a,
            showLocalizedReview: o,
            primarySteamRating: c,
            primarySteamRatingCount: u,
            primarySteamTitleKey: d,
            mobileStoreReviews: m,
        } = s.useMemo(() => {
            let n = e.reviews?.steam,
                l = e.steamReleaseStatus !== l8.Y.RETIRED_ABANDONED && null != t,
                i = l2(n?.recentRating, n?.recentRatingCount, !0),
                a = l && i !== l1.vI.NO_USER_REVIEWS,
                r =
                    null != n &&
                    null != n.localizedRating &&
                    null != n.localizedRatingCount &&
                    null != n.ratingCount &&
                    n.localizedRatingCount >= 200 &&
                    n.ratingCount >= 2e3;
            return {
                steamReview: n,
                showSteamReview: l,
                showRecentSteamReview: a,
                showLocalizedReview: r,
                primarySteamRating: r ? n?.localizedRating : n?.rating,
                primarySteamRatingCount: r ? n?.localizedRatingCount : n?.ratingCount,
                primarySteamTitleKey: r ? es.t["aWb+V4"] : es.t["8e4LiB"],
                mobileStoreReviews: Object.entries(l4).flatMap((t) => {
                    var n;
                    let l,
                        i,
                        [a, r] = t,
                        s = e.reviews?.[a],
                        o = s?.rating,
                        c = s?.ratingCount;
                    if (null == o || null == c) return [];
                    let u = n6(e, n8[a]);
                    return null != u
                        ? [
                              ((n = u.url),
                              (l = r.getTitle()),
                              (i = new Intl.NumberFormat(es.intl.currentLocale, {
                                  minimumFractionDigits: 1,
                                  maximumFractionDigits: 1,
                              }).format(o)),
                              {
                                  key: a,
                                  url: n,
                                  title: l,
                                  ratingText: es.intl.format(es.t["zdL4/T"], { rating: i }).toString(),
                                  ratingCountText: es.intl.format(es.t.u1m2hs, { rating_count: c }).toString(),
                                  accessibilityLabel: es.intl
                                      .format(es.t["63jSRx"], { store: l, rating: i, rating_count: c })
                                      .toString(),
                                  action: r.action,
                              }),
                          ]
                        : [];
                }),
            };
        }, [e, t]),
        h =
            (e.steamReleaseStatus !== l8.Y.RETIRED_ABANDONED || m.length > 0) &&
            e.reviews?.opencritic != null &&
            null != e.opencriticUrl;
    return i || h || 0 !== m.length
        ? (0, r.jsxs)("div", {
              className: l7.uW,
              children: [
                  (0, r.jsx)("div", {
                      className: l7.Gf,
                      children: (0, r.jsx)(tr.D, {
                          variant: "body-md/medium",
                          color: "text-subtle",
                          children: es.intl.string(es.t.GaAQXP),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: l7.kL,
                      children: [
                          a && null != t
                              ? (0, r.jsx)("div", {
                                    className: l7.WH,
                                    children: (0, r.jsx)(il, {
                                        url: t,
                                        title: es.intl.string(es.t.MQGNsN),
                                        rating: l?.recentRating,
                                        ratingCount: l?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          i && null != t
                              ? (0, r.jsx)("div", {
                                    className: l7.WH,
                                    children: (0, r.jsx)(il, {
                                        url: t,
                                        title: es.intl.string(d),
                                        rating: c,
                                        ratingCount: u,
                                        tooltipVariant: o ? "localized" : "all",
                                    }),
                                })
                              : null,
                          m.map((e) =>
                              (0, r.jsx)("div", { className: l7.WH, children: (0, r.jsx)(it, { review: e }) }, e.key),
                          ),
                          h && null != n
                              ? (0, r.jsx)("div", { className: l7.WH, children: (0, r.jsx)(ii, { url: n }) })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var io = n(969935),
    ic = n(722258),
    iu = n(987421),
    id = n(561769),
    im = n(484469),
    ih = n(682301);
let ig = [];
var ix = n(758836),
    ip = n(399872);
let ij = [0, 1, 2, 3, 4];
function iv(e) {
    return e.skuId;
}
function iI(e) {
    let { product: t, aspectRatio: n, listItemProps: l } = e,
        { skuId: i } = t,
        { flattenProductVariants: a, prioritizedCurrency: o, standalonePreview: c } = s.useContext(id.v3),
        { trackAction: u } = W(),
        d = s.useRef(null),
        m = s.useCallback(
            (e) => {
                (u(k.Ws.DiscordCollectiblesShopItem),
                    (d.current = e.currentTarget),
                    (0, ic.B)({
                        skuId: i,
                        analyticsLocations: [f.A.GAME_PROFILE],
                        analyticsSource: f.A.GAME_PROFILE,
                        returnRef: d,
                    }));
            },
            [u, i],
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
    return (0, r.jsx)(id.v3.Provider, {
        value: h,
        children: (0, r.jsx)(iu.A, {
            skuId: i,
            aspectRatio: n,
            cardClassName: ip.N,
            onClickCard: m,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: l,
        }),
    });
}
function ib() {
    return (0, r.jsx)(im.A, {});
}
function iN() {
    let { game: e, closeModal: t, trackAction: n } = W(),
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
                    } = (0, m.cf)([L.A], () => ({
                        hasFetched: null != e && L.A.hasShopCollectionBeenFetched(e),
                        isFetching: null != e && L.A.isShopCollectionFetching(e),
                        skuIds: null != e ? L.A.getShopCollectionSkuIds(e) : void 0,
                    }));
                    return (
                        (0, s.useEffect)(() => {
                            null == e || t || L.A.isShopCollectionFetching(e) || (0, nT.hd)(e);
                        }, [e, t]),
                        { skuIds: l ?? ig, hasFetched: t, isFetching: n }
                    );
                })(e),
                i = (0, ih.hv)(t, { flattenVariants: !0 }),
                a = (0, s.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                r = t.some((e) => i[e]?.state === "loading");
            return { products: a, isLoading: null != e && (!n || l || (t.length > 0 && r)) };
        })(e.shopCollectionIds?.[0]),
        a = s.useCallback(() => {
            (n(k.Ws.DiscordCollectiblesShop),
                t(),
                (0, io.Cz)({
                    analyticsLocations: [f.A.GAME_PROFILE],
                    analyticsSource: f.A.GAME_PROFILE,
                    tab: ix.G2.CATALOG,
                }));
        }, [n, t]);
    return i
        ? (0, r.jsx)(ty, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, r.jsx)(nm.A, { children: ij.map((e) => (0, r.jsx)(ib, {}, e)) }),
          })
        : 0 === l.length
          ? null
          : (0, r.jsx)(tA, {
                title: es.intl.string(es.t["5DYPT8"]),
                onClickViewAll: a,
                children: (0, r.jsx)(ns.A, {
                    gap: "md",
                    items: l,
                    getItemKey: iv,
                    renderItem: (e, t) => (0, r.jsx)(iI, { product: e, listItemProps: t }, e.skuId),
                }),
            });
}
var iE = n(459778),
    iy = n(281018),
    iA = n(987070);
let iC = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function ik(e) {
    return e.id;
}
function iS(e) {
    let { game: t, listItemProps: n } = e,
        { navigateToGame: l, trackAction: i } = W(),
        { shouldOpenGameProfile: a, gameId: o } = (0, iE.Ay)({
            gameId: t.id,
            source: k.GameProfileSources.SimilarGames,
        }),
        c = s.useCallback(() => {
            (i(k.Ws.ClickSimilarGame, { similarGameId: t.id }),
                a && null != o && l(o, k.GameProfileSources.SimilarGames));
        }, [t.id, o, i, a, l]);
    return (0, r.jsx)(J.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, r.jsx)(tV.D, {
            ...n,
            className: iA.Nr,
            onClick: c,
            "aria-label": es.intl.formatToPlainString(es.t["8QLQB+"], { gameName: t.name }),
            children: (0, r.jsx)(t0.Ay, {
                game: t,
                className: iA.xe,
                size: t0.wu.SMALL,
                imageSize: 256,
                loadingPlaceholder: (0, r.jsx)(t0.gr, { className: iA.uz }),
            }),
        }),
    });
}
function iL() {
    let { game: e } = W(),
        t = e.id,
        { isFetching: n, similarGames: l } = (0, iy.A)(t);
    return n
        ? (0, r.jsx)(ty, {
              showViewAllSkeleton: !1,
              skeletonTitleWidth: 124,
              children: (0, r.jsx)("div", {
                  className: iA.XG,
                  style: iC,
                  children: (0, r.jsx)(nm.A, {
                      children: eX()
                          .range(0, 8)
                          .map((e) => (0, r.jsx)(t0.gr, { className: iA.aZ }, e)),
                  }),
              }),
          })
        : 0 === l.length
          ? null
          : (0, r.jsx)(tA, {
                title: es.intl.string(es.t["6rLyQB"]),
                children: (0, r.jsx)("div", {
                    className: iA.XG,
                    style: iC,
                    children: (0, r.jsx)(ns.A, {
                        gap: "md",
                        items: l,
                        getItemKey: ik,
                        itemClassName: iA.cW,
                        renderItem: (e, t) => (0, r.jsx)(iS, { game: e, listItemProps: t }, e.id),
                    }),
                }),
            });
}
n(667532);
var iR = n(853022);
let iT = new Set(["1402418703554842694", "356877880938070016"]),
    iM = [n1.V1.EPICGAMES, n1.V1.STEAM, n1.V1.ROBLOX, n1.V1.BATTLENET, n1.V1.RIOT, n1.V1.MINECRAFT];
function iO(e) {
    return (0, r.jsx)(K.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var iw = n(349361),
    iP = n(422688),
    iD = n(505200),
    iV = n(695250);
let iG = function (e) {
    switch (e.category) {
        case n1.V1.STEAM:
            return {
                icon: l0.SteamNeutralIcon,
                text: es.intl.string(es.t.FsANs4),
                ariaLabel: es.intl.string(es.t["P+ePTG"]),
                action: k.Ws.SteamStoreLink,
                url: e.url,
            };
        case n1.V1.EPICGAMES:
            return {
                icon: iw.EpicGamesNeutralIcon,
                text: es.intl.string(es.t.ZbBMHa),
                ariaLabel: es.intl.string(es.t.BwX0UW),
                action: k.Ws.EpicStoreLink,
                url: e.url,
            };
        case n1.V1.ROBLOX:
            return {
                icon: lg.RobloxNeutralIcon,
                text: es.intl.string(es.t["pJ+P+h"]),
                ariaLabel: es.intl.string(es.t.tYxpdf),
                action: k.Ws.RobloxStoreLink,
                url: e.url,
            };
        case n1.V1.BATTLENET:
            return {
                icon: iP.BattlenetNeutralIcon,
                text: es.intl.string(es.t["A7grp+"]),
                ariaLabel: es.intl.string(es.t.x9at20),
                action: k.Ws.BattlenetStoreLink,
                url: e.url,
            };
        case n1.V1.RIOT:
            return {
                icon: iD.RiotGamesNeutralIcon,
                text: es.intl.string(es.t.h6MapL),
                ariaLabel: es.intl.string(es.t["528nvc"]),
                action: k.Ws.RiotStoreLink,
                url: e.url,
            };
        case n1.V1.MINECRAFT:
            return {
                icon: iV.MinecraftNeutralIcon,
                text: es.intl.string(es.t["HZbmO+"]),
                ariaLabel: es.intl.string(es.t.WWTqYn),
                action: k.Ws.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: lb.XboxNeutralIcon,
                text: es.intl.string(es.t["QpN/Iz"]),
                ariaLabel: es.intl.string(es.t["8JZmmF"]),
                action: k.Ws.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
var i_ = n(242216);
function iW(e) {
    let t,
        n,
        l,
        i,
        a,
        r =
            ((t = (0, l9.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === e3.d3x.XBOX_GAME_PASS && !(0, tc.uJ)(e.id));
                return t?.id == null ? null : (0, iR.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            s.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== n1.V1.EPICGAMES || !!iT.has(l)) &&
                            (e.category !== n1.V1.STEAM || a !== l8.Y.RETIRED_ABANDONED) &&
                            iM.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === l8.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === n1.V1.STEAM) ||
                    e.push({ category: n1.V1.STEAM, url: t });
                let r = e.sort((e, t) => (e.category === n1.V1.STEAM ? -1 : +(t.category === n1.V1.STEAM)));
                return (null != n && r.unshift({ category: "XBOX_GAME_PASS", url: n }), r);
            }, [t, i, l, a, n]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function iF(e) {
    let { data: t } = e,
        { trackAction: n } = W(),
        l = (0, lx.A)();
    return (0, r.jsx)(iO, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (n(t.action), l(t.url));
        },
    });
}
let iU = function () {
    let { game: e, trackAction: t } = W(),
        { showsStoreLinks: l, storeWebsites: i } = iW(e),
        a = s.useMemo(() => i.map(iG).filter((e) => null != e), [i]);
    if (!l) return null;
    if (1 === a.length) {
        let [e] = a;
        return (0, r.jsx)(iF, { data: e });
    }
    if (2 === a.length)
        return (0, r.jsxs)("div", {
            className: i_.G,
            children: [(0, r.jsx)(iF, { data: a[0] }), (0, r.jsx)(iF, { data: a[1] })],
        });
    let o = (0, r.jsx)(iO, {
        text: es.intl.string(es.t["/hMurx"]),
        "aria-label": es.intl.string(es.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: l, trackAction: i } = e;
                (0, g.mM)(async () => {
                    let { default: e } = await n.e(307898).then(n.bind(n, 679361));
                    return (n) => (0, r.jsx)(e, { game: t, websiteButtons: l, trackAction: i, ...n });
                });
            })({ game: e, websiteButtons: a, trackAction: t }),
    });
    return i.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, r.jsxs)("div", { className: i_.G, children: [(0, r.jsx)(iF, { data: a[0] }), o] })
        : o;
};
var iY = n(123292),
    iB = n(30772),
    iz = n(478676),
    iH = n.n(iz),
    iX = n(780788),
    iK = n(694403),
    i$ = n(417964),
    iJ = n(998218);
function iq(e, t, n) {
    let l = e[e.length - 1];
    null != l &&
    l.bold === n.bold &&
    l.italic === n.italic &&
    l.underline === n.underline &&
    l.heading === n.heading &&
    l.link === n.link
        ? (l.text += t)
        : e.push({ ...n, text: t });
}
let iQ = /[\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/,
    iZ = RegExp(iQ.source, "g"),
    i0 = /[\n\r\u001c-\u001e\u0085\u2029]/,
    i1 = RegExp(`(${i0.source})`),
    i2 = RegExp(`${/[\u0000-\u001f\u007f]/.source}|${i0.source}`),
    i8 = /[\p{M}\p{Default_Ignorable_Code_Point}]/gu,
    i4 = new Set(["subject", "body"]),
    i6 = /https?:\/\//i,
    i3 = /\b(https?)(?::[/\\]+|[/\\]{2,})/gi,
    i9 = String.raw`https?:\/\/[^\s<]+[^<.,:;"'\]\s]`,
    i5 = RegExp(`^(${i9})`, "i"),
    i7 = RegExp(i9, "gi"),
    ae = /(?:^|[^a-z0-9.!#$%&'*+\/=?^_`{|}~-])([a-z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-z0-9.-]+\.[a-z]{2,})/gi,
    at = new Map(
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
    an = { bold: !1, italic: !1, underline: !1 },
    al = /[\uD800-\uDBFF]/,
    ai = /^[a-z][a-z0-9:-]*$/,
    aa = /^<[a-z][a-z0-9:-]*\s*(?:\/+\s*)?>$/i,
    ar = /^<[a-z][a-z0-9:-]*(?:\s+[a-z0-9:+-]+)*(?:\s*\/+\s*[a-z0-9:+-]+(?:\s+[a-z0-9:+-]+)*)+\s*>$/i,
    as = /^<\/{2,}[\s/a-z0-9:+-]*>$/i,
    ao = new Set([
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
    ac = new Set([
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
function au(e, t) {
    let n;
    try {
        n = new URL(e);
    } catch {
        return;
    }
    return "http:" === n.protocol || "https:" === n.protocol
        ? n
        : t || "mailto:" !== n.protocol
          ? void 0
          : Array.from(n.searchParams.keys()).every((e) => i4.has(e.toLowerCase()))
            ? n
            : void 0;
}
function ad(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e ? au(e, t)?.href : void 0;
}
function am(e) {
    return (0, i$.El)(e.replace(i8, "").normalize("NFKC"));
}
function ah(e) {
    return am((0, i$.Fd)(e));
}
function ag(e) {
    return e.replace(i3, "$1://");
}
function ax(e, t) {
    if (
        0 === e.trim().length ||
        (0, iX.Ay)(e).some((n) => {
            let { url: l } = n;
            return (
                ad(l, !0) !== t &&
                (!!(!l.startsWith("http://") || e.includes(l)) || ad(`https://${l.slice(7)}`, !0) !== t)
            );
        })
    )
        return !0;
    let n = ag(e),
        l = Array.from(n.matchAll(i7), (e) => {
            let [t] = e;
            return t;
        });
    if ((ag(am(n.normalize("NFKD"))).match(i7) ?? []).length > l.length || l.some((e) => ad(e, !0) !== t)) return !0;
    let i = Array.from(e.replace(i7, " ").matchAll(ae), (e) => {
        let [, t] = e;
        return t;
    });
    if (0 === i.length) return !1;
    if (!t.startsWith("mailto:")) return !0;
    let a = iJ.A.safeDecodeURIComponent(new URL(t).pathname)?.toLowerCase();
    return null == a || i.some((e) => e.toLowerCase() !== a);
}
function af(e) {
    let t = 0;
    for (let n = e.length - 1; n >= 0 && ")" === e[n]; n--) {
        let n = e.indexOf("(", t);
        if (-1 === n) return e.slice(0, -1);
        t = n + 1;
    }
    return e;
}
function ap(e) {
    return ad(iH().unescapeUrl(e[2]));
}
let aj = {
        text: iH().defaultRules.text,
        link: {
            ...iK.Ay,
            match(e, t, n) {
                let l = iK.Ay.match(e, t, n);
                return null == l || i0.test(l[0]) ? null : null != ap(l) ? l : null;
            },
            parse(e, t, n) {
                let l = ap(e);
                return null == l || ax(ah(e[1]), l) ? { type: "text", content: e[0] } : iK.Ay.parse(e, t, n);
            },
        },
        url: {
            order: iH().defaultRules.url.order,
            requiredFirstCharacters: ["h", "H"],
            match(e) {
                let t = i5.exec(e);
                return (null != t && (t[0] = t[1] = af(t[1])), t);
            },
            parse(e) {
                let t = e[1],
                    n = t.search(i2),
                    l = -1 === n ? t : t.slice(0, n),
                    i = au(l, !0);
                if (null == i) return { type: "text", content: t };
                let a = (0, iK.W1)(l)?.displayTarget;
                if (null == a) return { type: "text", content: t };
                let r = new URL(a).host,
                    s = {
                        type: "url",
                        content: [
                            {
                                type: "text",
                                content:
                                    "" === i.username && "" === i.password && l.toLowerCase().includes(`//${r}`)
                                        ? l
                                        : a,
                            },
                        ],
                        target: i.href,
                    },
                    o = t.slice(l.length);
                return "" === o ? s : [s, { type: "text", content: o }];
            },
        },
    },
    av = iH().parserFor(aj);
function aI(e) {
    let { link: t, ...n } = e;
    return n;
}
function ab(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { marked: n, rawURLsOnly: l } = (function (e) {
            let t = [...e],
                n = new Set();
            for (let l = 0; l < e.length;) {
                let i = e[l];
                if (null == i.link || "" === i.link) {
                    l++;
                    continue;
                }
                let a = l + 1;
                for (; a < e.length && e[a].link === i.link;) a++;
                let r = "";
                for (let t = l; t < a; t++) r += e[t].text;
                let s = ah(r).trim(),
                    o = 0 === s.length ? "" : ax(s, i.link) ? void 0 : i.link;
                if (o !== i.link)
                    for (let i = l; i < a; i++) {
                        let l = aI(e[i]);
                        ((t[i] = null != o ? { ...l, link: o } : l), null == o && n.add(i));
                    }
                l = a;
            }
            return { marked: t, rawURLsOnly: n };
        })(
            (function (e, t) {
                if (!e.some((e) => iQ.test(e.text))) return e;
                let n = 0,
                    l = e.map((e) =>
                        e.text.split(i1).map((e) => {
                            let t = { text: e, paragraph: n };
                            return (i0.test(e) && n++, t);
                        }),
                    ),
                    i = new Set();
                return (
                    l.forEach((n, l) => {
                        for (let { text: r, paragraph: s } of n) {
                            var a;
                            let n = r.replace(iZ, "");
                            "" !== n &&
                                ((a = e[l]), null != a.link ? "" !== a.link : t && (i6.test(n) || n.includes("]("))) &&
                                i.add(s);
                        }
                    }),
                    e.map((e, t) => ({
                        ...e,
                        text: l[t]
                            .map((e) => {
                                let { text: t, paragraph: n } = e;
                                return i.has(n) ? t.replace(iZ, "") : t;
                            })
                            .join(""),
                    }))
                );
            })(e, t),
        ),
        i = [];
    for (let e = 0; e < n.length; e++) {
        let a = n[e];
        "" === a.link
            ? i.push(aI(a))
            : null == a.link && t
              ? (function (e, t, n) {
                    let l = t.text.includes("["),
                        i = n && t.text.includes("](");
                    (!i || l) && (i || i6.test(t.text))
                        ? (function e(t, n, l) {
                              if (Array.isArray(n)) for (let i of n) e(t, i, l);
                              else
                                  "text" === n.type && "string" == typeof n.content
                                      ? t.push({ ...l, text: n.content })
                                      : ("link" === n.type || "url" === n.type) &&
                                        e(t, n.content, { ...l, link: n.target, rawURL: "url" === n.type });
                          })(e, av(t.text, { inline: !0, allowLinks: n }), t)
                        : e.push(t);
                })(i, a, !l.has(e))
              : i.push(a);
    }
    let a = [];
    for (let { rawURL: e, ...t } of (function (e) {
        if (!e.some((e) => null != e.link)) return e;
        let t = (function (e) {
                let t = e.map((e) => e.text.split(i2).map(ah).join(" "));
                for (let n = 0; n < e.length;) {
                    let l = e[n];
                    if (null == l.link || !0 === l.rawURL) {
                        n++;
                        continue;
                    }
                    let i = n + 1;
                    for (; i < e.length && !0 !== e[i].rawURL && e[i].link === l.link;) i++;
                    (Array.from(t.slice(n, i).join("").matchAll(i7)).some((e) => {
                        let [t] = e;
                        return ad(af(t), !0) === l.link;
                    }) && (t[i - 1] += " "),
                        (n = i));
                }
                return t;
            })(e),
            n = 0,
            l = t.map((e) => (n += e.length)),
            i = [...e],
            a = 0;
        for (let e of t.join("").matchAll(i7)) {
            let t = af(e[0]);
            for (; l[a] <= e.index;) a++;
            let n = e.index + t.length,
                r = a;
            for (; l[r] < n;) r++;
            if (a === r) continue;
            let s = ad(t, !0);
            for (let e = a; e <= r; e++) (null == s || i[e].link !== s) && (i[e] = aI(i[e]));
        }
        return i;
    })(i))
        iq(a, t.text, t);
    return a;
}
function aN(e, t) {
    let n = e.charCodeAt(t);
    return 32 === n || 10 === n || 9 === n || 13 === n || 12 === n;
}
function aE(e, t) {
    let n = e.charCodeAt(t);
    return 32 === n || 9 === n || 12 === n;
}
function ay(e) {
    let t = 0;
    for (; t < e.length && aN(e, t);) t++;
    return t;
}
function aA(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = e.length;
    for (; n > t && aN(e, n - 1);) n--;
    return n;
}
function aC(e, t) {
    let n = "",
        l = 0,
        i = t,
        a = -1;
    for (let t = e.indexOf("\n"); -1 !== t; t = e.indexOf("\n", t + 1)) {
        let r = a + 1,
            s = !0;
        for (let n = r; n < t; n++)
            if (!aE(e, n)) {
                s = !1;
                break;
            }
        (i > 0 && s ? ((n += e.slice(l, r)), i < 2 && (n += "\n"), (l = t + 1), i++) : (i = 1), (a = t));
    }
    return 0 === l ? e : n + e.slice(l);
}
function ak(e) {
    for (; e.length > 0;) {
        let t = e[e.length - 1],
            n = t.text.length;
        for (; n > 0 && aE(t.text, n - 1);) n--;
        if (n === t.text.length) break;
        if (0 === n) e.pop();
        else {
            t.text = t.text.slice(0, n);
            break;
        }
    }
}
function aS(e) {
    return e.includes("\r") ? e.replace(/\r\n?/g, "\n") : e;
}
function aL(e) {
    let t = aC(aS(e), 0),
        n = ay(t),
        l = aA(t, n);
    return l > n ? [{ text: t.slice(n, l), ...an }] : [];
}
function aR(e, t) {
    let n = Math.max(0, Math.floor(t)),
        l = al.test(e.charAt(n - 1)) ? n - 1 : n;
    return aS(e.slice(0, l));
}
function aT(e) {
    return e.links[e.links.length - 1];
}
function aM(e) {
    return null != e ? { ...an, link: e } : an;
}
function aO(e) {
    let t = aT(e);
    return {
        bold: e.styles.bold > 0 || null != e.heading,
        italic: e.styles.italic > 0,
        underline: e.styles.underline > 0,
        ...(null != e.heading ? { heading: e.heading } : {}),
        ...(null != t ? { link: t } : {}),
    };
}
function aw(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : an,
        l = t.indexOf("\n");
    if (e.trailingNewlines > 0 && -1 !== l) {
        let n = !0;
        for (let e = 0; e < l; e++)
            if (!aE(t, e)) {
                n = !1;
                break;
            }
        n && ak(e.runs);
    }
    let i = e.trailingNewlines,
        a = aC(t, e.trailingNewlines);
    if ((0 === e.runs.length && (a = a.slice(ay(a))), 0 === a.length)) return;
    iq(e.runs, a, n);
    let r = (function (e) {
        let t = 0;
        for (let n = e.length - 1; n >= 0; n--)
            if (10 === e.charCodeAt(n)) t++;
            else if (!aE(e, n)) break;
        return t;
    })(a);
    e.trailingNewlines = ay(a) === a.length ? Math.min(2, i + r) : r;
}
function aP(e) {
    if (0 === e.pendingBreaks) for (let t of e.held) aw(e, t.text, t);
    else
        e.runs.length > 0 &&
            (e.trailingNewlines > 0 && ak(e.runs),
            aw(e, "\n".repeat(Math.max(0, e.pendingBreaks - e.trailingNewlines)), aM(e.spacingLink)));
    ((e.held = []), (e.pendingBreaks = 0));
}
function aD(e, t) {
    let n = e.atBoundary ? ay(t) : 0,
        l = aA(t, n),
        i = aO(e);
    (l > n && (aP(e), aw(e, t.slice(n, l), i), (e.spacingLink = i.link), (e.atBoundary = e.afterMarker = !1)),
        l < t.length && e.held.push({ ...i, text: t.slice(l) }));
}
function aV(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    null != t &&
        ((n && e.afterMarker) || (e.pendingBreaks = Math.max(e.pendingBreaks, e.itemDepth > 0 ? 1 : t)),
        (e.atBoundary = !0),
        n || (e.afterMarker = !1));
}
function aG(e, t) {
    let n,
        l = {
            markup: e,
            keepInvalidAnchors: t?.keepInvalidAnchors === !0,
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
        i = (function (e) {
            let t;
            class n extends iB.i {
                onclosetag(n, l) {
                    let i = this.startIndex,
                        a = e.markup.slice(n, l).toLowerCase();
                    ((t = void 0), super.onclosetag(n, l));
                    let r = a.replace(/\/+$/, "");
                    if (e.hiddenDepth > 0 || t === a || at.has(r) || ao.has(r) || ac.has(r)) return;
                    let s = e.markup.indexOf(">", l);
                    -1 !== s && aD(e, e.markup.slice(i, s + 1));
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
                            let s = at.get(t);
                            if (e.hiddenDepth > 0 || s?.hidden === !0) return void e.hiddenDepth++;
                            if (null == s) {
                                let n,
                                    r,
                                    s = e.markup.slice(l.startIndex, l.endIndex + 1);
                                (!ai.test(t) ||
                                    ((aa.test(s) || ar.test(s)) &&
                                        !ao.has(t) &&
                                        !ac.has(t) &&
                                        ((i = l.endIndex),
                                        (e.closingTags ??= e.markup.includes("</")
                                            ? ((a = e.markup),
                                              (n = new Map()),
                                              (r = new iB.i(
                                                  {
                                                      onclosetag(e) {
                                                          let t = r.startIndex;
                                                          a.slice(t, t + e.length + 2).toLowerCase() === `</${e}` &&
                                                              n.set(e, t);
                                                      },
                                                  },
                                                  { decodeEntities: !0, recognizeSelfClosing: !0 },
                                              )).end(a),
                                              n)
                                            : new Map()),
                                        !((e.closingTags.get(t) ?? -1) > i)))) &&
                                    aD(e, s);
                                return;
                            }
                            (aV(e, s.breaks, !0),
                                null != s.style && e.styles[s.style]++,
                                !0 === s.link &&
                                    (e.links.push(ad(n.href) ?? (e.keepInvalidAnchors ? "" : void 0)),
                                    (e.spacingLink = void 0)),
                                null != s.heading && (e.heading = s.heading),
                                null != s.list && e.lists.push({ ordered: "ordered" === s.list, index: 0 }),
                                !0 === s.lineBreak &&
                                    (aP(e),
                                    aw(e, "\n", null != e.heading ? aO(e) : aM(aT(e))),
                                    (e.atBoundary = !0),
                                    (e.afterMarker = !1)),
                                !0 === s.item &&
                                    (aP(e),
                                    (r = e.lists[e.lists.length - 1]),
                                    aw(e, r?.ordered === !0 ? `${++r.index}. ` : "\u2022 "),
                                    e.itemDepth++,
                                    (e.afterMarker = !0)));
                        })(e, t, n, l),
                    onclosetag(n, l) {
                        (l || (t = n),
                            (function (e, t) {
                                if (e.ending) return;
                                if (e.hiddenDepth > 0) return e.hiddenDepth--;
                                let n = at.get(t);
                                null != n &&
                                    (aV(e, n.breaks),
                                    null != n.style && e.styles[n.style]--,
                                    !0 === n.link && (e.links.pop(), (e.spacingLink = void 0)),
                                    null != n.heading && (e.heading = void 0),
                                    null != n.list && e.lists.pop(),
                                    !0 === n.item && e.itemDepth--);
                            })(e, n));
                    },
                    oncomment() {
                        let t = e.markup.slice(l.startIndex, l.endIndex + 1);
                        0 === e.hiddenDepth && as.test(t) && aD(e, t);
                    },
                    ontext(t) {
                        0 === e.hiddenDepth && aD(e, t);
                    },
                },
                { decodeEntities: !0, recognizeSelfClosing: !0 },
            );
            return l;
        })(l);
    (i.write(e),
        (l.ending = !0),
        i.end(),
        "" === (n = l.markup.slice(l.unfinishedTag ?? i.startIndex)) ||
            /^<\/?br\/?$/i.test(n) ||
            new iB.i({ ontext: (e) => aD(l, e) }, { decodeEntities: !0 }).end(n.replace(/</g, "&lt;")));
    for (var a = l.runs; a.length > 0;) {
        let e = a[a.length - 1];
        if (((e.text = e.text.slice(0, aA(e.text))), e.text.length > 0)) break;
        a.pop();
    }
    return a;
}
var a_ = n(9578);
let aW = { h1: "heading-lg/semibold", h2: "heading-sm/semibold", h3: "heading-xs/semibold", h4: "heading-xs/semibold" },
    aF = { h1: 2, h2: 3, h3: 4, h4: 5 };
var aU = n(407355);
function aY(e) {
    let { italic: t, underline: n } = e;
    return u()({ [aU.T]: t, [aU.V]: n });
}
function aB(e) {
    let { run: t, textVariant: n, boldTextVariant: l } = e;
    if (null != t.heading) return (0, r.jsx)(az, { run: t });
    let { text: i, bold: a, italic: s, underline: o } = t;
    return a || s || o
        ? (0, r.jsx)(Y.E, {
              tag: a ? "strong" : "span",
              variant: a ? l : n,
              color: "none",
              className: aY(t),
              children: s ? (0, r.jsx)("em", { children: i }) : i,
          })
        : i;
}
function az(e) {
    let { run: t } = e,
        { text: n, italic: l, underline: i } = t;
    if (!l && !i) return n;
    let a = aY(t);
    return l && i
        ? (0, r.jsx)("u", { className: a, children: (0, r.jsx)("em", { children: n }) })
        : l
          ? (0, r.jsx)("em", { className: a, children: n })
          : (0, r.jsx)("u", { className: a, children: n });
}
function aH(e) {
    let { segment: t, textVariant: n, boldTextVariant: l, onLinkPress: i } = e,
        a = t.runs.map((e, t) => (0, r.jsx)(aB, { run: e, textVariant: n, boldTextVariant: l }, t)),
        { link: s } = t;
    return null == s
        ? a
        : (0, r.jsx)(a_.A, {
              href: s,
              title: t.runs.map((e) => e.text).join(""),
              onClick: () => (i?.(s), !1),
              children: a,
          });
}
function aX(e) {
    let { group: t, ...n } = e,
        { heading: l, segments: i } = t,
        a = i.map((e, t) =>
            (0, r.jsx)(
                aH,
                {
                    segment: e,
                    textVariant: n.textVariant,
                    boldTextVariant: n.boldTextVariant,
                    onLinkPress: n.onLinkPress,
                },
                t,
            ),
        );
    return null == l
        ? a
        : (0, r.jsx)(tK.F, {
              forceLevel: n.headingLevels[l],
              children: (0, r.jsx)(tr.D, { variant: n.headingVariants[l], color: n.headingColor, children: a }),
          });
}
function aK(e) {
    let {
            runs: t,
            textVariant: n = "body-md/normal",
            boldTextVariant: l = "body-md/semibold",
            headingVariants: i = aW,
            headingColor: a = "text-strong",
            headingLevels: o = aF,
            onLinkPress: c,
        } = e,
        u = s.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    for (let n of e) {
                        let e = t[t.length - 1];
                        (null == e || e.heading !== n.heading) &&
                            ((e = { heading: n.heading, segments: [] }), t.push(e));
                        let l = e.segments[e.segments.length - 1];
                        null != l && l.link === n.link ? l.runs.push(n) : e.segments.push({ link: n.link, runs: [n] });
                    }
                    return t;
                })(t),
            [t],
        ),
        d = {
            textVariant: n,
            boldTextVariant: l,
            headingVariants: i,
            headingColor: a,
            headingLevels: o,
            onLinkPress: c,
        };
    return u.map((e, t) => (0, r.jsx)(aX, { group: e, ...d }, t));
}
var a$ = n(672572),
    aJ = n(94936);
function aq() {
    let e = s.useRef(null),
        { game: t, isTwoColumn: n, trackAction: l } = W(),
        i = s.useMemo(
            () =>
                null != t.description
                    ? (function (e) {
                          let { maxLength: t = 1e4, parseTextLinks: n = !1 } =
                                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                              l = e.includes("<") || e.includes("&");
                          if (!n) return l ? ab(aG(aR(e, t)), !1) : aL(e);
                          let i = aR(e, t);
                          return ab(l ? aG(i, { keepInvalidAnchors: !0 }) : aL(i));
                      })(t.description, { parseTextLinks: !0 })
                    : [],
            [t.description],
        ),
        a = n ? 8 : 5,
        {
            isExpanded: o,
            showToggle: c,
            handleToggleExpanded: d,
            handleDescriptionFocus: m,
        } = (function (e, t, n) {
            let { trackAction: l } = W(),
                {
                    isCollapsed: i,
                    isExpanded: a,
                    showToggle: r,
                    setHasOverflow: o,
                    setExpanded: c,
                    toggleExpanded: u,
                } = (function (e) {
                    let [t, n] = s.useState("full"),
                        l = s.useCallback((e) => {
                            n((t) => ("expanded" === t ? t : e ? "collapsed" : "full"));
                        }, []),
                        i = s.useCallback(
                            (l) => {
                                let i = l ? "expanded" : "collapsed";
                                "full" !== t && t !== i && (e(l ? k.Ws.ShowMore : k.Ws.ShowLess), n(i));
                            },
                            [e, t],
                        ),
                        a = s.useCallback(() => i("expanded" !== t), [i, t]);
                    return {
                        isCollapsed: "collapsed" === t,
                        isExpanded: "expanded" === t,
                        showToggle: "full" !== t,
                        setHasOverflow: l,
                        setExpanded: i,
                        toggleExpanded: a,
                    };
                })(l),
                d = s.useRef(!1),
                m = s.useRef(null);
            (s.useEffect(() => {
                let t = e.current;
                if (null == t) return;
                let n = new ResizeObserver(() => {
                    o(t.scrollHeight - t.clientHeight > 1);
                });
                return (n.observe(t), () => n.disconnect());
            }, [e, t, n, o]),
                s.useLayoutEffect(() => {
                    let t = e.current;
                    null != t &&
                        (a && null != m.current
                            ? ((t.scrollTop = 0),
                              m.current.scrollIntoView({ block: "nearest", behavior: "instant" }),
                              (m.current = null))
                            : i &&
                              ((t.scrollTop = 0),
                              d.current &&
                                  ((d.current = !1), t.scrollIntoView({ block: "start", behavior: "instant" }))));
                }, [e, i, a]));
            let h = s.useCallback(() => {
                (a && (d.current = !0), u());
            }, [a, u]);
            return {
                isExpanded: a,
                showToggle: r,
                handleToggleExpanded: h,
                handleDescriptionFocus: s.useCallback(
                    (t) => {
                        let n = e.current,
                            l = t.target;
                        if (!i || null == n || !(0, nA.vq)(l, HTMLAnchorElement) || !l.matches(":focus-visible"))
                            return;
                        let a = n.getBoundingClientRect(),
                            r = l.getBoundingClientRect();
                        (n.scrollTop > 1 || r.top < a.top - 1 || r.bottom > a.bottom + 1) && ((m.current = l), c(!0));
                    },
                    [i, c, e],
                ),
            };
        })(e, t.description, a),
        h = s.useCallback(() => {
            l(k.Ws.ClickDescriptionLink);
        }, [l]);
    if (0 === i.length) return null;
    let g = o ? es.intl.string(es.t["6MwJo/"]) : es.intl.string(es.t.lBeKY2);
    return (0, r.jsxs)("div", {
        className: u()(a$.fi, aJ.k),
        onFocusCapture: m,
        children: [
            (0, r.jsx)(Y.E, {
                ref: e,
                className: aJ.Q,
                lineClamp: o ? void 0 : a,
                variant: "body-md/medium",
                children: (0, r.jsx)(aK, { runs: i, textVariant: "body-md/medium", onLinkPress: h }),
            }),
            c && (0, r.jsx)(iY.Q, { onClick: d, text: g, "aria-expanded": o }),
        ],
    });
}
var aQ = n(40478),
    aZ = n(764948);
let a0 = s.memo(function (e) {
    let { analyticsLocations: t, selectTab: n, getScrollOffset: l } = e;
    return (0, r.jsxs)("div", {
        className: aZ.V,
        children: [
            (0, r.jsx)(lZ, {}),
            (0, r.jsxs)("div", {
                className: aQ.h,
                children: [
                    (0, r.jsx)(t9, {}),
                    (0, r.jsxs)("div", { className: aQ.X, children: [(0, r.jsx)(iU, {}), (0, r.jsx)(aq, {})] }),
                ],
            }),
            (0, r.jsx)(lw, { analyticsLocations: t }),
            (0, r.jsx)(tb, {}),
            (0, r.jsx)(nZ, { getScrollOffset: l }),
            (0, r.jsx)(ny, { selectTab: n }),
            (0, r.jsx)(iN, {}),
            (0, r.jsx)(iL, {}),
            (0, r.jsx)(is, {}),
            (0, r.jsx)(lL, {}),
        ],
    });
});
var a1 = n(164135);
let a2 = s.memo(function (e) {
    let { selectTab: t, getScrollOffset: n } = e;
    return (0, r.jsxs)("div", {
        className: a1.V,
        children: [
            (0, r.jsxs)("div", { className: a1.B, children: [(0, r.jsx)(lZ, {}), (0, r.jsx)(aq, {})] }),
            (0, r.jsx)(nZ, { getScrollOffset: n }),
            (0, r.jsx)(ny, { selectTab: t }),
            (0, r.jsx)(iN, {}),
            (0, r.jsx)(iL, {}),
        ],
    });
});
var a8 = n(881698),
    a4 = n(928550),
    a6 = n(613412),
    a3 = n(414499),
    a9 = n(359549),
    a5 = n(139286),
    a7 = n(873516);
function re(e) {
    let { onCloudPlayClick: t, analyticsLocations: n } = e,
        { closeModal: l, trackAction: i } = W();
    (0, a5.A)({
        name: a6.ImpressionNames.CLOUD_PLAY_CTA,
        type: a6.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let a = s.useCallback(() => {
        (i(k.Ws.CloudPlay), l(), t());
    }, [l, t, i]);
    return (0, r.jsx)(J.m, {
        text: es.intl.string(es.t.JVwWva),
        position: "top",
        children: (0, r.jsx)(K.$, {
            icon: a3.CloudIcon,
            text: es.intl.string(es.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: a,
            fullWidth: !0,
        }),
    });
}
function rt(e) {
    let { cloudPlayAppId: t, analyticsLocations: n } = e,
        { game: l } = W(),
        i = (0, a9.rC)({ applicationId: t, sourceApplicationId: l.id, analyticsLocations: n });
    return null == i
        ? null
        : (0, r.jsx)("div", {
              className: a7.k,
              children: (0, r.jsx)(re, { onCloudPlayClick: i, analyticsLocations: n }),
          });
}
var rn = n(768626);
function rl(e) {
    let { analyticsLocations: t } = e,
        { game: n } = W(),
        l = (0, a8.A)(n.linkedApplications)?.id,
        [i] = (0, a4.L_)(n.getOfficialApplicationId()),
        [a] = (0, a4.L_)(n.id),
        { showsStoreLinks: s } = iW(n);
    return (0, r.jsxs)("div", {
        className: u()(rn.pz, a$.fi, s ? rn.FJ : rn.dg),
        children: [
            null == l || i || a ? null : (0, r.jsx)(rt, { cloudPlayAppId: l, analyticsLocations: t }),
            (0, r.jsxs)("div", {
                className: aZ.V,
                children: [
                    (0, r.jsx)(iU, {}),
                    (0, r.jsx)(lw, { analyticsLocations: t }),
                    (0, r.jsx)(tb, {}),
                    (0, r.jsx)(is, {}),
                    (0, r.jsx)(lL, {}),
                ],
            }),
        ],
    });
}
var ri = n(105865);
function ra(e) {
    let { isTwoColumn: t, selectTab: n, selectionVersion: l, initialScrollOffset: i, analyticsLocations: a } = e,
        o = s.useRef(null),
        c = s.useRef(null),
        u = s.useRef(l);
    (s.useLayoutEffect(() => {
        0 === l && null != i && i > 0 && c.current?.getScrollerNode()?.scrollTo({ top: i, behavior: "instant" });
    }, [i, l]),
        s.useLayoutEffect(() => {
            l !== u.current &&
                (c.current?.getScrollerNode()?.scrollTo({ top: 0, behavior: "instant" }), (u.current = l));
        }, [l]));
    let d = s.useCallback(() => c.current?.getScrollerNode()?.scrollTop ?? 0, []),
        m = s.useCallback((e) => {
            if (null != o.current) {
                let t = Math.max(0, 1 - e.currentTarget.scrollTop / 150);
                o.current.style.opacity = String(t);
            }
        }, []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(t4, { ref: o }),
            (0, r.jsxs)(eK.Ch, {
                ref: c,
                className: ri.XG,
                onScroll: m,
                children: [
                    (0, r.jsx)("div", { className: ri.xY, "aria-hidden": !0 }),
                    (0, r.jsx)(ne, {}),
                    (0, r.jsx)(tK.F, {
                        children: t
                            ? (0, r.jsxs)("div", {
                                  className: ri.jC,
                                  children: [
                                      (0, r.jsx)(a2, { selectTab: n, getScrollOffset: d }),
                                      (0, r.jsx)(rl, { analyticsLocations: a }),
                                  ],
                              })
                            : (0, r.jsx)("div", {
                                  className: ri.b9,
                                  children: (0, r.jsx)(a0, { analyticsLocations: a, selectTab: n, getScrollOffset: d }),
                              }),
                    }),
                ],
            }),
        ],
    });
}
var rr = n(953331),
    rs = n(787188);
function ro(e) {
    let { applicationId: t, selectedPageIndex: n } = e;
    return (0, r.jsx)(rr.SocialLayerStorefrontInnerWrapper, {
        applicationId: t,
        pageIndex: n,
        analyticsLocation: f.A.GAME_PROFILE_GAME_SHOP,
        analyticsPlacement: nl.Ye.GAME_PROFILE_GAME_SHOP,
        className: rs.kL,
        scrollerClassName: rs.XG,
        promotionBannerClassName: rs.Rv,
    });
}
var rc = n(733391),
    ru = n(171616);
function rd(e) {
    let {
            gameId: t,
            source: n,
            sourceUserId: l,
            transitionState: i,
            onClose: a,
            initialScrollOffset: o,
            initialTab: c,
            navigateToGame: W,
        } = e,
        [F, U] = s.useState(!0),
        [Y, B] = s.useState(null),
        { clientThemesClassName: z } = (0, I.Ay)(),
        H = (0, m.bG)([C.default], () => C.default.locale),
        X = s.useMemo(() => (0, k.u9)(), []),
        { analyticsLocations: K } = (0, p.Ay)(f.A.GAME_PROFILE),
        $ = (0, R.s)(t),
        { data: J } = (0, E.I)(t),
        q = J?.getOfficialApplicationId(),
        Q = (0, T.rG)(J),
        Z = null != q,
        ee = (0, m.bG)([v.A], () => null != q && v.A.didFetchingApplicationFail(q), [q]),
        et = J?.name ?? "",
        en = (0, O.A)(J),
        el = s.useRef(null);
    s.useEffect(() => {
        el.current = Y;
    }, [Y]);
    let {
            hasAlreadyLinked: ei,
            canStartAuthorization: ea,
            fetched: er,
            startAuthorization: es,
            connectionApp: eo,
        } = (0, j.RD)(J),
        { invite: ec, isMember: eu, isResolving: ed } = (0, T.Ay)(J, B),
        { socialLayerStorefrontRecommendationsData: em, socialLayerStorefrontRecommendationsLoading: eh } = (function (
            e,
        ) {
            let t = G.default.getCurrentUser()?.id,
                n = s.useMemo(() => (null != t ? [t] : []), [t]),
                { storefrontApplicationId: l, isStorefrontConfigLoaded: i } = (0, m.cf)(
                    [P.A],
                    () => ({
                        storefrontApplicationId: null != e ? P.A.getApplicationIdFromDetectableId(e) : void 0,
                        isStorefrontConfigLoaded: "success" === P.A.getConfigFetchState().state,
                    }),
                    [e],
                ),
                a = (0, w.h)(l),
                r = (0, m.bG)([v.A], () => null != l && v.A.didFetchingApplicationFail(l), [l]),
                o = s.useMemo(() => (null != l ? [l] : []), [l]),
                { recommendations: c, status: u } = (0, V.XQ)({
                    applicationIds: o,
                    userIds: n,
                    numItems: 6,
                    source: D.B.USER_PROFILE,
                }),
                d = s.useMemo(
                    () =>
                        null == a || null == a.guildId || "success" !== u || 0 === c.length
                            ? null
                            : { application: a, skuIds: c.map((e) => e.id), guildId: a.guildId },
                    [a, u, c],
                ),
                h = "loading" === u,
                g = "success" === u && c.length > 0 && null == a && !r;
            return {
                socialLayerStorefrontRecommendationsData: d,
                socialLayerStorefrontRecommendationsLoading: i && null != l && (h || g),
            };
        })(t),
        eg = s.useCallback(
            function (e) {
                let { similarGameId: l, communityGuildId: i } =
                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = (0, k.VO)(el.current);
                (0, k.Tn)({
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
        ((0, k.rw)({ source: n, viewId: X, gameId: t, gameName: et, authorId: l, profileType: k.HV.FullProfile }),
            (0, b.He)());
    }),
        (0, x.Ay)(() => () => {
            let { isVerified: e, guildId: n } = (0, k.VO)(el.current),
                l = Date.now(),
                i = $.map((e) => {
                    let t = (0, N.JM)(e) ? (0, N.W6)(e, l) : (0, N.aJ)(e, H);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, k.V_)({
                viewId: X,
                gameId: t,
                gameName: et,
                playedFriendIds: $.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: L.A.getSimilarGames(t) ?? [],
                guildId: n,
                isVerified: e,
            });
        }));
    let ex = s.useCallback((e) => {
            U(e.contentRect.width >= 800);
        }, []),
        ef = (0, d.w)(ex, [], { fireOnMount: !0 }),
        ep = s.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, g.s7)(), (0, A.M)()) : a();
            },
            [a],
        ),
        ej = s.useCallback(() => ep(!1), [ep]),
        { navigation: ev, selectionVersion: eI } = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.OVERVIEW,
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
        })(eg, c),
        { selectedTab: eb } = ev,
        eN = (function (e) {
            let { game: t, navigation: n } = e,
                { selectedTab: l, selectTab: i } = n,
                a = t?.id,
                r = t?.getOfficialApplicationId();
            s.useEffect(() => {
                (0, rc.Xw)();
            }, []);
            let o = (0, m.bG)(
                    [P.A],
                    () =>
                        (null != a ? P.A.getApplicationIdFromDetectableId(a) : void 0) ??
                        (null != r && P.A.hasStorefrontForApplicationId(r) ? r : null),
                    [a, r],
                ),
                c = null != o,
                { storefront: u } = (0, ru.A)({ applicationId: c ? o : null }),
                [d, h] = s.useState({ storefrontId: u?.id, index: 0 }),
                [g, x] = s.useState(l);
            l !== g && (x(l), l !== S.COMMERCE && h({ storefrontId: u?.id, index: 0 }));
            let f = d.storefrontId === u?.id && d.index < (u?.pages.length ?? 0) ? d.index : 0,
                p = s.useCallback(
                    (e) => {
                        !c ||
                            e < 0 ||
                            e >= (u?.pages.length ?? 0) ||
                            (h({ storefrontId: u?.id, index: e }), i(S.COMMERCE));
                    },
                    [c, i, u],
                );
            return {
                hasCommerceTab: c,
                storefrontApplicationId: o,
                storefront: u,
                selectedStorefrontPageIndex: f,
                selectStorefrontPage: p,
            };
        })({ game: J, navigation: ev }),
        { hasCommerceTab: eE, storefrontApplicationId: ey, storefront: eA, selectedStorefrontPageIndex: eC } = eN,
        ek = Object.values(eA?.promotions ?? {})[0] ?? null,
        eS = s.useMemo(() => {
            if (null != J)
                return {
                    game: J,
                    isTwoColumn: F,
                    canStartAuthorization: ea,
                    hasAlreadyLinked: ei,
                    fetchedAuthorization: er,
                    startAuthorization: es,
                    connectionApp: eo,
                    invite: ec,
                    hasDiscordWebsite: Q,
                    hasOfficialApplication: Z,
                    officialApplicationFetchFailed: ee,
                    isCommunityInviteResolving: ed,
                    isMember: eu,
                    socialLayerStorefrontRecommendationsData: em,
                    socialLayerStorefrontRecommendationsLoading: eh,
                    hasCommerceTab: eE,
                    storefrontPromotion: ek,
                    closeModal: ep,
                    navigateToGame: W,
                    trackAction: eg,
                    viewId: X,
                };
        }, [J, F, ea, ei, er, es, eo, ec, Q, Z, ee, ed, eu, em, eh, eE, ek, ep, W, eg, X]);
    return null == J
        ? null
        : (0, r.jsx)(p.f5, {
              value: K,
              children: (0, r.jsx)(h.N, {
                  transitionState: i,
                  onClose: a,
                  children: (0, r.jsx)(_.Provider, {
                      value: eS,
                      children: (0, r.jsx)("div", {
                          className: u()(z, a$.kL),
                          ref: ef,
                          children: (0, r.jsxs)(y.A, {
                              obscured: en,
                              onClose: ej,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: u()(a$.sx, { [a$.Tk]: eb !== S.COMMERCE }),
                                      children: (0, r.jsx)(ez, { navigation: ev, socialLayerStorefront: eN }),
                                  }),
                                  eb === S.OVERVIEW &&
                                      (0, r.jsx)(ra, {
                                          selectTab: ev.selectTab,
                                          selectionVersion: eI,
                                          initialScrollOffset: o,
                                          isTwoColumn: F,
                                          analyticsLocations: K,
                                      }),
                                  eb === S.COMMUNITIES && (0, r.jsx)(tX, {}),
                                  eb === S.COMMERCE && (0, r.jsx)(ro, { applicationId: ey, selectedPageIndex: eC }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
}
let rm = function (e) {
    let { gameId: t, source: n, sourceUserId: l, initialScrollOffset: i, initialTab: a, ...o } = e,
        [c, u] = s.useState({ gameId: t, source: n, sourceUserId: l, initialScrollOffset: i, initialTab: a }),
        d = c.gameId,
        m = s.useCallback(
            (e, t) => {
                e !== d && ((0, T.UT)(e), u({ gameId: e, source: t }));
            },
            [d],
        );
    return (0, r.jsx)(
        rd,
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
