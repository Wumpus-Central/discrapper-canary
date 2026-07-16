n.d(t, { A: () => m, W: () => r });
var i,
    l = n(17928),
    a = n(228366),
    r = (((i = {}).HOVER = "HOVER"), (i.EXTERNAL = "EXTERNAL"), (i.RANDOM = "RANDOM"), i);
let o = {},
    s = {},
    u = {};
function c(e, t) {
    let n = null != t.id ? t.id : t.name;
    return `${e}:${n}`;
}
class d extends l.Ay.Store {
    static displayName = "BurstReactionEffectsStore";
    getReactionPickerAnimation(e, t, n) {
        return o[`${e}:${t}:${n ?? ""}`];
    }
    getEffectForEmojiId(e, t, n) {
        let i = c(t, n);
        return s[e]?.[i];
    }
}
let m = new d(a.h, {
    BURST_REACTION_EFFECT_CLEAR: function (e) {
        let { channelId: t, messageId: n, emoji: i } = e,
            l = c(n, i);
        delete s[t]?.[l];
    },
    BURST_REACTION_EFFECT_PLAY: function (e) {
        let { channelId: t, messageId: n, emoji: i, key: l } = e,
            a = c(n, i);
        if (
            (function (e, t) {
                let n;
                switch (e) {
                    case "HOVER":
                        n = "HOVER";
                        break;
                    case "RANDOM":
                        n = "RANDOM";
                        break;
                    default:
                        n = "EXTERNAL";
                }
                let i = Object.fromEntries(
                    Object.entries(s[t] ?? {}).filter((e) => {
                        let [, t] = e;
                        return t === n;
                    }),
                );
                if (Object.keys(i).length >= 5 && "EXTERNAL" === e) {
                    for (let e in i)
                        if (null == u[t] || null == u[t][e]) {
                            delete s[t][e], delete i[e];
                            break;
                        }
                }
                return Object.keys(i).length;
            })(l, t) >= 5
        )
            return;
        let r = s[t] ?? {},
            o = (u[t] ?? {})[a],
            d = r[a];
        ("HOVER" !== l || null == d) &&
            ("HOVER" === d &&
                "EXTERNAL" === l &&
                null != o &&
                ("function" == typeof o.destroy && o.destroy(), delete u[t]?.[a], (d = void 0)),
            null == d && (null != s[t] ? (s[t][a] = l) : (s[t] = { [a]: l })));
    },
    BURST_REACTION_ANIMATION_ADD: function (e) {
        let { channelId: t, messageId: n, emoji: i, animation: l } = e,
            a = c(n, i);
        null == u[t] && (u[t] = {}), (u[t][a] = l);
    },
    BURST_REACTION_PICKER_ANIMATION_ADD: function (e) {
        let { messageId: t, emojiName: n, emojiId: i, startPosition: l } = e;
        o[`${t}:${n}:${i ?? ""}`] = l;
    },
    BURST_REACTION_PICKER_ANIMATION_CLEAR: function (e) {
        let { messageId: t, emojiName: n, emojiId: i } = e;
        delete o[`${t}:${n}:${i ?? ""}`];
    },
});
