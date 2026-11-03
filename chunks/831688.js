n.d(t, { $: () => e$, q: () => eV });
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
    h = n(788026),
    p = n(765548),
    A = n(775602),
    N = n(114166),
    E = n(666860),
    j = n(776310),
    T = n(29477),
    I = n(615300),
    R = n(717421),
    b = n(21161),
    x = n(750506),
    C = n(147421),
    v = n(486020),
    y = n(690521),
    S = n(536283),
    O = n(889355);
let _ = [];
function L(e) {
    let { messageId: t, emoji: n, startPosition: o, targetPosition: a } = e,
        [r, s] = l.useState(0),
        [c, u] = l.useState(0),
        [d, m] = l.useState(null),
        { confettiCanvas: f } = l.useContext(b.x),
        g = (0, j.f9)(f, d),
        p = l.useMemo(
            () => [
                {
                    src: null == n.id ? y.Ay.getURL(n.name) : v.Ay.getEmojiURL({ id: n.id, animated: !1, size: 22 }),
                    colorize: !1,
                },
            ],
            [n.name, n.id],
        ),
        A = a.x - (a.width / 2) * 0.5,
        N = a.y - (a.height / 2) * 0.5,
        E = (0, R.z)({
            from: { y: o.y },
            to: { y: N },
            config: { duration: 450, easing: I.A.Easing.in(I.A.Easing.exp) },
            onChange: (e) => {
                let { y: t } = e;
                u(t);
            },
        }),
        L = (0, R.z)({
            from: { x: o.x, scale: 1, opacity: 1 },
            to: { x: A, scale: 0.5, opacity: 0.4 },
            config: { duration: 450, easing: I.A.Easing.in(I.A.Easing.ease) },
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
            r > 0 && c > 0 && g.createConfetti({ ...S.Mw, position: { type: "static", value: { x: r, y: c } } });
        }, [g, r, c]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(j.K_, { ref: m, sprites: p, colors: _, spriteWidth: S.wn, spriteHeight: S.wn }),
                (0, i.jsx)(x.Ay, {
                    children: (0, i.jsx)(T.animated.div, {
                        style: { ...E },
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
    P = n(202384),
    M = n(698405),
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
    Q = n(505527),
    ee = n(725807),
    et = n(287809),
    en = n(24482),
    ei = n(847374),
    el = n(236285),
    eo = n(770335),
    ea = n(490035),
    er = n(11184),
    es = n(624793),
    ec = n(731383),
    eu = n(450707),
    ed = n(639245),
    em = n(188645),
    ef = n(71393),
    eg = n(967198),
    eh = n(202541),
    ep = n(105292),
    eA = n(961814);
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
    (0, ec.i)({ emojiId: t, currentGuildId: r, popoutData: a, emojiSourceGuildId: n?.id, nonce: s });
    let c = n?.isDiscoverable() ?? !1,
        u = null != n && c,
        d = (n?.emojis?.length ?? 0) > 1;
    return u
        ? null == n
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", {
                          className: eA.h2,
                          children: (0, i.jsx)(ed.G7, {
                              expressionSourceGuild: n,
                              hasJoinedExpressionSourceGuild: l,
                              isDisplayingJoinGuildButtonInPopout: a.type === eu.u.JOIN_GUILD,
                              closePopout: o,
                          }),
                      }),
                      d &&
                          (0, i.jsx)(ed.mG, {
                              emojiId: t,
                              expressionSourceGuild: n,
                              hasJoinedEmojiSourceGuild: l,
                              onClose: o,
                              popoutData: a,
                              isDisplayingButtonInTopSection: !1,
                          }),
                  ],
              })
        : (0, i.jsx)(Y.E, { variant: "body-sm/normal", "aria-label": a.type, children: a.emojiDescription });
}
function eE(e) {
    let t,
        { emojiId: n, onClose: o, nonce: r, showingMoreEmojis: s, setShowingMoreEmojis: c } = e,
        u = (0, ea.H)("reaction_emoji_details"),
        { joinedEmojiSourceGuild: d } = (0, m.cf)([el.Ay, ef.A], () => {
            let e = el.Ay.getCustomEmojiById(n);
            return { joinedEmojiSourceGuild: e?.type === eo.i.GUILD ? ef.A.getGuild(e?.guildId) : void 0 };
        }),
        [f, h] = l.useState(void 0),
        [p, A] = l.useState(void 0),
        [N, E] = l.useState(null),
        [j, T] = l.useState(null),
        [I, R] = l.useState(!1),
        [b, x] = l.useState(!1),
        C = null != d,
        v = f?.isDiscoverable() ?? !1,
        y = eg.A.getGuildId(),
        S = null != y && (y === f?.id || y === d?.id),
        O = et.default.getCurrentUser(),
        _ = en.Ay.isPremium(O, eh.PremiumTypes.TIER_2),
        L = (0, eu.O)({
            sourceType: N,
            expressionSourceApplication: p ?? null,
            isPremium: en.Ay.isPremium(O),
            hasJoinedEmojiSourceGuild: C,
            isDiscoverable: v,
            emojiComesFromCurrentGuild: S,
            isUnusableRoleSubscriptionEmoji: !1,
            userIsRoleSubscriber: !1,
            isRoleSubscriptionEmoji: !1,
            shouldHideRoleSubscriptionCTA: !1,
        });
    l.useEffect(() => {
        !s || b || C || e();
        async function e() {
            R(!0);
            let e = null != n ? await (0, es.g_)(n) : null;
            if (null != e)
                switch ((E(e.type), e.type)) {
                    case es.rV.APPLICATION:
                        A(e.application);
                        break;
                    case es.rV.GUILD:
                        h(e.guild);
                        break;
                    case es.rV.PACK:
                        T(e.pack);
                }
            else h(null);
            (R(!1), x(!0));
        }
    }, [n, s, b, C]);
    let k = s && b;
    return C
        ? null
        : k && u && N === es.rV.PACK && null != j
          ? (0, i.jsx)(er.A, { pack: j, isNitroTier2: _, surface: "reaction_emoji_popout", onClose: o })
          : (0, i.jsxs)("div", {
                children: [
                    k
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("div", { className: eA.Hw }),
                                  null != L.emojiDescription &&
                                      L.type !== eu.u.UNAVAILABLE &&
                                      (0, i.jsx)(Y.E, {
                                          variant: "body-sm/normal",
                                          "aria-label": L.type,
                                          children: L.emojiDescription,
                                      }),
                              ],
                          })
                        : ((t = ep.intl.string(ep.t["Igv+LS"])),
                          (0, i.jsxs)(g.D, {
                              onClick: function () {
                                  c(!s);
                              },
                              className: eA.s4,
                              children: [
                                  (0, i.jsx)(Y.E, {
                                      variant: "body-sm/normal",
                                      color: "none",
                                      "aria-label": t,
                                      children: t,
                                  }),
                                  (0, i.jsx)(ei.a, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: a()(eA.Po, { [eA.Kk]: !s }),
                                  }),
                              ],
                          })),
                    I
                        ? (0, i.jsx)(em.Y0, { className: eA.eF })
                        : k &&
                          (0, i.jsx)(eN, {
                              emojiId: n,
                              expressionSourceGuild: f,
                              hasJoinedExpressionSourceGuild: C,
                              onClose: o,
                              popoutData: L,
                              currentGuildId: y,
                              nonce: r,
                          }),
                ],
            });
}
var ej = n(191226),
    eT = n(912842);
