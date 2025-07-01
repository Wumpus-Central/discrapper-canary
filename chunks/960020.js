(n.d(t, {
    I: () => c,
    Z: () => g
}),
    n(388685),
    n(467055));
var i,
    r,
    l,
    o,
    a = n(442837),
    s = n(570140),
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
                    (delete d[t][e], delete r[e]);
                    break;
                }
        }
        return Object.keys(r).length;
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
        let r = p(t, n);
        return null == (i = d[e]) ? void 0 : i[r];
    }
}
((o = 'BurstReactionEffectsStore'),
    (l = 'displayName') in f
        ? Object.defineProperty(f, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[l] = o));
let g = new f(s.Z, {
    BURST_REACTION_EFFECT_CLEAR: (e) => {
        var t;
        let { channelId: n, messageId: i, emoji: r } = e,
            l = p(i, r);
        null == (t = d[n]) || delete t[l];
    },
    BURST_REACTION_EFFECT_PLAY: (e) => {
        var t, n, i;
        let { channelId: r, messageId: l, emoji: o, key: a } = e,
            s = p(l, o);
        if (m(a, r) >= 5) return;
        let c = null != (t = d[r]) ? t : {},
            u = (null != (n = h[r]) ? n : {})[s],
            f = c[s];
        ('HOVER' !== a || null == f) && ('HOVER' === f && 'EXTERNAL' === a && null != u && ('function' == typeof u.destroy && u.destroy(), null == (i = h[r]) || delete i[s], (f = void 0)), null == f && (null != d[r] ? (d[r][s] = a) : (d[r] = { [s]: a })));
    },
    BURST_REACTION_ANIMATION_ADD: (e) => {
        let { channelId: t, messageId: n, emoji: i, animation: r } = e,
            l = p(n, i);
        (null == h[t] && (h[t] = {}), (h[t][l] = r));
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
