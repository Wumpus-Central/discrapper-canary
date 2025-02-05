i.d(t, {
    I: () => c,
    Z: () => f
}),
    i(47120);
var n,
    a,
    o,
    s,
    l = i(442837),
    r = i(570140),
    c = (((a = {}).HOVER = 'HOVER'), (a.EXTERNAL = 'EXTERNAL'), (a.RANDOM = 'RANDOM'), a);
let d = {},
    u = {},
    h = {},
    m = (e, t) => {
        let i = null != t.id ? t.id : t.name;
        return ''.concat(e, ':').concat(i);
    },
    p = (e, t) => {
        var i;
        let n;
        switch (e) {
            case 'HOVER':
                n = 'HOVER';
                break;
            case 'RANDOM':
                n = 'RANDOM';
                break;
            default:
                n = 'EXTERNAL';
        }
        let a = Object.fromEntries(
            Object.entries(null !== (i = u[t]) && void 0 !== i ? i : {}).filter((e) => {
                let [, t] = e;
                return t === n;
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
class g extends (n = l.ZP.Store) {
    getReactionPickerAnimation(e, t, i) {
        return d[
            ''
                .concat(e, ':')
                .concat(t, ':')
                .concat(null != i ? i : '')
        ];
    }
    getEffectForEmojiId(e, t, i) {
        var n;
        let a = m(t, i);
        return null === (n = u[e]) || void 0 === n ? void 0 : n[a];
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
        let { channelId: i, messageId: n, emoji: a } = e,
            o = m(n, a);
        null === (t = u[i]) || void 0 === t || delete t[o];
    },
    BURST_REACTION_EFFECT_PLAY: (e) => {
        var t, i, n;
        let { channelId: a, messageId: o, emoji: s, key: l } = e,
            r = m(o, s);
        if (p(l, a) >= 5) return;
        let c = null !== (t = u[a]) && void 0 !== t ? t : {},
            d = (null !== (i = h[a]) && void 0 !== i ? i : {})[r],
            g = c[r];
        ('HOVER' !== l || null == g) && ('HOVER' === g && 'EXTERNAL' === l && null != d && ('function' == typeof d.destroy && d.destroy(), null === (n = h[a]) || void 0 === n || delete n[r], (g = void 0)), null == g && (null != u[a] ? (u[a][r] = l) : (u[a] = { [r]: l })));
    },
    BURST_REACTION_ANIMATION_ADD: (e) => {
        let { channelId: t, messageId: i, emoji: n, animation: a } = e,
            o = m(i, n);
        null == h[t] && (h[t] = {}), (h[t][o] = a);
    },
    BURST_REACTION_PICKER_ANIMATION_ADD: (e) => {
        let { messageId: t, emojiName: i, emojiId: n, startPosition: a } = e;
        d[
            ''
                .concat(t, ':')
                .concat(i, ':')
                .concat(null != n ? n : '')
        ] = a;
    },
    BURST_REACTION_PICKER_ANIMATION_CLEAR: (e) => {
        let { messageId: t, emojiName: i, emojiId: n } = e;
        delete d[
            ''
                .concat(t, ':')
                .concat(i, ':')
                .concat(null != n ? n : '')
        ];
    }
});
