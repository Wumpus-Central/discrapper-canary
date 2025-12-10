n.d(t, {
    Z: () => S,
    d: () => C,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(212605),
    l = n(755721),
    c = n(481060),
    u = n(131388),
    d = n(259580),
    f = n(937995),
    p = n(618158),
    _ = n(362267),
    m = n(388032),
    h = n(119421);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function S(e) {
    let {
        label: t,
        onClick: n,
        onKeyDown: i,
        onMouseEnter: a,
        onMouseLeave: u,
        onContextMenu: d,
        className: f,
        wrapperClassName: _,
        iconClassName: m,
        iconColor: g = "currentColor",
        iconComponent: b,
        themeable: v = !1,
        disabled: S = !1,
        isActive: I = !1,
        tooltipPosition: T = "top",
        shouldShowTooltip: C = !0,
        forceTooltipOpen: A = !1,
        buttonRef: N,
        grow: P,
        "aria-label": R,
        look: D,
        buttonText: w,
        size: x,
        color: L,
    } = e;
    return (0, r.jsx)(p.Z, {
        children: (0, r.jsx)(c.aML, {
            "data-migration-pending": !0,
            position: T,
            text: t,
            "aria-label": R,
            shouldShow: C,
            forceOpen: A,
            children: (e) => {
                var { onClick: t, onContextMenu: c, onMouseEnter: p, onMouseLeave: T } = e,
                    C = O(e, ["onClick", "onContextMenu", "onMouseEnter", "onMouseLeave"]);
                return (0, r.jsxs)(
                    l.zx,
                    y(
                        E(
                            {
                                "data-migration-pending": !0,
                                look: null != D ? D : l.zx.Looks.BLANK,
                                size: null != x ? x : l.zx.Sizes.NONE,
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
                                    null == p || p(), null == a || a(e);
                                },
                                onMouseLeave: (e) => {
                                    null == T || T(), null == u || u(e);
                                },
                                onContextMenu: (e) => {
                                    null == c || c(), null == d || d(e);
                                },
                                onFocus: (e) => {
                                    null == p || p(), null == a || a(e);
                                },
                                onBlur: (e) => {
                                    null == T || T(), null == u || u(e);
                                },
                                disabled: S,
                                innerClassName: o()(h.lineHeightReset, { [h.buttonInnerWithText]: null != w }),
                                className: o()({ [h.active]: I }, f),
                                wrapperClassName: _,
                                buttonRef: N,
                                grow: P,
                                "aria-label": R,
                            },
                            C,
                        ),
                        {
                            children: [
                                (0, r.jsx)(b, {
                                    size: s.Z.md,
                                    className: o()(m, {
                                        [h.controlIcon]: null == w,
                                        [h.themeable]: v,
                                        [h.active]: I,
                                    }),
                                    color: g,
                                }),
                                w,
                            ],
                        },
                    ),
                );
            },
        }),
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
        premiumGradient: h.premiumGradient,
    },
    T = {
        disconnect: h.disconnect,
        join: h.join,
        red: h.redGlow,
        white: h.white,
        green: h.greenGlow,
        yellow: h.yellow,
        primaryDark: h.primaryDark,
        primaryLight: h.primaryDark,
        activeLight: h.activeLight,
        premiumGradient: h.premiumGradient,
    };
function C(e) {
    var t,
        {
            ref: n,
            color: a,
            caretColor: s,
            isActive: l = !1,
            className: g,
            iconClassName: b,
            onPopoutClick: v,
            popoutOpen: C = !1,
            popoutDisabled: A = !1,
            isTrayButton: N,
            applyStyles: P = !1,
        } = e,
        R = O(e, [
            "ref",
            "color",
            "caretColor",
            "isActive",
            "className",
            "iconClassName",
            "onPopoutClick",
            "popoutOpen",
            "popoutDisabled",
            "isTrayButton",
            "applyStyles",
        ]);
    let D = (0, _.Z)(a, l),
        w = null != s ? s : D,
        x = (0, u.Z)("(max-width: 456px)"),
        L = i.useRef(null),
        j = i.useContext(f.h9);
    i.useEffect(() => {
        null != L.current && (j ? L.current.pause() : L.current.play());
    }, [j]);
    let M = null != (t = R.onContextMenu) ? t : v,
        k = null == v && !N,
        U = null != v && !N,
        G = N && null != v,
        Z = (0, r.jsx)(
            S,
            y(E({}, R), {
                grow: !1,
                onContextMenu: M,
                iconClassName: o()(b, h.centerIcon, k && h.fullRegionIcon),
                className: o()(
                    x || P ? g : null,
                    l && h.active,
                    h.centerButton,
                    T[D],
                    k && h.fullRegionButton,
                    G && h.attachedButton,
                ),
            }),
        );
    return x
        ? Z
        : (0, r.jsxs)("div", {
              ref: n,
              className: o()(
                  h.attachedCaretButtonContainer,
                  C && h.popoutOpen,
                  g,
                  U && [h.fullRegionDropdownButton, I[D]],
              ),
              children: [
                  Z,
                  null != v
                      ? (0, r.jsx)(p.Z, {
                            children: (0, r.jsx)(c.P3F, {
                                "aria-label": m.intl.string(m.t.PdRCRg),
                                onClick: A ? void 0 : v,
                                className: o()(
                                    h.contextMenuNub,
                                    N && h.attachedCaret,
                                    T[w],
                                    C && [h.popoutOpen, h.active],
                                    A && h.disabled,
                                ),
                                children: (0, r.jsx)(d.Z, {
                                    className: o()(h.contextMenuCaret, C && h.open, A && h.disabled),
                                }),
                            }),
                        })
                      : null,
              ],
          });
}
