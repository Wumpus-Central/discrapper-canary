s.d(t, {
    $k: () => eg,
    Ay: () => ed,
    Co: () => er,
    NA: () => ex,
    T5: () => eo,
    cn: () => eA,
    gL: () => ep,
    hf: () => eu,
});
var n = s(627968),
    l = s(64700),
    a = s(503698),
    i = s.n(a),
    r = s(284009),
    o = s.n(r),
    d = s(989349),
    c = s.n(d),
    u = s(942381),
    h = s(837381),
    m = s(311907),
    g = s(827734),
    x = s(990078),
    A = s(397927),
    f = s(147192),
    p = s(765671),
    C = s(570209),
    S = s(104171),
    v = s(935649),
    j = s(847599),
    T = s(114166),
    N = s(47167),
    b = s(810181),
    F = s(390248),
    _ = s(77350),
    M = s(294520),
    y = s(505527),
    I = s(863439),
    k = s(465364),
    w = s(467073),
    L = s(652176),
    O = s(260821),
    P = s(448368),
    E = s(302031),
    R = s(253932),
    G = s(761640),
    H = s(734057),
    U = s(576705),
    D = s(994500),
    z = s(531685),
    B = s(405269),
    W = s(200463),
    q = s(435470),
    V = s(473503),
    $ = s(969043),
    K = s(768953),
    J = s(710948),
    X = s(218152),
    Z = s(313880),
    Q = s(52933),
    Y = s(504261),
    ee = s(555540),
    et = s(505234),
    es = s(652215),
    en = s(838541),
    el = s(985018),
    ea = s(641031),
    ei = s(830684);
let er = 72,
    eo = 72,
    ed = l.memo(function (e) {
        let {
                threadId: t,
                goToThread: s,
                observePostVisibilityAnalytics: a,
                overrideMedia: r,
                className: d,
                containerWidth: c,
            } = e,
            {
                channel: g,
                isOpen: x,
                messageCount: f,
                firstMessage: C,
                content: S,
                media: v,
            } = (function (e) {
                let { threadId: t, overrideMedia: s } = e,
                    n = (0, m.bG)([H.A], () => H.A.getChannel(t));
                o()(null != n, "the thread should not be null here, a store must have missed an update");
                let l = (0, m.bG)([G.Ay], () => G.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id),
                    { firstMessage: a } = (0, V.OA)(n),
                    { content: i, firstMedia: r } = (0, q.gk)({ firstMessage: a }),
                    { messageCountText: d } = (0, q.k6)(n);
                return { channel: n, isOpen: l, messageCount: d, firstMessage: a, content: i, media: s ?? r };
            })({ threadId: t, overrideMedia: r }),
            j = (0, N.Ay)(g),
            { ref: T, height: b } = (0, p.Ay)(),
            F = (0, X.kU)((e) => e.setCardHeight, u.x);
        l.useEffect(() => {
            null != b && F(t, b);
        }, [b, F, t]),
            l.useEffect(() => {
                a?.(T.current, t);
            }, [T, a, t]);
        let _ = l.useRef(null),
            { handleLeftClick: M, handleRightClick: y } = (0, et.A)({ facepileRef: _, goToThread: s, channel: g }),
            { role: I, onFocus: k, ...w } = (0, h.rm)(t),
            { isFocused: L, handleFocus: O, handleBlur: P } = (0, Y.A)(k);
        return (0, n.jsxs)("div", {
            ref: T,
            "data-item-id": t,
            onClick: M,
            onContextMenu: y,
            className: i()(ea.kL, d, { [ea.nT]: x }),
            children: [
                (0, n.jsx)(A.DUT, {
                    onClick: M,
                    focusProps: { ringTarget: T },
                    onContextMenu: y,
                    "aria-label": el.intl.formatToPlainString(el.t.pgYN6c, { title: j ?? "", count: f }),
                    className: ea.Kv,
                    onFocus: O,
                    onBlur: P,
                    ...w,
                }),
                (0, n.jsxs)("div", {
                    className: ea.kb,
                    children: [
                        (0, n.jsx)(A.Fmo, {
                            children: (0, n.jsx)(ec, {
                                channel: g,
                                firstMessage: C,
                                content: S,
                                hasMediaAttachment: null != v,
                                containerWidth: c,
                            }),
                        }),
                        (0, n.jsx)(A.M1G, {
                            enabled: !L,
                            children: (0, n.jsx)(em, { channel: g, firstMessage: C, facepileRef: _ }),
                        }),
                    ],
                }),
                C?.blocked || null == v ? null : (0, n.jsx)(eS, { channel: g, firstMedia: v }),
            ],
        });
    });
