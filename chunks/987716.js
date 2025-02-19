n.d(t, { q: () => I }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(987209),
    c = n(321051),
    u = n(669079),
    d = n(479446),
    f = n(646476),
    p = n(599659),
    _ = n(981632),
    h = n(96848),
    m = n(703926),
    g = n(474936),
    E = n(388032),
    v = n(572408);
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function S(e, t) {
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
let I = (e) => {
    let { isShopGift: t, className: n, optionsContainerClassName: o } = e,
        { giftRecipient: b, selectedGiftStyle: O, setSelectedGiftStyle: I, emojiConfetti: T, soundEffect: N, setEmojiConfetti: A, setSoundEffect: C } = (0, l.wD)(),
        [R, P] = i.useState(!1),
        w = i.useRef(null),
        D = (0, s.arW)({ orientation: 'horizontal' }),
        x = (0, u.MY)(b, t),
        L = x === u.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        M = x !== u.xr.DEFAULT,
        k = (0, f.rK)(),
        { enabled: j } = f.ZP.useExperiment({ location: 'premiumGiftSelect_GiftAnimationOptions' }, { autoTrackExposure: k }),
        { enabled: U } = p.O.useExperiment({ location: 'gift card' }),
        G = null;
    M && (G = k && j ? g.kJ : g.QI), U && (G = g.RQ);
    let B = (e) => {
        null != C && C(null == e ? void 0 : e);
    };
    return (0, r.jsxs)('div', {
        children: [
            M &&
                (0, r.jsxs)('div', {
                    className: a()(v.giftMainAnimation, n),
                    children: [
                        null != O
                            ? (0, r.jsx)(_.Z, {
                                  giftStyle: O,
                                  defaultAnimationState: d.SR.ACTION,
                                  idleAnimationState: d.SR.LOOP,
                                  shouldAnimate: !0,
                                  className: v.animation
                              })
                            : (0, r.jsx)(s.$jN, { className: v.spinner }),
                        L &&
                            (0, r.jsxs)('div', {
                                className: v.soundEmojiContainer,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: v.sound,
                                        children: (0, r.jsx)(c.Z, {
                                            sound: N,
                                            onSelect: B
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        className: v.emoji,
                                        children: (0, r.jsx)(h.Z, {
                                            setEmojiConfetti: A,
                                            emojiConfetti: null == T ? void 0 : T
                                        })
                                    })
                                ]
                            })
                    ]
                }),
            (0, r.jsx)(
                'div',
                S(
                    y(
                        {
                            tabIndex: null != O || R ? void 0 : 0,
                            onFocus: (e) => {
                                var t;
                                e.target === e.currentTarget && (null === (t = w.current) || void 0 === t || t.focus());
                            },
                            className: a()(v.giftBoxOptionContainer, o),
                            'aria-label': E.NW.string(E.t.v54NrK)
                        },
                        D
                    ),
                    {
                        children:
                            null != G &&
                            G.map((e, t) =>
                                (0, r.jsx)(
                                    m.m,
                                    {
                                        isSelected: O === e,
                                        giftStyle: e,
                                        setSelectedGiftStyle: I,
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
            (0, r.jsx)('div', { className: v.__invalid_selectPlanDivider })
        ]
    });
};
