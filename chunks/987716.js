n.d(t, { q: () => N }), n(388685);
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
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let N = (e) => {
    let { isShopGift: t, className: n, optionsContainerClassName: o } = e,
        { giftRecipient: y, selectedGiftStyle: O, setSelectedGiftStyle: T, emojiConfetti: N, soundEffect: A, setEmojiConfetti: C, setSoundEffect: R } = (0, l.wD)(),
        [P, w] = i.useState(!1),
        D = i.useRef(null),
        L = (0, s.arW)({ orientation: 'horizontal' }),
        { ref: x } = L,
        M = S(L, ['ref']),
        k = (0, u.MY)(y, t),
        j = k === u.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        U = k !== u.xr.DEFAULT,
        G = (0, f.rK)(),
        { enabled: B } = f.ZP.useExperiment({ location: 'premiumGiftSelect_GiftAnimationOptions' }, { autoTrackExposure: G }),
        { enabled: V } = _.O.useExperiment({ location: 'gift card' }),
        F = null;
    U && (F = G && B ? g.kJ : g.QI), V && (F = g.RQ);
    let Z = (e) => {
        null != R && R(null == e ? void 0 : e);
    };
    return (0, r.jsxs)('div', {
        children: [
            U &&
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
                        j &&
                            (0, r.jsxs)('div', {
                                className: b.soundEmojiContainer,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: b.sound,
                                        children: (0, r.jsx)(c.Z, {
                                            sound: A,
                                            onSelect: Z
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        className: b.emoji,
                                        children: (0, r.jsx)(h.Z, {
                                            setEmojiConfetti: C,
                                            emojiConfetti: null == N ? void 0 : N
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
                            tabIndex: null != O || P ? void 0 : 0,
                            onFocus: (e) => {
                                var t;
                                e.target === e.currentTarget && (null == (t = D.current) || t.focus());
                            },
                            className: a()(b.giftBoxOptionContainer, o),
                            'aria-label': E.NW.string(E.t.v54NrK),
                            ref: x
                        },
                        M
                    ),
                    {
                        children:
                            null != F &&
                            F.map((e, t) =>
                                (0, r.jsx)(
                                    m.m,
                                    {
                                        isSelected: O === e,
                                        giftStyle: e,
                                        setSelectedGiftStyle: T,
                                        ref: 0 === t ? D : null,
                                        onFocus: () => w(!0),
                                        onBlur: () => w(!1)
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