function ec(e) {
    let { channel: t, firstMessage: s, content: l, hasMediaAttachment: a, containerWidth: r } = e,
        { isNew: o, hasUnreads: d } = (0, q.X5)(t),
        c = eu(t),
        { postTitleRef: u, isNewBadgeOverflow: h } = (0, ee.$)(o, 24, r);
    return (0, n.jsxs)("div", {
        className: ea.rf,
        children: [
            (0, n.jsx)(Q.Ay, { channel: t }),
            (0, n.jsx)("div", {
                className: i()(ea.wx, { [ea.qN]: h }),
                children: (0, n.jsxs)("div", {
                    className: ea.TK,
                    children: [
                        (0, n.jsx)(A.Heading, {
                            variant: "heading-lg/semibold",
                            color: d ? "text-strong" : "text-muted",
                            lineClamp: 2,
                            className: ea.o$,
                            children: (0, n.jsxs)("span", {
                                ref: u,
                                children: [
                                    c,
                                    o &&
                                        (0, n.jsx)("span", {
                                            className: ea.pr,
                                            children: (0, n.jsx)(A.LpS, {
                                                className: ea.Ad,
                                                color: g.A.unsafe_rawColors.BRAND_260.css,
                                                text: el.intl.string(el.t.y2b7CA),
                                            }),
                                        }),
                                ],
                            }),
                        }),
                        o &&
                            h &&
                            (0, n.jsx)(A.LpS, {
                                className: ea.Ad,
                                color: g.A.unsafe_rawColors.BRAND_260.css,
                                text: el.intl.string(el.t.y2b7CA),
                            }),
                    ],
                }),
            }),
            (0, n.jsx)("div", {
                className: ea.iU,
                children: (0, n.jsx)(eh, { channel: t, message: s, content: l, hasMediaAttachment: a, hasUnreads: d }),
            }),
        ],
    });
}
function eu(e) {
    let t = (0, N.Ay)(e),
        s = (0, m.bG)([K.A], () => K.A.getHasSearchResults(e.parent_id)),
        n = (0, m.bG)([K.A], () => K.A.getSearchQuery(e.parent_id)),
        a = l.useMemo(() => (0, C.wG)(s && null != n ? n : "", !0), [s, n]);
    return l.useMemo(() => (0, k.Ay)({ content: t ?? "", embeds: [] }, { postProcessor: a }).content, [t, a]);
}
let eh = l.memo(function (e) {
    let { message: t, channel: s, content: l, hasMediaAttachment: a, hasUnreads: r } = e,
        { isBlocked: o, isIgnored: d } = (0, m.cf)([D.A], () => ({
            isBlocked: null != t && D.A.isBlockedForMessage(t),
            isIgnored: null != t && D.A.isIgnoredForMessage(t),
        })),
        c = (0, m.bG)([$.A], () => $.A.isLoading(s.id)),
        u = (0, m.bG)([U.A], () => U.A.can(es.xBc.MANAGE_MESSAGES, s)),
        h = R.gs.useSetting(),
        g = null;
    if (o)
        g = (0, n.jsx)(A.Text, {
            className: ea.Wv,
            variant: "text-sm/medium",
            color: "text-muted",
            children: el.intl.string(el.t.Lkp2fB),
        });
    else if (d)
        g = (0, n.jsx)(A.Text, {
            className: ea.Wv,
            variant: "text-sm/medium",
            color: "text-muted",
            children: el.intl.string(el.t.yWK7ZM),
        });
    else {
        let { contentPlaceholder: e, renderedContent: s } =
            null == t
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, P.o)(t, l, o, d, i()(ea.BK, ei.tZ, ei.__invalid_smallFontSize), {
                      leadingIconClass: ea.aG,
                      trailingIconClass: ea.sl,
                      iconSize: en.eJ,
                  });
        g =
            null != s
                ? (0, n.jsx)(A.Text, {
                      variant: "text-sm/semibold",
                      color: r ? "text-default" : "text-muted",
                      children: s,
                  })
                : a
                  ? null
                  : (0, n.jsx)(A.Text, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: r ? "text-default" : "text-muted",
                        className: ea.BK,
                        children: null == t ? (c ? null : el.intl.string(el.t.mE3KJN)) : e,
                    });
    }
    return (0, n.jsxs)(E.Bs.Provider, {
        value: (0, I.A)(h, u),
        children: [
            !o && (0, n.jsx)(Z.A, { channel: s, message: t, renderColon: null != g, hasUnreads: r }),
            (0, n.jsx)(A.M1G, { className: ea.JY, children: g }),
        ],
    });
});
function em(e) {
    let { channel: t, facepileRef: s, firstMessage: l } = e,
        a = (0, b.m)(t.id),
        i = l?.reactions != null && l.reactions.length > 0;
    return (0, n.jsxs)("div", {
        className: ea.qr,
        children: [
            i || null == l ? null : (0, n.jsx)(ex, { firstMessage: l, channel: t }),
            null == l ? null : (0, n.jsx)(eA, { firstMessage: l, channel: t }),
            (0, n.jsx)(eg, { channel: t, iconSize: 14 }),
            (0, n.jsx)("span", { className: ea.xE, children: "•" }),
            a.length > 0
                ? (0, n.jsxs)("div", {
                      className: ea.IW,
                      children: [
                          (0, n.jsx)(ep, { channel: t, userIds: a, facepileRef: s }),
                          (0, n.jsx)("div", {
                              className: ea.r$,
                              children: (0, n.jsx)(A.nvX, { themed: !0, dotRadius: 2 }),
                          }),
                          (0, n.jsx)(f.Ay, { channel: t, className: ea.mD, renderDots: !1 }),
                      ],
                  })
                : (0, n.jsx)(ef, { channel: t }),
        ],
    });
}
function eg(e) {
    let { channel: t, iconSize: s, showReadState: l = !1 } = e,
        { messageCountText: a, unreadCount: r } = (0, q.k6)(t);
    return (0, n.jsxs)("div", {
        className: i()(ea.Mv, { [ea.hT]: l && null == r }),
        children: [
            (0, n.jsx)("span", {
                className: ea.SZ,
                children: (0, n.jsx)(A.oyn, { size: "custom", color: "currentColor", width: s, height: s }),
            }),
            "number" == typeof a
                ? (0, n.jsx)(T.A, { value: a, digitWidth: 9, className: ea.gv })
                : (0, n.jsx)("div", { className: ea.gv, children: a }),
            null == r
                ? null
                : (0, n.jsxs)(A.Text, {
                      className: ea.bU,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", el.intl.format(el.t.z3PEth, { count: r }), ")"],
                  }),
        ],
    });
}
function ex(e) {
    let { firstMessage: t, channel: s } = e,
        l = (0, m.bG)([H.A], () => H.A.getChannel(s.parent_id)),
        a = (0, q.Ck)(l),
        { disableReactionCreates: i, isLurking: r, isPendingMember: o } = (0, w.A)(s);
    return null == a || i
        ? null
        : (0, n.jsx)(O.qT, {
              className: ea.vC,
              message: t,
              readOnly: s.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: r,
              isPendingMember: o,
              emoji: a,
              hideCount: !0,
              count: 0,
              burst_count: 0,
              me: !1,
              me_burst: !1,
              type: y.v.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function eA(e) {
    let { firstMessage: t, channel: s } = e,
        l = (0, q.lQ)(t),
        { disableReactionUpdates: a, isLurking: i, isPendingMember: r } = (0, w.A)(s);
    return null == l
        ? null
        : (0, n.jsx)(
              O.qT,
              {
                  className: ea.vC,
                  message: t,
                  readOnly: a || s.isArchivedLockedThread(),
                  isLurking: i,
                  isPendingMember: r,
                  useChatFontScaling: !1,
                  type: l.burst_count >= l.count ? y.v.BURST : y.v.NORMAL,
                  emojiSize: "reaction",
                  emojiSizeTooltip: "reaction",
                  ...l,
              },
              `${l.emoji.id ?? 0}:${l.emoji.name}`,
          );
}
function ef(e) {
    let { channel: t } = e,
        { sortOrder: s } = (0, W.R)(t.parent_id),
        l = (0, q.Mw)(t, s),
        a = t.threadMetadata?.createTimestamp,
        i = null == a ? null : el.intl.formatToPlainString(el.t["13euCd"], { timestamp: (0, B.i$)(c()(a), "LLLL") });
    return (0, n.jsx)(x.m, {
        text: i,
        children: (0, n.jsx)(A.Text, {
            className: ea.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: l,
        }),
    });
}
function ep(e) {
    let { channel: t, userIds: s, facepileRef: l } = e,
        a = (0, q.$I)(t, s);
    return (0, n.jsx)("div", {
        ref: l,
        children: (0, n.jsx)(S.Ay, {
            className: ea.__invalid_facepile,
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
function eC(e) {
    let { firstMedia: t, shouldObscure: s, obscureReason: l, shouldShowAgeVerification: a } = e,
        r = (0, m.bG)([z.A], () => z.A.isFocused()),
        o = (0, _.ge)(t.src),
        d = R.kt.useSetting(),
        c = (0, M.rx)(l),
        { src: u, width: h, height: g, alt: x } = t;
    return a
        ? (0, n.jsx)("div", {
              "aria-label": c ?? x ?? el.intl.string(el.t.hqwnc2),
              className: i()(ea.iT, ea.nh),
              style: { maxWidth: eo, maxHeight: er, height: g, width: h },
          })
        : u.startsWith("data:")
          ? (0, n.jsx)(A._V3, {
                src: u,
                width: h,
                height: g,
                minWidth: eo,
                minHeight: er,
                alt: null != x && s ? c : x,
                className: ea.iT,
                imageClassName: i()(ea.LW, { [ea.cd]: s }),
            })
          : (0, L.LL)({
                src: u,
                width: h,
                height: g,
                minWidth: eo,
                minHeight: er,
                alt: null != x && s ? c : x,
                autoPlay: d,
                animated: o && !s && r,
                srcIsAnimated: t.srcIsAnimated,
                containerClassName: ea.iT,
                imageClassName: i()(ea.LW, { [ea.cd]: s }),
                analyticsSource: "ForumPostMediaPreview",
            });
}
function eS(e) {
    let { channel: t, firstMedia: s } = e,
        [l, a] = (0, M.eJ)({ media: s, channel: t }),
        i = (0, F.qZ)(a);
    return (0, n.jsx)(A.M1G, {
        enabled: !0,
        children: (0, n.jsxs)("div", {
            className: ea.pV,
            onClick: function (e) {
                e.stopPropagation(),
                    i &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        v.A.showAgeVerificationGetStartedModal({ entryPoint: j.q1.FORUM_POST_MEDIA_PREVIEW }));
            },
            children: [
                (0, n.jsx)(eC, { firstMedia: s, shouldObscure: l, obscureReason: a, shouldShowAgeVerification: i }),
                l && (0, n.jsx)(J.A, { iconClassname: ea.yo, obscureReason: a }),
            ],
        }),
    });
}
