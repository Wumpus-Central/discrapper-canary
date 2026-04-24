n.d(t, { A: () => T }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(73939),
    o = n(939249),
    c = n(834730),
    d = n(505527),
    u = n(960538),
    _ = n(860227),
    m = n(172218),
    h = n(317097),
    p = n(565645),
    g = n(114166),
    f = n(891734),
    x = n(624207),
    A = n(347353),
    C = n(866661);
let v = l.memo(function (e) {
        let t,
            n,
            {
                useChatFontScaling: l,
                hideEmoji: a,
                emoji: s,
                className: o,
                count: c,
                me: u,
                me_burst: _,
                burst_count: m,
                burst_colors: v,
                readOnly: I,
                isLurking: E,
                isPendingMember: b,
                type: y,
                emojiSize: T,
            } = e,
            j = y === d.v.BURST,
            N = (0, x.IN)(u, _, y),
            S = (0, f.g)(j && null != v ? v : []),
            k = l ? C : A,
            L = j ? m : c,
            R = (0, g.x)(L, x.$Z),
            w = {};
        if (j && null != S) {
            let { accentColor: e, backgroundColor: i, opacity: l } = S,
                a = (0, h.xp)(i ?? "", l) ?? "";
            N && (w.borderColor = i), (w.background = a), (t = e), (n = e);
        }
        let P = { minWidth: R, color: t, borderColor: n };
        return (0, i.jsxs)("div", {
            className: r()(k.reaction, k.reactionInner, o, { [k.reactionMe]: N, [k.reactionReadOnly]: I && !E && !b }),
            style: w,
            children: [
                (0, i.jsx)(p.A, {
                    className: r()({ [k.hideEmoji]: a }),
                    emojiId: s.id,
                    emojiName: s.name,
                    size: T,
                    animated: j && s.animated,
                }),
                (0, i.jsx)("div", { className: k.reactionCount, style: P, children: L }),
            ],
        });
    }),
    I = l.memo(function (e) {
        let { showImmediate: t, reactions: n, ...a } = e,
            [r, s] = l.useState(!1),
            [o, c] = l.useTransition(),
            u = l.useCallback(
                (e) => {
                    !e ||
                        r ||
                        o ||
                        c(() => {
                            s(!0);
                        });
                },
                [r, o],
            ),
            _ = (0, m.K)(u),
            h = (r && !o) || t ? x.qT : v;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { ref: _ }),
                n.map((e) =>
                    (0, i.jsx)(
                        h,
                        { ...a, ...e, emojiSize: "reaction" },
                        `${e.type === d.v.BURST ? "burst:" : ""}${e.emoji.id ?? 0}:${e.emoji.name}`,
                    ),
                ),
            ],
        });
    });
var E = n(985018);
let b = (e, t) => (null == e && null == t) || e === t;
class y extends l.PureComponent {
    state = { disableTransitionAppear: !0, reactionsCount: this.props.message.reactions.length, isHovered: !1 };
    static getDerivedStateFromProps(e, t) {
        let n = e.message.reactions.length;
        return 0 === t.reactionsCount && n > 0
            ? { disableTransitionAppear: !1, reactionsCount: n }
            : t.reactionsCount !== n
              ? { reactionsCount: n }
              : null;
    }
    render() {
        let {
                message: e,
                disableReactionCreates: t,
                disableReactionUpdates: n,
                isLurking: l,
                isPendingMember: a,
                isForumToolbar: d,
                channel: m,
                className: h,
                forceAddReactions: p,
                reactionClassName: g,
                useChatFontScaling: f,
                forceHideReactionCreates: v,
                remainingReactions: b,
                combinedReactions: y,
                visibleReactionsCount: T,
            } = this.props,
            { disableTransitionAppear: j } = this.state,
            N = f ? C : A,
            S = T > 0;
        if (!S && !p) return null;
        let k = p || S;
        return (0, i.jsxs)(s.F, {
            component: "div",
            className: r()(N.reactions, h),
            transitionAppear: !j,
            role: "group",
            transitionLeave: !1,
            id: (0, _.JH)(e),
            onMouseEnter: () => this.setState({ isHovered: !0 }),
            onMouseLeave: () => this.setState({ isHovered: !1 }),
            children: [
                (0, i.jsx)(I, {
                    reactions: y,
                    message: e,
                    readOnly: n,
                    isLurking: l,
                    isPendingMember: a,
                    isForumToolbar: d,
                    useChatFontScaling: f,
                    className: g,
                }),
                b > 0 &&
                    (0, i.jsx)(o.D, {
                        onClick: (t) => {
                            t.stopPropagation(), (0, x.$l)(m, e);
                        },
                        className: r()(N.reaction, g, N.remainingReactions),
                        "aria-label": E.intl.string(E.t.lfIHs4),
                        children: (0, i.jsxs)(c.E, {
                            className: N.reactionInner,
                            variant: "text-sm/normal",
                            children: ["+", b],
                        }),
                    }),
                !t &&
                    !v &&
                    (0, i.jsx)(u.t, {
                        tabIndex: k || this.state.isHovered ? 0 : -1,
                        message: e,
                        channel: m,
                        useChatFontScaling: f,
                        isHovered: this.state.isHovered,
                        className: r()({ [N.forceShow]: k }),
                    }),
            ],
        });
    }
}
let T = (e) => {
    let { message: t, maxReactions: n, hoistReaction: a } = e,
        {
            combinedReactions: r,
            remainingReactions: s,
            visibleReactionsCount: o,
        } = l.useMemo(() => {
            let e = [],
                i = ((e, t) => {
                    if (null == t) return e;
                    let n = e.findIndex((e) => b(e.emoji.id, t?.id) && b(e.emoji.name, t?.name));
                    return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)];
                })(t.reactions, a),
                l = null != n && n < i.length ? i.slice(0, n) : i,
                r = i.length - l.length,
                s = i.length;
            return (
                l.forEach((t) => {
                    t.burst_count > 0 && e.push({ ...t, type: d.v.BURST }),
                        t.count > 0 && e.push({ ...t, type: d.v.NORMAL }),
                        null != t.me_vote && --s;
                }),
                { combinedReactions: e, visibleReactionsCount: s, remainingReactions: r }
            );
        }, [a, n, t.reactions]);
    return (0, i.jsx)(y, { ...e, visibleReactionsCount: o, combinedReactions: r, remainingReactions: s });
};
