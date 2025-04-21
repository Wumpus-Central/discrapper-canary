n.d(t, { Z: () => C }), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(215569),
    s = n(481060),
    c = n(833803),
    u = n(566006),
    d = n(60174),
    p = n(453687),
    m = n(434624),
    f = n(287151),
    h = n(388032),
    g = n(92254),
    _ = n(588429);
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
function x(e) {
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
let v = (e, t) => (null == e && null == t) || e === t,
    E = (e, t) => e.findIndex((e) => v(e.emoji.id, null == t ? void 0 : t.id) && v(e.emoji.name, null == t ? void 0 : t.name)),
    O = (e, t) => {
        if (null == t) return e;
        let n = E(e, t);
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
        let { message: e, disableReactionCreates: t, disableReactionUpdates: n, isLurking: i, isGuest: l, isPendingMember: b, isForumToolbar: x, channel: y, className: v, forceAddReactions: E, reactionClassName: O, useChatFontScaling: j, forceHideReactionCreates: C, remainingReactions: S, combinedReactions: I, visibleReactionsCount: N } = this.props,
            { disableTransitionAppear: T } = this.state,
            P = j ? _ : g,
            A = N > 0;
        if (!A && !E) return null;
        let { canShowImprovedReactionButton: w } = c.Z.getCurrentConfig({ location: 'message_reactions' }, { autoTrackExposure: !0 }),
            Z = E || A;
        return (0, r.jsxs)(o.W, {
            component: 'div',
            className: a()(P.reactions, v, { [P.largeReactions]: w }),
            transitionAppear: !T,
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
                    isGuest: l,
                    isPendingMember: b,
                    isForumToolbar: x,
                    useChatFontScaling: j,
                    className: O,
                    emojiSize: w ? 'reactionLarge' : 'reaction'
                }),
                S > 0 &&
                    (0, r.jsx)(s.P3F, {
                        onClick: (t) => {
                            t.stopPropagation(), (0, f.op)(y, e);
                        },
                        className: a()(P.reaction, O, P.remainingReactions),
                        'aria-label': h.intl.string(h.t.lfIHs7),
                        children: (0, r.jsxs)(s.Text, {
                            className: P.reactionInner,
                            variant: 'text-sm/normal',
                            children: ['+', S]
                        })
                    }),
                !t &&
                    !C &&
                    (0, r.jsx)(d.X, {
                        tabIndex: Z || this.state.isHovered ? 0 : -1,
                        type: u.O.NORMAL,
                        message: e,
                        channel: y,
                        useChatFontScaling: j,
                        isHovered: this.state.isHovered,
                        className: a()({ [P.forceShow]: Z })
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
let C = (e) => {
    let { message: t, maxReactions: n, hoistReaction: l } = e,
        {
            combinedReactions: a,
            remainingReactions: o,
            visibleReactionsCount: s
        } = i.useMemo(() => {
            let e = [],
                r = O(t.reactions, l),
                i = null != n && n < r.length ? r.slice(0, n) : r,
                a = r.length - i.length,
                o = r.length;
            return (
                i.forEach((t) => {
                    t.burst_count > 0 && e.push(y(x({}, t), { type: u.O.BURST })), t.count > 0 && e.push(y(x({}, t), { type: u.O.NORMAL })), null != t.me_vote && --o;
                }),
                {
                    combinedReactions: e,
                    visibleReactionsCount: o,
                    remainingReactions: a
                }
            );
        }, [l, n, t.reactions]);
    return (0, r.jsx)(
        j,
        y(x({}, e), {
            visibleReactionsCount: s,
            combinedReactions: a,
            remainingReactions: o
        })
    );
};
