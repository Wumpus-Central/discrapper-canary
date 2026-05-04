n.d(t, { qT: () => eB, $Z: () => eU, IN: () => eV });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    o = n.n(a),
    r = n(284009),
    s = n.n(r),
    u = n(835245),
    d = n(317097),
    c = n(17928),
    h = n(922016),
    p = n(939249),
    m = n(565645),
    g = n(775602),
    f = n(114166),
    A = n(95561),
    T = n(106778),
    x = n(785651),
    R = n(615300),
    E = n(717421),
    I = n(21161),
    j = n(750506),
    N = n(147421),
    v = n(486020),
    S = n(690521),
    b = n(536283),
    C = n(740032);
let y = [];
function O(e) {
    let { messageId: t, emoji: n, startPosition: a, targetPosition: o } = e,
        [r, s] = l.useState(0),
        [u, d] = l.useState(0),
        [c, h] = l.useState(null),
        { confettiCanvas: p } = l.useContext(I.x),
        g = (0, T.f9)(p, c),
        f = l.useMemo(
            () => [
                {
                    src: null == n.id ? S.Ay.getURL(n.name) : v.Ay.getEmojiURL({ id: n.id, animated: !1, size: 22 }),
                    colorize: !1,
                },
            ],
            [n.name, n.id],
        ),
        A = o.x - (o.width / 2) * 0.5,
        O = o.y - (o.height / 2) * 0.5,
        L = (0, E.z)({
            from: { y: a.y },
            to: { y: O },
            config: { duration: 450, easing: R.A.Easing.in(R.A.Easing.exp) },
            onChange: (e) => {
                let { y: t } = e;
                d(t);
            },
        }),
        M = (0, E.z)({
            from: { x: a.x, scale: 1, opacity: 1 },
            to: { x: A, scale: 0.5, opacity: 0.4 },
            config: { duration: 450, easing: R.A.Easing.in(R.A.Easing.ease) },
            onRest: () => {
                (0, N.p)(t, n.name, n.id);
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
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(T.K_, { ref: h, sprites: f, colors: y, spriteWidth: b.wn, spriteHeight: b.wn }),
                (0, i.jsx)(j.Ay, {
                    children: (0, i.jsx)(x.animated.div, {
                        style: { ...L },
                        className: C.qq,
                        children: (0, i.jsx)(x.animated.div, {
                            style: { ...M, opacity: M.opacity },
                            children: (0, i.jsx)(m.A, {
                                className: C.Zg,
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
var L = n(891734),
    M = n(202384),
    w = n(698405),
    _ = n(735438),
    k = n.n(_),
    P = n(702841),
    U = n(3137),
    V = n(620141),
    G = n(966598),
    B = n(224964),
    D = n(31408);
function H(e) {
    let { reactionRef: t, count: n } = e,
        i = l.useRef(n),
        a = (0, P.bG)([U.A], () => U.A.getState()),
        o = (0, B.A)(),
        r = (0, G.A)(t);
    return (
        l.useEffect(() => {
            if (n > i.current && null != r) {
                let e = (0, _.clamp)(n, a.confettiCount / 2, 2 * a.confettiCount);
                o.fire(r.x, r.y, { count: e });
            }
            i.current = n;
        }, [n, r, o, a.confettiCount]),
        null
    );
}
function $(e) {
    return (0, i.jsx)(V.A, { confettiLocation: D.k.REACTION, children: (0, i.jsx)(H, { ...e }) });
}
var W = n(507545),
    z = n(649963),
    F = n(815807),
    J = n(834730),
    X = n(403581),
    Y = n(404374),
    Q = n(505527),
    Z = n(725807),
    K = n(287809),
    q = n(927578),
    ee = n(847374),
    et = n(159273),
    en = n(770335),
    ei = n(624793),
    el = n(731383),
    ea = n(450707),
    eo = n(861626),
    er = n(34337),
    es = n(71393),
    eu = n(967198),
    ed = n(375708),
    ec = n(658611);
function eh(e) {
    let {
        emojiId: t,
        expressionSourceGuild: n,
        hasJoinedExpressionSourceGuild: l,
        onClose: a,
        popoutData: o,
        currentGuildId: r,
        nonce: s,
    } = e;
    (0, el.i)({ emojiId: t, currentGuildId: r, popoutData: o, emojiSourceGuildId: n?.id, nonce: s });
    let u = n?.isDiscoverable() ?? !1,
        d = null != n && u,
        c = (n?.emojis?.length ?? 0) > 1;
    return d
        ? null == n
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", {
                          className: ec.h2,
                          children: (0, i.jsx)(eo.G7, {
                              expressionSourceGuild: n,
                              hasJoinedExpressionSourceGuild: l,
                              isDisplayingJoinGuildButtonInPopout: o.type === ea.u.JOIN_GUILD,
                          }),
                      }),
                      c &&
                          (0, i.jsx)(eo.mG, {
                              emojiId: t,
                              expressionSourceGuild: n,
                              hasJoinedEmojiSourceGuild: l,
                              onClose: a,
                              popoutData: o,
                              isDisplayingButtonInTopSection: !1,
                          }),
                  ],
              })
        : (0, i.jsx)(J.E, { variant: "text-sm/normal", "aria-label": o.type, children: o.emojiDescription });
}
function ep(e) {
    let t,
        { emojiId: n, onClose: a, nonce: r, showingMoreEmojis: s, setShowingMoreEmojis: u } = e,
        { joinedEmojiSourceGuild: d } = (0, c.cf)([et.Ay, es.A], () => {
            let e = et.Ay.getCustomEmojiById(n);
            return { joinedEmojiSourceGuild: e?.type === en.i.GUILD ? es.A.getGuild(e?.guildId) : void 0 };
        }),
        [h, m] = l.useState(void 0),
        [g, f] = l.useState(void 0),
        [A, T] = l.useState(null),
        [x, R] = l.useState(!1),
        [E, I] = l.useState(!1),
        j = null != d,
        N = h?.isDiscoverable() ?? !1,
        v = eu.A.getGuildId(),
        S = null != v && (v === h?.id || v === d?.id),
        b = K.default.getCurrentUser(),
        C = (0, ea.O)({
            sourceType: A,
            expressionSourceApplication: g ?? null,
            isPremium: q.Ay.isPremium(b),
            hasJoinedEmojiSourceGuild: j,
            isDiscoverable: N,
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
                    R(!0);
                    let e = null != n ? await (0, ei.g_)(n) : null;
                    if (null != e)
                        switch ((T(e.type), e.type)) {
                            case ei.rV.APPLICATION:
                                f(e.application);
                                break;
                            case ei.rV.GUILD:
                                m(e.guild);
                        }
                    else m(null);
                    R(!1), I(!0);
                })();
        }, [n, s, E]),
        j)
    )
        return null;
    let y = s && (void 0 !== h || void 0 !== g);
    return (0, i.jsxs)("div", {
        children: [
            y
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("div", { className: ec.Hw }),
                          null != C.emojiDescription &&
                              C.type !== ea.u.UNAVAILABLE &&
                              (0, i.jsx)(J.E, {
                                  variant: "text-sm/normal",
                                  "aria-label": C.type,
                                  children: C.emojiDescription,
                              }),
                      ],
                  })
                : ((t = ed.intl.string(ed.t["Igv+LS"])),
                  (0, i.jsxs)(p.D, {
                      onClick: () => {
                          u(!s);
                      },
                      className: ec.s4,
                      children: [
                          (0, i.jsx)(J.E, { variant: "text-sm/normal", color: "none", "aria-label": t, children: t }),
                          (0, i.jsx)(ee.a, {
                              size: "xs",
                              color: "currentColor",
                              className: o()(ec.Po, { [ec.Kk]: !s }),
                          }),
                      ],
                  })),
            x
                ? (0, i.jsx)(er.Y0, { className: ec.eF })
                : y &&
                  (0, i.jsx)(eh, {
                      emojiId: n,
                      expressionSourceGuild: h,
                      hasJoinedExpressionSourceGuild: j,
                      onClose: a,
                      popoutData: C,
                      currentGuildId: v,
                      nonce: r,
                  }),
        ],
    });
}
var em = n(191226),
    eg = n(788868),
    ef = n(307217);
