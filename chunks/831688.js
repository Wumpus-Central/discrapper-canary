n.d(t, { $: () => eF, q: () => eX });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    o = n.n(a),
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
    N = n(114166),
    j = n(666860),
    E = n(776310),
    x = n(202091),
    I = n(615300),
    T = n(717421),
    R = n(21161),
    b = n(750506),
    v = n(147421),
    C = n(486020),
    S = n(690521),
    y = n(536283),
    O = n(889355);
let _ = [];
function L(e) {
    let { messageId: t, emoji: n, startPosition: a, targetPosition: o } = e,
        [r, s] = l.useState(0),
        [c, u] = l.useState(0),
        [d, m] = l.useState(null),
        { confettiCanvas: f } = l.useContext(R.x),
        g = (0, E.f9)(f, d),
        p = l.useMemo(
            () => [
                {
                    src: null == n.id ? S.Ay.getURL(n.name) : C.Ay.getEmojiURL({ id: n.id, animated: !1, size: 22 }),
                    colorize: !1,
                },
            ],
            [n.name, n.id],
        ),
        A = o.x - (o.width / 2) * 0.5,
        N = o.y - (o.height / 2) * 0.5,
        j = (0, T.z)({
            from: { y: a.y },
            to: { y: N },
            config: { duration: 450, easing: I.A.Easing.in(I.A.Easing.exp) },
            onChange: (e) => {
                let { y: t } = e;
                u(t);
            },
        }),
        L = (0, T.z)({
            from: { x: a.x, scale: 1, opacity: 1 },
            to: { x: A, scale: 0.5, opacity: 0.4 },
            config: { duration: 450, easing: I.A.Easing.in(I.A.Easing.ease) },
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
                (0, i.jsx)(E.K_, { ref: m, sprites: p, colors: _, spriteWidth: y.wn, spriteHeight: y.wn }),
                (0, i.jsx)(b.Ay, {
                    children: (0, i.jsx)(x.animated.div, {
                        style: { ...j },
                        className: O.qq,
                        children: (0, i.jsx)(x.animated.div, {
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
    H = n(620141),
    $ = n(19309),
    B = n(224964),
    V = n(31408);
function z(e) {
    let { reactionRef: t, count: n } = e,
        i = l.useRef(n),
        a = (0, w.bG)([D.A], () => D.A.getState()),
        o = (0, B.A)();
    return (
        l.useEffect(() => {
            if (n > i.current) {
                let e = (0, $.A)(t.current);
                if (null != e) {
                    let t = (0, U.clamp)(n, a.confettiCount / 2, 2 * a.confettiCount);
                    o.fire(e.x, e.y, { count: t });
                }
            }
            i.current = n;
        }, [n, o, a.confettiCount, t]),
        null
    );
}
function J(e) {
    return (0, i.jsx)(H.A, { confettiLocation: V.k.REACTION, children: (0, i.jsx)(z, { ...e }) });
}
var W = n(10392),
    F = n(82498),
    X = n(32605),
    K = n(649963),
    q = n(815807),
    Y = n(834730),
    Z = n(403581),
    Q = n(404374),
    ee = n(505527),
    et = n(725807),
    en = n(287809),
    ei = n(158045),
    el = n(821609),
    ea = n(62010),
    eo = n(847374),
    er = n(236285),
    es = n(770335),
    ec = n(490035),
    eu = n(624793),
    ed = n(731383),
    em = n(450707),
    ef = n(639245),
    eg = n(188645),
    eh = n(465794),
    ep = n(71393),
    eA = n(967198),
    eN = n(202541),
    ej = n(105292),
    eE = n(732447),
    ex = n(961814);
function eI(e) {
    let {
        emojiId: t,
        expressionSourceGuild: n,
        hasJoinedExpressionSourceGuild: l,
        onClose: a,
        popoutData: o,
        currentGuildId: r,
        nonce: s,
    } = e;
    (0, ed.i)({ emojiId: t, currentGuildId: r, popoutData: o, emojiSourceGuildId: n?.id, nonce: s });
    let c = n?.isDiscoverable() ?? !1,
        u = null != n && c,
        d = (n?.emojis?.length ?? 0) > 1;
    return u
        ? null == n
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", {
                          className: ex.h2,
                          children: (0, i.jsx)(ef.G7, {
                              expressionSourceGuild: n,
                              hasJoinedExpressionSourceGuild: l,
                              isDisplayingJoinGuildButtonInPopout: o.type === em.u.JOIN_GUILD,
                              closePopout: a,
                          }),
                      }),
                      d &&
                          (0, i.jsx)(ef.mG, {
                              emojiId: t,
                              expressionSourceGuild: n,
                              hasJoinedEmojiSourceGuild: l,
                              onClose: a,
                              popoutData: o,
                              isDisplayingButtonInTopSection: !1,
                          }),
                  ],
              })
        : (0, i.jsx)(Y.E, { variant: "text-sm/normal", "aria-label": o.type, children: o.emojiDescription });
}
function eT(e) {
    let {
        emojiId: t,
        pack: n,
        popoutData: l,
        currentGuildId: a,
        nonce: o,
        isNitroTier2: r,
        onClose: s,
        onViewSet: c,
    } = e;
    return (
        (0, ed.i)({ emojiId: t, currentGuildId: a, popoutData: l, nonce: o }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: ex.Hw }),
                (0, i.jsxs)("div", {
                    className: ex.N0,
                    children: [
                        (0, i.jsxs)("div", {
                            className: ex.$j,
                            children: [
                                (0, i.jsx)(Z.t, { size: "sm", color: "currentColor" }),
                                (0, i.jsx)(Y.E, {
                                    variant: "text-sm/medium",
                                    children: ej.intl.string(eE.default.leUgZw),
                                }),
                            ],
                        }),
                        (0, i.jsx)(ea.E, { type: "beta", variant: "primary" }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: ex.Rx,
                    role: "group",
                    "aria-label": n.name,
                    children: n.previewEmojis.map((e) =>
                        (0, i.jsx)(
                            h.A,
                            { className: ex.JU, emojiId: e.id, emojiName: e.name, animated: e.animated },
                            e.id,
                        ),
                    ),
                }),
                (0, i.jsx)("div", {
                    className: ex.yG,
                    children: r
                        ? (0, i.jsx)(el.$, {
                              text: ej.intl.string(eE.default.DtK5IG),
                              variant: "primary",
                              fullWidth: !0,
                              onClick: () => c?.(n.id),
                          })
                        : (0, i.jsx)(eh.A, {
                              subscriptionTier: eN.pe.TIER_2,
                              defaultTextOverride: ej.intl.string(ej.t["gl/XHJ"]),
                              fullWidth: !0,
                              onClick: s,
                          }),
                }),
            ],
        })
    );
}
function eR(e) {
    let t,
        { emojiId: n, onClose: a, nonce: r, showingMoreEmojis: s, setShowingMoreEmojis: c } = e,
        u = (0, ec.H)("reaction_emoji_details"),
        { joinedEmojiSourceGuild: d } = (0, m.cf)([er.Ay, ep.A], () => {
            let e = er.Ay.getCustomEmojiById(n);
            return { joinedEmojiSourceGuild: e?.type === es.i.GUILD ? ep.A.getGuild(e?.guildId) : void 0 };
        }),
        [f, h] = l.useState(void 0),
        [p, A] = l.useState(void 0),
        [N, j] = l.useState(null),
        [E, x] = l.useState(null),
        [I, T] = l.useState(!1),
        [R, b] = l.useState(!1),
        v = null != d,
        C = f?.isDiscoverable() ?? !1,
        S = eA.A.getGuildId(),
        y = null != S && (S === f?.id || S === d?.id),
        O = en.default.getCurrentUser(),
        _ = ei.Ay.isPremium(O, eN.PremiumTypes.TIER_2),
        L = (0, em.O)({
            sourceType: N,
            expressionSourceApplication: p ?? null,
            isPremium: ei.Ay.isPremium(O),
            hasJoinedEmojiSourceGuild: v,
            isDiscoverable: C,
            emojiComesFromCurrentGuild: y,
            isUnusableRoleSubscriptionEmoji: !1,
            userIsRoleSubscriber: !1,
            isRoleSubscriptionEmoji: !1,
            shouldHideRoleSubscriptionCTA: !1,
        });
    l.useEffect(() => {
        !s || R || v || e();
        async function e() {
            T(!0);
            let e = null != n ? await (0, eu.g_)(n) : null;
            if (null != e)
                switch ((j(e.type), e.type)) {
                    case eu.rV.APPLICATION:
                        A(e.application);
                        break;
                    case eu.rV.GUILD:
                        h(e.guild);
                        break;
                    case eu.rV.PACK:
                        x(e.pack);
                }
            else h(null);
            (T(!1), b(!0));
        }
    }, [n, s, R, v]);
    let k = s && R;
    return v
        ? null
        : k && u && N === eu.rV.PACK && null != E
          ? (0, i.jsx)(eT, {
                emojiId: n,
                pack: E,
                popoutData: L,
                currentGuildId: S,
                nonce: r,
                isNitroTier2: _,
                onClose: a,
            })
          : (0, i.jsxs)("div", {
                children: [
                    k
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("div", { className: ex.Hw }),
                                  null != L.emojiDescription &&
                                      L.type !== em.u.UNAVAILABLE &&
                                      (0, i.jsx)(Y.E, {
                                          variant: "text-sm/normal",
                                          "aria-label": L.type,
                                          children: L.emojiDescription,
                                      }),
                              ],
                          })
                        : ((t = ej.intl.string(ej.t["Igv+LS"])),
                          (0, i.jsxs)(g.D, {
                              onClick: function () {
                                  c(!s);
                              },
                              className: ex.s4,
                              children: [
                                  (0, i.jsx)(Y.E, {
                                      variant: "text-sm/normal",
                                      color: "none",
                                      "aria-label": t,
                                      children: t,
                                  }),
                                  (0, i.jsx)(eo.a, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: o()(ex.Po, { [ex.Kk]: !s }),
                                  }),
                              ],
                          })),
                    I
                        ? (0, i.jsx)(eg.Y0, { className: ex.eF })
                        : k &&
                          (0, i.jsx)(eI, {
                              emojiId: n,
                              expressionSourceGuild: f,
                              hasJoinedExpressionSourceGuild: v,
                              onClose: a,
                              popoutData: L,
                              currentGuildId: S,
                              nonce: r,
                          }),
                ],
            });
}
var eb = n(191226),
    ev = n(912842);
