n.d(t, { $: () => eV, q: () => ez });
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
    f = n(265872),
    g = n(939249),
    h = n(565645),
    p = n(765548),
    A = n(775602),
    E = n(114166),
    N = n(666860),
    I = n(776310),
    T = n(941143),
    j = n(615300),
    R = n(717421),
    x = n(21161),
    b = n(750506),
    C = n(147421),
    v = n(486020),
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
                    src: null == n.id ? S.Ay.getURL(n.name) : v.Ay.getEmojiURL({ id: n.id, animated: !1, size: 22 }),
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
                (0, C.p)(t, n.name, n.id);
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
    V = n(31408);
function z(e) {
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
    return (0, i.jsx)(B.A, { confettiLocation: V.k.REACTION, children: (0, i.jsx)(z, { ...e }) });
}
var W = n(10392),
    F = n(82498),
    X = n(32605),
    q = n(649963),
    K = n(815807),
    Y = n(834730),
    Z = n(403581),
    Q = n(404374),
    ee = n(505527),
    et = n(725807),
    en = n(287809),
    ei = n(927578),
    el = n(847374),
    eo = n(236285),
    ea = n(770335),
    er = n(490035),
    es = n(433716),
    ec = n(624793),
    eu = n(731383),
    ed = n(450707),
    em = n(639245),
    ef = n(188645),
    eg = n(71393),
    eh = n(967198),
    ep = n(202541),
    eA = n(105292),
    eE = n(961814);
function eN(e) {
    let {
        emojiId: t,
        expressionSourceGuild: n,
        hasJoinedExpressionSourceGuild: l,
        onClose: o,
        popoutData: a,
        currentGuildId: r,
        nonce: s,
    } = e;
    (0, eu.i)({ emojiId: t, currentGuildId: r, popoutData: a, emojiSourceGuildId: n?.id, nonce: s });
    let c = n?.isDiscoverable() ?? !1,
        u = null != n && c,
        d = (n?.emojis?.length ?? 0) > 1;
    return u
        ? null == n
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", {
                          className: eE.h2,
                          children: (0, i.jsx)(em.G7, {
                              expressionSourceGuild: n,
                              hasJoinedExpressionSourceGuild: l,
                              isDisplayingJoinGuildButtonInPopout: a.type === ed.u.JOIN_GUILD,
                              closePopout: o,
                          }),
                      }),
                      d &&
                          (0, i.jsx)(em.mG, {
                              emojiId: t,
                              expressionSourceGuild: n,
                              hasJoinedEmojiSourceGuild: l,
                              onClose: o,
                              popoutData: a,
                              isDisplayingButtonInTopSection: !1,
                          }),
                  ],
              })
        : (0, i.jsx)(Y.E, { variant: "text-sm/normal", "aria-label": a.type, children: a.emojiDescription });
}
function eI(e) {
    let t,
        { emojiId: n, onClose: o, nonce: r, showingMoreEmojis: s, setShowingMoreEmojis: c } = e,
        u = (0, er.H)("reaction_emoji_details"),
        { joinedEmojiSourceGuild: d } = (0, m.cf)([eo.Ay, eg.A], () => {
            let e = eo.Ay.getCustomEmojiById(n);
            return { joinedEmojiSourceGuild: e?.type === ea.i.GUILD ? eg.A.getGuild(e?.guildId) : void 0 };
        }),
        [f, h] = l.useState(void 0),
        [p, A] = l.useState(void 0),
        [E, N] = l.useState(null),
        [I, T] = l.useState(null),
        [j, R] = l.useState(!1),
        [x, b] = l.useState(!1),
        C = null != d,
        v = f?.isDiscoverable() ?? !1,
        S = eh.A.getGuildId(),
        y = null != S && (S === f?.id || S === d?.id),
        O = en.default.getCurrentUser(),
        _ = ei.Ay.isPremium(O, ep.PremiumTypes.TIER_2),
        L = (0, ed.O)({
            sourceType: E,
            expressionSourceApplication: p ?? null,
            isPremium: ei.Ay.isPremium(O),
            hasJoinedEmojiSourceGuild: C,
            isDiscoverable: v,
            emojiComesFromCurrentGuild: y,
            isUnusableRoleSubscriptionEmoji: !1,
            userIsRoleSubscriber: !1,
            isRoleSubscriptionEmoji: !1,
            shouldHideRoleSubscriptionCTA: !1,
        });
    l.useEffect(() => {
        !s || x || C || e();
        async function e() {
            R(!0);
            let e = null != n ? await (0, ec.g_)(n) : null;
            if (null != e)
                switch ((N(e.type), e.type)) {
                    case ec.rV.APPLICATION:
                        A(e.application);
                        break;
                    case ec.rV.GUILD:
                        h(e.guild);
                        break;
                    case ec.rV.PACK:
                        T(e.pack);
                }
            else h(null);
            (R(!1), b(!0));
        }
    }, [n, s, x, C]);
    let k = s && x;
    return C
        ? null
        : k && u && E === ec.rV.PACK && null != I
          ? (0, i.jsx)(es.A, { pack: I, isNitroTier2: _, onClose: o })
          : (0, i.jsxs)("div", {
                children: [
                    k
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("div", { className: eE.Hw }),
                                  null != L.emojiDescription &&
                                      L.type !== ed.u.UNAVAILABLE &&
                                      (0, i.jsx)(Y.E, {
                                          variant: "text-sm/normal",
                                          "aria-label": L.type,
                                          children: L.emojiDescription,
                                      }),
                              ],
                          })
                        : ((t = eA.intl.string(eA.t["Igv+LS"])),
                          (0, i.jsxs)(g.D, {
                              onClick: function () {
                                  c(!s);
                              },
                              className: eE.s4,
                              children: [
                                  (0, i.jsx)(Y.E, {
                                      variant: "text-sm/normal",
                                      color: "none",
                                      "aria-label": t,
                                      children: t,
                                  }),
                                  (0, i.jsx)(el.a, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: a()(eE.Po, { [eE.Kk]: !s }),
                                  }),
                              ],
                          })),
                    j
                        ? (0, i.jsx)(ef.Y0, { className: eE.eF })
                        : k &&
                          (0, i.jsx)(eN, {
                              emojiId: n,
                              expressionSourceGuild: f,
                              hasJoinedExpressionSourceGuild: C,
                              onClose: o,
                              popoutData: L,
                              currentGuildId: S,
                              nonce: r,
                          }),
                ],
            });
}
var eT = n(191226),
    ej = n(912842);
