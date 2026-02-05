n.d(t, { A: () => u });
var i = n(64700),
    l = n(417597),
    a = n(73153),
    s = n(775602),
    r = n(649963),
    o = n(253932),
    c = n(900210),
    d = n(505527);
function u() {
    let e = o.Sf.useSetting(),
        t = (0, l.bG)([s.A], () => s.A.useReducedMotion);
    i.useEffect(() => {
        function n(n) {
            let { messageId: i, channelId: l, emoji: a, optimistic: s, reactionType: o } = n;
            s || o !== d.v.BURST || !e || t || (0, r.on)({ channelId: l, messageId: i, emoji: a, key: c.W.EXTERNAL });
        }
        return (
            a.h.subscribe("MESSAGE_REACTION_ADD", n),
            () => {
                a.h.unsubscribe("MESSAGE_REACTION_ADD", n);
            }
        );
    }, [e, t]);
}
