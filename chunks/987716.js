n.d(t, { q: () => S }), n(47120);
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
    _ = n(599659),
    p = n(981632),
    h = n(96848),
    m = n(703926),
    g = n(474936),
    E = n(388032),
    b = n(651427);
function y(e, t, n) {
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
function v(e) {
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
                y(e, t, n[t]);
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
function I(e, t) {
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
let S = (e) => {
    let { isShopGift: t, className: n, optionsContainerClassName: o } = e,
        { giftRecipient: y, selectedGiftStyle: O, setSelectedGiftStyle: S, emojiConfetti: T, soundEffect: N, setEmojiConfetti: A, setSoundEffect: C } = (0, l.wD)(),
        [R, P] = i.useState(!1),
        w = i.useRef(null),
        D = (0, s.arW)({ orientation: 'horizontal' }),
        L = (0, u.MY)(y, t),
        x = L === u.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        M = L !== u.xr.DEFAULT,
        k = (0, f.rK)(),
        { enabled: j } = f.ZP.useExperiment({ location: 'premiumGiftSelect_GiftAnimationOptions' }, { autoTrackExposure: k }),
        { enabled: U } = _.O.useExperiment({ location: 'gift card' }),
        G = null;
    M && (G = k && j ? g.kJ : g.QI), U && (G = g.RQ);
    let B = (e) => {
        null != C && C(null == e ? void 0 : e);
    };
    return (0, r.jsxs)('div', {
        children: [
            M &&
                (0, r.jsxs)('div', {
                    className: a()(b.giftMainAnimation, n),
                    children: [
                        null != O
                            ? (0, r.jsx)(p.Z, {
                                  giftStyle: O,
                                  defaultAnimationState: d.SR.ACTION,
                                  idleAnimationState: d.SR.LOOP,
                                  shouldAnimate: !0,
                                  className: b.animation
                              })
                            : (0, r.jsx)(s.$jN, { className: b.spinner }),
                        x &&
                            (0, r.jsxs)('div', {
                                className: b.soundEmojiContainer,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: b.sound,
                                        children: (0, r.jsx)(c.Z, {
                                            sound: N,
                                            onSelect: B
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        className: b.emoji,
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
                I(
                    v(
                        {
                            tabIndex: null != O || R ? void 0 : 0,
                            onFocus: (e) => {
                                var t;
                                e.target === e.currentTarget && (null == (t = w.current) || t.focus());
                            },
                            className: a()(b.giftBoxOptionContainer, o),
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
                                        setSelectedGiftStyle: S,
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
            (0, r.jsx)('div', { className: b.__invalid_selectPlanDivider })
        ]
    });
};
