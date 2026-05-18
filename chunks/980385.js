l.d(t, { default: () => lz });
var n,
    i = l(627968),
    a = l(64700),
    s = l(503698),
    r = l.n(s),
    c = l(562708),
    o = l(535185),
    u = l(792216),
    d = l(17928),
    m = l(990078),
    x = l(521489),
    h = l(821609),
    g = l(414499),
    f = l(689175),
    j = l(707554),
    p = l(964486),
    v = l(737393),
    E = l(793574),
    A = l(688810),
    I = l(139286),
    N = l(46225),
    b = l(429913),
    S = l(590703),
    C = l(180170),
    R = l(832384),
    T = l(569926),
    L = l(928550),
    k = l(975732),
    y = l(773669),
    O = l(409626),
    _ = l(205184),
    M = l(505779),
    G = l(970163),
    P = l(184989);
let w = function (e, t) {
    let [l, n] = a.useState(),
        i = a.useRef(null),
        s = a.useRef(t);
    a.useEffect(() => {
        s.current = t;
    }, [t]);
    let r = (0, d.bG)([P.A], () => l?.guild?.id != null && P.A.isMember(l?.guild?.id)),
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
                    !0 !== e.banned && ((i.current = t), n(e.invite), null != e.invite && s.current?.(e.invite));
                }
            };
            null != c && e(c.url);
        }, [c]),
        { invite: l, isMember: r }
    );
};
var V = l(832163),
    D = l(561794),
    W = l(862772),
    Y = l(287809);
