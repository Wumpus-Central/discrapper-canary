n.d(t, { qT: () => eB, $Z: () => eU, IN: () => eD });
var l = n(627968),
    i = n(64700),
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
    I = n(114166),
    x = n(95561),
    N = n(106778),
    E = n(785651),
    j = n(615300),
    v = n(717421),
    T = n(21161),
    b = n(750506),
    R = n(147421),
    C = n(486020),
    S = n(690521),
    y = n(536283),
    O = n(740032);
let L = [];
function _(e) {
    let { messageId: t, emoji: n, startPosition: a, targetPosition: r } = e,
        [o, s] = i.useState(0),
        [u, c] = i.useState(0),
        [d, m] = i.useState(null),
        { confettiCanvas: h } = i.useContext(T.x),
        g = (0, N.f9)(h, d),
        f = i.useMemo(
            () => [
                {
                    src: null == n.id ? S.Ay.getURL(n.name) : C.Ay.getEmojiURL({ id: n.id, animated: !1, size: 22 }),
                    colorize: !1,
                },
            ],
            [n.name, n.id],
        ),
        A = r.x - (r.width / 2) * 0.5,
        I = r.y - (r.height / 2) * 0.5,
        x = (0, v.z)({
            from: { y: a.y },
            to: { y: I },
            config: { duration: 450, easing: j.A.Easing.in(j.A.Easing.exp) },
            onChange: (e) => {
                let { y: t } = e;
                c(t);
            },
        }),
        _ = (0, v.z)({
            from: { x: a.x, scale: 1, opacity: 1 },
            to: { x: A, scale: 0.5, opacity: 0.4 },
            config: { duration: 450, easing: j.A.Easing.in(j.A.Easing.ease) },
            onRest: () => {
                (0, R.p)(t, n.name, n.id);
            },
            onChange: (e) => {
                let { x: t } = e;
                s(t);
            },
        });
    return (
        i.useEffect(() => {
            o > 0 && u > 0 && g.createConfetti({ ...y.Mw, position: { type: "static", value: { x: o, y: u } } });
        }, [g, o, u]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(N.K_, { ref: m, sprites: f, colors: L, spriteWidth: y.wn, spriteHeight: y.wn }),
                (0, l.jsx)(b.Ay, {
                    children: (0, l.jsx)(E.animated.div, {
                        style: { ...x },
                        className: O.qq,
                        children: (0, l.jsx)(E.animated.div, {
                            style: { ..._, opacity: _.opacity },
                            children: (0, l.jsx)(p.A, {
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
var M = n(891734),
    k = n(202384),
    w = n(698405),
    P = n(735438),
    G = n.n(P),
    V = n(702841),
    U = n(3137),
    D = n(620141),
    B = n(966598),
    H = n(224964),
    $ = n(31408);
function W(e) {
    let { reactionRef: t, count: n } = e,
        l = i.useRef(n),
        a = (0, V.bG)([U.A], () => U.A.getState()),
        r = (0, H.A)(),
        o = (0, B.A)(t.current);
    return (
        i.useEffect(() => {
            if (n > l.current && null != o) {
                let e = (0, P.clamp)(n, a.confettiCount / 2, 2 * a.confettiCount);
                r.fire(o.x, o.y, { count: e });
            }
            l.current = n;
        }, [n, o, r, a.confettiCount]),
        null
    );
}
function z(e) {
    return (0, l.jsx)(D.A, { confettiLocation: $.k.REACTION, children: (0, l.jsx)(W, { ...e }) });
}
var F = n(507545),
    J = n(649963),
    X = n(815807),
    Y = n(834730),
    Q = n(403581),
    Z = n(404374),
    q = n(505527),
    K = n(725807),
    ee = n(287809),
    et = n(927578),
    en = n(847374),
    el = n(159273),
    ei = n(770335),
    ea = n(624793),
    er = n(731383),
    eo = n(450707),
    es = n(861626),
    eu = n(34337),
    ec = n(71393),
    ed = n(967198),
    em = n(375708),
    eh = n(658611);
function eg(e) {
    let {
        emojiId: t,
        expressionSourceGuild: n,
        hasJoinedExpressionSourceGuild: i,
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
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)("div", {
                          className: eh.h2,
                          children: (0, l.jsx)(es.G7, {
                              expressionSourceGuild: n,
                              hasJoinedExpressionSourceGuild: i,
                              isDisplayingJoinGuildButtonInPopout: r.type === eo.u.JOIN_GUILD,
                          }),
                      }),
                      d &&
                          (0, l.jsx)(es.mG, {
                              emojiId: t,
                              expressionSourceGuild: n,
                              hasJoinedEmojiSourceGuild: i,
                              onClose: a,
                              popoutData: r,
                              isDisplayingButtonInTopSection: !1,
                          }),
                  ],
              })
        : (0, l.jsx)(Y.E, { variant: "text-sm/normal", "aria-label": r.type, children: r.emojiDescription });
}
function ep(e) {
    let t,
        { emojiId: n, onClose: a, nonce: o, showingMoreEmojis: s, setShowingMoreEmojis: u } = e,
        { joinedEmojiSourceGuild: c } = (0, m.cf)([el.Ay, ec.A], () => {
            let e = el.Ay.getCustomEmojiById(n);
            return { joinedEmojiSourceGuild: e?.type === ei.i.GUILD ? ec.A.getGuild(e?.guildId) : void 0 };
        }),
        [d, h] = i.useState(void 0),
        [p, f] = i.useState(void 0),
        [A, I] = i.useState(null),
        [x, N] = i.useState(!1),
        [E, j] = i.useState(!1),
        v = null != c,
        T = d?.isDiscoverable() ?? !1,
        b = ed.A.getGuildId(),
        R = null != b && (b === d?.id || b === c?.id),
        C = ee.default.getCurrentUser(),
        S = (0, eo.O)({
            sourceType: A,
            expressionSourceApplication: p ?? null,
            isPremium: et.Ay.isPremium(C),
            hasJoinedEmojiSourceGuild: v,
            isDiscoverable: T,
            emojiComesFromCurrentGuild: R,
            isUnusableRoleSubscriptionEmoji: !1,
            userIsRoleSubscriber: !1,
            isRoleSubscriptionEmoji: !1,
            shouldHideRoleSubscriptionCTA: !1,
        });
    if (
        (i.useEffect(() => {
            !s ||
                E ||
                (async () => {
                    N(!0);
                    let e = null != n ? await (0, ea.g_)(n) : null;
                    if (null != e)
                        switch ((I(e.type), e.type)) {
                            case ea.rV.APPLICATION:
                                f(e.application);
                                break;
                            case ea.rV.GUILD:
                                h(e.guild);
                        }
                    else h(null);
                    N(!1), j(!0);
                })();
        }, [n, s, E]),
        v)
    )
        return null;
    let y = s && (void 0 !== d || void 0 !== p);
    return (0, l.jsxs)("div", {
        children: [
            y
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", { className: eh.Hw }),
                          null != S.emojiDescription &&
                              S.type !== eo.u.UNAVAILABLE &&
                              (0, l.jsx)(Y.E, {
                                  variant: "text-sm/normal",
                                  "aria-label": S.type,
                                  children: S.emojiDescription,
                              }),
                      ],
                  })
                : ((t = em.intl.string(em.t["Igv+LS"])),
                  (0, l.jsxs)(g.D, {
                      onClick: () => {
                          u(!s);
                      },
                      className: eh.s4,
                      children: [
                          (0, l.jsx)(Y.E, { variant: "text-sm/normal", color: "none", "aria-label": t, children: t }),
                          (0, l.jsx)(en.a, {
                              size: "xs",
                              color: "currentColor",
                              className: r()(eh.Po, { [eh.Kk]: !s }),
                          }),
                      ],
                  })),
            x
                ? (0, l.jsx)(eu.Y0, { className: eh.eF })
                : y &&
                  (0, l.jsx)(eg, {
                      emojiId: n,
                      expressionSourceGuild: d,
                      hasJoinedExpressionSourceGuild: v,
                      onClose: a,
                      popoutData: S,
                      currentGuildId: b,
                      nonce: o,
                  }),
        ],
    });
}
var ef = n(191226),
    eA = n(788868),
    eI = n(307217);
function ex(e) {
    let {
            emoji: t,
            message: n,
            type: i,
            meBurst: a,
            isBurstReaction: o = !1,
            tooltipText: s,
            tooltipTextAria: u,
            onMouseEnter: c,
            onMouseLeave: d,
            onReactionClick: h,
            isKeyboardNavigation: f,
            emojiSizeTooltip: A,
            nonce: I,
            showingMoreEmojis: x,
            setShowingMoreEmojis: N,
        } = e,
        E = () => {
            d();
            let e = o ? q.v.BURST : q.v.NORMAL;
            (0, ef.$)(n, { emoji: t, reactionType: e });
        },
        j = "string" == typeof s ? "" === s.trim() : null == s,
        v = () =>
            j || null == s || null == u
                ? null
                : (0, l.jsx)(Y.E, { variant: "text-sm/normal", className: eI.Of, "aria-label": u, children: s }),
        T = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        b = (0, et.TW)(T),
        R = () =>
            null != t.id &&
            (0, l.jsx)(ep, { emojiId: t.id, onClose: d, nonce: I, showingMoreEmojis: x, setShowingMoreEmojis: N });
    return i === q.v.BURST
        ? (0, l.jsxs)("div", {
              className: eI.xQ,
              onMouseEnter: c,
              onMouseLeave: d,
              children: [
                  (0, l.jsx)(g.D, {
                      className: eI.fu,
                      onClick: E,
                      children: (0, l.jsxs)("div", {
                          className: eI.Ok,
                          children: [
                              (0, l.jsx)(p.A, {
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
                      ? (0, l.jsxs)("div", {
                            className: r()(eI.h7, eI.j9),
                            children: [
                                b && (0, l.jsx)(Q.t, { size: "md", className: eI.eH, color: Z.k0.PREMIUM_TIER_2 }),
                                (0, l.jsx)(Y.E, {
                                    variant: "text-sm/normal",
                                    className: eI.Of,
                                    children: em.intl.string(em.t.ZbNJXn),
                                }),
                            ],
                        })
                      : b
                        ? (0, l.jsxs)("div", {
                              className: r()(eI.h7, eI.j9, eI.rL),
                              children: [
                                  (0, l.jsx)(Q.t, { size: "md", className: eI.eH, color: Z.k0.PREMIUM_TIER_2 }),
                                  (0, l.jsx)(g.D, {
                                      onClick: h,
                                      children: (0, l.jsx)(Y.E, {
                                          variant: "text-sm/normal",
                                          className: eI.Of,
                                          "aria-label": "super reaction tooltip cta",
                                          children: em.intl.string(em.t.kVfuVu),
                                      }),
                                  }),
                              ],
                          })
                        : f
                          ? null
                          : (0, l.jsx)("div", {
                                className: r()(eI.h7, eI.j9),
                                children: (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(Y.E, {
                                            variant: "text-sm/normal",
                                            "aria-label": "super reaction tooltip upsell",
                                            children: em.intl.string(em.t.W1bMkq),
                                        }),
                                        (0, l.jsx)(K.A, {
                                            subscriptionTier: eA.pe.TIER_2,
                                            textOptions: { textOverride: em.intl.string(em.t.mr4K7D) },
                                            className: eI.Yq,
                                            onClick: (e) => e.stopPropagation(),
                                        }),
                                    ],
                                }),
                            }),
                  R(),
              ],
          })
        : (0, l.jsxs)("div", {
              className: eI.xQ,
              onMouseEnter: c,
              onMouseLeave: d,
              children: [
                  (0, l.jsx)(g.D, {
                      onClick: E,
                      children: (0, l.jsxs)("div", {
                          className: eI.xR,
                          children: [
                              (0, l.jsx)(p.A, {
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
                  R(),
              ],
          });
}
var eN = n(885386),
    eE = n(734057),
    ej = n(956703),
    ev = n(174459),
    eT = n(900210),
    eb = n(994500),
    eR = n(562153);
let eC = {
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
function eS(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : q.v.NORMAL,
        l = arguments.length > 3 ? arguments[3] : void 0,
        i = ej.A.getReactions(e.getChannelId(), e.id, t, 3, n),
        a = eE.A.getChannel(e.getChannelId()),
        r = null == a || a.isPrivate() ? null : a.getGuildId(),
        o = e.getReaction(t),
        s = n === q.v.BURST,
        u = G()(Array.from(i?.values() ?? []))
            .reject((e) => eb.A.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => eR.Ay.getName(r, a?.id, e))
            .value();
    if (0 === u.length) return "";
    let c = s ? eC.burst : eC.standard,
        d = Math.max(0, ((s ? o?.burst_count : o?.count) ?? 0) - u.length),
        m = (0, X.b3)(t);
    if (1 === u.length)
        if (!(d > 0)) return em.intl.formatToPlainString(c.reactionTooltip1, { a: u[0], emojiName: m });
        else if (null != l)
            return em.intl.format(c.reactionTooltip1NInteractive, { a: u[0], n: d, emojiName: m, onClick: l });
        else return em.intl.formatToPlainString(c.reactionTooltip1N, { a: u[0], n: d, emojiName: m });
    if (2 === u.length)
        if (!(d > 0)) return em.intl.formatToPlainString(c.reactionTooltip2, { a: u[0], b: u[1], emojiName: m });
        else if (null != l)
            return em.intl.format(c.reactionTooltip2NInteractive, { a: u[0], b: u[1], n: d, emojiName: m, onClick: l });
        else return em.intl.formatToPlainString(c.reactionTooltip2N, { a: u[0], b: u[1], n: d, emojiName: m });
    return 3 !== u.length
        ? null != l
            ? em.intl.format(c.reactionTooltipNInteractive, { n: d, emojiName: m, onClick: l })
            : em.intl.formatToPlainString(c.reactionTooltipN, { n: d, emojiName: m })
        : d > 0
          ? null != l
              ? em.intl.format(c.reactionTooltip3NInteractive, {
                    a: u[0],
                    b: u[1],
                    c: u[2],
                    n: d,
                    emojiName: m,
                    onClick: l,
                })
              : em.intl.formatToPlainString(c.reactionTooltip3N, { a: u[0], b: u[1], c: u[2], n: d, emojiName: m })
          : em.intl.formatToPlainString(c.reactionTooltip3, { a: u[0], b: u[1], c: u[2], emojiName: m });
}
var ey = n(299072),
    eO = n(228366),
    eL = n(297494),
    e_ = n(60317),
    eM = n(734646),
    ek = n(15440);
let ew = i.memo(function (e) {
    let { channelId: t, messageId: n, emoji: a, useChatFontScaling: r, color: o, count: s, emojiSize: u } = e,
        c = (0, m.bG)([eT.A], () => eT.A.getEffectForEmojiId(t, n, a)),
        d = i.useMemo(() => (0, e_.eT)(a, o, t, { key: c, messageId: n }), [o, c, a, t, n]),
        [h, g] = i.useState(!1),
        p = (0, m.bG)([A.A], () => A.A.useReducedMotion),
        f = eN.Sf.useSetting(),
        I = i.useCallback(() => {
            eO.h.dispatch({ type: "BURST_REACTION_EFFECT_CLEAR", channelId: t, messageId: n, emoji: a });
        }, [a, t, n]);
    return (i.useEffect(() => {
        let e = () => {
            if (h) return;
            let e = (0, eL.H4)(`${Date.now()}${t}${n}${a.name}`) % 10;
            (e += s > 4 ? 4 : s - 1) > 7 &&
                (g(!0), (0, J.on)({ channelId: t, messageId: n, emoji: a, key: eT.W.RANDOM }));
        };
        if (h || (p && !f) || !f) return;
        e();
        let l = setInterval(e, 5e3);
        return () => {
            clearInterval(l);
        };
    }, [f, t, s, a, a.name, h, n, p]),
    null == c)
        ? null
        : (0, l.jsx)(ey.A, { className: (r ? ek : eM).effect, effect: d, onComplete: I, emojiSize: u });
});
var eP = n(652215),
    eG = n(347353),
    eV = n(866661);
let eU = 12;
function eD(e, t, n) {
    return (n === q.v.BURST && t) || (n === q.v.NORMAL && e);
}
let eB = i.memo(function (e) {
    let t,
        n,
        {
            me: a,
            me_burst: o,
            readOnly: N,
            emoji: E,
            message: j,
            count: v,
            burst_count: T,
            burst_colors: b,
            hideCount: R,
            isLurking: C,
            emojiSize: S,
            emojiSizeTooltip: y = "jumbo",
            isPendingMember: O,
            isForumToolbar: L,
            className: P,
            useChatFontScaling: G,
            type: V,
        } = e,
        U = V === q.v.BURST,
        D = eD(a, o, V),
        B = j.getChannelId(),
        H = (0, M.g)(U && null != b ? b : []),
        $ = (0, m.bG)([eT.A], () => void 0 !== eT.A.getEffectForEmojiId(B, j.id, E)),
        W = (0, m.bG)([A.A], () => A.A.useReducedMotion),
        Y = eN.Sf.useSetting(),
        Q = ee.default.getCurrentUser(),
        Z = (0, et.TW)(Q),
        K = (0, m.bG)([eT.A], () => eT.A.getReactionPickerAnimation(j.id, E.name, E.id)),
        en = U && ($ || null != K),
        [el, ei] = i.useState(null),
        [ea, er] = i.useState(null),
        [eo, es] = i.useState(!1),
        eu = i.useRef(null),
        ed = i.useRef(null),
        em = i.useRef(null),
        eh = i.useRef(!1),
        eg = i.useRef(!1),
        [ep] = i.useState(() => (0, u.A)()),
        ef = i.useCallback(() => {
            let e = eE.A.getChannel(B),
                t = U
                    ? Z
                        ? eA.e.EMOJI_IN_BURST_REACTION_HOVER
                        : eA.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL
                    : eA.e.EMOJI_IN_REACTION_HOVER;
            x.Ay.trackWithMetadata(eP.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                type: t,
                expression_id: E.id,
                expression_name: E.name,
                is_animated: E.animated,
                is_custom: null != E.id,
                nonce: ep,
            }),
                U &&
                    null != e &&
                    !Z &&
                    ev.default.track(eP.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: eA.e.BURST_REACTION_UPSELL,
                        location: {
                            page: e?.getGuildId() != null ? eP.liQ.GUILD_CHANNEL : eP.liQ.DM_CHANNEL,
                            section: (0, X.sn)(e),
                            object: eP.ZSU.EMOJI_REACTION_TOOLTIP_UPSELL,
                        },
                    });
        }, [B, E, U, Z, ep]);
    function eI(e) {
        let { closePopout: t } = e,
            n = eE.A.getChannel(j.getChannelId()),
            i = ec.A.getGuild(n?.getGuildId());
        return C && null != i
            ? (0, l.jsx)(w.A, { ctaRef: eu, type: w.w.REACTIONS, guild: i, closePopout: t })
            : (0, l.jsx)(l.Fragment, {});
    }
    function eb(e) {
        e.stopPropagation();
        let t = eE.A.getChannel(j.getChannelId());
        if (C) return void eu.current?.focus();
        if (U && !Z)
            return void (0, F.z)({
                analytics: {
                    type: eA.e.BURST_REACTION_UPSELL,
                    page: t?.getGuildId() != null ? eP.liQ.GUILD_CHANNEL : eP.liQ.DM_CHANNEL,
                    section: null != t ? (0, X.sn)(t) : void 0,
                    object: eP.ZSU.EMOJI_REACTION_UPSELL,
                },
            });
        if (O)
            return void (function () {
                if (!O) return;
                let e = eE.A.getChannel(B);
                if (null == e) return;
                let t = e.getGuildId();
                null != t && (0, k.Ze)(t);
            })();
        if (N) return;
        let n = L ? J.qN.FORUM_TOOLBAR : J.qN.MESSAGE_INLINE_BUTTON,
            l = { burst: U };
        D
            ? (0, J.et)({ channelId: B, messageId: j.id, emoji: E, location: n, options: l })
            : (0, J.BB)(B, j.id, E, n, l);
    }
    let eR = (0, f.A)(() => {
            let e = eS(j, E, V),
                t = eh.current ? e : eS(j, E, V, eP.tEg);
            s()("string" == typeof e, "tooltipTextAria is not a string"), ei(t), er(e);
        }),
        eC = i.useCallback(() => {
            ei(null),
                er(null),
                es(!1),
                ej.A.removeChangeListener(eR),
                eg.current && ev.default.track(eP.HAw.CLOSE_POPOUT, { nonce: ep });
        }, [ep, eR]),
        eO = i.useRef(null);
    i.useEffect(
        () => () => {
            clearTimeout(eO.current);
        },
        [],
    );
    let eL = i.useCallback(() => {
        (eg.current = !0), clearTimeout(eO.current), eR(), ej.A.addChangeListener(eR);
    }, [eR]);
    function e_(e) {
        let t = V === q.v.BURST;
        t && !W && Y && (0, J.on)({ channelId: j.getChannelId(), messageId: j.id, emoji: E, key: eT.W.HOVER }),
            (eh.current = "focus" === e.type),
            clearTimeout(eO.current),
            N ||
                (eO.current = setTimeout(
                    () => {
                        eL(), ef();
                    },
                    t ? 750 : 500,
                ));
    }
    function eM() {
        (eh.current = !1),
            clearTimeout(eO.current),
            (eO.current = setTimeout(() => {
                eC();
            }, 200));
    }
    (0, c.l0)(() => {
        eC();
    });
    let ek = G ? eV : eG,
        eB = {},
        eH = U ? T : v;
    if (U && null != H) {
        let { accentColor: e, backgroundColor: l, opacity: i } = H,
            a = (0, d.xp)(l ?? "", i) ?? "";
        D && (eB.borderColor = l), (eB.background = a), (t = e), (n = e);
    }
    let e$ = em.current?.getBoundingClientRect(),
        eW = null != K && null != e$,
        ez = null == K;
    return (0, l.jsx)(h.Y, {
        targetElementRef: em,
        shouldShow: null != el && "" !== el,
        renderPopout: function () {
            return (0, l.jsx)(ex, {
                emoji: E,
                message: j,
                type: V,
                meBurst: o,
                isBurstReaction: U,
                tooltipText: el,
                tooltipTextAria: ea,
                onMouseEnter: eL,
                onMouseLeave: eM,
                onReactionClick: eb,
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
            (0, l.jsx)("div", {
                onMouseEnter: e_,
                onMouseLeave: eM,
                ref: em,
                children: (0, l.jsx)("div", {
                    className: r()(ek.reaction, P, {
                        [ek.reactionMe]: D,
                        [ek.reactionReadOnly]: N && !C && !O,
                        [ek.shakeReaction]: en && null == K,
                    }),
                    style: eB,
                    children: (0, l.jsx)(h.Y, {
                        targetElementRef: ed,
                        renderPopout: eI,
                        position: "top",
                        children: (e) =>
                            (0, l.jsxs)(g.D, {
                                ...e,
                                innerRef: ed,
                                className: ek.reactionInner,
                                onClick: eb,
                                "aria-disabled": N,
                                "aria-label": (0, X.mb)(D, eH, E, U),
                                "aria-pressed": D,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: r()({ [ek.burstGlow]: U }),
                                        style: { boxShadow: `0 0 16px ${n}` },
                                    }),
                                    (0, l.jsxs)("div", {
                                        children: [
                                            U
                                                ? (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          eW &&
                                                              (0, l.jsx)(_, {
                                                                  messageId: j.id,
                                                                  emoji: E,
                                                                  startPosition: K,
                                                                  targetPosition: e$,
                                                              }),
                                                          ez &&
                                                              (0, l.jsx)(ew, {
                                                                  count: T,
                                                                  emoji: E,
                                                                  channelId: j.getChannelId(),
                                                                  messageId: j.id,
                                                                  useChatFontScaling: G,
                                                                  color: n,
                                                                  emojiSize: ey.x.NORMAL,
                                                              }),
                                                      ],
                                                  })
                                                : null,
                                            (0, l.jsx)(p.A, {
                                                className: r()({ [ek.hideEmoji]: en }),
                                                emojiId: E.id,
                                                emojiName: E.name,
                                                size: S,
                                                animated: E.animated,
                                            }),
                                        ],
                                    }),
                                    R
                                        ? null
                                        : (0, l.jsx)(I.A, {
                                              className: ek.reactionCount,
                                              value: eH,
                                              color: t,
                                              digitWidth: eU,
                                          }),
                                    (0, l.jsx)(z, { count: eH, reactionRef: em }),
                                ],
                            }),
                    }),
                }),
            }),
    });
});
