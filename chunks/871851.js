(t.r(l), t.d(l, { default: () => es }));
var s = t(477900),
    n = t(582128),
    a = t(503698),
    i = t.n(a),
    r = t(855986),
    c = t(834730),
    o = t(251843),
    d = t(778712),
    u = t(890856),
    h = t(97808),
    m = t(460905),
    x = t(581925),
    g = t(516521),
    j = t(289873),
    f = t(47167),
    p = t(713654),
    A = t(905394),
    v = t(607470),
    I = t(640708),
    y = t(742589),
    S = t(257249),
    N = t(46054),
    _ = t(731068),
    E = t(708676),
    b = t(704413),
    C = t(119591),
    L = t(976860),
    F = t(253932),
    M = t(734057),
    G = t(71393),
    w = t(486020),
    D = t(5377),
    U = t(713132),
    O = t(273185),
    T = t(620632),
    k = t(73153),
    R = t(652215);
let z = (0, r.UT)(U.A, {
    getQueryId: (e) => R.fic.GUILD_OFFICIAL_MESSAGES(e),
    get: (e) => (null != e && U.A.isLoaded(e) ? U.A.getMessages(e) : null),
    load: (e, l) =>
        null != e
            ? (async function (e, l) {
                  k.h.dispatch({ type: "LOAD_OFFICIAL_MESSAGES", guildId: e, before: l });
                  try {
                      let { body: t } = await T.Bo.get({
                          url: R.Rsh.GUILD_OFFICIAL_MESSAGES(e),
                          query: null != l ? { before: l } : void 0,
                          rejectWithError: (0, T.fT)(),
                      });
                      k.h.dispatch({
                          type: "LOAD_OFFICIAL_MESSAGES_SUCCESS",
                          guildId: e,
                          messages: t.messages,
                          hasMore: t.has_more,
                          before: l,
                      });
                  } catch (t) {
                      throw (k.h.dispatch({ type: "LOAD_OFFICIAL_MESSAGES_FAILURE", guildId: e, before: l }), t);
                  }
              })(e, l)
            : Promise.resolve(),
    getIsLoading: (e) => null != e && U.A.isLoading(e),
});
var H = t(763754),
    V = t(81437),
    B = t(812299),
    P = t(537174),
    X = t(447215),
    Z = t(381941),
    J = t(746080),
    q = t(792996),
    W = t(306239),
    Q = t(165648);
let Y = [],
    K = new Intl.NumberFormat();
