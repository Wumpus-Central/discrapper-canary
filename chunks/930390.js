(n.d(t, { A: () => S }), n(321073));
var i = n(477900),
    l = n(582128),
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
    I = n(815807),
    E = n(831688),
    v = n(356974),
    C = n(988626);
let _ = l.memo(function (e) {
        let t,
            n,
            {
                useChatFontScaling: l,
                emoji: s,
                className: a,
                count: o,
                me: d,
                me_burst: c,
                burst_count: m,
                burst_colors: h,
                readOnly: g,
                isLurking: _,
                isPendingMember: j,
                type: N,
                emojiSize: y,
            } = e,
            T = N === u.v.BURST,
            S = (0, I.IN)(d, c, N),
            b = (0, f.g)(T && null != h ? h : []),
            k = l ? C : v,
            R = T ? m : o,
            L = (0, x.x)(R, E.$),
            M = {};
        if (T && null != b) {
            let { accentColor: e, backgroundColor: i, opacity: l } = b,
                s = (0, p.xp)(i ?? "", l) ?? "";
            (S && (M.borderColor = i), (M.background = s), (t = e), (n = e));
        }
        let P = { minWidth: L, color: t, borderColor: n };
        return (0, i.jsxs)("div", {
            className: r()(k.reaction, k.reactionInner, a, { [k.reactionMe]: S, [k.reactionReadOnly]: g && !_ && !j }),
            style: M,
            children: [
                (0, i.jsx)(A.A, { emojiId: s.id, emojiName: s.name, size: y, animated: T && s.animated }),
                (0, i.jsx)("div", { className: k.reactionCount, style: P, children: R }),
            ],
        });
    }),
    j = l.memo(function (e) {
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
            h = (r && !o) || t ? E.q : _;
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
var N = n(660183);
function y(e, t) {
    return (null == e && null == t) || e === t;
}
class T extends l.PureComponent {
    state = { disableTransitionAppear: !0, reactionsCount: this.props.message.reactions.length };
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
                reactionClassName: A,
                useChatFontScaling: x,
                forceHideReactionCreates: f,
                remainingReactions: I,
                combinedReactions: E,
                visibleReactionsCount: _,
            } = this.props,
            { disableTransitionAppear: y } = this.state,
            T = x ? C : v;
        return _ > 0
            ? (0, i.jsxs)(a.F, {
                  component: "div",
                  className: r()(T.reactions, p),
                  transitionAppear: !y,
                  role: "group",
                  transitionLeave: !1,
                  id: (0, h.JH)(e),
                  children: [
                      (0, i.jsx)(j, {
                          reactions: E,
                          message: e,
                          readOnly: n,
                          isLurking: l,
                          isPendingMember: s,
                          isForumToolbar: u,
                          useChatFontScaling: x,
                          className: A,
                      }),
                      I > 0 &&
                          (0, i.jsx)(o.D, {
                              onClick: (t) => {
                                  (t.stopPropagation(), (0, c.$)(e));
                              },
                              className: r()(T.reaction, A, T.remainingReactions),
                              "aria-label": N.intl.string(N.t.lfIHs4),
                              children: (0, i.jsxs)(d.E, {
                                  className: T.reactionInner,
                                  variant: "text-sm/normal",
                                  children: ["+", I],
                              }),
                          }),
                      !t &&
                          !f &&
                          (0, i.jsx)(m.t, { message: e, channel: g, useChatFontScaling: x, className: T.forceShow }),
                  ],
              })
            : null;
    }
}
let S = function (e) {
    let { message: t, maxReactions: n, hoistReaction: s } = e,
        {
            combinedReactions: r,
            remainingReactions: a,
            visibleReactionsCount: o,
        } = l.useMemo(() => {
            let e = [],
                i = (function (e, t) {
                    if (null == t) return e;
                    let n = e.findIndex((e) => y(e.emoji.id, t?.id) && y(e.emoji.name, t?.name));
                    return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)];
                })(t.reactions, s),
                l = null != n && n < i.length ? i.slice(0, n) : i,
                r = i.length - l.length,
                a = i.length;
            return (
                l.forEach((t) => {
                    (t.burst_count > 0 && e.push({ ...t, type: u.v.BURST }),
                        t.count > 0 && e.push({ ...t, type: u.v.NORMAL }),
                        null != t.me_vote && --a);
                }),
                { combinedReactions: e, visibleReactionsCount: a, remainingReactions: r }
            );
        }, [s, n, t.reactions]);
    return (0, i.jsx)(T, { ...e, visibleReactionsCount: o, combinedReactions: r, remainingReactions: a });
};
