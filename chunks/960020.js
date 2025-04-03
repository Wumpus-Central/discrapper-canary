n.d(t, {
    I: () => c,
    Z: () => g
}),
    n(47120),
    n(977457);
var i,
    r,
    o,
    a,
    s = n(442837),
    l = n(570140),
    c = (((r = {}).HOVER = 'HOVER'), (r.EXTERNAL = 'EXTERNAL'), (r.RANDOM = 'RANDOM'), r);
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
        let r = Object.fromEntries(
            Object.entries(null != (n = d[t]) ? n : {}).filter((e) => {
                let [, t] = e;
                return t === i;
            })
        );
        if (Object.keys(r).length >= 5 && 'EXTERNAL' === e) {
            for (let e in r)
                if (null == h[t] || null == h[t][e]) {
                    delete d[t][e], delete r[e];
                    break;
                }
        }
        return Object.keys(r).length;
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
        let r = p(t, n);
        return null == (i = d[e]) ? void 0 : i[r];
    }
}
(a = 'BurstReactionEffectsStore'),
    (o = 'displayName') in f
        ? Object.defineProperty(f, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[o] = a);
let g = new f(l.Z, {
    BURST_REACTION_EFFECT_CLEAR: (e) => {
        var t;
        let { channelId: n, messageId: i, emoji: r } = e,
            o = p(i, r);
        null == (t = d[n]) || delete t[o];
    },
    BURST_REACTION_EFFECT_PLAY: (e) => {
        var t, n, i;
        let { channelId: r, messageId: o, emoji: a, key: s } = e,
            l = p(o, a);
        if (m(s, r) >= 5) return;
        let c = null != (t = d[r]) ? t : {},
            u = (null != (n = h[r]) ? n : {})[l],
            f = c[l];
        ('HOVER' !== s || null == f) && ('HOVER' === f && 'EXTERNAL' === s && null != u && ('function' == typeof u.destroy && u.destroy(), null == (i = h[r]) || delete i[l], (f = void 0)), null == f && (null != d[r] ? (d[r][l] = s) : (d[r] = { [l]: s })));
    },
    BURST_REACTION_ANIMATION_ADD: (e) => {
        let { channelId: t, messageId: n, emoji: i, animation: r } = e,
            o = p(n, i);
        null == h[t] && (h[t] = {}), (h[t][o] = r);
    },
    BURST_REACTION_PICKER_ANIMATION_ADD: (e) => {
        let { messageId: t, emojiName: n, emojiId: i, startPosition: r } = e;
        u[
            ''
                .concat(t, ':')
                .concat(n, ':')
                .concat(null != i ? i : '')
        ] = r;
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
