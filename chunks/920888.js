n.d(t, { Z: () => j }), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(215569),
    s = n(481060),
    c = n(566006),
    u = n(60174),
    d = n(453687),
    p = n(434624),
    m = n(287151),
    f = n(388032),
    h = n(92254),
    g = n(588429);
function _(e, t, n) {
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
function b(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
let y = (e, t) => (null == e && null == t) || e === t,
    E = (e, t) => e.findIndex((e) => y(e.emoji.id, null == t ? void 0 : t.id) && y(e.emoji.name, null == t ? void 0 : t.name)),
    v = (e, t) => {
        if (null == t) return e;
        let n = E(e, t);
        return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)];
    };
class O extends i.PureComponent {
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
        let { message: e, disableReactionCreates: t, disableReactionUpdates: n, isLurking: i, isGuest: l, isPendingMember: _, isForumToolbar: b, channel: x, className: y, forceAddReactions: E, reactionClassName: v, useChatFontScaling: O, forceHideReactionCreates: j, remainingReactions: C, combinedReactions: S, visibleReactionsCount: I } = this.props,
            { disableTransitionAppear: N } = this.state,
            T = O ? g : h,
            P = I > 0;
        if (!P && !E) return null;
        let A = E || P;
        return (0, r.jsxs)(o.W, {
            component: 'div',
            className: a()(T.reactions, y),
            transitionAppear: !N,
            role: 'group',
            transitionLeave: !1,
            id: (0, d.bY)(e),
            onMouseEnter: () => this.setState({ isHovered: !0 }),
            onMouseLeave: () => this.setState({ isHovered: !1 }),
            children: [
                (0, r.jsx)(p.l, {
                    reactions: S,
                    message: e,
                    readOnly: n,
                    isLurking: i,
                    isGuest: l,
                    isPendingMember: _,
                    isForumToolbar: b,
                    useChatFontScaling: O,
                    className: v
                }),
                C > 0 &&
                    (0, r.jsx)(s.P3F, {
                        onClick: (t) => {
                            t.stopPropagation(), (0, m.op)(x, e);
                        },
                        className: a()(T.reaction, v, T.remainingReactions),
                        'aria-label': f.intl.string(f.t.lfIHs7),
                        children: (0, r.jsxs)(s.Text, {
                            className: T.reactionInner,
                            variant: 'text-sm/normal',
                            children: ['+', C]
                        })
                    }),
                !t &&
                    !j &&
                    (0, r.jsx)(u.X, {
                        tabIndex: A || this.state.isHovered ? 0 : -1,
                        type: c.O.NORMAL,
                        message: e,
                        channel: x,
                        useChatFontScaling: O,
                        isHovered: this.state.isHovered,
                        className: a()({ [T.forceShow]: A })
                    })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'state', {
                disableTransitionAppear: !0,
                reactionsCount: this.props.message.reactions.length,
                isHovered: !1
            });
    }
}
let j = (e) => {
    let { message: t, maxReactions: n, hoistReaction: l } = e,
        {
            combinedReactions: a,
            remainingReactions: o,
            visibleReactionsCount: s
        } = i.useMemo(() => {
            let e = [],
                r = v(t.reactions, l),
                i = null != n && n < r.length ? r.slice(0, n) : r,
                a = r.length - i.length,
                o = r.length;
            return (
                i.forEach((t) => {
                    t.burst_count > 0 && e.push(x(b({}, t), { type: c.O.BURST })), t.count > 0 && e.push(x(b({}, t), { type: c.O.NORMAL })), null != t.me_vote && --o;
                }),
                {
                    combinedReactions: e,
                    visibleReactionsCount: o,
                    remainingReactions: a
                }
            );
        }, [l, n, t.reactions]);
    return (0, r.jsx)(
        O,
        x(b({}, e), {
            visibleReactionsCount: s,
            combinedReactions: a,
            remainingReactions: o
        })
    );
};
