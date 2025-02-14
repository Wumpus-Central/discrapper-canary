n.d(t, { Z: () => I }), n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(215569),
    o = n(481060),
    c = n(833803),
    d = n(566006),
    u = n(60174),
    m = n(453687),
    _ = n(434624),
    h = n(287151),
    p = n(388032),
    g = n(470528),
    f = n(945384);
let x = (e, t) => (null == e && null == t) || e === t,
    C = (e, t) => e.findIndex((e) => x(e.emoji.id, null == t ? void 0 : t.id) && x(e.emoji.name, null == t ? void 0 : t.name)),
    E = (e, t) => {
        if (null == t) return e;
        let n = C(e, t);
        return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)];
    };
class v extends l.PureComponent {
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
        let { message: e, disableReactionCreates: t, disableReactionUpdates: n, isLurking: l, isGuest: a, isPendingMember: x, isForumToolbar: C, channel: E, className: v, forceAddReactions: I, reactionClassName: N, useChatFontScaling: S, forceHideReactionCreates: T, remainingReactions: b, combinedReactions: A, visibleReactionsCount: j } = this.props,
            { disableTransitionAppear: y } = this.state,
            Z = S ? f : g,
            R = j > 0;
        if (!R && !I) return null;
        let { canShowImprovedReactionButton: L } = c.Z.getCurrentConfig({ location: 'message_reactions' }, { autoTrackExposure: !0 }),
            P = I || R;
        return (0, i.jsxs)(s.W, {
            component: 'div',
            className: r()(Z.reactions, v, { [Z.largeReactions]: L }),
            transitionAppear: !y,
            role: 'group',
            transitionLeave: !1,
            id: (0, m.bY)(e),
            onMouseEnter: () => this.setState({ isHovered: !0 }),
            onMouseLeave: () => this.setState({ isHovered: !1 }),
            children: [
                (0, i.jsx)(_.l, {
                    reactions: A,
                    message: e,
                    readOnly: n,
                    isLurking: l,
                    isGuest: a,
                    isPendingMember: x,
                    isForumToolbar: C,
                    useChatFontScaling: S,
                    className: N,
                    emojiSize: L ? 'reactionLarge' : 'reaction'
                }),
                b > 0 &&
                    (0, i.jsx)(o.P3F, {
                        onClick: (t) => {
                            t.stopPropagation(), (0, h.op)(E, e);
                        },
                        className: r()(Z.reaction, N, Z.remainingReactions),
                        'aria-label': p.intl.string(p.t.lfIHs7),
                        children: (0, i.jsxs)(o.Text, {
                            className: Z.reactionInner,
                            variant: 'text-sm/normal',
                            children: ['+', b]
                        })
                    }),
                !t &&
                    !T &&
                    (0, i.jsx)(u.X, {
                        tabIndex: P || this.state.isHovered ? 0 : -1,
                        type: d.O.NORMAL,
                        message: e,
                        channel: E,
                        useChatFontScaling: S,
                        isHovered: this.state.isHovered,
                        className: r()({ [Z.forceShow]: P })
                    })
            ]
        });
    }
    constructor(...e) {
        var t, n;
        super(...e),
            (t = 'state'),
            (n = {
                disableTransitionAppear: !0,
                reactionsCount: this.props.message.reactions.length,
                isHovered: !1
            }),
            t in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n);
    }
}
let I = (e) => {
    let { message: t, maxReactions: n, hoistReaction: a } = e,
        {
            combinedReactions: r,
            remainingReactions: s,
            visibleReactionsCount: o
        } = l.useMemo(() => {
            let e = [],
                i = E(t.reactions, a),
                l = null != n && n < i.length ? i.slice(0, n) : i,
                r = i.length - l.length,
                s = i.length;
            return (
                l.forEach((t) => {
                    t.burst_count > 0 &&
                        e.push({
                            ...t,
                            type: d.O.BURST
                        }),
                        t.count > 0 &&
                            e.push({
                                ...t,
                                type: d.O.NORMAL
                            }),
                        null != t.me_vote && --s;
                }),
                {
                    combinedReactions: e,
                    visibleReactionsCount: s,
                    remainingReactions: r
                }
            );
        }, [a, n, t.reactions]);
    return (0, i.jsx)(v, {
        ...e,
        visibleReactionsCount: o,
        combinedReactions: r,
        remainingReactions: s
    });
};
