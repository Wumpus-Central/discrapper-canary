l.d(t, { default: () => nh });
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
    f = l(192308),
    p = l(689175),
    j = l(707554),
    v = l(155718),
    E = l(964486),
    A = l(737393),
    I = l(793574),
    N = l(688810),
    b = l(139286),
    S = l(206828),
    C = l(590703),
    R = l(180170),
    T = l(751765),
    k = l(569926),
    y = l(928550),
    L = l(570962),
    O = l(975732),
    _ = l(773669),
    G = l(409626),
    M = l(422069),
    P = l(945810);
let w = { enabled: !1, dense: !1 },
    D = (0, P.mj)({
        kind: "user",
        name: "2026-06-similar-games-desktop",
        defaultConfig: w,
        variations: { 0: w, 1: { enabled: !0, dense: !0 }, 2: { enabled: !0, dense: !1 } },
    });
(0, P.mj)({
    kind: "user",
    name: "2026-06-similar-games-mobile",
    defaultConfig: w,
    variations: { 0: w, 1: { enabled: !0, dense: !0 }, 2: { enabled: !0, dense: !1 } },
});
var V = l(205184),
    W = l(505779),
    U = l(970163),
    Y = l(184989);
let F = function (e, t) {
    let [l, n] = a.useState(),
        i = a.useRef(null),
        s = a.useRef(t);
    a.useEffect(() => {
        s.current = t;
    }, [t]);
    let r = (0, d.bG)([Y.A], () => l?.guild?.id != null && Y.A.isMember(l?.guild?.id)),
        c = a.useMemo(
            () =>
                e?.websites?.find((e) => {
                    let { category: t } = e;
                    return t === W.V.DISCORD;
                }),
            [e?.websites],
        );
    return (
        a.useEffect(() => {
            async function e(e) {
                let t = e.split("/").pop();
                if (null != t) {
                    if (i.current?.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, U.A)(t, "game_profile");
                    !0 !== e.banned && ((i.current = t), n(e.invite), null != e.invite && s.current?.(e.invite));
                }
            }
            null != c && e(c.url);
        }, [c]),
        { invite: l, isMember: r }
    );
};
var B = l(49491),
    H = l(429913),
    z = l(832163),
    X = l(561794),
    K = l(862772),
    J = l(287809);
