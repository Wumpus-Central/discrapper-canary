n.d(t, { Z: () => S }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(239091),
    c = n(607070),
    d = n(339085),
    f = n(906411),
    _ = n(633302),
    p = n(691251),
    h = n(536442),
    m = n(912893),
    g = n(430824),
    E = n(358085),
    v = n(288406),
    y = n(388032),
    I = n(538891);
let b = (e, t) => ''.concat(e, ':').concat(t),
    T = r.forwardRef(function (e, t) {
        let { emoji: n, isFavorite: r, isLargeSize: a, isMediumSize: u, isInspected: c, isDisabled: d, showPulse: _, columnIndex: h, rowIndex: m, size: E, surrogateCodePoint: b, allowAnimatedEmoji: T, selectedItemClassName: S, inNitroLockedSection: A, ...N } = e,
            C = (0, o.e7)([g.Z], () => (n.type === f.B.GUILD ? g.Z.getGuild(n.guildId) : void 0), [n]),
            R = () => {
                let e = n.allNamesString;
                return ((null == C ? void 0 : C.name) != null &&
                    (e = y.intl.formatToPlainString(y.t['nXv4/P'], {
                        names: e,
                        guildName: C.name
                    })),
                r)
                    ? y.intl.formatToPlainString(y.t['9FI9Z2'], { names: e })
                    : e;
            },
            O = d && !A;
        return (0, i.jsx)(l.tEY, {
            children: (0, i.jsx)('button', {
                ...N,
                className: s()(I.emojiItem, {
                    [I.emojiItemLarge]: a,
                    [I.emojiItemMedium]: u,
                    [I.emojiItemSelected]: c,
                    [null != S ? S : '']: c,
                    [I.showPulse]: _
                }),
                'data-type': p.S.EMOJI,
                'data-id': n.id,
                'data-name': n.name,
                'data-surrogates': 'surrogates' in n ? n.surrogates : null,
                'data-animated': n.animated ? 'true' : null,
                ref: t,
                children: (0, i.jsx)(v.Z, {
                    'aria-label': R(),
                    columnIndex: h,
                    rowIndex: m,
                    emoji: n,
                    size: E,
                    surrogateCodePoint: b,
                    allowAnimatedEmoji: T,
                    isLocked: O
                })
            })
        });
    });
function S(e) {
    let { descriptor: t, emojiItemKey: a, isInspected: s, rowIndex: f, channelGuildId: p, onInspect: g, onSelect: v, isScrolling: I, isUsingKeyboardNavigation: S, showEmojiFavoriteTooltip: A, surrogateCodePoint: N, selectedItemClassName: C, getEmojiItemProps: R, isMediumSize: O, isLargeSize: D, pulseItemKey: x, allowAnimatedEmoji: L, setPulseItemKey: P, messageId: w, isBurstReaction: M, rowPosition: k, inNitroLockedSection: U } = e,
        [G, B] = r.useState(''),
        Z = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        F = (0, o.e7)([d.ZP], () => d.ZP.getDisambiguatedEmojiContext(p), [p]),
        V = r.useRef(null),
        { emoji: j, size: H, isDisabled: Y, columnIndex: W } = t,
        K = (e) => {
            if ((e.stopPropagation(), I.current || S.current)) return;
            let n = e.altKey;
            n && !d.ZP.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(j) && P(a),
                (0, h.Kw)(h.v6.FAVORITE_EMOJI_TOOLTIP),
                v(t, {
                    isFinalSelection: !e.shiftKey,
                    toggleFavorite: n
                });
        },
        z = () => {
            I.current || S.current || g(t);
        },
        q = (e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await n.e('39010').then(n.bind(n, 269254));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        },
        Q = function () {
            var e;
            let { onMouseEnter: t, onMouseLeave: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { ref: o, tabIndex: l, onFocus: u, ...c } = null !== (e = R(W, f)) && void 0 !== e ? e : {};
            return (0, r.createElement)(
                'li',
                {
                    ...c,
                    key: a,
                    ref: V
                },
                G !== b(W, f) &&
                    (0, i.jsx)(T, {
                        ref: o,
                        emoji: j,
                        isFavorite: F.isFavoriteEmojiWithoutFetchingLatest(j),
                        isLargeSize: D,
                        isMediumSize: O,
                        isInspected: s,
                        isDisabled: Y,
                        showPulse: x === a,
                        allowAnimatedEmoji: L,
                        onFocus: null != u ? u : z,
                        onMouseMove: z,
                        onMouseEnter: t,
                        onMouseLeave: n,
                        onClick: (e) => {
                            if (null != V.current && null != k && null != w && !e.shiftKey && null != j.name && M && !Z && L) {
                                let e = null == j.id ? _.ZP.convertNameToSurrogate(j.name) : j.name,
                                    t = V.current.getBoundingClientRect();
                                (t.x = k.x + (W + 1) * H), B(b(W, f)), (0, m.U)(w, e, j.id, t);
                            }
                            K(e);
                        },
                        onContextMenu: q,
                        tabIndex: l,
                        columnIndex: W,
                        rowIndex: f,
                        size: H,
                        surrogateCodePoint: N,
                        selectedItemClassName: C,
                        inNitroLockedSection: U
                    })
            );
        };
    return A
        ? (0, i.jsx)(
              l.ua7,
              {
                  text: y.intl.formatToPlainString(y.t.glqNsb, { key: (0, E.isMac)() ? 'Opt' : 'Alt' }),
                  position: 'top',
                  delay: 200,
                  children: (e) => Q(e)
              },
              a
          )
        : Q();
}
