n.d(t, {
    I: () => c,
    Z: () => g
}),
    n(388685),
    n(467055);
var i,
    o,
    r,
    a,
    s = n(442837),
    l = n(570140),
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
class f extends (i = s.ZP.Store) {
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
(a = 'BurstReactionEffectsStore'),
    (r = 'displayName') in f
        ? Object.defineProperty(f, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[r] = a);
let g = new f(l.Z, {
    BURST_REACTION_EFFECT_CLEAR: (e) => {
        var t;
        let { channelId: n, messageId: i, emoji: o } = e,
            r = p(i, o);
        null == (t = d[n]) || delete t[r];
    },
    BURST_REACTION_EFFECT_PLAY: (e) => {
        var t, n, i;
        let { channelId: o, messageId: r, emoji: a, key: s } = e,
            l = p(r, a);
        if (m(s, o) >= 5) return;
        let c = null != (t = d[o]) ? t : {},
            u = (null != (n = h[o]) ? n : {})[l],
            f = c[l];
        ('HOVER' !== s || null == f) && ('HOVER' === f && 'EXTERNAL' === s && null != u && ('function' == typeof u.destroy && u.destroy(), null == (i = h[o]) || delete i[l], (f = void 0)), null == f && (null != d[o] ? (d[o][l] = s) : (d[o] = { [l]: s })));
    },
    BURST_REACTION_ANIMATION_ADD: (e) => {
        let { channelId: t, messageId: n, emoji: i, animation: o } = e,
            r = p(n, i);
        null == h[t] && (h[t] = {}), (h[t][r] = o);
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
