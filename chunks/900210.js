i.d(t, { A: () => h, W: () => s });
var n,
    l = i(17928),
    a = i(228366),
    s = (((n = {}).HOVER = "HOVER"), (n.EXTERNAL = "EXTERNAL"), (n.RANDOM = "RANDOM"), n);
let o = {},
    r = {},
    u = {},
    d = (e, t) => {
        let i = null != t.id ? t.id : t.name;
        return `${e}:${i}`;
    };
class c extends l.Ay.Store {
    static displayName = "BurstReactionEffectsStore";
    getReactionPickerAnimation(e, t, i) {
        return o[`${e}:${t}:${i ?? ""}`];
    }
    getEffectForEmojiId(e, t, i) {
        let n = d(t, i);
        return r[e]?.[n];
    }
}
let h = new c(a.h, {
    BURST_REACTION_EFFECT_CLEAR: (e) => {
        let { channelId: t, messageId: i, emoji: n } = e,
            l = d(i, n);
        delete r[t]?.[l];
    },
    BURST_REACTION_EFFECT_PLAY: (e) => {
        let { channelId: t, messageId: i, emoji: n, key: l } = e,
            a = d(i, n);
        if (
            ((e, t) => {
                let i;
                switch (e) {
                    case "HOVER":
                        i = "HOVER";
                        break;
                    case "RANDOM":
                        i = "RANDOM";
                        break;
                    default:
                        i = "EXTERNAL";
                }
                let n = Object.fromEntries(
                    Object.entries(r[t] ?? {}).filter((e) => {
                        let [, t] = e;
                        return t === i;
                    }),
                );
                if (Object.keys(n).length >= 5 && "EXTERNAL" === e) {
                    for (let e in n)
                        if (null == u[t] || null == u[t][e]) {
                            delete r[t][e], delete n[e];
                            break;
                        }
                }
                return Object.keys(n).length;
            })(l, t) >= 5
        )
            return;
        let s = r[t] ?? {},
            o = (u[t] ?? {})[a],
            c = s[a];
        ("HOVER" !== l || null == c) &&
            ("HOVER" === c &&
                "EXTERNAL" === l &&
                null != o &&
                ("function" == typeof o.destroy && o.destroy(), delete u[t]?.[a], (c = void 0)),
            null == c && (null != r[t] ? (r[t][a] = l) : (r[t] = { [a]: l })));
    },
    BURST_REACTION_ANIMATION_ADD: (e) => {
        let { channelId: t, messageId: i, emoji: n, animation: l } = e,
            a = d(i, n);
        null == u[t] && (u[t] = {}), (u[t][a] = l);
    },
    BURST_REACTION_PICKER_ANIMATION_ADD: (e) => {
        let { messageId: t, emojiName: i, emojiId: n, startPosition: l } = e;
        o[`${t}:${i}:${n ?? ""}`] = l;
    },
    BURST_REACTION_PICKER_ANIMATION_CLEAR: (e) => {
        let { messageId: t, emojiName: i, emojiId: n } = e;
        delete o[`${t}:${i}:${n ?? ""}`];
    },
});
