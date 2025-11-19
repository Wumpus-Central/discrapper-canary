n.d(t, { Z: () => S }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(215569),
    l = n(481060),
    c = n(566006),
    u = n(490597),
    d = n(453687),
    f = n(434624),
    _ = n(287151),
    p = n(388032),
    h = n(127947),
    m = n(893973);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = (e, t) => (null == e && null == t) || e === t,
    v = (e, t) =>
        e.findIndex((e) => O(e.emoji.id, null == t ? void 0 : t.id) && O(e.emoji.name, null == t ? void 0 : t.name)),
    I = (e, t) => {
        if (null == t) return e;
        let n = v(e, t);
        return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)];
    };
class T extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let n = e.message.reactions.length;
        return 0 === t.reactionsCount && n > 0
            ? {
                  disableTransitionAppear: !1,
                  reactionsCount: n,
              }
            : t.reactionsCount !== n
              ? { reactionsCount: n }
              : null;
    }
    render() {
        let {
                message: e,
                disableReactionCreates: t,
                disableReactionUpdates: n,
                isLurking: i,
                isGuest: a,
                isPendingMember: c,
                isForumToolbar: g,
                channel: E,
                className: b,
                forceAddReactions: y,
                reactionClassName: O,
                useChatFontScaling: v,
                forceHideReactionCreates: I,
                remainingReactions: T,
                combinedReactions: S,
                visibleReactionsCount: A,
            } = this.props,
            { disableTransitionAppear: C } = this.state,
            N = v ? m : h,
            R = A > 0;
        if (!R && !y) return null;
        let P = y || R;
        return (0, r.jsxs)(s.W, {
            component: "div",
            className: o()(N.reactions, b),
            transitionAppear: !C,
            role: "group",
            transitionLeave: !1,
            id: (0, d.bY)(e),
            onMouseEnter: () => this.setState({ isHovered: !0 }),
            onMouseLeave: () => this.setState({ isHovered: !1 }),
            children: [
                (0, r.jsx)(f.l, {
                    reactions: S,
                    message: e,
                    readOnly: n,
                    isLurking: i,
                    isGuest: a,
                    isPendingMember: c,
                    isForumToolbar: g,
                    useChatFontScaling: v,
                    className: O,
                }),
                T > 0 &&
                    (0, r.jsx)(l.P3F, {
                        onClick: (t) => {
                            t.stopPropagation(), (0, _.op)(E, e);
                        },
                        className: o()(N.reaction, O, N.remainingReactions),
                        "aria-label": p.intl.string(p.t.lfIHs4),
                        children: (0, r.jsxs)(l.Text, {
                            className: N.reactionInner,
                            variant: "text-sm/normal",
                            children: ["+", T],
                        }),
                    }),
                !t &&
                    !I &&
                    (0, r.jsx)(u.X, {
                        tabIndex: P || this.state.isHovered ? 0 : -1,
                        message: e,
                        channel: E,
                        useChatFontScaling: v,
                        isHovered: this.state.isHovered,
                        className: o()({ [N.forceShow]: P }),
                    }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            g(this, "state", {
                disableTransitionAppear: !0,
                reactionsCount: this.props.message.reactions.length,
                isHovered: !1,
            });
    }
}
let S = (e) => {
    let { message: t, maxReactions: n, hoistReaction: a } = e,
        {
            combinedReactions: o,
            remainingReactions: s,
            visibleReactionsCount: l,
        } = i.useMemo(() => {
            let e = [],
                r = I(t.reactions, a),
                i = null != n && n < r.length ? r.slice(0, n) : r,
                o = r.length - i.length,
                s = r.length;
            return (
                i.forEach((t) => {
                    t.burst_count > 0 && e.push(y(E({}, t), { type: c.O.BURST })),
                        t.count > 0 && e.push(y(E({}, t), { type: c.O.NORMAL })),
                        null != t.me_vote && --s;
                }),
                {
                    combinedReactions: e,
                    visibleReactionsCount: s,
                    remainingReactions: o,
                }
            );
        }, [a, n, t.reactions]);
    return (0, r.jsx)(
        T,
        y(E({}, e), {
            visibleReactionsCount: l,
            combinedReactions: o,
            remainingReactions: s,
        }),
    );
};
