"use strict";
n.d(t, { Ay: () => ed });
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
    _ = n(765671),
    p = n(104171),
    j = n(935649),
    b = n(847599),
    v = n(114166),
    A = n(47167),
    C = n(810181),
    T = n(390248),
    N = n(200463),
    S = n(435470),
    y = n(473503),
    E = n(256265),
    I = n(969043),
    R = n(710948),
    M = n(218152),
    w = n(52933),
    k = n(504261),
    L = n(505234),
    P = n(387408),
    D = n(77350),
    O = n(294520),
    F = n(505527),
    U = n(863439),
    G = n(465364),
    z = n(467073),
    H = n(652176),
    B = n(260821),
    V = n(448368),
    W = n(302031),
    K = n(253932),
    q = n(761640),
    $ = n(734057),
    J = n(320501),
    X = n(576705),
    Q = n(967198),
    Y = n(287809),
    Z = n(531685),
    ee = n(405269),
    et = n(715757),
    en = n(95905),
    el = n(652215),
    ei = n(838541),
    es = n(985018),
    ea = n(244929),
    er = n(641031),
    eo = n(830684);
let ed = i.memo(function (e) {
    let { threadId: t, goToThread: n, observePostVisibilityAnalytics: s, overrideMedia: r, className: d } = e,
        {
            channel: c,
            isOpen: x,
            messageCount: f,
            content: p,
            firstMessage: j,
            media: b,
        } = (function (e) {
            let { threadId: t, overrideMedia: n } = e,
                l = (0, h.bG)([$.A], () => $.A.getChannel(t));
            o()(null != l, "the thread should not be null here, a store must have missed an update");
            let s = (0, h.bG)([q.Ay], () => q.Ay.getCurrentSidebarChannelId(l.parent_id) === l.id),
                { firstMessage: a } = (0, y.OA)(l),
                r = (function (e) {
                    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: l = !0 } = e,
                        s = i.useMemo(() => (null != t ? (0, P.A)(t, t?.messageSnapshots[0]) : null), [t]),
                        { hasSpoilerEmbeds: a, content: r } = i.useMemo(
                            () =>
                                s?.content != null && "" !== s.content
                                    ? (0, G.Ay)(s, {
                                          formatInline: n,
                                          noStyleAndInteraction: l,
                                          allowHeading: !0,
                                          allowList: !0,
                                      })
                                    : { hasSpoilerEmbeds: !1, content: null },
                            [n, s, l],
                        ),
                        o = (0, E.Ky)(t, a),
                        d = (0, E.L_)(t, a);
                    return null == t ? null : { hasSpoilerEmbeds: a, content: r, firstMedia: o, firstMediaIsEmbed: d };
                })({ firstMessage: a }),
                d = r?.content,
                c = r?.firstMedia,
                { messageCountText: u } = (0, S.k6)(l);
            return { channel: l, isOpen: s, messageCount: u, firstMessage: a, content: d, media: n ?? c };
        })({ threadId: t, overrideMedia: r }),
        v = (0, A.Ay)(c);
    (0, et.vb)(j);
    let C = (0, h.bG)([Y.default, J.A], () => {
            let e = Y.default.getUser(j?.messageSnapshots[0]?.moderatorReport?.reported_user_id);
            if (null != e) return e;
            if (j?.messageReference?.channel_id != null && j?.messageReference?.message_id != null) {
                let e = J.A.getMessage(j?.messageReference?.channel_id, j?.messageReference?.message_id);
                if (null != e) return e.author;
            }
            return null;
        }),
        { ref: T, height: N } = (0, _.Ay)(),
        I = (0, M.kU)((e) => e.setCardHeight, u.x);
    i.useEffect(() => {
        null != N && I(t, N);
    }, [N, I, t]),
        i.useEffect(() => {
            s?.(T.current, t);
        }, [T, s, t]);
    let R = i.useRef(null),
        { handleLeftClick: w, handleRightClick: D } = (0, L.A)({ facepileRef: R, goToThread: n, channel: c }),
        { role: O, onFocus: F, ...U } = (0, m.rm)(t),
        { isFocused: z, handleFocus: H, handleBlur: B } = (0, k.A)(F);
    return (0, l.jsxs)("div", {
        ref: T,
        "data-item-id": t,
        onClick: w,
        onContextMenu: D,
        className: a()(er.kL, ea.kL, d, { [er.nT]: x }),
        children: [
            (0, l.jsx)(g.DUT, {
                onClick: w,
                focusProps: { ringTarget: T },
                onContextMenu: D,
                "aria-label": es.intl.formatToPlainString(es.t.pgYN6c, { title: v, count: f }),
                className: er.Kv,
                onFocus: H,
                onBlur: B,
                ...U,
            }),
            (0, l.jsxs)("div", {
                className: er.kb,
                children: [
                    (0, l.jsx)(g.Fmo, {
                        children: (0, l.jsxs)("div", {
                            className: ea.fx,
                            children: [
                                (0, l.jsx)(ec, {
                                    channel: c,
                                    firstMessage: j,
                                    content: p,
                                    hasMediaAttachment: null != b,
                                    originalAuthor: C,
                                }),
                                j?.blocked || null == b ? null : (0, l.jsx)(ep, { channel: c, firstMedia: b }),
                            ],
                        }),
                    }),
                    (0, l.jsx)(g.M1G, {
                        enabled: !z,
                        children: (0, l.jsx)(em, { channel: c, firstMessage: j, facepileRef: R }),
                    }),
                ],
            }),
        ],
    });
});
function ec(e) {
    let { channel: t, firstMessage: n, content: i, hasMediaAttachment: s, originalAuthor: r } = e,
        { hasUnreads: o } = (0, S.X5)(t);
    return (0, l.jsxs)("div", {
        className: a()(ea.rf, er.rf),
        children: [
            (0, l.jsx)(w.Ay, { channel: t }),
            (0, l.jsx)("div", {
                className: (er.iU, ea.iU),
                children: (0, l.jsx)(eu, {
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
let eu = i.memo(function (e) {
    let { message: t, channel: n, content: i, hasMediaAttachment: s, hasUnreads: r, originalAuthor: o } = e,
        d = (0, h.bG)([I.A], () => I.A.isLoading(n.id)),
        c = (0, h.bG)([X.A], () => X.A.can(el.xBc.MANAGE_MESSAGES, n)),
        u = K.gs.useSetting(),
        m = (0, h.bG)([Q.A], () => Q.A.getGuildId()),
        { contentPlaceholder: x, renderedContent: f } =
            null == t
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, V.o)(t, i, !1, !1, a()(er.BK, ea.BK, eo.tZ, eo.__invalid_smallFontSize), {
                      leadingIconClass: er.aG,
                      trailingIconClass: er.sl,
                      iconSize: ei.eJ,
                  }),
        _ =
            null != f
                ? (0, l.jsx)(g.Text, { variant: "text-md/normal", children: f })
                : s
                  ? null
                  : (0, l.jsx)(g.Text, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: r ? "text-default" : "text-muted",
                        className: a()(er.BK, ea.BK),
                        "aria-label": "",
                        children: null == t ? (d ? null : es.intl.string(es.t.mE3KJN)) : x,
                    });
    return (0, l.jsxs)(W.Bs.Provider, {
        value: (0, U.A)(u, c),
        children: [
            null != o
                ? (0, l.jsx)(g.euF, {
                      size: g._3J.SIZE_40,
                      src: o.getAvatarURL(m, (0, g.FT9)(g._3J.SIZE_40)),
                      "aria-label": "",
                      className: ea.Nd,
                  })
                : null,
            (0, l.jsxs)("div", {
                className: ea.IF,
                children: [
                    (0, l.jsx)(en.A, { channel: n, originalAuthor: o, message: t }),
                    (0, l.jsx)(g.M1G, { className: er.JY, children: _ }),
                ],
            }),
        ],
    });
});
function em(e) {
    let { channel: t, facepileRef: n, firstMessage: i } = e,
        { isNew: s } = (0, S.X5)(t),
        a = (0, A.Ay)(t),
        r = (0, C.m)(t.id),
        o = i?.reactions != null && i.reactions.length > 0;
    return (0, l.jsxs)("div", {
        className: ea.qr,
        children: [
            (0, l.jsxs)("div", {
                className: ea.JS,
                children: [
                    (0, l.jsx)(g.iFK, { size: "custom", width: 14, height: 14 }),
                    (0, l.jsx)(g.Text, { variant: "text-sm/medium", children: a }),
                    s
                        ? (0, l.jsx)(g.LpS, {
                              color: g.LU0.unsafe_rawColors.BRAND_260.css,
                              text: es.intl.string(es.t.y2b7CA),
                              className: ea.Ad,
                          })
                        : null,
                ],
            }),
            (0, l.jsxs)("div", {
                className: ea.PQ,
                children: [
                    o || null == i ? null : (0, l.jsx)(ex, { firstMessage: i, channel: t }),
                    (0, l.jsx)(eh, { channel: t, iconSize: 14 }),
                    (0, l.jsx)("span", { className: er.xE, children: "•" }),
                    r.length > 0
                        ? (0, l.jsxs)("div", {
                              className: er.IW,
                              children: [
                                  (0, l.jsx)(ef, { channel: t, userIds: r, facepileRef: n }),
                                  (0, l.jsx)("div", {
                                      className: er.r$,
                                      children: (0, l.jsx)(g.nvX, { themed: !0, dotRadius: 2 }),
                                  }),
                                  (0, l.jsx)(f.Ay, { channel: t, className: er.mD, renderDots: !1 }),
                              ],
                          })
                        : (0, l.jsx)(eg, { channel: t }),
                ],
            }),
        ],
    });
}
function eh(e) {
    let { channel: t, iconSize: n, showReadState: i = !1 } = e,
        { messageCountText: s, unreadCount: r } = (0, S.k6)(t);
    return (0, l.jsxs)("div", {
        className: a()(er.Mv, { [er.hT]: i && null == r }),
        children: [
            (0, l.jsx)("span", {
                className: er.SZ,
                children: (0, l.jsx)(g.oyn, { size: "custom", color: "currentColor", width: n, height: n }),
            }),
            "number" == typeof s
                ? (0, l.jsx)(v.A, { value: s, digitWidth: 9, className: er.gv })
                : (0, l.jsx)("div", { className: er.gv, children: s }),
            null == r
                ? null
                : (0, l.jsxs)(g.Text, {
                      className: er.bU,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", es.intl.format(es.t.z3PEth, { count: r }), ")"],
                  }),
        ],
    });
}
function ex(e) {
    let { firstMessage: t, channel: n } = e,
        i = (0, h.bG)([$.A], () => $.A.getChannel(n.parent_id)),
        s = (0, S.Ck)(i),
        { disableReactionCreates: a, isLurking: r, isPendingMember: o } = (0, z.A)(n);
    return null == s || a
        ? null
        : (0, l.jsx)(B.qT, {
              className: er.vC,
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
              type: F.v.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function eg(e) {
    let { channel: t } = e,
        { sortOrder: n } = (0, N.R)(t.parent_id),
        i = (0, S.Mw)(t, n),
        s = t.threadMetadata?.createTimestamp,
        a = null == s ? null : es.intl.formatToPlainString(es.t["13euCd"], { timestamp: (0, ee.i$)(c()(s), "LLLL") });
    return (0, l.jsx)(x.m, {
        text: a,
        children: (0, l.jsx)(g.Text, {
            className: er.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: i,
        }),
    });
}
function ef(e) {
    let { channel: t, userIds: n, facepileRef: i } = e,
        s = (0, S.$I)(t, n);
    return (0, l.jsx)("div", {
        ref: i,
        children: (0, l.jsx)(p.Ay, {
            className: er.__invalid_facepile,
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
function e_(e) {
    let t,
        n,
        { firstMedia: i, shouldObscure: s, obscureReason: r, shouldShowAgeVerification: o } = e,
        d = (0, h.bG)([Z.A], () => Z.A.isFocused()),
        c = (0, D.ge)(i.src),
        u = K.kt.useSetting(),
        m = (0, O.rx)(r),
        { src: x, width: f, height: _, alt: p } = i;
    return (_ > f ? (n = 72) : (t = 72), o)
        ? (0, l.jsx)("div", {
              "aria-label": m ?? p ?? es.intl.string(es.t.hqwnc2),
              className: a()(er.iT, er.nh),
              style: { maxWidth: t, maxHeight: n, height: _, width: f },
          })
        : x.startsWith("data:")
          ? (0, l.jsx)(g._V3, {
                src: x,
                maxHeight: t,
                maxWidth: n,
                width: f,
                height: _,
                alt: null != p && s ? m : p,
                className: er.iT,
                imageClassName: a()({ [er.cd]: s, [er.LW]: !0 }),
            })
          : (0, H.LL)({
                src: x,
                maxHeight: t,
                maxWidth: n,
                width: f,
                height: _,
                alt: null != p && s ? m : p,
                autoPlay: u,
                animated: c && !s && d,
                srcIsAnimated: i.srcIsAnimated,
                containerClassName: er.iT,
                imageClassName: a()({ [er.cd]: s }),
                analyticsSource: "ForumPostMediaPreview",
            });
}
function ep(e) {
    let { channel: t, firstMedia: n } = e,
        [i, s] = (0, O.eJ)({ media: n, channel: t }),
        r = (0, T.qZ)(s);
    return (0, l.jsx)(g.M1G, {
        enabled: !0,
        children: (0, l.jsxs)("div", {
            className: a()(er.pV, ea.pV),
            onClick: function (e) {
                e.stopPropagation(),
                    r &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        j.A.showAgeVerificationGetStartedModal({ entryPoint: b.q1.FORUM_POST_MEDIA_PREVIEW }));
            },
            children: [
                (0, l.jsx)(e_, { firstMedia: n, shouldObscure: i, obscureReason: s, shouldShowAgeVerification: r }),
                i && (0, l.jsx)(R.A, { iconClassname: er.yo, obscureReason: s }),
            ],
        }),
    });
}
