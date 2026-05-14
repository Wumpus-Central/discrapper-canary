l.d(t, { default: () => nF });
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
    S = l(689175),
    C = l(964486),
    y = l(737393),
    R = l(793574),
    k = l(688810),
    L = l(139286),
    T = l(46225),
    O = l(429913),
    _ = l(590703),
    M = l(180170),
    G = l(832384),
    P = l(569926),
    w = l(928550),
    D = l(975732),
    V = l(773669),
    W = l(486020),
    U = l(541830),
    Y = l(935208),
    F = l(409626),
    B = l(636537),
    H = l(228366),
    z = l(913122),
    X = l(371794);
l(321073);
var K = l(155718),
    J = l(731068),
    $ = l(59318),
    Z = l(320095),
    Q = l(383233),
    q = l(998218);
let ee = /^#{1,3}\s+(.+)$/,
    et = /^https?:\/\/\S+$/;
function el(e) {
    let t = q.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
var en = l(652215);
let ei = async (e) => {
        H.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
        try {
            let t = (
                await (0, X.aP)({
                    url: en.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: V.default.locale },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.flatMap((e) => e.sku_ids);
            H.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: t });
        } catch (t) {
            H.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
        }
    },
    es = async (e) => {
        try {
            let t = (
                (await B.Bo.get({ url: en.Rsh.SIMILAR_GAMES(e), rejectWithError: !1 })).body.similar_games ?? []
            ).filter((t) => t !== e);
            H.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
        } catch (e) {
            throw new z.LG(e);
        }
    },
    ea = async (e, t) => {
        H.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
        try {
            let l = {};
            t?.limit != null && (l.limit = t.limit);
            let n = (await B.Bo.get({ url: en.Rsh.GAME_ANNOUNCEMENTS(e), query: l, rejectWithError: !1 })).body;
            H.h.dispatch({
                type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
                gameId: e,
                messages: n.messages.map((e) => {
                    let t,
                        l,
                        n = (0, Z.rh)(e),
                        i = n.content,
                        s = (function (e) {
                            if ((0, Q._c)(e))
                                return e.components
                                    .filter((e) => e.type === K.I5.TEXT_DISPLAY)
                                    .map((e) => e.content)
                                    .join("\n");
                            let t = e.content;
                            return 0 === t.length || et.test(t.trim())
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
                        a = (function (e) {
                            if ((0, Q._c)(e)) {
                                let t = e.components.find((e) => e.type === K.I5.MEDIA_GALLERY),
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
                            let i = e.embeds.find((e) => null != e.image);
                            if (i?.image != null)
                                return (0, J.oU)(
                                    i.image,
                                    {
                                        message: e,
                                        identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                    },
                                    "IMAGE",
                                );
                            let s = e.embeds.find((e) => null != e.thumbnail);
                            if (s?.thumbnail != null)
                                return (0, J.oU)(
                                    s.thumbnail,
                                    {
                                        message: e,
                                        identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === s) },
                                    },
                                    "IMAGE",
                                );
                        })(n),
                        { title: r, body: c } =
                            ((t = s.indexOf("\n")),
                            (l = (-1 === t ? s : s.slice(0, t)).match(ee)),
                            null != l
                                ? { title: l[1].trim(), body: -1 === t ? "" : s.slice(t + 1).trimStart() }
                                : { body: s }),
                        o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                        d =
                            s === i || (0, Q._c)(n)
                                ? void 0
                                : (function (e) {
                                      let t = e.embeds[0];
                                      if (null == t) return;
                                      let l = t.author?.name,
                                          n = t.author?.iconProxyURL ?? t.author?.iconURL,
                                          i = t.footer?.text ?? t.provider?.name,
                                          s = t.footer?.iconProxyURL ?? t.footer?.iconURL,
                                          a = t.url,
                                          r = t.color ?? void 0;
                                      if (null != l || null != i || null != a)
                                          return {
                                              authorName: l,
                                              authorIconUrl: n,
                                              providerName: i,
                                              providerIconUrl: s,
                                              url: a,
                                              color: r,
                                          };
                                  })(n);
                    return {
                        id: n.id,
                        media: a,
                        title: r,
                        body: c,
                        content: s,
                        timestamp: e.timestamp,
                        reactionCount: o,
                        embedSource: d,
                    };
                }),
                channelId: n.channel_id ?? void 0,
                guildId: n.guild_id ?? void 0,
            });
        } catch (t) {
            H.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
        }
    };
var er = l(422069);
let ec = (0, l(945810).mj)({
    name: "2025-12-game-profiles-v2",
    kind: "user",
    defaultConfig: { enabled: !1, storeLinksEnabled: !1 },
    variations: { 1: { enabled: !0, storeLinksEnabled: !1 }, 2: { enabled: !0, storeLinksEnabled: !0 } },
});
var eo = l(205184),
    ed = l(505779),
    eu = l(970163),
    em = l(184989);
let ex = function (e, t) {
    let [l, n] = s.useState(),
        i = s.useRef(null),
        a = s.useRef(t);
    s.useEffect(() => {
        a.current = t;
    }, [t]);
    let r = (0, h.bG)([em.A], () => l?.guild?.id != null && em.A.isMember(l?.guild?.id)),
        c = s.useMemo(
            () =>
                e?.websites?.find((e) => {
                    let { category: t } = e;
                    return t === ed.V.DISCORD;
                }),
            [e?.websites],
        );
    return (
        s.useEffect(() => {
            let e = async (e) => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (i.current?.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, eu.A)(t, "game_profile");
                    !0 !== e.banned && ((i.current = t), n(e.invite), null != e.invite && a.current?.(e.invite));
                }
            };
            null != c && e(c.url);
        }, [c]),
        { invite: l, isMember: r }
    );
};
var eh = l(832163),
    eg = l(561794),
    ef = l(862772),
    ej = l(287809),
    ev = l(80552),
    ep = l(459746),
    eE = l(922016),
    eA = l(980707),
    eN = l(477782),
    eI = l(939249),
    eb = l(365199),
    eS = l(661531),
    eC = l(663341),
    ey = l(408278),
    eR = l(34188),
    ek = l(789645),
    eL = l(442433),
    eT = l(50268),
    eO = l(44724);
let e_ = s.createContext(void 0);
function eM() {
    let e = s.useContext(e_);
    if (void 0 === e) throw Error("useGameProfileV2Context must be used within a GameProfileV2Provider");
    return e;
}
var eG = l(67518),
    eP = l(540185),
    ew = l(926268),
    eD = l(53788),
    eV = l(831453),
    eW = l(785866),
    eU = l(555704),
    eY = l(457965),
    eF = l(47675),
    eB = l(633075),
    eH = l(289173),
    ez = l(841595),
    eX = l(958805),
    eK = l(735321),
    eJ = l(495544),
    e$ = l(760751),
    eZ = l(375708);
