n.d(t, { $: () => eX, q: () => eK });
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
    N = n(114166),
    j = n(666860),
    E = n(776310),
    x = n(941143),
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
    let { messageId: t, emoji: n, startPosition: o, targetPosition: a } = e,
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
        A = a.x - (a.width / 2) * 0.5,
        N = a.y - (a.height / 2) * 0.5,
        j = (0, T.z)({
            from: { y: o.y },
            to: { y: N },
            config: { duration: 450, easing: I.A.Easing.in(I.A.Easing.exp) },
            onChange: (e) => {
                let { y: t } = e;
                u(t);
            },
        }),
        L = (0, T.z)({
            from: { x: o.x, scale: 1, opacity: 1 },
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
        o = (0, w.bG)([D.A], () => D.A.getState()),
        a = (0, B.A)();
    return (
        l.useEffect(() => {
            if (n > i.current) {
                let e = (0, $.A)(t.current);
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
    eo = n(62010),
    ea = n(847374),
    er = n(178653),
    es = n(236285),
    ec = n(770335),
    eu = n(490035),
    ed = n(624793),
    em = n(731383),
    ef = n(450707),
    eg = n(639245),
    eh = n(188645),
    ep = n(465794),
    eA = n(71393),
    eN = n(967198),
    ej = n(202541),
    eE = n(105292),
    ex = n(938213),
    eI = n(961814);
function eT(e) {
    let {
        emojiId: t,
        expressionSourceGuild: n,
        hasJoinedExpressionSourceGuild: l,
        onClose: o,
        popoutData: a,
        currentGuildId: r,
        nonce: s,
    } = e;
    (0, em.i)({ emojiId: t, currentGuildId: r, popoutData: a, emojiSourceGuildId: n?.id, nonce: s });
    let c = n?.isDiscoverable() ?? !1,
        u = null != n && c,
        d = (n?.emojis?.length ?? 0) > 1;
    return u
        ? null == n
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", {
                          className: eI.h2,
                          children: (0, i.jsx)(eg.G7, {
                              expressionSourceGuild: n,
                              hasJoinedExpressionSourceGuild: l,
                              isDisplayingJoinGuildButtonInPopout: a.type === ef.u.JOIN_GUILD,
                              closePopout: o,
                          }),
                      }),
                      d &&
                          (0, i.jsx)(eg.mG, {
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
function eR(e) {
    let { emojiId: t, pack: n, popoutData: o, currentGuildId: a, nonce: r, isNitroTier2: s, onClose: c } = e;
    (0, em.i)({ emojiId: t, currentGuildId: a, popoutData: o, nonce: r });
    let u = l.useContext(er.A);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: eI.Hw }),
            (0, i.jsxs)("div", {
                className: eI.N0,
                children: [
                    (0, i.jsxs)("div", {
                        className: eI.$j,
                        children: [
                            (0, i.jsx)(Z.t, { size: "sm", color: "currentColor" }),
                            (0, i.jsx)(Y.E, { variant: "text-sm/medium", children: eE.intl.string(ex.default.leUgZw) }),
                        ],
                    }),
                    (0, i.jsx)(eo.E, { type: "beta", variant: "primary" }),
                ],
            }),
            (0, i.jsx)("div", {
                className: eI.Rx,
                role: "group",
                "aria-label": n.name,
                children: n.previewEmojis.map((e) =>
                    (0, i.jsx)(h.A, { className: eI.JU, emojiId: e.id, emojiName: e.name, animated: e.animated }, e.id),
                ),
            }),
            (!s || null != u) &&
                (0, i.jsx)("div", {
                    className: eI.yG,
                    children: s
                        ? (0, i.jsx)(el.$, {
                              text: eE.intl.string(ex.default.DtK5IG),
                              variant: "primary",
                              fullWidth: !0,
                              onClick: function () {
                                  null != u && (c(), u());
                              },
                          })
                        : (0, i.jsx)(ep.A, {
                              subscriptionTier: ej.pe.TIER_2,
                              defaultTextOverride: eE.intl.string(eE.t["gl/XHJ"]),
                              fullWidth: !0,
                              onClick: c,
                          }),
                }),
        ],
    });
}
function eb(e) {
    let t,
        { emojiId: n, onClose: o, nonce: r, showingMoreEmojis: s, setShowingMoreEmojis: c } = e,
        u = (0, eu.H)("reaction_emoji_details"),
        { joinedEmojiSourceGuild: d } = (0, m.cf)([es.Ay, eA.A], () => {
            let e = es.Ay.getCustomEmojiById(n);
            return { joinedEmojiSourceGuild: e?.type === ec.i.GUILD ? eA.A.getGuild(e?.guildId) : void 0 };
        }),
        [f, h] = l.useState(void 0),
        [p, A] = l.useState(void 0),
        [N, j] = l.useState(null),
        [E, x] = l.useState(null),
        [I, T] = l.useState(!1),
        [R, b] = l.useState(!1),
        v = null != d,
        C = f?.isDiscoverable() ?? !1,
        S = eN.A.getGuildId(),
        y = null != S && (S === f?.id || S === d?.id),
        O = en.default.getCurrentUser(),
        _ = ei.Ay.isPremium(O, ej.PremiumTypes.TIER_2),
        L = (0, ef.O)({
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
            let e = null != n ? await (0, ed.g_)(n) : null;
            if (null != e)
                switch ((j(e.type), e.type)) {
                    case ed.rV.APPLICATION:
                        A(e.application);
                        break;
                    case ed.rV.GUILD:
                        h(e.guild);
                        break;
                    case ed.rV.PACK:
                        x(e.pack);
                }
            else h(null);
            (T(!1), b(!0));
        }
    }, [n, s, R, v]);
    let k = s && R;
    return v
        ? null
        : k && u && N === ed.rV.PACK && null != E
          ? (0, i.jsx)(eR, {
                emojiId: n,
                pack: E,
                popoutData: L,
                currentGuildId: S,
                nonce: r,
                isNitroTier2: _,
                onClose: o,
            })
          : (0, i.jsxs)("div", {
                children: [
                    k
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("div", { className: eI.Hw }),
                                  null != L.emojiDescription &&
                                      L.type !== ef.u.UNAVAILABLE &&
                                      (0, i.jsx)(Y.E, {
                                          variant: "text-sm/normal",
                                          "aria-label": L.type,
                                          children: L.emojiDescription,
                                      }),
                              ],
                          })
                        : ((t = eE.intl.string(eE.t["Igv+LS"])),
                          (0, i.jsxs)(g.D, {
                              onClick: function () {
                                  c(!s);
                              },
                              className: eI.s4,
                              children: [
                                  (0, i.jsx)(Y.E, {
                                      variant: "text-sm/normal",
                                      color: "none",
                                      "aria-label": t,
                                      children: t,
                                  }),
                                  (0, i.jsx)(ea.a, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: a()(eI.Po, { [eI.Kk]: !s }),
                                  }),
                              ],
                          })),
                    I
                        ? (0, i.jsx)(eh.Y0, { className: eI.eF })
                        : k &&
                          (0, i.jsx)(eT, {
                              emojiId: n,
                              expressionSourceGuild: f,
                              hasJoinedExpressionSourceGuild: v,
                              onClose: o,
                              popoutData: L,
                              currentGuildId: S,
                              nonce: r,
                          }),
                ],
            });
}
var ev = n(191226),
    eC = n(912842);
