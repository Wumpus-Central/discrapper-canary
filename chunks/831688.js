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
    m = i(939249),
    p = i(565645),
    g = i(775602),
    f = i(114166),
    A = i(95561),
    T = i(106778),
    R = i(785651),
    v = i(615300),
    E = i(717421),
    x = i(21161),
    N = i(750506),
    I = i(147421),
    j = i(486020),
    S = i(690521),
    b = i(536283),
    C = i(740032);
let y = [];
function O(e) {
    let { messageId: t, emoji: i, startPosition: o, targetPosition: a } = e,
        [r, s] = l.useState(0),
        [u, d] = l.useState(0),
        [c, h] = l.useState(null),
        { confettiCanvas: m } = l.useContext(x.x),
        g = (0, T.f9)(m, c),
        f = l.useMemo(
            () => [
                {
                    src: null == i.id ? S.Ay.getURL(i.name) : j.Ay.getEmojiURL({ id: i.id, animated: !1, size: 22 }),
                    colorize: !1,
                },
            ],
            [i.name, i.id],
        ),
        A = a.x - (a.width / 2) * 0.5,
        O = a.y - (a.height / 2) * 0.5,
        M = (0, E.z)({
            from: { y: o.y },
            to: { y: O },
            config: { duration: 450, easing: v.A.Easing.in(v.A.Easing.exp) },
            onChange: (e) => {
                let { y: t } = e;
                d(t);
            },
        }),
        L = (0, E.z)({
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
            r > 0 && u > 0 && g.createConfetti({ ...b.Mw, position: { type: "static", value: { x: r, y: u } } });
        }, [g, r, u]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(T.K_, { ref: h, sprites: f, colors: y, spriteWidth: b.wn, spriteHeight: b.wn }),
                (0, n.jsx)(N.Ay, {
                    children: (0, n.jsx)(R.animated.div, {
                        style: { ...M },
                        className: C.qq,
                        children: (0, n.jsx)(R.animated.div, {
                            style: { ...L, opacity: L.opacity },
                            children: (0, n.jsx)(p.A, {
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
    L = i(202384),
    w = i(698405),
    _ = i(735438),
    k = i.n(_),
    P = i(702841),
    U = i(3137),
    V = i(620141),
    G = i(966598),
    B = i(224964),
    D = i(31408);
function H(e) {
    let { reactionRef: t, count: i } = e,
        n = l.useRef(i),
        o = (0, P.bG)([U.A], () => U.A.getState()),
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
    F = i(815807),
    J = i(834730),
    K = i(403581),
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
        : (0, n.jsx)(J.E, { variant: "text-sm/normal", "aria-label": a.type, children: a.emojiDescription });
}
function em(e) {
    let t,
        { emojiId: i, onClose: o, nonce: r, showingMoreEmojis: s, setShowingMoreEmojis: u } = e,
        { joinedEmojiSourceGuild: d } = (0, c.cf)([et.Ay, es.A], () => {
            let e = et.Ay.getCustomEmojiById(i);
            return { joinedEmojiSourceGuild: e?.type === ei.i.GUILD ? es.A.getGuild(e?.guildId) : void 0 };
        }),
        [h, p] = l.useState(void 0),
        [g, f] = l.useState(void 0),
        [A, T] = l.useState(null),
        [R, v] = l.useState(!1),
        [E, x] = l.useState(!1),
        N = null != d,
        I = h?.isDiscoverable() ?? !1,
        j = eu.A.getGuildId(),
        S = null != j && (j === h?.id || j === d?.id),
        b = Z.default.getCurrentUser(),
        C = (0, eo.O)({
            sourceType: A,
            expressionSourceApplication: g ?? null,
            isPremium: q.Ay.isPremium(b),
            hasJoinedEmojiSourceGuild: N,
            isDiscoverable: I,
            emojiComesFromCurrentGuild: S,
            isUnusableRoleSubscriptionEmoji: !1,
            userIsRoleSubscriber: !1,
            isRoleSubscriptionEmoji: !1,
            shouldHideRoleSubscriptionCTA: !1,
        });
    if (
        (l.useEffect(() => {
            !s ||
                E ||
                (async () => {
                    v(!0);
                    let e = null != i ? await (0, en.g_)(i) : null;
                    if (null != e)
                        switch ((T(e.type), e.type)) {
                            case en.rV.APPLICATION:
                                f(e.application);
                                break;
                            case en.rV.GUILD:
                                p(e.guild);
                        }
                    else p(null);
                    v(!1), x(!0);
                })();
        }, [i, s, E]),
        N)
    )
        return null;
    let y = s && (void 0 !== h || void 0 !== g);
    return (0, n.jsxs)("div", {
        children: [
            y
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)("div", { className: ec.Hw }),
                          null != C.emojiDescription &&
                              C.type !== eo.u.UNAVAILABLE &&
                              (0, n.jsx)(J.E, {
                                  variant: "text-sm/normal",
                                  "aria-label": C.type,
                                  children: C.emojiDescription,
                              }),
                      ],
                  })
                : ((t = ed.intl.string(ed.t["Igv+LS"])),
                  (0, n.jsxs)(m.D, {
                      onClick: () => {
                          u(!s);
                      },
                      className: ec.s4,
                      children: [
                          (0, n.jsx)(J.E, { variant: "text-sm/normal", color: "none", "aria-label": t, children: t }),
                          (0, n.jsx)(ee.a, {
                              size: "xs",
                              color: "currentColor",
                              className: a()(ec.Po, { [ec.Kk]: !s }),
                          }),
                      ],
                  })),
            R
                ? (0, n.jsx)(er.Y0, { className: ec.eF })
                : y &&
                  (0, n.jsx)(eh, {
                      emojiId: i,
                      expressionSourceGuild: h,
                      hasJoinedExpressionSourceGuild: N,
                      onClose: o,
                      popoutData: C,
                      currentGuildId: j,
                      nonce: r,
                  }),
        ],
    });
}
var ep = i(191226),
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
            nonce: T,
            showingMoreEmojis: R,
            setShowingMoreEmojis: v,
        } = e,
        E = () => {
            h();
            let e = r ? Y.v.BURST : Y.v.NORMAL;
            (0, ep.$)(i, { emoji: t, reactionType: e });
        },
        x = "string" == typeof s ? "" === s.trim() : null == s,
        N = () =>
            x || null == s || null == u
                ? null
                : (0, n.jsx)(J.E, { variant: "text-sm/normal", className: ef.Of, "aria-label": u, children: s }),
        I = (0, c.bG)([Z.default], () => Z.default.getCurrentUser()),
        j = (0, q.TW)(I),
        S = () =>
            null != t.id &&
            (0, n.jsx)(em, { emojiId: t.id, onClose: h, nonce: T, showingMoreEmojis: R, setShowingMoreEmojis: v });
    return l === Y.v.BURST
        ? (0, n.jsxs)("div", {
              className: ef.xQ,
              onMouseEnter: d,
              onMouseLeave: h,
              children: [
                  (0, n.jsx)(m.D, {
                      className: ef.fu,
                      onClick: E,
                      children: (0, n.jsxs)("div", {
                          className: ef.Ok,
                          children: [
                              (0, n.jsx)(p.A, {
                                  className: ef.JS,
                                  emojiId: t.id,
                                  emojiName: t.name,
                                  animated: t.animated,
                                  size: A,
                              }),
                              N(),
                          ],
                      }),
                  }),
                  o
                      ? (0, n.jsxs)("div", {
                            className: a()(ef.h7, ef.j9),
                            children: [
                                j && (0, n.jsx)(K.t, { size: "md", className: ef.eH, color: X.k0.PREMIUM_TIER_2 }),
                                (0, n.jsx)(J.E, {
                                    variant: "text-sm/normal",
                                    className: ef.Of,
                                    children: ed.intl.string(ed.t.ZbNJXn),
                                }),
                            ],
                        })
                      : j
                        ? (0, n.jsxs)("div", {
                              className: a()(ef.h7, ef.j9, ef.rL),
                              children: [
                                  (0, n.jsx)(K.t, { size: "md", className: ef.eH, color: X.k0.PREMIUM_TIER_2 }),
                                  (0, n.jsx)(m.D, {
                                      onClick: g,
                                      children: (0, n.jsx)(J.E, {
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
                                        (0, n.jsx)(J.E, {
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
                  S(),
              ],
          })
        : (0, n.jsxs)("div", {
              className: ef.xQ,
              onMouseEnter: d,
              onMouseLeave: h,
              children: [
                  (0, n.jsx)(m.D, {
                      onClick: E,
                      children: (0, n.jsxs)("div", {
                          className: ef.xR,
                          children: [
                              (0, n.jsx)(p.A, {
                                  className: ef.JS,
                                  emojiId: t.id,
                                  emojiName: t.name,
                                  animated: t.animated,
                                  size: A,
                              }),
                              N(),
                          ],
                      }),
                  }),
                  S(),
              ],
          });
}
var eT = i(885386),
    eR = i(734057),
    ev = i(956703),
    eE = i(174459),
    ex = i(900210),
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
function eS(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Y.v.NORMAL,
        n = arguments.length > 3 ? arguments[3] : void 0,
        l = ev.A.getReactions(e.getChannelId(), e.id, t, 3, i),
        o = eR.A.getChannel(e.getChannelId()),
        a = null == o || o.isPrivate() ? null : o.getGuildId(),
        r = e.getReaction(t),
        s = i === Y.v.BURST,
        u = k()(Array.from(l?.values() ?? []))
            .reject((e) => eN.A.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => eI.Ay.getName(a, o?.id, e))
            .value();
    if (0 === u.length) return "";
    let d = s ? ej.burst : ej.standard,
        c = Math.max(0, ((s ? r?.burst_count : r?.count) ?? 0) - u.length),
        h = (0, F.b3)(t);
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
var eb = i(299072),
    eC = i(228366),
    ey = i(297494),
    eO = i(60317),
    eM = i(734646),
    eL = i(15440);
let ew = l.memo(function (e) {
    let { channelId: t, messageId: i, emoji: o, useChatFontScaling: a, color: r, count: s, emojiSize: u } = e,
        d = (0, c.bG)([ex.A], () => ex.A.getEffectForEmojiId(t, i, o)),
        h = l.useMemo(() => (0, eO.eT)(o, r, t, { key: d, messageId: i }), [r, d, o, t, i]),
        [m, p] = l.useState(!1),
        f = (0, c.bG)([g.A], () => g.A.useReducedMotion),
        A = eT.Sf.useSetting(),
        T = l.useCallback(() => {
            eC.h.dispatch({ type: "BURST_REACTION_EFFECT_CLEAR", channelId: t, messageId: i, emoji: o });
        }, [o, t, i]);
    return (l.useEffect(() => {
        let e = () => {
            if (m) return;
            let e = (0, ey.H4)(`${Date.now()}${t}${i}${o.name}`) % 10;
            (e += s > 4 ? 4 : s - 1) > 7 &&
                (p(!0), (0, z.on)({ channelId: t, messageId: i, emoji: o, key: ex.W.RANDOM }));
        };
        if (m || (f && !A) || !A) return;
        e();
        let n = setInterval(e, 5e3);
        return () => {
            clearInterval(n);
        };
    }, [A, t, s, o, o.name, m, i, f]),
    null == d)
        ? null
        : (0, n.jsx)(eb.A, { className: (a ? eL : eM).effect, effect: h, onComplete: T, emojiSize: u });
});
var e_ = i(652215),
    ek = i(347353),
    eP = i(866661);
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
                      section: null != s ? (0, F.sn)(s) : void 0,
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
            (0, z.on)({ channelId: i.getChannelId(), messageId: i.id, emoji: t, key: ex.W.HOVER }),
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
            this.props.setShowingMoreEmojis(!1),
            this.hasShownTooltip && eE.default.track(e_.HAw.CLOSE_POPOUT, { nonce: this.nonce });
    };
    isMe = () => {
        let { me: e, me_burst: t, type: i } = this.props;
        return eV(e, t, i);
    };
    updateTooltipText = () => {
        let { message: e, emoji: t, type: i } = this.props,
            n = eS(e, t, i),
            l = this.isKeyboardNavigation ? n : eS(e, t, i, e_.tEg);
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
            ? (0, n.jsx)(w.A, { ctaRef: this.ctaRef, type: w.w.REACTIONS, guild: a, closePopout: t })
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
            showingMoreEmojis: u,
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
            nonce: this.nonce,
            showingMoreEmojis: u,
            setShowingMoreEmojis: this.props.setShowingMoreEmojis,
        });
    };
    handleShowVerificationGate = () => {
        let { message: e, isPendingMember: t } = this.props;
        if (!t) return null;
        let i = eR.A.getChannel(e.getChannelId()),
            n = es.A.getGuild(i?.getGuildId());
        null != n && (0, L.Ze)(n.id);
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
                eE.default.track(e_.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: eg.e.BURST_REACTION_UPSELL,
                    location: {
                        page: l?.getGuildId() != null ? e_.liQ.GUILD_CHANNEL : e_.liQ.DM_CHANNEL,
                        section: (0, F.sn)(l),
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
                hideEmoji: E,
                animationStartPosition: x,
                emojiSize: N,
            } = this.props,
            { shouldShowTooltip: I, tooltipTextAria: j, reactionRef: S, showingMoreEmojis: b } = this.props,
            C = R ? eP : ek,
            y = {},
            M = r ? l : i;
        if (r && null != o) {
            let { accentColor: i, backgroundColor: n, opacity: l } = o,
                a = (0, d.xp)(n ?? "", l) ?? "";
            this.isMe() && (y.borderColor = n), (y.background = a), (e = i), (t = i);
        }
        let L = S?.getBoundingClientRect(),
            w = null != x && null != L,
            _ = null == x;
        return (0, n.jsx)(h.Y, {
            targetElementRef: { current: S },
            shouldShow: I,
            "aria-label": j ?? !1,
            renderPopout: this.renderTooltip,
            avoidancePadding: b ? void 0 : { top: 120 },
            nudgeAlignIntoViewport: !0,
            position: "top",
            align: "center",
            children: () =>
                (0, n.jsx)("div", {
                    onMouseEnter: this.handleEnter,
                    onMouseLeave: this.handleLeave,
                    ref: this.handleSetReactionRef,
                    children: (0, n.jsx)("div", {
                        className: a()(C.reaction, T, {
                            [C.reactionMe]: this.isMe(),
                            [C.reactionReadOnly]: c && !g && !A,
                            [C.shakeReaction]: E && null == x,
                        }),
                        style: y,
                        children: (0, n.jsx)(h.Y, {
                            targetElementRef: this.upsellPopoutTargetRef,
                            renderPopout: this.renderLurkerModeUpsellPopout,
                            position: "top",
                            children: (i) =>
                                (0, n.jsxs)(m.D, {
                                    ...i,
                                    innerRef: this.upsellPopoutTargetRef,
                                    className: C.reactionInner,
                                    onClick: this.handleClick,
                                    "aria-disabled": c,
                                    "aria-label": (0, F.mb)(this.isMe(), M, u, r),
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
                                                              w &&
                                                                  (0, n.jsx)(O, {
                                                                      messageId: v.id,
                                                                      emoji: u,
                                                                      startPosition: x,
                                                                      targetPosition: L,
                                                                  }),
                                                              _ &&
                                                                  (0, n.jsx)(ew, {
                                                                      count: l,
                                                                      emoji: u,
                                                                      channelId: v.getChannelId(),
                                                                      messageId: v.id,
                                                                      useChatFontScaling: R,
                                                                      color: t,
                                                                      emojiSize: eb.x.NORMAL,
                                                                  }),
                                                          ],
                                                      })
                                                    : null,
                                                (0, n.jsx)(p.A, {
                                                    className: a()({ [C.hideEmoji]: E }),
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
                                                  value: M,
                                                  color: e,
                                                  digitWidth: eU,
                                              }),
                                        (0, n.jsx)($, { count: M, reactionRef: S }),
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
        s = (0, M.g)(r && null != i ? i : []),
        u = (0, c.bG)([ex.A], () => void 0 !== ex.A.getEffectForEmojiId(o.getChannelId(), o.id, a)),
        d = (0, c.bG)([g.A], () => g.A.useReducedMotion),
        h = eT.Sf.useSetting(),
        m = Z.default.getCurrentUser(),
        p = (0, q.TW)(m),
        f = (0, c.bG)([ex.A], () => ex.A.getReactionPickerAnimation(o.id, a.name, a.id)),
        A = r && (u || null != f),
        [T, R] = l.useState(null),
        [v, E] = l.useState(null),
        [x, N] = l.useState(!1),
        [I, j] = l.useState(null),
        [S, b] = l.useState(!1);
    return (0, n.jsx)(eG, {
        ...e,
        colors: s,
        isBurstReaction: r,
        hideEmoji: A,
        userHasPremium: p,
        reduceMotion: d,
        animateEmoji: h,
        animationStartPosition: f,
        tooltipText: T,
        tooltipTextAria: v,
        shouldShowTooltip: x,
        reactionRef: I,
        showingMoreEmojis: S,
        setTooltipText: R,
        setTooltipTextAria: E,
        setShouldShowTooltip: N,
        setReactionRef: j,
        setShowingMoreEmojis: b,
    });
});
