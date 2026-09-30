n.d(t, { $: () => eH, q: () => e$ });
var i = n(477900),
    l = n(582128),
    o = n(503698),
    a = n.n(o),
    r = n(284009),
    s = n.n(r),
    c = n(132500),
    u = n(935399),
    d = n(317097),
    m = n(17928),
    f = n(922016),
    g = n(939249),
    h = n(565645),
    p = n(765548),
    A = n(775602),
    E = n(114166),
    N = n(95561),
    I = n(776310),
    T = n(202091),
    j = n(615300),
    R = n(717421),
    x = n(21161),
    b = n(750506),
    v = n(147421),
    C = n(486020),
    S = n(690521),
    y = n(536283),
    O = n(889355);
let _ = [];
function L(e) {
    let { messageId: t, emoji: n, startPosition: o, targetPosition: a } = e,
        [r, s] = l.useState(0),
        [c, u] = l.useState(0),
        [d, m] = l.useState(null),
        { confettiCanvas: f } = l.useContext(x.x),
        g = (0, I.f9)(f, d),
        p = l.useMemo(
            () => [
                {
                    src: null == n.id ? S.Ay.getURL(n.name) : C.Ay.getEmojiURL({ id: n.id, animated: !1, size: 22 }),
                    colorize: !1,
                },
            ],
            [n.name, n.id],
        ),
        A = a.x - (a.width / 2) * 0.5,
        E = a.y - (a.height / 2) * 0.5,
        N = (0, R.z)({
            from: { y: o.y },
            to: { y: E },
            config: { duration: 450, easing: j.A.Easing.in(j.A.Easing.exp) },
            onChange: (e) => {
                let { y: t } = e;
                u(t);
            },
        }),
        L = (0, R.z)({
            from: { x: o.x, scale: 1, opacity: 1 },
            to: { x: A, scale: 0.5, opacity: 0.4 },
            config: { duration: 450, easing: j.A.Easing.in(j.A.Easing.ease) },
            onRest: () => {
                (0, v.p)(t, n.name, n.id);
            },
            onChange: (e) => {
                let { x: t } = e;
                s(t);
            },
        });
    return (
        l.useEffect(() => {
            r > 0 && c > 0 && g.createConfetti({ ...y.Mw, position: { type: "static", value: { x: r, y: c } } });
        }, [g, r, c]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(I.K_, { ref: m, sprites: p, colors: _, spriteWidth: y.wn, spriteHeight: y.wn }),
                (0, i.jsx)(b.Ay, {
                    children: (0, i.jsx)(T.animated.div, {
                        style: { ...N },
                        className: O.qq,
                        children: (0, i.jsx)(T.animated.div, {
                            style: { ...L, opacity: L.opacity },
                            children: (0, i.jsx)(h.A, {
                                className: O.Zg,
                                emojiId: n.id,
                                emojiName: n.name,
                                animated: n.animated,
                                size: "jumbo",
                            }),
                        }),
                    }),
                }),
            ],
        })
    );
}
var k = n(891734),
    M = n(202384),
    P = n(698405),
    U = n(435558),
    G = n.n(U),
    w = n(702841),
    D = n(3137),
    B = n(620141),
    H = n(19309),
    $ = n(224964),
    z = n(31408);
function V(e) {
    let { reactionRef: t, count: n } = e,
        i = l.useRef(n),
        o = (0, w.bG)([D.A], () => D.A.getState()),
        a = (0, $.A)();
    return (
        l.useEffect(() => {
            if (n > i.current) {
                let e = (0, H.A)(t.current);
                if (null != e) {
                    let t = (0, U.clamp)(n, o.confettiCount / 2, 2 * o.confettiCount);
                    a.fire(e.x, e.y, { count: t });
                }
            }
            i.current = n;
        }, [n, a, o.confettiCount, t]),
        null
    );
}
function J(e) {
    return (0, i.jsx)(B.A, { confettiLocation: z.k.REACTION, children: (0, i.jsx)(V, { ...e }) });
}
var W = n(10392),
    F = n(82498),
    X = n(32605),
    q = n(649963),
    Y = n(815807),
    Z = n(834730),
    K = n(403581),
    Q = n(404374),
    ee = n(505527),
    et = n(725807),
    en = n(287809),
    ei = n(158045),
    el = n(847374),
    eo = n(236285),
    ea = n(770335),
    er = n(624793),
    es = n(731383),
    ec = n(450707),
    eu = n(639245),
    ed = n(85935),
    em = n(71393),
    ef = n(967198),
    eg = n(375708),
    eh = n(961814);
