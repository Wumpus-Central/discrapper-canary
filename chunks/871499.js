n.d(t, {
    Z: () => A,
    d: () => w
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(212605),
    l = n(481060),
    c = n(131388),
    u = n(686546),
    d = n(70097),
    f = n(221241),
    _ = n(82965),
    p = n(259580),
    h = n(937995),
    m = n(618158),
    g = n(362267),
    E = n(388032),
    b = n(434580);
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
let N = 'https://cdn.discordapp.com/assets/content/3988d11030317ce331a0b327cac18a9c02a693041f9a7695bb13b3d4cb486e11.webm';
function A(e) {
    let { label: t, onClick: n, onKeyDown: i, onMouseEnter: o, onMouseLeave: c, onContextMenu: u, className: d, wrapperClassName: f, iconClassName: _, iconColor: p = 'currentColor', iconComponent: h, themeable: g = !1, disabled: E = !1, isActive: y = !1, tooltipPosition: O = 'top', shouldShowTooltip: T = !0, forceTooltipOpen: N = !1, buttonRef: A, grow: C, 'aria-label': R, look: P, buttonText: w, size: D } = e;
    return (0, r.jsx)(m.Z, {
        children: (0, r.jsx)(l.ua7, {
            position: O,
            text: t,
            'aria-label': R,
            shouldShow: T,
            forceOpen: N,
            children: (e) => {
                var { onClick: t, onContextMenu: m, onMouseEnter: O, onMouseLeave: T } = e,
                    N = S(e, ['onClick', 'onContextMenu', 'onMouseEnter', 'onMouseLeave']);
                return (0, r.jsxs)(
                    l.zxk,
                    I(
                        v(
                            {
                                look: null != P ? P : l.zxk.Looks.BLANK,
                                size: null != D ? D : l.zxk.Sizes.NONE,
                                onKeyDown: (e) => {
                                    null == i || i(e);
                                },
                                onClick: (e) => {
                                    null == t || t(), null == n || n(e);
                                },
                                onMouseEnter: (e) => {
                                    null == O || O(), null == o || o(e);
                                },
                                onMouseLeave: (e) => {
                                    null == T || T(), null == c || c(e);
                                },
                                onContextMenu: (e) => {
                                    null == m || m(), null == u || u(e);
                                },
                                onFocus: (e) => {
                                    null == O || O(), null == o || o(e);
                                },
                                onBlur: (e) => {
                                    null == T || T(), null == c || c(e);
                                },
                                disabled: E,
                                innerClassName: a()(b.lineHeightReset, { [b.buttonInnerWithText]: null != w }),
                                className: a()({ [b.active]: y }, d),
                                wrapperClassName: f,
                                buttonRef: A,
                                grow: C,
                                'aria-label': R
                            },
                            N
                        ),
                        {
                            children: [
                                (0, r.jsx)(h, {
                                    size: s.Z.md,
                                    className: a()(_, {
                                        [b.controlIcon]: null == w,
                                        [b.themeable]: g,
                                        [b.active]: y
                                    }),
                                    color: p
                                }),
                                w
                            ]
                        }
                    )
                );
            }
        })
    });
}
let C = {
        disconnect: b.disconnect,
        join: b.join,
        red: b.red,
        white: b.white,
        green: b.green,
        yellow: b.yellow,
        primaryDark: b.primaryDark,
        primaryLight: b.primaryLight,
        activeLight: b.activeLight,
        premiumGradient: b.premiumGradient
    },
    R = {
        disconnect: b.disconnect,
        join: b.join,
        red: b.experimentRed,
        white: b.white,
        green: b.green,
        yellow: b.yellow,
        primaryDark: b.experimentDark,
        primaryLight: b.experimentDark,
        activeLight: b.experimentActiveLight,
        premiumGradient: b.premiumGradient
    },
    P = {
        disconnect: b.disconnect,
        join: b.join,
        red: b.redGlow,
        white: b.white,
        green: b.greenGlow,
        yellow: b.yellow,
        primaryDark: b.experimentDark,
        primaryLight: b.experimentDark,
        activeLight: b.experimentActiveLight,
        premiumGradient: b.premiumGradient
    };
function w(e) {
    var t,
        { color: n, caretColor: o, isActive: s = !1, className: y, iconClassName: O, onPopoutClick: T, popoutOpen: w = !1, popoutDisabled: D = !1, premiumGlow: L = !1, fullRegionButton: x = !1, forceGroupedButtons: M = !1 } = e,
        k = S(e, ['color', 'caretColor', 'isActive', 'className', 'iconClassName', 'onPopoutClick', 'popoutOpen', 'popoutDisabled', 'premiumGlow', 'fullRegionButton', 'forceGroupedButtons']);
    let j = (0, g.Z)(n, s),
        U = null != o ? o : j,
        G = (0, c.Z)('(max-width: 456px)'),
        B = i.useRef(null),
        F = i.useContext(h.h9),
        { coloredIconsEnabled: V } = (0, f.Z)({ location: 'CenterControlButton' });
    i.useEffect(() => {
        null != B.current && (F ? B.current.pause() : B.current.play());
    }, [F]);
    let Z = (0, _.Z)({ location: 'CenterControlButton' }),
        H = M || Z,
        W = H ? [b.experimentButton, V ? P[j] : R[j], x && null == T && b.fullRegionButton, V && !x && null != T && b.attachedButton] : [C[j]],
        Y = null != (t = k.onContextMenu) ? t : T,
        K = (0, r.jsx)(
            A,
            I(v({}, k), {
                grow: !1,
                onContextMenu: Y,
                iconClassName: a()(O, b.centerIcon, H && b.experimentControlIcon, H && x && null == T && b.fullRegionIcon),
                className: a()(G ? y : null, b.staticButton, b.centerButton, s && b.active, ...W)
            })
        );
    return G
        ? K
        : H
          ? (0, r.jsxs)('div', {
                className: a()(V ? b.attachedCaretButtonContainer : b.caretButtonContainer, V && w && b.popoutOpen, y, x && null != T && [b.fullRegionDropdownButton, R[j]]),
                children: [
                    K,
                    null != T
                        ? (0, r.jsx)(m.Z, {
                              children: (0, r.jsx)(l.P3F, {
                                  'aria-label': E.NW.string(E.t.PdRCRk),
                                  onClick: D ? void 0 : T,
                                  onContextMenu: D ? void 0 : T,
                                  className: a()(b.contextMenuNubExperiment, V && !x && b.attachedCaret, V ? P[U] : R[U], {
                                      [b.popoutOpen]: w && V,
                                      [b.active]: w,
                                      [b.disabled]: D
                                  }),
                                  children: (0, r.jsx)(p.Z, { className: a()(b.contextMenuCaretExperiment, { [b.open]: w }, D && b.disabled) })
                              })
                          })
                        : null
                ]
            })
          : (0, r.jsxs)('div', {
                className: a()(y, b.contextMenuContainer),
                children: [
                    (0, r.jsx)(u.ZP, {
                        className: b.buttonMask,
                        mask: null == T ? null : u.QS.CHANNEL_CALL_CONTROL_BUTTON,
                        width: 56,
                        height: 56,
                        children: K
                    }),
                    L &&
                        (0, r.jsx)('div', {
                            className: b.glow,
                            children: (0, r.jsx)(d.Z, {
                                ref: B,
                                loop: !0,
                                autoPlay: !0,
                                className: b.glowVideo,
                                children: (0, r.jsx)('source', {
                                    src: N,
                                    type: 'video/webm'
                                })
                            })
                        }),
                    null != T
                        ? (0, r.jsx)(m.Z, {
                              children: (0, r.jsx)(l.P3F, {
                                  'aria-label': E.NW.string(E.t.PdRCRk),
                                  onClick: T,
                                  onContextMenu: T,
                                  className: a()(b.contextMenuNub, C[j], { [b.active]: w }),
                                  children: (0, r.jsx)(p.Z, { className: a()(b.contextMenuCaret, { [b.open]: w }) })
                              })
                          })
                        : null
                ]
            });
}
