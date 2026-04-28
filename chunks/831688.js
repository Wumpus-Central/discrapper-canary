i.d(t, { qT: () => eH, $Z: () => eU, IN: () => eB });
var n = i(627968),
    l = i(64700),
    a = i(503698),
    o = i.n(a),
    r = i(284009),
    s = i.n(r),
    u = i(132500),
    d = i(615300),
    c = i(317097),
    h = i(17928),
    p = i(451988),
    m = i(922016),
    g = i(939249),
    A = i(565645),
    f = i(775602),
    T = i(114166),
    v = i(58149),
    E = i(106778),
    x = i(123924),
    I = i(717421),
    N = i(21161),
    R = i(750506),
    j = i(147421),
    b = i(486020),
    S = i(690521),
    y = i(851110),
    C = i(740032);
let O = [];
function L(e) {
    let { messageId: t, emoji: i, startPosition: a, targetPosition: o } = e,
        [r, s] = l.useState(0),
        [u, c] = l.useState(0),
        [h, p] = l.useState(null),
        { confettiCanvas: m } = l.useContext(N.x),
        g = (0, E.f9)(m, h),
        f = l.useMemo(
            () => [
                {
                    src: null == i.id ? S.Ay.getURL(i.name) : b.Ay.getEmojiURL({ id: i.id, animated: !1, size: 22 }),
                    colorize: !1,
                },
            ],
            [i.name, i.id],
        ),
        T = o.x - (o.width / 2) * 0.5,
        v = o.y - (o.height / 2) * 0.5,
        L = (0, I.z)({
            from: { y: a.y },
            to: { y: v },
            config: { duration: 450, easing: d.A.Easing.in(d.A.Easing.exp) },
            onChange: (e) => {
                let { y: t } = e;
                c(t);
            },
        }),
        M = (0, I.z)({
            from: { x: a.x, scale: 1, opacity: 1 },
            to: { x: T, scale: 0.5, opacity: 0.4 },
            config: { duration: 450, easing: d.A.Easing.in(d.A.Easing.ease) },
            onRest: () => {
                (0, j.p)(t, i.name, i.id);
            },
            onChange: (e) => {
                let { x: t } = e;
                s(t);
            },
        });
    return (
        l.useEffect(() => {
            r > 0 && u > 0 && g.createConfetti({ ...y.Mw, position: { type: "static", value: { x: r, y: u } } });
        }, [g, r, u]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(E.K_, { ref: p, sprites: f, colors: O, spriteWidth: y.wn, spriteHeight: y.wn }),
                (0, n.jsx)(R.Ay, {
                    children: (0, n.jsx)(x.animated.div, {
                        style: { ...L },
                        className: C.qq,
                        children: (0, n.jsx)(x.animated.div, {
                            style: { ...M, opacity: M.opacity },
                            children: (0, n.jsx)(A.A, {
                                className: C.Zg,
                                emojiId: i.id,
                                emojiName: i.name,
                                animated: i.animated,
                                size: "jumbo",
                            }),
                        }),
                    }),
                }),
            ],
        })
    );
}
var M = i(891734),
    w = i(202384),
    _ = i(698405),
    P = i(735438),
    k = i.n(P),
    V = i(702841),
    G = i(3137),
    U = i(620141),
    B = i(966598),
    D = i(224964),
    H = i(31408);
function $(e) {
    let { reactionRef: t, count: i } = e,
        n = l.useRef(i),
        a = (0, V.bG)([G.A], () => G.A.getState()),
        o = (0, D.A)(),
        r = (0, B.A)(t);
    return (
        l.useEffect(() => {
            if (i > n.current && null != r) {
                let e = (0, P.clamp)(i, a.confettiCount / 2, 2 * a.confettiCount);
                o.fire(r.x, r.y, { count: e });
            }
            n.current = i;
        }, [i, r, o, a.confettiCount]),
        null
    );
}
function W(e) {
    return (0, n.jsx)(U.A, { confettiLocation: H.k.REACTION, children: (0, n.jsx)($, { ...e }) });
}
var z = i(507545),
    K = i(649963),
    F = i(815807),
    J = i(834730),
    X = i(403581),
    Y = i(404374),
    Q = i(505527),
    Z = i(725807),
    q = i(287809),
    ee = i(927578),
    et = i(847374),
    ei = i(159273),
    en = i(770335),
    el = i(624793),
    ea = i(731383),
    eo = i(450707),
    er = i(861626),
    es = i(34337),
    eu = i(71393),
    ed = i(967198),
    ec = i(985018),
    eh = i(658611);
