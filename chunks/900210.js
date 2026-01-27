n.d(t, {
    A: () => m,
    W: () => s,
}),
    n(896048),
    n(446912);
var i,
    l,
    r,
    o = n(311907),
    a = n(73153),
    s = (((l = {}).HOVER = "HOVER"), (l.EXTERNAL = "EXTERNAL"), (l.RANDOM = "RANDOM"), l);
let u = {},
    c = {},
    d = {},
    p = (e, t) => {
        let n = null != t.id ? t.id : t.name;
        return "".concat(e, ":").concat(n);
    };
class h extends (i = o.Ay.Store) {
    getReactionPickerAnimation(e, t, n) {
        return u[
            ""
                .concat(e, ":")
                .concat(t, ":")
                .concat(null != n ? n : "")
        ];
    }
    getEffectForEmojiId(e, t, n) {
        var i;
        let l = p(t, n);
        return null == (i = c[e]) ? void 0 : i[l];
    }
}
(r = "displayName") in h
    ? Object.defineProperty(h, r, {
          value: "BurstReactionEffectsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (h[r] = "BurstReactionEffectsStore");
let m = new h(a.h, {
    BURST_REACTION_EFFECT_CLEAR: (e) => {
        var t;
        let { channelId: n, messageId: i, emoji: l } = e,
            r = p(i, l);
        null == (t = c[n]) || delete t[r];
    },
    BURST_REACTION_EFFECT_PLAY: (e) => {
        var t, n, i;
        let { channelId: l, messageId: r, emoji: o, key: a } = e,
            s = p(r, o);
        if (
            ((e, t) => {
                var n;
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
                let l = Object.fromEntries(
                    Object.entries(null != (n = c[t]) ? n : {}).filter((e) => {
                        let [, t] = e;
                        return t === i;
                    }),
                );
                if (Object.keys(l).length >= 5 && "EXTERNAL" === e) {
                    for (let e in l)
                        if (null == d[t] || null == d[t][e]) {
                            delete c[t][e], delete l[e];
                            break;
                        }
                }
                return Object.keys(l).length;
            })(a, l) >= 5
        )
            return;
        let u = null != (t = c[l]) ? t : {},
            h = (null != (n = d[l]) ? n : {})[s],
            m = u[s];
        ("HOVER" !== a || null == m) &&
            ("HOVER" === m &&
                "EXTERNAL" === a &&
                null != h &&
                ("function" == typeof h.destroy && h.destroy(), null == (i = d[l]) || delete i[s], (m = void 0)),
            null == m &&
                (null != c[l]
                    ? (c[l][s] = a)
                    : (c[l] = {
                          [s]: a,
                      })));
    },
    BURST_REACTION_ANIMATION_ADD: (e) => {
        let { channelId: t, messageId: n, emoji: i, animation: l } = e,
            r = p(n, i);
        null == d[t] && (d[t] = {}), (d[t][r] = l);
    },
    BURST_REACTION_PICKER_ANIMATION_ADD: (e) => {
        let { messageId: t, emojiName: n, emojiId: i, startPosition: l } = e;
        u[
            ""
                .concat(t, ":")
                .concat(n, ":")
                .concat(null != i ? i : "")
        ] = l;
    },
    BURST_REACTION_PICKER_ANIMATION_CLEAR: (e) => {
        let { messageId: t, emojiName: n, emojiId: i } = e;
        delete u[
            ""
                .concat(t, ":")
                .concat(n, ":")
                .concat(null != i ? i : "")
        ];
    },
});
