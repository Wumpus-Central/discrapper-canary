n.d(t, { default: () => nH });
var l,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    r = n.n(s),
    c = n(562708),
    o = n(535185),
    u = n(792216),
    d = n(17928),
    m = n(990078),
    x = n(521489),
    h = n(821609),
    g = n(414499),
    f = n(689175),
    j = n(707554),
    p = n(964486),
    v = n(737393),
    E = n(793574),
    A = n(688810),
    I = n(139286),
    N = n(46225),
    b = n(429913),
    S = n(590703),
    R = n(180170),
    C = n(832384),
    T = n(569926),
    L = n(928550),
    k = n(975732),
    y = n(773669),
    O = n(409626),
    _ = n(205184),
    M = n(505779),
    G = n(970163),
    P = n(184989);
let w = function (e, t) {
    let [n, l] = a.useState(),
        i = a.useRef(null),
        s = a.useRef(t);
    a.useEffect(() => {
        s.current = t;
    }, [t]);
    let r = (0, d.bG)([P.A], () => n?.guild?.id != null && P.A.isMember(n?.guild?.id)),
        c = a.useMemo(
            () =>
                e?.websites?.find((e) => {
                    let { category: t } = e;
                    return t === M.V.DISCORD;
                }),
            [e?.websites],
        );
    return (
        a.useEffect(() => {
            let e = async (e) => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (i.current?.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, G.A)(t, "game_profile");
                    !0 !== e.banned && ((i.current = t), l(e.invite), null != e.invite && s.current?.(e.invite));
                }
            };
            null != c && e(c.url);
        }, [c]),
        { invite: n, isMember: r }
    );
};
var V = n(832163),
    D = n(561794),
    W = n(862772),
    Y = n(287809);