function eR(e) {
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
        readOnly: T = !1,
    } = e;
    function j() {
        d();
        let e = r ? ee.v.BURST : ee.v.NORMAL;
        (0, eT.$)(n, { emoji: t, reactionType: e });
    }
    let R = "string" == typeof s ? "" === s.trim() : null == s;
    function x() {
        return R || null == s || null == c
            ? null
            : (0, i.jsx)(Y.E, { variant: "text-sm/normal", className: ej.Of, "aria-label": c, children: s });
    }
    let b = (0, m.bG)([en.default], () => en.default.getCurrentUser()),
        C = (0, ei.TW)(b);
    function v() {
        return (
            null != t.id &&
            (0, i.jsx)(eI, { emojiId: t.id, onClose: d, nonce: E, showingMoreEmojis: N, setShowingMoreEmojis: I })
        );
    }
    if (l === ee.v.BURST)
        return (0, i.jsxs)("div", {
            className: ej.xQ,
            onMouseEnter: u,
            onMouseLeave: d,
            children: [
                (0, i.jsx)(g.D, {
                    className: ej.fu,
                    onClick: j,
                    children: (0, i.jsxs)("div", {
                        className: ej.Ok,
                        children: [
                            (0, i.jsx)(h.A, {
                                className: ej.JS,
                                emojiId: t.id,
                                emojiName: t.name,
                                animated: t.animated,
                                size: A,
                            }),
                            x(),
                        ],
                    }),
                }),
                o
                    ? (0, i.jsxs)("div", {
                          className: a()(ej.h7, ej.j9),
                          children: [
                              C && (0, i.jsx)(Z.t, { size: "md", className: ej.eH, color: Q.k0.PREMIUM_TIER_2 }),
                              (0, i.jsx)(Y.E, {
                                  variant: "text-sm/normal",
                                  className: ej.Of,
                                  children: eA.intl.string(eA.t.ZbNJXn),
                              }),
                          ],
                      })
                    : C
                      ? (0, i.jsxs)("div", {
                            className: a()(ej.h7, ej.j9, ej.rL),
                            children: [
                                (0, i.jsx)(Z.t, { size: "md", className: ej.eH, color: Q.k0.PREMIUM_TIER_2 }),
                                (0, i.jsx)(g.D, {
                                    onClick: f,
                                    children: (0, i.jsx)(Y.E, {
                                        variant: "text-sm/normal",
                                        className: ej.Of,
                                        "aria-label": "super reaction tooltip cta",
                                        children: eA.intl.string(eA.t.kVfuVu),
                                    }),
                                }),
                            ],
                        })
                      : p
                        ? null
                        : (0, i.jsx)("div", {
                              className: a()(ej.h7, ej.j9),
                              children: (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)(Y.E, {
                                          variant: "text-sm/normal",
                                          "aria-label": "super reaction tooltip upsell",
                                          children: eA.intl.string(eA.t.W1bMkq),
                                      }),
                                      (0, i.jsx)(et.A, {
                                          subscriptionTier: ep.pe.TIER_2,
                                          textOptions: { textOverride: eA.intl.string(eA.t.mr4K7D) },
                                          className: ej.Yq,
                                          onClick: (e) => e.stopPropagation(),
                                      }),
                                  ],
                              }),
                          }),
                v(),
            ],
        });
    let S = (0, i.jsxs)("div", {
        className: a()(ej.xR, { [ej.Fs]: T }),
        children: [
            (0, i.jsx)(h.A, { className: ej.JS, emojiId: t.id, emojiName: t.name, animated: t.animated, size: A }),
            x(),
        ],
    });
    return (0, i.jsxs)("div", {
        className: ej.xQ,
        onMouseEnter: u,
        onMouseLeave: d,
        children: [T ? S : (0, i.jsx)(g.D, { onClick: j, children: S }), v()],
    });
}
var ex = n(885386),
    eb = n(734057),
    eC = n(956703),
    ev = n(174459),
    eS = n(900210),
    ey = n(994500),
    eO = n(562153);
