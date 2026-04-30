i.d(t, { qT: () => eD, $Z: () => eG, IN: () => eU });
var n = i(627968),
    l = i(64700),
    o = i(503698),
    a = i.n(o),
    r = i(284009),
    s = i.n(r),
    u = i(132500),
    d = i(317097),
    c = i(17928),
    h = i(451988),
    p = i(922016),
    m = i(939249),
    g = i(565645),
    A = i(775602),
    f = i(114166),
    T = i(58149),
    v = i(106778),
    x = i(785651),
    E = i(615300),
    N = i(717421),
    I = i(21161),
    R = i(750506),
    j = i(147421),
    S = i(486020),
    b = i(690521),
    C = i(851110),
    y = i(740032);
let O = [];
function L(e) {
    let { messageId: t, emoji: i, startPosition: o, targetPosition: a } = e,
        [r, s] = l.useState(0),
        [u, d] = l.useState(0),
        [c, h] = l.useState(null),
        { confettiCanvas: p } = l.useContext(I.x),
        m = (0, v.f9)(p, c),
        A = l.useMemo(
            () => [
                {
                    src: null == i.id ? b.Ay.getURL(i.name) : S.Ay.getEmojiURL({ id: i.id, animated: !1, size: 22 }),
                    colorize: !1,
                },
            ],
            [i.name, i.id],
        ),
        f = a.x - (a.width / 2) * 0.5,
        T = a.y - (a.height / 2) * 0.5,
        L = (0, N.z)({
            from: { y: o.y },
            to: { y: T },
            config: { duration: 450, easing: E.A.Easing.in(E.A.Easing.exp) },
            onChange: (e) => {
                let { y: t } = e;
                d(t);
            },
        }),
        M = (0, N.z)({
            from: { x: o.x, scale: 1, opacity: 1 },
            to: { x: f, scale: 0.5, opacity: 0.4 },
            config: { duration: 450, easing: E.A.Easing.in(E.A.Easing.ease) },
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
            r > 0 && u > 0 && m.createConfetti({ ...C.Mw, position: { type: "static", value: { x: r, y: u } } });
        }, [m, r, u]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(v.K_, { ref: h, sprites: A, colors: O, spriteWidth: C.wn, spriteHeight: C.wn }),
                (0, n.jsx)(R.Ay, {
                    children: (0, n.jsx)(x.animated.div, {
                        style: { ...L },
                        className: y.qq,
                        children: (0, n.jsx)(x.animated.div, {
                            style: { ...M, opacity: M.opacity },
                            children: (0, n.jsx)(g.A, {
                                className: y.Zg,
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
    P = i(698405),
    _ = i(735438),
    k = i.n(_),
    V = i(702841),
    G = i(3137),
    U = i(620141),
    B = i(966598),
    D = i(224964),
    H = i(31408);
function $(e) {
    let { reactionRef: t, count: i } = e,
        n = l.useRef(i),
        o = (0, V.bG)([G.A], () => G.A.getState()),
        a = (0, D.A)(),
        r = (0, B.A)(t);
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
    eo = i(731383),
    ea = i(450707),
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
        onClose: o,
        popoutData: a,
        currentGuildId: r,
        nonce: s,
    } = e;
    (0, eo.i)({ emojiId: t, currentGuildId: r, popoutData: a, emojiSourceGuildId: i?.id, nonce: s });
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
                              isDisplayingJoinGuildButtonInPopout: a.type === ea.u.JOIN_GUILD,
                          }),
                      }),
                      c &&
                          (0, n.jsx)(er.mG, {
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
        { emojiId: i, refreshPositionKey: o, onClose: r, nonce: s } = e,
        { joinedEmojiSourceGuild: u } = (0, c.cf)([ei.Ay, eu.A], () => {
            let e = ei.Ay.getCustomEmojiById(i);
            return { joinedEmojiSourceGuild: e?.type === en.i.GUILD ? eu.A.getGuild(e?.guildId) : void 0 };
        }),
        [d, h] = l.useState(void 0),
        [p, g] = l.useState(void 0),
        [A, f] = l.useState(null),
        [T, v] = l.useState(!1),
        [x, E] = l.useState(!1),
        [N, I] = l.useState(!1),
        R = null != u,
        j = d?.isDiscoverable() ?? !1,
        S = ed.A.getGuildId(),
        b = null != S && (S === d?.id || S === u?.id),
        C = q.default.getCurrentUser(),
        y = (0, ea.O)({
            sourceType: A,
            expressionSourceApplication: p ?? null,
            isPremium: ee.Ay.isPremium(C),
            hasJoinedEmojiSourceGuild: R,
            isDiscoverable: j,
            emojiComesFromCurrentGuild: b,
            isUnusableRoleSubscriptionEmoji: !1,
            userIsRoleSubscriber: !1,
            isRoleSubscriptionEmoji: !1,
            shouldHideRoleSubscriptionCTA: !1,
        });
    if (
        (l.useEffect(() => {
            !T ||
                N ||
                (async () => {
                    o(), E(!0);
                    let e = null != i ? await (0, el.g_)(i) : null;
                    if (null != e)
                        switch ((f(e.type), e.type)) {
                            case el.rV.APPLICATION:
                                g(e.application);
                                break;
                            case el.rV.GUILD:
                                h(e.guild);
                        }
                    else h(null);
                    E(!1), I(!0), o();
                })();
        }, [i, T, N, o]),
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
                          null != y.emojiDescription &&
                              y.type !== ea.u.UNAVAILABLE &&
                              (0, n.jsx)(J.E, {
                                  variant: "text-sm/normal",
                                  "aria-label": y.type,
                                  children: y.emojiDescription,
                              }),
                      ],
                  })
                : ((t = ec.intl.string(ec.t["Igv+LS"])),
                  (0, n.jsxs)(m.D, {
                      onClick: () => {
                          v(!T);
                      },
                      className: eh.s4,
                      children: [
                          (0, n.jsx)(J.E, { variant: "text-sm/normal", color: "none", "aria-label": t, children: t }),
                          (0, n.jsx)(et.a, {
                              size: "xs",
                              color: "currentColor",
                              className: a()(eh.Po, { [eh.Kk]: !T }),
                          }),
                      ],
                  })),
            x
                ? (0, n.jsx)(es.Y0, { className: eh.eF })
                : O &&
                  (0, n.jsx)(ep, {
                      emojiId: i,
                      expressionSourceGuild: d,
                      hasJoinedExpressionSourceGuild: R,
                      onClose: r,
                      popoutData: y,
                      currentGuildId: S,
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
            meBurst: o,
            isBurstReaction: r = !1,
            tooltipText: s,
            tooltipTextAria: u,
            onMouseEnter: d,
            onMouseLeave: h,
            onReactionClick: p,
            isKeyboardNavigation: A,
            emojiSizeTooltip: f,
            refreshTooltipPositionKey: T,
            nonce: v,
        } = e,
        x = () => {
            h();
            let e = r ? Q.v.BURST : Q.v.NORMAL;
            (0, eg.$)(i, { emoji: t, reactionType: e });
        },
        E = "string" == typeof s ? "" === s.trim() : null == s,
        N = () =>
            E || null == s || null == u
                ? null
                : (0, n.jsx)(J.E, { variant: "text-sm/normal", className: ef.Of, "aria-label": u, children: s }),
        I = (0, c.bG)([q.default], () => q.default.getCurrentUser()),
        R = (0, ee.TW)(I),
        j = () => null != t.id && (0, n.jsx)(em, { emojiId: t.id, refreshPositionKey: T, onClose: h, nonce: v });
    return l === Q.v.BURST
        ? (0, n.jsxs)("div", {
              className: ef.xQ,
              onMouseEnter: d,
              onMouseLeave: h,
              children: [
                  (0, n.jsx)(m.D, {
                      className: ef.fu,
                      onClick: x,
                      children: (0, n.jsxs)("div", {
                          className: ef.Ok,
                          children: [
                              (0, n.jsx)(g.A, {
                                  className: ef.JS,
                                  emojiId: t.id,
                                  emojiName: t.name,
                                  animated: t.animated,
                                  size: f,
                              }),
                              N(),
                          ],
                      }),
                  }),
                  o
                      ? (0, n.jsxs)("div", {
                            className: a()(ef.h7, ef.j9),
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
                              className: a()(ef.h7, ef.j9, ef.rL),
                              children: [
                                  (0, n.jsx)(X.t, { size: "md", className: ef.eH, color: Y.k0.PREMIUM_TIER_2 }),
                                  (0, n.jsx)(m.D, {
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
                        : A
                          ? null
                          : (0, n.jsx)("div", {
                                className: a()(ef.h7, ef.j9),
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
              onMouseLeave: h,
              children: [
                  (0, n.jsx)(m.D, {
                      onClick: x,
                      children: (0, n.jsxs)("div", {
                          className: ef.xR,
                          children: [
                              (0, n.jsx)(g.A, {
                                  className: ef.JS,
                                  emojiId: t.id,
                                  emojiName: t.name,
                                  animated: t.animated,
                                  size: f,
                              }),
                              N(),
                          ],
                      }),
                  }),
                  j(),
              ],
          });
}
var ev = i(253932),
    ex = i(734057),
    eE = i(956703),
    eN = i(954571),
    eI = i(900210),
    eR = i(994500),
    ej = i(562153);
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
function eb(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Q.v.NORMAL,
        n = arguments.length > 3 ? arguments[3] : void 0,
        l = eE.A.getReactions(e.getChannelId(), e.id, t, 3, i),
        o = ex.A.getChannel(e.getChannelId()),
        a = null == o || o.isPrivate() ? null : o.getGuildId(),
        r = e.getReaction(t),
        s = i === Q.v.BURST,
        u = k()(Array.from(l?.values() ?? []))
            .reject((e) => eR.A.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => ej.Ay.getName(a, o?.id, e))
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
    ey = i(228366),
    eO = i(297494),
    eL = i(60317),
    eM = i(734646),
    ew = i(15440);
let eP = l.memo(function (e) {
    let { channelId: t, messageId: i, emoji: o, useChatFontScaling: a, color: r, count: s, emojiSize: u } = e,
        d = (0, c.bG)([eI.A], () => eI.A.getEffectForEmojiId(t, i, o)),
        h = l.useMemo(() => (0, eL.eT)(o, r, t, { key: d, messageId: i }), [r, d, o, t, i]),
        [p, m] = l.useState(!1),
        g = (0, c.bG)([A.A], () => A.A.useReducedMotion),
        f = ev.Sf.useSetting(),
        T = l.useCallback(() => {
            ey.h.dispatch({ type: "BURST_REACTION_EFFECT_CLEAR", channelId: t, messageId: i, emoji: o });
        }, [o, t, i]);
    return (l.useEffect(() => {
        let e = () => {
            if (p) return;
            let e = (0, eO.H4)(`${Date.now()}${t}${i}${o.name}`) % 10;
            (e += s > 4 ? 4 : s - 1) > 7 &&
                (m(!0), (0, K.on)({ channelId: t, messageId: i, emoji: o, key: eI.W.RANDOM }));
        };
        if (p || (g && !f) || !f) return;
        e();
        let n = setInterval(e, 5e3);
        return () => {
            clearInterval(n);
        };
    }, [f, t, s, o, o.name, p, i, g]),
    null == d)
        ? null
        : (0, n.jsx)(eC.A, { className: (a ? ew : eM).effect, effect: h, onComplete: T, emojiSize: u });
});
var e_ = i(652215),
    ek = i(347353),
    eV = i(866661);
let eG = 12;
function eU(e, t, i) {
    return (i === Q.v.BURST && t) || (i === Q.v.NORMAL && e);
}
class eB extends l.PureComponent {
    isReactionEventActive = !1;
    isKeyboardNavigation = !1;
    timeout = new h.Ep();
    hideTimeout = new h.Ep();
    ctaRef = l.createRef();
    type = Q.v.NORMAL;
    colors = { backgroundColor: void 0, borderColor: void 0, textColor: void 0 };
    hasShownTooltip = !1;
    nonce = (0, u.A)();
    upsellPopoutTargetRef = l.createRef();
    static defaultProps = { emojiSizeTooltip: "jumbo" };
    componentWillUnmount() {
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
            s = ex.A.getChannel(t.getChannelId());
        if (a) return void this.ctaRef?.current?.focus();
        let u = t.getChannelId(),
            d = r ? K.qN.FORUM_TOOLBAR : K.qN.MESSAGE_INLINE_BUTTON;
        l && !this.userCanBurstReact()
            ? (0, z.z)({
                  analytics: {
                      type: eA.e.BURST_REACTION_UPSELL,
                      page: s?.getGuildId() != null ? e_.liQ.GUILD_CHANNEL : e_.liQ.DM_CHANNEL,
                      section: null != s ? (0, F.sn)(s) : void 0,
                      object: e_.ZSU.EMOJI_REACTION_UPSELL,
                  },
              })
            : o
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
                animateEmoji: o,
                autoUnfurlReactionTooltip: a,
            } = this.props,
            r = n === Q.v.BURST;
        r &&
            !this.isReactionEventActive &&
            !l &&
            o &&
            (0, K.on)({ channelId: i.getChannelId(), messageId: i.id, emoji: t, key: eI.W.HOVER }),
            (this.isReactionEventActive = !0),
            (this.isKeyboardNavigation = "focus" === e.type),
            this.timeout.start(r ? 750 : a ? 200 : 500, this.showTooltip, !1);
    };
    handleEnterTooltip = () => {
        (this.isReactionEventActive = !0), this.handleShowTooltip();
    };
    handleShowTooltip = () => {
        this.hideTimeout.stop(),
            this.isReactionEventActive && (this.updateTooltipText(), eE.A.addChangeListener(this.updateTooltipText));
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
            eE.A.removeChangeListener(this.updateTooltipText),
            this.hideTimeout.start(200, this.hideTooltip, !1);
    };
    hideTooltip = () => {
        this.props.setShouldShowTooltip(!1),
            this.hasShownTooltip && eN.default.track(e_.HAw.CLOSE_POPOUT, { nonce: this.nonce });
    };
    isMe = () => {
        let { me: e, me_burst: t, type: i } = this.props;
        return eU(e, t, i);
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
            o = ex.A.getChannel(i.getChannelId()),
            a = eu.A.getGuild(o?.getGuildId());
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
        return (0, n.jsx)(eT, {
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
        let i = ex.A.getChannel(e.getChannelId()),
            n = eu.A.getGuild(i?.getGuildId());
        null != n && (0, w.Ze)(n.id);
    };
    handleSetReactionRef = (e) => {
        this.props.setReactionRef(e);
    };
    trackReactionTooltipViewed = () => {
        let { emoji: e, message: t, type: i } = this.props,
            n = q.default.getCurrentUser(),
            l = ex.A.getChannel(t.getChannelId()),
            o = i === Q.v.BURST,
            a = (0, ee.TW)(n),
            r = o ? eA.e.EMOJI_IN_BURST_REACTION_HOVER : eA.e.EMOJI_IN_REACTION_HOVER;
        !o || this.userCanBurstReact() || a || (r = eA.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
            T.Ay.trackWithMetadata(e_.HAw.EXPRESSION_TOOLTIP_VIEWED, {
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
                eN.default.track(e_.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: eA.e.BURST_REACTION_UPSELL,
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
                isLurking: h,
                isPendingMember: A,
                className: T,
                useChatFontScaling: v,
                message: x,
                hideEmoji: E,
                animationStartPosition: N,
                emojiSize: I,
            } = this.props,
            { shouldShowTooltip: R, tooltipTextAria: j, reactionRef: S, tooltipPositionKey: b } = this.props,
            C = v ? eV : ek,
            y = {},
            O = r ? l : i;
        if (r && null != o) {
            let { accentColor: i, backgroundColor: n, opacity: l } = o,
                a = (0, d.xp)(n ?? "", l) ?? "";
            this.isMe() && (y.borderColor = n), (y.background = a), (e = i), (t = i);
        }
        let M = S?.getBoundingClientRect(),
            w = null != N && null != M,
            P = null == N;
        return (0, n.jsx)(p.Y, {
            targetElementRef: { current: S },
            shouldShow: R,
            "aria-label": j ?? !1,
            renderPopout: this.renderTooltip,
            nudgeAlignIntoViewport: !0,
            position: "top",
            align: "center",
            positionKey: b,
            children: () =>
                (0, n.jsx)("div", {
                    onMouseEnter: this.handleEnter,
                    onMouseLeave: this.handleLeave,
                    ref: this.handleSetReactionRef,
                    children: (0, n.jsx)("div", {
                        className: a()(C.reaction, T, {
                            [C.reactionMe]: this.isMe(),
                            [C.reactionReadOnly]: c && !h && !A,
                            [C.shakeReaction]: E && null == N,
                        }),
                        style: y,
                        children: (0, n.jsx)(p.Y, {
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
                                    "aria-label": (0, F.mb)(this.isMe(), O, u, r),
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
                                                                  (0, n.jsx)(L, {
                                                                      messageId: x.id,
                                                                      emoji: u,
                                                                      startPosition: N,
                                                                      targetPosition: M,
                                                                  }),
                                                              P &&
                                                                  (0, n.jsx)(eP, {
                                                                      count: l,
                                                                      emoji: u,
                                                                      channelId: x.getChannelId(),
                                                                      messageId: x.id,
                                                                      useChatFontScaling: v,
                                                                      color: t,
                                                                      emojiSize: eC.x.NORMAL,
                                                                  }),
                                                          ],
                                                      })
                                                    : null,
                                                (0, n.jsx)(g.A, {
                                                    className: a()({ [C.hideEmoji]: E }),
                                                    emojiId: u.id,
                                                    emojiName: u.name,
                                                    size: I,
                                                    animated: u.animated,
                                                }),
                                            ],
                                        }),
                                        s
                                            ? null
                                            : (0, n.jsx)(f.A, {
                                                  className: C.reactionCount,
                                                  value: O,
                                                  color: e,
                                                  digitWidth: eG,
                                              }),
                                        (0, n.jsx)(W, { count: O, reactionRef: S }),
                                    ],
                                }),
                        }),
                    }),
                }),
        });
    }
}
let eD = l.memo((e) => {
    let { type: t, burst_colors: i, message: o, emoji: a } = e,
        r = t === Q.v.BURST,
        s = (0, M.g)(r && null != i ? i : []),
        u = (0, c.bG)([eI.A], () => void 0 !== eI.A.getEffectForEmojiId(o.getChannelId(), o.id, a)),
        d = (0, c.bG)([A.A], () => A.A.useReducedMotion),
        h = ev.Sf.useSetting(),
        p = q.default.getCurrentUser(),
        m = (0, ee.TW)(p),
        g = (0, c.bG)([eI.A], () => eI.A.getReactionPickerAnimation(o.id, a.name, a.id)),
        f = r && (u || null != g),
        [T, v] = l.useState(null),
        [x, E] = l.useState(null),
        [N, I] = l.useState(!1),
        [R, j] = l.useState(null),
        [S, b] = l.useState(void 0);
    return (0, n.jsx)(eB, {
        ...e,
        colors: s,
        isBurstReaction: r,
        hideEmoji: f,
        userHasPremium: m,
        reduceMotion: d,
        animateEmoji: h,
        animationStartPosition: g,
        tooltipText: T,
        tooltipTextAria: x,
        shouldShowTooltip: N,
        reactionRef: R,
        tooltipPositionKey: S,
        setTooltipText: v,
        setTooltipTextAria: E,
        setShouldShowTooltip: I,
        setReactionRef: j,
        setTooltipPositionKey: b,
    });
});
