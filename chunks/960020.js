n.d(t, {
    I: function () {
        return i;
    }
}),
    n(47120);
var i,
    o,
    a,
    l,
    s,
    r,
    c = n(442837),
    d = n(570140);
((a = i || (i = {})).HOVER = 'HOVER'), (a.EXTERNAL = 'EXTERNAL'), (a.RANDOM = 'RANDOM');
let u = {},
    h = {},
    m = {},
    p = (e, t) => {
        let n = null != t.id ? t.id : t.name;
        return ''.concat(e, ':').concat(n);
    },
    f = (e, t) => {
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
            Object.entries(null !== (n = h[t]) && void 0 !== n ? n : {}).filter((e) => {
                let [, t] = e;
                return t === i;
            })
        );
        if (Object.keys(o).length >= 5 && 'EXTERNAL' === e) {
            for (let e in o)
                if (null == m[t] || null == m[t][e]) {
                    delete h[t][e], delete o[e];
                    break;
                }
        }
        return Object.keys(o).length;
    };
class g extends (o = c.ZP.Store) {
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
        return null === (i = h[e]) || void 0 === i ? void 0 : i[o];
    }
}
(r = 'BurstReactionEffectsStore'),
    (s = 'displayName') in (l = g)
        ? Object.defineProperty(l, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[s] = r),
    (t.Z = new g(d.Z, {
        BURST_REACTION_EFFECT_CLEAR: (e) => {
            var t;
            let { channelId: n, messageId: i, emoji: o } = e,
                a = p(i, o);
            null === (t = h[n]) || void 0 === t || delete t[a];
        },
        BURST_REACTION_EFFECT_PLAY: (e) => {
            var t, n, i;
            let { channelId: o, messageId: a, emoji: l, key: s } = e,
                r = p(a, l);
            if (f(s, o) >= 5) return;
            let c = null !== (t = h[o]) && void 0 !== t ? t : {},
                d = (null !== (n = m[o]) && void 0 !== n ? n : {})[r],
                u = c[r];
            if ('HOVER' !== s || null == u) {
                'HOVER' === u && 'EXTERNAL' === s && null != d && ('function' == typeof d.destroy && d.destroy(), null === (i = m[o]) || void 0 === i || delete i[r], (u = void 0));
                null == u && (null != h[o] ? (h[o][r] = s) : (h[o] = { [r]: s }));
            }
        },
        BURST_REACTION_ANIMATION_ADD: (e) => {
            let { channelId: t, messageId: n, emoji: i, animation: o } = e,
                a = p(n, i);
            null == m[t] && (m[t] = {}), (m[t][a] = o);
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
    }));
