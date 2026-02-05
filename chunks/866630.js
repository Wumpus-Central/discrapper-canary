n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(172218),
    o = n(317097),
    d = n(565645),
    c = n(114166),
    u = n(891734),
    m = n(505527),
    _ = n(260821),
    h = n(233080),
    p = n(710504);
let g = l.memo(function (e) {
        let t,
            n,
            {
                useChatFontScaling: l,
                hideEmoji: a,
                emoji: s,
                className: g,
                count: A,
                me: f,
                me_burst: x,
                burst_count: E,
                burst_colors: C,
                readOnly: I,
                isLurking: T,
                isPendingMember: v,
                type: N,
                emojiSize: S,
            } = e,
            b = N === m.v.BURST,
            y = (0, _.IN)(f, x, N),
            j = (0, u.g)(b && null != C ? C : []),
            R = l ? p : h,
            L = b ? E : A,
            M = (0, c.x)(L, _.$Z),
            O = {};
        if (b && null != j) {
            let { accentColor: e, backgroundColor: i, opacity: l } = j,
                a = (0, o.xp)(i ?? "", l) ?? "";
            y && (O.borderColor = i), (O.background = a), (t = e), (n = e);
        }
        let P = { minWidth: M, color: t, borderColor: n };
        return (0, i.jsxs)("div", {
            className: r()(R.reaction, R.reactionInner, g, { [R.reactionMe]: y, [R.reactionReadOnly]: I && !T && !v }),
            style: O,
            children: [
                (0, i.jsx)(d.A, {
                    className: r()({ [R.hideEmoji]: a }),
                    emojiId: s.id,
                    emojiName: s.name,
                    size: S,
                    animated: b && s.animated,
                }),
                (0, i.jsx)("div", { className: R.reactionCount, style: P, children: L }),
            ],
        });
    }),
    A = l.memo(function (e) {
        let { showImmediate: t, reactions: n, ...a } = e,
            [r, o] = l.useState(!1),
            [d, c] = l.useTransition(),
            u = l.useCallback(
                (e) => {
                    !e ||
                        r ||
                        d ||
                        c(() => {
                            o(!0);
                        });
                },
                [r, d],
            ),
            h = (0, s.K)(u),
            p = (r && !d) || t ? _.qT : g;
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
