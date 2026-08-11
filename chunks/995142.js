n.d(t, { default: () => lh });
var l,
    i = n(477900),
    a = n(582128),
    r = n(503698),
    s = n.n(r),
    c = n(562708),
    o = n(535185),
    u = n(792216),
    d = n(17928),
    m = n(521489),
    x = n(866665),
    h = n(821609),
    g = n(414499),
    f = n(192308),
    A = n(689175),
    p = n(707554),
    j = n(964486),
    v = n(881698),
    E = n(146779),
    I = n(793574),
    N = n(688810),
    b = n(139286),
    k = n(206828),
    S = n(590703),
    T = n(180170),
    C = n(583846),
    y = n(569926),
    R = n(928550),
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
    en = n(297264),
    el = n(460905),
    ei = n(449543),
    ea = n(46054),
    er = n(58703);
n(321073);
var es = n(155718),
    ec = n(387408),
    eo = n(731068),
    eu = n(59318),
    ed = n(320095),
    em = n(708676),
    ex = n(383233),
    eh = n(998218),
    eg = n(375708);
let ef = /^#{1,3}\s+(.+)$/,
    eA = /^https?:\/\/\S+$/;
function ep(e, t, n) {
    let l = eh.A.toURLSafe(e);
    return null == l
        ? null
        : (l.searchParams.append("format", "webp"),
          null != t && l.searchParams.append("width", t.toString()),
          null != n && l.searchParams.append("height", n.toString()),
          l.toString());
}
var ej = n(60465),
    ev = n(158390),
    eE = n(562465),
    eI = n(228366),
    eN = n(927813),
    eb = n(371794),
    ek = n(652215);
