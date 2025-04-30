n.d(t, { Z: () => d });
var r = n(192379),
    i = n(399606),
    l = n(570140),
    o = n(607070),
    a = n(222677),
    s = n(695346),
    c = n(960020),
    u = n(566006);
function d() {
    let e = s.Yk.useSetting(),
        t = (0, i.e7)([o.Z], () => o.Z.useReducedMotion);
    r.useEffect(() => {
        function n(n) {
            let { messageId: r, channelId: i, emoji: l, optimistic: o, reactionType: s } = n;
            o ||
                s !== u.O.BURST ||
                !e ||
                t ||
                (0, a.T6)({
                    channelId: i,
                    messageId: r,
                    emoji: l,
                    key: c.I.EXTERNAL
                });
        }
        return (
            l.Z.subscribe('MESSAGE_REACTION_ADD', n),
            () => {
                l.Z.unsubscribe('MESSAGE_REACTION_ADD', n);
            }
        );
    }, [e, t]);
}