function eI(e) {
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
        nonce: N,
        showingMoreEmojis: E,
        setShowingMoreEmojis: j,
        readOnly: T = !1,
    } = e;
    function I() {
        d();
        let e = r ? Q.v.BURST : Q.v.NORMAL;
        (0, ej.$)(n, { emoji: t, reactionType: e });
    }
    let R = "string" == typeof s ? "" === s.trim() : null == s;
    function b() {
        return R || null == s || null == c
            ? null
            : (0, i.jsx)(Y.E, { variant: "body-sm/normal", className: eT.Of, "aria-label": c, children: s });
    }
    let x = (0, m.bG)([et.default], () => et.default.getCurrentUser()),
        C = (0, en.TW)(x);
    function v() {
        return (
            null != t.id &&
            (0, i.jsx)(eE, { emojiId: t.id, onClose: d, nonce: N, showingMoreEmojis: E, setShowingMoreEmojis: j })
        );
    }
    if (l === Q.v.BURST)
        return (0, i.jsxs)("div", {
            className: eT.xQ,
            onMouseEnter: u,
            onMouseLeave: d,
            children: [
                (0, i.jsx)(g.D, {
                    className: eT.fu,
                    onClick: I,
                    children: (0, i.jsxs)("div", {
                        className: eT.Ok,
                        children: [
                            (0, i.jsx)(h.A, {
                                className: eT.JS,
                                emojiId: t.id,
                                emojiName: t.name,
                                animated: t.animated,
                                size: A,
                            }),
                            b(),
                        ],
                    }),
                }),
                o
                    ? (0, i.jsxs)("div", {
                          className: a()(eT.h7, eT.j9),
                          children: [
                              C && (0, i.jsx)(Z.t, { size: "md", className: eT.eH, color: "currentColor" }),
                              (0, i.jsx)(Y.E, {
                                  variant: "body-sm/normal",
                                  className: eT.Of,
                                  children: ep.intl.string(ep.t.ZbNJXn),
                              }),
                          ],
                      })
                    : C
                      ? (0, i.jsxs)("div", {
                            className: a()(eT.h7, eT.j9, eT.rL),
                            children: [
                                (0, i.jsx)(Z.t, { size: "md", className: eT.eH, color: "currentColor" }),
                                (0, i.jsx)(g.D, {
                                    onClick: f,
                                    children: (0, i.jsx)(Y.E, {
                                        variant: "body-sm/normal",
                                        className: eT.Of,
                                        "aria-label": "super reaction tooltip cta",
                                        children: ep.intl.string(ep.t.kVfuVu),
                                    }),
                                }),
                            ],
                        })
                      : p
                        ? null
                        : (0, i.jsx)("div", {
                              className: a()(eT.h7, eT.j9),
                              children: (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)(Y.E, {
                                          variant: "body-sm/normal",
                                          "aria-label": "super reaction tooltip upsell",
                                          children: ep.intl.string(ep.t.W1bMkq),
                                      }),
                                      (0, i.jsx)(ee.A, {
                                          subscriptionTier: eh.pe.TIER_2,
                                          textOptions: { textOverride: ep.intl.string(ep.t.mr4K7D) },
                                          className: eT.Yq,
                                          onClick: (e) => e.stopPropagation(),
                                      }),
                                  ],
                              }),
                          }),
                v(),
            ],
        });
    let y = (0, i.jsxs)("div", {
        className: a()(eT.xR, { [eT.Fs]: T }),
        children: [
            (0, i.jsx)(h.A, { className: eT.JS, emojiId: t.id, emojiName: t.name, animated: t.animated, size: A }),
            b(),
        ],
    });
    return (0, i.jsxs)("div", {
        className: eT.xQ,
        onMouseEnter: u,
        onMouseLeave: d,
        children: [T ? y : (0, i.jsx)(g.D, { onClick: I, children: y }), v()],
    });
}
var eR = n(253932),
    eb = n(734057),
    ex = n(956703),
    eC = n(174459),
    ev = n(900210),
    ey = n(994500),
    eS = n(562153);