function ep(e) {
    let {
        emojiId: t,
        expressionSourceGuild: i,
        hasJoinedExpressionSourceGuild: l,
        onClose: a,
        popoutData: o,
        currentGuildId: r,
        nonce: s,
    } = e;
    (0, ea.i)({ emojiId: t, currentGuildId: r, popoutData: o, emojiSourceGuildId: i?.id, nonce: s });
    let u = i?.isDiscoverable() ?? !1,
        d = null != i && u,
        c = (i?.emojis?.length ?? 0) > 1;
    return d
        ? null == i
            ? null
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)("div", {
                          className: eh.h2,
                          children: (0, n.jsx)(er.G7, {
                              expressionSourceGuild: i,
                              hasJoinedExpressionSourceGuild: l,
                              isDisplayingJoinGuildButtonInPopout: o.type === eo.u.JOIN_GUILD,
                          }),
                      }),
                      c &&
                          (0, n.jsx)(er.mG, {
                              emojiId: t,
                              expressionSourceGuild: i,
                              hasJoinedEmojiSourceGuild: l,
                              onClose: a,
                              popoutData: o,
                              isDisplayingButtonInTopSection: !1,
                          }),
                  ],
              })
        : (0, n.jsx)(J.E, { variant: "text-sm/normal", "aria-label": o.type, children: o.emojiDescription });
}
function em(e) {
    let t,
        { emojiId: i, refreshPositionKey: a, onClose: r, nonce: s } = e,
        { joinedEmojiSourceGuild: u } = (0, h.cf)([ei.Ay, eu.A], () => {
            let e = ei.Ay.getCustomEmojiById(i);
            return { joinedEmojiSourceGuild: e?.type === en.i.GUILD ? eu.A.getGuild(e?.guildId) : void 0 };
        }),
        [d, c] = l.useState(void 0),
        [p, m] = l.useState(void 0),
        [A, f] = l.useState(null),
        [T, v] = l.useState(!1),
        [E, x] = l.useState(!1),
        [I, N] = l.useState(!1),
        R = null != u,
        j = d?.isDiscoverable() ?? !1,
        b = ed.A.getGuildId(),
        S = null != b && (b === d?.id || b === u?.id),
        y = q.default.getCurrentUser(),
        C = (0, eo.O)({
            sourceType: A,
            expressionSourceApplication: p ?? null,
            isPremium: ee.Ay.isPremium(y),
            hasJoinedEmojiSourceGuild: R,
            isDiscoverable: j,
            emojiComesFromCurrentGuild: S,
            isUnusableRoleSubscriptionEmoji: !1,
            userIsRoleSubscriber: !1,
            isRoleSubscriptionEmoji: !1,
            shouldHideRoleSubscriptionCTA: !1,
        });
    if (
        (l.useEffect(() => {
            !T ||
                I ||
                (async () => {
                    a(), x(!0);
                    let e = null != i ? await (0, el.g_)(i) : null;
                    if (null != e)
                        switch ((f(e.type), e.type)) {
                            case el.rV.APPLICATION:
                                m(e.application);
                                break;
                            case el.rV.GUILD:
                                c(e.guild);
                        }
                    else c(null);
                    x(!1), N(!0), a();
                })();
        }, [i, T, I, a]),
        R)
    )
        return null;
    let O = T && (void 0 !== d || void 0 !== p);
    return (0, n.jsxs)("div", {
        children: [
            O
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)("div", { className: eh.Hw }),
                          null != C.emojiDescription &&
                              C.type !== eo.u.UNAVAILABLE &&
                              (0, n.jsx)(J.E, {
                                  variant: "text-sm/normal",
                                  "aria-label": C.type,
                                  children: C.emojiDescription,
                              }),
                      ],
                  })
                : ((t = ec.intl.string(ec.t["Igv+LS"])),
                  (0, n.jsxs)(g.D, {
                      onClick: () => {
                          v(!T);
                      },
                      className: eh.s4,
                      children: [
                          (0, n.jsx)(J.E, { variant: "text-sm/normal", color: "none", "aria-label": t, children: t }),
                          (0, n.jsx)(et.a, {
                              size: "xs",
                              color: "currentColor",
                              className: o()(eh.Po, { [eh.Kk]: !T }),
                          }),
                      ],
                  })),
            E
                ? (0, n.jsx)(es.Y0, { className: eh.eF })
                : O &&
                  (0, n.jsx)(ep, {
                      emojiId: i,
                      expressionSourceGuild: d,
                      hasJoinedExpressionSourceGuild: R,
                      onClose: r,
                      popoutData: C,
                      currentGuildId: b,
                      nonce: s,
                  }),
        ],
    });
}
var eg = i(191226),
    eA = i(788868),
    ef = i(307217);
