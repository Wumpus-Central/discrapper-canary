n.d(t, { default: () => lh });
var l,
    i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    c = n(562708),
    o = n(535185),
    u = n(792216),
    d = n(17928),
    m = n(990078),
    x = n(521489),
    h = n(821609),
    g = n(414499),
    f = n(192308),
    A = n(689175),
    p = n(707554),
    j = n(155718),
    v = n(964486),
    E = n(737393),
    I = n(793574),
    N = n(688810),
    b = n(139286),
    S = n(206828),
    k = n(590703),
    T = n(180170),
    C = n(583846),
    R = n(569926),
    y = n(928550),
    L = n(570962),
    G = n(975732),
    P = n(773669),
    O = n(409626),
    _ = n(422069),
    M = n(945810);
let w = { enabled: !1, dense: !1 },
    D = (0, M.mj)({
        kind: "user",
        name: "2026-06-similar-games-desktop",
        defaultConfig: w,
        variations: { 0: w, 1: { enabled: !0, dense: !0 }, 2: { enabled: !0, dense: !1 } },
    });
(0, M.mj)({
    kind: "user",
    name: "2026-06-similar-games-mobile",
    defaultConfig: w,
    variations: { 0: w, 1: { enabled: !0, dense: !0 }, 2: { enabled: !0, dense: !1 } },
});
var V = n(205184),
    U = n(505779),
    Y = n(970163),
    F = n(184989);
let W = function (e, t) {
    let [n, l] = a.useState(),
        i = a.useRef(null),
        r = a.useRef(t);
    a.useEffect(() => {
        r.current = t;
    }, [t]);
    let s = (0, d.bG)([F.A], () => n?.guild?.id != null && F.A.isMember(n?.guild?.id)),
        c = a.useMemo(
            () =>
                e?.websites?.find((e) => {
                    let { category: t } = e;
                    return t === U.V.DISCORD;
                }),
            [e?.websites],
        );
    return (
        a.useEffect(() => {
            async function e(e) {
                let t = e.split("/").pop();
                if (null != t) {
                    if (i.current?.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, Y.A)(t, "game_profile");
                    !0 !== e.banned && ((i.current = t), l(e.invite), null != e.invite && r.current?.(e.invite));
                }
            }
            null != c && e(c.url);
        }, [c]),
        { invite: n, isMember: s }
    );
};
var B = n(49491),
    H = n(429913),
    z = n(832163),
    X = n(561794),
    K = n(862772),
    J = n(287809);
