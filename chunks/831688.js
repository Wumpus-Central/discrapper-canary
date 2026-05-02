i.d(t, { qT: () => eB, $Z: () => eU, IN: () => eV });
var n = i(627968),
    l = i(64700),
    o = i(503698),
    a = i.n(o),
    r = i(284009),
    s = i.n(r),
    u = i(835245),
    d = i(317097),
    c = i(17928),
    h = i(922016),
    p = i(939249),
    m = i(565645),
    g = i(775602),
    f = i(114166),
    A = i(95561),
    T = i(106778),
    R = i(785651),
    v = i(615300),
    x = i(717421),
    E = i(21161),
    N = i(750506),
    I = i(147421),
    j = i(486020),
    b = i(690521),
    S = i(536283),
    C = i(740032);
let y = [];
function O(e) {
    let { messageId: t, emoji: i, startPosition: o, targetPosition: a } = e,
        [r, s] = l.useState(0),
        [u, d] = l.useState(0),
        [c, h] = l.useState(null),
        { confettiCanvas: p } = l.useContext(E.x),
        g = (0, T.f9)(p, c),
        f = l.useMemo(
            () => [
                {
                    src: null == i.id ? b.Ay.getURL(i.name) : j.Ay.getEmojiURL({ id: i.id, animated: !1, size: 22 }),
                    colorize: !1,
                },
            ],
            [i.name, i.id],
        ),
        A = a.x - (a.width / 2) * 0.5,
        O = a.y - (a.height / 2) * 0.5,
        L = (0, x.z)({
            from: { y: o.y },
            to: { y: O },
            config: { duration: 450, easing: v.A.Easing.in(v.A.Easing.exp) },
            onChange: (e) => {
                let { y: t } = e;
                d(t);
            },
        }),
        M = (0, x.z)({
            from: { x: o.x, scale: 1, opacity: 1 },
            to: { x: A, scale: 0.5, opacity: 0.4 },
            config: { duration: 450, easing: v.A.Easing.in(v.A.Easing.ease) },
            onRest: () => {
                (0, I.p)(t, i.name, i.id);
            },
            onChange: (e) => {
                let { x: t } = e;
                s(t);
            },
        });
    return (
        l.useEffect(() => {
            r > 0 && u > 0 && g.createConfetti({ ...S.Mw, position: { type: "static", value: { x: r, y: u } } });
        }, [g, r, u]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(T.K_, { ref: h, sprites: f, colors: y, spriteWidth: S.wn, spriteHeight: S.wn }),
                (0, n.jsx)(N.Ay, {
                    children: (0, n.jsx)(R.animated.div, {
                        style: { ...L },
                        className: C.qq,
                        children: (0, n.jsx)(R.animated.div, {
                            style: { ...M, opacity: M.opacity },
                            children: (0, n.jsx)(m.A, {
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
var L = i(891734),
    M = i(202384),
    P = i(698405),
    _ = i(735438),
    w = i.n(_),
    k = i(702841),
    U = i(3137),
    V = i(620141),
    G = i(966598),
    B = i(224964),
    D = i(31408);
function H(e) {
    let { reactionRef: t, count: i } = e,
        n = l.useRef(i),
        o = (0, k.bG)([U.A], () => U.A.getState()),
        a = (0, B.A)(),
        r = (0, G.A)(t);
    return (
        l.useEffect(() => {
            if (i > n.current && null != r) {
                let e = (0, _.clamp)(i, o.confettiCount / 2, 2 * o.confettiCount);
                a.fire(r.x, r.y, { count: e });
            }
            n.current = i;
        }, [i, r, a, o.confettiCount]),
        null
    );
}
function $(e) {
    return (0, n.jsx)(V.A, { confettiLocation: D.k.REACTION, children: (0, n.jsx)(H, { ...e }) });
}
var W = i(507545),
    z = i(649963),
    K = i(815807),
    F = i(834730),
    J = i(403581),
    X = i(404374),
    Y = i(505527),
    Q = i(725807),
    Z = i(287809),
    q = i(927578),
    ee = i(847374),
    et = i(159273),
    ei = i(770335),
    en = i(624793),
    el = i(731383),
    eo = i(450707),
    ea = i(861626),
    er = i(34337),
    es = i(71393),
    eu = i(967198),
    ed = i(375708),
    ec = i(658611);
function eh(e) {
    let {
        emojiId: t,
        expressionSourceGuild: i,
        hasJoinedExpressionSourceGuild: l,
        onClose: o,
        popoutData: a,
        currentGuildId: r,
        nonce: s,
    } = e;
    (0, el.i)({ emojiId: t, currentGuildId: r, popoutData: a, emojiSourceGuildId: i?.id, nonce: s });
    let u = i?.isDiscoverable() ?? !1,
        d = null != i && u,
        c = (i?.emojis?.length ?? 0) > 1;
    return d
        ? null == i
            ? null
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)("div", {
                          className: ec.h2,
                          children: (0, n.jsx)(ea.G7, {
                              expressionSourceGuild: i,
                              hasJoinedExpressionSourceGuild: l,
                              isDisplayingJoinGuildButtonInPopout: a.type === eo.u.JOIN_GUILD,
                          }),
                      }),
                      c &&
                          (0, n.jsx)(ea.mG, {
                              emojiId: t,
                              expressionSourceGuild: i,
                              hasJoinedEmojiSourceGuild: l,
                              onClose: o,
                              popoutData: a,
                              isDisplayingButtonInTopSection: !1,
                          }),
                  ],
              })
        : (0, n.jsx)(F.E, { variant: "text-sm/normal", "aria-label": a.type, children: a.emojiDescription });
}
function ep(e) {
    let t,
        { emojiId: i, refreshPositionKey: o, onClose: r, nonce: s } = e,
        { joinedEmojiSourceGuild: u } = (0, c.cf)([et.Ay, es.A], () => {
            let e = et.Ay.getCustomEmojiById(i);
            return { joinedEmojiSourceGuild: e?.type === ei.i.GUILD ? es.A.getGuild(e?.guildId) : void 0 };
        }),
        [d, h] = l.useState(void 0),
        [m, g] = l.useState(void 0),
        [f, A] = l.useState(null),
        [T, R] = l.useState(!1),
        [v, x] = l.useState(!1),
        [E, N] = l.useState(!1),
        I = null != u,
        j = d?.isDiscoverable() ?? !1,
        b = eu.A.getGuildId(),
        S = null != b && (b === d?.id || b === u?.id),
        C = Z.default.getCurrentUser(),
        y = (0, eo.O)({
            sourceType: f,
            expressionSourceApplication: m ?? null,
            isPremium: q.Ay.isPremium(C),
            hasJoinedEmojiSourceGuild: I,
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
                E ||
                (async () => {
                    o(), x(!0);
                    let e = null != i ? await (0, en.g_)(i) : null;
                    if (null != e)
                        switch ((A(e.type), e.type)) {
                            case en.rV.APPLICATION:
                                g(e.application);
                                break;
                            case en.rV.GUILD:
                                h(e.guild);
                        }
                    else h(null);
                    x(!1), N(!0), o();
                })();
        }, [i, T, E, o]),
        I)
    )
        return null;
    let O = T && (void 0 !== d || void 0 !== m);
    return (0, n.jsxs)("div", {
        children: [
            O
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)("div", { className: ec.Hw }),
                          null != y.emojiDescription &&
                              y.type !== eo.u.UNAVAILABLE &&
                              (0, n.jsx)(F.E, {
                                  variant: "text-sm/normal",
                                  "aria-label": y.type,
                                  children: y.emojiDescription,
                              }),
                      ],
                  })
                : ((t = ed.intl.string(ed.t["Igv+LS"])),
                  (0, n.jsxs)(p.D, {
                      onClick: () => {
                          R(!T);
                      },
                      className: ec.s4,
                      children: [
                          (0, n.jsx)(F.E, { variant: "text-sm/normal", color: "none", "aria-label": t, children: t }),
                          (0, n.jsx)(ee.a, {
                              size: "xs",
                              color: "currentColor",
                              className: a()(ec.Po, { [ec.Kk]: !T }),
                          }),
                      ],
                  })),
            v
                ? (0, n.jsx)(er.Y0, { className: ec.eF })
                : O &&
                  (0, n.jsx)(eh, {
                      emojiId: i,
                      expressionSourceGuild: d,
                      hasJoinedExpressionSourceGuild: I,
                      onClose: r,
                      popoutData: y,
                      currentGuildId: b,
                      nonce: s,
                  }),
        ],
    });
}
var em = i(191226),
    eg = i(788868),
    ef = i(307217);
function eA(e) {
    let {
            emoji: t,
            message: i,
            type: l,
            meBurst: o,
            isBurstReaction: r = !1,
            tooltipText: s,
            tooltipTextAria: u,
            onMouseEnter: d,
            onMouseLeave: h,
            onReactionClick: g,
            isKeyboardNavigation: f,
            emojiSizeTooltip: A,
            refreshTooltipPositionKey: T,
            nonce: R,
        } = e,
        v = () => {
            h();
            let e = r ? Y.v.BURST : Y.v.NORMAL;
            (0, em.$)(i, { emoji: t, reactionType: e });
        },
        x = "string" == typeof s ? "" === s.trim() : null == s,
        E = () =>
            x || null == s || null == u
                ? null
                : (0, n.jsx)(F.E, { variant: "text-sm/normal", className: ef.Of, "aria-label": u, children: s }),
        N = (0, c.bG)([Z.default], () => Z.default.getCurrentUser()),
        I = (0, q.TW)(N),
        j = () => null != t.id && (0, n.jsx)(ep, { emojiId: t.id, refreshPositionKey: T, onClose: h, nonce: R });
    return l === Y.v.BURST
        ? (0, n.jsxs)("div", {
              className: ef.xQ,
              onMouseEnter: d,
              onMouseLeave: h,
              children: [
                  (0, n.jsx)(p.D, {
                      className: ef.fu,
                      onClick: v,
                      children: (0, n.jsxs)("div", {
                          className: ef.Ok,
                          children: [
                              (0, n.jsx)(m.A, {
                                  className: ef.JS,
                                  emojiId: t.id,
                                  emojiName: t.name,
                                  animated: t.animated,
                                  size: A,
                              }),
                              E(),
                          ],
                      }),
                  }),
                  o
                      ? (0, n.jsxs)("div", {
                            className: a()(ef.h7, ef.j9),
                            children: [
                                I && (0, n.jsx)(J.t, { size: "md", className: ef.eH, color: X.k0.PREMIUM_TIER_2 }),
                                (0, n.jsx)(F.E, {
                                    variant: "text-sm/normal",
                                    className: ef.Of,
                                    children: ed.intl.string(ed.t.ZbNJXn),
                                }),
                            ],
                        })
                      : I
                        ? (0, n.jsxs)("div", {
                              className: a()(ef.h7, ef.j9, ef.rL),
                              children: [
                                  (0, n.jsx)(J.t, { size: "md", className: ef.eH, color: X.k0.PREMIUM_TIER_2 }),
                                  (0, n.jsx)(p.D, {
                                      onClick: g,
                                      children: (0, n.jsx)(F.E, {
                                          variant: "text-sm/normal",
                                          className: ef.Of,
                                          "aria-label": "super reaction tooltip cta",
                                          children: ed.intl.string(ed.t.kVfuVu),
                                      }),
                                  }),
                              ],
                          })
                        : f
                          ? null
                          : (0, n.jsx)("div", {
                                className: a()(ef.h7, ef.j9),
                                children: (0, n.jsxs)("div", {
                                    children: [
                                        (0, n.jsx)(F.E, {
                                            variant: "text-sm/normal",
                                            "aria-label": "super reaction tooltip upsell",
                                            children: ed.intl.string(ed.t.W1bMkq),
                                        }),
                                        (0, n.jsx)(Q.A, {
                                            subscriptionTier: eg.pe.TIER_2,
                                            textOptions: { textOverride: ed.intl.string(ed.t.mr4K7D) },
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
              onMouseLeave: h,
              children: [
                  (0, n.jsx)(p.D, {
                      onClick: v,
                      children: (0, n.jsxs)("div", {
                          className: ef.xR,
                          children: [
                              (0, n.jsx)(m.A, {
                                  className: ef.JS,
                                  emojiId: t.id,
                                  emojiName: t.name,
                                  animated: t.animated,
                                  size: A,
                              }),
                              E(),
                          ],
                      }),
                  }),
                  j(),
              ],
          });
}
var eT = i(885386),
    eR = i(734057),
    ev = i(956703),
    ex = i(174459),
    eE = i(900210),
    eN = i(994500),
    eI = i(562153);
let ej = {
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
function eb(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Y.v.NORMAL,
        n = arguments.length > 3 ? arguments[3] : void 0,
        l = ev.A.getReactions(e.getChannelId(), e.id, t, 3, i),
        o = eR.A.getChannel(e.getChannelId()),
        a = null == o || o.isPrivate() ? null : o.getGuildId(),
        r = e.getReaction(t),
        s = i === Y.v.BURST,
        u = w()(Array.from(l?.values() ?? []))
            .reject((e) => eN.A.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => eI.Ay.getName(a, o?.id, e))
            .value();
    if (0 === u.length) return "";
    let d = s ? ej.burst : ej.standard,
        c = Math.max(0, ((s ? r?.burst_count : r?.count) ?? 0) - u.length),
        h = (0, K.b3)(t);
    if (1 === u.length)
        if (!(c > 0)) return ed.intl.formatToPlainString(d.reactionTooltip1, { a: u[0], emojiName: h });
        else if (null != n)
            return ed.intl.format(d.reactionTooltip1NInteractive, { a: u[0], n: c, emojiName: h, onClick: n });
        else return ed.intl.formatToPlainString(d.reactionTooltip1N, { a: u[0], n: c, emojiName: h });
    if (2 === u.length)
        if (!(c > 0)) return ed.intl.formatToPlainString(d.reactionTooltip2, { a: u[0], b: u[1], emojiName: h });
        else if (null != n)
            return ed.intl.format(d.reactionTooltip2NInteractive, { a: u[0], b: u[1], n: c, emojiName: h, onClick: n });
        else return ed.intl.formatToPlainString(d.reactionTooltip2N, { a: u[0], b: u[1], n: c, emojiName: h });
    return 3 !== u.length
        ? null != n
            ? ed.intl.format(d.reactionTooltipNInteractive, { n: c, emojiName: h, onClick: n })
            : ed.intl.formatToPlainString(d.reactionTooltipN, { n: c, emojiName: h })
        : c > 0
          ? null != n
              ? ed.intl.format(d.reactionTooltip3NInteractive, {
                    a: u[0],
                    b: u[1],
                    c: u[2],
                    n: c,
                    emojiName: h,
                    onClick: n,
                })
              : ed.intl.formatToPlainString(d.reactionTooltip3N, { a: u[0], b: u[1], c: u[2], n: c, emojiName: h })
          : ed.intl.formatToPlainString(d.reactionTooltip3, { a: u[0], b: u[1], c: u[2], emojiName: h });
}
var eS = i(299072),
    eC = i(228366),
    ey = i(297494),
    eO = i(60317),
    eL = i(734646),
    eM = i(15440);
let eP = l.memo(function (e) {
    let { channelId: t, messageId: i, emoji: o, useChatFontScaling: a, color: r, count: s, emojiSize: u } = e,
        d = (0, c.bG)([eE.A], () => eE.A.getEffectForEmojiId(t, i, o)),
        h = l.useMemo(() => (0, eO.eT)(o, r, t, { key: d, messageId: i }), [r, d, o, t, i]),
        [p, m] = l.useState(!1),
        f = (0, c.bG)([g.A], () => g.A.useReducedMotion),
        A = eT.Sf.useSetting(),
        T = l.useCallback(() => {
            eC.h.dispatch({ type: "BURST_REACTION_EFFECT_CLEAR", channelId: t, messageId: i, emoji: o });
        }, [o, t, i]);
    return (l.useEffect(() => {
        let e = () => {
            if (p) return;
            let e = (0, ey.H4)(`${Date.now()}${t}${i}${o.name}`) % 10;
            (e += s > 4 ? 4 : s - 1) > 7 &&
                (m(!0), (0, z.on)({ channelId: t, messageId: i, emoji: o, key: eE.W.RANDOM }));
        };
        if (p || (f && !A) || !A) return;
        e();
        let n = setInterval(e, 5e3);
        return () => {
            clearInterval(n);
        };
    }, [A, t, s, o, o.name, p, i, f]),
    null == d)
        ? null
        : (0, n.jsx)(eS.A, { className: (a ? eM : eL).effect, effect: h, onComplete: T, emojiSize: u });
});
var e_ = i(652215),
    ew = i(347353),
    ek = i(866661);
let eU = 12;
function eV(e, t, i) {
    return (i === Y.v.BURST && t) || (i === Y.v.NORMAL && e);
}
class eG extends l.PureComponent {
    isReactionEventActive = !1;
    isKeyboardNavigation = !1;
    timeoutRef = null;
    hideTimeoutRef = null;
    ctaRef = l.createRef();
    type = Y.v.NORMAL;
    colors = { backgroundColor: void 0, borderColor: void 0, textColor: void 0 };
    hasShownTooltip = !1;
    nonce = (0, u.A)();
    upsellPopoutTargetRef = l.createRef();
    static defaultProps = { emojiSizeTooltip: "jumbo" };
    componentWillUnmount() {
        null != this.timeoutRef && clearTimeout(this.timeoutRef),
            null != this.hideTimeoutRef && clearTimeout(this.hideTimeoutRef),
            this.hideTooltip();
    }
    userCanBurstReact = () => this.props.userHasPremium;
    handleClick = (e) => {
        e.stopPropagation();
        let {
                message: t,
                emoji: i,
                readOnly: n,
                isBurstReaction: l,
                isPendingMember: o,
                isLurking: a,
                isForumToolbar: r,
            } = this.props,
            s = eR.A.getChannel(t.getChannelId());
        if (a) return void this.ctaRef?.current?.focus();
        let u = t.getChannelId(),
            d = r ? z.qN.FORUM_TOOLBAR : z.qN.MESSAGE_INLINE_BUTTON;
        l && !this.userCanBurstReact()
            ? (0, W.z)({
                  analytics: {
                      type: eg.e.BURST_REACTION_UPSELL,
                      page: s?.getGuildId() != null ? e_.liQ.GUILD_CHANNEL : e_.liQ.DM_CHANNEL,
                      section: null != s ? (0, K.sn)(s) : void 0,
                      object: e_.ZSU.EMOJI_REACTION_UPSELL,
                  },
              })
            : o
              ? this.handleShowVerificationGate()
              : n ||
                (this.isMe()
                    ? (0, z.et)({ channelId: u, messageId: t.id, emoji: i, location: d, options: { burst: l } })
                    : (0, z.BB)(u, t.id, i, d, { burst: l }));
    };
    handleEnter = (e) => {
        let {
                emoji: t,
                message: i,
                type: n,
                reduceMotion: l,
                animateEmoji: o,
                autoUnfurlReactionTooltip: a,
            } = this.props,
            r = n === Y.v.BURST;
        r &&
            !this.isReactionEventActive &&
            !l &&
            o &&
            (0, z.on)({ channelId: i.getChannelId(), messageId: i.id, emoji: t, key: eE.W.HOVER }),
            (this.isReactionEventActive = !0),
            (this.isKeyboardNavigation = "focus" === e.type),
            null == this.timeoutRef &&
                (this.timeoutRef = setTimeout(
                    () => {
                        this.showTooltip(), (this.timeoutRef = null);
                    },
                    r ? 750 : a ? 200 : 500,
                ));
    };
    handleEnterTooltip = () => {
        (this.isReactionEventActive = !0), this.handleShowTooltip();
    };
    handleShowTooltip = () => {
        null != this.hideTimeoutRef && (clearTimeout(this.hideTimeoutRef), (this.hideTimeoutRef = null)),
            this.isReactionEventActive && (this.updateTooltipText(), ev.A.addChangeListener(this.updateTooltipText));
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
            null != this.timeoutRef && (clearTimeout(this.timeoutRef), (this.timeoutRef = null)),
            ev.A.removeChangeListener(this.updateTooltipText),
            null == this.hideTimeoutRef &&
                (this.hideTimeoutRef = setTimeout(() => {
                    this.hideTooltip(), (this.hideTimeoutRef = null);
                }, 200));
    };
    hideTooltip = () => {
        this.props.setShouldShowTooltip(!1),
            this.hasShownTooltip && ex.default.track(e_.HAw.CLOSE_POPOUT, { nonce: this.nonce });
    };
    isMe = () => {
        let { me: e, me_burst: t, type: i } = this.props;
        return eV(e, t, i);
    };
    updateTooltipText = () => {
        let { message: e, emoji: t, type: i } = this.props,
            n = eb(e, t, i),
            l = this.isKeyboardNavigation ? n : eb(e, t, i, e_.tEg);
        s()("string" == typeof n, "tooltipTextAria is not a string"),
            this.props.setTooltipText(l),
            this.props.setTooltipTextAria(n),
            this.props.setShouldShowTooltip(null != l && "" !== l);
    };
    renderLurkerModeUpsellPopout = (e) => {
        let { closePopout: t } = e,
            { message: i, isLurking: l } = this.props,
            o = eR.A.getChannel(i.getChannelId()),
            a = es.A.getGuild(o?.getGuildId());
        return l && null != a
            ? (0, n.jsx)(P.A, { ctaRef: this.ctaRef, type: P.w.REACTIONS, guild: a, closePopout: t })
            : (0, n.jsx)(n.Fragment, {});
    };
    renderTooltip = () => {
        let {
            emoji: e,
            message: t,
            type: i,
            me_burst: l,
            isBurstReaction: o = !1,
            emojiSizeTooltip: a,
            tooltipText: r,
            tooltipTextAria: s,
        } = this.props;
        return (0, n.jsx)(eA, {
            emoji: e,
            message: t,
            type: i,
            meBurst: l,
            isBurstReaction: o,
            tooltipText: r,
            tooltipTextAria: s,
            onMouseEnter: this.handleEnterTooltip,
            onMouseLeave: this.handleLeave,
            onReactionClick: this.handleClick,
            isKeyboardNavigation: this.isKeyboardNavigation,
            emojiSizeTooltip: a,
            refreshTooltipPositionKey: this.refreshTooltipPositionKey,
            nonce: this.nonce,
        });
    };
    refreshTooltipPositionKey = () => {
        this.props.setTooltipPositionKey(String(Date.now()));
    };
    handleShowVerificationGate = () => {
        let { message: e, isPendingMember: t } = this.props;
        if (!t) return null;
        let i = eR.A.getChannel(e.getChannelId()),
            n = es.A.getGuild(i?.getGuildId());
        null != n && (0, M.Ze)(n.id);
    };
    handleSetReactionRef = (e) => {
        this.props.setReactionRef(e);
    };
    trackReactionTooltipViewed = () => {
        let { emoji: e, message: t, type: i } = this.props,
            n = Z.default.getCurrentUser(),
            l = eR.A.getChannel(t.getChannelId()),
            o = i === Y.v.BURST,
            a = (0, q.TW)(n),
            r = o ? eg.e.EMOJI_IN_BURST_REACTION_HOVER : eg.e.EMOJI_IN_REACTION_HOVER;
        !o || this.userCanBurstReact() || a || (r = eg.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
            A.Ay.trackWithMetadata(e_.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                type: r,
                expression_id: e.id,
                expression_name: e.name,
                is_animated: e.animated,
                is_custom: null != e.id,
                nonce: this.nonce,
            }),
            !o ||
                null == l ||
                a ||
                this.userCanBurstReact() ||
                ex.default.track(e_.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: eg.e.BURST_REACTION_UPSELL,
                    location: {
                        page: l?.getGuildId() != null ? e_.liQ.GUILD_CHANNEL : e_.liQ.DM_CHANNEL,
                        section: (0, K.sn)(l),
                        object: e_.ZSU.EMOJI_REACTION_TOOLTIP_UPSELL,
                    },
                });
    };
    render() {
        let e,
            t,
            {
                count: i,
                burst_count: l,
                colors: o,
                isBurstReaction: r,
                hideCount: s,
                emoji: u,
                readOnly: c,
                isLurking: g,
                isPendingMember: A,
                className: T,
                useChatFontScaling: R,
                message: v,
                hideEmoji: x,
                animationStartPosition: E,
                emojiSize: N,
            } = this.props,
            { shouldShowTooltip: I, tooltipTextAria: j, reactionRef: b, tooltipPositionKey: S } = this.props,
            C = R ? ek : ew,
            y = {},
            L = r ? l : i;
        if (r && null != o) {
            let { accentColor: i, backgroundColor: n, opacity: l } = o,
                a = (0, d.xp)(n ?? "", l) ?? "";
            this.isMe() && (y.borderColor = n), (y.background = a), (e = i), (t = i);
        }
        let M = b?.getBoundingClientRect(),
            P = null != E && null != M,
            _ = null == E;
        return (0, n.jsx)(h.Y, {
            targetElementRef: { current: b },
            shouldShow: I,
            "aria-label": j ?? !1,
            renderPopout: this.renderTooltip,
            nudgeAlignIntoViewport: !0,
            position: "top",
            align: "center",
            positionKey: S,
            children: () =>
                (0, n.jsx)("div", {
                    onMouseEnter: this.handleEnter,
                    onMouseLeave: this.handleLeave,
                    ref: this.handleSetReactionRef,
                    children: (0, n.jsx)("div", {
                        className: a()(C.reaction, T, {
                            [C.reactionMe]: this.isMe(),
                            [C.reactionReadOnly]: c && !g && !A,
                            [C.shakeReaction]: x && null == E,
                        }),
                        style: y,
                        children: (0, n.jsx)(h.Y, {
                            targetElementRef: this.upsellPopoutTargetRef,
                            renderPopout: this.renderLurkerModeUpsellPopout,
                            position: "top",
                            children: (i) =>
                                (0, n.jsxs)(p.D, {
                                    ...i,
                                    innerRef: this.upsellPopoutTargetRef,
                                    className: C.reactionInner,
                                    onClick: this.handleClick,
                                    "aria-disabled": c,
                                    "aria-label": (0, K.mb)(this.isMe(), L, u, r),
                                    "aria-pressed": this.isMe(),
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: a()({ [C.burstGlow]: r }),
                                            style: { boxShadow: `0 0 16px ${t}` },
                                        }),
                                        (0, n.jsxs)("div", {
                                            children: [
                                                r
                                                    ? (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              P &&
                                                                  (0, n.jsx)(O, {
                                                                      messageId: v.id,
                                                                      emoji: u,
                                                                      startPosition: E,
                                                                      targetPosition: M,
                                                                  }),
                                                              _ &&
                                                                  (0, n.jsx)(eP, {
                                                                      count: l,
                                                                      emoji: u,
                                                                      channelId: v.getChannelId(),
                                                                      messageId: v.id,
                                                                      useChatFontScaling: R,
                                                                      color: t,
                                                                      emojiSize: eS.x.NORMAL,
                                                                  }),
                                                          ],
                                                      })
                                                    : null,
                                                (0, n.jsx)(m.A, {
                                                    className: a()({ [C.hideEmoji]: x }),
                                                    emojiId: u.id,
                                                    emojiName: u.name,
                                                    size: N,
                                                    animated: u.animated,
                                                }),
                                            ],
                                        }),
                                        s
                                            ? null
                                            : (0, n.jsx)(f.A, {
                                                  className: C.reactionCount,
                                                  value: L,
                                                  color: e,
                                                  digitWidth: eU,
                                              }),
                                        (0, n.jsx)($, { count: L, reactionRef: b }),
                                    ],
                                }),
                        }),
                    }),
                }),
        });
    }
}
let eB = l.memo((e) => {
    let { type: t, burst_colors: i, message: o, emoji: a } = e,
        r = t === Y.v.BURST,
        s = (0, L.g)(r && null != i ? i : []),
        u = (0, c.bG)([eE.A], () => void 0 !== eE.A.getEffectForEmojiId(o.getChannelId(), o.id, a)),
        d = (0, c.bG)([g.A], () => g.A.useReducedMotion),
        h = eT.Sf.useSetting(),
        p = Z.default.getCurrentUser(),
        m = (0, q.TW)(p),
        f = (0, c.bG)([eE.A], () => eE.A.getReactionPickerAnimation(o.id, a.name, a.id)),
        A = r && (u || null != f),
        [T, R] = l.useState(null),
        [v, x] = l.useState(null),
        [E, N] = l.useState(!1),
        [I, j] = l.useState(null),
        [b, S] = l.useState(void 0);
    return (0, n.jsx)(eG, {
        ...e,
        colors: s,
        isBurstReaction: r,
        hideEmoji: A,
        userHasPremium: m,
        reduceMotion: d,
        animateEmoji: h,
        animationStartPosition: f,
        tooltipText: T,
        tooltipTextAria: v,
        shouldShowTooltip: E,
        reactionRef: I,
        tooltipPositionKey: b,
        setTooltipText: R,
        setTooltipTextAria: x,
        setShouldShowTooltip: N,
        setReactionRef: j,
        setTooltipPositionKey: S,
    });
});
