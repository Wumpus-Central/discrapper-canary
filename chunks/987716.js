r.d(n, {
    q: function () {
        return I;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(481060),
    c = r(987209),
    d = r(321051),
    f = r(669079),
    p = r(479446),
    h = r(646476),
    _ = r(599659),
    m = r(981632),
    g = r(96848),
    E = r(703926),
    v = r(474936),
    y = r(388032),
    b = r(461405);
let I = (e) => {
    let { isShopGift: n, className: r, optionsContainerClassName: i } = e,
        { giftRecipient: s, selectedGiftStyle: I, setSelectedGiftStyle: T, emojiConfetti: S, soundEffect: A, setEmojiConfetti: C, setSoundEffect: N } = (0, c.wD)(),
        [R, O] = o.useState(!1),
        D = o.useRef(null),
        x = (0, u.useRadioGroup)({ orientation: 'horizontal' }),
        L = (0, f.MY)(s, n),
        w = L === f.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        P = L !== f.xr.DEFAULT,
        M = (0, h.rK)(),
        { enabled: k } = h.ZP.useExperiment({ location: 'premiumGiftSelect_GiftAnimationOptions' }, { autoTrackExposure: M }),
        { enabled: U } = _.O.useExperiment({ location: 'gift card' }),
        B = null;
    P && (B = M && k ? v.kJ : v.QI), U && (B = v.RQ);
    let G = (e) => {
        null != N && N(null == e ? void 0 : e);
    };
    return (0, a.jsxs)('div', {
        children: [
            P &&
                (0, a.jsxs)('div', {
                    className: l()(b.giftMainAnimation, r),
                    children: [
                        null != I
                            ? (0, a.jsx)(m.Z, {
                                  giftStyle: I,
                                  defaultAnimationState: p.SR.ACTION,
                                  idleAnimationState: p.SR.LOOP,
                                  shouldAnimate: !0,
                                  className: b.animation
                              })
                            : (0, a.jsx)(u.Spinner, { className: b.spinner }),
                        w &&
                            (0, a.jsxs)('div', {
                                className: b.soundEmojiContainer,
                                children: [
                                    (0, a.jsx)('div', {
                                        className: b.sound,
                                        children: (0, a.jsx)(d.Z, {
                                            sound: A,
                                            onSelect: G
                                        })
                                    }),
                                    (0, a.jsx)('div', {
                                        className: b.emoji,
                                        children: (0, a.jsx)(g.Z, {
                                            setEmojiConfetti: C,
                                            emojiConfetti: null == S ? void 0 : S
                                        })
                                    })
                                ]
                            })
                    ]
                }),
            (0, a.jsx)('div', {
                tabIndex: null != I || R ? void 0 : 0,
                onFocus: (e) => {
                    var n;
                    e.target === e.currentTarget && (null === (n = D.current) || void 0 === n || n.focus());
                },
                className: l()(b.giftBoxOptionContainer, i),
                'aria-label': y.intl.string(y.t.v54NrK),
                ...x,
                children:
                    null != B &&
                    B.map((e, n) =>
                        (0, a.jsx)(
                            E.m,
                            {
                                isSelected: I === e,
                                giftStyle: e,
                                setSelectedGiftStyle: T,
                                ref: 0 === n ? D : null,
                                onFocus: () => O(!0),
                                onBlur: () => O(!1)
                            },
                            e
                        )
                    )
            }),
            (0, a.jsx)('div', { className: b.__invalid_selectPlanDivider })
        ]
    });
};
