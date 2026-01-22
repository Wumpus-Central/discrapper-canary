n.d(t, { v: () => d }), n(896048);
var r = n(64700),
    i = n(735438),
    l = n.n(i),
    s = n(311907),
    a = n(492494),
    c = n(885617),
    o = n(473145);
function d(e) {
    let { guild: t } = e;
    if (null == t)
        return {
            maxEmojiSlots: 0,
            availableEmojiSlots: 0,
            staticEmoji: [],
            totalStaticEmoji: 0,
            animatedEmoji: [],
            totalAnimatedEmoji: 0,
        };
    let n = (0, o.sN)(t),
        i = (0, s.bG)([c.A], () => c.A.getEmojis(t.id)),
        [d, u] = r.useMemo(() => {
            let e = null == i ? void 0 : i.filter((e) => !(0, a.Eg)(e, t.id)),
                [n, r] = l().partition(e, (e) => !e.animated);
            return [n, r];
        }, [i, t]),
        f = Math.max(n - d.length, n - u.length);
    return {
        maxEmojiSlots: n,
        availableEmojiSlots: f,
        staticEmoji: d,
        totalStaticEmoji: d.length,
        animatedEmoji: u,
        totalAnimatedEmoji: u.length,
    };
}