function ep(e) {
    let {
        emojiId: t,
        expressionSourceGuild: n,
        hasJoinedExpressionSourceGuild: l,
        onClose: o,
        popoutData: a,
        currentGuildId: r,
        nonce: s,
    } = e;
    (0, es.i)({ emojiId: t, currentGuildId: r, popoutData: a, emojiSourceGuildId: n?.id, nonce: s });
    let c = n?.isDiscoverable() ?? !1,
        u = null != n && c,
        d = (n?.emojis?.length ?? 0) > 1;
    return u
        ? null == n
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", {
                          className: eh.h2,
                          children: (0, i.jsx)(eu.G7, {
                              expressionSourceGuild: n,
                              hasJoinedExpressionSourceGuild: l,
                              isDisplayingJoinGuildButtonInPopout: a.type === ec.u.JOIN_GUILD,
                              closePopout: o,
                          }),
                      }),
                      d &&
                          (0, i.jsx)(eu.mG, {
                              emojiId: t,
                              expressionSourceGuild: n,
                              hasJoinedEmojiSourceGuild: l,
                              onClose: o,
                              popoutData: a,
                              isDisplayingButtonInTopSection: !1,
                          }),
                  ],
              })
        : (0, i.jsx)(Z.E, { variant: "text-sm/normal", "aria-label": a.type, children: a.emojiDescription });
}
function eA(e) {
    let t,
        { emojiId: n, onClose: o, nonce: r, showingMoreEmojis: s, setShowingMoreEmojis: c } = e,
        { joinedEmojiSourceGuild: u } = (0, m.cf)([eo.Ay, em.A], () => {
            let e = eo.Ay.getCustomEmojiById(n);
            return { joinedEmojiSourceGuild: e?.type === ea.i.GUILD ? em.A.getGuild(e?.guildId) : void 0 };
        }),
        [d, f] = l.useState(void 0),
        [h, p] = l.useState(void 0),
        [A, E] = l.useState(null),
        [N, I] = l.useState(!1),
        [T, j] = l.useState(!1),
        R = null != u,
        x = d?.isDiscoverable() ?? !1,
        b = ef.A.getGuildId(),
        v = null != b && (b === d?.id || b === u?.id),
        C = en.default.getCurrentUser(),
        S = (0, ec.O)({
            sourceType: A,
            expressionSourceApplication: h ?? null,
            isPremium: ei.Ay.isPremium(C),
            hasJoinedEmojiSourceGuild: R,
            isDiscoverable: x,
            emojiComesFromCurrentGuild: v,
            isUnusableRoleSubscriptionEmoji: !1,
            userIsRoleSubscriber: !1,
            isRoleSubscriptionEmoji: !1,
            shouldHideRoleSubscriptionCTA: !1,
        });
    if (
        (l.useEffect(() => {
            s && !T && e();
            async function e() {
                I(!0);
                let e = null != n ? await (0, er.g_)(n) : null;
                if (null != e)
                    switch ((E(e.type), e.type)) {
                        case er.rV.APPLICATION:
                            p(e.application);
                            break;
                        case er.rV.GUILD:
                            f(e.guild);
                    }
                else f(null);
                (I(!1), j(!0));
            }
        }, [n, s, T]),
        R)
    )
        return null;
    let y = s && (void 0 !== d || void 0 !== h);
    return (0, i.jsxs)("div", {
        children: [
            y
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("div", { className: eh.Hw }),
                          null != S.emojiDescription &&
                              S.type !== ec.u.UNAVAILABLE &&
                              (0, i.jsx)(Z.E, {
                                  variant: "text-sm/normal",
                                  "aria-label": S.type,
                                  children: S.emojiDescription,
                              }),
                      ],
                  })
                : ((t = eg.intl.string(eg.t["Igv+LS"])),
                  (0, i.jsxs)(g.D, {
                      onClick: function () {
                          c(!s);
                      },
                      className: eh.s4,
                      children: [
                          (0, i.jsx)(Z.E, { variant: "text-sm/normal", color: "none", "aria-label": t, children: t }),
                          (0, i.jsx)(el.a, {
                              size: "xs",
                              color: "currentColor",
                              className: a()(eh.Po, { [eh.Kk]: !s }),
                          }),
                      ],
                  })),
            N
                ? (0, i.jsx)(ed.Y0, { className: eh.eF })
                : y &&
                  (0, i.jsx)(ep, {
                      emojiId: n,
                      expressionSourceGuild: d,
                      hasJoinedExpressionSourceGuild: R,
                      onClose: o,
                      popoutData: S,
                      currentGuildId: b,
                      nonce: r,
                  }),
        ],
    });
}
var eE = n(191226),
    eN = n(202541),
    eI = n(912842);
