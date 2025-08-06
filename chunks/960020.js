(n.d(t, {
    I: () => s,
    Z: () => y
}),
    n(388685),
    n(467055));
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var s = (function (e) {
    return ((e.HOVER = 'HOVER'), (e.EXTERNAL = 'EXTERNAL'), (e.RANDOM = 'RANDOM'), e);
})({});
let l = 5,
    c = {},
    u = {},
    d = {},
    f = (e, t) => {
        let n = null != t.id ? t.id : t.name;
        return ''.concat(e, ':').concat(n);
    },
    _ = (e, t) => {
        var n;
        let r;
        switch (e) {
            case 'HOVER':
                r = 'HOVER';
                break;
            case 'RANDOM':
                r = 'RANDOM';
                break;
            default:
                r = 'EXTERNAL';
        }
        let i = Object.fromEntries(
            Object.entries(null != (n = u[t]) ? n : {}).filter((e) => {
                let [, t] = e;
                return t === r;
            })
        );
        if (Object.keys(i).length >= l && 'EXTERNAL' === e) {
            for (let e in i)
                if (null == d[t] || null == d[t][e]) {
                    (delete u[t][e], delete i[e]);
                    break;
                }
        }
        return Object.keys(i).length;
    },
    p = (e) => {
        var t, n, r;
        let { channelId: i, messageId: o, emoji: a, key: s } = e,
            c = f(o, a);
        if (_(s, i) >= l) return;
        let p = null != (t = u[i]) ? t : {},
            h = (null != (n = d[i]) ? n : {})[c],
            m = p[c];
        ('HOVER' !== s || null == m) && ('HOVER' === m && 'EXTERNAL' === s && null != h && ('function' == typeof h.destroy && h.destroy(), null == (r = d[i]) || delete r[c], (m = void 0)), null == m && (null != u[i] ? (u[i][c] = s) : (u[i] = { [c]: s })));
    },
    h = (e) => {
        var t;
        let { channelId: n, messageId: r, emoji: i } = e,
            o = f(r, i);
        null == (t = u[n]) || delete t[o];
    },
    m = (e) => {
        let { channelId: t, messageId: n, emoji: r, animation: i } = e,
            o = f(n, r);
        (null == d[t] && (d[t] = {}), (d[t][o] = i));
    },
    g = (e) => {
        let { messageId: t, emojiName: n, emojiId: r, startPosition: i } = e;
        c[
            ''
                .concat(t, ':')
                .concat(n, ':')
                .concat(null != r ? r : '')
        ] = i;
    },
    E = (e) => {
        let { messageId: t, emojiName: n, emojiId: r } = e;
        delete c[
            ''
                .concat(t, ':')
                .concat(n, ':')
                .concat(null != r ? r : '')
        ];
    };
class b extends (r = i.ZP.Store) {
    getReactionPickerAnimation(e, t, n) {
        return c[
            ''
                .concat(e, ':')
                .concat(t, ':')
                .concat(null != n ? n : '')
        ];
    }
    getEffectForEmojiId(e, t, n) {
        var r;
        let i = f(t, n);
        return null == (r = u[e]) ? void 0 : r[i];
    }
}
a(b, 'displayName', 'BurstReactionEffectsStore');
let y = new b(o.Z, {
    BURST_REACTION_EFFECT_CLEAR: h,
    BURST_REACTION_EFFECT_PLAY: p,
    BURST_REACTION_ANIMATION_ADD: m,
    BURST_REACTION_PICKER_ANIMATION_ADD: g,
    BURST_REACTION_PICKER_ANIMATION_CLEAR: E
});