function eC(e) {
    let {
        emoji: t,
        message: n,
        type: l,
        meBurst: a,
        isBurstReaction: r = !1,
        tooltipText: s,
        tooltipTextAria: c,
        onMouseEnter: u,
        onMouseLeave: d,
        onReactionClick: f,
        isKeyboardNavigation: p,
        emojiSizeTooltip: A,
        nonce: N,
        showingMoreEmojis: j,
        setShowingMoreEmojis: E,
    } = e;
    function x() {
        d();
        let e = r ? ee.v.BURST : ee.v.NORMAL;
        (0, eb.$)(n, { emoji: t, reactionType: e });
    }
    let I = "string" == typeof s ? "" === s.trim() : null == s;
    function T() {
        return I || null == s || null == c
            ? null
            : (0, i.jsx)(Y.E, { variant: "text-sm/normal", className: ev.Of, "aria-label": c, children: s });
    }
    let R = (0, m.bG)([en.default], () => en.default.getCurrentUser()),
        b = (0, ei.TW)(R);
    function v() {
        return (
            null != t.id &&
            (0, i.jsx)(eR, { emojiId: t.id, onClose: d, nonce: N, showingMoreEmojis: j, setShowingMoreEmojis: E })
        );
    }
    return l === ee.v.BURST
        ? (0, i.jsxs)("div", {
              className: ev.xQ,
              onMouseEnter: u,
              onMouseLeave: d,
              children: [
                  (0, i.jsx)(g.D, {
                      className: ev.fu,
                      onClick: x,
                      children: (0, i.jsxs)("div", {
                          className: ev.Ok,
                          children: [
                              (0, i.jsx)(h.A, {
                                  className: ev.JS,
                                  emojiId: t.id,
                                  emojiName: t.name,
                                  animated: t.animated,
                                  size: A,
                              }),
                              T(),
                          ],
                      }),
                  }),
                  a
                      ? (0, i.jsxs)("div", {
                            className: o()(ev.h7, ev.j9),
                            children: [
                                b && (0, i.jsx)(Z.t, { size: "md", className: ev.eH, color: Q.k0.PREMIUM_TIER_2 }),
                                (0, i.jsx)(Y.E, {
                                    variant: "text-sm/normal",
                                    className: ev.Of,
                                    children: ej.intl.string(ej.t.ZbNJXn),
                                }),
                            ],
                        })
                      : b
                        ? (0, i.jsxs)("div", {
                              className: o()(ev.h7, ev.j9, ev.rL),
                              children: [
                                  (0, i.jsx)(Z.t, { size: "md", className: ev.eH, color: Q.k0.PREMIUM_TIER_2 }),
                                  (0, i.jsx)(g.D, {
                                      onClick: f,
                                      children: (0, i.jsx)(Y.E, {
                                          variant: "text-sm/normal",
                                          className: ev.Of,
                                          "aria-label": "super reaction tooltip cta",
                                          children: ej.intl.string(ej.t.kVfuVu),
                                      }),
                                  }),
                              ],
                          })
                        : p
                          ? null
                          : (0, i.jsx)("div", {
                                className: o()(ev.h7, ev.j9),
                                children: (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(Y.E, {
                                            variant: "text-sm/normal",
                                            "aria-label": "super reaction tooltip upsell",
                                            children: ej.intl.string(ej.t.W1bMkq),
                                        }),
                                        (0, i.jsx)(et.A, {
                                            subscriptionTier: eN.pe.TIER_2,
                                            textOptions: { textOverride: ej.intl.string(ej.t.mr4K7D) },
                                            className: ev.Yq,
                                            onClick: (e) => e.stopPropagation(),
                                        }),
                                    ],
                                }),
                            }),
                  v(),
              ],
          })
        : (0, i.jsxs)("div", {
              className: ev.xQ,
              onMouseEnter: u,
              onMouseLeave: d,
              children: [
                  (0, i.jsx)(g.D, {
                      onClick: x,
                      children: (0, i.jsxs)("div", {
                          className: ev.xR,
                          children: [
                              (0, i.jsx)(h.A, {
                                  className: ev.JS,
                                  emojiId: t.id,
                                  emojiName: t.name,
                                  animated: t.animated,
                                  size: A,
                              }),
                              T(),
                          ],
                      }),
                  }),
                  v(),
              ],
          });
}
var eS = n(885386),
    ey = n(734057),
    eO = n(956703),
    e_ = n(174459),
    eL = n(900210),
    ek = n(994500),
    eM = n(562153);