let eS = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function eT(e) {
    eI.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
            await (0, eb.aP)({
                url: ek.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                query: { locale: P.default.locale },
                rejectWithError: !1,
                retries: 2,
            })
        ).body.products.flatMap((e) => e.sku_ids);
        eI.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: t });
    } catch (t) {
        eI.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function eC(e) {
    let t = ((await eE.Bo.get({ url: ek.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !eS.has(t),
    );
    eI.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let ey = (0, d.UT)(_.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => _.A.getSimilarGames(e) ?? null,
    load: (e) => eC(e),
    retryConfig: { backoff: () => new ev.A(5 * eN.A.Millis.SECOND, 5 * eN.A.Millis.MINUTE) },
    failureStaleAfter: eN.A.Seconds.MINUTE,
});
async function eR(e, t) {
    eI.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let n = {};
        t?.limit != null && (n.limit = t.limit);
        let l = (await eE.Bo.get({ url: ek.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
        eI.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: l.messages.map((e) => {
                let t,
                    n,
                    l = (0, ec.A)((0, ed.rh)(e)),
                    i = l.content,
                    a = (function (e) {
                        if ((0, ex._c)(e))
                            return e.components
                                .filter((e) => e.type === es.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || eA.test(t.trim())
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
                        if ((0, ex._c)(e)) {
                            let t = e.components.find((e) => e.type === es.I5.MEDIA_GALLERY),
                                n = t?.items[0]?.media;
                            if (null != n) {
                                let t = (0, eo.FE)(n);
                                if ("INVALID" !== t) return { ...n, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, eu.tT)(e.content_type));
                        if (null != t) return (0, eo.Rr)(t, e);
                        let n = e.attachments.find((e) => (0, eu.XB)(e.content_type));
                        if (null != n) return (0, eo.Rr)(n, e);
                        let l = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (l?.thumbnail != null)
                            return (0, eo.oU)(
                                l.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === l) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, eo.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, eo.oU)(
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
                        (n = (-1 === t ? a : a.slice(0, t)).match(ef)),
                        null != n
                            ? { title: n[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    u =
                        a === i || (0, ex._c)(l)
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
        eI.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var eL = n(284009),
    eG = n.n(eL),
    eP = n(376728),
    eO = n(976860),
    e_ = n(71393),
    eM = n(449054);
async function ew(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    eG()(a.length > 0, "analyticsLocationStack must have at least one location");
    let r = a[a.length - 1],
        s = null;
    if ((null != t && ((n = t.guild?.id), (s = new Set(t.guild?.features))), null == n)) return;
    let c = e_.A.getGuild(n);
    if (c?.joinedAt == null)
        if (null == s || s.has(ek.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, eM.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: ek.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await eP.Ay.acceptInvite({ inviteKey: t.code, context: { location: r }, skipOnboarding: !0 }));
    (0, eO.pX)(ek.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var eD = n(320448),
    eV = n(502175);
function eU(e) {
    let { children: t, title: n, onClickViewAll: l } = e;
    return (0, i.jsxs)("div", {
        className: eV.k,
        children: [
            (0, i.jsxs)("div", {
                className: eV.w,
                children: [
                    (0, i.jsx)(en.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, i.jsx)(h.$, {
                            size: "sm",
                            icon: eD._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: l,
                            text: eg.intl.string(eg.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var eY = n(126177),
    eF = n(742715);
function eW(e, t) {
    return ea.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
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
        g = (null != h ? ep(h) : null) ?? h,
        { embedSource: f } = n;
    return null == f
        ? null
        : (0, i.jsx)(ee.D, {
              className: u ? eY.jI : eY.IU,
              onClick: m,
              children: (0, i.jsxs)("div", {
                  className: u ? eY.GT : eY.s4,
                  children: [
                      null != f.url &&
                          (0, i.jsx)(et.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: eY.Ow,
                              children: f.url,
                          }),
                      (0, i.jsxs)("div", {
                          className: eY._d,
                          style: null != f.color ? { borderInlineStartColor: f.color } : void 0,
                          children: [
                              null != f.authorName &&
                                  (0, i.jsxs)("div", {
                                      className: eY.Tu,
                                      children: [
                                          null != f.authorIconUrl &&
                                              (0, i.jsx)("img", {
                                                  src: f.authorIconUrl,
                                                  className: eY.SG,
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
                                      className: eY.ax,
                                      children: (0, i.jsx)(Z.y, {
                                          readyState: c ? ek.Rv1.READY : ek.Rv1.LOADING,
                                          aspectRatio: x,
                                          placeholder: n.media.placeholder,
                                          placeholderVersion: n.media.placeholderVersion,
                                          placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                                          children: (0, i.jsx)("img", {
                                              src: g,
                                              className: eY.Lw,
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
                                      className: u ? eY.KX : eY._N,
                                      children: eW(n.title, l),
                                  }),
                              n.body.length > 0 &&
                                  (0, i.jsxs)("div", {
                                      className: s()(eY.h_, eF.PT),
                                      children: [eW(n.body, l), (0, i.jsx)("div", { className: eY.fm })],
                                  }),
                              (0, i.jsxs)("div", {
                                  className: eY.ov,
                                  children: [
                                      null != f.providerIconUrl &&
                                          (0, i.jsx)("img", {
                                              src: f.providerIconUrl,
                                              className: eY.Cd,
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
                                              className: eY.a5,
                                              children: [
                                                  (0, i.jsx)(el.n, { size: "xs", color: "currentColor" }),
                                                  (0, i.jsx)(et.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(eg.intl.currentLocale).format(
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
function eH(e) {
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
        g = (null != h ? ep(h) : null) ?? h,
        f = null != n.media && null != g;
    return (0, i.jsxs)(ee.D, {
        className: s()({ [eY.cG]: u && f, [eY.jI]: u && !f, [eY.IU]: !u }),
        onClick: m,
        children: [
            null != n.media &&
                null != g &&
                (0, i.jsx)("div", {
                    className: u ? eY._v : eY.eZ,
                    children: (0, i.jsx)(Z.y, {
                        readyState: c ? ek.Rv1.READY : ek.Rv1.LOADING,
                        aspectRatio: x,
                        placeholder: n.media.placeholder,
                        placeholderVersion: n.media.placeholderVersion,
                        placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                        children: (0, i.jsx)("img", {
                            src: g,
                            className: u ? eY.fk : eY.v,
                            alt: "",
                            draggable: !1,
                            onLoad: d,
                        }),
                    }),
                }),
            (0, i.jsxs)("div", {
                className: u ? eY.GT : eY.s4,
                children: [
                    null != n.title &&
                        (0, i.jsx)(en.D, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            className: u ? eY.KX : eY._N,
                            children: eW(n.title, l),
                        }),
                    n.body.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: s()(eY.h_, eF.PT),
                            children: [eW(n.body, l), (0, i.jsx)("div", { className: eY.fm })],
                        }),
                    (0, i.jsxs)("div", {
                        className: eY.ov,
                        children: [
                            (0, i.jsx)(et.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: (0, er.i$)(new Date(n.timestamp), "LL"),
                            }),
                            n.reactionCount > 0 &&
                                (0, i.jsxs)("div", {
                                    className: eY.a5,
                                    children: [
                                        (0, i.jsx)(el.n, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(et.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            children: new Intl.NumberFormat(eg.intl.currentLocale).format(
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
function ez(e) {
    let { variant: t, message: n, onCardClick: l } = e,
        r = "main" === t,
        { poll: s } = n,
        c = a.useCallback(() => l(n.id), [l, n.id]);
    if (null == s) return null;
    let o = s.answers.slice(0, 3),
        u = s.answers.length - o.length;
    return (0, i.jsx)(ee.D, {
        className: r ? eY.jI : eY.IU,
        onClick: c,
        children: (0, i.jsxs)("div", {
            className: r ? eY.GT : eY.s4,
            children: [
                (0, i.jsx)(en.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: eY.MH,
                    children: s.question.text,
                }),
                (0, i.jsxs)("div", {
                    className: eY.xd,
                    children: [
                        o.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    className: eY.Nf,
                                    children: (0, i.jsx)(et.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: eY.TT,
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
                                className: eY.PF,
                                children: eg.intl.format(eg.t["mv/nIa"], { count: u }),
                            }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: eY.ov,
                    children: (0, i.jsx)(et.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: eg.intl.format(eg.t.t0FTsH, {
                            createdAt: new Date(n.timestamp),
                            expiryLabel: (0, em.J)(s.expiry) ?? eg.intl.string(eg.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function eX(e) {
    return null != e.message.poll
        ? (0, i.jsx)(ez, { ...e })
        : null != e.message.embedSource
          ? (0, i.jsx)(eB, { ...e })
          : (0, i.jsx)(eH, { ...e });
}
function eK(e) {
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
                ej.default.setGameProfilePendingReturn({ gameId: t, channelId: m, initialScrollOffset: c() }),
                s(),
                ew({ invite: r, guildId: e, channelId: m, analyticsLocationStack: l }));
        }, [n, s, c, r, u, m, l, t]),
        h = a.useCallback(
            (e) => {
                let i = r?.guild?.id ?? u;
                null != i &&
                    null != m &&
                    (n(O.GameProfileTrackActionActions.AnnouncementsItem),
                    ej.default.setGameProfilePendingReturn({ gameId: t, channelId: m, initialScrollOffset: c() }),
                    s(),
                    ew({ invite: r, guildId: i, channelId: m, messageId: e, analyticsLocationStack: l }));
            },
            [n, s, c, r, u, m, l, t],
        );
    return null == m || 0 === o.length
        ? null
        : (0, i.jsx)(eU, {
              title: eg.intl.string(eg.t.B0BV3Y),
              onClickViewAll: x,
              children: (0, i.jsx)(ei.A, {
                  gap: 16,
                  children: o.map((e) =>
                      (0, i.jsx)(eX, { variant: "small", message: e, channelId: m, onCardClick: h }, e.id),
                  ),
              }),
          });
}
var eJ = n(541830),
    e$ = n(240248),
    eq = n(808380);
let eQ = [eq.Y.DESKTOP, eq.Y.XBOX, eq.Y.PLAYSTATION, eq.Y.NINTENDO];
var eZ = n(349288),
    e0 = n(975807),
    e1 = n(194362);
function e8(e) {
    let { game: t, trackAction: n } = e,
        l = a.useCallback(async () => {
            n(O.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, e1.a)(ek.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, e0.A)(e);
        }, [n]),
        r = a.useCallback((e) => (0, i.jsx)(eZ.Anchor, { onClick: l, children: e }), [l]);
    return t.linkedApplications?.some((e) => e.type === es.Mh.OFFICIAL)
        ? null
        : (0, i.jsx)(et.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: eg.intl.format(eg.t.KAjfKl, { claimLink: r }),
          });
}
var e2 = n(998445),
    e4 = n(274997),
    e6 = n(80500),
    e5 = n(319745),
    e3 = n(488225),
    e9 = n(967492),
    e7 = n(72265),
    te = n(454346),
    tt = n(37948),
    tn = n(434028);
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
                        icon: (0, i.jsx)(e2.L, { ...t }),
                        action: O.GameProfileTrackActionActions.WebsiteLink,
                        title: eg.intl.string(eg.t.fOUKvg),
                    };
                case U.V.TWITTER:
                    return {
                        icon: (0, i.jsx)(e4.p, { ...t }),
                        action: O.GameProfileTrackActionActions.XLink,
                        title: eg.intl.string(eg.t.INic4y),
                    };
                case U.V.YOUTUBE:
                    return {
                        action: O.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, i.jsx)(e6.C, { ...t }),
                        title: eg.intl.string(eg.t.lNmxbE),
                    };
                case U.V.FACEBOOK:
                    return {
                        icon: (0, i.jsx)(e5.Z, { ...t }),
                        action: O.GameProfileTrackActionActions.FacebookLink,
                        title: eg.intl.string(eg.t.FjyREK),
                    };
                case U.V.INSTAGRAM:
                    return {
                        icon: (0, i.jsx)(e3.L, { ...t }),
                        action: O.GameProfileTrackActionActions.InstagramLink,
                        title: eg.intl.string(eg.t["cgR+IK"]),
                    };
                case U.V.BLUESKY:
                    return {
                        icon: (0, i.jsx)(e9.a, { ...t }),
                        action: O.GameProfileTrackActionActions.BlueskyLink,
                        title: eg.intl.string(eg.t["D/PHq5"]),
                    };
                case U.V.REDDIT:
                    return {
                        icon: (0, i.jsx)(e7.T, { ...t }),
                        action: O.GameProfileTrackActionActions.RedditLink,
                        title: eg.intl.string(eg.t["Hgb+fc"]),
                    };
                case U.V.TWITCH:
                    return {
                        icon: (0, i.jsx)(te.a, { ...t }),
                        action: O.GameProfileTrackActionActions.TwitchLink,
                        title: eg.intl.string(eg.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, tl),
        o = a.useCallback(() => {
            n(r), l(t.url);
        }, [r, l, n, t.url]);
    return (0, i.jsx)(x.m, {
        text: c,
        children: (0, i.jsx)(ee.D, { onClick: o, className: tn.yO, title: c, children: s }),
    });
}
var ta = n(31300),
    tr = n(802516),
    ts = n(22363),
    tc = n(418524),
    to = n(916983);
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
        x.m,
        {
            text: (function (e) {
                switch (e) {
                    case eq.Y.DESKTOP:
                        return eg.intl.string(eg.t.KT6uCJ);
                    case eq.Y.XBOX:
                        return eg.intl.string(eg.t.DDWUJp);
                    case eq.Y.PLAYSTATION:
                        return eg.intl.string(eg.t.fzMz2s);
                    case eq.Y.NINTENDO:
                        return eg.intl.string(eg.t.AMW8je);
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
    tx = n(880293);
function th() {
    return (0, i.jsx)(et.E, { variant: "text-sm/normal", color: "text-subtle", children: eg.intl.string(eg.t.GruYxV) });
}
let tg = function (e) {
    let { game: t, trackAction: n } = e,
        l = a.useMemo(() => t.genres.map(eJ.du).join(", "), [t]),
        r = t.getCompanyByRole(es.wk.PUBLISHER),
        s = t.getCompanyByRole(es.wk.DEVELOPER),
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
                return U.p.includes(t);
            })
            .sort((e, t) => U.p.indexOf(e.category) - U.p.indexOf(t.category)),
        x = !(0, e$.uJ)(l),
        h = !(0, e$.uJ)(c),
        g = !(0, e$.uJ)(o),
        f = !(0, e$.uJ)(u),
        A = d.length > 0,
        p = m.length > 0 && !m.every((e) => (0, e$.uJ)(e.url));
    return (0, i.jsxs)("div", {
        className: tx.uW,
        children: [
            (0, i.jsx)("div", {
                className: tx.Gf,
                children: (0, i.jsx)(en.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: eg.intl.string(eg.t["7OjmmH"]),
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
                                    1 !== t.genres.length ? eg.intl.string(eg.t.pDgwYB) : eg.intl.string(eg.t.mjFKqn),
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
                                children: 1 !== r.length ? eg.intl.string(eg.t.Hc7Enk) : eg.intl.string(eg.t["4Byy/G"]),
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
                                children: 1 !== s.length ? eg.intl.string(eg.t.KATEJB) : eg.intl.string(eg.t.na3PT0),
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
                                children: eg.intl.string(eg.t.H3mPDT),
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
                                children: d.length > 1 ? eg.intl.string(eg.t.PNqxNe) : eg.intl.string(eg.t["UxAag+"]),
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
                                children: eg.intl.string(eg.t["Oj3o1/"]),
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
                                children: eg.intl.string(eg.t["BwQ+9e"]),
                            }),
                            (0, i.jsx)(et.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: tx.Gu,
                                children: eg.intl.format(eg.t.XPFZVl, { igdbLink: tm.s8 }),
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
    tp = n(880851);
function tj(e) {
    let { trackAction: t } = e,
        { canStartAuthorization: n, hasAlreadyLinked: l, invite: r, isMember: s, closeModal: c } = q(),
        o = a.useCallback(() => {
            null != r &&
                (t(O.GameProfileTrackActionActions.JoinServer),
                c(),
                eI.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: r, code: r.code, context: ek.BRT.APP }));
        }, [r, t, c]);
    if (null == r || null == r.guild) return null;
    let u = tA.Ay.getGuildIconURL({ id: r.guild.id, icon: r.guild.icon, size: 48 }),
        d = tA.Ay.getGuildSplashURL({ id: r.guild.id, splash: r.guild.splash }),
        m = (n && !l) || null == d,
        x = (0, i.jsx)("img", {
            className: tp.$f,
            src: u,
            alt: eg.intl.formatToPlainString(eg.t.xm6W9D, { guildName: r.guild.name }),
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
                children: eg.intl.string(eg.t["U2N+ci"]),
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
                                            !(0, e$.uJ)(r.guild?.description) &&
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
                                                                          children: eg.intl.format(eg.t["LC+S+m"], {
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
                                                                          children: eg.intl.format(eg.t.zRl6XR, {
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
                                text: s ? eg.intl.string(eg.t.cEnaWx) : eg.intl.string(eg.t.XpeFYr),
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
    tk = n(922016),
    tS = n(980707),
    tT = n(477782),
    tC = n(663341),
    ty = n(408278),
    tR = n(34188),
    tL = n(173936),
    tG = n(365199),
    tP = n(789645),
    tO = n(442433),
    t_ = n(50268),
    tM = n(44724),
    tw = n(957565),
    tD = n(695366),
    tV = n(540185),
    tU = n(926268),
    tY = n(53788),
    tF = n(831453),
    tW = n(785866),
    tB = n(555704),
    tH = n(47675),
    tz = n(633075),
    tX = n(289173),
    tK = n(321191),
    tJ = n(958805),
    t$ = n(735321),
    tq = n(616714),
    tQ = n(280450),
    tZ = n(403362);
async function t0(e) {
    let t = e((0, t$.BF)());
    await tJ.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function t1(e) {
    var t;
    let l,
        { game: r, className: s, trackAction: c } = e,
        o = a.useRef(null),
        u = a.useRef(null),
        m = (0, t_.A)({ id: r.id, label: eg.intl.string(eg.t.SHQGPj) }),
        g =
            ((t = r.id),
            (l = a.useCallback(() => {
                null != t &&
                    (c?.(O.GameProfileTrackActionActions.Feedback),
                    (0, f.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("98064"),
                            n.e("22876"),
                            n.e("21072"),
                            n.e("8891"),
                            n.e("33771"),
                            n.e("46039"),
                            n.e("55266"),
                            n.e("27495"),
                        ]).then(n.bind(n, 651930));
                        return (n) => (0, i.jsx)(e, { ...n, detected: { gameId: t } });
                    }));
            }, [t, c])),
            null == t
                ? null
                : (0, i.jsx)(tT.Dr, {
                      id: "game-profile-something-wrong",
                      label: eg.intl.string(eg.t.qP2cXd),
                      action: l,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: tD.E },
                  })),
        A = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, d.bG)([tQ.default], () => tQ.default.getId()),
                r = a.useMemo(
                    () => [
                        {
                            type: tV.x.FAVORITE_GAMES,
                            addLabel: eg.intl.string(eg.t.fgmitg),
                            removeLabel: eg.intl.string(eg.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: tU.C,
                        },
                        {
                            type: tV.x.PLAYED_GAMES,
                            addLabel: eg.intl.string(eg.t["0xIVLR"]),
                            removeLabel: eg.intl.string(eg.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: tY.G,
                        },
                        {
                            type: tV.x.CURRENT_GAMES,
                            addLabel: eg.intl.string(eg.t.G0c4En),
                            removeLabel: eg.intl.string(eg.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: tF.H,
                        },
                        {
                            type: tV.x.WANT_TO_PLAY_GAMES,
                            addLabel: eg.intl.string(eg.t.UuBS4K),
                            removeLabel: eg.intl.string(eg.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: tW._,
                        },
                    ],
                    [],
                ),
                s = (0, d.yK)([tK.A], () => (null == l ? [] : (tK.A.getUserProfile(l)?.widgets ?? [])), [l]),
                c = (0, tq.A)(),
                o = a.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...c, ...s].filter((e) => e instanceof tz.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(tZ.Vq).find((e) => t.has(e)) ?? null;
                }, [c, s, e]),
                u = a.useCallback(
                    async (e, n) => {
                        let l;
                        if (
                            (await t0((i) => {
                                let a = i.filter(tX.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, t$.uA)(a))) return i;
                                    let n = { gameId: t },
                                        r = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new tX.Yy({ ...(a ?? { type: e }), games: r });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    l = new tX.Yy({ ...a, games: e });
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
                        (0, tH.un)({
                            action: n ? "GAME_ADDED" : "GAME_REMOVED",
                            ...i.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [t],
                ),
                m = a.useCallback(
                    async (e) => {
                        let t;
                        if (
                            null == o ||
                            (await t0((n) =>
                                e
                                    ? n.some((e) => e instanceof tz.R && e.applicationId === o)
                                        ? n
                                        : [(t = new tz.R({ applicationId: o })), ...n]
                                    : ((t = n.find((e) => e instanceof tz.R && e.applicationId === o) ?? null),
                                      n.filter((e) => !(e instanceof tz.R && e.applicationId === o))),
                            ),
                            null == t)
                        )
                            return;
                        let n = t;
                        (0, tH.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...n.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [o],
                );
            if (null == l) return null;
            let x = null != e && (0, t$.XX)(e),
                h = [];
            if (null != o) {
                let e = s.some((e) => e instanceof tz.R && e.applicationId === o);
                h.push(
                    (0, i.jsx)(
                        tT.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? eg.intl.formatToPlainString(eg.t.Ktb1n8, { name: n })
                                : eg.intl.formatToPlainString(eg.t.Xp6iZt, { name: n }),
                            action: () => m(!e),
                            leadingAccessory: { type: "icon", icon: tB.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (x)
                for (let e of r) {
                    let n = s.filter(tX.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.gameId === t),
                        a = !l && null != n && (0, t$.uA)(n);
                    h.push(
                        (0, i.jsx)(
                            tT.Dr,
                            {
                                id: e.menuId,
                                label: l ? e.removeLabel : e.addLabel,
                                subtext: a ? eg.intl.string(eg.t["86OoiH"]) : void 0,
                                subtextLineClamp: 1,
                                action: () => u(e.type, !l),
                                leadingAccessory: { type: "icon", icon: e.icon },
                                disabled: a,
                            },
                            e.type,
                        ),
                    );
                }
            return 0 === h.length ? null : h;
        })(r),
        { invite: p, closeModal: j } = q(),
        v = (0, d.bG)([z.A], () => z.A.getApplicationIdFromDetectableId(r.id)),
        E = new Set(p?.guild?.features).has(ek.GuildFeatures.SOCIAL_LAYER_STOREFRONT),
        I = a.useCallback(() => {
            null != v && (0, tM.G)({ applicationId: v });
        }, [v]),
        N = a.useCallback(() => {
            null != v && (c(O.GameProfileTrackActionActions.GameShop), (0, tM.default)({ applicationId: v }), j());
        }, [v, c, j]),
        b = a.useCallback(() => j(!1), [j]),
        k = a.useCallback(() => {
            c(O.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${ek.BVt.GAME_PROFILE(r.id)}`;
            (0, tw.C)(e, () => {
                (0, tI.P0)((0, tN.o)(eg.intl.string(eg.t["+5kSoW"]), tb.Ck.SUCCESS));
            });
        }, [r.id, c]);
    return (0, i.jsxs)("div", {
        className: s,
        children: [
            null != A &&
                (0, i.jsx)(tk.Y, {
                    targetElementRef: u,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(tS.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                (0, tO.Z_)(), t();
                            },
                            "aria-label": eg.intl.string(eg.t.sidPSo),
                            onSelect: () => {},
                            children: (0, i.jsx)(tT.rX, { children: A }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: u,
                            children: (0, i.jsx)(h.$, {
                                icon: tC.p,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: eg.intl.string(eg.t.sidPSo),
                            }),
                        }),
                }),
            E &&
                null != p &&
                (0, i.jsx)(x.m, {
                    text: eg.intl.string(eg.t.apFNLU),
                    children: (0, i.jsx)(ty.K, {
                        icon: tR.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eg.intl.string(eg.t.apFNLU),
                        onMouseDown: I,
                        onClick: N,
                    }),
                }),
            (0, i.jsx)(x.m, {
                text: eg.intl.string(eg.t.WqhZss),
                children: (0, i.jsx)(ty.K, {
                    icon: tL.q,
                    variant: "overlay-secondary",
                    size: "sm",
                    "aria-label": eg.intl.string(eg.t.WqhZss),
                    onClick: k,
                }),
            }),
            (null != m || null != g) &&
                (0, i.jsx)(tk.Y, {
                    targetElementRef: o,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(tS.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                (0, tO.Z_)(), t();
                            },
                            "aria-label": eg.intl.string(eg.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(tT.rX, { children: g }), (0, i.jsx)(tT.rX, { children: m })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)(x.m, {
                            text: eg.intl.string(eg.t["UKOtz+"]),
                            children: (0, i.jsx)("div", {
                                ...e,
                                ref: o,
                                children: (0, i.jsx)(ty.K, {
                                    icon: tG.j,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": eg.intl.string(eg.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, i.jsx)(ty.K, {
                icon: tP.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: b,
                "aria-label": eg.intl.string(eg.t.cpT0Cq),
            }),
        ],
    });
}
var t8 = n(708072);
function t2(e) {
    let { game: t, show: n, trackAction: l } = e,
        a = t.name,
        r = t.getIconURL(80);
    return (0, i.jsxs)("div", {
        className: t8.y5,
        children: [
            (0, i.jsx)("div", { className: s()(t8.nI, n && t8.hD) }),
            (0, i.jsxs)("div", {
                className: s()(t8.A1, n && t8.g8),
                children: [
                    null != r && (0, i.jsx)("img", { src: r, alt: "", className: t8.V$, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: t8.hm,
                        children: [
                            (0, i.jsx)(en.D, { variant: "heading-md/semibold", lineClamp: 1, children: a }),
                            null != t.l30Rank && (0, i.jsx)(t3, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(t1, { game: t, className: t8.HK, trackAction: l }),
        ],
    });
}
function t4(e) {
    let { show: t } = e;
    return (0, i.jsx)("div", { className: s()(t8.nI, t8.Jn, t && t8.hD) });
}
let t6 = a.forwardRef(function (e, t) {
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
    return (0, e$.uJ)(r)
        ? null
        : (0, i.jsxs)("div", {
              ref: t,
              children: [
                  (0, i.jsx)("div", { className: t8.y1, style: { backgroundImage: `url("${r}")` } }),
                  (0, i.jsx)("div", { className: t8.N4 }),
              ],
          });
});
function t5(e) {
    let { game: t } = e,
        n = (t.genres ?? []).map(eJ.du).join(", ");
    return (0, e$.uJ)(n) ? null : (0, i.jsx)(et.E, { variant: "text-md/normal", color: "text-muted", children: n });
}
function t3(e) {
    let { rank: t } = e;
    return (0, i.jsxs)("div", {
        className: t8.Qc,
        children: [
            (0, i.jsx)(tv.O, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, i.jsx)(et.E, {
                variant: "text-xs/bold",
                color: "none",
                children: eg.intl.formatToPlainString(eg.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function t9(e) {
    let { game: t, isTwoColumn: n } = e;
    return (0, i.jsx)("div", {
        className: n ? t8.n8 : t8.FS,
        children: (0, i.jsx)(tE.A, { game: t, className: t8.xe, size: tE.w.LARGE }),
    });
}
let t7 = function (e) {
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
        className: s()(t8.ap, l && t8.Gh),
        children: [
            r &&
                null != t &&
                (0, i.jsx)("div", {
                    className: t8.Tf,
                    children: (0, i.jsx)(tE.A, { game: t, className: t8.w$, size: tE.w.LARGE }),
                }),
            (0, i.jsxs)("div", {
                className: t8.lu,
                children: [
                    null != t.l30Rank && (0, i.jsx)(t3, { rank: t.l30Rank }),
                    (0, i.jsx)(en.D, { ref: o, variant: "heading-xxl/semibold", children: u }),
                    (0, i.jsx)(t5, { game: t }),
                ],
            }),
        ],
    });
};
var ne = n(141628),
    nt = n(289363),
    nn = n(847906);
function nl(e) {
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
        className: nn.uW,
        children: [
            (0, i.jsx)(en.D, {
                className: nn.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: eg.intl.string(eg.t["VDAhr+"]),
            }),
            (0, i.jsxs)("div", {
                className: nn.kL,
                children: [
                    null != g
                        ? (0, i.jsx)("img", { className: nn.ll, src: g, alt: "", draggable: !1 })
                        : (0, i.jsx)("div", { className: nn.sB, children: (0, i.jsx)(nt.default, { application: o }) }),
                    (0, i.jsxs)("div", {
                        className: nn.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: nn.FS,
                                children: [
                                    (0, i.jsx)(en.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: eg.intl.formatToPlainString(eg.t.hUbQT2, { gameName: o.name }),
                                    }),
                                    (0, i.jsx)(et.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: eg.intl.string(eg.t["JKqu+4"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(h.$, {
                                variant: "secondary",
                                icon: ne.A,
                                text: eg.intl.string(eg.t.jynBQ5),
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
var ni = n(80687),
    na = n(775602),
    nr = n(248643),
    ns = n(256905),
    nc = n(34337),
    no = n(191096),
    nu = n(90721),
    nd = n(219337);
let nm = a.memo(function (e) {
        let { item: t, index: n, isSelected: l, isPlaying: r, onSelect: c, gameName: o } = e,
            u = a.useCallback(() => c(n), [c, n]);
        return (0, i.jsx)(ee.D, {
            className: s()(nd.JS, l && nd.Y4),
            onClick: u,
            children: (0, i.jsxs)("div", {
                className: nd.ub,
                children: [
                    (0, i.jsx)("img", {
                        src: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                        className: nd.xn,
                        alt: eg.intl.formatToPlainString(eg.t.COYYrn, { game: o }),
                        draggable: !1,
                    }),
                    "VIDEO" === t.type &&
                        (0, i.jsx)("div", {
                            className: nd.UZ,
                            children: (0, i.jsx)(ni.D, { playing: l && r, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    nx = a.memo(function (e) {
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
            (0, nu.A)({ videoRef: r, canvasRef: d, enabled: !n }),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    !n && (0, i.jsx)("canvas", { ref: d, className: nd.HW, "aria-hidden": "true" }),
                    (0, i.jsx)("div", {
                        className: nd.tN,
                        children: (0, i.jsx)(nr.A, {
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
                            renderLinkComponent: nc.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: u,
                            mediaPlayerClassName: nd.T9,
                            videoRef: r,
                            mediaPlayerRef: s,
                        }),
                    }),
                ],
            })
        );
    });
function nh(e) {
    let { game: t, trackAction: n } = e,
        [l, r] = a.useState(0),
        [s, c] = a.useState(null),
        [o, u] = a.useState(t.screenshotUrls),
        m = a.useRef(null),
        x = a.useRef(null),
        h = (0, d.bG)([na.Ay], () => na.Ay.useReducedMotion),
        { obscured: g } = (0, no.I3)();
    o !== t.screenshotUrls && (u(t.screenshotUrls), r(0));
    let f = a.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, eb.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, eb.YE)(e.application_id, e.id, e.width, "webp"),
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
            (0, ns.R)({
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
        k = a.useCallback(() => I(!0), []),
        S = a.useCallback(() => I(!1), []),
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
              className: nd.kL,
              children: [
                  j
                      ? (0, i.jsx)("div", {
                            className: nd.ND,
                            children: (0, i.jsx)(
                                nx,
                                {
                                    item: p,
                                    reducedMotion: h,
                                    autoPlay: !h && !g,
                                    videoRef: m,
                                    mediaPlayerRef: N,
                                    onPlay: k,
                                    onPause: S,
                                    onFullscreenChange: C,
                                },
                                `${A}-${p.url}`,
                            ),
                        })
                      : (0, i.jsxs)("div", {
                            className: nd.wp,
                            children: [
                                null != s &&
                                    !h &&
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: nd.Jy,
                                            onAnimationEnd: T,
                                            children: (0, i.jsx)("img", { src: s, className: nd.Db, alt: "" }),
                                        },
                                        s,
                                    ),
                                (0, i.jsx)("div", { className: nd.QN }),
                                (0, i.jsx)(ee.D, {
                                    className: nd.gv,
                                    onClick: b,
                                    children: (0, i.jsx)(
                                        "img",
                                        {
                                            src: p.url,
                                            className: nd.c8,
                                            alt: eg.intl.formatToPlainString(eg.t.COYYrn, { game: t.name }),
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
                              nm,
                              { item: e, index: n, isPlaying: E, isSelected: n === A, onSelect: v, gameName: t.name },
                              `${n}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
var ng = n(49381),
    nf = n(661531),
    nA = n(223273);
function np(e, t, n) {
    if (null == e || null == t || t < 10) return nA.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? nA.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? nA.vI.VERY_POSITIVE
              : nA.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return nA.vI.MOSTLY_POSITIVE;
    if (e >= 40) return nA.vI.MIXED;
    if (e >= 20) return nA.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return nA.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return nA.vI.VERY_NEGATIVE;
    return nA.vI.OVERWHELMINGLY_NEGATIVE;
}
function nj(e) {
    switch (e) {
        case nA.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case nA.vI.OVERWHELMINGLY_POSITIVE:
        case nA.vI.VERY_POSITIVE:
        case nA.vI.POSITIVE:
        case nA.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case nA.vI.MIXED:
            return "steam-review-text-mixed";
        case nA.vI.MOSTLY_NEGATIVE:
        case nA.vI.NEGATIVE:
        case nA.vI.VERY_NEGATIVE:
        case nA.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var nv =
        (((l = {})[(l.MIGHTY = 1)] = "MIGHTY"),
        (l[(l.STRONG = 2)] = "STRONG"),
        (l[(l.FAIR = 3)] = "FAIR"),
        (l[(l.WEAK = 4)] = "WEAK"),
        l),
    nE = n(778591);
function nI(e) {
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
var nN = n(881672);
function nb(e) {
    let { url: t, trackAction: n, title: l, rating: r, ratingCount: s, tooltipVariant: c = "all" } = e,
        o = (0, tt.A)(),
        u = np(r, s, "recent" === c),
        d = nj(u),
        m = a.useCallback(() => {
            n(O.GameProfileTrackActionActions.SteamReviews), o(t);
        }, [o, n, t]);
    return (0, i.jsx)(ee.D, {
        onClick: m,
        className: nN.nf,
        role: "link",
        "aria-label": eg.intl.string(eg.t.YNC5Di),
        children: (0, i.jsxs)("div", {
            className: nN.U6,
            children: [
                (0, i.jsxs)("div", {
                    className: nN.tN,
                    children: [
                        (0, i.jsx)(ng.N, { size: "sm", color: nf.A.colors.ICON_STRONG.css }),
                        (0, i.jsx)(en.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, i.jsx)(
                    x.m,
                    {
                        text:
                            u === nA.vI.NO_USER_REVIEWS
                                ? eg.intl.string(eg.t.CLMt8J)
                                : eg.intl
                                      .format(
                                          "recent" === c
                                              ? eg.t.TzvC0k
                                              : "localized" === c
                                                ? eg.t.EOfrwm
                                                : eg.t["lzANJ/"],
                                          { rating: r, rating_count: s?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, i.jsxs)("div", {
                            className: nN.Z0,
                            children: [
                                (0, i.jsx)(et.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    children: (function (e) {
                                        switch (e) {
                                            case nA.vI.NO_USER_REVIEWS:
                                                return eg.intl.string(eg.t.CLMt8J);
                                            case nA.vI.OVERWHELMINGLY_POSITIVE:
                                                return eg.intl.string(eg.t["75sx1S"]);
                                            case nA.vI.VERY_POSITIVE:
                                                return eg.intl.string(eg.t["EkOVg+"]);
                                            case nA.vI.POSITIVE:
                                                return eg.intl.string(eg.t.ZUkFtr);
                                            case nA.vI.MOSTLY_POSITIVE:
                                                return eg.intl.string(eg.t.M7Z09a);
                                            case nA.vI.MIXED:
                                                return eg.intl.string(eg.t.c8yuHR);
                                            case nA.vI.MOSTLY_NEGATIVE:
                                                return eg.intl.string(eg.t.H0MSjG);
                                            case nA.vI.NEGATIVE:
                                                return eg.intl.string(eg.t.vpLrgz);
                                            case nA.vI.VERY_NEGATIVE:
                                                return eg.intl.string(eg.t["5spYuX"]);
                                            case nA.vI.OVERWHELMINGLY_NEGATIVE:
                                                return eg.intl.string(eg.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != s &&
                                    u !== nA.vI.NO_USER_REVIEWS &&
                                    (0, i.jsx)(et.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: eg.intl
                                            .format(eg.t.sgIoin, { rating_count: s.toLocaleString() })
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
function nk(e) {
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
        className: nN.nf,
        role: "link",
        "aria-label": eg.intl.string(eg.t.aLNBAw),
        children: (0, i.jsxs)("div", {
            className: nN.Ur,
            children: [
                (0, i.jsx)(en.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: eg.intl.string(eg.t["UxvER+"]),
                }),
                (0, i.jsxs)("div", {
                    className: nN.WA,
                    children: [
                        null != c ? (0, i.jsx)(nS, { tier: c }) : null,
                        null != c && o > 0 && u > 0 ? (0, i.jsx)(nT, { rating: o, tier: c }) : null,
                        d
                            ? (0, i.jsx)(et.E, {
                                  variant: "text-xs/medium",
                                  color: nj(nA.vI.NO_USER_REVIEWS),
                                  children: eg.intl.string(eg.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function nS(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case nv.MIGHTY:
                    return eg.intl.string(eg.t.aZej2g);
                case nv.STRONG:
                    return eg.intl.string(eg.t.MLxnSg);
                case nv.FAIR:
                    return eg.intl.string(eg.t["3f19KA"]);
                case nv.WEAK:
                    return eg.intl.string(eg.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case nv.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case nv.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case nv.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case nv.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, i.jsx)(
        x.m,
        {
            text: n,
            children: (0, i.jsx)("div", {
                className: nN.TE,
                children: (0, i.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function nT(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: a } = (function (e) {
            let t = "";
            switch (e) {
                case nv.MIGHTY:
                    t = "#fc430a";
                    break;
                case nv.STRONG:
                    t = "#9e00b4";
                    break;
                case nv.FAIR:
                    t = "#4aa1ce";
                    break;
                case nv.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, i.jsx)(
        x.m,
        {
            text: eg.intl.string(eg.t.Ub4YR1),
            children: (0, i.jsxs)("div", {
                className: nN.TE,
                style: { backgroundColor: a },
                children: [
                    (0, i.jsx)(nI, { rating: t, strokeColor: l }),
                    (0, i.jsx)(et.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: nN.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let nC = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, nE.I)(t.id),
        a = t.opencriticUrl,
        r = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED && null != l,
        s = t.reviews?.steam,
        c = np(s?.recentRating, s?.recentRatingCount, !0),
        o = r && c !== nA.vI.NO_USER_REVIEWS,
        d =
            null != s &&
            null != s.localizedRating &&
            null != s.localizedRatingCount &&
            null != s.ratingCount &&
            s.localizedRatingCount >= 200 &&
            s.ratingCount >= 2e3,
        m = d ? s?.localizedRating : s?.rating,
        x = d ? s?.localizedRatingCount : s?.ratingCount,
        h = d ? eg.t["aWb+V4"] : eg.t["8e4LiB"],
        g = t.reviews?.opencritic != null && null != a;
    return r || o || g
        ? (0, i.jsxs)("div", {
              className: nN.uW,
              children: [
                  (0, i.jsx)("div", {
                      className: nN.Gf,
                      children: (0, i.jsx)(en.D, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: eg.intl.string(eg.t.GaAQXP),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: nN.kL,
                      children: [
                          o && null != l
                              ? (0, i.jsx)("div", {
                                    className: nN.WH,
                                    children: (0, i.jsx)(nb, {
                                        url: l,
                                        trackAction: n,
                                        title: eg.intl.string(eg.t.MQGNsN),
                                        rating: s?.recentRating,
                                        ratingCount: s?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          r && null != l
                              ? (0, i.jsx)("div", {
                                    className: nN.WH,
                                    children: (0, i.jsx)(nb, {
                                        url: l,
                                        trackAction: n,
                                        title: eg.intl.string(h),
                                        rating: m,
                                        ratingCount: x,
                                        tooltipVariant: d ? "localized" : "all",
                                    }),
                                })
                              : null,
                          g && null != a
                              ? (0, i.jsx)("div", {
                                    className: nN.WH,
                                    children: (0, i.jsx)(nk, { game: t, url: a, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var ny = n(839534),
    nR = n(674658),
    nL = n(722258),
    nG = n(258245),
    nP = n(561769),
    nO = n(57020),
    n_ = n(758836),
    nM = n(610763);
let nw = a.createContext({ trackAction: () => {} });
function nD(e) {
    let { skuId: t, aspectRatio: n } = e,
        { product: l } = (0, nR.q)(t, !0),
        r = a.useContext(nP.v3),
        { trackAction: s } = a.useContext(nw),
        c = a.useRef(null),
        o = a.useCallback(
            (e) => {
                s(O.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    null != l &&
                        ((c.current = e.currentTarget),
                        (0, nL.B)({
                            skuId: t,
                            analyticsLocations: [I.A.GAME_PROFILE],
                            analyticsSource: I.A.GAME_PROFILE,
                            shouldCheckoutWithOrbs: (0, nO.A)({ product: l }),
                            returnRef: c,
                        }));
            },
            [s, t, l],
        );
    if (null == l) return null;
    let { flattenProductVariants: u, ...d } = r;
    return (0, i.jsx)(nP.v3.Provider, {
        value: { flattenProductVariants: u ?? !0, ...d },
        children: (0, i.jsx)(nG.A, {
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
                    null == e || t || _.A.isShopCollectionFetching(e) || eT(e);
                }, [e, t]),
                n ?? []
            );
        })(t.shopCollectionIds?.[0]),
        s = a.useCallback(() => {
            n(O.GameProfileTrackActionActions.DiscordCollectiblesShop),
                l(),
                (0, ny.Cz)({
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
              children: (0, i.jsx)(eU, {
                  title: eg.intl.string(eg.t["5DYPT8"]),
                  onClickViewAll: s,
                  children: (0, i.jsx)(ei.A, { gap: "md", children: r.map((e) => (0, i.jsx)(nD, { skuId: e }, e)) }),
              }),
          });
}
var nU = n(435558),
    nY = n.n(nU),
    nF = n(692969),
    nW = n(311043),
    nB = n(921138);
let nH = [],
    nz = [];
var nX = n(428189);
function nK(e) {
    let { game: t, trackClick: n } = e,
        { closeModal: l } = q(),
        r = (0, nF.A)({ gameId: t.id, source: O.GameProfileSources.SimilarGames }),
        s = a.useCallback(() => {
            n(O.GameProfileTrackActionActions.ClickSimilarGame, t.id), null != r && (l(!1), r());
        }, [t.id, n, r, l]);
    return (0, i.jsx)(x.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, i.jsx)(ee.D, {
            className: nX.Nr,
            onClick: s,
            "aria-label": eg.intl.formatToPlainString(eg.t["8QLQB+"], { gameName: t.name }),
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
                { data: l, isLoading: i, error: a } = ey(e, n),
                r = n && null != l ? l : nH;
            (0, y.x)(r);
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
        ? (0, i.jsx)(eU, {
              title: eg.intl.string(eg.t["6rLyQB"]),
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
          : (0, i.jsx)(eU, {
                title: eg.intl.string(eg.t["6rLyQB"]),
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
    n0 = n(934467);
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
    return (0, i.jsx)(eU, {
        title: eg.intl.string(eg.t.WDdlUb),
        onClickViewAll: s,
        children: (0, i.jsx)(n1, { skuIds: o, analyticsLocations: r, onCardClick: c }),
    });
}
n(667532);
var n2 = n(853022);
let n4 = new Set(["1402418703554842694", "356877880938070016"]),
    n6 = [U.V.EPICGAMES, U.V.STEAM, U.V.ROBLOX, U.V.BATTLENET, U.V.RIOT, U.V.MINECRAFT];
var n5 = n(349361),
    n3 = n(924895),
    n9 = n(422688),
    n7 = n(505200),
    le = n(695250);
let lt = function (e) {
    switch (e.category) {
        case U.V.STEAM:
            return {
                icon: ng.N,
                text: eg.intl.string(eg.t.FsANs4),
                ariaLabel: eg.intl.string(eg.t["P+ePTG"]),
                action: O.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case U.V.EPICGAMES:
            return {
                icon: n5.r,
                text: eg.intl.string(eg.t.ZbBMHa),
                ariaLabel: eg.intl.string(eg.t.BwX0UW),
                action: O.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case U.V.ROBLOX:
            return {
                icon: n3.H,
                text: eg.intl.string(eg.t["pJ+P+h"]),
                ariaLabel: eg.intl.string(eg.t.tYxpdf),
                action: O.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case U.V.BATTLENET:
            return {
                icon: n9.a,
                text: eg.intl.string(eg.t["A7grp+"]),
                ariaLabel: eg.intl.string(eg.t.x9at20),
                action: O.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case U.V.RIOT:
            return {
                icon: n7.A,
                text: eg.intl.string(eg.t.h6MapL),
                ariaLabel: eg.intl.string(eg.t["528nvc"]),
                action: O.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case U.V.MINECRAFT:
            return {
                icon: le.m,
                text: eg.intl.string(eg.t["HZbmO+"]),
                ariaLabel: eg.intl.string(eg.t.WWTqYn),
                action: O.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: tr.Y,
                text: eg.intl.string(eg.t["QpN/Iz"]),
                ariaLabel: eg.intl.string(eg.t["8JZmmF"]),
                action: O.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
function ln(e) {
    return (0, i.jsx)(h.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var ll = n(370711);
function li(e) {
    let t,
        n,
        l,
        i,
        r,
        s =
            ((t = (0, nE.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === ek.d3x.XBOX_GAME_PASS && !(0, e$.uJ)(e.id));
                return t?.id == null ? null : (0, n2.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (r = e?.steamReleaseStatus),
            a.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== U.V.EPICGAMES || !!n4.has(l)) &&
                            (e.category !== U.V.STEAM || r !== u.Y.RETIRED_ABANDONED) &&
                            n6.includes(e.category),
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
        text: eg.intl.string(eg.t["/hMurx"]),
        "aria-label": eg.intl.string(eg.t.nK60cc),
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
    let m = r ? eg.intl.string(eg.t["6MwJo/"]) : eg.intl.string(eg.t.lBeKY2);
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
                children: [(0, i.jsx)(nh, { game: t, trackAction: n }), (0, i.jsx)(lc, { game: t, trackAction: n })],
            }),
            (0, i.jsx)(eK, { gameId: t.id, trackAction: n }),
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
            (0, i.jsx)(nh, { game: t, trackAction: n }),
            (0, i.jsxs)("div", {
                className: to.gr,
                children: [
                    (0, i.jsx)(t9, { game: t, isTwoColumn: !1 }),
                    (0, i.jsxs)("div", {
                        className: to.E1,
                        children: [
                            (0, i.jsx)(lr, { game: t, trackAction: n }),
                            (0, i.jsx)(lc, { game: t, trackAction: n }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(nl, { analyticsLocations: l, trackAction: n }),
            (0, i.jsx)(tj, { trackAction: n }),
            (0, i.jsx)(eK, { gameId: t.id, trackAction: n }),
            (0, i.jsx)(n8, { trackAction: n }),
            (0, i.jsx)(nV, { game: t, trackAction: n }),
            (0, i.jsx)(n$, { gameId: t.id, trackAction: n }),
            a && (0, i.jsx)(nC, { game: t, trackAction: n }),
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
    return (0, i.jsx)(x.m, {
        text: eg.intl.string(eg.t.JVwWva),
        position: "top",
        children: (0, i.jsx)(h.$, {
            icon: g.h,
            text: eg.intl.string(eg.t["jaYS/h"]),
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
        a = (0, v.A)(t.linkedApplications)?.id,
        [r] = (0, R.L)(t.getOfficialApplicationId()),
        [c] = (0, R.L)(t.id),
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
                    (0, i.jsx)(nl, { analyticsLocations: l, trackAction: n }),
                    (0, i.jsx)(tj, { trackAction: n }),
                    d && (0, i.jsx)(nC, { game: t, trackAction: n }),
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
            trackExternalAction: x,
            initialScrollOffset: h,
        } = e,
        [g, v] = a.useState(!0),
        [E, b] = a.useState(null),
        { clientThemesClassName: R } = (0, S.Ay)(),
        M = (0, d.bG)([P.default], () => P.default.locale),
        w = a.useMemo(() => (0, O.generateViewId)(), []),
        { analyticsLocations: U } = (0, N.Ay)(I.A.GAME_PROFILE),
        Y = (0, V.s)(t),
        { data: F } = (0, y.I)(t),
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
        } = (0, k.RD)(F),
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
    (0, j.Ay)(() => {
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
        (0, j.Ay)(() => () => {
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
            v(e.contentRect.width >= 800);
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
              children: (0, i.jsx)(m.N, {
                  transitionState: r,
                  onClose: c,
                  children: (0, i.jsx)($.Provider, {
                      value: eg,
                      children: (0, i.jsx)("div", {
                          className: s()(R, to.kL),
                          ref: eu,
                          children: (0, i.jsxs)(L.A, {
                              obscured: Q,
                              onClose: em,
                              children: [
                                  (0, i.jsx)(t6, { game: F, ref: ev }),
                                  (0, i.jsx)(t2, { game: F, show: ef, trackAction: ec }),
                                  (0, i.jsx)(t4, { show: ef }),
                                  (0, i.jsxs)(A.Ch, {
                                      ref: ex,
                                      onScroll: eE,
                                      children: [
                                          (0, i.jsx)(t7, {
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
                                                                trackExternalAction: x,
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