function eA(e) {
    let {
            emoji: t,
            message: n,
            type: l,
            meBurst: a,
            isBurstReaction: r = !1,
            tooltipText: s,
            tooltipTextAria: u,
            onMouseEnter: d,
            onMouseLeave: h,
            onReactionClick: g,
            isKeyboardNavigation: f,
            emojiSizeTooltip: A,
            nonce: T,
            showingMoreEmojis: x,
            setShowingMoreEmojis: R,
        } = e,
        E = () => {
            h();
            let e = r ? Q.v.BURST : Q.v.NORMAL;
            (0, em.$)(n, { emoji: t, reactionType: e });
        },
        I = "string" == typeof s ? "" === s.trim() : null == s,
        j = () =>
            I || null == s || null == u
                ? null
                : (0, i.jsx)(J.E, { variant: "text-sm/normal", className: ef.Of, "aria-label": u, children: s }),
        N = (0, c.bG)([K.default], () => K.default.getCurrentUser()),
        v = (0, q.TW)(N),
        S = () =>
            null != t.id &&
            (0, i.jsx)(ep, { emojiId: t.id, onClose: h, nonce: T, showingMoreEmojis: x, setShowingMoreEmojis: R });
    return l === Q.v.BURST
        ? (0, i.jsxs)("div", {
              className: ef.xQ,
              onMouseEnter: d,
              onMouseLeave: h,
              children: [
                  (0, i.jsx)(p.D, {
                      className: ef.fu,
                      onClick: E,
                      children: (0, i.jsxs)("div", {
                          className: ef.Ok,
                          children: [
                              (0, i.jsx)(m.A, {
                                  className: ef.JS,
                                  emojiId: t.id,
                                  emojiName: t.name,
                                  animated: t.animated,
                                  size: A,
                              }),
                              j(),
                          ],
                      }),
                  }),
                  a
                      ? (0, i.jsxs)("div", {
                            className: o()(ef.h7, ef.j9),
                            children: [
                                v && (0, i.jsx)(X.t, { size: "md", className: ef.eH, color: Y.k0.PREMIUM_TIER_2 }),
                                (0, i.jsx)(J.E, {
                                    variant: "text-sm/normal",
                                    className: ef.Of,
                                    children: ed.intl.string(ed.t.ZbNJXn),
                                }),
                            ],
                        })
                      : v
                        ? (0, i.jsxs)("div", {
                              className: o()(ef.h7, ef.j9, ef.rL),
                              children: [
                                  (0, i.jsx)(X.t, { size: "md", className: ef.eH, color: Y.k0.PREMIUM_TIER_2 }),
                                  (0, i.jsx)(p.D, {
                                      onClick: g,
                                      children: (0, i.jsx)(J.E, {
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
                          : (0, i.jsx)("div", {
                                className: o()(ef.h7, ef.j9),
                                children: (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(J.E, {
                                            variant: "text-sm/normal",
                                            "aria-label": "super reaction tooltip upsell",
                                            children: ed.intl.string(ed.t.W1bMkq),
                                        }),
                                        (0, i.jsx)(Z.A, {
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
        : (0, i.jsxs)("div", {
              className: ef.xQ,
              onMouseEnter: d,
              onMouseLeave: h,
              children: [
                  (0, i.jsx)(p.D, {
                      onClick: E,
                      children: (0, i.jsxs)("div", {
                          className: ef.xR,
                          children: [
                              (0, i.jsx)(m.A, {
                                  className: ef.JS,
                                  emojiId: t.id,
                                  emojiName: t.name,
                                  animated: t.animated,
                                  size: A,
                              }),
                              j(),
                          ],
                      }),
                  }),
                  S(),
              ],
          });
}
var eT = n(885386),
    ex = n(734057),
    eR = n(956703),
    eE = n(174459),
    eI = n(900210),
    ej = n(994500),
    eN = n(562153);
let ev = {
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
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Q.v.NORMAL,
        i = arguments.length > 3 ? arguments[3] : void 0,
        l = eR.A.getReactions(e.getChannelId(), e.id, t, 3, n),
        a = ex.A.getChannel(e.getChannelId()),
        o = null == a || a.isPrivate() ? null : a.getGuildId(),
        r = e.getReaction(t),
        s = n === Q.v.BURST,
        u = k()(Array.from(l?.values() ?? []))
            .reject((e) => ej.A.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => eN.Ay.getName(o, a?.id, e))
            .value();
    if (0 === u.length) return "";
    let d = s ? ev.burst : ev.standard,
        c = Math.max(0, ((s ? r?.burst_count : r?.count) ?? 0) - u.length),
        h = (0, F.b3)(t);
    if (1 === u.length)
        if (!(c > 0)) return ed.intl.formatToPlainString(d.reactionTooltip1, { a: u[0], emojiName: h });
        else if (null != i)
            return ed.intl.format(d.reactionTooltip1NInteractive, { a: u[0], n: c, emojiName: h, onClick: i });
        else return ed.intl.formatToPlainString(d.reactionTooltip1N, { a: u[0], n: c, emojiName: h });
    if (2 === u.length)
        if (!(c > 0)) return ed.intl.formatToPlainString(d.reactionTooltip2, { a: u[0], b: u[1], emojiName: h });
        else if (null != i)
            return ed.intl.format(d.reactionTooltip2NInteractive, { a: u[0], b: u[1], n: c, emojiName: h, onClick: i });
        else return ed.intl.formatToPlainString(d.reactionTooltip2N, { a: u[0], b: u[1], n: c, emojiName: h });
    return 3 !== u.length
        ? null != i
            ? ed.intl.format(d.reactionTooltipNInteractive, { n: c, emojiName: h, onClick: i })
            : ed.intl.formatToPlainString(d.reactionTooltipN, { n: c, emojiName: h })
        : c > 0
          ? null != i
              ? ed.intl.format(d.reactionTooltip3NInteractive, {
                    a: u[0],
                    b: u[1],
                    c: u[2],
                    n: c,
                    emojiName: h,
                    onClick: i,
                })
              : ed.intl.formatToPlainString(d.reactionTooltip3N, { a: u[0], b: u[1], c: u[2], n: c, emojiName: h })
          : ed.intl.formatToPlainString(d.reactionTooltip3, { a: u[0], b: u[1], c: u[2], emojiName: h });
}
var eb = n(299072),
    eC = n(228366),
    ey = n(297494),
    eO = n(60317),
    eL = n(734646),
    eM = n(15440);
let ew = l.memo(function (e) {
    let { channelId: t, messageId: n, emoji: a, useChatFontScaling: o, color: r, count: s, emojiSize: u } = e,
        d = (0, c.bG)([eI.A], () => eI.A.getEffectForEmojiId(t, n, a)),
        h = l.useMemo(() => (0, eO.eT)(a, r, t, { key: d, messageId: n }), [r, d, a, t, n]),
        [p, m] = l.useState(!1),
        f = (0, c.bG)([g.A], () => g.A.useReducedMotion),
        A = eT.Sf.useSetting(),
        T = l.useCallback(() => {
            eC.h.dispatch({ type: "BURST_REACTION_EFFECT_CLEAR", channelId: t, messageId: n, emoji: a });
        }, [a, t, n]);
    return (l.useEffect(() => {
        let e = () => {
            if (p) return;
            let e = (0, ey.H4)(`${Date.now()}${t}${n}${a.name}`) % 10;
            (e += s > 4 ? 4 : s - 1) > 7 &&
                (m(!0), (0, z.on)({ channelId: t, messageId: n, emoji: a, key: eI.W.RANDOM }));
        };
        if (p || (f && !A) || !A) return;
        e();
        let i = setInterval(e, 5e3);
        return () => {
            clearInterval(i);
        };
    }, [A, t, s, a, a.name, p, n, f]),
    null == d)
        ? null
        : (0, i.jsx)(eb.A, { className: (o ? eM : eL).effect, effect: h, onComplete: T, emojiSize: u });
});
var e_ = n(652215),
    ek = n(347353),
    eP = n(866661);
let eU = 12;
function eV(e, t, n) {
    return (n === Q.v.BURST && t) || (n === Q.v.NORMAL && e);
}
class eG extends l.PureComponent {
    static defaultProps = { emojiSizeTooltip: "jumbo" };
    componentWillUnmount() {
        clearTimeout(this.props.timeoutRef.current),
            clearTimeout(this.props.hideTimeoutRef.current),
            this.hideTooltip();
    }
    userCanBurstReact = () => this.props.userHasPremium;
    handleClick = (e) => {
        e.stopPropagation();
        let {
                message: t,
                emoji: n,
                readOnly: i,
                isBurstReaction: l,
                isPendingMember: a,
                isLurking: o,
                isForumToolbar: r,
                ctaRef: s,
            } = this.props,
            u = ex.A.getChannel(t.getChannelId());
        if (o) return void s.current?.focus();
        let d = t.getChannelId(),
            c = r ? z.qN.FORUM_TOOLBAR : z.qN.MESSAGE_INLINE_BUTTON;
        l && !this.userCanBurstReact()
            ? (0, W.z)({
                  analytics: {
                      type: eg.e.BURST_REACTION_UPSELL,
                      page: u?.getGuildId() != null ? e_.liQ.GUILD_CHANNEL : e_.liQ.DM_CHANNEL,
                      section: null != u ? (0, F.sn)(u) : void 0,
                      object: e_.ZSU.EMOJI_REACTION_UPSELL,
                  },
              })
            : a
              ? this.handleShowVerificationGate()
              : i ||
                (this.isMe()
                    ? (0, z.et)({ channelId: d, messageId: t.id, emoji: n, location: c, options: { burst: l } })
                    : (0, z.BB)(d, t.id, n, c, { burst: l }));
    };
    handleEnter = (e) => {
        let {
                emoji: t,
                message: n,
                type: i,
                reduceMotion: l,
                animateEmoji: a,
                autoUnfurlReactionTooltip: o,
                timeoutRef: r,
                isReactionEventActiveRef: s,
                isKeyboardNavigationRef: u,
            } = this.props,
            d = i === Q.v.BURST;
        d &&
            !s.current &&
            !l &&
            a &&
            (0, z.on)({ channelId: n.getChannelId(), messageId: n.id, emoji: t, key: eI.W.HOVER }),
            (s.current = !0),
            (u.current = "focus" === e.type),
            null == r.current &&
                (r.current = setTimeout(
                    () => {
                        this.showTooltip(), (r.current = null);
                    },
                    d ? 750 : o ? 200 : 500,
                ));
    };
    handleEnterTooltip = () => {
        (this.props.isReactionEventActiveRef.current = !0), this.handleShowTooltip();
    };
    handleShowTooltip = () => {
        let { hideTimeoutRef: e, isReactionEventActiveRef: t } = this.props;
        clearTimeout(e.current),
            (e.current = null),
            t.current && (this.updateTooltipText(), eR.A.addChangeListener(this.updateTooltipText));
    };
    showTooltip = () => {
        let { isReactionEventActiveRef: e, hasShownTooltipRef: t } = this.props;
        this.props.readOnly ||
            (this.handleShowTooltip(), e.current && this.trackReactionTooltipViewed(), (t.current = !0));
    };
    handleLeave = () => {
        let { timeoutRef: e, hideTimeoutRef: t, isReactionEventActiveRef: n, isKeyboardNavigationRef: i } = this.props;
        (n.current = !1),
            (i.current = !1),
            clearTimeout(e.current),
            (e.current = null),
            eR.A.removeChangeListener(this.updateTooltipText),
            null == t.current &&
                (t.current = setTimeout(() => {
                    this.hideTooltip(), (t.current = null);
                }, 200));
    };
    hideTooltip = () => {
        let { setShowingMoreEmojis: e, setShouldShowTooltip: t, hasShownTooltipRef: n, nonce: i } = this.props;
        t(!1), e(!1), n.current && eE.default.track(e_.HAw.CLOSE_POPOUT, { nonce: i });
    };
    isMe = () => {
        let { me: e, me_burst: t, type: n } = this.props;
        return eV(e, t, n);
    };
    updateTooltipText = () => {
        let { message: e, emoji: t, type: n, isKeyboardNavigationRef: i } = this.props,
            l = eS(e, t, n),
            a = i.current ? l : eS(e, t, n, e_.tEg);
        s()("string" == typeof l, "tooltipTextAria is not a string"),
            this.props.setTooltipText(a),
            this.props.setTooltipTextAria(l),
            this.props.setShouldShowTooltip(null != a && "" !== a);
    };
    renderLurkerModeUpsellPopout = (e) => {
        let { closePopout: t } = e,
            { message: n, isLurking: l, ctaRef: a } = this.props,
            o = ex.A.getChannel(n.getChannelId()),
            r = es.A.getGuild(o?.getGuildId());
        return l && null != r
            ? (0, i.jsx)(w.A, { ctaRef: a, type: w.w.REACTIONS, guild: r, closePopout: t })
            : (0, i.jsx)(i.Fragment, {});
    };
    renderTooltip = () => {
        let {
            emoji: e,
            message: t,
            type: n,
            me_burst: l,
            isBurstReaction: a = !1,
            emojiSizeTooltip: o,
            tooltipText: r,
            tooltipTextAria: s,
            showingMoreEmojis: u,
            nonce: d,
            setShowingMoreEmojis: c,
            isKeyboardNavigationRef: h,
        } = this.props;
        return (0, i.jsx)(eA, {
            emoji: e,
            message: t,
            type: n,
            meBurst: l,
            isBurstReaction: a,
            tooltipText: r,
            tooltipTextAria: s,
            onMouseEnter: this.handleEnterTooltip,
            onMouseLeave: this.handleLeave,
            onReactionClick: this.handleClick,
            isKeyboardNavigation: h.current,
            emojiSizeTooltip: o,
            nonce: d,
            showingMoreEmojis: u,
            setShowingMoreEmojis: c,
        });
    };
    handleShowVerificationGate = () => {
        let { message: e, isPendingMember: t } = this.props;
        if (!t) return null;
        let n = ex.A.getChannel(e.getChannelId()),
            i = es.A.getGuild(n?.getGuildId());
        null != i && (0, M.Ze)(i.id);
    };
    handleSetReactionRef = (e) => {
        this.props.setReactionRef(e);
    };
    trackReactionTooltipViewed = () => {
        let { emoji: e, message: t, type: n, nonce: i } = this.props,
            l = K.default.getCurrentUser(),
            a = ex.A.getChannel(t.getChannelId()),
            o = n === Q.v.BURST,
            r = (0, q.TW)(l),
            s = o ? eg.e.EMOJI_IN_BURST_REACTION_HOVER : eg.e.EMOJI_IN_REACTION_HOVER;
        !o || this.userCanBurstReact() || r || (s = eg.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
            A.Ay.trackWithMetadata(e_.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                type: s,
                expression_id: e.id,
                expression_name: e.name,
                is_animated: e.animated,
                is_custom: null != e.id,
                nonce: i,
            }),
            !o ||
                null == a ||
                r ||
                this.userCanBurstReact() ||
                eE.default.track(e_.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: eg.e.BURST_REACTION_UPSELL,
                    location: {
                        page: a?.getGuildId() != null ? e_.liQ.GUILD_CHANNEL : e_.liQ.DM_CHANNEL,
                        section: (0, F.sn)(a),
                        object: e_.ZSU.EMOJI_REACTION_TOOLTIP_UPSELL,
                    },
                });
    };
    render() {
        let e,
            t,
            {
                count: n,
                burst_count: l,
                colors: a,
                isBurstReaction: r,
                hideCount: s,
                emoji: u,
                readOnly: c,
                isLurking: g,
                isPendingMember: A,
                className: T,
                useChatFontScaling: x,
                message: R,
                hideEmoji: E,
                animationStartPosition: I,
                emojiSize: j,
            } = this.props,
            {
                shouldShowTooltip: N,
                tooltipTextAria: v,
                reactionRef: S,
                showingMoreEmojis: b,
                upsellPopoutTargetRef: C,
            } = this.props,
            y = x ? eP : ek,
            L = {},
            M = r ? l : n;
        if (r && null != a) {
            let { accentColor: n, backgroundColor: i, opacity: l } = a,
                o = (0, d.xp)(i ?? "", l) ?? "";
            this.isMe() && (L.borderColor = i), (L.background = o), (e = n), (t = n);
        }
        let w = S?.getBoundingClientRect(),
            _ = null != I && null != w,
            k = null == I;
        return (0, i.jsx)(h.Y, {
            targetElementRef: { current: S },
            shouldShow: N,
            "aria-label": v ?? !1,
            renderPopout: this.renderTooltip,
            avoidancePadding: b ? void 0 : { top: 120 },
            nudgeAlignIntoViewport: !0,
            position: "top",
            align: "center",
            children: () =>
                (0, i.jsx)("div", {
                    onMouseEnter: this.handleEnter,
                    onMouseLeave: this.handleLeave,
                    ref: this.handleSetReactionRef,
                    children: (0, i.jsx)("div", {
                        className: o()(y.reaction, T, {
                            [y.reactionMe]: this.isMe(),
                            [y.reactionReadOnly]: c && !g && !A,
                            [y.shakeReaction]: E && null == I,
                        }),
                        style: L,
                        children: (0, i.jsx)(h.Y, {
                            targetElementRef: C,
                            renderPopout: this.renderLurkerModeUpsellPopout,
                            position: "top",
                            children: (n) =>
                                (0, i.jsxs)(p.D, {
                                    ...n,
                                    innerRef: C,
                                    className: y.reactionInner,
                                    onClick: this.handleClick,
                                    "aria-disabled": c,
                                    "aria-label": (0, F.mb)(this.isMe(), M, u, r),
                                    "aria-pressed": this.isMe(),
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: o()({ [y.burstGlow]: r }),
                                            style: { boxShadow: `0 0 16px ${t}` },
                                        }),
                                        (0, i.jsxs)("div", {
                                            children: [
                                                r
                                                    ? (0, i.jsxs)(i.Fragment, {
                                                          children: [
                                                              _ &&
                                                                  (0, i.jsx)(O, {
                                                                      messageId: R.id,
                                                                      emoji: u,
                                                                      startPosition: I,
                                                                      targetPosition: w,
                                                                  }),
                                                              k &&
                                                                  (0, i.jsx)(ew, {
                                                                      count: l,
                                                                      emoji: u,
                                                                      channelId: R.getChannelId(),
                                                                      messageId: R.id,
                                                                      useChatFontScaling: x,
                                                                      color: t,
                                                                      emojiSize: eb.x.NORMAL,
                                                                  }),
                                                          ],
                                                      })
                                                    : null,
                                                (0, i.jsx)(m.A, {
                                                    className: o()({ [y.hideEmoji]: E }),
                                                    emojiId: u.id,
                                                    emojiName: u.name,
                                                    size: j,
                                                    animated: u.animated,
                                                }),
                                            ],
                                        }),
                                        s
                                            ? null
                                            : (0, i.jsx)(f.A, {
                                                  className: y.reactionCount,
                                                  value: M,
                                                  color: e,
                                                  digitWidth: eU,
                                              }),
                                        (0, i.jsx)($, { count: M, reactionRef: S }),
                                    ],
                                }),
                        }),
                    }),
                }),
        });
    }
}
let eB = l.memo((e) => {
    let { type: t, burst_colors: n, message: a, emoji: o } = e,
        r = t === Q.v.BURST,
        s = (0, L.g)(r && null != n ? n : []),
        d = (0, c.bG)([eI.A], () => void 0 !== eI.A.getEffectForEmojiId(a.getChannelId(), a.id, o)),
        h = (0, c.bG)([g.A], () => g.A.useReducedMotion),
        p = eT.Sf.useSetting(),
        m = K.default.getCurrentUser(),
        f = (0, q.TW)(m),
        A = (0, c.bG)([eI.A], () => eI.A.getReactionPickerAnimation(a.id, o.name, o.id)),
        T = r && (d || null != A),
        [x, R] = l.useState(null),
        [E, I] = l.useState(null),
        [j, N] = l.useState(!1),
        [v, S] = l.useState(null),
        [b, C] = l.useState(!1),
        y = l.useRef(null),
        O = l.useRef(null),
        M = l.useRef(null),
        w = l.useRef(null),
        _ = l.useRef(!1),
        k = l.useRef(!1),
        P = l.useRef(!1),
        [U] = l.useState(() => (0, u.A)());
    return (0, i.jsx)(eG, {
        ...e,
        colors: s,
        isBurstReaction: r,
        hideEmoji: T,
        userHasPremium: f,
        reduceMotion: h,
        animateEmoji: p,
        animationStartPosition: A,
        tooltipText: x,
        tooltipTextAria: E,
        shouldShowTooltip: j,
        reactionRef: v,
        showingMoreEmojis: b,
        setTooltipText: R,
        setTooltipTextAria: I,
        setShouldShowTooltip: N,
        setReactionRef: S,
        setShowingMoreEmojis: C,
        ctaRef: y,
        upsellPopoutTargetRef: O,
        timeoutRef: M,
        hideTimeoutRef: w,
        nonce: U,
        isReactionEventActiveRef: _,
        isKeyboardNavigationRef: k,
        hasShownTooltipRef: P,
    });
});
