t.r(l), t.d(l, { default: () => en });
var s = t(627968),
    n = t(64700),
    a = t(503698),
    i = t.n(a),
    r = t(17928),
    c = t(144165),
    d = t(778712),
    o = t(890856),
    u = t(97808),
    h = t(834730),
    m = t(460905),
    x = t(581925),
    g = t(689175),
    j = t(289873),
    A = t(47167),
    f = t(713654),
    p = t(564771),
    v = t(607470),
    I = t(640708),
    N = t(742589),
    S = t(814890),
    _ = t(46054),
    E = t(731068),
    y = t(708676),
    L = t(704413),
    C = t(537039),
    F = t(976860),
    M = t(885386),
    G = t(734057),
    b = t(71393),
    w = t(486020),
    D = t(58703),
    U = t(713132),
    O = t(59318),
    k = t(636537),
    T = t(228366),
    z = t(652215);
async function H(e, l) {
    T.h.dispatch({ type: "LOAD_OFFICIAL_MESSAGES", guildId: e, before: l });
    try {
        let { body: t } = await k.Bo.get({
            url: z.Rsh.GUILD_OFFICIAL_MESSAGES(e),
            query: null != l ? { before: l } : void 0,
            rejectWithError: !1,
        });
        T.h.dispatch({
            type: "LOAD_OFFICIAL_MESSAGES_SUCCESS",
            guildId: e,
            messages: t.messages,
            hasMore: t.has_more,
            before: l,
        });
    } catch (t) {
        throw (T.h.dispatch({ type: "LOAD_OFFICIAL_MESSAGES_FAILURE", guildId: e, before: l }), t);
    }
}
let R = (0, r.UT)(U.A, {
    getQueryId: (e) => z.fic.GUILD_OFFICIAL_MESSAGES(e),
    get: (e) => (null != e && U.A.isLoaded(e) ? U.A.getMessages(e) : null),
    load: (e, l) => (null != e ? H(e, l) : Promise.resolve()),
    getIsLoading: (e) => null != e && U.A.isLoading(e),
});
var V = t(763754),
    B = t(81437),
    P = t(812299),
    X = t(537174),
    Z = t(447215),
    J = t(381941),
    q = t(746080),
    W = t(375708),
    Q = t(490674),
    Y = t(992595);
let K = [],
    $ = new Intl.NumberFormat();
