i.d(t, { A: () => A });
var n = i(627968),
    l = i(64700),
    a = i(311907),
    s = i(73153),
    r = i(775602),
    o = i(649963),
    u = i(253932),
    d = i(900210),
    c = i(297494),
    h = i(211180),
    m = i(60317),
    p = i(734646),
    g = i(15440);
let A = l.memo(function (e) {
    let { channelId: t, messageId: i, emoji: A, useChatFontScaling: f, color: T, count: E, emojiSize: x } = e,
        I = (0, a.bG)([d.A], () => d.A.getEffectForEmojiId(t, i, A)),
        N = l.useMemo(() => (0, m.eT)(A, T, t, { key: I, messageId: i }), [T, I, A, t, i]),
        [v, j] = l.useState(!1),
        R = (0, a.bG)([r.A], () => r.A.useReducedMotion),
        S = u.Sf.useSetting(),
        C = l.useCallback(() => {
            s.h.dispatch({ type: "BURST_REACTION_EFFECT_CLEAR", channelId: t, messageId: i, emoji: A });
        }, [A, t, i]);
    return (l.useEffect(() => {
        let e = () => {
            if (v) return;
            let e = (0, c.H4)(`${Date.now()}${t}${i}${A.name}`) % 10;
            (e += E > 4 ? 4 : E - 1) > 7 &&
                (j(!0), (0, o.on)({ channelId: t, messageId: i, emoji: A, key: d.W.RANDOM }));
        };
        if (v || (R && !S) || !S) return;
        e();
        let n = setInterval(e, 5e3);
        return () => {
            clearInterval(n);
        };
    }, [S, t, E, A, A.name, v, i, R]),
    null == I)
        ? null
        : (0, n.jsx)(h.A, { className: (f ? g : p).effect, effect: N, onComplete: C, emojiSize: x });
});