function eT(e) {
    let {
        emoji: t,
        message: n,
        type: l,
        meBurst: o,
        isBurstReaction: r = !1,
        tooltipText: s,
        tooltipTextAria: c,
        onMouseEnter: u,
        onMouseLeave: d,
        onReactionClick: f,
        isKeyboardNavigation: p,
        emojiSizeTooltip: A,
        nonce: E,
        showingMoreEmojis: N,
        setShowingMoreEmojis: I,
    } = e;
    function T() {
        d();
        let e = r ? ee.v.BURST : ee.v.NORMAL;
        (0, eE.$)(n, { emoji: t, reactionType: e });
    }
    let j = "string" == typeof s ? "" === s.trim() : null == s;
    function R() {
        return j || null == s || null == c
            ? null
            : (0, i.jsx)(Z.E, { variant: "text-sm/normal", className: eI.Of, "aria-label": c, children: s });
    }
    let x = (0, m.bG)([en.default], () => en.default.getCurrentUser()),
        b = (0, ei.TW)(x);
    function v() {
        return (
            null != t.id &&
            (0, i.jsx)(eA, { emojiId: t.id, onClose: d, nonce: E, showingMoreEmojis: N, setShowingMoreEmojis: I })
        );
    }
    return l === ee.v.BURST
        ? (0, i.jsxs)("div", {
              className: eI.xQ,
              onMouseEnter: u,
              onMouseLeave: d,
              children: [
                  (0, i.jsx)(g.D, {
                      className: eI.fu,
                      onClick: T,
                      children: (0, i.jsxs)("div", {
                          className: eI.Ok,
                          children: [
                              (0, i.jsx)(h.A, {
                                  className: eI.JS,
                                  emojiId: t.id,
                                  emojiName: t.name,
                                  animated: t.animated,
                                  size: A,
                              }),
                              R(),
                          ],
                      }),
                  }),
                  o
                      ? (0, i.jsxs)("div", {
                            className: a()(eI.h7, eI.j9),
                            children: [
                                b && (0, i.jsx)(K.t, { size: "md", className: eI.eH, color: Q.k0.PREMIUM_TIER_2 }),
                                (0, i.jsx)(Z.E, {
                                    variant: "text-sm/normal",
                                    className: eI.Of,
                                    children: eg.intl.string(eg.t.ZbNJXn),
                                }),
                            ],
                        })
                      : b
                        ? (0, i.jsxs)("div", {
                              className: a()(eI.h7, eI.j9, eI.rL),
                              children: [
                                  (0, i.jsx)(K.t, { size: "md", className: eI.eH, color: Q.k0.PREMIUM_TIER_2 }),
                                  (0, i.jsx)(g.D, {
                                      onClick: f,
                                      children: (0, i.jsx)(Z.E, {
                                          variant: "text-sm/normal",
                                          className: eI.Of,
                                          "aria-label": "super reaction tooltip cta",
                                          children: eg.intl.string(eg.t.kVfuVu),
                                      }),
                                  }),
                              ],
                          })
                        : p
                          ? null
                          : (0, i.jsx)("div", {
                                className: a()(eI.h7, eI.j9),
                                children: (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(Z.E, {
                                            variant: "text-sm/normal",
                                            "aria-label": "super reaction tooltip upsell",
                                            children: eg.intl.string(eg.t.W1bMkq),
                                        }),
                                        (0, i.jsx)(et.A, {
                                            subscriptionTier: eN.pe.TIER_2,
                                            textOptions: { textOverride: eg.intl.string(eg.t.mr4K7D) },
                                            className: eI.Yq,
                                            onClick: (e) => e.stopPropagation(),
                                        }),
                                    ],
                                }),
                            }),
                  v(),
              ],
          })
        : (0, i.jsxs)("div", {
              className: eI.xQ,
              onMouseEnter: u,
              onMouseLeave: d,
              children: [
                  (0, i.jsx)(g.D, {
                      onClick: T,
                      children: (0, i.jsxs)("div", {
                          className: eI.xR,
                          children: [
                              (0, i.jsx)(h.A, {
                                  className: eI.JS,
                                  emojiId: t.id,
                                  emojiName: t.name,
                                  animated: t.animated,
                                  size: A,
                              }),
                              R(),
                          ],
                      }),
                  }),
                  v(),
              ],
          });
}
var ej = n(885386),
    eR = n(734057),
    ex = n(956703),
    eb = n(174459),
    ev = n(900210),
    eC = n(994500),
    eS = n(562153);
