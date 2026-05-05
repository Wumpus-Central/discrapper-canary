l.d(t, { default: () => nP });
var n,
    i = l(627968),
    s = l(64700),
    a = l(503698),
    r = l.n(a),
    c = l(989349),
    o = l.n(c),
    d = l(562708),
    u = l(535185),
    m = l(792216),
    x = l(379834),
    h = l(17928),
    g = l(990078),
    f = l(521489),
    j = l(825860),
    v = l(834730),
    p = l(534514),
    E = l(821609),
    A = l(414499),
    N = l(224640),
    I = l(364522),
    b = l(707554),
    C = l(689175),
    S = l(964486),
    R = l(737393),
    y = l(793574),
    k = l(688810),
    L = l(139286),
    T = l(46225),
    O = l(429913),
    M = l(590703),
    _ = l(180170),
    G = l(832384),
    P = l(569926),
    w = l(928550),
    V = l(975732),
    D = l(773669),
    W = l(486020),
    U = l(541830),
    Y = l(935208),
    F = l(409626),
    H = l(636537),
    B = l(228366),
    z = l(845584),
    K = l(371794),
    X = l(155718),
    J = l(731068),
    $ = l(59318),
    Z = l(320095),
    Q = l(383233),
    q = l(998218);
let ee = /^#{1,3}\s+(.+)$/;
var et = l(652215);
let el = async (e) => {
        B.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
        try {
            let t = (
                await (0, K.aP)({
                    url: et.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: D.default.locale },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.flatMap((e) => e.sku_ids);
            B.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: t });
        } catch (t) {
            B.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
        }
    },
    en = async (e) => {
        try {
            let t = (
                (await H.Bo.get({ url: et.Rsh.SIMILAR_GAMES(e), rejectWithError: !1 })).body.similar_games ?? []
            ).filter((t) => t !== e);
            B.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
        } catch (e) {
            throw new z.LG(e);
        }
    },
    ei = async (e, t) => {
        B.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
        try {
            let l = {};
            t?.limit != null && (l.limit = t.limit);
            let n = (await H.Bo.get({ url: et.Rsh.GAME_ANNOUNCEMENTS(e), query: l, rejectWithError: !1 })).body;
            B.h.dispatch({
                type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
                gameId: e,
                messages: n.messages.map((e) => {
                    let t,
                        l,
                        n = (0, Z.rh)(e),
                        i = (0, Q._c)(n)
                            ? n.components
                                  .filter((e) => e.type === X.I5.TEXT_DISPLAY)
                                  .map((e) => e.content)
                                  .join("\n")
                            : n.content,
                        s = (function (e) {
                            if ((0, Q._c)(e)) {
                                let t = e.components.find((e) => e.type === X.I5.MEDIA_GALLERY),
                                    l = t?.items[0]?.media;
                                if (null != l) {
                                    let t = (0, J.FE)(l);
                                    if ("INVALID" !== t) return { ...l, type: t, sourceMetadata: { message: e } };
                                }
                            }
                            let t = e.attachments.find((e) => (0, $.tT)(e.content_type));
                            if (null != t) return (0, J.Rr)(t, e);
                            let l = e.attachments.find((e) => (0, $.XB)(e.content_type));
                            if (null != l) return (0, J.Rr)(l, e);
                            let n = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                            if (n?.thumbnail != null)
                                return (0, J.oU)(
                                    n.thumbnail,
                                    {
                                        message: e,
                                        identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === n) },
                                    },
                                    "IMAGE",
                                );
                        })(n),
                        { title: a, body: r } =
                            ((t = i.indexOf("\n")),
                            (l = (-1 === t ? i : i.slice(0, t)).match(ee)),
                            null != l
                                ? { title: l[1].trim(), body: -1 === t ? "" : i.slice(t + 1).trimStart() }
                                : { body: i }),
                        c = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0;
                    return {
                        id: n.id,
                        media: s,
                        title: a,
                        body: r,
                        content: i,
                        timestamp: e.timestamp,
                        reactionCount: c,
                    };
                }),
                channelId: n.channel_id ?? void 0,
                guildId: n.guild_id ?? void 0,
            });
        } catch (t) {
            B.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
        }
    };
var es = l(422069);
let ea = (0, l(945810).mj)({
    name: "2025-12-game-profiles-v2",
    kind: "user",
    defaultConfig: { enabled: !1, storeLinksEnabled: !1 },
    variations: { 1: { enabled: !0, storeLinksEnabled: !1 }, 2: { enabled: !0, storeLinksEnabled: !0 } },
});
var er = l(205184),
    ec = l(505779),
    eo = l(970163),
    ed = l(184989);
let eu = function (e, t) {
    let [l, n] = s.useState(),
        i = s.useRef(null),
        a = s.useRef(t);
    s.useEffect(() => {
        a.current = t;
    }, [t]);
    let r = (0, h.bG)([ed.A], () => l?.guild?.id != null && ed.A.isMember(l?.guild?.id)),
        c = s.useMemo(
            () =>
                e?.websites?.find((e) => {
                    let { category: t } = e;
                    return t === ec.V.DISCORD;
                }),
            [e?.websites],
        );
    return (
        s.useEffect(() => {
            let e = async (e) => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (i.current?.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, eo.A)(t, "game_profile");
                    !0 !== e.banned && ((i.current = t), n(e.invite), null != e.invite && a.current?.(e.invite));
                }
            };
            null != c && e(c.url);
        }, [c]),
        { invite: l, isMember: r }
    );
};
var em = l(832163),
    ex = l(561794),
    eh = l(862772),
    eg = l(287809),
    ef = l(713900),
    ej = l(459746),
    ev = l(922016),
    ep = l(980707),
    eE = l(477782),
    eA = l(939249),
    eN = l(365199),
    eI = l(661531),
    eb = l(663341),
    eC = l(408278),
    eS = l(34188),
    eR = l(789645),
    ey = l(442433),
    ek = l(50268),
    eL = l(44724);
let eT = s.createContext(void 0);
function eO() {
    let e = s.useContext(eT);
    if (void 0 === e) throw Error("useGameProfileV2Context must be used within a GameProfileV2Provider");
    return e;
}
var eM = l(67518);
l(321073);
var e_ = l(540185),
    eG = l(926268),
    eP = l(53788),
    ew = l(831453),
    eV = l(785866),
    eD = l(555704),
    eW = l(457965),
    eU = l(47675),
    eY = l(633075),
    eF = l(289173),
    eH = l(841595),
    eB = l(958805),
    ez = l(735321),
    eK = l(495544),
    eX = l(760751),
    eJ = l(375708);
