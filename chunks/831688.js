n.d(t, { $: () => eD, q: () => eH });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(284009),
    s = n.n(o),
    u = n(132500),
    c = n(935399),
    d = n(317097),
    m = n(17928),
    h = n(922016),
    p = n(939249),
    g = n(565645),
    f = n(765548),
    A = n(775602),
    E = n(114166),
    N = n(95561),
    I = n(776310),
    x = n(74445),
    j = n(615300),
    v = n(717421),
    T = n(21161),
    R = n(750506),
    b = n(147421),
    S = n(486020),
    C = n(690521),
    y = n(536283),
    O = n(889355);
let _ = [];
function L(e) {
    let { messageId: t, emoji: n, startPosition: a, targetPosition: r } = e,
        [o, s] = l.useState(0),
        [u, c] = l.useState(0),
        [d, m] = l.useState(null),
        { confettiCanvas: h } = l.useContext(T.x),
        p = (0, I.f9)(h, d),
        f = l.useMemo(
            () => [
                {
                    src: null == n.id ? C.Ay.getURL(n.name) : S.Ay.getEmojiURL({ id: n.id, animated: !1, size: 22 }),
                    colorize: !1,
                },
            ],
            [n.name, n.id],
        ),
        A = r.x - (r.width / 2) * 0.5,
        E = r.y - (r.height / 2) * 0.5,
        N = (0, v.z)({
            from: { y: a.y },
            to: { y: E },
            config: { duration: 450, easing: j.A.Easing.in(j.A.Easing.exp) },
            onChange: (e) => {
                let { y: t } = e;
                c(t);
            },
        }),
        L = (0, v.z)({
            from: { x: a.x, scale: 1, opacity: 1 },
            to: { x: A, scale: 0.5, opacity: 0.4 },
            config: { duration: 450, easing: j.A.Easing.in(j.A.Easing.ease) },
            onRest: () => {
                (0, b.p)(t, n.name, n.id);
            },
            onChange: (e) => {
                let { x: t } = e;
                s(t);
            },
        });
    return (
        l.useEffect(() => {
            o > 0 && u > 0 && p.createConfetti({ ...y.Mw, position: { type: "static", value: { x: o, y: u } } });
        }, [p, o, u]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(I.K_, { ref: m, sprites: f, colors: _, spriteWidth: y.wn, spriteHeight: y.wn }),
                (0, i.jsx)(R.Ay, {
                    children: (0, i.jsx)(x.animated.div, {
                        style: { ...N },
                        className: O.qq,
                        children: (0, i.jsx)(x.animated.div, {
                            style: { ...L, opacity: L.opacity },
                            children: (0, i.jsx)(g.A, {
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
    V = n.n(U),
    w = n(702841),
    G = n(3137),
    B = n(620141),
    D = n(966598),
    H = n(224964),
    $ = n(31408);
function W(e) {
    let { reactionRef: t, count: n } = e,
        i = l.useRef(n),
        a = (0, w.bG)([G.A], () => G.A.getState()),
        r = (0, H.A)(),
        o = (0, D.A)(t.current);
    return (
        l.useEffect(() => {
            if (n > i.current && null != o) {
                let e = (0, U.clamp)(n, a.confettiCount / 2, 2 * a.confettiCount);
                r.fire(o.x, o.y, { count: e });
            }
            i.current = n;
        }, [n, o, r, a.confettiCount]),
        null
    );
}
function z(e) {
    return (0, i.jsx)(B.A, { confettiLocation: $.k.REACTION, children: (0, i.jsx)(W, { ...e }) });
}
var F = n(10392),
    J = n(82498),
    X = n(32605),
    Y = n(649963),
    q = n(815807),
    Z = n(834730),
    K = n(403581),
    Q = n(404374),
    ee = n(505527),
    et = n(725807),
    en = n(287809),
    ei = n(158045),
    el = n(847374),
    ea = n(236285),
    er = n(770335),
    eo = n(624793),
    es = n(731383),
    eu = n(450707),
    ec = n(639245),
    ed = n(966245),
    em = n(71393),
    eh = n(967198),
    ep = n(375708),
    eg = n(961814);
function ef(e) {
    let {
        emojiId: t,
        expressionSourceGuild: n,
        hasJoinedExpressionSourceGuild: l,
        onClose: a,
        popoutData: r,
        currentGuildId: o,
        nonce: s,
    } = e;
    (0, es.i)({ emojiId: t, currentGuildId: o, popoutData: r, emojiSourceGuildId: n?.id, nonce: s });
    let u = n?.isDiscoverable() ?? !1,
        c = null != n && u,
        d = (n?.emojis?.length ?? 0) > 1;
    return c
        ? null == n
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", {
                          className: eg.h2,
                          children: (0, i.jsx)(ec.G7, {
                              expressionSourceGuild: n,
                              hasJoinedExpressionSourceGuild: l,
                              isDisplayingJoinGuildButtonInPopout: r.type === eu.u.JOIN_GUILD,
                              closePopout: a,
                          }),
                      }),
                      d &&
                          (0, i.jsx)(ec.mG, {
                              emojiId: t,
                              expressionSourceGuild: n,
                              hasJoinedEmojiSourceGuild: l,
                              onClose: a,
                              popoutData: r,
                              isDisplayingButtonInTopSection: !1,
                          }),
                  ],
              })
        : (0, i.jsx)(Z.E, { variant: "text-sm/normal", "aria-label": r.type, children: r.emojiDescription });
}
function eA(e) {
    let t,
        { emojiId: n, onClose: a, nonce: o, showingMoreEmojis: s, setShowingMoreEmojis: u } = e,
        { joinedEmojiSourceGuild: c } = (0, m.cf)([ea.Ay, em.A], () => {
            let e = ea.Ay.getCustomEmojiById(n);
            return { joinedEmojiSourceGuild: e?.type === er.i.GUILD ? em.A.getGuild(e?.guildId) : void 0 };
        }),
        [d, h] = l.useState(void 0),
        [g, f] = l.useState(void 0),
        [A, E] = l.useState(null),
        [N, I] = l.useState(!1),
        [x, j] = l.useState(!1),
        v = null != c,
        T = d?.isDiscoverable() ?? !1,
        R = eh.A.getGuildId(),
        b = null != R && (R === d?.id || R === c?.id),
        S = en.default.getCurrentUser(),
        C = (0, eu.O)({
            sourceType: A,
            expressionSourceApplication: g ?? null,
            isPremium: ei.Ay.isPremium(S),
            hasJoinedEmojiSourceGuild: v,
            isDiscoverable: T,
            emojiComesFromCurrentGuild: b,
            isUnusableRoleSubscriptionEmoji: !1,
            userIsRoleSubscriber: !1,
            isRoleSubscriptionEmoji: !1,
            shouldHideRoleSubscriptionCTA: !1,
        });
    if (
        (l.useEffect(() => {
            s && !x && e();
            async function e() {
                I(!0);
                let e = null != n ? await (0, eo.g_)(n) : null;
                if (null != e)
                    switch ((E(e.type), e.type)) {
                        case eo.rV.APPLICATION:
                            f(e.application);
                            break;
                        case eo.rV.GUILD:
                            h(e.guild);
                    }
                else h(null);
                I(!1), j(!0);
            }
        }, [n, s, x]),
        v)
    )
        return null;
    let y = s && (void 0 !== d || void 0 !== g);
    return (0, i.jsxs)("div", {
        children: [
            y
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("div", { className: eg.Hw }),
                          null != C.emojiDescription &&
                              C.type !== eu.u.UNAVAILABLE &&
                              (0, i.jsx)(Z.E, {
                                  variant: "text-sm/normal",
                                  "aria-label": C.type,
                                  children: C.emojiDescription,
                              }),
                      ],
                  })
                : ((t = ep.intl.string(ep.t["Igv+LS"])),
                  (0, i.jsxs)(p.D, {
                      onClick: function () {
                          u(!s);
                      },
                      className: eg.s4,
                      children: [
                          (0, i.jsx)(Z.E, { variant: "text-sm/normal", color: "none", "aria-label": t, children: t }),
                          (0, i.jsx)(el.a, {
                              size: "xs",
                              color: "currentColor",
                              className: r()(eg.Po, { [eg.Kk]: !s }),
                          }),
                      ],
                  })),
            N
                ? (0, i.jsx)(ed.Y0, { className: eg.eF })
                : y &&
                  (0, i.jsx)(ef, {
                      emojiId: n,
                      expressionSourceGuild: d,
                      hasJoinedExpressionSourceGuild: v,
                      onClose: a,
                      popoutData: C,
                      currentGuildId: R,
                      nonce: o,
                  }),
        ],
    });
}
var eE = n(191226),
    eN = n(202541),
    eI = n(912842);
function ex(e) {
    let {
        emoji: t,
        message: n,
        type: l,
        meBurst: a,
        isBurstReaction: o = !1,
        tooltipText: s,
        tooltipTextAria: u,
        onMouseEnter: c,
        onMouseLeave: d,
        onReactionClick: h,
        isKeyboardNavigation: f,
        emojiSizeTooltip: A,
        nonce: E,
        showingMoreEmojis: N,
        setShowingMoreEmojis: I,
    } = e;
    function x() {
        d();
        let e = o ? ee.v.BURST : ee.v.NORMAL;
        (0, eE.$)(n, { emoji: t, reactionType: e });
    }
    let j = "string" == typeof s ? "" === s.trim() : null == s;
    function v() {
        return j || null == s || null == u
            ? null
            : (0, i.jsx)(Z.E, { variant: "text-sm/normal", className: eI.Of, "aria-label": u, children: s });
    }
    let T = (0, m.bG)([en.default], () => en.default.getCurrentUser()),
        R = (0, ei.TW)(T);
    function b() {
        return (
            null != t.id &&
            (0, i.jsx)(eA, { emojiId: t.id, onClose: d, nonce: E, showingMoreEmojis: N, setShowingMoreEmojis: I })
        );
    }
    return l === ee.v.BURST
        ? (0, i.jsxs)("div", {
              className: eI.xQ,
              onMouseEnter: c,
              onMouseLeave: d,
              children: [
                  (0, i.jsx)(p.D, {
                      className: eI.fu,
                      onClick: x,
                      children: (0, i.jsxs)("div", {
                          className: eI.Ok,
                          children: [
                              (0, i.jsx)(g.A, {
                                  className: eI.JS,
                                  emojiId: t.id,
                                  emojiName: t.name,
                                  animated: t.animated,
                                  size: A,
                              }),
                              v(),
                          ],
                      }),
                  }),
                  a
                      ? (0, i.jsxs)("div", {
                            className: r()(eI.h7, eI.j9),
                            children: [
                                R && (0, i.jsx)(K.t, { size: "md", className: eI.eH, color: Q.k0.PREMIUM_TIER_2 }),
                                (0, i.jsx)(Z.E, {
                                    variant: "text-sm/normal",
                                    className: eI.Of,
                                    children: ep.intl.string(ep.t.ZbNJXn),
                                }),
                            ],
                        })
                      : R
                        ? (0, i.jsxs)("div", {
                              className: r()(eI.h7, eI.j9, eI.rL),
                              children: [
                                  (0, i.jsx)(K.t, { size: "md", className: eI.eH, color: Q.k0.PREMIUM_TIER_2 }),
                                  (0, i.jsx)(p.D, {
                                      onClick: h,
                                      children: (0, i.jsx)(Z.E, {
                                          variant: "text-sm/normal",
                                          className: eI.Of,
                                          "aria-label": "super reaction tooltip cta",
                                          children: ep.intl.string(ep.t.kVfuVu),
                                      }),
                                  }),
                              ],
                          })
                        : f
                          ? null
                          : (0, i.jsx)("div", {
                                className: r()(eI.h7, eI.j9),
                                children: (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(Z.E, {
                                            variant: "text-sm/normal",
                                            "aria-label": "super reaction tooltip upsell",
                                            children: ep.intl.string(ep.t.W1bMkq),
                                        }),
                                        (0, i.jsx)(et.A, {
                                            subscriptionTier: eN.pe.TIER_2,
                                            textOptions: { textOverride: ep.intl.string(ep.t.mr4K7D) },
                                            className: eI.Yq,
                                            onClick: (e) => e.stopPropagation(),
                                        }),
                                    ],
                                }),
                            }),
                  b(),
              ],
          })
        : (0, i.jsxs)("div", {
              className: eI.xQ,
              onMouseEnter: c,
              onMouseLeave: d,
              children: [
                  (0, i.jsx)(p.D, {
                      onClick: x,
                      children: (0, i.jsxs)("div", {
                          className: eI.xR,
                          children: [
                              (0, i.jsx)(g.A, {
                                  className: eI.JS,
                                  emojiId: t.id,
                                  emojiName: t.name,
                                  animated: t.animated,
                                  size: A,
                              }),
                              v(),
                          ],
                      }),
                  }),
                  b(),
              ],
          });
}
var ej = n(885386),
    ev = n(734057),
    eT = n(956703),
    eR = n(174459),
    eb = n(900210),
    eS = n(994500),
    eC = n(562153);
let ey = {
    standard: {
        reactionTooltip1NInteractive: ep.t.dgtYDJ,
        reactionTooltip1N: ep.t.mXild1,
        reactionTooltip1: ep.t.Oro30L,
        reactionTooltip2NInteractive: ep.t["0GBwVR"],
        reactionTooltip2N: ep.t.UWGs2n,
        reactionTooltip2: ep.t["p+0jvt"],
        reactionTooltip3NInteractive: ep.t["dK6/7W"],
        reactionTooltip3N: ep.t["UnXdX/"],
        reactionTooltip3: ep.t.bbPMcR,
        reactionTooltipNInteractive: ep.t.Thj7LX,
        reactionTooltipN: ep.t.CRrc7c,
    },
    burst: {
        reactionTooltip1NInteractive: ep.t.G98B0W,
        reactionTooltip1N: ep.t["u/03eN"],
        reactionTooltip1: ep.t["z4q3+w"],
        reactionTooltip2NInteractive: ep.t.wkcffp,
        reactionTooltip2N: ep.t.T4EYUu,
        reactionTooltip2: ep.t.R2HykW,
        reactionTooltip3NInteractive: ep.t.OhtGxz,
        reactionTooltip3N: ep.t["M8bwl+"],
        reactionTooltip3: ep.t.sNl6XR,
        reactionTooltipNInteractive: ep.t.nsITOq,
        reactionTooltipN: ep.t.dkieH5,
    },
};
function eO(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ee.v.NORMAL,
        i = arguments.length > 3 ? arguments[3] : void 0,
        l = eT.A.getReactions(e.getChannelId(), e.id, t, 3, n),
        a = ev.A.getChannel(e.getChannelId()),
        r = null == a || a.isPrivate() ? null : a.getGuildId(),
        o = e.getReaction(t),
        s = n === ee.v.BURST,
        u = V()(Array.from(l?.values() ?? []))
            .reject((e) => eS.A.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => eC.Ay.getName(r, a?.id, e))
            .value();
    if (0 === u.length) return "";
    let c = s ? ey.burst : ey.standard,
        d = Math.max(0, ((s ? o?.burst_count : o?.count) ?? 0) - u.length),
        m = (0, q.b3)(t);
    if (1 === u.length)
        if (!(d > 0)) return ep.intl.formatToPlainString(c.reactionTooltip1, { a: u[0], emojiName: m });
        else if (null != i)
            return ep.intl.format(c.reactionTooltip1NInteractive, { a: u[0], n: d, emojiName: m, onClick: i });
        else return ep.intl.formatToPlainString(c.reactionTooltip1N, { a: u[0], n: d, emojiName: m });
    if (2 === u.length)
        if (!(d > 0)) return ep.intl.formatToPlainString(c.reactionTooltip2, { a: u[0], b: u[1], emojiName: m });
        else if (null != i)
            return ep.intl.format(c.reactionTooltip2NInteractive, { a: u[0], b: u[1], n: d, emojiName: m, onClick: i });
        else return ep.intl.formatToPlainString(c.reactionTooltip2N, { a: u[0], b: u[1], n: d, emojiName: m });
    return 3 !== u.length
        ? null != i
            ? ep.intl.format(c.reactionTooltipNInteractive, { n: d, emojiName: m, onClick: i })
            : ep.intl.formatToPlainString(c.reactionTooltipN, { n: d, emojiName: m })
        : d > 0
          ? null != i
              ? ep.intl.format(c.reactionTooltip3NInteractive, {
                    a: u[0],
                    b: u[1],
                    c: u[2],
                    n: d,
                    emojiName: m,
                    onClick: i,
                })
              : ep.intl.formatToPlainString(c.reactionTooltip3N, { a: u[0], b: u[1], c: u[2], n: d, emojiName: m })
          : ep.intl.formatToPlainString(c.reactionTooltip3, { a: u[0], b: u[1], c: u[2], emojiName: m });
}
var e_ = n(299072),
    eL = n(228366),
    ek = n(297494),
    eM = n(60317),
    eP = n(325817),
    eU = n(608437);
let eV = l.memo(function (e) {
    let { channelId: t, messageId: n, emoji: a, useChatFontScaling: r, color: o, count: s, emojiSize: u } = e,
        c = (0, m.bG)([eb.A], () => eb.A.getEffectForEmojiId(t, n, a)),
        d = l.useMemo(() => (0, eM.eT)(a, o, t, { key: c, messageId: n }), [o, c, a, t, n]),
        [h, p] = l.useState(!1),
        g = (0, m.bG)([A.Ay], () => A.Ay.useReducedMotion),
        f = ej.Sf.useSetting(),
        E = l.useCallback(() => {
            eL.h.dispatch({ type: "BURST_REACTION_EFFECT_CLEAR", channelId: t, messageId: n, emoji: a });
        }, [a, t, n]);
    return (l.useEffect(() => {
        function e() {
            if (h) return;
            let e = (0, ek.H)(`${Date.now()}${t}${n}${a.name}`) % 10;
            (e += s > 4 ? 4 : s - 1) > 7 &&
                (p(!0), (0, Y.on)({ channelId: t, messageId: n, emoji: a, key: eb.W.RANDOM }));
        }
        if (h || (g && !f) || !f) return;
        e();
        let i = setInterval(e, 5e3);
        return () => {
            clearInterval(i);
        };
    }, [f, t, s, a, a.name, h, n, g]),
    null == c)
        ? null
        : (0, i.jsx)(e_.A, { className: (r ? eU : eP).effect, effect: d, onComplete: E, emojiSize: u });
});
var ew = n(652215),
    eG = n(356974),
    eB = n(988626);
let eD = 12,
    eH = l.memo(function (e) {
        let t,
            n,
            {
                me: a,
                me_burst: o,
                readOnly: I,
                emoji: x,
                message: j,
                count: v,
                burst_count: T,
                burst_colors: R,
                hideCount: b,
                isLurking: S,
                emojiSize: C,
                emojiSizeTooltip: y = "jumbo",
                isPendingMember: O,
                isForumToolbar: _,
                className: U,
                useChatFontScaling: V,
                type: w,
            } = e,
            G = w === ee.v.BURST,
            B = (0, q.IN)(a, o, w),
            D = j.getChannelId(),
            H = (0, k.g)(G && null != R ? R : []),
            $ = (0, m.bG)([eb.A], () => void 0 !== eb.A.getEffectForEmojiId(D, j.id, x)),
            W = (0, m.bG)([A.Ay], () => A.Ay.useReducedMotion),
            Z = ej.Sf.useSetting(),
            K = en.default.getCurrentUser(),
            Q = (0, ei.TW)(K),
            et = (0, m.bG)([eb.A], () => eb.A.getReactionPickerAnimation(j.id, x.name, x.id)),
            el = G && ($ || null != et),
            [ea, er] = l.useState(null),
            [eo, es] = l.useState(null),
            [eu, ec] = l.useState(!1),
            ed = l.useRef(null),
            eh = l.useRef(null),
            ep = l.useRef(null),
            eg = l.useRef(!1),
            ef = l.useRef(!1),
            [eA] = l.useState(() => (0, u.A)()),
            eE = l.useCallback(() => {
                let e = ev.A.getChannel(D),
                    t = G
                        ? Q
                            ? eN.e.EMOJI_IN_BURST_REACTION_HOVER
                            : eN.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL
                        : eN.e.EMOJI_IN_REACTION_HOVER;
                N.Ay.trackWithMetadata(ew.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                    type: t,
                    expression_id: x.id,
                    expression_name: x.name,
                    is_animated: x.animated,
                    is_custom: null != x.id,
                    nonce: eA,
                }),
                    G &&
                        null != e &&
                        !Q &&
                        (eR.default.track(ew.HAw.PREMIUM_UPSELL_VIEWED, {
                            type: eN.e.BURST_REACTION_UPSELL,
                            location: {
                                page: e?.getGuildId() != null ? ew.liQ.GUILD_CHANNEL : ew.liQ.DM_CHANNEL,
                                section: (0, q.sn)(e),
                                object: ew.ZSU.EMOJI_REACTION_TOOLTIP_UPSELL,
                            },
                        }),
                        (0, F.sq)(ew.U7l.PREMIUM_UPSELL_VIEWED, null, () => (0, J.uq)(eN.e.BURST_REACTION_UPSELL)));
            }, [D, x, G, Q, eA]);
        function eI(e) {
            let { closePopout: t } = e,
                n = ev.A.getChannel(j.getChannelId()),
                l = em.A.getGuild(n?.getGuildId());
            return S && null != l
                ? (0, i.jsx)(P.A, { ctaRef: ed, type: P.w.REACTIONS, guild: l, closePopout: t })
                : (0, i.jsx)(i.Fragment, {});
        }
        function eS(e) {
            e.stopPropagation();
            let t = ev.A.getChannel(j.getChannelId());
            if (S) return void ed.current?.focus();
            if (G && !Q)
                return void (0, X.z)({
                    analytics: {
                        type: eN.e.BURST_REACTION_UPSELL,
                        page: t?.getGuildId() != null ? ew.liQ.GUILD_CHANNEL : ew.liQ.DM_CHANNEL,
                        section: null != t ? (0, q.sn)(t) : void 0,
                        object: ew.ZSU.EMOJI_REACTION_UPSELL,
                    },
                });
            if (O)
                return void (function () {
                    if (!O) return;
                    let e = ev.A.getChannel(D);
                    if (null == e) return;
                    let t = e.getGuildId();
                    null != t && (0, M.Ze)(t);
                })();
            if (I) return;
            let n = _ ? Y.qN.FORUM_TOOLBAR : Y.qN.MESSAGE_INLINE_BUTTON,
                i = { burst: G };
            B
                ? (0, Y.et)({ channelId: D, messageId: j.id, emoji: x, location: n, options: i })
                : (0, Y.BB)(D, j.id, x, n, i);
        }
        let eC = (0, f.A)(() => {
                let e = eO(j, x, w),
                    t = eg.current ? e : eO(j, x, w, ew.tEg);
                s()("string" == typeof e, "tooltipTextAria is not a string"), er(t), es(e);
            }),
            ey = l.useCallback(() => {
                er(null),
                    es(null),
                    ec(!1),
                    eT.A.removeChangeListener(eC),
                    ef.current && eR.default.track(ew.HAw.CLOSE_POPOUT, { nonce: eA });
            }, [eA, eC]),
            eL = l.useRef(null);
        l.useEffect(
            () => () => {
                clearTimeout(eL.current);
            },
            [],
        );
        let ek = l.useCallback(() => {
            (ef.current = !0), clearTimeout(eL.current), eC(), eT.A.addChangeListener(eC);
        }, [eC]);
        function eM(e) {
            let t = w === ee.v.BURST;
            t && !W && Z && (0, Y.on)({ channelId: j.getChannelId(), messageId: j.id, emoji: x, key: eb.W.HOVER }),
                (eg.current = "focus" === e.type),
                clearTimeout(eL.current),
                I ||
                    (eL.current = setTimeout(
                        () => {
                            ek(), eE();
                        },
                        t ? 750 : 500,
                    ));
        }
        function eP() {
            (eg.current = !1),
                clearTimeout(eL.current),
                (eL.current = setTimeout(() => {
                    ey();
                }, 200));
        }
        (0, c.l0)(() => {
            ey();
        });
        let eU = V ? eB : eG,
            eH = {},
            e$ = G ? T : v;
        if (G && null != H) {
            let { accentColor: e, backgroundColor: i, opacity: l } = H,
                a = (0, d.xp)(i ?? "", l) ?? "";
            B && (eH.borderColor = i), (eH.background = a), (t = e), (n = e);
        }
        let eW = ep.current?.getBoundingClientRect(),
            ez = null != et && null != eW,
            eF = null == et;
        return (0, i.jsx)(h.Y, {
            targetElementRef: ep,
            shouldShow: null != ea && "" !== ea,
            renderPopout: function () {
                return (0, i.jsx)(ex, {
                    emoji: x,
                    message: j,
                    type: w,
                    meBurst: o,
                    isBurstReaction: G,
                    tooltipText: ea,
                    tooltipTextAria: eo,
                    onMouseEnter: ek,
                    onMouseLeave: eP,
                    onReactionClick: eS,
                    isKeyboardNavigation: eg.current,
                    emojiSizeTooltip: y,
                    nonce: eA,
                    showingMoreEmojis: eu,
                    setShowingMoreEmojis: ec,
                });
            },
            avoidancePadding: eu ? void 0 : { top: 120 },
            nudgeAlignIntoViewport: !0,
            position: "top",
            align: "center",
            children: () =>
                (0, i.jsx)("div", {
                    onMouseEnter: eM,
                    onMouseLeave: eP,
                    ref: ep,
                    children: (0, i.jsx)("div", {
                        className: r()(eU.reaction, U, {
                            [eU.reactionMe]: B,
                            [eU.reactionReadOnly]: I && !S && !O,
                            [eU.shakeReaction]: el && null == et,
                        }),
                        style: eH,
                        children: (0, i.jsx)(h.Y, {
                            targetElementRef: eh,
                            renderPopout: eI,
                            position: "top",
                            children: (e) =>
                                (0, i.jsxs)(p.D, {
                                    ...e,
                                    innerRef: eh,
                                    className: eU.reactionInner,
                                    onClick: eS,
                                    "aria-disabled": I,
                                    "aria-label": (0, q.mb)(B, e$, x, G),
                                    "aria-pressed": B,
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: r()({ [eU.burstGlow]: G }),
                                            style: { boxShadow: `0 0 16px ${n}` },
                                        }),
                                        (0, i.jsxs)("div", {
                                            children: [
                                                G
                                                    ? (0, i.jsxs)(i.Fragment, {
                                                          children: [
                                                              ez &&
                                                                  (0, i.jsx)(L, {
                                                                      messageId: j.id,
                                                                      emoji: x,
                                                                      startPosition: et,
                                                                      targetPosition: eW,
                                                                  }),
                                                              eF &&
                                                                  (0, i.jsx)(eV, {
                                                                      count: T,
                                                                      emoji: x,
                                                                      channelId: j.getChannelId(),
                                                                      messageId: j.id,
                                                                      useChatFontScaling: V,
                                                                      color: n,
                                                                      emojiSize: e_.x.NORMAL,
                                                                  }),
                                                          ],
                                                      })
                                                    : null,
                                                (0, i.jsx)(g.A, {
                                                    className: r()({ [eU.hideEmoji]: el }),
                                                    emojiId: x.id,
                                                    emojiName: x.name,
                                                    size: C,
                                                    animated: x.animated,
                                                }),
                                            ],
                                        }),
                                        b
                                            ? null
                                            : (0, i.jsx)(E.A, {
                                                  className: eU.reactionCount,
                                                  value: e$,
                                                  color: t,
                                                  digitWidth: eD,
                                              }),
                                        (0, i.jsx)(z, { count: e$, reactionRef: ep }),
                                    ],
                                }),
                        }),
                    }),
                }),
        });
    });
