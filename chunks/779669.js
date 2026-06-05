l.d(t, { default: () => lK });
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
    ee = l(387408),
    et = l(731068),
    el = l(59318),
    en = l(320095),
    ei = l(708676),
    ea = l(383233),
    es = l(998218),
    er = l(375708);
let ec = /^#{1,3}\s+(.+)$/,
    eo = /^https?:\/\/\S+$/;
function eu(e) {
    let t = es.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
var ed = l(60465),
    em = l(636537),
    ex = l(228366);
l(913122);
var eh = l(371794),
    eg = l(652215);
let ef = async (e) => {
        ex.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
        try {
            let t = (
                await (0, eh.aP)({
                    url: eg.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: y.default.locale },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.flatMap((e) => e.sku_ids);
            ex.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: t });
        } catch (t) {
            ex.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
        }
    },
    ep = async (e, t) => {
        ex.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
        try {
            let l = {};
            t?.limit != null && (l.limit = t.limit);
            let n = (await em.Bo.get({ url: eg.Rsh.GAME_ANNOUNCEMENTS(e), query: l, rejectWithError: !1 })).body;
            ex.h.dispatch({
                type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
                gameId: e,
                messages: n.messages.map((e) => {
                    let t,
                        l,
                        n = (0, ee.A)((0, en.rh)(e)),
                        i = n.content,
                        a = (function (e) {
                            if ((0, ea._c)(e))
                                return e.components
                                    .filter((e) => e.type === Q.I5.TEXT_DISPLAY)
                                    .map((e) => e.content)
                                    .join("\n");
                            let t = e.content;
                            return 0 === t.length || eo.test(t.trim())
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
                            if ((0, ea._c)(e)) {
                                let t = e.components.find((e) => e.type === Q.I5.MEDIA_GALLERY),
                                    l = t?.items[0]?.media;
                                if (null != l) {
                                    let t = (0, et.FE)(l);
                                    if ("INVALID" !== t) return { ...l, type: t, sourceMetadata: { message: e } };
                                }
                            }
                            let t = e.attachments.find((e) => (0, el.tT)(e.content_type));
                            if (null != t) return (0, et.Rr)(t, e);
                            let l = e.attachments.find((e) => (0, el.XB)(e.content_type));
                            if (null != l) return (0, et.Rr)(l, e);
                            let n = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                            if (n?.thumbnail != null)
                                return (0, et.oU)(
                                    n.thumbnail,
                                    {
                                        message: e,
                                        identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === n) },
                                    },
                                    "IMAGE",
                                );
                            let i = e.embeds.find((e) => null != e.image);
                            if (i?.image != null)
                                return (0, et.oU)(
                                    i.image,
                                    {
                                        message: e,
                                        identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                    },
                                    "IMAGE",
                                );
                            let a = e.embeds.find((e) => null != e.thumbnail);
                            if (a?.thumbnail != null)
                                return (0, et.oU)(
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
                            (l = (-1 === t ? a : a.slice(0, t)).match(ec)),
                            null != l
                                ? { title: l[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                                : { body: a }),
                        o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                        u =
                            a === i || (0, ea._c)(n)
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
            ex.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
        }
    };
var ej = l(422069),
    ev = l(284009),
    eE = l.n(ev),
    eA = l(376728),
    eI = l(976860),
    eN = l(71393),
    eb = l(385648);
async function eS(e) {
    let { invite: t, guildId: l, channelId: n, messageId: i, analyticsLocationStack: a } = e;
    eE()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((l = t.guild?.id), (r = new Set(t.guild?.features))), null == l)) return;
    let c = eN.A.getGuild(l);
    if (c?.joinedAt == null)
        if (null == r || r.has(eg.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, eb.Z2)(
                l,
                {},
                { shouldNavigate: !0, channelId: n, messageId: i, joinSource: eg.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await eA.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, eI.pX)(eg.BVt.CHANNEL(l, n, i), { sourceLocationStack: a });
}
var eC = l(320448),
    eR = l(274119);
function eT(e) {
    let { children: t, title: l, onClickViewAll: n } = e;
    return (0, i.jsxs)("div", {
        className: eR.k,
        children: [
            (0, i.jsxs)("div", {
                className: eR.w,
                children: [
                    (0, i.jsx)(K.D, { variant: "heading-lg/medium", children: l }),
                    null != n &&
                        (0, i.jsx)(h.$, {
                            size: "sm",
                            icon: eC._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: n,
                            text: er.intl.string(er.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var eL = l(468489),
    ek = l(992595);
function ey(e, t) {
    return q.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
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
        g = (null != h ? eu(h) : null) ?? h,
        { embedSource: f } = l;
    return null == f
        ? null
        : (0, i.jsx)(z.D, {
              className: u ? eL.jI : eL.IU,
              onClick: m,
              children: (0, i.jsxs)("div", {
                  className: u ? eL.GT : eL.s4,
                  children: [
                      null != f.url &&
                          (0, i.jsx)(X.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: eL.Ow,
                              children: f.url,
                          }),
                      (0, i.jsxs)("div", {
                          className: eL._d,
                          style: null != f.color ? { borderInlineStartColor: f.color } : void 0,
                          children: [
                              null != f.authorName &&
                                  (0, i.jsxs)("div", {
                                      className: eL.Tu,
                                      children: [
                                          null != f.authorIconUrl &&
                                              (0, i.jsx)("img", {
                                                  src: f.authorIconUrl,
                                                  className: eL.SG,
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
                                      className: eL.ax,
                                      children: (0, i.jsx)(H.y, {
                                          readyState: c ? eg.Rv1.READY : eg.Rv1.LOADING,
                                          aspectRatio: x,
                                          placeholder: l.media.placeholder,
                                          placeholderVersion: l.media.placeholderVersion,
                                          placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                                          children: (0, i.jsx)("img", {
                                              src: g,
                                              className: eL.Lw,
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
                                      className: u ? eL.KX : eL._N,
                                      children: ey(l.title, n),
                                  }),
                              l.body.length > 0 &&
                                  (0, i.jsxs)("div", {
                                      className: r()(eL.h_, ek.PT),
                                      children: [ey(l.body, n), (0, i.jsx)("div", { className: eL.fm })],
                                  }),
                              (0, i.jsxs)("div", {
                                  className: eL.ov,
                                  children: [
                                      null != f.providerIconUrl &&
                                          (0, i.jsx)("img", {
                                              src: f.providerIconUrl,
                                              className: eL.Cd,
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
                                              className: eL.a5,
                                              children: [
                                                  (0, i.jsx)(J.n, { size: "xs", color: "currentColor" }),
                                                  (0, i.jsx)(X.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(er.intl.currentLocale).format(
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
function e_(e) {
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
        g = (null != h ? eu(h) : null) ?? h,
        f = null != l.media && null != g;
    return (0, i.jsxs)(z.D, {
        className: r()({ [eL.cG]: u && f, [eL.jI]: u && !f, [eL.IU]: !u }),
        onClick: m,
        children: [
            null != l.media &&
                null != g &&
                (0, i.jsx)("div", {
                    className: u ? eL._v : eL.eZ,
                    children: (0, i.jsx)(H.y, {
                        readyState: c ? eg.Rv1.READY : eg.Rv1.LOADING,
                        aspectRatio: x,
                        placeholder: l.media.placeholder,
                        placeholderVersion: l.media.placeholderVersion,
                        placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                        children: (0, i.jsx)("img", {
                            src: g,
                            className: u ? eL.fk : eL.v,
                            alt: "",
                            draggable: !1,
                            onLoad: d,
                        }),
                    }),
                }),
            (0, i.jsxs)("div", {
                className: u ? eL.GT : eL.s4,
                children: [
                    null != l.title &&
                        (0, i.jsx)(K.D, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            className: u ? eL.KX : eL._N,
                            children: ey(l.title, n),
                        }),
                    l.body.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: r()(eL.h_, ek.PT),
                            children: [ey(l.body, n), (0, i.jsx)("div", { className: eL.fm })],
                        }),
                    (0, i.jsxs)("div", {
                        className: eL.ov,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: (0, Z.i$)(new Date(l.timestamp), "LL"),
                            }),
                            l.reactionCount > 0 &&
                                (0, i.jsxs)("div", {
                                    className: eL.a5,
                                    children: [
                                        (0, i.jsx)(J.n, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(X.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            children: new Intl.NumberFormat(er.intl.currentLocale).format(
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
function eM(e) {
    let { variant: t, message: l, onCardClick: n } = e,
        s = "main" === t,
        { poll: r } = l,
        c = a.useCallback(() => n(l.id), [n, l.id]);
    if (null == r) return null;
    let o = r.answers.slice(0, 3),
        u = r.answers.length - o.length;
    return (0, i.jsx)(z.D, {
        className: s ? eL.jI : eL.IU,
        onClick: c,
        children: (0, i.jsxs)("div", {
            className: s ? eL.GT : eL.s4,
            children: [
                (0, i.jsx)(K.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: eL.MH,
                    children: r.question.text,
                }),
                (0, i.jsxs)("div", {
                    className: eL.xd,
                    children: [
                        o.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    className: eL.Nf,
                                    children: (0, i.jsx)(X.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: eL.TT,
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
                                className: eL.PF,
                                children: er.intl.format(er.t["mv/nIa"], { count: u }),
                            }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: eL.ov,
                    children: (0, i.jsx)(X.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: er.intl.format(er.t.t0FTsH, {
                            createdAt: new Date(l.timestamp),
                            expiryLabel: (0, ei.J)(r.expiry) ?? er.intl.string(er.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function eG(e) {
    return null != e.message.poll
        ? (0, i.jsx)(eM, { ...e })
        : null != e.message.embedSource
          ? (0, i.jsx)(eO, { ...e })
          : (0, i.jsx)(e_, { ...e });
}
function eP(e) {
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
            } = (0, d.cf)([ej.A], () => ({
                data: null != e ? ej.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && ej.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && ej.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || l || ej.A.isAnnouncementsFetching(e) || ep(e);
                }, [e, l]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: n }
            );
        })(t),
        x = a.useCallback(() => {
            let e = s?.guild?.id ?? u;
            null != e &&
                null != m &&
                (l(O.Ws.Announcements),
                ed.A.setGameProfilePendingReturn({ gameId: t, channelId: m, initialScrollOffset: c() }),
                r(),
                eS({ invite: s, guildId: e, channelId: m, analyticsLocationStack: n }));
        }, [l, r, c, s, u, m, n, t]),
        h = a.useCallback(
            (e) => {
                let i = s?.guild?.id ?? u;
                null != i &&
                    null != m &&
                    (l(O.Ws.AnnouncementsItem),
                    ed.A.setGameProfilePendingReturn({ gameId: t, channelId: m, initialScrollOffset: c() }),
                    r(),
                    eS({ invite: s, guildId: i, channelId: m, messageId: e, analyticsLocationStack: n }));
            },
            [l, r, c, s, u, m, n, t],
        );
    if (null == m || 0 === o.length) return null;
    let g = 2 !== o.length,
        f = g ? o[0] : null,
        p = g ? o.slice(1) : o;
    return (0, i.jsx)(eT, {
        title: er.intl.string(er.t.B0BV3Y),
        onClickViewAll: x,
        children: (0, i.jsxs)("div", {
            className: eL.f3,
            children: [
                null != f && (0, i.jsx)(eG, { variant: "main", message: f, channelId: m, onCardClick: h }),
                p.length > 0 &&
                    (0, i.jsx)($.A, {
                        gap: 16,
                        children: p.map((e) =>
                            (0, i.jsx)(eG, { variant: "small", message: e, channelId: m, onCardClick: h }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
var ew = l(541830),
    eD = l(240248);
let eV = [M.V.OFFICIAL, M.V.FACEBOOK, M.V.TWITTER, M.V.INSTAGRAM, M.V.YOUTUBE, M.V.BLUESKY, M.V.REDDIT, M.V.TWITCH];
var eW = l(808380);
let eY = [eW.Y.DESKTOP, eW.Y.XBOX, eW.Y.PLAYSTATION, eW.Y.NINTENDO];
var eU = l(349288),
    eF = l(975807),
    eB = l(194362);
function eH(e) {
    let { game: t, trackAction: l } = e,
        n = a.useCallback(async () => {
            l(O.Ws.ClaimGame);
            let e = await (0, eB.a)(eg.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, eF.A)(e);
        }, [l]),
        s = a.useCallback((e) => (0, i.jsx)(eU.Anchor, { onClick: n, children: e }), [n]);
    return t.linkedApplications?.some((e) => e.type === Q.Mh.OFFICIAL)
        ? null
        : (0, i.jsx)(X.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: er.intl.format(er.t.KAjfKl, { claimLink: s }),
          });
}
var ez = l(998445),
    eX = l(274997),
    eK = l(80500),
    eJ = l(319745),
    e$ = l(488225),
    eq = l(967492),
    eZ = l(72265),
    eQ = l(454346),
    e0 = l(37948),
    e1 = l(262420);
let e8 = { size: "xs", colorClass: e1.wP };
function e4(e) {
    let { website: t, trackAction: l } = e,
        n = (0, e0.A)(),
        {
            action: s,
            icon: r,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case M.V.OFFICIAL:
                    return {
                        icon: (0, i.jsx)(ez.L, { ...t }),
                        action: O.Ws.WebsiteLink,
                        title: er.intl.string(er.t.fOUKvg),
                    };
                case M.V.TWITTER:
                    return { icon: (0, i.jsx)(eX.p, { ...t }), action: O.Ws.XLink, title: er.intl.string(er.t.INic4y) };
                case M.V.YOUTUBE:
                    return {
                        action: O.Ws.YouTubeLink,
                        icon: (0, i.jsx)(eK.C, { ...t }),
                        title: er.intl.string(er.t.lNmxbE),
                    };
                case M.V.FACEBOOK:
                    return {
                        icon: (0, i.jsx)(eJ.Z, { ...t }),
                        action: O.Ws.FacebookLink,
                        title: er.intl.string(er.t.FjyREK),
                    };
                case M.V.INSTAGRAM:
                    return {
                        icon: (0, i.jsx)(e$.L, { ...t }),
                        action: O.Ws.InstagramLink,
                        title: er.intl.string(er.t["cgR+IK"]),
                    };
                case M.V.BLUESKY:
                    return {
                        icon: (0, i.jsx)(eq.a, { ...t }),
                        action: O.Ws.BlueskyLink,
                        title: er.intl.string(er.t["D/PHq5"]),
                    };
                case M.V.REDDIT:
                    return {
                        icon: (0, i.jsx)(eZ.T, { ...t }),
                        action: O.Ws.RedditLink,
                        title: er.intl.string(er.t["Hgb+fc"]),
                    };
                case M.V.TWITCH:
                    return {
                        icon: (0, i.jsx)(eQ.a, { ...t }),
                        action: O.Ws.TwitchLink,
                        title: er.intl.string(er.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, e8),
        o = a.useCallback(() => {
            l(s), n(t.url);
        }, [s, n, l, t.url]);
    return (0, i.jsx)(m.m, {
        text: c,
        children: (0, i.jsx)(z.D, { onClick: o, className: e1.yO, title: c, children: r }),
    });
}
var e3 = l(31300),
    e2 = l(802516),
    e5 = l(22363),
    e6 = l(418524),
    e9 = l(141535);
function e7(e) {
    let { platform: t, ...l } = e;
    switch (t) {
        case eW.Y.DESKTOP:
            return (0, i.jsx)(e3.k, { size: "xs", ...l });
        case eW.Y.XBOX:
            return (0, i.jsx)(e2.Y, { size: "xs", ...l });
        case eW.Y.PLAYSTATION:
            return (0, i.jsx)(e5.X, { size: "xs", ...l });
        case eW.Y.NINTENDO:
            return (0, i.jsx)(e6.M, { size: "xs", ...l });
        default:
            return null;
    }
}
function te(e) {
    let { platform: t } = e;
    return (0, i.jsx)(
        m.m,
        {
            text: (function (e) {
                switch (e) {
                    case eW.Y.DESKTOP:
                        return er.intl.string(er.t.KT6uCJ);
                    case eW.Y.XBOX:
                        return er.intl.string(er.t.DDWUJp);
                    case eW.Y.PLAYSTATION:
                        return er.intl.string(er.t.fzMz2s);
                    case eW.Y.NINTENDO:
                        return er.intl.string(er.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, i.jsx)(e7, { platform: t }),
        },
        t,
    );
}
var tt = l(424994),
    tl = l(60541);
function tn() {
    return (0, i.jsx)(X.E, { variant: "text-sm/normal", color: "text-subtle", children: er.intl.string(er.t.GruYxV) });
}
let ti = function (e) {
    let { game: t, trackAction: l } = e,
        n = a.useMemo(() => t.genres.map(ew.du).join(", "), [t]),
        s = t.getCompanyByRole(Q.wk.PUBLISHER),
        r = t.getCompanyByRole(Q.wk.DEVELOPER),
        c = s.map((e) => e.name).join(", "),
        o = r.map((e) => e.name).join(", "),
        u = t.firstReleaseDate,
        d = a.useMemo(() => {
            let e = new Set(t.platforms),
                l = [...e];
            return (
                !e.has(eW.Y.DESKTOP) && (e.has(eW.Y.MACOS) || e.has(eW.Y.LINUX)) && l.push(eW.Y.DESKTOP),
                l.filter((e) => eY.includes(e)).sort((e, t) => eY.indexOf(e) - eY.indexOf(t))
            );
        }, [t.platforms]),
        m = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return eV.includes(t);
            })
            .sort((e, t) => eV.indexOf(e.category) - eV.indexOf(t.category)),
        x = !(0, eD.uJ)(n),
        h = !(0, eD.uJ)(c),
        g = !(0, eD.uJ)(o),
        f = !(0, eD.uJ)(u),
        p = d.length > 0,
        j = m.length > 0 && !m.every((e) => (0, eD.uJ)(e.url));
    return (0, i.jsxs)("div", {
        className: tl.uW,
        children: [
            (0, i.jsx)("div", {
                className: tl.Gf,
                children: (0, i.jsx)(K.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: er.intl.string(er.t["7OjmmH"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tl.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: tl.J1,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? er.intl.string(er.t.pDgwYB) : er.intl.string(er.t.mjFKqn),
                            }),
                            x
                                ? (0, i.jsx)(X.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tl.Gu,
                                      children: n,
                                  })
                                : (0, i.jsx)(tn, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tl.J1,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== s.length ? er.intl.string(er.t.Hc7Enk) : er.intl.string(er.t["4Byy/G"]),
                            }),
                            h
                                ? (0, i.jsx)(X.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tl.Gu,
                                      children: c,
                                  })
                                : (0, i.jsx)(tn, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tl.J1,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? er.intl.string(er.t.KATEJB) : er.intl.string(er.t.na3PT0),
                            }),
                            g
                                ? (0, i.jsx)(X.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tl.Gu,
                                      children: o,
                                  })
                                : (0, i.jsx)(tn, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tl.J1,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: er.intl.string(er.t.H3mPDT),
                            }),
                            f
                                ? (0, i.jsx)(X.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tl.Gu,
                                      children: Z.i$(new Date(u), "LL"),
                                  })
                                : (0, i.jsx)(tn, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tl.J1,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: d.length > 1 ? er.intl.string(er.t.PNqxNe) : er.intl.string(er.t["UxAag+"]),
                            }),
                            p
                                ? (0, i.jsx)("div", {
                                      className: tl.Gu,
                                      children: d.map((e) => (0, i.jsx)(te, { platform: e }, e)),
                                  })
                                : (0, i.jsx)(tn, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tl.J1,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: er.intl.string(er.t["Oj3o1/"]),
                            }),
                            j
                                ? (0, i.jsx)("div", {
                                      className: tl.Gu,
                                      children: m.map((e) => (0, i.jsx)(e4, { website: e, trackAction: l }, e.url)),
                                  })
                                : (0, i.jsx)(tn, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tl.J1,
                        children: [
                            (0, i.jsx)(X.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: er.intl.string(er.t["BwQ+9e"]),
                            }),
                            (0, i.jsx)(X.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: tl.Gu,
                                children: er.intl.format(er.t.XPFZVl, { igdbLink: tt.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: tl.OQ, children: (0, i.jsx)(eH, { game: t, trackAction: l }) }),
        ],
    });
};
var ta = l(714991),
    ts = l(486020),
    tr = l(552523);
function tc(e) {
    let { trackAction: t } = e,
        { canStartAuthorization: l, hasAlreadyLinked: n, invite: s, isMember: r, closeModal: c } = F(),
        o = a.useCallback(() => {
            null != s &&
                (t(O.Ws.JoinServer),
                c(),
                ex.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: s, code: s.code, context: eg.BRT.APP }));
        }, [s, t, c]);
    if (null == s || null == s.guild) return null;
    let u = ts.Ay.getGuildIconURL({ id: s.guild.id, icon: s.guild.icon, size: 48 }),
        d = ts.Ay.getGuildSplashURL({ id: s.guild.id, splash: s.guild.splash }),
        m = (l && !n) || null == d,
        x = (0, i.jsx)("img", {
            className: tr.$f,
            src: u,
            alt: er.intl.formatToPlainString(er.t.xm6W9D, { guildName: s.guild.name }),
            draggable: !1,
        }),
        g = m ? tr.To : tr.Kt,
        f = m ? tr.yj : tr.FS;
    return (0, i.jsxs)("div", {
        className: tr.uW,
        children: [
            (0, i.jsx)(K.D, {
                className: tr.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: er.intl.string(er.t["U2N+ci"]),
            }),
            (0, i.jsxs)("div", {
                className: tr.kL,
                children: [
                    !m && null != d && (0, i.jsx)("img", { className: tr.ll, src: d, alt: "", draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: tr.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: g,
                                children: [
                                    m
                                        ? x
                                        : (0, i.jsx)("div", {
                                              className: tr._C,
                                              children: (0, i.jsx)("div", { className: tr.kW, children: x }),
                                          }),
                                    (0, i.jsxs)("div", {
                                        className: f,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: tr.YS,
                                                children: [
                                                    (0, i.jsx)(ta.A, { guild: s.guild, size: 16 }),
                                                    (0, i.jsx)(K.D, {
                                                        variant: "heading-md/semibold",
                                                        color: "text-default",
                                                        children: s.guild.name,
                                                    }),
                                                ],
                                            }),
                                            !(0, eD.uJ)(s.guild?.description) &&
                                                (0, i.jsx)(X.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: s.guild?.description,
                                                }),
                                            null != s.approximate_member_count || null != s.approximate_presence_count
                                                ? (0, i.jsxs)("div", {
                                                      className: tr.iR,
                                                      children: [
                                                          null != s.approximate_presence_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: tr.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: tr._o }),
                                                                      (0, i.jsx)(X.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: er.intl.format(er.t["LC+S+m"], {
                                                                              membersOnline:
                                                                                  s.approximate_presence_count,
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          null != s.approximate_member_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: tr.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: tr.jk }),
                                                                      (0, i.jsx)(X.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: er.intl.format(er.t.zRl6XR, {
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
                                text: r ? er.intl.string(er.t.cEnaWx) : er.intl.string(er.t.XpeFYr),
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
var to = l(369606),
    tu = l(459746),
    td = l(922016),
    tm = l(980707),
    tx = l(477782),
    th = l(663341),
    tg = l(408278),
    tf = l(34188),
    tp = l(365199),
    tj = l(789645),
    tv = l(442433),
    tE = l(50268),
    tA = l(44724),
    tI = l(67518),
    tN = l(540185),
    tb = l(926268),
    tS = l(53788),
    tC = l(831453),
    tR = l(785866),
    tT = l(555704),
    tL = l(457965),
    tk = l(47675),
    ty = l(633075),
    tO = l(289173),
    t_ = l(841595),
    tM = l(958805),
    tG = l(735321),
    tP = l(495544),
    tw = l(760751);
async function tD(e) {
    let t = e((0, tG.BF)());
    await tM.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function tV(e) {
    let { game: t, className: l, trackAction: n } = e,
        s = a.useRef(null),
        r = a.useRef(null),
        c = (0, tE.A)({ id: t.id, label: er.intl.string(er.t.SHQGPj) }),
        o = (0, tI.n)(t.id, n),
        u = (function (e) {
            let t = e?.id,
                l = e?.name ?? "",
                n = (0, d.bG)([tP.default], () => tP.default.getId()),
                s = (0, d.bG)([tw.A], () => tw.A.getDetectableGame(t)),
                r = a.useMemo(
                    () => [
                        {
                            type: tN.x.FAVORITE_GAMES,
                            addLabel: er.intl.string(er.t.fgmitg),
                            removeLabel: er.intl.string(er.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: tb.C,
                        },
                        {
                            type: tN.x.PLAYED_GAMES,
                            addLabel: er.intl.string(er.t["0xIVLR"]),
                            removeLabel: er.intl.string(er.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: tS.G,
                        },
                        {
                            type: tN.x.CURRENT_GAMES,
                            addLabel: er.intl.string(er.t.G0c4En),
                            removeLabel: er.intl.string(er.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: tC.H,
                        },
                        {
                            type: tN.x.WANT_TO_PLAY_GAMES,
                            addLabel: er.intl.string(er.t.UuBS4K),
                            removeLabel: er.intl.string(er.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: tR._,
                        },
                    ],
                    [],
                ),
                c = (0, d.yK)([t_.A], () => (null == n ? [] : (t_.A.getUserProfile(n)?.widgets ?? [])), [n]),
                o = (0, tL.w$)({ location: "game-profile-overflow-menu" }),
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
                            (await tD((i) => {
                                let a = i.filter(tO.fu).find((t) => t.type === e) ?? null;
                                if (l) {
                                    if (a?.games.some((e) => e.applicationId === t) || (null != a && (0, tG.uA)(a)))
                                        return i;
                                    let l = { applicationId: t },
                                        s = null != a ? [l, ...(a.games ?? [])] : [l];
                                    n = new tO.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.applicationId !== t);
                                    n = new tO.Yy({ ...a, games: e });
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
                        (0, tk.un)({
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
                            (await tD((l) =>
                                e
                                    ? l.some((e) => e instanceof ty.R && e.applicationId === u)
                                        ? l
                                        : [(t = new ty.R({ applicationId: u })), ...l]
                                    : ((t = l.find((e) => e instanceof ty.R && e.applicationId === u) ?? null),
                                      l.filter((e) => !(e instanceof ty.R && e.applicationId === u))),
                            ),
                            null == t)
                        )
                            return;
                        let l = t;
                        (0, tk.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...l.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [u],
                );
            if (null == n) return null;
            let h = null != e && null != s && (0, tG.XX)(s),
                g = [];
            if (null != u) {
                let e = c.some((e) => e instanceof ty.R && e.applicationId === u);
                g.push(
                    (0, i.jsx)(
                        tx.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? er.intl.formatToPlainString(er.t.Ktb1n8, { name: l })
                                : er.intl.formatToPlainString(er.t.Xp6iZt, { name: l }),
                            action: () => x(!e),
                            leadingAccessory: { type: "icon", icon: tT.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (h)
                for (let e of r) {
                    let l = c.filter(tO.fu).find((t) => t.type === e.type) ?? null,
                        n = null != l && l.games.some((e) => e.applicationId === t),
                        a = !n && null != l && (0, tG.uA)(l);
                    g.push(
                        (0, i.jsx)(
                            tx.Dr,
                            {
                                id: e.menuId,
                                label: n ? e.removeLabel : e.addLabel,
                                subtext: a ? er.intl.string(er.t["86OoiH"]) : void 0,
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
        f = (0, d.bG)([D.A], () => D.A.getApplicationIdFromDetectableId(t.id)),
        p = new Set(x?.guild?.features).has(eg.GuildFeatures.SOCIAL_LAYER_STOREFRONT),
        j = a.useCallback(() => {
            null != f && (0, tA.G)({ applicationId: f });
        }, [f]),
        v = a.useCallback(() => {
            null != f && (n(O.Ws.GameShop), (0, tA.default)({ applicationId: f }), g());
        }, [f, n, g]),
        E = a.useCallback(() => g(!1), [g]);
    return (0, i.jsxs)("div", {
        className: l,
        children: [
            null != u &&
                (0, i.jsx)(td.Y, {
                    targetElementRef: r,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(tm.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                (0, tv.Z_)(), t();
                            },
                            "aria-label": er.intl.string(er.t.sidPSo),
                            onSelect: () => {},
                            children: (0, i.jsx)(tx.rX, { children: u }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: r,
                            children: (0, i.jsx)(h.$, {
                                icon: th.p,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: er.intl.string(er.t.sidPSo),
                            }),
                        }),
                }),
            p &&
                null != x &&
                (0, i.jsx)(m.m, {
                    text: er.intl.string(er.t.apFNLU),
                    children: (0, i.jsx)(tg.K, {
                        icon: tf.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": er.intl.string(er.t.apFNLU),
                        onMouseDown: j,
                        onClick: v,
                    }),
                }),
            (null != c || null != o) &&
                (0, i.jsx)(td.Y, {
                    targetElementRef: s,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(tm.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                (0, tv.Z_)(), t();
                            },
                            "aria-label": er.intl.string(er.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(tx.rX, { children: o }), (0, i.jsx)(tx.rX, { children: c })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)(m.m, {
                            text: er.intl.string(er.t["UKOtz+"]),
                            children: (0, i.jsx)("div", {
                                ...e,
                                ref: s,
                                children: (0, i.jsx)(tg.K, {
                                    icon: tp.j,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": er.intl.string(er.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, i.jsx)(tg.K, {
                icon: tj.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: E,
                "aria-label": er.intl.string(er.t.cpT0Cq),
            }),
        ],
    });
}
var tW = l(8208);
function tY(e) {
    let { game: t, show: l, trackAction: n } = e,
        a = t.name,
        s = t.getIconURL(80);
    return (0, i.jsxs)("div", {
        className: tW.y5,
        children: [
            (0, i.jsx)("div", { className: r()(tW.nI, l && tW.hD) }),
            (0, i.jsxs)("div", {
                className: r()(tW.A1, l && tW.g8),
                children: [
                    null != s && (0, i.jsx)("img", { src: s, alt: "", className: tW.V$, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: tW.hm,
                        children: [
                            (0, i.jsx)(K.D, { variant: "heading-md/semibold", lineClamp: 1, children: a }),
                            null != t.l30Rank && (0, i.jsx)(tH, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(tV, { game: t, className: tW.HK, trackAction: n }),
        ],
    });
}
function tU(e) {
    let { show: t } = e;
    return (0, i.jsx)("div", { className: r()(tW.nI, tW.Jn, t && tW.hD) });
}
let tF = a.forwardRef(function (e, t) {
    let { game: l } = e,
        [n] = a.useState(() => Math.random()),
        s = a.useMemo(() => {
            if (null != l.bannerHash)
                return ts.Ay.getGameAssetURL({ id: l.id, hash: l.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            if (null != l.screenshotUrls && l.screenshotUrls.length > 0) {
                let e = Math.floor(n * l.screenshotUrls.length);
                return l.screenshotUrls[e];
            }
            return "";
        }, [l.id, l.bannerHash, l.screenshotUrls, n]);
    return (0, eD.uJ)(s)
        ? null
        : (0, i.jsxs)("div", {
              ref: t,
              children: [
                  (0, i.jsx)("div", { className: tW.y1, style: { backgroundImage: `url("${s}")` } }),
                  (0, i.jsx)("div", { className: tW.N4 }),
              ],
          });
});
function tB(e) {
    let { game: t } = e,
        l = (t.genres ?? []).map(ew.du).join(", ");
    return (0, eD.uJ)(l) ? null : (0, i.jsx)(X.E, { variant: "text-md/normal", color: "text-muted", children: l });
}
let tH = (e) => {
    let { rank: t } = e;
    return (0, i.jsxs)("div", {
        className: tW.Qc,
        children: [
            (0, i.jsx)(to.O, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, i.jsx)(X.E, {
                variant: "text-xs/bold",
                color: "none",
                children: er.intl.formatToPlainString(er.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
};
function tz(e) {
    let { game: t, isTwoColumn: l } = e;
    return (0, i.jsx)("div", {
        className: l ? tW.n8 : tW.FS,
        children: (0, i.jsx)(tu.A, { game: t, className: tW.xe, size: tu.w.LARGE }),
    });
}
let tX = function (e) {
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
        className: r()(tW.ap, n && tW.Gh),
        children: [
            s &&
                null != t &&
                (0, i.jsx)("div", {
                    className: tW.Tf,
                    children: (0, i.jsx)(tu.A, { game: t, className: tW.w$, size: tu.w.LARGE }),
                }),
            (0, i.jsxs)("div", {
                className: tW.lu,
                children: [
                    null != t.l30Rank && (0, i.jsx)(tH, { rank: t.l30Rank }),
                    (0, i.jsx)(K.D, { ref: o, variant: "heading-xxl/semibold", children: u }),
                    (0, i.jsx)(tB, { game: t }),
                ],
            }),
        ],
    });
};
var tK = l(141628),
    tJ = l(289363),
    t$ = l(448682);
function tq(e) {
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
    let g = u?.guild != null ? ts.Ay.getGuildSplashURL({ id: u.guild.id, splash: u.guild.splash }) : null;
    return (0, i.jsxs)("div", {
        className: t$.uW,
        children: [
            (0, i.jsx)(K.D, {
                className: t$.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: er.intl.string(er.t["VDAhr+"]),
            }),
            (0, i.jsxs)("div", {
                className: t$.kL,
                children: [
                    null != g
                        ? (0, i.jsx)("img", { className: t$.ll, src: g, alt: "", draggable: !1 })
                        : (0, i.jsx)("div", { className: t$.sB, children: (0, i.jsx)(tJ.default, { application: o }) }),
                    (0, i.jsxs)("div", {
                        className: t$.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: t$.FS,
                                children: [
                                    (0, i.jsx)(K.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: er.intl.formatToPlainString(er.t.hUbQT2, { gameName: o.name }),
                                    }),
                                    (0, i.jsx)(X.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: er.intl.string(er.t["JKqu+4"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(h.$, {
                                variant: "secondary",
                                icon: tK.A,
                                text: er.intl.string(er.t.jynBQ5),
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
var tZ = l(80687),
    tQ = l(775602),
    t0 = l(248643),
    t1 = l(256905),
    t8 = l(34337),
    t4 = l(90721),
    t3 = l(616337);
let t2 = a.memo(function (e) {
        let { item: t, index: l, isSelected: n, isPlaying: s, onSelect: c, gameName: o } = e,
            u = a.useCallback(() => c(l), [c, l]);
        return (0, i.jsx)(z.D, {
            className: r()(t3.JS, n && t3.Y4),
            onClick: u,
            children: (0, i.jsxs)("div", {
                className: t3.ub,
                children: [
                    (0, i.jsx)("img", {
                        src: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                        className: t3.xn,
                        alt: er.intl.formatToPlainString(er.t.COYYrn, { game: o }),
                        draggable: !1,
                    }),
                    "VIDEO" === t.type &&
                        (0, i.jsx)("div", {
                            className: t3.UZ,
                            children: (0, i.jsx)(tZ.D, { playing: n && s, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    t5 = a.memo(function (e) {
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
            (0, t4.A)({ videoRef: n, canvasRef: u, enabled: !l }),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    !l && (0, i.jsx)("canvas", { ref: u, className: t3.HW, "aria-hidden": "true" }),
                    (0, i.jsx)("div", {
                        className: t3.tN,
                        children: (0, i.jsx)(t0.A, {
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
                            renderLinkComponent: t8.bU,
                            onPlay: r,
                            onPause: c,
                            onFullscreenChange: o,
                            mediaPlayerClassName: t3.T9,
                            videoRef: n,
                            mediaPlayerRef: s,
                        }),
                    }),
                ],
            })
        );
    });
function t6(e) {
    let { game: t, trackAction: l } = e,
        [n, s] = a.useState(0),
        [r, c] = a.useState(null),
        [o, u] = a.useState(t.screenshotUrls),
        m = a.useRef(null),
        x = a.useRef(null),
        h = (0, d.bG)([tQ.A], () => tQ.A.useReducedMotion);
    o !== t.screenshotUrls && (u(t.screenshotUrls), s(0));
    let g = a.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, eh.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, eh.YE)(e.application_id, e.id, e.width, "webp"),
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
        I = a.useRef(null),
        N = a.useCallback(() => {
            l(j ? O.Ws.ClickTrailer : O.Ws.ClickImage);
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
            (0, t1.R)({
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
        }, [l, g, f, j]),
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
              className: t3.kL,
              children: [
                  j
                      ? (0, i.jsx)("div", {
                            className: t3.ND,
                            children: (0, i.jsx)(
                                t5,
                                {
                                    item: p,
                                    reducedMotion: h,
                                    videoRef: m,
                                    mediaPlayerRef: I,
                                    onPlay: b,
                                    onPause: S,
                                    onFullscreenChange: R,
                                },
                                `${f}-${p.url}`,
                            ),
                        })
                      : (0, i.jsxs)("div", {
                            className: t3.wp,
                            children: [
                                null != r &&
                                    !h &&
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: t3.Jy,
                                            onAnimationEnd: C,
                                            children: (0, i.jsx)("img", { src: r, className: t3.Db, alt: "" }),
                                        },
                                        r,
                                    ),
                                (0, i.jsx)("div", { className: t3.QN }),
                                (0, i.jsx)(z.D, {
                                    className: t3.gv,
                                    onClick: N,
                                    children: (0, i.jsx)(
                                        "img",
                                        {
                                            src: p.url,
                                            className: t3.c8,
                                            alt: er.intl.formatToPlainString(er.t.COYYrn, { game: t.name }),
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
var t9 = l(49381),
    t7 = l(661531),
    le = l(223273);
function lt(e, t, l) {
    if (null == e || null == t || t < 10) return le.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !l
            ? le.vI.POSITIVE
            : t < (l ? 100 : 500) || e < 95
              ? le.vI.VERY_POSITIVE
              : le.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return le.vI.MOSTLY_POSITIVE;
    if (e >= 40) return le.vI.MIXED;
    if (e >= 20) return le.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !l) return le.vI.NEGATIVE;
    else if (t < (l ? 100 : 500)) return le.vI.VERY_NEGATIVE;
    return le.vI.OVERWHELMINGLY_NEGATIVE;
}
function ll(e) {
    switch (e) {
        case le.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case le.vI.OVERWHELMINGLY_POSITIVE:
        case le.vI.VERY_POSITIVE:
        case le.vI.POSITIVE:
        case le.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case le.vI.MIXED:
            return "steam-review-text-mixed";
        case le.vI.MOSTLY_NEGATIVE:
        case le.vI.NEGATIVE:
        case le.vI.VERY_NEGATIVE:
        case le.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var ln =
        (((n = {})[(n.MIGHTY = 1)] = "MIGHTY"),
        (n[(n.STRONG = 2)] = "STRONG"),
        (n[(n.FAIR = 3)] = "FAIR"),
        (n[(n.WEAK = 4)] = "WEAK"),
        n),
    li = l(778591);
function la(e) {
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
var ls = l(99392);
function lr(e) {
    let { url: t, trackAction: l, title: n, rating: s, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, e0.A)(),
        u = lt(s, r, "recent" === c),
        d = ll(u),
        x = a.useCallback(() => {
            l(O.Ws.SteamReviews), o(t);
        }, [o, l, t]);
    return (0, i.jsx)(z.D, {
        onClick: x,
        className: ls.nf,
        role: "link",
        "aria-label": er.intl.string(er.t.YNC5Di),
        children: (0, i.jsxs)("div", {
            className: ls.U6,
            children: [
                (0, i.jsxs)("div", {
                    className: ls.tN,
                    children: [
                        (0, i.jsx)(t9.N, { size: "sm", color: t7.A.colors.ICON_STRONG.css }),
                        (0, i.jsx)(K.D, { variant: "heading-sm/medium", color: "text-strong", children: n }),
                    ],
                }),
                (0, i.jsx)(
                    m.m,
                    {
                        text:
                            u === le.vI.NO_USER_REVIEWS
                                ? er.intl.string(er.t.CLMt8J)
                                : er.intl
                                      .format(
                                          "recent" === c
                                              ? er.t.TzvC0k
                                              : "localized" === c
                                                ? er.t.EOfrwm
                                                : er.t["lzANJ/"],
                                          { rating: s, rating_count: r?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, i.jsxs)("div", {
                            className: ls.Z0,
                            children: [
                                (0, i.jsx)(X.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    children: (function (e) {
                                        switch (e) {
                                            case le.vI.NO_USER_REVIEWS:
                                                return er.intl.string(er.t.CLMt8J);
                                            case le.vI.OVERWHELMINGLY_POSITIVE:
                                                return er.intl.string(er.t["75sx1S"]);
                                            case le.vI.VERY_POSITIVE:
                                                return er.intl.string(er.t["EkOVg+"]);
                                            case le.vI.POSITIVE:
                                                return er.intl.string(er.t.ZUkFtr);
                                            case le.vI.MOSTLY_POSITIVE:
                                                return er.intl.string(er.t.M7Z09a);
                                            case le.vI.MIXED:
                                                return er.intl.string(er.t.c8yuHR);
                                            case le.vI.MOSTLY_NEGATIVE:
                                                return er.intl.string(er.t.H0MSjG);
                                            case le.vI.NEGATIVE:
                                                return er.intl.string(er.t.vpLrgz);
                                            case le.vI.VERY_NEGATIVE:
                                                return er.intl.string(er.t["5spYuX"]);
                                            case le.vI.OVERWHELMINGLY_NEGATIVE:
                                                return er.intl.string(er.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != r &&
                                    u !== le.vI.NO_USER_REVIEWS &&
                                    (0, i.jsx)(X.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: er.intl
                                            .format(er.t.sgIoin, { rating_count: r.toLocaleString() })
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
function lc(e) {
    let { game: t, url: l, trackAction: n } = e,
        { reviews: s } = t,
        r = s?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        u = r.topCriticRatingCount ?? -1,
        d = (o <= 0 || u <= 0) && null == c,
        m = (0, e0.A)(),
        x = a.useCallback(() => {
            n(O.Ws.OpenCriticReviews), m(l);
        }, [m, n, l]);
    return (0, i.jsx)(z.D, {
        onClick: x,
        className: ls.nf,
        role: "link",
        "aria-label": er.intl.string(er.t.aLNBAw),
        children: (0, i.jsxs)("div", {
            className: ls.Ur,
            children: [
                (0, i.jsx)(K.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: er.intl.string(er.t["UxvER+"]),
                }),
                (0, i.jsxs)("div", {
                    className: ls.WA,
                    children: [
                        null != c ? (0, i.jsx)(lo, { tier: c }) : null,
                        null != c && o > 0 && u > 0 ? (0, i.jsx)(lu, { rating: o, tier: c }) : null,
                        d
                            ? (0, i.jsx)(X.E, {
                                  variant: "text-xs/medium",
                                  color: ll(le.vI.NO_USER_REVIEWS),
                                  children: er.intl.string(er.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function lo(e) {
    let { tier: t } = e,
        l = (function (e) {
            switch (e) {
                case ln.MIGHTY:
                    return er.intl.string(er.t.aZej2g);
                case ln.STRONG:
                    return er.intl.string(er.t.MLxnSg);
                case ln.FAIR:
                    return er.intl.string(er.t["3f19KA"]);
                case ln.WEAK:
                    return er.intl.string(er.t.jtVgSh);
            }
        })(t),
        n = (function (e) {
            switch (e) {
                case ln.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case ln.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case ln.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case ln.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, i.jsx)(
        m.m,
        {
            text: l,
            children: (0, i.jsx)("div", {
                className: ls.TE,
                children: (0, i.jsx)("img", { src: n, alt: l, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function lu(e) {
    let { rating: t, tier: l } = e,
        { foregroundColor: n, backgroundColor: a } = (function (e) {
            let t = "";
            switch (e) {
                case ln.MIGHTY:
                    t = "#fc430a";
                    break;
                case ln.STRONG:
                    t = "#9e00b4";
                    break;
                case ln.FAIR:
                    t = "#4aa1ce";
                    break;
                case ln.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(l);
    return (0, i.jsx)(
        m.m,
        {
            text: er.intl.string(er.t.Ub4YR1),
            children: (0, i.jsxs)("div", {
                className: ls.TE,
                style: { backgroundColor: a },
                children: [
                    (0, i.jsx)(la, { rating: t, strokeColor: n }),
                    (0, i.jsx)(X.E, {
                        variant: "text-xs/bold",
                        color: "always-white",
                        className: ls.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let ld = function (e) {
    let { game: t, trackAction: l } = e,
        n = (0, li.I)(t.id),
        a = t.opencriticUrl,
        s = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED && null != n,
        r = t.reviews?.steam,
        c = lt(r?.recentRating, r?.recentRatingCount, !0),
        o = s && c !== le.vI.NO_USER_REVIEWS,
        d =
            null != r &&
            null != r.localizedRating &&
            null != r.localizedRatingCount &&
            null != r.ratingCount &&
            r.localizedRatingCount >= 200 &&
            r.ratingCount >= 2e3,
        m = d ? r?.localizedRating : r?.rating,
        x = d ? r?.localizedRatingCount : r?.ratingCount,
        h = d ? er.t["aWb+V4"] : er.t["8e4LiB"],
        g = t.reviews?.opencritic != null && null != a;
    return s || o || g
        ? (0, i.jsxs)("div", {
              className: ls.uW,
              children: [
                  (0, i.jsx)("div", {
                      className: ls.Gf,
                      children: (0, i.jsx)(K.D, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: er.intl.string(er.t.GaAQXP),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: ls.kL,
                      children: [
                          o && null != n
                              ? (0, i.jsx)("div", {
                                    className: ls.WH,
                                    children: (0, i.jsx)(lr, {
                                        url: n,
                                        trackAction: l,
                                        title: er.intl.string(er.t.MQGNsN),
                                        rating: r?.recentRating,
                                        ratingCount: r?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          s && null != n
                              ? (0, i.jsx)("div", {
                                    className: ls.WH,
                                    children: (0, i.jsx)(lr, {
                                        url: n,
                                        trackAction: l,
                                        title: er.intl.string(h),
                                        rating: m,
                                        ratingCount: x,
                                        tooltipVariant: d ? "localized" : "all",
                                    }),
                                })
                              : null,
                          g && null != a
                              ? (0, i.jsx)("div", {
                                    className: ls.WH,
                                    children: (0, i.jsx)(lc, { game: t, url: a, trackAction: l }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var lm = l(859040),
    lx = l(674658),
    lh = l(828614),
    lg = l(561769),
    lf = l(758836),
    lp = l(804163);
let lj = a.createContext({ trackAction: () => {} }),
    lv = (e) => {
        let { skuId: t, aspectRatio: l } = e,
            { product: n } = (0, lx.q)(t, !0),
            s = a.useContext(lg.v3),
            { closeModal: r } = F(),
            { trackAction: c } = a.useContext(lj),
            o = a.useCallback(() => {
                c(O.Ws.DiscordCollectiblesShopItem),
                    r(),
                    (0, lm.Cz)({
                        analyticsLocations: [E.A.GAME_PROFILE],
                        analyticsSource: E.A.GAME_PROFILE,
                        initialProductSkuId: t,
                        tab: lf.G2.CATALOG,
                    });
            }, [c, r, t]);
        if (null == n) return null;
        let { flattenProductVariants: u, ...d } = s;
        return (0, i.jsx)(lg.v3.Provider, {
            value: { flattenProductVariants: u ?? !0, ...d },
            children: (0, i.jsx)(lh.A, {
                skuId: t,
                aspectRatio: l,
                cardClassName: lp.N,
                onClickCard: o,
                hideWishlistButton: !0,
                hidePrice: !0,
                hidePrimaryCTA: !0,
                hideSecondaryCTA: !0,
            }),
        });
    };
function lE(e) {
    let { game: t, trackAction: l } = e,
        { closeModal: n } = F(),
        s = (function (e) {
            let { hasFetched: t, skuIds: l } = (0, d.cf)([ej.A], () => ({
                hasFetched: null != e && ej.A.hasShopCollectionBeenFetched(e),
                skuIds: null != e ? ej.A.getShopCollectionSkuIds(e) : void 0,
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || t || ej.A.isShopCollectionFetching(e) || ef(e);
                }, [e, t]),
                l ?? []
            );
        })(t.shopCollectionIds?.[0]),
        r = a.useCallback(() => {
            l(O.Ws.DiscordCollectiblesShop),
                n(),
                (0, lm.Cz)({
                    analyticsLocations: [E.A.GAME_PROFILE],
                    analyticsSource: E.A.GAME_PROFILE,
                    tab: lf.G2.CATALOG,
                });
        }, [l, n]),
        c = a.useMemo(() => ({ trackAction: l }), [l]);
    return 0 === s.length
        ? null
        : (0, i.jsx)(lj.Provider, {
              value: c,
              children: (0, i.jsx)(eT, {
                  title: er.intl.string(er.t["5DYPT8"]),
                  onClickViewAll: r,
                  children: (0, i.jsx)($.A, { gap: "md", children: s.map((e) => (0, i.jsx)(lv, { skuId: e }, e)) }),
              }),
          });
}
var lA = l(871123),
    lI = l(317560),
    lN = l(328100),
    lb = l(627771);
function lS(e) {
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
                          className: lb.B,
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
function lC(e) {
    let { trackAction: t } = e,
        { socialLayerStorefrontRecommendationsData: l, closeModal: n } = F(),
        { analyticsLocations: s } = (0, A.Ay)([E.A.GAME_PROFILE]),
        r = a.useCallback(() => {
            l?.application != null && (t(O.Ws.GameShop), n(), (0, tA.default)({ applicationId: l.application.id }));
        }, [l, t, n]),
        c = a.useCallback(
            (e, i) => {
                let a = l?.guildId;
                null != a &&
                    (t(O.Ws.GameShopItem),
                    (0, lI.R)({
                        skuId: e,
                        applicationId: i,
                        isStorefront: !1,
                        analyticsLocations: s,
                        onClose: () => {
                            let { pathname: e, search: t } = location;
                            (0, lA.rG)(e, t, i, a) && n();
                        },
                    }));
            },
            [t, n, s, l],
        );
    if (null == l) return null;
    let { skuIds: o } = l;
    return (0, i.jsx)(eT, {
        title: er.intl.string(er.t.WDdlUb),
        onClickViewAll: r,
        children: (0, i.jsx)(lS, { skuIds: o, analyticsLocations: s, onCardClick: c }),
    });
}
l(667532);
var lR = l(853022);
let lT = new Set(["1402418703554842694", "356877880938070016"]),
    lL = [M.V.EPICGAMES, M.V.STEAM, M.V.ROBLOX, M.V.BATTLENET, M.V.RIOT, M.V.MINECRAFT];
var lk = l(349361),
    ly = l(924895),
    lO = l(422688),
    l_ = l(505200),
    lM = l(695250);
let lG = function (e) {
    switch (e.category) {
        case M.V.STEAM:
            return {
                icon: t9.N,
                text: er.intl.string(er.t.FsANs4),
                ariaLabel: er.intl.string(er.t["P+ePTG"]),
                action: O.Ws.SteamStoreLink,
                url: e.url,
            };
        case M.V.EPICGAMES:
            return {
                icon: lk.r,
                text: er.intl.string(er.t.ZbBMHa),
                ariaLabel: er.intl.string(er.t.BwX0UW),
                action: O.Ws.EpicStoreLink,
                url: e.url,
            };
        case M.V.ROBLOX:
            return {
                icon: ly.H,
                text: er.intl.string(er.t["pJ+P+h"]),
                ariaLabel: er.intl.string(er.t.tYxpdf),
                action: O.Ws.RobloxStoreLink,
                url: e.url,
            };
        case M.V.BATTLENET:
            return {
                icon: lO.a,
                text: er.intl.string(er.t["A7grp+"]),
                ariaLabel: er.intl.string(er.t.x9at20),
                action: O.Ws.BattlenetStoreLink,
                url: e.url,
            };
        case M.V.RIOT:
            return {
                icon: l_.A,
                text: er.intl.string(er.t.h6MapL),
                ariaLabel: er.intl.string(er.t["528nvc"]),
                action: O.Ws.RiotStoreLink,
                url: e.url,
            };
        case M.V.MINECRAFT:
            return {
                icon: lM.m,
                text: er.intl.string(er.t["HZbmO+"]),
                ariaLabel: er.intl.string(er.t.WWTqYn),
                action: O.Ws.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: e2.Y,
                text: er.intl.string(er.t["QpN/Iz"]),
                ariaLabel: er.intl.string(er.t["8JZmmF"]),
                action: O.Ws.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
var lP = l(192308);
function lw(e) {
    return (0, i.jsx)(h.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var lD = l(352639);
function lV(e) {
    let t,
        l,
        n,
        i,
        s,
        r =
            ((t = (0, li.I)(e?.id)),
            (l = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eg.d3x.XBOX_GAME_PASS && !(0, eD.uJ)(e.id));
                return t?.id == null ? null : (0, lR.jA)(t.id);
            })(e)),
            (n = e?.id),
            (i = e?.websites),
            (s = e?.steamReleaseStatus),
            a.useMemo(() => {
                if ((null == i && null == l) || null == n) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== M.V.EPICGAMES || !!lT.has(n)) &&
                            (e.category !== M.V.STEAM || s !== u.Y.RETIRED_ABANDONED) &&
                            lL.includes(e.category),
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
function lW(e) {
    let { data: t, trackAction: l } = e,
        n = (0, e0.A)();
    return (0, i.jsx)(lw, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            l(t.action), n(t.url);
        },
    });
}
let lY = function (e) {
    let { game: t, trackAction: n } = e,
        { showsStoreLinks: s, storeWebsites: r } = lV(t),
        c = a.useMemo(() => r.map(lG).filter((e) => null != e), [r]);
    if (!s) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, i.jsx)(lW, { data: e, trackAction: n });
    }
    if (2 === c.length)
        return (0, i.jsxs)("div", {
            className: lD.G,
            children: [(0, i.jsx)(lW, { data: c[0], trackAction: n }), (0, i.jsx)(lW, { data: c[1], trackAction: n })],
        });
    let o = (0, i.jsx)(lw, {
        text: er.intl.string(er.t["/hMurx"]),
        "aria-label": er.intl.string(er.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: n, trackAction: a } = e;
                (0, lP.openModalLazy)(async () => {
                    let { default: e } = await l.e("76758").then(l.bind(l, 459477));
                    return (l) => (0, i.jsx)(e, { game: t, websiteButtons: n, trackAction: a, ...l });
                });
            })({ game: t, websiteButtons: c, trackAction: n }),
    });
    return r.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, i.jsxs)("div", { className: lD.G, children: [(0, i.jsx)(lW, { data: c[0], trackAction: n }), o] })
        : o;
};
var lU = l(123292);
function lF(e) {
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
    let m = s ? er.intl.string(er.t["6MwJo/"]) : er.intl.string(er.t.lBeKY2);
    return (0, i.jsxs)("div", {
        className: r()(e9.fi, e9.mX),
        children: [
            (0, i.jsx)(X.E, { ref: n, lineClamp: s ? void 0 : d, variant: "text-md/medium", children: t.description }),
            c && (0, i.jsx)(lU.Q, { onClick: o, text: m }),
        ],
    });
}
function lB(e) {
    let { game: t, trackAction: l } = e;
    return (0, i.jsxs)("div", {
        className: e9.oC,
        children: [
            (0, i.jsxs)("div", {
                className: e9.lM,
                children: [(0, i.jsx)(t6, { game: t, trackAction: l }), (0, i.jsx)(lF, { game: t, trackAction: l })],
            }),
            (0, i.jsx)(eP, { gameId: t.id, trackAction: l }),
            (0, i.jsx)(lC, { trackAction: l }),
            (0, i.jsx)(lE, { game: t, trackAction: l }),
        ],
    });
}
function lH(e) {
    let { game: t, trackAction: l, analyticsLocations: n } = e,
        a = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: e9.V0,
        children: [
            (0, i.jsx)(t6, { game: t, trackAction: l }),
            (0, i.jsxs)("div", {
                className: e9.gr,
                children: [
                    (0, i.jsx)(tz, { game: t, isTwoColumn: !1 }),
                    (0, i.jsxs)("div", {
                        className: e9.E1,
                        children: [
                            (0, i.jsx)(lY, { game: t, trackAction: l }),
                            (0, i.jsx)(lF, { game: t, trackAction: l }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(tq, { analyticsLocations: n, trackAction: l }),
            (0, i.jsx)(tc, { trackAction: l }),
            (0, i.jsx)(eP, { gameId: t.id, trackAction: l }),
            (0, i.jsx)(lC, { trackAction: l }),
            (0, i.jsx)(lE, { game: t, trackAction: l }),
            a && (0, i.jsx)(ld, { game: t, trackAction: l }),
            (0, i.jsx)(ti, { game: t, trackAction: l }),
        ],
    });
}
function lz(e) {
    let { onCloudPlayClick: t, analyticsLocations: l, trackAction: n } = e,
        { closeModal: s } = F();
    (0, I.A)({
        name: c.ImpressionNames.CLOUD_PLAY_CTA,
        type: c.ImpressionTypes.VIEW,
        properties: { location_stack: l },
    });
    let r = a.useCallback(() => {
        n(O.Ws.CloudPlay), s(), t();
    }, [s, t, n]);
    return (0, i.jsx)(m.m, {
        text: er.intl.string(er.t.JVwWva),
        position: "top",
        children: (0, i.jsx)(h.$, {
            icon: g.h,
            text: er.intl.string(er.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: r,
            fullWidth: !0,
        }),
    });
}
function lX(e) {
    let { game: t, trackAction: l, analyticsLocations: n } = e,
        { isCloudPlayButtonShown: a, onCloudPlayClick: s } = (function (e) {
            let { gameId: t, analyticsLocations: l } = e,
                n = (0, b.h)(t),
                i = (0, v.A)({ application: n, analyticsLocations: l }),
                [a] = (0, L.L)(t);
            return { onCloudPlayClick: i, isCloudPlayButtonShown: !a && null != i };
        })({ gameId: t.id, analyticsLocations: n }),
        { showsStoreLinks: c } = lV(t),
        o = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: r()(e9.Pn, e9.fi, e9.iH, c ? e9.sV : e9.gF),
        children: [
            a && null != s
                ? (0, i.jsx)("div", {
                      className: e9.NC,
                      children: (0, i.jsx)(lz, { onCloudPlayClick: s, analyticsLocations: n, trackAction: l }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: e9.V0,
                children: [
                    (0, i.jsx)(lY, { game: t, trackAction: l }),
                    (0, i.jsx)(tq, { analyticsLocations: n, trackAction: l }),
                    (0, i.jsx)(tc, { trackAction: l }),
                    o && (0, i.jsx)(ld, { game: t, trackAction: l }),
                    (0, i.jsx)(ti, { game: t, trackAction: l }),
                ],
            }),
        ],
    });
}
let lK = function (e) {
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
                          className: r()(M, e9.kL),
                          ref: ei,
                          children: [
                              (0, i.jsx)(tF, { game: H, ref: ex }),
                              (0, i.jsx)(tY, { game: H, show: eo, trackAction: el }),
                              (0, i.jsx)(tU, { show: eo }),
                              (0, i.jsxs)(f.Ch, {
                                  ref: es,
                                  onScroll: eh,
                                  children: [
                                      (0, i.jsx)(tX, {
                                          game: H,
                                          onSetCompactBarScrollThreshold: em,
                                          showCompactBar: eo,
                                      }),
                                      (0, i.jsx)(p.F, {
                                          children: g
                                              ? (0, i.jsxs)("div", {
                                                    className: e9.jC,
                                                    children: [
                                                        (0, i.jsx)(lB, { game: H, trackAction: el }),
                                                        (0, i.jsx)(lX, {
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
                                                    className: e9.b9,
                                                    children: (0, i.jsx)(lH, {
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
