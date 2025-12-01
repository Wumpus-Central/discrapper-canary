n.d(t, {
    I: () => s,
    Z: () => y,
}),
    n(388685),
    n(467055);
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
var s = (function (e) {
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
        let { channelId: i, messageId: a, emoji: o, key: s } = e,
            c = f(a, o);
        if (p(s, i) >= l) return;
        let _ = null != (t = u[i]) ? t : {},
            m = (null != (n = d[i]) ? n : {})[c],
            h = _[c];
        ("HOVER" !== s || null == h) &&
            ("HOVER" === h &&
                "EXTERNAL" === s &&
                null != m &&
                ("function" == typeof m.destroy && m.destroy(), null == (r = d[i]) || delete r[c], (h = void 0)),
            null == h && (null != u[i] ? (u[i][c] = s) : (u[i] = { [c]: s })));
    },
    m = (e) => {
        var t;
        let { channelId: n, messageId: r, emoji: i } = e,
            a = f(r, i);
        null == (t = u[n]) || delete t[a];
    },
    h = (e) => {
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
class b extends (r = i.ZP.Store) {
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
o(b, "displayName", "BurstReactionEffectsStore");
let y = new b(a.Z, {
    BURST_REACTION_EFFECT_CLEAR: m,
    BURST_REACTION_EFFECT_PLAY: _,
    BURST_REACTION_ANIMATION_ADD: h,
    BURST_REACTION_PICKER_ANIMATION_ADD: g,
    BURST_REACTION_PICKER_ANIMATION_CLEAR: E,
});
