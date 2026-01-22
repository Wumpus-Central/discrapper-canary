n.d(t, {
    $k: () => em,
    Ay: () => ec,
    Co: () => ea,
    NA: () => ep,
    T5: () => eo,
    cn: () => ef,
    gL: () => eb,
    hf: () => eu,
}),
    n(896048);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(284009),
    o = n.n(a),
    c = n(989349),
    d = n.n(c),
    u = n(942381),
    h = n(837381),
    g = n(311907),
    m = n(827734),
    p = n(990078),
    f = n(397927),
    v = n(147192),
    b = n(765671),
    A = n(570209),
    O = n(104171),
    x = n(935649),
    y = n(847599),
    j = n(114166),
    S = n(810181),
    C = n(390248),
    T = n(77350),
    w = n(294520),
    N = n(505527),
    P = n(863439),
    E = n(465364),
    I = n(467073),
    _ = n(652176),
    F = n(260821),
    k = n(448368),
    M = n(302031),
    R = n(253932),
    L = n(761640),
    D = n(734057),
    U = n(576705),
    G = n(994500),
    H = n(531685),
    B = n(405269),
    W = n(422844),
    V = n(435470),
    z = n(473503),
    q = n(969043),
    K = n(768953),
    X = n(710948),
    Z = n(218152),
    Y = n(313880),
    $ = n(52933),
    J = n(504261),
    Q = n(555540),
    ee = n(505234),
    et = n(652215),
    en = n(838541),
    ei = n(985018),
    es = n(558997),
    er = n(206314);
