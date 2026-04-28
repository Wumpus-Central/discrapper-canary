n.d(t, { A: () => N }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(73939),
    o = n(939249),
    c = n(834730),
    d = n(191226),
    u = n(505527),
    _ = n(960538),
    m = n(860227),
    h = n(172218),
    p = n(317097),
    g = n(565645),
    x = n(114166),
    f = n(891734),
    A = n(624207),
    C = n(347353),
    v = n(866661);
let I = l.memo(function (e) {
        let t,
            n,
            {
                useChatFontScaling: l,
                hideEmoji: a,
                emoji: s,
                className: o,
                count: c,
                me: d,
                me_burst: _,
                burst_count: m,
                burst_colors: h,
                readOnly: I,
                isLurking: E,
                isPendingMember: b,
                type: y,
                emojiSize: T,
            } = e,
            N = y === u.v.BURST,
            j = (0, A.IN)(d, _, y),
            S = (0, f.g)(N && null != h ? h : []),
            k = l ? v : C,
            L = N ? m : c,
            R = (0, x.x)(L, A.$Z),
            w = {};
        if (N && null != S) {
            let { accentColor: e, backgroundColor: i, opacity: l } = S,
                a = (0, p.xp)(i ?? "", l) ?? "";
            j && (w.borderColor = i), (w.background = a), (t = e), (n = e);
        }
        let P = { minWidth: R, color: t, borderColor: n };
        return (0, i.jsxs)("div", {
            className: r()(k.reaction, k.reactionInner, o, { [k.reactionMe]: j, [k.reactionReadOnly]: I && !E && !b }),
            style: w,
            children: [
                (0, i.jsx)(g.A, {
                    className: r()({ [k.hideEmoji]: a }),
                    emojiId: s.id,
                    emojiName: s.name,
                    size: T,
                    animated: N && s.animated,
                }),
                (0, i.jsx)("div", { className: k.reactionCount, style: P, children: L }),
            ],
        });
    }),
    E = l.memo(function (e) {
        let { showImmediate: t, reactions: n, ...a } = e,
            [r, s] = l.useState(!1),
            [o, c] = l.useTransition(),
            d = l.useCallback(
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
            _ = (0, h.K)(d),
            m = (r && !o) || t ? A.qT : I;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { ref: _ }),
                n.map((e) =>
                    (0, i.jsx)(
                        m,
                        { ...a, ...e, emojiSize: "reaction" },
                        `${e.type === u.v.BURST ? "burst:" : ""}${e.emoji.id ?? 0}:${e.emoji.name}`,
                    ),
                ),
            ],
        });
    });
var b = n(985018);
let y = (e, t) => (null == e && null == t) || e === t;
class T extends l.PureComponent {
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
                isForumToolbar: u,
                channel: h,
                className: p,
                forceAddReactions: g,
                reactionClassName: x,
                useChatFontScaling: f,
                forceHideReactionCreates: A,
                remainingReactions: I,
                combinedReactions: y,
                visibleReactionsCount: T,
            } = this.props,
            { disableTransitionAppear: N } = this.state,
            j = f ? v : C,
            S = T > 0;
        if (!S && !g) return null;
        let k = g || S;
        return (0, i.jsxs)(s.F, {
            component: "div",
            className: r()(j.reactions, p),
            transitionAppear: !N,
            role: "group",
            transitionLeave: !1,
            id: (0, m.JH)(e),
            onMouseEnter: () => this.setState({ isHovered: !0 }),
            onMouseLeave: () => this.setState({ isHovered: !1 }),
            children: [
                (0, i.jsx)(E, {
                    reactions: y,
                    message: e,
                    readOnly: n,
                    isLurking: l,
                    isPendingMember: a,
                    isForumToolbar: u,
                    useChatFontScaling: f,
                    className: x,
                }),
                I > 0 &&
                    (0, i.jsx)(o.D, {
                        onClick: (t) => {
                            t.stopPropagation(), (0, d.$)(e);
                        },
                        className: r()(j.reaction, x, j.remainingReactions),
                        "aria-label": b.intl.string(b.t.lfIHs4),
                        children: (0, i.jsxs)(c.E, {
                            className: j.reactionInner,
                            variant: "text-sm/normal",
                            children: ["+", I],
                        }),
                    }),
                !t &&
                    !A &&
                    (0, i.jsx)(_.t, {
                        tabIndex: k || this.state.isHovered ? 0 : -1,
                        message: e,
                        channel: h,
                        useChatFontScaling: f,
                        isHovered: this.state.isHovered,
                        className: r()({ [j.forceShow]: k }),
                    }),
            ],
        });
    }
}
let N = (e) => {
    let { message: t, maxReactions: n, hoistReaction: a } = e,
        {
            combinedReactions: r,
            remainingReactions: s,
            visibleReactionsCount: o,
        } = l.useMemo(() => {
            let e = [],
                i = ((e, t) => {
                    if (null == t) return e;
                    let n = e.findIndex((e) => y(e.emoji.id, t?.id) && y(e.emoji.name, t?.name));
                    return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)];
                })(t.reactions, a),
                l = null != n && n < i.length ? i.slice(0, n) : i,
                r = i.length - l.length,
                s = i.length;
            return (
                l.forEach((t) => {
                    t.burst_count > 0 && e.push({ ...t, type: u.v.BURST }),
                        t.count > 0 && e.push({ ...t, type: u.v.NORMAL }),
                        null != t.me_vote && --s;
                }),
                { combinedReactions: e, visibleReactionsCount: s, remainingReactions: r }
            );
        }, [a, n, t.reactions]);
    return (0, i.jsx)(T, { ...e, visibleReactionsCount: o, combinedReactions: r, remainingReactions: s });
};
