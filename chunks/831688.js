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
            type: a,
            burst_colors: o,
            message: x,
            emoji: N,
            me: E,
            me_burst: j,
            isPendingMember: v,
            isLurking: R,
            isForumToolbar: T,
            readOnly: b,
            autoUnfurlReactionTooltip: S,
            emojiSizeTooltip: C = "jumbo",
            useChatFontScaling: y,
            burst_count: O,
            count: w,
            className: P,
            emojiSize: G,
            hideCount: V,
        } = e,
        U = a === Z.v.BURST,
        D = eU(E, j, a),
        B = x.getChannelId(),
        H = (0, _.g)(U && null != o ? o : []),
        $ = (0, m.bG)([ev.A], () => void 0 !== ev.A.getEffectForEmojiId(B, x.id, N)),
        X = (0, m.bG)([f.A], () => f.A.useReducedMotion),
        Y = ex.Sf.useSetting(),
        Q = K.default.getCurrentUser(),
        q = (0, ee.TW)(Q),
        et = (0, m.bG)([ev.A], () => ev.A.getReactionPickerAnimation(x.id, N.name, N.id)),
        en = U && ($ || null != et),
        [el, ei] = i.useState(null),
        [ea, er] = i.useState(null),
        [eo, es] = i.useState(!1),
        [ec, ed] = i.useState(!1),
        em = i.useRef(null),
        eh = i.useRef(null),
        eg = i.useRef(null),
        ep = i.useRef(null),
        eA = i.useRef(null),
        eR = i.useRef(!1),
        eT = i.useRef(!1),
        eb = i.useRef(!1),
        [ey] = i.useState(() => (0, u.A)());
    function eO(e) {
        let { closePopout: t } = e,
            n = eN.A.getChannel(x.getChannelId()),
            i = eu.A.getGuild(n?.getGuildId());
        return R && null != i
            ? (0, l.jsx)(k.A, { ctaRef: em, type: k.w.REACTIONS, guild: i, closePopout: t })
            : (0, l.jsx)(l.Fragment, {});
    }
    function eL(e) {
        e.stopPropagation();
        let t = eN.A.getChannel(x.getChannelId());
        if (R) return void em.current?.focus();
        if (U && !q)
            return void (0, z.z)({
                analytics: {
                    type: ef.e.BURST_REACTION_UPSELL,
                    page: t?.getGuildId() != null ? ew.liQ.GUILD_CHANNEL : ew.liQ.DM_CHANNEL,
                    section: null != t ? (0, J.sn)(t) : void 0,
                    object: ew.ZSU.EMOJI_REACTION_UPSELL,
                },
            });
        if (v)
            return void (function () {
                if (!v) return;
                let e = eN.A.getChannel(B);
                if (null == e) return;
                let t = e.getGuildId();
                null != t && (0, M.Ze)(t);
            })();
        if (b) return;
        let n = T ? F.qN.FORUM_TOOLBAR : F.qN.MESSAGE_INLINE_BUTTON,
            l = { burst: U };
        D
            ? (0, F.et)({ channelId: B, messageId: x.id, emoji: N, location: n, options: l })
            : (0, F.BB)(B, x.id, N, n, l);
    }
    function e_() {
        let e = eS(x, N, a),
            t = eT.current ? e : eS(x, N, a, ew.tEg);
        s()("string" == typeof e, "tooltipTextAria is not a string"), ei(t), er(e), es(null != t && "" !== t);
    }
    let eM = i.useRef(e_);
    i.useEffect(() => {
        eM.current = e_;
    });
    let eD = i.useCallback(() => {
        eM.current();
    }, []);
    function eB() {
        es(!1), ed(!1), eb.current && ej.default.track(ew.HAw.CLOSE_POPOUT, { nonce: ey });
    }
    function eH() {
        (eR.current = !1),
            (eT.current = !1),
            clearTimeout(ep.current),
            (ep.current = null),
            eE.A.removeChangeListener(eD),
            null == eA.current &&
                (eA.current = setTimeout(() => {
                    eB(), (eA.current = null);
                }, 200));
    }
    function e$() {
        clearTimeout(eA.current), (eA.current = null), eR.current && (e_(), eE.A.addChangeListener(eD));
    }
    function eW(e) {
        let t = a === Z.v.BURST;
        t &&
            !eR.current &&
            !X &&
            Y &&
            (0, F.on)({ channelId: x.getChannelId(), messageId: x.id, emoji: N, key: ev.W.HOVER }),
            (eR.current = !0),
            (eT.current = "focus" === e.type),
            null == ep.current &&
                (ep.current = setTimeout(
                    () => {
                        if (!b) {
                            let e, t;
                            e$(),
                                eR.current &&
                                    ((e = eN.A.getChannel(B)),
                                    (t = U
                                        ? q
                                            ? ef.e.EMOJI_IN_BURST_REACTION_HOVER
                                            : ef.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL
                                        : ef.e.EMOJI_IN_REACTION_HOVER),
                                    I.Ay.trackWithMetadata(ew.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                        type: t,
                                        expression_id: N.id,
                                        expression_name: N.name,
                                        is_animated: N.animated,
                                        is_custom: null != N.id,
                                        nonce: ey,
                                    }),
                                    U &&
                                        null != e &&
                                        !q &&
                                        ej.default.track(ew.HAw.PREMIUM_UPSELL_VIEWED, {
                                            type: ef.e.BURST_REACTION_UPSELL,
                                            location: {
                                                page:
                                                    e?.getGuildId() != null ? ew.liQ.GUILD_CHANNEL : ew.liQ.DM_CHANNEL,
                                                section: (0, J.sn)(e),
                                                object: ew.ZSU.EMOJI_REACTION_TOOLTIP_UPSELL,
                                            },
                                        })),
                                (eb.current = !0);
                        }
                        ep.current = null;
                    },
                    t ? 750 : S ? 200 : 500,
                ));
    }
    function ez() {
        (eR.current = !0), e$();
    }
    (0, c.l0)(() => {
        clearTimeout(ep.current), clearTimeout(eA.current), eB();
    });
    let eF = y ? eG : eP,
        eJ = {},
        eX = U ? O : w;
    if (U && null != H) {
        let { accentColor: e, backgroundColor: l, opacity: i } = H,
            a = (0, d.xp)(l ?? "", i) ?? "";
        D && (eJ.borderColor = l), (eJ.background = a), (t = e), (n = e);
    }
    let eY = eg.current?.getBoundingClientRect(),
        eQ = null != et && null != eY,
        eZ = null == et;
    return (0, l.jsx)(h.Y, {
        targetElementRef: eg,
        shouldShow: eo,
        "aria-label": ea ?? !1,
        renderPopout: function () {
            return (0, l.jsx)(eI, {
                emoji: N,
                message: x,
                type: a,
                meBurst: j,
                isBurstReaction: U,
                tooltipText: el,
                tooltipTextAria: ea,
                onMouseEnter: ez,
                onMouseLeave: eH,
                onReactionClick: eL,
                isKeyboardNavigation: eT.current,
                emojiSizeTooltip: C,
                nonce: ey,
                showingMoreEmojis: ec,
                setShowingMoreEmojis: ed,
            });
        },
        avoidancePadding: ec ? void 0 : { top: 120 },
        nudgeAlignIntoViewport: !0,
        position: "top",
        align: "center",
        children: () =>
            (0, l.jsx)("div", {
                onMouseEnter: eW,
                onMouseLeave: eH,
                ref: eg,
                children: (0, l.jsx)("div", {
                    className: r()(eF.reaction, P, {
                        [eF.reactionMe]: D,
                        [eF.reactionReadOnly]: b && !R && !v,
                        [eF.shakeReaction]: en && null == et,
                    }),
                    style: eJ,
                    children: (0, l.jsx)(h.Y, {
                        targetElementRef: eh,
                        renderPopout: eO,
                        position: "top",
                        children: (e) =>
                            (0, l.jsxs)(g.D, {
                                ...e,
                                innerRef: eh,
                                className: eF.reactionInner,
                                onClick: eL,
                                "aria-disabled": b,
                                "aria-label": (0, J.mb)(D, eX, N, U),
                                "aria-pressed": D,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: r()({ [eF.burstGlow]: U }),
                                        style: { boxShadow: `0 0 16px ${n}` },
                                    }),
                                    (0, l.jsxs)("div", {
                                        children: [
                                            U
                                                ? (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          eQ &&
                                                              (0, l.jsx)(L, {
                                                                  messageId: x.id,
                                                                  emoji: N,
                                                                  startPosition: et,
                                                                  targetPosition: eY,
                                                              }),
                                                          eZ &&
                                                              (0, l.jsx)(ek, {
                                                                  count: O,
                                                                  emoji: N,
                                                                  channelId: x.getChannelId(),
                                                                  messageId: x.id,
                                                                  useChatFontScaling: y,
                                                                  color: n,
                                                                  emojiSize: eC.x.NORMAL,
                                                              }),
                                                      ],
                                                  })
                                                : null,
                                            (0, l.jsx)(p.A, {
                                                className: r()({ [eF.hideEmoji]: en }),
                                                emojiId: N.id,
                                                emojiName: N.name,
                                                size: G,
                                                animated: N.animated,
                                            }),
                                        ],
                                    }),
                                    V
                                        ? null
                                        : (0, l.jsx)(A.A, {
                                              className: eF.reactionCount,
                                              value: eX,
                                              color: t,
                                              digitWidth: eV,
                                          }),
                                    (0, l.jsx)(W, { count: eX, reactionRef: eg }),
                                ],
                            }),
                    }),
                }),
            }),
    });
});
