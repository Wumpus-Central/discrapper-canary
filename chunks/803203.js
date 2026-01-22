n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(73153),
    o = n(775602),
    l = n(649963),
    c = n(253932),
    u = n(900210),
    d = n(297494),
    f = n(211180),
    p = n(60317),
    _ = n(859751),
    h = n(113520);

function m(e) {
    let { channelId: t, messageId: n, emoji: m, useChatFontScaling: g, color: E, count: b, emojiSize: y } = e,
        O = (0, a.bG)([u.A], () => u.A.getEffectForEmojiId(t, n, m)),
        A = g ? h : _,
        v = i.useMemo(
            () =>
                (0, p.eT)(m, E, t, {
                    key: O,
                    messageId: n,
                }),
            [E, O, m, t, n],
        ),
        [S, I] = i.useState(!1),
        T = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        C = c.Sf.useSetting(),
        N = i.useCallback(() => {
            s.h.dispatch({
                type: "BURST_REACTION_EFFECT_CLEAR",
                channelId: t,
                messageId: n,
                emoji: m,
            });
        }, [m, t, n]);
    return (i.useEffect(() => {
        let e = () => {
            if (S) return;
            let e = (0, d.H4)("".concat(Date.now()).concat(t).concat(n).concat(m.name)) % 10;
            (e += b > 4 ? 4 : b - 1) > 7 &&
                (I(!0),
                (0, l.on)({
                    channelId: t,
                    messageId: n,
                    emoji: m,
                    key: u.W.RANDOM,
                }));
        };
        if (S || (T && !C) || !C) return;
        e();
        let r = setInterval(e, 5e3);
        return () => {
            clearInterval(r);
        };
    }, [C, t, b, m, m.name, S, n, T]),
    null == O)
        ? null
        : (0, r.jsx)(f.A, {
              className: A.effect,
              effect: v,
              onComplete: N,
              emojiSize: y,
          });
}
let g = i.memo(m);