let $ = a.createContext(void 0);
function q() {
    let e = a.useContext($);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var Q = l(621466),
    Z = l(966697),
    ee = l(939249),
    et = l(834730),
    el = l(534514),
    en = l(460905),
    ei = l(449543),
    ea = l(46054),
    es = l(58703);
l(321073);
var er = l(387408),
    ec = l(731068),
    eo = l(59318),
    eu = l(320095),
    ed = l(708676),
    em = l(383233),
    ex = l(998218),
    eh = l(375708);
let eg = /^#{1,3}\s+(.+)$/,
    ef = /^https?:\/\/\S+$/;
function ep(e) {
    let t = ex.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
var ej = l(60465),
    ev = l(158390),
    eE = l(636537),
    eA = l(228366),
    eI = l(927813),
    eN = l(371794),
    eb = l(652215);
let eS = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function eC(e) {
    eA.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
            await (0, eN.aP)({
                url: eb.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                query: { locale: _.default.locale },
                rejectWithError: !1,
                retries: 2,
            })
        ).body.products.flatMap((e) => e.sku_ids);
        eA.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: t });
    } catch (t) {
        eA.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
let eR = async (e) => {
        let t = (
            (await eE.Bo.get({ url: eb.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []
        ).filter((t) => t !== e && !eS.has(t));
        eA.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
    },
    eT = (0, d.UT)(M.A, {
        getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
        get: (e) => M.A.getSimilarGames(e) ?? null,
        load: (e) => eR(e),
        retryConfig: { backoff: () => new ev.A(5 * eI.A.Millis.SECOND, 5 * eI.A.Millis.MINUTE) },
        failureStaleAfter: eI.A.Seconds.MINUTE,
    });
async function ek(e, t) {
    eA.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let l = {};
        t?.limit != null && (l.limit = t.limit);
        let n = (await eE.Bo.get({ url: eb.Rsh.GAME_ANNOUNCEMENTS(e), query: l, rejectWithError: !1 })).body;
        eA.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: n.messages.map((e) => {
                let t,
                    l,
                    n = (0, er.A)((0, eu.rh)(e)),
                    i = n.content,
                    a = (function (e) {
                        if ((0, em._c)(e))
                            return e.components
                                .filter((e) => e.type === v.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || ef.test(t.trim())
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
                        if ((0, em._c)(e)) {
                            let t = e.components.find((e) => e.type === v.I5.MEDIA_GALLERY),
                                l = t?.items[0]?.media;
                            if (null != l) {
                                let t = (0, ec.FE)(l);
                                if ("INVALID" !== t) return { ...l, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, eo.tT)(e.content_type));
                        if (null != t) return (0, ec.Rr)(t, e);
                        let l = e.attachments.find((e) => (0, eo.XB)(e.content_type));
                        if (null != l) return (0, ec.Rr)(l, e);
                        let n = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (n?.thumbnail != null)
                            return (0, ec.oU)(
                                n.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === n) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, ec.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, ec.oU)(
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
                        (l = (-1 === t ? a : a.slice(0, t)).match(eg)),
                        null != l
                            ? { title: l[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    u =
                        a === i || (0, em._c)(n)
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
        eA.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var ey = l(284009),
    eL = l.n(ey),
    eO = l(376728),
    e_ = l(976860),
    eG = l(71393),
    eM = l(385648);
async function eP(e) {
    let { invite: t, guildId: l, channelId: n, messageId: i, analyticsLocationStack: a } = e;
    eL()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((l = t.guild?.id), (r = new Set(t.guild?.features))), null == l)) return;
    let c = eG.A.getGuild(l);
    if (c?.joinedAt == null)
        if (null == r || r.has(eb.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, eM.Z2)(
                l,
                {},
                { shouldNavigate: !0, channelId: n, messageId: i, joinSource: eb.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await eO.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, e_.pX)(eb.BVt.CHANNEL(l, n, i), { sourceLocationStack: a });
}
var ew = l(320448),
    eD = l(274119);
function eV(e) {
    let { children: t, title: l, onClickViewAll: n } = e;
    return (0, i.jsxs)("div", {
        className: eD.k,
        children: [
            (0, i.jsxs)("div", {
                className: eD.w,
                children: [
                    (0, i.jsx)(el.D, { variant: "heading-lg/medium", children: l }),
                    null != n &&
                        (0, i.jsx)(h.$, {
                            size: "sm",
                            icon: ew._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: n,
                            text: eh.intl.string(eh.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var eW = l(468489),
    eU = l(992595);
function eY(e, t) {
    return ea.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function eF(e) {
    let { variant: t, message: l, channelId: n, onCardClick: s } = e,
        [c, o] = a.useState(!1),
        u = "main" === t,
        d = a.useCallback(() => o(!0), []),
        m = a.useCallback(
            (e) => {
                if (
                    !(
                        (0, Q.vq)(e.target, HTMLAnchorElement) ||
                        ((0, Q.vq)(e.target, HTMLSpanElement) && (0, Q.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return s(l.id);
            },
            [s, l.id],
        ),
        x = l.media?.width != null && l.media?.height != null ? l.media.width / l.media.height : 16 / 9,
        h = l.media?.proxyUrl ?? l.media?.url,
        g = (null != h ? ep(h) : null) ?? h,
        { embedSource: f } = l;
    return null == f
        ? null
        : (0, i.jsx)(ee.D, {
              className: u ? eW.jI : eW.IU,
              onClick: m,
              children: (0, i.jsxs)("div", {
                  className: u ? eW.GT : eW.s4,
                  children: [
                      null != f.url &&
                          (0, i.jsx)(et.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: eW.Ow,
                              children: f.url,
                          }),
                      (0, i.jsxs)("div", {
                          className: eW._d,
                          style: null != f.color ? { borderInlineStartColor: f.color } : void 0,
                          children: [
                              null != f.authorName &&
                                  (0, i.jsxs)("div", {
                                      className: eW.Tu,
                                      children: [
                                          null != f.authorIconUrl &&
                                              (0, i.jsx)("img", {
                                                  src: f.authorIconUrl,
                                                  className: eW.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, i.jsx)(et.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-strong",
                                              children: f.authorName,
                                          }),
                                      ],
                                  }),
                              null != l.media &&
                                  null != g &&
                                  (0, i.jsx)("div", {
                                      className: eW.ax,
                                      children: (0, i.jsx)(Z.y, {
                                          readyState: c ? eb.Rv1.READY : eb.Rv1.LOADING,
                                          aspectRatio: x,
                                          placeholder: l.media.placeholder,
                                          placeholderVersion: l.media.placeholderVersion,
                                          placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                                          children: (0, i.jsx)("img", {
                                              src: g,
                                              className: eW.Lw,
                                              alt: "",
                                              draggable: !1,
                                              onLoad: d,
                                          }),
                                      }),
                                  }),
                              null != l.title &&
                                  (0, i.jsx)(el.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: u ? eW.KX : eW._N,
                                      children: eY(l.title, n),
                                  }),
                              l.body.length > 0 &&
                                  (0, i.jsxs)("div", {
                                      className: r()(eW.h_, eU.PT),
                                      children: [eY(l.body, n), (0, i.jsx)("div", { className: eW.fm })],
                                  }),
                              (0, i.jsxs)("div", {
                                  className: eW.ov,
                                  children: [
                                      null != f.providerIconUrl &&
                                          (0, i.jsx)("img", {
                                              src: f.providerIconUrl,
                                              className: eW.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, i.jsxs)(et.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != f.providerName ? `${f.providerName} \xb7 ` : "",
                                              (0, es.i$)(new Date(l.timestamp), "LL"),
                                          ],
                                      }),
                                      l.reactionCount > 0 &&
                                          (0, i.jsxs)("div", {
                                              className: eW.a5,
                                              children: [
                                                  (0, i.jsx)(en.n, { size: "xs", color: "currentColor" }),
                                                  (0, i.jsx)(et.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(eh.intl.currentLocale).format(
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
function eB(e) {
    let { variant: t, message: l, channelId: n, onCardClick: s } = e,
        [c, o] = a.useState(!1),
        u = "main" === t,
        d = a.useCallback(() => o(!0), []),
        m = a.useCallback(
            (e) => {
                if (
                    !(
                        (0, Q.vq)(e.target, HTMLAnchorElement) ||
                        ((0, Q.vq)(e.target, HTMLSpanElement) && (0, Q.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return s(l.id);
            },
            [s, l.id],
        ),
        x = l.media?.width != null && l.media?.height != null ? l.media.width / l.media.height : 16 / 9,
        h = l.media?.proxyUrl ?? l.media?.url,
        g = (null != h ? ep(h) : null) ?? h,
        f = null != l.media && null != g;
    return (0, i.jsxs)(ee.D, {
        className: r()({ [eW.cG]: u && f, [eW.jI]: u && !f, [eW.IU]: !u }),
        onClick: m,
        children: [
            null != l.media &&
                null != g &&
                (0, i.jsx)("div", {
                    className: u ? eW._v : eW.eZ,
                    children: (0, i.jsx)(Z.y, {
                        readyState: c ? eb.Rv1.READY : eb.Rv1.LOADING,
                        aspectRatio: x,
                        placeholder: l.media.placeholder,
                        placeholderVersion: l.media.placeholderVersion,
                        placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                        children: (0, i.jsx)("img", {
                            src: g,
                            className: u ? eW.fk : eW.v,
                            alt: "",
                            draggable: !1,
                            onLoad: d,
                        }),
                    }),
                }),
            (0, i.jsxs)("div", {
                className: u ? eW.GT : eW.s4,
                children: [
                    null != l.title &&
                        (0, i.jsx)(el.D, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            className: u ? eW.KX : eW._N,
                            children: eY(l.title, n),
                        }),
                    l.body.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: r()(eW.h_, eU.PT),
                            children: [eY(l.body, n), (0, i.jsx)("div", { className: eW.fm })],
                        }),
                    (0, i.jsxs)("div", {
                        className: eW.ov,
                        children: [
                            (0, i.jsx)(et.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: (0, es.i$)(new Date(l.timestamp), "LL"),
                            }),
                            l.reactionCount > 0 &&
                                (0, i.jsxs)("div", {
                                    className: eW.a5,
                                    children: [
                                        (0, i.jsx)(en.n, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(et.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            children: new Intl.NumberFormat(eh.intl.currentLocale).format(
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
function eH(e) {
    let { variant: t, message: l, onCardClick: n } = e,
        s = "main" === t,
        { poll: r } = l,
        c = a.useCallback(() => n(l.id), [n, l.id]);
    if (null == r) return null;
    let o = r.answers.slice(0, 3),
        u = r.answers.length - o.length;
    return (0, i.jsx)(ee.D, {
        className: s ? eW.jI : eW.IU,
        onClick: c,
        children: (0, i.jsxs)("div", {
            className: s ? eW.GT : eW.s4,
            children: [
                (0, i.jsx)(el.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: eW.MH,
                    children: r.question.text,
                }),
                (0, i.jsxs)("div", {
                    className: eW.xd,
                    children: [
                        o.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    className: eW.Nf,
                                    children: (0, i.jsx)(et.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: eW.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        u > 0 &&
                            (0, i.jsx)(et.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: eW.PF,
                                children: eh.intl.format(eh.t["mv/nIa"], { count: u }),
                            }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: eW.ov,
                    children: (0, i.jsx)(et.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: eh.intl.format(eh.t.t0FTsH, {
                            createdAt: new Date(l.timestamp),
                            expiryLabel: (0, ed.J)(r.expiry) ?? eh.intl.string(eh.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function ez(e) {
    return null != e.message.poll
        ? (0, i.jsx)(eH, { ...e })
        : null != e.message.embedSource
          ? (0, i.jsx)(eF, { ...e })
          : (0, i.jsx)(eB, { ...e });
}
function eX(e) {
    let { gameId: t, trackAction: l } = e,
        { analyticsLocations: n } = (0, N.Ay)(),
        { invite: s, closeModal: r, getScrollOffset: c } = q(),
        {
            messages: o,
            guildId: u,
            channelId: m,
        } = (function (e) {
            let {
                data: t,
                hasFetched: l,
                isFetching: n,
            } = (0, d.cf)([M.A], () => ({
                data: null != e ? M.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && M.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && M.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || l || M.A.isAnnouncementsFetching(e) || ek(e);
                }, [e, l]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: n }
            );
        })(t),
        x = a.useCallback(() => {
            let e = s?.guild?.id ?? u;
            null != e &&
                null != m &&
                (l(G.Ws.Announcements),
                ej.A.setGameProfilePendingReturn({ gameId: t, channelId: m, initialScrollOffset: c() }),
                r(),
                eP({ invite: s, guildId: e, channelId: m, analyticsLocationStack: n }));
        }, [l, r, c, s, u, m, n, t]),
        h = a.useCallback(
            (e) => {
                let i = s?.guild?.id ?? u;
                null != i &&
                    null != m &&
                    (l(G.Ws.AnnouncementsItem),
                    ej.A.setGameProfilePendingReturn({ gameId: t, channelId: m, initialScrollOffset: c() }),
                    r(),
                    eP({ invite: s, guildId: i, channelId: m, messageId: e, analyticsLocationStack: n }));
            },
            [l, r, c, s, u, m, n, t],
        );
    return null == m || 0 === o.length
        ? null
        : (0, i.jsx)(eV, {
              title: eh.intl.string(eh.t.B0BV3Y),
              onClickViewAll: x,
              children: (0, i.jsx)(ei.A, {
                  gap: 16,
                  children: o.map((e) =>
                      (0, i.jsx)(ez, { variant: "small", message: e, channelId: m, onCardClick: h }, e.id),
                  ),
              }),
          });
}
var eK = l(541830),
    eJ = l(240248);
let e$ = [W.V.OFFICIAL, W.V.FACEBOOK, W.V.TWITTER, W.V.INSTAGRAM, W.V.YOUTUBE, W.V.BLUESKY, W.V.REDDIT, W.V.TWITCH];
var eq = l(808380);
let eQ = [eq.Y.DESKTOP, eq.Y.XBOX, eq.Y.PLAYSTATION, eq.Y.NINTENDO];
var eZ = l(349288),
    e0 = l(975807),
    e1 = l(194362);
function e8(e) {
    let { game: t, trackAction: l } = e,
        n = a.useCallback(async () => {
            l(G.Ws.ClaimGame);
            let e = await (0, e1.a)(eb.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, e0.A)(e);
        }, [l]),
        s = a.useCallback((e) => (0, i.jsx)(eZ.Anchor, { onClick: n, children: e }), [n]);
    return t.linkedApplications?.some((e) => e.type === v.Mh.OFFICIAL)
        ? null
        : (0, i.jsx)(et.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: eh.intl.format(eh.t.KAjfKl, { claimLink: s }),
          });
}
var e4 = l(998445),
    e2 = l(274997),
    e6 = l(80500),
    e3 = l(319745),
    e5 = l(488225),
    e9 = l(967492),
    e7 = l(72265),
    te = l(454346),
    tt = l(37948),
    tl = l(262420);
let tn = { size: "xs", colorClass: tl.wP };
function ti(e) {
    let { website: t, trackAction: l } = e,
        n = (0, tt.A)(),
        {
            action: s,
            icon: r,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case W.V.OFFICIAL:
                    return {
                        icon: (0, i.jsx)(e4.L, { ...t }),
                        action: G.Ws.WebsiteLink,
                        title: eh.intl.string(eh.t.fOUKvg),
                    };
                case W.V.TWITTER:
                    return { icon: (0, i.jsx)(e2.p, { ...t }), action: G.Ws.XLink, title: eh.intl.string(eh.t.INic4y) };
                case W.V.YOUTUBE:
                    return {
                        action: G.Ws.YouTubeLink,
                        icon: (0, i.jsx)(e6.C, { ...t }),
                        title: eh.intl.string(eh.t.lNmxbE),
                    };
                case W.V.FACEBOOK:
                    return {
                        icon: (0, i.jsx)(e3.Z, { ...t }),
                        action: G.Ws.FacebookLink,
                        title: eh.intl.string(eh.t.FjyREK),
                    };
                case W.V.INSTAGRAM:
                    return {
                        icon: (0, i.jsx)(e5.L, { ...t }),
                        action: G.Ws.InstagramLink,
                        title: eh.intl.string(eh.t["cgR+IK"]),
                    };
                case W.V.BLUESKY:
                    return {
                        icon: (0, i.jsx)(e9.a, { ...t }),
                        action: G.Ws.BlueskyLink,
                        title: eh.intl.string(eh.t["D/PHq5"]),
                    };
                case W.V.REDDIT:
                    return {
                        icon: (0, i.jsx)(e7.T, { ...t }),
                        action: G.Ws.RedditLink,
                        title: eh.intl.string(eh.t["Hgb+fc"]),
                    };
                case W.V.TWITCH:
                    return {
                        icon: (0, i.jsx)(te.a, { ...t }),
                        action: G.Ws.TwitchLink,
                        title: eh.intl.string(eh.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, tn),
        o = a.useCallback(() => {
            l(s), n(t.url);
        }, [s, n, l, t.url]);
    return (0, i.jsx)(m.m, {
        text: c,
        children: (0, i.jsx)(ee.D, { onClick: o, className: tl.yO, title: c, children: r }),
    });
}
var ta = l(31300),
    ts = l(802516),
    tr = l(22363),
    tc = l(418524),
    to = l(141535);
function tu(e) {
    let { platform: t, ...l } = e;
    switch (t) {
        case eq.Y.DESKTOP:
            return (0, i.jsx)(ta.k, { size: "xs", ...l });
        case eq.Y.XBOX:
            return (0, i.jsx)(ts.Y, { size: "xs", ...l });
        case eq.Y.PLAYSTATION:
            return (0, i.jsx)(tr.X, { size: "xs", ...l });
        case eq.Y.NINTENDO:
            return (0, i.jsx)(tc.M, { size: "xs", ...l });
        default:
            return null;
    }
}
function td(e) {
    let { platform: t } = e;
    return (0, i.jsx)(
        m.m,
        {
            text: (function (e) {
                switch (e) {
                    case eq.Y.DESKTOP:
                        return eh.intl.string(eh.t.KT6uCJ);
                    case eq.Y.XBOX:
                        return eh.intl.string(eh.t.DDWUJp);
                    case eq.Y.PLAYSTATION:
                        return eh.intl.string(eh.t.fzMz2s);
                    case eq.Y.NINTENDO:
                        return eh.intl.string(eh.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, i.jsx)(tu, { platform: t }),
        },
        t,
    );
}
var tm = l(424994),
    tx = l(60541);
function th() {
    return (0, i.jsx)(et.E, { variant: "text-sm/normal", color: "text-subtle", children: eh.intl.string(eh.t.GruYxV) });
}
let tg = function (e) {
    let { game: t, trackAction: l } = e,
        n = a.useMemo(() => t.genres.map(eK.du).join(", "), [t]),
        s = t.getCompanyByRole(v.wk.PUBLISHER),
        r = t.getCompanyByRole(v.wk.DEVELOPER),
        c = s.map((e) => e.name).join(", "),
        o = r.map((e) => e.name).join(", "),
        u = t.firstReleaseDate,
        d = a.useMemo(() => {
            let e = new Set(t.platforms),
                l = [...e];
            return (
                !e.has(eq.Y.DESKTOP) && (e.has(eq.Y.MACOS) || e.has(eq.Y.LINUX)) && l.push(eq.Y.DESKTOP),
                l.filter((e) => eQ.includes(e)).sort((e, t) => eQ.indexOf(e) - eQ.indexOf(t))
            );
        }, [t.platforms]),
        m = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return e$.includes(t);
            })
            .sort((e, t) => e$.indexOf(e.category) - e$.indexOf(t.category)),
        x = !(0, eJ.uJ)(n),
        h = !(0, eJ.uJ)(c),
        g = !(0, eJ.uJ)(o),
        f = !(0, eJ.uJ)(u),
        p = d.length > 0,
        j = m.length > 0 && !m.every((e) => (0, eJ.uJ)(e.url));
    return (0, i.jsxs)("div", {
        className: tx.uW,
        children: [
            (0, i.jsx)("div", {
                className: tx.Gf,
                children: (0, i.jsx)(el.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: eh.intl.string(eh.t["7OjmmH"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tx.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: tx.J1,
                        children: [
                            (0, i.jsx)(et.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? eh.intl.string(eh.t.pDgwYB) : eh.intl.string(eh.t.mjFKqn),
                            }),
                            x
                                ? (0, i.jsx)(et.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tx.Gu,
                                      children: n,
                                  })
                                : (0, i.jsx)(th, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tx.J1,
                        children: [
                            (0, i.jsx)(et.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== s.length ? eh.intl.string(eh.t.Hc7Enk) : eh.intl.string(eh.t["4Byy/G"]),
                            }),
                            h
                                ? (0, i.jsx)(et.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tx.Gu,
                                      children: c,
                                  })
                                : (0, i.jsx)(th, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tx.J1,
                        children: [
                            (0, i.jsx)(et.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? eh.intl.string(eh.t.KATEJB) : eh.intl.string(eh.t.na3PT0),
                            }),
                            g
                                ? (0, i.jsx)(et.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tx.Gu,
                                      children: o,
                                  })
                                : (0, i.jsx)(th, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tx.J1,
                        children: [
                            (0, i.jsx)(et.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eh.intl.string(eh.t.H3mPDT),
                            }),
                            f
                                ? (0, i.jsx)(et.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tx.Gu,
                                      children: es.i$(new Date(u), "LL"),
                                  })
                                : (0, i.jsx)(th, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tx.J1,
                        children: [
                            (0, i.jsx)(et.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: d.length > 1 ? eh.intl.string(eh.t.PNqxNe) : eh.intl.string(eh.t["UxAag+"]),
                            }),
                            p
                                ? (0, i.jsx)("div", {
                                      className: tx.Gu,
                                      children: d.map((e) => (0, i.jsx)(td, { platform: e }, e)),
                                  })
                                : (0, i.jsx)(th, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tx.J1,
                        children: [
                            (0, i.jsx)(et.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eh.intl.string(eh.t["Oj3o1/"]),
                            }),
                            j
                                ? (0, i.jsx)("div", {
                                      className: tx.Gu,
                                      children: m.map((e) => (0, i.jsx)(ti, { website: e, trackAction: l }, e.url)),
                                  })
                                : (0, i.jsx)(th, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tx.J1,
                        children: [
                            (0, i.jsx)(et.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eh.intl.string(eh.t["BwQ+9e"]),
                            }),
                            (0, i.jsx)(et.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: tx.Gu,
                                children: eh.intl.format(eh.t.XPFZVl, { igdbLink: tm.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: tx.OQ, children: (0, i.jsx)(e8, { game: t, trackAction: l }) }),
        ],
    });
};
var tf = l(714991),
    tp = l(486020),
    tj = l(552523);
function tv(e) {
    let { trackAction: t } = e,
        { canStartAuthorization: l, hasAlreadyLinked: n, invite: s, isMember: r, closeModal: c } = q(),
        o = a.useCallback(() => {
            null != s &&
                (t(G.Ws.JoinServer),
                c(),
                eA.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: s, code: s.code, context: eb.BRT.APP }));
        }, [s, t, c]);
    if (null == s || null == s.guild) return null;
    let u = tp.Ay.getGuildIconURL({ id: s.guild.id, icon: s.guild.icon, size: 48 }),
        d = tp.Ay.getGuildSplashURL({ id: s.guild.id, splash: s.guild.splash }),
        m = (l && !n) || null == d,
        x = (0, i.jsx)("img", {
            className: tj.$f,
            src: u,
            alt: eh.intl.formatToPlainString(eh.t.xm6W9D, { guildName: s.guild.name }),
            draggable: !1,
        }),
        g = m ? tj.To : tj.Kt,
        f = m ? tj.yj : tj.FS;
    return (0, i.jsxs)("div", {
        className: tj.uW,
        children: [
            (0, i.jsx)(el.D, {
                className: tj.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: eh.intl.string(eh.t["U2N+ci"]),
            }),
            (0, i.jsxs)("div", {
                className: tj.kL,
                children: [
                    !m && null != d && (0, i.jsx)("img", { className: tj.ll, src: d, alt: "", draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: tj.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: g,
                                children: [
                                    m
                                        ? x
                                        : (0, i.jsx)("div", {
                                              className: tj._C,
                                              children: (0, i.jsx)("div", { className: tj.kW, children: x }),
                                          }),
                                    (0, i.jsxs)("div", {
                                        className: f,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: tj.YS,
                                                children: [
                                                    (0, i.jsx)(tf.A, { guild: s.guild, size: 16 }),
                                                    (0, i.jsx)(el.D, {
                                                        variant: "heading-md/semibold",
                                                        color: "text-default",
                                                        children: s.guild.name,
                                                    }),
                                                ],
                                            }),
                                            !(0, eJ.uJ)(s.guild?.description) &&
                                                (0, i.jsx)(et.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: s.guild?.description,
                                                }),
                                            null != s.approximate_member_count || null != s.approximate_presence_count
                                                ? (0, i.jsxs)("div", {
                                                      className: tj.iR,
                                                      children: [
                                                          null != s.approximate_presence_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: tj.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: tj._o }),
                                                                      (0, i.jsx)(et.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: eh.intl.format(eh.t["LC+S+m"], {
                                                                              membersOnline:
                                                                                  s.approximate_presence_count,
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          null != s.approximate_member_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: tj.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: tj.jk }),
                                                                      (0, i.jsx)(et.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: eh.intl.format(eh.t.zRl6XR, {
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
                                text: r ? eh.intl.string(eh.t.cEnaWx) : eh.intl.string(eh.t.XpeFYr),
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
var tE = l(369606),
    tA = l(459746),
    tI = l(691540),
    tN = l(857250),
    tb = l(97483),
    tS = l(922016),
    tC = l(980707),
    tR = l(477782),
    tT = l(663341),
    tk = l(408278),
    ty = l(34188),
    tL = l(173936),
    tO = l(365199),
    t_ = l(789645),
    tG = l(442433),
    tM = l(50268),
    tP = l(44724),
    tw = l(957565),
    tD = l(341662),
    tV = l(67518),
    tW = l(540185),
    tU = l(926268),
    tY = l(53788),
    tF = l(831453),
    tB = l(785866),
    tH = l(555704),
    tz = l(47675),
    tX = l(633075),
    tK = l(289173),
    tJ = l(321191),
    t$ = l(958805),
    tq = l(735321),
    tQ = l(725386),
    tZ = l(495544),
    t0 = l(760751),
    t1 = l(403362);
async function t8(e) {
    let t = e((0, tq.BF)());
    await t$.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function t4(e) {
    let { game: t, className: l, trackAction: n } = e,
        s = a.useRef(null),
        r = a.useRef(null),
        c = (0, tM.A)({ id: t.id, label: eh.intl.string(eh.t.SHQGPj) }),
        o = (0, tV.n)(t.id, n),
        u = (function (e) {
            let t = e?.id,
                l = e?.name ?? "",
                n = (0, d.bG)([tZ.default], () => tZ.default.getId()),
                s = (0, d.bG)([t0.A], () => t0.A.getDetectableGame(t)),
                r = a.useMemo(
                    () => [
                        {
                            type: tW.x.FAVORITE_GAMES,
                            addLabel: eh.intl.string(eh.t.fgmitg),
                            removeLabel: eh.intl.string(eh.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: tU.C,
                        },
                        {
                            type: tW.x.PLAYED_GAMES,
                            addLabel: eh.intl.string(eh.t["0xIVLR"]),
                            removeLabel: eh.intl.string(eh.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: tY.G,
                        },
                        {
                            type: tW.x.CURRENT_GAMES,
                            addLabel: eh.intl.string(eh.t.G0c4En),
                            removeLabel: eh.intl.string(eh.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: tF.H,
                        },
                        {
                            type: tW.x.WANT_TO_PLAY_GAMES,
                            addLabel: eh.intl.string(eh.t.UuBS4K),
                            removeLabel: eh.intl.string(eh.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: tB._,
                        },
                    ],
                    [],
                ),
                c = (0, d.yK)([tJ.A], () => (null == n ? [] : (tJ.A.getUserProfile(n)?.widgets ?? [])), [n]),
                o = (0, tQ.A)(),
                u = a.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...o, ...c].filter((e) => e instanceof tX.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(t1.Vq).find((e) => t.has(e)) ?? null;
                }, [o, c, e]),
                m = a.useCallback(
                    async (e, l) => {
                        let n;
                        if (
                            (await t8((i) => {
                                let a = i.filter(tK.fu).find((t) => t.type === e) ?? null;
                                if (l) {
                                    if (a?.games.some((e) => e.applicationId === t) || (null != a && (0, tq.uA)(a)))
                                        return i;
                                    let l = { applicationId: t },
                                        s = null != a ? [l, ...(a.games ?? [])] : [l];
                                    n = new tK.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.applicationId !== t);
                                    n = new tK.Yy({ ...a, games: e });
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
                        (0, tz.un)({
                            action: l ? "GAME_ADDED" : "GAME_REMOVED",
                            ...i.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [t],
                ),
                x = a.useCallback(
                    async (e) => {
                        let t;
                        if (
                            null == u ||
                            (await t8((l) =>
                                e
                                    ? l.some((e) => e instanceof tX.R && e.applicationId === u)
                                        ? l
                                        : [(t = new tX.R({ applicationId: u })), ...l]
                                    : ((t = l.find((e) => e instanceof tX.R && e.applicationId === u) ?? null),
                                      l.filter((e) => !(e instanceof tX.R && e.applicationId === u))),
                            ),
                            null == t)
                        )
                            return;
                        let l = t;
                        (0, tz.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...l.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [u],
                );
            if (null == n) return null;
            let h = null != e && null != s && (0, tq.XX)(s),
                g = [];
            if (null != u) {
                let e = c.some((e) => e instanceof tX.R && e.applicationId === u);
                g.push(
                    (0, i.jsx)(
                        tR.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? eh.intl.formatToPlainString(eh.t.Ktb1n8, { name: l })
                                : eh.intl.formatToPlainString(eh.t.Xp6iZt, { name: l }),
                            action: () => x(!e),
                            leadingAccessory: { type: "icon", icon: tH.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (h)
                for (let e of r) {
                    let l = c.filter(tK.fu).find((t) => t.type === e.type) ?? null,
                        n = null != l && l.games.some((e) => e.applicationId === t),
                        a = !n && null != l && (0, tq.uA)(l);
                    g.push(
                        (0, i.jsx)(
                            tR.Dr,
                            {
                                id: e.menuId,
                                label: n ? e.removeLabel : e.addLabel,
                                subtext: a ? eh.intl.string(eh.t["86OoiH"]) : void 0,
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
        { invite: x, closeModal: g } = q(),
        f = (0, d.bG)([z.A], () => z.A.getApplicationIdFromDetectableId(t.id)),
        p = new Set(x?.guild?.features).has(eb.GuildFeatures.SOCIAL_LAYER_STOREFRONT),
        { enabled: j } = tD.A.useConfig({ location: "GameProfileOverflowMenu" }),
        v = a.useCallback(() => {
            null != f && (0, tP.G)({ applicationId: f });
        }, [f]),
        E = a.useCallback(() => {
            null != f && (n(G.Ws.GameShop), (0, tP.default)({ applicationId: f }), g());
        }, [f, n, g]),
        A = a.useCallback(() => g(!1), [g]),
        I = a.useCallback(() => {
            n(G.Ws.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eb.BVt.GAME_PROFILE(t.id)}`;
            (0, tw.C)(e, () => {
                (0, tI.P0)((0, tN.o)(eh.intl.string(eh.t["+5kSoW"]), tb.Ck.SUCCESS));
            });
        }, [t.id, n]);
    return (0, i.jsxs)("div", {
        className: l,
        children: [
            null != u &&
                (0, i.jsx)(tS.Y, {
                    targetElementRef: r,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(tC.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                (0, tG.Z_)(), t();
                            },
                            "aria-label": eh.intl.string(eh.t.sidPSo),
                            onSelect: () => {},
                            children: (0, i.jsx)(tR.rX, { children: u }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: r,
                            children: (0, i.jsx)(h.$, {
                                icon: tT.p,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: eh.intl.string(eh.t.sidPSo),
                            }),
                        }),
                }),
            p &&
                null != x &&
                (0, i.jsx)(m.m, {
                    text: eh.intl.string(eh.t.apFNLU),
                    children: (0, i.jsx)(tk.K, {
                        icon: ty.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eh.intl.string(eh.t.apFNLU),
                        onMouseDown: v,
                        onClick: E,
                    }),
                }),
            j &&
                (0, i.jsx)(m.m, {
                    text: eh.intl.string(eh.t.WqhZss),
                    children: (0, i.jsx)(tk.K, {
                        icon: tL.q,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eh.intl.string(eh.t.WqhZss),
                        onClick: I,
                    }),
                }),
            (null != c || null != o) &&
                (0, i.jsx)(tS.Y, {
                    targetElementRef: s,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(tC.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                (0, tG.Z_)(), t();
                            },
                            "aria-label": eh.intl.string(eh.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(tR.rX, { children: o }), (0, i.jsx)(tR.rX, { children: c })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)(m.m, {
                            text: eh.intl.string(eh.t["UKOtz+"]),
                            children: (0, i.jsx)("div", {
                                ...e,
                                ref: s,
                                children: (0, i.jsx)(tk.K, {
                                    icon: tO.j,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": eh.intl.string(eh.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, i.jsx)(tk.K, {
                icon: t_.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: A,
                "aria-label": eh.intl.string(eh.t.cpT0Cq),
            }),
        ],
    });
}
var t2 = l(8208);
function t6(e) {
    let { game: t, show: l, trackAction: n } = e,
        a = t.name,
        s = t.getIconURL(80);
    return (0, i.jsxs)("div", {
        className: t2.y5,
        children: [
            (0, i.jsx)("div", { className: r()(t2.nI, l && t2.hD) }),
            (0, i.jsxs)("div", {
                className: r()(t2.A1, l && t2.g8),
                children: [
                    null != s && (0, i.jsx)("img", { src: s, alt: "", className: t2.V$, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: t2.hm,
                        children: [
                            (0, i.jsx)(el.D, { variant: "heading-md/semibold", lineClamp: 1, children: a }),
                            null != t.l30Rank && (0, i.jsx)(t7, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(t4, { game: t, className: t2.HK, trackAction: n }),
        ],
    });
}
function t3(e) {
    let { show: t } = e;
    return (0, i.jsx)("div", { className: r()(t2.nI, t2.Jn, t && t2.hD) });
}
let t5 = a.forwardRef(function (e, t) {
    let { game: l } = e,
        [n] = a.useState(() => Math.random()),
        s = a.useMemo(() => {
            if (null != l.bannerHash)
                return tp.Ay.getGameAssetURL({ id: l.id, hash: l.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            if (null != l.screenshotUrls && l.screenshotUrls.length > 0) {
                let e = Math.floor(n * l.screenshotUrls.length);
                return l.screenshotUrls[e];
            }
            return "";
        }, [l.id, l.bannerHash, l.screenshotUrls, n]);
    return (0, eJ.uJ)(s)
        ? null
        : (0, i.jsxs)("div", {
              ref: t,
              children: [
                  (0, i.jsx)("div", { className: t2.y1, style: { backgroundImage: `url("${s}")` } }),
                  (0, i.jsx)("div", { className: t2.N4 }),
              ],
          });
});
function t9(e) {
    let { game: t } = e,
        l = (t.genres ?? []).map(eK.du).join(", ");
    return (0, eJ.uJ)(l) ? null : (0, i.jsx)(et.E, { variant: "text-md/normal", color: "text-muted", children: l });
}
function t7(e) {
    let { rank: t } = e;
    return (0, i.jsxs)("div", {
        className: t2.Qc,
        children: [
            (0, i.jsx)(tE.O, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, i.jsx)(et.E, {
                variant: "text-xs/bold",
                color: "none",
                children: eh.intl.formatToPlainString(eh.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function le(e) {
    let { game: t, isTwoColumn: l } = e;
    return (0, i.jsx)("div", {
        className: l ? t2.n8 : t2.FS,
        children: (0, i.jsx)(tA.A, { game: t, className: t2.xe, size: tA.w.LARGE }),
    });
}
let lt = function (e) {
    let { game: t, onSetCompactBarScrollThreshold: l, showCompactBar: n } = e,
        { isTwoColumn: s } = q(),
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
        className: r()(t2.ap, n && t2.Gh),
        children: [
            s &&
                null != t &&
                (0, i.jsx)("div", {
                    className: t2.Tf,
                    children: (0, i.jsx)(tA.A, { game: t, className: t2.w$, size: tA.w.LARGE }),
                }),
            (0, i.jsxs)("div", {
                className: t2.lu,
                children: [
                    null != t.l30Rank && (0, i.jsx)(t7, { rank: t.l30Rank }),
                    (0, i.jsx)(el.D, { ref: o, variant: "heading-xxl/semibold", children: u }),
                    (0, i.jsx)(t9, { game: t }),
                ],
            }),
        ],
    });
};
var ll = l(141628),
    ln = l(289363),
    li = l(448682);
function la(e) {
    let { trackAction: t, analyticsLocations: l } = e,
        {
            fetchedAuthorization: n,
            hasAlreadyLinked: s,
            canStartAuthorization: r,
            startAuthorization: c,
            connectionApp: o,
            invite: u,
        } = q(),
        m = (0, d.bG)([J.default], () => J.default.getCurrentUser()),
        x = a.useCallback(() => {
            t(G.Ws.LinkAccount), c({ analyticsLocations: l });
        }, [t, c, l]);
    if (!n || null == o || !r || s || null == m) return null;
    let g = u?.guild != null ? tp.Ay.getGuildSplashURL({ id: u.guild.id, splash: u.guild.splash }) : null;
    return (0, i.jsxs)("div", {
        className: li.uW,
        children: [
            (0, i.jsx)(el.D, {
                className: li.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: eh.intl.string(eh.t["VDAhr+"]),
            }),
            (0, i.jsxs)("div", {
                className: li.kL,
                children: [
                    null != g
                        ? (0, i.jsx)("img", { className: li.ll, src: g, alt: "", draggable: !1 })
                        : (0, i.jsx)("div", { className: li.sB, children: (0, i.jsx)(ln.default, { application: o }) }),
                    (0, i.jsxs)("div", {
                        className: li.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: li.FS,
                                children: [
                                    (0, i.jsx)(el.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: eh.intl.formatToPlainString(eh.t.hUbQT2, { gameName: o.name }),
                                    }),
                                    (0, i.jsx)(et.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: eh.intl.string(eh.t["JKqu+4"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(h.$, {
                                variant: "secondary",
                                icon: ll.A,
                                text: eh.intl.string(eh.t.jynBQ5),
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
var ls = l(80687),
    lr = l(775602),
    lc = l(248643),
    lo = l(256905),
    lu = l(34337),
    ld = l(191096),
    lm = l(90721),
    lx = l(616337);
let lh = a.memo(function (e) {
        let { item: t, index: l, isSelected: n, isPlaying: s, onSelect: c, gameName: o } = e,
            u = a.useCallback(() => c(l), [c, l]);
        return (0, i.jsx)(ee.D, {
            className: r()(lx.JS, n && lx.Y4),
            onClick: u,
            children: (0, i.jsxs)("div", {
                className: lx.ub,
                children: [
                    (0, i.jsx)("img", {
                        src: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                        className: lx.xn,
                        alt: eh.intl.formatToPlainString(eh.t.COYYrn, { game: o }),
                        draggable: !1,
                    }),
                    "VIDEO" === t.type &&
                        (0, i.jsx)("div", {
                            className: lx.UZ,
                            children: (0, i.jsx)(ls.D, { playing: n && s, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    lg = a.memo(function (e) {
        let {
                item: t,
                reducedMotion: l,
                autoPlay: n,
                videoRef: s,
                mediaPlayerRef: r,
                onPlay: c,
                onPause: o,
                onFullscreenChange: u,
            } = e,
            d = a.useRef(null);
        return (
            (0, lm.A)({ videoRef: s, canvasRef: d, enabled: !l }),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    !l && (0, i.jsx)("canvas", { ref: d, className: lx.HW, "aria-hidden": "true" }),
                    (0, i.jsx)("div", {
                        className: lx.tN,
                        children: (0, i.jsx)(lc.A, {
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
                            renderLinkComponent: lu.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: u,
                            mediaPlayerClassName: lx.T9,
                            videoRef: s,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function lf(e) {
    let { game: t, trackAction: l } = e,
        [n, s] = a.useState(0),
        [r, c] = a.useState(null),
        [o, u] = a.useState(t.screenshotUrls),
        m = a.useRef(null),
        x = a.useRef(null),
        h = (0, d.bG)([lr.Ay], () => lr.Ay.useReducedMotion),
        { obscured: g } = (0, ld.I3)();
    o !== t.screenshotUrls && (u(t.screenshotUrls), s(0));
    let f = a.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, eN.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, eN.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                ...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })),
            ],
            [t.trailers, t.screenshotUrls],
        ),
        p = f.length > 0 ? Math.min(n, f.length - 1) : 0,
        j = f[p],
        v = j?.type === "VIDEO",
        E = a.useCallback(
            (e) => {
                let t = f[p],
                    l = f[e];
                t?.type === "IMAGE" && l?.type === "IMAGE" && t.url !== l.url ? c(t.url) : c(null), s(e);
            },
            [f, p],
        ),
        [A, I] = a.useState(!1),
        N = a.useRef(null),
        b = a.useCallback(() => {
            l(v ? G.Ws.ClickTrailer : G.Ws.ClickImage);
            let e = m.current,
                t = N.current,
                n = null != e && !e.paused,
                i = e?.muted ?? !0,
                a = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let r = f.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let l = t === p;
                    return { ...e, autoPlay: !!l && n, autoMute: !l || i, initialTimeSec: l ? a : void 0, videoRef: x };
                }
                return e;
            });
            (0, lo.R)({
                items: r,
                startingIndex: p,
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
                        I(l);
                },
            });
        }, [l, f, p, v]),
        S = a.useCallback(() => I(!0), []),
        C = a.useCallback(() => I(!1), []),
        R = a.useCallback(() => c(null), []),
        T = a.useCallback(
            (e) => {
                e && b();
            },
            [b],
        );
    return 0 === f.length
        ? null
        : (0, i.jsxs)("div", {
              className: lx.kL,
              children: [
                  v
                      ? (0, i.jsx)("div", {
                            className: lx.ND,
                            children: (0, i.jsx)(
                                lg,
                                {
                                    item: j,
                                    reducedMotion: h,
                                    autoPlay: !h && !g,
                                    videoRef: m,
                                    mediaPlayerRef: N,
                                    onPlay: S,
                                    onPause: C,
                                    onFullscreenChange: T,
                                },
                                `${p}-${j.url}`,
                            ),
                        })
                      : (0, i.jsxs)("div", {
                            className: lx.wp,
                            children: [
                                null != r &&
                                    !h &&
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: lx.Jy,
                                            onAnimationEnd: R,
                                            children: (0, i.jsx)("img", { src: r, className: lx.Db, alt: "" }),
                                        },
                                        r,
                                    ),
                                (0, i.jsx)("div", { className: lx.QN }),
                                (0, i.jsx)(ee.D, {
                                    className: lx.gv,
                                    onClick: b,
                                    children: (0, i.jsx)(
                                        "img",
                                        {
                                            src: j.url,
                                            className: lx.c8,
                                            alt: eh.intl.formatToPlainString(eh.t.COYYrn, { game: t.name }),
                                        },
                                        j.url,
                                    ),
                                }),
                            ],
                        }),
                  (0, i.jsx)(ei.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      children: f.map((e, l) =>
                          (0, i.jsx)(
                              lh,
                              { item: e, index: l, isPlaying: A, isSelected: l === p, onSelect: E, gameName: t.name },
                              `${l}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
var lp = l(49381),
    lj = l(661531),
    lv = l(223273);
function lE(e, t, l) {
    if (null == e || null == t || t < 10) return lv.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !l
            ? lv.vI.POSITIVE
            : t < (l ? 100 : 500) || e < 95
              ? lv.vI.VERY_POSITIVE
              : lv.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return lv.vI.MOSTLY_POSITIVE;
    if (e >= 40) return lv.vI.MIXED;
    if (e >= 20) return lv.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !l) return lv.vI.NEGATIVE;
    else if (t < (l ? 100 : 500)) return lv.vI.VERY_NEGATIVE;
    return lv.vI.OVERWHELMINGLY_NEGATIVE;
}
function lA(e) {
    switch (e) {
        case lv.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case lv.vI.OVERWHELMINGLY_POSITIVE:
        case lv.vI.VERY_POSITIVE:
        case lv.vI.POSITIVE:
        case lv.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case lv.vI.MIXED:
            return "steam-review-text-mixed";
        case lv.vI.MOSTLY_NEGATIVE:
        case lv.vI.NEGATIVE:
        case lv.vI.VERY_NEGATIVE:
        case lv.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var lI =
        (((n = {})[(n.MIGHTY = 1)] = "MIGHTY"),
        (n[(n.STRONG = 2)] = "STRONG"),
        (n[(n.FAIR = 3)] = "FAIR"),
        (n[(n.WEAK = 4)] = "WEAK"),
        n),
    lN = l(778591);
function lb(e) {
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
var lS = l(99392);
function lC(e) {
    let { url: t, trackAction: l, title: n, rating: s, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, tt.A)(),
        u = lE(s, r, "recent" === c),
        d = lA(u),
        x = a.useCallback(() => {
            l(G.Ws.SteamReviews), o(t);
        }, [o, l, t]);
    return (0, i.jsx)(ee.D, {
        onClick: x,
        className: lS.nf,
        role: "link",
        "aria-label": eh.intl.string(eh.t.YNC5Di),
        children: (0, i.jsxs)("div", {
            className: lS.U6,
            children: [
                (0, i.jsxs)("div", {
                    className: lS.tN,
                    children: [
                        (0, i.jsx)(lp.N, { size: "sm", color: lj.A.colors.ICON_STRONG.css }),
                        (0, i.jsx)(el.D, { variant: "heading-sm/medium", color: "text-strong", children: n }),
                    ],
                }),
                (0, i.jsx)(
                    m.m,
                    {
                        text:
                            u === lv.vI.NO_USER_REVIEWS
                                ? eh.intl.string(eh.t.CLMt8J)
                                : eh.intl
                                      .format(
                                          "recent" === c
                                              ? eh.t.TzvC0k
                                              : "localized" === c
                                                ? eh.t.EOfrwm
                                                : eh.t["lzANJ/"],
                                          { rating: s, rating_count: r?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, i.jsxs)("div", {
                            className: lS.Z0,
                            children: [
                                (0, i.jsx)(et.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    children: (function (e) {
                                        switch (e) {
                                            case lv.vI.NO_USER_REVIEWS:
                                                return eh.intl.string(eh.t.CLMt8J);
                                            case lv.vI.OVERWHELMINGLY_POSITIVE:
                                                return eh.intl.string(eh.t["75sx1S"]);
                                            case lv.vI.VERY_POSITIVE:
                                                return eh.intl.string(eh.t["EkOVg+"]);
                                            case lv.vI.POSITIVE:
                                                return eh.intl.string(eh.t.ZUkFtr);
                                            case lv.vI.MOSTLY_POSITIVE:
                                                return eh.intl.string(eh.t.M7Z09a);
                                            case lv.vI.MIXED:
                                                return eh.intl.string(eh.t.c8yuHR);
                                            case lv.vI.MOSTLY_NEGATIVE:
                                                return eh.intl.string(eh.t.H0MSjG);
                                            case lv.vI.NEGATIVE:
                                                return eh.intl.string(eh.t.vpLrgz);
                                            case lv.vI.VERY_NEGATIVE:
                                                return eh.intl.string(eh.t["5spYuX"]);
                                            case lv.vI.OVERWHELMINGLY_NEGATIVE:
                                                return eh.intl.string(eh.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != r &&
                                    u !== lv.vI.NO_USER_REVIEWS &&
                                    (0, i.jsx)(et.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: eh.intl
                                            .format(eh.t.sgIoin, { rating_count: r.toLocaleString() })
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
function lR(e) {
    let { game: t, url: l, trackAction: n } = e,
        { reviews: s } = t,
        r = s?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        u = r.topCriticRatingCount ?? -1,
        d = (o <= 0 || u <= 0) && null == c,
        m = (0, tt.A)(),
        x = a.useCallback(() => {
            n(G.Ws.OpenCriticReviews), m(l);
        }, [m, n, l]);
    return (0, i.jsx)(ee.D, {
        onClick: x,
        className: lS.nf,
        role: "link",
        "aria-label": eh.intl.string(eh.t.aLNBAw),
        children: (0, i.jsxs)("div", {
            className: lS.Ur,
            children: [
                (0, i.jsx)(el.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: eh.intl.string(eh.t["UxvER+"]),
                }),
                (0, i.jsxs)("div", {
                    className: lS.WA,
                    children: [
                        null != c ? (0, i.jsx)(lT, { tier: c }) : null,
                        null != c && o > 0 && u > 0 ? (0, i.jsx)(lk, { rating: o, tier: c }) : null,
                        d
                            ? (0, i.jsx)(et.E, {
                                  variant: "text-xs/medium",
                                  color: lA(lv.vI.NO_USER_REVIEWS),
                                  children: eh.intl.string(eh.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function lT(e) {
    let { tier: t } = e,
        l = (function (e) {
            switch (e) {
                case lI.MIGHTY:
                    return eh.intl.string(eh.t.aZej2g);
                case lI.STRONG:
                    return eh.intl.string(eh.t.MLxnSg);
                case lI.FAIR:
                    return eh.intl.string(eh.t["3f19KA"]);
                case lI.WEAK:
                    return eh.intl.string(eh.t.jtVgSh);
            }
        })(t),
        n = (function (e) {
            switch (e) {
                case lI.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case lI.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case lI.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case lI.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, i.jsx)(
        m.m,
        {
            text: l,
            children: (0, i.jsx)("div", {
                className: lS.TE,
                children: (0, i.jsx)("img", { src: n, alt: l, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function lk(e) {
    let { rating: t, tier: l } = e,
        { foregroundColor: n, backgroundColor: a } = (function (e) {
            let t = "";
            switch (e) {
                case lI.MIGHTY:
                    t = "#fc430a";
                    break;
                case lI.STRONG:
                    t = "#9e00b4";
                    break;
                case lI.FAIR:
                    t = "#4aa1ce";
                    break;
                case lI.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(l);
    return (0, i.jsx)(
        m.m,
        {
            text: eh.intl.string(eh.t.Ub4YR1),
            children: (0, i.jsxs)("div", {
                className: lS.TE,
                style: { backgroundColor: a },
                children: [
                    (0, i.jsx)(lb, { rating: t, strokeColor: n }),
                    (0, i.jsx)(et.E, {
                        variant: "text-xs/bold",
                        color: "always-white",
                        className: lS.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let ly = function (e) {
    let { game: t, trackAction: l } = e,
        n = (0, lN.I)(t.id),
        a = t.opencriticUrl,
        s = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED && null != n,
        r = t.reviews?.steam,
        c = lE(r?.recentRating, r?.recentRatingCount, !0),
        o = s && c !== lv.vI.NO_USER_REVIEWS,
        d =
            null != r &&
            null != r.localizedRating &&
            null != r.localizedRatingCount &&
            null != r.ratingCount &&
            r.localizedRatingCount >= 200 &&
            r.ratingCount >= 2e3,
        m = d ? r?.localizedRating : r?.rating,
        x = d ? r?.localizedRatingCount : r?.ratingCount,
        h = d ? eh.t["aWb+V4"] : eh.t["8e4LiB"],
        g = t.reviews?.opencritic != null && null != a;
    return s || o || g
        ? (0, i.jsxs)("div", {
              className: lS.uW,
              children: [
                  (0, i.jsx)("div", {
                      className: lS.Gf,
                      children: (0, i.jsx)(el.D, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: eh.intl.string(eh.t.GaAQXP),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: lS.kL,
                      children: [
                          o && null != n
                              ? (0, i.jsx)("div", {
                                    className: lS.WH,
                                    children: (0, i.jsx)(lC, {
                                        url: n,
                                        trackAction: l,
                                        title: eh.intl.string(eh.t.MQGNsN),
                                        rating: r?.recentRating,
                                        ratingCount: r?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          s && null != n
                              ? (0, i.jsx)("div", {
                                    className: lS.WH,
                                    children: (0, i.jsx)(lC, {
                                        url: n,
                                        trackAction: l,
                                        title: eh.intl.string(h),
                                        rating: m,
                                        ratingCount: x,
                                        tooltipVariant: d ? "localized" : "all",
                                    }),
                                })
                              : null,
                          g && null != a
                              ? (0, i.jsx)("div", {
                                    className: lS.WH,
                                    children: (0, i.jsx)(lR, { game: t, url: a, trackAction: l }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var lL = l(662388),
    lO = l(674658),
    l_ = l(828614),
    lG = l(561769),
    lM = l(758836),
    lP = l(804163);
let lw = a.createContext({ trackAction: () => {} });
function lD(e) {
    let { skuId: t, aspectRatio: l } = e,
        { product: n } = (0, lO.q)(t, !0),
        s = a.useContext(lG.v3),
        { closeModal: r } = q(),
        { trackAction: c } = a.useContext(lw),
        o = a.useCallback(() => {
            c(G.Ws.DiscordCollectiblesShopItem),
                r(),
                (0, lL.Cz)({
                    analyticsLocations: [I.A.GAME_PROFILE],
                    analyticsSource: I.A.GAME_PROFILE,
                    initialProductSkuId: t,
                    tab: lM.G2.CATALOG,
                });
        }, [c, r, t]);
    if (null == n) return null;
    let { flattenProductVariants: u, ...d } = s;
    return (0, i.jsx)(lG.v3.Provider, {
        value: { flattenProductVariants: u ?? !0, ...d },
        children: (0, i.jsx)(l_.A, {
            skuId: t,
            aspectRatio: l,
            cardClassName: lP.N,
            onClickCard: o,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
        }),
    });
}
function lV(e) {
    let { game: t, trackAction: l } = e,
        { closeModal: n } = q(),
        s = (function (e) {
            let { hasFetched: t, skuIds: l } = (0, d.cf)([M.A], () => ({
                hasFetched: null != e && M.A.hasShopCollectionBeenFetched(e),
                skuIds: null != e ? M.A.getShopCollectionSkuIds(e) : void 0,
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || t || M.A.isShopCollectionFetching(e) || eC(e);
                }, [e, t]),
                l ?? []
            );
        })(t.shopCollectionIds?.[0]),
        r = a.useCallback(() => {
            l(G.Ws.DiscordCollectiblesShop),
                n(),
                (0, lL.Cz)({
                    analyticsLocations: [I.A.GAME_PROFILE],
                    analyticsSource: I.A.GAME_PROFILE,
                    tab: lM.G2.CATALOG,
                });
        }, [l, n]),
        c = a.useMemo(() => ({ trackAction: l }), [l]);
    return 0 === s.length
        ? null
        : (0, i.jsx)(lw.Provider, {
              value: c,
              children: (0, i.jsx)(eV, {
                  title: eh.intl.string(eh.t["5DYPT8"]),
                  onClickViewAll: r,
                  children: (0, i.jsx)(ei.A, { gap: "md", children: s.map((e) => (0, i.jsx)(lD, { skuId: e }, e)) }),
              }),
          });
}
var lW = l(735438),
    lU = l.n(lW),
    lY = l(692969),
    lF = l(311043),
    lB = l(344005);
let lH = [],
    lz = [];
var lX = l(192389);
function lK(e) {
    let { game: t, trackClick: l } = e,
        { closeModal: n } = q(),
        s = (0, lY.A)({ gameId: t.id, source: G.Ob.SimilarGames }),
        r = a.useCallback(() => {
            l(G.Ws.ClickSimilarGame, t.id), null != s && (s(), n(!1));
        }, [t.id, l, s, n]);
    return (0, i.jsx)(m.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, i.jsx)(ee.D, {
            className: lX.Nr,
            onClick: r,
            "aria-label": eh.intl.formatToPlainString(eh.t["8QLQB+"], { gameName: t.name }),
            children: (0, i.jsx)(tA.A, { game: t, className: lX.xe, size: tA.w.SMALL, imageSize: 256 }),
        }),
    });
}
function lJ() {
    return (0, i.jsx)("div", { className: lX.nn });
}
function l$(e) {
    let { gameId: t, trackAction: l } = e,
        { enabled: n, dense: a } = D.useConfig({ location: "GameProfileSimilarGames" }),
        { isFetching: s, similarGames: r } = (function (e, t) {
            let l = t && !eS.has(e),
                { data: n, isLoading: i, error: a } = eT(e, l),
                s = l && null != n ? n : lH;
            (0, k.x)(s);
            let r = (0, d.bG)(
                    [lF.A],
                    () => s.some((e) => null == lF.A.getGame(e) && !lF.A.hasNoData(e) && !lF.A.didFetchingFail(e)),
                    [s],
                ),
                c = (0, d.yK)([lF.A, J.default], () => {
                    let e = J.default.getCurrentUser()?.nsfwAllowed;
                    return s
                        .map((e) => lF.A.getGame(e))
                        .filter((e) => null != e)
                        .filter((t) => (0, lB.T_)(t) && !(0, B.b)(t, e));
                }, [s]);
            return l
                ? { isFetching: (null == a && null == n) || i || r, similarGames: c }
                : { isFetching: !1, similarGames: lz };
        })(t, n),
        c = a ? 8 : 5,
        o = { "--custom-similar-games-per-page": c, "--custom-cover-min-width": `${a ? 60 : 96}px` };
    return s
        ? (0, i.jsx)(eV, {
              title: eh.intl.string(eh.t["6rLyQB"]),
              children: (0, i.jsx)("div", {
                  className: lX.XG,
                  style: o,
                  children: (0, i.jsx)(ei.A, {
                      gap: "md",
                      children: lU()
                          .range(0, c)
                          .map((e) => (0, i.jsx)(lJ, {}, e)),
                  }),
              }),
          })
        : 0 === r.length
          ? null
          : (0, i.jsx)(eV, {
                title: eh.intl.string(eh.t["6rLyQB"]),
                children: (0, i.jsx)("div", {
                    className: lX.XG,
                    style: o,
                    children: (0, i.jsx)(ei.A, {
                        gap: "md",
                        children: r.map((e) => (0, i.jsx)(lK, { game: e, trackClick: l }, e.id)),
                    }),
                }),
            });
}
var lq = l(871123),
    lQ = l(317560),
    lZ = l(467884),
    l0 = l(627771);
function l1(e) {
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
        : (0, i.jsx)(ei.A, {
              gap: "md",
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: l0.B,
                          children: (0, i.jsx)(lZ.A, {
                              positionInSection: t,
                              skuId: e,
                              variant: lZ.s.SMALL,
                              analyticsLocations: l,
                              onClick: s,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
function l8(e) {
    let { trackAction: t } = e,
        { socialLayerStorefrontRecommendationsData: l, closeModal: n } = q(),
        { analyticsLocations: s } = (0, N.Ay)([I.A.GAME_PROFILE]),
        r = a.useCallback(() => {
            l?.application != null && (t(G.Ws.GameShop), n(), (0, tP.default)({ applicationId: l.application.id }));
        }, [l, t, n]),
        c = a.useCallback(
            (e, i) => {
                let a = l?.guildId;
                null != a &&
                    (t(G.Ws.GameShopItem),
                    (0, lQ.R)({
                        skuId: e,
                        applicationId: i,
                        isStorefront: !1,
                        analyticsLocations: s,
                        onClose: () => {
                            let { pathname: e, search: t } = location;
                            (0, lq.rG)(e, t, i, a) && n();
                        },
                    }));
            },
            [t, n, s, l],
        );
    if (null == l) return null;
    let { skuIds: o } = l;
    return (0, i.jsx)(eV, {
        title: eh.intl.string(eh.t.WDdlUb),
        onClickViewAll: r,
        children: (0, i.jsx)(l1, { skuIds: o, analyticsLocations: s, onCardClick: c }),
    });
}
l(667532);
var l4 = l(853022);
let l2 = new Set(["1402418703554842694", "356877880938070016"]),
    l6 = [W.V.EPICGAMES, W.V.STEAM, W.V.ROBLOX, W.V.BATTLENET, W.V.RIOT, W.V.MINECRAFT];
var l3 = l(349361),
    l5 = l(924895),
    l9 = l(422688),
    l7 = l(505200),
    ne = l(695250);
let nt = function (e) {
    switch (e.category) {
        case W.V.STEAM:
            return {
                icon: lp.N,
                text: eh.intl.string(eh.t.FsANs4),
                ariaLabel: eh.intl.string(eh.t["P+ePTG"]),
                action: G.Ws.SteamStoreLink,
                url: e.url,
            };
        case W.V.EPICGAMES:
            return {
                icon: l3.r,
                text: eh.intl.string(eh.t.ZbBMHa),
                ariaLabel: eh.intl.string(eh.t.BwX0UW),
                action: G.Ws.EpicStoreLink,
                url: e.url,
            };
        case W.V.ROBLOX:
            return {
                icon: l5.H,
                text: eh.intl.string(eh.t["pJ+P+h"]),
                ariaLabel: eh.intl.string(eh.t.tYxpdf),
                action: G.Ws.RobloxStoreLink,
                url: e.url,
            };
        case W.V.BATTLENET:
            return {
                icon: l9.a,
                text: eh.intl.string(eh.t["A7grp+"]),
                ariaLabel: eh.intl.string(eh.t.x9at20),
                action: G.Ws.BattlenetStoreLink,
                url: e.url,
            };
        case W.V.RIOT:
            return {
                icon: l7.A,
                text: eh.intl.string(eh.t.h6MapL),
                ariaLabel: eh.intl.string(eh.t["528nvc"]),
                action: G.Ws.RiotStoreLink,
                url: e.url,
            };
        case W.V.MINECRAFT:
            return {
                icon: ne.m,
                text: eh.intl.string(eh.t["HZbmO+"]),
                ariaLabel: eh.intl.string(eh.t.WWTqYn),
                action: G.Ws.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: ts.Y,
                text: eh.intl.string(eh.t["QpN/Iz"]),
                ariaLabel: eh.intl.string(eh.t["8JZmmF"]),
                action: G.Ws.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
function nl(e) {
    return (0, i.jsx)(h.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var nn = l(352639);
function ni(e) {
    let t,
        l,
        n,
        i,
        s,
        r =
            ((t = (0, lN.I)(e?.id)),
            (l = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eb.d3x.XBOX_GAME_PASS && !(0, eJ.uJ)(e.id));
                return t?.id == null ? null : (0, l4.jA)(t.id);
            })(e)),
            (n = e?.id),
            (i = e?.websites),
            (s = e?.steamReleaseStatus),
            a.useMemo(() => {
                if ((null == i && null == l) || null == n) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== W.V.EPICGAMES || !!l2.has(n)) &&
                            (e.category !== W.V.STEAM || s !== u.Y.RETIRED_ABANDONED) &&
                            l6.includes(e.category),
                    ) ?? [];
                null == t ||
                    s === u.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === W.V.STEAM) ||
                    e.push({ category: W.V.STEAM, url: t });
                let a = e.sort((e, t) => (e.category === W.V.STEAM ? -1 : +(t.category === W.V.STEAM)));
                return null != l && a.unshift({ category: "XBOX_GAME_PASS", url: l }), a;
            }, [t, i, n, s, l]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function na(e) {
    let { data: t, trackAction: l } = e,
        n = (0, tt.A)();
    return (0, i.jsx)(nl, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            l(t.action), n(t.url);
        },
    });
}
let ns = function (e) {
    let { game: t, trackAction: n } = e,
        { showsStoreLinks: s, storeWebsites: r } = ni(t),
        c = a.useMemo(() => r.map(nt).filter((e) => null != e), [r]);
    if (!s) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, i.jsx)(na, { data: e, trackAction: n });
    }
    if (2 === c.length)
        return (0, i.jsxs)("div", {
            className: nn.G,
            children: [(0, i.jsx)(na, { data: c[0], trackAction: n }), (0, i.jsx)(na, { data: c[1], trackAction: n })],
        });
    let o = (0, i.jsx)(nl, {
        text: eh.intl.string(eh.t["/hMurx"]),
        "aria-label": eh.intl.string(eh.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: n, trackAction: a } = e;
                (0, f.openModalLazy)(async () => {
                    let { default: e } = await l.e("76758").then(l.bind(l, 459477));
                    return (l) => (0, i.jsx)(e, { game: t, websiteButtons: n, trackAction: a, ...l });
                });
            })({ game: t, websiteButtons: c, trackAction: n }),
    });
    return r.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, i.jsxs)("div", { className: nn.G, children: [(0, i.jsx)(na, { data: c[0], trackAction: n }), o] })
        : o;
};
var nr = l(123292);
function nc(e) {
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
                    ? (t(G.Ws.ShowLess), n("collapsed"))
                    : "collapsed" === l && (t(G.Ws.ShowMore), n("expanded"));
            }, [t, l]);
            return {
                isExpanded: "expanded" === l,
                showToggle: "expanded" === l || "collapsed" === l,
                handleToggleExpanded: i,
            };
        })(n, l),
        { isTwoColumn: u } = q(),
        d = a.useMemo(() => (u ? 8 : 5), [u]);
    if (null == t.description) return null;
    let m = s ? eh.intl.string(eh.t["6MwJo/"]) : eh.intl.string(eh.t.lBeKY2);
    return (0, i.jsxs)("div", {
        className: r()(to.fi, to.mX),
        children: [
            (0, i.jsx)(et.E, { ref: n, lineClamp: s ? void 0 : d, variant: "text-md/medium", children: t.description }),
            c && (0, i.jsx)(nr.Q, { onClick: o, text: m }),
        ],
    });
}
function no(e) {
    let { game: t, trackAction: l } = e;
    return (0, i.jsxs)("div", {
        className: to.oC,
        children: [
            (0, i.jsxs)("div", {
                className: to.lM,
                children: [(0, i.jsx)(lf, { game: t, trackAction: l }), (0, i.jsx)(nc, { game: t, trackAction: l })],
            }),
            (0, i.jsx)(eX, { gameId: t.id, trackAction: l }),
            (0, i.jsx)(l8, { trackAction: l }),
            (0, i.jsx)(lV, { game: t, trackAction: l }),
            (0, i.jsx)(l$, { gameId: t.id, trackAction: l }),
        ],
    });
}
function nu(e) {
    let { game: t, trackAction: l, analyticsLocations: n } = e,
        a = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: to.V0,
        children: [
            (0, i.jsx)(lf, { game: t, trackAction: l }),
            (0, i.jsxs)("div", {
                className: to.gr,
                children: [
                    (0, i.jsx)(le, { game: t, isTwoColumn: !1 }),
                    (0, i.jsxs)("div", {
                        className: to.E1,
                        children: [
                            (0, i.jsx)(ns, { game: t, trackAction: l }),
                            (0, i.jsx)(nc, { game: t, trackAction: l }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(la, { analyticsLocations: n, trackAction: l }),
            (0, i.jsx)(tv, { trackAction: l }),
            (0, i.jsx)(eX, { gameId: t.id, trackAction: l }),
            (0, i.jsx)(l8, { trackAction: l }),
            (0, i.jsx)(lV, { game: t, trackAction: l }),
            (0, i.jsx)(l$, { gameId: t.id, trackAction: l }),
            a && (0, i.jsx)(ly, { game: t, trackAction: l }),
            (0, i.jsx)(tg, { game: t, trackAction: l }),
        ],
    });
}
function nd(e) {
    let { onCloudPlayClick: t, analyticsLocations: l, trackAction: n } = e,
        { closeModal: s } = q();
    (0, b.A)({
        name: c.ImpressionNames.CLOUD_PLAY_CTA,
        type: c.ImpressionTypes.VIEW,
        properties: { location_stack: l },
    });
    let r = a.useCallback(() => {
        n(G.Ws.CloudPlay), s(), t();
    }, [s, t, n]);
    return (0, i.jsx)(m.m, {
        text: eh.intl.string(eh.t.JVwWva),
        position: "top",
        children: (0, i.jsx)(h.$, {
            icon: g.h,
            text: eh.intl.string(eh.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: r,
            fullWidth: !0,
        }),
    });
}
function nm(e) {
    let { gameId: t, cloudPlayAppId: l, analyticsLocations: n, trackAction: a } = e,
        s = (0, A.rC)({ applicationId: l, sourceApplicationId: t, analyticsLocations: n });
    return null == s
        ? null
        : (0, i.jsx)("div", {
              className: to.NC,
              children: (0, i.jsx)(nd, { onCloudPlayClick: s, analyticsLocations: n, trackAction: a }),
          });
}
function nx(e) {
    let { game: t, trackAction: l, analyticsLocations: n } = e,
        a = t.linkedApplications?.find((e) => e.type === v.Mh.NVIDIA)?.id,
        [s] = (0, y.L)(t.getOfficialApplicationId()),
        [c] = (0, y.L)(t.id),
        { showsStoreLinks: o } = ni(t),
        d = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: r()(to.Pn, to.fi, to.iH, o ? to.sV : to.gF),
        children: [
            null == a || s || c
                ? null
                : (0, i.jsx)(nm, { gameId: t.id, cloudPlayAppId: a, analyticsLocations: n, trackAction: l }),
            (0, i.jsxs)("div", {
                className: to.V0,
                children: [
                    (0, i.jsx)(ns, { game: t, trackAction: l }),
                    (0, i.jsx)(la, { analyticsLocations: n, trackAction: l }),
                    (0, i.jsx)(tv, { trackAction: l }),
                    d && (0, i.jsx)(ly, { game: t, trackAction: l }),
                    (0, i.jsx)(tg, { game: t, trackAction: l }),
                ],
            }),
        ],
    });
}
let nh = function (e) {
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
        [A, b] = a.useState(null),
        { clientThemesClassName: y } = (0, C.Ay)(),
        P = (0, d.bG)([_.default], () => _.default.locale),
        w = a.useMemo(() => (0, G.u9)(), []),
        { analyticsLocations: W } = (0, N.Ay)(I.A.GAME_PROFILE),
        U = (0, V.s)(t),
        { data: Y } = (0, k.I)(t),
        q = Y?.name ?? "",
        Q = (0, B.A)(Y),
        Z = a.useRef(null);
    a.useEffect(() => {
        Z.current = A;
    }, [A]);
    let {
            hasAlreadyLinked: ee,
            canStartAuthorization: et,
            fetched: el,
            startAuthorization: en,
            connectionApp: ei,
        } = (0, S.RD)(Y),
        { invite: ea, isMember: es } = F(Y, b),
        { socialLayerStorefrontRecommendationsData: er } = (function (e) {
            let t = J.default.getCurrentUser()?.id,
                l = a.useMemo(() => (null != t ? [t] : []), [t]),
                n = (0, d.bG)([z.A], () => (null != e ? z.A.getApplicationIdFromDetectableId(e) : void 0)),
                i = (0, H.h)(n),
                s = a.useMemo(() => (null != n ? [n] : []), [n]),
                { recommendations: r, status: c } = (0, K.XQ)({
                    applicationIds: s,
                    userIds: l,
                    numItems: 6,
                    source: X.B5.USER_PROFILE,
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
        })(t);
    function ec(e, n) {
        let { guildId: i, isVerified: a } = (0, G.VO)(Z.current);
        (0, G.Tn)({
            gameName: q,
            gameId: t,
            action: e,
            similarGameId: n,
            viewId: w,
            guildId: i,
            isVerified: a,
            source: l,
        });
    }
    (0, E.Ay)(() => {
        (0, G.rw)({ source: l, viewId: w, gameId: t, gameName: q, authorId: n, profileType: G.HV.FullProfile }),
            (0, R.He)();
    }),
        (0, E.Ay)(() => () => {
            let { isVerified: e, guildId: l } = (0, G.VO)(Z.current),
                n = Date.now(),
                i = U.map((e) => {
                    let t = (0, T.JM)(e) ? (0, T.W6)(e, n) : (0, T.aJ)(e, P);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                }),
                a = D.getConfig({ location: "GameProfileModalClose" }).enabled;
            (0, G.V_)({
                viewId: w,
                gameId: t,
                gameName: q,
                playedFriendIds: U.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: a ? (M.A.getSimilarGames(t) ?? []) : [],
                guildId: l,
                isVerified: e,
            });
        });
    let eo = a.useCallback((e) => {
            v(e.contentRect.width >= 800);
        }, []),
        eu = (0, o.w)(eo, [], { fireOnMount: !0 }),
        ed = a.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, f.closeAllModals)(), (0, O.closeUserProfileModal)()) : c();
            },
            [c],
        ),
        em = a.useCallback(() => ed(!1), [ed]),
        ex = a.useRef(null),
        eh = a.useCallback(() => ex.current?.getScrollerNode()?.scrollTop ?? 0, []),
        eg = a.useMemo(
            () => ({
                isTwoColumn: g,
                canStartAuthorization: et,
                hasAlreadyLinked: ee,
                fetchedAuthorization: el,
                startAuthorization: en,
                connectionApp: ei,
                invite: ea,
                isMember: es,
                socialLayerStorefrontRecommendationsData: er,
                closeModal: ed,
                getScrollOffset: eh,
            }),
            [g, et, ee, el, en, ei, ea, es, er, ed, eh],
        ),
        [ef, ep] = a.useState(!1),
        [ej, ev] = a.useState(150),
        eE = a.useRef(null);
    a.useEffect(() => {
        null != h && h > 0 && ex.current?.getScrollerNode()?.scrollTo({ top: h, behavior: "instant" });
    }, []);
    let eA = a.useCallback(
        (e) => {
            let t = e.currentTarget.scrollTop;
            if (null != eE.current) {
                let e = Math.max(0, 1 - t / 150);
                eE.current.style.opacity = String(e);
            }
            ep(t >= ej);
        },
        [ej],
    );
    return null == Y
        ? null
        : (0, i.jsx)(N.f5, {
              value: W,
              children: (0, i.jsx)(x.N, {
                  transitionState: s,
                  onClose: c,
                  children: (0, i.jsx)($.Provider, {
                      value: eg,
                      children: (0, i.jsx)("div", {
                          className: r()(y, to.kL),
                          ref: eu,
                          children: (0, i.jsxs)(L.A, {
                              obscured: Q,
                              onClose: em,
                              children: [
                                  (0, i.jsx)(t5, { game: Y, ref: eE }),
                                  (0, i.jsx)(t6, { game: Y, show: ef, trackAction: ec }),
                                  (0, i.jsx)(t3, { show: ef }),
                                  (0, i.jsxs)(p.Ch, {
                                      ref: ex,
                                      onScroll: eA,
                                      children: [
                                          (0, i.jsx)(lt, {
                                              game: Y,
                                              onSetCompactBarScrollThreshold: ev,
                                              showCompactBar: ef,
                                          }),
                                          (0, i.jsx)(j.F, {
                                              children: g
                                                  ? (0, i.jsxs)("div", {
                                                        className: to.jC,
                                                        children: [
                                                            (0, i.jsx)(no, { game: Y, trackAction: ec }),
                                                            (0, i.jsx)(nx, {
                                                                game: Y,
                                                                appContext: u,
                                                                source: l,
                                                                trackExternalAction: m,
                                                                trackAction: ec,
                                                                analyticsLocations: W,
                                                            }),
                                                        ],
                                                    })
                                                  : (0, i.jsx)("div", {
                                                        className: to.b9,
                                                        children: (0, i.jsx)(nu, {
                                                            game: Y,
                                                            trackAction: ec,
                                                            analyticsLocations: W,
                                                        }),
                                                    }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
};
