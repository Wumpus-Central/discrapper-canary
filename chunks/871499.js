n.d(t, {
    Z: () => v,
    d: () => T
});
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(212605),
    l = n(481060),
    c = n(131388),
    u = n(259580),
    d = n(937995),
    f = n(618158),
    _ = n(362267),
    p = n(388032),
    h = n(459824);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function v(e) {
    let { label: t, onClick: n, onKeyDown: i, onMouseEnter: o, onMouseLeave: c, onContextMenu: u, className: d, wrapperClassName: _, iconClassName: p, iconColor: m = 'currentColor', iconComponent: E, themeable: O = !1, disabled: v = !1, isActive: I = !1, tooltipPosition: S = 'top', shouldShowTooltip: T = !0, forceTooltipOpen: A = !1, buttonRef: N, grow: C, 'aria-label': P, look: R, buttonText: w, size: D, color: L } = e;
    return (0, r.jsx)(f.Z, {
        children: (0, r.jsx)(l.ua7, {
            position: S,
            text: t,
            'aria-label': P,
            shouldShow: T,
            forceOpen: A,
            children: (e) => {
                var { onClick: t, onContextMenu: f, onMouseEnter: S, onMouseLeave: T } = e,
                    A = y(e, ['onClick', 'onContextMenu', 'onMouseEnter', 'onMouseLeave']);
                return (0, r.jsxs)(
                    l.zxk,
                    b(
                        g(
                            {
                                look: null != R ? R : l.zxk.Looks.BLANK,
                                size: null != D ? D : l.zxk.Sizes.NONE,
                                color: L,
                                onKeyDown: (e) => {
                                    null == i || i(e);
                                },
                                onMouseDown: (e) => {
                                    e.preventDefault();
                                },
                                onClick: (e) => {
                                    null == t || t(), null == n || n(e);
                                },
                                onMouseEnter: (e) => {
                                    null == S || S(), null == o || o(e);
                                },
                                onMouseLeave: (e) => {
                                    null == T || T(), null == c || c(e);
                                },
                                onContextMenu: (e) => {
                                    null == f || f(), null == u || u(e);
                                },
                                onFocus: (e) => {
                                    null == S || S(), null == o || o(e);
                                },
                                onBlur: (e) => {
                                    null == T || T(), null == c || c(e);
                                },
                                disabled: v,
                                innerClassName: a()(h.lineHeightReset, { [h.buttonInnerWithText]: null != w }),
                                className: a()({ [h.active]: I }, d),
                                wrapperClassName: _,
                                buttonRef: N,
                                grow: C,
                                'aria-label': P
                            },
                            A
                        ),
                        {
                            children: [
                                (0, r.jsx)(E, {
                                    size: s.Z.md,
                                    className: a()(p, {
                                        [h.controlIcon]: null == w,
                                        [h.themeable]: O,
                                        [h.active]: I
                                    }),
                                    color: m
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
let I = {
        disconnect: h.disconnect,
        join: h.join,
        red: h.red,
        white: h.white,
        green: h.green,
        yellow: h.yellow,
        primaryDark: h.primaryDark,
        primaryLight: h.primaryDark,
        activeLight: h.activeLight,
        premiumGradient: h.premiumGradient
    },
    S = {
        disconnect: h.disconnect,
        join: h.join,
        red: h.redGlow,
        white: h.white,
        green: h.greenGlow,
        yellow: h.yellow,
        primaryDark: h.primaryDark,
        primaryLight: h.primaryDark,
        activeLight: h.activeLight,
        premiumGradient: h.premiumGradient
    };
function T(e) {
    var t,
        { ref: n, color: o, caretColor: s, isActive: m = !1, className: E, iconClassName: O, onPopoutClick: T, popoutOpen: A = !1, popoutDisabled: N = !1, isTrayButton: C, applyStyles: P = !1 } = e,
        R = y(e, ['ref', 'color', 'caretColor', 'isActive', 'className', 'iconClassName', 'onPopoutClick', 'popoutOpen', 'popoutDisabled', 'isTrayButton', 'applyStyles']);
    let w = (0, _.Z)(o, m),
        D = null != s ? s : w,
        L = (0, c.Z)('(max-width: 456px)'),
        x = i.useRef(null),
        k = i.useContext(d.h9);
    i.useEffect(() => {
        null != x.current && (k ? x.current.pause() : x.current.play());
    }, [k]);
    let M = null != (t = R.onContextMenu) ? t : T,
        j = null == T && !C,
        U = null != T && !C,
        G = C && null != T,
        B = (0, r.jsx)(
            v,
            b(g({}, R), {
                grow: !1,
                onContextMenu: M,
                iconClassName: a()(O, h.centerIcon, j && h.fullRegionIcon),
                className: a()(L || P ? E : null, m && h.active, h.centerButton, S[w], j && h.fullRegionButton, G && h.attachedButton)
            })
        );
    return L
        ? B
        : (0, r.jsxs)('div', {
              ref: n,
              className: a()(h.attachedCaretButtonContainer, A && h.popoutOpen, E, U && [h.fullRegionDropdownButton, I[w]]),
              children: [
                  B,
                  null != T
                      ? (0, r.jsx)(f.Z, {
                            children: (0, r.jsx)(l.P3F, {
                                'aria-label': p.intl.string(p.t.PdRCRk),
                                onClick: N ? void 0 : T,
                                className: a()(h.contextMenuNub, C && h.attachedCaret, S[D], A && [h.popoutOpen, h.active], N && h.disabled),
                                children: (0, r.jsx)(u.Z, { className: a()(h.contextMenuCaret, A && h.open, N && h.disabled) })
                            })
                        })
                      : null
              ]
          });
}
