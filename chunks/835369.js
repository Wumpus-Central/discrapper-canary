s.d(t, {
    $k: () => em,
    Ay: () => eo,
    Co: () => ei,
    NA: () => eg,
    T5: () => er,
    cn: () => ex,
    gL: () => ef,
    hf: () => ec,
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
    N = s(810181),
    b = s(390248),
    _ = s(77350),
    F = s(294520),
    M = s(505527),
    y = s(863439),
    I = s(465364),
    k = s(467073),
    w = s(652176),
    L = s(260821),
    O = s(448368),
    P = s(302031),
    E = s(253932),
    R = s(761640),
    G = s(734057),
    H = s(576705),
    D = s(994500),
    U = s(531685),
    z = s(405269),
    B = s(422844),
    W = s(435470),
    q = s(473503),
    V = s(969043),
    $ = s(768953),
    K = s(710948),
    J = s(218152),
    X = s(313880),
    Z = s(52933),
    Q = s(504261),
    Y = s(555540),
    ee = s(505234),
    et = s(652215),
    es = s(838541),
    en = s(985018),
    el = s(558997),
    ea = s(206314);
let ei = 72,
    er = 72,
    eo = l.memo(function (e) {
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
                    n = (0, m.bG)([G.A], () => G.A.getChannel(t));
                o()(null != n, "the thread should not be null here, a store must have missed an update");
                let l = (0, m.bG)([R.Ay], () => R.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id),
                    { firstMessage: a } = (0, q.OA)(n),
                    { content: i, firstMedia: r } = (0, W.gk)({ firstMessage: a }),
                    { messageCountText: d } = (0, W.k6)(n);
                return { channel: n, isOpen: l, messageCount: d, firstMessage: a, content: i, media: s ?? r };
            })({ threadId: t, overrideMedia: r }),
            { ref: j, height: T } = (0, p.Ay)(),
            N = (0, J.kU)((e) => e.setCardHeight, u.x);
        l.useEffect(() => {
            null != T && N(t, T);
        }, [T, N, t]),
            l.useEffect(() => {
                a?.(j.current, t);
            }, [j, a, t]);
        let b = l.useRef(null),
            { handleLeftClick: _, handleRightClick: F } = (0, ee.A)({ facepileRef: b, goToThread: s, channel: g }),
            { role: M, onFocus: y, ...I } = (0, h.rm)(t),
            { isFocused: k, handleFocus: w, handleBlur: L } = (0, Q.A)(y);
        return (0, n.jsxs)("div", {
            ref: j,
            "data-item-id": t,
            onClick: _,
            onContextMenu: F,
            className: i()(el.kL, d, { [el.nT]: x }),
            children: [
                (0, n.jsx)(A.DUT, {
                    onClick: _,
                    focusProps: { ringTarget: j },
                    onContextMenu: F,
                    "aria-label": en.intl.formatToPlainString(en.t.pgYN6c, { title: g.name, count: f }),
                    className: el.Kv,
                    onFocus: w,
                    onBlur: L,
                    ...I,
                }),
                (0, n.jsxs)("div", {
                    className: el.kb,
                    children: [
                        (0, n.jsx)(A.Fmo, {
                            children: (0, n.jsx)(ed, {
                                channel: g,
                                firstMessage: C,
                                content: S,
                                hasMediaAttachment: null != v,
                                containerWidth: c,
                            }),
                        }),
                        (0, n.jsx)(A.M1G, {
                            enabled: !k,
                            children: (0, n.jsx)(eh, { channel: g, firstMessage: C, facepileRef: b }),
                        }),
                    ],
                }),
                C?.blocked || null == v ? null : (0, n.jsx)(eC, { channel: g, firstMedia: v }),
            ],
        });
    });