let U = a.createContext(void 0);
function F() {
    let e = a.useContext(U);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var B = l(621466),
    H = l(966697),
    z = l(939249),
    X = l(834730),
    K = l(534514),
    J = l(460905),
    $ = l(449543),
    q = l(46054),
    Z = l(58703);
l(321073);
var Q = l(155718),
    ee = l(731068),
    et = l(59318),
    el = l(320095),
    en = l(383233),
    ei = l(998218);
let ea = /^#{1,3}\s+(.+)$/,
    es = /^https?:\/\/\S+$/;
function er(e) {
    let t = ei.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
var ec = l(60465),
    eo = l(636537),
    eu = l(228366);
l(913122);
var ed = l(371794),
    em = l(652215);
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
            let l = {};
            t?.limit != null && (l.limit = t.limit);
            let n = (await eo.Bo.get({ url: em.Rsh.GAME_ANNOUNCEMENTS(e), query: l, rejectWithError: !1 })).body;
            eu.h.dispatch({
                type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
                gameId: e,
                messages: n.messages.map((e) => {
                    let t,
                        l,
                        n = (0, el.rh)(e),
                        i = n.content,
                        a = (function (e) {
                            if ((0, en._c)(e))
                                return e.components
                                    .filter((e) => e.type === Q.I5.TEXT_DISPLAY)
                                    .map((e) => e.content)
                                    .join("\n");
                            let t = e.content;
                            return 0 === t.length || es.test(t.trim())
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
                            if ((0, en._c)(e)) {
                                let t = e.components.find((e) => e.type === Q.I5.MEDIA_GALLERY),
                                    l = t?.items[0]?.media;
                                if (null != l) {
                                    let t = (0, ee.FE)(l);
                                    if ("INVALID" !== t) return { ...l, type: t, sourceMetadata: { message: e } };
                                }
                            }
                            let t = e.attachments.find((e) => (0, et.tT)(e.content_type));
                            if (null != t) return (0, ee.Rr)(t, e);
                            let l = e.attachments.find((e) => (0, et.XB)(e.content_type));
                            if (null != l) return (0, ee.Rr)(l, e);
                            let n = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                            if (n?.thumbnail != null)
                                return (0, ee.oU)(
                                    n.thumbnail,
                                    {
                                        message: e,
                                        identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === n) },
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
                        })(n),
                        { title: r, body: c } =
                            ((t = a.indexOf("\n")),
                            (l = (-1 === t ? a : a.slice(0, t)).match(ea)),
                            null != l
                                ? { title: l[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                                : { body: a }),
                        o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                        u =
                            a === i || (0, en._c)(n)
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
                        embedSource: u,
                    };
                }),
                channelId: n.channel_id ?? void 0,
                guildId: n.guild_id ?? void 0,
            });
        } catch (t) {
            eu.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
        }
    };
var eg = l(422069),
    ef = l(284009),
    ej = l.n(ef),
    ep = l(376728),
    ev = l(976860),
    eE = l(71393),
    eA = l(449054);
async function eI(e) {
    let { invite: t, guildId: l, channelId: n, messageId: i, analyticsLocationStack: a } = e;
    ej()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((l = t.guild?.id), (r = new Set(t.guild?.features))), null == l)) return;
    let c = eE.A.getGuild(l);
    if (c?.joinedAt == null)
        if (null == r || r.has(em.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, eA.Z2)(
                l,
                {},
                { shouldNavigate: !0, channelId: n, messageId: i, joinSource: em.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await ep.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, ev.pX)(em.BVt.CHANNEL(l, n, i), { sourceLocationStack: a });
}
var eN = l(320448),
    eb = l(375708),
    eS = l(274119);
function eC(e) {
    let { children: t, title: l, onClickViewAll: n } = e;
    return (0, i.jsxs)("div", {
        className: eS.k,
        children: [
            (0, i.jsxs)("div", {
                className: eS.w,
                children: [
                    (0, i.jsx)(K.D, { variant: "heading-lg/medium", children: l }),
                    null != n &&
                        (0, i.jsx)(h.$, {
                            size: "sm",
                            icon: eN._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: n,
                            text: eb.intl.string(eb.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var eR = l(468489),
    eT = l(992595);
function eL(e, t) {
    return q.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function ek(e) {
    let { variant: t, message: l, channelId: n, onCardClick: s } = e,
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
                    return s(l.id);
            },
            [s, l.id],
        ),
        x = l.media?.width != null && l.media?.height != null ? l.media.width / l.media.height : 16 / 9,
        h = l.media?.proxyUrl ?? l.media?.url,
        g = (null != h ? er(h) : null) ?? h,
        { embedSource: f } = l;
    return null == f
        ? null
        : (0, i.jsx)(z.D, {
              className: u ? eR.jI : eR.IU,
              onClick: m,
              children: (0, i.jsxs)("div", {
                  className: u ? eR.GT : eR.s4,
                  children: [
                      null != f.url &&
                          (0, i.jsx)(X.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: eR.Ow,
                              children: f.url,
                          }),
                      (0, i.jsxs)("div", {
                          className: eR._d,
                          style: null != f.color ? { borderInlineStartColor: f.color } : void 0,
                          children: [
                              null != f.authorName &&
                                  (0, i.jsxs)("div", {
                                      className: eR.Tu,
                                      children: [
                                          null != f.authorIconUrl &&
                                              (0, i.jsx)("img", {
                                                  src: f.authorIconUrl,
                                                  className: eR.SG,
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
                              null != l.media &&
                                  null != g &&
                                  (0, i.jsx)("div", {
                                      className: eR.ax,
                                      children: (0, i.jsx)(H.y, {
                                          readyState: c ? em.Rv1.READY : em.Rv1.LOADING,
                                          aspectRatio: x,
                                          placeholder: l.media.placeholder,
                                          placeholderVersion: l.media.placeholderVersion,
                                          placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                                          children: (0, i.jsx)("img", {
                                              src: g,
                                              className: eR.Lw,
                                              alt: "",
                                              draggable: !1,
                                              onLoad: d,
                                          }),
                                      }),
                                  }),
                              null != l.title &&
                                  (0, i.jsx)(K.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: u ? eR.KX : eR._N,
                                      children: eL(l.title, n),
                                  }),
                              l.body.length > 0 &&
                                  (0, i.jsxs)("div", {
                                      className: r()(eR.h_, eT.PT),
                                      children: [eL(l.body, n), (0, i.jsx)("div", { className: eR.fm })],
                                  }),
                              (0, i.jsxs)("div", {
                                  className: eR.ov,
                                  children: [
                                      null != f.providerIconUrl &&
                                          (0, i.jsx)("img", {
                                              src: f.providerIconUrl,
                                              className: eR.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, i.jsxs)(X.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != f.providerName ? `${f.providerName} \xb7 ` : "",
                                              (0, Z.i$)(new Date(l.timestamp), "LL"),
                                          ],
                                      }),
                                      l.reactionCount > 0 &&
                                          (0, i.jsxs)("div", {
                                              className: eR.a5,
                                              children: [
                                                  (0, i.jsx)(J.n, { size: "xs", color: "currentColor" }),
                                                  (0, i.jsx)(X.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(eb.intl.currentLocale).format(
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
function ey(e) {
    let { variant: t, message: l, channelId: n, onCardClick: s } = e,
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
                    return s(l.id);
            },
            [s, l.id],
        ),
        x = l.media?.width != null && l.media?.height != null ? l.media.width / l.media.height : 16 / 9,
        h = l.media?.proxyUrl ?? l.media?.url,
        g = (null != h ? er(h) : null) ?? h,
        f = null != l.media && null != g;
    return (0, i.jsxs)(z.D, {
        className: r()({ [eR.cG]: u && f, [eR.jI]: u && !f, [eR.IU]: !u }),
        onClick: m,
        children: [
            null != l.media &&
                null != g &&
                (0, i.jsx)("div", {
                    className: u ? eR._v : eR.eZ,
                    children: (0, i.jsx)(H.y, {
                        readyState: c ? em.Rv1.READY : em.Rv1.LOADING,
                        aspectRatio: x,
                        placeholder: l.media.placeholder,
                        placeholderVersion: l.media.placeholderVersion,
                        placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                        children: (0, i.jsx)("img", {
                            src: g,
                            className: u ? eR.fk : eR.v,
                            alt: "",
                            draggable: !1,
                            onLoad: d,
                        }),
                    }),
                }),
            (0, i.jsxs)("div", {
                className: u ? eR.GT : eR.s4,
                children: [
                    null != l.title &&
                        (0, i.jsx)(K.D, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            className: u ? eR.KX : eR._N,
                            children: eL(l.title, n),
                        }),
                    l.body.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: r()(eR.h_, eT.PT),
                            children: [eL(l.body, n), (0, i.jsx)("div", { className: eR.fm })],
                        }),
                    (0, i.jsxs)("div", {
                        className: eR.ov,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: (0, Z.i$)(new Date(l.timestamp), "LL"),
                            }),
                            l.reactionCount > 0 &&
                                (0, i.jsxs)("div", {
                                    className: eR.a5,
                                    children: [
                                        (0, i.jsx)(J.n, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(X.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            children: new Intl.NumberFormat(eb.intl.currentLocale).format(
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
function eO(e) {
    return null != e.message.embedSource ? (0, i.jsx)(ek, { ...e }) : (0, i.jsx)(ey, { ...e });
}
function e_(e) {
    let { gameId: t, trackAction: l } = e,
        { analyticsLocations: n } = (0, A.Ay)(),
        { invite: s, closeModal: r, getScrollOffset: c } = F(),
        {
            messages: o,
            guildId: u,
            channelId: m,
        } = (function (e) {
            let {
                data: t,
                hasFetched: l,
                isFetching: n,
            } = (0, d.cf)([eg.A], () => ({
                data: null != e ? eg.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && eg.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && eg.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || l || eg.A.isAnnouncementsFetching(e) || eh(e);
                }, [e, l]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: n }
            );
        })(t),
        x = a.useCallback(() => {
            let e = s?.guild?.id ?? u;
            null != e &&
                null != m &&
                (l(O.Ws.Announcements),
                ec.A.setGameProfilePendingReturn({ gameId: t, channelId: m, initialScrollOffset: c() }),
                r(),
                eI({ invite: s, guildId: e, channelId: m, analyticsLocationStack: n }));
        }, [l, r, c, s, u, m, n, t]),
        h = a.useCallback(
            (e) => {
                let i = s?.guild?.id ?? u;
                null != i &&
                    null != m &&
                    (l(O.Ws.AnnouncementsItem),
                    ec.A.setGameProfilePendingReturn({ gameId: t, channelId: m, initialScrollOffset: c() }),
                    r(),
                    eI({ invite: s, guildId: i, channelId: m, messageId: e, analyticsLocationStack: n }));
            },
            [l, r, c, s, u, m, n, t],
        );
    if (null == m || 0 === o.length) return null;
    let g = 2 !== o.length,
        f = g ? o[0] : null,
        j = g ? o.slice(1) : o;
    return (0, i.jsx)(eC, {
        title: eb.intl.string(eb.t.B0BV3Y),
        onClickViewAll: x,
        children: (0, i.jsxs)("div", {
            className: eR.f3,
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
var eM = l(541830),
    eG = l(240248);
let eP = [M.V.OFFICIAL, M.V.FACEBOOK, M.V.TWITTER, M.V.INSTAGRAM, M.V.YOUTUBE, M.V.BLUESKY, M.V.REDDIT, M.V.TWITCH];
var ew = l(808380);
let eV = [ew.Y.DESKTOP, ew.Y.XBOX, ew.Y.PLAYSTATION, ew.Y.NINTENDO];
var eD = l(349288),
    eW = l(975807),
    eY = l(194362);
function eU(e) {
    let { game: t, trackAction: l } = e,
        n = a.useCallback(async () => {
            l(O.Ws.ClaimGame);
            let e = await (0, eY.a)(em.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, eW.A)(e);
        }, [l]),
        s = a.useCallback((e) => (0, i.jsx)(eD.Anchor, { onClick: n, children: e }), [n]);
    return t.linkedApplications?.some((e) => e.type === Q.Mh.OFFICIAL)
        ? null
        : (0, i.jsx)(X.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: eb.intl.format(eb.t.KAjfKl, { claimLink: s }),
          });
}
var eF = l(998445),
    eB = l(274997),
    eH = l(80500),
    ez = l(319745),
    eX = l(488225),
    eK = l(967492),
    eJ = l(72265),
    e$ = l(454346),
    eq = l(37948),
    eZ = l(262420);
let eQ = { size: "xs", colorClass: eZ.wP };
function e0(e) {
    let { website: t, trackAction: l } = e,
        n = (0, eq.A)(),
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
            l(s), n(t.url);
        }, [s, n, l, t.url]);
    return (0, i.jsx)(m.m, {
        text: c,
        children: (0, i.jsx)(z.D, { onClick: o, className: eZ.yO, title: c, children: r }),
    });
}
var e1 = l(31300),
    e8 = l(802516),
    e4 = l(22363),
    e2 = l(418524),
    e5 = l(141535);
function e3(e) {
    let { platform: t, ...l } = e;
    switch (t) {
        case ew.Y.DESKTOP:
            return (0, i.jsx)(e1.k, { size: "xs", ...l });
        case ew.Y.XBOX:
            return (0, i.jsx)(e8.Y, { size: "xs", ...l });
        case ew.Y.PLAYSTATION:
            return (0, i.jsx)(e4.X, { size: "xs", ...l });
        case ew.Y.NINTENDO:
            return (0, i.jsx)(e2.M, { size: "xs", ...l });
        default:
            return null;
    }
}
function e9(e) {
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
            children: (0, i.jsx)(e3, { platform: t }),
        },
        t,
    );
}
var e6 = l(424994),
    e7 = l(60541);
function te() {
    return (0, i.jsx)(X.E, { variant: "text-sm/normal", color: "text-subtle", children: eb.intl.string(eb.t.GruYxV) });
}
let tt = function (e) {
    let { game: t, trackAction: l } = e,
        n = a.useMemo(() => t.genres.map(eM.du).join(", "), [t]),
        s = t.getCompanyByRole(Q.wk.PUBLISHER),
        r = t.getCompanyByRole(Q.wk.DEVELOPER),
        c = s.map((e) => e.name).join(", "),
        o = r.map((e) => e.name).join(", "),
        u = t.firstReleaseDate,
        d = a.useMemo(() => {
            let e = new Set(t.platforms),
                l = [...e];
            return (
                !e.has(ew.Y.DESKTOP) && (e.has(ew.Y.MACOS) || e.has(ew.Y.LINUX)) && l.push(ew.Y.DESKTOP),
                l.filter((e) => eV.includes(e)).sort((e, t) => eV.indexOf(e) - eV.indexOf(t))
            );
        }, [t.platforms]),
        m = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return eP.includes(t);
            })
            .sort((e, t) => eP.indexOf(e.category) - eP.indexOf(t.category)),
        x = !(0, eG.uJ)(n),
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
                                      children: n,
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
                                      children: d.map((e) => (0, i.jsx)(e9, { platform: e }, e)),
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
                                      children: m.map((e) => (0, i.jsx)(e0, { website: e, trackAction: l }, e.url)),
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
                                children: eb.intl.format(eb.t.XPFZVl, { igdbLink: e6.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: e7.OQ, children: (0, i.jsx)(eU, { game: t, trackAction: l }) }),
        ],
    });
};
var tl = l(714991),
    tn = l(486020),
    ti = l(552523);
function ta(e) {
    let { trackAction: t, closeModal: l } = e,
        { canStartAuthorization: n, hasAlreadyLinked: s, invite: r, isMember: c } = F(),
        o = a.useCallback(() => {
            null != r &&
                (t(O.Ws.JoinServer),
                l(),
                eu.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: r, code: r.code, context: em.BRT.APP }));
        }, [r, t, l]);
    if (null == r || null == r.guild) return null;
    let u = tn.Ay.getGuildIconURL({ id: r.guild.id, icon: r.guild.icon, size: 48 }),
        d = tn.Ay.getGuildSplashURL({ id: r.guild.id, splash: r.guild.splash }),
        m = (n && !s) || null == d,
        x = (0, i.jsx)("img", {
            className: ti.$f,
            src: u,
            alt: eb.intl.formatToPlainString(eb.t.xm6W9D, { guildName: r.guild.name }),
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
                                                    (0, i.jsx)(tl.A, { guild: r.guild, size: 16 }),
                                                    (0, i.jsx)(K.D, {
                                                        variant: "heading-md/semibold",
                                                        color: "text-default",
                                                        children: r.guild.name,
                                                    }),
                                                ],
                                            }),
                                            !(0, eG.uJ)(r.guild?.description) &&
                                                (0, i.jsx)(X.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: r.guild?.description,
                                                }),
                                            null != r.approximate_member_count || null != r.approximate_presence_count
                                                ? (0, i.jsxs)("div", {
                                                      className: ti.iR,
                                                      children: [
                                                          null != r.approximate_presence_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: ti.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: ti._o }),
                                                                      (0, i.jsx)(X.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: eb.intl.format(eb.t["LC+S+m"], {
                                                                              membersOnline:
                                                                                  r.approximate_presence_count,
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          null != r.approximate_member_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: ti.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: ti.jk }),
                                                                      (0, i.jsx)(X.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: eb.intl.format(eb.t.zRl6XR, {
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
                            (0, i.jsx)(h.$, {
                                variant: "secondary",
                                text: c ? eb.intl.string(eb.t.cEnaWx) : eb.intl.string(eb.t.XpeFYr),
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
var ts = l(369606),
    tr = l(459746),
    tc = l(922016),
    to = l(980707),
    tu = l(477782),
    td = l(663341),
    tm = l(408278),
    tx = l(34188),
    th = l(365199),
    tg = l(789645),
    tf = l(442433),
    tj = l(50268),
    tp = l(44724),
    tv = l(67518),
    tE = l(540185),
    tA = l(926268),
    tI = l(53788),
    tN = l(831453),
    tb = l(785866),
    tS = l(555704),
    tC = l(457965),
    tR = l(47675),
    tT = l(633075),
    tL = l(289173),
    tk = l(841595),
    ty = l(958805),
    tO = l(735321),
    t_ = l(495544),
    tM = l(760751);
async function tG(e) {
    let t = e((0, tO.BF)());
    await ty.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function tP(e) {
    let { game: t, onClose: l, className: n, trackAction: s } = e,
        r = a.useRef(null),
        c = a.useRef(null),
        o = (0, tj.A)({ id: t.id, label: eb.intl.string(eb.t.SHQGPj) }),
        u = (0, tv.n)(t.id, s),
        x = (function (e) {
            let t = e?.id,
                l = e?.name ?? "",
                n = (0, d.bG)([t_.default], () => t_.default.getId()),
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
                c = (0, d.yK)([tk.A], () => (null == n ? [] : (tk.A.getUserProfile(n)?.widgets ?? [])), [n]),
                o = (0, tC.w$)({ location: "game-profile-overflow-menu" }),
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
                    async (e, l) => {
                        let n = null;
                        if (
                            (await tG((i) => {
                                let a = i.filter(tL.fu).find((t) => t.type === e) ?? null;
                                if (l) {
                                    if (a?.games.some((e) => e.applicationId === t) || (null != a && (0, tO.uA)(a)))
                                        return i;
                                    let l = { applicationId: t },
                                        s = null != a ? [l, ...(a.games ?? [])] : [l];
                                    n = new tL.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.applicationId !== t);
                                    n = new tL.Yy({ ...a, games: e });
                                }
                                var s = n;
                                let r = i.findIndex((e) => e.getUniqueKey() === s.getUniqueKey());
                                if (-1 === r) return [s, ...i];
                                let c = [...i];
                                return (c[r] = s), c;
                            }),
                            null == n)
                        )
                            return;
                        let i = n;
                        (0, tR.un)({
                            action: l ? "GAME_ADDED" : "GAME_REMOVED",
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
                            (await tG((l) =>
                                e
                                    ? l.some((e) => e instanceof tT.R && e.applicationId === u)
                                        ? l
                                        : [(t = new tT.R({ applicationId: u })), ...l]
                                    : ((t = l.find((e) => e instanceof tT.R && e.applicationId === u) ?? null),
                                      l.filter((e) => !(e instanceof tT.R && e.applicationId === u))),
                            ),
                            null == t)
                        )
                            return;
                        let l = t;
                        (0, tR.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...l.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [u],
                );
            if (null == n) return null;
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
                                ? eb.intl.formatToPlainString(eb.t.Ktb1n8, { name: l })
                                : eb.intl.formatToPlainString(eb.t.Xp6iZt, { name: l }),
                            action: () => x(!e),
                            leadingAccessory: { type: "icon", icon: tS.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (h)
                for (let e of r) {
                    let l = c.filter(tL.fu).find((t) => t.type === e.type) ?? null,
                        n = null != l && l.games.some((e) => e.applicationId === t),
                        a = !n && null != l && (0, tO.uA)(l);
                    g.push(
                        (0, i.jsx)(
                            tu.Dr,
                            {
                                id: e.menuId,
                                label: n ? e.removeLabel : e.addLabel,
                                subtext: a ? eb.intl.string(eb.t["86OoiH"]) : void 0,
                                subtextLineClamp: 1,
                                action: () => m(e.type, !n),
                                leadingAccessory: { type: "icon", icon: e.icon },
                                disabled: a,
                            },
                            e.type,
                        ),
                    );
                }
            return 0 === g.length ? null : g;
        })(t),
        { invite: g } = F(),
        f = new Set(g?.guild?.features).has(em.GuildFeatures.SOCIAL_LAYER_STOREFRONT),
        j = a.useCallback(() => {
            null != g && (0, tp.X)({ invite: g });
        }, [g]),
        p = a.useCallback(() => {
            null != g && (s(O.Ws.GameShop), (0, tp.default)({ invite: g }), l());
        }, [g, s, l]);
    return (0, i.jsxs)("div", {
        className: n,
        children: [
            null != x &&
                (0, i.jsx)(tc.Y, {
                    targetElementRef: c,
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
                            children: (0, i.jsx)(tu.rX, { children: x }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: c,
                            children: (0, i.jsx)(h.$, {
                                icon: td.p,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: eb.intl.string(eb.t.sidPSo),
                            }),
                        }),
                }),
            f &&
                null != g &&
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
            (null != o || null != u) &&
                (0, i.jsx)(tc.Y, {
                    targetElementRef: r,
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
                                children: [(0, i.jsx)(tu.rX, { children: u }), (0, i.jsx)(tu.rX, { children: o })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)(m.m, {
                            text: eb.intl.string(eb.t["UKOtz+"]),
                            children: (0, i.jsx)("div", {
                                ...e,
                                ref: r,
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
                onClick: l,
                "aria-label": eb.intl.string(eb.t.cpT0Cq),
            }),
        ],
    });
}
var tw = l(8208);
function tV(e) {
    let { game: t, show: l, onClose: n, trackAction: a } = e,
        s = t.name,
        c = t.getIconURL(80);
    return (0, i.jsxs)("div", {
        className: tw.y5,
        children: [
            (0, i.jsx)("div", { className: r()(tw.nI, l && tw.hD) }),
            (0, i.jsxs)("div", {
                className: r()(tw.A1, l && tw.g8),
                children: [
                    null != c && (0, i.jsx)("img", { src: c, alt: "", className: tw.V$, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: tw.hm,
                        children: [
                            (0, i.jsx)(K.D, { variant: "heading-md/semibold", lineClamp: 1, children: s }),
                            null != t.l30Rank && (0, i.jsx)(tU, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(tP, { game: t, onClose: n, className: tw.HK, trackAction: a }),
        ],
    });
}
function tD(e) {
    let { show: t } = e;
    return (0, i.jsx)("div", { className: r()(tw.nI, tw.Jn, t && tw.hD) });
}
let tW = a.forwardRef(function (e, t) {
    let { game: l } = e,
        [n] = a.useState(() => Math.random()),
        s = a.useMemo(() => {
            if (null != l.bannerHash)
                return tn.Ay.getGameAssetURL({ id: l.id, hash: l.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            if (null != l.screenshotUrls && l.screenshotUrls.length > 0) {
                let e = Math.floor(n * l.screenshotUrls.length);
                return l.screenshotUrls[e];
            }
            return "";
        }, [l.id, l.bannerHash, l.screenshotUrls, n]);
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
        l = (t.genres ?? []).map(eM.du).join(", ");
    return (0, eG.uJ)(l) ? null : (0, i.jsx)(X.E, { variant: "text-md/normal", color: "text-muted", children: l });
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
    let { game: t, isTwoColumn: l } = e;
    return (0, i.jsx)("div", {
        className: l ? tw.n8 : tw.FS,
        children: (0, i.jsx)(tr.A, { game: t, className: tw.xe, size: tr.w.LARGE }),
    });
}
let tB = function (e) {
    let { game: t, onSetCompactBarScrollThreshold: l, showCompactBar: n } = e,
        { isTwoColumn: s } = F(),
        c = a.useRef(null),
        o = a.useRef(null);
    a.useEffect(() => {
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
    let u = t.name;
    return (0, i.jsxs)("div", {
        ref: c,
        className: r()(tw.ap, n && tw.Gh),
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
var tH = l(141628),
    tz = l(289363),
    tX = l(448682);
function tK(e) {
    let { trackAction: t, analyticsLocations: l } = e,
        {
            fetchedAuthorization: n,
            hasAlreadyLinked: s,
            canStartAuthorization: r,
            startAuthorization: c,
            connectionApp: o,
            invite: u,
        } = F(),
        m = (0, d.bG)([Y.default], () => Y.default.getCurrentUser()),
        x = a.useCallback(() => {
            t(O.Ws.LinkAccount), c({ analyticsLocations: l });
        }, [t, c, l]);
    if (!n || null == o || !r || s || null == m) return null;
    let g = u?.guild != null ? tn.Ay.getGuildSplashURL({ id: u.guild.id, splash: u.guild.splash }) : null;
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
var tJ = l(80687),
    t$ = l(775602),
    tq = l(248643),
    tZ = l(256905),
    tQ = l(34337),
    t0 = l(90721),
    t1 = l(616337);
let t8 = a.memo(function (e) {
        let { item: t, index: l, isSelected: n, isPlaying: s, onSelect: c, gameName: o } = e,
            u = a.useCallback(() => c(l), [c, l]);
        return (0, i.jsx)(z.D, {
            className: r()(t1.JS, n && t1.Y4),
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
                            children: (0, i.jsx)(tJ.D, { playing: n && s, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    t4 = a.memo(function (e) {
        let {
                item: t,
                reducedMotion: l,
                videoRef: n,
                mediaPlayerRef: s,
                onPlay: r,
                onPause: c,
                onFullscreenChange: o,
            } = e,
            u = a.useRef(null);
        return (
            (0, t0.A)({ videoRef: n, canvasRef: u, enabled: !l }),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    !l && (0, i.jsx)("canvas", { ref: u, className: t1.HW, "aria-hidden": "true" }),
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
                            autoPlay: !l,
                            autoMute: !0,
                            useFullWidth: !0,
                            responsive: !0,
                            renderLinkComponent: tQ.bU,
                            onPlay: r,
                            onPause: c,
                            onFullscreenChange: o,
                            mediaPlayerClassName: t1.T9,
                            videoRef: n,
                            mediaPlayerRef: s,
                        }),
                    }),
                ],
            })
        );
    });
function t2(e) {
    let { game: t, trackAction: l } = e,
        [n, s] = a.useState(0),
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
        f = g.length > 0 ? Math.min(n, g.length - 1) : 0,
        j = g[f],
        p = j?.type === "VIDEO",
        v = a.useCallback(
            (e) => {
                let t = g[f],
                    l = g[e];
                t?.type === "IMAGE" && l?.type === "IMAGE" && t.url !== l.url ? c(t.url) : c(null), s(e);
            },
            [g, f],
        ),
        [E, A] = a.useState(!1),
        I = a.useRef(null),
        N = a.useCallback(() => {
            l(p ? O.Ws.ClickTrailer : O.Ws.ClickImage);
            let e = m.current,
                t = I.current,
                n = null != e && !e.paused,
                i = e?.muted ?? !0,
                a = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let r = g.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let l = t === f;
                    return { ...e, autoPlay: !!l && n, autoMute: !l || i, initialTimeSec: l ? a : void 0, videoRef: x };
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
                        l = null != e ? !e.paused : n;
                    e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), l && t.setPlay(!0), t.setMuted(e.muted))
                            : l && t?.setPlay(!0),
                        A(l);
                },
            });
        }, [l, g, f, p]),
        b = a.useCallback(() => A(!0), []),
        S = a.useCallback(() => A(!1), []),
        C = a.useCallback(() => c(null), []),
        R = a.useCallback(
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
                                    onFullscreenChange: R,
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
                                            onAnimationEnd: C,
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
                      children: g.map((e, l) =>
                          (0, i.jsx)(
                              t8,
                              { item: e, index: l, isPlaying: E, isSelected: l === f, onSelect: v, gameName: t.name },
                              `${l}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
var t5 = l(49381),
    t3 = l(661531),
    t9 = l(223273);
function t6(e, t, l) {
    if (null == e || null == t || t < 10) return t9.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !l
            ? t9.vI.POSITIVE
            : t < (l ? 100 : 500) || e < 95
              ? t9.vI.VERY_POSITIVE
              : t9.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return t9.vI.MOSTLY_POSITIVE;
    if (e >= 40) return t9.vI.MIXED;
    if (e >= 20) return t9.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !l) return t9.vI.NEGATIVE;
    else if (t < (l ? 100 : 500)) return t9.vI.VERY_NEGATIVE;
    return t9.vI.OVERWHELMINGLY_NEGATIVE;
}
function t7(e) {
    switch (e) {
        case t9.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case t9.vI.OVERWHELMINGLY_POSITIVE:
        case t9.vI.VERY_POSITIVE:
        case t9.vI.POSITIVE:
        case t9.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case t9.vI.MIXED:
            return "steam-review-text-mixed";
        case t9.vI.MOSTLY_NEGATIVE:
        case t9.vI.NEGATIVE:
        case t9.vI.VERY_NEGATIVE:
        case t9.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var le =
        (((n = {})[(n.MIGHTY = 1)] = "MIGHTY"),
        (n[(n.STRONG = 2)] = "STRONG"),
        (n[(n.FAIR = 3)] = "FAIR"),
        (n[(n.WEAK = 4)] = "WEAK"),
        n),
    lt = l(778591);
function ll(e) {
    let { rating: t, strokeColor: l } = e,
        n = 2 * Math.PI * 16,
        a = Math.min(Math.max(t, 0), 100) / 100,
        s = a * n;
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
            stroke: l,
            strokeWidth: 2.4,
            strokeDasharray: `${s} ${n - s}`,
        }),
    });
}
var ln = l(99392);
function li(e) {
    let { url: t, trackAction: l, title: n, rating: s, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, eq.A)(),
        u = t6(s, r, "recent" === c),
        d = t7(u),
        x = a.useCallback(() => {
            l(O.Ws.SteamReviews), o(t);
        }, [o, l, t]);
    return (0, i.jsx)(z.D, {
        onClick: x,
        className: ln.nf,
        role: "link",
        "aria-label": eb.intl.string(eb.t.YNC5Di),
        children: (0, i.jsxs)("div", {
            className: ln.U6,
            children: [
                (0, i.jsxs)("div", {
                    className: ln.tN,
                    children: [
                        (0, i.jsx)(t5.N, { size: "sm", color: t3.A.colors.ICON_STRONG.css }),
                        (0, i.jsx)(K.D, { variant: "heading-sm/medium", color: "text-strong", children: n }),
                    ],
                }),
                (0, i.jsx)(
                    m.m,
                    {
                        text:
                            u === t9.vI.NO_USER_REVIEWS
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
                            className: ln.Z0,
                            children: [
                                (0, i.jsx)(X.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    children: (function (e) {
                                        switch (e) {
                                            case t9.vI.NO_USER_REVIEWS:
                                                return eb.intl.string(eb.t.CLMt8J);
                                            case t9.vI.OVERWHELMINGLY_POSITIVE:
                                                return eb.intl.string(eb.t["75sx1S"]);
                                            case t9.vI.VERY_POSITIVE:
                                                return eb.intl.string(eb.t["EkOVg+"]);
                                            case t9.vI.POSITIVE:
                                                return eb.intl.string(eb.t.ZUkFtr);
                                            case t9.vI.MOSTLY_POSITIVE:
                                                return eb.intl.string(eb.t.M7Z09a);
                                            case t9.vI.MIXED:
                                                return eb.intl.string(eb.t.c8yuHR);
                                            case t9.vI.MOSTLY_NEGATIVE:
                                                return eb.intl.string(eb.t.H0MSjG);
                                            case t9.vI.NEGATIVE:
                                                return eb.intl.string(eb.t.vpLrgz);
                                            case t9.vI.VERY_NEGATIVE:
                                                return eb.intl.string(eb.t["5spYuX"]);
                                            case t9.vI.OVERWHELMINGLY_NEGATIVE:
                                                return eb.intl.string(eb.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != r &&
                                    u !== t9.vI.NO_USER_REVIEWS &&
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
function la(e) {
    let { game: t, url: l, trackAction: n } = e,
        { reviews: s } = t,
        r = s?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        u = r.topCriticRatingCount ?? -1,
        d = (o <= 0 || u <= 0) && null == c,
        m = (0, eq.A)(),
        x = a.useCallback(() => {
            n(O.Ws.OpenCriticReviews), m(l);
        }, [m, n, l]);
    return (0, i.jsx)(z.D, {
        onClick: x,
        className: ln.nf,
        role: "link",
        "aria-label": eb.intl.string(eb.t.aLNBAw),
        children: (0, i.jsxs)("div", {
            className: ln.Ur,
            children: [
                (0, i.jsx)(K.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: eb.intl.string(eb.t["UxvER+"]),
                }),
                (0, i.jsxs)("div", {
                    className: ln.WA,
                    children: [
                        null != c ? (0, i.jsx)(ls, { tier: c }) : null,
                        null != c && o > 0 && u > 0 ? (0, i.jsx)(lr, { rating: o, tier: c }) : null,
                        d
                            ? (0, i.jsx)(X.E, {
                                  variant: "text-xs/medium",
                                  color: t7(t9.vI.NO_USER_REVIEWS),
                                  children: eb.intl.string(eb.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function ls(e) {
    let { tier: t } = e,
        l = (function (e) {
            switch (e) {
                case le.MIGHTY:
                    return eb.intl.string(eb.t.aZej2g);
                case le.STRONG:
                    return eb.intl.string(eb.t.MLxnSg);
                case le.FAIR:
                    return eb.intl.string(eb.t["3f19KA"]);
                case le.WEAK:
                    return eb.intl.string(eb.t.jtVgSh);
            }
        })(t),
        n = (function (e) {
            switch (e) {
                case le.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case le.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case le.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case le.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, i.jsx)(
        m.m,
        {
            text: l,
            children: (0, i.jsx)("div", {
                className: ln.TE,
                children: (0, i.jsx)("img", { src: n, alt: l, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function lr(e) {
    let { rating: t, tier: l } = e,
        { foregroundColor: n, backgroundColor: a } = (function (e) {
            let t = "";
            switch (e) {
                case le.MIGHTY:
                    t = "#fc430a";
                    break;
                case le.STRONG:
                    t = "#9e00b4";
                    break;
                case le.FAIR:
                    t = "#4aa1ce";
                    break;
                case le.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(l);
    return (0, i.jsx)(
        m.m,
        {
            text: eb.intl.string(eb.t.Ub4YR1),
            children: (0, i.jsxs)("div", {
                className: ln.TE,
                style: { backgroundColor: a },
                children: [
                    (0, i.jsx)(ll, { rating: t, strokeColor: n }),
                    (0, i.jsx)(X.E, {
                        variant: "text-xs/bold",
                        color: "always-white",
                        className: ln.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let lc = function (e) {
    let { game: t, trackAction: l } = e,
        n = (0, lt.I)(t.id),
        a = t.opencriticUrl,
        s = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED && null != n,
        r = t.reviews?.steam,
        c = t6(r?.recentRating, r?.recentRatingCount, !0),
        o = s && c !== t9.vI.NO_USER_REVIEWS,
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
              className: ln.uW,
              children: [
                  (0, i.jsx)("div", {
                      className: ln.Gf,
                      children: (0, i.jsx)(K.D, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: eb.intl.string(eb.t.GaAQXP),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: ln.kL,
                      children: [
                          o && null != n
                              ? (0, i.jsx)("div", {
                                    className: ln.WH,
                                    children: (0, i.jsx)(li, {
                                        url: n,
                                        trackAction: l,
                                        title: eb.intl.string(eb.t.MQGNsN),
                                        rating: r?.recentRating,
                                        ratingCount: r?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          s && null != n
                              ? (0, i.jsx)("div", {
                                    className: ln.WH,
                                    children: (0, i.jsx)(li, {
                                        url: n,
                                        trackAction: l,
                                        title: eb.intl.string(h),
                                        rating: m,
                                        ratingCount: x,
                                        tooltipVariant: d ? "localized" : "all",
                                    }),
                                })
                              : null,
                          g && null != a
                              ? (0, i.jsx)("div", {
                                    className: ln.WH,
                                    children: (0, i.jsx)(la, { game: t, url: a, trackAction: l }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var lo = l(859040),
    lu = l(674658),
    ld = l(491438),
    lm = l(561769),
    lx = l(758836),
    lh = l(804163);
let lg = a.createContext({ closeModal: () => {}, trackAction: () => {} }),
    lf = (e) => {
        let { skuId: t, aspectRatio: l } = e,
            { product: n } = (0, lu.q)(t, !0),
            s = a.useContext(lm.v3),
            { closeModal: r, trackAction: c } = a.useContext(lg),
            o = a.useCallback(() => {
                c(O.Ws.DiscordCollectiblesShopItem),
                    r(),
                    (0, lo.Cz)({
                        analyticsLocations: [E.A.GAME_PROFILE],
                        analyticsSource: E.A.GAME_PROFILE,
                        initialProductSkuId: t,
                        tab: lx.G2.CATALOG,
                    });
            }, [c, r, t]);
        if (null == n) return null;
        let { flattenProductVariants: u, ...d } = s;
        return (0, i.jsx)(lm.v3.Provider, {
            value: { flattenProductVariants: u ?? !0, ...d },
            children: (0, i.jsx)(ld.A, {
                skuId: t,
                aspectRatio: l,
                cardClassName: lh.N,
                onClickCard: o,
                hideWishlistButton: !0,
                hidePrice: !0,
                hidePrimaryCTA: !0,
                hideSecondaryCTA: !0,
            }),
        });
    };
function lj(e) {
    let { game: t, closeModal: l, trackAction: n } = e,
        s = (function (e) {
            let { hasFetched: t, skuIds: l } = (0, d.cf)([eg.A], () => ({
                hasFetched: null != e && eg.A.hasShopCollectionBeenFetched(e),
                skuIds: null != e ? eg.A.getShopCollectionSkuIds(e) : void 0,
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || t || eg.A.isShopCollectionFetching(e) || ex(e);
                }, [e, t]),
                l ?? []
            );
        })(t.shopCollectionIds?.[0]),
        r = a.useCallback(() => {
            n(O.Ws.DiscordCollectiblesShop),
                l(),
                (0, lo.Cz)({
                    analyticsLocations: [E.A.GAME_PROFILE],
                    analyticsSource: E.A.GAME_PROFILE,
                    tab: lx.G2.CATALOG,
                });
        }, [n, l]),
        c = a.useMemo(() => ({ closeModal: l, trackAction: n }), [l, n]);
    return 0 === s.length
        ? null
        : (0, i.jsx)(lg.Provider, {
              value: c,
              children: (0, i.jsx)(eC, {
                  title: eb.intl.string(eb.t["5DYPT8"]),
                  onClickViewAll: r,
                  children: (0, i.jsx)($.A, { gap: "md", children: s.map((e) => (0, i.jsx)(lf, { skuId: e }, e)) }),
              }),
          });
}
var lp = l(871123),
    lv = l(317560),
    lE = l(467884),
    lA = l(627771);
function lI(e) {
    let { skuIds: t, analyticsLocations: l, onCardClick: n } = e,
        s = a.useMemo(() => {
            if (null != n)
                return (e, t) => {
                    let { skuId: l, applicationId: i } = t;
                    e.preventDefault(), n(l, i);
                };
        }, [n]);
    return null == t || 0 === t.length
        ? null
        : (0, i.jsx)($.A, {
              gap: "md",
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: lA.B,
                          children: (0, i.jsx)(lE.A, {
                              positionInSection: t,
                              skuId: e,
                              variant: lE.s.SMALL,
                              analyticsLocations: l,
                              onClick: s,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
function lN(e) {
    let { trackAction: t } = e,
        { socialLayerStorefrontRecommendationsData: l, closeModal: n } = F(),
        { analyticsLocations: s } = (0, A.Ay)([E.A.GAME_PROFILE]),
        r = a.useCallback(() => {
            l?.guildId != null && (t(O.Ws.GameShop), n(), (0, tp.default)({ guildId: l.guildId }));
        }, [l, t, n]),
        c = a.useCallback(
            (e, i) => {
                let a = l?.guildId;
                null != a &&
                    (t(O.Ws.GameShopItem),
                    (0, lv.R)({
                        skuId: e,
                        applicationId: i,
                        isStorefront: !1,
                        analyticsLocations: s,
                        onClose: () => {
                            let { pathname: e, search: t } = location;
                            (0, lp.rG)(e, t, i, a) && n();
                        },
                    }));
            },
            [t, n, s, l],
        );
    if (null == l) return null;
    let { skuIds: o } = l;
    return (0, i.jsx)(eC, {
        title: eb.intl.string(eb.t.WDdlUb),
        onClickViewAll: r,
        children: (0, i.jsx)(lI, { skuIds: o, analyticsLocations: s, onCardClick: c }),
    });
}
let lb = (0, l(945810).mj)({
    name: "2025-12-game-profiles-v2",
    kind: "user",
    defaultConfig: { storeLinksEnabled: !1 },
    variations: { 1: { storeLinksEnabled: !1 }, 2: { storeLinksEnabled: !0 } },
});
l(667532);
var lS = l(853022);
let lC = new Set(["1402418703554842694", "356877880938070016"]),
    lR = [M.V.EPICGAMES, M.V.STEAM, M.V.ROBLOX, M.V.BATTLENET, M.V.RIOT, M.V.MINECRAFT];
var lT = l(349361),
    lL = l(924895),
    lk = l(422688),
    ly = l(505200),
    lO = l(695250);
let l_ = function (e) {
    switch (e.category) {
        case M.V.STEAM:
            return {
                icon: t5.N,
                text: eb.intl.string(eb.t.FsANs4),
                ariaLabel: eb.intl.string(eb.t["P+ePTG"]),
                action: O.Ws.SteamStoreLink,
                url: e.url,
            };
        case M.V.EPICGAMES:
            return {
                icon: lT.r,
                text: eb.intl.string(eb.t.ZbBMHa),
                ariaLabel: eb.intl.string(eb.t.BwX0UW),
                action: O.Ws.EpicStoreLink,
                url: e.url,
            };
        case M.V.ROBLOX:
            return {
                icon: lL.H,
                text: eb.intl.string(eb.t["pJ+P+h"]),
                ariaLabel: eb.intl.string(eb.t.tYxpdf),
                action: O.Ws.RobloxStoreLink,
                url: e.url,
            };
        case M.V.BATTLENET:
            return {
                icon: lk.a,
                text: eb.intl.string(eb.t["A7grp+"]),
                ariaLabel: eb.intl.string(eb.t.x9at20),
                action: O.Ws.BattlenetStoreLink,
                url: e.url,
            };
        case M.V.RIOT:
            return {
                icon: ly.A,
                text: eb.intl.string(eb.t.h6MapL),
                ariaLabel: eb.intl.string(eb.t["528nvc"]),
                action: O.Ws.RiotStoreLink,
                url: e.url,
            };
        case M.V.MINECRAFT:
            return {
                icon: lO.m,
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
var lM = l(192308);
function lG(e) {
    return (0, i.jsx)(h.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var lP = l(352639);
function lw(e) {
    let t,
        l,
        n,
        i,
        s,
        r = lb.useConfig({ location: "GameProfileStoreLinks" }).storeLinksEnabled,
        c =
            ((t = (0, lt.I)(e?.id)),
            (l = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === em.d3x.XBOX_GAME_PASS && !(0, eG.uJ)(e.id));
                return t?.id == null ? null : (0, lS.jA)(t.id);
            })(e)),
            (n = e?.id),
            (i = e?.websites),
            (s = e?.steamReleaseStatus),
            a.useMemo(() => {
                if ((null == i && null == l) || null == n) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== M.V.EPICGAMES || !!lC.has(n)) &&
                            (e.category !== M.V.STEAM || s !== u.Y.RETIRED_ABANDONED) &&
                            lR.includes(e.category),
                    ) ?? [];
                null == t ||
                    s === u.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === M.V.STEAM) ||
                    e.push({ category: M.V.STEAM, url: t });
                let a = e.sort((e, t) => (e.category === M.V.STEAM ? -1 : +(t.category === M.V.STEAM)));
                return null != l && a.unshift({ category: "XBOX_GAME_PASS", url: l }), a;
            }, [t, i, n, s, l]));
    return { storeWebsites: c, showsStoreLinks: r && c.length > 0 && null != e };
}
function lV(e) {
    let { data: t, trackAction: l } = e,
        n = (0, eq.A)();
    return (0, i.jsx)(lG, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            l(t.action), n(t.url);
        },
    });
}
let lD = function (e) {
    let { game: t, trackAction: n } = e,
        { showsStoreLinks: s, storeWebsites: r } = lw(t),
        c = a.useMemo(() => r.map(l_).filter((e) => null != e), [r]);
    if (!s) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, i.jsx)(lV, { data: e, trackAction: n });
    }
    if (2 === c.length)
        return (0, i.jsxs)("div", {
            className: lP.G,
            children: [(0, i.jsx)(lV, { data: c[0], trackAction: n }), (0, i.jsx)(lV, { data: c[1], trackAction: n })],
        });
    let o = (0, i.jsx)(lG, {
        text: eb.intl.string(eb.t["/hMurx"]),
        "aria-label": eb.intl.string(eb.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: n, trackAction: a } = e;
                (0, lM.openModalLazy)(async () => {
                    let { default: e } = await l.e("76758").then(l.bind(l, 459477));
                    return (l) => (0, i.jsx)(e, { game: t, websiteButtons: n, trackAction: a, ...l });
                });
            })({ game: t, websiteButtons: c, trackAction: n }),
    });
    return r.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, i.jsxs)("div", { className: lP.G, children: [(0, i.jsx)(lV, { data: c[0], trackAction: n }), o] })
        : o;
};
var lW = l(123292);
function lY(e) {
    let { game: t, trackAction: l } = e,
        n = a.useRef(null),
        {
            isExpanded: s,
            showToggle: c,
            handleToggleExpanded: o,
        } = (function (e, t) {
            let [l, n] = a.useState("full");
            a.useEffect(() => {
                let t = e.current;
                if (null == t) return;
                let l = new ResizeObserver(() => {
                    let t = e.current;
                    null != t &&
                        n((e) => ("expanded" === e ? e : t.scrollHeight - t.clientHeight > 1 ? "collapsed" : "full"));
                });
                return l.observe(t), () => l.disconnect();
            }, [e]);
            let i = a.useCallback(() => {
                "expanded" === l
                    ? (t(O.Ws.ShowLess), n("collapsed"))
                    : "collapsed" === l && (t(O.Ws.ShowMore), n("expanded"));
            }, [t, l]);
            return {
                isExpanded: "expanded" === l,
                showToggle: "expanded" === l || "collapsed" === l,
                handleToggleExpanded: i,
            };
        })(n, l),
        { isTwoColumn: u } = F(),
        d = a.useMemo(() => (u ? 8 : 5), [u]);
    if (null == t.description) return null;
    let m = s ? eb.intl.string(eb.t["6MwJo/"]) : eb.intl.string(eb.t.lBeKY2);
    return (0, i.jsxs)("div", {
        className: r()(e5.fi, e5.mX),
        children: [
            (0, i.jsx)(X.E, { ref: n, lineClamp: s ? void 0 : d, variant: "text-md/medium", children: t.description }),
            c && (0, i.jsx)(lW.Q, { onClick: o, text: m }),
        ],
    });
}
function lU(e) {
    let { game: t, trackAction: l, closeModal: n } = e;
    return (0, i.jsxs)("div", {
        className: e5.oC,
        children: [
            (0, i.jsxs)("div", {
                className: e5.lM,
                children: [(0, i.jsx)(t2, { game: t, trackAction: l }), (0, i.jsx)(lY, { game: t, trackAction: l })],
            }),
            (0, i.jsx)(e_, { gameId: t.id, trackAction: l }),
            (0, i.jsx)(lN, { trackAction: l }),
            (0, i.jsx)(lj, { game: t, closeModal: n, trackAction: l }),
        ],
    });
}
function lF(e) {
    let { game: t, trackAction: l, analyticsLocations: n } = e,
        a = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED,
        { closeModal: s } = F();
    return (0, i.jsxs)("div", {
        className: e5.V0,
        children: [
            (0, i.jsx)(t2, { game: t, trackAction: l }),
            (0, i.jsxs)("div", {
                className: e5.gr,
                children: [
                    (0, i.jsx)(tF, { game: t, isTwoColumn: !1 }),
                    (0, i.jsxs)("div", {
                        className: e5.E1,
                        children: [
                            (0, i.jsx)(lD, { game: t, trackAction: l }),
                            (0, i.jsx)(lY, { game: t, trackAction: l }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(tK, { analyticsLocations: n, trackAction: l }),
            (0, i.jsx)(ta, { closeModal: s, trackAction: l }),
            (0, i.jsx)(e_, { gameId: t.id, trackAction: l }),
            (0, i.jsx)(lN, { trackAction: l }),
            (0, i.jsx)(lj, { game: t, closeModal: s, trackAction: l }),
            a && (0, i.jsx)(lc, { game: t, trackAction: l }),
            (0, i.jsx)(tt, { game: t, trackAction: l }),
        ],
    });
}
function lB(e) {
    let { onClose: t, onCloudPlayClick: l, analyticsLocations: n, trackAction: s } = e;
    (0, I.A)({
        name: c.ImpressionNames.CLOUD_PLAY_CTA,
        type: c.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let r = a.useCallback(() => {
        s(O.Ws.CloudPlay), t(), l();
    }, [t, l, s]);
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
function lH(e) {
    let { game: t, trackAction: l, analyticsLocations: n } = e,
        { closeModal: a } = F(),
        { isCloudPlayButtonShown: s, onCloudPlayClick: c } = (function (e) {
            let { gameId: t, analyticsLocations: l } = e,
                n = (0, b.h)(t),
                i = (0, v.A)({ application: n, analyticsLocations: l }),
                [a] = (0, L.L)(t);
            return { onCloudPlayClick: i, isCloudPlayButtonShown: !a && null != i };
        })({ gameId: t.id, analyticsLocations: n }),
        { showsStoreLinks: o } = lw(t),
        d = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: r()(e5.Pn, e5.fi, e5.iH, o ? e5.sV : e5.gF),
        children: [
            s && null != c
                ? (0, i.jsx)("div", {
                      className: e5.NC,
                      children: (0, i.jsx)(lB, {
                          onClose: a,
                          onCloudPlayClick: c,
                          analyticsLocations: n,
                          trackAction: l,
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: e5.V0,
                children: [
                    (0, i.jsx)(lD, { game: t, trackAction: l }),
                    (0, i.jsx)(tK, { analyticsLocations: n, trackAction: l }),
                    (0, i.jsx)(ta, { closeModal: a, trackAction: l }),
                    d && (0, i.jsx)(lc, { game: t, trackAction: l }),
                    (0, i.jsx)(tt, { game: t, trackAction: l }),
                ],
            }),
        ],
    });
}
let lz = function (e) {
    let {
            gameId: t,
            source: l,
            sourceUserId: n,
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
                l = a.useMemo(() => (null != t ? [t] : []), [t]),
                n = (0, d.bG)([V.A], () => (null != e ? V.A.getApplicationIdFromDetectableId(e) : void 0)),
                i = (0, b.h)(n),
                s = a.useMemo(() => (null != n ? [n] : []), [n]),
                { recommendations: r, status: c } = (0, W.XQ)({
                    applicationIds: s,
                    userIds: l,
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
        el = (e, n) => {
            let { guildId: i, isVerified: a } = (0, O.VO)(X.current);
            (0, O.Tn)({
                gameName: z,
                gameId: t,
                action: e,
                similarGameId: n,
                viewId: P,
                guildId: i,
                isVerified: a,
                source: l,
            });
        };
    (0, p.Ay)(() => {
        (0, O.rw)({ source: l, viewId: P, gameId: t, gameName: z, authorId: n, profileType: O.HV.FullProfile }),
            (0, C.He)();
    }),
        (0, p.Ay)(() => () => {
            let { isVerified: e, guildId: l } = (0, O.VO)(X.current),
                n = Date.now(),
                i = B.map((e) => {
                    let t = (0, R.JM)(e) ? (0, R.W6)(e, n) : (0, R.aJ)(e, G);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, O.V_)({
                viewId: P,
                gameId: t,
                gameName: z,
                playedFriendIds: B.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: [],
                guildId: l,
                isVerified: e,
            });
        });
    let en = a.useCallback((e) => {
            v(e.contentRect.width >= 800);
        }, []),
        ei = (0, o.w)(en, [], { fireOnMount: !0 }),
        ea = a.useCallback(() => {
            c(), (0, k.closeUserProfileModal)();
        }, [c]),
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
        eo = a.useCallback(() => {
            c(), (0, k.closeUserProfileModal)();
        }, [c]),
        [eu, ed] = a.useState(!1),
        [em, ex] = a.useState(150),
        eh = a.useRef(null);
    a.useEffect(() => {
        null != h && h > 0 && es.current?.getScrollerNode()?.scrollTo({ top: h, behavior: "instant" });
    }, []);
    let eg = a.useCallback(
        (e) => {
            let t = e.currentTarget.scrollTop;
            if (null != eh.current) {
                let e = Math.max(0, 1 - t / 150);
                eh.current.style.opacity = String(e);
            }
            ed(t >= em);
        },
        [em],
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
                          className: r()(M, e5.kL),
                          ref: ei,
                          children: [
                              (0, i.jsx)(tW, { game: H, ref: eh }),
                              (0, i.jsx)(tV, { game: H, show: eu, onClose: eo, trackAction: el }),
                              (0, i.jsx)(tD, { show: eu }),
                              (0, i.jsxs)(f.Ch, {
                                  ref: es,
                                  onScroll: eg,
                                  children: [
                                      (0, i.jsx)(tB, {
                                          game: H,
                                          onSetCompactBarScrollThreshold: ex,
                                          showCompactBar: eu,
                                      }),
                                      (0, i.jsx)(j.F, {
                                          children: g
                                              ? (0, i.jsxs)("div", {
                                                    className: e5.jC,
                                                    children: [
                                                        (0, i.jsx)(lU, { game: H, closeModal: eo, trackAction: el }),
                                                        (0, i.jsx)(lH, {
                                                            game: H,
                                                            appContext: u,
                                                            source: l,
                                                            trackExternalAction: m,
                                                            trackAction: el,
                                                            analyticsLocations: F,
                                                        }),
                                                    ],
                                                })
                                              : (0, i.jsx)("div", {
                                                    className: e5.b9,
                                                    children: (0, i.jsx)(lF, {
                                                        game: H,
                                                        trackAction: el,
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