let $ = a.createContext(void 0);
function q() {
    let e = a.useContext($);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var Q = n(621466),
    Z = n(966697),
    ee = n(939249),
    et = n(834730),
    en = n(534514),
    el = n(460905),
    ei = n(449543),
    ea = n(46054),
    er = n(58703);
n(321073);
var es = n(387408),
    ec = n(731068),
    eo = n(59318),
    eu = n(320095),
    ed = n(708676),
    em = n(383233),
    ex = n(998218),
    eh = n(375708);
let eg = /^#{1,3}\s+(.+)$/,
    ef = /^https?:\/\/\S+$/;
function eA(e, t, n) {
    let l = ex.A.toURLSafe(e);
    return null == l
        ? null
        : (l.searchParams.append("format", "webp"),
          null != t && l.searchParams.append("width", t.toString()),
          null != n && l.searchParams.append("height", n.toString()),
          l.toString());
}
var ep = n(60465),
    ej = n(158390),
    ev = n(636537),
    eE = n(228366),
    eI = n(927813),
    eN = n(371794),
    eb = n(652215);
let eS = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function ek(e) {
    eE.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
            await (0, eN.aP)({
                url: eb.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                query: { locale: P.default.locale },
                rejectWithError: !1,
                retries: 2,
            })
        ).body.products.flatMap((e) => e.sku_ids);
        eE.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: t });
    } catch (t) {
        eE.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
let eT = async (e) => {
        let t = (
            (await ev.Bo.get({ url: eb.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []
        ).filter((t) => t !== e && !eS.has(t));
        eE.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
    },
    eC = (0, d.UT)(_.A, {
        getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
        get: (e) => _.A.getSimilarGames(e) ?? null,
        load: (e) => eT(e),
        retryConfig: { backoff: () => new ej.A(5 * eI.A.Millis.SECOND, 5 * eI.A.Millis.MINUTE) },
        failureStaleAfter: eI.A.Seconds.MINUTE,
    });
async function eR(e, t) {
    eE.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let n = {};
        t?.limit != null && (n.limit = t.limit);
        let l = (await ev.Bo.get({ url: eb.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
        eE.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: l.messages.map((e) => {
                let t,
                    n,
                    l = (0, es.A)((0, eu.rh)(e)),
                    i = l.content,
                    a = (function (e) {
                        if ((0, em._c)(e))
                            return e.components
                                .filter((e) => e.type === j.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || ef.test(t.trim())
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
                        if ((0, em._c)(e)) {
                            let t = e.components.find((e) => e.type === j.I5.MEDIA_GALLERY),
                                n = t?.items[0]?.media;
                            if (null != n) {
                                let t = (0, ec.FE)(n);
                                if ("INVALID" !== t) return { ...n, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, eo.tT)(e.content_type));
                        if (null != t) return (0, ec.Rr)(t, e);
                        let n = e.attachments.find((e) => (0, eo.XB)(e.content_type));
                        if (null != n) return (0, ec.Rr)(n, e);
                        let l = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (l?.thumbnail != null)
                            return (0, ec.oU)(
                                l.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === l) },
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
                    })(l),
                    { title: s, body: c } =
                        ((t = a.indexOf("\n")),
                        (n = (-1 === t ? a : a.slice(0, t)).match(eg)),
                        null != n
                            ? { title: n[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    u =
                        a === i || (0, em._c)(l)
                            ? void 0
                            : (function (e) {
                                  let t = e.embeds[0];
                                  if (null == t) return;
                                  let n = t.author?.name,
                                      l = t.author?.iconProxyURL ?? t.author?.iconURL,
                                      i = t.footer?.text ?? t.provider?.name,
                                      a = t.footer?.iconProxyURL ?? t.footer?.iconURL,
                                      r = t.url,
                                      s = t.color ?? void 0;
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
                    body: c,
                    content: a,
                    timestamp: e.timestamp,
                    reactionCount: o,
                    embedSource: u,
                    poll: l.poll,
                };
            }),
            channelId: l.channel_id ?? void 0,
            guildId: l.guild_id ?? void 0,
        });
    } catch (t) {
        eE.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var ey = n(284009),
    eL = n.n(ey),
    eG = n(376728),
    eP = n(976860),
    eO = n(71393),
    e_ = n(385648);
async function eM(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    eL()(a.length > 0, "analyticsLocationStack must have at least one location");
    let r = a[a.length - 1],
        s = null;
    if ((null != t && ((n = t.guild?.id), (s = new Set(t.guild?.features))), null == n)) return;
    let c = eO.A.getGuild(n);
    if (c?.joinedAt == null)
        if (null == s || s.has(eb.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, e_.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: eb.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await eG.Ay.acceptInvite({ inviteKey: t.code, context: { location: r }, skipOnboarding: !0 }));
    (0, eP.pX)(eb.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var ew = n(320448),
    eD = n(274119);
function eV(e) {
    let { children: t, title: n, onClickViewAll: l } = e;
    return (0, i.jsxs)("div", {
        className: eD.k,
        children: [
            (0, i.jsxs)("div", {
                className: eD.w,
                children: [
                    (0, i.jsx)(en.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, i.jsx)(h.$, {
                            size: "sm",
                            icon: ew._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: l,
                            text: eh.intl.string(eh.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var eU = n(468489),
    eY = n(992595);
function eF(e, t) {
    return ea.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function eW(e) {
    let { variant: t, message: n, channelId: l, onCardClick: r } = e,
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
                    return r(n.id);
            },
            [r, n.id],
        ),
        x = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9,
        h = n.media?.proxyUrl ?? n.media?.url,
        g = (null != h ? eA(h) : null) ?? h,
        { embedSource: f } = n;
    return null == f
        ? null
        : (0, i.jsx)(ee.D, {
              className: u ? eU.jI : eU.IU,
              onClick: m,
              children: (0, i.jsxs)("div", {
                  className: u ? eU.GT : eU.s4,
                  children: [
                      null != f.url &&
                          (0, i.jsx)(et.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: eU.Ow,
                              children: f.url,
                          }),
                      (0, i.jsxs)("div", {
                          className: eU._d,
                          style: null != f.color ? { borderInlineStartColor: f.color } : void 0,
                          children: [
                              null != f.authorName &&
                                  (0, i.jsxs)("div", {
                                      className: eU.Tu,
                                      children: [
                                          null != f.authorIconUrl &&
                                              (0, i.jsx)("img", {
                                                  src: f.authorIconUrl,
                                                  className: eU.SG,
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
                              null != n.media &&
                                  null != g &&
                                  (0, i.jsx)("div", {
                                      className: eU.ax,
                                      children: (0, i.jsx)(Z.y, {
                                          readyState: c ? eb.Rv1.READY : eb.Rv1.LOADING,
                                          aspectRatio: x,
                                          placeholder: n.media.placeholder,
                                          placeholderVersion: n.media.placeholderVersion,
                                          placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                                          children: (0, i.jsx)("img", {
                                              src: g,
                                              className: eU.Lw,
                                              alt: "",
                                              draggable: !1,
                                              onLoad: d,
                                          }),
                                      }),
                                  }),
                              null != n.title &&
                                  (0, i.jsx)(en.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: u ? eU.KX : eU._N,
                                      children: eF(n.title, l),
                                  }),
                              n.body.length > 0 &&
                                  (0, i.jsxs)("div", {
                                      className: s()(eU.h_, eY.PT),
                                      children: [eF(n.body, l), (0, i.jsx)("div", { className: eU.fm })],
                                  }),
                              (0, i.jsxs)("div", {
                                  className: eU.ov,
                                  children: [
                                      null != f.providerIconUrl &&
                                          (0, i.jsx)("img", {
                                              src: f.providerIconUrl,
                                              className: eU.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, i.jsxs)(et.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != f.providerName ? `${f.providerName} \xb7 ` : "",
                                              (0, er.i$)(new Date(n.timestamp), "LL"),
                                          ],
                                      }),
                                      n.reactionCount > 0 &&
                                          (0, i.jsxs)("div", {
                                              className: eU.a5,
                                              children: [
                                                  (0, i.jsx)(el.n, { size: "xs", color: "currentColor" }),
                                                  (0, i.jsx)(et.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(eh.intl.currentLocale).format(
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
function eB(e) {
    let { variant: t, message: n, channelId: l, onCardClick: r } = e,
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
                    return r(n.id);
            },
            [r, n.id],
        ),
        x = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9,
        h = n.media?.proxyUrl ?? n.media?.url,
        g = (null != h ? eA(h) : null) ?? h,
        f = null != n.media && null != g;
    return (0, i.jsxs)(ee.D, {
        className: s()({ [eU.cG]: u && f, [eU.jI]: u && !f, [eU.IU]: !u }),
        onClick: m,
        children: [
            null != n.media &&
                null != g &&
                (0, i.jsx)("div", {
                    className: u ? eU._v : eU.eZ,
                    children: (0, i.jsx)(Z.y, {
                        readyState: c ? eb.Rv1.READY : eb.Rv1.LOADING,
                        aspectRatio: x,
                        placeholder: n.media.placeholder,
                        placeholderVersion: n.media.placeholderVersion,
                        placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                        children: (0, i.jsx)("img", {
                            src: g,
                            className: u ? eU.fk : eU.v,
                            alt: "",
                            draggable: !1,
                            onLoad: d,
                        }),
                    }),
                }),
            (0, i.jsxs)("div", {
                className: u ? eU.GT : eU.s4,
                children: [
                    null != n.title &&
                        (0, i.jsx)(en.D, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            className: u ? eU.KX : eU._N,
                            children: eF(n.title, l),
                        }),
                    n.body.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: s()(eU.h_, eY.PT),
                            children: [eF(n.body, l), (0, i.jsx)("div", { className: eU.fm })],
                        }),
                    (0, i.jsxs)("div", {
                        className: eU.ov,
                        children: [
                            (0, i.jsx)(et.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: (0, er.i$)(new Date(n.timestamp), "LL"),
                            }),
                            n.reactionCount > 0 &&
                                (0, i.jsxs)("div", {
                                    className: eU.a5,
                                    children: [
                                        (0, i.jsx)(el.n, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(et.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            children: new Intl.NumberFormat(eh.intl.currentLocale).format(
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
function eH(e) {
    let { variant: t, message: n, onCardClick: l } = e,
        r = "main" === t,
        { poll: s } = n,
        c = a.useCallback(() => l(n.id), [l, n.id]);
    if (null == s) return null;
    let o = s.answers.slice(0, 3),
        u = s.answers.length - o.length;
    return (0, i.jsx)(ee.D, {
        className: r ? eU.jI : eU.IU,
        onClick: c,
        children: (0, i.jsxs)("div", {
            className: r ? eU.GT : eU.s4,
            children: [
                (0, i.jsx)(en.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: eU.MH,
                    children: s.question.text,
                }),
                (0, i.jsxs)("div", {
                    className: eU.xd,
                    children: [
                        o.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    className: eU.Nf,
                                    children: (0, i.jsx)(et.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: eU.TT,
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
                                className: eU.PF,
                                children: eh.intl.format(eh.t["mv/nIa"], { count: u }),
                            }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: eU.ov,
                    children: (0, i.jsx)(et.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: eh.intl.format(eh.t.t0FTsH, {
                            createdAt: new Date(n.timestamp),
                            expiryLabel: (0, ed.J)(s.expiry) ?? eh.intl.string(eh.t["e+J3JZ"]),
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
          ? (0, i.jsx)(eW, { ...e })
          : (0, i.jsx)(eB, { ...e });
}
function eX(e) {
    let { gameId: t, trackAction: n } = e,
        { analyticsLocations: l } = (0, N.Ay)(),
        { invite: r, closeModal: s, getScrollOffset: c } = q(),
        {
            messages: o,
            guildId: u,
            channelId: m,
        } = (function (e) {
            let {
                data: t,
                hasFetched: n,
                isFetching: l,
            } = (0, d.cf)([_.A], () => ({
                data: null != e ? _.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && _.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && _.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || n || _.A.isAnnouncementsFetching(e) || eR(e, { limit: void 0 });
                }, [e, n, void 0]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l }
            );
        })(t),
        x = a.useCallback(() => {
            let e = r?.guild?.id ?? u;
            null != e &&
                null != m &&
                (n(O.GameProfileTrackActionActions.Announcements),
                ep.default.setGameProfilePendingReturn({ gameId: t, channelId: m, initialScrollOffset: c() }),
                s(),
                eM({ invite: r, guildId: e, channelId: m, analyticsLocationStack: l }));
        }, [n, s, c, r, u, m, l, t]),
        h = a.useCallback(
            (e) => {
                let i = r?.guild?.id ?? u;
                null != i &&
                    null != m &&
                    (n(O.GameProfileTrackActionActions.AnnouncementsItem),
                    ep.default.setGameProfilePendingReturn({ gameId: t, channelId: m, initialScrollOffset: c() }),
                    s(),
                    eM({ invite: r, guildId: i, channelId: m, messageId: e, analyticsLocationStack: l }));
            },
            [n, s, c, r, u, m, l, t],
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
var eK = n(541830),
    eJ = n(240248);
let e$ = [U.V.OFFICIAL, U.V.FACEBOOK, U.V.TWITTER, U.V.INSTAGRAM, U.V.YOUTUBE, U.V.BLUESKY, U.V.REDDIT, U.V.TWITCH];
var eq = n(808380);
let eQ = [eq.Y.DESKTOP, eq.Y.XBOX, eq.Y.PLAYSTATION, eq.Y.NINTENDO];
var eZ = n(349288),
    e0 = n(975807),
    e1 = n(194362);
function e8(e) {
    let { game: t, trackAction: n } = e,
        l = a.useCallback(async () => {
            n(O.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, e1.a)(eb.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, e0.A)(e);
        }, [n]),
        r = a.useCallback((e) => (0, i.jsx)(eZ.Anchor, { onClick: l, children: e }), [l]);
    return t.linkedApplications?.some((e) => e.type === j.Mh.OFFICIAL)
        ? null
        : (0, i.jsx)(et.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: eh.intl.format(eh.t.KAjfKl, { claimLink: r }),
          });
}
var e4 = n(998445),
    e2 = n(274997),
    e3 = n(80500),
    e6 = n(319745),
    e5 = n(488225),
    e9 = n(967492),
    e7 = n(72265),
    te = n(454346),
    tt = n(37948),
    tn = n(262420);
let tl = { size: "xs", colorClass: tn.wP };
function ti(e) {
    let { website: t, trackAction: n } = e,
        l = (0, tt.A)(),
        {
            action: r,
            icon: s,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case U.V.OFFICIAL:
                    return {
                        icon: (0, i.jsx)(e4.L, { ...t }),
                        action: O.GameProfileTrackActionActions.WebsiteLink,
                        title: eh.intl.string(eh.t.fOUKvg),
                    };
                case U.V.TWITTER:
                    return {
                        icon: (0, i.jsx)(e2.p, { ...t }),
                        action: O.GameProfileTrackActionActions.XLink,
                        title: eh.intl.string(eh.t.INic4y),
                    };
                case U.V.YOUTUBE:
                    return {
                        action: O.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, i.jsx)(e3.C, { ...t }),
                        title: eh.intl.string(eh.t.lNmxbE),
                    };
                case U.V.FACEBOOK:
                    return {
                        icon: (0, i.jsx)(e6.Z, { ...t }),
                        action: O.GameProfileTrackActionActions.FacebookLink,
                        title: eh.intl.string(eh.t.FjyREK),
                    };
                case U.V.INSTAGRAM:
                    return {
                        icon: (0, i.jsx)(e5.L, { ...t }),
                        action: O.GameProfileTrackActionActions.InstagramLink,
                        title: eh.intl.string(eh.t["cgR+IK"]),
                    };
                case U.V.BLUESKY:
                    return {
                        icon: (0, i.jsx)(e9.a, { ...t }),
                        action: O.GameProfileTrackActionActions.BlueskyLink,
                        title: eh.intl.string(eh.t["D/PHq5"]),
                    };
                case U.V.REDDIT:
                    return {
                        icon: (0, i.jsx)(e7.T, { ...t }),
                        action: O.GameProfileTrackActionActions.RedditLink,
                        title: eh.intl.string(eh.t["Hgb+fc"]),
                    };
                case U.V.TWITCH:
                    return {
                        icon: (0, i.jsx)(te.a, { ...t }),
                        action: O.GameProfileTrackActionActions.TwitchLink,
                        title: eh.intl.string(eh.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, tl),
        o = a.useCallback(() => {
            n(r), l(t.url);
        }, [r, l, n, t.url]);
    return (0, i.jsx)(m.m, {
        text: c,
        children: (0, i.jsx)(ee.D, { onClick: o, className: tn.yO, title: c, children: s }),
    });
}
var ta = n(31300),
    tr = n(802516),
    ts = n(22363),
    tc = n(418524),
    to = n(141535);
function tu(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case eq.Y.DESKTOP:
            return (0, i.jsx)(ta.k, { size: "xs", ...n });
        case eq.Y.XBOX:
            return (0, i.jsx)(tr.Y, { size: "xs", ...n });
        case eq.Y.PLAYSTATION:
            return (0, i.jsx)(ts.X, { size: "xs", ...n });
        case eq.Y.NINTENDO:
            return (0, i.jsx)(tc.M, { size: "xs", ...n });
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
var tm = n(424994),
    tx = n(60541);
function th() {
    return (0, i.jsx)(et.E, { variant: "text-sm/normal", color: "text-subtle", children: eh.intl.string(eh.t.GruYxV) });
}
let tg = function (e) {
    let { game: t, trackAction: n } = e,
        l = a.useMemo(() => t.genres.map(eK.du).join(", "), [t]),
        r = t.getCompanyByRole(j.wk.PUBLISHER),
        s = t.getCompanyByRole(j.wk.DEVELOPER),
        c = r.map((e) => e.name).join(", "),
        o = s.map((e) => e.name).join(", "),
        u = t.firstReleaseDate,
        d = a.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return (
                !e.has(eq.Y.DESKTOP) && (e.has(eq.Y.MACOS) || e.has(eq.Y.LINUX)) && n.push(eq.Y.DESKTOP),
                n.filter((e) => eQ.includes(e)).sort((e, t) => eQ.indexOf(e) - eQ.indexOf(t))
            );
        }, [t.platforms]),
        m = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return e$.includes(t);
            })
            .sort((e, t) => e$.indexOf(e.category) - e$.indexOf(t.category)),
        x = !(0, eJ.uJ)(l),
        h = !(0, eJ.uJ)(c),
        g = !(0, eJ.uJ)(o),
        f = !(0, eJ.uJ)(u),
        A = d.length > 0,
        p = m.length > 0 && !m.every((e) => (0, eJ.uJ)(e.url));
    return (0, i.jsxs)("div", {
        className: tx.uW,
        children: [
            (0, i.jsx)("div", {
                className: tx.Gf,
                children: (0, i.jsx)(en.D, {
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
                                      children: l,
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
                                children: 1 !== r.length ? eh.intl.string(eh.t.Hc7Enk) : eh.intl.string(eh.t["4Byy/G"]),
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
                                children: 1 !== s.length ? eh.intl.string(eh.t.KATEJB) : eh.intl.string(eh.t.na3PT0),
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
                                      children: er.i$(new Date(u), "LL"),
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
                            A
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
                            p
                                ? (0, i.jsx)("div", {
                                      className: tx.Gu,
                                      children: m.map((e) => (0, i.jsx)(ti, { website: e, trackAction: n }, e.url)),
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
            (0, i.jsx)("div", { className: tx.OQ, children: (0, i.jsx)(e8, { game: t, trackAction: n }) }),
        ],
    });
};
var tf = n(714991),
    tA = n(486020),
    tp = n(552523);
function tj(e) {
    let { trackAction: t } = e,
        { canStartAuthorization: n, hasAlreadyLinked: l, invite: r, isMember: s, closeModal: c } = q(),
        o = a.useCallback(() => {
            null != r &&
                (t(O.GameProfileTrackActionActions.JoinServer),
                c(),
                eE.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: r, code: r.code, context: eb.BRT.APP }));
        }, [r, t, c]);
    if (null == r || null == r.guild) return null;
    let u = tA.Ay.getGuildIconURL({ id: r.guild.id, icon: r.guild.icon, size: 48 }),
        d = tA.Ay.getGuildSplashURL({ id: r.guild.id, splash: r.guild.splash }),
        m = (n && !l) || null == d,
        x = (0, i.jsx)("img", {
            className: tp.$f,
            src: u,
            alt: eh.intl.formatToPlainString(eh.t.xm6W9D, { guildName: r.guild.name }),
            draggable: !1,
        }),
        g = m ? tp.To : tp.Kt,
        f = m ? tp.yj : tp.FS;
    return (0, i.jsxs)("div", {
        className: tp.uW,
        children: [
            (0, i.jsx)(en.D, {
                className: tp.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: eh.intl.string(eh.t["U2N+ci"]),
            }),
            (0, i.jsxs)("div", {
                className: tp.kL,
                children: [
                    !m && null != d && (0, i.jsx)("img", { className: tp.ll, src: d, alt: "", draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: tp.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: g,
                                children: [
                                    m
                                        ? x
                                        : (0, i.jsx)("div", {
                                              className: tp._C,
                                              children: (0, i.jsx)("div", { className: tp.kW, children: x }),
                                          }),
                                    (0, i.jsxs)("div", {
                                        className: f,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: tp.YS,
                                                children: [
                                                    (0, i.jsx)(tf.A, { guild: r.guild, size: 16 }),
                                                    (0, i.jsx)(en.D, {
                                                        variant: "heading-md/semibold",
                                                        color: "text-default",
                                                        children: r.guild.name,
                                                    }),
                                                ],
                                            }),
                                            !(0, eJ.uJ)(r.guild?.description) &&
                                                (0, i.jsx)(et.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: r.guild?.description,
                                                }),
                                            null != r.approximate_member_count || null != r.approximate_presence_count
                                                ? (0, i.jsxs)("div", {
                                                      className: tp.iR,
                                                      children: [
                                                          null != r.approximate_presence_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: tp.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: tp._o }),
                                                                      (0, i.jsx)(et.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: eh.intl.format(eh.t["LC+S+m"], {
                                                                              membersOnline:
                                                                                  r.approximate_presence_count,
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          null != r.approximate_member_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: tp.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: tp.jk }),
                                                                      (0, i.jsx)(et.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: eh.intl.format(eh.t.zRl6XR, {
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
                                text: s ? eh.intl.string(eh.t.cEnaWx) : eh.intl.string(eh.t.XpeFYr),
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
var tv = n(369606),
    tE = n(459746),
    tI = n(691540),
    tN = n(857250),
    tb = n(97483),
    tS = n(922016),
    tk = n(980707),
    tT = n(477782),
    tC = n(663341),
    tR = n(408278),
    ty = n(34188),
    tL = n(173936),
    tG = n(365199),
    tP = n(789645),
    tO = n(442433),
    t_ = n(50268),
    tM = n(44724),
    tw = n(957565),
    tD = n(341662),
    tV = n(67518),
    tU = n(540185),
    tY = n(926268),
    tF = n(53788),
    tW = n(831453),
    tB = n(785866),
    tH = n(555704),
    tz = n(47675),
    tX = n(633075),
    tK = n(289173),
    tJ = n(321191),
    t$ = n(958805),
    tq = n(735321),
    tQ = n(725386),
    tZ = n(280450),
    t0 = n(760751),
    t1 = n(403362);
async function t8(e) {
    let t = e((0, tq.BF)());
    await t$.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function t4(e) {
    let { game: t, className: n, trackAction: l } = e,
        r = a.useRef(null),
        s = a.useRef(null),
        c = (0, t_.A)({ id: t.id, label: eh.intl.string(eh.t.SHQGPj) }),
        o = (0, tV.n)(t.id, l),
        u = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, d.bG)([tZ.default], () => tZ.default.getId()),
                r = (0, d.bG)([t0.A], () => t0.A.getDetectableGame(t)),
                s = a.useMemo(
                    () => [
                        {
                            type: tU.x.FAVORITE_GAMES,
                            addLabel: eh.intl.string(eh.t.fgmitg),
                            removeLabel: eh.intl.string(eh.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: tY.C,
                        },
                        {
                            type: tU.x.PLAYED_GAMES,
                            addLabel: eh.intl.string(eh.t["0xIVLR"]),
                            removeLabel: eh.intl.string(eh.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: tF.G,
                        },
                        {
                            type: tU.x.CURRENT_GAMES,
                            addLabel: eh.intl.string(eh.t.G0c4En),
                            removeLabel: eh.intl.string(eh.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: tW.H,
                        },
                        {
                            type: tU.x.WANT_TO_PLAY_GAMES,
                            addLabel: eh.intl.string(eh.t.UuBS4K),
                            removeLabel: eh.intl.string(eh.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: tB._,
                        },
                    ],
                    [],
                ),
                c = (0, d.yK)([tJ.A], () => (null == l ? [] : (tJ.A.getUserProfile(l)?.widgets ?? [])), [l]),
                o = (0, tQ.A)(),
                u = a.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...o, ...c].filter((e) => e instanceof tX.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(t1.Vq).find((e) => t.has(e)) ?? null;
                }, [o, c, e]),
                m = a.useCallback(
                    async (e, n) => {
                        let l;
                        if (
                            (await t8((i) => {
                                let a = i.filter(tK.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.applicationId === t) || (null != a && (0, tq.uA)(a)))
                                        return i;
                                    let n = { applicationId: t },
                                        r = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new tK.Yy({ ...(a ?? { type: e }), games: r });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.applicationId !== t);
                                    l = new tK.Yy({ ...a, games: e });
                                }
                                var r = l;
                                let s = i.findIndex((e) => e.getUniqueKey() === r.getUniqueKey());
                                if (-1 === s) return [r, ...i];
                                let c = [...i];
                                return (c[s] = r), c;
                            }),
                            null == l)
                        )
                            return;
                        let i = l;
                        (0, tz.un)({
                            action: n ? "GAME_ADDED" : "GAME_REMOVED",
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
                            (await t8((n) =>
                                e
                                    ? n.some((e) => e instanceof tX.R && e.applicationId === u)
                                        ? n
                                        : [(t = new tX.R({ applicationId: u })), ...n]
                                    : ((t = n.find((e) => e instanceof tX.R && e.applicationId === u) ?? null),
                                      n.filter((e) => !(e instanceof tX.R && e.applicationId === u))),
                            ),
                            null == t)
                        )
                            return;
                        let n = t;
                        (0, tz.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...n.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [u],
                );
            if (null == l) return null;
            let h = null != e && null != r && (0, tq.XX)(r),
                g = [];
            if (null != u) {
                let e = c.some((e) => e instanceof tX.R && e.applicationId === u);
                g.push(
                    (0, i.jsx)(
                        tT.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? eh.intl.formatToPlainString(eh.t.Ktb1n8, { name: n })
                                : eh.intl.formatToPlainString(eh.t.Xp6iZt, { name: n }),
                            action: () => x(!e),
                            leadingAccessory: { type: "icon", icon: tH.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (h)
                for (let e of s) {
                    let n = c.filter(tK.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.applicationId === t),
                        a = !l && null != n && (0, tq.uA)(n);
                    g.push(
                        (0, i.jsx)(
                            tT.Dr,
                            {
                                id: e.menuId,
                                label: l ? e.removeLabel : e.addLabel,
                                subtext: a ? eh.intl.string(eh.t["86OoiH"]) : void 0,
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
        { invite: x, closeModal: g } = q(),
        f = (0, d.bG)([z.A], () => z.A.getApplicationIdFromDetectableId(t.id)),
        A = new Set(x?.guild?.features).has(eb.GuildFeatures.SOCIAL_LAYER_STOREFRONT),
        { enabled: p } = tD.A.useConfig({ location: "GameProfileOverflowMenu" }),
        j = a.useCallback(() => {
            null != f && (0, tM.G)({ applicationId: f });
        }, [f]),
        v = a.useCallback(() => {
            null != f && (l(O.GameProfileTrackActionActions.GameShop), (0, tM.default)({ applicationId: f }), g());
        }, [f, l, g]),
        E = a.useCallback(() => g(!1), [g]),
        I = a.useCallback(() => {
            l(O.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eb.BVt.GAME_PROFILE(t.id)}`;
            (0, tw.C)(e, () => {
                (0, tI.P0)((0, tN.o)(eh.intl.string(eh.t["+5kSoW"]), tb.Ck.SUCCESS));
            });
        }, [t.id, l]);
    return (0, i.jsxs)("div", {
        className: n,
        children: [
            null != u &&
                (0, i.jsx)(tS.Y, {
                    targetElementRef: s,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(tk.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                (0, tO.Z_)(), t();
                            },
                            "aria-label": eh.intl.string(eh.t.sidPSo),
                            onSelect: () => {},
                            children: (0, i.jsx)(tT.rX, { children: u }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: s,
                            children: (0, i.jsx)(h.$, {
                                icon: tC.p,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: eh.intl.string(eh.t.sidPSo),
                            }),
                        }),
                }),
            A &&
                null != x &&
                (0, i.jsx)(m.m, {
                    text: eh.intl.string(eh.t.apFNLU),
                    children: (0, i.jsx)(tR.K, {
                        icon: ty.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eh.intl.string(eh.t.apFNLU),
                        onMouseDown: j,
                        onClick: v,
                    }),
                }),
            p &&
                (0, i.jsx)(m.m, {
                    text: eh.intl.string(eh.t.WqhZss),
                    children: (0, i.jsx)(tR.K, {
                        icon: tL.q,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eh.intl.string(eh.t.WqhZss),
                        onClick: I,
                    }),
                }),
            (null != c || null != o) &&
                (0, i.jsx)(tS.Y, {
                    targetElementRef: r,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(tk.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                (0, tO.Z_)(), t();
                            },
                            "aria-label": eh.intl.string(eh.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(tT.rX, { children: o }), (0, i.jsx)(tT.rX, { children: c })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)(m.m, {
                            text: eh.intl.string(eh.t["UKOtz+"]),
                            children: (0, i.jsx)("div", {
                                ...e,
                                ref: r,
                                children: (0, i.jsx)(tR.K, {
                                    icon: tG.j,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": eh.intl.string(eh.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, i.jsx)(tR.K, {
                icon: tP.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: E,
                "aria-label": eh.intl.string(eh.t.cpT0Cq),
            }),
        ],
    });
}
var t2 = n(8208);
function t3(e) {
    let { game: t, show: n, trackAction: l } = e,
        a = t.name,
        r = t.getIconURL(80);
    return (0, i.jsxs)("div", {
        className: t2.y5,
        children: [
            (0, i.jsx)("div", { className: s()(t2.nI, n && t2.hD) }),
            (0, i.jsxs)("div", {
                className: s()(t2.A1, n && t2.g8),
                children: [
                    null != r && (0, i.jsx)("img", { src: r, alt: "", className: t2.V$, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: t2.hm,
                        children: [
                            (0, i.jsx)(en.D, { variant: "heading-md/semibold", lineClamp: 1, children: a }),
                            null != t.l30Rank && (0, i.jsx)(t7, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(t4, { game: t, className: t2.HK, trackAction: l }),
        ],
    });
}
function t6(e) {
    let { show: t } = e;
    return (0, i.jsx)("div", { className: s()(t2.nI, t2.Jn, t && t2.hD) });
}
let t5 = a.forwardRef(function (e, t) {
    let { game: n } = e,
        [l] = a.useState(() => Math.random()),
        r = a.useMemo(() => {
            let e = n.getBannerURL(2048);
            if (null != e) return e;
            if (null != n.screenshotUrls && n.screenshotUrls.length > 0) {
                let e = Math.floor(l * n.screenshotUrls.length);
                return n.screenshotUrls[e];
            }
            return "";
        }, [n, l]);
    return (0, eJ.uJ)(r)
        ? null
        : (0, i.jsxs)("div", {
              ref: t,
              children: [
                  (0, i.jsx)("div", { className: t2.y1, style: { backgroundImage: `url("${r}")` } }),
                  (0, i.jsx)("div", { className: t2.N4 }),
              ],
          });
});
function t9(e) {
    let { game: t } = e,
        n = (t.genres ?? []).map(eK.du).join(", ");
    return (0, eJ.uJ)(n) ? null : (0, i.jsx)(et.E, { variant: "text-md/normal", color: "text-muted", children: n });
}
function t7(e) {
    let { rank: t } = e;
    return (0, i.jsxs)("div", {
        className: t2.Qc,
        children: [
            (0, i.jsx)(tv.O, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, i.jsx)(et.E, {
                variant: "text-xs/bold",
                color: "none",
                children: eh.intl.formatToPlainString(eh.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function ne(e) {
    let { game: t, isTwoColumn: n } = e;
    return (0, i.jsx)("div", {
        className: n ? t2.n8 : t2.FS,
        children: (0, i.jsx)(tE.A, { game: t, className: t2.xe, size: tE.w.LARGE }),
    });
}
let nt = function (e) {
    let { game: t, onSetCompactBarScrollThreshold: n, showCompactBar: l } = e,
        { isTwoColumn: r } = q(),
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
        className: s()(t2.ap, l && t2.Gh),
        children: [
            r &&
                null != t &&
                (0, i.jsx)("div", {
                    className: t2.Tf,
                    children: (0, i.jsx)(tE.A, { game: t, className: t2.w$, size: tE.w.LARGE }),
                }),
            (0, i.jsxs)("div", {
                className: t2.lu,
                children: [
                    null != t.l30Rank && (0, i.jsx)(t7, { rank: t.l30Rank }),
                    (0, i.jsx)(en.D, { ref: o, variant: "heading-xxl/semibold", children: u }),
                    (0, i.jsx)(t9, { game: t }),
                ],
            }),
        ],
    });
};
var nn = n(141628),
    nl = n(289363),
    ni = n(448682);
function na(e) {
    let { trackAction: t, analyticsLocations: n } = e,
        {
            fetchedAuthorization: l,
            hasAlreadyLinked: r,
            canStartAuthorization: s,
            startAuthorization: c,
            connectionApp: o,
            invite: u,
        } = q(),
        m = (0, d.bG)([J.default], () => J.default.getCurrentUser()),
        x = a.useCallback(() => {
            t(O.GameProfileTrackActionActions.LinkAccount), c({ analyticsLocations: n });
        }, [t, c, n]);
    if (!l || null == o || !s || r || null == m) return null;
    let g = u?.guild != null ? tA.Ay.getGuildSplashURL({ id: u.guild.id, splash: u.guild.splash }) : null;
    return (0, i.jsxs)("div", {
        className: ni.uW,
        children: [
            (0, i.jsx)(en.D, {
                className: ni.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: eh.intl.string(eh.t["VDAhr+"]),
            }),
            (0, i.jsxs)("div", {
                className: ni.kL,
                children: [
                    null != g
                        ? (0, i.jsx)("img", { className: ni.ll, src: g, alt: "", draggable: !1 })
                        : (0, i.jsx)("div", { className: ni.sB, children: (0, i.jsx)(nl.default, { application: o }) }),
                    (0, i.jsxs)("div", {
                        className: ni.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: ni.FS,
                                children: [
                                    (0, i.jsx)(en.D, {
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
                                icon: nn.A,
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
var nr = n(80687),
    ns = n(775602),
    nc = n(248643),
    no = n(256905),
    nu = n(34337),
    nd = n(191096),
    nm = n(90721),
    nx = n(616337);
let nh = a.memo(function (e) {
        let { item: t, index: n, isSelected: l, isPlaying: r, onSelect: c, gameName: o } = e,
            u = a.useCallback(() => c(n), [c, n]);
        return (0, i.jsx)(ee.D, {
            className: s()(nx.JS, l && nx.Y4),
            onClick: u,
            children: (0, i.jsxs)("div", {
                className: nx.ub,
                children: [
                    (0, i.jsx)("img", {
                        src: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                        className: nx.xn,
                        alt: eh.intl.formatToPlainString(eh.t.COYYrn, { game: o }),
                        draggable: !1,
                    }),
                    "VIDEO" === t.type &&
                        (0, i.jsx)("div", {
                            className: nx.UZ,
                            children: (0, i.jsx)(nr.D, { playing: l && r, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    ng = a.memo(function (e) {
        let {
                item: t,
                reducedMotion: n,
                autoPlay: l,
                videoRef: r,
                mediaPlayerRef: s,
                onPlay: c,
                onPause: o,
                onFullscreenChange: u,
            } = e,
            d = a.useRef(null);
        return (
            (0, nm.A)({ videoRef: r, canvasRef: d, enabled: !n }),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    !n && (0, i.jsx)("canvas", { ref: d, className: nx.HW, "aria-hidden": "true" }),
                    (0, i.jsx)("div", {
                        className: nx.tN,
                        children: (0, i.jsx)(nc.A, {
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
                            renderLinkComponent: nu.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: u,
                            mediaPlayerClassName: nx.T9,
                            videoRef: r,
                            mediaPlayerRef: s,
                        }),
                    }),
                ],
            })
        );
    });
function nf(e) {
    let { game: t, trackAction: n } = e,
        [l, r] = a.useState(0),
        [s, c] = a.useState(null),
        [o, u] = a.useState(t.screenshotUrls),
        m = a.useRef(null),
        x = a.useRef(null),
        h = (0, d.bG)([ns.Ay], () => ns.Ay.useReducedMotion),
        { obscured: g } = (0, nd.I3)();
    o !== t.screenshotUrls && (u(t.screenshotUrls), r(0));
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
        A = f.length > 0 ? Math.min(l, f.length - 1) : 0,
        p = f[A],
        j = p?.type === "VIDEO",
        v = a.useCallback(
            (e) => {
                let t = f[A],
                    n = f[e];
                t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? c(t.url) : c(null), r(e);
            },
            [f, A],
        ),
        [E, I] = a.useState(!1),
        N = a.useRef(null),
        b = a.useCallback(() => {
            n(j ? O.GameProfileTrackActionActions.ClickTrailer : O.GameProfileTrackActionActions.ClickImage);
            let e = m.current,
                t = N.current,
                l = null != e && !e.paused,
                i = e?.muted ?? !0,
                a = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let s = f.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === A;
                    return { ...e, autoPlay: !!n && l, autoMute: !n || i, initialTimeSec: n ? a : void 0, videoRef: x };
                }
                return e;
            });
            (0, no.R)({
                items: s,
                startingIndex: A,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: r,
                onClose: () => {
                    let e = x.current,
                        t = N.current,
                        n = null != e ? !e.paused : l;
                    e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted))
                            : n && t?.setPlay(!0),
                        I(n);
                },
            });
        }, [n, f, A, j]),
        S = a.useCallback(() => I(!0), []),
        k = a.useCallback(() => I(!1), []),
        T = a.useCallback(() => c(null), []),
        C = a.useCallback(
            (e) => {
                e && b();
            },
            [b],
        );
    return 0 === f.length
        ? null
        : (0, i.jsxs)("div", {
              className: nx.kL,
              children: [
                  j
                      ? (0, i.jsx)("div", {
                            className: nx.ND,
                            children: (0, i.jsx)(
                                ng,
                                {
                                    item: p,
                                    reducedMotion: h,
                                    autoPlay: !h && !g,
                                    videoRef: m,
                                    mediaPlayerRef: N,
                                    onPlay: S,
                                    onPause: k,
                                    onFullscreenChange: C,
                                },
                                `${A}-${p.url}`,
                            ),
                        })
                      : (0, i.jsxs)("div", {
                            className: nx.wp,
                            children: [
                                null != s &&
                                    !h &&
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: nx.Jy,
                                            onAnimationEnd: T,
                                            children: (0, i.jsx)("img", { src: s, className: nx.Db, alt: "" }),
                                        },
                                        s,
                                    ),
                                (0, i.jsx)("div", { className: nx.QN }),
                                (0, i.jsx)(ee.D, {
                                    className: nx.gv,
                                    onClick: b,
                                    children: (0, i.jsx)(
                                        "img",
                                        {
                                            src: p.url,
                                            className: nx.c8,
                                            alt: eh.intl.formatToPlainString(eh.t.COYYrn, { game: t.name }),
                                        },
                                        p.url,
                                    ),
                                }),
                            ],
                        }),
                  (0, i.jsx)(ei.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      children: f.map((e, n) =>
                          (0, i.jsx)(
                              nh,
                              { item: e, index: n, isPlaying: E, isSelected: n === A, onSelect: v, gameName: t.name },
                              `${n}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
var nA = n(49381),
    np = n(661531),
    nj = n(223273);
function nv(e, t, n) {
    if (null == e || null == t || t < 10) return nj.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? nj.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? nj.vI.VERY_POSITIVE
              : nj.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return nj.vI.MOSTLY_POSITIVE;
    if (e >= 40) return nj.vI.MIXED;
    if (e >= 20) return nj.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return nj.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return nj.vI.VERY_NEGATIVE;
    return nj.vI.OVERWHELMINGLY_NEGATIVE;
}
function nE(e) {
    switch (e) {
        case nj.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case nj.vI.OVERWHELMINGLY_POSITIVE:
        case nj.vI.VERY_POSITIVE:
        case nj.vI.POSITIVE:
        case nj.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case nj.vI.MIXED:
            return "steam-review-text-mixed";
        case nj.vI.MOSTLY_NEGATIVE:
        case nj.vI.NEGATIVE:
        case nj.vI.VERY_NEGATIVE:
        case nj.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var nI =
        (((l = {})[(l.MIGHTY = 1)] = "MIGHTY"),
        (l[(l.STRONG = 2)] = "STRONG"),
        (l[(l.FAIR = 3)] = "FAIR"),
        (l[(l.WEAK = 4)] = "WEAK"),
        l),
    nN = n(778591);
function nb(e) {
    let { rating: t, strokeColor: n } = e,
        l = 2 * Math.PI * 16,
        a = Math.min(Math.max(t, 0), 100) / 100,
        r = a * l;
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
            strokeDasharray: `${r} ${l - r}`,
        }),
    });
}
var nS = n(99392);
function nk(e) {
    let { url: t, trackAction: n, title: l, rating: r, ratingCount: s, tooltipVariant: c = "all" } = e,
        o = (0, tt.A)(),
        u = nv(r, s, "recent" === c),
        d = nE(u),
        x = a.useCallback(() => {
            n(O.GameProfileTrackActionActions.SteamReviews), o(t);
        }, [o, n, t]);
    return (0, i.jsx)(ee.D, {
        onClick: x,
        className: nS.nf,
        role: "link",
        "aria-label": eh.intl.string(eh.t.YNC5Di),
        children: (0, i.jsxs)("div", {
            className: nS.U6,
            children: [
                (0, i.jsxs)("div", {
                    className: nS.tN,
                    children: [
                        (0, i.jsx)(nA.N, { size: "sm", color: np.A.colors.ICON_STRONG.css }),
                        (0, i.jsx)(en.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, i.jsx)(
                    m.m,
                    {
                        text:
                            u === nj.vI.NO_USER_REVIEWS
                                ? eh.intl.string(eh.t.CLMt8J)
                                : eh.intl
                                      .format(
                                          "recent" === c
                                              ? eh.t.TzvC0k
                                              : "localized" === c
                                                ? eh.t.EOfrwm
                                                : eh.t["lzANJ/"],
                                          { rating: r, rating_count: s?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, i.jsxs)("div", {
                            className: nS.Z0,
                            children: [
                                (0, i.jsx)(et.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    children: (function (e) {
                                        switch (e) {
                                            case nj.vI.NO_USER_REVIEWS:
                                                return eh.intl.string(eh.t.CLMt8J);
                                            case nj.vI.OVERWHELMINGLY_POSITIVE:
                                                return eh.intl.string(eh.t["75sx1S"]);
                                            case nj.vI.VERY_POSITIVE:
                                                return eh.intl.string(eh.t["EkOVg+"]);
                                            case nj.vI.POSITIVE:
                                                return eh.intl.string(eh.t.ZUkFtr);
                                            case nj.vI.MOSTLY_POSITIVE:
                                                return eh.intl.string(eh.t.M7Z09a);
                                            case nj.vI.MIXED:
                                                return eh.intl.string(eh.t.c8yuHR);
                                            case nj.vI.MOSTLY_NEGATIVE:
                                                return eh.intl.string(eh.t.H0MSjG);
                                            case nj.vI.NEGATIVE:
                                                return eh.intl.string(eh.t.vpLrgz);
                                            case nj.vI.VERY_NEGATIVE:
                                                return eh.intl.string(eh.t["5spYuX"]);
                                            case nj.vI.OVERWHELMINGLY_NEGATIVE:
                                                return eh.intl.string(eh.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != s &&
                                    u !== nj.vI.NO_USER_REVIEWS &&
                                    (0, i.jsx)(et.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: eh.intl
                                            .format(eh.t.sgIoin, { rating_count: s.toLocaleString() })
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
function nT(e) {
    let { game: t, url: n, trackAction: l } = e,
        { reviews: r } = t,
        s = r?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = s.tier,
        o = s.topCriticRating ?? -1,
        u = s.topCriticRatingCount ?? -1,
        d = (o <= 0 || u <= 0) && null == c,
        m = (0, tt.A)(),
        x = a.useCallback(() => {
            l(O.GameProfileTrackActionActions.OpenCriticReviews), m(n);
        }, [m, l, n]);
    return (0, i.jsx)(ee.D, {
        onClick: x,
        className: nS.nf,
        role: "link",
        "aria-label": eh.intl.string(eh.t.aLNBAw),
        children: (0, i.jsxs)("div", {
            className: nS.Ur,
            children: [
                (0, i.jsx)(en.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: eh.intl.string(eh.t["UxvER+"]),
                }),
                (0, i.jsxs)("div", {
                    className: nS.WA,
                    children: [
                        null != c ? (0, i.jsx)(nC, { tier: c }) : null,
                        null != c && o > 0 && u > 0 ? (0, i.jsx)(nR, { rating: o, tier: c }) : null,
                        d
                            ? (0, i.jsx)(et.E, {
                                  variant: "text-xs/medium",
                                  color: nE(nj.vI.NO_USER_REVIEWS),
                                  children: eh.intl.string(eh.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function nC(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case nI.MIGHTY:
                    return eh.intl.string(eh.t.aZej2g);
                case nI.STRONG:
                    return eh.intl.string(eh.t.MLxnSg);
                case nI.FAIR:
                    return eh.intl.string(eh.t["3f19KA"]);
                case nI.WEAK:
                    return eh.intl.string(eh.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case nI.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case nI.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case nI.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case nI.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, i.jsx)(
        m.m,
        {
            text: n,
            children: (0, i.jsx)("div", {
                className: nS.TE,
                children: (0, i.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function nR(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: a } = (function (e) {
            let t = "";
            switch (e) {
                case nI.MIGHTY:
                    t = "#fc430a";
                    break;
                case nI.STRONG:
                    t = "#9e00b4";
                    break;
                case nI.FAIR:
                    t = "#4aa1ce";
                    break;
                case nI.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, i.jsx)(
        m.m,
        {
            text: eh.intl.string(eh.t.Ub4YR1),
            children: (0, i.jsxs)("div", {
                className: nS.TE,
                style: { backgroundColor: a },
                children: [
                    (0, i.jsx)(nb, { rating: t, strokeColor: l }),
                    (0, i.jsx)(et.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: nS.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let ny = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, nN.I)(t.id),
        a = t.opencriticUrl,
        r = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED && null != l,
        s = t.reviews?.steam,
        c = nv(s?.recentRating, s?.recentRatingCount, !0),
        o = r && c !== nj.vI.NO_USER_REVIEWS,
        d =
            null != s &&
            null != s.localizedRating &&
            null != s.localizedRatingCount &&
            null != s.ratingCount &&
            s.localizedRatingCount >= 200 &&
            s.ratingCount >= 2e3,
        m = d ? s?.localizedRating : s?.rating,
        x = d ? s?.localizedRatingCount : s?.ratingCount,
        h = d ? eh.t["aWb+V4"] : eh.t["8e4LiB"],
        g = t.reviews?.opencritic != null && null != a;
    return r || o || g
        ? (0, i.jsxs)("div", {
              className: nS.uW,
              children: [
                  (0, i.jsx)("div", {
                      className: nS.Gf,
                      children: (0, i.jsx)(en.D, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: eh.intl.string(eh.t.GaAQXP),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: nS.kL,
                      children: [
                          o && null != l
                              ? (0, i.jsx)("div", {
                                    className: nS.WH,
                                    children: (0, i.jsx)(nk, {
                                        url: l,
                                        trackAction: n,
                                        title: eh.intl.string(eh.t.MQGNsN),
                                        rating: s?.recentRating,
                                        ratingCount: s?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          r && null != l
                              ? (0, i.jsx)("div", {
                                    className: nS.WH,
                                    children: (0, i.jsx)(nk, {
                                        url: l,
                                        trackAction: n,
                                        title: eh.intl.string(h),
                                        rating: m,
                                        ratingCount: x,
                                        tooltipVariant: d ? "localized" : "all",
                                    }),
                                })
                              : null,
                          g && null != a
                              ? (0, i.jsx)("div", {
                                    className: nS.WH,
                                    children: (0, i.jsx)(nT, { game: t, url: a, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var nL = n(662388),
    nG = n(674658),
    nP = n(828614),
    nO = n(561769),
    n_ = n(758836),
    nM = n(804163);
let nw = a.createContext({ trackAction: () => {} });
function nD(e) {
    let { skuId: t, aspectRatio: n } = e,
        { product: l } = (0, nG.q)(t, !0),
        r = a.useContext(nO.v3),
        { closeModal: s } = q(),
        { trackAction: c } = a.useContext(nw),
        o = a.useCallback(() => {
            c(O.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                s(),
                (0, nL.Cz)({
                    analyticsLocations: [I.A.GAME_PROFILE],
                    analyticsSource: I.A.GAME_PROFILE,
                    initialProductSkuId: t,
                    tab: n_.G2.CATALOG,
                });
        }, [c, s, t]);
    if (null == l) return null;
    let { flattenProductVariants: u, ...d } = r;
    return (0, i.jsx)(nO.v3.Provider, {
        value: { flattenProductVariants: u ?? !0, ...d },
        children: (0, i.jsx)(nP.A, {
            skuId: t,
            aspectRatio: n,
            cardClassName: nM.N,
            onClickCard: o,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
        }),
    });
}
function nV(e) {
    let { game: t, trackAction: n } = e,
        { closeModal: l } = q(),
        r = (function (e) {
            let { hasFetched: t, skuIds: n } = (0, d.cf)([_.A], () => ({
                hasFetched: null != e && _.A.hasShopCollectionBeenFetched(e),
                skuIds: null != e ? _.A.getShopCollectionSkuIds(e) : void 0,
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || t || _.A.isShopCollectionFetching(e) || ek(e);
                }, [e, t]),
                n ?? []
            );
        })(t.shopCollectionIds?.[0]),
        s = a.useCallback(() => {
            n(O.GameProfileTrackActionActions.DiscordCollectiblesShop),
                l(),
                (0, nL.Cz)({
                    analyticsLocations: [I.A.GAME_PROFILE],
                    analyticsSource: I.A.GAME_PROFILE,
                    tab: n_.G2.CATALOG,
                });
        }, [n, l]),
        c = a.useMemo(() => ({ trackAction: n }), [n]);
    return 0 === r.length
        ? null
        : (0, i.jsx)(nw.Provider, {
              value: c,
              children: (0, i.jsx)(eV, {
                  title: eh.intl.string(eh.t["5DYPT8"]),
                  onClickViewAll: s,
                  children: (0, i.jsx)(ei.A, { gap: "md", children: r.map((e) => (0, i.jsx)(nD, { skuId: e }, e)) }),
              }),
          });
}
var nU = n(735438),
    nY = n.n(nU),
    nF = n(692969),
    nW = n(311043),
    nB = n(344005);
let nH = [],
    nz = [];
var nX = n(192389);
function nK(e) {
    let { game: t, trackClick: n } = e,
        { closeModal: l } = q(),
        r = (0, nF.A)({ gameId: t.id, source: O.GameProfileSources.SimilarGames }),
        s = a.useCallback(() => {
            n(O.GameProfileTrackActionActions.ClickSimilarGame, t.id), null != r && (r(), l(!1));
        }, [t.id, n, r, l]);
    return (0, i.jsx)(m.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, i.jsx)(ee.D, {
            className: nX.Nr,
            onClick: s,
            "aria-label": eh.intl.formatToPlainString(eh.t["8QLQB+"], { gameName: t.name }),
            children: (0, i.jsx)(tE.A, { game: t, className: nX.xe, size: tE.w.SMALL, imageSize: 256 }),
        }),
    });
}
function nJ() {
    return (0, i.jsx)("div", { className: nX.nn });
}
function n$(e) {
    let { gameId: t, trackAction: n } = e,
        { enabled: l, dense: a } = D.useConfig({ location: "GameProfileSimilarGames" }),
        { isFetching: r, similarGames: s } = (function (e, t) {
            let n = t && !eS.has(e),
                { data: l, isLoading: i, error: a } = eC(e, n),
                r = n && null != l ? l : nH;
            (0, R.x)(r);
            let s = (0, d.bG)(
                    [nW.A],
                    () => r.some((e) => null == nW.A.getGame(e) && !nW.A.hasNoData(e) && !nW.A.didFetchingFail(e)),
                    [r],
                ),
                c = (0, d.yK)([nW.A, J.default], () => {
                    let e = J.default.getCurrentUser()?.nsfwAllowed;
                    return r
                        .map((e) => nW.A.getGame(e))
                        .filter((e) => null != e)
                        .filter((t) => (0, nB.T_)(t) && !(0, B.b)(t, e));
                }, [r]);
            return n
                ? { isFetching: (null == a && null == l) || i || s, similarGames: c }
                : { isFetching: !1, similarGames: nz };
        })(t, l),
        c = a ? 8 : 5,
        o = { "--custom-similar-games-per-page": c, "--custom-cover-min-width": `${a ? 60 : 96}px` };
    return r
        ? (0, i.jsx)(eV, {
              title: eh.intl.string(eh.t["6rLyQB"]),
              children: (0, i.jsx)("div", {
                  className: nX.XG,
                  style: o,
                  children: (0, i.jsx)(ei.A, {
                      gap: "md",
                      children: nY()
                          .range(0, c)
                          .map((e) => (0, i.jsx)(nJ, {}, e)),
                  }),
              }),
          })
        : 0 === s.length
          ? null
          : (0, i.jsx)(eV, {
                title: eh.intl.string(eh.t["6rLyQB"]),
                children: (0, i.jsx)("div", {
                    className: nX.XG,
                    style: o,
                    children: (0, i.jsx)(ei.A, {
                        gap: "md",
                        children: s.map((e) => (0, i.jsx)(nK, { game: e, trackClick: n }, e.id)),
                    }),
                }),
            });
}
var nq = n(871123),
    nQ = n(317560),
    nZ = n(467884),
    n0 = n(627771);
function n1(e) {
    let { skuIds: t, analyticsLocations: n, onCardClick: l } = e,
        r = a.useMemo(() => {
            if (null != l)
                return (e, t) => {
                    let { skuId: n, applicationId: i } = t;
                    e.preventDefault(), l(n, i);
                };
        }, [l]);
    return null == t || 0 === t.length
        ? null
        : (0, i.jsx)(ei.A, {
              gap: "md",
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: n0.B,
                          children: (0, i.jsx)(nZ.A, {
                              positionInSection: t,
                              skuId: e,
                              variant: nZ.s.SMALL,
                              analyticsLocations: n,
                              onClick: r,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
function n8(e) {
    let { trackAction: t } = e,
        { socialLayerStorefrontRecommendationsData: n, closeModal: l } = q(),
        { analyticsLocations: r } = (0, N.Ay)([I.A.GAME_PROFILE]),
        s = a.useCallback(() => {
            n?.application != null &&
                (t(O.GameProfileTrackActionActions.GameShop),
                l(),
                (0, tM.default)({ applicationId: n.application.id }));
        }, [n, t, l]),
        c = a.useCallback(
            (e, i) => {
                let a = n?.guildId;
                null != a &&
                    (t(O.GameProfileTrackActionActions.GameShopItem),
                    (0, nQ.R)({
                        skuId: e,
                        applicationId: i,
                        isStorefront: !1,
                        analyticsLocations: r,
                        onClose: () => {
                            let { pathname: e, search: t } = location;
                            (0, nq.rG)(e, t, i, a) && l();
                        },
                    }));
            },
            [t, l, r, n],
        );
    if (null == n) return null;
    let { skuIds: o } = n;
    return (0, i.jsx)(eV, {
        title: eh.intl.string(eh.t.WDdlUb),
        onClickViewAll: s,
        children: (0, i.jsx)(n1, { skuIds: o, analyticsLocations: r, onCardClick: c }),
    });
}
n(667532);
var n4 = n(853022);
let n2 = new Set(["1402418703554842694", "356877880938070016"]),
    n3 = [U.V.EPICGAMES, U.V.STEAM, U.V.ROBLOX, U.V.BATTLENET, U.V.RIOT, U.V.MINECRAFT];
var n6 = n(349361),
    n5 = n(924895),
    n9 = n(422688),
    n7 = n(505200),
    le = n(695250);
let lt = function (e) {
    switch (e.category) {
        case U.V.STEAM:
            return {
                icon: nA.N,
                text: eh.intl.string(eh.t.FsANs4),
                ariaLabel: eh.intl.string(eh.t["P+ePTG"]),
                action: O.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case U.V.EPICGAMES:
            return {
                icon: n6.r,
                text: eh.intl.string(eh.t.ZbBMHa),
                ariaLabel: eh.intl.string(eh.t.BwX0UW),
                action: O.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case U.V.ROBLOX:
            return {
                icon: n5.H,
                text: eh.intl.string(eh.t["pJ+P+h"]),
                ariaLabel: eh.intl.string(eh.t.tYxpdf),
                action: O.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case U.V.BATTLENET:
            return {
                icon: n9.a,
                text: eh.intl.string(eh.t["A7grp+"]),
                ariaLabel: eh.intl.string(eh.t.x9at20),
                action: O.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case U.V.RIOT:
            return {
                icon: n7.A,
                text: eh.intl.string(eh.t.h6MapL),
                ariaLabel: eh.intl.string(eh.t["528nvc"]),
                action: O.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case U.V.MINECRAFT:
            return {
                icon: le.m,
                text: eh.intl.string(eh.t["HZbmO+"]),
                ariaLabel: eh.intl.string(eh.t.WWTqYn),
                action: O.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: tr.Y,
                text: eh.intl.string(eh.t["QpN/Iz"]),
                ariaLabel: eh.intl.string(eh.t["8JZmmF"]),
                action: O.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
function ln(e) {
    return (0, i.jsx)(h.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var ll = n(352639);
function li(e) {
    let t,
        n,
        l,
        i,
        r,
        s =
            ((t = (0, nN.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eb.d3x.XBOX_GAME_PASS && !(0, eJ.uJ)(e.id));
                return t?.id == null ? null : (0, n4.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (r = e?.steamReleaseStatus),
            a.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== U.V.EPICGAMES || !!n2.has(l)) &&
                            (e.category !== U.V.STEAM || r !== u.Y.RETIRED_ABANDONED) &&
                            n3.includes(e.category),
                    ) ?? [];
                null == t ||
                    r === u.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === U.V.STEAM) ||
                    e.push({ category: U.V.STEAM, url: t });
                let a = e.sort((e, t) => (e.category === U.V.STEAM ? -1 : +(t.category === U.V.STEAM)));
                return null != n && a.unshift({ category: "XBOX_GAME_PASS", url: n }), a;
            }, [t, i, l, r, n]));
    return { storeWebsites: s, showsStoreLinks: s.length > 0 && null != e };
}
function la(e) {
    let { data: t, trackAction: n } = e,
        l = (0, tt.A)();
    return (0, i.jsx)(ln, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            n(t.action), l(t.url);
        },
    });
}
let lr = function (e) {
    let { game: t, trackAction: l } = e,
        { showsStoreLinks: r, storeWebsites: s } = li(t),
        c = a.useMemo(() => s.map(lt).filter((e) => null != e), [s]);
    if (!r) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, i.jsx)(la, { data: e, trackAction: l });
    }
    if (2 === c.length)
        return (0, i.jsxs)("div", {
            className: ll.G,
            children: [(0, i.jsx)(la, { data: c[0], trackAction: l }), (0, i.jsx)(la, { data: c[1], trackAction: l })],
        });
    let o = (0, i.jsx)(ln, {
        text: eh.intl.string(eh.t["/hMurx"]),
        "aria-label": eh.intl.string(eh.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: l, trackAction: a } = e;
                (0, f.openModalLazy)(async () => {
                    let { default: e } = await n.e("76758").then(n.bind(n, 459477));
                    return (n) => (0, i.jsx)(e, { game: t, websiteButtons: l, trackAction: a, ...n });
                });
            })({ game: t, websiteButtons: c, trackAction: l }),
    });
    return s.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, i.jsxs)("div", { className: ll.G, children: [(0, i.jsx)(la, { data: c[0], trackAction: l }), o] })
        : o;
};
var ls = n(123292);
function lc(e) {
    let { game: t, trackAction: n } = e,
        l = a.useRef(null),
        {
            isExpanded: r,
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
                    ? (t(O.GameProfileTrackActionActions.ShowLess), l("collapsed"))
                    : "collapsed" === n && (t(O.GameProfileTrackActionActions.ShowMore), l("expanded"));
            }, [t, n]);
            return {
                isExpanded: "expanded" === n,
                showToggle: "expanded" === n || "collapsed" === n,
                handleToggleExpanded: i,
            };
        })(l, n),
        { isTwoColumn: u } = q(),
        d = a.useMemo(() => (u ? 8 : 5), [u]);
    if (null == t.description) return null;
    let m = r ? eh.intl.string(eh.t["6MwJo/"]) : eh.intl.string(eh.t.lBeKY2);
    return (0, i.jsxs)("div", {
        className: s()(to.fi, to.mX),
        children: [
            (0, i.jsx)(et.E, { ref: l, lineClamp: r ? void 0 : d, variant: "text-md/medium", children: t.description }),
            c && (0, i.jsx)(ls.Q, { onClick: o, text: m }),
        ],
    });
}
function lo(e) {
    let { game: t, trackAction: n } = e;
    return (0, i.jsxs)("div", {
        className: to.oC,
        children: [
            (0, i.jsxs)("div", {
                className: to.lM,
                children: [(0, i.jsx)(nf, { game: t, trackAction: n }), (0, i.jsx)(lc, { game: t, trackAction: n })],
            }),
            (0, i.jsx)(eX, { gameId: t.id, trackAction: n }),
            (0, i.jsx)(n8, { trackAction: n }),
            (0, i.jsx)(nV, { game: t, trackAction: n }),
            (0, i.jsx)(n$, { gameId: t.id, trackAction: n }),
        ],
    });
}
function lu(e) {
    let { game: t, trackAction: n, analyticsLocations: l } = e,
        a = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: to.V0,
        children: [
            (0, i.jsx)(nf, { game: t, trackAction: n }),
            (0, i.jsxs)("div", {
                className: to.gr,
                children: [
                    (0, i.jsx)(ne, { game: t, isTwoColumn: !1 }),
                    (0, i.jsxs)("div", {
                        className: to.E1,
                        children: [
                            (0, i.jsx)(lr, { game: t, trackAction: n }),
                            (0, i.jsx)(lc, { game: t, trackAction: n }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(na, { analyticsLocations: l, trackAction: n }),
            (0, i.jsx)(tj, { trackAction: n }),
            (0, i.jsx)(eX, { gameId: t.id, trackAction: n }),
            (0, i.jsx)(n8, { trackAction: n }),
            (0, i.jsx)(nV, { game: t, trackAction: n }),
            (0, i.jsx)(n$, { gameId: t.id, trackAction: n }),
            a && (0, i.jsx)(ny, { game: t, trackAction: n }),
            (0, i.jsx)(tg, { game: t, trackAction: n }),
        ],
    });
}
function ld(e) {
    let { onCloudPlayClick: t, analyticsLocations: n, trackAction: l } = e,
        { closeModal: r } = q();
    (0, b.A)({
        name: c.ImpressionNames.CLOUD_PLAY_CTA,
        type: c.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let s = a.useCallback(() => {
        l(O.GameProfileTrackActionActions.CloudPlay), r(), t();
    }, [r, t, l]);
    return (0, i.jsx)(m.m, {
        text: eh.intl.string(eh.t.JVwWva),
        position: "top",
        children: (0, i.jsx)(h.$, {
            icon: g.h,
            text: eh.intl.string(eh.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: s,
            fullWidth: !0,
        }),
    });
}
function lm(e) {
    let { gameId: t, cloudPlayAppId: n, analyticsLocations: l, trackAction: a } = e,
        r = (0, E.rC)({ applicationId: n, sourceApplicationId: t, analyticsLocations: l });
    return null == r
        ? null
        : (0, i.jsx)("div", {
              className: to.NC,
              children: (0, i.jsx)(ld, { onCloudPlayClick: r, analyticsLocations: l, trackAction: a }),
          });
}
function lx(e) {
    let { game: t, trackAction: n, analyticsLocations: l } = e,
        a = t.linkedApplications?.find((e) => e.type === j.Mh.NVIDIA)?.id,
        [r] = (0, y.L)(t.getOfficialApplicationId()),
        [c] = (0, y.L)(t.id),
        { showsStoreLinks: o } = li(t),
        d = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: s()(to.Pn, to.fi, to.iH, o ? to.sV : to.gF),
        children: [
            null == a || r || c
                ? null
                : (0, i.jsx)(lm, { gameId: t.id, cloudPlayAppId: a, analyticsLocations: l, trackAction: n }),
            (0, i.jsxs)("div", {
                className: to.V0,
                children: [
                    (0, i.jsx)(lr, { game: t, trackAction: n }),
                    (0, i.jsx)(na, { analyticsLocations: l, trackAction: n }),
                    (0, i.jsx)(tj, { trackAction: n }),
                    d && (0, i.jsx)(ny, { game: t, trackAction: n }),
                    (0, i.jsx)(tg, { game: t, trackAction: n }),
                ],
            }),
        ],
    });
}
let lh = function (e) {
    let {
            gameId: t,
            source: n,
            sourceUserId: l,
            transitionState: r,
            onClose: c,
            appContext: u,
            trackExternalAction: m,
            initialScrollOffset: h,
        } = e,
        [g, j] = a.useState(!0),
        [E, b] = a.useState(null),
        { clientThemesClassName: y } = (0, k.Ay)(),
        M = (0, d.bG)([P.default], () => P.default.locale),
        w = a.useMemo(() => (0, O.generateViewId)(), []),
        { analyticsLocations: U } = (0, N.Ay)(I.A.GAME_PROFILE),
        Y = (0, V.s)(t),
        { data: F } = (0, R.I)(t),
        q = F?.name ?? "",
        Q = (0, B.A)(F),
        Z = a.useRef(null);
    a.useEffect(() => {
        Z.current = E;
    }, [E]);
    let {
            hasAlreadyLinked: ee,
            canStartAuthorization: et,
            fetched: en,
            startAuthorization: el,
            connectionApp: ei,
        } = (0, S.RD)(F),
        { invite: ea, isMember: er } = W(F, b),
        { socialLayerStorefrontRecommendationsData: es } = (function (e) {
            let t = J.default.getCurrentUser()?.id,
                n = a.useMemo(() => (null != t ? [t] : []), [t]),
                l = (0, d.bG)([z.A], () => (null != e ? z.A.getApplicationIdFromDetectableId(e) : void 0)),
                i = (0, H.h)(l),
                r = a.useMemo(() => (null != l ? [l] : []), [l]),
                { recommendations: s, status: c } = (0, K.XQ)({
                    applicationIds: r,
                    userIds: n,
                    numItems: 6,
                    source: X.B5.USER_PROFILE,
                });
            return {
                socialLayerStorefrontRecommendationsData: a.useMemo(
                    () =>
                        null == i || null == i.guildId || "success" !== c || 0 === s.length
                            ? null
                            : { application: i, skuIds: s.map((e) => e.id), guildId: i.guildId },
                    [i, c, s],
                ),
            };
        })(t);
    function ec(e, l) {
        let { guildId: i, isVerified: a } = (0, O.getGuildIdAndVerifiedFromInvite)(Z.current);
        (0, O.trackGameProfileAction)({
            gameName: q,
            gameId: t,
            action: e,
            similarGameId: l,
            viewId: w,
            guildId: i,
            isVerified: a,
            source: n,
        });
    }
    (0, v.Ay)(() => {
        (0, O.trackGameProfileOpen)({
            source: n,
            viewId: w,
            gameId: t,
            gameName: q,
            authorId: l,
            profileType: O.GameProfileTypes.FullProfile,
        }),
            (0, T.He)();
    }),
        (0, v.Ay)(() => () => {
            let { isVerified: e, guildId: n } = (0, O.getGuildIdAndVerifiedFromInvite)(Z.current),
                l = Date.now(),
                i = Y.map((e) => {
                    let t = (0, C.JM)(e) ? (0, C.W6)(e, l) : (0, C.aJ)(e, M);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                }),
                a = D.getConfig({ location: "GameProfileModalClose" }).enabled;
            (0, O.trackGameProfileClose)({
                viewId: w,
                gameId: t,
                gameName: q,
                playedFriendIds: Y.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: a ? (_.A.getSimilarGames(t) ?? []) : [],
                guildId: n,
                isVerified: e,
            });
        });
    let eo = a.useCallback((e) => {
            j(e.contentRect.width >= 800);
        }, []),
        eu = (0, o.w)(eo, [], { fireOnMount: !0 }),
        ed = a.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, f.closeAllModals)(), (0, G.closeUserProfileModal)()) : c();
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
                fetchedAuthorization: en,
                startAuthorization: el,
                connectionApp: ei,
                invite: ea,
                isMember: er,
                socialLayerStorefrontRecommendationsData: es,
                closeModal: ed,
                getScrollOffset: eh,
            }),
            [g, et, ee, en, el, ei, ea, er, es, ed, eh],
        ),
        [ef, eA] = a.useState(!1),
        [ep, ej] = a.useState(150),
        ev = a.useRef(null);
    a.useEffect(() => {
        null != h && h > 0 && ex.current?.getScrollerNode()?.scrollTo({ top: h, behavior: "instant" });
    }, []);
    let eE = a.useCallback(
        (e) => {
            let t = e.currentTarget.scrollTop;
            if (null != ev.current) {
                let e = Math.max(0, 1 - t / 150);
                ev.current.style.opacity = String(e);
            }
            eA(t >= ep);
        },
        [ep],
    );
    return null == F
        ? null
        : (0, i.jsx)(N.f5, {
              value: U,
              children: (0, i.jsx)(x.N, {
                  transitionState: r,
                  onClose: c,
                  children: (0, i.jsx)($.Provider, {
                      value: eg,
                      children: (0, i.jsx)("div", {
                          className: s()(y, to.kL),
                          ref: eu,
                          children: (0, i.jsxs)(L.A, {
                              obscured: Q,
                              onClose: em,
                              children: [
                                  (0, i.jsx)(t5, { game: F, ref: ev }),
                                  (0, i.jsx)(t3, { game: F, show: ef, trackAction: ec }),
                                  (0, i.jsx)(t6, { show: ef }),
                                  (0, i.jsxs)(A.Ch, {
                                      ref: ex,
                                      onScroll: eE,
                                      children: [
                                          (0, i.jsx)(nt, {
                                              game: F,
                                              onSetCompactBarScrollThreshold: ej,
                                              showCompactBar: ef,
                                          }),
                                          (0, i.jsx)(p.F, {
                                              children: g
                                                  ? (0, i.jsxs)("div", {
                                                        className: to.jC,
                                                        children: [
                                                            (0, i.jsx)(lo, { game: F, trackAction: ec }),
                                                            (0, i.jsx)(lx, {
                                                                game: F,
                                                                appContext: u,
                                                                source: n,
                                                                trackExternalAction: m,
                                                                trackAction: ec,
                                                                analyticsLocations: U,
                                                            }),
                                                        ],
                                                    })
                                                  : (0, i.jsx)("div", {
                                                        className: to.b9,
                                                        children: (0, i.jsx)(lu, {
                                                            game: F,
                                                            trackAction: ec,
                                                            analyticsLocations: U,
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