async function eQ(e) {
    let t = e((0, eK.BF)());
    await eX.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function eq(e) {
    let { gameId: t, className: l, trackAction: n } = e,
        a = s.useRef(null),
        r = (0, eT.A)({ id: t, label: eZ.intl.string(eZ.t.SHQGPj) }),
        c = (0, eG.n)(t, n);
    return null == r && null == c
        ? null
        : (0, i.jsx)(eE.Y, {
              targetElementRef: a,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(eA.W, {
                      "data-menu-migrated-auto": !0,
                      navId: "game-profile-context",
                      onClose: () => {
                          (0, eL.Z_)(), t();
                      },
                      "aria-label": eZ.intl.string(eZ.t.PNeFgW),
                      onSelect: () => {},
                      children: (0, i.jsxs)(i.Fragment, {
                          children: [(0, i.jsx)(eN.rX, { children: r }), (0, i.jsx)(eN.rX, { children: c })],
                      }),
                  });
              },
              children: (e) =>
                  (0, i.jsx)(g.m, {
                      text: eZ.intl.string(eZ.t["UKOtz+"]),
                      children: (0, i.jsx)(eI.D, {
                          innerRef: a,
                          className: l,
                          ...e,
                          children: (0, i.jsx)(eb.j, { size: "xs", color: eS.A.colors.WHITE }),
                      }),
                  }),
          });
}
function e0(e) {
    let { game: t, onClose: l, className: n, trackAction: a } = e,
        r = s.useRef(null),
        c = s.useRef(null),
        o = (0, eT.A)({ id: t.id, label: eZ.intl.string(eZ.t.SHQGPj) }),
        d = (0, eG.n)(t.id, a),
        u = (function (e) {
            let t = e?.id,
                l = e?.name ?? "",
                n = (0, h.bG)([eJ.default], () => eJ.default.getId()),
                a = (0, h.bG)([e$.A], () => e$.A.getDetectableGame(t)),
                r = s.useMemo(
                    () => [
                        {
                            type: eP.x.FAVORITE_GAMES,
                            addLabel: eZ.intl.string(eZ.t.fgmitg),
                            removeLabel: eZ.intl.string(eZ.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: ew.C,
                        },
                        {
                            type: eP.x.PLAYED_GAMES,
                            addLabel: eZ.intl.string(eZ.t["0xIVLR"]),
                            removeLabel: eZ.intl.string(eZ.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: eD.G,
                        },
                        {
                            type: eP.x.CURRENT_GAMES,
                            addLabel: eZ.intl.string(eZ.t.G0c4En),
                            removeLabel: eZ.intl.string(eZ.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: eV.H,
                        },
                        {
                            type: eP.x.WANT_TO_PLAY_GAMES,
                            addLabel: eZ.intl.string(eZ.t.UuBS4K),
                            removeLabel: eZ.intl.string(eZ.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: eW._,
                        },
                    ],
                    [],
                ),
                c = (0, h.yK)([ez.A], () => (null == n ? [] : (ez.A.getUserProfile(n)?.widgets ?? [])), [n]),
                o = (0, eY.w$)({ location: "game-profile-overflow-menu" }),
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
                            (await eQ((i) => {
                                let s = i.filter(eH.fu).find((t) => t.type === e) ?? null;
                                if (l) {
                                    if (s?.games.some((e) => e.applicationId === t) || (null != s && (0, eK.uA)(s)))
                                        return i;
                                    let l = { applicationId: t },
                                        a = null != s ? [l, ...(s.games ?? [])] : [l];
                                    n = new eH.Yy({ ...(s ?? { type: e }), games: a });
                                } else {
                                    if (null == s) return i;
                                    let e = s.games.filter((e) => e.applicationId !== t);
                                    n = new eH.Yy({ ...s, games: e });
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
                        (0, eF.un)({
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
                            (await eQ((l) =>
                                e
                                    ? l.some((e) => e instanceof eB.R && e.applicationId === d)
                                        ? l
                                        : [(t = new eB.R({ applicationId: d })), ...l]
                                    : ((t = l.find((e) => e instanceof eB.R && e.applicationId === d) ?? null),
                                      l.filter((e) => !(e instanceof eB.R && e.applicationId === d))),
                            ),
                            null == t)
                        )
                            return;
                        let l = t;
                        (0, eF.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...l.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [d],
                );
            if (null == n) return null;
            let x = null != e && null != a && (0, eK.XX)(a),
                g = [];
            if (null != d) {
                let e = c.some((e) => e instanceof eB.R && e.applicationId === d);
                g.push(
                    (0, i.jsx)(
                        eN.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? eZ.intl.formatToPlainString(eZ.t.Ktb1n8, { name: l })
                                : eZ.intl.formatToPlainString(eZ.t.Xp6iZt, { name: l }),
                            action: () => m(!e),
                            leadingAccessory: { type: "icon", icon: eU.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (x)
                for (let e of r) {
                    let l = c.filter(eH.fu).find((t) => t.type === e.type) ?? null,
                        n = null != l && l.games.some((e) => e.applicationId === t),
                        s = !n && null != l && (0, eK.uA)(l);
                    g.push(
                        (0, i.jsx)(
                            eN.Dr,
                            {
                                id: e.menuId,
                                label: n ? e.removeLabel : e.addLabel,
                                subtext: s ? eZ.intl.string(eZ.t["86OoiH"]) : void 0,
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
        { invite: m } = eM(),
        x = new Set(m?.guild?.features).has(en.GuildFeatures.SOCIAL_LAYER_STOREFRONT),
        f = s.useCallback(() => {
            null != m && (0, eO.X)({ invite: m });
        }, [m]),
        j = s.useCallback(() => {
            null != m && (a(F.Ws.GameShop), (0, eO.default)({ invite: m }), l());
        }, [m, a, l]);
    return (0, i.jsxs)("div", {
        className: n,
        children: [
            null != u &&
                (0, i.jsx)(eE.Y, {
                    targetElementRef: c,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(eA.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                (0, eL.Z_)(), t();
                            },
                            "aria-label": eZ.intl.string(eZ.t.sidPSo),
                            onSelect: () => {},
                            children: (0, i.jsx)(eN.rX, { children: u }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: c,
                            children: (0, i.jsx)(E.$, {
                                icon: eC.p,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: eZ.intl.string(eZ.t.sidPSo),
                            }),
                        }),
                }),
            x &&
                null != m &&
                (0, i.jsx)(g.m, {
                    text: eZ.intl.string(eZ.t.apFNLU),
                    children: (0, i.jsx)(ey.K, {
                        icon: eR.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eZ.intl.string(eZ.t.apFNLU),
                        onMouseDown: f,
                        onClick: j,
                    }),
                }),
            (null != o || null != d) &&
                (0, i.jsx)(eE.Y, {
                    targetElementRef: r,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(eA.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                (0, eL.Z_)(), t();
                            },
                            "aria-label": eZ.intl.string(eZ.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(eN.rX, { children: d }), (0, i.jsx)(eN.rX, { children: o })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)(g.m, {
                            text: eZ.intl.string(eZ.t["UKOtz+"]),
                            children: (0, i.jsx)("div", {
                                ...e,
                                ref: r,
                                children: (0, i.jsx)(ey.K, {
                                    icon: eb.j,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": eZ.intl.string(eZ.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, i.jsx)(ey.K, {
                icon: ek.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: l,
                "aria-label": eZ.intl.string(eZ.t.cpT0Cq),
            }),
        ],
    });
}
var e1 = l(621466),
    e8 = l(966697),
    e4 = l(460905),
    e2 = l(449543),
    e5 = l(46054),
    e3 = l(58703),
    e6 = l(60465),
    e9 = l(284009),
    e7 = l.n(e9),
    te = l(376728),
    tt = l(976860),
    tl = l(71393),
    tn = l(449054);
async function ti(e) {
    let { invite: t, guildId: l, channelId: n, messageId: i, analyticsLocationStack: s } = e;
    e7()(s.length > 0, "analyticsLocationStack must have at least one location");
    let a = s[s.length - 1],
        r = null;
    if ((null != t && ((l = t.guild?.id), (r = new Set(t.guild?.features))), null == l)) return;
    let c = tl.A.getGuild(l);
    if (c?.joinedAt == null)
        if (null == r || r.has(en.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, tn.Z2)(
                l,
                {},
                { shouldNavigate: !0, channelId: n, messageId: i, joinSource: en.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                s,
            ));
        else
            null != t &&
                (await te.Ay.acceptInvite({ inviteKey: t.code, context: { location: a }, skipOnboarding: !0 }));
    (0, tt.pX)(en.BVt.CHANNEL(l, n, i), { sourceLocationStack: s });
}
var ts = l(320448),
    ta = l(274119);
function tr(e) {
    let { children: t, title: l, onClickViewAll: n } = e;
    return (0, i.jsxs)("div", {
        className: ta.k,
        children: [
            (0, i.jsxs)("div", {
                className: ta.w,
                children: [
                    (0, i.jsx)(p.D, { variant: "heading-lg/medium", children: l }),
                    null != n &&
                        (0, i.jsx)(E.$, {
                            size: "sm",
                            icon: ts._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: n,
                            text: eZ.intl.string(eZ.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var tc = l(468489),
    to = l(992595);
function td(e, t) {
    return e5.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function tu(e) {
    let { variant: t, message: l, channelId: n, onCardClick: a } = e,
        [c, o] = s.useState(!1),
        d = "main" === t,
        u = s.useCallback(() => o(!0), []),
        m = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, e1.vq)(e.target, HTMLAnchorElement) ||
                        ((0, e1.vq)(e.target, HTMLSpanElement) && (0, e1.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return a(l.id);
            },
            [a, l.id],
        ),
        x = l.media?.width != null && l.media?.height != null ? l.media.width / l.media.height : 16 / 9,
        h = l.media?.proxyUrl ?? l.media?.url,
        g = (null != h ? el(h) : null) ?? h,
        { embedSource: f } = l;
    return null == f
        ? null
        : (0, i.jsx)(eI.D, {
              className: d ? tc.jI : tc.IU,
              onClick: m,
              children: (0, i.jsxs)("div", {
                  className: d ? tc.GT : tc.s4,
                  children: [
                      null != f.url &&
                          (0, i.jsx)(v.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: tc.Ow,
                              children: f.url,
                          }),
                      (0, i.jsxs)("div", {
                          className: tc._d,
                          style: null != f.color ? { borderInlineStartColor: f.color } : void 0,
                          children: [
                              null != f.authorName &&
                                  (0, i.jsxs)("div", {
                                      className: tc.Tu,
                                      children: [
                                          null != f.authorIconUrl &&
                                              (0, i.jsx)("img", {
                                                  src: f.authorIconUrl,
                                                  className: tc.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, i.jsx)(v.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-strong",
                                              children: f.authorName,
                                          }),
                                      ],
                                  }),
                              null != l.media &&
                                  null != g &&
                                  (0, i.jsx)("div", {
                                      className: tc.ax,
                                      children: (0, i.jsx)(e8.y, {
                                          readyState: c ? en.Rv1.READY : en.Rv1.LOADING,
                                          aspectRatio: x,
                                          placeholder: l.media.placeholder,
                                          placeholderVersion: l.media.placeholderVersion,
                                          placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                                          children: (0, i.jsx)("img", {
                                              src: g,
                                              className: tc.Lw,
                                              alt: "",
                                              draggable: !1,
                                              onLoad: u,
                                          }),
                                      }),
                                  }),
                              null != l.title &&
                                  (0, i.jsx)(p.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: d ? tc.KX : tc._N,
                                      children: td(l.title, n),
                                  }),
                              l.body.length > 0 &&
                                  (0, i.jsxs)("div", {
                                      className: r()(tc.h_, to.PT),
                                      children: [td(l.body, n), (0, i.jsx)("div", { className: tc.fm })],
                                  }),
                              (0, i.jsxs)("div", {
                                  className: tc.ov,
                                  children: [
                                      null != f.providerIconUrl &&
                                          (0, i.jsx)("img", {
                                              src: f.providerIconUrl,
                                              className: tc.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, i.jsxs)(v.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != f.providerName ? `${f.providerName} \xb7 ` : "",
                                              (0, e3.i$)(new Date(l.timestamp), "LL"),
                                          ],
                                      }),
                                      l.reactionCount > 0 &&
                                          (0, i.jsxs)("div", {
                                              className: tc.a5,
                                              children: [
                                                  (0, i.jsx)(e4.n, { size: "xs", color: "currentColor" }),
                                                  (0, i.jsx)(v.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(eZ.intl.currentLocale).format(
                                                          l.reactionCount,
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
function tm(e) {
    let { variant: t, message: l, channelId: n, onCardClick: a } = e,
        [c, o] = s.useState(!1),
        d = "main" === t,
        u = s.useCallback(() => o(!0), []),
        m = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, e1.vq)(e.target, HTMLAnchorElement) ||
                        ((0, e1.vq)(e.target, HTMLSpanElement) && (0, e1.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return a(l.id);
            },
            [a, l.id],
        ),
        x = l.media?.width != null && l.media?.height != null ? l.media.width / l.media.height : 16 / 9,
        h = l.media?.proxyUrl ?? l.media?.url,
        g = (null != h ? el(h) : null) ?? h,
        f = null != l.media && null != g;
    return (0, i.jsxs)(eI.D, {
        className: r()({ [tc.cG]: d && f, [tc.jI]: d && !f, [tc.IU]: !d }),
        onClick: m,
        children: [
            null != l.media &&
                null != g &&
                (0, i.jsx)("div", {
                    className: d ? tc._v : tc.eZ,
                    children: (0, i.jsx)(e8.y, {
                        readyState: c ? en.Rv1.READY : en.Rv1.LOADING,
                        aspectRatio: x,
                        placeholder: l.media.placeholder,
                        placeholderVersion: l.media.placeholderVersion,
                        placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                        children: (0, i.jsx)("img", {
                            src: g,
                            className: d ? tc.fk : tc.v,
                            alt: "",
                            draggable: !1,
                            onLoad: u,
                        }),
                    }),
                }),
            (0, i.jsxs)("div", {
                className: d ? tc.GT : tc.s4,
                children: [
                    null != l.title &&
                        (0, i.jsx)(p.D, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            className: d ? tc.KX : tc._N,
                            children: td(l.title, n),
                        }),
                    l.body.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: r()(tc.h_, to.PT),
                            children: [td(l.body, n), (0, i.jsx)("div", { className: tc.fm })],
                        }),
                    (0, i.jsxs)("div", {
                        className: tc.ov,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: (0, e3.i$)(new Date(l.timestamp), "LL"),
                            }),
                            l.reactionCount > 0 &&
                                (0, i.jsxs)("div", {
                                    className: tc.a5,
                                    children: [
                                        (0, i.jsx)(e4.n, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(v.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            children: new Intl.NumberFormat(eZ.intl.currentLocale).format(
                                                l.reactionCount,
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
function tx(e) {
    return null != e.message.embedSource ? (0, i.jsx)(tu, { ...e }) : (0, i.jsx)(tm, { ...e });
}
function th(e) {
    let { gameId: t, trackAction: l } = e,
        { analyticsLocations: n } = (0, k.Ay)(),
        { invite: a, closeModal: r, getScrollOffset: c } = eM(),
        {
            messages: o,
            guildId: d,
            channelId: u,
        } = (function (e) {
            let {
                data: t,
                hasFetched: l,
                isFetching: n,
            } = (0, h.cf)([er.A], () => ({
                data: null != e ? er.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && er.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && er.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, s.useEffect)(() => {
                    null == e || l || er.A.isAnnouncementsFetching(e) || ea(e);
                }, [e, l]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: n }
            );
        })(t),
        m = s.useCallback(() => {
            let e = a?.guild?.id ?? d;
            null != e &&
                null != u &&
                (l(F.Ws.Announcements),
                e6.A.setGameProfilePendingReturn({ gameId: t, channelId: u, initialScrollOffset: c() }),
                r(),
                ti({ invite: a, guildId: e, channelId: u, analyticsLocationStack: n }));
        }, [l, r, c, a, d, u, n, t]),
        x = s.useCallback(
            (e) => {
                let i = a?.guild?.id ?? d;
                null != i &&
                    null != u &&
                    (l(F.Ws.AnnouncementsItem),
                    e6.A.setGameProfilePendingReturn({ gameId: t, channelId: u, initialScrollOffset: c() }),
                    r(),
                    ti({ invite: a, guildId: i, channelId: u, messageId: e, analyticsLocationStack: n }));
            },
            [l, r, c, a, d, u, n, t],
        );
    if (null == u || 0 === o.length) return null;
    let g = 2 !== o.length,
        f = g ? o[0] : null,
        j = g ? o.slice(1) : o;
    return (0, i.jsx)(tr, {
        title: eZ.intl.string(eZ.t.B0BV3Y),
        onClickViewAll: m,
        children: (0, i.jsxs)("div", {
            className: tc.f3,
            children: [
                null != f && (0, i.jsx)(tx, { variant: "main", message: f, channelId: u, onCardClick: x }),
                j.length > 0 &&
                    (0, i.jsx)(e2.A, {
                        gap: 16,
                        children: j.map((e) =>
                            (0, i.jsx)(tx, { variant: "small", message: e, channelId: u, onCardClick: x }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
var tg = l(349288),
    tf = l(975807),
    tj = l(194362);
function tv(e) {
    let { game: t, trackAction: l } = e,
        n = s.useCallback(async () => {
            l(F.Ws.ClaimGame);
            let e = await (0, tj.a)(en.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tf.A)(e);
        }, [l]),
        a = s.useCallback((e) => (0, i.jsx)(tg.Anchor, { onClick: n, children: e }), [n]);
    return t.linkedApplications?.some((e) => e.type === K.Mh.OFFICIAL)
        ? null
        : (0, i.jsx)(v.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: eZ.intl.format(eZ.t.KAjfKl, { claimLink: a }),
          });
}
var tp = l(240248);
let tE = [
    ed.V.OFFICIAL,
    ed.V.FACEBOOK,
    ed.V.TWITTER,
    ed.V.INSTAGRAM,
    ed.V.YOUTUBE,
    ed.V.BLUESKY,
    ed.V.REDDIT,
    ed.V.TWITCH,
];
var tA = l(808380);
let tN = [tA.Y.DESKTOP, tA.Y.XBOX, tA.Y.PLAYSTATION, tA.Y.NINTENDO];
function tI(e) {
    return s.useMemo(() => {
        let t = new Set(e.platforms),
            l = [...t];
        return (
            !t.has(tA.Y.DESKTOP) && (t.has(tA.Y.MACOS) || t.has(tA.Y.LINUX)) && l.push(tA.Y.DESKTOP),
            l.filter((e) => tN.includes(e)).sort((e, t) => tN.indexOf(e) - tN.indexOf(t))
        );
    }, [e.platforms]);
}
var tb = l(998445),
    tS = l(274997),
    tC = l(80500),
    ty = l(319745),
    tR = l(488225),
    tk = l(967492),
    tL = l(72265),
    tT = l(454346),
    tO = l(37948),
    t_ = l(141535),
    tM = l(262420);
let tG = [ed.V.OFFICIAL, ed.V.TWITTER, ed.V.YOUTUBE],
    tP = { colorClass: tM.wP },
    tw = { size: "xs", colorClass: tM.wP };
function tD(e, t) {
    switch (e.category) {
        case ed.V.OFFICIAL:
            return { icon: (0, i.jsx)(tb.L, { ...t }), action: F.Ws.WebsiteLink, title: eZ.intl.string(eZ.t.fOUKvg) };
        case ed.V.TWITTER:
            return { icon: (0, i.jsx)(tS.p, { ...t }), action: F.Ws.XLink, title: eZ.intl.string(eZ.t.INic4y) };
        case ed.V.YOUTUBE:
            return { action: F.Ws.YouTubeLink, icon: (0, i.jsx)(tC.C, { ...t }), title: eZ.intl.string(eZ.t.lNmxbE) };
        case ed.V.FACEBOOK:
            return { icon: (0, i.jsx)(ty.Z, { ...t }), action: F.Ws.FacebookLink, title: eZ.intl.string(eZ.t.FjyREK) };
        case ed.V.INSTAGRAM:
            return {
                icon: (0, i.jsx)(tR.L, { ...t }),
                action: F.Ws.InstagramLink,
                title: eZ.intl.string(eZ.t["cgR+IK"]),
            };
        case ed.V.BLUESKY:
            return {
                icon: (0, i.jsx)(tk.a, { ...t }),
                action: F.Ws.BlueskyLink,
                title: eZ.intl.string(eZ.t["D/PHq5"]),
            };
        case ed.V.REDDIT:
            return { icon: (0, i.jsx)(tL.T, { ...t }), action: F.Ws.RedditLink, title: eZ.intl.string(eZ.t["Hgb+fc"]) };
        case ed.V.TWITCH:
            return { icon: (0, i.jsx)(tT.a, { ...t }), action: F.Ws.TwitchLink, title: eZ.intl.string(eZ.t["7xtz4G"]) };
        default:
            throw Error("Unknown website category");
    }
}
function tV(e) {
    let { website: t, trackAction: l } = e,
        { action: n, icon: a, title: r } = tD(t, tP),
        c = s.useCallback(() => {
            l(n);
        }, [n, l]);
    return (0, i.jsx)(g.m, {
        text: r,
        children: (0, i.jsx)(tg.Anchor, {
            onClick: c,
            className: tM.yO,
            href: t.url,
            target: "_blank",
            "aria-label": r,
            children: a,
        }),
    });
}
let tW = function (e) {
    let { game: t, trackAction: l } = e;
    if (null == t.websites) return null;
    let n = t.websites
        .filter((e) => {
            let { category: t } = e;
            return tG.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === n.length
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(p.D, {
                      className: t_.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: eZ.intl.string(eZ.t["Oj3o1/"]),
                  }),
                  (0, i.jsx)("div", {
                      className: r()(t_.nM, t_.mX),
                      children: n.map((e) => (0, i.jsx)(tV, { website: e, trackAction: l }, e.url)),
                  }),
              ],
          });
};
function tU(e) {
    let { website: t, trackAction: l } = e,
        n = (0, tO.A)(),
        { action: a, icon: r, title: c } = tD(t, tw),
        o = s.useCallback(() => {
            l(a), n(t.url);
        }, [a, n, l, t.url]);
    return (0, i.jsx)(g.m, {
        text: c,
        children: (0, i.jsx)(eI.D, { onClick: o, className: tM.yO, title: c, children: r }),
    });
}
var tY = l(31300),
    tF = l(802516),
    tB = l(22363),
    tH = l(418524);
function tz(e) {
    switch (e) {
        case tA.Y.DESKTOP:
            return eZ.intl.string(eZ.t.KT6uCJ);
        case tA.Y.XBOX:
            return eZ.intl.string(eZ.t.DDWUJp);
        case tA.Y.PLAYSTATION:
            return eZ.intl.string(eZ.t.fzMz2s);
        case tA.Y.NINTENDO:
            return eZ.intl.string(eZ.t.AMW8je);
        default:
            return null;
    }
}
function tX(e) {
    let { platform: t, ...l } = e;
    switch (t) {
        case tA.Y.DESKTOP:
            return (0, i.jsx)(tY.k, { size: "xs", ...l });
        case tA.Y.XBOX:
            return (0, i.jsx)(tF.Y, { size: "xs", ...l });
        case tA.Y.PLAYSTATION:
            return (0, i.jsx)(tB.X, { size: "xs", ...l });
        case tA.Y.NINTENDO:
            return (0, i.jsx)(tH.M, { size: "xs", ...l });
        default:
            return null;
    }
}
function tK(e) {
    let { platforms: t } = e;
    return (0, i.jsx)("div", {
        className: r()(t_.nM, t_.Lc),
        style: { alignItems: "center" },
        children: t.map((e) => (0, i.jsx)(g.m, { text: tz(e), children: (0, i.jsx)(tX, { platform: e }) }, e)),
    });
}
function tJ(e) {
    let { platform: t } = e;
    return (0, i.jsx)(g.m, { text: tz(t), children: (0, i.jsx)(tX, { platform: t }) }, t);
}
function t$(e) {
    let { game: t, className: l } = e,
        n = tI(t);
    return 0 === n.length
        ? null
        : (0, i.jsx)("div", {
              className: r()(t_.fi, t_.iH, l),
              children: n.length > 0 && (0, i.jsx)(tK, { platforms: n }),
          });
}
var tZ = l(424994),
    tQ = l(60541);
function tq() {
    return (0, i.jsx)(v.E, { variant: "text-sm/normal", color: "text-subtle", children: eZ.intl.string(eZ.t.GruYxV) });
}
let t0 = function (e) {
    let { game: t, trackAction: l } = e,
        n = s.useMemo(() => t.genres.map(U.du).join(", "), [t]),
        a = t.getCompanyByRole(K.wk.PUBLISHER),
        r = t.getCompanyByRole(K.wk.DEVELOPER),
        c = a.map((e) => e.name).join(", "),
        o = r.map((e) => e.name).join(", "),
        d = t.firstReleaseDate,
        u = tI(t),
        m = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return tE.includes(t);
            })
            .sort((e, t) => tE.indexOf(e.category) - tE.indexOf(t.category)),
        x = !(0, tp.uJ)(n),
        h = !(0, tp.uJ)(c),
        g = !(0, tp.uJ)(o),
        f = !(0, tp.uJ)(d),
        j = u.length > 0,
        E = m.length > 0 && !m.every((e) => (0, tp.uJ)(e.url));
    return (0, i.jsxs)("div", {
        className: tQ.uW,
        children: [
            (0, i.jsx)("div", {
                className: tQ.Gf,
                children: (0, i.jsx)(p.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: eZ.intl.string(eZ.t["7OjmmH"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tQ.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: tQ.J1,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? eZ.intl.string(eZ.t.pDgwYB) : eZ.intl.string(eZ.t.mjFKqn),
                            }),
                            x
                                ? (0, i.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tQ.Gu,
                                      children: n,
                                  })
                                : (0, i.jsx)(tq, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tQ.J1,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== a.length ? eZ.intl.string(eZ.t.Hc7Enk) : eZ.intl.string(eZ.t["4Byy/G"]),
                            }),
                            h
                                ? (0, i.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tQ.Gu,
                                      children: c,
                                  })
                                : (0, i.jsx)(tq, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tQ.J1,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? eZ.intl.string(eZ.t.KATEJB) : eZ.intl.string(eZ.t.na3PT0),
                            }),
                            g
                                ? (0, i.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tQ.Gu,
                                      children: o,
                                  })
                                : (0, i.jsx)(tq, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tQ.J1,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eZ.intl.string(eZ.t.H3mPDT),
                            }),
                            f
                                ? (0, i.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tQ.Gu,
                                      children: e3.i$(new Date(d), "LL"),
                                  })
                                : (0, i.jsx)(tq, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tQ.J1,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: u.length > 1 ? eZ.intl.string(eZ.t.PNqxNe) : eZ.intl.string(eZ.t["UxAag+"]),
                            }),
                            j
                                ? (0, i.jsx)("div", {
                                      className: tQ.Gu,
                                      children: u.map((e) => (0, i.jsx)(tJ, { platform: e }, e)),
                                  })
                                : (0, i.jsx)(tq, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tQ.J1,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eZ.intl.string(eZ.t["Oj3o1/"]),
                            }),
                            E
                                ? (0, i.jsx)("div", {
                                      className: tQ.Gu,
                                      children: m.map((e) => (0, i.jsx)(tU, { website: e, trackAction: l }, e.url)),
                                  })
                                : (0, i.jsx)(tq, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tQ.J1,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eZ.intl.string(eZ.t["BwQ+9e"]),
                            }),
                            (0, i.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: tQ.Gu,
                                children: eZ.intl.format(eZ.t.XPFZVl, { igdbLink: tZ.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: tQ.OQ, children: (0, i.jsx)(tv, { game: t, trackAction: l }) }),
        ],
    });
};
function t1(e) {
    let { invite: t, trackAction: l, closeModal: n } = e,
        a = s.useCallback(() => {
            t?.guild != null && (0, eO.X)({ guildId: t.guild.id });
        }, [t]),
        r = s.useCallback(() => {
            t?.guild != null && (l(F.Ws.GameShop), (0, eO.default)({ invite: t }), n());
        }, [n, t, l]);
    return new Set(t?.guild?.features).has(en.GuildFeatures.SOCIAL_LAYER_STOREFRONT)
        ? (0, i.jsx)(E.$, {
              variant: "primary",
              text: eZ.intl.string(eZ.t.v8UpgE),
              icon: eR.U,
              onClick: r,
              onMouseDown: a,
              fullWidth: !0,
          })
        : null;
}
var t8 = l(714991),
    t4 = l(552523),
    t2 = l(51531);
function t5(e) {
    let { game: t, trackAction: l, onInviteResolved: n, closeModal: a } = e,
        [c, o] = s.useState(),
        d = (0, h.bG)([em.A], () => c?.guild?.id != null && em.A.isMember(c?.guild?.id)),
        u = s.useMemo(
            () =>
                t.websites?.find((e) => {
                    let { category: t } = e;
                    return t === ed.V.DISCORD;
                }),
            [t.websites],
        );
    s.useEffect(() => {
        let e = async (e) => {
            let t = e.split("/").pop();
            if (null != t) {
                if (null != c && c.code.toLowerCase() === t.toLowerCase()) return;
                try {
                    let e = await (0, eu.A)(t, "game_profile");
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
            H.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: c, code: c.code, context: en.BRT.APP }));
    }, [c, l, a]);
    if (null == c || null == c.guild || !c.guild.features.includes(en.GuildFeatures.VERIFIED)) return null;
    let x = W.Ay.getGuildIconURL({ id: c.guild.id, icon: c.guild.icon, size: 32 });
    return (0, i.jsxs)("div", {
        className: t_.fi,
        children: [
            (0, i.jsx)(p.D, {
                className: t_.bV,
                variant: "text-xs/semibold",
                color: "text-default",
                children: eZ.intl.string(eZ.t.kBDZSL),
            }),
            (0, i.jsxs)("div", {
                className: r()(t_.nM, t_.mX),
                children: [
                    (0, i.jsx)("img", {
                        className: t4.$f,
                        src: x,
                        alt: eZ.intl.formatToPlainString(eZ.t.xm6W9D, { guildName: c.guild.name }),
                    }),
                    (0, i.jsxs)("div", {
                        className: t4.U5,
                        children: [
                            (0, i.jsxs)("div", {
                                className: t4.YS,
                                children: [
                                    (0, i.jsx)(v.E, { variant: "text-sm/semibold", children: c.guild.name }),
                                    (0, i.jsx)(t8.A, { guild: c.guild, size: 16 }),
                                ],
                            }),
                            null != c.approximate_member_count &&
                                (0, i.jsx)(v.E, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    children: eZ.intl.format(eZ.t.zRl6XR, { count: c.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(E.$, {
                variant: "secondary",
                text: d ? eZ.intl.string(eZ.t.cEnaWx) : eZ.intl.string(eZ.t.XpeFYr),
                onClick: m,
                fullWidth: !0,
            }),
        ],
    });
}
function t3(e) {
    let { trackAction: t, closeModal: l } = e,
        { canStartAuthorization: n, hasAlreadyLinked: a, invite: r, isMember: c } = eM(),
        o = s.useCallback(() => {
            null != r &&
                (t(F.Ws.JoinServer),
                l(),
                H.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: r, code: r.code, context: en.BRT.APP }));
        }, [r, t, l]);
    if (null == r || null == r.guild) return null;
    let d = W.Ay.getGuildIconURL({ id: r.guild.id, icon: r.guild.icon, size: 48 }),
        u = W.Ay.getGuildSplashURL({ id: r.guild.id, splash: r.guild.splash }),
        m = (n && !a) || null == u,
        x = (0, i.jsx)("img", {
            className: t2.$f,
            src: d,
            alt: eZ.intl.formatToPlainString(eZ.t.xm6W9D, { guildName: r.guild.name }),
            draggable: !1,
        }),
        h = m ? t2.To : t2.Kt,
        g = m ? t2.yj : t2.FS;
    return (0, i.jsxs)("div", {
        className: t2.uW,
        children: [
            (0, i.jsx)(p.D, {
                className: t2.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: eZ.intl.string(eZ.t["U2N+ci"]),
            }),
            (0, i.jsxs)("div", {
                className: t2.kL,
                children: [
                    !m && null != u && (0, i.jsx)("img", { className: t2.ll, src: u, alt: "", draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: t2.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: h,
                                children: [
                                    m
                                        ? x
                                        : (0, i.jsx)("div", {
                                              className: t2._C,
                                              children: (0, i.jsx)("div", { className: t2.kW, children: x }),
                                          }),
                                    (0, i.jsxs)("div", {
                                        className: g,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: t2.YS,
                                                children: [
                                                    (0, i.jsx)(t8.A, { guild: r.guild, size: 16 }),
                                                    (0, i.jsx)(p.D, {
                                                        variant: "heading-md/semibold",
                                                        color: "text-default",
                                                        children: r.guild.name,
                                                    }),
                                                ],
                                            }),
                                            !(0, tp.uJ)(r.guild?.description) &&
                                                (0, i.jsx)(v.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: r.guild?.description,
                                                }),
                                            null != r.approximate_member_count || null != r.approximate_presence_count
                                                ? (0, i.jsxs)("div", {
                                                      className: t2.iR,
                                                      children: [
                                                          null != r.approximate_presence_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: t2.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: t2._o }),
                                                                      (0, i.jsx)(v.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: eZ.intl.format(eZ.t["LC+S+m"], {
                                                                              membersOnline:
                                                                                  r.approximate_presence_count,
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          null != r.approximate_member_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: t2.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: t2.jk }),
                                                                      (0, i.jsx)(v.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: eZ.intl.format(eZ.t.zRl6XR, {
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
                                text: c ? eZ.intl.string(eZ.t.cEnaWx) : eZ.intl.string(eZ.t.XpeFYr),
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
var t6 = l(369606),
    t9 = l(8208);
function t7(e) {
    let { game: t, show: l, onClose: n, trackAction: s } = e,
        a = t.name,
        c = t.getIconURL(80);
    return (0, i.jsxs)("div", {
        className: t9.y5,
        children: [
            (0, i.jsx)("div", { className: r()(t9.nI, l && t9.hD) }),
            (0, i.jsxs)("div", {
                className: r()(t9.A1, l && t9.g8),
                children: [
                    null != c && (0, i.jsx)("img", { src: c, alt: "", className: t9.V$, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: t9.hm,
                        children: [
                            (0, i.jsx)(p.D, { variant: "heading-md/semibold", lineClamp: 1, children: a }),
                            null != t.l30Rank && (0, i.jsx)(ln, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(e0, { game: t, onClose: n, className: t9.HK, trackAction: s }),
        ],
    });
}
function le(e) {
    let { show: t } = e;
    return (0, i.jsx)("div", { className: r()(t9.nI, t9.Jn, t && t9.hD) });
}
let lt = s.forwardRef(function (e, t) {
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
    return (0, tp.uJ)(a)
        ? null
        : (0, i.jsxs)("div", {
              ref: t,
              children: [
                  (0, i.jsx)("div", { className: t9.y1, style: { backgroundImage: `url("${a}")` } }),
                  (0, i.jsx)("div", { className: t9.N4 }),
              ],
          });
});
function ll(e) {
    let { game: t } = e,
        l = (t.genres ?? []).map(U.du).join(", ");
    return (0, tp.uJ)(l) ? null : (0, i.jsx)(v.E, { variant: "text-md/normal", color: "text-muted", children: l });
}
let ln = (e) => {
    let { rank: t } = e;
    return (0, i.jsxs)("div", {
        className: t9.Qc,
        children: [
            (0, i.jsx)(t6.O, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, i.jsx)(v.E, {
                variant: "text-xs/bold",
                color: "none",
                children: eZ.intl.formatToPlainString(eZ.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
};
function li(e) {
    let { game: t, isTwoColumn: l } = e;
    return (0, i.jsx)("div", {
        className: l ? t9.n8 : t9.FS,
        children: (0, i.jsx)(ep.A, { game: t, className: t9.xe, size: ep.w.LARGE }),
    });
}
let ls = function (e) {
    let { game: t, onSetCompactBarScrollThreshold: l, showCompactBar: n } = e,
        { isTwoColumn: a } = eM(),
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
        className: r()(t9.ap, n && t9.Gh),
        children: [
            a &&
                null != t &&
                (0, i.jsx)("div", {
                    className: t9.Tf,
                    children: (0, i.jsx)(ep.A, { game: t, className: t9.w$, size: ep.w.LARGE }),
                }),
            (0, i.jsxs)("div", {
                className: t9.lu,
                children: [
                    null != t.l30Rank && (0, i.jsx)(ln, { rank: t.l30Rank }),
                    (0, i.jsx)(p.D, { ref: o, variant: "heading-xxl/semibold", children: d }),
                    (0, i.jsx)(ll, { game: t }),
                ],
            }),
        ],
    });
};
var la = l(141628),
    lr = l(289363),
    lc = l(448682);
function lo(e) {
    let { trackAction: t, analyticsLocations: l } = e,
        {
            fetchedAuthorization: n,
            hasAlreadyLinked: a,
            canStartAuthorization: r,
            startAuthorization: c,
            connectionApp: o,
            invite: d,
        } = eM(),
        u = (0, h.bG)([ej.default], () => ej.default.getCurrentUser()),
        m = s.useCallback(() => {
            t(F.Ws.LinkAccount), c({ analyticsLocations: l });
        }, [t, c, l]);
    if (!n || null == o || !r || a || null == u) return null;
    let x = d?.guild != null ? W.Ay.getGuildSplashURL({ id: d.guild.id, splash: d.guild.splash }) : null;
    return (0, i.jsxs)("div", {
        className: lc.uW,
        children: [
            (0, i.jsx)(p.D, {
                className: lc.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: eZ.intl.string(eZ.t["VDAhr+"]),
            }),
            (0, i.jsxs)("div", {
                className: lc.kL,
                children: [
                    null != x
                        ? (0, i.jsx)("img", { className: lc.ll, src: x, alt: "", draggable: !1 })
                        : (0, i.jsx)("div", { className: lc.sB, children: (0, i.jsx)(lr.default, { application: o }) }),
                    (0, i.jsxs)("div", {
                        className: lc.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: lc.FS,
                                children: [
                                    (0, i.jsx)(p.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: eZ.intl.formatToPlainString(eZ.t.hUbQT2, { gameName: o.name }),
                                    }),
                                    (0, i.jsx)(v.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: eZ.intl.string(eZ.t["JKqu+4"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(E.$, {
                                variant: "secondary",
                                icon: la.A,
                                text: eZ.intl.string(eZ.t.jynBQ5),
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
var ld = l(80687),
    lu = l(477155),
    lm = l(935286),
    lx = l(775602),
    lh = l(898736),
    lg = l(248643),
    lf = l(256905),
    lj = l(34337),
    lv = l(90721),
    lp = l(616337),
    lE = l(381641);
function lA(e) {
    let { game: t, trackAction: l } = e,
        n = s.useRef(null),
        a = (0, lh._)(t),
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
                      className: t_.bV,
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: eZ.intl.string(eZ.t.bNdK5x),
                  }),
                  (0, i.jsxs)("div", {
                      className: c ? lp.DA : lp.pZ,
                      children: [
                          (0, i.jsx)(S.zC, {
                              ref: n,
                              className: lp.ec,
                              orientation: "horizontal",
                              children: r.map((e, t) =>
                                  (0, i.jsx)(
                                      eI.D,
                                      {
                                          className: lp.gw,
                                          focusProps: { offset: 4, ringClassName: lp.jR },
                                          onClick: () => {
                                              l(F.Ws.ClickImage),
                                                  (0, lf.R)({
                                                      items: r,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      location: "GameProfileMedia",
                                                  });
                                          },
                                          children: (0, i.jsx)("img", {
                                              src: e.url,
                                              className: lp.Zm,
                                              alt: eZ.intl.formatToPlainString(eZ.t.COYYrn, { game: name }),
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          c &&
                              (0, i.jsxs)("div", {
                                  className: lp.NA,
                                  children: [
                                      (0, i.jsx)("div", { className: lp.EJ }),
                                      (0, i.jsx)(eI.D, {
                                          className: lp.G9,
                                          onClick: () => o(-1),
                                          children: (0, i.jsx)(lu.r, { className: lp.UE, color: "currentColor" }),
                                      }),
                                      (0, i.jsx)("div", { className: lp.Pj }),
                                      (0, i.jsx)(eI.D, {
                                          className: lp.G9,
                                          onClick: () => o(1),
                                          children: (0, i.jsx)(lm.E, { className: lp.UE, color: "currentColor" }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
              ],
          });
}
let lN = s.memo(function (e) {
        let { item: t, index: l, isSelected: n, isPlaying: a, onSelect: c, gameName: o } = e,
            d = s.useCallback(() => c(l), [c, l]);
        return (0, i.jsx)(eI.D, {
            className: r()(lE.JS, n && lE.Y4),
            onClick: d,
            children: (0, i.jsxs)("div", {
                className: lE.ub,
                children: [
                    (0, i.jsx)("img", {
                        src: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                        className: lE.xn,
                        alt: eZ.intl.formatToPlainString(eZ.t.COYYrn, { game: o }),
                        draggable: !1,
                    }),
                    "VIDEO" === t.type &&
                        (0, i.jsx)("div", {
                            className: lE.UZ,
                            children: (0, i.jsx)(ld.D, { playing: n && a, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    lI = s.memo(function (e) {
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
            (0, lv.A)({ videoRef: n, canvasRef: d, enabled: !l }),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    !l && (0, i.jsx)("canvas", { ref: d, className: lE.HW, "aria-hidden": "true" }),
                    (0, i.jsx)("div", {
                        className: lE.tN,
                        children: (0, i.jsx)(lg.A, {
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
                            renderLinkComponent: lj.bU,
                            onPlay: r,
                            onPause: c,
                            onFullscreenChange: o,
                            mediaPlayerClassName: lE.T9,
                            videoRef: n,
                            mediaPlayerRef: a,
                        }),
                    }),
                ],
            })
        );
    });
function lb(e) {
    let { game: t, trackAction: l } = e,
        [n, a] = s.useState(0),
        [r, c] = s.useState(null),
        [o, d] = s.useState(t.screenshotUrls),
        u = s.useRef(null),
        m = s.useRef(null),
        x = (0, h.bG)([lx.A], () => lx.A.useReducedMotion);
    o !== t.screenshotUrls && (d(t.screenshotUrls), a(0));
    let g = s.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, X.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, X.YE)(e.application_id, e.id, e.width, "webp"),
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
            (0, lf.R)({
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
        S = s.useCallback(() => A(!1), []),
        C = s.useCallback(() => c(null), []),
        y = s.useCallback(
            (e) => {
                e && I();
            },
            [I],
        );
    return 0 === g.length
        ? null
        : (0, i.jsxs)("div", {
              className: lE.kL,
              children: [
                  v
                      ? (0, i.jsx)("div", {
                            className: lE.ND,
                            children: (0, i.jsx)(
                                lI,
                                {
                                    item: j,
                                    reducedMotion: x,
                                    videoRef: u,
                                    mediaPlayerRef: N,
                                    onPlay: b,
                                    onPause: S,
                                    onFullscreenChange: y,
                                },
                                `${f}-${j.url}`,
                            ),
                        })
                      : (0, i.jsxs)("div", {
                            className: lE.wp,
                            children: [
                                null != r &&
                                    !x &&
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: lE.Jy,
                                            onAnimationEnd: C,
                                            children: (0, i.jsx)("img", { src: r, className: lE.Db, alt: "" }),
                                        },
                                        r,
                                    ),
                                (0, i.jsx)("div", { className: lE.QN }),
                                (0, i.jsx)(eI.D, {
                                    className: lE.gv,
                                    onClick: I,
                                    children: (0, i.jsx)(
                                        "img",
                                        {
                                            src: j.url,
                                            className: lE.c8,
                                            alt: eZ.intl.formatToPlainString(eZ.t.COYYrn, { game: t.name }),
                                        },
                                        j.url,
                                    ),
                                }),
                            ],
                        }),
                  (0, i.jsx)(e2.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      children: g.map((e, l) =>
                          (0, i.jsx)(
                              lN,
                              { item: e, index: l, isPlaying: E, isSelected: l === f, onSelect: p, gameName: t.name },
                              `${l}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
var lS = l(847374),
    lC = l(187322),
    ly = l(110384),
    lR = l(734057),
    lk = l(309010),
    lL = l(562153),
    lT = l(742424),
    lO = l(322789),
    l_ = l(506326),
    lM = l(478481);
let lG = (e) => {
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
        x = (0, h.bG)([lk.A, lR.A], () => lR.A.getChannel(lk.A.getChannelId())),
        g = (0, h.bG)([ej.default], () => ej.default.getUser(t.author_id)),
        { nick: f, avatar: j } = s.useMemo(() => {
            let e = g?.getAvatarURL(x?.guild_id, 48, !1);
            return { nick: lL.Ay.getName(x?.guild_id, x?.id, g), avatar: e };
        }, [g, x]);
    return null == g
        ? null
        : (0, i.jsx)(eE.Y, {
              targetElementRef: m,
              position: u,
              renderPopout: (e) => {
                  let { closePopout: s, updatePosition: a } = e;
                  return (0, i.jsx)("div", {
                      className: d,
                      children: (0, i.jsx)(lT.Oo, {
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
                  (0, i.jsx)(eI.D, {
                      innerRef: m,
                      ...e,
                      className: lM.GA,
                      children: (0, i.jsx)(lC.vN, {
                          offset: { top: 4, bottom: 4, left: 4, right: 4 },
                          children: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("img", {
                                      className: lM.my,
                                      src: j,
                                      alt: eZ.intl.formatToPlainString(eZ.t.IzVXxY, { userName: f }),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: lM.Su,
                                      children: (0, i.jsxs)("div", {
                                          className: r()(t_.fi, t_.Kt),
                                          children: [
                                              (0, i.jsx)(v.E, {
                                                  variant: "text-md/medium",
                                                  color: "text-strong",
                                                  lineClamp: 1,
                                                  children: f,
                                              }),
                                              (0, i.jsx)(l_.mG, {
                                                  location: l_.N5.APP_LAUNCHER,
                                                  children: lO.n.map((e, l) => (0, i.jsx)(e, { entry: t }, l)),
                                              }),
                                          ],
                                      }),
                                  }),
                                  null != o
                                      ? o
                                      : (0, i.jsx)("div", {
                                            className: lM.Br,
                                            children: (0, i.jsx)(ly.W, { size: "sm" }),
                                        }),
                              ],
                          }),
                      }),
                  }),
          });
};
function lP(e) {
    let { entry: t, viewId: l, source: n, invite: s } = e,
        { guildId: a, isVerified: r } = (0, F.VO)(s);
    return (0, i.jsx)(lG, {
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
var lw = l(759203);
function lD(e) {
    let { entries: t, viewId: l, invite: n, onClose: a, source: c } = e,
        o = t.length > 7,
        [d, u] = s.useState(!1),
        m = s.useMemo(() => t.slice(0, o && !d ? 6 : void 0), [t, o, d]);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(p.D, {
                className: t_.bV,
                variant: "text-md/semibold",
                color: "text-strong",
                children: eZ.intl.string(eZ.t.ak8OHk),
            }),
            0 === t.length
                ? (0, i.jsx)(v.E, {
                      variant: "text-xs/semibold",
                      color: "text-strong",
                      className: lw.p$,
                      children: eZ.intl.string(eZ.t.R5fYVO),
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("div", {
                              className: r()(lw.yz, { [lw.T6]: o && !d }),
                              children: (0, i.jsx)("div", {
                                  className: t_.fi,
                                  children: m.map((e) =>
                                      (0, i.jsx)(lP, { entry: e, viewId: l, onClose: a, invite: n, source: c }, e.id),
                                  ),
                              }),
                          }),
                          o &&
                              !d &&
                              (0, i.jsxs)(eI.D, {
                                  className: lw.ND,
                                  onClick: () => u(!0),
                                  children: [
                                      (0, i.jsx)(v.E, {
                                          variant: "text-xs/semibold",
                                          color: "interactive-text-default",
                                          children: eZ.intl.string(eZ.t.yohc6E),
                                      }),
                                      (0, i.jsx)(lS.a, { size: "xs" }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
function lV(e) {
    let { game: t } = e,
        l = (t.companies ?? []).filter((e) => e.roles.includes(K.wk.PUBLISHER));
    return 0 === l.length
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(p.D, {
                      className: t_.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: eZ.intl.string(eZ.t["4Byy/G"]),
                  }),
                  (0, i.jsx)(v.E, { variant: "text-sm/normal", children: l.map((e) => e.name).join(", ") }),
              ],
          });
}
var lW = l(49381),
    lU = l(223273);
function lY(e, t, l) {
    if (null == e || null == t || t < 10) return lU.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !l
            ? lU.vI.POSITIVE
            : t < (l ? 100 : 500) || e < 95
              ? lU.vI.VERY_POSITIVE
              : lU.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return lU.vI.MOSTLY_POSITIVE;
    if (e >= 40) return lU.vI.MIXED;
    if (e >= 20) return lU.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !l) return lU.vI.NEGATIVE;
    else if (t < (l ? 100 : 500)) return lU.vI.VERY_NEGATIVE;
    return lU.vI.OVERWHELMINGLY_NEGATIVE;
}
function lF(e) {
    switch (e) {
        case lU.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case lU.vI.OVERWHELMINGLY_POSITIVE:
        case lU.vI.VERY_POSITIVE:
        case lU.vI.POSITIVE:
        case lU.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case lU.vI.MIXED:
            return "steam-review-text-mixed";
        case lU.vI.MOSTLY_NEGATIVE:
        case lU.vI.NEGATIVE:
        case lU.vI.VERY_NEGATIVE:
        case lU.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var lB =
        (((n = {})[(n.MIGHTY = 1)] = "MIGHTY"),
        (n[(n.STRONG = 2)] = "STRONG"),
        (n[(n.FAIR = 3)] = "FAIR"),
        (n[(n.WEAK = 4)] = "WEAK"),
        n),
    lH = l(778591);
function lz(e) {
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
var lX = l(99392);
function lK(e) {
    let { url: t, trackAction: l, title: n, rating: a, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, tO.A)(),
        d = lY(a, r, "recent" === c),
        u = lF(d),
        m = s.useCallback(() => {
            l(F.Ws.SteamReviews), o(t);
        }, [o, l, t]);
    return (0, i.jsx)(eI.D, {
        onClick: m,
        className: lX.nf,
        role: "link",
        "aria-label": eZ.intl.string(eZ.t.YNC5Di),
        children: (0, i.jsxs)("div", {
            className: lX.U6,
            children: [
                (0, i.jsxs)("div", {
                    className: lX.tN,
                    children: [
                        (0, i.jsx)(lW.N, { size: "sm", color: eS.A.colors.ICON_STRONG.css }),
                        (0, i.jsx)(p.D, { variant: "heading-sm/medium", color: "text-strong", children: n }),
                    ],
                }),
                (0, i.jsx)(
                    g.m,
                    {
                        text:
                            d === lU.vI.NO_USER_REVIEWS
                                ? eZ.intl.string(eZ.t.CLMt8J)
                                : eZ.intl
                                      .format(
                                          "recent" === c
                                              ? eZ.t.TzvC0k
                                              : "localized" === c
                                                ? eZ.t.EOfrwm
                                                : eZ.t["lzANJ/"],
                                          { rating: a, rating_count: r?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, i.jsxs)("div", {
                            className: lX.Z0,
                            children: [
                                (0, i.jsx)(v.E, {
                                    variant: "text-xs/medium",
                                    color: u,
                                    children: (function (e) {
                                        switch (e) {
                                            case lU.vI.NO_USER_REVIEWS:
                                                return eZ.intl.string(eZ.t.CLMt8J);
                                            case lU.vI.OVERWHELMINGLY_POSITIVE:
                                                return eZ.intl.string(eZ.t["75sx1S"]);
                                            case lU.vI.VERY_POSITIVE:
                                                return eZ.intl.string(eZ.t["EkOVg+"]);
                                            case lU.vI.POSITIVE:
                                                return eZ.intl.string(eZ.t.ZUkFtr);
                                            case lU.vI.MOSTLY_POSITIVE:
                                                return eZ.intl.string(eZ.t.M7Z09a);
                                            case lU.vI.MIXED:
                                                return eZ.intl.string(eZ.t.c8yuHR);
                                            case lU.vI.MOSTLY_NEGATIVE:
                                                return eZ.intl.string(eZ.t.H0MSjG);
                                            case lU.vI.NEGATIVE:
                                                return eZ.intl.string(eZ.t.vpLrgz);
                                            case lU.vI.VERY_NEGATIVE:
                                                return eZ.intl.string(eZ.t["5spYuX"]);
                                            case lU.vI.OVERWHELMINGLY_NEGATIVE:
                                                return eZ.intl.string(eZ.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(d),
                                }),
                                null != r &&
                                    d !== lU.vI.NO_USER_REVIEWS &&
                                    (0, i.jsx)(v.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: eZ.intl
                                            .format(eZ.t.sgIoin, { rating_count: r.toLocaleString() })
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
function lJ(e) {
    let { game: t, url: l, trackAction: n } = e,
        { reviews: a } = t,
        r = a?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        d = r.topCriticRatingCount ?? -1,
        u = (o <= 0 || d <= 0) && null == c,
        m = (0, tO.A)(),
        x = s.useCallback(() => {
            n(F.Ws.OpenCriticReviews), m(l);
        }, [m, n, l]);
    return (0, i.jsx)(eI.D, {
        onClick: x,
        className: lX.nf,
        role: "link",
        "aria-label": eZ.intl.string(eZ.t.aLNBAw),
        children: (0, i.jsxs)("div", {
            className: lX.Ur,
            children: [
                (0, i.jsx)(p.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: eZ.intl.string(eZ.t["UxvER+"]),
                }),
                (0, i.jsxs)("div", {
                    className: lX.WA,
                    children: [
                        null != c ? (0, i.jsx)(l$, { tier: c }) : null,
                        null != c && o > 0 && d > 0 ? (0, i.jsx)(lZ, { rating: o, tier: c }) : null,
                        u
                            ? (0, i.jsx)(v.E, {
                                  variant: "text-xs/medium",
                                  color: lF(lU.vI.NO_USER_REVIEWS),
                                  children: eZ.intl.string(eZ.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function l$(e) {
    let { tier: t } = e,
        l = (function (e) {
            switch (e) {
                case lB.MIGHTY:
                    return eZ.intl.string(eZ.t.aZej2g);
                case lB.STRONG:
                    return eZ.intl.string(eZ.t.MLxnSg);
                case lB.FAIR:
                    return eZ.intl.string(eZ.t["3f19KA"]);
                case lB.WEAK:
                    return eZ.intl.string(eZ.t.jtVgSh);
            }
        })(t),
        n = (function (e) {
            switch (e) {
                case lB.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case lB.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case lB.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case lB.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, i.jsx)(
        g.m,
        {
            text: l,
            children: (0, i.jsx)("div", {
                className: lX.TE,
                children: (0, i.jsx)("img", { src: n, alt: l, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function lZ(e) {
    let { rating: t, tier: l } = e,
        { foregroundColor: n, backgroundColor: s } = (function (e) {
            let t = "";
            switch (e) {
                case lB.MIGHTY:
                    t = "#fc430a";
                    break;
                case lB.STRONG:
                    t = "#9e00b4";
                    break;
                case lB.FAIR:
                    t = "#4aa1ce";
                    break;
                case lB.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(l);
    return (0, i.jsx)(
        g.m,
        {
            text: eZ.intl.string(eZ.t.Ub4YR1),
            children: (0, i.jsxs)("div", {
                className: lX.TE,
                style: { backgroundColor: s },
                children: [
                    (0, i.jsx)(lz, { rating: t, strokeColor: n }),
                    (0, i.jsx)(v.E, {
                        variant: "text-xs/bold",
                        color: "always-white",
                        className: lX.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let lQ = function (e) {
    let { game: t, trackAction: l } = e,
        n = (0, lH.I)(t.id),
        s = t.opencriticUrl,
        a = t.steamReleaseStatus !== m.Y.RETIRED_ABANDONED && null != n,
        r = t.reviews?.steam,
        c = lY(r?.recentRating, r?.recentRatingCount, !0),
        o = a && c !== lU.vI.NO_USER_REVIEWS,
        d =
            null != r &&
            null != r.localizedRating &&
            null != r.localizedRatingCount &&
            null != r.ratingCount &&
            r.localizedRatingCount >= 200 &&
            r.ratingCount >= 2e3,
        u = d ? r?.localizedRating : r?.rating,
        x = d ? r?.localizedRatingCount : r?.ratingCount,
        h = d ? eZ.t["aWb+V4"] : eZ.t["8e4LiB"],
        g = t.reviews?.opencritic != null && null != s;
    return a || o || g
        ? (0, i.jsxs)("div", {
              className: lX.uW,
              children: [
                  (0, i.jsx)("div", {
                      className: lX.Gf,
                      children: (0, i.jsx)(p.D, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: eZ.intl.string(eZ.t.GaAQXP),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: lX.kL,
                      children: [
                          o && null != n
                              ? (0, i.jsx)("div", {
                                    className: lX.WH,
                                    children: (0, i.jsx)(lK, {
                                        url: n,
                                        trackAction: l,
                                        title: eZ.intl.string(eZ.t.MQGNsN),
                                        rating: r?.recentRating,
                                        ratingCount: r?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          a && null != n
                              ? (0, i.jsx)("div", {
                                    className: lX.WH,
                                    children: (0, i.jsx)(lK, {
                                        url: n,
                                        trackAction: l,
                                        title: eZ.intl.string(h),
                                        rating: u,
                                        ratingCount: x,
                                        tooltipVariant: d ? "localized" : "all",
                                    }),
                                })
                              : null,
                          g && null != s
                              ? (0, i.jsx)("div", {
                                    className: lX.WH,
                                    children: (0, i.jsx)(lJ, { game: t, url: s, trackAction: l }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var lq = l(859040),
    l0 = l(674658),
    l1 = l(491438),
    l8 = l(561769),
    l4 = l(758836),
    l2 = l(804163);
let l5 = s.createContext({ closeModal: () => {}, trackAction: () => {} }),
    l3 = (e) => {
        let { skuId: t, aspectRatio: l } = e,
            { product: n } = (0, l0.q)(t, !0),
            a = s.useContext(l8.v3),
            { closeModal: r, trackAction: c } = s.useContext(l5),
            o = s.useCallback(() => {
                c(F.Ws.DiscordCollectiblesShopItem),
                    r(),
                    (0, lq.Cz)({
                        analyticsLocations: [R.A.GAME_PROFILE],
                        analyticsSource: R.A.GAME_PROFILE,
                        initialProductSkuId: t,
                        tab: l4.G2.CATALOG,
                    });
            }, [c, r, t]);
        if (null == n) return null;
        let { flattenProductVariants: d, ...u } = a;
        return (0, i.jsx)(l8.v3.Provider, {
            value: { flattenProductVariants: d ?? !0, ...u },
            children: (0, i.jsx)(l1.A, {
                skuId: t,
                aspectRatio: l,
                cardClassName: l2.N,
                onClickCard: o,
                hideWishlistButton: !0,
                hidePrice: !0,
                hidePrimaryCTA: !0,
                hideSecondaryCTA: !0,
            }),
        });
    };
function l6(e) {
    let { game: t, closeModal: l, trackAction: n } = e,
        a = (function (e) {
            let { hasFetched: t, skuIds: l } = (0, h.cf)([er.A], () => ({
                hasFetched: null != e && er.A.hasShopCollectionBeenFetched(e),
                skuIds: null != e ? er.A.getShopCollectionSkuIds(e) : void 0,
            }));
            return (
                (0, s.useEffect)(() => {
                    null == e || t || er.A.isShopCollectionFetching(e) || ei(e);
                }, [e, t]),
                l ?? []
            );
        })(t.shopCollectionIds?.[0]),
        r = s.useCallback(() => {
            n(F.Ws.DiscordCollectiblesShop),
                l(),
                (0, lq.Cz)({
                    analyticsLocations: [R.A.GAME_PROFILE],
                    analyticsSource: R.A.GAME_PROFILE,
                    tab: l4.G2.CATALOG,
                });
        }, [n, l]),
        c = s.useMemo(() => ({ closeModal: l, trackAction: n }), [l, n]);
    return 0 === a.length
        ? null
        : (0, i.jsx)(l5.Provider, {
              value: c,
              children: (0, i.jsx)(tr, {
                  title: eZ.intl.string(eZ.t["5DYPT8"]),
                  onClickViewAll: r,
                  children: (0, i.jsx)(e2.A, { gap: "md", children: a.map((e) => (0, i.jsx)(l3, { skuId: e }, e)) }),
              }),
          });
}
var l9 = l(735438),
    l7 = l.n(l9),
    ne = l(192308),
    nt = l(311043),
    nl = l(192389);
let nn = (e) => {
    let { game: t, onClose: l, trackClick: n } = e;
    return (0, i.jsx)(g.m, {
        asContainer: !0,
        text: t.name,
        children: (0, i.jsx)(eI.D, {
            className: nl.fS,
            onClick: async () => {
                n(F.Ws.ClickSimilarGame, t.id),
                    (0, ne.openModalLazy)(() =>
                        Promise.resolve((e) => (0, i.jsx)(nF, { gameId: t.id, source: F.Ob.SimilarGames, ...e })),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    l();
            },
            children: (0, i.jsx)(ep.A, { game: t, className: nl.n1, size: ep.w.SMALL }),
        }),
    });
};
function ni(e) {
    let { gameId: t, onClose: l, trackAction: n, similarGames: s, similarGamesError: a } = e,
        c = (0, h.bG)([er.A, nt.A], () => {
            let e = void 0 === er.A.getSimilarGames(t) && null == er.A.getSimilarGamesError(t),
                l = s.some((e) => nt.A.isFetching(e));
            return e || l;
        }),
        o = (0, h.yK)([nt.A], () =>
            s
                .map((e) => nt.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, ev.T_)(e))
                .slice(0, 5),
        );
    return ((0, P.I)(t), (0, P.x)(s), c && null == a)
        ? (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)("div", { className: r()(nl.vM, t_.bV) }),
                  (0, i.jsx)("div", {
                      className: r()(t_.nM, t_.iH),
                      children: l7()
                          .range(0, 5)
                          .map((e) => (0, i.jsx)("div", { className: nl.nn }, e)),
                  }),
              ],
          })
        : (c || 0 !== o.length) && null == a
          ? (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(p.D, {
                        className: t_.bV,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: eZ.intl.string(eZ.t["6rLyQB"]),
                    }),
                    (0, i.jsx)("div", {
                        className: nl.D$,
                        children: o.map((e) => (0, i.jsx)(nn, { game: e, onClose: l, trackClick: n }, e.id)),
                    }),
                ],
            })
          : null;
}
var ns = l(871123),
    na = l(317560),
    nr = l(467884),
    nc = l(627771);
function no(e) {
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
        : (0, i.jsx)(e2.A, {
              gap: "md",
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: nc.B,
                          children: (0, i.jsx)(nr.A, {
                              positionInSection: t,
                              skuId: e,
                              variant: nr.s.SMALL,
                              analyticsLocations: l,
                              onClick: a,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
function nd(e) {
    let { trackAction: t } = e,
        { socialLayerStorefrontRecommendationsData: l, closeModal: n } = eM(),
        { analyticsLocations: a } = (0, k.Ay)([R.A.GAME_PROFILE]),
        r = s.useCallback(() => {
            l?.guildId != null && (t(F.Ws.GameShop), n(), (0, eO.default)({ guildId: l.guildId }));
        }, [l, t, n]),
        c = s.useCallback(
            (e, i) => {
                let s = l?.guildId;
                null != s &&
                    (t(F.Ws.GameShopItem),
                    (0, na.R)({
                        skuId: e,
                        applicationId: i,
                        isStorefront: !1,
                        analyticsLocations: a,
                        onClose: () => {
                            let { pathname: e, search: t } = location;
                            (0, ns.rG)(e, t, i, s) && n();
                        },
                    }));
            },
            [t, n, a, l],
        );
    if (null == l) return null;
    let { skuIds: o } = l;
    return (0, i.jsx)(tr, {
        title: eZ.intl.string(eZ.t.WDdlUb),
        onClickViewAll: r,
        children: (0, i.jsx)(no, { skuIds: o, analyticsLocations: a, onCardClick: c }),
    });
}
l(667532);
var nu = l(853022);
let nm = new Set(["1402418703554842694", "356877880938070016"]),
    nx = [ed.V.EPICGAMES, ed.V.STEAM, ed.V.ROBLOX, ed.V.BATTLENET, ed.V.RIOT, ed.V.MINECRAFT];
var nh = l(349361),
    ng = l(924895),
    nf = l(422688),
    nj = l(505200),
    nv = l(695250);
let np = function (e) {
    switch (e.category) {
        case ed.V.STEAM:
            return {
                icon: lW.N,
                text: eZ.intl.string(eZ.t.FsANs4),
                ariaLabel: eZ.intl.string(eZ.t["P+ePTG"]),
                action: F.Ws.SteamStoreLink,
                url: e.url,
            };
        case ed.V.EPICGAMES:
            return {
                icon: nh.r,
                text: eZ.intl.string(eZ.t.ZbBMHa),
                ariaLabel: eZ.intl.string(eZ.t.BwX0UW),
                action: F.Ws.EpicStoreLink,
                url: e.url,
            };
        case ed.V.ROBLOX:
            return {
                icon: ng.H,
                text: eZ.intl.string(eZ.t["pJ+P+h"]),
                ariaLabel: eZ.intl.string(eZ.t.tYxpdf),
                action: F.Ws.RobloxStoreLink,
                url: e.url,
            };
        case ed.V.BATTLENET:
            return {
                icon: nf.a,
                text: eZ.intl.string(eZ.t["A7grp+"]),
                ariaLabel: eZ.intl.string(eZ.t.x9at20),
                action: F.Ws.BattlenetStoreLink,
                url: e.url,
            };
        case ed.V.RIOT:
            return {
                icon: nj.A,
                text: eZ.intl.string(eZ.t.h6MapL),
                ariaLabel: eZ.intl.string(eZ.t["528nvc"]),
                action: F.Ws.RiotStoreLink,
                url: e.url,
            };
        case ed.V.MINECRAFT:
            return {
                icon: nv.m,
                text: eZ.intl.string(eZ.t["HZbmO+"]),
                ariaLabel: eZ.intl.string(eZ.t.WWTqYn),
                action: F.Ws.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: tF.Y,
                text: eZ.intl.string(eZ.t["QpN/Iz"]),
                ariaLabel: eZ.intl.string(eZ.t["8JZmmF"]),
                action: F.Ws.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
function nE(e) {
    return (0, i.jsx)(E.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var nA = l(352639);
function nN(e) {
    let t,
        l,
        n,
        i,
        a,
        r = ec.useConfig({ location: "GameProfileStoreLinks" }).storeLinksEnabled,
        c =
            ((t = (0, lH.I)(e?.id)),
            (l = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === en.d3x.XBOX_GAME_PASS && !(0, tp.uJ)(e.id));
                return t?.id == null ? null : (0, nu.jA)(t.id);
            })(e)),
            (n = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            s.useMemo(() => {
                if ((null == i && null == l) || null == n) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== ed.V.EPICGAMES || !!nm.has(n)) &&
                            (e.category !== ed.V.STEAM || a !== m.Y.RETIRED_ABANDONED) &&
                            nx.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === m.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === ed.V.STEAM) ||
                    e.push({ category: ed.V.STEAM, url: t });
                let s = e.sort((e, t) => (e.category === ed.V.STEAM ? -1 : +(t.category === ed.V.STEAM)));
                return null != l && s.unshift({ category: "XBOX_GAME_PASS", url: l }), s;
            }, [t, i, n, a, l]));
    return { storeWebsites: c, showsStoreLinks: r && c.length > 0 && null != e };
}
function nI(e) {
    let { data: t, trackAction: l } = e,
        n = (0, tO.A)();
    return (0, i.jsx)(nE, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            l(t.action), n(t.url);
        },
    });
}
let nb = function (e) {
    let { game: t, trackAction: n } = e,
        { showsStoreLinks: a, storeWebsites: r } = nN(t),
        c = s.useMemo(() => r.map(np).filter((e) => null != e), [r]);
    if (!a) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, i.jsx)(nI, { data: e, trackAction: n });
    }
    if (2 === c.length)
        return (0, i.jsxs)("div", {
            className: nA.G,
            children: [(0, i.jsx)(nI, { data: c[0], trackAction: n }), (0, i.jsx)(nI, { data: c[1], trackAction: n })],
        });
    let o = (0, i.jsx)(nE, {
        text: eZ.intl.string(eZ.t["/hMurx"]),
        "aria-label": eZ.intl.string(eZ.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: n, trackAction: s } = e;
                (0, ne.openModalLazy)(async () => {
                    let { default: e } = await l.e("76758").then(l.bind(l, 459477));
                    return (l) => (0, i.jsx)(e, { game: t, websiteButtons: n, trackAction: s, ...l });
                });
            })({ game: t, websiteButtons: c, trackAction: n }),
    });
    return r.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, i.jsxs)("div", { className: nA.G, children: [(0, i.jsx)(nI, { data: c[0], trackAction: n }), o] })
        : o;
};
var nS = l(566679),
    nC = l(123292),
    ny = l(981355),
    nR = l(242021);
function nk(e) {
    let { game: t, trackAction: l } = e,
        [n, a] = s.useState(t?.summaryLocalized != null),
        [c, o] = s.useState(!0),
        [d, u] = s.useState(!1),
        m = s.useRef(null),
        { width: x, height: h } = (0, ny.A)();
    return (s.useEffect(() => {
        let e = m.current;
        null != e && u(e.scrollHeight - e.clientHeight > 1 || !c);
    }, [m, x, h, c]),
    null == t.description)
        ? null
        : (0, i.jsxs)("div", {
              className: r()(t_.fi, t_.mX),
              children: [
                  null != t.summaryLocalized &&
                      (0, i.jsxs)("div", {
                          className: r()(t_.nM, t_.Lc),
                          children: [
                              (0, i.jsx)(nS.Z, { color: eS.A.colors.TEXT_DEFAULT, size: "xs" }),
                              (0, i.jsx)(v.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: n
                                      ? eZ.intl.format(eZ.t.aZ2iIp, { onShowOriginal: () => a(!1) })
                                      : eZ.intl.format(eZ.t["/2ylF4"], { onShowTranslated: () => a(!0) }),
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
                      (0, i.jsx)(eI.D, {
                          className: t_.vk,
                          onClick: () => {
                              l(c ? F.Ws.ShowMore : F.Ws.ShowLess), o(!c);
                          },
                          children: (0, i.jsx)(v.E, {
                              variant: "text-sm/semibold",
                              children: c ? eZ.intl.string(eZ.t.lBeKY2) : eZ.intl.string(eZ.t["6MwJo/"]),
                          }),
                      }),
                  (0, i.jsx)(t$, { className: nR.B, game: t }),
              ],
          });
}
function nL(e) {
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
        { isTwoColumn: d } = eM(),
        u = s.useMemo(() => (d ? 8 : 5), [d]);
    if (null == t.description) return null;
    let m = a ? eZ.intl.string(eZ.t["6MwJo/"]) : eZ.intl.string(eZ.t.lBeKY2);
    return (0, i.jsxs)("div", {
        className: r()(t_.fi, t_.mX),
        children: [
            (0, i.jsx)(v.E, { ref: n, lineClamp: a ? void 0 : u, variant: "text-md/medium", children: t.description }),
            c && (0, i.jsx)(nC.Q, { onClick: o, text: m }),
        ],
    });
}
var nT = l(952311);
let nO = () =>
    (0, i.jsxs)("div", {
        className: t_.uv,
        children: [
            (0, i.jsx)(j.Y, { size: "xxs" }),
            (0, i.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: eZ.intl.string(eZ.t.kAlUsy) }),
        ],
    });
function n_(e) {
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
            (0, i.jsx)("div", { className: t_.is, style: { backgroundImage: `url("${d}")` } }),
            (0, i.jsxs)("div", {
                className: r()(t_.Qs, t_.fi, t_.iH, t_.Se),
                children: [
                    (0, i.jsxs)("div", {
                        className: t_.xx,
                        children: [
                            (0, i.jsx)("div", {
                                className: t_.bb,
                                children: (0, i.jsx)(ep.A, { game: t, className: t_.wm, size: ep.w.LARGE }),
                            }),
                            (0, i.jsx)(eq, { gameId: t.id, className: t_.Gg, trackAction: n }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: r()(t_.nM, t_.Lc, t_.Z3),
                        children: (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(p.D, { variant: "heading-xl/bold", children: f }),
                                (0, i.jsxs)("div", {
                                    className: r()(t_.nM, t_.Lc),
                                    children: [
                                        null != u &&
                                            (0, i.jsx)("img", {
                                                className: t_.Gt,
                                                src: u,
                                                height: 16,
                                                alt: eZ.intl.formatToPlainString(eZ.t["nh+jWk"], { game: f }),
                                            }),
                                        (0, i.jsx)(v.E, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: a,
                                        }),
                                        h &&
                                            (0, i.jsx)(v.E, {
                                                variant: "eyebrow",
                                                className: t_.Ad,
                                                children: eZ.intl.string(eZ.t.y2b7CA),
                                            }),
                                        g &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(v.E, { variant: "text-sm/medium", children: " \xb7 " }),
                                                    (0, i.jsx)(nO, {}),
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
function nM(e) {
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
        className: t_.V0,
        children: [
            (0, i.jsx)(lD, { entries: l, viewId: c, invite: n, onClose: r, source: d }),
            (0, i.jsx)(lA, { game: t, trackAction: o }),
            (0, i.jsx)(ni, { gameId: t.id, onClose: r, similarGames: s, similarGamesError: a, trackAction: o }),
        ],
    });
}
function nG(e) {
    let { game: t, trackAction: l, closeModal: n } = e;
    return (0, i.jsxs)("div", {
        className: nT.oC,
        children: [
            (0, i.jsxs)("div", {
                className: nT.lM,
                children: [(0, i.jsx)(lb, { game: t, trackAction: l }), (0, i.jsx)(nL, { game: t, trackAction: l })],
            }),
            (0, i.jsx)(th, { gameId: t.id, trackAction: l }),
            (0, i.jsx)(nd, { trackAction: l }),
            (0, i.jsx)(l6, { game: t, closeModal: n, trackAction: l }),
        ],
    });
}
function nP(e) {
    let { game: t, trackAction: l, analyticsLocations: n } = e,
        s = t.steamReleaseStatus !== m.Y.RETIRED_ABANDONED,
        { closeModal: a } = eM();
    return (0, i.jsxs)("div", {
        className: t_.V0,
        children: [
            (0, i.jsx)(lb, { game: t, trackAction: l }),
            (0, i.jsxs)("div", {
                className: nT.gr,
                children: [
                    (0, i.jsx)(li, { game: t, isTwoColumn: !1 }),
                    (0, i.jsxs)("div", {
                        className: nT.E1,
                        children: [
                            (0, i.jsx)(nb, { game: t, trackAction: l }),
                            (0, i.jsx)(nL, { game: t, trackAction: l }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(lo, { analyticsLocations: n, trackAction: l }),
            (0, i.jsx)(t3, { closeModal: a, trackAction: l }),
            (0, i.jsx)(th, { gameId: t.id, trackAction: l }),
            (0, i.jsx)(nd, { trackAction: l }),
            (0, i.jsx)(l6, { game: t, closeModal: a, trackAction: l }),
            s && (0, i.jsx)(lQ, { game: t, trackAction: l }),
            (0, i.jsx)(t0, { game: t, trackAction: l }),
        ],
    });
}
function nw(e) {
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
        text: eZ.intl.string(eZ.t.JVwWva),
        position: "top",
        children: (0, i.jsx)(E.$, {
            icon: A.h,
            text: eZ.intl.string(eZ.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: r,
            fullWidth: !0,
        }),
    });
}
function nD(e) {
    let { gameId: t, analyticsLocations: l } = e,
        n = (0, O.h)(t),
        i = (0, y.A)({ application: n, analyticsLocations: l }),
        [s] = (0, w.L)(t);
    return { onCloudPlayClick: i, isCloudPlayButtonShown: !s && null != i };
}
function nV(e) {
    let { game: t, onSetInvite: l, invite: n, trackAction: a, onClose: c, analyticsLocations: o } = e,
        d = s.useCallback(() => {
            c(), (0, D.closeUserProfileModal)();
        }, [c]),
        { isCloudPlayButtonShown: u, onCloudPlayClick: m } = nD({ gameId: t.id, analyticsLocations: o });
    return (0, i.jsxs)("div", {
        className: r()(t_.pz, t_.fi, t_.iH),
        children: [
            (0, i.jsxs)("div", {
                className: t_.NC,
                children: [
                    (0, i.jsx)(t1, { invite: n, closeModal: d, trackAction: a }),
                    u &&
                        null != m &&
                        (0, i.jsx)(nw, { onClose: d, onCloudPlayClick: m, analyticsLocations: o, trackAction: a }),
                ],
            }),
            (0, i.jsx)(p.D, { variant: "heading-md/bold", children: eZ.intl.string(eZ.t.CI0vSJ) }),
            (0, i.jsxs)("div", {
                className: t_.V0,
                children: [
                    (0, i.jsx)(nk, { game: t, trackAction: a }),
                    (0, i.jsx)(t5, { game: t, onInviteResolved: l, closeModal: d, trackAction: a }),
                    (0, i.jsx)(tW, { game: t, trackAction: a }),
                    (0, i.jsx)(lV, { game: t }),
                    (0, i.jsx)(tv, { game: t, trackAction: a }),
                    (0, i.jsx)(v.E, {
                        variant: "text-xxs/normal",
                        children: eZ.intl.format(eZ.t.pch2Jw, { igdbLink: tZ.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function nW(e) {
    let { game: t, trackAction: l, analyticsLocations: n } = e,
        { closeModal: s } = eM(),
        { isCloudPlayButtonShown: a, onCloudPlayClick: c } = nD({ gameId: t.id, analyticsLocations: n }),
        { showsStoreLinks: o } = nN(t),
        d = t.steamReleaseStatus !== m.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: r()(nT.Pn, t_.fi, t_.iH, o ? nT.sV : nT.gF),
        children: [
            a && null != c
                ? (0, i.jsx)("div", {
                      className: t_.NC,
                      children: (0, i.jsx)(nw, {
                          onClose: s,
                          onCloudPlayClick: c,
                          analyticsLocations: n,
                          trackAction: l,
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: t_.V0,
                children: [
                    (0, i.jsx)(nb, { game: t, trackAction: l }),
                    (0, i.jsx)(lo, { analyticsLocations: n, trackAction: l }),
                    (0, i.jsx)(t3, { closeModal: s, trackAction: l }),
                    d && (0, i.jsx)(lQ, { game: t, trackAction: l }),
                    (0, i.jsx)(t0, { game: t, trackAction: l }),
                ],
            }),
        ],
    });
}
function nU(e) {
    let {
            gameId: t,
            source: l,
            sourceUserId: n,
            transitionState: a,
            onClose: c,
            appContext: o,
            trackExternalAction: d,
        } = e,
        { clientThemesClassName: u } = (0, _.Ay)(),
        m = (0, h.bG)([V.default], () => V.default.locale),
        { analyticsLocations: x } = (0, k.Ay)(R.A.GAME_PROFILE),
        g = s.useMemo(() => (0, F.u9)(), []),
        f = (0, h.yK)([er.A], () => (er.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [j, v] = s.useState(null),
        p = (0, eo.s)(t),
        [E, A] = s.useState(null),
        S = s.useRef(null);
    s.useEffect(() => {
        S.current = E;
    }, [E]);
    let { data: y, refetch: L } = (0, P.I)(t),
        T = y?.name ?? "",
        O = (e, n) => {
            let { guildId: i, isVerified: s } = (0, F.VO)(S.current);
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
    return ((0, C.Ay)(() => {
        (0, F.rw)({ source: l, viewId: g, gameId: t, gameName: T, authorId: n, profileType: F.HV.FullProfile }),
            (0, M.He)();
    }),
    s.useEffect(() => {
        m.startsWith("en") || y?.summaryLocalized != null || L();
    }, [t, y?.summaryLocalized, m, L]),
    s.useEffect(() => {
        (async () => {
            if (0 === f.length) {
                v(null);
                try {
                    await es(t);
                } catch (e) {
                    v(e);
                }
            }
        })();
    }, [t, f]),
    (0, C.Ay)(() => () => {
        let { guildId: e, isVerified: l } = (0, F.VO)(S.current),
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
            similarGames: f.filter(ev.oS).slice(0, 5),
            guildId: e,
            isVerified: l,
        });
    }),
    null == y)
        ? null
        : (0, i.jsx)(k.f5, {
              value: x,
              children: (0, i.jsx)(N.d, {
                  transitionState: a,
                  onClose: c,
                  size: "xl",
                  children: (0, i.jsx)("div", {
                      className: r()(u, t_.fn),
                      children: (0, i.jsxs)(I.Ip, {
                          orientation: "auto",
                          children: [
                              (0, i.jsx)(n_, { game: y, entries: p, trackAction: O }),
                              (0, i.jsx)(b.F, {
                                  children: (0, i.jsxs)("div", {
                                      className: r()(t_.Qs, t_.rb),
                                      children: [
                                          (0, i.jsx)(nM, {
                                              game: y,
                                              entries: p,
                                              invite: E,
                                              similarGames: f,
                                              similarGamesError: j,
                                              onClose: c,
                                              viewId: g,
                                              source: l,
                                              trackAction: O,
                                          }),
                                          (0, i.jsx)(nV, {
                                              game: y,
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
function nY(e) {
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
        { clientThemesClassName: p } = (0, _.Ay)(),
        E = (0, h.bG)([V.default], () => V.default.locale),
        A = s.useMemo(() => (0, F.u9)(), []),
        { analyticsLocations: N } = (0, k.Ay)(R.A.GAME_PROFILE),
        I = (0, eo.s)(t),
        { data: y } = (0, P.I)(t),
        L = y?.name ?? "",
        w = s.useRef(null);
    s.useEffect(() => {
        w.current = j;
    }, [j]);
    let {
            hasAlreadyLinked: W,
            canStartAuthorization: U,
            fetched: Y,
            startAuthorization: B,
            connectionApp: H,
        } = (0, T.RD)(y),
        { invite: z, isMember: X } = ex(y, v),
        { socialLayerStorefrontRecommendationsData: K } = (function (e) {
            let t = ej.default.getCurrentUser()?.id,
                l = s.useMemo(() => (null != t ? [t] : []), [t]),
                n = (0, h.bG)([eh.A], () => (null != e ? eh.A.getApplicationIdFromDetectableId(e) : void 0)),
                i = (0, O.h)(n),
                a = s.useMemo(() => (null != n ? [n] : []), [n]),
                { recommendations: r, status: c } = (0, ef.XQ)({
                    applicationIds: a,
                    userIds: l,
                    numItems: 6,
                    source: eg.B5.USER_PROFILE,
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
    (0, C.Ay)(() => {
        (0, F.rw)({ source: l, viewId: A, gameId: t, gameName: L, authorId: n, profileType: F.HV.FullProfile }),
            (0, M.He)();
    }),
        (0, C.Ay)(() => () => {
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
            c(), (0, D.closeUserProfileModal)();
        }, [c]),
        q = s.useRef(null),
        ee = s.useCallback(() => q.current?.getScrollerNode()?.scrollTop ?? 0, []),
        et = s.useMemo(
            () => ({
                isTwoColumn: x,
                canStartAuthorization: U,
                hasAlreadyLinked: W,
                fetchedAuthorization: Y,
                startAuthorization: B,
                connectionApp: H,
                invite: z,
                isMember: X,
                socialLayerStorefrontRecommendationsData: K,
                closeModal: Q,
                getScrollOffset: ee,
            }),
            [x, U, W, Y, B, H, z, X, K, Q, ee],
        ),
        el = s.useCallback(() => {
            c(), (0, D.closeUserProfileModal)();
        }, [c]),
        [en, ei] = s.useState(!1),
        [es, ea] = s.useState(150),
        er = s.useRef(null);
    s.useEffect(() => {
        null != m && m > 0 && q.current?.getScrollerNode()?.scrollTo({ top: m, behavior: "instant" });
    }, []);
    let ec = s.useCallback(
        (e) => {
            let t = e.currentTarget.scrollTop;
            if (null != er.current) {
                let e = Math.max(0, 1 - t / 150);
                er.current.style.opacity = String(e);
            }
            ei(t >= es);
        },
        [es],
    );
    return null == y
        ? null
        : (0, i.jsx)(k.f5, {
              value: N,
              children: (0, i.jsx)(f.N, {
                  transitionState: a,
                  onClose: c,
                  children: (0, i.jsx)(e_.Provider, {
                      value: et,
                      children: (0, i.jsxs)("div", {
                          className: r()(p, nT.kL),
                          ref: Z,
                          children: [
                              (0, i.jsx)(lt, { game: y, ref: er }),
                              (0, i.jsx)(t7, { game: y, show: en, onClose: el, trackAction: J }),
                              (0, i.jsx)(le, { show: en }),
                              (0, i.jsxs)(S.Ch, {
                                  ref: q,
                                  onScroll: ec,
                                  children: [
                                      (0, i.jsx)(ls, {
                                          game: y,
                                          onSetCompactBarScrollThreshold: ea,
                                          showCompactBar: en,
                                      }),
                                      (0, i.jsx)(b.F, {
                                          children: x
                                              ? (0, i.jsxs)("div", {
                                                    className: nT.jC,
                                                    children: [
                                                        (0, i.jsx)(nG, { game: y, closeModal: el, trackAction: J }),
                                                        (0, i.jsx)(nW, {
                                                            game: y,
                                                            appContext: o,
                                                            source: l,
                                                            trackExternalAction: d,
                                                            trackAction: J,
                                                            analyticsLocations: N,
                                                        }),
                                                    ],
                                                })
                                              : (0, i.jsx)("div", {
                                                    className: nT.b9,
                                                    children: (0, i.jsx)(nP, {
                                                        game: y,
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
let nF = function (e) {
    let t = ec.useConfig({ location: "GameProfileModal" }).enabled;
    return e.forceV2 || t ? (0, i.jsx)(nY, { ...e }) : (0, i.jsx)(nU, { ...e });
};