function eT(e) {
    let {
            emoji: t,
            message: i,
            type: l,
            meBurst: a,
            isBurstReaction: r = !1,
            tooltipText: s,
            tooltipTextAria: u,
            onMouseEnter: d,
            onMouseLeave: c,
            onReactionClick: p,
            isKeyboardNavigation: m,
            emojiSizeTooltip: f,
            refreshTooltipPositionKey: T,
            nonce: v,
        } = e,
        E = () => {
            c();
            let e = r ? Q.v.BURST : Q.v.NORMAL;
            (0, eg.$)(i, { emoji: t, reactionType: e });
        },
        x = "string" == typeof s ? "" === s.trim() : null == s,
        I = () =>
            x || null == s || null == u
                ? null
                : (0, n.jsx)(J.E, { variant: "text-sm/normal", className: ef.Of, "aria-label": u, children: s }),
        N = (0, h.bG)([q.default], () => q.default.getCurrentUser()),
        R = (0, ee.TW)(N),
        j = () => null != t.id && (0, n.jsx)(em, { emojiId: t.id, refreshPositionKey: T, onClose: c, nonce: v });
    return l === Q.v.BURST
        ? (0, n.jsxs)("div", {
              className: ef.xQ,
              onMouseEnter: d,
              onMouseLeave: c,
              children: [
                  (0, n.jsx)(g.D, {
                      className: ef.fu,
                      onClick: E,
                      children: (0, n.jsxs)("div", {
                          className: ef.Ok,
                          children: [
                              (0, n.jsx)(A.A, {
                                  className: ef.JS,
                                  emojiId: t.id,
                                  emojiName: t.name,
                                  animated: t.animated,
                                  size: f,
                              }),
                              I(),
                          ],
                      }),
                  }),
                  a
                      ? (0, n.jsxs)("div", {
                            className: o()(ef.h7, ef.j9),
                            children: [
                                R && (0, n.jsx)(X.t, { size: "md", className: ef.eH, color: Y.k0.PREMIUM_TIER_2 }),
                                (0, n.jsx)(J.E, {
                                    variant: "text-sm/normal",
                                    className: ef.Of,
                                    children: ec.intl.string(ec.t.ZbNJXn),
                                }),
                            ],
                        })
                      : R
                        ? (0, n.jsxs)("div", {
                              className: o()(ef.h7, ef.j9, ef.rL),
                              children: [
                                  (0, n.jsx)(X.t, { size: "md", className: ef.eH, color: Y.k0.PREMIUM_TIER_2 }),
                                  (0, n.jsx)(g.D, {
                                      onClick: p,
                                      children: (0, n.jsx)(J.E, {
                                          variant: "text-sm/normal",
                                          className: ef.Of,
                                          "aria-label": "super reaction tooltip cta",
                                          children: ec.intl.string(ec.t.kVfuVu),
                                      }),
                                  }),
                              ],
                          })
                        : m
                          ? null
                          : (0, n.jsx)("div", {
                                className: o()(ef.h7, ef.j9),
                                children: (0, n.jsxs)("div", {
                                    children: [
                                        (0, n.jsx)(J.E, {
                                            variant: "text-sm/normal",
                                            "aria-label": "super reaction tooltip upsell",
                                            children: ec.intl.string(ec.t.W1bMkq),
                                        }),
                                        (0, n.jsx)(Z.A, {
                                            subscriptionTier: eA.pe.TIER_2,
                                            textOptions: { textOverride: ec.intl.string(ec.t.mr4K7D) },
                                            className: ef.Yq,
                                            onClick: (e) => e.stopPropagation(),
                                        }),
                                    ],
                                }),
                            }),
                  j(),
              ],
          })
        : (0, n.jsxs)("div", {
              className: ef.xQ,
              onMouseEnter: d,
              onMouseLeave: c,
              children: [
                  (0, n.jsx)(g.D, {
                      onClick: E,
                      children: (0, n.jsxs)("div", {
                          className: ef.xR,
                          children: [
                              (0, n.jsx)(A.A, {
                                  className: ef.JS,
                                  emojiId: t.id,
                                  emojiName: t.name,
                                  animated: t.animated,
                                  size: f,
                              }),
                              I(),
                          ],
                      }),
                  }),
                  j(),
              ],
          });
}
var ev = i(253932),
    eE = i(734057),
    ex = i(956703),
    eI = i(531685),
    eN = i(954571),
    eR = i(900210),
    ej = i(994500),
    eb = i(562153);
