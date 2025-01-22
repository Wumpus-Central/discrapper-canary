r.d(n, {
    Z: function () {
        return C;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(442837),
    c = r(481060),
    d = r(239091),
    f = r(607070),
    p = r(339085),
    h = r(906411),
    _ = r(633302),
    m = r(691251),
    g = r(536442),
    E = r(912893),
    v = r(430824),
    y = r(358085),
    b = r(288406),
    I = r(388032),
    T = r(538891);
let S = (e, n) => ''.concat(e, ':').concat(n),
    A = o.forwardRef(function (e, n) {
        let { emoji: r, isFavorite: i, isLargeSize: o, isMediumSize: s, isInspected: d, isDisabled: f, showPulse: p, columnIndex: _, rowIndex: g, size: E, surrogateCodePoint: y, allowAnimatedEmoji: S, selectedItemClassName: A, inNitroLockedSection: C, ...N } = e,
            R = (0, u.e7)([v.Z], () => (r.type === h.B.GUILD ? v.Z.getGuild(r.guildId) : void 0), [r]),
            O = () => {
                let e = r.allNamesString;
                return ((null == R ? void 0 : R.name) != null &&
                    (e = I.intl.formatToPlainString(I.t['nXv4/P'], {
                        names: e,
                        guildName: R.name
                    })),
                i)
                    ? I.intl.formatToPlainString(I.t['9FI9Z2'], { names: e })
                    : e;
            },
            D = f && !C;
        return (0, a.jsx)(c.FocusRing, {
            children: (0, a.jsx)('button', {
                ...N,
                className: l()(T.emojiItem, {
                    [T.emojiItemLarge]: o,
                    [T.emojiItemMedium]: s,
                    [T.emojiItemSelected]: d,
                    [null != A ? A : '']: d,
                    [T.showPulse]: p
                }),
                'data-type': m.S.EMOJI,
                'data-id': r.id,
                'data-name': r.name,
                'data-surrogates': 'surrogates' in r ? r.surrogates : null,
                'data-animated': r.animated ? 'true' : null,
                ref: n,
                children: (0, a.jsx)(b.Z, {
                    'aria-label': O(),
                    columnIndex: _,
                    rowIndex: g,
                    emoji: r,
                    size: E,
                    surrogateCodePoint: y,
                    allowAnimatedEmoji: S,
                    isLocked: D
                })
            })
        });
    });
function C(e) {
    let { descriptor: n, emojiItemKey: i, isInspected: s, rowIndex: l, channelGuildId: h, onInspect: m, onSelect: v, isScrolling: b, isUsingKeyboardNavigation: T, showEmojiFavoriteTooltip: C, surrogateCodePoint: N, selectedItemClassName: R, getEmojiItemProps: O, isMediumSize: D, isLargeSize: L, pulseItemKey: x, allowAnimatedEmoji: w, setPulseItemKey: P, messageId: M, isBurstReaction: k, rowPosition: U, inNitroLockedSection: B } = e,
        [G, Z] = o.useState(''),
        F = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
        V = (0, u.e7)([p.ZP], () => p.ZP.getDisambiguatedEmojiContext(h), [h]),
        j = o.useRef(null),
        { emoji: H, size: Y, isDisabled: W, columnIndex: K } = n,
        z = (e) => {
            if ((e.stopPropagation(), b.current || T.current)) return;
            let r = e.altKey;
            r && !p.ZP.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(H) && P(i),
                (0, g.Kw)(g.v6.FAVORITE_EMOJI_TOOLTIP),
                v(n, {
                    isFinalSelection: !e.shiftKey,
                    toggleFavorite: r
                });
        },
        q = () => {
            !b.current && !T.current && m(n);
        },
        Q = (e) => {
            (0, d.jW)(e, async () => {
                let { default: e } = await r.e('39010').then(r.bind(r, 269254));
                return (n) => (0, a.jsx)(e, { ...n });
            });
        },
        X = function () {
            var e;
            let { onMouseEnter: n, onMouseLeave: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { ref: u, tabIndex: c, onFocus: d, ...f } = null !== (e = O(K, l)) && void 0 !== e ? e : {};
            return (0, o.createElement)(
                'li',
                {
                    ...f,
                    key: i,
                    ref: j
                },
                G !== S(K, l) &&
                    (0, a.jsx)(A, {
                        ref: u,
                        emoji: H,
                        isFavorite: V.isFavoriteEmojiWithoutFetchingLatest(H),
                        isLargeSize: L,
                        isMediumSize: D,
                        isInspected: s,
                        isDisabled: W,
                        showPulse: x === i,
                        allowAnimatedEmoji: w,
                        onFocus: null != d ? d : q,
                        onMouseMove: q,
                        onMouseEnter: n,
                        onMouseLeave: r,
                        onClick: (e) => {
                            if (null != j.current && null != U && null != M && !e.shiftKey && null != H.name && k && !F && w) {
                                let e = null == H.id ? _.ZP.convertNameToSurrogate(H.name) : H.name,
                                    n = j.current.getBoundingClientRect();
                                (n.x = U.x + (K + 1) * Y), Z(S(K, l)), (0, E.U)(M, e, H.id, n);
                            }
                            z(e);
                        },
                        onContextMenu: Q,
                        tabIndex: c,
                        columnIndex: K,
                        rowIndex: l,
                        size: Y,
                        surrogateCodePoint: N,
                        selectedItemClassName: R,
                        inNitroLockedSection: B
                    })
            );
        };
    return C
        ? (0, a.jsx)(
              c.Tooltip,
              {
                  text: I.intl.formatToPlainString(I.t.glqNsb, { key: (0, y.isMac)() ? 'Opt' : 'Alt' }),
                  position: 'top',
                  delay: 200,
                  children: (e) => X(e)
              },
              i
          )
        : X();
}
