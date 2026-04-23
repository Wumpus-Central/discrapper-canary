"use strict";
n.d(t, { Ay: () => eb });
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(989349),
    c = n.n(d),
    u = n(942381),
    m = n(837381),
    h = n(311907),
    g = n(990078),
    x = n(939249),
    f = n(707554),
    _ = n(247928),
    p = n(834730),
    j = n(97808),
    b = n(778712),
    v = n(138134),
    C = n(777666),
    A = n(827734),
    N = n(863610),
    S = n(534890),
    E = n(673698),
    T = n(147192),
    y = n(765671),
    I = n(104171),
    w = n(935649),
    R = n(847599),
    k = n(114166),
    M = n(47167),
    L = n(810181),
    D = n(390248),
    P = n(200463),
    O = n(435470),
    F = n(473503),
    U = n(256265),
    z = n(969043),
    G = n(710948),
    B = n(218152),
    H = n(52933),
    V = n(504261),
    W = n(505234),
    q = n(387408),
    $ = n(77350),
    K = n(294520),
    X = n(505527),
    J = n(863439),
    Q = n(465364),
    Y = n(467073),
    Z = n(652176),
    ee = n(260821),
    et = n(448368),
    en = n(302031),
    el = n(253932),
    ea = n(761640),
    es = n(734057),
    ei = n(320501),
    er = n(576705),
    eo = n(967198),
    ed = n(287809),
    ec = n(531685),
    eu = n(405269),
    em = n(715757),
    eh = n(95905),
    eg = n(652215),
    ex = n(838541),
    ef = n(985018),
    e_ = n(506472),
    ep = n(330070),
    ej = n(992595);
