"use strict";
n.d(t, { Ay: () => eo });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(989349),
    c = n.n(d),
    u = n(942381),
    m = n(837381),
    h = n(311907),
    x = n(990078),
    g = n(397927),
    f = n(147192),
    p = n(765671),
    _ = n(104171),
    j = n(935649),
    b = n(847599),
    v = n(114166),
    A = n(810181),
    C = n(390248),
    T = n(422844),
    N = n(435470),
    S = n(473503),
    y = n(256265),
    E = n(969043),
    I = n(710948),
    R = n(218152),
    M = n(52933),
    k = n(504261),
    w = n(505234),
    L = n(387408),
    P = n(77350),
    D = n(294520),
    O = n(505527),
    F = n(863439),
    U = n(465364),
    G = n(467073),
    z = n(652176),
    H = n(260821),
    B = n(448368),
    V = n(302031),
    W = n(253932),
    K = n(761640),
    q = n(734057),
    $ = n(320501),
    J = n(576705),
    X = n(967198),
    Q = n(287809),
    Y = n(531685),
    Z = n(405269),
    ee = n(715757),
    et = n(95905),
    en = n(652215),
    el = n(838541),
    ei = n(985018),
    es = n(518335),
    ea = n(558997),
    er = n(206314);
let eo = i.memo(function (e) {
    let { threadId: t, goToThread: n, observePostVisibilityAnalytics: s, overrideMedia: r, className: d } = e,
        {
            channel: c,
            isOpen: x,
            messageCount: f,
            content: _,
            firstMessage: j,
            media: b,
        } = (function (e) {
            let { threadId: t, overrideMedia: n } = e,
                l = (0, h.bG)([q.A], () => q.A.getChannel(t));
            o()(null != l, "the thread should not be null here, a store must have missed an update");
            let s = (0, h.bG)([K.Ay], () => K.Ay.getCurrentSidebarChannelId(l.parent_id) === l.id),
                { firstMessage: a } = (0, S.OA)(l),
                r = (function (e) {
                    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: l = !0 } = e,
                        s = i.useMemo(() => (null != t ? (0, L.A)(t, t?.messageSnapshots[0]) : null), [t]),
                        { hasSpoilerEmbeds: a, content: r } = i.useMemo(
                            () =>
                                s?.content != null && "" !== s.content
                                    ? (0, U.Ay)(s, {
                                          formatInline: n,
                                          noStyleAndInteraction: l,
                                          allowHeading: !0,
                                          allowList: !0,
                                      })
                                    : { hasSpoilerEmbeds: !1, content: null },
                            [n, s, l],
                        ),
                        o = (0, y.Ky)(t, a),
                        d = (0, y.L_)(t, a);
                    return null == t ? null : { hasSpoilerEmbeds: a, content: r, firstMedia: o, firstMediaIsEmbed: d };
                })({ firstMessage: a }),
                d = r?.content,
                c = r?.firstMedia,
                { messageCountText: u } = (0, N.k6)(l);
            return { channel: l, isOpen: s, messageCount: u, firstMessage: a, content: d, media: n ?? c };
        })({ threadId: t, overrideMedia: r });
    (0, ee.vb)(j);
    let v = (0, h.bG)([Q.default, $.A], () => {
            let e = Q.default.getUser(j?.messageSnapshots[0]?.moderatorReport?.reported_user_id);
            if (null != e) return e;
            if (j?.messageReference?.channel_id != null && j?.messageReference?.message_id != null) {
                let e = $.A.getMessage(j?.messageReference?.channel_id, j?.messageReference?.message_id);
                if (null != e) return e.author;
            }
            return null;
        }),
        { ref: A, height: C } = (0, p.Ay)(),
        T = (0, R.kU)((e) => e.setCardHeight, u.x);
    i.useEffect(() => {
        null != C && T(t, C);
    }, [C, T, t]),
        i.useEffect(() => {
            s?.(A.current, t);
        }, [A, s, t]);
    let E = i.useRef(null),
        { handleLeftClick: I, handleRightClick: M } = (0, w.A)({ facepileRef: E, goToThread: n, channel: c }),
        { role: P, onFocus: D, ...O } = (0, m.rm)(t),
        { isFocused: F, handleFocus: G, handleBlur: z } = (0, k.A)(D);
    return (0, l.jsxs)("div", {
        ref: A,
        "data-item-id": t,
        onClick: I,
        onContextMenu: M,
        className: a()(ea.kL, es.kL, d, { [ea.nT]: x }),
        children: [
            (0, l.jsx)(g.DUT, {
                onClick: I,
                focusProps: { ringTarget: A },
                onContextMenu: M,
                "aria-label": ei.intl.formatToPlainString(ei.t.pgYN6c, { title: c.name, count: f }),
                className: ea.Kv,
                onFocus: G,
                onBlur: z,
                ...O,
            }),
            (0, l.jsxs)("div", {
                className: ea.kb,
                children: [
                    (0, l.jsx)(g.Fmo, {
                        children: (0, l.jsxs)("div", {
                            className: es.fx,
                            children: [
                                (0, l.jsx)(ed, {
                                    channel: c,
                                    firstMessage: j,
                                    content: _,
                                    hasMediaAttachment: null != b,
                                    originalAuthor: v,
                                }),
                                j?.blocked || null == b ? null : (0, l.jsx)(ep, { channel: c, firstMedia: b }),
                            ],
                        }),
                    }),
                    (0, l.jsx)(g.M1G, {
                        enabled: !F,
                        children: (0, l.jsx)(eu, { channel: c, firstMessage: j, facepileRef: E }),
                    }),
                ],
            }),
        ],
    });
});
function ed(e) {
    let { channel: t, firstMessage: n, content: i, hasMediaAttachment: s, originalAuthor: r } = e,
        { hasUnreads: o } = (0, N.X5)(t);
    return (0, l.jsxs)("div", {
        className: a()(es.rf, ea.rf),
        children: [
            (0, l.jsx)(M.Ay, { channel: t }),
            (0, l.jsx)("div", {
                className: (ea.iU, es.iU),
                children: (0, l.jsx)(ec, {
                    channel: t,
                    message: n,
                    content: i,
                    hasMediaAttachment: s,
                    hasUnreads: o,
                    originalAuthor: r,
                }),
            }),
        ],
    });
}
let ec = i.memo(function (e) {
    let { message: t, channel: n, content: i, hasMediaAttachment: s, hasUnreads: r, originalAuthor: o } = e,
        d = (0, h.bG)([E.A], () => E.A.isLoading(n.id)),
        c = (0, h.bG)([J.A], () => J.A.can(en.xBc.MANAGE_MESSAGES, n)),
        u = W.gs.useSetting(),
        m = (0, h.bG)([X.A], () => X.A.getGuildId()),
        { contentPlaceholder: x, renderedContent: f } =
            null == t
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, B.o)(t, i, !1, !1, a()(ea.BK, es.BK, er.tZ, er.__invalid_smallFontSize), {
                      leadingIconClass: ea.aG,
                      trailingIconClass: ea.sl,
                      iconSize: el.eJ,
                  }),
        p =
            null != f
                ? (0, l.jsx)(g.Text, { variant: "text-md/normal", children: f })
                : s
                  ? null
                  : (0, l.jsx)(g.Text, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: r ? "text-default" : "text-muted",
                        className: a()(ea.BK, es.BK),
                        "aria-label": "",
                        children: null == t ? (d ? null : ei.intl.string(ei.t.mE3KJN)) : x,
                    });
    return (0, l.jsxs)(V.Bs.Provider, {
        value: (0, F.A)(u, c),
        children: [
            null != o
                ? (0, l.jsx)(g.euF, {
                      size: g._3J.SIZE_40,
                      src: o.getAvatarURL(m, (0, g.FT9)(g._3J.SIZE_40)),
                      "aria-label": "",
                      className: es.Nd,
                  })
                : null,
            (0, l.jsxs)("div", {
                className: es.IF,
                children: [
                    (0, l.jsx)(et.A, { channel: n, originalAuthor: o, message: t }),
                    (0, l.jsx)(g.M1G, { className: ea.JY, children: p }),
                ],
            }),
        ],
    });
});
function eu(e) {
    let { channel: t, facepileRef: n, firstMessage: i } = e,
        { isNew: s } = (0, N.X5)(t),
        a = (0, A.m)(t.id),
        r = i?.reactions != null && i.reactions.length > 0;
    return (0, l.jsxs)("div", {
        className: es.qr,
        children: [
            (0, l.jsxs)("div", {
                className: es.JS,
                children: [
                    (0, l.jsx)(g.iFK, { size: "custom", width: 14, height: 14 }),
                    (0, l.jsx)(g.Text, { variant: "text-sm/medium", children: t.name }),
                    s
                        ? (0, l.jsx)(g.LpS, {
                              color: g.LU0.unsafe_rawColors.BRAND_260.css,
                              text: ei.intl.string(ei.t.y2b7CA),
                              className: es.Ad,
                          })
                        : null,
                ],
            }),
            (0, l.jsxs)("div", {
                className: es.PQ,
                children: [
                    r || null == i ? null : (0, l.jsx)(eh, { firstMessage: i, channel: t }),
                    (0, l.jsx)(em, { channel: t, iconSize: 14 }),
                    (0, l.jsx)("span", { className: ea.xE, children: "•" }),
                    a.length > 0
                        ? (0, l.jsxs)("div", {
                              className: ea.IW,
                              children: [
                                  (0, l.jsx)(eg, { channel: t, userIds: a, facepileRef: n }),
                                  (0, l.jsx)("div", {
                                      className: ea.r$,
                                      children: (0, l.jsx)(g.nvX, { themed: !0, dotRadius: 2 }),
                                  }),
                                  (0, l.jsx)(f.Ay, { channel: t, className: ea.mD, renderDots: !1 }),
                              ],
                          })
                        : (0, l.jsx)(ex, { channel: t }),
                ],
            }),
        ],
    });
}
function em(e) {
    let { channel: t, iconSize: n, showReadState: i = !1 } = e,
        { messageCountText: s, unreadCount: r } = (0, N.k6)(t);
    return (0, l.jsxs)("div", {
        className: a()(ea.Mv, { [ea.hT]: i && null == r }),
        children: [
            (0, l.jsx)("span", {
                className: ea.SZ,
                children: (0, l.jsx)(g.oyn, { size: "custom", color: "currentColor", width: n, height: n }),
            }),
            "number" == typeof s
                ? (0, l.jsx)(v.A, { value: s, digitWidth: 9, className: ea.gv })
                : (0, l.jsx)("div", { className: ea.gv, children: s }),
            null == r
                ? null
                : (0, l.jsxs)(g.Text, {
                      className: ea.bU,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", ei.intl.format(ei.t.z3PEth, { count: r }), ")"],
                  }),
        ],
    });
}
function eh(e) {
    let { firstMessage: t, channel: n } = e,
        i = (0, h.bG)([q.A], () => q.A.getChannel(n.parent_id)),
        s = (0, N.Ck)(i),
        { disableReactionCreates: a, isLurking: r, isPendingMember: o } = (0, G.A)(n);
    return null == s || a
        ? null
        : (0, l.jsx)(H.qT, {
              className: ea.vC,
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
              type: O.v.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function ex(e) {
    let { channel: t } = e,
        { sortOrder: n } = (0, T.R)(t.parent_id),
        i = (0, N.Mw)(t, n),
        s = t.threadMetadata?.createTimestamp,
        a = null == s ? null : ei.intl.formatToPlainString(ei.t["13euCd"], { timestamp: (0, Z.i$)(c()(s), "LLLL") });
    return (0, l.jsx)(x.m, {
        text: a,
        children: (0, l.jsx)(g.Text, {
            className: ea.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: i,
        }),
    });
}
function eg(e) {
    let { channel: t, userIds: n, facepileRef: i } = e,
        s = (0, N.$I)(t, n);
    return (0, l.jsx)("div", {
        ref: i,
        children: (0, l.jsx)(_.Ay, {
            className: ea.__invalid_facepile,
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
function ef(e) {
    let t,
        n,
        { firstMedia: i, shouldObscure: s, obscureReason: r, shouldShowAgeVerification: o } = e,
        d = (0, h.bG)([Y.A], () => Y.A.isFocused()),
        c = (0, P.ge)(i.src),
        u = W.kt.useSetting(),
        m = (0, D.rx)(r),
        { src: x, width: f, height: p, alt: _ } = i;
    return (p > f ? (n = 72) : (t = 72), o)
        ? (0, l.jsx)("div", {
              "aria-label": m ?? _ ?? ei.intl.string(ei.t.hqwnc2),
              className: a()(ea.iT, ea.nh),
              style: { maxWidth: t, maxHeight: n, height: p, width: f },
          })
        : x.startsWith("data:")
          ? (0, l.jsx)(g._V3, {
                src: x,
                maxHeight: t,
                maxWidth: n,
                width: f,
                height: p,
                alt: null != _ && s ? m : _,
                className: ea.iT,
                imageClassName: a()({ [ea.cd]: s, [ea.LW]: !0 }),
            })
          : (0, z.LL)({
                src: x,
                maxHeight: t,
                maxWidth: n,
                width: f,
                height: p,
                alt: null != _ && s ? m : _,
                autoPlay: u,
                animated: c && !s && d,
                srcIsAnimated: i.srcIsAnimated,
                containerClassName: ea.iT,
                imageClassName: a()({ [ea.cd]: s }),
                analyticsSource: "ForumPostMediaPreview",
            });
}
function ep(e) {
    let { channel: t, firstMedia: n } = e,
        [i, s] = (0, D.eJ)({ media: n, channel: t }),
        r = (0, C.qZ)(s);
    return (0, l.jsx)(g.M1G, {
        enabled: !0,
        children: (0, l.jsxs)("div", {
            className: a()(ea.pV, es.pV),
            onClick: function (e) {
                e.stopPropagation(),
                    r &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        j.A.showAgeVerificationGetStartedModal({ entryPoint: b.q1.FORUM_POST_MEDIA_PREVIEW }));
            },
            children: [
                (0, l.jsx)(ef, { firstMedia: n, shouldObscure: i, obscureReason: s, shouldShowAgeVerification: r }),
                i && (0, l.jsx)(I.A, { iconClassname: ea.yo, obscureReason: s }),
            ],
        }),
    });
}