let ey = {
    standard: {
        reactionTooltip1NInteractive: eg.t.dgtYDJ,
        reactionTooltip1N: eg.t.mXild1,
        reactionTooltip1: eg.t.Oro30L,
        reactionTooltip2NInteractive: eg.t["0GBwVR"],
        reactionTooltip2N: eg.t.UWGs2n,
        reactionTooltip2: eg.t["p+0jvt"],
        reactionTooltip3NInteractive: eg.t["dK6/7W"],
        reactionTooltip3N: eg.t["UnXdX/"],
        reactionTooltip3: eg.t.bbPMcR,
        reactionTooltipNInteractive: eg.t.Thj7LX,
        reactionTooltipN: eg.t.CRrc7c,
    },
    burst: {
        reactionTooltip1NInteractive: eg.t.G98B0W,
        reactionTooltip1N: eg.t["u/03eN"],
        reactionTooltip1: eg.t["z4q3+w"],
        reactionTooltip2NInteractive: eg.t.wkcffp,
        reactionTooltip2N: eg.t.T4EYUu,
        reactionTooltip2: eg.t.R2HykW,
        reactionTooltip3NInteractive: eg.t.OhtGxz,
        reactionTooltip3N: eg.t["M8bwl+"],
        reactionTooltip3: eg.t.sNl6XR,
        reactionTooltipNInteractive: eg.t.nsITOq,
        reactionTooltipN: eg.t.dkieH5,
    },
};
function eO(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ee.v.NORMAL,
        i = arguments.length > 3 ? arguments[3] : void 0,
        l = ex.A.getReactions(e.getChannelId(), e.id, t, 3, n),
        o = eR.A.getChannel(e.getChannelId()),
        a = null == o || o.isPrivate() ? null : o.getGuildId(),
        r = e.getReaction(t),
        s = n === ee.v.BURST,
        c = G()(Array.from(l?.values() ?? []))
            .reject((e) => eC.A.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => eS.Ay.getName(a, o?.id, e))
            .value();
    if (0 === c.length) return "";
    let u = s ? ey.burst : ey.standard,
        d = Math.max(0, ((s ? r?.burst_count : r?.count) ?? 0) - c.length),
        m = (0, Y.b3)(t);
    if (1 === c.length)
        if (!(d > 0)) return eg.intl.formatToPlainString(u.reactionTooltip1, { a: c[0], emojiName: m });
        else if (null != i)
            return eg.intl.format(u.reactionTooltip1NInteractive, { a: c[0], n: d, emojiName: m, onClick: i });
        else return eg.intl.formatToPlainString(u.reactionTooltip1N, { a: c[0], n: d, emojiName: m });
    if (2 === c.length)
        if (!(d > 0)) return eg.intl.formatToPlainString(u.reactionTooltip2, { a: c[0], b: c[1], emojiName: m });
        else if (null != i)
            return eg.intl.format(u.reactionTooltip2NInteractive, { a: c[0], b: c[1], n: d, emojiName: m, onClick: i });
        else return eg.intl.formatToPlainString(u.reactionTooltip2N, { a: c[0], b: c[1], n: d, emojiName: m });
    return 3 !== c.length
        ? null != i
            ? eg.intl.format(u.reactionTooltipNInteractive, { n: d, emojiName: m, onClick: i })
            : eg.intl.formatToPlainString(u.reactionTooltipN, { n: d, emojiName: m })
        : d > 0
          ? null != i
              ? eg.intl.format(u.reactionTooltip3NInteractive, {
                    a: c[0],
                    b: c[1],
                    c: c[2],
                    n: d,
                    emojiName: m,
                    onClick: i,
                })
              : eg.intl.formatToPlainString(u.reactionTooltip3N, { a: c[0], b: c[1], c: c[2], n: d, emojiName: m })
          : eg.intl.formatToPlainString(u.reactionTooltip3, { a: c[0], b: c[1], c: c[2], emojiName: m });
}
var e_ = n(299072),
    eL = n(228366),
    ek = n(297494),
    eM = n(60317),
    eP = n(325817),
    eU = n(608437);