let eS = {
    standard: {
        reactionTooltip1NInteractive: ec.t.dgtYDJ,
        reactionTooltip1N: ec.t.mXild1,
        reactionTooltip1: ec.t.Oro30L,
        reactionTooltip2NInteractive: ec.t["0GBwVR"],
        reactionTooltip2N: ec.t.UWGs2n,
        reactionTooltip2: ec.t["p+0jvt"],
        reactionTooltip3NInteractive: ec.t["dK6/7W"],
        reactionTooltip3N: ec.t["UnXdX/"],
        reactionTooltip3: ec.t.bbPMcR,
        reactionTooltipNInteractive: ec.t.Thj7LX,
        reactionTooltipN: ec.t.CRrc7c,
    },
    burst: {
        reactionTooltip1NInteractive: ec.t.G98B0W,
        reactionTooltip1N: ec.t["u/03eN"],
        reactionTooltip1: ec.t["z4q3+w"],
        reactionTooltip2NInteractive: ec.t.wkcffp,
        reactionTooltip2N: ec.t.T4EYUu,
        reactionTooltip2: ec.t.R2HykW,
        reactionTooltip3NInteractive: ec.t.OhtGxz,
        reactionTooltip3N: ec.t["M8bwl+"],
        reactionTooltip3: ec.t.sNl6XR,
        reactionTooltipNInteractive: ec.t.nsITOq,
        reactionTooltipN: ec.t.dkieH5,
    },
};
function ey(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Q.v.NORMAL,
        n = arguments.length > 3 ? arguments[3] : void 0,
        l = ex.A.getReactions(e.getChannelId(), e.id, t, 3, i),
        a = eE.A.getChannel(e.getChannelId()),
        o = null == a || a.isPrivate() ? null : a.getGuildId(),
        r = e.getReaction(t),
        s = i === Q.v.BURST,
        u = k()(Array.from(l?.values() ?? []))
            .reject((e) => ej.A.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => eb.Ay.getName(o, a?.id, e))
            .value();
    if (0 === u.length) return "";
    let d = s ? eS.burst : eS.standard,
        c = Math.max(0, ((s ? r?.burst_count : r?.count) ?? 0) - u.length),
        h = (0, F.b3)(t);
    if (1 === u.length)
        if (!(c > 0)) return ec.intl.formatToPlainString(d.reactionTooltip1, { a: u[0], emojiName: h });
        else if (null != n)
            return ec.intl.format(d.reactionTooltip1NInteractive, { a: u[0], n: c, emojiName: h, onClick: n });
        else return ec.intl.formatToPlainString(d.reactionTooltip1N, { a: u[0], n: c, emojiName: h });
    if (2 === u.length)
        if (!(c > 0)) return ec.intl.formatToPlainString(d.reactionTooltip2, { a: u[0], b: u[1], emojiName: h });
        else if (null != n)
            return ec.intl.format(d.reactionTooltip2NInteractive, { a: u[0], b: u[1], n: c, emojiName: h, onClick: n });
        else return ec.intl.formatToPlainString(d.reactionTooltip2N, { a: u[0], b: u[1], n: c, emojiName: h });
    return 3 !== u.length
        ? null != n
            ? ec.intl.format(d.reactionTooltipNInteractive, { n: c, emojiName: h, onClick: n })
            : ec.intl.formatToPlainString(d.reactionTooltipN, { n: c, emojiName: h })
        : c > 0
          ? null != n
              ? ec.intl.format(d.reactionTooltip3NInteractive, {
                    a: u[0],
                    b: u[1],
                    c: u[2],
                    n: c,
                    emojiName: h,
                    onClick: n,
                })
              : ec.intl.formatToPlainString(d.reactionTooltip3N, { a: u[0], b: u[1], c: u[2], n: c, emojiName: h })
          : ec.intl.formatToPlainString(d.reactionTooltip3, { a: u[0], b: u[1], c: u[2], emojiName: h });
}
var eC = i(299072),
    eO = i(228366),
    eL = i(297494),
    eM = i(60317),
    ew = i(734646),
    e_ = i(15440);