let e_ = {
    standard: {
        reactionTooltip1NInteractive: eA.t.dgtYDJ,
        reactionTooltip1N: eA.t.mXild1,
        reactionTooltip1: eA.t.Oro30L,
        reactionTooltip2NInteractive: eA.t["0GBwVR"],
        reactionTooltip2N: eA.t.UWGs2n,
        reactionTooltip2: eA.t["p+0jvt"],
        reactionTooltip3NInteractive: eA.t["dK6/7W"],
        reactionTooltip3N: eA.t["UnXdX/"],
        reactionTooltip3: eA.t.bbPMcR,
        reactionTooltipNInteractive: eA.t.Thj7LX,
        reactionTooltipN: eA.t.CRrc7c,
    },
    burst: {
        reactionTooltip1NInteractive: eA.t.G98B0W,
        reactionTooltip1N: eA.t["u/03eN"],
        reactionTooltip1: eA.t["z4q3+w"],
        reactionTooltip2NInteractive: eA.t.wkcffp,
        reactionTooltip2N: eA.t.T4EYUu,
        reactionTooltip2: eA.t.R2HykW,
        reactionTooltip3NInteractive: eA.t.OhtGxz,
        reactionTooltip3N: eA.t["M8bwl+"],
        reactionTooltip3: eA.t.sNl6XR,
        reactionTooltipNInteractive: eA.t.nsITOq,
        reactionTooltipN: eA.t.dkieH5,
    },
};
function eL(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ee.v.NORMAL,
        i = arguments.length > 3 ? arguments[3] : void 0,
        l = eC.A.getReactions(e.getChannelId(), e.id, t, 3, n),
        o = eb.A.getChannel(e.getChannelId()),
        a = null == o || o.isPrivate() ? null : o.getGuildId(),
        r = e.getReaction(t),
        s = n === ee.v.BURST,
        c = G()(Array.from(l?.values() ?? []))
            .reject((e) => ey.A.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => eO.Ay.getName(a, o?.id, e))
            .value();
    if (0 === c.length) return "";
    let u = s ? e_.burst : e_.standard,
        d = Math.max(0, ((s ? r?.burst_count : r?.count) ?? 0) - c.length),
        m = (0, K.b3)(t);
    if (1 === c.length)
        if (!(d > 0)) return eA.intl.formatToPlainString(u.reactionTooltip1, { a: c[0], emojiName: m });
        else if (null != i)
            return eA.intl.format(u.reactionTooltip1NInteractive, { a: c[0], n: d, emojiName: m, onClick: i });
        else return eA.intl.formatToPlainString(u.reactionTooltip1N, { a: c[0], n: d, emojiName: m });
    if (2 === c.length)
        if (!(d > 0)) return eA.intl.formatToPlainString(u.reactionTooltip2, { a: c[0], b: c[1], emojiName: m });
        else if (null != i)
            return eA.intl.format(u.reactionTooltip2NInteractive, { a: c[0], b: c[1], n: d, emojiName: m, onClick: i });
        else return eA.intl.formatToPlainString(u.reactionTooltip2N, { a: c[0], b: c[1], n: d, emojiName: m });
    return 3 !== c.length
        ? null != i
            ? eA.intl.format(u.reactionTooltipNInteractive, { n: d, emojiName: m, onClick: i })
            : eA.intl.formatToPlainString(u.reactionTooltipN, { n: d, emojiName: m })
        : d > 0
          ? null != i
              ? eA.intl.format(u.reactionTooltip3NInteractive, {
                    a: c[0],
                    b: c[1],
                    c: c[2],
                    n: d,
                    emojiName: m,
                    onClick: i,
                })
              : eA.intl.formatToPlainString(u.reactionTooltip3N, { a: c[0], b: c[1], c: c[2], n: d, emojiName: m })
          : eA.intl.formatToPlainString(u.reactionTooltip3, { a: c[0], b: c[1], c: c[2], emojiName: m });
}
var ek = n(299072),
    eM = n(73153),
    eP = n(297494),
    eU = n(60317),
    eG = n(325817),
    ew = n(608437);
