n.d(e, { W: () => o });
var i = n(440849),
    l = n(509613),
    s = n(695346),
    u = n(313789),
    r = n(611480),
    a = n(388032);
let o = (0, l.J9)(u.n.ANIMATE_STICKERS, {
    useTitle: () => a.intl.string(a.t["6NtAuJ"]),
    useSubtitle: () => {
        var t;
        return null != (t = (0, i.J)("animateStickers")) ? t : a.intl.string(a.t.GRa6U7);
    },
    useOptions: () => [
        {
            name: a.intl.string(a.t["Xp+X2U"]),
            value: r.yr.ALWAYS_ANIMATE,
        },
        {
            name: a.intl.string(a.t.IlLT7e),
            desc: a.intl.string(a.t.bIW9Tl),
            value: r.yr.ANIMATE_ON_INTERACTION,
        },
        {
            name: a.intl.string(a.t.IGu8x3),
            value: r.yr.NEVER_ANIMATE,
        },
    ],
    useValue: () => s.Wp.useSetting(),
    setValue: (t) => s.Wp.updateSetting(t),
});
