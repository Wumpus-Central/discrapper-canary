n.d(t, { A: () => T }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(868285),
    o = n(939249),
    d = n(834730),
    c = n(191226),
    u = n(505527),
    m = n(960538),
    h = n(860227),
    g = n(172218),
    p = n(317097),
    A = n(565645),
    x = n(114166),
    f = n(891734),
    E = n(831688),
    I = n(347353),
    C = n(866661);
let v = l.memo(function (e) {
        let t,
            n,
            {
                useChatFontScaling: l,
                hideEmoji: s,
                emoji: a,
                className: o,
                count: d,
                me: c,
                me_burst: m,
                burst_count: h,
                burst_colors: g,
                readOnly: v,
                isLurking: _,
                isPendingMember: j,
                type: N,
                emojiSize: y,
            } = e,
            T = N === u.v.BURST,
            S = (0, E.IN)(c, m, N),
            b = (0, f.g)(T && null != g ? g : []),
            L = l ? C : I,
            R = T ? h : d,
            k = (0, x.x)(R, E.$Z),
            M = {};
        if (T && null != b) {
            let { accentColor: e, backgroundColor: i, opacity: l } = b,
                s = (0, p.xp)(i ?? "", l) ?? "";
            S && (M.borderColor = i), (M.background = s), (t = e), (n = e);
        }
        let P = { minWidth: k, color: t, borderColor: n };
        return (0, i.jsxs)("div", {
            className: r()(L.reaction, L.reactionInner, o, { [L.reactionMe]: S, [L.reactionReadOnly]: v && !_ && !j }),
            style: M,
            children: [
                (0, i.jsx)(A.A, {
                    className: r()({ [L.hideEmoji]: s }),
                    emojiId: a.id,
                    emojiName: a.name,
                    size: y,
                    animated: T && a.animated,
                }),
                (0, i.jsx)("div", { className: L.reactionCount, style: P, children: R }),
            ],
        });
    }),
    _ = l.memo(function (e) {
        let { showImmediate: t, reactions: n, ...s } = e,
            [r, a] = l.useState(!1),
            [o, d] = l.useTransition(),
            c = l.useCallback(
                (e) => {
                    !e ||
                        r ||
                        o ||
                        d(() => {
                            a(!0);
                        });
                },
                [r, o],
            ),
            m = (0, g.K)(c),
            h = (r && !o) || t ? E.qT : v;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { ref: m }),
                n.map((e) =>
                    (0, i.jsx)(
                        h,
                        { ...s, ...e, emojiSize: "reaction" },
                        `${e.type === u.v.BURST ? "burst:" : ""}${e.emoji.id ?? 0}:${e.emoji.name}`,
                    ),
                ),
            ],
        });
    });
var j = n(375708);
let N = (e, t) => (null == e && null == t) || e === t;
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
                isPendingMember: s,
                isForumToolbar: u,
                channel: g,
                className: p,
                forceAddReactions: A,
                reactionClassName: x,
                useChatFontScaling: f,
                forceHideReactionCreates: E,
                remainingReactions: v,
                combinedReactions: N,
                visibleReactionsCount: y,
            } = this.props,
            { disableTransitionAppear: T } = this.state,
            S = f ? C : I,
            b = y > 0;
        if (!b && !A) return null;
        let L = A || b;
        return (0, i.jsxs)(a.F, {
            component: "div",
            className: r()(S.reactions, p),
            transitionAppear: !T,
            role: "group",
            transitionLeave: !1,
            id: (0, h.JH)(e),
            onMouseEnter: () => this.setState({ isHovered: !0 }),
            onMouseLeave: () => this.setState({ isHovered: !1 }),
            children: [
                (0, i.jsx)(_, {
                    reactions: N,
                    message: e,
                    readOnly: n,
                    isLurking: l,
                    isPendingMember: s,
                    isForumToolbar: u,
                    useChatFontScaling: f,
                    className: x,
                }),
                v > 0 &&
                    (0, i.jsx)(o.D, {
                        onClick: (t) => {
                            t.stopPropagation(), (0, c.$)(e);
                        },
                        className: r()(S.reaction, x, S.remainingReactions),
                        "aria-label": j.intl.string(j.t.lfIHs4),
                        children: (0, i.jsxs)(d.E, {
                            className: S.reactionInner,
                            variant: "text-sm/normal",
                            children: ["+", v],
                        }),
                    }),
                !t &&
                    !E &&
                    (0, i.jsx)(m.t, {
                        tabIndex: L || this.state.isHovered ? 0 : -1,
                        message: e,
                        channel: g,
                        useChatFontScaling: f,
                        isHovered: this.state.isHovered,
                        className: r()({ [S.forceShow]: L }),
                    }),
            ],
        });
    }
}
let T = (e) => {
    let { message: t, maxReactions: n, hoistReaction: s } = e,
        {
            combinedReactions: r,
            remainingReactions: a,
            visibleReactionsCount: o,
        } = l.useMemo(() => {
            let e = [],
                i = ((e, t) => {
                    if (null == t) return e;
                    let n = e.findIndex((e) => N(e.emoji.id, t?.id) && N(e.emoji.name, t?.name));
                    return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)];
                })(t.reactions, s),
                l = null != n && n < i.length ? i.slice(0, n) : i,
                r = i.length - l.length,
                a = i.length;
            return (
                l.forEach((t) => {
                    t.burst_count > 0 && e.push({ ...t, type: u.v.BURST }),
                        t.count > 0 && e.push({ ...t, type: u.v.NORMAL }),
                        null != t.me_vote && --a;
                }),
                { combinedReactions: e, visibleReactionsCount: a, remainingReactions: r }
            );
        }, [s, n, t.reactions]);
    return (0, i.jsx)(y, { ...e, visibleReactionsCount: o, combinedReactions: r, remainingReactions: a });
};
