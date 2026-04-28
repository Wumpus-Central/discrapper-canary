i.d(t, { qT: () => eB, $Z: () => eU, IN: () => eG });
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
    m = i(834730),
    g = i(403581),
    A = i(939249),
    f = i(922016),
    T = i(565645),
    v = i(775602),
    E = i(114166),
    I = i(58149),
    x = i(404374),
    N = i(106778),
    R = i(487514),
    j = i(717421),
    b = i(21161),
    S = i(750506),
    C = i(147421),
    y = i(486020),
    O = i(690521),
    L = i(851110),
    w = i(740032);
let M = [];
function _(e) {
    let { messageId: t, emoji: i, startPosition: a, targetPosition: o } = e,
        [r, s] = l.useState(0),
        [u, c] = l.useState(0),
        [h, p] = l.useState(null),
        { confettiCanvas: m } = l.useContext(b.x),
        g = (0, N.f9)(m, h),
        A = l.useMemo(
            () => [
                {
                    src: null == i.id ? O.Ay.getURL(i.name) : y.Ay.getEmojiURL({ id: i.id, animated: !1, size: 22 }),
                    colorize: !1,
                },
            ],
            [i.name, i.id],
        ),
        f = o.x - (o.width / 2) * 0.5,
        v = o.y - (o.height / 2) * 0.5,
        E = (0, j.z)({
            from: { y: a.y },
            to: { y: v },
            config: { duration: 450, easing: d.A.Easing.in(d.A.Easing.exp) },
            onChange: (e) => {
                let { y: t } = e;
                c(t);
            },
        }),
        I = (0, j.z)({
            from: { x: a.x, scale: 1, opacity: 1 },
            to: { x: f, scale: 0.5, opacity: 0.4 },
            config: { duration: 450, easing: d.A.Easing.in(d.A.Easing.ease) },
            onRest: () => {
                (0, C.p)(t, i.name, i.id);
            },
            onChange: (e) => {
                let { x: t } = e;
                s(t);
            },
        });
    return (
        l.useEffect(() => {
            r > 0 && u > 0 && g.createConfetti({ ...L.Mw, position: { type: "static", value: { x: r, y: u } } });
        }, [g, r, u]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(N.K_, { ref: p, sprites: A, colors: M, spriteWidth: L.wn, spriteHeight: L.wn }),
                (0, n.jsx)(S.Ay, {
                    children: (0, n.jsx)(R.animated.div, {
                        style: { ...E },
                        className: w.qq,
                        children: (0, n.jsx)(R.animated.div, {
                            style: { ...I, opacity: I.opacity },
                            children: (0, n.jsx)(T.A, {
                                className: w.Zg,
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
var k = i(891734),
    P = i(202384),
    V = i(698405),
    U = i(735438),
    G = i.n(U),
    D = i(702841),
    B = i(3137),
    H = i(620141),
    $ = i(966598),
    W = i(224964),
    z = i(31408);
function F(e) {
    let { reactionRef: t, count: i } = e,
        n = l.useRef(i),
        a = (0, D.bG)([B.A], () => B.A.getState()),
        o = (0, W.A)(),
        r = (0, $.A)(t);
    return (
        l.useEffect(() => {
            if (i > n.current && null != r) {
                let e = (0, U.clamp)(i, a.confettiCount / 2, 2 * a.confettiCount);
                o.fire(r.x, r.y, { count: e });
            }
            n.current = i;
        }, [i, r, o, a.confettiCount]),
        null
    );
}
function K(e) {
    return (0, n.jsx)(H.A, { confettiLocation: z.k.REACTION, children: (0, n.jsx)(F, { ...e }) });
}
var J = i(725807),
    X = i(507545),
    Y = i(649963),
    Q = i(815807),
    Z = i(847374),
    q = i(159273),
    ee = i(770335),
    et = i(624793),
    ei = i(731383),
    en = i(450707),
    el = i(861626),
    ea = i(34337),
    eo = i(71393),
    er = i(967198),
    es = i(287809),
    eu = i(927578),
    ed = i(985018),
    ec = i(658611);
function eh(e) {
    let {
        emojiId: t,
        expressionSourceGuild: i,
        hasJoinedExpressionSourceGuild: l,
        onClose: a,
        popoutData: o,
        currentGuildId: r,
        nonce: s,
    } = e;
    (0, ei.i)({ emojiId: t, currentGuildId: r, popoutData: o, emojiSourceGuildId: i?.id, nonce: s });
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
                          children: (0, n.jsx)(el.G7, {
                              expressionSourceGuild: i,
                              hasJoinedExpressionSourceGuild: l,
                              isDisplayingJoinGuildButtonInPopout: o.type === en.u.JOIN_GUILD,
                          }),
                      }),
                      c &&
                          (0, n.jsx)(el.mG, {
                              emojiId: t,
                              expressionSourceGuild: i,
                              hasJoinedEmojiSourceGuild: l,
                              onClose: a,
                              popoutData: o,
                              isDisplayingButtonInTopSection: !1,
                          }),
                  ],
              })
        : (0, n.jsx)(m.E, { variant: "text-sm/normal", "aria-label": o.type, children: o.emojiDescription });
}
function ep(e) {
    let t,
        { emojiId: i, refreshPositionKey: a, onClose: r, nonce: s } = e,
        { joinedEmojiSourceGuild: u } = (0, h.cf)([q.Ay, eo.A], () => {
            let e = q.Ay.getCustomEmojiById(i);
            return { joinedEmojiSourceGuild: e?.type === ee.i.GUILD ? eo.A.getGuild(e?.guildId) : void 0 };
        }),
        [d, c] = l.useState(void 0),
        [p, g] = l.useState(void 0),
        [f, T] = l.useState(null),
        [v, E] = l.useState(!1),
        [I, x] = l.useState(!1),
        [N, R] = l.useState(!1),
        j = null != u,
        b = d?.isDiscoverable() ?? !1,
        S = er.A.getGuildId(),
        C = null != S && (S === d?.id || S === u?.id),
        y = es.default.getCurrentUser(),
        O = (0, en.O)({
            sourceType: f,
            expressionSourceApplication: p ?? null,
            isPremium: eu.Ay.isPremium(y),
            hasJoinedEmojiSourceGuild: j,
            isDiscoverable: b,
            emojiComesFromCurrentGuild: C,
            isUnusableRoleSubscriptionEmoji: !1,
            userIsRoleSubscriber: !1,
            isRoleSubscriptionEmoji: !1,
            shouldHideRoleSubscriptionCTA: !1,
        });
    if (
        (l.useEffect(() => {
            !v ||
                N ||
                (async () => {
                    a(), x(!0);
                    let e = null != i ? await (0, et.g_)(i) : null;
                    if (null != e)
                        switch ((T(e.type), e.type)) {
                            case et.rV.APPLICATION:
                                g(e.application);
                                break;
                            case et.rV.GUILD:
                                c(e.guild);
                        }
                    else c(null);
                    x(!1), R(!0), a();
                })();
        }, [i, v, N, a]),
        j)
    )
        return null;
    let L = v && (void 0 !== d || void 0 !== p);
    return (0, n.jsxs)("div", {
        children: [
            L
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)("div", { className: ec.Hw }),
                          null != O.emojiDescription &&
                              O.type !== en.u.UNAVAILABLE &&
                              (0, n.jsx)(m.E, {
                                  variant: "text-sm/normal",
                                  "aria-label": O.type,
                                  children: O.emojiDescription,
                              }),
                      ],
                  })
                : ((t = ed.intl.string(ed.t["Igv+LS"])),
                  (0, n.jsxs)(A.D, {
                      onClick: () => {
                          E(!v);
                      },
                      className: ec.s4,
                      children: [
                          (0, n.jsx)(m.E, { variant: "text-sm/normal", color: "none", "aria-label": t, children: t }),
                          (0, n.jsx)(Z.a, {
                              size: "xs",
                              color: "currentColor",
                              className: o()(ec.Po, { [ec.Kk]: !v }),
                          }),
                      ],
                  })),
            I
                ? (0, n.jsx)(ea.Y0, { className: ec.eF })
                : L &&
                  (0, n.jsx)(eh, {
                      emojiId: i,
                      expressionSourceGuild: d,
                      hasJoinedExpressionSourceGuild: j,
                      onClose: r,
                      popoutData: O,
                      currentGuildId: S,
                      nonce: s,
                  }),
        ],
    });
}
var em = i(191226),
    eg = i(253932),
    eA = i(734057),
    ef = i(956703),
    eT = i(531685),
    ev = i(954571),
    eE = i(900210),
    eI = i(505527),
    ex = i(994500),
    eN = i(562153);
let eR = {
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
function ej(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eI.v.NORMAL,
        n = arguments.length > 3 ? arguments[3] : void 0,
        l = ef.A.getReactions(e.getChannelId(), e.id, t, 3, i),
        a = eA.A.getChannel(e.getChannelId()),
        o = null == a || a.isPrivate() ? null : a.getGuildId(),
        r = e.getReaction(t),
        s = i === eI.v.BURST,
        u = G()(Array.from(l?.values() ?? []))
            .reject((e) => ex.A.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => eN.Ay.getName(o, a?.id, e))
            .value();
    if (0 === u.length) return "";
    let d = s ? eR.burst : eR.standard,
        c = Math.max(0, ((s ? r?.burst_count : r?.count) ?? 0) - u.length),
        h = (0, Q.b3)(t);
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
    eS = i(228366),
    eC = i(297494),
    ey = i(60317),
    eO = i(734646),
    eL = i(15440);
let ew = l.memo(function (e) {
    let { channelId: t, messageId: i, emoji: a, useChatFontScaling: o, color: r, count: s, emojiSize: u } = e,
        d = (0, h.bG)([eE.A], () => eE.A.getEffectForEmojiId(t, i, a)),
        c = l.useMemo(() => (0, ey.eT)(a, r, t, { key: d, messageId: i }), [r, d, a, t, i]),
        [p, m] = l.useState(!1),
        g = (0, h.bG)([v.A], () => v.A.useReducedMotion),
        A = eg.Sf.useSetting(),
        f = l.useCallback(() => {
            eS.h.dispatch({ type: "BURST_REACTION_EFFECT_CLEAR", channelId: t, messageId: i, emoji: a });
        }, [a, t, i]);
    return (l.useEffect(() => {
        let e = () => {
            if (p) return;
            let e = (0, eC.H4)(`${Date.now()}${t}${i}${a.name}`) % 10;
            (e += s > 4 ? 4 : s - 1) > 7 &&
                (m(!0), (0, Y.on)({ channelId: t, messageId: i, emoji: a, key: eE.W.RANDOM }));
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
        : (0, n.jsx)(eb.A, { className: (o ? eL : eO).effect, effect: c, onComplete: f, emojiSize: u });
});
var eM = i(652215),
    e_ = i(788868),
    ek = i(347353),
    eP = i(866661),
    eV = i(631765);
let eU = 12;
function eG(e, t, i) {
    return (i === eI.v.BURST && t) || (i === eI.v.NORMAL && e);
}
class eD extends l.PureComponent {
    isReactionEventActive = !1;
    isKeyboardNavigation = !1;
    scale = new d.A.Value(1);
    opacity = new d.A.Value(1);
    timeout = new p.Ep();
    hideTimeout = new p.Ep();
    ctaRef = l.createRef();
    type = eI.v.NORMAL;
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
        eT.A.isFocused()
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
            s = eA.A.getChannel(t.getChannelId());
        if (o) return void this.ctaRef?.current?.focus();
        let u = t.getChannelId(),
            d = r ? Y.qN.FORUM_TOOLBAR : Y.qN.MESSAGE_INLINE_BUTTON;
        l && !this.userCanBurstReact()
            ? (0, X.z)({
                  analytics: {
                      type: e_.e.BURST_REACTION_UPSELL,
                      page: s?.getGuildId() != null ? eM.liQ.GUILD_CHANNEL : eM.liQ.DM_CHANNEL,
                      section: null != s ? (0, Q.sn)(s) : void 0,
                      object: eM.ZSU.EMOJI_REACTION_UPSELL,
                  },
              })
            : a
              ? this.handleShowVerificationGate()
              : n ||
                (this.isMe()
                    ? (0, Y.et)({ channelId: u, messageId: t.id, emoji: i, location: d, options: { burst: l } })
                    : (0, Y.BB)(u, t.id, i, d, { burst: l }));
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
            r = n === eI.v.BURST;
        r &&
            !this.isReactionEventActive &&
            !l &&
            a &&
            (0, Y.on)({ channelId: i.getChannelId(), messageId: i.id, emoji: t, key: eE.W.HOVER }),
            (this.isReactionEventActive = !0),
            (this.isKeyboardNavigation = "focus" === e.type),
            this.timeout.start(r ? 750 : o ? 200 : 500, this.showTooltip, !1);
    };
    handleEnterTooltip = () => {
        (this.isReactionEventActive = !0), this.handleShowTooltip();
    };
    handleShowTooltip = () => {
        this.hideTimeout.stop(),
            this.isReactionEventActive && (this.updateTooltipText(), ef.A.addChangeListener(this.updateTooltipText));
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
            ef.A.removeChangeListener(this.updateTooltipText),
            this.hideTimeout.start(200, this.hideTooltip, !1);
    };
    hideTooltip = () => {
        this.setState({ shouldShowTooltip: !1 }),
            this.hasShownTooltip && ev.default.track(eM.HAw.CLOSE_POPOUT, { nonce: this.nonce });
    };
    isMe = () => {
        let { me: e, me_burst: t, type: i } = this.props;
        return eG(e, t, i);
    };
    updateTooltipText = () => {
        let { message: e, emoji: t, type: i } = this.props,
            n = ej(e, t, i),
            l = this.isKeyboardNavigation ? n : ej(e, t, i, eM.tEg);
        s()("string" == typeof n, "tooltipTextAria is not a string"),
            this.setState({ tooltipText: l, tooltipTextAria: n, shouldShowTooltip: null != l && "" !== l });
    };
    renderLurkerModeUpsellPopout = (e) => {
        let { closePopout: t } = e,
            { message: i, isLurking: l } = this.props,
            a = eA.A.getChannel(i.getChannelId()),
            o = eo.A.getGuild(a?.getGuildId());
        return l && null != o
            ? (0, n.jsx)(V.A, { ctaRef: this.ctaRef, type: V.w.REACTIONS, guild: o, closePopout: t })
            : (0, n.jsx)(n.Fragment, {});
    };
    renderEmojiDetails = () => {
        let e = this.props.emoji;
        return (
            null != e.id &&
            (0, n.jsx)(ep, {
                emojiId: e.id,
                refreshPositionKey: this.refreshTooltipPositionKey,
                onClose: this.handleLeave,
                nonce: this.nonce,
            })
        );
    };
    renderTooltip = () => {
        let { emoji: e, message: t, type: i, me_burst: l, isBurstReaction: a = !1 } = this.props,
            { tooltipText: r, tooltipTextAria: s } = this.state,
            u = (i) => {
                if (null == eA.A.getChannel(t.getChannelId())) return;
                this.handleLeave();
                let n = a ? eI.v.BURST : eI.v.NORMAL;
                (0, em.$)(t, { emoji: e, reactionType: n });
            },
            d = "string" == typeof r ? "" === r.trim() : null == r,
            c = () =>
                d || null == r || null == s
                    ? null
                    : (0, n.jsx)(m.E, { variant: "text-sm/normal", className: eV.Of, "aria-label": s, children: r }),
            h = () => {
                let e = es.default.getCurrentUser();
                return l
                    ? (0, n.jsxs)("div", {
                          className: o()(eV.h7, eV.j9),
                          children: [
                              (0, eu.TW)(e) &&
                                  (0, n.jsx)(g.t, { size: "md", className: eV.eH, color: x.k0.PREMIUM_TIER_2 }),
                              (0, n.jsx)(m.E, {
                                  variant: "text-sm/normal",
                                  className: eV.Of,
                                  "aria-label": "super reaction tooltip cta",
                                  children: ed.intl.string(ed.t.ZbNJXn),
                              }),
                          ],
                      })
                    : this.userCanBurstReact()
                      ? (0, n.jsxs)("div", {
                            className: o()(eV.h7, eV.j9, eV.rL),
                            children: [
                                (0, n.jsx)(g.t, { size: "md", className: eV.eH, color: x.k0.PREMIUM_TIER_2 }),
                                (0, n.jsx)(A.D, {
                                    onClick: this.handleClick,
                                    children: (0, n.jsx)(m.E, {
                                        variant: "text-sm/normal",
                                        className: eV.Of,
                                        "aria-label": "super reaction tooltip cta",
                                        children: ed.intl.string(ed.t.kVfuVu),
                                    }),
                                }),
                            ],
                        })
                      : this.userCanBurstReact() || this.isKeyboardNavigation
                        ? null
                        : (0, n.jsx)("div", {
                              className: o()(eV.h7, eV.j9),
                              children: (0, n.jsxs)("div", {
                                  children: [
                                      (0, n.jsx)(m.E, {
                                          variant: "text-sm/normal",
                                          "aria-label": "super reaction tooltip upsell",
                                          children: ed.intl.string(ed.t.W1bMkq),
                                      }),
                                      (0, n.jsx)(J.A, {
                                          subscriptionTier: e_.pe.TIER_2,
                                          textOptions: { textOverride: ed.intl.string(ed.t.mr4K7D) },
                                          className: eV.Yq,
                                          onClick: (e) => e.stopPropagation(),
                                      }),
                                  ],
                              }),
                          });
            };
        return i === eI.v.BURST
            ? (0, n.jsxs)("div", {
                  className: eV.xQ,
                  onMouseEnter: this.handleEnterTooltip,
                  onMouseLeave: this.handleLeave,
                  children: [
                      (0, n.jsx)(A.D, {
                          className: eV.fu,
                          onClick: u,
                          children: (0, n.jsxs)("div", {
                              className: eV.Ok,
                              children: [
                                  (0, n.jsx)(T.A, {
                                      className: eV.JS,
                                      emojiId: e.id,
                                      emojiName: e.name,
                                      animated: e.animated,
                                      size: this.props.emojiSizeTooltip,
                                  }),
                                  c(),
                              ],
                          }),
                      }),
                      h(),
                      this.renderEmojiDetails(),
                  ],
              })
            : (0, n.jsxs)("div", {
                  className: eV.xQ,
                  onMouseEnter: this.handleEnterTooltip,
                  onMouseLeave: this.handleLeave,
                  children: [
                      (0, n.jsx)(A.D, {
                          onClick: u,
                          children: (0, n.jsxs)("div", {
                              className: eV.xR,
                              children: [
                                  (0, n.jsx)(T.A, {
                                      className: eV.JS,
                                      emojiId: e.id,
                                      emojiName: e.name,
                                      animated: e.animated,
                                      size: this.props.emojiSizeTooltip,
                                  }),
                                  c(),
                              ],
                          }),
                      }),
                      this.renderEmojiDetails(),
                  ],
              });
    };
    refreshTooltipPositionKey = () => {
        this.setState({ tooltipPositionKey: String(Date.now()) });
    };
    handleShowVerificationGate = () => {
        let { message: e, isPendingMember: t } = this.props;
        if (!t) return null;
        let i = eA.A.getChannel(e.getChannelId()),
            n = eo.A.getGuild(i?.getGuildId());
        null != n && (0, P.Ze)(n.id);
    };
    handleSetReactionRef = (e) => {
        this.setState({ reactionRef: e });
    };
    trackReactionTooltipViewed = () => {
        let { emoji: e, message: t, type: i } = this.props,
            n = es.default.getCurrentUser(),
            l = eA.A.getChannel(t.getChannelId()),
            a = i === eI.v.BURST,
            o = (0, eu.TW)(n),
            r = a ? e_.e.EMOJI_IN_BURST_REACTION_HOVER : e_.e.EMOJI_IN_REACTION_HOVER;
        !a || this.userCanBurstReact() || o || (r = e_.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
            I.Ay.trackWithMetadata(eM.HAw.EXPRESSION_TOOLTIP_VIEWED, {
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
                ev.default.track(eM.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: e_.e.BURST_REACTION_UPSELL,
                    location: {
                        page: l?.getGuildId() != null ? eM.liQ.GUILD_CHANNEL : eM.liQ.DM_CHANNEL,
                        section: (0, Q.sn)(l),
                        object: eM.ZSU.EMOJI_REACTION_TOOLTIP_UPSELL,
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
                isPendingMember: m,
                className: g,
                useChatFontScaling: v,
                message: I,
                hideEmoji: x,
                animationStartPosition: N,
                emojiSize: R,
            } = this.props,
            { shouldShowTooltip: j, tooltipTextAria: b, reactionRef: S, tooltipPositionKey: C } = this.state,
            y = v ? eP : ek,
            O = { transform: [{ scale: this.scale }], opacity: this.opacity },
            L = r ? l : i;
        if (r && null != a) {
            let { accentColor: i, backgroundColor: n, opacity: l } = a,
                o = (0, c.xp)(n ?? "", l) ?? "";
            this.isMe() && (O.borderColor = n), (O.background = o), (e = i), (t = i);
        }
        let w = S?.getBoundingClientRect(),
            M = null != N && null != w,
            k = null == N;
        return (0, n.jsx)(f.Y, {
            targetElementRef: { current: S },
            shouldShow: j,
            "aria-label": b ?? !1,
            renderPopout: this.renderTooltip,
            nudgeAlignIntoViewport: !0,
            position: "top",
            align: "center",
            positionKey: C,
            children: () =>
                (0, n.jsx)("div", {
                    onMouseEnter: this.handleEnter,
                    onMouseLeave: this.handleLeave,
                    ref: this.handleSetReactionRef,
                    children: (0, n.jsx)(d.A.div, {
                        className: o()(y.reaction, g, {
                            [y.reactionMe]: this.isMe(),
                            [y.reactionReadOnly]: h && !p && !m,
                            [y.shakeReaction]: x && null == N,
                        }),
                        style: O,
                        children: (0, n.jsx)(f.Y, {
                            targetElementRef: this.upsellPopoutTargetRef,
                            renderPopout: this.renderLurkerModeUpsellPopout,
                            position: "top",
                            children: (i) =>
                                (0, n.jsxs)(A.D, {
                                    ...i,
                                    innerRef: this.upsellPopoutTargetRef,
                                    className: y.reactionInner,
                                    onClick: this.handleClick,
                                    "aria-disabled": h,
                                    "aria-label": (0, Q.mb)(this.isMe(), L, u, r),
                                    "aria-pressed": this.isMe(),
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: o()({ [y.burstGlow]: r }),
                                            style: { boxShadow: `0 0 16px ${t}` },
                                        }),
                                        (0, n.jsxs)("div", {
                                            children: [
                                                r
                                                    ? (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              M &&
                                                                  (0, n.jsx)(_, {
                                                                      messageId: I.id,
                                                                      emoji: u,
                                                                      startPosition: N,
                                                                      targetPosition: w,
                                                                  }),
                                                              k &&
                                                                  (0, n.jsx)(ew, {
                                                                      count: l,
                                                                      emoji: u,
                                                                      channelId: I.getChannelId(),
                                                                      messageId: I.id,
                                                                      useChatFontScaling: v,
                                                                      color: t,
                                                                      emojiSize: eb.x.NORMAL,
                                                                  }),
                                                          ],
                                                      })
                                                    : null,
                                                (0, n.jsx)(T.A, {
                                                    className: o()({ [y.hideEmoji]: x }),
                                                    emojiId: u.id,
                                                    emojiName: u.name,
                                                    size: R,
                                                    animated: u.animated,
                                                }),
                                            ],
                                        }),
                                        s
                                            ? null
                                            : (0, n.jsx)(E.A, {
                                                  className: y.reactionCount,
                                                  value: L,
                                                  color: e,
                                                  digitWidth: eU,
                                              }),
                                        (0, n.jsx)(K, { count: L, reactionRef: S }),
                                    ],
                                }),
                        }),
                    }),
                }),
        });
    }
}
let eB = l.memo((e) => {
    let { type: t, burst_colors: i, message: l, emoji: a } = e,
        o = t === eI.v.BURST,
        r = (0, k.g)(o && null != i ? i : []),
        s = (0, h.bG)([eE.A], () => void 0 !== eE.A.getEffectForEmojiId(l.getChannelId(), l.id, a)),
        u = (0, h.bG)([v.A], () => v.A.useReducedMotion),
        d = eg.Sf.useSetting(),
        c = es.default.getCurrentUser(),
        p = (0, eu.TW)(c),
        m = (0, h.bG)([eE.A], () => eE.A.getReactionPickerAnimation(l.id, a.name, a.id)),
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