let eP = {
    standard: {
        reactionTooltip1NInteractive: ej.t.dgtYDJ,
        reactionTooltip1N: ej.t.mXild1,
        reactionTooltip1: ej.t.Oro30L,
        reactionTooltip2NInteractive: ej.t["0GBwVR"],
        reactionTooltip2N: ej.t.UWGs2n,
        reactionTooltip2: ej.t["p+0jvt"],
        reactionTooltip3NInteractive: ej.t["dK6/7W"],
        reactionTooltip3N: ej.t["UnXdX/"],
        reactionTooltip3: ej.t.bbPMcR,
        reactionTooltipNInteractive: ej.t.Thj7LX,
        reactionTooltipN: ej.t.CRrc7c,
    },
    burst: {
        reactionTooltip1NInteractive: ej.t.G98B0W,
        reactionTooltip1N: ej.t["u/03eN"],
        reactionTooltip1: ej.t["z4q3+w"],
        reactionTooltip2NInteractive: ej.t.wkcffp,
        reactionTooltip2N: ej.t.T4EYUu,
        reactionTooltip2: ej.t.R2HykW,
        reactionTooltip3NInteractive: ej.t.OhtGxz,
        reactionTooltip3N: ej.t["M8bwl+"],
        reactionTooltip3: ej.t.sNl6XR,
        reactionTooltipNInteractive: ej.t.nsITOq,
        reactionTooltipN: ej.t.dkieH5,
    },
};
function eU(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ee.v.NORMAL,
        i = arguments.length > 3 ? arguments[3] : void 0,
        l = eO.A.getReactions(e.getChannelId(), e.id, t, 3, n),
        a = ey.A.getChannel(e.getChannelId()),
        o = null == a || a.isPrivate() ? null : a.getGuildId(),
        r = e.getReaction(t),
        s = n === ee.v.BURST,
        c = G()(Array.from(l?.values() ?? []))
            .reject((e) => ek.A.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => eM.Ay.getName(o, a?.id, e))
            .value();
    if (0 === c.length) return "";
    let u = s ? eP.burst : eP.standard,
        d = Math.max(0, ((s ? r?.burst_count : r?.count) ?? 0) - c.length),
        m = (0, q.b3)(t);
    if (1 === c.length)
        if (!(d > 0)) return ej.intl.formatToPlainString(u.reactionTooltip1, { a: c[0], emojiName: m });
        else if (null != i)
            return ej.intl.format(u.reactionTooltip1NInteractive, { a: c[0], n: d, emojiName: m, onClick: i });
        else return ej.intl.formatToPlainString(u.reactionTooltip1N, { a: c[0], n: d, emojiName: m });
    if (2 === c.length)
        if (!(d > 0)) return ej.intl.formatToPlainString(u.reactionTooltip2, { a: c[0], b: c[1], emojiName: m });
        else if (null != i)
            return ej.intl.format(u.reactionTooltip2NInteractive, { a: c[0], b: c[1], n: d, emojiName: m, onClick: i });
        else return ej.intl.formatToPlainString(u.reactionTooltip2N, { a: c[0], b: c[1], n: d, emojiName: m });
    return 3 !== c.length
        ? null != i
            ? ej.intl.format(u.reactionTooltipNInteractive, { n: d, emojiName: m, onClick: i })
            : ej.intl.formatToPlainString(u.reactionTooltipN, { n: d, emojiName: m })
        : d > 0
          ? null != i
              ? ej.intl.format(u.reactionTooltip3NInteractive, {
                    a: c[0],
                    b: c[1],
                    c: c[2],
                    n: d,
                    emojiName: m,
                    onClick: i,
                })
              : ej.intl.formatToPlainString(u.reactionTooltip3N, { a: c[0], b: c[1], c: c[2], n: d, emojiName: m })
          : ej.intl.formatToPlainString(u.reactionTooltip3, { a: c[0], b: c[1], c: c[2], emojiName: m });
}
var eG = n(299072),
    ew = n(73153),
    eD = n(297494),
    eH = n(60317),
    e$ = n(325817),
    eB = n(608437);
