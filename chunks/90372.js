n.d(t, { Z: () => s });
var r = n(73800),
    i = n(451478),
    l = n(830917),
    a = n(985518);
let s = {
    useForumChannelSeenManager: function (e) {
        let { guildId: t, channelId: n } = e,
            s = r.useRef(null),
            o = (0, l.UU)(),
            c = !i.Z.isFocused(o);
        return (
            r.useLayoutEffect(
                () => (
                    null == s.current &&
                        ((s.current = new a.ZP({
                            guildId: t,
                            channelId: n,
                            isPaused: c,
                            windowId: o
                        })),
                        s.current.initialize()),
                    () => {
                        var e;
                        null == (e = s.current) || e.terminate(), (s.current = null);
                    }
                ),
                [n, t, c, o]
            ),
            s.current
        );
    }
};
