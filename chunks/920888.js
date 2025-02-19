n.d(t, { Z: () => N }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(215569),
    s = n(481060),
    c = n(833803),
    d = n(566006),
    u = n(60174),
    p = n(453687),
    m = n(434624),
    f = n(287151),
    h = n(388032),
    g = n(773265),
    _ = n(893372);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = (e, t) => (null == e && null == t) || e === t,
    O = (e, t) => e.findIndex((e) => x(e.emoji.id, null == t ? void 0 : t.id) && x(e.emoji.name, null == t ? void 0 : t.name)),
    E = (e, t) => {
        if (null == t) return e;
        let n = O(e, t);
        return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)];
    };
class j extends i.PureComponent {
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
        let { message: e, disableReactionCreates: t, disableReactionUpdates: n, isLurking: i, isGuest: a, isPendingMember: b, isForumToolbar: v, channel: y, className: x, forceAddReactions: O, reactionClassName: E, useChatFontScaling: j, forceHideReactionCreates: N, remainingReactions: C, combinedReactions: I, visibleReactionsCount: S } = this.props,
            { disableTransitionAppear: P } = this.state,
            T = j ? _ : g,
            A = S > 0;
        if (!A && !O) return null;
        let { canShowImprovedReactionButton: w } = c.Z.getCurrentConfig({ location: 'message_reactions' }, { autoTrackExposure: !0 }),
            Z = O || A;
        return (0, r.jsxs)(l.W, {
            component: 'div',
            className: o()(T.reactions, x, { [T.largeReactions]: w }),
            transitionAppear: !P,
            role: 'group',
            transitionLeave: !1,
            id: (0, p.bY)(e),
            onMouseEnter: () => this.setState({ isHovered: !0 }),
            onMouseLeave: () => this.setState({ isHovered: !1 }),
            children: [
                (0, r.jsx)(m.l, {
                    reactions: I,
                    message: e,
                    readOnly: n,
                    isLurking: i,
                    isGuest: a,
                    isPendingMember: b,
                    isForumToolbar: v,
                    useChatFontScaling: j,
                    className: E,
                    emojiSize: w ? 'reactionLarge' : 'reaction'
                }),
                C > 0 &&
                    (0, r.jsx)(s.P3F, {
                        onClick: (t) => {
                            t.stopPropagation(), (0, f.op)(y, e);
                        },
                        className: o()(T.reaction, E, T.remainingReactions),
                        'aria-label': h.NW.string(h.t.lfIHs7),
                        children: (0, r.jsxs)(s.Text, {
                            className: T.reactionInner,
                            variant: 'text-sm/normal',
                            children: ['+', C]
                        })
                    }),
                !t &&
                    !N &&
                    (0, r.jsx)(u.X, {
                        tabIndex: Z || this.state.isHovered ? 0 : -1,
                        type: d.O.NORMAL,
                        message: e,
                        channel: y,
                        useChatFontScaling: j,
                        isHovered: this.state.isHovered,
                        className: o()({ [T.forceShow]: Z })
                    })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            b(this, 'state', {
                disableTransitionAppear: !0,
                reactionsCount: this.props.message.reactions.length,
                isHovered: !1
            });
    }
}
let N = (e) => {
    let { message: t, maxReactions: n, hoistReaction: a } = e,
        {
            combinedReactions: o,
            remainingReactions: l,
            visibleReactionsCount: s
        } = i.useMemo(() => {
            let e = [],
                r = E(t.reactions, a),
                i = null != n && n < r.length ? r.slice(0, n) : r,
                o = r.length - i.length,
                l = r.length;
            return (
                i.forEach((t) => {
                    t.burst_count > 0 && e.push(y(v({}, t), { type: d.O.BURST })), t.count > 0 && e.push(y(v({}, t), { type: d.O.NORMAL })), null != t.me_vote && --l;
                }),
                {
                    combinedReactions: e,
                    visibleReactionsCount: l,
                    remainingReactions: o
                }
            );
        }, [a, n, t.reactions]);
    return (0, r.jsx)(
        j,
        y(v({}, e), {
            visibleReactionsCount: s,
            combinedReactions: o,
            remainingReactions: l
        })
    );
};