let eP = l.memo(function (e) {
    let { channelId: t, messageId: i, emoji: a, useChatFontScaling: o, color: r, count: s, emojiSize: u } = e,
        d = (0, h.bG)([eR.A], () => eR.A.getEffectForEmojiId(t, i, a)),
        c = l.useMemo(() => (0, eM.eT)(a, r, t, { key: d, messageId: i }), [r, d, a, t, i]),
        [p, m] = l.useState(!1),
        g = (0, h.bG)([f.A], () => f.A.useReducedMotion),
        A = ev.Sf.useSetting(),
        T = l.useCallback(() => {
            eO.h.dispatch({ type: "BURST_REACTION_EFFECT_CLEAR", channelId: t, messageId: i, emoji: a });
        }, [a, t, i]);
    return (l.useEffect(() => {
        let e = () => {
            if (p) return;
            let e = (0, eL.H4)(`${Date.now()}${t}${i}${a.name}`) % 10;
            (e += s > 4 ? 4 : s - 1) > 7 &&
                (m(!0), (0, K.on)({ channelId: t, messageId: i, emoji: a, key: eR.W.RANDOM }));
        };
        if (p || (g && !A) || !A) return;
        e();
        let n = setInterval(e, 5e3);
        return () => {
            clearInterval(n);
        };
    }, [A, t, s, a, a.name, p, i, g]),
    null == d)
        ? null
        : (0, n.jsx)(eC.A, { className: (o ? e_ : ew).effect, effect: c, onComplete: T, emojiSize: u });
});
var ek = i(652215),
    eV = i(347353),
    eG = i(866661);