let eb = a.memo(function (e) {
    let { threadId: t, goToThread: n, observePostVisibilityAnalytics: s, overrideMedia: r, className: d } = e,
        {
            channel: c,
            isOpen: g,
            messageCount: p,
            content: j,
            firstMessage: b,
            media: v,
        } = (function (e) {
            let { threadId: t, overrideMedia: n } = e,
                l = (0, h.bG)([es.A], () => es.A.getChannel(t));
            o()(null != l, "the thread should not be null here, a store must have missed an update");
            let s = (0, h.bG)([ea.Ay], () => ea.Ay.getCurrentSidebarChannelId(l.parent_id) === l.id),
                { firstMessage: i } = (0, F.OA)(l),
                r = (function (e) {
                    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: l = !0 } = e,
                        s = a.useMemo(() => (null != t ? (0, q.A)(t, t?.messageSnapshots[0]) : null), [t]),
                        { hasSpoilerEmbeds: i, content: r } = a.useMemo(
                            () =>
                                s?.content != null && "" !== s.content
                                    ? (0, Q.Ay)(s, {
                                          formatInline: n,
                                          noStyleAndInteraction: l,
                                          allowHeading: !0,
                                          allowList: !0,
                                      })
                                    : { hasSpoilerEmbeds: !1, content: null },
                            [n, s, l],
                        ),
                        o = (0, U.Ky)(t, i),
                        d = (0, U.L_)(t, i);
                    return null == t ? null : { hasSpoilerEmbeds: i, content: r, firstMedia: o, firstMediaIsEmbed: d };
                })({ firstMessage: i }),
                d = r?.content,
                c = r?.firstMedia,
                { messageCountText: u } = (0, O.k6)(l);
            return { channel: l, isOpen: s, messageCount: u, firstMessage: i, content: d, media: n ?? c };
        })({ threadId: t, overrideMedia: r }),
        C = (0, M.Ay)(c);
    (0, em.vb)(b);
    let A = (0, h.bG)([ed.default, ei.A], () => {
            let e = ed.default.getUser(b?.messageSnapshots[0]?.moderatorReport?.reported_user_id);
            if (null != e) return e;
            if (b?.messageReference?.channel_id != null && b?.messageReference?.message_id != null) {
                let e = ei.A.getMessage(b?.messageReference?.channel_id, b?.messageReference?.message_id);
                if (null != e) return e.author;
            }
            return null;
        }),
        { ref: N, height: S } = (0, y.Ay)(),
        E = (0, B.kU)((e) => e.setCardHeight, u.x);
    a.useEffect(() => {
        null != S && E(t, S);
    }, [S, E, t]),
        a.useEffect(() => {
            s?.(N.current, t);
        }, [N, s, t]);
    let T = a.useRef(null),
        { handleLeftClick: I, handleRightClick: w } = (0, W.A)({ facepileRef: T, goToThread: n, channel: c }),
        { role: R, onFocus: k, ...L } = (0, m.rm)(t),
        { isFocused: D, handleFocus: P, handleBlur: z } = (0, V.A)(k);
    return (0, l.jsxs)("div", {
        ref: N,
        "data-item-id": t,
        onClick: I,
        onContextMenu: w,
        className: i()(ep.kL, e_.kL, d, { [ep.nT]: g }),
        children: [
            (0, l.jsx)(x.D, {
                onClick: I,
                focusProps: { ringTarget: N },
                onContextMenu: w,
                "aria-label": ef.intl.formatToPlainString(ef.t.pgYN6c, { title: C, count: p }),
                className: ep.Kv,
                onFocus: P,
                onBlur: z,
                ...L,
            }),
            (0, l.jsxs)("div", {
                className: ep.kb,
                children: [
                    (0, l.jsx)(f.F, {
                        children: (0, l.jsxs)("div", {
                            className: e_.fx,
                            children: [
                                (0, l.jsx)(ev, {
                                    channel: c,
                                    firstMessage: b,
                                    content: j,
                                    hasMediaAttachment: null != v,
                                    originalAuthor: A,
                                }),
                                b?.blocked || null == v ? null : (0, l.jsx)(eI, { channel: c, firstMedia: v }),
                            ],
                        }),
                    }),
                    (0, l.jsx)(_.M, {
                        enabled: !D,
                        children: (0, l.jsx)(eA, { channel: c, firstMessage: b, facepileRef: T }),
                    }),
                ],
            }),
        ],
    });
});
function ev(e) {
    let { channel: t, firstMessage: n, content: a, hasMediaAttachment: s, originalAuthor: r } = e,
        { hasUnreads: o } = (0, O.X5)(t);
    return (0, l.jsxs)("div", {
        className: i()(e_.rf, ep.rf),
        children: [
            (0, l.jsx)(H.Ay, { channel: t }),
            (0, l.jsx)("div", {
                className: (ep.iU, e_.iU),
                children: (0, l.jsx)(eC, {
                    channel: t,
                    message: n,
                    content: a,
                    hasMediaAttachment: s,
                    hasUnreads: o,
                    originalAuthor: r,
                }),
            }),
        ],
    });
}
let eC = a.memo(function (e) {
    let { message: t, channel: n, content: a, hasMediaAttachment: s, hasUnreads: r, originalAuthor: o } = e,
        d = (0, h.bG)([z.A], () => z.A.isLoading(n.id)),
        c = (0, h.bG)([er.A], () => er.A.can(eg.xBc.MANAGE_MESSAGES, n)),
        u = el.gs.useSetting(),
        m = (0, h.bG)([eo.A], () => eo.A.getGuildId()),
        { contentPlaceholder: g, renderedContent: x } =
            null == t
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, et.o)(t, a, !1, !1, i()(ep.BK, e_.BK, ej.tZ, ej.__invalid_smallFontSize), {
                      leadingIconClass: ep.aG,
                      trailingIconClass: ep.sl,
                      iconSize: ex.eJ,
                  }),
        f =
            null != x
                ? (0, l.jsx)(p.E, { variant: "text-md/normal", children: x })
                : s
                  ? null
                  : (0, l.jsx)(p.E, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: r ? "text-default" : "text-muted",
                        className: i()(ep.BK, e_.BK),
                        "aria-label": "",
                        children: null == t ? (d ? null : ef.intl.string(ef.t.mE3KJN)) : g,
                    });
    return (0, l.jsxs)(en.Bs.Provider, {
        value: (0, J.A)(u, c),
        children: [
            null != o
                ? (0, l.jsx)(j.eu, {
                      size: b._3.SIZE_40,
                      src: o.getAvatarURL(m, (0, b.FT)(b._3.SIZE_40)),
                      "aria-label": "",
                      className: e_.Nd,
                  })
                : null,
            (0, l.jsxs)("div", {
                className: e_.IF,
                children: [
                    (0, l.jsx)(eh.A, { channel: n, originalAuthor: o, message: t }),
                    (0, l.jsx)(_.M, { className: ep.JY, children: f }),
                ],
            }),
        ],
    });
});
function eA(e) {
    let { channel: t, facepileRef: n, firstMessage: a } = e,
        { isNew: s } = (0, O.X5)(t),
        i = (0, M.Ay)(t),
        r = (0, L.m)(t.id),
        o = a?.reactions != null && a.reactions.length > 0;
    return (0, l.jsxs)("div", {
        className: e_.qr,
        children: [
            (0, l.jsxs)("div", {
                className: e_.JS,
                children: [
                    (0, l.jsx)(v.i, { size: "custom", width: 14, height: 14 }),
                    (0, l.jsx)(p.E, { variant: "text-sm/medium", children: i }),
                    s
                        ? (0, l.jsx)(C.Lp, {
                              color: A.A.unsafe_rawColors.BRAND_260.css,
                              text: ef.intl.string(ef.t.y2b7CA),
                              className: e_.Ad,
                          })
                        : null,
                ],
            }),
            (0, l.jsxs)("div", {
                className: e_.PQ,
                children: [
                    o || null == a ? null : (0, l.jsx)(eS, { firstMessage: a, channel: t }),
                    (0, l.jsx)(eN, { channel: t, iconSize: 14 }),
                    (0, l.jsx)("span", { className: ep.xE, children: "•" }),
                    r.length > 0
                        ? (0, l.jsxs)("div", {
                              className: ep.IW,
                              children: [
                                  (0, l.jsx)(eT, { channel: t, userIds: r, facepileRef: n }),
                                  (0, l.jsx)("div", {
                                      className: ep.r$,
                                      children: (0, l.jsx)(N.n, { themed: !0, dotRadius: 2 }),
                                  }),
                                  (0, l.jsx)(T.Ay, { channel: t, className: ep.mD, renderDots: !1 }),
                              ],
                          })
                        : (0, l.jsx)(eE, { channel: t }),
                ],
            }),
        ],
    });
}
function eN(e) {
    let { channel: t, iconSize: n, showReadState: a = !1 } = e,
        { messageCountText: s, unreadCount: r } = (0, O.k6)(t);
    return (0, l.jsxs)("div", {
        className: i()(ep.Mv, { [ep.hT]: a && null == r }),
        children: [
            (0, l.jsx)("span", {
                className: ep.SZ,
                children: (0, l.jsx)(S.o, { size: "custom", color: "currentColor", width: n, height: n }),
            }),
            "number" == typeof s
                ? (0, l.jsx)(k.A, { value: s, digitWidth: 9, className: ep.gv })
                : (0, l.jsx)("div", { className: ep.gv, children: s }),
            null == r
                ? null
                : (0, l.jsxs)(p.E, {
                      className: ep.bU,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", ef.intl.format(ef.t.z3PEth, { count: r }), ")"],
                  }),
        ],
    });
}
function eS(e) {
    let { firstMessage: t, channel: n } = e,
        a = (0, h.bG)([es.A], () => es.A.getChannel(n.parent_id)),
        s = (0, O.Ck)(a),
        { disableReactionCreates: i, isLurking: r, isPendingMember: o } = (0, Y.A)(n);
    return null == s || i
        ? null
        : (0, l.jsx)(ee.qT, {
              className: ep.vC,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: r,
              isPendingMember: o,
              emoji: s,
              hideCount: !0,
              count: 0,
              burst_count: 0,
              me: !1,
              me_burst: !1,
              type: X.v.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function eE(e) {
    let { channel: t } = e,
        { sortOrder: n } = (0, P.R)(t.parent_id),
        a = (0, O.Mw)(t, n),
        s = t.threadMetadata?.createTimestamp,
        i = null == s ? null : ef.intl.formatToPlainString(ef.t["13euCd"], { timestamp: (0, eu.i$)(c()(s), "LLLL") });
    return (0, l.jsx)(g.m, {
        text: i,
        children: (0, l.jsx)(p.E, {
            className: ep.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: a,
        }),
    });
}
function eT(e) {
    let { channel: t, userIds: n, facepileRef: a } = e,
        s = (0, O.$I)(t, n);
    return (0, l.jsx)("div", {
        ref: a,
        children: (0, l.jsx)(I.Ay, {
            className: ep.__invalid_facepile,
            showDefaultAvatarsForNullUsers: !0,
            guildId: t.guild_id,
            users: s,
            max: 5,
            size: 16,
            hideMoreUsers: !0,
            showUserPopout: !0,
        }),
    });
}
function ey(e) {
    let t,
        n,
        { firstMedia: a, shouldObscure: s, obscureReason: r, shouldShowAgeVerification: o } = e,
        d = (0, h.bG)([ec.A], () => ec.A.isFocused()),
        c = (0, $.ge)(a.src),
        u = el.kt.useSetting(),
        m = (0, K.rx)(r),
        { src: g, width: x, height: f, alt: _ } = a;
    return (f > x ? (n = 72) : (t = 72), o)
        ? (0, l.jsx)("div", {
              "aria-label": m ?? _ ?? ef.intl.string(ef.t.hqwnc2),
              className: i()(ep.iT, ep.nh),
              style: { maxWidth: t, maxHeight: n, height: f, width: x },
          })
        : g.startsWith("data:")
          ? (0, l.jsx)(E._, {
                src: g,
                maxHeight: t,
                maxWidth: n,
                width: x,
                height: f,
                alt: null != _ && s ? m : _,
                className: ep.iT,
                imageClassName: i()({ [ep.cd]: s, [ep.LW]: !0 }),
            })
          : (0, Z.LL)({
                src: g,
                maxHeight: t,
                maxWidth: n,
                width: x,
                height: f,
                alt: null != _ && s ? m : _,
                autoPlay: u,
                animated: c && !s && d,
                srcIsAnimated: a.srcIsAnimated,
                containerClassName: ep.iT,
                imageClassName: i()({ [ep.cd]: s }),
                analyticsSource: "ForumPostMediaPreview",
            });
}
function eI(e) {
    let { channel: t, firstMedia: n } = e,
        [a, s] = (0, K.eJ)({ media: n, channel: t }),
        r = (0, D.qZ)(s);
    return (0, l.jsx)(_.M, {
        enabled: !0,
        children: (0, l.jsxs)("div", {
            className: i()(ep.pV, e_.pV),
            onClick: function (e) {
                e.stopPropagation(),
                    r &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        w.A.showAgeVerificationGetStartedModal({ entryPoint: R.q1.FORUM_POST_MEDIA_PREVIEW }));
            },
            children: [
                (0, l.jsx)(ey, { firstMedia: n, shouldObscure: a, obscureReason: s, shouldShowAgeVerification: r }),
                a && (0, l.jsx)(G.A, { iconClassname: ep.yo, obscureReason: s }),
            ],
        }),
    });
}
