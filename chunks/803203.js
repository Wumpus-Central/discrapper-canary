n.d(t, {
    A: () => g,
}),
    n(896048);
var i = n(627968),
    l = n(64700),
    r = n(311907),
    o = n(73153),
    a = n(775602),
    s = n(649963),
    u = n(253932),
    c = n(900210),
    d = n(297494),
    p = n(211180),
    h = n(60317),
    m = n(859751),
    f = n(113520);
let g = l.memo(function (e) {
    let { channelId: t, messageId: n, emoji: g, useChatFontScaling: b, color: y, count: O, emojiSize: v } = e,
        j = (0, r.bG)([c.A], () => c.A.getEffectForEmojiId(t, n, g)),
        A = l.useMemo(
            () =>
                (0, h.eT)(g, y, t, {
                    key: j,
                    messageId: n,
                }),
            [y, j, g, t, n],
        ),
        [T, E] = l.useState(!1),
        I = (0, r.bG)([a.A], () => a.A.useReducedMotion),
        S = u.Sf.useSetting(),
        x = l.useCallback(() => {
            o.h.dispatch({
                type: "BURST_REACTION_EFFECT_CLEAR",
                channelId: t,
                messageId: n,
                emoji: g,
            });
        }, [g, t, n]);
    return (l.useEffect(() => {
        let e = () => {
            if (T) return;
            let e = (0, d.H4)("".concat(Date.now()).concat(t).concat(n).concat(g.name)) % 10;
            (e += O > 4 ? 4 : O - 1) > 7 &&
                (E(!0),
                (0, s.on)({
                    channelId: t,
                    messageId: n,
                    emoji: g,
                    key: c.W.RANDOM,
                }));
        };
        if (T || (I && !S) || !S) return;
        e();
        let i = setInterval(e, 5e3);
        return () => {
            clearInterval(i);
        };
    }, [S, t, O, g, g.name, T, n, I]),
    null == j)
        ? null
        : (0, i.jsx)(p.A, {
              className: (b ? f : m).effect,
              effect: A,
              onComplete: x,
              emojiSize: v,
          });
});
