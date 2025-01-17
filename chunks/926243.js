r.d(n, {
    Z: function () {
        return N;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(442837),
    c = r(481060),
    d = r(239091),
    f = r(607070),
    _ = r(339085),
    h = r(906411),
    p = r(633302),
    m = r(691251),
    g = r(536442),
    E = r(912893),
    v = r(430824),
    I = r(358085),
    T = r(288406),
    b = r(388032),
    y = r(538891);
let S = (e, n) => ''.concat(e, ':').concat(n),
    A = s.forwardRef(function (e, n) {
        let { emoji: r, isFavorite: i, isLargeSize: s, isMediumSize: o, isInspected: d, isDisabled: f, showPulse: _, columnIndex: p, rowIndex: g, size: E, surrogateCodePoint: I, allowAnimatedEmoji: S, selectedItemClassName: A, inNitroLockedSection: N, ...C } = e,
            R = (0, u.e7)([v.Z], () => (r.type === h.B.GUILD ? v.Z.getGuild(r.guildId) : void 0), [r]),
            O = () => {
                let e = r.allNamesString;
                return ((null == R ? void 0 : R.name) != null &&
                    (e = b.intl.formatToPlainString(b.t['nXv4/P'], {
                        names: e,
                        guildName: R.name
                    })),
                i)
                    ? b.intl.formatToPlainString(b.t['9FI9Z2'], { names: e })
                    : e;
            },
            D = f && !N;
        return (0, a.jsx)(c.FocusRing, {
            children: (0, a.jsx)('button', {
                ...C,
                className: l()(y.emojiItem, {
                    [y.emojiItemLarge]: s,
                    [y.emojiItemMedium]: o,
                    [y.emojiItemSelected]: d,
                    [null != A ? A : '']: d,
                    [y.showPulse]: _
                }),
                'data-type': m.S.EMOJI,
                'data-id': r.id,
                'data-name': r.name,
                'data-surrogates': 'surrogates' in r ? r.surrogates : null,
                'data-animated': r.animated ? 'true' : null,
                ref: n,
                children: (0, a.jsx)(T.Z, {
                    'aria-label': O(),
                    columnIndex: p,
                    rowIndex: g,
                    emoji: r,
                    size: E,
                    surrogateCodePoint: I,
                    allowAnimatedEmoji: S,
                    isLocked: D
                })
            })
        });
    });
function N(e) {
    let { descriptor: n, emojiItemKey: i, isInspected: o, rowIndex: l, channelGuildId: h, onInspect: m, onSelect: v, isScrolling: T, isUsingKeyboardNavigation: y, showEmojiFavoriteTooltip: N, surrogateCodePoint: C, selectedItemClassName: R, getEmojiItemProps: O, isMediumSize: D, isLargeSize: L, pulseItemKey: x, allowAnimatedEmoji: w, setPulseItemKey: P, messageId: M, isBurstReaction: k, rowPosition: U, inNitroLockedSection: B } = e,
        [G, Z] = s.useState(''),
        F = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
        V = (0, u.e7)([_.ZP], () => _.ZP.getDisambiguatedEmojiContext(h), [h]),
        j = s.useRef(null),
        { emoji: H, size: Y, isDisabled: W, columnIndex: K } = n,
        z = (e) => {
            if ((e.stopPropagation(), T.current || y.current)) return;
            let r = e.altKey;
            r && !_.ZP.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(H) && P(i),
                (0, g.Kw)(g.v6.FAVORITE_EMOJI_TOOLTIP),
                v(n, {
                    isFinalSelection: !e.shiftKey,
                    toggleFavorite: r
                });
        },
        q = () => {
            !T.current && !y.current && m(n);
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
            return (0, s.createElement)(
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
                        isInspected: o,
                        isDisabled: W,
                        showPulse: x === i,
                        allowAnimatedEmoji: w,
                        onFocus: null != d ? d : q,
                        onMouseMove: q,
                        onMouseEnter: n,
                        onMouseLeave: r,
                        onClick: (e) => {
                            if (null != j.current && null != U && null != M && !e.shiftKey && null != H.name && k && !F && w) {
                                let e = null == H.id ? p.ZP.convertNameToSurrogate(H.name) : H.name,
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
                        surrogateCodePoint: C,
                        selectedItemClassName: R,
                        inNitroLockedSection: B
                    })
            );
        };
    return N
        ? (0, a.jsx)(
              c.Tooltip,
              {
                  text: b.intl.formatToPlainString(b.t.glqNsb, { key: (0, I.isMac)() ? 'Opt' : 'Alt' }),
                  position: 'top',
                  delay: 200,
                  children: (e) => X(e)
              },
              i
          )
        : X();
}
