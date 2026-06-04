s.r(l), s.d(l, { default: () => Q });
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
    A = s(713654),
    p = s(640708),
    v = s(742589),
    f = s(814890),
    I = s(46054),
    _ = s(731068),
    S = s(976860),
    N = s(734057),
    E = s(71393),
    C = s(486020),
    L = s(58703),
    y = s(713132),
    M = s(59318),
    w = s(636537),
    F = s(228366),
    G = s(652215);
async function b(e, l) {
    F.h.dispatch({ type: "LOAD_OFFICIAL_MESSAGES", guildId: e, before: l });
    try {
        let { body: s } = await w.Bo.get({
            url: G.Rsh.GUILD_OFFICIAL_MESSAGES(e),
            query: null != l ? { before: l } : void 0,
            rejectWithError: !1,
        });
        F.h.dispatch({
            type: "LOAD_OFFICIAL_MESSAGES_SUCCESS",
            guildId: e,
            messages: s.messages,
            hasMore: s.has_more,
            before: l,
        });
    } catch (s) {
        throw (F.h.dispatch({ type: "LOAD_OFFICIAL_MESSAGES_FAILURE", guildId: e, before: l }), s);
    }
}
let k = (0, r.UT)(y.A, {
    getQueryId: (e) => G.fic.GUILD_OFFICIAL_MESSAGES(e),
    get: (e) => (null != e && y.A.isLoaded(e) ? y.A.getMessages(e) : null),
    load: (e, l) => (null != e ? b(e, l) : Promise.resolve()),
    getIsLoading: (e) => null != e && y.A.isLoading(e),
});
var H = s(763754),
    U = s(81437),
    O = s(812299),
    T = s(537174),
    D = s(381941),
    R = s(746080),
    Z = s(375708),
    B = s(490674),
    z = s(992595);
let V = [],
    q = new Intl.NumberFormat();
