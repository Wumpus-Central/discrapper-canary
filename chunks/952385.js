n.d(t, { v: () => c });
var i = n(64700),
    l = n(735438),
    s = n.n(l),
    r = n(311907),
    a = n(492494),
    o = n(885617),
    d = n(473145);
function c(e) {
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
    let n = (0, d.sN)(t),
        l = (0, r.bG)([o.A], () => o.A.getEmojis(t.id)),
        [c, u] = i.useMemo(() => {
            let e = l?.filter((e) => !(0, a.Eg)(e, t.id)),
                [n, i] = s().partition(e, (e) => !e.animated);
            return [n, i];
        }, [l, t]),
        m = Math.max(n - c.length, n - u.length);
    return {
        maxEmojiSlots: n,
        availableEmojiSlots: m,
        staticEmoji: c,
        totalStaticEmoji: c.length,
        animatedEmoji: u,
        totalAnimatedEmoji: u.length,
    };
}
