i.d(t, { A: () => A });
var n = i(627968),
    l = i(64700),
    a = i(311907),
    s = i(73153),
    o = i(775602),
    r = i(649963),
    u = i(253932),
    d = i(900210),
    c = i(297494),
    h = i(211180),
    m = i(60317),
    p = i(734646),
    g = i(15440);
let A = l.memo(function (e) {
    let { channelId: t, messageId: i, emoji: A, useChatFontScaling: f, color: E, count: T, emojiSize: N } = e,
        x = (0, a.bG)([d.A], () => d.A.getEffectForEmojiId(t, i, A)),
        I = l.useMemo(() => (0, m.eT)(A, E, t, { key: x, messageId: i }), [E, x, A, t, i]),
        [j, v] = l.useState(!1),
        R = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        C = u.Sf.useSetting(),
        b = l.useCallback(() => {
            s.h.dispatch({ type: "BURST_REACTION_EFFECT_CLEAR", channelId: t, messageId: i, emoji: A });
        }, [A, t, i]);
    return (l.useEffect(() => {
        let e = () => {
            if (j) return;
            let e = (0, c.H4)(`${Date.now()}${t}${i}${A.name}`) % 10;
            (e += T > 4 ? 4 : T - 1) > 7 &&
                (v(!0), (0, r.on)({ channelId: t, messageId: i, emoji: A, key: d.W.RANDOM }));
        };
        if (j || (R && !C) || !C) return;
        e();
        let n = setInterval(e, 5e3);
        return () => {
            clearInterval(n);
        };
    }, [C, t, T, A, A.name, j, i, R]),
    null == x)
        ? null
        : (0, n.jsx)(h.A, { className: (f ? g : p).effect, effect: I, onComplete: b, emojiSize: N });
});