function eS(e) {
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
        showingMoreEmojis: j,
        setShowingMoreEmojis: E,
    } = e;
    function x() {
        d();
        let e = r ? ee.v.BURST : ee.v.NORMAL;
        (0, ev.$)(n, { emoji: t, reactionType: e });
    }
    let I = "string" == typeof s ? "" === s.trim() : null == s;
    function T() {
        return I || null == s || null == c
            ? null
            : (0, i.jsx)(Y.E, { variant: "text-sm/normal", className: eC.Of, "aria-label": c, children: s });
    }
    let R = (0, m.bG)([en.default], () => en.default.getCurrentUser()),
        b = (0, ei.TW)(R);
    function v() {
        return (
            null != t.id &&
            (0, i.jsx)(eb, { emojiId: t.id, onClose: d, nonce: N, showingMoreEmojis: j, setShowingMoreEmojis: E })
        );
    }
    return l === ee.v.BURST
        ? (0, i.jsxs)("div", {
              className: eC.xQ,
              onMouseEnter: u,
              onMouseLeave: d,
              children: [
                  (0, i.jsx)(g.D, {
                      className: eC.fu,
                      onClick: x,
                      children: (0, i.jsxs)("div", {
                          className: eC.Ok,
                          children: [
                              (0, i.jsx)(h.A, {
                                  className: eC.JS,
                                  emojiId: t.id,
                                  emojiName: t.name,
                                  animated: t.animated,
                                  size: A,
                              }),
                              T(),
                          ],
                      }),
                  }),
                  o
                      ? (0, i.jsxs)("div", {
                            className: a()(eC.h7, eC.j9),
                            children: [
                                b && (0, i.jsx)(Z.t, { size: "md", className: eC.eH, color: Q.k0.PREMIUM_TIER_2 }),
                                (0, i.jsx)(Y.E, {
                                    variant: "text-sm/normal",
                                    className: eC.Of,
                                    children: eE.intl.string(eE.t.ZbNJXn),
                                }),
                            ],
                        })
                      : b
                        ? (0, i.jsxs)("div", {
                              className: a()(eC.h7, eC.j9, eC.rL),
                              children: [
                                  (0, i.jsx)(Z.t, { size: "md", className: eC.eH, color: Q.k0.PREMIUM_TIER_2 }),
                                  (0, i.jsx)(g.D, {
                                      onClick: f,
                                      children: (0, i.jsx)(Y.E, {
                                          variant: "text-sm/normal",
                                          className: eC.Of,
                                          "aria-label": "super reaction tooltip cta",
                                          children: eE.intl.string(eE.t.kVfuVu),
                                      }),
                                  }),
                              ],
                          })
                        : p
                          ? null
                          : (0, i.jsx)("div", {
                                className: a()(eC.h7, eC.j9),
                                children: (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(Y.E, {
                                            variant: "text-sm/normal",
                                            "aria-label": "super reaction tooltip upsell",
                                            children: eE.intl.string(eE.t.W1bMkq),
                                        }),
                                        (0, i.jsx)(et.A, {
                                            subscriptionTier: ej.pe.TIER_2,
                                            textOptions: { textOverride: eE.intl.string(eE.t.mr4K7D) },
                                            className: eC.Yq,
                                            onClick: (e) => e.stopPropagation(),
                                        }),
                                    ],
                                }),
                            }),
                  v(),
              ],
          })
        : (0, i.jsxs)("div", {
              className: eC.xQ,
              onMouseEnter: u,
              onMouseLeave: d,
              children: [
                  (0, i.jsx)(g.D, {
                      onClick: x,
                      children: (0, i.jsxs)("div", {
                          className: eC.xR,
                          children: [
                              (0, i.jsx)(h.A, {
                                  className: eC.JS,
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
var ey = n(885386),
    eO = n(734057),
    e_ = n(956703),
    eL = n(174459),
    ek = n(900210),
    eM = n(994500),
    eP = n(562153);
let eU = {
    standard: {
        reactionTooltip1NInteractive: eE.t.dgtYDJ,
        reactionTooltip1N: eE.t.mXild1,
        reactionTooltip1: eE.t.Oro30L,
        reactionTooltip2NInteractive: eE.t["0GBwVR"],
        reactionTooltip2N: eE.t.UWGs2n,
        reactionTooltip2: eE.t["p+0jvt"],
        reactionTooltip3NInteractive: eE.t["dK6/7W"],
        reactionTooltip3N: eE.t["UnXdX/"],
        reactionTooltip3: eE.t.bbPMcR,
        reactionTooltipNInteractive: eE.t.Thj7LX,
        reactionTooltipN: eE.t.CRrc7c,
    },
    burst: {
        reactionTooltip1NInteractive: eE.t.G98B0W,
        reactionTooltip1N: eE.t["u/03eN"],
        reactionTooltip1: eE.t["z4q3+w"],
        reactionTooltip2NInteractive: eE.t.wkcffp,
        reactionTooltip2N: eE.t.T4EYUu,
        reactionTooltip2: eE.t.R2HykW,
        reactionTooltip3NInteractive: eE.t.OhtGxz,
        reactionTooltip3N: eE.t["M8bwl+"],
        reactionTooltip3: eE.t.sNl6XR,
        reactionTooltipNInteractive: eE.t.nsITOq,
        reactionTooltipN: eE.t.dkieH5,
    },
};
function eG(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ee.v.NORMAL,
        i = arguments.length > 3 ? arguments[3] : void 0,
        l = e_.A.getReactions(e.getChannelId(), e.id, t, 3, n),
        o = eO.A.getChannel(e.getChannelId()),
        a = null == o || o.isPrivate() ? null : o.getGuildId(),
        r = e.getReaction(t),
        s = n === ee.v.BURST,
        c = G()(Array.from(l?.values() ?? []))
            .reject((e) => eM.A.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => eP.Ay.getName(a, o?.id, e))
            .value();
    if (0 === c.length) return "";
    let u = s ? eU.burst : eU.standard,
        d = Math.max(0, ((s ? r?.burst_count : r?.count) ?? 0) - c.length),
        m = (0, q.b3)(t);
    if (1 === c.length)
        if (!(d > 0)) return eE.intl.formatToPlainString(u.reactionTooltip1, { a: c[0], emojiName: m });
        else if (null != i)
            return eE.intl.format(u.reactionTooltip1NInteractive, { a: c[0], n: d, emojiName: m, onClick: i });
        else return eE.intl.formatToPlainString(u.reactionTooltip1N, { a: c[0], n: d, emojiName: m });
    if (2 === c.length)
        if (!(d > 0)) return eE.intl.formatToPlainString(u.reactionTooltip2, { a: c[0], b: c[1], emojiName: m });
        else if (null != i)
            return eE.intl.format(u.reactionTooltip2NInteractive, { a: c[0], b: c[1], n: d, emojiName: m, onClick: i });
        else return eE.intl.formatToPlainString(u.reactionTooltip2N, { a: c[0], b: c[1], n: d, emojiName: m });
    return 3 !== c.length
        ? null != i
            ? eE.intl.format(u.reactionTooltipNInteractive, { n: d, emojiName: m, onClick: i })
            : eE.intl.formatToPlainString(u.reactionTooltipN, { n: d, emojiName: m })
        : d > 0
          ? null != i
              ? eE.intl.format(u.reactionTooltip3NInteractive, {
                    a: c[0],
                    b: c[1],
                    c: c[2],
                    n: d,
                    emojiName: m,
                    onClick: i,
                })
              : eE.intl.formatToPlainString(u.reactionTooltip3N, { a: c[0], b: c[1], c: c[2], n: d, emojiName: m })
          : eE.intl.formatToPlainString(u.reactionTooltip3, { a: c[0], b: c[1], c: c[2], emojiName: m });
}
var ew = n(299072),
    eD = n(73153),
    eH = n(297494),
    e$ = n(60317),
    eB = n(325817),
    eV = n(608437);
let ez = l.memo(function (e) {
    let { channelId: t, messageId: n, emoji: o, useChatFontScaling: a, color: r, count: s, emojiSize: c } = e,
        u = (0, m.bG)([ek.A], () => ek.A.getEffectForEmojiId(t, n, o)),
        d = l.useMemo(() => (0, e$.eT)(o, r, t, { key: u, messageId: n }), [r, u, o, t, n]),
        [f, g] = l.useState(!1),
        h = (0, m.bG)([A.Ay], () => A.Ay.useReducedMotion),
        p = ey.Sf.useSetting(),
        N = l.useCallback(() => {
            eD.h.dispatch({ type: "BURST_REACTION_EFFECT_CLEAR", channelId: t, messageId: n, emoji: o });
        }, [o, t, n]);
    return (l.useEffect(() => {
        function e() {
            if (f) return;
            let e = (0, eH.H)(`${Date.now()}${t}${n}${o.name}`) % 10;
            (e += s > 4 ? 4 : s - 1) > 7 &&
                (g(!0), (0, K.on)({ channelId: t, messageId: n, emoji: o, key: ek.W.RANDOM }));
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
        : (0, i.jsx)(ew.A, { className: (a ? eV : eB).effect, effect: d, onComplete: N, emojiSize: c });
});
var eJ = n(652215),
    eW = n(356974),
    eF = n(988626);
let eX = 12,
    eK = l.memo(function (e) {
        let t,
            n,
            {
                me: o,
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
            H = (0, q.IN)(o, r, w),
            $ = I.getChannelId(),
            B = (0, k.g)(D && null != b ? b : []),
            V = (0, m.bG)([ek.A], () => void 0 !== ek.A.getEffectForEmojiId($, I.id, x)),
            z = (0, m.bG)([A.Ay], () => A.Ay.useReducedMotion),
            Y = ey.Sf.useSetting(),
            Z = en.default.getCurrentUser(),
            Q = (0, ei.TW)(Z),
            et = (0, m.bG)([ek.A], () => ek.A.getReactionPickerAnimation(I.id, x.name, x.id)),
            el = D && (V || null != et),
            [eo, ea] = l.useState(null),
            [er, es] = l.useState(null),
            [ec, eu] = l.useState(!1),
            ed = l.useRef(null),
            em = l.useRef(null),
            ef = l.useRef(null),
            eg = l.useRef(!1),
            eh = l.useRef(!1),
            [ep] = l.useState(() => (0, c.A)()),
            eN = l.useCallback(() => {
                let e = eO.A.getChannel($),
                    t = D
                        ? Q
                            ? ej.e.EMOJI_IN_BURST_REACTION_HOVER
                            : ej.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL
                        : ej.e.EMOJI_IN_REACTION_HOVER;
                (j.Ay.trackWithMetadata(eJ.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                    type: t,
                    expression_id: x.id,
                    expression_name: x.name,
                    is_animated: x.animated,
                    is_custom: null != x.id,
                    nonce: ep,
                }),
                    D &&
                        null != e &&
                        !Q &&
                        (eL.default.track(eJ.HAw.PREMIUM_UPSELL_VIEWED, {
                            type: ej.e.BURST_REACTION_UPSELL,
                            location: {
                                page: e?.getGuildId() != null ? eJ.liQ.GUILD_CHANNEL : eJ.liQ.DM_CHANNEL,
                                section: (0, q.sn)(e),
                                object: eJ.ZSU.EMOJI_REACTION_TOOLTIP_UPSELL,
                            },
                        }),
                        (0, W.sq)(eJ.U7l.PREMIUM_UPSELL_VIEWED, null, () => (0, F.uq)(ej.e.BURST_REACTION_UPSELL))));
            }, [$, x, D, Q, ep]);
        function eE(e) {
            let { closePopout: t } = e,
                n = eO.A.getChannel(I.getChannelId()),
                l = eA.A.getGuild(n?.getGuildId());
            return C && null != l
                ? (0, i.jsx)(P.A, { ctaRef: ed, type: P.w.REACTIONS, guild: l, closePopout: t })
                : (0, i.jsx)(i.Fragment, {});
        }
        function ex(e) {
            e.stopPropagation();
            let t = eO.A.getChannel(I.getChannelId());
            if (C) return void ed.current?.focus();
            if (D && !Q)
                return void (0, X.z)({
                    analytics: {
                        type: ej.e.BURST_REACTION_UPSELL,
                        page: t?.getGuildId() != null ? eJ.liQ.GUILD_CHANNEL : eJ.liQ.DM_CHANNEL,
                        section: null != t ? (0, q.sn)(t) : void 0,
                        object: eJ.ZSU.EMOJI_REACTION_UPSELL,
                    },
                });
            if (O)
                return void (function () {
                    if (!O) return;
                    let e = eO.A.getChannel($);
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
                let e = eG(I, x, w),
                    t = eg.current ? e : eG(I, x, w, eJ.tEg);
                (s()("string" == typeof e, "tooltipTextAria is not a string"), ea(t), es(e));
            }),
            eT = l.useCallback(() => {
                (ea(null),
                    es(null),
                    eu(!1),
                    e_.A.removeChangeListener(eI),
                    eh.current && eL.default.track(eJ.HAw.CLOSE_POPOUT, { nonce: ep }));
            }, [ep, eI]),
            eR = l.useRef(null);
        l.useEffect(
            () => () => {
                clearTimeout(eR.current);
            },
            [],
        );
        let eb = l.useCallback(() => {
            ((eh.current = !0), clearTimeout(eR.current), eI(), e_.A.addChangeListener(eI));
        }, [eI]);
        function ev(e) {
            let t = w === ee.v.BURST;
            (t && !z && Y && (0, K.on)({ channelId: I.getChannelId(), messageId: I.id, emoji: x, key: ek.W.HOVER }),
                (eg.current = "focus" === e.type),
                clearTimeout(eR.current),
                E ||
                    (eR.current = setTimeout(
                        () => {
                            (eb(), eN());
                        },
                        t ? 750 : 500,
                    )));
        }
        function eC() {
            ((eg.current = !1),
                clearTimeout(eR.current),
                (eR.current = setTimeout(() => {
                    eT();
                }, 200)));
        }
        (0, u.l0)(() => {
            eT();
        });
        let eM = G ? eF : eW,
            eP = {},
            eU = D ? R : T;
        if (D && null != B) {
            let { accentColor: e, backgroundColor: i, opacity: l } = B,
                o = (0, d.xp)(i ?? "", l) ?? "";
            (H && (eP.borderColor = i), (eP.background = o), (t = e), (n = e));
        }
        let eD = ef.current?.getBoundingClientRect(),
            eH = null != et && null != eD,
            e$ = null == et;
        return (0, i.jsx)(f.Y, {
            targetElementRef: ef,
            shouldShow: null != eo && "" !== eo,
            renderPopout: function () {
                return (0, i.jsx)(eS, {
                    emoji: x,
                    message: I,
                    type: w,
                    meBurst: r,
                    isBurstReaction: D,
                    tooltipText: eo,
                    tooltipTextAria: er,
                    onMouseEnter: eb,
                    onMouseLeave: eC,
                    onReactionClick: ex,
                    isKeyboardNavigation: eg.current,
                    emojiSizeTooltip: y,
                    nonce: ep,
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
                    onMouseLeave: eC,
                    ref: ef,
                    children: (0, i.jsx)("div", {
                        className: a()(eM.reaction, U, {
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
                                    "aria-label": (0, q.mb)(H, eU, x, D),
                                    "aria-pressed": H,
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: a()({ [eM.burstGlow]: D }),
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
                                                                  (0, i.jsx)(ez, {
                                                                      count: R,
                                                                      emoji: x,
                                                                      channelId: I.getChannelId(),
                                                                      messageId: I.id,
                                                                      useChatFontScaling: G,
                                                                      color: n,
                                                                      emojiSize: ew.x.NORMAL,
                                                                  }),
                                                          ],
                                                      })
                                                    : null,
                                                (0, i.jsx)(h.A, {
                                                    className: a()({ [eM.hideEmoji]: el }),
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
                                                  value: eU,
                                                  color: t,
                                                  digitWidth: eX,
                                              }),
                                        (0, i.jsx)(J, { count: eU, reactionRef: ef }),
                                    ],
                                }),
                        }),
                    }),
                }),
        });
    });