function W(e) {
    let { channelId: l, preview: s } = e;
    return (0, t.jsx)("div", {
        className: i()(B.h_, z.PT),
        children: I.A.parse(s, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: l }),
    });
}
function X(e) {
    let { message: l } = e,
        s = l.poll;
    if (null == s) return null;
    let n = s.answers.slice(0, 2),
        a = s.answers.length - n.length;
    return (0, t.jsxs)("div", {
        className: B.vZ,
        children: [
            (0, t.jsx)(c.E, {
                variant: "text-md/normal",
                color: "currentColor",
                className: B.MH,
                children: s.question.text,
            }),
            n.map((e) =>
                (0, t.jsxs)(
                    "div",
                    {
                        className: B.ZW,
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
function P(e) {
    let l,
        { message: s, guildId: a, officialMessageColor: u } = e,
        x = (0, r.bG)([N.A], () => N.A.getChannel(s.channel_id)),
        g = (0, j.Ay)(x),
        v = (0, T.A)(u),
        I = (0, H.Ay)(s),
        E = n.useRef(null),
        [y, w] = n.useState(!1);
    if (
        (n.useLayoutEffect(() => {
            let e = E.current;
            null != e && w(e.scrollHeight > e.clientHeight);
        }, [s]),
        null == x)
    )
        return null;
    let F = (0, O.y)({ message: s, channel: x, user: s.author, compact: !1, isRepliedMessage: !1 }),
        b = s.getContentMessage(),
        k = b.attachments.find((e) => (0, M.tT)(e.content_type) || (0, M.XB)(e.content_type)),
        D = b.embeds.findIndex((e) => null != e.image || null != e.thumbnail),
        R = -1 !== D ? b.embeds[D] : null,
        Z = R?.image ?? R?.thumbnail,
        z =
            (null != k ? (0, _.Rr)(k, s) : null) ??
            (null != Z ? (0, _.oU)(Z, { message: s, identifier: { type: "embed", embedIndex: D } }, "IMAGE") : null) ??
            (0, f.We)(b.components),
        V = (0, _.fj)(z),
        P = b.content.length > 0 ? b.content : ((0, f.kC)(b.components) ?? ""),
        Q = (0, L.mk)(s.timestamp, !0),
        J = s.reactions.reduce((e, l) => e + l.count, 0),
        Y = C.Ay.getUserAvatarURL({
            avatar: I.guildMemberAvatar ?? s.author.avatar,
            id: s.author.id,
            discriminator: s.author.discriminator,
        });
    return (0, t.jsxs)(d.D, {
        className: i()(B.Nr, { [B.Sg]: null != v }),
        onClick: () => {
            let e = () => (0, S.pX)(G.BVt.CHANNEL(a, s.channel_id, s.id));
            (0, U.A)(s, e) && e();
        },
        style: v,
        children: [
            (0, t.jsxs)("div", {
                ref: E,
                className: i()(B.zI, { [B.H_]: y }),
                children: [
                    (0, t.jsxs)("div", {
                        className: B.MY,
                        children: [
                            (0, t.jsx)(o.eu, { size: m._3.SIZE_40, src: Y, "aria-hidden": !0 }),
                            (0, t.jsxs)("div", {
                                className: B.pB,
                                children: [
                                    (0, t.jsxs)("div", {
                                        className: B.jh,
                                        children: [
                                            (0, t.jsxs)("span", {
                                                className: B.Cm,
                                                children: [
                                                    (0, t.jsx)("span", {
                                                        className: B.fh,
                                                        style: { color: I.colorString ?? void 0 },
                                                        children: I.nick,
                                                    }),
                                                    null != F && (0, t.jsx)("span", { className: B.Ho, children: F }),
                                                ],
                                            }),
                                            (0, t.jsx)(c.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: Q,
                                            }),
                                        ],
                                    }),
                                    (0, t.jsxs)("div", {
                                        className: B.e5,
                                        children: [
                                            null == (l = (0, A.gU)(x))
                                                ? null
                                                : (0, t.jsx)(l, { size: "xxs", className: B.Jv }),
                                            (0, t.jsx)(c.E, {
                                                variant: "text-sm/medium",
                                                color: "text-muted",
                                                className: B.ZM,
                                                children: g ?? x.name,
                                            }),
                                            J > 0 &&
                                                (0, t.jsxs)("div", {
                                                    className: B.a5,
                                                    children: [
                                                        (0, t.jsx)(p.A, { height: 2, width: 2, "aria-hidden": "true" }),
                                                        (0, t.jsx)(h.n, { size: "xs", color: "currentColor" }),
                                                        (0, t.jsx)(c.E, {
                                                            variant: "text-xs/medium",
                                                            color: "text-muted",
                                                            children: q.format(J),
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
                        ? (0, t.jsx)(X, { message: s })
                        : P.length > 0 && (0, t.jsx)(W, { channelId: s.channel_id, preview: P }),
                ],
            }),
            null != V &&
                (0, t.jsx)("div", {
                    className: B.Fq,
                    children: (0, t.jsx)("img", { src: V, className: B.af, alt: z?.alt ?? "" }),
                }),
        ],
    });
}
function Q(e) {
    let { guildId: l } = e,
        { data: s, isLoading: a } = k(l, void 0),
        i = (0, r.bG)([y.A], () => y.A.hasMore(l)),
        d = s ?? V,
        o = (0, r.bG)([E.A], () => E.A.getGuild(l)?.officialMessageColor ?? D.aj),
        m = n.useMemo(() => [...d].sort((e, l) => l.timestamp.getTime() - e.timestamp.getTime()), [d]),
        h = n.useRef(null),
        j = n.useCallback(() => {
            if (!i || a) return;
            let e = h.current?.getScrollerState();
            if (null == e || e.scrollHeight - (e.scrollTop + e.offsetHeight) > e.offsetHeight) return;
            let s = m[m.length - 1];
            null != s && k.refetch(l, s.id);
        }, [l, i, a, m]);
    return (0, t.jsxs)("div", {
        className: B.tB,
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
                className: B.XG,
                onScroll: j,
                children:
                    a && 0 === m.length
                        ? (0, t.jsx)("div", { className: B.Ie, children: (0, t.jsx)(g.y, {}) })
                        : 0 === m.length
                          ? (0, t.jsx)("div", {
                                className: B.Ie,
                                children: (0, t.jsx)(c.E, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: Z.intl.string(Z.t["ZTQ/80"]),
                                }),
                            })
                          : (0, t.jsxs)("div", {
                                className: B.Vg,
                                children: [
                                    m.map((e) =>
                                        (0, t.jsx)(P, { message: e, guildId: l, officialMessageColor: o }, e.id),
                                    ),
                                    a && (0, t.jsx)("div", { className: B.sw, children: (0, t.jsx)(g.y, {}) }),
                                ],
                            }),
            }),
        ],
    });
}
