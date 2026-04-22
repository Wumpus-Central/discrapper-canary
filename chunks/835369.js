n.d(t, {
    $k: () => eC,
    Ay: () => eA,
    Co: () => ex,
    NA: () => eb,
    T5: () => ef,
    cn: () => ey,
    gL: () => e_,
    hf: () => ev,
});
var s = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    r = n(284009),
    c = n.n(r),
    o = n(989349),
    u = n.n(o),
    d = n(942381),
    h = n(837381),
    m = n(311907),
    g = n(827734),
    x = n(990078),
    f = n(939249),
    A = n(707554),
    j = n(247928),
    v = n(534514),
    p = n(777666),
    N = n(834730),
    C = n(863610),
    b = n(534890),
    y = n(673698),
    S = n(147192),
    _ = n(765671),
    M = n(570209),
    k = n(104171),
    E = n(935649),
    L = n(847599),
    T = n(114166),
    w = n(47167),
    P = n(810181),
    I = n(390248),
    R = n(77350),
    O = n(294520),
    F = n(505527),
    U = n(863439),
    z = n(465364),
    B = n(467073),
    G = n(652176),
    W = n(260821),
    D = n(448368),
    $ = n(302031),
    q = n(253932),
    K = n(761640),
    H = n(734057),
    J = n(576705),
    V = n(994500),
    Z = n(531685),
    Q = n(405269),
    X = n(200463),
    Y = n(435470),
    ee = n(473503),
    et = n(969043),
    en = n(768953),
    es = n(710948),
    el = n(218152),
    ea = n(313880),
    ei = n(52933),
    er = n(504261),
    ec = n(555540),
    eo = n(505234),
    eu = n(652215),
    ed = n(838541),
    eh = n(985018),
    em = n(330070),
    eg = n(992595);
let ex = 72,
    ef = 72,
    eA = l.memo(function (e) {
        let {
                threadId: t,
                goToThread: n,
                observePostVisibilityAnalytics: a,
                overrideMedia: r,
                className: o,
                containerWidth: u,
            } = e,
            {
                channel: g,
                isOpen: x,
                messageCount: v,
                firstMessage: p,
                content: N,
                media: C,
            } = (function (e) {
                let { threadId: t, overrideMedia: n } = e,
                    s = (0, m.bG)([H.A], () => H.A.getChannel(t));
                c()(null != s, "the thread should not be null here, a store must have missed an update");
                let l = (0, m.bG)([K.Ay], () => K.Ay.getCurrentSidebarChannelId(s.parent_id) === s.id),
                    { firstMessage: a } = (0, ee.OA)(s),
                    { content: i, firstMedia: r } = (0, Y.gk)({ firstMessage: a }),
                    { messageCountText: o } = (0, Y.k6)(s);
                return { channel: s, isOpen: l, messageCount: o, firstMessage: a, content: i, media: n ?? r };
            })({ threadId: t, overrideMedia: r }),
            b = (0, w.Ay)(g),
            { ref: y, height: S } = (0, _.Ay)(),
            M = (0, el.kU)((e) => e.setCardHeight, d.x);
        l.useEffect(() => {
            null != S && M(t, S);
        }, [S, M, t]),
            l.useEffect(() => {
                a?.(y.current, t);
            }, [y, a, t]);
        let k = l.useRef(null),
            { handleLeftClick: E, handleRightClick: L } = (0, eo.A)({ facepileRef: k, goToThread: n, channel: g }),
            { role: T, onFocus: P, ...I } = (0, h.rm)(t),
            { isFocused: R, handleFocus: O, handleBlur: F } = (0, er.A)(P);
        return (0, s.jsxs)("div", {
            ref: y,
            "data-item-id": t,
            onClick: E,
            onContextMenu: L,
            className: i()(em.kL, o, { [em.nT]: x }),
            children: [
                (0, s.jsx)(f.D, {
                    onClick: E,
                    focusProps: { ringTarget: y },
                    onContextMenu: L,
                    "aria-label": eh.intl.formatToPlainString(eh.t.pgYN6c, { title: b ?? "", count: v }),
                    className: em.Kv,
                    onFocus: O,
                    onBlur: F,
                    ...I,
                }),
                (0, s.jsxs)("div", {
                    className: em.kb,
                    children: [
                        (0, s.jsx)(A.F, {
                            children: (0, s.jsx)(ej, {
                                channel: g,
                                firstMessage: p,
                                content: N,
                                hasMediaAttachment: null != C,
                                containerWidth: u,
                            }),
                        }),
                        (0, s.jsx)(j.M, {
                            enabled: !R,
                            children: (0, s.jsx)(eN, { channel: g, firstMessage: p, facepileRef: k }),
                        }),
                    ],
                }),
                p?.blocked || null == C ? null : (0, s.jsx)(ek, { channel: g, firstMedia: C }),
            ],
        });
    });
