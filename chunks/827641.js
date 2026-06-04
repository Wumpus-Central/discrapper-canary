s.r(l), s.d(l, { default: () => J });
var t = s(627968),
    n = s(64700),
    a = s(503698),
    i = s.n(a),
    r = s(17928),
    c = s(834730),
    d = s(939249),
    o = s(97808),
    m = s(778712),
    h = s(460905),
    u = s(581925),
    x = s(689175),
    g = s(289873),
    j = s(47167),
    p = s(713654),
    A = s(564771),
    f = s(640708),
    v = s(742589),
    _ = s(814890),
    I = s(46054),
    N = s(731068),
    S = s(976860),
    E = s(734057),
    C = s(71393),
    L = s(486020),
    y = s(58703),
    M = s(713132),
    F = s(59318),
    w = s(636537),
    G = s(228366),
    b = s(652215);
async function k(e, l) {
    G.h.dispatch({ type: "LOAD_OFFICIAL_MESSAGES", guildId: e, before: l });
    try {
        let { body: s } = await w.Bo.get({
            url: b.Rsh.GUILD_OFFICIAL_MESSAGES(e),
            query: null != l ? { before: l } : void 0,
            rejectWithError: !1,
        });
        G.h.dispatch({
            type: "LOAD_OFFICIAL_MESSAGES_SUCCESS",
            guildId: e,
            messages: s.messages,
            hasMore: s.has_more,
            before: l,
        });
    } catch (s) {
        throw (G.h.dispatch({ type: "LOAD_OFFICIAL_MESSAGES_FAILURE", guildId: e, before: l }), s);
    }
}
let H = (0, r.UT)(M.A, {
    getQueryId: (e) => b.fic.GUILD_OFFICIAL_MESSAGES(e),
    get: (e) => (null != e && M.A.isLoaded(e) ? M.A.getMessages(e) : null),
    load: (e, l) => (null != e ? k(e, l) : Promise.resolve()),
    getIsLoading: (e) => null != e && M.A.isLoading(e),
});
var U = s(763754),
    O = s(81437),
    T = s(812299),
    B = s(537174),
    D = s(381941),
    R = s(746080),
    Z = s(375708),
    z = s(490674),
    X = s(992595);
let V = [],
    q = new Intl.NumberFormat();
