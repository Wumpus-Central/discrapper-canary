n.d(t, { qT: () => eD, $Z: () => eV, IN: () => eU });
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
    f = n(775602),
    A = n(114166),
    I = n(95561),
    x = n(106778),
    N = n(785651),
    E = n(615300),
    j = n(717421),
    v = n(21161),
    R = n(750506),
    T = n(147421),
    b = n(486020),
    S = n(690521),
    C = n(536283),
    y = n(740032);
let O = [];
function L(e) {
    let { messageId: t, emoji: n, startPosition: a, targetPosition: r } = e,
        [o, s] = i.useState(0),
        [u, c] = i.useState(0),
        [d, m] = i.useState(null),
        { confettiCanvas: h } = i.useContext(v.x),
        g = (0, x.f9)(h, d),
        f = i.useMemo(
            () => [
                {
                    src: null == n.id ? S.Ay.getURL(n.name) : b.Ay.getEmojiURL({ id: n.id, animated: !1, size: 22 }),
                    colorize: !1,
                },
            ],
            [n.name, n.id],
        ),
        A = r.x - (r.width / 2) * 0.5,
        I = r.y - (r.height / 2) * 0.5,
        L = (0, j.z)({
            from: { y: a.y },
            to: { y: I },
            config: { duration: 450, easing: E.A.Easing.in(E.A.Easing.exp) },
            onChange: (e) => {
                let { y: t } = e;
                c(t);
            },
        }),
        _ = (0, j.z)({
            from: { x: a.x, scale: 1, opacity: 1 },
            to: { x: A, scale: 0.5, opacity: 0.4 },
            config: { duration: 450, easing: E.A.Easing.in(E.A.Easing.ease) },
            onRest: () => {
                (0, T.p)(t, n.name, n.id);
            },
            onChange: (e) => {
                let { x: t } = e;
                s(t);
            },
        });
    return (
        i.useEffect(() => {
            o > 0 && u > 0 && g.createConfetti({ ...C.Mw, position: { type: "static", value: { x: o, y: u } } });
        }, [g, o, u]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(x.K_, { ref: m, sprites: f, colors: O, spriteWidth: C.wn, spriteHeight: C.wn }),
                (0, l.jsx)(R.Ay, {
                    children: (0, l.jsx)(N.animated.div, {
                        style: { ...L },
                        className: y.qq,
                        children: (0, l.jsx)(N.animated.div, {
                            style: { ..._, opacity: _.opacity },
                            children: (0, l.jsx)(p.A, {
                                className: y.Zg,
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
var _ = n(891734),
    M = n(202384),
    k = n(698405),
    w = n(735438),
    P = n.n(w),
    G = n(702841),
    V = n(3137),
    U = n(620141),
    D = n(966598),
    B = n(224964),
    H = n(31408);
function $(e) {
    let { reactionRef: t, count: n } = e,
        l = i.useRef(n),
        a = (0, G.bG)([V.A], () => V.A.getState()),
        r = (0, B.A)(),
        o = (0, D.A)(t.current);
    return (
        i.useEffect(() => {
            if (n > l.current && null != o) {
                let e = (0, w.clamp)(n, a.confettiCount / 2, 2 * a.confettiCount);
                r.fire(o.x, o.y, { count: e });
            }
            l.current = n;
        }, [n, o, r, a.confettiCount]),
        null
    );
}
function W(e) {
    return (0, l.jsx)(U.A, { confettiLocation: H.k.REACTION, children: (0, l.jsx)($, { ...e }) });
}
var z = n(507545),
    F = n(649963),
    J = n(815807),
    X = n(834730),
    Y = n(403581),
    Q = n(404374),
    Z = n(505527),
    q = n(725807),
    K = n(287809),
    ee = n(927578),
    et = n(847374),
    en = n(159273),
    el = n(770335),
    ei = n(624793),
    ea = n(731383),
    er = n(450707),
    eo = n(861626),
    es = n(34337),
    eu = n(71393),
    ec = n(967198),
    ed = n(375708),
    em = n(658611);
function eh(e) {
    let {
        emojiId: t,
        expressionSourceGuild: n,
        hasJoinedExpressionSourceGuild: i,
        onClose: a,
        popoutData: r,
        currentGuildId: o,
        nonce: s,
    } = e;
    (0, ea.i)({ emojiId: t, currentGuildId: o, popoutData: r, emojiSourceGuildId: n?.id, nonce: s });
    let u = n?.isDiscoverable() ?? !1,
        c = null != n && u,
        d = (n?.emojis?.length ?? 0) > 1;
    return c
        ? null == n
            ? null
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)("div", {
                          className: em.h2,
                          children: (0, l.jsx)(eo.G7, {
                              expressionSourceGuild: n,
                              hasJoinedExpressionSourceGuild: i,
                              isDisplayingJoinGuildButtonInPopout: r.type === er.u.JOIN_GUILD,
                          }),
                      }),
                      d &&
                          (0, l.jsx)(eo.mG, {
                              emojiId: t,
                              expressionSourceGuild: n,
                              hasJoinedEmojiSourceGuild: i,
                              onClose: a,
                              popoutData: r,
                              isDisplayingButtonInTopSection: !1,
                          }),
                  ],
              })
        : (0, l.jsx)(X.E, { variant: "text-sm/normal", "aria-label": r.type, children: r.emojiDescription });
}
function eg(e) {
    let t,
        { emojiId: n, onClose: a, nonce: o, showingMoreEmojis: s, setShowingMoreEmojis: u } = e,
        { joinedEmojiSourceGuild: c } = (0, m.cf)([en.Ay, eu.A], () => {
            let e = en.Ay.getCustomEmojiById(n);
            return { joinedEmojiSourceGuild: e?.type === el.i.GUILD ? eu.A.getGuild(e?.guildId) : void 0 };
        }),
        [d, h] = i.useState(void 0),
        [p, f] = i.useState(void 0),
        [A, I] = i.useState(null),
        [x, N] = i.useState(!1),
        [E, j] = i.useState(!1),
        v = null != c,
        R = d?.isDiscoverable() ?? !1,
        T = ec.A.getGuildId(),
        b = null != T && (T === d?.id || T === c?.id),
        S = K.default.getCurrentUser(),
        C = (0, er.O)({
            sourceType: A,
            expressionSourceApplication: p ?? null,
            isPremium: ee.Ay.isPremium(S),
            hasJoinedEmojiSourceGuild: v,
            isDiscoverable: R,
            emojiComesFromCurrentGuild: b,
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
                    let e = null != n ? await (0, ei.g_)(n) : null;
                    if (null != e)
                        switch ((I(e.type), e.type)) {
                            case ei.rV.APPLICATION:
                                f(e.application);
                                break;
                            case ei.rV.GUILD:
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
                          (0, l.jsx)("div", { className: em.Hw }),
                          null != C.emojiDescription &&
                              C.type !== er.u.UNAVAILABLE &&
                              (0, l.jsx)(X.E, {
                                  variant: "text-sm/normal",
                                  "aria-label": C.type,
                                  children: C.emojiDescription,
                              }),
                      ],
                  })
                : ((t = ed.intl.string(ed.t["Igv+LS"])),
                  (0, l.jsxs)(g.D, {
                      onClick: () => {
                          u(!s);
                      },
                      className: em.s4,
                      children: [
                          (0, l.jsx)(X.E, { variant: "text-sm/normal", color: "none", "aria-label": t, children: t }),
                          (0, l.jsx)(et.a, {
                              size: "xs",
                              color: "currentColor",
                              className: r()(em.Po, { [em.Kk]: !s }),
                          }),
                      ],
                  })),
            x
                ? (0, l.jsx)(es.Y0, { className: em.eF })
                : y &&
                  (0, l.jsx)(eh, {
                      emojiId: n,
                      expressionSourceGuild: d,
                      hasJoinedExpressionSourceGuild: v,
                      onClose: a,
                      popoutData: C,
                      currentGuildId: T,
                      nonce: o,
                  }),
        ],
    });
}
var ep = n(191226),
    ef = n(788868),
    eA = n(307217);
function eI(e) {
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
            let e = o ? Z.v.BURST : Z.v.NORMAL;
            (0, ep.$)(n, { emoji: t, reactionType: e });
        },
        j = "string" == typeof s ? "" === s.trim() : null == s,
        v = () =>
            j || null == s || null == u
                ? null
                : (0, l.jsx)(X.E, { variant: "text-sm/normal", className: eA.Of, "aria-label": u, children: s }),
        R = (0, m.bG)([K.default], () => K.default.getCurrentUser()),
        T = (0, ee.TW)(R),
        b = () =>
            null != t.id &&
            (0, l.jsx)(eg, { emojiId: t.id, onClose: d, nonce: I, showingMoreEmojis: x, setShowingMoreEmojis: N });
    return i === Z.v.BURST
        ? (0, l.jsxs)("div", {
              className: eA.xQ,
              onMouseEnter: c,
              onMouseLeave: d,
              children: [
                  (0, l.jsx)(g.D, {
                      className: eA.fu,
                      onClick: E,
                      children: (0, l.jsxs)("div", {
                          className: eA.Ok,
                          children: [
                              (0, l.jsx)(p.A, {
                                  className: eA.JS,
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
                            className: r()(eA.h7, eA.j9),
                            children: [
                                T && (0, l.jsx)(Y.t, { size: "md", className: eA.eH, color: Q.k0.PREMIUM_TIER_2 }),
                                (0, l.jsx)(X.E, {
                                    variant: "text-sm/normal",
                                    className: eA.Of,
                                    children: ed.intl.string(ed.t.ZbNJXn),
                                }),
                            ],
                        })
                      : T
                        ? (0, l.jsxs)("div", {
                              className: r()(eA.h7, eA.j9, eA.rL),
                              children: [
                                  (0, l.jsx)(Y.t, { size: "md", className: eA.eH, color: Q.k0.PREMIUM_TIER_2 }),
                                  (0, l.jsx)(g.D, {
                                      onClick: h,
                                      children: (0, l.jsx)(X.E, {
                                          variant: "text-sm/normal",
                                          className: eA.Of,
                                          "aria-label": "super reaction tooltip cta",
                                          children: ed.intl.string(ed.t.kVfuVu),
                                      }),
                                  }),
                              ],
                          })
                        : f
                          ? null
                          : (0, l.jsx)("div", {
                                className: r()(eA.h7, eA.j9),
                                children: (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(X.E, {
                                            variant: "text-sm/normal",
                                            "aria-label": "super reaction tooltip upsell",
                                            children: ed.intl.string(ed.t.W1bMkq),
                                        }),
                                        (0, l.jsx)(q.A, {
                                            subscriptionTier: ef.pe.TIER_2,
                                            textOptions: { textOverride: ed.intl.string(ed.t.mr4K7D) },
                                            className: eA.Yq,
                                            onClick: (e) => e.stopPropagation(),
                                        }),
                                    ],
                                }),
                            }),
                  b(),
              ],
          })
        : (0, l.jsxs)("div", {
              className: eA.xQ,
              onMouseEnter: c,
              onMouseLeave: d,
              children: [
                  (0, l.jsx)(g.D, {
                      onClick: E,
                      children: (0, l.jsxs)("div", {
                          className: eA.xR,
                          children: [
                              (0, l.jsx)(p.A, {
                                  className: eA.JS,
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
var ex = n(885386),
    eN = n(734057),
    eE = n(956703),
    ej = n(174459),
    ev = n(900210),
    eR = n(994500),
    eT = n(562153);
let eb = {
    standard: {
        reactionTooltip1NInteractive: ed.t.dgtYDJ,
        reactionTooltip1N: ed.t.mXild1,
        reactionTooltip1: ed.t.Oro30L,
        reactionTooltip2NInteractive: ed.t["0GBwVR"],
        reactionTooltip2N: ed.t.UWGs2n,
        reactionTooltip2: ed.t["p+0jvt"],
        reactionTooltip3NInteractive: ed.t["dK6/7W"],
        reactionTooltip3N: ed.t["UnXdX/"],
        reactionTooltip3: ed.t.bbPMcR,
        reactionTooltipNInteractive: ed.t.Thj7LX,
        reactionTooltipN: ed.t.CRrc7c,
    },
    burst: {
        reactionTooltip1NInteractive: ed.t.G98B0W,
        reactionTooltip1N: ed.t["u/03eN"],
        reactionTooltip1: ed.t["z4q3+w"],
        reactionTooltip2NInteractive: ed.t.wkcffp,
        reactionTooltip2N: ed.t.T4EYUu,
        reactionTooltip2: ed.t.R2HykW,
        reactionTooltip3NInteractive: ed.t.OhtGxz,
        reactionTooltip3N: ed.t["M8bwl+"],
        reactionTooltip3: ed.t.sNl6XR,
        reactionTooltipNInteractive: ed.t.nsITOq,
        reactionTooltipN: ed.t.dkieH5,
    },
};
function eS(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Z.v.NORMAL,
        l = arguments.length > 3 ? arguments[3] : void 0,
        i = eE.A.getReactions(e.getChannelId(), e.id, t, 3, n),
        a = eN.A.getChannel(e.getChannelId()),
        r = null == a || a.isPrivate() ? null : a.getGuildId(),
        o = e.getReaction(t),
        s = n === Z.v.BURST,
        u = P()(Array.from(i?.values() ?? []))
            .reject((e) => eR.A.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => eT.Ay.getName(r, a?.id, e))
            .value();
    if (0 === u.length) return "";
    let c = s ? eb.burst : eb.standard,
        d = Math.max(0, ((s ? o?.burst_count : o?.count) ?? 0) - u.length),
        m = (0, J.b3)(t);
    if (1 === u.length)
        if (!(d > 0)) return ed.intl.formatToPlainString(c.reactionTooltip1, { a: u[0], emojiName: m });
        else if (null != l)
            return ed.intl.format(c.reactionTooltip1NInteractive, { a: u[0], n: d, emojiName: m, onClick: l });
        else return ed.intl.formatToPlainString(c.reactionTooltip1N, { a: u[0], n: d, emojiName: m });
    if (2 === u.length)
        if (!(d > 0)) return ed.intl.formatToPlainString(c.reactionTooltip2, { a: u[0], b: u[1], emojiName: m });
        else if (null != l)
            return ed.intl.format(c.reactionTooltip2NInteractive, { a: u[0], b: u[1], n: d, emojiName: m, onClick: l });
        else return ed.intl.formatToPlainString(c.reactionTooltip2N, { a: u[0], b: u[1], n: d, emojiName: m });
    return 3 !== u.length
        ? null != l
            ? ed.intl.format(c.reactionTooltipNInteractive, { n: d, emojiName: m, onClick: l })
            : ed.intl.formatToPlainString(c.reactionTooltipN, { n: d, emojiName: m })
        : d > 0
          ? null != l
              ? ed.intl.format(c.reactionTooltip3NInteractive, {
                    a: u[0],
                    b: u[1],
                    c: u[2],
                    n: d,
                    emojiName: m,
                    onClick: l,
                })
              : ed.intl.formatToPlainString(c.reactionTooltip3N, { a: u[0], b: u[1], c: u[2], n: d, emojiName: m })
          : ed.intl.formatToPlainString(c.reactionTooltip3, { a: u[0], b: u[1], c: u[2], emojiName: m });
}
var eC = n(299072),
    ey = n(228366),
    eO = n(297494),
    eL = n(60317),
    e_ = n(734646),
    eM = n(15440);
let ek = i.memo(function (e) {
    let { channelId: t, messageId: n, emoji: a, useChatFontScaling: r, color: o, count: s, emojiSize: u } = e,
        c = (0, m.bG)([ev.A], () => ev.A.getEffectForEmojiId(t, n, a)),
        d = i.useMemo(() => (0, eL.eT)(a, o, t, { key: c, messageId: n }), [o, c, a, t, n]),
        [h, g] = i.useState(!1),
        p = (0, m.bG)([f.A], () => f.A.useReducedMotion),
        A = ex.Sf.useSetting(),
        I = i.useCallback(() => {
            ey.h.dispatch({ type: "BURST_REACTION_EFFECT_CLEAR", channelId: t, messageId: n, emoji: a });
        }, [a, t, n]);
    return (i.useEffect(() => {
        let e = () => {
            if (h) return;
            let e = (0, eO.H4)(`${Date.now()}${t}${n}${a.name}`) % 10;
            (e += s > 4 ? 4 : s - 1) > 7 &&
                (g(!0), (0, F.on)({ channelId: t, messageId: n, emoji: a, key: ev.W.RANDOM }));
        };
        if (h || (p && !A) || !A) return;
        e();
        let l = setInterval(e, 5e3);
        return () => {
            clearInterval(l);
        };
    }, [A, t, s, a, a.name, h, n, p]),
    null == c)
        ? null
        : (0, l.jsx)(eC.A, { className: (r ? eM : e_).effect, effect: d, onComplete: I, emojiSize: u });
});
var ew = n(652215),
    eP = n(347353),
    eG = n(866661);
let eV = 12;
function eU(e, t, n) {
    return (n === Z.v.BURST && t) || (n === Z.v.NORMAL && e);
}
let eD = i.memo(function (e) {
    let t,
        n,
        {
            me: a,
            me_burst: o,
            readOnly: x,
            emoji: N,
            message: E,
            count: j,
            burst_count: v,
            burst_colors: R,
            hideCount: T,
            isLurking: b,
            emojiSize: S,
            emojiSizeTooltip: C = "jumbo",
            isPendingMember: y,
            isForumToolbar: O,
            className: w,
            useChatFontScaling: P,
            type: G,
        } = e,
        V = G === Z.v.BURST,
        U = eU(a, o, G),
        D = E.getChannelId(),
        B = (0, _.g)(V && null != R ? R : []),
        H = (0, m.bG)([ev.A], () => void 0 !== ev.A.getEffectForEmojiId(D, E.id, N)),
        $ = (0, m.bG)([f.A], () => f.A.useReducedMotion),
        X = ex.Sf.useSetting(),
        Y = K.default.getCurrentUser(),
        Q = (0, ee.TW)(Y),
        q = (0, m.bG)([ev.A], () => ev.A.getReactionPickerAnimation(E.id, N.name, N.id)),
        et = V && (H || null != q),
        [en, el] = i.useState(null),
        [ei, ea] = i.useState(null),
        [er, eo] = i.useState(!1),
        [es, ec] = i.useState(!1),
        ed = i.useRef(null),
        em = i.useRef(null),
        eh = i.useRef(null),
        eg = i.useRef(null),
        ep = i.useRef(null),
        eA = i.useRef(!1),
        eR = i.useRef(!1),
        eT = i.useRef(!1),
        [eb] = i.useState(() => (0, u.A)());
    function ey(e) {
        let { closePopout: t } = e,
            n = eN.A.getChannel(E.getChannelId()),
            i = eu.A.getGuild(n?.getGuildId());
        return b && null != i
            ? (0, l.jsx)(k.A, { ctaRef: ed, type: k.w.REACTIONS, guild: i, closePopout: t })
            : (0, l.jsx)(l.Fragment, {});
    }
    function eO(e) {
        e.stopPropagation();
        let t = eN.A.getChannel(E.getChannelId());
        if (b) return void ed.current?.focus();
        if (V && !Q)
            return void (0, z.z)({
                analytics: {
                    type: ef.e.BURST_REACTION_UPSELL,
                    page: t?.getGuildId() != null ? ew.liQ.GUILD_CHANNEL : ew.liQ.DM_CHANNEL,
                    section: null != t ? (0, J.sn)(t) : void 0,
                    object: ew.ZSU.EMOJI_REACTION_UPSELL,
                },
            });
        if (y)
            return void (function () {
                if (!y) return;
                let e = eN.A.getChannel(D);
                if (null == e) return;
                let t = e.getGuildId();
                null != t && (0, M.Ze)(t);
            })();
        if (x) return;
        let n = O ? F.qN.FORUM_TOOLBAR : F.qN.MESSAGE_INLINE_BUTTON,
            l = { burst: V };
        U
            ? (0, F.et)({ channelId: D, messageId: E.id, emoji: N, location: n, options: l })
            : (0, F.BB)(D, E.id, N, n, l);
    }
    function eL() {
        let e = eS(E, N, G),
            t = eR.current ? e : eS(E, N, G, ew.tEg);
        s()("string" == typeof e, "tooltipTextAria is not a string"), el(t), ea(e), eo(null != t && "" !== t);
    }
    let e_ = i.useRef(eL);
    i.useEffect(() => {
        e_.current = eL;
    });
    let eM = i.useCallback(() => {
        e_.current();
    }, []);
    function eD() {
        eo(!1), ec(!1), eT.current && ej.default.track(ew.HAw.CLOSE_POPOUT, { nonce: eb });
    }
    function eB() {
        (eA.current = !1),
            (eR.current = !1),
            clearTimeout(eg.current),
            (eg.current = null),
            eE.A.removeChangeListener(eM),
            null == ep.current &&
                (ep.current = setTimeout(() => {
                    eD(), (ep.current = null);
                }, 200));
    }
    function eH() {
        clearTimeout(ep.current), (ep.current = null), eA.current && (eL(), eE.A.addChangeListener(eM));
    }
    function e$(e) {
        let t = G === Z.v.BURST;
        t &&
            !eA.current &&
            !$ &&
            X &&
            (0, F.on)({ channelId: E.getChannelId(), messageId: E.id, emoji: N, key: ev.W.HOVER }),
            (eA.current = !0),
            (eR.current = "focus" === e.type),
            null == eg.current &&
                (eg.current = setTimeout(
                    () => {
                        if (!x) {
                            let e, t;
                            eH(),
                                eA.current &&
                                    ((e = eN.A.getChannel(D)),
                                    (t = V
                                        ? Q
                                            ? ef.e.EMOJI_IN_BURST_REACTION_HOVER
                                            : ef.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL
                                        : ef.e.EMOJI_IN_REACTION_HOVER),
                                    I.Ay.trackWithMetadata(ew.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                        type: t,
                                        expression_id: N.id,
                                        expression_name: N.name,
                                        is_animated: N.animated,
                                        is_custom: null != N.id,
                                        nonce: eb,
                                    }),
                                    V &&
                                        null != e &&
                                        !Q &&
                                        ej.default.track(ew.HAw.PREMIUM_UPSELL_VIEWED, {
                                            type: ef.e.BURST_REACTION_UPSELL,
                                            location: {
                                                page:
                                                    e?.getGuildId() != null ? ew.liQ.GUILD_CHANNEL : ew.liQ.DM_CHANNEL,
                                                section: (0, J.sn)(e),
                                                object: ew.ZSU.EMOJI_REACTION_TOOLTIP_UPSELL,
                                            },
                                        })),
                                (eT.current = !0);
                        }
                        eg.current = null;
                    },
                    t ? 750 : 500,
                ));
    }
    function eW() {
        (eA.current = !0), eH();
    }
    (0, c.l0)(() => {
        clearTimeout(eg.current), clearTimeout(ep.current), eD();
    });
    let ez = P ? eG : eP,
        eF = {},
        eJ = V ? v : j;
    if (V && null != B) {
        let { accentColor: e, backgroundColor: l, opacity: i } = B,
            a = (0, d.xp)(l ?? "", i) ?? "";
        U && (eF.borderColor = l), (eF.background = a), (t = e), (n = e);
    }
    let eX = eh.current?.getBoundingClientRect(),
        eY = null != q && null != eX,
        eQ = null == q;
    return (0, l.jsx)(h.Y, {
        targetElementRef: eh,
        shouldShow: er,
        "aria-label": ei ?? !1,
        renderPopout: function () {
            return (0, l.jsx)(eI, {
                emoji: N,
                message: E,
                type: G,
                meBurst: o,
                isBurstReaction: V,
                tooltipText: en,
                tooltipTextAria: ei,
                onMouseEnter: eW,
                onMouseLeave: eB,
                onReactionClick: eO,
                isKeyboardNavigation: eR.current,
                emojiSizeTooltip: C,
                nonce: eb,
                showingMoreEmojis: es,
                setShowingMoreEmojis: ec,
            });
        },
        avoidancePadding: es ? void 0 : { top: 120 },
        nudgeAlignIntoViewport: !0,
        position: "top",
        align: "center",
        children: () =>
            (0, l.jsx)("div", {
                onMouseEnter: e$,
                onMouseLeave: eB,
                ref: eh,
                children: (0, l.jsx)("div", {
                    className: r()(ez.reaction, w, {
                        [ez.reactionMe]: U,
                        [ez.reactionReadOnly]: x && !b && !y,
                        [ez.shakeReaction]: et && null == q,
                    }),
                    style: eF,
                    children: (0, l.jsx)(h.Y, {
                        targetElementRef: em,
                        renderPopout: ey,
                        position: "top",
                        children: (e) =>
                            (0, l.jsxs)(g.D, {
                                ...e,
                                innerRef: em,
                                className: ez.reactionInner,
                                onClick: eO,
                                "aria-disabled": x,
                                "aria-label": (0, J.mb)(U, eJ, N, V),
                                "aria-pressed": U,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: r()({ [ez.burstGlow]: V }),
                                        style: { boxShadow: `0 0 16px ${n}` },
                                    }),
                                    (0, l.jsxs)("div", {
                                        children: [
                                            V
                                                ? (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          eY &&
                                                              (0, l.jsx)(L, {
                                                                  messageId: E.id,
                                                                  emoji: N,
                                                                  startPosition: q,
                                                                  targetPosition: eX,
                                                              }),
                                                          eQ &&
                                                              (0, l.jsx)(ek, {
                                                                  count: v,
                                                                  emoji: N,
                                                                  channelId: E.getChannelId(),
                                                                  messageId: E.id,
                                                                  useChatFontScaling: P,
                                                                  color: n,
                                                                  emojiSize: eC.x.NORMAL,
                                                              }),
                                                      ],
                                                  })
                                                : null,
                                            (0, l.jsx)(p.A, {
                                                className: r()({ [ez.hideEmoji]: et }),
                                                emojiId: N.id,
                                                emojiName: N.name,
                                                size: S,
                                                animated: N.animated,
                                            }),
                                        ],
                                    }),
                                    T
                                        ? null
                                        : (0, l.jsx)(A.A, {
                                              className: ez.reactionCount,
                                              value: eJ,
                                              color: t,
                                              digitWidth: eV,
                                          }),
                                    (0, l.jsx)(W, { count: eJ, reactionRef: eh }),
                                ],
                            }),
                    }),
                }),
            }),
    });
});
