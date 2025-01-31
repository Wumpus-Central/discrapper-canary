n.d(t, {
    I: () => c,
    Z: () => f
}),
    n(47120);
var i,
    a,
    o,
    s,
    l = n(442837),
    r = n(570140),
    c = (((a = {}).HOVER = 'HOVER'), (a.EXTERNAL = 'EXTERNAL'), (a.RANDOM = 'RANDOM'), a);
let d = {},
    u = {},
    h = {},
    m = (e, t) => {
        let n = null != t.id ? t.id : t.name;
        return ''.concat(e, ':').concat(n);
    },
    p = (e, t) => {
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
        let a = Object.fromEntries(
            Object.entries(null !== (n = u[t]) && void 0 !== n ? n : {}).filter((e) => {
                let [, t] = e;
                return t === i;
            })
        );
        if (Object.keys(a).length >= 5 && 'EXTERNAL' === e) {
            for (let e in a)
                if (null == h[t] || null == h[t][e]) {
                    delete u[t][e], delete a[e];
                    break;
                }
        }
        return Object.keys(a).length;
    };
class g extends (i = l.ZP.Store) {
    getReactionPickerAnimation(e, t, n) {
        return d[
            ''
                .concat(e, ':')
                .concat(t, ':')
                .concat(null != n ? n : '')
        ];
    }
    getEffectForEmojiId(e, t, n) {
        var i;
        let a = m(t, n);
        return null === (i = u[e]) || void 0 === i ? void 0 : i[a];
    }
}
(s = 'BurstReactionEffectsStore'),
    (o = 'displayName') in g
        ? Object.defineProperty(g, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (g[o] = s);
let f = new g(r.Z, {
    BURST_REACTION_EFFECT_CLEAR: (e) => {
        var t;
        let { channelId: n, messageId: i, emoji: a } = e,
            o = m(i, a);
        null === (t = u[n]) || void 0 === t || delete t[o];
    },
    BURST_REACTION_EFFECT_PLAY: (e) => {
        var t, n, i;
        let { channelId: a, messageId: o, emoji: s, key: l } = e,
            r = m(o, s);
        if (p(l, a) >= 5) return;
        let c = null !== (t = u[a]) && void 0 !== t ? t : {},
            d = (null !== (n = h[a]) && void 0 !== n ? n : {})[r],
            g = c[r];
        ('HOVER' !== l || null == g) && ('HOVER' === g && 'EXTERNAL' === l && null != d && ('function' == typeof d.destroy && d.destroy(), null === (i = h[a]) || void 0 === i || delete i[r], (g = void 0)), null == g && (null != u[a] ? (u[a][r] = l) : (u[a] = { [r]: l })));
    },
    BURST_REACTION_ANIMATION_ADD: (e) => {
        let { channelId: t, messageId: n, emoji: i, animation: a } = e,
            o = m(n, i);
        null == h[t] && (h[t] = {}), (h[t][o] = a);
    },
    BURST_REACTION_PICKER_ANIMATION_ADD: (e) => {
        let { messageId: t, emojiName: n, emojiId: i, startPosition: a } = e;
        d[
            ''
                .concat(t, ':')
                .concat(n, ':')
                .concat(null != i ? i : '')
        ] = a;
    },
    BURST_REACTION_PICKER_ANIMATION_CLEAR: (e) => {
        let { messageId: t, emojiName: n, emojiId: i } = e;
        delete d[
            ''
                .concat(t, ':')
                .concat(n, ':')
                .concat(null != i ? i : '')
        ];
    }
});