function ej(e) {
    let { channel: t, firstMessage: n, content: l, hasMediaAttachment: a, containerWidth: r } = e,
        { isNew: c, hasUnreads: o } = (0, Y.X5)(t),
        u = ev(t),
        { postTitleRef: d, isNewBadgeOverflow: h } = (0, ec.$)(c, 24, r);
    return (0, s.jsxs)("div", {
        className: em.rf,
        children: [
            (0, s.jsx)(ei.Ay, { channel: t }),
            (0, s.jsx)("div", {
                className: i()(em.wx, { [em.qN]: h }),
                children: (0, s.jsxs)("div", {
                    className: em.TK,
                    children: [
                        (0, s.jsx)(v.D, {
                            variant: "heading-lg/semibold",
                            color: o ? "text-strong" : "text-muted",
                            lineClamp: 2,
                            className: em.o$,
                            children: (0, s.jsxs)("span", {
                                ref: d,
                                children: [
                                    u,
                                    c &&
                                        (0, s.jsx)("span", {
                                            className: em.pr,
                                            children: (0, s.jsx)(p.Lp, {
                                                className: em.Ad,
                                                color: g.A.unsafe_rawColors.BRAND_260.css,
                                                text: eh.intl.string(eh.t.y2b7CA),
                                            }),
                                        }),
                                ],
                            }),
                        }),
                        c &&
                            h &&
                            (0, s.jsx)(p.Lp, {
                                className: em.Ad,
                                color: g.A.unsafe_rawColors.BRAND_260.css,
                                text: eh.intl.string(eh.t.y2b7CA),
                            }),
                    ],
                }),
            }),
            (0, s.jsx)("div", {
                className: em.iU,
                children: (0, s.jsx)(ep, { channel: t, message: n, content: l, hasMediaAttachment: a, hasUnreads: o }),
            }),
        ],
    });
}
function ev(e) {
    let t = (0, w.Ay)(e),
        n = (0, m.bG)([en.A], () => en.A.getHasSearchResults(e.parent_id)),
        s = (0, m.bG)([en.A], () => en.A.getSearchQuery(e.parent_id)),
        a = l.useMemo(() => (0, M.wG)(n && null != s ? s : "", !0), [n, s]);
    return l.useMemo(() => (0, z.Ay)({ content: t ?? "", embeds: [] }, { postProcessor: a }).content, [t, a]);
}
let ep = l.memo(function (e) {
    let { message: t, channel: n, content: l, hasMediaAttachment: a, hasUnreads: r } = e,
        { isBlocked: c, isIgnored: o } = (0, m.cf)([V.A], () => ({
            isBlocked: null != t && V.A.isBlockedForMessage(t),
            isIgnored: null != t && V.A.isIgnoredForMessage(t),
        })),
        u = (0, m.bG)([et.A], () => et.A.isLoading(n.id)),
        d = (0, m.bG)([J.A], () => J.A.can(eu.xBc.MANAGE_MESSAGES, n)),
        h = q.gs.useSetting(),
        g = null;
    if (c)
        g = (0, s.jsx)(N.E, {
            className: em.Wv,
            variant: "text-sm/medium",
            color: "text-muted",
            children: eh.intl.string(eh.t.Lkp2fB),
        });
    else if (o)
        g = (0, s.jsx)(N.E, {
            className: em.Wv,
            variant: "text-sm/medium",
            color: "text-muted",
            children: eh.intl.string(eh.t.yWK7ZM),
        });
    else {
        let { contentPlaceholder: e, renderedContent: n } =
            null == t
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, D.o)(t, l, c, o, i()(em.BK, eg.tZ, eg.__invalid_smallFontSize), {
                      leadingIconClass: em.aG,
                      trailingIconClass: em.sl,
                      iconSize: ed.eJ,
                  });
        g =
            null != n
                ? (0, s.jsx)(N.E, {
                      variant: "text-sm/semibold",
                      color: r ? "text-default" : "text-muted",
                      children: n,
                  })
                : a
                  ? null
                  : (0, s.jsx)(N.E, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: r ? "text-default" : "text-muted",
                        className: em.BK,
                        children: null == t ? (u ? null : eh.intl.string(eh.t.mE3KJN)) : e,
                    });
    }
    return (0, s.jsxs)($.Bs.Provider, {
        value: (0, U.A)(h, d),
        children: [
            !c && (0, s.jsx)(ea.A, { channel: n, message: t, renderColon: null != g, hasUnreads: r }),
            (0, s.jsx)(j.M, { className: em.JY, children: g }),
        ],
    });
});
function eN(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        a = (0, P.m)(t.id),
        i = l?.reactions != null && l.reactions.length > 0;
    return (0, s.jsxs)("div", {
        className: em.qr,
        children: [
            i || null == l ? null : (0, s.jsx)(eb, { firstMessage: l, channel: t }),
            null == l ? null : (0, s.jsx)(ey, { firstMessage: l, channel: t }),
            (0, s.jsx)(eC, { channel: t, iconSize: 14 }),
            (0, s.jsx)("span", { className: em.xE, children: "•" }),
            a.length > 0
                ? (0, s.jsxs)("div", {
                      className: em.IW,
                      children: [
                          (0, s.jsx)(e_, { channel: t, userIds: a, facepileRef: n }),
                          (0, s.jsx)("div", {
                              className: em.r$,
                              children: (0, s.jsx)(C.n, { themed: !0, dotRadius: 2 }),
                          }),
                          (0, s.jsx)(S.Ay, { channel: t, className: em.mD, renderDots: !1 }),
                      ],
                  })
                : (0, s.jsx)(eS, { channel: t }),
        ],
    });
}
function eC(e) {
    let { channel: t, iconSize: n, showReadState: l = !1 } = e,
        { messageCountText: a, unreadCount: r } = (0, Y.k6)(t);
    return (0, s.jsxs)("div", {
        className: i()(em.Mv, { [em.hT]: l && null == r }),
        children: [
            (0, s.jsx)("span", {
                className: em.SZ,
                children: (0, s.jsx)(b.o, { size: "custom", color: "currentColor", width: n, height: n }),
            }),
            "number" == typeof a
                ? (0, s.jsx)(T.A, { value: a, digitWidth: 9, className: em.gv })
                : (0, s.jsx)("div", { className: em.gv, children: a }),
            null == r
                ? null
                : (0, s.jsxs)(N.E, {
                      className: em.bU,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", eh.intl.format(eh.t.z3PEth, { count: r }), ")"],
                  }),
        ],
    });
}
function eb(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, m.bG)([H.A], () => H.A.getChannel(n.parent_id)),
        a = (0, Y.Ck)(l),
        { disableReactionCreates: i, isLurking: r, isPendingMember: c } = (0, B.A)(n);
    return null == a || i
        ? null
        : (0, s.jsx)(W.qT, {
              className: em.vC,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: r,
              isPendingMember: c,
              emoji: a,
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
function ey(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, Y.lQ)(t),
        { disableReactionUpdates: a, isLurking: i, isPendingMember: r } = (0, B.A)(n);
    return null == l
        ? null
        : (0, s.jsx)(
              W.qT,
              {
                  className: em.vC,
                  message: t,
                  readOnly: a || n.isArchivedLockedThread(),
                  isLurking: i,
                  isPendingMember: r,
                  useChatFontScaling: !1,
                  type: l.burst_count >= l.count ? F.v.BURST : F.v.NORMAL,
                  emojiSize: "reaction",
                  emojiSizeTooltip: "reaction",
                  ...l,
              },
              `${l.emoji.id ?? 0}:${l.emoji.name}`,
          );
}
function eS(e) {
    let { channel: t } = e,
        { sortOrder: n } = (0, X.R)(t.parent_id),
        l = (0, Y.Mw)(t, n),
        a = t.threadMetadata?.createTimestamp,
        i = null == a ? null : eh.intl.formatToPlainString(eh.t["13euCd"], { timestamp: (0, Q.i$)(u()(a), "LLLL") });
    return (0, s.jsx)(x.m, {
        text: i,
        children: (0, s.jsx)(N.E, {
            className: em.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: l,
        }),
    });
}
function e_(e) {
    let { channel: t, userIds: n, facepileRef: l } = e,
        a = (0, Y.$I)(t, n);
    return (0, s.jsx)("div", {
        ref: l,
        children: (0, s.jsx)(k.Ay, {
            className: em.__invalid_facepile,
            showDefaultAvatarsForNullUsers: !0,
            guildId: t.guild_id,
            users: a,
            max: 5,
            size: 16,
            hideMoreUsers: !0,
            showUserPopout: !0,
        }),
    });
}
function eM(e) {
    let { firstMedia: t, shouldObscure: n, obscureReason: l, shouldShowAgeVerification: a } = e,
        r = (0, m.bG)([Z.A], () => Z.A.isFocused()),
        c = (0, R.ge)(t.src),
        o = q.kt.useSetting(),
        u = (0, O.rx)(l),
        { src: d, width: h, height: g, alt: x } = t;
    return a
        ? (0, s.jsx)("div", {
              "aria-label": u ?? x ?? eh.intl.string(eh.t.hqwnc2),
              className: i()(em.iT, em.nh),
              style: { maxWidth: ef, maxHeight: ex, height: g, width: h },
          })
        : d.startsWith("data:")
          ? (0, s.jsx)(y._, {
                src: d,
                width: h,
                height: g,
                minWidth: ef,
                minHeight: ex,
                alt: null != x && n ? u : x,
                className: em.iT,
                imageClassName: i()(em.LW, { [em.cd]: n }),
            })
          : (0, G.LL)({
                src: d,
                width: h,
                height: g,
                minWidth: ef,
                minHeight: ex,
                alt: null != x && n ? u : x,
                autoPlay: o,
                animated: c && !n && r,
                srcIsAnimated: t.srcIsAnimated,
                containerClassName: em.iT,
                imageClassName: i()(em.LW, { [em.cd]: n }),
                analyticsSource: "ForumPostMediaPreview",
            });
}
function ek(e) {
    let { channel: t, firstMedia: n } = e,
        [l, a] = (0, O.eJ)({ media: n, channel: t }),
        i = (0, I.qZ)(a);
    return (0, s.jsx)(j.M, {
        enabled: !0,
        children: (0, s.jsxs)("div", {
            className: em.pV,
            onClick: function (e) {
                e.stopPropagation(),
                    i &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        E.A.showAgeVerificationGetStartedModal({ entryPoint: L.q1.FORUM_POST_MEDIA_PREVIEW }));
            },
            children: [
                (0, s.jsx)(eM, { firstMedia: n, shouldObscure: l, obscureReason: a, shouldShowAgeVerification: i }),
                l && (0, s.jsx)(es.A, { iconClassname: em.yo, obscureReason: a }),
            ],
        }),
    });
}
