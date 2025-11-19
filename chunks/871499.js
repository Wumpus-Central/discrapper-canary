n.d(t, {
    Z: () => I,
    d: () => A,
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
    _ = n(618158),
    p = n(362267),
    h = n(388032),
    m = n(842250);
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
function I(e) {
    let {
        label: t,
        onClick: n,
        onKeyDown: i,
        onMouseEnter: a,
        onMouseLeave: u,
        onContextMenu: d,
        className: f,
        wrapperClassName: p,
        iconClassName: h,
        iconColor: g = "currentColor",
        iconComponent: b,
        themeable: v = !1,
        disabled: I = !1,
        isActive: T = !1,
        tooltipPosition: S = "top",
        shouldShowTooltip: A = !0,
        forceTooltipOpen: C = !1,
        buttonRef: N,
        grow: R,
        "aria-label": P,
        look: D,
        buttonText: w,
        size: L,
        color: x,
    } = e;
    return (0, r.jsx)(_.Z, {
        children: (0, r.jsx)(c.aML, {
            "data-migration-pending": !0,
            position: S,
            text: t,
            "aria-label": P,
            shouldShow: A,
            forceOpen: C,
            children: (e) => {
                var { onClick: t, onContextMenu: c, onMouseEnter: _, onMouseLeave: S } = e,
                    A = O(e, ["onClick", "onContextMenu", "onMouseEnter", "onMouseLeave"]);
                return (0, r.jsxs)(
                    l.zx,
                    y(
                        E(
                            {
                                "data-migration-pending": !0,
                                look: null != D ? D : l.zx.Looks.BLANK,
                                size: null != L ? L : l.zx.Sizes.NONE,
                                color: x,
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
                                    null == _ || _(), null == a || a(e);
                                },
                                onMouseLeave: (e) => {
                                    null == S || S(), null == u || u(e);
                                },
                                onContextMenu: (e) => {
                                    null == c || c(), null == d || d(e);
                                },
                                onFocus: (e) => {
                                    null == _ || _(), null == a || a(e);
                                },
                                onBlur: (e) => {
                                    null == S || S(), null == u || u(e);
                                },
                                disabled: I,
                                innerClassName: o()(m.lineHeightReset, { [m.buttonInnerWithText]: null != w }),
                                className: o()({ [m.active]: T }, f),
                                wrapperClassName: p,
                                buttonRef: N,
                                grow: R,
                                "aria-label": P,
                            },
                            A,
                        ),
                        {
                            children: [
                                (0, r.jsx)(b, {
                                    size: s.Z.md,
                                    className: o()(h, {
                                        [m.controlIcon]: null == w,
                                        [m.themeable]: v,
                                        [m.active]: T,
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
let T = {
        disconnect: m.disconnect,
        join: m.join,
        red: m.red,
        white: m.white,
        green: m.green,
        yellow: m.yellow,
        primaryDark: m.primaryDark,
        primaryLight: m.primaryDark,
        activeLight: m.activeLight,
        premiumGradient: m.premiumGradient,
    },
    S = {
        disconnect: m.disconnect,
        join: m.join,
        red: m.redGlow,
        white: m.white,
        green: m.greenGlow,
        yellow: m.yellow,
        primaryDark: m.primaryDark,
        primaryLight: m.primaryDark,
        activeLight: m.activeLight,
        premiumGradient: m.premiumGradient,
    };
function A(e) {
    var t,
        {
            ref: n,
            color: a,
            caretColor: s,
            isActive: l = !1,
            className: g,
            iconClassName: b,
            onPopoutClick: v,
            popoutOpen: A = !1,
            popoutDisabled: C = !1,
            isTrayButton: N,
            applyStyles: R = !1,
        } = e,
        P = O(e, [
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
    let D = (0, p.Z)(a, l),
        w = null != s ? s : D,
        L = (0, u.Z)("(max-width: 456px)"),
        x = i.useRef(null),
        M = i.useContext(f.h9);
    i.useEffect(() => {
        null != x.current && (M ? x.current.pause() : x.current.play());
    }, [M]);
    let j = null != (t = P.onContextMenu) ? t : v,
        k = null == v && !N,
        U = null != v && !N,
        G = N && null != v,
        B = (0, r.jsx)(
            I,
            y(E({}, P), {
                grow: !1,
                onContextMenu: j,
                iconClassName: o()(b, m.centerIcon, k && m.fullRegionIcon),
                className: o()(
                    L || R ? g : null,
                    l && m.active,
                    m.centerButton,
                    S[D],
                    k && m.fullRegionButton,
                    G && m.attachedButton,
                ),
            }),
        );
    return L
        ? B
        : (0, r.jsxs)("div", {
              ref: n,
              className: o()(
                  m.attachedCaretButtonContainer,
                  A && m.popoutOpen,
                  g,
                  U && [m.fullRegionDropdownButton, T[D]],
              ),
              children: [
                  B,
                  null != v
                      ? (0, r.jsx)(_.Z, {
                            children: (0, r.jsx)(c.P3F, {
                                "aria-label": h.intl.string(h.t.PdRCRg),
                                onClick: C ? void 0 : v,
                                className: o()(
                                    m.contextMenuNub,
                                    N && m.attachedCaret,
                                    S[w],
                                    A && [m.popoutOpen, m.active],
                                    C && m.disabled,
                                ),
                                children: (0, r.jsx)(d.Z, {
                                    className: o()(m.contextMenuCaret, A && m.open, C && m.disabled),
                                }),
                            }),
                        })
                      : null,
              ],
          });
}