function ed(e) {
    let { channel: t, firstMessage: s, content: l, hasMediaAttachment: a, containerWidth: r } = e,
        { isNew: o, hasUnreads: d } = (0, W.X5)(t),
        c = ec(t),
        { postTitleRef: u, isNewBadgeOverflow: h } = (0, Y.$)(o, 24, r);
    return (0, n.jsxs)("div", {
        className: el.rf,
        children: [
            (0, n.jsx)(Z.Ay, { channel: t }),
            (0, n.jsx)("div", {
                className: i()(el.wx, { [el.qN]: h }),
                children: (0, n.jsxs)("div", {
                    className: el.TK,
                    children: [
                        (0, n.jsx)(A.Heading, {
                            variant: "heading-lg/semibold",
                            color: d ? "text-strong" : "text-muted",
                            lineClamp: 2,
                            className: el.o$,
                            children: (0, n.jsxs)("span", {
                                ref: u,
                                children: [
                                    c,
                                    o &&
                                        (0, n.jsx)("span", {
                                            className: el.pr,
                                            children: (0, n.jsx)(A.LpS, {
                                                className: el.Ad,
                                                color: g.A.unsafe_rawColors.BRAND_260.css,
                                                text: en.intl.string(en.t.y2b7CA),
                                            }),
                                        }),
                                ],
                            }),
                        }),
                        o &&
                            h &&
                            (0, n.jsx)(A.LpS, {
                                className: el.Ad,
                                color: g.A.unsafe_rawColors.BRAND_260.css,
                                text: en.intl.string(en.t.y2b7CA),
                            }),
                    ],
                }),
            }),
            (0, n.jsx)("div", {
                className: el.iU,
                children: (0, n.jsx)(eu, { channel: t, message: s, content: l, hasMediaAttachment: a, hasUnreads: d }),
            }),
        ],
    });
}
function ec(e) {
    let t = (0, m.bG)([$.A], () => $.A.getHasSearchResults(e.parent_id)),
        s = (0, m.bG)([$.A], () => $.A.getSearchQuery(e.parent_id)),
        n = l.useMemo(() => (0, C.wG)(t && null != s ? s : "", !0), [t, s]);
    return l.useMemo(() => (0, I.Ay)({ content: e.name, embeds: [] }, { postProcessor: n }).content, [e.name, n]);
}
let eu = l.memo(function (e) {
    let { message: t, channel: s, content: l, hasMediaAttachment: a, hasUnreads: r } = e,
        { isBlocked: o, isIgnored: d } = (0, m.cf)([D.A], () => ({
            isBlocked: null != t && D.A.isBlockedForMessage(t),
            isIgnored: null != t && D.A.isIgnoredForMessage(t),
        })),
        c = (0, m.bG)([V.A], () => V.A.isLoading(s.id)),
        u = (0, m.bG)([H.A], () => H.A.can(et.xBc.MANAGE_MESSAGES, s)),
        h = E.gs.useSetting(),
        g = null;
    if (o)
        g = (0, n.jsx)(A.Text, {
            className: el.Wv,
            variant: "text-sm/medium",
            color: "text-muted",
            children: en.intl.string(en.t.Lkp2fB),
        });
    else if (d)
        g = (0, n.jsx)(A.Text, {
            className: el.Wv,
            variant: "text-sm/medium",
            color: "text-muted",
            children: en.intl.string(en.t.yWK7ZM),
        });
    else {
        let { contentPlaceholder: e, renderedContent: s } =
            null == t
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, O.o)(t, l, o, d, i()(el.BK, ea.tZ, ea.__invalid_smallFontSize), {
                      leadingIconClass: el.aG,
                      trailingIconClass: el.sl,
                      iconSize: es.eJ,
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
                        className: el.BK,
                        children: null == t ? (c ? null : en.intl.string(en.t.mE3KJN)) : e,
                    });
    }
    return (0, n.jsxs)(P.Bs.Provider, {
        value: (0, y.A)(h, u),
        children: [
            !o && (0, n.jsx)(X.A, { channel: s, message: t, renderColon: null != g, hasUnreads: r }),
            (0, n.jsx)(A.M1G, { className: el.JY, children: g }),
        ],
    });
});
function eh(e) {
    let { channel: t, facepileRef: s, firstMessage: l } = e,
        a = (0, N.m)(t.id),
        i = l?.reactions != null && l.reactions.length > 0;
    return (0, n.jsxs)("div", {
        className: el.qr,
        children: [
            i || null == l ? null : (0, n.jsx)(eg, { firstMessage: l, channel: t }),
            null == l ? null : (0, n.jsx)(ex, { firstMessage: l, channel: t }),
            (0, n.jsx)(em, { channel: t, iconSize: 14 }),
            (0, n.jsx)("span", { className: el.xE, children: "•" }),
            a.length > 0
                ? (0, n.jsxs)("div", {
                      className: el.IW,
                      children: [
                          (0, n.jsx)(ef, { channel: t, userIds: a, facepileRef: s }),
                          (0, n.jsx)("div", {
                              className: el.r$,
                              children: (0, n.jsx)(A.nvX, { themed: !0, dotRadius: 2 }),
                          }),
                          (0, n.jsx)(f.Ay, { channel: t, className: el.mD, renderDots: !1 }),
                      ],
                  })
                : (0, n.jsx)(eA, { channel: t }),
        ],
    });
}
function em(e) {
    let { channel: t, iconSize: s, showReadState: l = !1 } = e,
        { messageCountText: a, unreadCount: r } = (0, W.k6)(t);
    return (0, n.jsxs)("div", {
        className: i()(el.Mv, { [el.hT]: l && null == r }),
        children: [
            (0, n.jsx)("span", {
                className: el.SZ,
                children: (0, n.jsx)(A.oyn, { size: "custom", color: "currentColor", width: s, height: s }),
            }),
            "number" == typeof a
                ? (0, n.jsx)(T.A, { value: a, digitWidth: 9, className: el.gv })
                : (0, n.jsx)("div", { className: el.gv, children: a }),
            null == r
                ? null
                : (0, n.jsxs)(A.Text, {
                      className: el.bU,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", en.intl.format(en.t.z3PEth, { count: r }), ")"],
                  }),
        ],
    });
}
function eg(e) {
    let { firstMessage: t, channel: s } = e,
        l = (0, m.bG)([G.A], () => G.A.getChannel(s.parent_id)),
        a = (0, W.Ck)(l),
        { disableReactionCreates: i, isLurking: r, isPendingMember: o } = (0, k.A)(s);
    return null == a || i
        ? null
        : (0, n.jsx)(L.qT, {
              className: el.vC,
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
              type: M.v.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function ex(e) {
    let { firstMessage: t, channel: s } = e,
        l = (0, W.lQ)(t),
        { disableReactionUpdates: a, isLurking: i, isPendingMember: r } = (0, k.A)(s);
    return null == l
        ? null
        : (0, n.jsx)(
              L.qT,
              {
                  className: el.vC,
                  message: t,
                  readOnly: a || s.isArchivedLockedThread(),
                  isLurking: i,
                  isPendingMember: r,
                  useChatFontScaling: !1,
                  type: l.burst_count >= l.count ? M.v.BURST : M.v.NORMAL,
                  emojiSize: "reaction",
                  emojiSizeTooltip: "reaction",
                  ...l,
              },
              `${l.emoji.id ?? 0}:${l.emoji.name}`,
          );
}
function eA(e) {
    let { channel: t } = e,
        { sortOrder: s } = (0, B.R)(t.parent_id),
        l = (0, W.Mw)(t, s),
        a = t.threadMetadata?.createTimestamp,
        i = null == a ? null : en.intl.formatToPlainString(en.t["13euCd"], { timestamp: (0, z.i$)(c()(a), "LLLL") });
    return (0, n.jsx)(x.m, {
        text: i,
        children: (0, n.jsx)(A.Text, {
            className: el.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: l,
        }),
    });
}
function ef(e) {
    let { channel: t, userIds: s, facepileRef: l } = e,
        a = (0, W.$I)(t, s);
    return (0, n.jsx)("div", {
        ref: l,
        children: (0, n.jsx)(S.Ay, {
            className: el.__invalid_facepile,
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
function ep(e) {
    let { firstMedia: t, shouldObscure: s, obscureReason: l, shouldShowAgeVerification: a } = e,
        r = (0, m.bG)([U.A], () => U.A.isFocused()),
        o = (0, _.ge)(t.src),
        d = E.kt.useSetting(),
        c = (0, F.rx)(l),
        { src: u, width: h, height: g, alt: x } = t;
    return a
        ? (0, n.jsx)("div", {
              "aria-label": c ?? x ?? en.intl.string(en.t.hqwnc2),
              className: i()(el.iT, el.nh),
              style: { maxWidth: er, maxHeight: ei, height: g, width: h },
          })
        : u.startsWith("data:")
          ? (0, n.jsx)(A._V3, {
                src: u,
                width: h,
                height: g,
                minWidth: er,
                minHeight: ei,
                alt: null != x && s ? c : x,
                className: el.iT,
                imageClassName: i()(el.LW, { [el.cd]: s }),
            })
          : (0, w.LL)({
                src: u,
                width: h,
                height: g,
                minWidth: er,
                minHeight: ei,
                alt: null != x && s ? c : x,
                autoPlay: d,
                animated: o && !s && r,
                srcIsAnimated: t.srcIsAnimated,
                containerClassName: el.iT,
                imageClassName: i()(el.LW, { [el.cd]: s }),
                analyticsSource: "ForumPostMediaPreview",
            });
}
function eC(e) {
    let { channel: t, firstMedia: s } = e,
        [l, a] = (0, F.eJ)({ media: s, channel: t }),
        i = (0, b.qZ)(a);
    return (0, n.jsx)(A.M1G, {
        enabled: !0,
        children: (0, n.jsxs)("div", {
            className: el.pV,
            onClick: function (e) {
                e.stopPropagation(),
                    i &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        v.A.showAgeVerificationGetStartedModal({ entryPoint: j.q1.FORUM_POST_MEDIA_PREVIEW }));
            },
            children: [
                (0, n.jsx)(ep, { firstMedia: s, shouldObscure: l, obscureReason: a, shouldShowAgeVerification: i }),
                l && (0, n.jsx)(K.A, { iconClassname: el.yo, obscureReason: a }),
            ],
        }),
    });
}
