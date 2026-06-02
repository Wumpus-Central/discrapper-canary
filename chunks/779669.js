l.d(t, { default: () => lX });
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
    p = l(707554),
    j = l(964486),
    v = l(737393),
    E = l(793574),
    A = l(688810),
    N = l(139286),
    I = l(46225),
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
var D = l(832163),
    V = l(561794),
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
    en = l(708676),
    ei = l(383233),
    ea = l(998218),
    es = l(375708);
let er = /^#{1,3}\s+(.+)$/,
    ec = /^https?:\/\/\S+$/;
function eo(e) {
    let t = ea.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
var eu = l(60465),
    ed = l(636537),
    em = l(228366);
l(913122);
var ex = l(371794),
    eh = l(652215);
let eg = async (e) => {
        em.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
        try {
            let t = (
                await (0, ex.aP)({
                    url: eh.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: y.default.locale },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.flatMap((e) => e.sku_ids);
            em.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: t });
        } catch (t) {
            em.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
        }
    },
    ef = async (e, t) => {
        em.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
        try {
            let l = {};
            t?.limit != null && (l.limit = t.limit);
            let n = (await ed.Bo.get({ url: eh.Rsh.GAME_ANNOUNCEMENTS(e), query: l, rejectWithError: !1 })).body;
            em.h.dispatch({
                type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
                gameId: e,
                messages: n.messages.map((e) => {
                    let t,
                        l,
                        n = (0, el.rh)(e),
                        i = n.content,
                        a = (function (e) {
                            if ((0, ei._c)(e))
                                return e.components
                                    .filter((e) => e.type === Q.I5.TEXT_DISPLAY)
                                    .map((e) => e.content)
                                    .join("\n");
                            let t = e.content;
                            return 0 === t.length || ec.test(t.trim())
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
                            if ((0, ei._c)(e)) {
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
                            (l = (-1 === t ? a : a.slice(0, t)).match(er)),
                            null != l
                                ? { title: l[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                                : { body: a }),
                        o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                        u =
                            a === i || (0, ei._c)(n)
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
                        poll: n.poll,
                    };
                }),
                channelId: n.channel_id ?? void 0,
                guildId: n.guild_id ?? void 0,
            });
        } catch (t) {
            em.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
        }
    };
var ep = l(422069),
    ej = l(284009),
    ev = l.n(ej),
    eE = l(376728),
    eA = l(976860),
    eN = l(71393),
    eI = l(449054);
async function eb(e) {
    let { invite: t, guildId: l, channelId: n, messageId: i, analyticsLocationStack: a } = e;
    ev()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((l = t.guild?.id), (r = new Set(t.guild?.features))), null == l)) return;
    let c = eN.A.getGuild(l);
    if (c?.joinedAt == null)
        if (null == r || r.has(eh.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, eI.Z2)(
                l,
                {},
                { shouldNavigate: !0, channelId: n, messageId: i, joinSource: eh.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await eE.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, eA.pX)(eh.BVt.CHANNEL(l, n, i), { sourceLocationStack: a });
}
var eS = l(320448),
    eC = l(274119);
function eR(e) {
    let { children: t, title: l, onClickViewAll: n } = e;
    return (0, i.jsxs)("div", {
        className: eC.k,
        children: [
            (0, i.jsxs)("div", {
                className: eC.w,
                children: [
                    (0, i.jsx)(K.D, { variant: "heading-lg/medium", children: l }),
                    null != n &&
                        (0, i.jsx)(h.$, {
                            size: "sm",
                            icon: eS._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: n,
                            text: es.intl.string(es.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var eT = l(468489),
    eL = l(992595);
function ek(e, t) {
    return q.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
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
        g = (null != h ? eo(h) : null) ?? h,
        { embedSource: f } = l;
    return null == f
        ? null
        : (0, i.jsx)(z.D, {
              className: u ? eT.jI : eT.IU,
              onClick: m,
              children: (0, i.jsxs)("div", {
                  className: u ? eT.GT : eT.s4,
                  children: [
                      null != f.url &&
                          (0, i.jsx)(X.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: eT.Ow,
                              children: f.url,
                          }),
                      (0, i.jsxs)("div", {
                          className: eT._d,
                          style: null != f.color ? { borderInlineStartColor: f.color } : void 0,
                          children: [
                              null != f.authorName &&
                                  (0, i.jsxs)("div", {
                                      className: eT.Tu,
                                      children: [
                                          null != f.authorIconUrl &&
                                              (0, i.jsx)("img", {
                                                  src: f.authorIconUrl,
                                                  className: eT.SG,
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
                                      className: eT.ax,
                                      children: (0, i.jsx)(H.y, {
                                          readyState: c ? eh.Rv1.READY : eh.Rv1.LOADING,
                                          aspectRatio: x,
                                          placeholder: l.media.placeholder,
                                          placeholderVersion: l.media.placeholderVersion,
                                          placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                                          children: (0, i.jsx)("img", {
                                              src: g,
                                              className: eT.Lw,
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
                                      className: u ? eT.KX : eT._N,
                                      children: ek(l.title, n),
                                  }),
                              l.body.length > 0 &&
                                  (0, i.jsxs)("div", {
                                      className: r()(eT.h_, eL.PT),
                                      children: [ek(l.body, n), (0, i.jsx)("div", { className: eT.fm })],
                                  }),
                              (0, i.jsxs)("div", {
                                  className: eT.ov,
                                  children: [
                                      null != f.providerIconUrl &&
                                          (0, i.jsx)("img", {
                                              src: f.providerIconUrl,
                                              className: eT.Cd,
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
                                              className: eT.a5,
                                              children: [
                                                  (0, i.jsx)(J.n, { size: "xs", color: "currentColor" }),
                                                  (0, i.jsx)(X.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(es.intl.currentLocale).format(
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
function eO(e) {
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
        g = (null != h ? eo(h) : null) ?? h,
        f = null != l.media && null != g;
    return (0, i.jsxs)(z.D, {
        className: r()({ [eT.cG]: u && f, [eT.jI]: u && !f, [eT.IU]: !u }),
        onClick: m,
        children: [
            null != l.media &&
                null != g &&
                (0, i.jsx)("div", {
                    className: u ? eT._v : eT.eZ,
                    children: (0, i.jsx)(H.y, {
                        readyState: c ? eh.Rv1.READY : eh.Rv1.LOADING,
                        aspectRatio: x,
                        placeholder: l.media.placeholder,
                        placeholderVersion: l.media.placeholderVersion,
                        placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                        children: (0, i.jsx)("img", {
                            src: g,
                            className: u ? eT.fk : eT.v,
                            alt: "",
                            draggable: !1,
                            onLoad: d,
                        }),
                    }),
                }),
            (0, i.jsxs)("div", {
                className: u ? eT.GT : eT.s4,
                children: [
                    null != l.title &&
                        (0, i.jsx)(K.D, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            className: u ? eT.KX : eT._N,
                            children: ek(l.title, n),
                        }),
                    l.body.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: r()(eT.h_, eL.PT),
                            children: [ek(l.body, n), (0, i.jsx)("div", { className: eT.fm })],
                        }),
                    (0, i.jsxs)("div", {
                        className: eT.ov,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: (0, Z.i$)(new Date(l.timestamp), "LL"),
                            }),
                            l.reactionCount > 0 &&
                                (0, i.jsxs)("div", {
                                    className: eT.a5,
                                    children: [
                                        (0, i.jsx)(J.n, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(X.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            children: new Intl.NumberFormat(es.intl.currentLocale).format(
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
function e_(e) {
    let { variant: t, message: l, onCardClick: n } = e,
        s = "main" === t,
        { poll: r } = l,
        c = a.useCallback(() => n(l.id), [n, l.id]);
    if (null == r) return null;
    let o = r.answers.slice(0, 3),
        u = r.answers.length - o.length;
    return (0, i.jsx)(z.D, {
        className: s ? eT.jI : eT.IU,
        onClick: c,
        children: (0, i.jsxs)("div", {
            className: s ? eT.GT : eT.s4,
            children: [
                (0, i.jsx)(K.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: eT.MH,
                    children: r.question.text,
                }),
                (0, i.jsxs)("div", {
                    className: eT.xd,
                    children: [
                        o.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    className: eT.Nf,
                                    children: (0, i.jsx)(X.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: eT.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        u > 0 &&
                            (0, i.jsx)(X.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: eT.PF,
                                children: es.intl.format(es.t["mv/nIa"], { count: u }),
                            }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: eT.ov,
                    children: (0, i.jsx)(X.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: es.intl.format(es.t.t0FTsH, {
                            createdAt: new Date(l.timestamp),
                            expiryLabel: (0, en.J)(r.expiry) ?? es.intl.string(es.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function eM(e) {
    return null != e.message.poll
        ? (0, i.jsx)(e_, { ...e })
        : null != e.message.embedSource
          ? (0, i.jsx)(ey, { ...e })
          : (0, i.jsx)(eO, { ...e });
}
function eG(e) {
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
            } = (0, d.cf)([ep.A], () => ({
                data: null != e ? ep.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && ep.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && ep.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || l || ep.A.isAnnouncementsFetching(e) || ef(e);
                }, [e, l]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: n }
            );
        })(t),
        x = a.useCallback(() => {
            let e = s?.guild?.id ?? u;
            null != e &&
                null != m &&
                (l(O.Ws.Announcements),
                eu.A.setGameProfilePendingReturn({ gameId: t, channelId: m, initialScrollOffset: c() }),
                r(),
                eb({ invite: s, guildId: e, channelId: m, analyticsLocationStack: n }));
        }, [l, r, c, s, u, m, n, t]),
        h = a.useCallback(
            (e) => {
                let i = s?.guild?.id ?? u;
                null != i &&
                    null != m &&
                    (l(O.Ws.AnnouncementsItem),
                    eu.A.setGameProfilePendingReturn({ gameId: t, channelId: m, initialScrollOffset: c() }),
                    r(),
                    eb({ invite: s, guildId: i, channelId: m, messageId: e, analyticsLocationStack: n }));
            },
            [l, r, c, s, u, m, n, t],
        );
    if (null == m || 0 === o.length) return null;
    let g = 2 !== o.length,
        f = g ? o[0] : null,
        p = g ? o.slice(1) : o;
    return (0, i.jsx)(eR, {
        title: es.intl.string(es.t.B0BV3Y),
        onClickViewAll: x,
        children: (0, i.jsxs)("div", {
            className: eT.f3,
            children: [
                null != f && (0, i.jsx)(eM, { variant: "main", message: f, channelId: m, onCardClick: h }),
                p.length > 0 &&
                    (0, i.jsx)($.A, {
                        gap: 16,
                        children: p.map((e) =>
                            (0, i.jsx)(eM, { variant: "small", message: e, channelId: m, onCardClick: h }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
var eP = l(541830),
    ew = l(240248);
let eD = [M.V.OFFICIAL, M.V.FACEBOOK, M.V.TWITTER, M.V.INSTAGRAM, M.V.YOUTUBE, M.V.BLUESKY, M.V.REDDIT, M.V.TWITCH];
var eV = l(808380);
let eW = [eV.Y.DESKTOP, eV.Y.XBOX, eV.Y.PLAYSTATION, eV.Y.NINTENDO];
var eY = l(349288),
    eU = l(975807),
    eF = l(194362);
function eB(e) {
    let { game: t, trackAction: l } = e,
        n = a.useCallback(async () => {
            l(O.Ws.ClaimGame);
            let e = await (0, eF.a)(eh.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, eU.A)(e);
        }, [l]),
        s = a.useCallback((e) => (0, i.jsx)(eY.Anchor, { onClick: n, children: e }), [n]);
    return t.linkedApplications?.some((e) => e.type === Q.Mh.OFFICIAL)
        ? null
        : (0, i.jsx)(X.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: es.intl.format(es.t.KAjfKl, { claimLink: s }),
          });
}
var eH = l(998445),
    ez = l(274997),
    eX = l(80500),
    eK = l(319745),
    eJ = l(488225),
    e$ = l(967492),
    eq = l(72265),
    eZ = l(454346),
    eQ = l(37948),
    e0 = l(262420);
let e1 = { size: "xs", colorClass: e0.wP };
function e8(e) {
    let { website: t, trackAction: l } = e,
        n = (0, eQ.A)(),
        {
            action: s,
            icon: r,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case M.V.OFFICIAL:
                    return {
                        icon: (0, i.jsx)(eH.L, { ...t }),
                        action: O.Ws.WebsiteLink,
                        title: es.intl.string(es.t.fOUKvg),
                    };
                case M.V.TWITTER:
                    return { icon: (0, i.jsx)(ez.p, { ...t }), action: O.Ws.XLink, title: es.intl.string(es.t.INic4y) };
                case M.V.YOUTUBE:
                    return {
                        action: O.Ws.YouTubeLink,
                        icon: (0, i.jsx)(eX.C, { ...t }),
                        title: es.intl.string(es.t.lNmxbE),
                    };
                case M.V.FACEBOOK:
                    return {
                        icon: (0, i.jsx)(eK.Z, { ...t }),
                        action: O.Ws.FacebookLink,
                        title: es.intl.string(es.t.FjyREK),
                    };
                case M.V.INSTAGRAM:
                    return {
                        icon: (0, i.jsx)(eJ.L, { ...t }),
                        action: O.Ws.InstagramLink,
                        title: es.intl.string(es.t["cgR+IK"]),
                    };
                case M.V.BLUESKY:
                    return {
                        icon: (0, i.jsx)(e$.a, { ...t }),
                        action: O.Ws.BlueskyLink,
                        title: es.intl.string(es.t["D/PHq5"]),
                    };
                case M.V.REDDIT:
                    return {
                        icon: (0, i.jsx)(eq.T, { ...t }),
                        action: O.Ws.RedditLink,
                        title: es.intl.string(es.t["Hgb+fc"]),
                    };
                case M.V.TWITCH:
                    return {
                        icon: (0, i.jsx)(eZ.a, { ...t }),
                        action: O.Ws.TwitchLink,
                        title: es.intl.string(es.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, e1),
        o = a.useCallback(() => {
            l(s), n(t.url);
        }, [s, n, l, t.url]);
    return (0, i.jsx)(m.m, {
        text: c,
        children: (0, i.jsx)(z.D, { onClick: o, className: e0.yO, title: c, children: r }),
    });
}
var e4 = l(31300),
    e2 = l(802516),
    e3 = l(22363),
    e5 = l(418524),
    e6 = l(141535);
function e9(e) {
    let { platform: t, ...l } = e;
    switch (t) {
        case eV.Y.DESKTOP:
            return (0, i.jsx)(e4.k, { size: "xs", ...l });
        case eV.Y.XBOX:
            return (0, i.jsx)(e2.Y, { size: "xs", ...l });
        case eV.Y.PLAYSTATION:
            return (0, i.jsx)(e3.X, { size: "xs", ...l });
        case eV.Y.NINTENDO:
            return (0, i.jsx)(e5.M, { size: "xs", ...l });
        default:
            return null;
    }
}
function e7(e) {
    let { platform: t } = e;
    return (0, i.jsx)(
        m.m,
        {
            text: (function (e) {
                switch (e) {
                    case eV.Y.DESKTOP:
                        return es.intl.string(es.t.KT6uCJ);
                    case eV.Y.XBOX:
                        return es.intl.string(es.t.DDWUJp);
                    case eV.Y.PLAYSTATION:
                        return es.intl.string(es.t.fzMz2s);
                    case eV.Y.NINTENDO:
                        return es.intl.string(es.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, i.jsx)(e9, { platform: t }),
        },
        t,
    );
}
var te = l(424994),
    tt = l(60541);
function tl() {
    return (0, i.jsx)(X.E, { variant: "text-sm/normal", color: "text-subtle", children: es.intl.string(es.t.GruYxV) });
}
let tn = function (e) {
    let { game: t, trackAction: l } = e,
        n = a.useMemo(() => t.genres.map(eP.du).join(", "), [t]),
        s = t.getCompanyByRole(Q.wk.PUBLISHER),
        r = t.getCompanyByRole(Q.wk.DEVELOPER),
        c = s.map((e) => e.name).join(", "),
        o = r.map((e) => e.name).join(", "),
        u = t.firstReleaseDate,
        d = a.useMemo(() => {
            let e = new Set(t.platforms),
                l = [...e];
            return (
                !e.has(eV.Y.DESKTOP) && (e.has(eV.Y.MACOS) || e.has(eV.Y.LINUX)) && l.push(eV.Y.DESKTOP),
                l.filter((e) => eW.includes(e)).sort((e, t) => eW.indexOf(e) - eW.indexOf(t))
            );
        }, [t.platforms]),
        m = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return eD.includes(t);
            })
            .sort((e, t) => eD.indexOf(e.category) - eD.indexOf(t.category)),
        x = !(0, ew.uJ)(n),
        h = !(0, ew.uJ)(c),
        g = !(0, ew.uJ)(o),
        f = !(0, ew.uJ)(u),
        p = d.length > 0,
        j = m.length > 0 && !m.every((e) => (0, ew.uJ)(e.url));
    return (0, i.jsxs)("div", {
        className: tt.uW,
        children: [
            (0, i.jsx)("div", {
                className: tt.Gf,
                children: (0, i.jsx)(K.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: es.intl.string(es.t["7OjmmH"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tt.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: tt.J1,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? es.intl.string(es.t.pDgwYB) : es.intl.string(es.t.mjFKqn),
                            }),
                            x
                                ? (0, i.jsx)(X.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tt.Gu,
                                      children: n,
                                  })
                                : (0, i.jsx)(tl, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tt.J1,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== s.length ? es.intl.string(es.t.Hc7Enk) : es.intl.string(es.t["4Byy/G"]),
                            }),
                            h
                                ? (0, i.jsx)(X.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tt.Gu,
                                      children: c,
                                  })
                                : (0, i.jsx)(tl, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tt.J1,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? es.intl.string(es.t.KATEJB) : es.intl.string(es.t.na3PT0),
                            }),
                            g
                                ? (0, i.jsx)(X.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tt.Gu,
                                      children: o,
                                  })
                                : (0, i.jsx)(tl, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tt.J1,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: es.intl.string(es.t.H3mPDT),
                            }),
                            f
                                ? (0, i.jsx)(X.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tt.Gu,
                                      children: Z.i$(new Date(u), "LL"),
                                  })
                                : (0, i.jsx)(tl, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tt.J1,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: d.length > 1 ? es.intl.string(es.t.PNqxNe) : es.intl.string(es.t["UxAag+"]),
                            }),
                            p
                                ? (0, i.jsx)("div", {
                                      className: tt.Gu,
                                      children: d.map((e) => (0, i.jsx)(e7, { platform: e }, e)),
                                  })
                                : (0, i.jsx)(tl, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tt.J1,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: es.intl.string(es.t["Oj3o1/"]),
                            }),
                            j
                                ? (0, i.jsx)("div", {
                                      className: tt.Gu,
                                      children: m.map((e) => (0, i.jsx)(e8, { website: e, trackAction: l }, e.url)),
                                  })
                                : (0, i.jsx)(tl, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tt.J1,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: es.intl.string(es.t["BwQ+9e"]),
                            }),
                            (0, i.jsx)(X.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: tt.Gu,
                                children: es.intl.format(es.t.XPFZVl, { igdbLink: te.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: tt.OQ, children: (0, i.jsx)(eB, { game: t, trackAction: l }) }),
        ],
    });
};
var ti = l(714991),
    ta = l(486020),
    ts = l(552523);
function tr(e) {
    let { trackAction: t } = e,
        { canStartAuthorization: l, hasAlreadyLinked: n, invite: s, isMember: r, closeModal: c } = F(),
        o = a.useCallback(() => {
            null != s &&
                (t(O.Ws.JoinServer),
                c(),
                em.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: s, code: s.code, context: eh.BRT.APP }));
        }, [s, t, c]);
    if (null == s || null == s.guild) return null;
    let u = ta.Ay.getGuildIconURL({ id: s.guild.id, icon: s.guild.icon, size: 48 }),
        d = ta.Ay.getGuildSplashURL({ id: s.guild.id, splash: s.guild.splash }),
        m = (l && !n) || null == d,
        x = (0, i.jsx)("img", {
            className: ts.$f,
            src: u,
            alt: es.intl.formatToPlainString(es.t.xm6W9D, { guildName: s.guild.name }),
            draggable: !1,
        }),
        g = m ? ts.To : ts.Kt,
        f = m ? ts.yj : ts.FS;
    return (0, i.jsxs)("div", {
        className: ts.uW,
        children: [
            (0, i.jsx)(K.D, {
                className: ts.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: es.intl.string(es.t["U2N+ci"]),
            }),
            (0, i.jsxs)("div", {
                className: ts.kL,
                children: [
                    !m && null != d && (0, i.jsx)("img", { className: ts.ll, src: d, alt: "", draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: ts.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: g,
                                children: [
                                    m
                                        ? x
                                        : (0, i.jsx)("div", {
                                              className: ts._C,
                                              children: (0, i.jsx)("div", { className: ts.kW, children: x }),
                                          }),
                                    (0, i.jsxs)("div", {
                                        className: f,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: ts.YS,
                                                children: [
                                                    (0, i.jsx)(ti.A, { guild: s.guild, size: 16 }),
                                                    (0, i.jsx)(K.D, {
                                                        variant: "heading-md/semibold",
                                                        color: "text-default",
                                                        children: s.guild.name,
                                                    }),
                                                ],
                                            }),
                                            !(0, ew.uJ)(s.guild?.description) &&
                                                (0, i.jsx)(X.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: s.guild?.description,
                                                }),
                                            null != s.approximate_member_count || null != s.approximate_presence_count
                                                ? (0, i.jsxs)("div", {
                                                      className: ts.iR,
                                                      children: [
                                                          null != s.approximate_presence_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: ts.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: ts._o }),
                                                                      (0, i.jsx)(X.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: es.intl.format(es.t["LC+S+m"], {
                                                                              membersOnline:
                                                                                  s.approximate_presence_count,
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          null != s.approximate_member_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: ts.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: ts.jk }),
                                                                      (0, i.jsx)(X.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: es.intl.format(es.t.zRl6XR, {
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
                                text: r ? es.intl.string(es.t.cEnaWx) : es.intl.string(es.t.XpeFYr),
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
var tc = l(369606),
    to = l(459746),
    tu = l(922016),
    td = l(980707),
    tm = l(477782),
    tx = l(663341),
    th = l(408278),
    tg = l(34188),
    tf = l(365199),
    tp = l(789645),
    tj = l(442433),
    tv = l(50268),
    tE = l(44724),
    tA = l(67518),
    tN = l(540185),
    tI = l(926268),
    tb = l(53788),
    tS = l(831453),
    tC = l(785866),
    tR = l(555704),
    tT = l(457965),
    tL = l(47675),
    tk = l(633075),
    ty = l(289173),
    tO = l(841595),
    t_ = l(958805),
    tM = l(735321),
    tG = l(495544),
    tP = l(760751);
async function tw(e) {
    let t = e((0, tM.BF)());
    await t_.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function tD(e) {
    let { game: t, className: l, trackAction: n } = e,
        s = a.useRef(null),
        r = a.useRef(null),
        c = (0, tv.A)({ id: t.id, label: es.intl.string(es.t.SHQGPj) }),
        o = (0, tA.n)(t.id, n),
        u = (function (e) {
            let t = e?.id,
                l = e?.name ?? "",
                n = (0, d.bG)([tG.default], () => tG.default.getId()),
                s = (0, d.bG)([tP.A], () => tP.A.getDetectableGame(t)),
                r = a.useMemo(
                    () => [
                        {
                            type: tN.x.FAVORITE_GAMES,
                            addLabel: es.intl.string(es.t.fgmitg),
                            removeLabel: es.intl.string(es.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: tI.C,
                        },
                        {
                            type: tN.x.PLAYED_GAMES,
                            addLabel: es.intl.string(es.t["0xIVLR"]),
                            removeLabel: es.intl.string(es.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: tb.G,
                        },
                        {
                            type: tN.x.CURRENT_GAMES,
                            addLabel: es.intl.string(es.t.G0c4En),
                            removeLabel: es.intl.string(es.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: tS.H,
                        },
                        {
                            type: tN.x.WANT_TO_PLAY_GAMES,
                            addLabel: es.intl.string(es.t.UuBS4K),
                            removeLabel: es.intl.string(es.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: tC._,
                        },
                    ],
                    [],
                ),
                c = (0, d.yK)([tO.A], () => (null == n ? [] : (tO.A.getUserProfile(n)?.widgets ?? [])), [n]),
                o = (0, tT.w$)({ location: "game-profile-overflow-menu" }),
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
                            (await tw((i) => {
                                let a = i.filter(ty.fu).find((t) => t.type === e) ?? null;
                                if (l) {
                                    if (a?.games.some((e) => e.applicationId === t) || (null != a && (0, tM.uA)(a)))
                                        return i;
                                    let l = { applicationId: t },
                                        s = null != a ? [l, ...(a.games ?? [])] : [l];
                                    n = new ty.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.applicationId !== t);
                                    n = new ty.Yy({ ...a, games: e });
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
                        (0, tL.un)({
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
                            (await tw((l) =>
                                e
                                    ? l.some((e) => e instanceof tk.R && e.applicationId === u)
                                        ? l
                                        : [(t = new tk.R({ applicationId: u })), ...l]
                                    : ((t = l.find((e) => e instanceof tk.R && e.applicationId === u) ?? null),
                                      l.filter((e) => !(e instanceof tk.R && e.applicationId === u))),
                            ),
                            null == t)
                        )
                            return;
                        let l = t;
                        (0, tL.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...l.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [u],
                );
            if (null == n) return null;
            let h = null != e && null != s && (0, tM.XX)(s),
                g = [];
            if (null != u) {
                let e = c.some((e) => e instanceof tk.R && e.applicationId === u);
                g.push(
                    (0, i.jsx)(
                        tm.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? es.intl.formatToPlainString(es.t.Ktb1n8, { name: l })
                                : es.intl.formatToPlainString(es.t.Xp6iZt, { name: l }),
                            action: () => x(!e),
                            leadingAccessory: { type: "icon", icon: tR.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (h)
                for (let e of r) {
                    let l = c.filter(ty.fu).find((t) => t.type === e.type) ?? null,
                        n = null != l && l.games.some((e) => e.applicationId === t),
                        a = !n && null != l && (0, tM.uA)(l);
                    g.push(
                        (0, i.jsx)(
                            tm.Dr,
                            {
                                id: e.menuId,
                                label: n ? e.removeLabel : e.addLabel,
                                subtext: a ? es.intl.string(es.t["86OoiH"]) : void 0,
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
        { invite: x, closeModal: g } = F(),
        f = new Set(x?.guild?.features).has(eh.GuildFeatures.SOCIAL_LAYER_STOREFRONT),
        p = a.useCallback(() => {
            null != x && (0, tE.X)({ invite: x });
        }, [x]),
        j = a.useCallback(() => {
            null != x && (n(O.Ws.GameShop), (0, tE.default)({ invite: x }), g());
        }, [x, n, g]),
        v = a.useCallback(() => g(!1), [g]);
    return (0, i.jsxs)("div", {
        className: l,
        children: [
            null != u &&
                (0, i.jsx)(tu.Y, {
                    targetElementRef: r,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(td.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                (0, tj.Z_)(), t();
                            },
                            "aria-label": es.intl.string(es.t.sidPSo),
                            onSelect: () => {},
                            children: (0, i.jsx)(tm.rX, { children: u }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: r,
                            children: (0, i.jsx)(h.$, {
                                icon: tx.p,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: es.intl.string(es.t.sidPSo),
                            }),
                        }),
                }),
            f &&
                null != x &&
                (0, i.jsx)(m.m, {
                    text: es.intl.string(es.t.apFNLU),
                    children: (0, i.jsx)(th.K, {
                        icon: tg.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": es.intl.string(es.t.apFNLU),
                        onMouseDown: p,
                        onClick: j,
                    }),
                }),
            (null != c || null != o) &&
                (0, i.jsx)(tu.Y, {
                    targetElementRef: s,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(td.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                (0, tj.Z_)(), t();
                            },
                            "aria-label": es.intl.string(es.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(tm.rX, { children: o }), (0, i.jsx)(tm.rX, { children: c })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)(m.m, {
                            text: es.intl.string(es.t["UKOtz+"]),
                            children: (0, i.jsx)("div", {
                                ...e,
                                ref: s,
                                children: (0, i.jsx)(th.K, {
                                    icon: tf.j,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": es.intl.string(es.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, i.jsx)(th.K, {
                icon: tp.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: v,
                "aria-label": es.intl.string(es.t.cpT0Cq),
            }),
        ],
    });
}
var tV = l(8208);
function tW(e) {
    let { game: t, show: l, trackAction: n } = e,
        a = t.name,
        s = t.getIconURL(80);
    return (0, i.jsxs)("div", {
        className: tV.y5,
        children: [
            (0, i.jsx)("div", { className: r()(tV.nI, l && tV.hD) }),
            (0, i.jsxs)("div", {
                className: r()(tV.A1, l && tV.g8),
                children: [
                    null != s && (0, i.jsx)("img", { src: s, alt: "", className: tV.V$, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: tV.hm,
                        children: [
                            (0, i.jsx)(K.D, { variant: "heading-md/semibold", lineClamp: 1, children: a }),
                            null != t.l30Rank && (0, i.jsx)(tB, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(tD, { game: t, className: tV.HK, trackAction: n }),
        ],
    });
}
function tY(e) {
    let { show: t } = e;
    return (0, i.jsx)("div", { className: r()(tV.nI, tV.Jn, t && tV.hD) });
}
let tU = a.forwardRef(function (e, t) {
    let { game: l } = e,
        [n] = a.useState(() => Math.random()),
        s = a.useMemo(() => {
            if (null != l.bannerHash)
                return ta.Ay.getGameAssetURL({ id: l.id, hash: l.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            if (null != l.screenshotUrls && l.screenshotUrls.length > 0) {
                let e = Math.floor(n * l.screenshotUrls.length);
                return l.screenshotUrls[e];
            }
            return "";
        }, [l.id, l.bannerHash, l.screenshotUrls, n]);
    return (0, ew.uJ)(s)
        ? null
        : (0, i.jsxs)("div", {
              ref: t,
              children: [
                  (0, i.jsx)("div", { className: tV.y1, style: { backgroundImage: `url("${s}")` } }),
                  (0, i.jsx)("div", { className: tV.N4 }),
              ],
          });
});
function tF(e) {
    let { game: t } = e,
        l = (t.genres ?? []).map(eP.du).join(", ");
    return (0, ew.uJ)(l) ? null : (0, i.jsx)(X.E, { variant: "text-md/normal", color: "text-muted", children: l });
}
let tB = (e) => {
    let { rank: t } = e;
    return (0, i.jsxs)("div", {
        className: tV.Qc,
        children: [
            (0, i.jsx)(tc.O, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, i.jsx)(X.E, {
                variant: "text-xs/bold",
                color: "none",
                children: es.intl.formatToPlainString(es.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
};
function tH(e) {
    let { game: t, isTwoColumn: l } = e;
    return (0, i.jsx)("div", {
        className: l ? tV.n8 : tV.FS,
        children: (0, i.jsx)(to.A, { game: t, className: tV.xe, size: to.w.LARGE }),
    });
}
let tz = function (e) {
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
        className: r()(tV.ap, n && tV.Gh),
        children: [
            s &&
                null != t &&
                (0, i.jsx)("div", {
                    className: tV.Tf,
                    children: (0, i.jsx)(to.A, { game: t, className: tV.w$, size: to.w.LARGE }),
                }),
            (0, i.jsxs)("div", {
                className: tV.lu,
                children: [
                    null != t.l30Rank && (0, i.jsx)(tB, { rank: t.l30Rank }),
                    (0, i.jsx)(K.D, { ref: o, variant: "heading-xxl/semibold", children: u }),
                    (0, i.jsx)(tF, { game: t }),
                ],
            }),
        ],
    });
};
var tX = l(141628),
    tK = l(289363),
    tJ = l(448682);
function t$(e) {
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
    let g = u?.guild != null ? ta.Ay.getGuildSplashURL({ id: u.guild.id, splash: u.guild.splash }) : null;
    return (0, i.jsxs)("div", {
        className: tJ.uW,
        children: [
            (0, i.jsx)(K.D, {
                className: tJ.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: es.intl.string(es.t["VDAhr+"]),
            }),
            (0, i.jsxs)("div", {
                className: tJ.kL,
                children: [
                    null != g
                        ? (0, i.jsx)("img", { className: tJ.ll, src: g, alt: "", draggable: !1 })
                        : (0, i.jsx)("div", { className: tJ.sB, children: (0, i.jsx)(tK.default, { application: o }) }),
                    (0, i.jsxs)("div", {
                        className: tJ.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tJ.FS,
                                children: [
                                    (0, i.jsx)(K.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: es.intl.formatToPlainString(es.t.hUbQT2, { gameName: o.name }),
                                    }),
                                    (0, i.jsx)(X.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: es.intl.string(es.t["JKqu+4"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(h.$, {
                                variant: "secondary",
                                icon: tX.A,
                                text: es.intl.string(es.t.jynBQ5),
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
var tq = l(80687),
    tZ = l(775602),
    tQ = l(248643),
    t0 = l(256905),
    t1 = l(34337),
    t8 = l(90721),
    t4 = l(616337);
let t2 = a.memo(function (e) {
        let { item: t, index: l, isSelected: n, isPlaying: s, onSelect: c, gameName: o } = e,
            u = a.useCallback(() => c(l), [c, l]);
        return (0, i.jsx)(z.D, {
            className: r()(t4.JS, n && t4.Y4),
            onClick: u,
            children: (0, i.jsxs)("div", {
                className: t4.ub,
                children: [
                    (0, i.jsx)("img", {
                        src: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                        className: t4.xn,
                        alt: es.intl.formatToPlainString(es.t.COYYrn, { game: o }),
                        draggable: !1,
                    }),
                    "VIDEO" === t.type &&
                        (0, i.jsx)("div", {
                            className: t4.UZ,
                            children: (0, i.jsx)(tq.D, { playing: n && s, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    t3 = a.memo(function (e) {
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
            (0, t8.A)({ videoRef: n, canvasRef: u, enabled: !l }),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    !l && (0, i.jsx)("canvas", { ref: u, className: t4.HW, "aria-hidden": "true" }),
                    (0, i.jsx)("div", {
                        className: t4.tN,
                        children: (0, i.jsx)(tQ.A, {
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
                            renderLinkComponent: t1.bU,
                            onPlay: r,
                            onPause: c,
                            onFullscreenChange: o,
                            mediaPlayerClassName: t4.T9,
                            videoRef: n,
                            mediaPlayerRef: s,
                        }),
                    }),
                ],
            })
        );
    });
function t5(e) {
    let { game: t, trackAction: l } = e,
        [n, s] = a.useState(0),
        [r, c] = a.useState(null),
        [o, u] = a.useState(t.screenshotUrls),
        m = a.useRef(null),
        x = a.useRef(null),
        h = (0, d.bG)([tZ.A], () => tZ.A.useReducedMotion);
    o !== t.screenshotUrls && (u(t.screenshotUrls), s(0));
    let g = a.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, ex.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, ex.YE)(e.application_id, e.id, e.width, "webp"),
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
        p = g[f],
        j = p?.type === "VIDEO",
        v = a.useCallback(
            (e) => {
                let t = g[f],
                    l = g[e];
                t?.type === "IMAGE" && l?.type === "IMAGE" && t.url !== l.url ? c(t.url) : c(null), s(e);
            },
            [g, f],
        ),
        [E, A] = a.useState(!1),
        N = a.useRef(null),
        I = a.useCallback(() => {
            l(j ? O.Ws.ClickTrailer : O.Ws.ClickImage);
            let e = m.current,
                t = N.current,
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
            (0, t0.R)({
                items: r,
                startingIndex: f,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: s,
                onClose: () => {
                    let e = x.current,
                        t = N.current,
                        l = null != e ? !e.paused : n;
                    e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), l && t.setPlay(!0), t.setMuted(e.muted))
                            : l && t?.setPlay(!0),
                        A(l);
                },
            });
        }, [l, g, f, j]),
        b = a.useCallback(() => A(!0), []),
        S = a.useCallback(() => A(!1), []),
        C = a.useCallback(() => c(null), []),
        R = a.useCallback(
            (e) => {
                e && I();
            },
            [I],
        );
    return 0 === g.length
        ? null
        : (0, i.jsxs)("div", {
              className: t4.kL,
              children: [
                  j
                      ? (0, i.jsx)("div", {
                            className: t4.ND,
                            children: (0, i.jsx)(
                                t3,
                                {
                                    item: p,
                                    reducedMotion: h,
                                    videoRef: m,
                                    mediaPlayerRef: N,
                                    onPlay: b,
                                    onPause: S,
                                    onFullscreenChange: R,
                                },
                                `${f}-${p.url}`,
                            ),
                        })
                      : (0, i.jsxs)("div", {
                            className: t4.wp,
                            children: [
                                null != r &&
                                    !h &&
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: t4.Jy,
                                            onAnimationEnd: C,
                                            children: (0, i.jsx)("img", { src: r, className: t4.Db, alt: "" }),
                                        },
                                        r,
                                    ),
                                (0, i.jsx)("div", { className: t4.QN }),
                                (0, i.jsx)(z.D, {
                                    className: t4.gv,
                                    onClick: I,
                                    children: (0, i.jsx)(
                                        "img",
                                        {
                                            src: p.url,
                                            className: t4.c8,
                                            alt: es.intl.formatToPlainString(es.t.COYYrn, { game: t.name }),
                                        },
                                        p.url,
                                    ),
                                }),
                            ],
                        }),
                  (0, i.jsx)($.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      children: g.map((e, l) =>
                          (0, i.jsx)(
                              t2,
                              { item: e, index: l, isPlaying: E, isSelected: l === f, onSelect: v, gameName: t.name },
                              `${l}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
var t6 = l(49381),
    t9 = l(661531),
    t7 = l(223273);
function le(e, t, l) {
    if (null == e || null == t || t < 10) return t7.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !l
            ? t7.vI.POSITIVE
            : t < (l ? 100 : 500) || e < 95
              ? t7.vI.VERY_POSITIVE
              : t7.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return t7.vI.MOSTLY_POSITIVE;
    if (e >= 40) return t7.vI.MIXED;
    if (e >= 20) return t7.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !l) return t7.vI.NEGATIVE;
    else if (t < (l ? 100 : 500)) return t7.vI.VERY_NEGATIVE;
    return t7.vI.OVERWHELMINGLY_NEGATIVE;
}
function lt(e) {
    switch (e) {
        case t7.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case t7.vI.OVERWHELMINGLY_POSITIVE:
        case t7.vI.VERY_POSITIVE:
        case t7.vI.POSITIVE:
        case t7.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case t7.vI.MIXED:
            return "steam-review-text-mixed";
        case t7.vI.MOSTLY_NEGATIVE:
        case t7.vI.NEGATIVE:
        case t7.vI.VERY_NEGATIVE:
        case t7.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var ll =
        (((n = {})[(n.MIGHTY = 1)] = "MIGHTY"),
        (n[(n.STRONG = 2)] = "STRONG"),
        (n[(n.FAIR = 3)] = "FAIR"),
        (n[(n.WEAK = 4)] = "WEAK"),
        n),
    ln = l(778591);
function li(e) {
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
var la = l(99392);
function ls(e) {
    let { url: t, trackAction: l, title: n, rating: s, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, eQ.A)(),
        u = le(s, r, "recent" === c),
        d = lt(u),
        x = a.useCallback(() => {
            l(O.Ws.SteamReviews), o(t);
        }, [o, l, t]);
    return (0, i.jsx)(z.D, {
        onClick: x,
        className: la.nf,
        role: "link",
        "aria-label": es.intl.string(es.t.YNC5Di),
        children: (0, i.jsxs)("div", {
            className: la.U6,
            children: [
                (0, i.jsxs)("div", {
                    className: la.tN,
                    children: [
                        (0, i.jsx)(t6.N, { size: "sm", color: t9.A.colors.ICON_STRONG.css }),
                        (0, i.jsx)(K.D, { variant: "heading-sm/medium", color: "text-strong", children: n }),
                    ],
                }),
                (0, i.jsx)(
                    m.m,
                    {
                        text:
                            u === t7.vI.NO_USER_REVIEWS
                                ? es.intl.string(es.t.CLMt8J)
                                : es.intl
                                      .format(
                                          "recent" === c
                                              ? es.t.TzvC0k
                                              : "localized" === c
                                                ? es.t.EOfrwm
                                                : es.t["lzANJ/"],
                                          { rating: s, rating_count: r?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, i.jsxs)("div", {
                            className: la.Z0,
                            children: [
                                (0, i.jsx)(X.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    children: (function (e) {
                                        switch (e) {
                                            case t7.vI.NO_USER_REVIEWS:
                                                return es.intl.string(es.t.CLMt8J);
                                            case t7.vI.OVERWHELMINGLY_POSITIVE:
                                                return es.intl.string(es.t["75sx1S"]);
                                            case t7.vI.VERY_POSITIVE:
                                                return es.intl.string(es.t["EkOVg+"]);
                                            case t7.vI.POSITIVE:
                                                return es.intl.string(es.t.ZUkFtr);
                                            case t7.vI.MOSTLY_POSITIVE:
                                                return es.intl.string(es.t.M7Z09a);
                                            case t7.vI.MIXED:
                                                return es.intl.string(es.t.c8yuHR);
                                            case t7.vI.MOSTLY_NEGATIVE:
                                                return es.intl.string(es.t.H0MSjG);
                                            case t7.vI.NEGATIVE:
                                                return es.intl.string(es.t.vpLrgz);
                                            case t7.vI.VERY_NEGATIVE:
                                                return es.intl.string(es.t["5spYuX"]);
                                            case t7.vI.OVERWHELMINGLY_NEGATIVE:
                                                return es.intl.string(es.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != r &&
                                    u !== t7.vI.NO_USER_REVIEWS &&
                                    (0, i.jsx)(X.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: es.intl
                                            .format(es.t.sgIoin, { rating_count: r.toLocaleString() })
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
function lr(e) {
    let { game: t, url: l, trackAction: n } = e,
        { reviews: s } = t,
        r = s?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        u = r.topCriticRatingCount ?? -1,
        d = (o <= 0 || u <= 0) && null == c,
        m = (0, eQ.A)(),
        x = a.useCallback(() => {
            n(O.Ws.OpenCriticReviews), m(l);
        }, [m, n, l]);
    return (0, i.jsx)(z.D, {
        onClick: x,
        className: la.nf,
        role: "link",
        "aria-label": es.intl.string(es.t.aLNBAw),
        children: (0, i.jsxs)("div", {
            className: la.Ur,
            children: [
                (0, i.jsx)(K.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: es.intl.string(es.t["UxvER+"]),
                }),
                (0, i.jsxs)("div", {
                    className: la.WA,
                    children: [
                        null != c ? (0, i.jsx)(lc, { tier: c }) : null,
                        null != c && o > 0 && u > 0 ? (0, i.jsx)(lo, { rating: o, tier: c }) : null,
                        d
                            ? (0, i.jsx)(X.E, {
                                  variant: "text-xs/medium",
                                  color: lt(t7.vI.NO_USER_REVIEWS),
                                  children: es.intl.string(es.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function lc(e) {
    let { tier: t } = e,
        l = (function (e) {
            switch (e) {
                case ll.MIGHTY:
                    return es.intl.string(es.t.aZej2g);
                case ll.STRONG:
                    return es.intl.string(es.t.MLxnSg);
                case ll.FAIR:
                    return es.intl.string(es.t["3f19KA"]);
                case ll.WEAK:
                    return es.intl.string(es.t.jtVgSh);
            }
        })(t),
        n = (function (e) {
            switch (e) {
                case ll.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case ll.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case ll.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case ll.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, i.jsx)(
        m.m,
        {
            text: l,
            children: (0, i.jsx)("div", {
                className: la.TE,
                children: (0, i.jsx)("img", { src: n, alt: l, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function lo(e) {
    let { rating: t, tier: l } = e,
        { foregroundColor: n, backgroundColor: a } = (function (e) {
            let t = "";
            switch (e) {
                case ll.MIGHTY:
                    t = "#fc430a";
                    break;
                case ll.STRONG:
                    t = "#9e00b4";
                    break;
                case ll.FAIR:
                    t = "#4aa1ce";
                    break;
                case ll.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(l);
    return (0, i.jsx)(
        m.m,
        {
            text: es.intl.string(es.t.Ub4YR1),
            children: (0, i.jsxs)("div", {
                className: la.TE,
                style: { backgroundColor: a },
                children: [
                    (0, i.jsx)(li, { rating: t, strokeColor: n }),
                    (0, i.jsx)(X.E, {
                        variant: "text-xs/bold",
                        color: "always-white",
                        className: la.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let lu = function (e) {
    let { game: t, trackAction: l } = e,
        n = (0, ln.I)(t.id),
        a = t.opencriticUrl,
        s = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED && null != n,
        r = t.reviews?.steam,
        c = le(r?.recentRating, r?.recentRatingCount, !0),
        o = s && c !== t7.vI.NO_USER_REVIEWS,
        d =
            null != r &&
            null != r.localizedRating &&
            null != r.localizedRatingCount &&
            null != r.ratingCount &&
            r.localizedRatingCount >= 200 &&
            r.ratingCount >= 2e3,
        m = d ? r?.localizedRating : r?.rating,
        x = d ? r?.localizedRatingCount : r?.ratingCount,
        h = d ? es.t["aWb+V4"] : es.t["8e4LiB"],
        g = t.reviews?.opencritic != null && null != a;
    return s || o || g
        ? (0, i.jsxs)("div", {
              className: la.uW,
              children: [
                  (0, i.jsx)("div", {
                      className: la.Gf,
                      children: (0, i.jsx)(K.D, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: es.intl.string(es.t.GaAQXP),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: la.kL,
                      children: [
                          o && null != n
                              ? (0, i.jsx)("div", {
                                    className: la.WH,
                                    children: (0, i.jsx)(ls, {
                                        url: n,
                                        trackAction: l,
                                        title: es.intl.string(es.t.MQGNsN),
                                        rating: r?.recentRating,
                                        ratingCount: r?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          s && null != n
                              ? (0, i.jsx)("div", {
                                    className: la.WH,
                                    children: (0, i.jsx)(ls, {
                                        url: n,
                                        trackAction: l,
                                        title: es.intl.string(h),
                                        rating: m,
                                        ratingCount: x,
                                        tooltipVariant: d ? "localized" : "all",
                                    }),
                                })
                              : null,
                          g && null != a
                              ? (0, i.jsx)("div", {
                                    className: la.WH,
                                    children: (0, i.jsx)(lr, { game: t, url: a, trackAction: l }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var ld = l(859040),
    lm = l(674658),
    lx = l(828614),
    lh = l(561769),
    lg = l(758836),
    lf = l(804163);
let lp = a.createContext({ trackAction: () => {} }),
    lj = (e) => {
        let { skuId: t, aspectRatio: l } = e,
            { product: n } = (0, lm.q)(t, !0),
            s = a.useContext(lh.v3),
            { closeModal: r } = F(),
            { trackAction: c } = a.useContext(lp),
            o = a.useCallback(() => {
                c(O.Ws.DiscordCollectiblesShopItem),
                    r(),
                    (0, ld.Cz)({
                        analyticsLocations: [E.A.GAME_PROFILE],
                        analyticsSource: E.A.GAME_PROFILE,
                        initialProductSkuId: t,
                        tab: lg.G2.CATALOG,
                    });
            }, [c, r, t]);
        if (null == n) return null;
        let { flattenProductVariants: u, ...d } = s;
        return (0, i.jsx)(lh.v3.Provider, {
            value: { flattenProductVariants: u ?? !0, ...d },
            children: (0, i.jsx)(lx.A, {
                skuId: t,
                aspectRatio: l,
                cardClassName: lf.N,
                onClickCard: o,
                hideWishlistButton: !0,
                hidePrice: !0,
                hidePrimaryCTA: !0,
                hideSecondaryCTA: !0,
            }),
        });
    };
function lv(e) {
    let { game: t, trackAction: l } = e,
        { closeModal: n } = F(),
        s = (function (e) {
            let { hasFetched: t, skuIds: l } = (0, d.cf)([ep.A], () => ({
                hasFetched: null != e && ep.A.hasShopCollectionBeenFetched(e),
                skuIds: null != e ? ep.A.getShopCollectionSkuIds(e) : void 0,
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || t || ep.A.isShopCollectionFetching(e) || eg(e);
                }, [e, t]),
                l ?? []
            );
        })(t.shopCollectionIds?.[0]),
        r = a.useCallback(() => {
            l(O.Ws.DiscordCollectiblesShop),
                n(),
                (0, ld.Cz)({
                    analyticsLocations: [E.A.GAME_PROFILE],
                    analyticsSource: E.A.GAME_PROFILE,
                    tab: lg.G2.CATALOG,
                });
        }, [l, n]),
        c = a.useMemo(() => ({ trackAction: l }), [l]);
    return 0 === s.length
        ? null
        : (0, i.jsx)(lp.Provider, {
              value: c,
              children: (0, i.jsx)(eR, {
                  title: es.intl.string(es.t["5DYPT8"]),
                  onClickViewAll: r,
                  children: (0, i.jsx)($.A, { gap: "md", children: s.map((e) => (0, i.jsx)(lj, { skuId: e }, e)) }),
              }),
          });
}
var lE = l(871123),
    lA = l(317560),
    lN = l(328100),
    lI = l(627771);
function lb(e) {
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
                          className: lI.B,
                          children: (0, i.jsx)(lN.A, {
                              positionInSection: t,
                              skuId: e,
                              variant: lN.s.SMALL,
                              analyticsLocations: l,
                              onClick: s,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
function lS(e) {
    let { trackAction: t } = e,
        { socialLayerStorefrontRecommendationsData: l, closeModal: n } = F(),
        { analyticsLocations: s } = (0, A.Ay)([E.A.GAME_PROFILE]),
        r = a.useCallback(() => {
            l?.application != null && (t(O.Ws.GameShop), n(), (0, tE.default)({ applicationId: l.application.id }));
        }, [l, t, n]),
        c = a.useCallback(
            (e, i) => {
                let a = l?.guildId;
                null != a &&
                    (t(O.Ws.GameShopItem),
                    (0, lA.R)({
                        skuId: e,
                        applicationId: i,
                        isStorefront: !1,
                        analyticsLocations: s,
                        onClose: () => {
                            let { pathname: e, search: t } = location;
                            (0, lE.rG)(e, t, i, a) && n();
                        },
                    }));
            },
            [t, n, s, l],
        );
    if (null == l) return null;
    let { skuIds: o } = l;
    return (0, i.jsx)(eR, {
        title: es.intl.string(es.t.WDdlUb),
        onClickViewAll: r,
        children: (0, i.jsx)(lb, { skuIds: o, analyticsLocations: s, onCardClick: c }),
    });
}
l(667532);
var lC = l(853022);
let lR = new Set(["1402418703554842694", "356877880938070016"]),
    lT = [M.V.EPICGAMES, M.V.STEAM, M.V.ROBLOX, M.V.BATTLENET, M.V.RIOT, M.V.MINECRAFT];
var lL = l(349361),
    lk = l(924895),
    ly = l(422688),
    lO = l(505200),
    l_ = l(695250);
let lM = function (e) {
    switch (e.category) {
        case M.V.STEAM:
            return {
                icon: t6.N,
                text: es.intl.string(es.t.FsANs4),
                ariaLabel: es.intl.string(es.t["P+ePTG"]),
                action: O.Ws.SteamStoreLink,
                url: e.url,
            };
        case M.V.EPICGAMES:
            return {
                icon: lL.r,
                text: es.intl.string(es.t.ZbBMHa),
                ariaLabel: es.intl.string(es.t.BwX0UW),
                action: O.Ws.EpicStoreLink,
                url: e.url,
            };
        case M.V.ROBLOX:
            return {
                icon: lk.H,
                text: es.intl.string(es.t["pJ+P+h"]),
                ariaLabel: es.intl.string(es.t.tYxpdf),
                action: O.Ws.RobloxStoreLink,
                url: e.url,
            };
        case M.V.BATTLENET:
            return {
                icon: ly.a,
                text: es.intl.string(es.t["A7grp+"]),
                ariaLabel: es.intl.string(es.t.x9at20),
                action: O.Ws.BattlenetStoreLink,
                url: e.url,
            };
        case M.V.RIOT:
            return {
                icon: lO.A,
                text: es.intl.string(es.t.h6MapL),
                ariaLabel: es.intl.string(es.t["528nvc"]),
                action: O.Ws.RiotStoreLink,
                url: e.url,
            };
        case M.V.MINECRAFT:
            return {
                icon: l_.m,
                text: es.intl.string(es.t["HZbmO+"]),
                ariaLabel: es.intl.string(es.t.WWTqYn),
                action: O.Ws.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: e2.Y,
                text: es.intl.string(es.t["QpN/Iz"]),
                ariaLabel: es.intl.string(es.t["8JZmmF"]),
                action: O.Ws.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
var lG = l(192308);
function lP(e) {
    return (0, i.jsx)(h.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var lw = l(352639);
function lD(e) {
    let t,
        l,
        n,
        i,
        s,
        r =
            ((t = (0, ln.I)(e?.id)),
            (l = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eh.d3x.XBOX_GAME_PASS && !(0, ew.uJ)(e.id));
                return t?.id == null ? null : (0, lC.jA)(t.id);
            })(e)),
            (n = e?.id),
            (i = e?.websites),
            (s = e?.steamReleaseStatus),
            a.useMemo(() => {
                if ((null == i && null == l) || null == n) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== M.V.EPICGAMES || !!lR.has(n)) &&
                            (e.category !== M.V.STEAM || s !== u.Y.RETIRED_ABANDONED) &&
                            lT.includes(e.category),
                    ) ?? [];
                null == t ||
                    s === u.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === M.V.STEAM) ||
                    e.push({ category: M.V.STEAM, url: t });
                let a = e.sort((e, t) => (e.category === M.V.STEAM ? -1 : +(t.category === M.V.STEAM)));
                return null != l && a.unshift({ category: "XBOX_GAME_PASS", url: l }), a;
            }, [t, i, n, s, l]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function lV(e) {
    let { data: t, trackAction: l } = e,
        n = (0, eQ.A)();
    return (0, i.jsx)(lP, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            l(t.action), n(t.url);
        },
    });
}
let lW = function (e) {
    let { game: t, trackAction: n } = e,
        { showsStoreLinks: s, storeWebsites: r } = lD(t),
        c = a.useMemo(() => r.map(lM).filter((e) => null != e), [r]);
    if (!s) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, i.jsx)(lV, { data: e, trackAction: n });
    }
    if (2 === c.length)
        return (0, i.jsxs)("div", {
            className: lw.G,
            children: [(0, i.jsx)(lV, { data: c[0], trackAction: n }), (0, i.jsx)(lV, { data: c[1], trackAction: n })],
        });
    let o = (0, i.jsx)(lP, {
        text: es.intl.string(es.t["/hMurx"]),
        "aria-label": es.intl.string(es.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: n, trackAction: a } = e;
                (0, lG.openModalLazy)(async () => {
                    let { default: e } = await l.e("76758").then(l.bind(l, 459477));
                    return (l) => (0, i.jsx)(e, { game: t, websiteButtons: n, trackAction: a, ...l });
                });
            })({ game: t, websiteButtons: c, trackAction: n }),
    });
    return r.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, i.jsxs)("div", { className: lw.G, children: [(0, i.jsx)(lV, { data: c[0], trackAction: n }), o] })
        : o;
};
var lY = l(123292);
function lU(e) {
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
    let m = s ? es.intl.string(es.t["6MwJo/"]) : es.intl.string(es.t.lBeKY2);
    return (0, i.jsxs)("div", {
        className: r()(e6.fi, e6.mX),
        children: [
            (0, i.jsx)(X.E, { ref: n, lineClamp: s ? void 0 : d, variant: "text-md/medium", children: t.description }),
            c && (0, i.jsx)(lY.Q, { onClick: o, text: m }),
        ],
    });
}
function lF(e) {
    let { game: t, trackAction: l } = e;
    return (0, i.jsxs)("div", {
        className: e6.oC,
        children: [
            (0, i.jsxs)("div", {
                className: e6.lM,
                children: [(0, i.jsx)(t5, { game: t, trackAction: l }), (0, i.jsx)(lU, { game: t, trackAction: l })],
            }),
            (0, i.jsx)(eG, { gameId: t.id, trackAction: l }),
            (0, i.jsx)(lS, { trackAction: l }),
            (0, i.jsx)(lv, { game: t, trackAction: l }),
        ],
    });
}
function lB(e) {
    let { game: t, trackAction: l, analyticsLocations: n } = e,
        a = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: e6.V0,
        children: [
            (0, i.jsx)(t5, { game: t, trackAction: l }),
            (0, i.jsxs)("div", {
                className: e6.gr,
                children: [
                    (0, i.jsx)(tH, { game: t, isTwoColumn: !1 }),
                    (0, i.jsxs)("div", {
                        className: e6.E1,
                        children: [
                            (0, i.jsx)(lW, { game: t, trackAction: l }),
                            (0, i.jsx)(lU, { game: t, trackAction: l }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(t$, { analyticsLocations: n, trackAction: l }),
            (0, i.jsx)(tr, { trackAction: l }),
            (0, i.jsx)(eG, { gameId: t.id, trackAction: l }),
            (0, i.jsx)(lS, { trackAction: l }),
            (0, i.jsx)(lv, { game: t, trackAction: l }),
            a && (0, i.jsx)(lu, { game: t, trackAction: l }),
            (0, i.jsx)(tn, { game: t, trackAction: l }),
        ],
    });
}
function lH(e) {
    let { onCloudPlayClick: t, analyticsLocations: l, trackAction: n } = e,
        { closeModal: s } = F();
    (0, N.A)({
        name: c.ImpressionNames.CLOUD_PLAY_CTA,
        type: c.ImpressionTypes.VIEW,
        properties: { location_stack: l },
    });
    let r = a.useCallback(() => {
        n(O.Ws.CloudPlay), s(), t();
    }, [s, t, n]);
    return (0, i.jsx)(m.m, {
        text: es.intl.string(es.t.JVwWva),
        position: "top",
        children: (0, i.jsx)(h.$, {
            icon: g.h,
            text: es.intl.string(es.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: r,
            fullWidth: !0,
        }),
    });
}
function lz(e) {
    let { game: t, trackAction: l, analyticsLocations: n } = e,
        { isCloudPlayButtonShown: a, onCloudPlayClick: s } = (function (e) {
            let { gameId: t, analyticsLocations: l } = e,
                n = (0, b.h)(t),
                i = (0, v.A)({ application: n, analyticsLocations: l }),
                [a] = (0, L.L)(t);
            return { onCloudPlayClick: i, isCloudPlayButtonShown: !a && null != i };
        })({ gameId: t.id, analyticsLocations: n }),
        { showsStoreLinks: c } = lD(t),
        o = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: r()(e6.Pn, e6.fi, e6.iH, c ? e6.sV : e6.gF),
        children: [
            a && null != s
                ? (0, i.jsx)("div", {
                      className: e6.NC,
                      children: (0, i.jsx)(lH, { onCloudPlayClick: s, analyticsLocations: n, trackAction: l }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: e6.V0,
                children: [
                    (0, i.jsx)(lW, { game: t, trackAction: l }),
                    (0, i.jsx)(t$, { analyticsLocations: n, trackAction: l }),
                    (0, i.jsx)(tr, { trackAction: l }),
                    o && (0, i.jsx)(lu, { game: t, trackAction: l }),
                    (0, i.jsx)(tn, { game: t, trackAction: l }),
                ],
            }),
        ],
    });
}
let lX = function (e) {
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
        [N, L] = a.useState(null),
        { clientThemesClassName: M } = (0, S.Ay)(),
        G = (0, d.bG)([y.default], () => y.default.locale),
        P = a.useMemo(() => (0, O.u9)(), []),
        { analyticsLocations: F } = (0, A.Ay)(E.A.GAME_PROFILE),
        B = (0, _.s)(t),
        { data: H } = (0, T.I)(t),
        z = H?.name ?? "",
        X = a.useRef(null);
    a.useEffect(() => {
        X.current = N;
    }, [N]);
    let {
            hasAlreadyLinked: K,
            canStartAuthorization: J,
            fetched: $,
            startAuthorization: q,
            connectionApp: Z,
        } = (0, I.RD)(H),
        { invite: Q, isMember: ee } = w(H, L),
        { socialLayerStorefrontRecommendationsData: et } = (function (e) {
            let t = Y.default.getCurrentUser()?.id,
                l = a.useMemo(() => (null != t ? [t] : []), [t]),
                n = (0, d.bG)([D.A], () => (null != e ? D.A.getApplicationIdFromDetectableId(e) : void 0)),
                i = (0, b.h)(n),
                s = a.useMemo(() => (null != n ? [n] : []), [n]),
                { recommendations: r, status: c } = (0, W.XQ)({
                    applicationIds: s,
                    userIds: l,
                    numItems: 6,
                    source: V.B5.USER_PROFILE,
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
    (0, j.Ay)(() => {
        (0, O.rw)({ source: l, viewId: P, gameId: t, gameName: z, authorId: n, profileType: O.HV.FullProfile }),
            (0, C.He)();
    }),
        (0, j.Ay)(() => () => {
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
                          className: r()(M, e6.kL),
                          ref: ei,
                          children: [
                              (0, i.jsx)(tU, { game: H, ref: ex }),
                              (0, i.jsx)(tW, { game: H, show: eo, trackAction: el }),
                              (0, i.jsx)(tY, { show: eo }),
                              (0, i.jsxs)(f.Ch, {
                                  ref: es,
                                  onScroll: eh,
                                  children: [
                                      (0, i.jsx)(tz, {
                                          game: H,
                                          onSetCompactBarScrollThreshold: em,
                                          showCompactBar: eo,
                                      }),
                                      (0, i.jsx)(p.F, {
                                          children: g
                                              ? (0, i.jsxs)("div", {
                                                    className: e6.jC,
                                                    children: [
                                                        (0, i.jsx)(lF, { game: H, trackAction: el }),
                                                        (0, i.jsx)(lz, {
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
                                                    className: e6.b9,
                                                    children: (0, i.jsx)(lB, {
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