let eO = {
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
function e_(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Q.v.NORMAL,
        i = arguments.length > 3 ? arguments[3] : void 0,
        l = ex.A.getReactions(e.getChannelId(), e.id, t, 3, n),
        o = eb.A.getChannel(e.getChannelId()),
        a = null == o || o.isPrivate() ? null : o.getGuildId(),
        r = e.getReaction(t),
        s = n === Q.v.BURST,
        c = G()(Array.from(l?.values() ?? []))
            .reject((e) => ey.A.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => eS.Ay.getName(a, o?.id, e))
            .value();
    if (0 === c.length) return "";
    let u = s ? eO.burst : eO.standard,
        d = Math.max(0, ((s ? r?.burst_count : r?.count) ?? 0) - c.length),
        m = (0, K.b3)(t);
    if (1 === c.length)
        if (!(d > 0)) return ep.intl.formatToPlainString(u.reactionTooltip1, { a: c[0], emojiName: m });
        else if (null != i)
            return ep.intl.format(u.reactionTooltip1NInteractive, { a: c[0], n: d, emojiName: m, onClick: i });
        else return ep.intl.formatToPlainString(u.reactionTooltip1N, { a: c[0], n: d, emojiName: m });
    if (2 === c.length)
        if (!(d > 0)) return ep.intl.formatToPlainString(u.reactionTooltip2, { a: c[0], b: c[1], emojiName: m });
        else if (null != i)
            return ep.intl.format(u.reactionTooltip2NInteractive, { a: c[0], b: c[1], n: d, emojiName: m, onClick: i });
        else return ep.intl.formatToPlainString(u.reactionTooltip2N, { a: c[0], b: c[1], n: d, emojiName: m });
    return 3 !== c.length
        ? null != i
            ? ep.intl.format(u.reactionTooltipNInteractive, { n: d, emojiName: m, onClick: i })
            : ep.intl.formatToPlainString(u.reactionTooltipN, { n: d, emojiName: m })
        : d > 0
          ? null != i
              ? ep.intl.format(u.reactionTooltip3NInteractive, {
                    a: c[0],
                    b: c[1],
                    c: c[2],
                    n: d,
                    emojiName: m,
                    onClick: i,
                })
              : ep.intl.formatToPlainString(u.reactionTooltip3N, { a: c[0], b: c[1], c: c[2], n: d, emojiName: m })
          : ep.intl.formatToPlainString(u.reactionTooltip3, { a: c[0], b: c[1], c: c[2], emojiName: m });
}
var eL = n(299072),
    ek = n(73153),
    eP = n(297494),
    eM = n(60317),
    eU = n(325817),
    eG = n(608437);
let ew = l.memo(function (e) {
    let { channelId: t, messageId: n, emoji: o, useChatFontScaling: a, color: r, count: s, emojiSize: c } = e,
        u = (0, m.bG)([ev.A], () => ev.A.getEffectForEmojiId(t, n, o)),
        d = l.useMemo(() => (0, eM.eT)(o, r, t, { key: u, messageId: n }), [r, u, o, t, n]),
        [f, g] = l.useState(!1),
        h = (0, m.bG)([A.Ay], () => A.Ay.useReducedMotion),
        p = eR.Sf.useSetting(),
        N = l.useCallback(() => {
            ek.h.dispatch({ type: "BURST_REACTION_EFFECT_CLEAR", channelId: t, messageId: n, emoji: o });
        }, [o, t, n]);
    return (l.useEffect(() => {
        function e() {
            if (f) return;
            let e = (0, eP.H)(`${Date.now()}${t}${n}${o.name}`) % 10;
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
        : (0, i.jsx)(eL.A, { className: (a ? eG : eU).effect, effect: d, onComplete: N, emojiSize: c });
});
var eD = n(652215),
    eB = n(356974),
    eH = n(988626);
let e$ = 12,
    eV = l.memo(function (e) {
        let t,
            n,
            {
                me: o,
                me_burst: r,
                readOnly: j,
                emoji: T,
                message: I,
                count: R,
                burst_count: b,
                burst_colors: x,
                hideCount: C,
                isLurking: v,
                emojiSize: y,
                emojiSizeTooltip: S = "jumbo",
                isPendingMember: O,
                isForumToolbar: _,
                className: U,
                useChatFontScaling: G,
                type: w,
                showTooltipWhenReadOnly: D = !1,
            } = e,
            B = w === Q.v.BURST,
            H = (0, K.IN)(o, r, w),
            $ = I.getChannelId(),
            V = (0, k.g)(B && null != x ? x : []),
            z = (0, m.bG)([ev.A], () => void 0 !== ev.A.getEffectForEmojiId($, I.id, T)),
            Y = (0, m.bG)([A.Ay], () => A.Ay.useReducedMotion),
            Z = eR.Sf.useSetting(),
            ee = et.default.getCurrentUser(),
            ei = (0, en.TW)(ee),
            el = (0, m.bG)([ev.A], () => ev.A.getReactionPickerAnimation(I.id, T.name, T.id)),
            eo = B && (z || null != el),
            [ea, er] = l.useState(null),
            [es, ec] = l.useState(null),
            [eu, ed] = l.useState(!1),
            em = l.useRef(null),
            eg = l.useRef(null),
            ep = l.useRef(null),
            eA = l.useRef(!1),
            eN = l.useRef(!1),
            [eE] = l.useState(() => (0, c.A)()),
            ej = l.useCallback(() => {
                let e = eb.A.getChannel($),
                    t = B
                        ? ei
                            ? eh.e.EMOJI_IN_BURST_REACTION_HOVER
                            : eh.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL
                        : eh.e.EMOJI_IN_REACTION_HOVER;
                (E.Ay.trackWithMetadata(eD.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                    type: t,
                    expression_id: T.id,
                    expression_name: T.name,
                    is_animated: T.animated,
                    is_custom: null != T.id,
                    nonce: eE,
                }),
                    B &&
                        null != e &&
                        !ei &&
                        (eC.default.track(eD.HAw.PREMIUM_UPSELL_VIEWED, {
                            type: eh.e.BURST_REACTION_UPSELL,
                            location: {
                                page: e?.getGuildId() != null ? eD.liQ.GUILD_CHANNEL : eD.liQ.DM_CHANNEL,
                                section: (0, K.sn)(e),
                                object: eD.ZSU.EMOJI_REACTION_TOOLTIP_UPSELL,
                            },
                        }),
                        (0, W.sq)(eD.U7l.PREMIUM_UPSELL_VIEWED, null, () => (0, F.uq)(eh.e.BURST_REACTION_UPSELL))));
            }, [$, T, B, ei, eE]);
        function eT(e) {
            let { closePopout: t } = e,
                n = eb.A.getChannel(I.getChannelId()),
                l = ef.A.getGuild(n?.getGuildId());
            return v && null != l
                ? (0, i.jsx)(M.A, { ctaRef: em, type: M.w.REACTIONS, guild: l, closePopout: t })
                : (0, i.jsx)(i.Fragment, {});
        }
        function ey(e) {
            e.stopPropagation();
            let t = eb.A.getChannel(I.getChannelId());
            if (v) return void em.current?.focus();
            if (B && !ei)
                return void (0, X.z)({
                    analytics: {
                        type: eh.e.BURST_REACTION_UPSELL,
                        page: t?.getGuildId() != null ? eD.liQ.GUILD_CHANNEL : eD.liQ.DM_CHANNEL,
                        section: null != t ? (0, K.sn)(t) : void 0,
                        object: eD.ZSU.EMOJI_REACTION_UPSELL,
                    },
                });
            if (O)
                return void (function () {
                    if (!O) return;
                    let e = eb.A.getChannel($);
                    if (null == e) return;
                    let t = e.getGuildId();
                    null != t && (0, P.Ze)(t);
                })();
            if (j) return;
            let n = _ ? q.qN.FORUM_TOOLBAR : q.qN.MESSAGE_INLINE_BUTTON,
                i = { burst: B };
            H
                ? (0, q.et)({ channelId: $, messageId: I.id, emoji: T, location: n, options: i })
                : (0, q.BB)($, I.id, T, n, i);
        }
        let eS = (0, p.A)(() => {
                let e = e_(I, T, w),
                    t = eA.current ? e : e_(I, T, w, eD.tEg);
                (s()("string" == typeof e, "tooltipTextAria is not a string"), er(t), ec(e));
            }),
            eO = l.useCallback(() => {
                (er(null),
                    ec(null),
                    ed(!1),
                    ex.A.removeChangeListener(eS),
                    eN.current && eC.default.track(eD.HAw.CLOSE_POPOUT, { nonce: eE }));
            }, [eE, eS]),
            ek = l.useRef(null);
        l.useEffect(
            () => () => {
                clearTimeout(ek.current);
            },
            [],
        );
        let eP = l.useCallback(() => {
            ((eN.current = !0), clearTimeout(ek.current), eS(), ex.A.addChangeListener(eS));
        }, [eS]);
        function eM(e) {
            let t = w === Q.v.BURST;
            (t && !Y && Z && (0, q.on)({ channelId: I.getChannelId(), messageId: I.id, emoji: T, key: ev.W.HOVER }),
                (eA.current = "focus" === e.type),
                clearTimeout(ek.current),
                (!j || D) &&
                    (ek.current = setTimeout(
                        () => {
                            (eP(), ej());
                        },
                        t ? 750 : 500,
                    )));
        }
        function eU() {
            ((eA.current = !1),
                clearTimeout(ek.current),
                (ek.current = setTimeout(() => {
                    eO();
                }, 200)));
        }
        (0, u.l0)(() => {
            eO();
        });
        let eG = G ? eH : eB,
            eV = {},
            ez = B ? b : R;
        if (B && null != V) {
            let { accentColor: e, backgroundColor: i, opacity: l } = V,
                o = (0, d.xp)(i ?? "", l) ?? "";
            (H && (eV.borderColor = i), (eV.background = o), (t = e), (n = e));
        }
        let eJ = ep.current?.getBoundingClientRect(),
            eW = null != el && null != eJ,
            eF = null == el;
        return (0, i.jsx)(f.Y, {
            targetElementRef: ep,
            shouldShow: null != ea && "" !== ea,
            renderPopout: function () {
                return (0, i.jsx)(eI, {
                    emoji: T,
                    message: I,
                    type: w,
                    meBurst: r,
                    isBurstReaction: B,
                    tooltipText: ea,
                    tooltipTextAria: es,
                    onMouseEnter: eP,
                    onMouseLeave: eU,
                    onReactionClick: ey,
                    isKeyboardNavigation: eA.current,
                    emojiSizeTooltip: S,
                    nonce: eE,
                    showingMoreEmojis: eu,
                    setShowingMoreEmojis: ed,
                    readOnly: j,
                });
            },
            avoidancePadding: eu ? void 0 : { top: 120 },
            nudgeAlignIntoViewport: !0,
            position: "top",
            align: "center",
            children: () =>
                (0, i.jsx)("div", {
                    onMouseEnter: eM,
                    onMouseLeave: eU,
                    ref: ep,
                    children: (0, i.jsx)("div", {
                        className: a()(eG.reaction, U, {
                            [eG.reactionMe]: H,
                            [eG.reactionReadOnly]: j && !v && !O,
                            [eG.shakeReaction]: eo && null == el,
                        }),
                        style: eV,
                        children: (0, i.jsx)(f.Y, {
                            targetElementRef: eg,
                            renderPopout: eT,
                            position: "top",
                            children: (e) =>
                                (0, i.jsxs)(g.D, {
                                    ...e,
                                    innerRef: eg,
                                    className: eG.reactionInner,
                                    onClick: ey,
                                    "aria-disabled": j,
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
                                                                      messageId: I.id,
                                                                      emoji: T,
                                                                      startPosition: el,
                                                                      targetPosition: eJ,
                                                                  }),
                                                              eF &&
                                                                  (0, i.jsx)(ew, {
                                                                      count: b,
                                                                      emoji: T,
                                                                      channelId: I.getChannelId(),
                                                                      messageId: I.id,
                                                                      useChatFontScaling: G,
                                                                      color: n,
                                                                      emojiSize: eL.x.NORMAL,
                                                                  }),
                                                          ],
                                                      })
                                                    : null,
                                                (0, i.jsx)(h.A, {
                                                    className: a()({ [eG.hideEmoji]: eo }),
                                                    emojiId: T.id,
                                                    emojiName: T.name,
                                                    size: y,
                                                    animated: T.animated,
                                                }),
                                            ],
                                        }),
                                        C
                                            ? null
                                            : (0, i.jsx)(N.A, {
                                                  className: eG.reactionCount,
                                                  value: ez,
                                                  color: t,
                                                  digitWidth: e$,
                                              }),
                                        (0, i.jsx)(J, { count: ez, reactionRef: ep }),
                                    ],
                                }),
                        }),
                    }),
                }),
        });
    });
