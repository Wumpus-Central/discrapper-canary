n.d(t, { A: () => y }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(73939),
    o = n(939249),
    d = n(834730),
    c = n(191226),
    u = n(505527),
    m = n(960538),
    h = n(860227),
    g = n(172218),
    A = n(317097),
    p = n(565645),
    x = n(114166),
    f = n(891734),
    C = n(831688),
    E = n(347353),
    v = n(866661);
let I = l.memo(function (e) {
        let t,
            n,
            {
                useChatFontScaling: l,
                hideEmoji: s,
                emoji: r,
                className: o,
                count: d,
                me: c,
                me_burst: m,
                burst_count: h,
                burst_colors: g,
                readOnly: I,
                isLurking: _,
                isPendingMember: j,
                type: N,
                emojiSize: T,
            } = e,
            y = N === u.v.BURST,
            S = (0, C.IN)(c, m, N),
            b = (0, f.g)(y && null != g ? g : []),
            k = l ? v : E,
            L = y ? h : d,
            R = (0, x.x)(L, C.$Z),
            P = {};
        if (y && null != b) {
            let { accentColor: e, backgroundColor: i, opacity: l } = b,
                s = (0, A.xp)(i ?? "", l) ?? "";
            S && (P.borderColor = i), (P.background = s), (t = e), (n = e);
        }
        let M = { minWidth: R, color: t, borderColor: n };
        return (0, i.jsxs)("div", {
            className: a()(k.reaction, k.reactionInner, o, { [k.reactionMe]: S, [k.reactionReadOnly]: I && !_ && !j }),
            style: P,
            children: [
                (0, i.jsx)(p.A, {
                    className: a()({ [k.hideEmoji]: s }),
                    emojiId: r.id,
                    emojiName: r.name,
                    size: T,
                    animated: y && r.animated,
                }),
                (0, i.jsx)("div", { className: k.reactionCount, style: M, children: L }),
            ],
        });
    }),
    _ = l.memo(function (e) {
        let { showImmediate: t, reactions: n, ...s } = e,
            [a, r] = l.useState(!1),
            [o, d] = l.useTransition(),
            c = l.useCallback(
                (e) => {
                    !e ||
                        a ||
                        o ||
                        d(() => {
                            r(!0);
                        });
                },
                [a, o],
            ),
            m = (0, g.K)(c),
            h = (a && !o) || t ? C.qT : I;
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
var j = n(985018);
let N = (e, t) => (null == e && null == t) || e === t;
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
                isPendingMember: s,
                isForumToolbar: u,
                channel: g,
                className: A,
                forceAddReactions: p,
                reactionClassName: x,
                useChatFontScaling: f,
                forceHideReactionCreates: C,
                remainingReactions: I,
                combinedReactions: N,
                visibleReactionsCount: T,
            } = this.props,
            { disableTransitionAppear: y } = this.state,
            S = f ? v : E,
            b = T > 0;
        if (!b && !p) return null;
        let k = p || b;
        return (0, i.jsxs)(r.F, {
            component: "div",
            className: a()(S.reactions, A),
            transitionAppear: !y,
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
                I > 0 &&
                    (0, i.jsx)(o.D, {
                        onClick: (t) => {
                            t.stopPropagation(), (0, c.$)(e);
                        },
                        className: a()(S.reaction, x, S.remainingReactions),
                        "aria-label": j.intl.string(j.t.lfIHs4),
                        children: (0, i.jsxs)(d.E, {
                            className: S.reactionInner,
                            variant: "text-sm/normal",
                            children: ["+", I],
                        }),
                    }),
                !t &&
                    !C &&
                    (0, i.jsx)(m.t, {
                        tabIndex: k || this.state.isHovered ? 0 : -1,
                        message: e,
                        channel: g,
                        useChatFontScaling: f,
                        isHovered: this.state.isHovered,
                        className: a()({ [S.forceShow]: k }),
                    }),
            ],
        });
    }
}
let y = (e) => {
    let { message: t, maxReactions: n, hoistReaction: s } = e,
        {
            combinedReactions: a,
            remainingReactions: r,
            visibleReactionsCount: o,
        } = l.useMemo(() => {
            let e = [],
                i = ((e, t) => {
                    if (null == t) return e;
                    let n = e.findIndex((e) => N(e.emoji.id, t?.id) && N(e.emoji.name, t?.name));
                    return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)];
                })(t.reactions, s),
                l = null != n && n < i.length ? i.slice(0, n) : i,
                a = i.length - l.length,
                r = i.length;
            return (
                l.forEach((t) => {
                    t.burst_count > 0 && e.push({ ...t, type: u.v.BURST }),
                        t.count > 0 && e.push({ ...t, type: u.v.NORMAL }),
                        null != t.me_vote && --r;
                }),
                { combinedReactions: e, visibleReactionsCount: r, remainingReactions: a }
            );
        }, [s, n, t.reactions]);
    return (0, i.jsx)(T, { ...e, visibleReactionsCount: o, combinedReactions: a, remainingReactions: r });
};