let eU = 12;
function eB(e, t, i) {
    return (i === Q.v.BURST && t) || (i === Q.v.NORMAL && e);
}
class eD extends l.PureComponent {
    isReactionEventActive = !1;
    isKeyboardNavigation = !1;
    scale = new d.A.Value(1);
    opacity = new d.A.Value(1);
    timeout = new p.Ep();
    hideTimeout = new p.Ep();
    ctaRef = l.createRef();
    type = Q.v.NORMAL;
    colors = { backgroundColor: void 0, borderColor: void 0, textColor: void 0 };
    state = {
        shouldShowTooltip: !1,
        tooltipText: null,
        tooltipTextAria: null,
        reactionRef: null,
        tooltipPositionKey: void 0,
    };
    hasShownTooltip = !1;
    nonce = (0, u.A)();
    upsellPopoutTargetRef = l.createRef();
    static defaultProps = { emojiSizeTooltip: "jumbo" };
    componentWillAppear(e) {
        this.animateIn(e);
    }
    componentWillEnter(e) {
        this.animateIn(e);
    }
    componentWillUnmount() {
        this.hideTooltip();
    }
    animateIn(e) {
        let { autoUnfurlReactionTooltip: t } = this.props;
        eI.A.isFocused()
            ? (this.scale.setValue(0),
              this.opacity.setValue(0),
              d.A.parallel([
                  d.A.timing(this.scale, {
                      toValue: 1,
                      duration: t ? 200 : 300,
                      easing: d.A.Easing.inOut(d.A.Easing.back()),
                  }),
                  d.A.timing(this.opacity, { toValue: 1, duration: t ? 200 : 300 }),
              ]).start(e))
            : (this.scale.setValue(1), this.opacity.setValue(1), e());
    }
    userCanBurstReact = () => this.props.userHasPremium;
    handleClick = (e) => {
        e.stopPropagation();
        let {
                message: t,
                emoji: i,
                readOnly: n,
                isBurstReaction: l,
                isPendingMember: a,
                isLurking: o,
                isForumToolbar: r,
            } = this.props,
            s = eE.A.getChannel(t.getChannelId());
        if (o) return void this.ctaRef?.current?.focus();
        let u = t.getChannelId(),
            d = r ? K.qN.FORUM_TOOLBAR : K.qN.MESSAGE_INLINE_BUTTON;
        l && !this.userCanBurstReact()
            ? (0, z.z)({
                  analytics: {
                      type: eA.e.BURST_REACTION_UPSELL,
                      page: s?.getGuildId() != null ? ek.liQ.GUILD_CHANNEL : ek.liQ.DM_CHANNEL,
                      section: null != s ? (0, F.sn)(s) : void 0,
                      object: ek.ZSU.EMOJI_REACTION_UPSELL,
                  },
              })
            : a
              ? this.handleShowVerificationGate()
              : n ||
                (this.isMe()
                    ? (0, K.et)({ channelId: u, messageId: t.id, emoji: i, location: d, options: { burst: l } })
                    : (0, K.BB)(u, t.id, i, d, { burst: l }));
    };
    handleEnter = (e) => {
        let {
                emoji: t,
                message: i,
                type: n,
                reduceMotion: l,
                animateEmoji: a,
                autoUnfurlReactionTooltip: o,
            } = this.props,
            r = n === Q.v.BURST;
        r &&
            !this.isReactionEventActive &&
            !l &&
            a &&
            (0, K.on)({ channelId: i.getChannelId(), messageId: i.id, emoji: t, key: eR.W.HOVER }),
            (this.isReactionEventActive = !0),
            (this.isKeyboardNavigation = "focus" === e.type),
            this.timeout.start(r ? 750 : o ? 200 : 500, this.showTooltip, !1);
    };
    handleEnterTooltip = () => {
        (this.isReactionEventActive = !0), this.handleShowTooltip();
    };
    handleShowTooltip = () => {
        this.hideTimeout.stop(),
            this.isReactionEventActive && (this.updateTooltipText(), ex.A.addChangeListener(this.updateTooltipText));
    };
    showTooltip = () => {
        this.props.readOnly ||
            (this.handleShowTooltip(),
            this.isReactionEventActive && this.trackReactionTooltipViewed(),
            (this.hasShownTooltip = !0));
    };
    handleLeave = () => {
        (this.isReactionEventActive = !1),
            (this.isKeyboardNavigation = !1),
            this.timeout.stop(),
            ex.A.removeChangeListener(this.updateTooltipText),
            this.hideTimeout.start(200, this.hideTooltip, !1);
    };
    hideTooltip = () => {
        this.setState({ shouldShowTooltip: !1 }),
            this.hasShownTooltip && eN.default.track(ek.HAw.CLOSE_POPOUT, { nonce: this.nonce });
    };
    isMe = () => {
        let { me: e, me_burst: t, type: i } = this.props;
        return eB(e, t, i);
    };
    updateTooltipText = () => {
        let { message: e, emoji: t, type: i } = this.props,
            n = ey(e, t, i),
            l = this.isKeyboardNavigation ? n : ey(e, t, i, ek.tEg);
        s()("string" == typeof n, "tooltipTextAria is not a string"),
            this.setState({ tooltipText: l, tooltipTextAria: n, shouldShowTooltip: null != l && "" !== l });
    };
    renderLurkerModeUpsellPopout = (e) => {
        let { closePopout: t } = e,
            { message: i, isLurking: l } = this.props,
            a = eE.A.getChannel(i.getChannelId()),
            o = eu.A.getGuild(a?.getGuildId());
        return l && null != o
            ? (0, n.jsx)(_.A, { ctaRef: this.ctaRef, type: _.w.REACTIONS, guild: o, closePopout: t })
            : (0, n.jsx)(n.Fragment, {});
    };
    renderTooltip = () => {
        let { emoji: e, message: t, type: i, me_burst: l, isBurstReaction: a = !1, emojiSizeTooltip: o } = this.props,
            { tooltipText: r, tooltipTextAria: s } = this.state;
        return (0, n.jsx)(eT, {
            emoji: e,
            message: t,
            type: i,
            meBurst: l,
            isBurstReaction: a,
            tooltipText: r,
            tooltipTextAria: s,
            onMouseEnter: this.handleEnterTooltip,
            onMouseLeave: this.handleLeave,
            onReactionClick: this.handleClick,
            isKeyboardNavigation: this.isKeyboardNavigation,
            emojiSizeTooltip: o,
            refreshTooltipPositionKey: this.refreshTooltipPositionKey,
            nonce: this.nonce,
        });
    };
    refreshTooltipPositionKey = () => {
        this.setState({ tooltipPositionKey: String(Date.now()) });
    };
    handleShowVerificationGate = () => {
        let { message: e, isPendingMember: t } = this.props;
        if (!t) return null;
        let i = eE.A.getChannel(e.getChannelId()),
            n = eu.A.getGuild(i?.getGuildId());
        null != n && (0, w.Ze)(n.id);
    };
    handleSetReactionRef = (e) => {
        this.setState({ reactionRef: e });
    };
    trackReactionTooltipViewed = () => {
        let { emoji: e, message: t, type: i } = this.props,
            n = q.default.getCurrentUser(),
            l = eE.A.getChannel(t.getChannelId()),
            a = i === Q.v.BURST,
            o = (0, ee.TW)(n),
            r = a ? eA.e.EMOJI_IN_BURST_REACTION_HOVER : eA.e.EMOJI_IN_REACTION_HOVER;
        !a || this.userCanBurstReact() || o || (r = eA.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
            v.Ay.trackWithMetadata(ek.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                type: r,
                expression_id: e.id,
                expression_name: e.name,
                is_animated: e.animated,
                is_custom: null != e.id,
                nonce: this.nonce,
            }),
            !a ||
                null == l ||
                o ||
                this.userCanBurstReact() ||
                eN.default.track(ek.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: eA.e.BURST_REACTION_UPSELL,
                    location: {
                        page: l?.getGuildId() != null ? ek.liQ.GUILD_CHANNEL : ek.liQ.DM_CHANNEL,
                        section: (0, F.sn)(l),
                        object: ek.ZSU.EMOJI_REACTION_TOOLTIP_UPSELL,
                    },
                });
    };
    render() {
        let e,
            t,
            {
                count: i,
                burst_count: l,
                colors: a,
                isBurstReaction: r,
                hideCount: s,
                emoji: u,
                readOnly: h,
                isLurking: p,
                isPendingMember: f,
                className: v,
                useChatFontScaling: E,
                message: x,
                hideEmoji: I,
                animationStartPosition: N,
                emojiSize: R,
            } = this.props,
            { shouldShowTooltip: j, tooltipTextAria: b, reactionRef: S, tooltipPositionKey: y } = this.state,
            C = E ? eG : eV,
            O = { transform: [{ scale: this.scale }], opacity: this.opacity },
            M = r ? l : i;
        if (r && null != a) {
            let { accentColor: i, backgroundColor: n, opacity: l } = a,
                o = (0, c.xp)(n ?? "", l) ?? "";
            this.isMe() && (O.borderColor = n), (O.background = o), (e = i), (t = i);
        }
        let w = S?.getBoundingClientRect(),
            _ = null != N && null != w,
            P = null == N;
        return (0, n.jsx)(m.Y, {
            targetElementRef: { current: S },
            shouldShow: j,
            "aria-label": b ?? !1,
            renderPopout: this.renderTooltip,
            nudgeAlignIntoViewport: !0,
            position: "top",
            align: "center",
            positionKey: y,
            children: () =>
                (0, n.jsx)("div", {
                    onMouseEnter: this.handleEnter,
                    onMouseLeave: this.handleLeave,
                    ref: this.handleSetReactionRef,
                    children: (0, n.jsx)(d.A.div, {
                        className: o()(C.reaction, v, {
                            [C.reactionMe]: this.isMe(),
                            [C.reactionReadOnly]: h && !p && !f,
                            [C.shakeReaction]: I && null == N,
                        }),
                        style: O,
                        children: (0, n.jsx)(m.Y, {
                            targetElementRef: this.upsellPopoutTargetRef,
                            renderPopout: this.renderLurkerModeUpsellPopout,
                            position: "top",
                            children: (i) =>
                                (0, n.jsxs)(g.D, {
                                    ...i,
                                    innerRef: this.upsellPopoutTargetRef,
                                    className: C.reactionInner,
                                    onClick: this.handleClick,
                                    "aria-disabled": h,
                                    "aria-label": (0, F.mb)(this.isMe(), M, u, r),
                                    "aria-pressed": this.isMe(),
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: o()({ [C.burstGlow]: r }),
                                            style: { boxShadow: `0 0 16px ${t}` },
                                        }),
                                        (0, n.jsxs)("div", {
                                            children: [
                                                r
                                                    ? (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              _ &&
                                                                  (0, n.jsx)(L, {
                                                                      messageId: x.id,
                                                                      emoji: u,
                                                                      startPosition: N,
                                                                      targetPosition: w,
                                                                  }),
                                                              P &&
                                                                  (0, n.jsx)(eP, {
                                                                      count: l,
                                                                      emoji: u,
                                                                      channelId: x.getChannelId(),
                                                                      messageId: x.id,
                                                                      useChatFontScaling: E,
                                                                      color: t,
                                                                      emojiSize: eC.x.NORMAL,
                                                                  }),
                                                          ],
                                                      })
                                                    : null,
                                                (0, n.jsx)(A.A, {
                                                    className: o()({ [C.hideEmoji]: I }),
                                                    emojiId: u.id,
                                                    emojiName: u.name,
                                                    size: R,
                                                    animated: u.animated,
                                                }),
                                            ],
                                        }),
                                        s
                                            ? null
                                            : (0, n.jsx)(T.A, {
                                                  className: C.reactionCount,
                                                  value: M,
                                                  color: e,
                                                  digitWidth: eU,
                                              }),
                                        (0, n.jsx)(W, { count: M, reactionRef: S }),
                                    ],
                                }),
                        }),
                    }),
                }),
        });
    }
}
let eH = l.memo((e) => {
    let { type: t, burst_colors: i, message: l, emoji: a } = e,
        o = t === Q.v.BURST,
        r = (0, M.g)(o && null != i ? i : []),
        s = (0, h.bG)([eR.A], () => void 0 !== eR.A.getEffectForEmojiId(l.getChannelId(), l.id, a)),
        u = (0, h.bG)([f.A], () => f.A.useReducedMotion),
        d = ev.Sf.useSetting(),
        c = q.default.getCurrentUser(),
        p = (0, ee.TW)(c),
        m = (0, h.bG)([eR.A], () => eR.A.getReactionPickerAnimation(l.id, a.name, a.id)),
        g = o && (s || null != m);
    return (0, n.jsx)(eD, {
        ...e,
        colors: r,
        isBurstReaction: o,
        hideEmoji: g,
        userHasPremium: p,
        reduceMotion: u,
        animateEmoji: d,
        animationStartPosition: m,
    });
});
