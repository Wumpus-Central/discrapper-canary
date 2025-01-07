n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(215569),
    s = n(481060),
    c = n(833803),
    u = n(566006),
    d = n(60174),
    m = n(453687),
    h = n(434624),
    f = n(287151),
    p = n(388032),
    _ = n(636804),
    g = n(952714);
let E = (e, t) => (null == e && null == t) || e === t,
    C = (e, t) => e.findIndex((e) => E(e.emoji.id, null == t ? void 0 : t.id) && E(e.emoji.name, null == t ? void 0 : t.name)),
    I = (e, t) => {
        if (null == t) return e;
        let n = C(e, t);
        return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)];
    };
class x extends r.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let n = e.message.reactions.length;
        return 0 === t.reactionsCount && n > 0
            ? {
                  disableTransitionAppear: !1,
                  reactionsCount: n
              }
            : t.reactionsCount !== n
              ? { reactionsCount: n }
              : null;
    }
    render() {
        let { message: e, disableReactionCreates: t, disableReactionUpdates: n, isLurking: r, isGuest: l, isPendingMember: E, isForumToolbar: C, channel: I, className: x, forceAddReactions: N, reactionClassName: v, useChatFontScaling: T, forceHideReactionCreates: S, remainingReactions: A, combinedReactions: b, visibleReactionsCount: j } = this.props,
            { disableTransitionAppear: R } = this.state,
            Z = T ? g : _,
            P = j > 0;
        if (!P && !N) return null;
        let { canShowImprovedReactionButton: L } = c.Z.getCurrentConfig({ location: 'message_reactions' }, { autoTrackExposure: !0 }),
            y = N || P,
            O = L && !C;
        return (0, i.jsxs)(o.W, {
            component: 'div',
            className: a()(Z.reactions, x, { [Z.largeReactions]: O }),
            transitionAppear: !R,
            role: 'group',
            transitionLeave: !1,
            id: (0, m.bY)(e),
            onMouseEnter: () => this.setState({ isHovered: !0 }),
            onMouseLeave: () => this.setState({ isHovered: !1 }),
            children: [
                (0, i.jsx)(h.l, {
                    reactions: b,
                    message: e,
                    readOnly: n,
                    isLurking: r,
                    isGuest: l,
                    isPendingMember: E,
                    isForumToolbar: C,
                    useChatFontScaling: T,
                    className: v,
                    emojiSize: O ? 'reactionLarge' : 'reaction'
                }),
                A > 0 &&
                    (0, i.jsx)(s.Clickable, {
                        onClick: (t) => {
                            t.stopPropagation(), (0, f.op)(I, e);
                        },
                        className: a()(Z.reaction, v, Z.remainingReactions),
                        'aria-label': p.intl.string(p.t.lfIHs7),
                        children: (0, i.jsxs)(s.Text, {
                            className: Z.reactionInner,
                            variant: 'text-sm/normal',
                            children: ['+', A]
                        })
                    }),
                !t &&
                    !S &&
                    (0, i.jsx)(d.X, {
                        tabIndex: y || this.state.isHovered ? 0 : -1,
                        type: u.O.NORMAL,
                        message: e,
                        channel: I,
                        useChatFontScaling: T,
                        isHovered: this.state.isHovered,
                        className: a()({ [Z.forceShow]: y })
                    })
            ]
        });
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (n = 'state'),
            (i = {
                disableTransitionAppear: !0,
                reactionsCount: this.props.message.reactions.length,
                isHovered: !1
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
t.Z = (e) => {
    let { message: t, maxReactions: n, hoistReaction: l } = e,
        {
            combinedReactions: a,
            remainingReactions: o,
            visibleReactionsCount: s
        } = r.useMemo(() => {
            let e = [],
                i = I(t.reactions, l),
                r = null != n && n < i.length ? i.slice(0, n) : i,
                a = i.length - r.length,
                o = i.length;
            return (
                r.forEach((t) => {
                    t.burst_count > 0 &&
                        e.push({
                            ...t,
                            type: u.O.BURST
                        }),
                        t.count > 0 &&
                            e.push({
                                ...t,
                                type: u.O.NORMAL
                            }),
                        null != t.me_vote && --o;
                }),
                {
                    combinedReactions: e,
                    visibleReactionsCount: o,
                    remainingReactions: a
                }
            );
        }, [l, n, t.reactions]);
    return (0, i.jsx)(x, {
        ...e,
        visibleReactionsCount: s,
        combinedReactions: a,
        remainingReactions: o
    });
};
