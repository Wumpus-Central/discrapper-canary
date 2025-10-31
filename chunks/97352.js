n.d(t, { Z: () => d });
var r = n(647438),
    i = n(399606),
    l = n(570140),
    a = n(607070),
    o = n(222677),
    s = n(695346),
    c = n(960020),
    u = n(566006);
function d() {
    let e = s.Yk.useSetting(),
        t = (0, i.e7)([a.Z], () => a.Z.useReducedMotion);
    r.useEffect(() => {
        function n(n) {
            let { messageId: r, channelId: i, emoji: l, optimistic: a, reactionType: s } = n;
            a ||
                s !== u.O.BURST ||
                !e ||
                t ||
                (0, o.T6)({
                    channelId: i,
                    messageId: r,
                    emoji: l,
                    key: c.I.EXTERNAL,
                });
        }
        return (
            l.Z.subscribe("MESSAGE_REACTION_ADD", n),
            () => {
                l.Z.unsubscribe("MESSAGE_REACTION_ADD", n);
            }
        );
    }, [e, t]);
}
