n.d(t, { q: () => A }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(755721),
    l = n(481060),
    c = n(987209),
    u = n(321051),
    d = n(669079),
    f = n(479446),
    p = n(283066),
    _ = n(543995),
    m = n(981632),
    h = n(96848),
    g = n(703926),
    E = n(388032),
    b = n(611344);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
            : v(Object(t)).forEach(function (n) {
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
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let A = (e) => {
    let { isShopGift: t, className: n, optionsContainerClassName: a } = e,
        {
            giftRecipient: y,
            selectedGiftStyle: v,
            setSelectedGiftStyle: T,
            emojiConfetti: A,
            soundEffect: C,
            setEmojiConfetti: N,
            setSoundEffect: P,
        } = (0, c.wD)(),
        [R, w] = i.useState(!1),
        D = i.useRef(null),
        x = (0, s.Jb)({ orientation: "horizontal" }),
        { ref: L } = x,
        j = I(x, ["ref"]),
        M = (0, d.MY)(y, t),
        k = M === d.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        U = M !== d.xr.DEFAULT,
        G = (0, _.m)(),
        Z = (0, p.Z)({ location: "GiftAnimationOptions" }),
        B = (e) => {
            null != P && P(null == e ? void 0 : e);
        };
    return (0, r.jsxs)("div", {
        children: [
            U &&
                (0, r.jsxs)("div", {
                    className: o()(b.giftMainAnimation, n),
                    children: [
                        null != v
                            ? (0, r.jsx)(m.Z, {
                                  giftStyle: v,
                                  defaultAnimationState: f.SR.ACTION,
                                  idleAnimationState: f.SR.LOOP,
                                  shouldAnimate: !0,
                                  className: b.animation,
                              })
                            : (0, r.jsx)(l.$jN, { className: b.spinner }),
                        k &&
                            (0, r.jsxs)("div", {
                                className: o()(b.soundEmojiContainer, Z && b.refresh),
                                children: [
                                    (0, r.jsx)(u.Z, {
                                        sound: C,
                                        onSelect: B,
                                    }),
                                    (0, r.jsx)(h.Z, {
                                        setEmojiConfetti: N,
                                        emojiConfetti: null == A ? void 0 : A,
                                    }),
                                ],
                            }),
                    ],
                }),
            (0, r.jsx)(
                "div",
                S(
                    O(
                        {
                            tabIndex: null != v || R ? void 0 : 0,
                            onFocus: (e) => {
                                var t;
                                e.target === e.currentTarget && (null == (t = D.current) || t.focus());
                            },
                            className: o()(b.giftBoxOptionContainer, a),
                            "aria-label": E.intl.string(E.t.v54NrN),
                            ref: L,
                        },
                        j,
                    ),
                    {
                        children:
                            null != G &&
                            !Z &&
                            G.map((e, t) =>
                                (0, r.jsx)(
                                    g.m,
                                    {
                                        isSelected: v === e,
                                        giftStyle: e,
                                        setSelectedGiftStyle: T,
                                        ref: 0 === t ? D : null,
                                        onFocus: () => w(!0),
                                        onBlur: () => w(!1),
                                    },
                                    e,
                                ),
                            ),
                    },
                ),
            ),
            (0, r.jsx)("div", { className: b.__invalid_selectPlanDivider }),
        ],
    });
};
