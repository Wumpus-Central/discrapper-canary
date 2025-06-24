n.d(t, {
    I: () => c,
    Z: () => g
}),
    n(388685),
    n(467055);
var i,
    o,
    l,
    r,
    a = n(442837),
    s = n(570140),
    c = (((o = {}).HOVER = 'HOVER'), (o.EXTERNAL = 'EXTERNAL'), (o.RANDOM = 'RANDOM'), o);
let u = {},
    d = {},
    h = {},
    p = (e, t) => {
        let n = null != t.id ? t.id : t.name;
        return ''.concat(e, ':').concat(n);
    },
    m = (e, t) => {
        var n;
        let i;
        switch (e) {
            case 'HOVER':
                i = 'HOVER';
                break;
            case 'RANDOM':
                i = 'RANDOM';
                break;
            default:
                i = 'EXTERNAL';
        }
        let o = Object.fromEntries(
            Object.entries(null != (n = d[t]) ? n : {}).filter((e) => {
                let [, t] = e;
                return t === i;
            })
        );
        if (Object.keys(o).length >= 5 && 'EXTERNAL' === e) {
            for (let e in o)
                if (null == h[t] || null == h[t][e]) {
                    delete d[t][e], delete o[e];
                    break;
                }
        }
        return Object.keys(o).length;
    };
class f extends (i = a.ZP.Store) {
    getReactionPickerAnimation(e, t, n) {
        return u[
            ''
                .concat(e, ':')
                .concat(t, ':')
                .concat(null != n ? n : '')
        ];
    }
    getEffectForEmojiId(e, t, n) {
        var i;
        let o = p(t, n);
        return null == (i = d[e]) ? void 0 : i[o];
    }
}
(r = 'BurstReactionEffectsStore'),
    (l = 'displayName') in f
        ? Object.defineProperty(f, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[l] = r);
let g = new f(s.Z, {
    BURST_REACTION_EFFECT_CLEAR: (e) => {
        var t;
        let { channelId: n, messageId: i, emoji: o } = e,
            l = p(i, o);
        null == (t = d[n]) || delete t[l];
    },
    BURST_REACTION_EFFECT_PLAY: (e) => {
        var t, n, i;
        let { channelId: o, messageId: l, emoji: r, key: a } = e,
            s = p(l, r);
        if (m(a, o) >= 5) return;
        let c = null != (t = d[o]) ? t : {},
            u = (null != (n = h[o]) ? n : {})[s],
            f = c[s];
        ('HOVER' !== a || null == f) && ('HOVER' === f && 'EXTERNAL' === a && null != u && ('function' == typeof u.destroy && u.destroy(), null == (i = h[o]) || delete i[s], (f = void 0)), null == f && (null != d[o] ? (d[o][s] = a) : (d[o] = { [s]: a })));
    },
    BURST_REACTION_ANIMATION_ADD: (e) => {
        let { channelId: t, messageId: n, emoji: i, animation: o } = e,
            l = p(n, i);
        null == h[t] && (h[t] = {}), (h[t][l] = o);
    },
    BURST_REACTION_PICKER_ANIMATION_ADD: (e) => {
        let { messageId: t, emojiName: n, emojiId: i, startPosition: o } = e;
        u[
            ''
                .concat(t, ':')
                .concat(n, ':')
                .concat(null != i ? i : '')
        ] = o;
    },
    BURST_REACTION_PICKER_ANIMATION_CLEAR: (e) => {
        let { messageId: t, emojiName: n, emojiId: i } = e;
        delete u[
            ''
                .concat(t, ':')
                .concat(n, ':')
                .concat(null != i ? i : '')
        ];
    }
});