let eV = l.memo(function (e) {
    let { channelId: t, messageId: n, emoji: a, useChatFontScaling: o, color: r, count: s, emojiSize: c } = e,
        u = (0, m.bG)([eL.A], () => eL.A.getEffectForEmojiId(t, n, a)),
        d = l.useMemo(() => (0, eH.eT)(a, r, t, { key: u, messageId: n }), [r, u, a, t, n]),
        [f, g] = l.useState(!1),
        h = (0, m.bG)([A.Ay], () => A.Ay.useReducedMotion),
        p = eS.Sf.useSetting(),
        N = l.useCallback(() => {
            ew.h.dispatch({ type: "BURST_REACTION_EFFECT_CLEAR", channelId: t, messageId: n, emoji: a });
        }, [a, t, n]);
    return (l.useEffect(() => {
        function e() {
            if (f) return;
            let e = (0, eD.H)(`${Date.now()}${t}${n}${a.name}`) % 10;
            (e += s > 4 ? 4 : s - 1) > 7 &&
                (g(!0), (0, K.on)({ channelId: t, messageId: n, emoji: a, key: eL.W.RANDOM }));
        }
        if (f || (h && !p) || !p) return;
        e();
        let i = setInterval(e, 5e3);
        return () => {
            clearInterval(i);
        };
    }, [p, t, s, a, a.name, f, n, h]),
    null == u)
        ? null
        : (0, i.jsx)(eG.A, { className: (o ? eB : e$).effect, effect: d, onComplete: N, emojiSize: c });
});
var ez = n(652215),
    eJ = n(356974),
    eW = n(988626);
