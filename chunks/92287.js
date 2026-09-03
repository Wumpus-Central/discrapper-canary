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
    k = n(139286),
    b = n(206828),
    S = n(590703),
    T = n(180170),
    C = n(583846),
    y = n(569926),
    R = n(928550),
    G = n(570962),
    L = n(402860),
    P = n(773669),
    O = n(409626),
    _ = n(422069),
    M = n(205184),
    w = n(957807),
    D = n(49491),
    V = n(429913),
    U = n(832163),
    Y = n(561794),
    F = n(862772),
    W = n(287809);
let B = a.createContext(void 0);
function H() {
    let e = a.useContext(B);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var z = n(621466),
    X = n(966697),
    K = n(939249),
    J = n(834730),
    $ = n(297264),
    q = n(460905),
    Q = n(776231),
    Z = n(449543),
    ee = n(46054),
    et = n(58703);
n(321073);
var en = n(155718),
    el = n(387408),
    ei = n(731068),
    ea = n(59318),
    er = n(320095),
    es = n(708676),
    ec = n(383233),
    eo = n(998218),
    eu = n(375708);
let ed = /^#{1,3}\s+(.+)$/,
    em = /^https?:\/\/\S+$/;
var ex = n(60465),
    eh = n(158390),
    eg = n(636537),
    ef = n(228366),
    eA = n(927813),
    ep = n(371794),
    ej = n(652215);
let ev = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function eE(e) {
    ef.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
            await (0, ep.aP)({
                url: ej.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                query: { locale: P.default.locale },
                rejectWithError: !1,
                retries: 2,
            })
        ).body.products.flatMap((e) => e.sku_ids);
        ef.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: t });
    } catch (t) {
        ef.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function eI(e) {
    let t = ((await eg.Bo.get({ url: ej.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !ev.has(t),
    );
    ef.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let eN = (0, d.UT)(_.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => _.A.getSimilarGames(e) ?? null,
    load: (e) => eI(e),
    retryConfig: { backoff: () => new eh.A(5 * eA.A.Millis.SECOND, 5 * eA.A.Millis.MINUTE) },
    failureStaleAfter: eA.A.Seconds.MINUTE,
});
async function ek(e, t) {
    ef.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let n = {};
        t?.limit != null && (n.limit = t.limit);
        let l = (await eg.Bo.get({ url: ej.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
        ef.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: l.messages.map((e) => {
                let t,
                    n,
                    l = (0, el.A)((0, er.rh)(e)),
                    i = l.content,
                    a = (function (e) {
                        if ((0, ec._c)(e))
                            return e.components
                                .filter((e) => e.type === en.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || em.test(t.trim())
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
                        if ((0, ec._c)(e)) {
                            let t = e.components.find((e) => e.type === en.I5.MEDIA_GALLERY),
                                n = t?.items[0]?.media;
                            if (null != n) {
                                let t = (0, ei.FE)(n);
                                if ("INVALID" !== t) return { ...n, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, ea.tT)(e.content_type));
                        if (null != t) return (0, ei.Rr)(t, e);
                        let n = e.attachments.find((e) => (0, ea.XB)(e.content_type));
                        if (null != n) return (0, ei.Rr)(n, e);
                        let l = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (l?.thumbnail != null)
                            return (0, ei.oU)(
                                l.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === l) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, ei.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, ei.oU)(
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
                        (n = (-1 === t ? a : a.slice(0, t)).match(ed)),
                        null != n
                            ? { title: n[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    u =
                        a === i || (0, ec._c)(l)
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
        ef.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var eb = n(284009),
    eS = n.n(eb),
    eT = n(376728),
    eC = n(976860),
    ey = n(71393),
    eR = n(449054);
async function eG(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    eS()(a.length > 0, "analyticsLocationStack must have at least one location");
    let r = a[a.length - 1],
        s = null;
    if ((null != t && ((n = t.guild?.id), (s = new Set(t.guild?.features))), null == n)) return;
    let c = ey.A.getGuild(n);
    if (c?.joinedAt == null)
        if (null == s || s.has(ej.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, eR.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: ej.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await eT.Ay.acceptInvite({ inviteKey: t.code, context: { location: r }, skipOnboarding: !0 }));
    (0, eC.pX)(ej.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var eL = n(320448),
    eP = n(406510);
function eO(e) {
    let { children: t, title: n, onClickViewAll: l } = e;
    return (0, i.jsxs)("div", {
        className: eP.k,
        children: [
            (0, i.jsxs)("div", {
                className: eP.w,
                children: [
                    (0, i.jsx)($.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, i.jsx)(h.$, {
                            size: "sm",
                            icon: eL._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: l,
                            text: eu.intl.string(eu.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var e_ = n(235240),
    eM = n(165648);
function ew(e, t) {
    return ee.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function eD(e, t) {
    var n;
    let l,
        i = (0, Q.kr)(364 * (0, Q.mZ)());
    return (
        (n = Math.round(i / t)),
        (null == (l = eo.A.toURLSafe(e))
            ? null
            : (l.searchParams.append("format", "webp"),
              null != i && l.searchParams.append("width", i.toString()),
              null != n && l.searchParams.append("height", n.toString()),
              l.toString())) ?? e
    );
}
function eV(e) {
    let { message: t, src: n, aspectRatio: l } = e,
        [r, s] = a.useState(!1),
        c = a.useCallback(() => s(!0), []);
    return null == t.media
        ? null
        : (0, i.jsx)(X.y, {
              readyState: r ? ej.Rv1.READY : ej.Rv1.LOADING,
              aspectRatio: l,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, i.jsx)("img", {
                  src: n,
                  className: e_.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: c,
              }),
          });
}
function eU(e) {
    let { variant: t, message: n, channelId: l, onCardClick: r } = e,
        c = "main" === t,
        o = a.useCallback(
            (e) => {
                if (
                    !(
                        (0, z.vq)(e.target, HTMLAnchorElement) ||
                        ((0, z.vq)(e.target, HTMLSpanElement) && (0, z.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return r(n.id);
            },
            [r, n.id],
        ),
        u = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9,
        d = n.media?.proxyUrl ?? n.media?.url,
        m = null != d ? eD(d, u) : void 0,
        { embedSource: x } = n;
    return null == x
        ? null
        : (0, i.jsx)(K.D, {
              className: c ? e_.jI : e_.IU,
              onClick: o,
              children: (0, i.jsxs)("div", {
                  className: c ? e_.GT : e_.s4,
                  children: [
                      null != x.url &&
                          (0, i.jsx)(J.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: e_.Ow,
                              children: x.url,
                          }),
                      (0, i.jsxs)("div", {
                          className: e_._d,
                          style: null != x.color ? { borderInlineStartColor: x.color } : void 0,
                          children: [
                              null != x.authorName &&
                                  (0, i.jsxs)("div", {
                                      className: e_.Tu,
                                      children: [
                                          null != x.authorIconUrl &&
                                              (0, i.jsx)("img", {
                                                  src: x.authorIconUrl,
                                                  className: e_.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, i.jsx)(J.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-strong",
                                              children: x.authorName,
                                          }),
                                      ],
                                  }),
                              null != n.media &&
                                  null != m &&
                                  (0, i.jsx)("div", {
                                      className: e_.ax,
                                      children: (0, i.jsx)(eV, { message: n, src: m, aspectRatio: u }),
                                  }),
                              null != n.title &&
                                  (0, i.jsx)($.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: c ? e_.KX : e_._N,
                                      children: ew(n.title, l),
                                  }),
                              n.body.length > 0 &&
                                  (0, i.jsxs)("div", {
                                      className: s()(e_.h_, eM.PT),
                                      children: [ew(n.body, l), (0, i.jsx)("div", { className: e_.fm })],
                                  }),
                              (0, i.jsxs)("div", {
                                  className: e_.ov,
                                  children: [
                                      null != x.providerIconUrl &&
                                          (0, i.jsx)("img", {
                                              src: x.providerIconUrl,
                                              className: e_.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, i.jsxs)(J.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != x.providerName ? `${x.providerName} \xb7 ` : "",
                                              (0, et.i$)(new Date(n.timestamp), "LL"),
                                          ],
                                      }),
                                      n.reactionCount > 0 &&
                                          (0, i.jsxs)("div", {
                                              className: e_.a5,
                                              children: [
                                                  (0, i.jsx)(q.n, { size: "xs", color: "currentColor" }),
                                                  (0, i.jsx)(J.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(eu.intl.currentLocale).format(
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
let eY = a.memo(function (e) {
    let { message: t, channelId: n, isMain: l } = e;
    return (0, i.jsxs)("div", {
        className: l ? e_.GT : e_.s4,
        children: [
            null != t.title &&
                (0, i.jsx)($.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: l ? e_.KX : e_._N,
                    children: ew(t.title, n),
                }),
            t.body.length > 0 &&
                (0, i.jsxs)("div", {
                    className: s()(e_.h_, eM.PT),
                    children: [ew(t.body, n), (0, i.jsx)("div", { className: e_.fm })],
                }),
            (0, i.jsxs)("div", {
                className: e_.ov,
                children: [
                    (0, i.jsx)(J.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, et.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, i.jsxs)("div", {
                            className: e_.a5,
                            children: [
                                (0, i.jsx)(q.n, { size: "xs", color: "currentColor" }),
                                (0, i.jsx)(J.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: new Intl.NumberFormat(eu.intl.currentLocale).format(t.reactionCount),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
});
function eF(e) {
    let { variant: t, message: n, channelId: l, onCardClick: r } = e,
        c = "main" === t,
        o = a.useCallback(
            (e) => {
                if (
                    !(
                        (0, z.vq)(e.target, HTMLAnchorElement) ||
                        ((0, z.vq)(e.target, HTMLSpanElement) && (0, z.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return r(n.id);
            },
            [r, n.id],
        ),
        u = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9,
        d = n.media?.proxyUrl ?? n.media?.url,
        m = null != d ? eD(d, u) : void 0,
        x = null != n.media && null != m;
    return (0, i.jsxs)(K.D, {
        className: s()({ [e_.cG]: c && x, [e_.jI]: c && !x, [e_.IU]: !c }),
        onClick: o,
        children: [
            null != n.media &&
                null != m &&
                (0, i.jsx)("div", {
                    className: c ? e_._v : e_.eZ,
                    children: (0, i.jsx)(eV, { message: n, src: m, aspectRatio: u }),
                }),
            (0, i.jsx)(eY, { message: n, channelId: l, isMain: c }),
        ],
    });
}
function eW(e) {
    let { variant: t, message: n, onCardClick: l } = e,
        r = "main" === t,
        { poll: s } = n,
        c = a.useCallback(() => l(n.id), [l, n.id]);
    if (null == s) return null;
    let o = s.answers.slice(0, 3),
        u = s.answers.length - o.length;
    return (0, i.jsx)(K.D, {
        className: r ? e_.jI : e_.IU,
        onClick: c,
        children: (0, i.jsxs)("div", {
            className: r ? e_.GT : e_.s4,
            children: [
                (0, i.jsx)($.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: e_.MH,
                    children: s.question.text,
                }),
                (0, i.jsxs)("div", {
                    className: e_.xd,
                    children: [
                        o.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    className: e_.Nf,
                                    children: (0, i.jsx)(J.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: e_.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        u > 0 &&
                            (0, i.jsx)(J.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: e_.PF,
                                children: eu.intl.format(eu.t["mv/nIa"], { count: u }),
                            }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: e_.ov,
                    children: (0, i.jsx)(J.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: eu.intl.format(eu.t.t0FTsH, {
                            createdAt: new Date(n.timestamp),
                            expiryLabel: (0, es.J)(s.expiry) ?? eu.intl.string(eu.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function eB(e) {
    return null != e.message.poll
        ? (0, i.jsx)(eW, { ...e })
        : null != e.message.embedSource
          ? (0, i.jsx)(eU, { ...e })
          : (0, i.jsx)(eF, { ...e });
}
let eH = a.memo(function (e) {
    let { gameId: t, trackAction: n } = e,
        { analyticsLocations: l } = (0, N.Ay)(),
        { invite: r, closeModal: s, getScrollOffset: c } = H(),
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
                    null == e || n || _.A.isAnnouncementsFetching(e) || ek(e, { limit: 8 });
                }, [e, n, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l }
            );
        })(t),
        x = a.useCallback(() => {
            let e = r?.guild?.id ?? u;
            null != e &&
                null != m &&
                (n(O.GameProfileTrackActionActions.Announcements),
                ex.default.setGameProfilePendingReturn({ gameId: t, channelId: m, initialScrollOffset: c() }),
                s(),
                eG({ invite: r, guildId: e, channelId: m, analyticsLocationStack: l }));
        }, [n, s, c, r, u, m, l, t]),
        h = a.useCallback(
            (e) => {
                let i = r?.guild?.id ?? u;
                null != i &&
                    null != m &&
                    (n(O.GameProfileTrackActionActions.AnnouncementsItem),
                    ex.default.setGameProfilePendingReturn({ gameId: t, channelId: m, initialScrollOffset: c() }),
                    s(),
                    eG({ invite: r, guildId: i, channelId: m, messageId: e, analyticsLocationStack: l }));
            },
            [n, s, c, r, u, m, l, t],
        );
    return null == m || 0 === o.length
        ? null
        : (0, i.jsx)(eO, {
              title: eu.intl.string(eu.t.B0BV3Y),
              onClickViewAll: x,
              children: (0, i.jsx)(Z.A, {
                  gap: 16,
                  children: o.map((e) =>
                      (0, i.jsx)(eB, { variant: "small", message: e, channelId: m, onCardClick: h }, e.id),
                  ),
              }),
          });
});
var ez = n(541830),
    eX = n(240248),
    eK = n(505779),
    eJ = n(808380);
let e$ = [eJ.Y.DESKTOP, eJ.Y.XBOX, eJ.Y.PLAYSTATION, eJ.Y.NINTENDO];
var eq = n(28863),
    eQ = n(975807),
    eZ = n(194362);
function e0(e) {
    let { game: t, trackAction: n } = e,
        l = a.useCallback(async () => {
            n(O.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, eZ.a)(ej.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, eQ.A)(e);
        }, [n]),
        r = a.useCallback((e) => (0, i.jsx)(eq.Anchor, { onClick: l, children: e }), [l]);
    return t.linkedApplications?.some((e) => e.type === en.Mh.OFFICIAL)
        ? null
        : (0, i.jsx)(J.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: eu.intl.format(eu.t.KAjfKl, { claimLink: r }),
          });
}
var e1 = n(998445),
    e8 = n(274997),
    e2 = n(80500),
    e4 = n(319745),
    e5 = n(488225),
    e6 = n(967492),
    e3 = n(72265),
    e7 = n(454346),
    e9 = n(37948),
    te = n(750013);
let tt = { size: "xs", colorClass: te.wP };
function tn(e) {
    let { website: t, trackAction: n } = e,
        l = (0, e9.A)(),
        {
            action: r,
            icon: s,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case eK.V.OFFICIAL:
                    return {
                        icon: (0, i.jsx)(e1.GlobeEarthIcon, { ...t }),
                        action: O.GameProfileTrackActionActions.WebsiteLink,
                        title: eu.intl.string(eu.t.fOUKvg),
                    };
                case eK.V.TWITTER:
                    return {
                        icon: (0, i.jsx)(e8.p, { ...t }),
                        action: O.GameProfileTrackActionActions.XLink,
                        title: eu.intl.string(eu.t.INic4y),
                    };
                case eK.V.YOUTUBE:
                    return {
                        action: O.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, i.jsx)(e2.C, { ...t }),
                        title: eu.intl.string(eu.t.lNmxbE),
                    };
                case eK.V.FACEBOOK:
                    return {
                        icon: (0, i.jsx)(e4.Z, { ...t }),
                        action: O.GameProfileTrackActionActions.FacebookLink,
                        title: eu.intl.string(eu.t.FjyREK),
                    };
                case eK.V.INSTAGRAM:
                    return {
                        icon: (0, i.jsx)(e5.L, { ...t }),
                        action: O.GameProfileTrackActionActions.InstagramLink,
                        title: eu.intl.string(eu.t["cgR+IK"]),
                    };
                case eK.V.BLUESKY:
                    return {
                        icon: (0, i.jsx)(e6.a, { ...t }),
                        action: O.GameProfileTrackActionActions.BlueskyLink,
                        title: eu.intl.string(eu.t["D/PHq5"]),
                    };
                case eK.V.REDDIT:
                    return {
                        icon: (0, i.jsx)(e3.T, { ...t }),
                        action: O.GameProfileTrackActionActions.RedditLink,
                        title: eu.intl.string(eu.t["Hgb+fc"]),
                    };
                case eK.V.TWITCH:
                    return {
                        icon: (0, i.jsx)(e7.a, { ...t }),
                        action: O.GameProfileTrackActionActions.TwitchLink,
                        title: eu.intl.string(eu.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, tt),
        o = a.useCallback(() => {
            n(r), l(t.url);
        }, [r, l, n, t.url]);
    return (0, i.jsx)(x.m, {
        text: c,
        children: (0, i.jsx)(K.D, { onClick: o, className: te.yO, title: c, children: s }),
    });
}
var tl = n(31300),
    ti = n(802516),
    ta = n(22363),
    tr = n(418524),
    ts = n(672572);
function tc(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case eJ.Y.DESKTOP:
            return (0, i.jsx)(tl.k, { size: "xs", ...n });
        case eJ.Y.XBOX:
            return (0, i.jsx)(ti.Y, { size: "xs", ...n });
        case eJ.Y.PLAYSTATION:
            return (0, i.jsx)(ta.X, { size: "xs", ...n });
        case eJ.Y.NINTENDO:
            return (0, i.jsx)(tr.M, { size: "xs", ...n });
        default:
            return null;
    }
}
function to(e) {
    let { platform: t } = e;
    return (0, i.jsx)(
        x.m,
        {
            text: (function (e) {
                switch (e) {
                    case eJ.Y.DESKTOP:
                        return eu.intl.string(eu.t.KT6uCJ);
                    case eJ.Y.XBOX:
                        return eu.intl.string(eu.t.DDWUJp);
                    case eJ.Y.PLAYSTATION:
                        return eu.intl.string(eu.t.fzMz2s);
                    case eJ.Y.NINTENDO:
                        return eu.intl.string(eu.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, i.jsx)(tc, { platform: t }),
        },
        t,
    );
}
var tu = n(424994),
    td = n(422384);
function tm() {
    return (0, i.jsx)(J.E, { variant: "text-sm/normal", color: "text-subtle", children: eu.intl.string(eu.t.GruYxV) });
}
let tx = function (e) {
    let { game: t, trackAction: n } = e,
        l = a.useMemo(() => t.genres.map(ez.du).join(", "), [t]),
        r = t.getCompanyByRole(en.wk.PUBLISHER),
        s = t.getCompanyByRole(en.wk.DEVELOPER),
        c = r.map((e) => e.name).join(", "),
        o = s.map((e) => e.name).join(", "),
        u = t.firstReleaseDate,
        d = a.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return (
                !e.has(eJ.Y.DESKTOP) && (e.has(eJ.Y.MACOS) || e.has(eJ.Y.LINUX)) && n.push(eJ.Y.DESKTOP),
                n.filter((e) => e$.includes(e)).sort((e, t) => e$.indexOf(e) - e$.indexOf(t))
            );
        }, [t.platforms]),
        m = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return eK.p.includes(t);
            })
            .sort((e, t) => eK.p.indexOf(e.category) - eK.p.indexOf(t.category)),
        x = !(0, eX.uJ)(l),
        h = !(0, eX.uJ)(c),
        g = !(0, eX.uJ)(o),
        f = !(0, eX.uJ)(u),
        A = d.length > 0,
        p = m.length > 0 && !m.every((e) => (0, eX.uJ)(e.url));
    return (0, i.jsxs)("div", {
        className: td.uW,
        children: [
            (0, i.jsx)("div", {
                className: td.Gf,
                children: (0, i.jsx)($.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: eu.intl.string(eu.t["7OjmmH"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: td.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: td.J1,
                        children: [
                            (0, i.jsx)(J.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? eu.intl.string(eu.t.pDgwYB) : eu.intl.string(eu.t.mjFKqn),
                            }),
                            x
                                ? (0, i.jsx)(J.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: td.Gu,
                                      children: l,
                                  })
                                : (0, i.jsx)(tm, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: td.J1,
                        children: [
                            (0, i.jsx)(J.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? eu.intl.string(eu.t.Hc7Enk) : eu.intl.string(eu.t["4Byy/G"]),
                            }),
                            h
                                ? (0, i.jsx)(J.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: td.Gu,
                                      children: c,
                                  })
                                : (0, i.jsx)(tm, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: td.J1,
                        children: [
                            (0, i.jsx)(J.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== s.length ? eu.intl.string(eu.t.KATEJB) : eu.intl.string(eu.t.na3PT0),
                            }),
                            g
                                ? (0, i.jsx)(J.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: td.Gu,
                                      children: o,
                                  })
                                : (0, i.jsx)(tm, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: td.J1,
                        children: [
                            (0, i.jsx)(J.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eu.intl.string(eu.t.H3mPDT),
                            }),
                            f
                                ? (0, i.jsx)(J.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: td.Gu,
                                      children: et.i$(new Date(u), "LL"),
                                  })
                                : (0, i.jsx)(tm, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: td.J1,
                        children: [
                            (0, i.jsx)(J.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: d.length > 1 ? eu.intl.string(eu.t.PNqxNe) : eu.intl.string(eu.t["UxAag+"]),
                            }),
                            A
                                ? (0, i.jsx)("div", {
                                      className: td.Gu,
                                      children: d.map((e) => (0, i.jsx)(to, { platform: e }, e)),
                                  })
                                : (0, i.jsx)(tm, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: td.J1,
                        children: [
                            (0, i.jsx)(J.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eu.intl.string(eu.t["Oj3o1/"]),
                            }),
                            p
                                ? (0, i.jsx)("div", {
                                      className: td.Gu,
                                      children: m.map((e) => (0, i.jsx)(tn, { website: e, trackAction: n }, e.url)),
                                  })
                                : (0, i.jsx)(tm, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: td.J1,
                        children: [
                            (0, i.jsx)(J.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eu.intl.string(eu.t["BwQ+9e"]),
                            }),
                            (0, i.jsx)(J.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: td.Gu,
                                children: eu.intl.format(eu.t.XPFZVl, { igdbLink: tu.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: td.OQ, children: (0, i.jsx)(e0, { game: t, trackAction: n }) }),
        ],
    });
};
var th = n(714991),
    tg = n(486020),
    tf = n(992638);
function tA(e) {
    let { trackAction: t } = e,
        { invite: n, isMember: l, closeModal: r } = H(),
        s = a.useCallback(() => {
            null != n &&
                (t(O.GameProfileTrackActionActions.JoinServer),
                r(),
                ef.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: n, code: n.code, context: ej.BRT.APP }));
        }, [n, t, r]);
    if (null == n || null == n.guild) return null;
    let c = tg.Ay.getGuildIconURL({ id: n.guild.id, icon: n.guild.icon, size: 48 });
    return (0, i.jsxs)("div", {
        className: tf.uW,
        children: [
            (0, i.jsx)($.D, {
                className: tf.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: eu.intl.string(eu.t["U2N+ci"]),
            }),
            (0, i.jsx)("div", {
                className: tf.kL,
                children: (0, i.jsxs)("div", {
                    className: tf.hQ,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tf.To,
                            children: [
                                (0, i.jsx)("img", {
                                    className: tf.$f,
                                    src: c,
                                    alt: eu.intl.formatToPlainString(eu.t.xm6W9D, { guildName: n.guild.name }),
                                    draggable: !1,
                                }),
                                (0, i.jsxs)("div", {
                                    className: tf.yj,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: tf.YS,
                                            children: [
                                                (0, i.jsx)(th.A, { guild: n.guild, size: 16 }),
                                                (0, i.jsx)($.D, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-default",
                                                    children: n.guild.name,
                                                }),
                                            ],
                                        }),
                                        !(0, eX.uJ)(n.guild?.description) &&
                                            (0, i.jsx)(J.E, {
                                                className: tf.h_,
                                                variant: "text-sm/medium",
                                                color: "text-muted",
                                                children: n.guild?.description,
                                            }),
                                        null != n.approximate_member_count || null != n.approximate_presence_count
                                            ? (0, i.jsxs)("div", {
                                                  className: tf.iR,
                                                  children: [
                                                      null != n.approximate_presence_count &&
                                                          (0, i.jsxs)("div", {
                                                              className: tf.Tb,
                                                              children: [
                                                                  (0, i.jsx)("i", { className: tf._o }),
                                                                  (0, i.jsx)(J.E, {
                                                                      variant: "text-xs/normal",
                                                                      color: "text-muted",
                                                                      children: eu.intl.format(eu.t["LC+S+m"], {
                                                                          membersOnline: n.approximate_presence_count,
                                                                      }),
                                                                  }),
                                                              ],
                                                          }),
                                                      null != n.approximate_member_count &&
                                                          (0, i.jsxs)("div", {
                                                              className: tf.Tb,
                                                              children: [
                                                                  (0, i.jsx)("i", { className: tf.jk }),
                                                                  (0, i.jsx)(J.E, {
                                                                      variant: "text-xs/normal",
                                                                      color: "text-muted",
                                                                      children: eu.intl.format(eu.t.zRl6XR, {
                                                                          count: n.approximate_member_count,
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
                            text: l ? eu.intl.string(eu.t.cEnaWx) : eu.intl.string(eu.t.XpeFYr),
                            onClick: s,
                            fullWidth: !0,
                        }),
                    ],
                }),
            }),
        ],
    });
}
var tp = n(369606),
    tj = n(459746),
    tv = n(691540),
    tE = n(857250),
    tI = n(97483),
    tN = n(922016),
    tk = n(980707),
    tb = n(477782),
    tS = n(663341),
    tT = n(408278),
    tC = n(34188),
    ty = n(173936),
    tR = n(365199),
    tG = n(789645),
    tL = n(442433),
    tP = n(50268),
    tO = n(44724),
    t_ = n(957565),
    tM = n(695366),
    tw = n(540185),
    tD = n(926268),
    tV = n(53788),
    tU = n(831453),
    tY = n(785866),
    tF = n(555704),
    tW = n(47675),
    tB = n(633075),
    tH = n(289173),
    tz = n(321191),
    tX = n(958805),
    tK = n(735321),
    tJ = n(96173),
    t$ = n(280450),
    tq = n(403362);
async function tQ(e) {
    let t = e((0, tK.BF)());
    await tX.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function tZ(e) {
    var t;
    let l,
        { game: r, className: s, trackAction: c } = e,
        o = a.useRef(null),
        u = a.useRef(null),
        m = (0, tP.A)({ id: r.id, label: eu.intl.string(eu.t.SHQGPj) }),
        g =
            ((t = r.id),
            (l = a.useCallback(() => {
                null != t &&
                    (c?.(O.GameProfileTrackActionActions.Feedback),
                    (0, f.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("142753"),
                            n.e("250440"),
                            n.e("568035"),
                            n.e("268582"),
                            n.e("733771"),
                            n.e("946039"),
                            n.e("55266"),
                            n.e("627495"),
                        ]).then(n.bind(n, 651930));
                        return (n) => (0, i.jsx)(e, { ...n, detected: { gameId: t } });
                    }));
            }, [t, c])),
            null == t
                ? null
                : (0, i.jsx)(tb.Dr, {
                      id: "game-profile-something-wrong",
                      label: eu.intl.string(eu.t.qP2cXd),
                      action: l,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: tM.E },
                  })),
        A = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, d.bG)([t$.default], () => t$.default.getId()),
                r = a.useMemo(
                    () => [
                        {
                            type: tw.x.FAVORITE_GAMES,
                            addLabel: eu.intl.string(eu.t.fgmitg),
                            removeLabel: eu.intl.string(eu.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: tD.HeartIcon,
                        },
                        {
                            type: tw.x.PLAYED_GAMES,
                            addLabel: eu.intl.string(eu.t["0xIVLR"]),
                            removeLabel: eu.intl.string(eu.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: tV.G,
                        },
                        {
                            type: tw.x.CURRENT_GAMES,
                            addLabel: eu.intl.string(eu.t.G0c4En),
                            removeLabel: eu.intl.string(eu.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: tU.H,
                        },
                        {
                            type: tw.x.WANT_TO_PLAY_GAMES,
                            addLabel: eu.intl.string(eu.t.UuBS4K),
                            removeLabel: eu.intl.string(eu.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: tY._,
                        },
                    ],
                    [],
                ),
                s = (0, d.yK)([tz.A], () => (null == l ? [] : (tz.A.getUserProfile(l)?.widgets ?? [])), [l]),
                c = (0, tJ.A)(),
                o = a.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...c, ...s].filter((e) => e instanceof tB.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(tq.Vq).find((e) => t.has(e)) ?? null;
                }, [c, s, e]),
                u = a.useCallback(
                    async (e, n) => {
                        let l;
                        if (
                            (await tQ((i) => {
                                let a = i.filter(tH.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, tK.uA)(a))) return i;
                                    let n = { gameId: t },
                                        r = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new tH.Yy({ ...(a ?? { type: e }), games: r });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    l = new tH.Yy({ ...a, games: e });
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
                        (0, tW.un)({
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
                            (await tQ((n) =>
                                e
                                    ? n.some((e) => e instanceof tB.R && e.applicationId === o)
                                        ? n
                                        : [(t = new tB.R({ applicationId: o })), ...n]
                                    : ((t = n.find((e) => e instanceof tB.R && e.applicationId === o) ?? null),
                                      n.filter((e) => !(e instanceof tB.R && e.applicationId === o))),
                            ),
                            null == t)
                        )
                            return;
                        let n = t;
                        (0, tW.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...n.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [o],
                );
            if (null == l) return null;
            let x = null != e && (0, tK.XX)(e),
                h = [];
            if (null != o) {
                let e = s.some((e) => e instanceof tB.R && e.applicationId === o);
                h.push(
                    (0, i.jsx)(
                        tb.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? eu.intl.formatToPlainString(eu.t.Ktb1n8, { name: n })
                                : eu.intl.formatToPlainString(eu.t.Xp6iZt, { name: n }),
                            action: () => m(!e),
                            leadingAccessory: { type: "icon", icon: tF.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (x)
                for (let e of r) {
                    let n = s.filter(tH.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.gameId === t),
                        a = !l && null != n && (0, tK.uA)(n);
                    h.push(
                        (0, i.jsx)(
                            tb.Dr,
                            {
                                id: e.menuId,
                                label: l ? e.removeLabel : e.addLabel,
                                subtext: a ? eu.intl.string(eu.t["86OoiH"]) : void 0,
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
        { closeModal: p } = H(),
        j = (0, d.bG)([U.A], () => U.A.getApplicationIdFromDetectableId(r.id)),
        v = (0, d.bG)([U.A], () => U.A.hasStorefrontForApplicationId(j), [j]),
        E = a.useCallback(() => {
            null != j && (0, tO.G)({ applicationId: j });
        }, [j]),
        I = a.useCallback(() => {
            null != j && (c(O.GameProfileTrackActionActions.GameShop), (0, tO.default)({ applicationId: j }), p());
        }, [j, c, p]),
        N = a.useCallback(() => p(!1), [p]),
        k = a.useCallback(() => {
            c(O.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${ej.BVt.GAME_PROFILE(r.id)}`;
            (0, t_.C)(e, () => {
                (0, tv.P0)((0, tE.o)(eu.intl.string(eu.t["+5kSoW"]), tI.Ck.SUCCESS));
            });
        }, [r.id, c]);
    return (0, i.jsxs)("div", {
        className: s,
        children: [
            null != A &&
                (0, i.jsx)(tN.Y, {
                    targetElementRef: u,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(tk.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                (0, tL.Z_)(), t();
                            },
                            "aria-label": eu.intl.string(eu.t.sidPSo),
                            onSelect: () => {},
                            children: (0, i.jsx)(tb.rX, { children: A }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: u,
                            children: (0, i.jsx)(h.$, {
                                icon: tS.PlusLargeIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: eu.intl.string(eu.t.sidPSo),
                            }),
                        }),
                }),
            v &&
                (0, i.jsx)(x.m, {
                    text: eu.intl.string(eu.t.apFNLU),
                    children: (0, i.jsx)(tT.K, {
                        icon: tC.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eu.intl.string(eu.t.apFNLU),
                        onMouseDown: E,
                        onClick: I,
                    }),
                }),
            (0, i.jsx)(x.m, {
                text: eu.intl.string(eu.t.WqhZss),
                children: (0, i.jsx)(tT.K, {
                    icon: ty.LinkIcon,
                    variant: "overlay-secondary",
                    size: "sm",
                    "aria-label": eu.intl.string(eu.t.WqhZss),
                    onClick: k,
                }),
            }),
            (null != m || null != g) &&
                (0, i.jsx)(tN.Y, {
                    targetElementRef: o,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(tk.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                (0, tL.Z_)(), t();
                            },
                            "aria-label": eu.intl.string(eu.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(tb.rX, { children: g }), (0, i.jsx)(tb.rX, { children: m })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)(x.m, {
                            text: eu.intl.string(eu.t["UKOtz+"]),
                            children: (0, i.jsx)("div", {
                                ...e,
                                ref: o,
                                children: (0, i.jsx)(tT.K, {
                                    icon: tR.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": eu.intl.string(eu.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, i.jsx)(tT.K, {
                icon: tG.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: N,
                "aria-label": eu.intl.string(eu.t.cpT0Cq),
            }),
        ],
    });
}
var t0 = n(732369);
function t1(e) {
    let { game: t, show: n, trackAction: l } = e,
        a = t.name,
        r = t.getIconURL(80);
    return (0, i.jsxs)("div", {
        className: t0.y5,
        children: [
            (0, i.jsx)("div", { className: s()(t0.nI, n && t0.hD) }),
            (0, i.jsxs)("div", {
                className: s()(t0.A1, n && t0.g8),
                children: [
                    null != r && (0, i.jsx)("img", { src: r, alt: "", className: t0.V$, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: t0.hm,
                        children: [
                            (0, i.jsx)($.D, { variant: "heading-md/semibold", lineClamp: 1, children: a }),
                            null != t.l30Rank && (0, i.jsx)(t5, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(tZ, { game: t, className: t0.HK, trackAction: l }),
        ],
    });
}
function t8(e) {
    let { show: t } = e;
    return (0, i.jsx)("div", { className: s()(t0.nI, t0.Jn, t && t0.hD) });
}
let t2 = a.forwardRef(function (e, t) {
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
    return (0, eX.uJ)(r)
        ? null
        : (0, i.jsxs)("div", {
              ref: t,
              children: [
                  (0, i.jsx)("div", { className: t0.y1, style: { backgroundImage: `url("${r}")` } }),
                  (0, i.jsx)("div", { className: t0.N4 }),
              ],
          });
});
function t4(e) {
    let { game: t } = e,
        n = (t.genres ?? []).map(ez.du).join(", ");
    return (0, eX.uJ)(n) ? null : (0, i.jsx)(J.E, { variant: "text-md/normal", color: "text-muted", children: n });
}
function t5(e) {
    let { rank: t } = e;
    return (0, i.jsxs)("div", {
        className: t0.Qc,
        children: [
            (0, i.jsx)(tp.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, i.jsx)(J.E, {
                variant: "text-xs/bold",
                color: "none",
                children: eu.intl.formatToPlainString(eu.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function t6(e) {
    let { game: t, isTwoColumn: n } = e;
    return (0, i.jsx)("div", {
        className: n ? t0.n8 : t0.FS,
        children: (0, i.jsx)(tj.A, { game: t, className: t0.xe, size: tj.w.LARGE }),
    });
}
let t3 = function (e) {
    let { game: t, onSetCompactBarScrollThreshold: n, showCompactBar: l } = e,
        { isTwoColumn: r } = H(),
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
        className: s()(t0.ap, l && t0.Gh),
        children: [
            r &&
                null != t &&
                (0, i.jsx)("div", {
                    className: t0.Tf,
                    children: (0, i.jsx)(tj.A, { game: t, className: t0.w$, size: tj.w.LARGE }),
                }),
            (0, i.jsxs)("div", {
                className: t0.lu,
                children: [
                    null != t.l30Rank && (0, i.jsx)(t5, { rank: t.l30Rank }),
                    (0, i.jsx)($.D, { ref: o, variant: "heading-xxl/semibold", children: u }),
                    (0, i.jsx)(t4, { game: t }),
                ],
            }),
        ],
    });
};
var t7 = n(141628),
    t9 = n(289363),
    ne = n(134131);
function nt(e) {
    let { trackAction: t, analyticsLocations: n } = e,
        {
            fetchedAuthorization: l,
            hasAlreadyLinked: r,
            canStartAuthorization: s,
            startAuthorization: c,
            connectionApp: o,
        } = H(),
        u = (0, d.bG)([W.default], () => W.default.getCurrentUser()),
        m = a.useCallback(() => {
            t(O.GameProfileTrackActionActions.LinkAccount), c({ analyticsLocations: n });
        }, [t, c, n]);
    return l && null != o && s && !r && null != u
        ? (0, i.jsxs)("div", {
              className: ne.uW,
              children: [
                  (0, i.jsx)($.D, {
                      className: ne.Gf,
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: eu.intl.string(eu.t["VDAhr+"]),
                  }),
                  (0, i.jsxs)("div", {
                      className: ne.kL,
                      children: [
                          (0, i.jsx)("div", { className: ne.sB, children: (0, i.jsx)(t9.default, { application: o }) }),
                          (0, i.jsxs)("div", {
                              className: ne.hQ,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: ne.FS,
                                      children: [
                                          (0, i.jsx)($.D, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              children: eu.intl.formatToPlainString(eu.t.hUbQT2, { gameName: o.name }),
                                          }),
                                          (0, i.jsx)(J.E, {
                                              variant: "text-sm/medium",
                                              color: "text-muted",
                                              children: eu.intl.string(eu.t["JKqu+4"]),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(h.$, {
                                      variant: "secondary",
                                      icon: t7.A,
                                      text: eu.intl.string(eu.t.jynBQ5),
                                      onClick: m,
                                      fullWidth: !0,
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var nn = n(80687),
    nl = n(775602),
    ni = n(534573),
    na = n(248643),
    nr = n(256905),
    ns = n(966245),
    nc = n(191096),
    no = n(90721),
    nu = n(258924);
let nd = a.memo(function (e) {
        let t,
            { item: n, index: l, isSelected: r, isPlaying: c, onSelect: o, gameName: u } = e,
            d = a.useCallback(() => o(l), [o, l]);
        return (0, i.jsx)(K.D, {
            className: s()(nu.JS, r && nu.Y4),
            onClick: d,
            children: (0, i.jsxs)("div", {
                className: nu.ub,
                children: [
                    (0, i.jsx)("img", {
                        src:
                            ((t = "VIDEO" === n.type ? (n.poster ?? n.url) : n.url),
                            (0, ni.Ec)(t, { size: 106, keepAspectRatio: !0, format: tg.QB ? "webp" : null })),
                        className: nu.xn,
                        alt: eu.intl.formatToPlainString(eu.t.COYYrn, { game: u }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === n.type &&
                        (0, i.jsx)("div", {
                            className: nu.UZ,
                            children: (0, i.jsx)(nn.D, { playing: r && c, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    nm = a.memo(function (e) {
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
            (0, no.A)({ videoRef: r, canvasRef: d, enabled: !n }),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    !n && (0, i.jsx)("canvas", { ref: d, className: nu.HW, "aria-hidden": "true" }),
                    (0, i.jsx)("div", {
                        className: nu.tN,
                        children: (0, i.jsx)(na.A, {
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
                            renderLinkComponent: ns.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: u,
                            mediaPlayerClassName: nu.T9,
                            videoRef: r,
                            mediaPlayerRef: s,
                        }),
                    }),
                ],
            })
        );
    });
function nx(e) {
    let { game: t, trackAction: n } = e,
        [l, r] = a.useState(0),
        [s, c] = a.useState(null),
        [o, u] = a.useState(t.screenshotUrls),
        m = a.useRef(null),
        x = a.useRef(null),
        h = (0, d.bG)([nl.Ay], () => nl.Ay.useReducedMotion),
        { obscured: g } = (0, nc.I3)();
    o !== t.screenshotUrls && (u(t.screenshotUrls), r(0));
    let f = a.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, ep.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, ep.YE)(e.application_id, e.id, e.width, "webp"),
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
        k = a.useCallback(() => {
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
            (0, nr.R)({
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
        b = a.useCallback(() => I(!0), []),
        S = a.useCallback(() => I(!1), []),
        T = a.useCallback(() => c(null), []),
        C = a.useCallback(
            (e) => {
                e && k();
            },
            [k],
        );
    return 0 === f.length
        ? null
        : (0, i.jsxs)("div", {
              className: nu.kL,
              children: [
                  j
                      ? (0, i.jsx)("div", {
                            className: nu.ND,
                            children: (0, i.jsx)(
                                nm,
                                {
                                    item: p,
                                    reducedMotion: h,
                                    autoPlay: !h && !g,
                                    videoRef: m,
                                    mediaPlayerRef: N,
                                    onPlay: b,
                                    onPause: S,
                                    onFullscreenChange: C,
                                },
                                `${A}-${p.url}`,
                            ),
                        })
                      : (0, i.jsxs)("div", {
                            className: nu.wp,
                            children: [
                                null != s &&
                                    !h &&
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: nu.Jy,
                                            onAnimationEnd: T,
                                            children: (0, i.jsx)("img", { src: s, className: nu.Db, alt: "" }),
                                        },
                                        s,
                                    ),
                                (0, i.jsx)("div", { className: nu.QN }),
                                (0, i.jsx)(K.D, {
                                    className: nu.gv,
                                    onClick: k,
                                    children: (0, i.jsx)(
                                        "img",
                                        {
                                            src: p.url,
                                            className: nu.c8,
                                            alt: eu.intl.formatToPlainString(eu.t.COYYrn, { game: t.name }),
                                        },
                                        p.url,
                                    ),
                                }),
                            ],
                        }),
                  (0, i.jsx)(Z.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      children: f.map((e, n) =>
                          (0, i.jsx)(
                              nd,
                              { item: e, index: n, isPlaying: E, isSelected: n === A, onSelect: v, gameName: t.name },
                              `${n}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
var nh = n(49381),
    ng = n(661531),
    nf = n(223273);
function nA(e, t, n) {
    if (null == e || null == t || t < 10) return nf.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? nf.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? nf.vI.VERY_POSITIVE
              : nf.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return nf.vI.MOSTLY_POSITIVE;
    if (e >= 40) return nf.vI.MIXED;
    if (e >= 20) return nf.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return nf.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return nf.vI.VERY_NEGATIVE;
    return nf.vI.OVERWHELMINGLY_NEGATIVE;
}
function np(e) {
    switch (e) {
        case nf.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case nf.vI.OVERWHELMINGLY_POSITIVE:
        case nf.vI.VERY_POSITIVE:
        case nf.vI.POSITIVE:
        case nf.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case nf.vI.MIXED:
            return "steam-review-text-mixed";
        case nf.vI.MOSTLY_NEGATIVE:
        case nf.vI.NEGATIVE:
        case nf.vI.VERY_NEGATIVE:
        case nf.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var nj =
        (((l = {})[(l.MIGHTY = 1)] = "MIGHTY"),
        (l[(l.STRONG = 2)] = "STRONG"),
        (l[(l.FAIR = 3)] = "FAIR"),
        (l[(l.WEAK = 4)] = "WEAK"),
        l),
    nv = n(778591);
function nE(e) {
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
var nI = n(255417);
function nN(e) {
    let { url: t, trackAction: n, title: l, rating: r, ratingCount: s, tooltipVariant: c = "all" } = e,
        o = (0, e9.A)(),
        u = nA(r, s, "recent" === c),
        d = np(u),
        m = a.useCallback(() => {
            n(O.GameProfileTrackActionActions.SteamReviews), o(t);
        }, [o, n, t]);
    return (0, i.jsx)(K.D, {
        onClick: m,
        className: nI.nf,
        role: "link",
        "aria-label": eu.intl.string(eu.t.YNC5Di),
        children: (0, i.jsxs)("div", {
            className: nI.U6,
            children: [
                (0, i.jsxs)("div", {
                    className: nI.tN,
                    children: [
                        (0, i.jsx)(nh.N, { size: "sm", color: ng.A.colors.ICON_STRONG.css }),
                        (0, i.jsx)($.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, i.jsx)(
                    x.m,
                    {
                        text:
                            u === nf.vI.NO_USER_REVIEWS
                                ? eu.intl.string(eu.t.CLMt8J)
                                : eu.intl
                                      .format(
                                          "recent" === c
                                              ? eu.t.TzvC0k
                                              : "localized" === c
                                                ? eu.t.EOfrwm
                                                : eu.t["lzANJ/"],
                                          { rating: r, rating_count: s?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, i.jsxs)("div", {
                            className: nI.Z0,
                            children: [
                                (0, i.jsx)(J.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    children: (function (e) {
                                        switch (e) {
                                            case nf.vI.NO_USER_REVIEWS:
                                                return eu.intl.string(eu.t.CLMt8J);
                                            case nf.vI.OVERWHELMINGLY_POSITIVE:
                                                return eu.intl.string(eu.t["75sx1S"]);
                                            case nf.vI.VERY_POSITIVE:
                                                return eu.intl.string(eu.t["EkOVg+"]);
                                            case nf.vI.POSITIVE:
                                                return eu.intl.string(eu.t.ZUkFtr);
                                            case nf.vI.MOSTLY_POSITIVE:
                                                return eu.intl.string(eu.t.M7Z09a);
                                            case nf.vI.MIXED:
                                                return eu.intl.string(eu.t.c8yuHR);
                                            case nf.vI.MOSTLY_NEGATIVE:
                                                return eu.intl.string(eu.t.H0MSjG);
                                            case nf.vI.NEGATIVE:
                                                return eu.intl.string(eu.t.vpLrgz);
                                            case nf.vI.VERY_NEGATIVE:
                                                return eu.intl.string(eu.t["5spYuX"]);
                                            case nf.vI.OVERWHELMINGLY_NEGATIVE:
                                                return eu.intl.string(eu.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != s &&
                                    u !== nf.vI.NO_USER_REVIEWS &&
                                    (0, i.jsx)(J.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: eu.intl
                                            .format(eu.t.sgIoin, { rating_count: s.toLocaleString() })
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
        m = (0, e9.A)(),
        x = a.useCallback(() => {
            l(O.GameProfileTrackActionActions.OpenCriticReviews), m(n);
        }, [m, l, n]);
    return (0, i.jsx)(K.D, {
        onClick: x,
        className: nI.nf,
        role: "link",
        "aria-label": eu.intl.string(eu.t.aLNBAw),
        children: (0, i.jsxs)("div", {
            className: nI.Ur,
            children: [
                (0, i.jsx)($.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: eu.intl.string(eu.t["UxvER+"]),
                }),
                (0, i.jsxs)("div", {
                    className: nI.WA,
                    children: [
                        null != c ? (0, i.jsx)(nb, { tier: c }) : null,
                        null != c && o > 0 && u > 0 ? (0, i.jsx)(nS, { rating: o, tier: c }) : null,
                        d
                            ? (0, i.jsx)(J.E, {
                                  variant: "text-xs/medium",
                                  color: np(nf.vI.NO_USER_REVIEWS),
                                  children: eu.intl.string(eu.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function nb(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case nj.MIGHTY:
                    return eu.intl.string(eu.t.aZej2g);
                case nj.STRONG:
                    return eu.intl.string(eu.t.MLxnSg);
                case nj.FAIR:
                    return eu.intl.string(eu.t["3f19KA"]);
                case nj.WEAK:
                    return eu.intl.string(eu.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case nj.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case nj.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case nj.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case nj.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, i.jsx)(
        x.m,
        {
            text: n,
            children: (0, i.jsx)("div", {
                className: nI.TE,
                children: (0, i.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function nS(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: a } = (function (e) {
            let t = "";
            switch (e) {
                case nj.MIGHTY:
                    t = "#fc430a";
                    break;
                case nj.STRONG:
                    t = "#9e00b4";
                    break;
                case nj.FAIR:
                    t = "#4aa1ce";
                    break;
                case nj.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, i.jsx)(
        x.m,
        {
            text: eu.intl.string(eu.t.Ub4YR1),
            children: (0, i.jsxs)("div", {
                className: nI.TE,
                style: { backgroundColor: a },
                children: [
                    (0, i.jsx)(nE, { rating: t, strokeColor: l }),
                    (0, i.jsx)(J.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: nI.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let nT = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, nv.I)(t.id),
        a = t.opencriticUrl,
        r = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED && null != l,
        s = t.reviews?.steam,
        c = nA(s?.recentRating, s?.recentRatingCount, !0),
        o = r && c !== nf.vI.NO_USER_REVIEWS,
        d =
            null != s &&
            null != s.localizedRating &&
            null != s.localizedRatingCount &&
            null != s.ratingCount &&
            s.localizedRatingCount >= 200 &&
            s.ratingCount >= 2e3,
        m = d ? s?.localizedRating : s?.rating,
        x = d ? s?.localizedRatingCount : s?.ratingCount,
        h = d ? eu.t["aWb+V4"] : eu.t["8e4LiB"],
        g = t.reviews?.opencritic != null && null != a;
    return r || o || g
        ? (0, i.jsxs)("div", {
              className: nI.uW,
              children: [
                  (0, i.jsx)("div", {
                      className: nI.Gf,
                      children: (0, i.jsx)($.D, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: eu.intl.string(eu.t.GaAQXP),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: nI.kL,
                      children: [
                          o && null != l
                              ? (0, i.jsx)("div", {
                                    className: nI.WH,
                                    children: (0, i.jsx)(nN, {
                                        url: l,
                                        trackAction: n,
                                        title: eu.intl.string(eu.t.MQGNsN),
                                        rating: s?.recentRating,
                                        ratingCount: s?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          r && null != l
                              ? (0, i.jsx)("div", {
                                    className: nI.WH,
                                    children: (0, i.jsx)(nN, {
                                        url: l,
                                        trackAction: n,
                                        title: eu.intl.string(h),
                                        rating: m,
                                        ratingCount: x,
                                        tooltipVariant: d ? "localized" : "all",
                                    }),
                                })
                              : null,
                          g && null != a
                              ? (0, i.jsx)("div", {
                                    className: nI.WH,
                                    children: (0, i.jsx)(nk, { game: t, url: a, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var nC = n(839534),
    ny = n(674658),
    nR = n(722258),
    nG = n(258245),
    nL = n(561769),
    nP = n(57020),
    nO = n(758836),
    n_ = n(747828);
let nM = a.createContext({ trackAction: () => {} });
function nw(e) {
    let { skuId: t, aspectRatio: n } = e,
        { product: l } = (0, ny.q)(t, !0),
        r = a.useContext(nL.v3),
        { trackAction: s } = a.useContext(nM),
        c = a.useRef(null),
        o = a.useCallback(
            (e) => {
                s(O.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    null != l &&
                        ((c.current = e.currentTarget),
                        (0, nR.B)({
                            skuId: t,
                            analyticsLocations: [I.A.GAME_PROFILE],
                            analyticsSource: I.A.GAME_PROFILE,
                            shouldCheckoutWithOrbs: (0, nP.A)({ product: l }),
                            returnRef: c,
                        }));
            },
            [s, t, l],
        );
    if (null == l) return null;
    let { flattenProductVariants: u, ...d } = r;
    return (0, i.jsx)(nL.v3.Provider, {
        value: { flattenProductVariants: u ?? !0, ...d },
        children: (0, i.jsx)(nG.A, {
            skuId: t,
            aspectRatio: n,
            cardClassName: n_.N,
            onClickCard: o,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
        }),
    });
}
function nD(e) {
    let { game: t, trackAction: n } = e,
        { closeModal: l } = H(),
        r = (function (e) {
            let { hasFetched: t, skuIds: n } = (0, d.cf)([_.A], () => ({
                hasFetched: null != e && _.A.hasShopCollectionBeenFetched(e),
                skuIds: null != e ? _.A.getShopCollectionSkuIds(e) : void 0,
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || t || _.A.isShopCollectionFetching(e) || eE(e);
                }, [e, t]),
                n ?? []
            );
        })(t.shopCollectionIds?.[0]),
        s = a.useCallback(() => {
            n(O.GameProfileTrackActionActions.DiscordCollectiblesShop),
                l(),
                (0, nC.Cz)({
                    analyticsLocations: [I.A.GAME_PROFILE],
                    analyticsSource: I.A.GAME_PROFILE,
                    tab: nO.G2.CATALOG,
                });
        }, [n, l]),
        c = a.useMemo(() => ({ trackAction: n }), [n]);
    return 0 === r.length
        ? null
        : (0, i.jsx)(nM.Provider, {
              value: c,
              children: (0, i.jsx)(eO, {
                  title: eu.intl.string(eu.t["5DYPT8"]),
                  onClickViewAll: s,
                  children: (0, i.jsx)(Z.A, { gap: "md", children: r.map((e) => (0, i.jsx)(nw, { skuId: e }, e)) }),
              }),
          });
}
var nV = n(435558),
    nU = n.n(nV),
    nY = n(921138),
    nF = n(311043);
let nW = [],
    nB = [];
var nH = n(607346);
let nz = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function nX(e) {
    let { game: t, trackClick: n } = e,
        { navigateToGame: l } = H(),
        { shouldOpenGameProfile: r, gameId: s } = (0, nY.Ay)({
            gameId: t.id,
            source: O.GameProfileSources.SimilarGames,
        }),
        c = a.useCallback(() => {
            n(O.GameProfileTrackActionActions.ClickSimilarGame, t.id),
                r && null != s && l(s, O.GameProfileSources.SimilarGames);
        }, [t.id, s, n, r, l]);
    return (0, i.jsx)(x.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, i.jsx)(K.D, {
            className: nH.Nr,
            onClick: c,
            "aria-label": eu.intl.formatToPlainString(eu.t["8QLQB+"], { gameName: t.name }),
            children: (0, i.jsx)(tj.A, { game: t, className: nH.xe, size: tj.w.SMALL, imageSize: 256 }),
        }),
    });
}
function nK() {
    return (0, i.jsx)("div", { className: nH.nn });
}
function nJ(e) {
    let { gameId: t, trackAction: n } = e,
        { isFetching: l, similarGames: a } = (function (e) {
            let t = !ev.has(e),
                { data: n, isLoading: l, error: i } = eN(e, t),
                a = t && null != n ? n : nW;
            (0, y.x)(a);
            let r = (0, d.bG)(
                    [nF.A],
                    () => a.some((e) => null == nF.A.getGame(e) && !nF.A.hasNoData(e) && !nF.A.didFetchingFail(e)),
                    [a],
                ),
                s = (0, d.yK)([nF.A, W.default], () => {
                    let e = W.default.getCurrentUser()?.nsfwAllowed;
                    return a
                        .map((e) => nF.A.getGame(e))
                        .filter((e) => null != e)
                        .filter((t) => (0, nY.T_)(t) && !(0, D.b)(t, e));
                }, [a]);
            return t
                ? { isFetching: (null == i && null == n) || l || r, similarGames: s }
                : { isFetching: !1, similarGames: nB };
        })(t);
    return l
        ? (0, i.jsx)(eO, {
              title: eu.intl.string(eu.t["6rLyQB"]),
              children: (0, i.jsx)("div", {
                  className: nH.XG,
                  style: nz,
                  children: (0, i.jsx)(Z.A, {
                      gap: "md",
                      children: nU()
                          .range(0, 8)
                          .map((e) => (0, i.jsx)(nK, {}, e)),
                  }),
              }),
          })
        : 0 === a.length
          ? null
          : (0, i.jsx)(eO, {
                title: eu.intl.string(eu.t["6rLyQB"]),
                children: (0, i.jsx)("div", {
                    className: nH.XG,
                    style: nz,
                    children: (0, i.jsx)(Z.A, {
                        gap: "md",
                        children: a.map((e) => (0, i.jsx)(nX, { game: e, trackClick: n }, e.id)),
                    }),
                }),
            });
}
var n$ = n(871123),
    nq = n(317560),
    nQ = n(467884),
    nZ = n(761812);
function n0(e) {
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
        : (0, i.jsx)(Z.A, {
              gap: "md",
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: nZ.B,
                          children: (0, i.jsx)(nQ.A, {
                              positionInSection: t,
                              skuId: e,
                              variant: nQ.s.SMALL,
                              analyticsLocations: n,
                              onClick: r,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
function n1(e) {
    let { trackAction: t } = e,
        { socialLayerStorefrontRecommendationsData: n, closeModal: l } = H(),
        { analyticsLocations: r } = (0, N.Ay)([I.A.GAME_PROFILE]),
        s = a.useCallback(() => {
            n?.application != null &&
                (t(O.GameProfileTrackActionActions.GameShop),
                l(),
                (0, tO.default)({ applicationId: n.application.id }));
        }, [n, t, l]),
        c = a.useCallback(
            (e, i) => {
                let a = n?.guildId;
                null != a &&
                    (t(O.GameProfileTrackActionActions.GameShopItem),
                    (0, nq.R)({
                        skuId: e,
                        applicationId: i,
                        isStorefront: !1,
                        analyticsLocations: r,
                        onClose: () => {
                            let { pathname: e, search: t } = location;
                            (0, n$.rG)(e, t, i, a) && l();
                        },
                    }));
            },
            [t, l, r, n],
        );
    if (null == n) return null;
    let { skuIds: o } = n;
    return (0, i.jsx)(eO, {
        title: eu.intl.string(eu.t.WDdlUb),
        onClickViewAll: s,
        children: (0, i.jsx)(n0, { skuIds: o, analyticsLocations: r, onCardClick: c }),
    });
}
n(667532);
var n8 = n(853022);
let n2 = new Set(["1402418703554842694", "356877880938070016"]),
    n4 = [eK.V.EPICGAMES, eK.V.STEAM, eK.V.ROBLOX, eK.V.BATTLENET, eK.V.RIOT, eK.V.MINECRAFT];
var n5 = n(349361),
    n6 = n(924895),
    n3 = n(422688),
    n7 = n(505200),
    n9 = n(695250);
let le = function (e) {
    switch (e.category) {
        case eK.V.STEAM:
            return {
                icon: nh.N,
                text: eu.intl.string(eu.t.FsANs4),
                ariaLabel: eu.intl.string(eu.t["P+ePTG"]),
                action: O.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case eK.V.EPICGAMES:
            return {
                icon: n5.r,
                text: eu.intl.string(eu.t.ZbBMHa),
                ariaLabel: eu.intl.string(eu.t.BwX0UW),
                action: O.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case eK.V.ROBLOX:
            return {
                icon: n6.H,
                text: eu.intl.string(eu.t["pJ+P+h"]),
                ariaLabel: eu.intl.string(eu.t.tYxpdf),
                action: O.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case eK.V.BATTLENET:
            return {
                icon: n3.a,
                text: eu.intl.string(eu.t["A7grp+"]),
                ariaLabel: eu.intl.string(eu.t.x9at20),
                action: O.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case eK.V.RIOT:
            return {
                icon: n7.A,
                text: eu.intl.string(eu.t.h6MapL),
                ariaLabel: eu.intl.string(eu.t["528nvc"]),
                action: O.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case eK.V.MINECRAFT:
            return {
                icon: n9.m,
                text: eu.intl.string(eu.t["HZbmO+"]),
                ariaLabel: eu.intl.string(eu.t.WWTqYn),
                action: O.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: ti.Y,
                text: eu.intl.string(eu.t["QpN/Iz"]),
                ariaLabel: eu.intl.string(eu.t["8JZmmF"]),
                action: O.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
function lt(e) {
    return (0, i.jsx)(h.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var ln = n(48460);
function ll(e) {
    let t,
        n,
        l,
        i,
        r,
        s =
            ((t = (0, nv.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === ej.d3x.XBOX_GAME_PASS && !(0, eX.uJ)(e.id));
                return t?.id == null ? null : (0, n8.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (r = e?.steamReleaseStatus),
            a.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== eK.V.EPICGAMES || !!n2.has(l)) &&
                            (e.category !== eK.V.STEAM || r !== u.Y.RETIRED_ABANDONED) &&
                            n4.includes(e.category),
                    ) ?? [];
                null == t ||
                    r === u.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === eK.V.STEAM) ||
                    e.push({ category: eK.V.STEAM, url: t });
                let a = e.sort((e, t) => (e.category === eK.V.STEAM ? -1 : +(t.category === eK.V.STEAM)));
                return null != n && a.unshift({ category: "XBOX_GAME_PASS", url: n }), a;
            }, [t, i, l, r, n]));
    return { storeWebsites: s, showsStoreLinks: s.length > 0 && null != e };
}
function li(e) {
    let { data: t, trackAction: n } = e,
        l = (0, e9.A)();
    return (0, i.jsx)(lt, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            n(t.action), l(t.url);
        },
    });
}
let la = function (e) {
    let { game: t, trackAction: l } = e,
        { showsStoreLinks: r, storeWebsites: s } = ll(t),
        c = a.useMemo(() => s.map(le).filter((e) => null != e), [s]);
    if (!r) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, i.jsx)(li, { data: e, trackAction: l });
    }
    if (2 === c.length)
        return (0, i.jsxs)("div", {
            className: ln.G,
            children: [(0, i.jsx)(li, { data: c[0], trackAction: l }), (0, i.jsx)(li, { data: c[1], trackAction: l })],
        });
    let o = (0, i.jsx)(lt, {
        text: eu.intl.string(eu.t["/hMurx"]),
        "aria-label": eu.intl.string(eu.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: l, trackAction: a } = e;
                (0, f.openModalLazy)(async () => {
                    let { default: e } = await n.e("176758").then(n.bind(n, 459477));
                    return (n) => (0, i.jsx)(e, { game: t, websiteButtons: l, trackAction: a, ...n });
                });
            })({ game: t, websiteButtons: c, trackAction: l }),
    });
    return s.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, i.jsxs)("div", { className: ln.G, children: [(0, i.jsx)(li, { data: c[0], trackAction: l }), o] })
        : o;
};
var lr = n(123292);
function ls(e) {
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
        { isTwoColumn: u } = H(),
        d = a.useMemo(() => (u ? 8 : 5), [u]);
    if (null == t.description) return null;
    let m = r ? eu.intl.string(eu.t["6MwJo/"]) : eu.intl.string(eu.t.lBeKY2);
    return (0, i.jsxs)("div", {
        className: s()(ts.fi, ts.mX),
        children: [
            (0, i.jsx)(J.E, { ref: l, lineClamp: r ? void 0 : d, variant: "text-md/medium", children: t.description }),
            c && (0, i.jsx)(lr.Q, { onClick: o, text: m }),
        ],
    });
}
let lc = a.memo(function (e) {
        let { game: t, trackAction: n } = e;
        return (0, i.jsxs)("div", {
            className: ts.oC,
            children: [
                (0, i.jsxs)("div", {
                    className: ts.lM,
                    children: [
                        (0, i.jsx)(nx, { game: t, trackAction: n }),
                        (0, i.jsx)(ls, { game: t, trackAction: n }),
                    ],
                }),
                (0, i.jsx)(eH, { gameId: t.id, trackAction: n }),
                (0, i.jsx)(n1, { trackAction: n }),
                (0, i.jsx)(nD, { game: t, trackAction: n }),
                (0, i.jsx)(nJ, { gameId: t.id, trackAction: n }),
            ],
        });
    }),
    lo = a.memo(function (e) {
        let { game: t, trackAction: n, analyticsLocations: l } = e,
            a = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
        return (0, i.jsxs)("div", {
            className: ts.V0,
            children: [
                (0, i.jsx)(nx, { game: t, trackAction: n }),
                (0, i.jsxs)("div", {
                    className: ts.gr,
                    children: [
                        (0, i.jsx)(t6, { game: t, isTwoColumn: !1 }),
                        (0, i.jsxs)("div", {
                            className: ts.E1,
                            children: [
                                (0, i.jsx)(la, { game: t, trackAction: n }),
                                (0, i.jsx)(ls, { game: t, trackAction: n }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(nt, { analyticsLocations: l, trackAction: n }),
                (0, i.jsx)(tA, { trackAction: n }),
                (0, i.jsx)(eH, { gameId: t.id, trackAction: n }),
                (0, i.jsx)(n1, { trackAction: n }),
                (0, i.jsx)(nD, { game: t, trackAction: n }),
                (0, i.jsx)(nJ, { gameId: t.id, trackAction: n }),
                a && (0, i.jsx)(nT, { game: t, trackAction: n }),
                (0, i.jsx)(tx, { game: t, trackAction: n }),
            ],
        });
    });
function lu(e) {
    let { onCloudPlayClick: t, analyticsLocations: n, trackAction: l } = e,
        { closeModal: r } = H();
    (0, k.A)({
        name: c.ImpressionNames.CLOUD_PLAY_CTA,
        type: c.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let s = a.useCallback(() => {
        l(O.GameProfileTrackActionActions.CloudPlay), r(), t();
    }, [r, t, l]);
    return (0, i.jsx)(x.m, {
        text: eu.intl.string(eu.t.JVwWva),
        position: "top",
        children: (0, i.jsx)(h.$, {
            icon: g.h,
            text: eu.intl.string(eu.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: s,
            fullWidth: !0,
        }),
    });
}
function ld(e) {
    let { gameId: t, cloudPlayAppId: n, analyticsLocations: l, trackAction: a } = e,
        r = (0, E.rC)({ applicationId: n, sourceApplicationId: t, analyticsLocations: l });
    return null == r
        ? null
        : (0, i.jsx)("div", {
              className: ts.NC,
              children: (0, i.jsx)(lu, { onCloudPlayClick: r, analyticsLocations: l, trackAction: a }),
          });
}
function lm(e) {
    let { game: t, trackAction: n, analyticsLocations: l } = e,
        a = (0, v.A)(t.linkedApplications)?.id,
        [r] = (0, R.L_)(t.getOfficialApplicationId()),
        [c] = (0, R.L_)(t.id),
        { showsStoreLinks: o } = ll(t),
        d = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: s()(ts.Pn, ts.fi, ts.iH, o ? ts.sV : ts.gF),
        children: [
            null == a || r || c
                ? null
                : (0, i.jsx)(ld, { gameId: t.id, cloudPlayAppId: a, analyticsLocations: l, trackAction: n }),
            (0, i.jsxs)("div", {
                className: ts.V0,
                children: [
                    (0, i.jsx)(la, { game: t, trackAction: n }),
                    (0, i.jsx)(nt, { analyticsLocations: l, trackAction: n }),
                    (0, i.jsx)(tA, { trackAction: n }),
                    d && (0, i.jsx)(nT, { game: t, trackAction: n }),
                    (0, i.jsx)(tx, { game: t, trackAction: n }),
                ],
            }),
        ],
    });
}
function lx(e) {
    let {
            gameId: t,
            source: n,
            sourceUserId: l,
            transitionState: r,
            onClose: c,
            appContext: u,
            trackExternalAction: x,
            initialScrollOffset: h,
            navigateToGame: g,
        } = e,
        [v, E] = a.useState(!0),
        [k, R] = a.useState(null),
        { clientThemesClassName: H } = (0, S.Ay)(),
        z = (0, d.bG)([P.default], () => P.default.locale),
        X = a.useMemo(() => (0, O.generateViewId)(), []),
        { analyticsLocations: K } = (0, N.Ay)(I.A.GAME_PROFILE),
        J = (0, M.s)(t),
        { data: $ } = (0, y.I)(t),
        q = $?.name ?? "",
        Q = (0, D.A)($),
        Z = a.useRef(null);
    a.useEffect(() => {
        Z.current = k;
    }, [k]);
    let {
            hasAlreadyLinked: ee,
            canStartAuthorization: et,
            fetched: en,
            startAuthorization: el,
            connectionApp: ei,
        } = (0, b.RD)($),
        { invite: ea, isMember: er } = (0, w.A)($, R),
        { socialLayerStorefrontRecommendationsData: es } = (function (e) {
            let t = W.default.getCurrentUser()?.id,
                n = a.useMemo(() => (null != t ? [t] : []), [t]),
                l = (0, d.bG)([U.A], () => (null != e ? U.A.getApplicationIdFromDetectableId(e) : void 0)),
                i = (0, V.h)(l),
                r = a.useMemo(() => (null != l ? [l] : []), [l]),
                { recommendations: s, status: c } = (0, F.XQ)({
                    applicationIds: r,
                    userIds: n,
                    numItems: 6,
                    source: Y.B5.USER_PROFILE,
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
        })(t),
        ec = a.useCallback(
            function (e, l) {
                let { guildId: i, isVerified: a } = (0, O.getGuildIdAndVerifiedFromInvite)(Z.current);
                (0, O.trackGameProfileAction)({
                    gameName: q,
                    gameId: t,
                    action: e,
                    similarGameId: l,
                    viewId: X,
                    guildId: i,
                    isVerified: a,
                    source: n,
                });
            },
            [q, t, X, n],
        );
    (0, j.Ay)(() => {
        (0, O.trackGameProfileOpen)({
            source: n,
            viewId: X,
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
                i = J.map((e) => {
                    let t = (0, C.JM)(e) ? (0, C.W6)(e, l) : (0, C.aJ)(e, z);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, O.trackGameProfileClose)({
                viewId: X,
                gameId: t,
                gameName: q,
                playedFriendIds: J.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: _.A.getSimilarGames(t) ?? [],
                guildId: n,
                isVerified: e,
            });
        });
    let eo = a.useCallback((e) => {
            E(e.contentRect.width >= 800);
        }, []),
        eu = (0, o.w)(eo, [], { fireOnMount: !0 }),
        ed = a.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, f.closeAllModals)(), (0, L.closeUserProfileModal)()) : c();
            },
            [c],
        ),
        em = a.useCallback(() => ed(!1), [ed]),
        ex = a.useRef(null),
        eh = a.useCallback(() => ex.current?.getScrollerNode()?.scrollTop ?? 0, []),
        eg = a.useMemo(
            () => ({
                isTwoColumn: v,
                canStartAuthorization: et,
                hasAlreadyLinked: ee,
                fetchedAuthorization: en,
                startAuthorization: el,
                connectionApp: ei,
                invite: ea,
                isMember: er,
                socialLayerStorefrontRecommendationsData: es,
                closeModal: ed,
                navigateToGame: g,
                getScrollOffset: eh,
            }),
            [v, et, ee, en, el, ei, ea, er, es, ed, g, eh],
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
    return null == $
        ? null
        : (0, i.jsx)(N.f5, {
              value: K,
              children: (0, i.jsx)(m.N, {
                  transitionState: r,
                  onClose: c,
                  children: (0, i.jsx)(B.Provider, {
                      value: eg,
                      children: (0, i.jsx)("div", {
                          className: s()(H, ts.kL),
                          ref: eu,
                          children: (0, i.jsxs)(G.A, {
                              obscured: Q,
                              onClose: em,
                              children: [
                                  (0, i.jsx)(t2, { game: $, ref: ev }),
                                  (0, i.jsx)(t1, { game: $, show: ef, trackAction: ec }),
                                  (0, i.jsx)(t8, { show: ef }),
                                  (0, i.jsxs)(A.Ch, {
                                      ref: ex,
                                      onScroll: eE,
                                      children: [
                                          (0, i.jsx)(t3, {
                                              game: $,
                                              onSetCompactBarScrollThreshold: ej,
                                              showCompactBar: ef,
                                          }),
                                          (0, i.jsx)(p.F, {
                                              children: v
                                                  ? (0, i.jsxs)("div", {
                                                        className: ts.jC,
                                                        children: [
                                                            (0, i.jsx)(lc, { game: $, trackAction: ec }),
                                                            (0, i.jsx)(lm, {
                                                                game: $,
                                                                appContext: u,
                                                                source: n,
                                                                trackExternalAction: x,
                                                                trackAction: ec,
                                                                analyticsLocations: K,
                                                            }),
                                                        ],
                                                    })
                                                  : (0, i.jsx)("div", {
                                                        className: ts.b9,
                                                        children: (0, i.jsx)(lo, {
                                                            game: $,
                                                            trackAction: ec,
                                                            analyticsLocations: K,
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
}
let lh = function (e) {
    let { gameId: t, source: n, sourceUserId: l, initialScrollOffset: r, ...s } = e,
        [c, o] = a.useState({ gameId: t, source: n, sourceUserId: l, initialScrollOffset: r }),
        u = c.gameId,
        d = a.useCallback(
            (e, t) => {
                e !== u && ((0, w.U)(e), o({ gameId: e, source: t }));
            },
            [u],
        );
    return (0, i.jsx)(
        lx,
        {
            gameId: c.gameId,
            source: c.source,
            sourceUserId: c.sourceUserId,
            initialScrollOffset: c.initialScrollOffset,
            navigateToGame: d,
            ...s,
        },
        c.gameId,
    );
};
