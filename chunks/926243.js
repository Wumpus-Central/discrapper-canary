n.d(t, { Z: () => P }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(239091),
    u = n(607070),
    d = n(339085),
    f = n(906411),
    _ = n(633302),
    p = n(691251),
    h = n(536442),
    m = n(912893),
    g = n(430824),
    E = n(358085),
    b = n(288406),
    y = n(388032),
    O = n(139642);
function v(e, t, n) {
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
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let C = (e, t) => ''.concat(e, ':').concat(t),
    R = i.forwardRef(function (e, t) {
        var { emoji: n, isFavorite: i, isLargeSize: o, isMediumSize: c, isInspected: u, isDisabled: d, showPulse: _, columnIndex: h, rowIndex: m, size: E, surrogateCodePoint: v, allowAnimatedEmoji: S, selectedItemClassName: N, inNitroLockedSection: C } = e,
            R = A(e, ['emoji', 'isFavorite', 'isLargeSize', 'isMediumSize', 'isInspected', 'isDisabled', 'showPulse', 'columnIndex', 'rowIndex', 'size', 'surrogateCodePoint', 'allowAnimatedEmoji', 'selectedItemClassName', 'inNitroLockedSection']);
        let P = (0, s.e7)([g.Z], () => (n.type === f.B.GUILD ? g.Z.getGuild(n.guildId) : void 0), [n]),
            w = () => {
                let e = n.allNamesString;
                return ((null == P ? void 0 : P.name) != null &&
                    (e = y.intl.formatToPlainString(y.t['nXv4/P'], {
                        names: e,
                        guildName: P.name
                    })),
                i)
                    ? y.intl.formatToPlainString(y.t['9FI9Z2'], { names: e })
                    : e;
            },
            D = d && !C;
        return (0, r.jsx)(l.tEY, {
            children: (0, r.jsx)(
                'button',
                T(I({}, R), {
                    className: a()(O.emojiItem, {
                        [O.emojiItemLarge]: o,
                        [O.emojiItemMedium]: c,
                        [O.emojiItemSelected]: u,
                        [null != N ? N : '']: u,
                        [O.showPulse]: _
                    }),
                    'data-type': p.S.EMOJI,
                    'data-id': n.id,
                    'data-name': n.name,
                    'data-surrogates': 'surrogates' in n ? n.surrogates : null,
                    'data-animated': n.animated ? 'true' : null,
                    ref: t,
                    children: (0, r.jsx)(b.Z, {
                        'aria-label': w(),
                        columnIndex: h,
                        rowIndex: m,
                        emoji: n,
                        size: E,
                        surrogateCodePoint: v,
                        allowAnimatedEmoji: S,
                        isLocked: D
                    })
                })
            )
        });
    });
function P(e) {
    let { descriptor: t, emojiItemKey: o, isInspected: a, rowIndex: f, channelGuildId: p, onInspect: g, onSelect: b, isScrolling: O, isUsingKeyboardNavigation: v, showEmojiFavoriteTooltip: S, surrogateCodePoint: N, selectedItemClassName: P, getEmojiItemProps: w, isMediumSize: D, isLargeSize: L, pulseItemKey: x, allowAnimatedEmoji: M, setPulseItemKey: k, messageId: j, isBurstReaction: U, rowPosition: G, inNitroLockedSection: B } = e,
        [V, F] = i.useState(''),
        Z = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        H = (0, s.e7)([d.ZP], () => d.ZP.getDisambiguatedEmojiContext(p), [p]),
        Y = i.useRef(null),
        { emoji: W, size: K, isDisabled: z, columnIndex: q } = t,
        Q = (e) => {
            if ((e.stopPropagation(), O.current || v.current)) return;
            let n = e.altKey;
            n && !d.ZP.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(W) && k(o),
                (0, h.Kw)(h.v6.FAVORITE_EMOJI_TOOLTIP),
                b(t, {
                    isFinalSelection: !e.shiftKey,
                    toggleFavorite: n
                });
        },
        X = () => {
            O.current || v.current || g(t);
        },
        J = (e) => {
            (0, c.jW)(e, async () => {
                let { default: e } = await n.e('39010').then(n.bind(n, 269254));
                return (t) => (0, r.jsx)(e, I({}, t));
            });
        },
        $ = function () {
            var e;
            let { onMouseEnter: t, onMouseLeave: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                s = null != (e = w(q, f)) ? e : {},
                { ref: l, tabIndex: c, onFocus: u } = s,
                d = A(s, ['ref', 'tabIndex', 'onFocus']);
            return (0, i.createElement)(
                'li',
                T(I({}, d), {
                    key: o,
                    ref: Y
                }),
                V !== C(q, f) &&
                    (0, r.jsx)(R, {
                        ref: l,
                        emoji: W,
                        isFavorite: H.isFavoriteEmojiWithoutFetchingLatest(W),
                        isLargeSize: L,
                        isMediumSize: D,
                        isInspected: a,
                        isDisabled: z,
                        showPulse: x === o,
                        allowAnimatedEmoji: M,
                        onFocus: null != u ? u : X,
                        onMouseMove: X,
                        onMouseEnter: t,
                        onMouseLeave: n,
                        onClick: (e) => {
                            if (null != Y.current && null != G && null != j && !e.shiftKey && null != W.name && U && !Z && M) {
                                let e = null == W.id ? _.ZP.convertNameToSurrogate(W.name) : W.name,
                                    t = Y.current.getBoundingClientRect();
                                (t.x = G.x + (q + 1) * K), F(C(q, f)), (0, m.U)(j, e, W.id, t);
                            }
                            Q(e);
                        },
                        onContextMenu: J,
                        tabIndex: c,
                        columnIndex: q,
                        rowIndex: f,
                        size: K,
                        surrogateCodePoint: N,
                        selectedItemClassName: P,
                        inNitroLockedSection: B
                    })
            );
        };
    return S
        ? (0, r.jsx)(
              l.ua7,
              {
                  text: y.intl.formatToPlainString(y.t.glqNsb, { key: (0, E.isMac)() ? 'Opt' : 'Alt' }),
                  position: 'top',
                  delay: 200,
                  children: (e) => $(e)
              },
              o
          )
        : $();
}
