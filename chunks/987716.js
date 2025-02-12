n.d(t, { q: () => y }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(987209),
    u = n(321051),
    c = n(669079),
    d = n(479446),
    f = n(646476),
    _ = n(599659),
    p = n(981632),
    h = n(96848),
    m = n(703926),
    g = n(474936),
    E = n(388032),
    v = n(358249);
let y = (e) => {
    let { isShopGift: t, className: n, optionsContainerClassName: a } = e,
        { giftRecipient: y, selectedGiftStyle: I, setSelectedGiftStyle: T, emojiConfetti: b, soundEffect: S, setEmojiConfetti: A, setSoundEffect: N } = (0, l.wD)(),
        [C, R] = r.useState(!1),
        O = r.useRef(null),
        D = (0, o.arW)({ orientation: 'horizontal' }),
        L = (0, c.MY)(y, t),
        x = L === c.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        P = L !== c.xr.DEFAULT,
        w = (0, f.rK)(),
        { enabled: M } = f.ZP.useExperiment({ location: 'premiumGiftSelect_GiftAnimationOptions' }, { autoTrackExposure: w }),
        { enabled: k } = _.O.useExperiment({ location: 'gift card' }),
        U = null;
    P && (U = w && M ? g.kJ : g.QI), k && (U = g.RQ);
    let G = (e) => {
        null != N && N(null == e ? void 0 : e);
    };
    return (0, i.jsxs)('div', {
        children: [
            P &&
                (0, i.jsxs)('div', {
                    className: s()(v.giftMainAnimation, n),
                    children: [
                        null != I
                            ? (0, i.jsx)(p.Z, {
                                  giftStyle: I,
                                  defaultAnimationState: d.SR.ACTION,
                                  idleAnimationState: d.SR.LOOP,
                                  shouldAnimate: !0,
                                  className: v.animation
                              })
                            : (0, i.jsx)(o.$jN, { className: v.spinner }),
                        x &&
                            (0, i.jsxs)('div', {
                                className: v.soundEmojiContainer,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: v.sound,
                                        children: (0, i.jsx)(u.Z, {
                                            sound: S,
                                            onSelect: G
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        className: v.emoji,
                                        children: (0, i.jsx)(h.Z, {
                                            setEmojiConfetti: A,
                                            emojiConfetti: null == b ? void 0 : b
                                        })
                                    })
                                ]
                            })
                    ]
                }),
            (0, i.jsx)('div', {
                tabIndex: null != I || C ? void 0 : 0,
                onFocus: (e) => {
                    var t;
                    e.target === e.currentTarget && (null === (t = O.current) || void 0 === t || t.focus());
                },
                className: s()(v.giftBoxOptionContainer, a),
                'aria-label': E.intl.string(E.t.v54NrK),
                ...D,
                children:
                    null != U &&
                    U.map((e, t) =>
                        (0, i.jsx)(
                            m.m,
                            {
                                isSelected: I === e,
                                giftStyle: e,
                                setSelectedGiftStyle: T,
                                ref: 0 === t ? O : null,
                                onFocus: () => R(!0),
                                onBlur: () => R(!1)
                            },
                            e
                        )
                    )
            }),
            (0, i.jsx)('div', { className: v.__invalid_selectPlanDivider })
        ]
    });
};