let eG = l.memo(function (e) {
    let { channelId: t, messageId: n, emoji: o, useChatFontScaling: a, color: r, count: s, emojiSize: c } = e,
        u = (0, m.bG)([ev.A], () => ev.A.getEffectForEmojiId(t, n, o)),
        d = l.useMemo(() => (0, eM.eT)(o, r, t, { key: u, messageId: n }), [r, u, o, t, n]),
        [f, g] = l.useState(!1),
        h = (0, m.bG)([A.Ay], () => A.Ay.useReducedMotion),
        p = ej.Sf.useSetting(),
        E = l.useCallback(() => {
            eL.h.dispatch({ type: "BURST_REACTION_EFFECT_CLEAR", channelId: t, messageId: n, emoji: o });
        }, [o, t, n]);
    return (l.useEffect(() => {
        function e() {
            if (f) return;
            let e = (0, ek.H)(`${Date.now()}${t}${n}${o.name}`) % 10;
            (e += s > 4 ? 4 : s - 1) > 7 &&
                (g(!0), (0, q.on)({ channelId: t, messageId: n, emoji: o, key: ev.W.RANDOM }));
        }
        if (f || (h && !p) || !p) return;
        e();
        let i = setInterval(e, 5e3);
        return () => {
            clearInterval(i);
        };
    }, [p, t, s, o, o.name, f, n, h]),
    null == u)
        ? null
        : (0, i.jsx)(e_.A, { className: (a ? eU : eP).effect, effect: d, onComplete: E, emojiSize: c });
});
var ew = n(652215),
    eD = n(356974),
    eB = n(988626);