async function e$(e) {
    let t = e((0, ez.BF)());
    await eB.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function eZ(e) {
    let { gameId: t, className: l, trackAction: n } = e,
        a = s.useRef(null),
        r = (0, ek.A)({ id: t, label: eJ.intl.string(eJ.t.SHQGPj) }),
        c = (0, eM.n)(t, n);
    return null == r && null == c
        ? null
        : (0, i.jsx)(ev.Y, {
              targetElementRef: a,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(ep.W, {
                      "data-menu-migrated-auto": !0,
                      navId: "game-profile-context",
                      onClose: () => {
                          (0, ey.Z_)(), t();
                      },
                      "aria-label": eJ.intl.string(eJ.t.PNeFgW),
                      onSelect: () => {},
                      children: (0, i.jsxs)(i.Fragment, {
                          children: [(0, i.jsx)(eE.rX, { children: r }), (0, i.jsx)(eE.rX, { children: c })],
                      }),
                  });
              },
              children: (e) =>
                  (0, i.jsx)(g.m, {
                      text: eJ.intl.string(eJ.t["UKOtz+"]),
                      children: (0, i.jsx)(eA.D, {
                          innerRef: a,
                          className: l,
                          ...e,
                          children: (0, i.jsx)(eN.j, { size: "xs", color: eI.A.colors.WHITE }),
                      }),
                  }),
          });
}
function eQ(e) {
    let { game: t, onClose: l, className: n, trackAction: a } = e,
        r = s.useRef(null),
        c = s.useRef(null),
        o = (0, ek.A)({ id: t.id, label: eJ.intl.string(eJ.t.SHQGPj) }),
        d = (0, eM.n)(t.id, a),
        u = (function (e) {
            let t = e?.id,
                l = e?.name ?? "",
                n = (0, h.bG)([eK.default], () => eK.default.getId()),
                a = (0, h.bG)([eX.A], () => eX.A.getDetectableGame(t)),
                r = s.useMemo(
                    () => [
                        {
                            type: e_.x.FAVORITE_GAMES,
                            addLabel: eJ.intl.string(eJ.t.fgmitg),
                            removeLabel: eJ.intl.string(eJ.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: eG.C,
                        },
                        {
                            type: e_.x.PLAYED_GAMES,
                            addLabel: eJ.intl.string(eJ.t["0xIVLR"]),
                            removeLabel: eJ.intl.string(eJ.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: eP.G,
                        },
                        {
                            type: e_.x.CURRENT_GAMES,
                            addLabel: eJ.intl.string(eJ.t.G0c4En),
                            removeLabel: eJ.intl.string(eJ.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: ew.H,
                        },
                        {
                            type: e_.x.WANT_TO_PLAY_GAMES,
                            addLabel: eJ.intl.string(eJ.t.UuBS4K),
                            removeLabel: eJ.intl.string(eJ.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: eV._,
                        },
                    ],
                    [],
                ),
                c = (0, h.yK)([eH.A], () => (null == n ? [] : (eH.A.getUserProfile(n)?.widgets ?? [])), [n]),
                o = (0, eW.w$)({ location: "game-profile-overflow-menu" }),
                d = s.useMemo(() => {
                    if (null == o || 0 === o.length) return null;
                    if (null != e) {
                        if (o.some((t) => t.applicationId === e.id)) return e.id;
                        for (let t of e.linkedApplications ?? [])
                            if (o.some((e) => e.applicationId === t.id)) return t.id;
                    }
                    return null;
                }, [o, e]),
                u = s.useCallback(
                    async (e, l) => {
                        let n = null;
                        if (
                            (await e$((i) => {
                                let s = i.filter(eF.fu).find((t) => t.type === e) ?? null;
                                if (l) {
                                    if (s?.games.some((e) => e.applicationId === t) || (null != s && (0, ez.uA)(s)))
                                        return i;
                                    let l = { applicationId: t },
                                        a = null != s ? [l, ...(s.games ?? [])] : [l];
                                    n = new eF.Yy({ ...(s ?? { type: e }), games: a });
                                } else {
                                    if (null == s) return i;
                                    let e = s.games.filter((e) => e.applicationId !== t);
                                    n = new eF.Yy({ ...s, games: e });
                                }
                                var a = n;
                                let r = i.findIndex((e) => e.getUniqueKey() === a.getUniqueKey());
                                if (-1 === r) return [a, ...i];
                                let c = [...i];
                                return (c[r] = a), c;
                            }),
                            null == n)
                        )
                            return;
                        let i = n;
                        (0, eU.un)({
                            action: l ? "GAME_ADDED" : "GAME_REMOVED",
                            ...i.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [t],
                ),
                m = s.useCallback(
                    async (e) => {
                        if (null == d) return;
                        let t = null;
                        if (
                            (await e$((l) =>
                                e
                                    ? l.some((e) => e instanceof eY.R && e.applicationId === d)
                                        ? l
                                        : [(t = new eY.R({ applicationId: d })), ...l]
                                    : ((t = l.find((e) => e instanceof eY.R && e.applicationId === d) ?? null),
                                      l.filter((e) => !(e instanceof eY.R && e.applicationId === d))),
                            ),
                            null == t)
                        )
                            return;
                        let l = t;
                        (0, eU.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...l.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [d],
                );
            if (null == n) return null;
            let x = null != e && null != a && (0, ez.XX)(a),
                g = [];
            if (null != d) {
                let e = c.some((e) => e instanceof eY.R && e.applicationId === d);
                g.push(
                    (0, i.jsx)(
                        eE.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? eJ.intl.formatToPlainString(eJ.t.Ktb1n8, { name: l })
                                : eJ.intl.formatToPlainString(eJ.t.Xp6iZt, { name: l }),
                            action: () => m(!e),
                            leadingAccessory: { type: "icon", icon: eD.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (x)
                for (let e of r) {
                    let l = c.filter(eF.fu).find((t) => t.type === e.type) ?? null,
                        n = null != l && l.games.some((e) => e.applicationId === t),
                        s = !n && null != l && (0, ez.uA)(l);
                    g.push(
                        (0, i.jsx)(
                            eE.Dr,
                            {
                                id: e.menuId,
                                label: n ? e.removeLabel : e.addLabel,
                                subtext: s ? eJ.intl.string(eJ.t["86OoiH"]) : void 0,
                                subtextLineClamp: 1,
                                action: () => u(e.type, !n),
                                leadingAccessory: { type: "icon", icon: e.icon },
                                disabled: s,
                            },
                            e.type,
                        ),
                    );
                }
            return 0 === g.length ? null : g;
        })(t),
        { invite: m } = eO(),
        x = new Set(m?.guild?.features).has(et.GuildFeatures.SOCIAL_LAYER_STOREFRONT),
        f = s.useCallback(() => {
            null != m && (0, eL.X)({ invite: m });
        }, [m]),
        j = s.useCallback(() => {
            null != m && (a(F.Ws.GameShop), (0, eL.default)({ invite: m }), l());
        }, [m, a, l]);
    return (0, i.jsxs)("div", {
        className: n,
        children: [
            null != u &&
                (0, i.jsx)(ev.Y, {
                    targetElementRef: c,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(ep.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                (0, ey.Z_)(), t();
                            },
                            "aria-label": eJ.intl.string(eJ.t.sidPSo),
                            onSelect: () => {},
                            children: (0, i.jsx)(eE.rX, { children: u }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: c,
                            children: (0, i.jsx)(E.$, {
                                icon: eb.p,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: eJ.intl.string(eJ.t.sidPSo),
                            }),
                        }),
                }),
            x &&
                null != m &&
                (0, i.jsx)(g.m, {
                    text: eJ.intl.string(eJ.t.apFNLU),
                    children: (0, i.jsx)(eC.K, {
                        icon: eS.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eJ.intl.string(eJ.t.apFNLU),
                        onMouseDown: f,
                        onClick: j,
                    }),
                }),
            (null != o || null != d) &&
                (0, i.jsx)(ev.Y, {
                    targetElementRef: r,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(ep.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                (0, ey.Z_)(), t();
                            },
                            "aria-label": eJ.intl.string(eJ.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(eE.rX, { children: d }), (0, i.jsx)(eE.rX, { children: o })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)(g.m, {
                            text: eJ.intl.string(eJ.t["UKOtz+"]),
                            children: (0, i.jsx)("div", {
                                ...e,
                                ref: r,
                                children: (0, i.jsx)(eC.K, {
                                    icon: eN.j,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": eJ.intl.string(eJ.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, i.jsx)(eC.K, {
                icon: eR.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: l,
                "aria-label": eJ.intl.string(eJ.t.cpT0Cq),
            }),
        ],
    });
}
var eq = l(621466),
    e0 = l(966697),
    e1 = l(460905),
    e4 = l(449543),
    e8 = l(46054),
    e2 = l(58703),
    e5 = l(60465),
    e3 = l(284009),
    e6 = l.n(e3),
    e9 = l(376728),
    e7 = l(976860),
    te = l(71393),
    tt = l(449054);
async function tl(e) {
    let { invite: t, guildId: l, channelId: n, messageId: i, analyticsLocationStack: s } = e;
    e6()(s.length > 0, "analyticsLocationStack must have at least one location");
    let a = s[s.length - 1],
        r = null;
    if ((null != t && ((l = t.guild?.id), (r = new Set(t.guild?.features))), null == l)) return;
    let c = te.A.getGuild(l);
    if (c?.joinedAt == null)
        if (null == r || r.has(et.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, tt.Z2)(
                l,
                {},
                { shouldNavigate: !0, channelId: n, messageId: i, joinSource: et.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                s,
            ));
        else
            null != t &&
                (await e9.Ay.acceptInvite({ inviteKey: t.code, context: { location: a }, skipOnboarding: !0 }));
    (0, e7.pX)(et.BVt.CHANNEL(l, n, i), { sourceLocationStack: s });
}
var tn = l(320448),
    ti = l(274119);
function ts(e) {
    let { children: t, title: l, onClickViewAll: n } = e;
    return (0, i.jsxs)("div", {
        className: ti.k,
        children: [
            (0, i.jsxs)("div", {
                className: ti.w,
                children: [
                    (0, i.jsx)(p.D, { variant: "heading-lg/medium", children: l }),
                    null != n &&
                        (0, i.jsx)(E.$, {
                            size: "sm",
                            icon: tn._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: n,
                            text: eJ.intl.string(eJ.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var ta = l(468489),
    tr = l(992595);
function tc(e, t) {
    return e8.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function to(e) {
    let t,
        { variant: l, message: n, channelId: a, onCardClick: c } = e,
        [o, d] = s.useState(!1),
        u = "main" === l,
        m = s.useCallback(() => d(!0), []),
        x = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, eq.vq)(e.target, HTMLAnchorElement) ||
                        ((0, eq.vq)(e.target, HTMLSpanElement) && (0, eq.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return c(n.id);
            },
            [c, n.id],
        ),
        h = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9,
        g = n.media?.proxyUrl ?? n.media?.url,
        f =
            (null != g
                ? null == (t = q.A.toURLSafe(g))
                    ? null
                    : (t.searchParams.append("format", "webp"), t.toString())
                : null) ?? g;
    return (0, i.jsxs)(eA.D, {
        className: u ? ta.cG : ta.IU,
        onClick: x,
        children: [
            null != n.media &&
                null != f &&
                (0, i.jsx)("div", {
                    className: u ? ta._v : ta.eZ,
                    children: (0, i.jsx)(e0.y, {
                        readyState: o ? et.Rv1.READY : et.Rv1.LOADING,
                        aspectRatio: h,
                        placeholder: n.media.placeholder,
                        placeholderVersion: n.media.placeholderVersion,
                        placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                        children: (0, i.jsx)("img", {
                            src: f,
                            className: u ? ta.fk : ta.v,
                            alt: "",
                            draggable: !1,
                            onLoad: m,
                        }),
                    }),
                }),
            (0, i.jsxs)("div", {
                className: u ? ta.GT : ta.s4,
                children: [
                    null != n.title &&
                        (0, i.jsx)(p.D, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            className: u ? ta.KX : ta._N,
                            children: tc(n.title, a),
                        }),
                    n.body.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: r()(ta.h_, tr.PT),
                            children: [tc(n.body, a), (0, i.jsx)("div", { className: ta.fm })],
                        }),
                    (0, i.jsxs)("div", {
                        className: ta.ov,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: (0, e2.i$)(new Date(n.timestamp), "LL"),
                            }),
                            n.reactionCount > 0 &&
                                (0, i.jsxs)("div", {
                                    className: ta.a5,
                                    children: [
                                        (0, i.jsx)(e1.n, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(v.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            children: new Intl.NumberFormat(eJ.intl.currentLocale).format(
                                                n.reactionCount,
                                            ),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function td(e) {
    let { gameId: t, trackAction: l } = e,
        { analyticsLocations: n } = (0, k.Ay)(),
        { invite: a, closeModal: r, getScrollOffset: c } = eO(),
        {
            messages: o,
            guildId: d,
            channelId: u,
        } = (function (e) {
            let {
                data: t,
                hasFetched: l,
                isFetching: n,
            } = (0, h.cf)([es.A], () => ({
                data: null != e ? es.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && es.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && es.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, s.useEffect)(() => {
                    null == e || l || es.A.isAnnouncementsFetching(e) || ei(e);
                }, [e, l]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: n }
            );
        })(t),
        m = s.useCallback(() => {
            let e = a?.guild?.id ?? d;
            null != e &&
                null != u &&
                (l(F.Ws.Announcements),
                e5.A.setGameProfilePendingReturn({ gameId: t, channelId: u, initialScrollOffset: c() }),
                r(),
                tl({ invite: a, guildId: e, channelId: u, analyticsLocationStack: n }));
        }, [l, r, c, a, d, u, n, t]),
        x = s.useCallback(
            (e) => {
                let i = a?.guild?.id ?? d;
                null != i &&
                    null != u &&
                    (l(F.Ws.AnnouncementsItem),
                    e5.A.setGameProfilePendingReturn({ gameId: t, channelId: u, initialScrollOffset: c() }),
                    r(),
                    tl({ invite: a, guildId: i, channelId: u, messageId: e, analyticsLocationStack: n }));
            },
            [l, r, c, a, d, u, n, t],
        );
    if (null == u || 0 === o.length) return null;
    let g = 2 !== o.length,
        f = g ? o[0] : null,
        j = g ? o.slice(1) : o;
    return (0, i.jsx)(ts, {
        title: eJ.intl.string(eJ.t.B0BV3Y),
        onClickViewAll: m,
        children: (0, i.jsxs)("div", {
            className: ta.f3,
            children: [
                null != f && (0, i.jsx)(to, { variant: "main", message: f, channelId: u, onCardClick: x }),
                j.length > 0 &&
                    (0, i.jsx)(e4.A, {
                        gap: 16,
                        children: j.map((e) =>
                            (0, i.jsx)(to, { variant: "small", message: e, channelId: u, onCardClick: x }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
var tu = l(349288),
    tm = l(975807),
    tx = l(194362);
function th(e) {
    let { game: t, trackAction: l } = e,
        n = s.useCallback(async () => {
            l(F.Ws.ClaimGame);
            let e = await (0, tx.a)(et.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tm.A)(e);
        }, [l]),
        a = s.useCallback((e) => (0, i.jsx)(tu.Anchor, { onClick: n, children: e }), [n]);
    return t.linkedApplications?.some((e) => e.type === X.Mh.OFFICIAL)
        ? null
        : (0, i.jsx)(v.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: eJ.intl.format(eJ.t.KAjfKl, { claimLink: a }),
          });
}
var tg = l(240248);
let tf = [
    ec.V.OFFICIAL,
    ec.V.FACEBOOK,
    ec.V.TWITTER,
    ec.V.INSTAGRAM,
    ec.V.YOUTUBE,
    ec.V.BLUESKY,
    ec.V.REDDIT,
    ec.V.TWITCH,
];
var tj = l(808380);
let tv = [tj.Y.DESKTOP, tj.Y.XBOX, tj.Y.PLAYSTATION, tj.Y.NINTENDO];
function tp(e) {
    return s.useMemo(() => {
        let t = new Set(e.platforms),
            l = [...t];
        return (
            !t.has(tj.Y.DESKTOP) && (t.has(tj.Y.MACOS) || t.has(tj.Y.LINUX)) && l.push(tj.Y.DESKTOP),
            l.filter((e) => tv.includes(e)).sort((e, t) => tv.indexOf(e) - tv.indexOf(t))
        );
    }, [e.platforms]);
}
var tE = l(998445),
    tA = l(274997),
    tN = l(80500),
    tI = l(319745),
    tb = l(488225),
    tC = l(967492),
    tS = l(72265),
    tR = l(454346),
    ty = l(37948),
    tk = l(141535),
    tL = l(262420);
let tT = [ec.V.OFFICIAL, ec.V.TWITTER, ec.V.YOUTUBE],
    tO = { colorClass: tL.wP },
    tM = { size: "xs", colorClass: tL.wP };
function t_(e, t) {
    switch (e.category) {
        case ec.V.OFFICIAL:
            return { icon: (0, i.jsx)(tE.L, { ...t }), action: F.Ws.WebsiteLink, title: eJ.intl.string(eJ.t.fOUKvg) };
        case ec.V.TWITTER:
            return { icon: (0, i.jsx)(tA.p, { ...t }), action: F.Ws.XLink, title: eJ.intl.string(eJ.t.INic4y) };
        case ec.V.YOUTUBE:
            return { action: F.Ws.YouTubeLink, icon: (0, i.jsx)(tN.C, { ...t }), title: eJ.intl.string(eJ.t.lNmxbE) };
        case ec.V.FACEBOOK:
            return { icon: (0, i.jsx)(tI.Z, { ...t }), action: F.Ws.FacebookLink, title: eJ.intl.string(eJ.t.FjyREK) };
        case ec.V.INSTAGRAM:
            return {
                icon: (0, i.jsx)(tb.L, { ...t }),
                action: F.Ws.InstagramLink,
                title: eJ.intl.string(eJ.t["cgR+IK"]),
            };
        case ec.V.BLUESKY:
            return {
                icon: (0, i.jsx)(tC.a, { ...t }),
                action: F.Ws.BlueskyLink,
                title: eJ.intl.string(eJ.t["D/PHq5"]),
            };
        case ec.V.REDDIT:
            return { icon: (0, i.jsx)(tS.T, { ...t }), action: F.Ws.RedditLink, title: eJ.intl.string(eJ.t["Hgb+fc"]) };
        case ec.V.TWITCH:
            return { icon: (0, i.jsx)(tR.a, { ...t }), action: F.Ws.TwitchLink, title: eJ.intl.string(eJ.t["7xtz4G"]) };
        default:
            throw Error("Unknown website category");
    }
}
function tG(e) {
    let { website: t, trackAction: l } = e,
        { action: n, icon: a, title: r } = t_(t, tO),
        c = s.useCallback(() => {
            l(n);
        }, [n, l]);
    return (0, i.jsx)(g.m, {
        text: r,
        children: (0, i.jsx)(tu.Anchor, {
            onClick: c,
            className: tL.yO,
            href: t.url,
            target: "_blank",
            "aria-label": r,
            children: a,
        }),
    });
}
let tP = function (e) {
    let { game: t, trackAction: l } = e;
    if (null == t.websites) return null;
    let n = t.websites
        .filter((e) => {
            let { category: t } = e;
            return tT.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === n.length
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(p.D, {
                      className: tk.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: eJ.intl.string(eJ.t["Oj3o1/"]),
                  }),
                  (0, i.jsx)("div", {
                      className: r()(tk.nM, tk.mX),
                      children: n.map((e) => (0, i.jsx)(tG, { website: e, trackAction: l }, e.url)),
                  }),
              ],
          });
};
function tw(e) {
    let { website: t, trackAction: l } = e,
        n = (0, ty.A)(),
        { action: a, icon: r, title: c } = t_(t, tM),
        o = s.useCallback(() => {
            l(a), n(t.url);
        }, [a, n, l, t.url]);
    return (0, i.jsx)(g.m, {
        text: c,
        children: (0, i.jsx)(eA.D, { onClick: o, className: tL.yO, title: c, children: r }),
    });
}
var tV = l(31300),
    tD = l(802516),
    tW = l(22363),
    tU = l(418524);
function tY(e) {
    switch (e) {
        case tj.Y.DESKTOP:
            return eJ.intl.string(eJ.t.KT6uCJ);
        case tj.Y.XBOX:
            return eJ.intl.string(eJ.t.DDWUJp);
        case tj.Y.PLAYSTATION:
            return eJ.intl.string(eJ.t.fzMz2s);
        case tj.Y.NINTENDO:
            return eJ.intl.string(eJ.t.AMW8je);
        default:
            return null;
    }
}
function tF(e) {
    let { platform: t, ...l } = e;
    switch (t) {
        case tj.Y.DESKTOP:
            return (0, i.jsx)(tV.k, { size: "xs", ...l });
        case tj.Y.XBOX:
            return (0, i.jsx)(tD.Y, { size: "xs", ...l });
        case tj.Y.PLAYSTATION:
            return (0, i.jsx)(tW.X, { size: "xs", ...l });
        case tj.Y.NINTENDO:
            return (0, i.jsx)(tU.M, { size: "xs", ...l });
        default:
            return null;
    }
}
function tH(e) {
    let { platforms: t } = e;
    return (0, i.jsx)("div", {
        className: r()(tk.nM, tk.Lc),
        style: { alignItems: "center" },
        children: t.map((e) => (0, i.jsx)(g.m, { text: tY(e), children: (0, i.jsx)(tF, { platform: e }) }, e)),
    });
}
function tB(e) {
    let { platform: t } = e;
    return (0, i.jsx)(g.m, { text: tY(t), children: (0, i.jsx)(tF, { platform: t }) }, t);
}
function tz(e) {
    let { game: t, className: l } = e,
        n = tp(t);
    return 0 === n.length
        ? null
        : (0, i.jsx)("div", {
              className: r()(tk.fi, tk.iH, l),
              children: n.length > 0 && (0, i.jsx)(tH, { platforms: n }),
          });
}
var tK = l(424994),
    tX = l(60541);
function tJ() {
    return (0, i.jsx)(v.E, { variant: "text-sm/normal", color: "text-subtle", children: eJ.intl.string(eJ.t.GruYxV) });
}
let t$ = function (e) {
    let { game: t, trackAction: l } = e,
        n = s.useMemo(() => t.genres.map(U.du).join(", "), [t]),
        a = t.getCompanyByRole(X.wk.PUBLISHER),
        r = t.getCompanyByRole(X.wk.DEVELOPER),
        c = a.map((e) => e.name).join(", "),
        o = r.map((e) => e.name).join(", "),
        d = t.firstReleaseDate,
        u = tp(t),
        m = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return tf.includes(t);
            })
            .sort((e, t) => tf.indexOf(e.category) - tf.indexOf(t.category)),
        x = !(0, tg.uJ)(n),
        h = !(0, tg.uJ)(c),
        g = !(0, tg.uJ)(o),
        f = !(0, tg.uJ)(d),
        j = u.length > 0,
        E = m.length > 0 && !m.every((e) => (0, tg.uJ)(e.url));
    return (0, i.jsxs)("div", {
        className: tX.uW,
        children: [
            (0, i.jsx)("div", {
                className: tX.Gf,
                children: (0, i.jsx)(p.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: eJ.intl.string(eJ.t["7OjmmH"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tX.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: tX.J1,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? eJ.intl.string(eJ.t.pDgwYB) : eJ.intl.string(eJ.t.mjFKqn),
                            }),
                            x
                                ? (0, i.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tX.Gu,
                                      children: n,
                                  })
                                : (0, i.jsx)(tJ, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tX.J1,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== a.length ? eJ.intl.string(eJ.t.Hc7Enk) : eJ.intl.string(eJ.t["4Byy/G"]),
                            }),
                            h
                                ? (0, i.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tX.Gu,
                                      children: c,
                                  })
                                : (0, i.jsx)(tJ, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tX.J1,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? eJ.intl.string(eJ.t.KATEJB) : eJ.intl.string(eJ.t.na3PT0),
                            }),
                            g
                                ? (0, i.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tX.Gu,
                                      children: o,
                                  })
                                : (0, i.jsx)(tJ, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tX.J1,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eJ.intl.string(eJ.t.H3mPDT),
                            }),
                            f
                                ? (0, i.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tX.Gu,
                                      children: e2.i$(new Date(d), "LL"),
                                  })
                                : (0, i.jsx)(tJ, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tX.J1,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: u.length > 1 ? eJ.intl.string(eJ.t.PNqxNe) : eJ.intl.string(eJ.t["UxAag+"]),
                            }),
                            j
                                ? (0, i.jsx)("div", {
                                      className: tX.Gu,
                                      children: u.map((e) => (0, i.jsx)(tB, { platform: e }, e)),
                                  })
                                : (0, i.jsx)(tJ, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tX.J1,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eJ.intl.string(eJ.t["Oj3o1/"]),
                            }),
                            E
                                ? (0, i.jsx)("div", {
                                      className: tX.Gu,
                                      children: m.map((e) => (0, i.jsx)(tw, { website: e, trackAction: l }, e.url)),
                                  })
                                : (0, i.jsx)(tJ, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tX.J1,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eJ.intl.string(eJ.t["BwQ+9e"]),
                            }),
                            (0, i.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: tX.Gu,
                                children: eJ.intl.format(eJ.t.XPFZVl, { igdbLink: tK.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: tX.OQ, children: (0, i.jsx)(th, { game: t, trackAction: l }) }),
        ],
    });
};
function tZ(e) {
    let { invite: t, trackAction: l, closeModal: n } = e,
        a = s.useCallback(() => {
            t?.guild != null && (0, eL.X)({ guildId: t.guild.id });
        }, [t]),
        r = s.useCallback(() => {
            t?.guild != null && (l(F.Ws.GameShop), (0, eL.default)({ invite: t }), n());
        }, [n, t, l]);
    return new Set(t?.guild?.features).has(et.GuildFeatures.SOCIAL_LAYER_STOREFRONT)
        ? (0, i.jsx)(E.$, {
              variant: "primary",
              text: eJ.intl.string(eJ.t.v8UpgE),
              icon: eS.U,
              onClick: r,
              onMouseDown: a,
              fullWidth: !0,
          })
        : null;
}
var tQ = l(714991),
    tq = l(552523),
    t0 = l(51531);
function t1(e) {
    let { game: t, trackAction: l, onInviteResolved: n, closeModal: a } = e,
        [c, o] = s.useState(),
        d = (0, h.bG)([ed.A], () => c?.guild?.id != null && ed.A.isMember(c?.guild?.id)),
        u = s.useMemo(
            () =>
                t.websites?.find((e) => {
                    let { category: t } = e;
                    return t === ec.V.DISCORD;
                }),
            [t.websites],
        );
    s.useEffect(() => {
        let e = async (e) => {
            let t = e.split("/").pop();
            if (null != t) {
                if (null != c && c.code.toLowerCase() === t.toLowerCase()) return;
                try {
                    let e = await (0, eo.A)(t, "game_profile");
                    !0 !== e.banned && (o(e.invite), null != e.invite && n?.(e.invite));
                } catch {}
            }
        };
        null != u && e(u.url);
    }, [u, n, c]);
    let m = s.useCallback(() => {
        null != c &&
            (l(F.Ws.JoinServer),
            a(),
            B.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: c, code: c.code, context: et.BRT.APP }));
    }, [c, l, a]);
    if (null == c || null == c.guild || !c.guild.features.includes(et.GuildFeatures.VERIFIED)) return null;
    let x = W.Ay.getGuildIconURL({ id: c.guild.id, icon: c.guild.icon, size: 32 });
    return (0, i.jsxs)("div", {
        className: tk.fi,
        children: [
            (0, i.jsx)(p.D, {
                className: tk.bV,
                variant: "text-xs/semibold",
                color: "text-default",
                children: eJ.intl.string(eJ.t.kBDZSL),
            }),
            (0, i.jsxs)("div", {
                className: r()(tk.nM, tk.mX),
                children: [
                    (0, i.jsx)("img", {
                        className: tq.$f,
                        src: x,
                        alt: eJ.intl.formatToPlainString(eJ.t.xm6W9D, { guildName: c.guild.name }),
                    }),
                    (0, i.jsxs)("div", {
                        className: tq.U5,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tq.YS,
                                children: [
                                    (0, i.jsx)(v.E, { variant: "text-sm/semibold", children: c.guild.name }),
                                    (0, i.jsx)(tQ.A, { guild: c.guild, size: 16 }),
                                ],
                            }),
                            null != c.approximate_member_count &&
                                (0, i.jsx)(v.E, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    children: eJ.intl.format(eJ.t.zRl6XR, { count: c.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(E.$, {
                variant: "secondary",
                text: d ? eJ.intl.string(eJ.t.cEnaWx) : eJ.intl.string(eJ.t.XpeFYr),
                onClick: m,
                fullWidth: !0,
            }),
        ],
    });
}
function t4(e) {
    let { trackAction: t, closeModal: l } = e,
        { canStartAuthorization: n, hasAlreadyLinked: a, invite: r, isMember: c } = eO(),
        o = s.useCallback(() => {
            null != r &&
                (t(F.Ws.JoinServer),
                l(),
                B.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: r, code: r.code, context: et.BRT.APP }));
        }, [r, t, l]);
    if (null == r || null == r.guild) return null;
    let d = W.Ay.getGuildIconURL({ id: r.guild.id, icon: r.guild.icon, size: 48 }),
        u = W.Ay.getGuildSplashURL({ id: r.guild.id, splash: r.guild.splash }),
        m = (n && !a) || null == u,
        x = (0, i.jsx)("img", {
            className: t0.$f,
            src: d,
            alt: eJ.intl.formatToPlainString(eJ.t.xm6W9D, { guildName: r.guild.name }),
            draggable: !1,
        }),
        h = m ? t0.To : t0.Kt,
        g = m ? t0.yj : t0.FS;
    return (0, i.jsxs)("div", {
        className: t0.uW,
        children: [
            (0, i.jsx)(p.D, {
                className: t0.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: eJ.intl.string(eJ.t["U2N+ci"]),
            }),
            (0, i.jsxs)("div", {
                className: t0.kL,
                children: [
                    !m && null != u && (0, i.jsx)("img", { className: t0.ll, src: u, alt: "", draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: t0.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: h,
                                children: [
                                    m
                                        ? x
                                        : (0, i.jsx)("div", {
                                              className: t0._C,
                                              children: (0, i.jsx)("div", { className: t0.kW, children: x }),
                                          }),
                                    (0, i.jsxs)("div", {
                                        className: g,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: t0.YS,
                                                children: [
                                                    (0, i.jsx)(tQ.A, { guild: r.guild, size: 16 }),
                                                    (0, i.jsx)(p.D, {
                                                        variant: "heading-md/semibold",
                                                        color: "text-default",
                                                        children: r.guild.name,
                                                    }),
                                                ],
                                            }),
                                            !(0, tg.uJ)(r.guild?.description) &&
                                                (0, i.jsx)(v.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: r.guild?.description,
                                                }),
                                            null != r.approximate_member_count || null != r.approximate_presence_count
                                                ? (0, i.jsxs)("div", {
                                                      className: t0.iR,
                                                      children: [
                                                          null != r.approximate_presence_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: t0.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: t0._o }),
                                                                      (0, i.jsx)(v.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: eJ.intl.format(eJ.t["LC+S+m"], {
                                                                              membersOnline:
                                                                                  r.approximate_presence_count,
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          null != r.approximate_member_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: t0.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: t0.jk }),
                                                                      (0, i.jsx)(v.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: eJ.intl.format(eJ.t.zRl6XR, {
                                                                              count: r.approximate_member_count,
                                                                          }),
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
                            (0, i.jsx)(E.$, {
                                variant: "secondary",
                                text: c ? eJ.intl.string(eJ.t.cEnaWx) : eJ.intl.string(eJ.t.XpeFYr),
                                onClick: o,
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var t8 = l(369606),
    t2 = l(8208);
function t5(e) {
    let { game: t, show: l, onClose: n, trackAction: s } = e,
        a = t.name,
        c = t.getIconURL(80);
    return (0, i.jsxs)("div", {
        className: t2.y5,
        children: [
            (0, i.jsx)("div", { className: r()(t2.nI, l && t2.hD) }),
            (0, i.jsxs)("div", {
                className: r()(t2.A1, l && t2.g8),
                children: [
                    null != c && (0, i.jsx)("img", { src: c, alt: "", className: t2.V$, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: t2.hm,
                        children: [
                            (0, i.jsx)(p.D, { variant: "heading-md/semibold", lineClamp: 1, children: a }),
                            null != t.l30Rank && (0, i.jsx)(t7, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(eQ, { game: t, onClose: n, className: t2.HK, trackAction: s }),
        ],
    });
}
function t3(e) {
    let { show: t } = e;
    return (0, i.jsx)("div", { className: r()(t2.nI, t2.Jn, t && t2.hD) });
}
let t6 = s.forwardRef(function (e, t) {
    let { game: l } = e,
        [n] = s.useState(() => Math.random()),
        a = s.useMemo(() => {
            if (null != l.bannerHash)
                return W.Ay.getGameAssetURL({ id: l.id, hash: l.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            if (null != l.screenshotUrls && l.screenshotUrls.length > 0) {
                let e = Math.floor(n * l.screenshotUrls.length);
                return l.screenshotUrls[e];
            }
            return "";
        }, [l.id, l.bannerHash, l.screenshotUrls, n]);
    return (0, tg.uJ)(a)
        ? null
        : (0, i.jsxs)("div", {
              ref: t,
              children: [
                  (0, i.jsx)("div", { className: t2.y1, style: { backgroundImage: `url("${a}")` } }),
                  (0, i.jsx)("div", { className: t2.N4 }),
              ],
          });
});
function t9(e) {
    let { game: t } = e,
        l = (t.genres ?? []).map(U.du).join(", ");
    return (0, tg.uJ)(l) ? null : (0, i.jsx)(v.E, { variant: "text-md/normal", color: "text-muted", children: l });
}
let t7 = (e) => {
    let { rank: t } = e;
    return (0, i.jsxs)("div", {
        className: t2.Qc,
        children: [
            (0, i.jsx)(t8.O, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, i.jsx)(v.E, {
                variant: "text-xs/bold",
                color: "none",
                children: eJ.intl.formatToPlainString(eJ.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
};
function le(e) {
    let { game: t, isTwoColumn: l } = e;
    return (0, i.jsx)("div", {
        className: l ? t2.n8 : t2.FS,
        children: (0, i.jsx)(ej.A, { game: t, className: t2.xe, size: ej.w.LARGE }),
    });
}
let lt = function (e) {
    let { game: t, onSetCompactBarScrollThreshold: l, showCompactBar: n } = e,
        { isTwoColumn: a } = eO(),
        c = s.useRef(null),
        o = s.useRef(null);
    s.useEffect(() => {
        let e = c.current,
            t = o.current;
        if (null == e || null == t) return;
        let n = (function (e, t) {
            let l = 0,
                n = e;
            for (; null != n && n !== t; ) (l += n.offsetTop), (n = n.offsetParent);
            return l;
        })(t, e);
        n > 0 && l?.(n);
    }, [l]);
    let d = t.name;
    return (0, i.jsxs)("div", {
        ref: c,
        className: r()(t2.ap, n && t2.Gh),
        children: [
            a &&
                null != t &&
                (0, i.jsx)("div", {
                    className: t2.Tf,
                    children: (0, i.jsx)(ej.A, { game: t, className: t2.w$, size: ej.w.LARGE }),
                }),
            (0, i.jsxs)("div", {
                className: t2.lu,
                children: [
                    null != t.l30Rank && (0, i.jsx)(t7, { rank: t.l30Rank }),
                    (0, i.jsx)(p.D, { ref: o, variant: "heading-xxl/semibold", children: d }),
                    (0, i.jsx)(t9, { game: t }),
                ],
            }),
        ],
    });
};
var ll = l(141628),
    ln = l(289363),
    li = l(448682);
function ls(e) {
    let { trackAction: t, analyticsLocations: l } = e,
        {
            fetchedAuthorization: n,
            hasAlreadyLinked: a,
            canStartAuthorization: r,
            startAuthorization: c,
            connectionApp: o,
            invite: d,
        } = eO(),
        u = (0, h.bG)([eg.default], () => eg.default.getCurrentUser()),
        m = s.useCallback(() => {
            t(F.Ws.LinkAccount), c({ analyticsLocations: l });
        }, [t, c, l]);
    if (!n || null == o || !r || a || null == u) return null;
    let x = d?.guild != null ? W.Ay.getGuildSplashURL({ id: d.guild.id, splash: d.guild.splash }) : null;
    return (0, i.jsxs)("div", {
        className: li.uW,
        children: [
            (0, i.jsx)(p.D, {
                className: li.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: eJ.intl.string(eJ.t["VDAhr+"]),
            }),
            (0, i.jsxs)("div", {
                className: li.kL,
                children: [
                    null != x
                        ? (0, i.jsx)("img", { className: li.ll, src: x, alt: "", draggable: !1 })
                        : (0, i.jsx)("div", { className: li.sB, children: (0, i.jsx)(ln.default, { application: o }) }),
                    (0, i.jsxs)("div", {
                        className: li.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: li.FS,
                                children: [
                                    (0, i.jsx)(p.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: eJ.intl.formatToPlainString(eJ.t.hUbQT2, { gameName: o.name }),
                                    }),
                                    (0, i.jsx)(v.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: eJ.intl.string(eJ.t["JKqu+4"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(E.$, {
                                variant: "secondary",
                                icon: ll.A,
                                text: eJ.intl.string(eJ.t.jynBQ5),
                                onClick: m,
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var la = l(80687),
    lr = l(477155),
    lc = l(935286),
    lo = l(775602),
    ld = l(898736),
    lu = l(248643),
    lm = l(256905),
    lx = l(34337),
    lh = l(90721),
    lg = l(616337),
    lf = l(381641);
function lj(e) {
    let { game: t, trackAction: l } = e,
        n = s.useRef(null),
        a = (0, ld._)(t),
        r = s.useMemo(() => {
            let e = a.map((e) => ({ url: e, type: "IMAGE" }));
            return [...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })), ...e];
        }, [a, t.screenshotUrls]),
        c = r.length > 2;
    function o(e) {
        if (null == n.current) return;
        let t = n.current.getScrollerState().scrollLeft;
        n.current.scrollTo({ to: t + 280 * e, animate: !0 });
    }
    return 0 === r.length
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(p.D, {
                      className: tk.bV,
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: eJ.intl.string(eJ.t.bNdK5x),
                  }),
                  (0, i.jsxs)("div", {
                      className: c ? lg.DA : lg.pZ,
                      children: [
                          (0, i.jsx)(C.zC, {
                              ref: n,
                              className: lg.ec,
                              orientation: "horizontal",
                              children: r.map((e, t) =>
                                  (0, i.jsx)(
                                      eA.D,
                                      {
                                          className: lg.gw,
                                          focusProps: { offset: 4, ringClassName: lg.jR },
                                          onClick: () => {
                                              l(F.Ws.ClickImage),
                                                  (0, lm.R)({
                                                      items: r,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      location: "GameProfileMedia",
                                                  });
                                          },
                                          children: (0, i.jsx)("img", {
                                              src: e.url,
                                              className: lg.Zm,
                                              alt: eJ.intl.formatToPlainString(eJ.t.COYYrn, { game: name }),
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          c &&
                              (0, i.jsxs)("div", {
                                  className: lg.NA,
                                  children: [
                                      (0, i.jsx)("div", { className: lg.EJ }),
                                      (0, i.jsx)(eA.D, {
                                          className: lg.G9,
                                          onClick: () => o(-1),
                                          children: (0, i.jsx)(lr.r, { className: lg.UE, color: "currentColor" }),
                                      }),
                                      (0, i.jsx)("div", { className: lg.Pj }),
                                      (0, i.jsx)(eA.D, {
                                          className: lg.G9,
                                          onClick: () => o(1),
                                          children: (0, i.jsx)(lc.E, { className: lg.UE, color: "currentColor" }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
              ],
          });
}
let lv = s.memo(function (e) {
        let { item: t, index: l, isSelected: n, isPlaying: a, onSelect: c, gameName: o } = e,
            d = s.useCallback(() => c(l), [c, l]);
        return (0, i.jsx)(eA.D, {
            className: r()(lf.JS, n && lf.Y4),
            onClick: d,
            children: (0, i.jsxs)("div", {
                className: lf.ub,
                children: [
                    (0, i.jsx)("img", {
                        src: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                        className: lf.xn,
                        alt: eJ.intl.formatToPlainString(eJ.t.COYYrn, { game: o }),
                        draggable: !1,
                    }),
                    "VIDEO" === t.type &&
                        (0, i.jsx)("div", {
                            className: lf.UZ,
                            children: (0, i.jsx)(la.D, { playing: n && a, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    lp = s.memo(function (e) {
        let {
                item: t,
                reducedMotion: l,
                videoRef: n,
                mediaPlayerRef: a,
                onPlay: r,
                onPause: c,
                onFullscreenChange: o,
            } = e,
            d = s.useRef(null);
        return (
            (0, lh.A)({ videoRef: n, canvasRef: d, enabled: !l }),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    !l && (0, i.jsx)("canvas", { ref: d, className: lf.HW, "aria-hidden": "true" }),
                    (0, i.jsx)("div", {
                        className: lf.tN,
                        children: (0, i.jsx)(lu.A, {
                            src: t.url,
                            poster: t.poster ?? "",
                            width: t.width ?? 1920,
                            height: t.height ?? 1080,
                            naturalWidth: t.width ?? 1920,
                            naturalHeight: t.height ?? 1080,
                            maxWidth: 1 / 0,
                            maxHeight: 1 / 0,
                            autoPlay: !l,
                            autoMute: !0,
                            useFullWidth: !0,
                            responsive: !0,
                            renderLinkComponent: lx.bU,
                            onPlay: r,
                            onPause: c,
                            onFullscreenChange: o,
                            mediaPlayerClassName: lf.T9,
                            videoRef: n,
                            mediaPlayerRef: a,
                        }),
                    }),
                ],
            })
        );
    });
function lE(e) {
    let { game: t, trackAction: l } = e,
        [n, a] = s.useState(0),
        [r, c] = s.useState(null),
        [o, d] = s.useState(t.screenshotUrls),
        u = s.useRef(null),
        m = s.useRef(null),
        x = (0, h.bG)([lo.A], () => lo.A.useReducedMotion);
    o !== t.screenshotUrls && (d(t.screenshotUrls), a(0));
    let g = s.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, K.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, K.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                ...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })),
            ],
            [t.trailers, t.screenshotUrls],
        ),
        f = g.length > 0 ? Math.min(n, g.length - 1) : 0,
        j = g[f],
        v = j?.type === "VIDEO",
        p = s.useCallback(
            (e) => {
                let t = g[f],
                    l = g[e];
                t?.type === "IMAGE" && l?.type === "IMAGE" && t.url !== l.url ? c(t.url) : c(null), a(e);
            },
            [g, f],
        ),
        [E, A] = s.useState(!1),
        N = s.useRef(null),
        I = s.useCallback(() => {
            l(v ? F.Ws.ClickTrailer : F.Ws.ClickImage);
            let e = u.current,
                t = N.current,
                n = null != e && !e.paused,
                i = e?.muted ?? !0,
                s = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let r = g.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let l = t === f;
                    return { ...e, autoPlay: !!l && n, autoMute: !l || i, initialTimeSec: l ? s : void 0, videoRef: m };
                }
                return e;
            });
            (0, lm.R)({
                items: r,
                startingIndex: f,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: a,
                onClose: () => {
                    let e = m.current,
                        t = N.current,
                        l = null != e ? !e.paused : n;
                    e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), l && t.setPlay(!0), t.setMuted(e.muted))
                            : l && t?.setPlay(!0),
                        A(l);
                },
            });
        }, [l, g, f, v]),
        b = s.useCallback(() => A(!0), []),
        C = s.useCallback(() => A(!1), []),
        S = s.useCallback(() => c(null), []),
        R = s.useCallback(
            (e) => {
                e && I();
            },
            [I],
        );
    return 0 === g.length
        ? null
        : (0, i.jsxs)("div", {
              className: lf.kL,
              children: [
                  v
                      ? (0, i.jsx)("div", {
                            className: lf.ND,
                            children: (0, i.jsx)(
                                lp,
                                {
                                    item: j,
                                    reducedMotion: x,
                                    videoRef: u,
                                    mediaPlayerRef: N,
                                    onPlay: b,
                                    onPause: C,
                                    onFullscreenChange: R,
                                },
                                `${f}-${j.url}`,
                            ),
                        })
                      : (0, i.jsxs)("div", {
                            className: lf.wp,
                            children: [
                                null != r &&
                                    !x &&
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: lf.Jy,
                                            onAnimationEnd: S,
                                            children: (0, i.jsx)("img", { src: r, className: lf.Db, alt: "" }),
                                        },
                                        r,
                                    ),
                                (0, i.jsx)("div", { className: lf.QN }),
                                (0, i.jsx)(eA.D, {
                                    className: lf.gv,
                                    onClick: I,
                                    children: (0, i.jsx)(
                                        "img",
                                        {
                                            src: j.url,
                                            className: lf.c8,
                                            alt: eJ.intl.formatToPlainString(eJ.t.COYYrn, { game: t.name }),
                                        },
                                        j.url,
                                    ),
                                }),
                            ],
                        }),
                  (0, i.jsx)(e4.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      children: g.map((e, l) =>
                          (0, i.jsx)(
                              lv,
                              { item: e, index: l, isPlaying: E, isSelected: l === f, onSelect: p, gameName: t.name },
                              `${l}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
var lA = l(847374),
    lN = l(187322),
    lI = l(110384),
    lb = l(734057),
    lC = l(309010),
    lS = l(562153),
    lR = l(742424),
    ly = l(322789),
    lk = l(506326),
    lL = l(478481);
let lT = (e) => {
    let {
            entry: t,
            onClose: l,
            onReaction: n,
            onRequestOpen: a,
            disableActivityProfileLinks: c,
            customCTA: o,
            popoutClassname: d,
            popoutPosition: u = "right",
        } = e,
        m = s.useRef(null),
        x = (0, h.bG)([lC.A, lb.A], () => lb.A.getChannel(lC.A.getChannelId())),
        g = (0, h.bG)([eg.default], () => eg.default.getUser(t.author_id)),
        { nick: f, avatar: j } = s.useMemo(() => {
            let e = g?.getAvatarURL(x?.guild_id, 48, !1);
            return { nick: lS.Ay.getName(x?.guild_id, x?.id, g), avatar: e };
        }, [g, x]);
    return null == g
        ? null
        : (0, i.jsx)(ev.Y, {
              targetElementRef: m,
              position: u,
              renderPopout: (e) => {
                  let { closePopout: s, updatePosition: a } = e;
                  return (0, i.jsx)("div", {
                      className: d,
                      children: (0, i.jsx)(lR.Oo, {
                          entry: t,
                          closePopout: s,
                          updatePopoutPosition: a,
                          onReaction: () => {
                              n?.(), l(), s();
                          },
                          onUserPopoutClosed: () => s(),
                          disableGameProfileLinks: !0,
                          disableActivityProfileLinks: c,
                      }),
                  });
              },
              positionKey: `'content-entry-${t.id}`,
              onRequestOpen: () => {
                  a?.();
              },
              children: (e) =>
                  (0, i.jsx)(eA.D, {
                      innerRef: m,
                      ...e,
                      className: lL.GA,
                      children: (0, i.jsx)(lN.vN, {
                          offset: { top: 4, bottom: 4, left: 4, right: 4 },
                          children: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("img", {
                                      className: lL.my,
                                      src: j,
                                      alt: eJ.intl.formatToPlainString(eJ.t.IzVXxY, { userName: f }),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: lL.Su,
                                      children: (0, i.jsxs)("div", {
                                          className: r()(tk.fi, tk.Kt),
                                          children: [
                                              (0, i.jsx)(v.E, {
                                                  variant: "text-md/medium",
                                                  color: "text-strong",
                                                  lineClamp: 1,
                                                  children: f,
                                              }),
                                              (0, i.jsx)(lk.mG, {
                                                  location: lk.N5.APP_LAUNCHER,
                                                  children: ly.n.map((e, l) => (0, i.jsx)(e, { entry: t }, l)),
                                              }),
                                          ],
                                      }),
                                  }),
                                  null != o
                                      ? o
                                      : (0, i.jsx)("div", {
                                            className: lL.Br,
                                            children: (0, i.jsx)(lI.W, { size: "sm" }),
                                        }),
                              ],
                          }),
                      }),
                  }),
          });
};
function lO(e) {
    let { entry: t, viewId: l, source: n, invite: s } = e,
        { guildId: a, isVerified: r } = (0, F.VO)(s);
    return (0, i.jsx)(lT, {
        ...e,
        onReaction: () => {
            (0, F.Tn)({
                action: F.Ws.SendMessageUser,
                gameId: t.extra.application_id,
                gameName: t.extra.game_name,
                recipientUserId: t.author_id,
                viewId: l,
                guildId: a,
                isVerified: r,
                source: n,
            });
        },
        onRequestOpen: () => {
            (0, F.Tn)({
                action: F.Ws.ClickMessageUser,
                gameId: t.extra.application_id,
                gameName: t.extra.game_name,
                recipientUserId: t.author_id,
                viewId: l,
                guildId: a,
                isVerified: r,
                source: n,
            });
        },
    });
}
var lM = l(759203);
function l_(e) {
    let { entries: t, viewId: l, invite: n, onClose: a, source: c } = e,
        o = t.length > 7,
        [d, u] = s.useState(!1),
        m = s.useMemo(() => t.slice(0, o && !d ? 6 : void 0), [t, o, d]);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(p.D, {
                className: tk.bV,
                variant: "text-md/semibold",
                color: "text-strong",
                children: eJ.intl.string(eJ.t.ak8OHk),
            }),
            0 === t.length
                ? (0, i.jsx)(v.E, {
                      variant: "text-xs/semibold",
                      color: "text-strong",
                      className: lM.p$,
                      children: eJ.intl.string(eJ.t.R5fYVO),
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("div", {
                              className: r()(lM.yz, { [lM.T6]: o && !d }),
                              children: (0, i.jsx)("div", {
                                  className: tk.fi,
                                  children: m.map((e) =>
                                      (0, i.jsx)(lO, { entry: e, viewId: l, onClose: a, invite: n, source: c }, e.id),
                                  ),
                              }),
                          }),
                          o &&
                              !d &&
                              (0, i.jsxs)(eA.D, {
                                  className: lM.ND,
                                  onClick: () => u(!0),
                                  children: [
                                      (0, i.jsx)(v.E, {
                                          variant: "text-xs/semibold",
                                          color: "interactive-text-default",
                                          children: eJ.intl.string(eJ.t.yohc6E),
                                      }),
                                      (0, i.jsx)(lA.a, { size: "xs" }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
function lG(e) {
    let { game: t } = e,
        l = (t.companies ?? []).filter((e) => e.roles.includes(X.wk.PUBLISHER));
    return 0 === l.length
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(p.D, {
                      className: tk.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: eJ.intl.string(eJ.t["4Byy/G"]),
                  }),
                  (0, i.jsx)(v.E, { variant: "text-sm/normal", children: l.map((e) => e.name).join(", ") }),
              ],
          });
}
var lP = l(49381),
    lw = l(223273);
function lV(e, t, l) {
    if (null == e || null == t || t < 10) return lw.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !l
            ? lw.vI.POSITIVE
            : t < (l ? 100 : 500) || e < 95
              ? lw.vI.VERY_POSITIVE
              : lw.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return lw.vI.MOSTLY_POSITIVE;
    if (e >= 40) return lw.vI.MIXED;
    if (e >= 20) return lw.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !l) return lw.vI.NEGATIVE;
    else if (t < (l ? 100 : 500)) return lw.vI.VERY_NEGATIVE;
    return lw.vI.OVERWHELMINGLY_NEGATIVE;
}
function lD(e) {
    switch (e) {
        case lw.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case lw.vI.OVERWHELMINGLY_POSITIVE:
        case lw.vI.VERY_POSITIVE:
        case lw.vI.POSITIVE:
        case lw.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case lw.vI.MIXED:
            return "steam-review-text-mixed";
        case lw.vI.MOSTLY_NEGATIVE:
        case lw.vI.NEGATIVE:
        case lw.vI.VERY_NEGATIVE:
        case lw.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var lW =
        (((n = {})[(n.MIGHTY = 1)] = "MIGHTY"),
        (n[(n.STRONG = 2)] = "STRONG"),
        (n[(n.FAIR = 3)] = "FAIR"),
        (n[(n.WEAK = 4)] = "WEAK"),
        n),
    lU = l(778591);
function lY(e) {
    let { rating: t, strokeColor: l } = e,
        n = 2 * Math.PI * 16,
        s = Math.min(Math.max(t, 0), 100) / 100,
        a = s * n;
    return (0, i.jsx)("svg", {
        width: 30,
        height: 30,
        viewBox: "0 0 36 36",
        style: { transform: `rotate(${((1 - s) * 360) / 2}deg)` },
        children: (0, i.jsx)("circle", {
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
var lF = l(99392);
function lH(e) {
    let { url: t, trackAction: l, title: n, rating: a, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, ty.A)(),
        d = lV(a, r, "recent" === c),
        u = lD(d),
        m = s.useCallback(() => {
            l(F.Ws.SteamReviews), o(t);
        }, [o, l, t]);
    return (0, i.jsx)(eA.D, {
        onClick: m,
        className: lF.nf,
        role: "link",
        "aria-label": eJ.intl.string(eJ.t.YNC5Di),
        children: (0, i.jsxs)("div", {
            className: lF.U6,
            children: [
                (0, i.jsxs)("div", {
                    className: lF.tN,
                    children: [
                        (0, i.jsx)(lP.N, { size: "sm", color: eI.A.colors.ICON_STRONG.css }),
                        (0, i.jsx)(p.D, { variant: "heading-sm/medium", color: "text-strong", children: n }),
                    ],
                }),
                (0, i.jsx)(
                    g.m,
                    {
                        text:
                            d === lw.vI.NO_USER_REVIEWS
                                ? eJ.intl.string(eJ.t.CLMt8J)
                                : eJ.intl
                                      .format(
                                          "recent" === c
                                              ? eJ.t.TzvC0k
                                              : "localized" === c
                                                ? eJ.t.EOfrwm
                                                : eJ.t["lzANJ/"],
                                          { rating: a, rating_count: r?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, i.jsxs)("div", {
                            className: lF.Z0,
                            children: [
                                (0, i.jsx)(v.E, {
                                    variant: "text-xs/medium",
                                    color: u,
                                    children: (function (e) {
                                        switch (e) {
                                            case lw.vI.NO_USER_REVIEWS:
                                                return eJ.intl.string(eJ.t.CLMt8J);
                                            case lw.vI.OVERWHELMINGLY_POSITIVE:
                                                return eJ.intl.string(eJ.t["75sx1S"]);
                                            case lw.vI.VERY_POSITIVE:
                                                return eJ.intl.string(eJ.t["EkOVg+"]);
                                            case lw.vI.POSITIVE:
                                                return eJ.intl.string(eJ.t.ZUkFtr);
                                            case lw.vI.MOSTLY_POSITIVE:
                                                return eJ.intl.string(eJ.t.M7Z09a);
                                            case lw.vI.MIXED:
                                                return eJ.intl.string(eJ.t.c8yuHR);
                                            case lw.vI.MOSTLY_NEGATIVE:
                                                return eJ.intl.string(eJ.t.H0MSjG);
                                            case lw.vI.NEGATIVE:
                                                return eJ.intl.string(eJ.t.vpLrgz);
                                            case lw.vI.VERY_NEGATIVE:
                                                return eJ.intl.string(eJ.t["5spYuX"]);
                                            case lw.vI.OVERWHELMINGLY_NEGATIVE:
                                                return eJ.intl.string(eJ.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(d),
                                }),
                                null != r &&
                                    d !== lw.vI.NO_USER_REVIEWS &&
                                    (0, i.jsx)(v.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: eJ.intl
                                            .format(eJ.t.sgIoin, { rating_count: r.toLocaleString() })
                                            .toString(),
                                    }),
                            ],
                        }),
                    },
                    `open-steam-page-${c}`,
                ),
            ],
        }),
    });
}
function lB(e) {
    let { game: t, url: l, trackAction: n } = e,
        { reviews: a } = t,
        r = a?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        d = r.topCriticRatingCount ?? -1,
        u = (o <= 0 || d <= 0) && null == c,
        m = (0, ty.A)(),
        x = s.useCallback(() => {
            n(F.Ws.OpenCriticReviews), m(l);
        }, [m, n, l]);
    return (0, i.jsx)(eA.D, {
        onClick: x,
        className: lF.nf,
        role: "link",
        "aria-label": eJ.intl.string(eJ.t.aLNBAw),
        children: (0, i.jsxs)("div", {
            className: lF.Ur,
            children: [
                (0, i.jsx)(p.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: eJ.intl.string(eJ.t["UxvER+"]),
                }),
                (0, i.jsxs)("div", {
                    className: lF.WA,
                    children: [
                        null != c ? (0, i.jsx)(lz, { tier: c }) : null,
                        null != c && o > 0 && d > 0 ? (0, i.jsx)(lK, { rating: o, tier: c }) : null,
                        u
                            ? (0, i.jsx)(v.E, {
                                  variant: "text-xs/medium",
                                  color: lD(lw.vI.NO_USER_REVIEWS),
                                  children: eJ.intl.string(eJ.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function lz(e) {
    let { tier: t } = e,
        l = (function (e) {
            switch (e) {
                case lW.MIGHTY:
                    return eJ.intl.string(eJ.t.aZej2g);
                case lW.STRONG:
                    return eJ.intl.string(eJ.t.MLxnSg);
                case lW.FAIR:
                    return eJ.intl.string(eJ.t["3f19KA"]);
                case lW.WEAK:
                    return eJ.intl.string(eJ.t.jtVgSh);
            }
        })(t),
        n = (function (e) {
            switch (e) {
                case lW.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case lW.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case lW.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case lW.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, i.jsx)(
        g.m,
        {
            text: l,
            children: (0, i.jsx)("div", {
                className: lF.TE,
                children: (0, i.jsx)("img", { src: n, alt: l, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function lK(e) {
    let { rating: t, tier: l } = e,
        { foregroundColor: n, backgroundColor: s } = (function (e) {
            let t = "";
            switch (e) {
                case lW.MIGHTY:
                    t = "#fc430a";
                    break;
                case lW.STRONG:
                    t = "#9e00b4";
                    break;
                case lW.FAIR:
                    t = "#4aa1ce";
                    break;
                case lW.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(l);
    return (0, i.jsx)(
        g.m,
        {
            text: eJ.intl.string(eJ.t.Ub4YR1),
            children: (0, i.jsxs)("div", {
                className: lF.TE,
                style: { backgroundColor: s },
                children: [
                    (0, i.jsx)(lY, { rating: t, strokeColor: n }),
                    (0, i.jsx)(v.E, {
                        variant: "text-xs/bold",
                        color: "always-white",
                        className: lF.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let lX = function (e) {
    let { game: t, trackAction: l } = e,
        n = (0, lU.I)(t.id),
        s = t.opencriticUrl,
        a = t.steamReleaseStatus !== m.Y.RETIRED_ABANDONED && null != n,
        r = t.reviews?.steam,
        c = lV(r?.recentRating, r?.recentRatingCount, !0),
        o = a && c !== lw.vI.NO_USER_REVIEWS,
        d =
            null != r &&
            null != r.localizedRating &&
            null != r.localizedRatingCount &&
            null != r.ratingCount &&
            r.localizedRatingCount >= 200 &&
            r.ratingCount >= 2e3,
        u = d ? r?.localizedRating : r?.rating,
        x = d ? r?.localizedRatingCount : r?.ratingCount,
        h = d ? eJ.t["aWb+V4"] : eJ.t["8e4LiB"],
        g = t.reviews?.opencritic != null && null != s;
    return a || o || g
        ? (0, i.jsxs)("div", {
              className: lF.uW,
              children: [
                  (0, i.jsx)("div", {
                      className: lF.Gf,
                      children: (0, i.jsx)(p.D, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: eJ.intl.string(eJ.t.GaAQXP),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: lF.kL,
                      children: [
                          o && null != n
                              ? (0, i.jsx)("div", {
                                    className: lF.WH,
                                    children: (0, i.jsx)(lH, {
                                        url: n,
                                        trackAction: l,
                                        title: eJ.intl.string(eJ.t.MQGNsN),
                                        rating: r?.recentRating,
                                        ratingCount: r?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          a && null != n
                              ? (0, i.jsx)("div", {
                                    className: lF.WH,
                                    children: (0, i.jsx)(lH, {
                                        url: n,
                                        trackAction: l,
                                        title: eJ.intl.string(h),
                                        rating: u,
                                        ratingCount: x,
                                        tooltipVariant: d ? "localized" : "all",
                                    }),
                                })
                              : null,
                          g && null != s
                              ? (0, i.jsx)("div", {
                                    className: lF.WH,
                                    children: (0, i.jsx)(lB, { game: t, url: s, trackAction: l }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var lJ = l(859040),
    l$ = l(674658),
    lZ = l(491438),
    lQ = l(561769),
    lq = l(758836),
    l0 = l(804163);
let l1 = s.createContext({ closeModal: () => {}, trackAction: () => {} }),
    l4 = (e) => {
        let { skuId: t, aspectRatio: l } = e,
            { product: n } = (0, l$.q)(t, !0),
            a = s.useContext(lQ.v3),
            { closeModal: r, trackAction: c } = s.useContext(l1),
            o = s.useCallback(() => {
                c(F.Ws.DiscordCollectiblesShopItem),
                    r(),
                    (0, lJ.Cz)({
                        analyticsLocations: [y.A.GAME_PROFILE],
                        analyticsSource: y.A.GAME_PROFILE,
                        initialProductSkuId: t,
                        tab: lq.G2.CATALOG,
                    });
            }, [c, r, t]);
        if (null == n) return null;
        let { flattenProductVariants: d, ...u } = a;
        return (0, i.jsx)(lQ.v3.Provider, {
            value: { flattenProductVariants: d ?? !0, ...u },
            children: (0, i.jsx)(lZ.A, {
                skuId: t,
                aspectRatio: l,
                cardClassName: l0.N,
                onClickCard: o,
                hideWishlistButton: !0,
                hidePrice: !0,
                hidePrimaryCTA: !0,
                hideSecondaryCTA: !0,
            }),
        });
    };
function l8(e) {
    let { game: t, closeModal: l, trackAction: n } = e,
        a = (function (e) {
            let { hasFetched: t, skuIds: l } = (0, h.cf)([es.A], () => ({
                hasFetched: null != e && es.A.hasShopCollectionBeenFetched(e),
                skuIds: null != e ? es.A.getShopCollectionSkuIds(e) : void 0,
            }));
            return (
                (0, s.useEffect)(() => {
                    null == e || t || es.A.isShopCollectionFetching(e) || el(e);
                }, [e, t]),
                l ?? []
            );
        })(t.shopCollectionIds?.[0]),
        r = s.useCallback(() => {
            n(F.Ws.DiscordCollectiblesShop),
                l(),
                (0, lJ.Cz)({
                    analyticsLocations: [y.A.GAME_PROFILE],
                    analyticsSource: y.A.GAME_PROFILE,
                    tab: lq.G2.CATALOG,
                });
        }, [n, l]),
        c = s.useMemo(() => ({ closeModal: l, trackAction: n }), [l, n]);
    return 0 === a.length
        ? null
        : (0, i.jsx)(l1.Provider, {
              value: c,
              children: (0, i.jsx)(ts, {
                  title: eJ.intl.string(eJ.t["5DYPT8"]),
                  onClickViewAll: r,
                  children: (0, i.jsx)(e4.A, { gap: "md", children: a.map((e) => (0, i.jsx)(l4, { skuId: e }, e)) }),
              }),
          });
}
var l2 = l(735438),
    l5 = l.n(l2),
    l3 = l(192308),
    l6 = l(311043),
    l9 = l(192389);
let l7 = (e) => {
    let { game: t, onClose: l, trackClick: n } = e;
    return (0, i.jsx)(g.m, {
        asContainer: !0,
        text: t.name,
        children: (0, i.jsx)(eA.D, {
            className: l9.fS,
            onClick: async () => {
                n(F.Ws.ClickSimilarGame, t.id),
                    (0, l3.openModalLazy)(() =>
                        Promise.resolve((e) => (0, i.jsx)(nP, { gameId: t.id, source: F.Ob.SimilarGames, ...e })),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    l();
            },
            children: (0, i.jsx)(ej.A, { game: t, className: l9.n1, size: ej.w.SMALL }),
        }),
    });
};
function ne(e) {
    let { gameId: t, onClose: l, trackAction: n, similarGames: s, similarGamesError: a } = e,
        c = (0, h.bG)([es.A, l6.A], () => {
            let e = void 0 === es.A.getSimilarGames(t) && null == es.A.getSimilarGamesError(t),
                l = s.some((e) => l6.A.isFetching(e));
            return e || l;
        }),
        o = (0, h.yK)([l6.A], () =>
            s
                .map((e) => l6.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, ef.T_)(e))
                .slice(0, 5),
        );
    return ((0, P.I)(t), (0, P.x)(s), c && null == a)
        ? (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)("div", { className: r()(l9.vM, tk.bV) }),
                  (0, i.jsx)("div", {
                      className: r()(tk.nM, tk.iH),
                      children: l5()
                          .range(0, 5)
                          .map((e) => (0, i.jsx)("div", { className: l9.nn }, e)),
                  }),
              ],
          })
        : (c || 0 !== o.length) && null == a
          ? (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(p.D, {
                        className: tk.bV,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: eJ.intl.string(eJ.t["6rLyQB"]),
                    }),
                    (0, i.jsx)("div", {
                        className: l9.D$,
                        children: o.map((e) => (0, i.jsx)(l7, { game: e, onClose: l, trackClick: n }, e.id)),
                    }),
                ],
            })
          : null;
}
var nt = l(317560),
    nl = l(467884),
    nn = l(627771);
function ni(e) {
    let { skuIds: t, analyticsLocations: l, onCardClick: n } = e,
        a = s.useMemo(() => {
            if (null != n)
                return (e, t) => {
                    let { skuId: l, applicationId: i } = t;
                    e.preventDefault(), n(l, i);
                };
        }, [n]);
    return null == t || 0 === t.length
        ? null
        : (0, i.jsx)(e4.A, {
              gap: "md",
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: nn.B,
                          children: (0, i.jsx)(nl.A, {
                              positionInSection: t,
                              skuId: e,
                              variant: nl.s.SMALL,
                              analyticsLocations: l,
                              onClick: a,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
function ns(e) {
    let { trackAction: t } = e,
        { socialLayerStorefrontRecommendationsData: l, closeModal: n } = eO(),
        { analyticsLocations: a } = (0, k.Ay)([y.A.GAME_PROFILE]),
        r = s.useCallback(() => {
            l?.guildId != null && (t(F.Ws.GameShop), n(), (0, eL.default)({ guildId: l.guildId }));
        }, [l, t, n]),
        c = s.useCallback(
            (e, i) => {
                let s = l?.guildId;
                null != s &&
                    (t(F.Ws.GameShopItem),
                    (0, nt.R)({
                        skuId: e,
                        applicationId: i,
                        isStorefront: !1,
                        analyticsLocations: a,
                        onClose: () => {
                            location.pathname.indexOf(et.BVt.CHANNELS_GAME_SHOP(s)) >= 0 && n();
                        },
                    }));
            },
            [t, n, a, l],
        );
    if (null == l) return null;
    let { skuIds: o } = l;
    return (0, i.jsx)(ts, {
        title: eJ.intl.string(eJ.t.WDdlUb),
        onClickViewAll: r,
        children: (0, i.jsx)(ni, { skuIds: o, analyticsLocations: a, onCardClick: c }),
    });
}
let na = new Set(["1402418703554842694", "356877880938070016"]),
    nr = [ec.V.EPICGAMES, ec.V.STEAM, ec.V.ROBLOX, ec.V.BATTLENET, ec.V.RIOT, ec.V.MINECRAFT];
var nc = l(349361),
    no = l(924895),
    nd = l(422688),
    nu = l(505200),
    nm = l(695250);
let nx = function (e) {
    switch (e.category) {
        case ec.V.STEAM:
            return {
                icon: lP.N,
                text: eJ.intl.string(eJ.t.FsANs4),
                ariaLabel: eJ.intl.string(eJ.t["P+ePTG"]),
                action: F.Ws.SteamStoreLink,
                url: e.url,
            };
        case ec.V.EPICGAMES:
            return {
                icon: nc.r,
                text: eJ.intl.string(eJ.t.ZbBMHa),
                ariaLabel: eJ.intl.string(eJ.t.BwX0UW),
                action: F.Ws.EpicStoreLink,
                url: e.url,
            };
        case ec.V.ROBLOX:
            return {
                icon: no.H,
                text: eJ.intl.string(eJ.t["pJ+P+h"]),
                ariaLabel: eJ.intl.string(eJ.t.tYxpdf),
                action: F.Ws.RobloxStoreLink,
                url: e.url,
            };
        case ec.V.BATTLENET:
            return {
                icon: nd.a,
                text: eJ.intl.string(eJ.t["A7grp+"]),
                ariaLabel: eJ.intl.string(eJ.t.x9at20),
                action: F.Ws.BattlenetStoreLink,
                url: e.url,
            };
        case ec.V.RIOT:
            return {
                icon: nu.A,
                text: eJ.intl.string(eJ.t.h6MapL),
                ariaLabel: eJ.intl.string(eJ.t["528nvc"]),
                action: F.Ws.RiotStoreLink,
                url: e.url,
            };
        case ec.V.MINECRAFT:
            return {
                icon: nm.m,
                text: eJ.intl.string(eJ.t["HZbmO+"]),
                ariaLabel: eJ.intl.string(eJ.t.WWTqYn),
                action: F.Ws.MinecraftStoreLink,
                url: e.url,
            };
    }
    return null;
};
var nh = l(629004);
function ng(e) {
    let { isTwoColumn: t } = eO();
    return (0, i.jsx)("div", {
        className: nh.U,
        children: (0, i.jsx)(E.$, {
            ...e,
            variant: t ? "overlay-secondary" : "secondary",
            fullWidth: !0,
            role: "link",
        }),
    });
}
function nf(e) {
    let t,
        l,
        n,
        i,
        a = ea.useConfig({ location: "GameProfileStoreLinks" }).storeLinksEnabled,
        r =
            ((t = (0, lU.I)(e?.id)),
            (l = e?.id),
            (n = e?.websites),
            (i = e?.steamReleaseStatus),
            s.useMemo(() => {
                if (null == n || null == l) return [];
                let e = n.filter(
                    (e) =>
                        (e.category !== ec.V.EPICGAMES || !!na.has(l)) &&
                        (e.category !== ec.V.STEAM || i !== m.Y.RETIRED_ABANDONED) &&
                        nr.includes(e.category),
                );
                return (
                    null == t ||
                        i === m.Y.RETIRED_ABANDONED ||
                        e.some((e) => e.category === ec.V.STEAM) ||
                        e.push({ category: ec.V.STEAM, url: t }),
                    e.sort((e, t) => (e.category === ec.V.STEAM ? -1 : +(t.category === ec.V.STEAM)))
                );
            }, [t, n, l, i]));
    return { storeWebsites: r, showsStoreLinks: a && r.length > 0 && null != e };
}
let nj = function (e) {
    let { game: t, trackAction: n } = e,
        a = (0, ty.A)(),
        { showsStoreLinks: r, storeWebsites: c } = nf(t),
        o = s.useMemo(() => c.map(nx).filter((e) => null != e), [c]);
    if (!r) return null;
    if (1 === o.length) {
        let [e] = o;
        return (0, i.jsx)(ng, {
            icon: e.icon,
            text: e.text,
            "aria-label": e.ariaLabel,
            onClick: () => {
                n(e.action), a(e.url);
            },
        });
    }
    return (0, i.jsx)(ng, {
        text: eJ.intl.string(eJ.t["/hMurx"]),
        "aria-label": eJ.intl.string(eJ.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: n, trackAction: s } = e;
                (0, l3.openModalLazy)(async () => {
                    let { default: e } = await l.e("76758").then(l.bind(l, 459477));
                    return (l) => (0, i.jsx)(e, { game: t, websiteButtons: n, trackAction: s, ...l });
                });
            })({ game: t, websiteButtons: o, trackAction: n }),
    });
};
var nv = l(566679),
    np = l(123292),
    nE = l(981355),
    nA = l(242021);
function nN(e) {
    let { game: t, trackAction: l } = e,
        [n, a] = s.useState(t?.summaryLocalized != null),
        [c, o] = s.useState(!0),
        [d, u] = s.useState(!1),
        m = s.useRef(null),
        { width: x, height: h } = (0, nE.A)();
    return (s.useEffect(() => {
        let e = m.current;
        null != e && u(e.scrollHeight - e.clientHeight > 1 || !c);
    }, [m, x, h, c]),
    null == t.description)
        ? null
        : (0, i.jsxs)("div", {
              className: r()(tk.fi, tk.mX),
              children: [
                  null != t.summaryLocalized &&
                      (0, i.jsxs)("div", {
                          className: r()(tk.nM, tk.Lc),
                          children: [
                              (0, i.jsx)(nv.Z, { color: eI.A.colors.TEXT_DEFAULT, size: "xs" }),
                              (0, i.jsx)(v.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: n
                                      ? eJ.intl.format(eJ.t.aZ2iIp, { onShowOriginal: () => a(!1) })
                                      : eJ.intl.format(eJ.t["/2ylF4"], { onShowTranslated: () => a(!0) }),
                              }),
                          ],
                      }),
                  (0, i.jsx)(v.E, {
                      ref: m,
                      lineClamp: c ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: n ? t.summaryLocalized : t.description,
                  }),
                  d &&
                      (0, i.jsx)(eA.D, {
                          className: tk.vk,
                          onClick: () => {
                              l(c ? F.Ws.ShowMore : F.Ws.ShowLess), o(!c);
                          },
                          children: (0, i.jsx)(v.E, {
                              variant: "text-sm/semibold",
                              children: c ? eJ.intl.string(eJ.t.lBeKY2) : eJ.intl.string(eJ.t["6MwJo/"]),
                          }),
                      }),
                  (0, i.jsx)(tz, { className: nA.B, game: t }),
              ],
          });
}
function nI(e) {
    let { game: t, trackAction: l } = e,
        n = s.useRef(null),
        {
            isExpanded: a,
            showToggle: c,
            handleToggleExpanded: o,
        } = (function (e, t) {
            let [l, n] = s.useState("full");
            s.useEffect(() => {
                let t = e.current;
                if (null == t) return;
                let l = new ResizeObserver(() => {
                    let t = e.current;
                    null != t &&
                        n((e) => ("expanded" === e ? e : t.scrollHeight - t.clientHeight > 1 ? "collapsed" : "full"));
                });
                return l.observe(t), () => l.disconnect();
            }, [e]);
            let i = s.useCallback(() => {
                "expanded" === l
                    ? (t(F.Ws.ShowLess), n("collapsed"))
                    : "collapsed" === l && (t(F.Ws.ShowMore), n("expanded"));
            }, [t, l]);
            return {
                isExpanded: "expanded" === l,
                showToggle: "expanded" === l || "collapsed" === l,
                handleToggleExpanded: i,
            };
        })(n, l),
        { isTwoColumn: d } = eO(),
        u = s.useMemo(() => (d ? 8 : 5), [d]);
    if (null == t.description) return null;
    let m = a ? eJ.intl.string(eJ.t["6MwJo/"]) : eJ.intl.string(eJ.t.lBeKY2);
    return (0, i.jsxs)("div", {
        className: r()(tk.fi, tk.mX),
        children: [
            (0, i.jsx)(v.E, { ref: n, lineClamp: a ? void 0 : u, variant: "text-md/medium", children: t.description }),
            c && (0, i.jsx)(np.Q, { onClick: o, text: m }),
        ],
    });
}
var nb = l(952311);
let nC = () =>
    (0, i.jsxs)("div", {
        className: tk.uv,
        children: [
            (0, i.jsx)(j.Y, { size: "xxs" }),
            (0, i.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: eJ.intl.string(eJ.t.kAlUsy) }),
        ],
    });
function nS(e) {
    let { game: t, entries: l, trackAction: n } = e,
        a = s.useMemo(() => t?.genres.map(U.du).join(", "), [t]),
        [c] = s.useState(() => Math.random()),
        d = s.useMemo(() => {
            if (null == t) return "";
            if (null != t.bannerHash)
                return W.Ay.getGameAssetURL({ id: t.id, hash: t.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            let e = t.getArtworkURLs(),
                l = t.screenshotUrls ?? [];
            if (e.length > 0) {
                let t = Math.floor(c * e.length);
                return e[t];
            }
            if (l.length > 0) {
                let e = Math.floor(c * l.length);
                return l[e];
            }
            return "";
        }, [t, c]),
        u = t.getIconURL(160, W.QB ? "webp" : "png"),
        m = null != t.firstReleaseDate ? new Date(t.firstReleaseDate).getTime() : Y.default.extractTimestamp(t.id),
        h = 7 >= o()().diff(o()(m), "days"),
        g = l.some((e) => (0, G.CZ)(e) === x.m.GLOBAL),
        f = t.name;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: tk.is, style: { backgroundImage: `url("${d}")` } }),
            (0, i.jsxs)("div", {
                className: r()(tk.Qs, tk.fi, tk.iH, tk.Se),
                children: [
                    (0, i.jsxs)("div", {
                        className: tk.xx,
                        children: [
                            (0, i.jsx)("div", {
                                className: tk.bb,
                                children: (0, i.jsx)(ej.A, { game: t, className: tk.wm, size: ej.w.LARGE }),
                            }),
                            (0, i.jsx)(eZ, { gameId: t.id, className: tk.Gg, trackAction: n }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: r()(tk.nM, tk.Lc, tk.Z3),
                        children: (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(p.D, { variant: "heading-xl/bold", children: f }),
                                (0, i.jsxs)("div", {
                                    className: r()(tk.nM, tk.Lc),
                                    children: [
                                        null != u &&
                                            (0, i.jsx)("img", {
                                                className: tk.Gt,
                                                src: u,
                                                height: 16,
                                                alt: eJ.intl.formatToPlainString(eJ.t["nh+jWk"], { game: f }),
                                            }),
                                        (0, i.jsx)(v.E, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: a,
                                        }),
                                        h &&
                                            (0, i.jsx)(v.E, {
                                                variant: "eyebrow",
                                                className: tk.Ad,
                                                children: eJ.intl.string(eJ.t.y2b7CA),
                                            }),
                                        g &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(v.E, { variant: "text-sm/medium", children: " \xb7 " }),
                                                    (0, i.jsx)(nC, {}),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
function nR(e) {
    let {
        game: t,
        entries: l,
        invite: n,
        similarGames: s,
        similarGamesError: a,
        onClose: r,
        viewId: c,
        trackAction: o,
        source: d,
    } = e;
    return (0, i.jsxs)("div", {
        className: tk.V0,
        children: [
            (0, i.jsx)(l_, { entries: l, viewId: c, invite: n, onClose: r, source: d }),
            (0, i.jsx)(lj, { game: t, trackAction: o }),
            (0, i.jsx)(ne, { gameId: t.id, onClose: r, similarGames: s, similarGamesError: a, trackAction: o }),
        ],
    });
}
function ny(e) {
    let { game: t, trackAction: l, closeModal: n } = e;
    return (0, i.jsxs)("div", {
        className: nb.oC,
        children: [
            (0, i.jsxs)("div", {
                className: nb.lM,
                children: [(0, i.jsx)(lE, { game: t, trackAction: l }), (0, i.jsx)(nI, { game: t, trackAction: l })],
            }),
            (0, i.jsx)(td, { gameId: t.id, trackAction: l }),
            (0, i.jsx)(ns, { trackAction: l }),
            (0, i.jsx)(l8, { game: t, closeModal: n, trackAction: l }),
        ],
    });
}
function nk(e) {
    let { game: t, trackAction: l, analyticsLocations: n } = e,
        s = t.steamReleaseStatus !== m.Y.RETIRED_ABANDONED,
        { closeModal: a } = eO();
    return (0, i.jsxs)("div", {
        className: tk.V0,
        children: [
            (0, i.jsx)(lE, { game: t, trackAction: l }),
            (0, i.jsxs)("div", {
                className: nb.gr,
                children: [
                    (0, i.jsx)(le, { game: t, isTwoColumn: !1 }),
                    (0, i.jsxs)("div", {
                        className: nb.E1,
                        children: [
                            (0, i.jsx)(nj, { game: t, trackAction: l }),
                            (0, i.jsx)(nI, { game: t, trackAction: l }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(ls, { analyticsLocations: n, trackAction: l }),
            (0, i.jsx)(t4, { closeModal: a, trackAction: l }),
            (0, i.jsx)(td, { gameId: t.id, trackAction: l }),
            (0, i.jsx)(ns, { trackAction: l }),
            (0, i.jsx)(l8, { game: t, closeModal: a, trackAction: l }),
            s && (0, i.jsx)(lX, { game: t, trackAction: l }),
            (0, i.jsx)(t$, { game: t, trackAction: l }),
        ],
    });
}
function nL(e) {
    let { onClose: t, onCloudPlayClick: l, analyticsLocations: n, trackAction: a } = e;
    (0, L.A)({
        name: d.ImpressionNames.CLOUD_PLAY_CTA,
        type: d.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let r = s.useCallback(() => {
        a(F.Ws.CloudPlay), t(), l();
    }, [t, l, a]);
    return (0, i.jsx)(g.m, {
        text: eJ.intl.string(eJ.t.JVwWva),
        position: "top",
        children: (0, i.jsx)(E.$, {
            icon: A.h,
            text: eJ.intl.string(eJ.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: r,
            fullWidth: !0,
        }),
    });
}
function nT(e) {
    let { gameId: t, analyticsLocations: l } = e,
        n = (0, O.h)(t),
        i = (0, R.A)({ application: n, analyticsLocations: l });
    return { onCloudPlayClick: i, isCloudPlayButtonShown: !(0, w.L)(t) && null != i };
}
function nO(e) {
    let { game: t, onSetInvite: l, invite: n, trackAction: a, onClose: c, analyticsLocations: o } = e,
        d = s.useCallback(() => {
            c(), (0, V.closeUserProfileModal)();
        }, [c]),
        { isCloudPlayButtonShown: u, onCloudPlayClick: m } = nT({ gameId: t.id, analyticsLocations: o });
    return (0, i.jsxs)("div", {
        className: r()(tk.pz, tk.fi, tk.iH),
        children: [
            (0, i.jsxs)("div", {
                className: tk.NC,
                children: [
                    (0, i.jsx)(tZ, { invite: n, closeModal: d, trackAction: a }),
                    u &&
                        null != m &&
                        (0, i.jsx)(nL, { onClose: d, onCloudPlayClick: m, analyticsLocations: o, trackAction: a }),
                ],
            }),
            (0, i.jsx)(p.D, { variant: "heading-md/bold", children: eJ.intl.string(eJ.t.CI0vSJ) }),
            (0, i.jsxs)("div", {
                className: tk.V0,
                children: [
                    (0, i.jsx)(nN, { game: t, trackAction: a }),
                    (0, i.jsx)(t1, { game: t, onInviteResolved: l, closeModal: d, trackAction: a }),
                    (0, i.jsx)(tP, { game: t, trackAction: a }),
                    (0, i.jsx)(lG, { game: t }),
                    (0, i.jsx)(th, { game: t, trackAction: a }),
                    (0, i.jsx)(v.E, {
                        variant: "text-xxs/normal",
                        children: eJ.intl.format(eJ.t.pch2Jw, { igdbLink: tK.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function nM(e) {
    let { game: t, trackAction: l, analyticsLocations: n } = e,
        { closeModal: s } = eO(),
        { isCloudPlayButtonShown: a, onCloudPlayClick: c } = nT({ gameId: t.id, analyticsLocations: n }),
        { showsStoreLinks: o } = nf(t),
        d = t.steamReleaseStatus !== m.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: r()(nb.Pn, tk.fi, tk.iH, o ? nb.sV : nb.gF),
        children: [
            a && null != c
                ? (0, i.jsx)("div", {
                      className: tk.NC,
                      children: (0, i.jsx)(nL, {
                          onClose: s,
                          onCloudPlayClick: c,
                          analyticsLocations: n,
                          trackAction: l,
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: tk.V0,
                children: [
                    (0, i.jsx)(nj, { game: t, trackAction: l }),
                    (0, i.jsx)(ls, { analyticsLocations: n, trackAction: l }),
                    (0, i.jsx)(t4, { closeModal: s, trackAction: l }),
                    d && (0, i.jsx)(lX, { game: t, trackAction: l }),
                    (0, i.jsx)(t$, { game: t, trackAction: l }),
                ],
            }),
        ],
    });
}
function n_(e) {
    let {
            gameId: t,
            source: l,
            sourceUserId: n,
            transitionState: a,
            onClose: c,
            appContext: o,
            trackExternalAction: d,
        } = e,
        { clientThemesClassName: u } = (0, M.Ay)(),
        m = (0, h.bG)([D.default], () => D.default.locale),
        { analyticsLocations: x } = (0, k.Ay)(y.A.GAME_PROFILE),
        g = s.useMemo(() => (0, F.u9)(), []),
        f = (0, h.yK)([es.A], () => (es.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [j, v] = s.useState(null),
        p = (0, er.s)(t),
        [E, A] = s.useState(null),
        C = s.useRef(null);
    s.useEffect(() => {
        C.current = E;
    }, [E]);
    let { data: R, refetch: L } = (0, P.I)(t),
        T = R?.name ?? "",
        O = (e, n) => {
            let { guildId: i, isVerified: s } = (0, F.VO)(C.current);
            (0, F.Tn)({
                gameName: T,
                gameId: t,
                action: e,
                similarGameId: n,
                viewId: g,
                guildId: i,
                isVerified: s,
                source: l,
            });
        };
    return ((0, S.Ay)(() => {
        (0, F.rw)({ source: l, viewId: g, gameId: t, gameName: T, authorId: n, profileType: F.HV.FullProfile }),
            (0, _.He)();
    }),
    s.useEffect(() => {
        m.startsWith("en") || R?.summaryLocalized != null || L();
    }, [t, R?.summaryLocalized, m, L]),
    s.useEffect(() => {
        (async () => {
            if (0 === f.length) {
                v(null);
                try {
                    await en(t);
                } catch (e) {
                    v(e);
                }
            }
        })();
    }, [t, f]),
    (0, S.Ay)(() => () => {
        let { guildId: e, isVerified: l } = (0, F.VO)(C.current),
            n = Date.now(),
            i = p.map((e) => {
                let t = (0, G.JM)(e) ? (0, G.W6)(e, n) : (0, G.aJ)(e, m);
                return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
            });
        (0, F.V_)({
            viewId: g,
            gameId: t,
            gameName: T,
            playedFriendIds: p.map((e) => e.author_id),
            playedFriendsData: i,
            similarGames: f.filter(ef.oS).slice(0, 5),
            guildId: e,
            isVerified: l,
        });
    }),
    null == R)
        ? null
        : (0, i.jsx)(k.f5, {
              value: x,
              children: (0, i.jsx)(N.d, {
                  transitionState: a,
                  onClose: c,
                  size: "xl",
                  children: (0, i.jsx)("div", {
                      className: r()(u, tk.fn),
                      children: (0, i.jsxs)(I.Ip, {
                          orientation: "auto",
                          children: [
                              (0, i.jsx)(nS, { game: R, entries: p, trackAction: O }),
                              (0, i.jsx)(b.F, {
                                  children: (0, i.jsxs)("div", {
                                      className: r()(tk.Qs, tk.rb),
                                      children: [
                                          (0, i.jsx)(nR, {
                                              game: R,
                                              entries: p,
                                              invite: E,
                                              similarGames: f,
                                              similarGamesError: j,
                                              onClose: c,
                                              viewId: g,
                                              source: l,
                                              trackAction: O,
                                          }),
                                          (0, i.jsx)(nO, {
                                              game: R,
                                              invite: E,
                                              onSetInvite: A,
                                              onClose: c,
                                              appContext: o,
                                              source: l,
                                              trackExternalAction: d,
                                              trackAction: O,
                                              analyticsLocations: x,
                                          }),
                                      ],
                                  }),
                              }),
                          ],
                      }),
                  }),
              }),
          });
}
function nG(e) {
    let {
            gameId: t,
            source: l,
            sourceUserId: n,
            transitionState: a,
            onClose: c,
            appContext: o,
            trackExternalAction: d,
            initialScrollOffset: m,
        } = e,
        [x, g] = s.useState(!0),
        [j, v] = s.useState(null),
        { clientThemesClassName: p } = (0, M.Ay)(),
        E = (0, h.bG)([D.default], () => D.default.locale),
        A = s.useMemo(() => (0, F.u9)(), []),
        { analyticsLocations: N } = (0, k.Ay)(y.A.GAME_PROFILE),
        I = (0, er.s)(t),
        { data: R } = (0, P.I)(t),
        L = R?.name ?? "",
        w = s.useRef(null);
    s.useEffect(() => {
        w.current = j;
    }, [j]);
    let {
            hasAlreadyLinked: W,
            canStartAuthorization: U,
            fetched: Y,
            startAuthorization: H,
            connectionApp: B,
        } = (0, T.RD)(R),
        { invite: z, isMember: K } = eu(R, v),
        { socialLayerStorefrontRecommendationsData: X } = (function (e) {
            let t = eg.default.getCurrentUser()?.id,
                l = s.useMemo(() => (null != t ? [t] : []), [t]),
                n = (0, h.bG)([em.A], () => (null != e ? em.A.getApplicationIdFromDetectableId(e) : void 0)),
                i = (0, O.h)(n),
                a = s.useMemo(() => (null != n ? [n] : []), [n]),
                { recommendations: r, status: c } = (0, eh.XQ)({
                    applicationIds: a,
                    userIds: l,
                    numItems: 6,
                    source: ex.B5.USER_PROFILE,
                });
            return {
                socialLayerStorefrontRecommendationsData: s.useMemo(
                    () =>
                        null == i || null == i.guildId || "success" !== c || 0 === r.length
                            ? null
                            : { application: i, skuIds: r.map((e) => e.id), guildId: i.guildId },
                    [i, c, r],
                ),
            };
        })(t),
        J = (e, n) => {
            let { guildId: i, isVerified: s } = (0, F.VO)(w.current);
            (0, F.Tn)({
                gameName: L,
                gameId: t,
                action: e,
                similarGameId: n,
                viewId: A,
                guildId: i,
                isVerified: s,
                source: l,
            });
        };
    (0, S.Ay)(() => {
        (0, F.rw)({ source: l, viewId: A, gameId: t, gameName: L, authorId: n, profileType: F.HV.FullProfile }),
            (0, _.He)();
    }),
        (0, S.Ay)(() => () => {
            let { isVerified: e, guildId: l } = (0, F.VO)(w.current),
                n = Date.now(),
                i = I.map((e) => {
                    let t = (0, G.JM)(e) ? (0, G.W6)(e, n) : (0, G.aJ)(e, E);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, F.V_)({
                viewId: A,
                gameId: t,
                gameName: L,
                playedFriendIds: I.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: [],
                guildId: l,
                isVerified: e,
            });
        });
    let $ = s.useCallback((e) => {
            g(e.contentRect.width >= 800);
        }, []),
        Z = (0, u.w)($, [], { fireOnMount: !0 }),
        Q = s.useCallback(() => {
            c(), (0, V.closeUserProfileModal)();
        }, [c]),
        q = s.useRef(null),
        ee = s.useCallback(() => q.current?.getScrollerNode()?.scrollTop ?? 0, []),
        et = s.useMemo(
            () => ({
                isTwoColumn: x,
                canStartAuthorization: U,
                hasAlreadyLinked: W,
                fetchedAuthorization: Y,
                startAuthorization: H,
                connectionApp: B,
                invite: z,
                isMember: K,
                socialLayerStorefrontRecommendationsData: X,
                closeModal: Q,
                getScrollOffset: ee,
            }),
            [x, U, W, Y, H, B, z, K, X, Q, ee],
        ),
        el = s.useCallback(() => {
            c(), (0, V.closeUserProfileModal)();
        }, [c]),
        [en, ei] = s.useState(!1),
        [es, ea] = s.useState(150),
        ec = s.useRef(null);
    s.useEffect(() => {
        null != m && m > 0 && q.current?.getScrollerNode()?.scrollTo({ top: m, behavior: "instant" });
    }, []);
    let eo = s.useCallback(
        (e) => {
            let t = e.currentTarget.scrollTop;
            if (null != ec.current) {
                let e = Math.max(0, 1 - t / 150);
                ec.current.style.opacity = String(e);
            }
            ei(t >= es);
        },
        [es],
    );
    return null == R
        ? null
        : (0, i.jsx)(k.f5, {
              value: N,
              children: (0, i.jsx)(f.N, {
                  transitionState: a,
                  onClose: c,
                  children: (0, i.jsx)(eT.Provider, {
                      value: et,
                      children: (0, i.jsxs)("div", {
                          className: r()(p, nb.kL),
                          ref: Z,
                          children: [
                              (0, i.jsx)(t6, { game: R, ref: ec }),
                              (0, i.jsx)(t5, { game: R, show: en, onClose: el, trackAction: J }),
                              (0, i.jsx)(t3, { show: en }),
                              (0, i.jsxs)(C.Ch, {
                                  ref: q,
                                  onScroll: eo,
                                  children: [
                                      (0, i.jsx)(lt, {
                                          game: R,
                                          onSetCompactBarScrollThreshold: ea,
                                          showCompactBar: en,
                                      }),
                                      (0, i.jsx)(b.F, {
                                          children: x
                                              ? (0, i.jsxs)("div", {
                                                    className: nb.jC,
                                                    children: [
                                                        (0, i.jsx)(ny, { game: R, closeModal: el, trackAction: J }),
                                                        (0, i.jsx)(nM, {
                                                            game: R,
                                                            appContext: o,
                                                            source: l,
                                                            trackExternalAction: d,
                                                            trackAction: J,
                                                            analyticsLocations: N,
                                                        }),
                                                    ],
                                                })
                                              : (0, i.jsx)("div", {
                                                    className: nb.b9,
                                                    children: (0, i.jsx)(nk, {
                                                        game: R,
                                                        trackAction: J,
                                                        analyticsLocations: N,
                                                    }),
                                                }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
              }),
          });
}
let nP = function (e) {
    let t = ea.useConfig({ location: "GameProfileModal" }).enabled;
    return e.forceV2 || t ? (0, i.jsx)(nG, { ...e }) : (0, i.jsx)(n_, { ...e });
};
