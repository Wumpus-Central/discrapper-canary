n.d(t, { A: () => d });
var r = n(64700),
    l = n(417597),
    i = n(73153),
    a = n(775602),
    s = n(649963),
    o = n(253932),
    c = n(900210),
    u = n(505527);
function d() {
    let e = o.Sf.useSetting(),
        t = (0, l.bG)([a.A], () => a.A.useReducedMotion);
    r.useEffect(() => {
        function n(n) {
            let { messageId: r, channelId: l, emoji: i, optimistic: a, reactionType: o } = n;
            a ||
                o !== u.v.BURST ||
                !e ||
                t ||
                (0, s.on)({
                    channelId: l,
                    messageId: r,
                    emoji: i,
                    key: c.W.EXTERNAL,
                });
        }
        return (
            i.h.subscribe("MESSAGE_REACTION_ADD", n),
            () => {
                i.h.unsubscribe("MESSAGE_REACTION_ADD", n);
            }
        );
    }, [e, t]);
}
