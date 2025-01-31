n.d(t, { Z: () => u });
var i = n(192379),
    l = n(399606),
    a = n(570140),
    r = n(607070),
    s = n(222677),
    o = n(695346),
    c = n(960020),
    d = n(566006);
function u() {
    let e = o.Yk.useSetting(),
        t = (0, l.e7)([r.Z], () => r.Z.useReducedMotion);
    i.useEffect(() => {
        function n(n) {
            let { messageId: i, channelId: l, emoji: a, optimistic: r, reactionType: o } = n;
            !r &&
                o === d.O.BURST &&
                e &&
                !t &&
                (0, s.T6)({
                    channelId: l,
                    messageId: i,
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
