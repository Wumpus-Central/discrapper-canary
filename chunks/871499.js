n.d(t, {
    Z: () => N,
    d: () => R
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
    f = n(82965),
    p = n(259580),
    _ = n(937995),
    h = n(618158),
    m = n(362267),
    g = n(388032),
    E = n(570105);
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
    let { label: t, onClick: n, onKeyDown: i, onMouseEnter: o, onMouseLeave: c, onContextMenu: u, className: d, wrapperClassName: f, iconClassName: p, iconColor: _ = 'currentColor', iconComponent: m, themeable: g = !1, disabled: v = !1, isActive: y = !1, tooltipPosition: I = 'top', shouldShowTooltip: T = !0, forceTooltipOpen: N = !1, buttonRef: A, grow: C, 'aria-label': R } = e;
    return (0, r.jsx)(h.Z, {
        children: (0, r.jsx)(l.ua7, {
            position: I,
            text: t,
            'aria-label': R,
            shouldShow: T,
            forceOpen: N,
            children: (e) => {
                var { onClick: t, onContextMenu: h, onMouseEnter: I, onMouseLeave: T } = e,
                    N = S(e, ['onClick', 'onContextMenu', 'onMouseEnter', 'onMouseLeave']);
                return (0, r.jsx)(
                    l.zxk,
                    O(
                        b(
                            {
                                look: l.zxk.Looks.BLANK,
                                size: l.zxk.Sizes.NONE,
                                onKeyDown: (e) => {
                                    null == i || i(e);
                                },
                                onClick: (e) => {
                                    null == t || t(), null == n || n(e);
                                },
                                onMouseEnter: (e) => {
                                    null == I || I(), null == o || o(e);
                                },
                                onMouseLeave: (e) => {
                                    null == T || T(), null == c || c(e);
                                },
                                onContextMenu: (e) => {
                                    null == h || h(), null == u || u(e);
                                },
                                onFocus: (e) => {
                                    null == I || I(), null == o || o(e);
                                },
                                onBlur: (e) => {
                                    null == T || T(), null == c || c(e);
                                },
                                disabled: v,
                                innerClassName: E.lineHeightReset,
                                className: a()({ [E.active]: y }, d),
                                wrapperClassName: f,
                                buttonRef: A,
                                grow: C,
                                'aria-label': R
                            },
                            N
                        ),
                        {
                            children: (0, r.jsx)(m, {
                                size: s.Z.md,
                                className: a()(E.controlIcon, p, {
                                    [E.themeable]: g,
                                    [E.active]: y
                                }),
                                color: _
                            })
                        }
                    )
                );
            }
        })
    });
}
let A = {
        disconnect: E.disconnect,
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
        red: E.experimentRed,
        white: E.white,
        green: E.green,
        yellow: E.yellow,
        primaryDark: E.experimentDark,
        primaryLight: E.experimentDark,
        activeLight: E.experimentActiveLight,
        premiumGradient: E.premiumGradient
    };
function R(e) {
    var { color: t, ignoreColorForCaret: n = !1, isActive: o = !1, className: s, iconClassName: v, onPopoutClick: y, popoutOpen: I = !1, popoutDisabled: R = !1, premiumGlow: P = !1, fullRegionButton: w = !1, forceGroupedButtons: D = !1 } = e,
        x = S(e, ['color', 'ignoreColorForCaret', 'isActive', 'className', 'iconClassName', 'onPopoutClick', 'popoutOpen', 'popoutDisabled', 'premiumGlow', 'fullRegionButton', 'forceGroupedButtons']);
    let L = (0, m.Z)(t, o),
        M = (0, m.Z)(n ? void 0 : t, !1),
        k = (0, c.Z)('(max-width: 456px)'),
        j = i.useRef(null),
        U = i.useContext(_.h9);
    i.useEffect(() => {
        null != j.current && (U ? j.current.pause() : j.current.play());
    }, [U]);
    let G = (0, f.Z)({ location: 'CenterControlButton' }),
        B = D || G,
        Z = B ? [E.experimentButton, C[L], w && null == y && E.fullRegionButton] : [A[L]],
        F = (0, r.jsx)(
            N,
            O(b({}, x), {
                grow: !1,
                onContextMenu: y,
                iconClassName: a()(v, E.centerIcon, B && E.experimentControlIcon, B && w && null == y && E.fullRegionIcon),
                className: a()(k ? s : null, E.staticButton, E.centerButton, o && E.active, ...Z)
            })
        );
    return k
        ? F
        : B
          ? (0, r.jsxs)('div', {
                className: a()(E.caretButtonContainer, s, w && null != y && [E.fullRegionDropdownButton, C[L]]),
                children: [
                    F,
                    null != y
                        ? (0, r.jsx)(h.Z, {
                              children: (0, r.jsx)(l.P3F, {
                                  'aria-label': g.NW.string(g.t.PdRCRk),
                                  onClick: R ? void 0 : y,
                                  onContextMenu: R ? void 0 : y,
                                  className: a()(E.contextMenuNubExperiment, C[M], {
                                      [E.active]: I,
                                      [E.disabled]: R
                                  }),
                                  children: (0, r.jsx)(p.Z, { className: a()(E.contextMenuCaretExperiment, { [E.open]: I }, R && E.disabled) })
                              })
                          })
                        : null
                ]
            })
          : (0, r.jsxs)('div', {
                className: a()(s, E.contextMenuContainer),
                children: [
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(u.ZP, {
                                className: a()(E.buttonMask),
                                mask: null == y ? null : u.QS.CHANNEL_CALL_CONTROL_BUTTON,
                                width: 56,
                                height: 56,
                                children: F
                            }),
                            P &&
                                (0, r.jsx)('div', {
                                    className: E.glow,
                                    children: (0, r.jsx)(d.Z, {
                                        ref: j,
                                        loop: !0,
                                        autoPlay: !0,
                                        className: E.glowVideo,
                                        children: (0, r.jsx)('source', {
                                            src: T,
                                            type: 'video/webm'
                                        })
                                    })
                                })
                        ]
                    }),
                    null != y
                        ? (0, r.jsx)(h.Z, {
                              children: (0, r.jsx)(l.P3F, {
                                  'aria-label': g.NW.string(g.t.PdRCRk),
                                  onClick: y,
                                  onContextMenu: y,
                                  className: a()(E.contextMenuNub, A[L], { [E.active]: I }),
                                  children: (0, r.jsx)(p.Z, { className: a()(E.contextMenuCaret, { [E.open]: I }) })
                              })
                          })
                        : null
                ]
            });
}
E.disconnect, E.redGlow, E.white, E.greenGlow, E.yellow, E.experimentDark, E.experimentDark, E.experimentActiveLight, E.premiumGradient;