function $(e) {
    let { channelId: l, preview: t } = e;
    return (0, s.jsx)("div", {
        className: i()(W.h_, Q.PT),
        children: (0, s.jsx)(c.E, {
            variant: "body-md/normal",
            color: "none",
            tag: "div",
            children: N.A.parse(t, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: l }),
        }),
    });
}
function ee(e) {
    let { mediaItem: l } = e;
    if (F.kt.useSetting() && "VIDEO" === l.type && null != l.proxyUrl)
        return (0, s.jsx)(v.A, {
            className: W.af,
            src: l.proxyUrl,
            poster: (0, _.fj)(l),
            alt: l.alt,
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
        });
    let t = (0, _.fj)(l);
    return null == t
        ? null
        : (0, s.jsx)(o._, {
              src: t,
              width: 96,
              height: 96,
              alt: l.alt ?? "",
              zoomable: !1,
              className: W.af,
              imageClassName: W.af,
          });
}
function el(e) {
    let { message: l } = e,
        t = (0, b.A)(l);
    return null == t ? null : (0, s.jsx)(C.A, { message: l, poll: t, className: W.Vq });
}
function et(e) {
    let l,
        t,
        a,
        { message: o, guildId: x, officialMessageColor: g } = e,
        j = (0, r.bG)([M.A], () => M.A.getChannel(o.channel_id)),
        v = (0, f.Ay)(j),
        y = (0, P.A)(g),
        N = (0, H.Ay)(o),
        b = (0, X.P)({ user: o.author, channelId: o.channel_id, guildId: x, messageId: o.id, stopPropagation: !0 }),
        C = n.useRef(null),
        [F, G] = n.useState(!1),
        U = o.poll;
    if (
        (n.useLayoutEffect(() => {
            if (null != U) return;
            let e = C.current;
            null != e && G(e.scrollHeight > e.clientHeight);
        }, [o, U]),
        null == j)
    )
        return null;
    let T = (0, B.y)({ message: o, channel: j, user: o.author, compact: !1, isRepliedMessage: !1 }),
        k = o.getContentMessage(),
        z = k.attachments.find((e) => (0, O.tT)(e.content_type) || (0, O.XB)(e.content_type)),
        Z = k.attachments.find((e) => !(0, O.tT)(e.content_type) && !(0, O.XB)(e.content_type)),
        J =
            (null != z ? (0, _.Rr)(z, o) : null) ??
            (function (e, l) {
                for (let t = 0; t < l.length; t++) {
                    let s = l[t],
                        n = { message: e, identifier: { type: "embed", embedIndex: t } };
                    if (null != s.video && (s.type === R.Auw.GIFV || s.type === R.Auw.VIDEO) && null != s.video)
                        return (0, _.oU)(s.video, n, "VIDEO");
                    let a = s.image ?? s.thumbnail;
                    if (null != a) return (0, _.oU)(a, n, "IMAGE");
                }
                return null;
            })(o, k.embeds) ??
            (0, S.We)(k.components),
        Q = (0, _.fj)(J),
        Y = k.content.length > 0 ? k.content : ((0, S.kC)(k.components) ?? ""),
        et = (0, D.mk)(o.timestamp, !0),
        es = o.reactions.reduce((e, l) => e + l.count, 0),
        en = o.author.getAvatarURL(x, (0, d.FT)(d._3.SIZE_40)),
        ea = w.Ay.getAvatarDecorationURL({
            avatarDecoration: N.guildMemberAvatarDecoration ?? o.author.avatarDecoration,
        });
    return (0, s.jsxs)(u.s, {
        className: i()(W.Nr, { [W.Sg]: null != y }),
        onClick: function () {
            function e() {
                return (0, L.pX)(R.BVt.CHANNEL(x, o.channel_id, o.id));
            }
            (0, V.A)(o, e) && e();
        },
        style: y,
        "aria-label": q.intl.string(q.t["+TSRGD"]),
        children: [
            (0, s.jsxs)("div", {
                className: W.zI,
                children: [
                    (0, s.jsxs)("div", {
                        className: W.MY,
                        children: [
                            (0, s.jsx)(h.eu, { size: d._3.SIZE_40, src: en, avatarDecoration: ea, "aria-hidden": !0 }),
                            (0, s.jsxs)("div", {
                                className: W.pB,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: W.jh,
                                        children: [
                                            (0, s.jsxs)("span", {
                                                className: W.Cm,
                                                children: [
                                                    (0, s.jsx)(c.E, {
                                                        tag: "span",
                                                        variant: "body-md/semibold",
                                                        color: "none",
                                                        className: W.fh,
                                                        children: b(N)(N.nick, o.id),
                                                    }),
                                                    null != T && (0, s.jsx)("span", { className: W.Ho, children: T }),
                                                ],
                                            }),
                                            (0, s.jsx)(c.E, {
                                                variant: "body-sm/normal",
                                                color: "text-muted",
                                                children: et,
                                            }),
                                        ],
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: W.e5,
                                        children: [
                                            null == (l = (0, p.gU)(j))
                                                ? null
                                                : (0, s.jsx)(l, { size: "xxs", className: W.Jv }),
                                            (0, s.jsx)(c.E, {
                                                variant: "body-sm/medium",
                                                color: "text-muted",
                                                className: W.ZM,
                                                children: v ?? j.name,
                                            }),
                                            es > 0 &&
                                                (0, s.jsxs)("div", {
                                                    className: W.a5,
                                                    children: [
                                                        (0, s.jsx)(I.A, { height: 2, width: 2, "aria-hidden": "true" }),
                                                        (0, s.jsx)(m.ReactionIcon, {
                                                            size: "xs",
                                                            color: "currentColor",
                                                        }),
                                                        (0, s.jsx)(c.E, {
                                                            variant: "body-xs/medium",
                                                            color: "text-muted",
                                                            children: K.format(es),
                                                        }),
                                                    ],
                                                }),
                                            null != U &&
                                                (0, s.jsxs)("div", {
                                                    className: W.a5,
                                                    children: [
                                                        (0, s.jsx)(I.A, { height: 2, width: 2, "aria-hidden": "true" }),
                                                        (0, s.jsx)(c.E, {
                                                            variant: "body-xs/medium",
                                                            color: "text-muted",
                                                            children:
                                                                ((t = U.results?.is_finalized === !0),
                                                                (a = (0, E.J)(U.expiry)),
                                                                t || null == a ? q.intl.string(q.t["e+J3JZ"]) : a),
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
                        className: i()(W.Ux, { [W.WF]: null != U || F }),
                        children:
                            null != U
                                ? (0, s.jsx)(el, { message: o })
                                : (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          Y.length > 0 && (0, s.jsx)($, { channelId: o.channel_id, preview: Y }),
                                          null != Z &&
                                              (0, s.jsx)("div", {
                                                  className: W.Xv,
                                                  inert: !0,
                                                  children: (0, s.jsx)(A.A, {
                                                      url: Z.url,
                                                      fileName: Z.filename,
                                                      fileSize: Z.size,
                                                  }),
                                              }),
                                      ],
                                  }),
                    }),
                ],
            }),
            null == U &&
                null != J &&
                null != Q &&
                (0, s.jsx)("div", { className: W.Fq, children: (0, s.jsx)(ee, { mediaItem: J }) }),
        ],
    });
}
function es(e) {
    let { guildId: l } = e,
        { data: t, isLoading: a } = z(l, void 0),
        i = (0, r.bG)([U.A], () => U.A.hasMore(l)),
        o = t ?? Y,
        d = (0, r.bG)([G.A], () => G.A.getGuild(l)?.officialMessageColor ?? Z.aj),
        u = n.useMemo(() => [...o].sort((e, l) => l.timestamp.getTime() - e.timestamp.getTime()), [o]),
        h = n.useRef(null),
        m = n.useCallback(() => {
            if (!i || a) return;
            let e = h.current?.getScrollerState();
            if (null == e || e.scrollHeight - (e.scrollTop + e.offsetHeight) > e.offsetHeight) return;
            let t = u[u.length - 1];
            null != t && z.refetch(l, t.id);
        }, [l, i, a, u]);
    return (0, s.jsxs)("div", {
        className: W.tB,
        children: [
            (0, s.jsxs)(y.A, {
                channelId: J.VV.GUILD_OFFICIAL_MESSAGES,
                guildId: l,
                hideSearch: !0,
                children: [
                    (0, s.jsx)(y.A.Icon, { icon: x.StampIcon, "aria-hidden": !0 }),
                    (0, s.jsx)(y.A.Title, { children: q.intl.string(q.t.xHEzFh) }),
                ],
            }),
            (0, s.jsx)(g.Ch, {
                ref: h,
                className: W.XG,
                onScroll: m,
                children:
                    a && 0 === u.length
                        ? (0, s.jsx)("div", { className: W.Ie, children: (0, s.jsx)(j.y, {}) })
                        : 0 === u.length
                          ? (0, s.jsx)("div", {
                                className: W.Ie,
                                children: (0, s.jsx)(c.E, {
                                    variant: "body-md/normal",
                                    color: "text-muted",
                                    children: q.intl.string(q.t["ZTQ/80"]),
                                }),
                            })
                          : (0, s.jsxs)("div", {
                                className: W.Vg,
                                children: [
                                    u.map((e) =>
                                        (0, s.jsx)(et, { message: e, guildId: l, officialMessageColor: d }, e.id),
                                    ),
                                    a && (0, s.jsx)("div", { className: W.sw, children: (0, s.jsx)(j.y, {}) }),
                                ],
                            }),
            }),
        ],
    });
}