let U = a.createContext(void 0);
function F() {
    let e = a.useContext(U);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var B = n(621466),
    H = n(966697),
    z = n(939249),
    X = n(834730),
    K = n(534514),
    J = n(460905),
    $ = n(449543),
    q = n(46054),
    Z = n(58703);
n(321073);
var Q = n(155718),
    ee = n(731068),
    et = n(59318),
    en = n(320095),
    el = n(383233),
    ei = n(998218);
let ea = /^#{1,3}\s+(.+)$/,
    es = /^https?:\/\/\S+$/;
function er(e) {
    let t = ei.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
var ec = n(60465),
    eo = n(636537),
    eu = n(228366);
n(913122);
var ed = n(371794),
    em = n(652215);
let ex = async (e) => {
        eu.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
        try {
            let t = (
                await (0, ed.aP)({
                    url: em.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: y.default.locale },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.flatMap((e) => e.sku_ids);
            eu.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: t });
        } catch (t) {
            eu.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
        }
    },
    eh = async (e, t) => {
        eu.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
        try {
            let n = {};
            t?.limit != null && (n.limit = t.limit);
            let l = (await eo.Bo.get({ url: em.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
            eu.h.dispatch({
                type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
                gameId: e,
                messages: l.messages.map((e) => {
                    let t,
                        n,
                        l = (0, en.rh)(e),
                        i = l.content,
                        a = (function (e) {
                            if ((0, el._c)(e))
                                return e.components
                                    .filter((e) => e.type === Q.I5.TEXT_DISPLAY)
                                    .map((e) => e.content)
                                    .join("\n");
                            let t = e.content;
                            return 0 === t.length || es.test(t.trim())
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
                        s = (function (e) {
                            if ((0, el._c)(e)) {
                                let t = e.components.find((e) => e.type === Q.I5.MEDIA_GALLERY),
                                    n = t?.items[0]?.media;
                                if (null != n) {
                                    let t = (0, ee.FE)(n);
                                    if ("INVALID" !== t) return { ...n, type: t, sourceMetadata: { message: e } };
                                }
                            }
                            let t = e.attachments.find((e) => (0, et.tT)(e.content_type));
                            if (null != t) return (0, ee.Rr)(t, e);
                            let n = e.attachments.find((e) => (0, et.XB)(e.content_type));
                            if (null != n) return (0, ee.Rr)(n, e);
                            let l = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                            if (l?.thumbnail != null)
                                return (0, ee.oU)(
                                    l.thumbnail,
                                    {
                                        message: e,
                                        identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === l) },
                                    },
                                    "IMAGE",
                                );
                            let i = e.embeds.find((e) => null != e.image);
                            if (i?.image != null)
                                return (0, ee.oU)(
                                    i.image,
                                    {
                                        message: e,
                                        identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                    },
                                    "IMAGE",
                                );
                            let a = e.embeds.find((e) => null != e.thumbnail);
                            if (a?.thumbnail != null)
                                return (0, ee.oU)(
                                    a.thumbnail,
                                    {
                                        message: e,
                                        identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === a) },
                                    },
                                    "IMAGE",
                                );
                        })(l),
                        { title: r, body: c } =
                            ((t = a.indexOf("\n")),
                            (n = (-1 === t ? a : a.slice(0, t)).match(ea)),
                            null != n
                                ? { title: n[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                                : { body: a }),
                        o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                        u =
                            a === i || (0, el._c)(l)
                                ? void 0
                                : (function (e) {
                                      let t = e.embeds[0];
                                      if (null == t) return;
                                      let n = t.author?.name,
                                          l = t.author?.iconProxyURL ?? t.author?.iconURL,
                                          i = t.footer?.text ?? t.provider?.name,
                                          a = t.footer?.iconProxyURL ?? t.footer?.iconURL,
                                          s = t.url,
                                          r = t.color ?? void 0;
                                      if (null != n || null != i || null != s)
                                          return {
                                              authorName: n,
                                              authorIconUrl: l,
                                              providerName: i,
                                              providerIconUrl: a,
                                              url: s,
                                              color: r,
                                          };
                                  })(l);
                    return {
                        id: l.id,
                        media: s,
                        title: r,
                        body: c,
                        content: a,
                        timestamp: e.timestamp,
                        reactionCount: o,
                        embedSource: u,
                    };
                }),
                channelId: l.channel_id ?? void 0,
                guildId: l.guild_id ?? void 0,
            });
        } catch (t) {
            eu.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
        }
    };
var eg = n(422069),
    ef = n(284009),
    ej = n.n(ef),
    ep = n(376728),
    ev = n(976860),
    eE = n(71393),
    eA = n(449054);
async function eI(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    ej()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((n = t.guild?.id), (r = new Set(t.guild?.features))), null == n)) return;
    let c = eE.A.getGuild(n);
    if (c?.joinedAt == null)
        if (null == r || r.has(em.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, eA.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: em.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await ep.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, ev.pX)(em.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var eN = n(320448),
    eb = n(375708),
    eS = n(274119);
function eR(e) {
    let { children: t, title: n, onClickViewAll: l } = e;
    return (0, i.jsxs)("div", {
        className: eS.k,
        children: [
            (0, i.jsxs)("div", {
                className: eS.w,
                children: [
                    (0, i.jsx)(K.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, i.jsx)(h.$, {
                            size: "sm",
                            icon: eN._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: l,
                            text: eb.intl.string(eb.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var eC = n(468489),
    eT = n(992595);
function eL(e, t) {
    return q.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function ek(e) {
    let { variant: t, message: n, channelId: l, onCardClick: s } = e,
        [c, o] = a.useState(!1),
        u = "main" === t,
        d = a.useCallback(() => o(!0), []),
        m = a.useCallback(
            (e) => {
                if (
                    !(
                        (0, B.vq)(e.target, HTMLAnchorElement) ||
                        ((0, B.vq)(e.target, HTMLSpanElement) && (0, B.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return s(n.id);
            },
            [s, n.id],
        ),
        x = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9,
        h = n.media?.proxyUrl ?? n.media?.url,
        g = (null != h ? er(h) : null) ?? h,
        { embedSource: f } = n;
    return null == f
        ? null
        : (0, i.jsx)(z.D, {
              className: u ? eC.jI : eC.IU,
              onClick: m,
              children: (0, i.jsxs)("div", {
                  className: u ? eC.GT : eC.s4,
                  children: [
                      null != f.url &&
                          (0, i.jsx)(X.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: eC.Ow,
                              children: f.url,
                          }),
                      (0, i.jsxs)("div", {
                          className: eC._d,
                          style: null != f.color ? { borderInlineStartColor: f.color } : void 0,
                          children: [
                              null != f.authorName &&
                                  (0, i.jsxs)("div", {
                                      className: eC.Tu,
                                      children: [
                                          null != f.authorIconUrl &&
                                              (0, i.jsx)("img", {
                                                  src: f.authorIconUrl,
                                                  className: eC.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, i.jsx)(X.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-strong",
                                              children: f.authorName,
                                          }),
                                      ],
                                  }),
                              null != n.media &&
                                  null != g &&
                                  (0, i.jsx)("div", {
                                      className: eC.ax,
                                      children: (0, i.jsx)(H.y, {
                                          readyState: c ? em.Rv1.READY : em.Rv1.LOADING,
                                          aspectRatio: x,
                                          placeholder: n.media.placeholder,
                                          placeholderVersion: n.media.placeholderVersion,
                                          placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                                          children: (0, i.jsx)("img", {
                                              src: g,
                                              className: eC.Lw,
                                              alt: "",
                                              draggable: !1,
                                              onLoad: d,
                                          }),
                                      }),
                                  }),
                              null != n.title &&
                                  (0, i.jsx)(K.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: u ? eC.KX : eC._N,
                                      children: eL(n.title, l),
                                  }),
                              n.body.length > 0 &&
                                  (0, i.jsxs)("div", {
                                      className: r()(eC.h_, eT.PT),
                                      children: [eL(n.body, l), (0, i.jsx)("div", { className: eC.fm })],
                                  }),
                              (0, i.jsxs)("div", {
                                  className: eC.ov,
                                  children: [
                                      null != f.providerIconUrl &&
                                          (0, i.jsx)("img", {
                                              src: f.providerIconUrl,
                                              className: eC.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, i.jsxs)(X.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != f.providerName ? `${f.providerName} \xb7 ` : "",
                                              (0, Z.i$)(new Date(n.timestamp), "LL"),
                                          ],
                                      }),
                                      n.reactionCount > 0 &&
                                          (0, i.jsxs)("div", {
                                              className: eC.a5,
                                              children: [
                                                  (0, i.jsx)(J.n, { size: "xs", color: "currentColor" }),
                                                  (0, i.jsx)(X.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(eb.intl.currentLocale).format(
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
              }),
          });
}
function ey(e) {
    let { variant: t, message: n, channelId: l, onCardClick: s } = e,
        [c, o] = a.useState(!1),
        u = "main" === t,
        d = a.useCallback(() => o(!0), []),
        m = a.useCallback(
            (e) => {
                if (
                    !(
                        (0, B.vq)(e.target, HTMLAnchorElement) ||
                        ((0, B.vq)(e.target, HTMLSpanElement) && (0, B.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return s(n.id);
            },
            [s, n.id],
        ),
        x = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9,
        h = n.media?.proxyUrl ?? n.media?.url,
        g = (null != h ? er(h) : null) ?? h,
        f = null != n.media && null != g;
    return (0, i.jsxs)(z.D, {
        className: r()({ [eC.cG]: u && f, [eC.jI]: u && !f, [eC.IU]: !u }),
        onClick: m,
        children: [
            null != n.media &&
                null != g &&
                (0, i.jsx)("div", {
                    className: u ? eC._v : eC.eZ,
                    children: (0, i.jsx)(H.y, {
                        readyState: c ? em.Rv1.READY : em.Rv1.LOADING,
                        aspectRatio: x,
                        placeholder: n.media.placeholder,
                        placeholderVersion: n.media.placeholderVersion,
                        placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                        children: (0, i.jsx)("img", {
                            src: g,
                            className: u ? eC.fk : eC.v,
                            alt: "",
                            draggable: !1,
                            onLoad: d,
                        }),
                    }),
                }),
            (0, i.jsxs)("div", {
                className: u ? eC.GT : eC.s4,
                children: [
                    null != n.title &&
                        (0, i.jsx)(K.D, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            className: u ? eC.KX : eC._N,
                            children: eL(n.title, l),
                        }),
                    n.body.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: r()(eC.h_, eT.PT),
                            children: [eL(n.body, l), (0, i.jsx)("div", { className: eC.fm })],
                        }),
                    (0, i.jsxs)("div", {
                        className: eC.ov,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: (0, Z.i$)(new Date(n.timestamp), "LL"),
                            }),
                            n.reactionCount > 0 &&
                                (0, i.jsxs)("div", {
                                    className: eC.a5,
                                    children: [
                                        (0, i.jsx)(J.n, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(X.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            children: new Intl.NumberFormat(eb.intl.currentLocale).format(
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
function eO(e) {
    return null != e.message.embedSource ? (0, i.jsx)(ek, { ...e }) : (0, i.jsx)(ey, { ...e });
}
function e_(e) {
    let { gameId: t, trackAction: n } = e,
        { analyticsLocations: l } = (0, A.Ay)(),
        { invite: s, closeModal: r, getScrollOffset: c } = F(),
        {
            messages: o,
            guildId: u,
            channelId: m,
        } = (function (e) {
            let {
                data: t,
                hasFetched: n,
                isFetching: l,
            } = (0, d.cf)([eg.A], () => ({
                data: null != e ? eg.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && eg.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && eg.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || n || eg.A.isAnnouncementsFetching(e) || eh(e);
                }, [e, n]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l }
            );
        })(t),
        x = a.useCallback(() => {
            let e = s?.guild?.id ?? u;
            null != e &&
                null != m &&
                (n(O.Ws.Announcements),
                ec.A.setGameProfilePendingReturn({ gameId: t, channelId: m, initialScrollOffset: c() }),
                r(),
                eI({ invite: s, guildId: e, channelId: m, analyticsLocationStack: l }));
        }, [n, r, c, s, u, m, l, t]),
        h = a.useCallback(
            (e) => {
                let i = s?.guild?.id ?? u;
                null != i &&
                    null != m &&
                    (n(O.Ws.AnnouncementsItem),
                    ec.A.setGameProfilePendingReturn({ gameId: t, channelId: m, initialScrollOffset: c() }),
                    r(),
                    eI({ invite: s, guildId: i, channelId: m, messageId: e, analyticsLocationStack: l }));
            },
            [n, r, c, s, u, m, l, t],
        );
    if (null == m || 0 === o.length) return null;
    let g = 2 !== o.length,
        f = g ? o[0] : null,
        j = g ? o.slice(1) : o;
    return (0, i.jsx)(eR, {
        title: eb.intl.string(eb.t.B0BV3Y),
        onClickViewAll: x,
        children: (0, i.jsxs)("div", {
            className: eC.f3,
            children: [
                null != f && (0, i.jsx)(eO, { variant: "main", message: f, channelId: m, onCardClick: h }),
                j.length > 0 &&
                    (0, i.jsx)($.A, {
                        gap: 16,
                        children: j.map((e) =>
                            (0, i.jsx)(eO, { variant: "small", message: e, channelId: m, onCardClick: h }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
var eM = n(541830),
    eG = n(240248);
let eP = [M.V.OFFICIAL, M.V.FACEBOOK, M.V.TWITTER, M.V.INSTAGRAM, M.V.YOUTUBE, M.V.BLUESKY, M.V.REDDIT, M.V.TWITCH];
var ew = n(808380);
let eV = [ew.Y.DESKTOP, ew.Y.XBOX, ew.Y.PLAYSTATION, ew.Y.NINTENDO];
var eD = n(349288),
    eW = n(975807),
    eY = n(194362);
function eU(e) {
    let { game: t, trackAction: n } = e,
        l = a.useCallback(async () => {
            n(O.Ws.ClaimGame);
            let e = await (0, eY.a)(em.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, eW.A)(e);
        }, [n]),
        s = a.useCallback((e) => (0, i.jsx)(eD.Anchor, { onClick: l, children: e }), [l]);
    return t.linkedApplications?.some((e) => e.type === Q.Mh.OFFICIAL)
        ? null
        : (0, i.jsx)(X.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: eb.intl.format(eb.t.KAjfKl, { claimLink: s }),
          });
}
var eF = n(998445),
    eB = n(274997),
    eH = n(80500),
    ez = n(319745),
    eX = n(488225),
    eK = n(967492),
    eJ = n(72265),
    e$ = n(454346),
    eq = n(37948),
    eZ = n(262420);
let eQ = { size: "xs", colorClass: eZ.wP };
function e0(e) {
    let { website: t, trackAction: n } = e,
        l = (0, eq.A)(),
        {
            action: s,
            icon: r,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case M.V.OFFICIAL:
                    return {
                        icon: (0, i.jsx)(eF.L, { ...t }),
                        action: O.Ws.WebsiteLink,
                        title: eb.intl.string(eb.t.fOUKvg),
                    };
                case M.V.TWITTER:
                    return { icon: (0, i.jsx)(eB.p, { ...t }), action: O.Ws.XLink, title: eb.intl.string(eb.t.INic4y) };
                case M.V.YOUTUBE:
                    return {
                        action: O.Ws.YouTubeLink,
                        icon: (0, i.jsx)(eH.C, { ...t }),
                        title: eb.intl.string(eb.t.lNmxbE),
                    };
                case M.V.FACEBOOK:
                    return {
                        icon: (0, i.jsx)(ez.Z, { ...t }),
                        action: O.Ws.FacebookLink,
                        title: eb.intl.string(eb.t.FjyREK),
                    };
                case M.V.INSTAGRAM:
                    return {
                        icon: (0, i.jsx)(eX.L, { ...t }),
                        action: O.Ws.InstagramLink,
                        title: eb.intl.string(eb.t["cgR+IK"]),
                    };
                case M.V.BLUESKY:
                    return {
                        icon: (0, i.jsx)(eK.a, { ...t }),
                        action: O.Ws.BlueskyLink,
                        title: eb.intl.string(eb.t["D/PHq5"]),
                    };
                case M.V.REDDIT:
                    return {
                        icon: (0, i.jsx)(eJ.T, { ...t }),
                        action: O.Ws.RedditLink,
                        title: eb.intl.string(eb.t["Hgb+fc"]),
                    };
                case M.V.TWITCH:
                    return {
                        icon: (0, i.jsx)(e$.a, { ...t }),
                        action: O.Ws.TwitchLink,
                        title: eb.intl.string(eb.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, eQ),
        o = a.useCallback(() => {
            n(s), l(t.url);
        }, [s, l, n, t.url]);
    return (0, i.jsx)(m.m, {
        text: c,
        children: (0, i.jsx)(z.D, { onClick: o, className: eZ.yO, title: c, children: r }),
    });
}
var e1 = n(31300),
    e8 = n(802516),
    e4 = n(22363),
    e2 = n(418524),
    e3 = n(141535);
function e5(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case ew.Y.DESKTOP:
            return (0, i.jsx)(e1.k, { size: "xs", ...n });
        case ew.Y.XBOX:
            return (0, i.jsx)(e8.Y, { size: "xs", ...n });
        case ew.Y.PLAYSTATION:
            return (0, i.jsx)(e4.X, { size: "xs", ...n });
        case ew.Y.NINTENDO:
            return (0, i.jsx)(e2.M, { size: "xs", ...n });
        default:
            return null;
    }
}
function e6(e) {
    let { platform: t } = e;
    return (0, i.jsx)(
        m.m,
        {
            text: (function (e) {
                switch (e) {
                    case ew.Y.DESKTOP:
                        return eb.intl.string(eb.t.KT6uCJ);
                    case ew.Y.XBOX:
                        return eb.intl.string(eb.t.DDWUJp);
                    case ew.Y.PLAYSTATION:
                        return eb.intl.string(eb.t.fzMz2s);
                    case ew.Y.NINTENDO:
                        return eb.intl.string(eb.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, i.jsx)(e5, { platform: t }),
        },
        t,
    );
}
var e9 = n(424994),
    e7 = n(60541);
function te() {
    return (0, i.jsx)(X.E, { variant: "text-sm/normal", color: "text-subtle", children: eb.intl.string(eb.t.GruYxV) });
}
let tt = function (e) {
    let { game: t, trackAction: n } = e,
        l = a.useMemo(() => t.genres.map(eM.du).join(", "), [t]),
        s = t.getCompanyByRole(Q.wk.PUBLISHER),
        r = t.getCompanyByRole(Q.wk.DEVELOPER),
        c = s.map((e) => e.name).join(", "),
        o = r.map((e) => e.name).join(", "),
        u = t.firstReleaseDate,
        d = a.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return (
                !e.has(ew.Y.DESKTOP) && (e.has(ew.Y.MACOS) || e.has(ew.Y.LINUX)) && n.push(ew.Y.DESKTOP),
                n.filter((e) => eV.includes(e)).sort((e, t) => eV.indexOf(e) - eV.indexOf(t))
            );
        }, [t.platforms]),
        m = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return eP.includes(t);
            })
            .sort((e, t) => eP.indexOf(e.category) - eP.indexOf(t.category)),
        x = !(0, eG.uJ)(l),
        h = !(0, eG.uJ)(c),
        g = !(0, eG.uJ)(o),
        f = !(0, eG.uJ)(u),
        j = d.length > 0,
        p = m.length > 0 && !m.every((e) => (0, eG.uJ)(e.url));
    return (0, i.jsxs)("div", {
        className: e7.uW,
        children: [
            (0, i.jsx)("div", {
                className: e7.Gf,
                children: (0, i.jsx)(K.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: eb.intl.string(eb.t["7OjmmH"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: e7.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: e7.J1,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? eb.intl.string(eb.t.pDgwYB) : eb.intl.string(eb.t.mjFKqn),
                            }),
                            x
                                ? (0, i.jsx)(X.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: e7.Gu,
                                      children: l,
                                  })
                                : (0, i.jsx)(te, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: e7.J1,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== s.length ? eb.intl.string(eb.t.Hc7Enk) : eb.intl.string(eb.t["4Byy/G"]),
                            }),
                            h
                                ? (0, i.jsx)(X.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: e7.Gu,
                                      children: c,
                                  })
                                : (0, i.jsx)(te, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: e7.J1,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? eb.intl.string(eb.t.KATEJB) : eb.intl.string(eb.t.na3PT0),
                            }),
                            g
                                ? (0, i.jsx)(X.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: e7.Gu,
                                      children: o,
                                  })
                                : (0, i.jsx)(te, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: e7.J1,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eb.intl.string(eb.t.H3mPDT),
                            }),
                            f
                                ? (0, i.jsx)(X.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: e7.Gu,
                                      children: Z.i$(new Date(u), "LL"),
                                  })
                                : (0, i.jsx)(te, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: e7.J1,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: d.length > 1 ? eb.intl.string(eb.t.PNqxNe) : eb.intl.string(eb.t["UxAag+"]),
                            }),
                            j
                                ? (0, i.jsx)("div", {
                                      className: e7.Gu,
                                      children: d.map((e) => (0, i.jsx)(e6, { platform: e }, e)),
                                  })
                                : (0, i.jsx)(te, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: e7.J1,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eb.intl.string(eb.t["Oj3o1/"]),
                            }),
                            p
                                ? (0, i.jsx)("div", {
                                      className: e7.Gu,
                                      children: m.map((e) => (0, i.jsx)(e0, { website: e, trackAction: n }, e.url)),
                                  })
                                : (0, i.jsx)(te, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: e7.J1,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eb.intl.string(eb.t["BwQ+9e"]),
                            }),
                            (0, i.jsx)(X.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: e7.Gu,
                                children: eb.intl.format(eb.t.XPFZVl, { igdbLink: e9.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: e7.OQ, children: (0, i.jsx)(eU, { game: t, trackAction: n }) }),
        ],
    });
};
var tn = n(714991),
    tl = n(486020),
    ti = n(552523);
function ta(e) {
    let { trackAction: t } = e,
        { canStartAuthorization: n, hasAlreadyLinked: l, invite: s, isMember: r, closeModal: c } = F(),
        o = a.useCallback(() => {
            null != s &&
                (t(O.Ws.JoinServer),
                c(),
                eu.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: s, code: s.code, context: em.BRT.APP }));
        }, [s, t, c]);
    if (null == s || null == s.guild) return null;
    let u = tl.Ay.getGuildIconURL({ id: s.guild.id, icon: s.guild.icon, size: 48 }),
        d = tl.Ay.getGuildSplashURL({ id: s.guild.id, splash: s.guild.splash }),
        m = (n && !l) || null == d,
        x = (0, i.jsx)("img", {
            className: ti.$f,
            src: u,
            alt: eb.intl.formatToPlainString(eb.t.xm6W9D, { guildName: s.guild.name }),
            draggable: !1,
        }),
        g = m ? ti.To : ti.Kt,
        f = m ? ti.yj : ti.FS;
    return (0, i.jsxs)("div", {
        className: ti.uW,
        children: [
            (0, i.jsx)(K.D, {
                className: ti.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: eb.intl.string(eb.t["U2N+ci"]),
            }),
            (0, i.jsxs)("div", {
                className: ti.kL,
                children: [
                    !m && null != d && (0, i.jsx)("img", { className: ti.ll, src: d, alt: "", draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: ti.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: g,
                                children: [
                                    m
                                        ? x
                                        : (0, i.jsx)("div", {
                                              className: ti._C,
                                              children: (0, i.jsx)("div", { className: ti.kW, children: x }),
                                          }),
                                    (0, i.jsxs)("div", {
                                        className: f,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: ti.YS,
                                                children: [
                                                    (0, i.jsx)(tn.A, { guild: s.guild, size: 16 }),
                                                    (0, i.jsx)(K.D, {
                                                        variant: "heading-md/semibold",
                                                        color: "text-default",
                                                        children: s.guild.name,
                                                    }),
                                                ],
                                            }),
                                            !(0, eG.uJ)(s.guild?.description) &&
                                                (0, i.jsx)(X.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: s.guild?.description,
                                                }),
                                            null != s.approximate_member_count || null != s.approximate_presence_count
                                                ? (0, i.jsxs)("div", {
                                                      className: ti.iR,
                                                      children: [
                                                          null != s.approximate_presence_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: ti.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: ti._o }),
                                                                      (0, i.jsx)(X.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: eb.intl.format(eb.t["LC+S+m"], {
                                                                              membersOnline:
                                                                                  s.approximate_presence_count,
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          null != s.approximate_member_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: ti.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: ti.jk }),
                                                                      (0, i.jsx)(X.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: eb.intl.format(eb.t.zRl6XR, {
                                                                              count: s.approximate_member_count,
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
                            (0, i.jsx)(h.$, {
                                variant: "secondary",
                                text: r ? eb.intl.string(eb.t.cEnaWx) : eb.intl.string(eb.t.XpeFYr),
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
var ts = n(369606),
    tr = n(459746),
    tc = n(922016),
    to = n(980707),
    tu = n(477782),
    td = n(663341),
    tm = n(408278),
    tx = n(34188),
    th = n(365199),
    tg = n(789645),
    tf = n(442433),
    tj = n(50268),
    tp = n(44724),
    tv = n(67518),
    tE = n(540185),
    tA = n(926268),
    tI = n(53788),
    tN = n(831453),
    tb = n(785866),
    tS = n(555704),
    tR = n(457965),
    tC = n(47675),
    tT = n(633075),
    tL = n(289173),
    tk = n(841595),
    ty = n(958805),
    tO = n(735321),
    t_ = n(495544),
    tM = n(760751);
async function tG(e) {
    let t = e((0, tO.BF)());
    await ty.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function tP(e) {
    let { game: t, className: n, trackAction: l } = e,
        s = a.useRef(null),
        r = a.useRef(null),
        c = (0, tj.A)({ id: t.id, label: eb.intl.string(eb.t.SHQGPj) }),
        o = (0, tv.n)(t.id, l),
        u = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, d.bG)([t_.default], () => t_.default.getId()),
                s = (0, d.bG)([tM.A], () => tM.A.getDetectableGame(t)),
                r = a.useMemo(
                    () => [
                        {
                            type: tE.x.FAVORITE_GAMES,
                            addLabel: eb.intl.string(eb.t.fgmitg),
                            removeLabel: eb.intl.string(eb.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: tA.C,
                        },
                        {
                            type: tE.x.PLAYED_GAMES,
                            addLabel: eb.intl.string(eb.t["0xIVLR"]),
                            removeLabel: eb.intl.string(eb.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: tI.G,
                        },
                        {
                            type: tE.x.CURRENT_GAMES,
                            addLabel: eb.intl.string(eb.t.G0c4En),
                            removeLabel: eb.intl.string(eb.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: tN.H,
                        },
                        {
                            type: tE.x.WANT_TO_PLAY_GAMES,
                            addLabel: eb.intl.string(eb.t.UuBS4K),
                            removeLabel: eb.intl.string(eb.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: tb._,
                        },
                    ],
                    [],
                ),
                c = (0, d.yK)([tk.A], () => (null == l ? [] : (tk.A.getUserProfile(l)?.widgets ?? [])), [l]),
                o = (0, tR.w$)({ location: "game-profile-overflow-menu" }),
                u = a.useMemo(() => {
                    if (null == o || 0 === o.length) return null;
                    if (null != e) {
                        if (o.some((t) => t.applicationId === e.id)) return e.id;
                        for (let t of e.linkedApplications ?? [])
                            if (o.some((e) => e.applicationId === t.id)) return t.id;
                    }
                    return null;
                }, [o, e]),
                m = a.useCallback(
                    async (e, n) => {
                        let l = null;
                        if (
                            (await tG((i) => {
                                let a = i.filter(tL.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.applicationId === t) || (null != a && (0, tO.uA)(a)))
                                        return i;
                                    let n = { applicationId: t },
                                        s = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new tL.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.applicationId !== t);
                                    l = new tL.Yy({ ...a, games: e });
                                }
                                var s = l;
                                let r = i.findIndex((e) => e.getUniqueKey() === s.getUniqueKey());
                                if (-1 === r) return [s, ...i];
                                let c = [...i];
                                return (c[r] = s), c;
                            }),
                            null == l)
                        )
                            return;
                        let i = l;
                        (0, tC.un)({
                            action: n ? "GAME_ADDED" : "GAME_REMOVED",
                            ...i.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [t],
                ),
                x = a.useCallback(
                    async (e) => {
                        if (null == u) return;
                        let t = null;
                        if (
                            (await tG((n) =>
                                e
                                    ? n.some((e) => e instanceof tT.R && e.applicationId === u)
                                        ? n
                                        : [(t = new tT.R({ applicationId: u })), ...n]
                                    : ((t = n.find((e) => e instanceof tT.R && e.applicationId === u) ?? null),
                                      n.filter((e) => !(e instanceof tT.R && e.applicationId === u))),
                            ),
                            null == t)
                        )
                            return;
                        let n = t;
                        (0, tC.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...n.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [u],
                );
            if (null == l) return null;
            let h = null != e && null != s && (0, tO.XX)(s),
                g = [];
            if (null != u) {
                let e = c.some((e) => e instanceof tT.R && e.applicationId === u);
                g.push(
                    (0, i.jsx)(
                        tu.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? eb.intl.formatToPlainString(eb.t.Ktb1n8, { name: n })
                                : eb.intl.formatToPlainString(eb.t.Xp6iZt, { name: n }),
                            action: () => x(!e),
                            leadingAccessory: { type: "icon", icon: tS.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (h)
                for (let e of r) {
                    let n = c.filter(tL.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.applicationId === t),
                        a = !l && null != n && (0, tO.uA)(n);
                    g.push(
                        (0, i.jsx)(
                            tu.Dr,
                            {
                                id: e.menuId,
                                label: l ? e.removeLabel : e.addLabel,
                                subtext: a ? eb.intl.string(eb.t["86OoiH"]) : void 0,
                                subtextLineClamp: 1,
                                action: () => m(e.type, !l),
                                leadingAccessory: { type: "icon", icon: e.icon },
                                disabled: a,
                            },
                            e.type,
                        ),
                    );
                }
            return 0 === g.length ? null : g;
        })(t),
        { invite: x, closeModal: g } = F(),
        f = new Set(x?.guild?.features).has(em.GuildFeatures.SOCIAL_LAYER_STOREFRONT),
        j = a.useCallback(() => {
            null != x && (0, tp.X)({ invite: x });
        }, [x]),
        p = a.useCallback(() => {
            null != x && (l(O.Ws.GameShop), (0, tp.default)({ invite: x }), g());
        }, [x, l, g]),
        v = a.useCallback(() => g(!1), [g]);
    return (0, i.jsxs)("div", {
        className: n,
        children: [
            null != u &&
                (0, i.jsx)(tc.Y, {
                    targetElementRef: r,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(to.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                (0, tf.Z_)(), t();
                            },
                            "aria-label": eb.intl.string(eb.t.sidPSo),
                            onSelect: () => {},
                            children: (0, i.jsx)(tu.rX, { children: u }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: r,
                            children: (0, i.jsx)(h.$, {
                                icon: td.p,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: eb.intl.string(eb.t.sidPSo),
                            }),
                        }),
                }),
            f &&
                null != x &&
                (0, i.jsx)(m.m, {
                    text: eb.intl.string(eb.t.apFNLU),
                    children: (0, i.jsx)(tm.K, {
                        icon: tx.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eb.intl.string(eb.t.apFNLU),
                        onMouseDown: j,
                        onClick: p,
                    }),
                }),
            (null != c || null != o) &&
                (0, i.jsx)(tc.Y, {
                    targetElementRef: s,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(to.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                (0, tf.Z_)(), t();
                            },
                            "aria-label": eb.intl.string(eb.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(tu.rX, { children: o }), (0, i.jsx)(tu.rX, { children: c })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)(m.m, {
                            text: eb.intl.string(eb.t["UKOtz+"]),
                            children: (0, i.jsx)("div", {
                                ...e,
                                ref: s,
                                children: (0, i.jsx)(tm.K, {
                                    icon: th.j,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": eb.intl.string(eb.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, i.jsx)(tm.K, {
                icon: tg.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: v,
                "aria-label": eb.intl.string(eb.t.cpT0Cq),
            }),
        ],
    });
}
var tw = n(8208);
function tV(e) {
    let { game: t, show: n, trackAction: l } = e,
        a = t.name,
        s = t.getIconURL(80);
    return (0, i.jsxs)("div", {
        className: tw.y5,
        children: [
            (0, i.jsx)("div", { className: r()(tw.nI, n && tw.hD) }),
            (0, i.jsxs)("div", {
                className: r()(tw.A1, n && tw.g8),
                children: [
                    null != s && (0, i.jsx)("img", { src: s, alt: "", className: tw.V$, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: tw.hm,
                        children: [
                            (0, i.jsx)(K.D, { variant: "heading-md/semibold", lineClamp: 1, children: a }),
                            null != t.l30Rank && (0, i.jsx)(tU, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(tP, { game: t, className: tw.HK, trackAction: l }),
        ],
    });
}
function tD(e) {
    let { show: t } = e;
    return (0, i.jsx)("div", { className: r()(tw.nI, tw.Jn, t && tw.hD) });
}
let tW = a.forwardRef(function (e, t) {
    let { game: n } = e,
        [l] = a.useState(() => Math.random()),
        s = a.useMemo(() => {
            if (null != n.bannerHash)
                return tl.Ay.getGameAssetURL({ id: n.id, hash: n.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            if (null != n.screenshotUrls && n.screenshotUrls.length > 0) {
                let e = Math.floor(l * n.screenshotUrls.length);
                return n.screenshotUrls[e];
            }
            return "";
        }, [n.id, n.bannerHash, n.screenshotUrls, l]);
    return (0, eG.uJ)(s)
        ? null
        : (0, i.jsxs)("div", {
              ref: t,
              children: [
                  (0, i.jsx)("div", { className: tw.y1, style: { backgroundImage: `url("${s}")` } }),
                  (0, i.jsx)("div", { className: tw.N4 }),
              ],
          });
});
function tY(e) {
    let { game: t } = e,
        n = (t.genres ?? []).map(eM.du).join(", ");
    return (0, eG.uJ)(n) ? null : (0, i.jsx)(X.E, { variant: "text-md/normal", color: "text-muted", children: n });
}
let tU = (e) => {
    let { rank: t } = e;
    return (0, i.jsxs)("div", {
        className: tw.Qc,
        children: [
            (0, i.jsx)(ts.O, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, i.jsx)(X.E, {
                variant: "text-xs/bold",
                color: "none",
                children: eb.intl.formatToPlainString(eb.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
};
function tF(e) {
    let { game: t, isTwoColumn: n } = e;
    return (0, i.jsx)("div", {
        className: n ? tw.n8 : tw.FS,
        children: (0, i.jsx)(tr.A, { game: t, className: tw.xe, size: tr.w.LARGE }),
    });
}
let tB = function (e) {
    let { game: t, onSetCompactBarScrollThreshold: n, showCompactBar: l } = e,
        { isTwoColumn: s } = F(),
        c = a.useRef(null),
        o = a.useRef(null);
    a.useEffect(() => {
        let e = c.current,
            t = o.current;
        if (null == e || null == t) return;
        let l = (function (e, t) {
            let n = 0,
                l = e;
            for (; null != l && l !== t; ) (n += l.offsetTop), (l = l.offsetParent);
            return n;
        })(t, e);
        l > 0 && n?.(l);
    }, [n]);
    let u = t.name;
    return (0, i.jsxs)("div", {
        ref: c,
        className: r()(tw.ap, l && tw.Gh),
        children: [
            s &&
                null != t &&
                (0, i.jsx)("div", {
                    className: tw.Tf,
                    children: (0, i.jsx)(tr.A, { game: t, className: tw.w$, size: tr.w.LARGE }),
                }),
            (0, i.jsxs)("div", {
                className: tw.lu,
                children: [
                    null != t.l30Rank && (0, i.jsx)(tU, { rank: t.l30Rank }),
                    (0, i.jsx)(K.D, { ref: o, variant: "heading-xxl/semibold", children: u }),
                    (0, i.jsx)(tY, { game: t }),
                ],
            }),
        ],
    });
};
var tH = n(141628),
    tz = n(289363),
    tX = n(448682);
function tK(e) {
    let { trackAction: t, analyticsLocations: n } = e,
        {
            fetchedAuthorization: l,
            hasAlreadyLinked: s,
            canStartAuthorization: r,
            startAuthorization: c,
            connectionApp: o,
            invite: u,
        } = F(),
        m = (0, d.bG)([Y.default], () => Y.default.getCurrentUser()),
        x = a.useCallback(() => {
            t(O.Ws.LinkAccount), c({ analyticsLocations: n });
        }, [t, c, n]);
    if (!l || null == o || !r || s || null == m) return null;
    let g = u?.guild != null ? tl.Ay.getGuildSplashURL({ id: u.guild.id, splash: u.guild.splash }) : null;
    return (0, i.jsxs)("div", {
        className: tX.uW,
        children: [
            (0, i.jsx)(K.D, {
                className: tX.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: eb.intl.string(eb.t["VDAhr+"]),
            }),
            (0, i.jsxs)("div", {
                className: tX.kL,
                children: [
                    null != g
                        ? (0, i.jsx)("img", { className: tX.ll, src: g, alt: "", draggable: !1 })
                        : (0, i.jsx)("div", { className: tX.sB, children: (0, i.jsx)(tz.default, { application: o }) }),
                    (0, i.jsxs)("div", {
                        className: tX.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tX.FS,
                                children: [
                                    (0, i.jsx)(K.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: eb.intl.formatToPlainString(eb.t.hUbQT2, { gameName: o.name }),
                                    }),
                                    (0, i.jsx)(X.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: eb.intl.string(eb.t["JKqu+4"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(h.$, {
                                variant: "secondary",
                                icon: tH.A,
                                text: eb.intl.string(eb.t.jynBQ5),
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
var tJ = n(80687),
    t$ = n(775602),
    tq = n(248643),
    tZ = n(256905),
    tQ = n(34337),
    t0 = n(90721),
    t1 = n(616337);
let t8 = a.memo(function (e) {
        let { item: t, index: n, isSelected: l, isPlaying: s, onSelect: c, gameName: o } = e,
            u = a.useCallback(() => c(n), [c, n]);
        return (0, i.jsx)(z.D, {
            className: r()(t1.JS, l && t1.Y4),
            onClick: u,
            children: (0, i.jsxs)("div", {
                className: t1.ub,
                children: [
                    (0, i.jsx)("img", {
                        src: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                        className: t1.xn,
                        alt: eb.intl.formatToPlainString(eb.t.COYYrn, { game: o }),
                        draggable: !1,
                    }),
                    "VIDEO" === t.type &&
                        (0, i.jsx)("div", {
                            className: t1.UZ,
                            children: (0, i.jsx)(tJ.D, { playing: l && s, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    t4 = a.memo(function (e) {
        let {
                item: t,
                reducedMotion: n,
                videoRef: l,
                mediaPlayerRef: s,
                onPlay: r,
                onPause: c,
                onFullscreenChange: o,
            } = e,
            u = a.useRef(null);
        return (
            (0, t0.A)({ videoRef: l, canvasRef: u, enabled: !n }),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    !n && (0, i.jsx)("canvas", { ref: u, className: t1.HW, "aria-hidden": "true" }),
                    (0, i.jsx)("div", {
                        className: t1.tN,
                        children: (0, i.jsx)(tq.A, {
                            src: t.url,
                            poster: t.poster ?? "",
                            width: t.width ?? 1920,
                            height: t.height ?? 1080,
                            naturalWidth: t.width ?? 1920,
                            naturalHeight: t.height ?? 1080,
                            maxWidth: 1 / 0,
                            maxHeight: 1 / 0,
                            autoPlay: !n,
                            autoMute: !0,
                            useFullWidth: !0,
                            responsive: !0,
                            renderLinkComponent: tQ.bU,
                            onPlay: r,
                            onPause: c,
                            onFullscreenChange: o,
                            mediaPlayerClassName: t1.T9,
                            videoRef: l,
                            mediaPlayerRef: s,
                        }),
                    }),
                ],
            })
        );
    });
function t2(e) {
    let { game: t, trackAction: n } = e,
        [l, s] = a.useState(0),
        [r, c] = a.useState(null),
        [o, u] = a.useState(t.screenshotUrls),
        m = a.useRef(null),
        x = a.useRef(null),
        h = (0, d.bG)([t$.A], () => t$.A.useReducedMotion);
    o !== t.screenshotUrls && (u(t.screenshotUrls), s(0));
    let g = a.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, ed.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, ed.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                ...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })),
            ],
            [t.trailers, t.screenshotUrls],
        ),
        f = g.length > 0 ? Math.min(l, g.length - 1) : 0,
        j = g[f],
        p = j?.type === "VIDEO",
        v = a.useCallback(
            (e) => {
                let t = g[f],
                    n = g[e];
                t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? c(t.url) : c(null), s(e);
            },
            [g, f],
        ),
        [E, A] = a.useState(!1),
        I = a.useRef(null),
        N = a.useCallback(() => {
            n(p ? O.Ws.ClickTrailer : O.Ws.ClickImage);
            let e = m.current,
                t = I.current,
                l = null != e && !e.paused,
                i = e?.muted ?? !0,
                a = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let r = g.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === f;
                    return { ...e, autoPlay: !!n && l, autoMute: !n || i, initialTimeSec: n ? a : void 0, videoRef: x };
                }
                return e;
            });
            (0, tZ.R)({
                items: r,
                startingIndex: f,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: s,
                onClose: () => {
                    let e = x.current,
                        t = I.current,
                        n = null != e ? !e.paused : l;
                    e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted))
                            : n && t?.setPlay(!0),
                        A(n);
                },
            });
        }, [n, g, f, p]),
        b = a.useCallback(() => A(!0), []),
        S = a.useCallback(() => A(!1), []),
        R = a.useCallback(() => c(null), []),
        C = a.useCallback(
            (e) => {
                e && N();
            },
            [N],
        );
    return 0 === g.length
        ? null
        : (0, i.jsxs)("div", {
              className: t1.kL,
              children: [
                  p
                      ? (0, i.jsx)("div", {
                            className: t1.ND,
                            children: (0, i.jsx)(
                                t4,
                                {
                                    item: j,
                                    reducedMotion: h,
                                    videoRef: m,
                                    mediaPlayerRef: I,
                                    onPlay: b,
                                    onPause: S,
                                    onFullscreenChange: C,
                                },
                                `${f}-${j.url}`,
                            ),
                        })
                      : (0, i.jsxs)("div", {
                            className: t1.wp,
                            children: [
                                null != r &&
                                    !h &&
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: t1.Jy,
                                            onAnimationEnd: R,
                                            children: (0, i.jsx)("img", { src: r, className: t1.Db, alt: "" }),
                                        },
                                        r,
                                    ),
                                (0, i.jsx)("div", { className: t1.QN }),
                                (0, i.jsx)(z.D, {
                                    className: t1.gv,
                                    onClick: N,
                                    children: (0, i.jsx)(
                                        "img",
                                        {
                                            src: j.url,
                                            className: t1.c8,
                                            alt: eb.intl.formatToPlainString(eb.t.COYYrn, { game: t.name }),
                                        },
                                        j.url,
                                    ),
                                }),
                            ],
                        }),
                  (0, i.jsx)($.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      children: g.map((e, n) =>
                          (0, i.jsx)(
                              t8,
                              { item: e, index: n, isPlaying: E, isSelected: n === f, onSelect: v, gameName: t.name },
                              `${n}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
var t3 = n(49381),
    t5 = n(661531),
    t6 = n(223273);
function t9(e, t, n) {
    if (null == e || null == t || t < 10) return t6.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? t6.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? t6.vI.VERY_POSITIVE
              : t6.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return t6.vI.MOSTLY_POSITIVE;
    if (e >= 40) return t6.vI.MIXED;
    if (e >= 20) return t6.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return t6.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return t6.vI.VERY_NEGATIVE;
    return t6.vI.OVERWHELMINGLY_NEGATIVE;
}
function t7(e) {
    switch (e) {
        case t6.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case t6.vI.OVERWHELMINGLY_POSITIVE:
        case t6.vI.VERY_POSITIVE:
        case t6.vI.POSITIVE:
        case t6.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case t6.vI.MIXED:
            return "steam-review-text-mixed";
        case t6.vI.MOSTLY_NEGATIVE:
        case t6.vI.NEGATIVE:
        case t6.vI.VERY_NEGATIVE:
        case t6.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var ne =
        (((l = {})[(l.MIGHTY = 1)] = "MIGHTY"),
        (l[(l.STRONG = 2)] = "STRONG"),
        (l[(l.FAIR = 3)] = "FAIR"),
        (l[(l.WEAK = 4)] = "WEAK"),
        l),
    nt = n(778591);
function nn(e) {
    let { rating: t, strokeColor: n } = e,
        l = 2 * Math.PI * 16,
        a = Math.min(Math.max(t, 0), 100) / 100,
        s = a * l;
    return (0, i.jsx)("svg", {
        width: 30,
        height: 30,
        viewBox: "0 0 36 36",
        style: { transform: `rotate(${((1 - a) * 360) / 2}deg)` },
        children: (0, i.jsx)("circle", {
            r: 16,
            cx: 18,
            cy: 18,
            fill: "none",
            stroke: n,
            strokeWidth: 2.4,
            strokeDasharray: `${s} ${l - s}`,
        }),
    });
}
var nl = n(99392);
function ni(e) {
    let { url: t, trackAction: n, title: l, rating: s, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, eq.A)(),
        u = t9(s, r, "recent" === c),
        d = t7(u),
        x = a.useCallback(() => {
            n(O.Ws.SteamReviews), o(t);
        }, [o, n, t]);
    return (0, i.jsx)(z.D, {
        onClick: x,
        className: nl.nf,
        role: "link",
        "aria-label": eb.intl.string(eb.t.YNC5Di),
        children: (0, i.jsxs)("div", {
            className: nl.U6,
            children: [
                (0, i.jsxs)("div", {
                    className: nl.tN,
                    children: [
                        (0, i.jsx)(t3.N, { size: "sm", color: t5.A.colors.ICON_STRONG.css }),
                        (0, i.jsx)(K.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, i.jsx)(
                    m.m,
                    {
                        text:
                            u === t6.vI.NO_USER_REVIEWS
                                ? eb.intl.string(eb.t.CLMt8J)
                                : eb.intl
                                      .format(
                                          "recent" === c
                                              ? eb.t.TzvC0k
                                              : "localized" === c
                                                ? eb.t.EOfrwm
                                                : eb.t["lzANJ/"],
                                          { rating: s, rating_count: r?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, i.jsxs)("div", {
                            className: nl.Z0,
                            children: [
                                (0, i.jsx)(X.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    children: (function (e) {
                                        switch (e) {
                                            case t6.vI.NO_USER_REVIEWS:
                                                return eb.intl.string(eb.t.CLMt8J);
                                            case t6.vI.OVERWHELMINGLY_POSITIVE:
                                                return eb.intl.string(eb.t["75sx1S"]);
                                            case t6.vI.VERY_POSITIVE:
                                                return eb.intl.string(eb.t["EkOVg+"]);
                                            case t6.vI.POSITIVE:
                                                return eb.intl.string(eb.t.ZUkFtr);
                                            case t6.vI.MOSTLY_POSITIVE:
                                                return eb.intl.string(eb.t.M7Z09a);
                                            case t6.vI.MIXED:
                                                return eb.intl.string(eb.t.c8yuHR);
                                            case t6.vI.MOSTLY_NEGATIVE:
                                                return eb.intl.string(eb.t.H0MSjG);
                                            case t6.vI.NEGATIVE:
                                                return eb.intl.string(eb.t.vpLrgz);
                                            case t6.vI.VERY_NEGATIVE:
                                                return eb.intl.string(eb.t["5spYuX"]);
                                            case t6.vI.OVERWHELMINGLY_NEGATIVE:
                                                return eb.intl.string(eb.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != r &&
                                    u !== t6.vI.NO_USER_REVIEWS &&
                                    (0, i.jsx)(X.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: eb.intl
                                            .format(eb.t.sgIoin, { rating_count: r.toLocaleString() })
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
function na(e) {
    let { game: t, url: n, trackAction: l } = e,
        { reviews: s } = t,
        r = s?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        u = r.topCriticRatingCount ?? -1,
        d = (o <= 0 || u <= 0) && null == c,
        m = (0, eq.A)(),
        x = a.useCallback(() => {
            l(O.Ws.OpenCriticReviews), m(n);
        }, [m, l, n]);
    return (0, i.jsx)(z.D, {
        onClick: x,
        className: nl.nf,
        role: "link",
        "aria-label": eb.intl.string(eb.t.aLNBAw),
        children: (0, i.jsxs)("div", {
            className: nl.Ur,
            children: [
                (0, i.jsx)(K.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: eb.intl.string(eb.t["UxvER+"]),
                }),
                (0, i.jsxs)("div", {
                    className: nl.WA,
                    children: [
                        null != c ? (0, i.jsx)(ns, { tier: c }) : null,
                        null != c && o > 0 && u > 0 ? (0, i.jsx)(nr, { rating: o, tier: c }) : null,
                        d
                            ? (0, i.jsx)(X.E, {
                                  variant: "text-xs/medium",
                                  color: t7(t6.vI.NO_USER_REVIEWS),
                                  children: eb.intl.string(eb.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function ns(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case ne.MIGHTY:
                    return eb.intl.string(eb.t.aZej2g);
                case ne.STRONG:
                    return eb.intl.string(eb.t.MLxnSg);
                case ne.FAIR:
                    return eb.intl.string(eb.t["3f19KA"]);
                case ne.WEAK:
                    return eb.intl.string(eb.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case ne.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case ne.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case ne.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case ne.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, i.jsx)(
        m.m,
        {
            text: n,
            children: (0, i.jsx)("div", {
                className: nl.TE,
                children: (0, i.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function nr(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: a } = (function (e) {
            let t = "";
            switch (e) {
                case ne.MIGHTY:
                    t = "#fc430a";
                    break;
                case ne.STRONG:
                    t = "#9e00b4";
                    break;
                case ne.FAIR:
                    t = "#4aa1ce";
                    break;
                case ne.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, i.jsx)(
        m.m,
        {
            text: eb.intl.string(eb.t.Ub4YR1),
            children: (0, i.jsxs)("div", {
                className: nl.TE,
                style: { backgroundColor: a },
                children: [
                    (0, i.jsx)(nn, { rating: t, strokeColor: l }),
                    (0, i.jsx)(X.E, {
                        variant: "text-xs/bold",
                        color: "always-white",
                        className: nl.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let nc = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, nt.I)(t.id),
        a = t.opencriticUrl,
        s = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED && null != l,
        r = t.reviews?.steam,
        c = t9(r?.recentRating, r?.recentRatingCount, !0),
        o = s && c !== t6.vI.NO_USER_REVIEWS,
        d =
            null != r &&
            null != r.localizedRating &&
            null != r.localizedRatingCount &&
            null != r.ratingCount &&
            r.localizedRatingCount >= 200 &&
            r.ratingCount >= 2e3,
        m = d ? r?.localizedRating : r?.rating,
        x = d ? r?.localizedRatingCount : r?.ratingCount,
        h = d ? eb.t["aWb+V4"] : eb.t["8e4LiB"],
        g = t.reviews?.opencritic != null && null != a;
    return s || o || g
        ? (0, i.jsxs)("div", {
              className: nl.uW,
              children: [
                  (0, i.jsx)("div", {
                      className: nl.Gf,
                      children: (0, i.jsx)(K.D, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: eb.intl.string(eb.t.GaAQXP),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: nl.kL,
                      children: [
                          o && null != l
                              ? (0, i.jsx)("div", {
                                    className: nl.WH,
                                    children: (0, i.jsx)(ni, {
                                        url: l,
                                        trackAction: n,
                                        title: eb.intl.string(eb.t.MQGNsN),
                                        rating: r?.recentRating,
                                        ratingCount: r?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          s && null != l
                              ? (0, i.jsx)("div", {
                                    className: nl.WH,
                                    children: (0, i.jsx)(ni, {
                                        url: l,
                                        trackAction: n,
                                        title: eb.intl.string(h),
                                        rating: m,
                                        ratingCount: x,
                                        tooltipVariant: d ? "localized" : "all",
                                    }),
                                })
                              : null,
                          g && null != a
                              ? (0, i.jsx)("div", {
                                    className: nl.WH,
                                    children: (0, i.jsx)(na, { game: t, url: a, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var no = n(859040),
    nu = n(674658),
    nd = n(491438),
    nm = n(561769),
    nx = n(758836),
    nh = n(804163);
let ng = a.createContext({ trackAction: () => {} }),
    nf = (e) => {
        let { skuId: t, aspectRatio: n } = e,
            { product: l } = (0, nu.q)(t, !0),
            s = a.useContext(nm.v3),
            { closeModal: r } = F(),
            { trackAction: c } = a.useContext(ng),
            o = a.useCallback(() => {
                c(O.Ws.DiscordCollectiblesShopItem),
                    r(),
                    (0, no.Cz)({
                        analyticsLocations: [E.A.GAME_PROFILE],
                        analyticsSource: E.A.GAME_PROFILE,
                        initialProductSkuId: t,
                        tab: nx.G2.CATALOG,
                    });
            }, [c, r, t]);
        if (null == l) return null;
        let { flattenProductVariants: u, ...d } = s;
        return (0, i.jsx)(nm.v3.Provider, {
            value: { flattenProductVariants: u ?? !0, ...d },
            children: (0, i.jsx)(nd.A, {
                skuId: t,
                aspectRatio: n,
                cardClassName: nh.N,
                onClickCard: o,
                hideWishlistButton: !0,
                hidePrice: !0,
                hidePrimaryCTA: !0,
                hideSecondaryCTA: !0,
            }),
        });
    };
function nj(e) {
    let { game: t, trackAction: n } = e,
        { closeModal: l } = F(),
        s = (function (e) {
            let { hasFetched: t, skuIds: n } = (0, d.cf)([eg.A], () => ({
                hasFetched: null != e && eg.A.hasShopCollectionBeenFetched(e),
                skuIds: null != e ? eg.A.getShopCollectionSkuIds(e) : void 0,
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || t || eg.A.isShopCollectionFetching(e) || ex(e);
                }, [e, t]),
                n ?? []
            );
        })(t.shopCollectionIds?.[0]),
        r = a.useCallback(() => {
            n(O.Ws.DiscordCollectiblesShop),
                l(),
                (0, no.Cz)({
                    analyticsLocations: [E.A.GAME_PROFILE],
                    analyticsSource: E.A.GAME_PROFILE,
                    tab: nx.G2.CATALOG,
                });
        }, [n, l]),
        c = a.useMemo(() => ({ trackAction: n }), [n]);
    return 0 === s.length
        ? null
        : (0, i.jsx)(ng.Provider, {
              value: c,
              children: (0, i.jsx)(eR, {
                  title: eb.intl.string(eb.t["5DYPT8"]),
                  onClickViewAll: r,
                  children: (0, i.jsx)($.A, { gap: "md", children: s.map((e) => (0, i.jsx)(nf, { skuId: e }, e)) }),
              }),
          });
}
var np = n(871123),
    nv = n(317560),
    nE = n(328100),
    nA = n(627771);
function nI(e) {
    let { skuIds: t, analyticsLocations: n, onCardClick: l } = e,
        s = a.useMemo(() => {
            if (null != l)
                return (e, t) => {
                    let { skuId: n, applicationId: i } = t;
                    e.preventDefault(), l(n, i);
                };
        }, [l]);
    return null == t || 0 === t.length
        ? null
        : (0, i.jsx)($.A, {
              gap: "md",
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: nA.B,
                          children: (0, i.jsx)(nE.A, {
                              positionInSection: t,
                              skuId: e,
                              variant: nE.s.SMALL,
                              analyticsLocations: n,
                              onClick: s,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
function nN(e) {
    let { trackAction: t } = e,
        { socialLayerStorefrontRecommendationsData: n, closeModal: l } = F(),
        { analyticsLocations: s } = (0, A.Ay)([E.A.GAME_PROFILE]),
        r = a.useCallback(() => {
            n?.guildId != null && (t(O.Ws.GameShop), l(), (0, tp.default)({ guildId: n.guildId }));
        }, [n, t, l]),
        c = a.useCallback(
            (e, i) => {
                let a = n?.guildId;
                null != a &&
                    (t(O.Ws.GameShopItem),
                    (0, nv.R)({
                        skuId: e,
                        applicationId: i,
                        isStorefront: !1,
                        analyticsLocations: s,
                        onClose: () => {
                            let { pathname: e, search: t } = location;
                            (0, np.rG)(e, t, i, a) && l();
                        },
                    }));
            },
            [t, l, s, n],
        );
    if (null == n) return null;
    let { skuIds: o } = n;
    return (0, i.jsx)(eR, {
        title: eb.intl.string(eb.t.WDdlUb),
        onClickViewAll: r,
        children: (0, i.jsx)(nI, { skuIds: o, analyticsLocations: s, onCardClick: c }),
    });
}
n(667532);
var nb = n(853022);
let nS = new Set(["1402418703554842694", "356877880938070016"]),
    nR = [M.V.EPICGAMES, M.V.STEAM, M.V.ROBLOX, M.V.BATTLENET, M.V.RIOT, M.V.MINECRAFT];
var nC = n(349361),
    nT = n(924895),
    nL = n(422688),
    nk = n(505200),
    ny = n(695250);
let nO = function (e) {
    switch (e.category) {
        case M.V.STEAM:
            return {
                icon: t3.N,
                text: eb.intl.string(eb.t.FsANs4),
                ariaLabel: eb.intl.string(eb.t["P+ePTG"]),
                action: O.Ws.SteamStoreLink,
                url: e.url,
            };
        case M.V.EPICGAMES:
            return {
                icon: nC.r,
                text: eb.intl.string(eb.t.ZbBMHa),
                ariaLabel: eb.intl.string(eb.t.BwX0UW),
                action: O.Ws.EpicStoreLink,
                url: e.url,
            };
        case M.V.ROBLOX:
            return {
                icon: nT.H,
                text: eb.intl.string(eb.t["pJ+P+h"]),
                ariaLabel: eb.intl.string(eb.t.tYxpdf),
                action: O.Ws.RobloxStoreLink,
                url: e.url,
            };
        case M.V.BATTLENET:
            return {
                icon: nL.a,
                text: eb.intl.string(eb.t["A7grp+"]),
                ariaLabel: eb.intl.string(eb.t.x9at20),
                action: O.Ws.BattlenetStoreLink,
                url: e.url,
            };
        case M.V.RIOT:
            return {
                icon: nk.A,
                text: eb.intl.string(eb.t.h6MapL),
                ariaLabel: eb.intl.string(eb.t["528nvc"]),
                action: O.Ws.RiotStoreLink,
                url: e.url,
            };
        case M.V.MINECRAFT:
            return {
                icon: ny.m,
                text: eb.intl.string(eb.t["HZbmO+"]),
                ariaLabel: eb.intl.string(eb.t.WWTqYn),
                action: O.Ws.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: e8.Y,
                text: eb.intl.string(eb.t["QpN/Iz"]),
                ariaLabel: eb.intl.string(eb.t["8JZmmF"]),
                action: O.Ws.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
var n_ = n(192308);
function nM(e) {
    return (0, i.jsx)(h.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var nG = n(352639);
function nP(e) {
    let t,
        n,
        l,
        i,
        s,
        r =
            ((t = (0, nt.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === em.d3x.XBOX_GAME_PASS && !(0, eG.uJ)(e.id));
                return t?.id == null ? null : (0, nb.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (s = e?.steamReleaseStatus),
            a.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== M.V.EPICGAMES || !!nS.has(l)) &&
                            (e.category !== M.V.STEAM || s !== u.Y.RETIRED_ABANDONED) &&
                            nR.includes(e.category),
                    ) ?? [];
                null == t ||
                    s === u.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === M.V.STEAM) ||
                    e.push({ category: M.V.STEAM, url: t });
                let a = e.sort((e, t) => (e.category === M.V.STEAM ? -1 : +(t.category === M.V.STEAM)));
                return null != n && a.unshift({ category: "XBOX_GAME_PASS", url: n }), a;
            }, [t, i, l, s, n]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function nw(e) {
    let { data: t, trackAction: n } = e,
        l = (0, eq.A)();
    return (0, i.jsx)(nM, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            n(t.action), l(t.url);
        },
    });
}
let nV = function (e) {
    let { game: t, trackAction: l } = e,
        { showsStoreLinks: s, storeWebsites: r } = nP(t),
        c = a.useMemo(() => r.map(nO).filter((e) => null != e), [r]);
    if (!s) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, i.jsx)(nw, { data: e, trackAction: l });
    }
    if (2 === c.length)
        return (0, i.jsxs)("div", {
            className: nG.G,
            children: [(0, i.jsx)(nw, { data: c[0], trackAction: l }), (0, i.jsx)(nw, { data: c[1], trackAction: l })],
        });
    let o = (0, i.jsx)(nM, {
        text: eb.intl.string(eb.t["/hMurx"]),
        "aria-label": eb.intl.string(eb.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: l, trackAction: a } = e;
                (0, n_.openModalLazy)(async () => {
                    let { default: e } = await n.e("76758").then(n.bind(n, 459477));
                    return (n) => (0, i.jsx)(e, { game: t, websiteButtons: l, trackAction: a, ...n });
                });
            })({ game: t, websiteButtons: c, trackAction: l }),
    });
    return r.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, i.jsxs)("div", { className: nG.G, children: [(0, i.jsx)(nw, { data: c[0], trackAction: l }), o] })
        : o;
};
var nD = n(123292);
function nW(e) {
    let { game: t, trackAction: n } = e,
        l = a.useRef(null),
        {
            isExpanded: s,
            showToggle: c,
            handleToggleExpanded: o,
        } = (function (e, t) {
            let [n, l] = a.useState("full");
            a.useEffect(() => {
                let t = e.current;
                if (null == t) return;
                let n = new ResizeObserver(() => {
                    let t = e.current;
                    null != t &&
                        l((e) => ("expanded" === e ? e : t.scrollHeight - t.clientHeight > 1 ? "collapsed" : "full"));
                });
                return n.observe(t), () => n.disconnect();
            }, [e]);
            let i = a.useCallback(() => {
                "expanded" === n
                    ? (t(O.Ws.ShowLess), l("collapsed"))
                    : "collapsed" === n && (t(O.Ws.ShowMore), l("expanded"));
            }, [t, n]);
            return {
                isExpanded: "expanded" === n,
                showToggle: "expanded" === n || "collapsed" === n,
                handleToggleExpanded: i,
            };
        })(l, n),
        { isTwoColumn: u } = F(),
        d = a.useMemo(() => (u ? 8 : 5), [u]);
    if (null == t.description) return null;
    let m = s ? eb.intl.string(eb.t["6MwJo/"]) : eb.intl.string(eb.t.lBeKY2);
    return (0, i.jsxs)("div", {
        className: r()(e3.fi, e3.mX),
        children: [
            (0, i.jsx)(X.E, { ref: l, lineClamp: s ? void 0 : d, variant: "text-md/medium", children: t.description }),
            c && (0, i.jsx)(nD.Q, { onClick: o, text: m }),
        ],
    });
}
function nY(e) {
    let { game: t, trackAction: n } = e;
    return (0, i.jsxs)("div", {
        className: e3.oC,
        children: [
            (0, i.jsxs)("div", {
                className: e3.lM,
                children: [(0, i.jsx)(t2, { game: t, trackAction: n }), (0, i.jsx)(nW, { game: t, trackAction: n })],
            }),
            (0, i.jsx)(e_, { gameId: t.id, trackAction: n }),
            (0, i.jsx)(nN, { trackAction: n }),
            (0, i.jsx)(nj, { game: t, trackAction: n }),
        ],
    });
}
function nU(e) {
    let { game: t, trackAction: n, analyticsLocations: l } = e,
        a = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: e3.V0,
        children: [
            (0, i.jsx)(t2, { game: t, trackAction: n }),
            (0, i.jsxs)("div", {
                className: e3.gr,
                children: [
                    (0, i.jsx)(tF, { game: t, isTwoColumn: !1 }),
                    (0, i.jsxs)("div", {
                        className: e3.E1,
                        children: [
                            (0, i.jsx)(nV, { game: t, trackAction: n }),
                            (0, i.jsx)(nW, { game: t, trackAction: n }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(tK, { analyticsLocations: l, trackAction: n }),
            (0, i.jsx)(ta, { trackAction: n }),
            (0, i.jsx)(e_, { gameId: t.id, trackAction: n }),
            (0, i.jsx)(nN, { trackAction: n }),
            (0, i.jsx)(nj, { game: t, trackAction: n }),
            a && (0, i.jsx)(nc, { game: t, trackAction: n }),
            (0, i.jsx)(tt, { game: t, trackAction: n }),
        ],
    });
}
function nF(e) {
    let { onCloudPlayClick: t, analyticsLocations: n, trackAction: l } = e,
        { closeModal: s } = F();
    (0, I.A)({
        name: c.ImpressionNames.CLOUD_PLAY_CTA,
        type: c.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let r = a.useCallback(() => {
        l(O.Ws.CloudPlay), s(), t();
    }, [s, t, l]);
    return (0, i.jsx)(m.m, {
        text: eb.intl.string(eb.t.JVwWva),
        position: "top",
        children: (0, i.jsx)(h.$, {
            icon: g.h,
            text: eb.intl.string(eb.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: r,
            fullWidth: !0,
        }),
    });
}
function nB(e) {
    let { game: t, trackAction: n, analyticsLocations: l } = e,
        { isCloudPlayButtonShown: a, onCloudPlayClick: s } = (function (e) {
            let { gameId: t, analyticsLocations: n } = e,
                l = (0, b.h)(t),
                i = (0, v.A)({ application: l, analyticsLocations: n }),
                [a] = (0, L.L)(t);
            return { onCloudPlayClick: i, isCloudPlayButtonShown: !a && null != i };
        })({ gameId: t.id, analyticsLocations: l }),
        { showsStoreLinks: c } = nP(t),
        o = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: r()(e3.Pn, e3.fi, e3.iH, c ? e3.sV : e3.gF),
        children: [
            a && null != s
                ? (0, i.jsx)("div", {
                      className: e3.NC,
                      children: (0, i.jsx)(nF, { onCloudPlayClick: s, analyticsLocations: l, trackAction: n }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: e3.V0,
                children: [
                    (0, i.jsx)(nV, { game: t, trackAction: n }),
                    (0, i.jsx)(tK, { analyticsLocations: l, trackAction: n }),
                    (0, i.jsx)(ta, { trackAction: n }),
                    o && (0, i.jsx)(nc, { game: t, trackAction: n }),
                    (0, i.jsx)(tt, { game: t, trackAction: n }),
                ],
            }),
        ],
    });
}
let nH = function (e) {
    let {
            gameId: t,
            source: n,
            sourceUserId: l,
            transitionState: s,
            onClose: c,
            appContext: u,
            trackExternalAction: m,
            initialScrollOffset: h,
        } = e,
        [g, v] = a.useState(!0),
        [I, L] = a.useState(null),
        { clientThemesClassName: M } = (0, S.Ay)(),
        G = (0, d.bG)([y.default], () => y.default.locale),
        P = a.useMemo(() => (0, O.u9)(), []),
        { analyticsLocations: F } = (0, A.Ay)(E.A.GAME_PROFILE),
        B = (0, _.s)(t),
        { data: H } = (0, T.I)(t),
        z = H?.name ?? "",
        X = a.useRef(null);
    a.useEffect(() => {
        X.current = I;
    }, [I]);
    let {
            hasAlreadyLinked: K,
            canStartAuthorization: J,
            fetched: $,
            startAuthorization: q,
            connectionApp: Z,
        } = (0, N.RD)(H),
        { invite: Q, isMember: ee } = w(H, L),
        { socialLayerStorefrontRecommendationsData: et } = (function (e) {
            let t = Y.default.getCurrentUser()?.id,
                n = a.useMemo(() => (null != t ? [t] : []), [t]),
                l = (0, d.bG)([V.A], () => (null != e ? V.A.getApplicationIdFromDetectableId(e) : void 0)),
                i = (0, b.h)(l),
                s = a.useMemo(() => (null != l ? [l] : []), [l]),
                { recommendations: r, status: c } = (0, W.XQ)({
                    applicationIds: s,
                    userIds: n,
                    numItems: 6,
                    source: D.B5.USER_PROFILE,
                });
            return {
                socialLayerStorefrontRecommendationsData: a.useMemo(
                    () =>
                        null == i || null == i.guildId || "success" !== c || 0 === r.length
                            ? null
                            : { application: i, skuIds: r.map((e) => e.id), guildId: i.guildId },
                    [i, c, r],
                ),
            };
        })(t),
        en = (e, l) => {
            let { guildId: i, isVerified: a } = (0, O.VO)(X.current);
            (0, O.Tn)({
                gameName: z,
                gameId: t,
                action: e,
                similarGameId: l,
                viewId: P,
                guildId: i,
                isVerified: a,
                source: n,
            });
        };
    (0, p.Ay)(() => {
        (0, O.rw)({ source: n, viewId: P, gameId: t, gameName: z, authorId: l, profileType: O.HV.FullProfile }),
            (0, R.He)();
    }),
        (0, p.Ay)(() => () => {
            let { isVerified: e, guildId: n } = (0, O.VO)(X.current),
                l = Date.now(),
                i = B.map((e) => {
                    let t = (0, C.JM)(e) ? (0, C.W6)(e, l) : (0, C.aJ)(e, G);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, O.V_)({
                viewId: P,
                gameId: t,
                gameName: z,
                playedFriendIds: B.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: [],
                guildId: n,
                isVerified: e,
            });
        });
    let el = a.useCallback((e) => {
            v(e.contentRect.width >= 800);
        }, []),
        ei = (0, o.w)(el, [], { fireOnMount: !0 }),
        ea = a.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                c(), e && (0, k.closeUserProfileModal)();
            },
            [c],
        ),
        es = a.useRef(null),
        er = a.useCallback(() => es.current?.getScrollerNode()?.scrollTop ?? 0, []),
        ec = a.useMemo(
            () => ({
                isTwoColumn: g,
                canStartAuthorization: J,
                hasAlreadyLinked: K,
                fetchedAuthorization: $,
                startAuthorization: q,
                connectionApp: Z,
                invite: Q,
                isMember: ee,
                socialLayerStorefrontRecommendationsData: et,
                closeModal: ea,
                getScrollOffset: er,
            }),
            [g, J, K, $, q, Z, Q, ee, et, ea, er],
        ),
        [eo, eu] = a.useState(!1),
        [ed, em] = a.useState(150),
        ex = a.useRef(null);
    a.useEffect(() => {
        null != h && h > 0 && es.current?.getScrollerNode()?.scrollTo({ top: h, behavior: "instant" });
    }, []);
    let eh = a.useCallback(
        (e) => {
            let t = e.currentTarget.scrollTop;
            if (null != ex.current) {
                let e = Math.max(0, 1 - t / 150);
                ex.current.style.opacity = String(e);
            }
            eu(t >= ed);
        },
        [ed],
    );
    return null == H
        ? null
        : (0, i.jsx)(A.f5, {
              value: F,
              children: (0, i.jsx)(x.N, {
                  transitionState: s,
                  onClose: c,
                  children: (0, i.jsx)(U.Provider, {
                      value: ec,
                      children: (0, i.jsxs)("div", {
                          className: r()(M, e3.kL),
                          ref: ei,
                          children: [
                              (0, i.jsx)(tW, { game: H, ref: ex }),
                              (0, i.jsx)(tV, { game: H, show: eo, trackAction: en }),
                              (0, i.jsx)(tD, { show: eo }),
                              (0, i.jsxs)(f.Ch, {
                                  ref: es,
                                  onScroll: eh,
                                  children: [
                                      (0, i.jsx)(tB, {
                                          game: H,
                                          onSetCompactBarScrollThreshold: em,
                                          showCompactBar: eo,
                                      }),
                                      (0, i.jsx)(j.F, {
                                          children: g
                                              ? (0, i.jsxs)("div", {
                                                    className: e3.jC,
                                                    children: [
                                                        (0, i.jsx)(nY, { game: H, trackAction: en }),
                                                        (0, i.jsx)(nB, {
                                                            game: H,
                                                            appContext: u,
                                                            source: n,
                                                            trackExternalAction: m,
                                                            trackAction: en,
                                                            analyticsLocations: F,
                                                        }),
                                                    ],
                                                })
                                              : (0, i.jsx)("div", {
                                                    className: e3.b9,
                                                    children: (0, i.jsx)(nU, {
                                                        game: H,
                                                        trackAction: en,
                                                        analyticsLocations: F,
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
};
