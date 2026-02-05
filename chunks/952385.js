"use strict";
n.d(t, { v: () => c });
var i = n(64700),
    s = n(735438),
    l = n.n(s),
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
        s = (0, r.bG)([o.A], () => o.A.getEmojis(t.id)),
        [c, u] = i.useMemo(() => {
            let e = s?.filter((e) => !(0, a.Eg)(e, t.id)),
                [n, i] = l().partition(e, (e) => !e.animated);
            return [n, i];
        }, [s, t]),
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