let eF = 12,
    eX = l.memo(function (e) {
        let t,
            n,
            {
                me: a,
                me_burst: r,
                readOnly: E,
                emoji: x,
                message: I,
                count: T,
                burst_count: R,
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
            H = (0, q.IN)(a, r, w),
            $ = I.getChannelId(),
            B = (0, k.g)(D && null != b ? b : []),
            V = (0, m.bG)([eL.A], () => void 0 !== eL.A.getEffectForEmojiId($, I.id, x)),
            z = (0, m.bG)([A.Ay], () => A.Ay.useReducedMotion),
            Y = eS.Sf.useSetting(),
            Z = en.default.getCurrentUser(),
            Q = (0, ei.TW)(Z),
            et = (0, m.bG)([eL.A], () => eL.A.getReactionPickerAnimation(I.id, x.name, x.id)),
            el = D && (V || null != et),
            [ea, eo] = l.useState(null),
            [er, es] = l.useState(null),
            [ec, eu] = l.useState(!1),
            ed = l.useRef(null),
            em = l.useRef(null),
            ef = l.useRef(null),
            eg = l.useRef(!1),
            eh = l.useRef(!1),
            [eA] = l.useState(() => (0, c.A)()),
            ej = l.useCallback(() => {
                let e = ey.A.getChannel($),
                    t = D
                        ? Q
                            ? eN.e.EMOJI_IN_BURST_REACTION_HOVER
                            : eN.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL
                        : eN.e.EMOJI_IN_REACTION_HOVER;
                (j.Ay.trackWithMetadata(ez.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                    type: t,
                    expression_id: x.id,
                    expression_name: x.name,
                    is_animated: x.animated,
                    is_custom: null != x.id,
                    nonce: eA,
                }),
                    D &&
                        null != e &&
                        !Q &&
                        (e_.default.track(ez.HAw.PREMIUM_UPSELL_VIEWED, {
                            type: eN.e.BURST_REACTION_UPSELL,
                            location: {
                                page: e?.getGuildId() != null ? ez.liQ.GUILD_CHANNEL : ez.liQ.DM_CHANNEL,
                                section: (0, q.sn)(e),
                                object: ez.ZSU.EMOJI_REACTION_TOOLTIP_UPSELL,
                            },
                        }),
                        (0, W.sq)(ez.U7l.PREMIUM_UPSELL_VIEWED, null, () => (0, F.uq)(eN.e.BURST_REACTION_UPSELL))));
            }, [$, x, D, Q, eA]);
        function eE(e) {
            let { closePopout: t } = e,
                n = ey.A.getChannel(I.getChannelId()),
                l = ep.A.getGuild(n?.getGuildId());
            return C && null != l
                ? (0, i.jsx)(P.A, { ctaRef: ed, type: P.w.REACTIONS, guild: l, closePopout: t })
                : (0, i.jsx)(i.Fragment, {});
        }
        function ex(e) {
            e.stopPropagation();
            let t = ey.A.getChannel(I.getChannelId());
            if (C) return void ed.current?.focus();
            if (D && !Q)
                return void (0, X.z)({
                    analytics: {
                        type: eN.e.BURST_REACTION_UPSELL,
                        page: t?.getGuildId() != null ? ez.liQ.GUILD_CHANNEL : ez.liQ.DM_CHANNEL,
                        section: null != t ? (0, q.sn)(t) : void 0,
                        object: ez.ZSU.EMOJI_REACTION_UPSELL,
                    },
                });
            if (O)
                return void (function () {
                    if (!O) return;
                    let e = ey.A.getChannel($);
                    if (null == e) return;
                    let t = e.getGuildId();
                    null != t && (0, M.Ze)(t);
                })();
            if (E) return;
            let n = _ ? K.qN.FORUM_TOOLBAR : K.qN.MESSAGE_INLINE_BUTTON,
                i = { burst: D };
            H
                ? (0, K.et)({ channelId: $, messageId: I.id, emoji: x, location: n, options: i })
                : (0, K.BB)($, I.id, x, n, i);
        }
        let eI = (0, p.A)(() => {
                let e = eU(I, x, w),
                    t = eg.current ? e : eU(I, x, w, ez.tEg);
                (s()("string" == typeof e, "tooltipTextAria is not a string"), eo(t), es(e));
            }),
            eT = l.useCallback(() => {
                (eo(null),
                    es(null),
                    eu(!1),
                    eO.A.removeChangeListener(eI),
                    eh.current && e_.default.track(ez.HAw.CLOSE_POPOUT, { nonce: eA }));
            }, [eA, eI]),
            eR = l.useRef(null);
        l.useEffect(
            () => () => {
                clearTimeout(eR.current);
            },
            [],
        );
        let eb = l.useCallback(() => {
            ((eh.current = !0), clearTimeout(eR.current), eI(), eO.A.addChangeListener(eI));
        }, [eI]);
        function ev(e) {
            let t = w === ee.v.BURST;
            (t && !z && Y && (0, K.on)({ channelId: I.getChannelId(), messageId: I.id, emoji: x, key: eL.W.HOVER }),
                (eg.current = "focus" === e.type),
                clearTimeout(eR.current),
                E ||
                    (eR.current = setTimeout(
                        () => {
                            (eb(), ej());
                        },
                        t ? 750 : 500,
                    )));
        }
        function ek() {
            ((eg.current = !1),
                clearTimeout(eR.current),
                (eR.current = setTimeout(() => {
                    eT();
                }, 200)));
        }
        (0, u.l0)(() => {
            eT();
        });
        let eM = G ? eW : eJ,
            eP = {},
            ew = D ? R : T;
        if (D && null != B) {
            let { accentColor: e, backgroundColor: i, opacity: l } = B,
                a = (0, d.xp)(i ?? "", l) ?? "";
            (H && (eP.borderColor = i), (eP.background = a), (t = e), (n = e));
        }
        let eD = ef.current?.getBoundingClientRect(),
            eH = null != et && null != eD,
            e$ = null == et;
        return (0, i.jsx)(f.Y, {
            targetElementRef: ef,
            shouldShow: null != ea && "" !== ea,
            renderPopout: function () {
                return (0, i.jsx)(eC, {
                    emoji: x,
                    message: I,
                    type: w,
                    meBurst: r,
                    isBurstReaction: D,
                    tooltipText: ea,
                    tooltipTextAria: er,
                    onMouseEnter: eb,
                    onMouseLeave: ek,
                    onReactionClick: ex,
                    isKeyboardNavigation: eg.current,
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
                    onMouseEnter: ev,
                    onMouseLeave: ek,
                    ref: ef,
                    children: (0, i.jsx)("div", {
                        className: o()(eM.reaction, U, {
                            [eM.reactionMe]: H,
                            [eM.reactionReadOnly]: E && !C && !O,
                            [eM.shakeReaction]: el && null == et,
                        }),
                        style: eP,
                        children: (0, i.jsx)(f.Y, {
                            targetElementRef: em,
                            renderPopout: eE,
                            position: "top",
                            children: (e) =>
                                (0, i.jsxs)(g.D, {
                                    ...e,
                                    innerRef: em,
                                    className: eM.reactionInner,
                                    onClick: ex,
                                    "aria-disabled": E,
                                    "aria-label": (0, q.mb)(H, ew, x, D),
                                    "aria-pressed": H,
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: o()({ [eM.burstGlow]: D }),
                                            style: { boxShadow: `0 0 16px ${n}` },
                                        }),
                                        (0, i.jsxs)("div", {
                                            children: [
                                                D
                                                    ? (0, i.jsxs)(i.Fragment, {
                                                          children: [
                                                              eH &&
                                                                  (0, i.jsx)(L, {
                                                                      messageId: I.id,
                                                                      emoji: x,
                                                                      startPosition: et,
                                                                      targetPosition: eD,
                                                                  }),
                                                              e$ &&
                                                                  (0, i.jsx)(eV, {
                                                                      count: R,
                                                                      emoji: x,
                                                                      channelId: I.getChannelId(),
                                                                      messageId: I.id,
                                                                      useChatFontScaling: G,
                                                                      color: n,
                                                                      emojiSize: eG.x.NORMAL,
                                                                  }),
                                                          ],
                                                      })
                                                    : null,
                                                (0, i.jsx)(h.A, {
                                                    className: o()({ [eM.hideEmoji]: el }),
                                                    emojiId: x.id,
                                                    emojiName: x.name,
                                                    size: S,
                                                    animated: x.animated,
                                                }),
                                            ],
                                        }),
                                        v
                                            ? null
                                            : (0, i.jsx)(N.A, {
                                                  className: eM.reactionCount,
                                                  value: ew,
                                                  color: t,
                                                  digitWidth: eF,
                                              }),
                                        (0, i.jsx)(J, { count: ew, reactionRef: ef }),
                                    ],
                                }),
                        }),
                    }),
                }),
        });
    });
