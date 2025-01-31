n.d(t, { Z: () => s });
var i = n(192379),
    l = n(451478),
    r = n(830917),
    a = n(985518);
let s = {
    useForumChannelSeenManager: function (e) {
        let { guildId: t, channelId: n } = e,
            s = i.useRef(null),
            o = (0, r.UU)(),
            c = !l.Z.isFocused(o);
        return (
            i.useLayoutEffect(
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
                        null === (e = s.current) || void 0 === e || e.terminate(), (s.current = null);
                    }
                ),
                [n, t, c, o]
            ),
            s.current
        );
    }
};