function ee(e) {
    let { channelId: l, preview: t } = e;
    return (0, s.jsx)("div", {
        className: i()(Q.h_, Y.PT),
        children: _.A.parse(t, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: l }),
    });
}
function el(e) {
    let { mediaItem: l } = e;
    if (M.kt.useSetting() && "VIDEO" === l.type && null != l.proxyUrl)
        return (0, s.jsx)(v.A, {
            className: Q.af,
            src: l.proxyUrl,
            poster: (0, E.fj)(l),
            alt: l.alt,
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
        });
    let t = (0, E.fj)(l);
    return null == t
        ? null
        : (0, s.jsx)(c._, {
              src: t,
              width: 96,
              height: 96,
              alt: l.alt ?? "",
              zoomable: !1,
              className: Q.af,
              imageClassName: Q.af,
          });
}
function et(e) {
    let { message: l } = e,
        t = (0, L.A)(l);
    return null == t ? null : (0, s.jsx)(C.A, { message: l, poll: t, className: Q.Vq });
}
function es(e) {
    let l,
        t,
        a,
        { message: c, guildId: x, officialMessageColor: g } = e,
        j = (0, r.bG)([G.A], () => G.A.getChannel(c.channel_id)),
        v = (0, A.Ay)(j),
        N = (0, X.A)(g),
        _ = (0, V.Ay)(c),
        L = (0, Z.P)({ user: c.author, channelId: c.channel_id, guildId: x, messageId: c.id, stopPropagation: !0 }),
        C = n.useRef(null),
        [M, b] = n.useState(!1),
        U = c.poll;
    if (
        (n.useLayoutEffect(() => {
            if (null != U) return;
            let e = C.current;
            null != e && b(e.scrollHeight > e.clientHeight);
        }, [c, U]),
        null == j)
    )
        return null;
    let k = (0, P.y)({ message: c, channel: j, user: c.author, compact: !1, isRepliedMessage: !1 }),
        T = c.getContentMessage(),
        H = T.attachments.find((e) => (0, O.tT)(e.content_type) || (0, O.XB)(e.content_type)),
        R = T.attachments.find((e) => !(0, O.tT)(e.content_type) && !(0, O.XB)(e.content_type)),
        J =
            (null != H ? (0, E.Rr)(H, c) : null) ??
            (function (e, l) {
                for (let t = 0; t < l.length; t++) {
                    let s = l[t],
                        n = { message: e, identifier: { type: "embed", embedIndex: t } };
                    if (null != s.video && (s.type === z.Auw.GIFV || s.type === z.Auw.VIDEO) && null != s.video)
                        return (0, E.oU)(s.video, n, "VIDEO");
                    let a = s.image ?? s.thumbnail;
                    if (null != a) return (0, E.oU)(a, n, "IMAGE");
                }
                return null;
            })(c, T.embeds) ??
            (0, S.We)(T.components),
        q = (0, E.fj)(J),
        Y = T.content.length > 0 ? T.content : ((0, S.kC)(T.components) ?? ""),
        K = (0, D.mk)(c.timestamp, !0),
        es = c.reactions.reduce((e, l) => e + l.count, 0),
        en = c.author.getAvatarURL(x, (0, d.FT)(d._3.SIZE_40)),
        ea = w.Ay.getAvatarDecorationURL({
            avatarDecoration: _.guildMemberAvatarDecoration ?? c.author.avatarDecoration,
        });
    return (0, s.jsxs)(o.s, {
        className: i()(Q.Nr, { [Q.Sg]: null != N }),
        onClick: () => {
            let e = () => (0, F.pX)(z.BVt.CHANNEL(x, c.channel_id, c.id));
            (0, B.A)(c, e) && e();
        },
        style: N,
        "aria-label": W.intl.string(W.t["+TSRGD"]),
        children: [
            (0, s.jsxs)("div", {
                className: Q.zI,
                children: [
                    (0, s.jsxs)("div", {
                        className: Q.MY,
                        children: [
                            (0, s.jsx)(u.eu, { size: d._3.SIZE_40, src: en, avatarDecoration: ea, "aria-hidden": !0 }),
                            (0, s.jsxs)("div", {
                                className: Q.pB,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: Q.jh,
                                        children: [
                                            (0, s.jsxs)("span", {
                                                className: Q.Cm,
                                                children: [
                                                    (0, s.jsx)(h.E, {
                                                        tag: "span",
                                                        variant: "text-md/semibold",
                                                        color: "none",
                                                        className: Q.fh,
                                                        children: L(_)(_.nick, c.id),
                                                    }),
                                                    null != k && (0, s.jsx)("span", { className: Q.Ho, children: k }),
                                                ],
                                            }),
                                            (0, s.jsx)(h.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: K,
                                            }),
                                        ],
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: Q.e5,
                                        children: [
                                            null == (l = (0, f.gU)(j))
                                                ? null
                                                : (0, s.jsx)(l, { size: "xxs", className: Q.Jv }),
                                            (0, s.jsx)(h.E, {
                                                variant: "text-sm/medium",
                                                color: "text-muted",
                                                className: Q.ZM,
                                                children: v ?? j.name,
                                            }),
                                            es > 0 &&
                                                (0, s.jsxs)("div", {
                                                    className: Q.a5,
                                                    children: [
                                                        (0, s.jsx)(I.A, { height: 2, width: 2, "aria-hidden": "true" }),
                                                        (0, s.jsx)(m.n, { size: "xs", color: "currentColor" }),
                                                        (0, s.jsx)(h.E, {
                                                            variant: "text-xs/medium",
                                                            color: "text-muted",
                                                            children: $.format(es),
                                                        }),
                                                    ],
                                                }),
                                            null != U &&
                                                (0, s.jsxs)("div", {
                                                    className: Q.a5,
                                                    children: [
                                                        (0, s.jsx)(I.A, { height: 2, width: 2, "aria-hidden": "true" }),
                                                        (0, s.jsx)(h.E, {
                                                            variant: "text-xs/medium",
                                                            color: "text-muted",
                                                            children:
                                                                ((t = U.results?.is_finalized === !0),
                                                                (a = (0, y.J)(U.expiry)),
                                                                t || null == a ? W.intl.string(W.t["e+J3JZ"]) : a),
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)("div", {
                        ref: C,
                        className: i()(Q.Ux, { [Q.WF]: null != U || M }),
                        children:
                            null != U
                                ? (0, s.jsx)(et, { message: c })
                                : (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          Y.length > 0 && (0, s.jsx)(ee, { channelId: c.channel_id, preview: Y }),
                                          null != R &&
                                              (0, s.jsx)("div", {
                                                  className: Q.Xv,
                                                  inert: !0,
                                                  children: (0, s.jsx)(p.A, {
                                                      url: R.url,
                                                      fileName: R.filename,
                                                      fileSize: R.size,
                                                  }),
                                              }),
                                      ],
                                  }),
                    }),
                ],
            }),
            null == U &&
                null != J &&
                null != q &&
                (0, s.jsx)("div", { className: Q.Fq, children: (0, s.jsx)(el, { mediaItem: J }) }),
        ],
    });
}
function en(e) {
    let { guildId: l } = e,
        { data: t, isLoading: a } = R(l, void 0),
        i = (0, r.bG)([U.A], () => U.A.hasMore(l)),
        c = t ?? K,
        d = (0, r.bG)([b.A], () => b.A.getGuild(l)?.officialMessageColor ?? J.aj),
        o = n.useMemo(() => [...c].sort((e, l) => l.timestamp.getTime() - e.timestamp.getTime()), [c]),
        u = n.useRef(null),
        m = n.useCallback(() => {
            if (!i || a) return;
            let e = u.current?.getScrollerState();
            if (null == e || e.scrollHeight - (e.scrollTop + e.offsetHeight) > e.offsetHeight) return;
            let t = o[o.length - 1];
            null != t && R.refetch(l, t.id);
        }, [l, i, a, o]);
    return (0, s.jsxs)("div", {
        className: Q.tB,
        children: [
            (0, s.jsxs)(N.A, {
                channelId: q.VV.GUILD_OFFICIAL_MESSAGES,
                guildId: l,
                hideSearch: !0,
                children: [
                    (0, s.jsx)(N.A.Icon, { icon: x.L, "aria-hidden": !0 }),
                    (0, s.jsx)(N.A.Title, { children: W.intl.string(W.t.xHEzFh) }),
                ],
            }),
            (0, s.jsx)(g.Ch, {
                ref: u,
                className: Q.XG,
                onScroll: m,
                children:
                    a && 0 === o.length
                        ? (0, s.jsx)("div", { className: Q.Ie, children: (0, s.jsx)(j.y, {}) })
                        : 0 === o.length
                          ? (0, s.jsx)("div", {
                                className: Q.Ie,
                                children: (0, s.jsx)(h.E, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: W.intl.string(W.t["ZTQ/80"]),
                                }),
                            })
                          : (0, s.jsxs)("div", {
                                className: Q.Vg,
                                children: [
                                    o.map((e) =>
                                        (0, s.jsx)(es, { message: e, guildId: l, officialMessageColor: d }, e.id),
                                    ),
                                    a && (0, s.jsx)("div", { className: Q.sw, children: (0, s.jsx)(j.y, {}) }),
                                ],
                            }),
            }),
        ],
    });
}
