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
    _ = n(283066),
    p = n(543995),
    h = n(981632),
    m = n(96848),
    g = n(703926),
    E = n(388032),
    b = n(469059);
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
function I(e, t) {
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
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
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
            setSelectedGiftStyle: S,
            emojiConfetti: A,
            soundEffect: C,
            setEmojiConfetti: N,
            setSoundEffect: R,
        } = (0, c.wD)(),
        [P, D] = i.useState(!1),
        w = i.useRef(null),
        L = (0, s.Jb)({ orientation: "horizontal" }),
        { ref: x } = L,
        M = T(L, ["ref"]),
        j = (0, d.MY)(y, t),
        k = j === d.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        U = j !== d.xr.DEFAULT,
        G = (0, p.m)(),
        B = (0, _.Z)({ location: "GiftAnimationOptions" }),
        Z = (e) => {
            null != R && R(null == e ? void 0 : e);
        };
    return (0, r.jsxs)("div", {
        children: [
            U &&
                (0, r.jsxs)("div", {
                    className: o()(b.giftMainAnimation, n),
                    children: [
                        null != v
                            ? (0, r.jsx)(h.Z, {
                                  giftStyle: v,
                                  defaultAnimationState: f.SR.ACTION,
                                  idleAnimationState: f.SR.LOOP,
                                  shouldAnimate: !0,
                                  className: b.animation,
                              })
                            : (0, r.jsx)(l.$jN, { className: b.spinner }),
                        k &&
                            (0, r.jsxs)("div", {
                                className: o()(b.soundEmojiContainer, B && b.refresh),
                                children: [
                                    (0, r.jsx)(u.Z, {
                                        sound: C,
                                        onSelect: Z,
                                    }),
                                    (0, r.jsx)(m.Z, {
                                        setEmojiConfetti: N,
                                        emojiConfetti: null == A ? void 0 : A,
                                    }),
                                ],
                            }),
                    ],
                }),
            (0, r.jsx)(
                "div",
                I(
                    O(
                        {
                            tabIndex: null != v || P ? void 0 : 0,
                            onFocus: (e) => {
                                var t;
                                e.target === e.currentTarget && (null == (t = w.current) || t.focus());
                            },
                            className: o()(b.giftBoxOptionContainer, a),
                            "aria-label": E.intl.string(E.t.v54NrN),
                            ref: x,
                        },
                        M,
                    ),
                    {
                        children:
                            null != G &&
                            !B &&
                            G.map((e, t) =>
                                (0, r.jsx)(
                                    g.m,
                                    {
                                        isSelected: v === e,
                                        giftStyle: e,
                                        setSelectedGiftStyle: S,
                                        ref: 0 === t ? w : null,
                                        onFocus: () => D(!0),
                                        onBlur: () => D(!1),
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
