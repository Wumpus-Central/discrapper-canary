n.d(t, {
    Z: () => N,
    d: () => P
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(131388),
    c = n(686546),
    u = n(70097),
    d = n(221241),
    f = n(82965),
    _ = n(259580),
    p = n(937995),
    h = n(618158),
    g = n(362267),
    m = n(388032),
    E = n(35245);
function v(e, t, n) {
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
function b(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let T = 'https://cdn.discordapp.com/assets/content/3988d11030317ce331a0b327cac18a9c02a693041f9a7695bb13b3d4cb486e11.webm';
function N(e) {
    let { label: t, onClick: n, onKeyDown: i, onMouseEnter: o, onMouseLeave: l, onContextMenu: c, className: u, wrapperClassName: d, iconClassName: f, iconColor: _ = 'currentColor', iconComponent: p, themeable: g = !1, disabled: m = !1, isActive: v = !1, tooltipPosition: y = 'top', shouldShowTooltip: I = !0, forceTooltipOpen: T = !1, buttonRef: N, grow: A, 'aria-label': C, iconSize: R = 'md', look: P, buttonText: D } = e;
    return (0, r.jsx)(h.Z, {
        children: (0, r.jsx)(s.ua7, {
            position: y,
            text: t,
            'aria-label': C,
            shouldShow: I,
            forceOpen: T,
            children: (e) => {
                var { onClick: t, onContextMenu: h, onMouseEnter: y, onMouseLeave: I } = e,
                    T = S(e, ['onClick', 'onContextMenu', 'onMouseEnter', 'onMouseLeave']);
                return (0, r.jsxs)(
                    s.zxk,
                    O(
                        b(
                            {
                                look: null != P ? P : s.zxk.Looks.BLANK,
                                size: s.zxk.Sizes.NONE,
                                onKeyDown: (e) => {
                                    null == i || i(e);
                                },
                                onClick: (e) => {
                                    null == t || t(), null == n || n(e);
                                },
                                onMouseEnter: (e) => {
                                    null == y || y(), null == o || o(e);
                                },
                                onMouseLeave: (e) => {
                                    null == I || I(), null == l || l(e);
                                },
                                onContextMenu: (e) => {
                                    null == h || h(), null == c || c(e);
                                },
                                onFocus: (e) => {
                                    null == y || y(), null == o || o(e);
                                },
                                onBlur: (e) => {
                                    null == I || I(), null == l || l(e);
                                },
                                disabled: m,
                                innerClassName: a()(E.lineHeightReset, { [E.buttonInnerWithText]: null != D }),
                                className: a()({ [E.active]: v }, u),
                                wrapperClassName: d,
                                buttonRef: N,
                                grow: A,
                                'aria-label': C
                            },
                            T
                        ),
                        {
                            children: [
                                (0, r.jsx)(p, {
                                    size: R,
                                    className: a()(
                                        {
                                            [E.controlIconColor]: null == D,
                                            [E.themeable]: g,
                                            [E.active]: v
                                        },
                                        f
                                    ),
                                    color: _
                                }),
                                D
                            ]
                        }
                    )
                );
            }
        })
    });
}
let A = {
        disconnect: E.disconnect,
        join: E.join,
        red: E.red,
        white: E.white,
        green: E.green,
        yellow: E.yellow,
        primaryDark: E.primaryDark,
        primaryLight: E.primaryLight,
        activeLight: E.activeLight,
        premiumGradient: E.premiumGradient
    },
    C = {
        disconnect: E.disconnect,
        join: E.join,
        red: E.experimentRed,
        white: E.white,
        green: E.green,
        yellow: E.yellow,
        primaryDark: E.experimentDark,
        primaryLight: E.experimentDark,
        activeLight: E.experimentActiveLight,
        premiumGradient: E.premiumGradient
    },
    R = {
        disconnect: E.disconnect,
        join: E.join,
        red: E.redGlow,
        white: E.white,
        green: E.greenGlow,
        yellow: E.yellow,
        primaryDark: E.experimentDark,
        primaryLight: E.experimentDark,
        activeLight: E.experimentActiveLight,
        premiumGradient: E.premiumGradient
    };
function P(e) {
    var { color: t, caretColor: n, isActive: o = !1, className: v, iconClassName: y, onPopoutClick: I, popoutOpen: P = !1, popoutDisabled: D = !1, premiumGlow: w = !1, fullRegionButton: L = !1, forceGroupedButtons: x = !1 } = e,
        M = S(e, ['color', 'caretColor', 'isActive', 'className', 'iconClassName', 'onPopoutClick', 'popoutOpen', 'popoutDisabled', 'premiumGlow', 'fullRegionButton', 'forceGroupedButtons']);
    let k = (0, g.Z)(t, o),
        j = null != n ? n : k,
        U = (0, l.Z)('(max-width: 456px)'),
        G = i.useRef(null),
        B = i.useContext(p.h9),
        { coloredIconsEnabled: V } = (0, d.Z)({ location: 'CenterControlButton' });
    i.useEffect(() => {
        null != G.current && (B ? G.current.pause() : G.current.play());
    }, [B]);
    let F = (0, f.Z)({ location: 'CenterControlButton' }),
        Z = x || F,
        H = Z ? [E.experimentButton, V ? R[k] : C[k], L && null == I && E.fullRegionButton, V && !L && null != I && E.attachedButton] : [A[k]],
        W = (0, r.jsx)(
            N,
            O(b({}, M), {
                grow: !1,
                onContextMenu: I,
                iconClassName: a()(y, E.centerIcon, Z && E.experimentControlIcon, Z && L && null == I && E.fullRegionIcon),
                className: a()(U ? v : null, E.staticButton, E.centerButton, o && E.active, ...H)
            })
        );
    return U
        ? W
        : Z
          ? (0, r.jsxs)('div', {
                className: a()(V ? E.attachedCaretButtonContainer : E.caretButtonContainer, V && P && E.popoutOpen, v, L && null != I && [E.fullRegionDropdownButton, C[k]]),
                children: [
                    W,
                    null != I
                        ? (0, r.jsx)(h.Z, {
                              children: (0, r.jsx)(s.P3F, {
                                  'aria-label': m.NW.string(m.t.PdRCRk),
                                  onClick: D ? void 0 : I,
                                  onContextMenu: D ? void 0 : I,
                                  className: a()(E.contextMenuNubExperiment, V && !L && E.attachedCaret, V ? R[j] : C[j], {
                                      [E.popoutOpen]: P && V,
                                      [E.active]: P,
                                      [E.disabled]: D
                                  }),
                                  children: (0, r.jsx)(_.Z, { className: a()(E.contextMenuCaretExperiment, { [E.open]: P }, D && E.disabled) })
                              })
                          })
                        : null
                ]
            })
          : (0, r.jsxs)('div', {
                className: a()(v, E.contextMenuContainer),
                children: [
                    (0, r.jsx)(c.ZP, {
                        className: E.buttonMask,
                        mask: null == I ? null : c.QS.CHANNEL_CALL_CONTROL_BUTTON,
                        width: 56,
                        height: 56,
                        children: W
                    }),
                    w &&
                        (0, r.jsx)('div', {
                            className: E.glow,
                            children: (0, r.jsx)(u.Z, {
                                ref: G,
                                loop: !0,
                                autoPlay: !0,
                                className: E.glowVideo,
                                children: (0, r.jsx)('source', {
                                    src: T,
                                    type: 'video/webm'
                                })
                            })
                        }),
                    null != I
                        ? (0, r.jsx)(h.Z, {
                              children: (0, r.jsx)(s.P3F, {
                                  'aria-label': m.NW.string(m.t.PdRCRk),
                                  onClick: I,
                                  onContextMenu: I,
                                  className: a()(E.contextMenuNub, A[k], { [E.active]: P }),
                                  children: (0, r.jsx)(_.Z, { className: a()(E.contextMenuCaret, { [E.open]: P }) })
                              })
                          })
                        : null
                ]
            });
}
