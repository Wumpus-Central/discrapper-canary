n.d(t, { Z: () => d });
var r = n(73800),
    i = n(399606),
    o = n(570140),
    a = n(607070),
    s = n(222677),
    l = n(695346),
    c = n(960020),
    u = n(566006);
function d() {
    let e = l.Yk.useSetting(),
        t = (0, i.e7)([a.Z], () => a.Z.useReducedMotion);
    r.useEffect(() => {
        function n(n) {
            let { messageId: r, channelId: i, emoji: o, optimistic: a, reactionType: l } = n;
            a ||
                l !== u.O.BURST ||
                !e ||
                t ||
                (0, s.T6)({
                    channelId: i,
                    messageId: r,
                    emoji: o,
                    key: c.I.EXTERNAL
                });
        }
        return (
            o.Z.subscribe('MESSAGE_REACTION_ADD', n),
            () => {
                o.Z.unsubscribe('MESSAGE_REACTION_ADD', n);
            }
        );
    }, [e, t]);
}