let eH = 12,
    e$ = l.memo(function (e) {
        let t,
            n,
            {
                me: o,
                me_burst: r,
                readOnly: I,
                emoji: T,
                message: j,
                count: R,
                burst_count: x,
                burst_colors: b,
                hideCount: v,
                isLurking: C,
                emojiSize: S,
                emojiSizeTooltip: y = "jumbo",
                isPendingMember: O,
                isForumToolbar: _,
                className: U,
                useChatFontScaling: G,
                type: w,
            } = e,
            D = w === ee.v.BURST,
            B = (0, Y.IN)(o, r, w),
            H = j.getChannelId(),
            $ = (0, k.g)(D && null != b ? b : []),
            z = (0, m.bG)([ev.A], () => void 0 !== ev.A.getEffectForEmojiId(H, j.id, T)),
            V = (0, m.bG)([A.Ay], () => A.Ay.useReducedMotion),
            Z = ej.Sf.useSetting(),
            K = en.default.getCurrentUser(),
            Q = (0, ei.TW)(K),
            et = (0, m.bG)([ev.A], () => ev.A.getReactionPickerAnimation(j.id, T.name, T.id)),
            el = D && (z || null != et),
            [eo, ea] = l.useState(null),
            [er, es] = l.useState(null),
            [ec, eu] = l.useState(!1),
            ed = l.useRef(null),
            ef = l.useRef(null),
            eg = l.useRef(null),
            eh = l.useRef(!1),
            ep = l.useRef(!1),
            [eA] = l.useState(() => (0, c.A)()),
            eE = l.useCallback(() => {
                let e = eR.A.getChannel(H),
                    t = D
                        ? Q
                            ? eN.e.EMOJI_IN_BURST_REACTION_HOVER
                            : eN.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL
                        : eN.e.EMOJI_IN_REACTION_HOVER;
                (N.Ay.trackWithMetadata(ew.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                    type: t,
                    expression_id: T.id,
                    expression_name: T.name,
                    is_animated: T.animated,
                    is_custom: null != T.id,
                    nonce: eA,
                }),
                    D &&
                        null != e &&
                        !Q &&
                        (eb.default.track(ew.HAw.PREMIUM_UPSELL_VIEWED, {
                            type: eN.e.BURST_REACTION_UPSELL,
                            location: {
                                page: e?.getGuildId() != null ? ew.liQ.GUILD_CHANNEL : ew.liQ.DM_CHANNEL,
                                section: (0, Y.sn)(e),
                                object: ew.ZSU.EMOJI_REACTION_TOOLTIP_UPSELL,
                            },
                        }),
                        (0, W.sq)(ew.U7l.PREMIUM_UPSELL_VIEWED, null, () => (0, F.uq)(eN.e.BURST_REACTION_UPSELL))));
            }, [H, T, D, Q, eA]);
        function eI(e) {
            let { closePopout: t } = e,
                n = eR.A.getChannel(j.getChannelId()),
                l = em.A.getGuild(n?.getGuildId());
            return C && null != l
                ? (0, i.jsx)(P.A, { ctaRef: ed, type: P.w.REACTIONS, guild: l, closePopout: t })
                : (0, i.jsx)(i.Fragment, {});
        }
        function eC(e) {
            e.stopPropagation();
            let t = eR.A.getChannel(j.getChannelId());
            if (C) return void ed.current?.focus();
            if (D && !Q)
                return void (0, X.z)({
                    analytics: {
                        type: eN.e.BURST_REACTION_UPSELL,
                        page: t?.getGuildId() != null ? ew.liQ.GUILD_CHANNEL : ew.liQ.DM_CHANNEL,
                        section: null != t ? (0, Y.sn)(t) : void 0,
                        object: ew.ZSU.EMOJI_REACTION_UPSELL,
                    },
                });
            if (O)
                return void (function () {
                    if (!O) return;
                    let e = eR.A.getChannel(H);
                    if (null == e) return;
                    let t = e.getGuildId();
                    null != t && (0, M.Ze)(t);
                })();
            if (I) return;
            let n = _ ? q.qN.FORUM_TOOLBAR : q.qN.MESSAGE_INLINE_BUTTON,
                i = { burst: D };
            B
                ? (0, q.et)({ channelId: H, messageId: j.id, emoji: T, location: n, options: i })
                : (0, q.BB)(H, j.id, T, n, i);
        }
        let eS = (0, p.A)(() => {
                let e = eO(j, T, w),
                    t = eh.current ? e : eO(j, T, w, ew.tEg);
                (s()("string" == typeof e, "tooltipTextAria is not a string"), ea(t), es(e));
            }),
            ey = l.useCallback(() => {
                (ea(null),
                    es(null),
                    eu(!1),
                    ex.A.removeChangeListener(eS),
                    ep.current && eb.default.track(ew.HAw.CLOSE_POPOUT, { nonce: eA }));
            }, [eA, eS]),
            eL = l.useRef(null);
        l.useEffect(
            () => () => {
                clearTimeout(eL.current);
            },
            [],
        );
        let ek = l.useCallback(() => {
            ((ep.current = !0), clearTimeout(eL.current), eS(), ex.A.addChangeListener(eS));
        }, [eS]);
        function eM(e) {
            let t = w === ee.v.BURST;
            (t && !V && Z && (0, q.on)({ channelId: j.getChannelId(), messageId: j.id, emoji: T, key: ev.W.HOVER }),
                (eh.current = "focus" === e.type),
                clearTimeout(eL.current),
                I ||
                    (eL.current = setTimeout(
                        () => {
                            (ek(), eE());
                        },
                        t ? 750 : 500,
                    )));
        }
        function eP() {
            ((eh.current = !1),
                clearTimeout(eL.current),
                (eL.current = setTimeout(() => {
                    ey();
                }, 200)));
        }
        (0, u.l0)(() => {
            ey();
        });
        let eU = G ? eB : eD,
            e$ = {},
            ez = D ? x : R;
        if (D && null != $) {
            let { accentColor: e, backgroundColor: i, opacity: l } = $,
                o = (0, d.xp)(i ?? "", l) ?? "";
            (B && (e$.borderColor = i), (e$.background = o), (t = e), (n = e));
        }
        let eV = eg.current?.getBoundingClientRect(),
            eJ = null != et && null != eV,
            eW = null == et;
        return (0, i.jsx)(f.Y, {
            targetElementRef: eg,
            shouldShow: null != eo && "" !== eo,
            renderPopout: function () {
                return (0, i.jsx)(eT, {
                    emoji: T,
                    message: j,
                    type: w,
                    meBurst: r,
                    isBurstReaction: D,
                    tooltipText: eo,
                    tooltipTextAria: er,
                    onMouseEnter: ek,
                    onMouseLeave: eP,
                    onReactionClick: eC,
                    isKeyboardNavigation: eh.current,
                    emojiSizeTooltip: y,
                    nonce: eA,
                    showingMoreEmojis: ec,
                    setShowingMoreEmojis: eu,
                });
            },
            avoidancePadding: ec ? void 0 : { top: 120 },
            nudgeAlignIntoViewport: !0,
            position: "top",
            align: "center",
            children: () =>
                (0, i.jsx)("div", {
                    onMouseEnter: eM,
                    onMouseLeave: eP,
                    ref: eg,
                    children: (0, i.jsx)("div", {
                        className: a()(eU.reaction, U, {
                            [eU.reactionMe]: B,
                            [eU.reactionReadOnly]: I && !C && !O,
                            [eU.shakeReaction]: el && null == et,
                        }),
                        style: e$,
                        children: (0, i.jsx)(f.Y, {
                            targetElementRef: ef,
                            renderPopout: eI,
                            position: "top",
                            children: (e) =>
                                (0, i.jsxs)(g.D, {
                                    ...e,
                                    innerRef: ef,
                                    className: eU.reactionInner,
                                    onClick: eC,
                                    "aria-disabled": I,
                                    "aria-label": (0, Y.mb)(B, ez, T, D),
                                    "aria-pressed": B,
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: a()({ [eU.burstGlow]: D }),
                                            style: { boxShadow: `0 0 16px ${n}` },
                                        }),
                                        (0, i.jsxs)("div", {
                                            children: [
                                                D
                                                    ? (0, i.jsxs)(i.Fragment, {
                                                          children: [
                                                              eJ &&
                                                                  (0, i.jsx)(L, {
                                                                      messageId: j.id,
                                                                      emoji: T,
                                                                      startPosition: et,
                                                                      targetPosition: eV,
                                                                  }),
                                                              eW &&
                                                                  (0, i.jsx)(eG, {
                                                                      count: x,
                                                                      emoji: T,
                                                                      channelId: j.getChannelId(),
                                                                      messageId: j.id,
                                                                      useChatFontScaling: G,
                                                                      color: n,
                                                                      emojiSize: e_.x.NORMAL,
                                                                  }),
                                                          ],
                                                      })
                                                    : null,
                                                (0, i.jsx)(h.A, {
                                                    className: a()({ [eU.hideEmoji]: el }),
                                                    emojiId: T.id,
                                                    emojiName: T.name,
                                                    size: S,
                                                    animated: T.animated,
                                                }),
                                            ],
                                        }),
                                        v
                                            ? null
                                            : (0, i.jsx)(E.A, {
                                                  className: eU.reactionCount,
                                                  value: ez,
                                                  color: t,
                                                  digitWidth: eH,
                                              }),
                                        (0, i.jsx)(J, { count: ez, reactionRef: eg }),
                                    ],
                                }),
                        }),
                    }),
                }),
        });
    });
