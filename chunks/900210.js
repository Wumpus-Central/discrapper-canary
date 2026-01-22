n.d(t, {
    A: () => y,
    W: () => o,
}),
    n(896048),
    n(446912);
var r,
    i = n(311907),
    a = n(73153);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var o = (function (e) {
    return (e.HOVER = "HOVER"), (e.EXTERNAL = "EXTERNAL"), (e.RANDOM = "RANDOM"), e;
})({});
let l = 5,
    c = {},
    u = {},
    d = {},
    f = (e, t) => {
        let n = null != t.id ? t.id : t.name;
        return "".concat(e, ":").concat(n);
    },
    p = (e, t) => {
        var n;
        let r;
        switch (e) {
            case "HOVER":
                r = "HOVER";
                break;
            case "RANDOM":
                r = "RANDOM";
                break;
            default:
                r = "EXTERNAL";
        }
        let i = Object.fromEntries(
            Object.entries(null != (n = u[t]) ? n : {}).filter((e) => {
                let [, t] = e;
                return t === r;
            }),
        );
        if (Object.keys(i).length >= l && "EXTERNAL" === e) {
            for (let e in i)
                if (null == d[t] || null == d[t][e]) {
                    delete u[t][e], delete i[e];
                    break;
                }
        }
        return Object.keys(i).length;
    },
    _ = (e) => {
        var t, n, r;
        let { channelId: i, messageId: a, emoji: s, key: o } = e,
            c = f(a, s);
        if (p(o, i) >= l) return;
        let _ = null != (t = u[i]) ? t : {},
            h = (null != (n = d[i]) ? n : {})[c],
            m = _[c];
        ("HOVER" !== o || null == m) &&
            ("HOVER" === m &&
                "EXTERNAL" === o &&
                null != h &&
                ("function" == typeof h.destroy && h.destroy(), null == (r = d[i]) || delete r[c], (m = void 0)),
            null == m && (null != u[i] ? (u[i][c] = o) : (u[i] = { [c]: o })));
    },
    h = (e) => {
        var t;
        let { channelId: n, messageId: r, emoji: i } = e,
            a = f(r, i);
        null == (t = u[n]) || delete t[a];
    },
    m = (e) => {
        let { channelId: t, messageId: n, emoji: r, animation: i } = e,
            a = f(n, r);
        null == d[t] && (d[t] = {}), (d[t][a] = i);
    },
    g = (e) => {
        let { messageId: t, emojiName: n, emojiId: r, startPosition: i } = e;
        c[
            ""
                .concat(t, ":")
                .concat(n, ":")
                .concat(null != r ? r : "")
        ] = i;
    },
    E = (e) => {
        let { messageId: t, emojiName: n, emojiId: r } = e;
        delete c[
            ""
                .concat(t, ":")
                .concat(n, ":")
                .concat(null != r ? r : "")
        ];
    };
class b extends (r = i.Ay.Store) {
    getReactionPickerAnimation(e, t, n) {
        return c[
            ""
                .concat(e, ":")
                .concat(t, ":")
                .concat(null != n ? n : "")
        ];
    }
    getEffectForEmojiId(e, t, n) {
        var r;
        let i = f(t, n);
        return null == (r = u[e]) ? void 0 : r[i];
    }
}
s(b, "displayName", "BurstReactionEffectsStore");
let y = new b(a.h, {
    BURST_REACTION_EFFECT_CLEAR: h,
    BURST_REACTION_EFFECT_PLAY: _,
    BURST_REACTION_ANIMATION_ADD: m,
    BURST_REACTION_PICKER_ANIMATION_ADD: g,
    BURST_REACTION_PICKER_ANIMATION_CLEAR: E,
});
