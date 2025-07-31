(n.d(t, { q: () => S }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(987209),
    c = n(321051),
    u = n(669079),
    d = n(479446),
    _ = n(646476),
    f = n(981632),
    p = n(96848),
    h = n(703926),
    m = n(474936),
    g = n(388032),
    E = n(651427);
function b(e, t, n) {
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
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            }));
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let S = (e) => {
    let { isShopGift: t, className: n, optionsContainerClassName: a } = e,
        { giftRecipient: b, selectedGiftStyle: O, setSelectedGiftStyle: T, emojiConfetti: S, soundEffect: A, setEmojiConfetti: N, setSoundEffect: C } = (0, l.wD)(),
        [R, P] = i.useState(!1),
        w = i.useRef(null),
        D = (0, s.arW)({ orientation: 'horizontal' }),
        { ref: L } = D,
        x = I(D, ['ref']),
        M = (0, u.MY)(b, t),
        k = M === u.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        j = M !== u.xr.DEFAULT,
        U = (0, _.rK)(),
        { enabled: G } = _.ZP.useExperiment({ location: 'premiumGiftSelect_GiftAnimationOptions' }, { autoTrackExposure: U }),
        B = null;
    j && (B = U && G ? m.kJ : m.QI);
    let V = (e) => {
        null != C && C(null == e ? void 0 : e);
    };
    return (0, r.jsxs)('div', {
        children: [
            j &&
                (0, r.jsxs)('div', {
                    className: o()(E.giftMainAnimation, n),
                    children: [
                        null != O
                            ? (0, r.jsx)(f.Z, {
                                  giftStyle: O,
                                  defaultAnimationState: d.SR.ACTION,
                                  idleAnimationState: d.SR.LOOP,
                                  shouldAnimate: !0,
                                  className: E.animation
                              })
                            : (0, r.jsx)(s.$jN, { className: E.spinner }),
                        k &&
                            (0, r.jsxs)('div', {
                                className: E.soundEmojiContainer,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: E.sound,
                                        children: (0, r.jsx)(c.Z, {
                                            sound: A,
                                            onSelect: V
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        className: E.emoji,
                                        children: (0, r.jsx)(p.Z, {
                                            setEmojiConfetti: N,
                                            emojiConfetti: null == S ? void 0 : S
                                        })
                                    })
                                ]
                            })
                    ]
                }),
            (0, r.jsx)(
                'div',
                v(
                    y(
                        {
                            tabIndex: null != O || R ? void 0 : 0,
                            onFocus: (e) => {
                                var t;
                                e.target === e.currentTarget && (null == (t = w.current) || t.focus());
                            },
                            className: o()(E.giftBoxOptionContainer, a),
                            'aria-label': g.intl.string(g.t.v54NrK),
                            ref: L
                        },
                        x
                    ),
                    {
                        children:
                            null != B &&
                            B.map((e, t) =>
                                (0, r.jsx)(
                                    h.m,
                                    {
                                        isSelected: O === e,
                                        giftStyle: e,
                                        setSelectedGiftStyle: T,
                                        ref: 0 === t ? w : null,
                                        onFocus: () => P(!0),
                                        onBlur: () => P(!1)
                                    },
                                    e
                                )
                            )
                    }
                )
            ),
            (0, r.jsx)('div', { className: E.__invalid_selectPlanDivider })
        ]
    });
};
