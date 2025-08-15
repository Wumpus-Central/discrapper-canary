n.d(t, {
    I: () => s,
    Z: () => m,
}),
    n(388685),
    n(467055);
var i,
    r,
    l,
    o = n(442837),
    a = n(570140),
    s = (((r = {}).HOVER = "HOVER"), (r.EXTERNAL = "EXTERNAL"), (r.RANDOM = "RANDOM"), r);
let c = {},
    u = {},
    d = {},
    h = (e, t) => {
        let n = null != t.id ? t.id : t.name;
        return "".concat(e, ":").concat(n);
    };
class p extends (i = o.ZP.Store) {
    getReactionPickerAnimation(e, t, n) {
        return c[
            ""
                .concat(e, ":")
                .concat(t, ":")
                .concat(null != n ? n : "")
        ];
    }
    getEffectForEmojiId(e, t, n) {
        var i;
        let r = h(t, n);
        return null == (i = u[e]) ? void 0 : i[r];
    }
}
(l = "displayName") in p
    ? Object.defineProperty(p, l, {
          value: "BurstReactionEffectsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (p[l] = "BurstReactionEffectsStore");
let m = new p(a.Z, {
    BURST_REACTION_EFFECT_CLEAR: (e) => {
        var t;
        let { channelId: n, messageId: i, emoji: r } = e,
            l = h(i, r);
        null == (t = u[n]) || delete t[l];
    },
    BURST_REACTION_EFFECT_PLAY: (e) => {
        var t, n, i;
        let { channelId: r, messageId: l, emoji: o, key: a } = e,
            s = h(l, o);
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
                let r = Object.fromEntries(
                    Object.entries(null != (n = u[t]) ? n : {}).filter((e) => {
                        let [, t] = e;
                        return t === i;
                    }),
                );
                if (Object.keys(r).length >= 5 && "EXTERNAL" === e) {
                    for (let e in r)
                        if (null == d[t] || null == d[t][e]) {
                            delete u[t][e], delete r[e];
                            break;
                        }
                }
                return Object.keys(r).length;
            })(a, r) >= 5
        )
            return;
        let c = null != (t = u[r]) ? t : {},
            p = (null != (n = d[r]) ? n : {})[s],
            m = c[s];
        ("HOVER" !== a || null == m) &&
            ("HOVER" === m &&
                "EXTERNAL" === a &&
                null != p &&
                ("function" == typeof p.destroy && p.destroy(), null == (i = d[r]) || delete i[s], (m = void 0)),
            null == m && (null != u[r] ? (u[r][s] = a) : (u[r] = { [s]: a })));
    },
    BURST_REACTION_ANIMATION_ADD: (e) => {
        let { channelId: t, messageId: n, emoji: i, animation: r } = e,
            l = h(n, i);
        null == d[t] && (d[t] = {}), (d[t][l] = r);
    },
    BURST_REACTION_PICKER_ANIMATION_ADD: (e) => {
        let { messageId: t, emojiName: n, emojiId: i, startPosition: r } = e;
        c[
            ""
                .concat(t, ":")
                .concat(n, ":")
                .concat(null != i ? i : "")
        ] = r;
    },
    BURST_REACTION_PICKER_ANIMATION_CLEAR: (e) => {
        let { messageId: t, emojiName: n, emojiId: i } = e;
        delete c[
            ""
                .concat(t, ":")
                .concat(n, ":")
                .concat(null != i ? i : "")
        ];
    },
});
