n.d(t, { qT: () => eD, $Z: () => eG, IN: () => eB });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(284009),
    s = n.n(o),
    u = n(835245),
    c = n(935399),
    d = n(317097),
    m = n(17928),
    h = n(922016),
    g = n(939249),
    p = n(565645),
    f = n(765548),
    A = n(775602),
    E = n(114166),
    N = n(95561),
    v = n(106778),
    x = n(922139),
    j = n(615300),
    I = n(717421),
    T = n(21161),
    R = n(750506),
    b = n(147421),
    S = n(486020),
    C = n(690521),
    y = n(536283),
    O = n(740032);
let _ = [];
function L(e) {
    let { messageId: t, emoji: n, startPosition: a, targetPosition: r } = e,
        [o, s] = l.useState(0),
        [u, c] = l.useState(0),
        [d, m] = l.useState(null),
        { confettiCanvas: h } = l.useContext(T.x),
        g = (0, v.f9)(h, d),
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
        N = (0, I.z)({
            from: { y: a.y },
            to: { y: E },
            config: { duration: 450, easing: j.A.Easing.in(j.A.Easing.exp) },
            onChange: (e) => {
                let { y: t } = e;
                c(t);
            },
        }),
        L = (0, I.z)({
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
            o > 0 && u > 0 && g.createConfetti({ ...y.Mw, position: { type: "static", value: { x: o, y: u } } });
        }, [g, o, u]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(v.K_, { ref: m, sprites: f, colors: _, spriteWidth: y.wn, spriteHeight: y.wn }),
                (0, i.jsx)(R.Ay, {
                    children: (0, i.jsx)(x.animated.div, {
                        style: { ...N },
                        className: O.qq,
                        children: (0, i.jsx)(x.animated.div, {
                            style: { ...L, opacity: L.opacity },
                            children: (0, i.jsx)(p.A, {
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
    V = n(735438),
    w = n.n(V),
    U = n(702841),
    G = n(3137),
    B = n(620141),
    D = n(966598),
    H = n(224964),
    $ = n(31408);
function W(e) {
    let { reactionRef: t, count: n } = e,
        i = l.useRef(n),
        a = (0, U.bG)([G.A], () => G.A.getState()),
        r = (0, H.A)(),
        o = (0, D.A)(t.current);
    return (
        l.useEffect(() => {
            if (n > i.current && null != o) {
                let e = (0, V.clamp)(n, a.confettiCount / 2, 2 * a.confettiCount);
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
var F = n(507545),
    J = n(649963),
    X = n(815807),
    Y = n(834730),
    Z = n(403581),
    q = n(404374),
    K = n(505527),
    Q = n(725807),
    ee = n(287809),
    et = n(428262),
    en = n(847374),
    ei = n(159273),
    el = n(770335),
    ea = n(624793),
    er = n(731383),
    eo = n(450707),
    es = n(639245),
    eu = n(34337),
    ec = n(71393),
    ed = n(967198),
    em = n(375708),
    eh = n(658611);
function eg(e) {
    let {
        emojiId: t,
        expressionSourceGuild: n,
        hasJoinedExpressionSourceGuild: l,
        onClose: a,
        popoutData: r,
        currentGuildId: o,
        nonce: s,
    } = e;
    (0, er.i)({ emojiId: t, currentGuildId: o, popoutData: r, emojiSourceGuildId: n?.id, nonce: s });
    let u = n?.isDiscoverable() ?? !1,
        c = null != n && u,
        d = (n?.emojis?.length ?? 0) > 1;
    return c
        ? null == n
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", {
                          className: eh.h2,
                          children: (0, i.jsx)(es.G7, {
                              expressionSourceGuild: n,
                              hasJoinedExpressionSourceGuild: l,
                              isDisplayingJoinGuildButtonInPopout: r.type === eo.u.JOIN_GUILD,
                          }),
                      }),
                      d &&
                          (0, i.jsx)(es.mG, {
                              emojiId: t,
                              expressionSourceGuild: n,
                              hasJoinedEmojiSourceGuild: l,
                              onClose: a,
                              popoutData: r,
                              isDisplayingButtonInTopSection: !1,
                          }),
                  ],
              })
        : (0, i.jsx)(Y.E, { variant: "text-sm/normal", "aria-label": r.type, children: r.emojiDescription });
}
function ep(e) {
    let t,
        { emojiId: n, onClose: a, nonce: o, showingMoreEmojis: s, setShowingMoreEmojis: u } = e,
        { joinedEmojiSourceGuild: c } = (0, m.cf)([ei.Ay, ec.A], () => {
            let e = ei.Ay.getCustomEmojiById(n);
            return { joinedEmojiSourceGuild: e?.type === el.i.GUILD ? ec.A.getGuild(e?.guildId) : void 0 };
        }),
        [d, h] = l.useState(void 0),
        [p, f] = l.useState(void 0),
        [A, E] = l.useState(null),
        [N, v] = l.useState(!1),
        [x, j] = l.useState(!1),
        I = null != c,
        T = d?.isDiscoverable() ?? !1,
        R = ed.A.getGuildId(),
        b = null != R && (R === d?.id || R === c?.id),
        S = ee.default.getCurrentUser(),
        C = (0, eo.O)({
            sourceType: A,
            expressionSourceApplication: p ?? null,
            isPremium: et.Ay.isPremium(S),
            hasJoinedEmojiSourceGuild: I,
            isDiscoverable: T,
            emojiComesFromCurrentGuild: b,
            isUnusableRoleSubscriptionEmoji: !1,
            userIsRoleSubscriber: !1,
            isRoleSubscriptionEmoji: !1,
            shouldHideRoleSubscriptionCTA: !1,
        });
    if (
        (l.useEffect(() => {
            !s ||
                x ||
                (async () => {
                    v(!0);
                    let e = null != n ? await (0, ea.g_)(n) : null;
                    if (null != e)
                        switch ((E(e.type), e.type)) {
                            case ea.rV.APPLICATION:
                                f(e.application);
                                break;
                            case ea.rV.GUILD:
                                h(e.guild);
                        }
                    else h(null);
                    v(!1), j(!0);
                })();
        }, [n, s, x]),
        I)
    )
        return null;
    let y = s && (void 0 !== d || void 0 !== p);
    return (0, i.jsxs)("div", {
        children: [
            y
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("div", { className: eh.Hw }),
                          null != C.emojiDescription &&
                              C.type !== eo.u.UNAVAILABLE &&
                              (0, i.jsx)(Y.E, {
                                  variant: "text-sm/normal",
                                  "aria-label": C.type,
                                  children: C.emojiDescription,
                              }),
                      ],
                  })
                : ((t = em.intl.string(em.t["Igv+LS"])),
                  (0, i.jsxs)(g.D, {
                      onClick: () => {
                          u(!s);
                      },
                      className: eh.s4,
                      children: [
                          (0, i.jsx)(Y.E, { variant: "text-sm/normal", color: "none", "aria-label": t, children: t }),
                          (0, i.jsx)(en.a, {
                              size: "xs",
                              color: "currentColor",
                              className: r()(eh.Po, { [eh.Kk]: !s }),
                          }),
                      ],
                  })),
            N
                ? (0, i.jsx)(eu.Y0, { className: eh.eF })
                : y &&
                  (0, i.jsx)(eg, {
                      emojiId: n,
                      expressionSourceGuild: d,
                      hasJoinedExpressionSourceGuild: I,
                      onClose: a,
                      popoutData: C,
                      currentGuildId: R,
                      nonce: o,
                  }),
        ],
    });
}
var ef = n(191226),
    eA = n(788868),
    eE = n(307217);
function eN(e) {
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
            setShowingMoreEmojis: v,
        } = e,
        x = () => {
            d();
            let e = o ? K.v.BURST : K.v.NORMAL;
            (0, ef.$)(n, { emoji: t, reactionType: e });
        },
        j = "string" == typeof s ? "" === s.trim() : null == s,
        I = () =>
            j || null == s || null == u
                ? null
                : (0, i.jsx)(Y.E, { variant: "text-sm/normal", className: eE.Of, "aria-label": u, children: s }),
        T = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        R = (0, et.TW)(T),
        b = () =>
            null != t.id &&
            (0, i.jsx)(ep, { emojiId: t.id, onClose: d, nonce: E, showingMoreEmojis: N, setShowingMoreEmojis: v });
    return l === K.v.BURST
        ? (0, i.jsxs)("div", {
              className: eE.xQ,
              onMouseEnter: c,
              onMouseLeave: d,
              children: [
                  (0, i.jsx)(g.D, {
                      className: eE.fu,
                      onClick: x,
                      children: (0, i.jsxs)("div", {
                          className: eE.Ok,
                          children: [
                              (0, i.jsx)(p.A, {
                                  className: eE.JS,
                                  emojiId: t.id,
                                  emojiName: t.name,
                                  animated: t.animated,
                                  size: A,
                              }),
                              I(),
                          ],
                      }),
                  }),
                  a
                      ? (0, i.jsxs)("div", {
                            className: r()(eE.h7, eE.j9),
                            children: [
                                R && (0, i.jsx)(Z.t, { size: "md", className: eE.eH, color: q.k0.PREMIUM_TIER_2 }),
                                (0, i.jsx)(Y.E, {
                                    variant: "text-sm/normal",
                                    className: eE.Of,
                                    children: em.intl.string(em.t.ZbNJXn),
                                }),
                            ],
                        })
                      : R
                        ? (0, i.jsxs)("div", {
                              className: r()(eE.h7, eE.j9, eE.rL),
                              children: [
                                  (0, i.jsx)(Z.t, { size: "md", className: eE.eH, color: q.k0.PREMIUM_TIER_2 }),
                                  (0, i.jsx)(g.D, {
                                      onClick: h,
                                      children: (0, i.jsx)(Y.E, {
                                          variant: "text-sm/normal",
                                          className: eE.Of,
                                          "aria-label": "super reaction tooltip cta",
                                          children: em.intl.string(em.t.kVfuVu),
                                      }),
                                  }),
                              ],
                          })
                        : f
                          ? null
                          : (0, i.jsx)("div", {
                                className: r()(eE.h7, eE.j9),
                                children: (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(Y.E, {
                                            variant: "text-sm/normal",
                                            "aria-label": "super reaction tooltip upsell",
                                            children: em.intl.string(em.t.W1bMkq),
                                        }),
                                        (0, i.jsx)(Q.A, {
                                            subscriptionTier: eA.pe.TIER_2,
                                            textOptions: { textOverride: em.intl.string(em.t.mr4K7D) },
                                            className: eE.Yq,
                                            onClick: (e) => e.stopPropagation(),
                                        }),
                                    ],
                                }),
                            }),
                  b(),
              ],
          })
        : (0, i.jsxs)("div", {
              className: eE.xQ,
              onMouseEnter: c,
              onMouseLeave: d,
              children: [
                  (0, i.jsx)(g.D, {
                      onClick: x,
                      children: (0, i.jsxs)("div", {
                          className: eE.xR,
                          children: [
                              (0, i.jsx)(p.A, {
                                  className: eE.JS,
                                  emojiId: t.id,
                                  emojiName: t.name,
                                  animated: t.animated,
                                  size: A,
                              }),
                              I(),
                          ],
                      }),
                  }),
                  b(),
              ],
          });
}
var ev = n(885386),
    ex = n(734057),
    ej = n(956703),
    eI = n(174459),
    eT = n(900210),
    eR = n(994500),
    eb = n(562153);
let eS = {
    standard: {
        reactionTooltip1NInteractive: em.t.dgtYDJ,
        reactionTooltip1N: em.t.mXild1,
        reactionTooltip1: em.t.Oro30L,
        reactionTooltip2NInteractive: em.t["0GBwVR"],
        reactionTooltip2N: em.t.UWGs2n,
        reactionTooltip2: em.t["p+0jvt"],
        reactionTooltip3NInteractive: em.t["dK6/7W"],
        reactionTooltip3N: em.t["UnXdX/"],
        reactionTooltip3: em.t.bbPMcR,
        reactionTooltipNInteractive: em.t.Thj7LX,
        reactionTooltipN: em.t.CRrc7c,
    },
    burst: {
        reactionTooltip1NInteractive: em.t.G98B0W,
        reactionTooltip1N: em.t["u/03eN"],
        reactionTooltip1: em.t["z4q3+w"],
        reactionTooltip2NInteractive: em.t.wkcffp,
        reactionTooltip2N: em.t.T4EYUu,
        reactionTooltip2: em.t.R2HykW,
        reactionTooltip3NInteractive: em.t.OhtGxz,
        reactionTooltip3N: em.t["M8bwl+"],
        reactionTooltip3: em.t.sNl6XR,
        reactionTooltipNInteractive: em.t.nsITOq,
        reactionTooltipN: em.t.dkieH5,
    },
};
function eC(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : K.v.NORMAL,
        i = arguments.length > 3 ? arguments[3] : void 0,
        l = ej.A.getReactions(e.getChannelId(), e.id, t, 3, n),
        a = ex.A.getChannel(e.getChannelId()),
        r = null == a || a.isPrivate() ? null : a.getGuildId(),
        o = e.getReaction(t),
        s = n === K.v.BURST,
        u = w()(Array.from(l?.values() ?? []))
            .reject((e) => eR.A.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => eb.Ay.getName(r, a?.id, e))
            .value();
    if (0 === u.length) return "";
    let c = s ? eS.burst : eS.standard,
        d = Math.max(0, ((s ? o?.burst_count : o?.count) ?? 0) - u.length),
        m = (0, X.b3)(t);
    if (1 === u.length)
        if (!(d > 0)) return em.intl.formatToPlainString(c.reactionTooltip1, { a: u[0], emojiName: m });
        else if (null != i)
            return em.intl.format(c.reactionTooltip1NInteractive, { a: u[0], n: d, emojiName: m, onClick: i });
        else return em.intl.formatToPlainString(c.reactionTooltip1N, { a: u[0], n: d, emojiName: m });
    if (2 === u.length)
        if (!(d > 0)) return em.intl.formatToPlainString(c.reactionTooltip2, { a: u[0], b: u[1], emojiName: m });
        else if (null != i)
            return em.intl.format(c.reactionTooltip2NInteractive, { a: u[0], b: u[1], n: d, emojiName: m, onClick: i });
        else return em.intl.formatToPlainString(c.reactionTooltip2N, { a: u[0], b: u[1], n: d, emojiName: m });
    return 3 !== u.length
        ? null != i
            ? em.intl.format(c.reactionTooltipNInteractive, { n: d, emojiName: m, onClick: i })
            : em.intl.formatToPlainString(c.reactionTooltipN, { n: d, emojiName: m })
        : d > 0
          ? null != i
              ? em.intl.format(c.reactionTooltip3NInteractive, {
                    a: u[0],
                    b: u[1],
                    c: u[2],
                    n: d,
                    emojiName: m,
                    onClick: i,
                })
              : em.intl.formatToPlainString(c.reactionTooltip3N, { a: u[0], b: u[1], c: u[2], n: d, emojiName: m })
          : em.intl.formatToPlainString(c.reactionTooltip3, { a: u[0], b: u[1], c: u[2], emojiName: m });
}
var ey = n(299072),
    eO = n(228366),
    e_ = n(297494),
    eL = n(60317),
    ek = n(734646),
    eM = n(15440);
let eP = l.memo(function (e) {
    let { channelId: t, messageId: n, emoji: a, useChatFontScaling: r, color: o, count: s, emojiSize: u } = e,
        c = (0, m.bG)([eT.A], () => eT.A.getEffectForEmojiId(t, n, a)),
        d = l.useMemo(() => (0, eL.eT)(a, o, t, { key: c, messageId: n }), [o, c, a, t, n]),
        [h, g] = l.useState(!1),
        p = (0, m.bG)([A.Ay], () => A.Ay.useReducedMotion),
        f = ev.Sf.useSetting(),
        E = l.useCallback(() => {
            eO.h.dispatch({ type: "BURST_REACTION_EFFECT_CLEAR", channelId: t, messageId: n, emoji: a });
        }, [a, t, n]);
    return (l.useEffect(() => {
        let e = () => {
            if (h) return;
            let e = (0, e_.H)(`${Date.now()}${t}${n}${a.name}`) % 10;
            (e += s > 4 ? 4 : s - 1) > 7 &&
                (g(!0), (0, J.on)({ channelId: t, messageId: n, emoji: a, key: eT.W.RANDOM }));
        };
        if (h || (p && !f) || !f) return;
        e();
        let i = setInterval(e, 5e3);
        return () => {
            clearInterval(i);
        };
    }, [f, t, s, a, a.name, h, n, p]),
    null == c)
        ? null
        : (0, i.jsx)(ey.A, { className: (r ? eM : ek).effect, effect: d, onComplete: E, emojiSize: u });
});
var eV = n(652215),
    ew = n(347353),
    eU = n(866661);
let eG = 12;
function eB(e, t, n) {
    return (n === K.v.BURST && t) || (n === K.v.NORMAL && e);
}
let eD = l.memo(function (e) {
    let t,
        n,
        {
            me: a,
            me_burst: o,
            readOnly: v,
            emoji: x,
            message: j,
            count: I,
            burst_count: T,
            burst_colors: R,
            hideCount: b,
            isLurking: S,
            emojiSize: C,
            emojiSizeTooltip: y = "jumbo",
            isPendingMember: O,
            isForumToolbar: _,
            className: V,
            useChatFontScaling: w,
            type: U,
        } = e,
        G = U === K.v.BURST,
        B = eB(a, o, U),
        D = j.getChannelId(),
        H = (0, k.g)(G && null != R ? R : []),
        $ = (0, m.bG)([eT.A], () => void 0 !== eT.A.getEffectForEmojiId(D, j.id, x)),
        W = (0, m.bG)([A.Ay], () => A.Ay.useReducedMotion),
        Y = ev.Sf.useSetting(),
        Z = ee.default.getCurrentUser(),
        q = (0, et.TW)(Z),
        Q = (0, m.bG)([eT.A], () => eT.A.getReactionPickerAnimation(j.id, x.name, x.id)),
        en = G && ($ || null != Q),
        [ei, el] = l.useState(null),
        [ea, er] = l.useState(null),
        [eo, es] = l.useState(!1),
        eu = l.useRef(null),
        ed = l.useRef(null),
        em = l.useRef(null),
        eh = l.useRef(!1),
        eg = l.useRef(!1),
        [ep] = l.useState(() => (0, u.A)()),
        ef = l.useCallback(() => {
            let e = ex.A.getChannel(D),
                t = G
                    ? q
                        ? eA.e.EMOJI_IN_BURST_REACTION_HOVER
                        : eA.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL
                    : eA.e.EMOJI_IN_REACTION_HOVER;
            N.Ay.trackWithMetadata(eV.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                type: t,
                expression_id: x.id,
                expression_name: x.name,
                is_animated: x.animated,
                is_custom: null != x.id,
                nonce: ep,
            }),
                G &&
                    null != e &&
                    !q &&
                    eI.default.track(eV.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: eA.e.BURST_REACTION_UPSELL,
                        location: {
                            page: e?.getGuildId() != null ? eV.liQ.GUILD_CHANNEL : eV.liQ.DM_CHANNEL,
                            section: (0, X.sn)(e),
                            object: eV.ZSU.EMOJI_REACTION_TOOLTIP_UPSELL,
                        },
                    });
        }, [D, x, G, q, ep]);
    function eE(e) {
        let { closePopout: t } = e,
            n = ex.A.getChannel(j.getChannelId()),
            l = ec.A.getGuild(n?.getGuildId());
        return S && null != l
            ? (0, i.jsx)(P.A, { ctaRef: eu, type: P.w.REACTIONS, guild: l, closePopout: t })
            : (0, i.jsx)(i.Fragment, {});
    }
    function eR(e) {
        e.stopPropagation();
        let t = ex.A.getChannel(j.getChannelId());
        if (S) return void eu.current?.focus();
        if (G && !q)
            return void (0, F.z)({
                analytics: {
                    type: eA.e.BURST_REACTION_UPSELL,
                    page: t?.getGuildId() != null ? eV.liQ.GUILD_CHANNEL : eV.liQ.DM_CHANNEL,
                    section: null != t ? (0, X.sn)(t) : void 0,
                    object: eV.ZSU.EMOJI_REACTION_UPSELL,
                },
            });
        if (O)
            return void (function () {
                if (!O) return;
                let e = ex.A.getChannel(D);
                if (null == e) return;
                let t = e.getGuildId();
                null != t && (0, M.Ze)(t);
            })();
        if (v) return;
        let n = _ ? J.qN.FORUM_TOOLBAR : J.qN.MESSAGE_INLINE_BUTTON,
            i = { burst: G };
        B
            ? (0, J.et)({ channelId: D, messageId: j.id, emoji: x, location: n, options: i })
            : (0, J.BB)(D, j.id, x, n, i);
    }
    let eb = (0, f.A)(() => {
            let e = eC(j, x, U),
                t = eh.current ? e : eC(j, x, U, eV.tEg);
            s()("string" == typeof e, "tooltipTextAria is not a string"), el(t), er(e);
        }),
        eS = l.useCallback(() => {
            el(null),
                er(null),
                es(!1),
                ej.A.removeChangeListener(eb),
                eg.current && eI.default.track(eV.HAw.CLOSE_POPOUT, { nonce: ep });
        }, [ep, eb]),
        eO = l.useRef(null);
    l.useEffect(
        () => () => {
            clearTimeout(eO.current);
        },
        [],
    );
    let e_ = l.useCallback(() => {
        (eg.current = !0), clearTimeout(eO.current), eb(), ej.A.addChangeListener(eb);
    }, [eb]);
    function eL(e) {
        let t = U === K.v.BURST;
        t && !W && Y && (0, J.on)({ channelId: j.getChannelId(), messageId: j.id, emoji: x, key: eT.W.HOVER }),
            (eh.current = "focus" === e.type),
            clearTimeout(eO.current),
            v ||
                (eO.current = setTimeout(
                    () => {
                        e_(), ef();
                    },
                    t ? 750 : 500,
                ));
    }
    function ek() {
        (eh.current = !1),
            clearTimeout(eO.current),
            (eO.current = setTimeout(() => {
                eS();
            }, 200));
    }
    (0, c.l0)(() => {
        eS();
    });
    let eM = w ? eU : ew,
        eD = {},
        eH = G ? T : I;
    if (G && null != H) {
        let { accentColor: e, backgroundColor: i, opacity: l } = H,
            a = (0, d.xp)(i ?? "", l) ?? "";
        B && (eD.borderColor = i), (eD.background = a), (t = e), (n = e);
    }
    let e$ = em.current?.getBoundingClientRect(),
        eW = null != Q && null != e$,
        ez = null == Q;
    return (0, i.jsx)(h.Y, {
        targetElementRef: em,
        shouldShow: null != ei && "" !== ei,
        renderPopout: function () {
            return (0, i.jsx)(eN, {
                emoji: x,
                message: j,
                type: U,
                meBurst: o,
                isBurstReaction: G,
                tooltipText: ei,
                tooltipTextAria: ea,
                onMouseEnter: e_,
                onMouseLeave: ek,
                onReactionClick: eR,
                isKeyboardNavigation: eh.current,
                emojiSizeTooltip: y,
                nonce: ep,
                showingMoreEmojis: eo,
                setShowingMoreEmojis: es,
            });
        },
        avoidancePadding: eo ? void 0 : { top: 120 },
        nudgeAlignIntoViewport: !0,
        position: "top",
        align: "center",
        children: () =>
            (0, i.jsx)("div", {
                onMouseEnter: eL,
                onMouseLeave: ek,
                ref: em,
                children: (0, i.jsx)("div", {
                    className: r()(eM.reaction, V, {
                        [eM.reactionMe]: B,
                        [eM.reactionReadOnly]: v && !S && !O,
                        [eM.shakeReaction]: en && null == Q,
                    }),
                    style: eD,
                    children: (0, i.jsx)(h.Y, {
                        targetElementRef: ed,
                        renderPopout: eE,
                        position: "top",
                        children: (e) =>
                            (0, i.jsxs)(g.D, {
                                ...e,
                                innerRef: ed,
                                className: eM.reactionInner,
                                onClick: eR,
                                "aria-disabled": v,
                                "aria-label": (0, X.mb)(B, eH, x, G),
                                "aria-pressed": B,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: r()({ [eM.burstGlow]: G }),
                                        style: { boxShadow: `0 0 16px ${n}` },
                                    }),
                                    (0, i.jsxs)("div", {
                                        children: [
                                            G
                                                ? (0, i.jsxs)(i.Fragment, {
                                                      children: [
                                                          eW &&
                                                              (0, i.jsx)(L, {
                                                                  messageId: j.id,
                                                                  emoji: x,
                                                                  startPosition: Q,
                                                                  targetPosition: e$,
                                                              }),
                                                          ez &&
                                                              (0, i.jsx)(eP, {
                                                                  count: T,
                                                                  emoji: x,
                                                                  channelId: j.getChannelId(),
                                                                  messageId: j.id,
                                                                  useChatFontScaling: w,
                                                                  color: n,
                                                                  emojiSize: ey.x.NORMAL,
                                                              }),
                                                      ],
                                                  })
                                                : null,
                                            (0, i.jsx)(p.A, {
                                                className: r()({ [eM.hideEmoji]: en }),
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
                                              className: eM.reactionCount,
                                              value: eH,
                                              color: t,
                                              digitWidth: eG,
                                          }),
                                    (0, i.jsx)(z, { count: eH, reactionRef: em }),
                                ],
                            }),
                    }),
                }),
            }),
    });
});
