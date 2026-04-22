n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(172218),
    o = n(317097),
    d = n(565645),
    c = n(114166),
    u = n(891734),
    m = n(505527),
    _ = n(260821),
    h = n(10585),
    p = n(471717);
let g = l.memo(function (e) {
        let t,
            n,
            {
                useChatFontScaling: l,
                hideEmoji: a,
                emoji: r,
                className: g,
                count: A,
                me: f,
                me_burst: x,
                burst_count: C,
                burst_colors: E,
                readOnly: I,
                isLurking: v,
                isPendingMember: b,
                type: T,
                emojiSize: S,
            } = e,
            y = T === m.v.BURST,
            N = (0, _.IN)(f, x, T),
            j = (0, u.g)(y && null != E ? E : []),
            L = l ? p : h,
            R = y ? C : A,
            P = (0, c.x)(R, _.$Z),
            w = {};
        if (y && null != j) {
            let { accentColor: e, backgroundColor: i, opacity: l } = j,
                a = (0, o.xp)(i ?? "", l) ?? "";
            N && (w.borderColor = i), (w.background = a), (t = e), (n = e);
        }
        let D = { minWidth: P, color: t, borderColor: n };
        return (0, i.jsxs)("div", {
            className: s()(L.reaction, L.reactionInner, g, { [L.reactionMe]: N, [L.reactionReadOnly]: I && !v && !b }),
            style: w,
            children: [
                (0, i.jsx)(d.A, {
                    className: s()({ [L.hideEmoji]: a }),
                    emojiId: r.id,
                    emojiName: r.name,
                    size: S,
                    animated: y && r.animated,
                }),
                (0, i.jsx)("div", { className: L.reactionCount, style: D, children: R }),
            ],
        });
    }),
    A = l.memo(function (e) {
        let { showImmediate: t, reactions: n, ...a } = e,
            [s, o] = l.useState(!1),
            [d, c] = l.useTransition(),
            u = l.useCallback(
                (e) => {
                    !e ||
                        s ||
                        d ||
                        c(() => {
                            o(!0);
                        });
                },
                [s, d],
            ),
            h = (0, r.K)(u),
            p = (s && !d) || t ? _.qT : g;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { ref: h }),
                n.map((e) =>
                    (0, i.jsx)(
                        p,
                        { ...a, ...e, emojiSize: "reaction" },
                        `${e.type === m.v.BURST ? "burst:" : ""}${e.emoji.id ?? 0}:${e.emoji.name}`,
                    ),
                ),
            ],
        });
    });
