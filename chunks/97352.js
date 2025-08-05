n.d(t, { Z: () => d });
var r = n(73800),
    i = n(399606),
    a = n(570140),
    o = n(607070),
    s = n(222677),
    l = n(695346),
    c = n(960020),
    u = n(566006);
function d() {
    let e = l.Yk.useSetting(),
        t = (0, i.e7)([o.Z], () => o.Z.useReducedMotion);
    r.useEffect(() => {
        function n(n) {
            let { messageId: r, channelId: i, emoji: a, optimistic: o, reactionType: l } = n;
            o ||
                l !== u.O.BURST ||
                !e ||
                t ||
                (0, s.T6)({
                    channelId: i,
                    messageId: r,
                    emoji: a,
                    key: c.I.EXTERNAL
                });
        }
        return (
            a.Z.subscribe('MESSAGE_REACTION_ADD', n),
            () => {
                a.Z.unsubscribe('MESSAGE_REACTION_ADD', n);
            }
        );
    }, [e, t]);
}