function W(e) {
    let { channelId: l, preview: s } = e;
    return (0, t.jsx)("div", {
        className: i()(z.h_, X.PT),
        children: I.A.parse(s, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: l }),
    });
}
function P(e) {
    let { message: l } = e,
        s = l.poll;
    if (null == s) return null;
    let n = s.answers.slice(0, 2),
        a = s.answers.length - n.length;
    return (0, t.jsxs)("div", {
        className: z.vZ,
        children: [
            (0, t.jsx)(c.E, {
                variant: "text-md/normal",
                color: "currentColor",
                className: z.MH,
                children: s.question.text,
            }),
            n.map((e) =>
                (0, t.jsxs)(
                    "div",
                    {
                        className: z.ZW,
                        children: [
                            e.poll_media.emoji?.name != null &&
                                (0, t.jsx)("span", { "aria-hidden": !0, children: e.poll_media.emoji.name }),
                            (0, t.jsx)(c.E, {
                                variant: "text-sm/normal",
                                color: "currentColor",
                                children: e.poll_media.text,
                            }),
                        ],
                    },
                    e.answer_id,
                ),
            ),
            a > 0 &&
                (0, t.jsx)(c.E, {
                    variant: "text-xs/normal",
                    color: "currentColor",
                    children: Z.intl.format(Z.t.ZgluBZ, { remaining: a }),
                }),
        ],
    });
}
function Q(e) {
    let l,
        { message: s, guildId: a, officialMessageColor: u } = e,
        x = (0, r.bG)([E.A], () => E.A.getChannel(s.channel_id)),
        g = (0, j.Ay)(x),
        v = (0, B.A)(u),
        I = (0, U.Ay)(s),
        C = n.useRef(null),
        [M, w] = n.useState(!1);
    if (
        (n.useLayoutEffect(() => {
            let e = C.current;
            null != e && w(e.scrollHeight > e.clientHeight);
        }, [s]),
        null == x)
    )
        return null;
    let G = (0, T.y)({ message: s, channel: x, user: s.author, compact: !1, isRepliedMessage: !1 }),
        k = s.getContentMessage(),
        H = k.attachments.find((e) => (0, F.tT)(e.content_type) || (0, F.XB)(e.content_type)),
        D = k.attachments.find((e) => !(0, F.tT)(e.content_type) && !(0, F.XB)(e.content_type)),
        R = k.embeds.findIndex((e) => null != e.image || null != e.thumbnail),
        Z = -1 !== R ? k.embeds[R] : null,
        X = Z?.image ?? Z?.thumbnail,
        V =
            (null != H ? (0, N.Rr)(H, s) : null) ??
            (null != X ? (0, N.oU)(X, { message: s, identifier: { type: "embed", embedIndex: R } }, "IMAGE") : null) ??
            (0, _.We)(k.components),
        Q = (0, N.fj)(V),
        J = k.content.length > 0 ? k.content : ((0, _.kC)(k.components) ?? ""),
        Y = (0, y.mk)(s.timestamp, !0),
        K = s.reactions.reduce((e, l) => e + l.count, 0),
        $ = L.Ay.getUserAvatarURL({
            avatar: I.guildMemberAvatar ?? s.author.avatar,
            id: s.author.id,
            discriminator: s.author.discriminator,
        });
    return (0, t.jsxs)(d.D, {
        className: i()(z.Nr, { [z.Sg]: null != v }),
        onClick: () => {
            let e = () => (0, S.pX)(b.BVt.CHANNEL(a, s.channel_id, s.id));
            (0, O.A)(s, e) && e();
        },
        style: v,
        children: [
            (0, t.jsxs)("div", {
                ref: C,
                className: i()(z.zI, { [z.H_]: M }),
                children: [
                    (0, t.jsxs)("div", {
                        className: z.MY,
                        children: [
                            (0, t.jsx)(o.eu, { size: m._3.SIZE_40, src: $, "aria-hidden": !0 }),
                            (0, t.jsxs)("div", {
                                className: z.pB,
                                children: [
                                    (0, t.jsxs)("div", {
                                        className: z.jh,
                                        children: [
                                            (0, t.jsxs)("span", {
                                                className: z.Cm,
                                                children: [
                                                    (0, t.jsx)("span", {
                                                        className: z.fh,
                                                        style: { color: I.colorString ?? void 0 },
                                                        children: I.nick,
                                                    }),
                                                    null != G && (0, t.jsx)("span", { className: z.Ho, children: G }),
                                                ],
                                            }),
                                            (0, t.jsx)(c.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: Y,
                                            }),
                                        ],
                                    }),
                                    (0, t.jsxs)("div", {
                                        className: z.e5,
                                        children: [
                                            null == (l = (0, p.gU)(x))
                                                ? null
                                                : (0, t.jsx)(l, { size: "xxs", className: z.Jv }),
                                            (0, t.jsx)(c.E, {
                                                variant: "text-sm/medium",
                                                color: "text-muted",
                                                className: z.ZM,
                                                children: g ?? x.name,
                                            }),
                                            K > 0 &&
                                                (0, t.jsxs)("div", {
                                                    className: z.a5,
                                                    children: [
                                                        (0, t.jsx)(f.A, { height: 2, width: 2, "aria-hidden": "true" }),
                                                        (0, t.jsx)(h.n, { size: "xs", color: "currentColor" }),
                                                        (0, t.jsx)(c.E, {
                                                            variant: "text-xs/medium",
                                                            color: "text-muted",
                                                            children: q.format(K),
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != s.poll
                        ? (0, t.jsx)(P, { message: s })
                        : (0, t.jsxs)(t.Fragment, {
                              children: [
                                  J.length > 0 && (0, t.jsx)(W, { channelId: s.channel_id, preview: J }),
                                  null != D &&
                                      (0, t.jsx)("div", {
                                          className: z.Xv,
                                          inert: !0,
                                          children: (0, t.jsx)(A.A, {
                                              url: D.url,
                                              fileName: D.filename,
                                              fileSize: D.size,
                                          }),
                                      }),
                              ],
                          }),
                ],
            }),
            null != Q &&
                (0, t.jsx)("div", {
                    className: z.Fq,
                    children: (0, t.jsx)("img", { src: Q, className: z.af, alt: V?.alt ?? "" }),
                }),
        ],
    });
}
function J(e) {
    let { guildId: l } = e,
        { data: s, isLoading: a } = H(l, void 0),
        i = (0, r.bG)([M.A], () => M.A.hasMore(l)),
        d = s ?? V,
        o = (0, r.bG)([C.A], () => C.A.getGuild(l)?.officialMessageColor ?? D.aj),
        m = n.useMemo(() => [...d].sort((e, l) => l.timestamp.getTime() - e.timestamp.getTime()), [d]),
        h = n.useRef(null),
        j = n.useCallback(() => {
            if (!i || a) return;
            let e = h.current?.getScrollerState();
            if (null == e || e.scrollHeight - (e.scrollTop + e.offsetHeight) > e.offsetHeight) return;
            let s = m[m.length - 1];
            null != s && H.refetch(l, s.id);
        }, [l, i, a, m]);
    return (0, t.jsxs)("div", {
        className: z.tB,
        children: [
            (0, t.jsxs)(v.A, {
                channelId: R.VV.GUILD_OFFICIAL_MESSAGES,
                guildId: l,
                hideSearch: !0,
                children: [
                    (0, t.jsx)(v.A.Icon, { icon: u.L, "aria-hidden": !0 }),
                    (0, t.jsx)(v.A.Title, { children: Z.intl.string(Z.t["0C5w9r"]) }),
                ],
            }),
            (0, t.jsx)(x.Ch, {
                ref: h,
                className: z.XG,
                onScroll: j,
                children:
                    a && 0 === m.length
                        ? (0, t.jsx)("div", { className: z.Ie, children: (0, t.jsx)(g.y, {}) })
                        : 0 === m.length
                          ? (0, t.jsx)("div", {
                                className: z.Ie,
                                children: (0, t.jsx)(c.E, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: Z.intl.string(Z.t["ZTQ/80"]),
                                }),
                            })
                          : (0, t.jsxs)("div", {
                                className: z.Vg,
                                children: [
                                    m.map((e) =>
                                        (0, t.jsx)(Q, { message: e, guildId: l, officialMessageColor: o }, e.id),
                                    ),
                                    a && (0, t.jsx)("div", { className: z.sw, children: (0, t.jsx)(g.y, {}) }),
                                ],
                            }),
            }),
        ],
    });
}