function el(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
let ea = 72,
    eo = 72,
    ec = s.memo(function (e) {
        let {
                threadId: t,
                goToThread: n,
                observePostVisibilityAnalytics: r,
                overrideMedia: a,
                className: c,
                containerWidth: d,
            } = e,
            {
                channel: m,
                isOpen: p,
                messageCount: v,
                firstMessage: A,
                content: O,
                media: x,
            } = (function (e) {
                let { threadId: t, overrideMedia: n } = e,
                    i = (0, g.bG)([D.A], () => D.A.getChannel(t));
                o()(null != i, "the thread should not be null here, a store must have missed an update");
                let s = (0, g.bG)([L.Ay], () => L.Ay.getCurrentSidebarChannelId(i.parent_id) === i.id),
                    { firstMessage: r } = (0, z.OA)(i),
                    { content: l, firstMedia: a } = (0, V.gk)({ firstMessage: r }),
                    { messageCountText: c } = (0, V.k6)(i);
                return {
                    channel: i,
                    isOpen: s,
                    messageCount: c,
                    firstMessage: r,
                    content: l,
                    media: null != n ? n : a,
                };
            })({
                threadId: t,
                overrideMedia: a,
            }),
            { ref: y, height: j } = (0, b.Ay)(),
            S = (0, Z.kU)((e) => e.setCardHeight, u.x);
        s.useEffect(() => {
            null != j && S(t, j);
        }, [j, S, t]),
            s.useEffect(() => {
                null == r || r(y.current, t);
            }, [y, r, t]);
        let C = s.useRef(null),
            { handleLeftClick: T, handleRightClick: w } = (0, ee.A)({
                facepileRef: C,
                goToThread: n,
                channel: m,
            }),
            N = (0, h.rm)(t),
            { role: P, onFocus: E } = N,
            I = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    s,
                    r = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (s = 0, n = Reflect.ownKeys(e); s < n.length; s++)
                        (i = n[s]),
                            !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
                    return r;
                }
                if (
                    ((r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            s = {},
                            r = Object.getOwnPropertyNames(e);
                        for (i = 0; i < r.length; i++)
                            (n = r[i]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (s[n] = e[n]);
                        return s;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
                        (i = n[s]),
                            !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
                return r;
            })(N, ["role", "onFocus"]),
            { isFocused: _, handleFocus: F, handleBlur: k } = (0, J.A)(E);
        return (0, i.jsxs)("div", {
            ref: y,
            "data-item-id": t,
            onClick: T,
            onContextMenu: w,
            className: l()(es.kL, c, { [es.nT]: p }),
            children: [
                (0, i.jsx)(
                    f.DUT,
                    el(
                        {
                            onClick: T,
                            focusProps: { ringTarget: y },
                            onContextMenu: w,
                            "aria-label": ei.intl.formatToPlainString(ei.t.pgYN6c, {
                                title: m.name,
                                count: v,
                            }),
                            className: es.Kv,
                            onFocus: F,
                            onBlur: k,
                        },
                        I,
                    ),
                ),
                (0, i.jsxs)("div", {
                    className: es.kb,
                    children: [
                        (0, i.jsx)(f.Fmo, {
                            children: (0, i.jsx)(ed, {
                                channel: m,
                                firstMessage: A,
                                content: O,
                                hasMediaAttachment: null != x,
                                containerWidth: d,
                            }),
                        }),
                        (0, i.jsx)(f.M1G, {
                            enabled: !_,
                            children: (0, i.jsx)(eg, {
                                channel: m,
                                firstMessage: A,
                                facepileRef: C,
                            }),
                        }),
                    ],
                }),
                (null == A ? void 0 : A.blocked) || null == x
                    ? null
                    : (0, i.jsx)(eO, {
                          channel: m,
                          firstMedia: x,
                      }),
            ],
        });
    });
function ed(e) {
    let { channel: t, firstMessage: n, content: s, hasMediaAttachment: r, containerWidth: a } = e,
        { isNew: o, hasUnreads: c } = (0, V.X5)(t),
        d = eu(t),
        { postTitleRef: u, isNewBadgeOverflow: h } = (0, Q.$)(o, 24, a);
    return (0, i.jsxs)("div", {
        className: es.rf,
        children: [
            (0, i.jsx)($.Ay, { channel: t }),
            (0, i.jsx)("div", {
                className: l()(es.wx, { [es.qN]: h }),
                children: (0, i.jsxs)("div", {
                    className: es.TK,
                    children: [
                        (0, i.jsx)(f.Heading, {
                            variant: "heading-lg/semibold",
                            color: c ? "text-strong" : "text-muted",
                            lineClamp: 2,
                            className: es.o$,
                            children: (0, i.jsxs)("span", {
                                ref: u,
                                children: [
                                    d,
                                    o &&
                                        (0, i.jsx)("span", {
                                            className: es.pr,
                                            children: (0, i.jsx)(f.LpS, {
                                                className: es.Ad,
                                                color: m.A.unsafe_rawColors.BRAND_260.css,
                                                text: ei.intl.string(ei.t.y2b7CA),
                                            }),
                                        }),
                                ],
                            }),
                        }),
                        o &&
                            h &&
                            (0, i.jsx)(f.LpS, {
                                className: es.Ad,
                                color: m.A.unsafe_rawColors.BRAND_260.css,
                                text: ei.intl.string(ei.t.y2b7CA),
                            }),
                    ],
                }),
            }),
            (0, i.jsx)("div", {
                className: es.iU,
                children: (0, i.jsx)(eh, {
                    channel: t,
                    message: n,
                    content: s,
                    hasMediaAttachment: r,
                    hasUnreads: c,
                }),
            }),
        ],
    });
}
function eu(e) {
    let t = (0, g.bG)([K.A], () => K.A.getHasSearchResults(e.parent_id)),
        n = (0, g.bG)([K.A], () => K.A.getSearchQuery(e.parent_id)),
        i = s.useMemo(() => (0, A.wG)(t && null != n ? n : "", !0), [t, n]);
    return s.useMemo(
        () =>
            (0, E.Ay)(
                {
                    content: e.name,
                    embeds: [],
                },
                { postProcessor: i },
            ).content,
        [e.name, i],
    );
}
let eh = s.memo(function (e) {
    let { message: t, channel: n, content: s, hasMediaAttachment: r, hasUnreads: a } = e,
        { isBlocked: o, isIgnored: c } = (0, g.cf)([G.A], () => ({
            isBlocked: null != t && G.A.isBlockedForMessage(t),
            isIgnored: null != t && G.A.isIgnoredForMessage(t),
        })),
        d = (0, g.bG)([q.A], () => q.A.isLoading(n.id)),
        u = (0, g.bG)([U.A], () => U.A.can(et.xBc.MANAGE_MESSAGES, n)),
        h = R.gs.useSetting(),
        m = null;
    if (o)
        m = (0, i.jsx)(f.Text, {
            className: es.Wv,
            variant: "text-sm/medium",
            color: "text-muted",
            children: ei.intl.string(ei.t.Lkp2fB),
        });
    else if (c)
        m = (0, i.jsx)(f.Text, {
            className: es.Wv,
            variant: "text-sm/medium",
            color: "text-muted",
            children: ei.intl.string(ei.t.yWK7ZM),
        });
    else {
        let { contentPlaceholder: e, renderedContent: n } =
            null == t
                ? {
                      contentPlaceholder: null,
                      renderedContent: null,
                  }
                : (0, k.o)(t, s, o, c, l()(es.BK, er.tZ, er.__invalid_smallFontSize), {
                      leadingIconClass: es.aG,
                      trailingIconClass: es.sl,
                      iconSize: en.eJ,
                  });
        m =
            null != n
                ? (0, i.jsx)(f.Text, {
                      variant: "text-sm/semibold",
                      color: a ? "text-default" : "text-muted",
                      children: n,
                  })
                : r
                  ? null
                  : (0, i.jsx)(f.Text, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: a ? "text-default" : "text-muted",
                        className: es.BK,
                        children: null == t ? (d ? null : ei.intl.string(ei.t.mE3KJN)) : e,
                    });
    }
    return (0, i.jsxs)(M.Bs.Provider, {
        value: (0, P.A)(h, u),
        children: [
            !o &&
                (0, i.jsx)(Y.A, {
                    channel: n,
                    message: t,
                    renderColon: null != m,
                    hasUnreads: a,
                }),
            (0, i.jsx)(f.M1G, {
                className: es.JY,
                children: m,
            }),
        ],
    });
});
function eg(e) {
    let { channel: t, facepileRef: n, firstMessage: s } = e,
        r = (0, S.m)(t.id),
        l = (null == s ? void 0 : s.reactions) != null && s.reactions.length > 0;
    return (0, i.jsxs)("div", {
        className: es.qr,
        children: [
            l || null == s
                ? null
                : (0, i.jsx)(ep, {
                      firstMessage: s,
                      channel: t,
                  }),
            null == s
                ? null
                : (0, i.jsx)(ef, {
                      firstMessage: s,
                      channel: t,
                  }),
            (0, i.jsx)(em, {
                channel: t,
                iconSize: 14,
            }),
            (0, i.jsx)("span", {
                className: es.xE,
                children: "\u2022",
            }),
            r.length > 0
                ? (0, i.jsxs)("div", {
                      className: es.IW,
                      children: [
                          (0, i.jsx)(eb, {
                              channel: t,
                              userIds: r,
                              facepileRef: n,
                          }),
                          (0, i.jsx)("div", {
                              className: es.r$,
                              children: (0, i.jsx)(f.nvX, {
                                  themed: !0,
                                  dotRadius: 2,
                              }),
                          }),
                          (0, i.jsx)(v.Ay, {
                              channel: t,
                              className: es.mD,
                              renderDots: !1,
                          }),
                      ],
                  })
                : (0, i.jsx)(ev, { channel: t }),
        ],
    });
}
function em(e) {
    let { channel: t, iconSize: n, showReadState: s = !1 } = e,
        { messageCountText: r, unreadCount: a } = (0, V.k6)(t);
    return (0, i.jsxs)("div", {
        className: l()(es.Mv, { [es.hT]: s && null == a }),
        children: [
            (0, i.jsx)("span", {
                className: es.SZ,
                children: (0, i.jsx)(f.oyn, {
                    size: "custom",
                    color: "currentColor",
                    width: n,
                    height: n,
                }),
            }),
            "number" == typeof r
                ? (0, i.jsx)(j.A, {
                      value: r,
                      digitWidth: 9,
                      className: es.gv,
                  })
                : (0, i.jsx)("div", {
                      className: es.gv,
                      children: r,
                  }),
            null == a
                ? null
                : (0, i.jsxs)(f.Text, {
                      className: es.bU,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", ei.intl.format(ei.t.z3PEth, { count: a }), ")"],
                  }),
        ],
    });
}
function ep(e) {
    let { firstMessage: t, channel: n } = e,
        s = (0, g.bG)([D.A], () => D.A.getChannel(n.parent_id)),
        r = (0, V.Ck)(s),
        { disableReactionCreates: l, isLurking: a, isPendingMember: o } = (0, I.A)(n);
    return null == r || l
        ? null
        : (0, i.jsx)(F.qT, {
              className: es.vC,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: a,
              isPendingMember: o,
              emoji: r,
              hideCount: !0,
              count: 0,
              burst_count: 0,
              me: !1,
              me_burst: !1,
              type: N.v.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function ef(e) {
    var t;
    let { firstMessage: n, channel: s } = e,
        r = (0, V.lQ)(n),
        { disableReactionUpdates: l, isLurking: a, isPendingMember: o } = (0, I.A)(s);
    return null == r
        ? null
        : (0, i.jsx)(
              F.qT,
              el(
                  {
                      className: es.vC,
                      message: n,
                      readOnly: l || s.isArchivedLockedThread(),
                      isLurking: a,
                      isPendingMember: o,
                      useChatFontScaling: !1,
                      type: r.burst_count >= r.count ? N.v.BURST : N.v.NORMAL,
                      emojiSize: "reaction",
                      emojiSizeTooltip: "reaction",
                  },
                  r,
              ),
              "".concat(null != (t = r.emoji.id) ? t : 0, ":").concat(r.emoji.name),
          );
}
function ev(e) {
    var t;
    let { channel: n } = e,
        { sortOrder: s } = (0, W.R)(n.parent_id),
        r = (0, V.Mw)(n, s),
        l = null == (t = n.threadMetadata) ? void 0 : t.createTimestamp,
        a = null == l ? null : ei.intl.formatToPlainString(ei.t["13euCd"], { timestamp: (0, B.i$)(d()(l), "LLLL") });
    return (0, i.jsx)(p.m, {
        text: a,
        children: (0, i.jsx)(f.Text, {
            className: es.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: r,
        }),
    });
}
function eb(e) {
    let { channel: t, userIds: n, facepileRef: s } = e,
        r = (0, V.$I)(t, n);
    return (0, i.jsx)("div", {
        ref: s,
        children: (0, i.jsx)(O.Ay, {
            className: es.__invalid_facepile,
            showDefaultAvatarsForNullUsers: !0,
            guildId: t.guild_id,
            users: r,
            max: 5,
            size: 16,
            hideMoreUsers: !0,
            showUserPopout: !0,
        }),
    });
}
function eA(e) {
    let { firstMedia: t, shouldObscure: n, obscureReason: s, shouldShowAgeVerification: r } = e,
        a = (0, g.bG)([H.A], () => H.A.isFocused()),
        o = (0, T.ge)(t.src),
        c = R.kt.useSetting(),
        d = (0, w.rx)(s),
        { src: u, width: h, height: m, alt: p } = t;
    if (r) {
        var v;
        return (0, i.jsx)("div", {
            "aria-label": null != (v = null != d ? d : p) ? v : ei.intl.string(ei.t.hqwnc2),
            className: l()(es.iT, es.nh),
            style: {
                maxWidth: eo,
                maxHeight: ea,
                height: m,
                width: h,
            },
        });
    }
    return u.startsWith("data:")
        ? (0, i.jsx)(f._V3, {
              src: u,
              width: h,
              height: m,
              minWidth: eo,
              minHeight: ea,
              alt: null != p && n ? d : p,
              className: es.iT,
              imageClassName: l()(es.LW, { [es.cd]: n }),
          })
        : (0, _.LL)({
              src: u,
              width: h,
              height: m,
              minWidth: eo,
              minHeight: ea,
              alt: null != p && n ? d : p,
              autoPlay: c,
              animated: o && !n && a,
              srcIsAnimated: t.srcIsAnimated,
              containerClassName: es.iT,
              imageClassName: l()(es.LW, { [es.cd]: n }),
              analyticsSource: "ForumPostMediaPreview",
          });
}
function eO(e) {
    let { channel: t, firstMedia: n } = e,
        [s, r] = (0, w.eJ)({
            media: n,
            channel: t,
        }),
        l = (0, C.qZ)(r);
    return (0, i.jsx)(f.M1G, {
        enabled: !0,
        children: (0, i.jsxs)("div", {
            className: es.pV,
            onClick: function (e) {
                e.stopPropagation(),
                    l &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        x.A.showAgeVerificationGetStartedModal({ entryPoint: y.q1.FORUM_POST_MEDIA_PREVIEW }));
            },
            children: [
                (0, i.jsx)(eA, {
                    firstMedia: n,
                    shouldObscure: s,
                    obscureReason: r,
                    shouldShowAgeVerification: l,
                }),
                s &&
                    (0, i.jsx)(X.A, {
                        iconClassname: es.yo,
                        obscureReason: r,
                    }),
            ],
        }),
    });
}
