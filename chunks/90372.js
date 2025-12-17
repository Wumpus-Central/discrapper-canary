n.d(t, { Z: () => s });
var a = n(473749),
    r = n(451478),
    i = n(830917),
    l = n(985518);
let s = {
    useForumChannelSeenManager: function (e) {
        let { guildId: t, channelId: n } = e,
            s = a.useRef(null),
            o = (0, i.UU)(),
            c = !r.Z.isFocused(o);
        return (
            a.useLayoutEffect(
                () => (
                    null == s.current &&
                        ((s.current = new l.ZP({
                            guildId: t,
                            channelId: n,
                            isPaused: c,
                            windowId: o,
                        })),
                        s.current.initialize()),
                    () => {
                        var e;
                        null == (e = s.current) || e.terminate(), (s.current = null);
                    }
                ),
                [n, t, c, o],
            ),
            s.current
        );
    },
};