let eD = l.memo(function (e) {
    let { channelId: t, messageId: n, emoji: o, useChatFontScaling: a, color: r, count: s, emojiSize: c } = e,
        u = (0, m.bG)([eS.A], () => eS.A.getEffectForEmojiId(t, n, o)),
        d = l.useMemo(() => (0, eU.eT)(o, r, t, { key: u, messageId: n }), [r, u, o, t, n]),
        [f, g] = l.useState(!1),
        h = (0, m.bG)([A.Ay], () => A.Ay.useReducedMotion),
        p = ex.Sf.useSetting(),
        E = l.useCallback(() => {
            eM.h.dispatch({ type: "BURST_REACTION_EFFECT_CLEAR", channelId: t, messageId: n, emoji: o });
        }, [o, t, n]);
    return (l.useEffect(() => {
        function e() {
            if (f) return;
            let e = (0, eP.H)(`${Date.now()}${t}${n}${o.name}`) % 10;
            (e += s > 4 ? 4 : s - 1) > 7 &&
                (g(!0), (0, q.on)({ channelId: t, messageId: n, emoji: o, key: eS.W.RANDOM }));
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
        : (0, i.jsx)(ek.A, { className: (a ? ew : eG).effect, effect: d, onComplete: E, emojiSize: c });
});
var eB = n(652215),
    eH = n(356974),
    e$ = n(988626);
let eV = 12,
    ez = l.memo(function (e) {
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
                hideCount: C,
                isLurking: v,
                emojiSize: S,
                emojiSizeTooltip: y = "jumbo",
                isPendingMember: O,
                isForumToolbar: _,
                className: U,
                useChatFontScaling: G,
                type: w,
                showTooltipWhenReadOnly: D = !1,
            } = e,
            B = w === ee.v.BURST,
            H = (0, K.IN)(o, r, w),
            $ = j.getChannelId(),
            V = (0, k.g)(B && null != b ? b : []),
            z = (0, m.bG)([eS.A], () => void 0 !== eS.A.getEffectForEmojiId($, j.id, T)),
            Y = (0, m.bG)([A.Ay], () => A.Ay.useReducedMotion),
            Z = ex.Sf.useSetting(),
            Q = en.default.getCurrentUser(),
            et = (0, ei.TW)(Q),
            el = (0, m.bG)([eS.A], () => eS.A.getReactionPickerAnimation(j.id, T.name, T.id)),
            eo = B && (z || null != el),
            [ea, er] = l.useState(null),
            [es, ec] = l.useState(null),
            [eu, ed] = l.useState(!1),
            em = l.useRef(null),
            ef = l.useRef(null),
            eh = l.useRef(null),
            eA = l.useRef(!1),
            eE = l.useRef(!1),
            [eN] = l.useState(() => (0, c.A)()),
            eI = l.useCallback(() => {
                let e = eb.A.getChannel($),
                    t = B
                        ? et
                            ? ep.e.EMOJI_IN_BURST_REACTION_HOVER
                            : ep.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL
                        : ep.e.EMOJI_IN_REACTION_HOVER;
                (N.Ay.trackWithMetadata(eB.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                    type: t,
                    expression_id: T.id,
                    expression_name: T.name,
                    is_animated: T.animated,
                    is_custom: null != T.id,
                    nonce: eN,
                }),
                    B &&
                        null != e &&
                        !et &&
                        (ev.default.track(eB.HAw.PREMIUM_UPSELL_VIEWED, {
                            type: ep.e.BURST_REACTION_UPSELL,
                            location: {
                                page: e?.getGuildId() != null ? eB.liQ.GUILD_CHANNEL : eB.liQ.DM_CHANNEL,
                                section: (0, K.sn)(e),
                                object: eB.ZSU.EMOJI_REACTION_TOOLTIP_UPSELL,
                            },
                        }),
                        (0, W.sq)(eB.U7l.PREMIUM_UPSELL_VIEWED, null, () => (0, F.uq)(ep.e.BURST_REACTION_UPSELL))));
            }, [$, T, B, et, eN]);
        function eT(e) {
            let { closePopout: t } = e,
                n = eb.A.getChannel(j.getChannelId()),
                l = eg.A.getGuild(n?.getGuildId());
            return v && null != l
                ? (0, i.jsx)(P.A, { ctaRef: em, type: P.w.REACTIONS, guild: l, closePopout: t })
                : (0, i.jsx)(i.Fragment, {});
        }
        function ej(e) {
            e.stopPropagation();
            let t = eb.A.getChannel(j.getChannelId());
            if (v) return void em.current?.focus();
            if (B && !et)
                return void (0, X.z)({
                    analytics: {
                        type: ep.e.BURST_REACTION_UPSELL,
                        page: t?.getGuildId() != null ? eB.liQ.GUILD_CHANNEL : eB.liQ.DM_CHANNEL,
                        section: null != t ? (0, K.sn)(t) : void 0,
                        object: eB.ZSU.EMOJI_REACTION_UPSELL,
                    },
                });
            if (O)
                return void (function () {
                    if (!O) return;
                    let e = eb.A.getChannel($);
                    if (null == e) return;
                    let t = e.getGuildId();
                    null != t && (0, M.Ze)(t);
                })();
            if (I) return;
            let n = _ ? q.qN.FORUM_TOOLBAR : q.qN.MESSAGE_INLINE_BUTTON,
                i = { burst: B };
            H
                ? (0, q.et)({ channelId: $, messageId: j.id, emoji: T, location: n, options: i })
                : (0, q.BB)($, j.id, T, n, i);
        }
        let ey = (0, p.A)(() => {
                let e = eL(j, T, w),
                    t = eA.current ? e : eL(j, T, w, eB.tEg);
                (s()("string" == typeof e, "tooltipTextAria is not a string"), er(t), ec(e));
            }),
            eO = l.useCallback(() => {
                (er(null),
                    ec(null),
                    ed(!1),
                    eC.A.removeChangeListener(ey),
                    eE.current && ev.default.track(eB.HAw.CLOSE_POPOUT, { nonce: eN }));
            }, [eN, ey]),
            e_ = l.useRef(null);
        l.useEffect(
            () => () => {
                clearTimeout(e_.current);
            },
            [],
        );
        let eM = l.useCallback(() => {
            ((eE.current = !0), clearTimeout(e_.current), ey(), eC.A.addChangeListener(ey));
        }, [ey]);
        function eP(e) {
            let t = w === ee.v.BURST;
            (t && !Y && Z && (0, q.on)({ channelId: j.getChannelId(), messageId: j.id, emoji: T, key: eS.W.HOVER }),
                (eA.current = "focus" === e.type),
                clearTimeout(e_.current),
                (!I || D) &&
                    (e_.current = setTimeout(
                        () => {
                            (eM(), eI());
                        },
                        t ? 750 : 500,
                    )));
        }
        function eU() {
            ((eA.current = !1),
                clearTimeout(e_.current),
                (e_.current = setTimeout(() => {
                    eO();
                }, 200)));
        }
        (0, u.l0)(() => {
            eO();
        });
        let eG = G ? e$ : eH,
            ew = {},
            ez = B ? x : R;
        if (B && null != V) {
            let { accentColor: e, backgroundColor: i, opacity: l } = V,
                o = (0, d.xp)(i ?? "", l) ?? "";
            (H && (ew.borderColor = i), (ew.background = o), (t = e), (n = e));
        }
        let eJ = eh.current?.getBoundingClientRect(),
            eW = null != el && null != eJ,
            eF = null == el;
        return (0, i.jsx)(f.Y, {
            targetElementRef: eh,
            shouldShow: null != ea && "" !== ea,
            renderPopout: function () {
                return (0, i.jsx)(eR, {
                    emoji: T,
                    message: j,
                    type: w,
                    meBurst: r,
                    isBurstReaction: B,
                    tooltipText: ea,
                    tooltipTextAria: es,
                    onMouseEnter: eM,
                    onMouseLeave: eU,
                    onReactionClick: ej,
                    isKeyboardNavigation: eA.current,
                    emojiSizeTooltip: y,
                    nonce: eN,
                    showingMoreEmojis: eu,
                    setShowingMoreEmojis: ed,
                    readOnly: I,
                });
            },
            avoidancePadding: eu ? void 0 : { top: 120 },
            nudgeAlignIntoViewport: !0,
            position: "top",
            align: "center",
            children: () =>
                (0, i.jsx)("div", {
                    onMouseEnter: eP,
                    onMouseLeave: eU,
                    ref: eh,
                    children: (0, i.jsx)("div", {
                        className: a()(eG.reaction, U, {
                            [eG.reactionMe]: H,
                            [eG.reactionReadOnly]: I && !v && !O,
                            [eG.shakeReaction]: eo && null == el,
                        }),
                        style: ew,
                        children: (0, i.jsx)(f.Y, {
                            targetElementRef: ef,
                            renderPopout: eT,
                            position: "top",
                            children: (e) =>
                                (0, i.jsxs)(g.D, {
                                    ...e,
                                    innerRef: ef,
                                    className: eG.reactionInner,
                                    onClick: ej,
                                    "aria-disabled": I,
                                    "aria-label": (0, K.mb)(H, ez, T, B),
                                    "aria-pressed": H,
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: a()({ [eG.burstGlow]: B }),
                                            style: { boxShadow: `0 0 16px ${n}` },
                                        }),
                                        (0, i.jsxs)("div", {
                                            children: [
                                                B
                                                    ? (0, i.jsxs)(i.Fragment, {
                                                          children: [
                                                              eW &&
                                                                  (0, i.jsx)(L, {
                                                                      messageId: j.id,
                                                                      emoji: T,
                                                                      startPosition: el,
                                                                      targetPosition: eJ,
                                                                  }),
                                                              eF &&
                                                                  (0, i.jsx)(eD, {
                                                                      count: x,
                                                                      emoji: T,
                                                                      channelId: j.getChannelId(),
                                                                      messageId: j.id,
                                                                      useChatFontScaling: G,
                                                                      color: n,
                                                                      emojiSize: ek.x.NORMAL,
                                                                  }),
                                                          ],
                                                      })
                                                    : null,
                                                (0, i.jsx)(h.A, {
                                                    className: a()({ [eG.hideEmoji]: eo }),
                                                    emojiId: T.id,
                                                    emojiName: T.name,
                                                    size: S,
                                                    animated: T.animated,
                                                }),
                                            ],
                                        }),
                                        C
                                            ? null
                                            : (0, i.jsx)(E.A, {
                                                  className: eG.reactionCount,
                                                  value: ez,
                                                  color: t,
                                                  digitWidth: eV,
                                              }),
                                        (0, i.jsx)(J, { count: ez, reactionRef: eh }),
                                    ],
                                }),
                        }),
                    }),
                }),
        });
    });
