n.d(t, { A: () => m, W: () => a });
var i,
    l = n(17928),
    o = n(73153),
    a = (((i = {}).HOVER = "HOVER"), (i.EXTERNAL = "EXTERNAL"), (i.RANDOM = "RANDOM"), i);
let r = {},
    s = {},
    c = {};
function u(e, t) {
    let n = null != t.id ? t.id : t.name;
    return `${e}:${n}`;
}
class d extends l.Ay.Store {
    static displayName = "BurstReactionEffectsStore";
    getReactionPickerAnimation(e, t, n) {
        return r[`${e}:${t}:${n ?? ""}`];
    }
    getEffectForEmojiId(e, t, n) {
        let i = u(t, n);
        return s[e]?.[i];
    }
}
let m = new d(o.h, {
    BURST_REACTION_EFFECT_CLEAR: function (e) {
        let { channelId: t, messageId: n, emoji: i } = e,
            l = u(n, i);
        delete s[t]?.[l];
    },
    BURST_REACTION_EFFECT_PLAY: function (e) {
        let { channelId: t, messageId: n, emoji: i, key: l } = e,
            o = u(n, i);
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
                        if (null == c[t] || null == c[t][e]) {
                            (delete s[t][e], delete i[e]);
                            break;
                        }
                }
                return Object.keys(i).length;
            })(l, t) >= 5
        )
            return;
        let a = s[t] ?? {},
            r = (c[t] ?? {})[o],
            d = a[o];
        ("HOVER" !== l || null == d) &&
            ("HOVER" === d &&
                "EXTERNAL" === l &&
                null != r &&
                ("function" == typeof r.destroy && r.destroy(), delete c[t]?.[o], (d = void 0)),
            null == d && (null != s[t] ? (s[t][o] = l) : (s[t] = { [o]: l })));
    },
    BURST_REACTION_ANIMATION_ADD: function (e) {
        let { channelId: t, messageId: n, emoji: i, animation: l } = e,
            o = u(n, i);
        (null == c[t] && (c[t] = {}), (c[t][o] = l));
    },
    BURST_REACTION_PICKER_ANIMATION_ADD: function (e) {
        let { messageId: t, emojiName: n, emojiId: i, startPosition: l } = e;
        r[`${t}:${n}:${i ?? ""}`] = l;
    },
    BURST_REACTION_PICKER_ANIMATION_CLEAR: function (e) {
        let { messageId: t, emojiName: n, emojiId: i } = e;
        delete r[`${t}:${n}:${i ?? ""}`];
    },
});
