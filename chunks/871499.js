n.d(t, {
    Z: () => I,
    d: () => A,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(212605),
    l = n(681715),
    c = n(755721),
    u = n(481060),
    d = n(131388),
    f = n(259580),
    p = n(937995),
    _ = n(618158),
    m = n(362267),
    h = n(388032),
    g = n(240766);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
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
function v(e, t) {
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
        iconClassName: m,
        iconColor: h = "currentColor",
        iconComponent: E,
        themeable: b = !1,
        disabled: y = !1,
        isActive: O = !1,
        tooltipPosition: v = "top",
        shouldShowTooltip: S = !0,
        forceTooltipOpen: I = !1,
        buttonRef: T,
        grow: C,
        "aria-label": A,
        look: N,
        buttonText: P,
        size: R,
        color: w,
    } = e;
    return (0, r.jsx)(_.Z, {
        children: (0, r.jsx)(l.u, {
            position: v,
            __unsupportedReactNodeAsText: t,
            ariaHidden: !0,
            shouldShow: S,
            forceOpen: I,
            children: (0, r.jsxs)(c.zx, {
                "data-migration-pending": !0,
                look: null != N ? N : c.zx.Looks.BLANK,
                size: null != R ? R : c.zx.Sizes.NONE,
                color: w,
                onKeyDown: (e) => {
                    null == i || i(e);
                },
                onMouseDown: (e) => {
                    e.preventDefault();
                },
                onClick: n,
                onMouseEnter: a,
                onMouseLeave: u,
                onContextMenu: null != d ? d : void 0,
                onFocus: (e) => {
                    null == a || a(e);
                },
                onBlur: u,
                disabled: y,
                innerClassName: o()(g.lineHeightReset, { [g.buttonInnerWithText]: null != P }),
                className: o()({ [g.active]: O }, f),
                wrapperClassName: p,
                buttonRef: T,
                grow: C,
                "aria-label": A,
                children: [
                    (0, r.jsx)(E, {
                        size: s.Z.md,
                        className: o()(m, {
                            [g.controlIcon]: null == P,
                            [g.themeable]: b,
                            [g.active]: O,
                        }),
                        color: h,
                    }),
                    P,
                ],
            }),
        }),
    });
}
let T = {
        disconnect: g.disconnect,
        join: g.join,
        red: g.red,
        white: g.white,
        green: g.green,
        yellow: g.yellow,
        primaryDark: g.primaryDark,
        primaryLight: g.primaryDark,
        activeLight: g.activeLight,
        premiumGradient: g.premiumGradient,
    },
    C = {
        disconnect: g.disconnect,
        join: g.join,
        red: g.redGlow,
        white: g.white,
        green: g.greenGlow,
        yellow: g.yellow,
        primaryDark: g.primaryDark,
        primaryLight: g.primaryDark,
        activeLight: g.activeLight,
        premiumGradient: g.premiumGradient,
    };
function A(e) {
    var t,
        {
            ref: n,
            color: a,
            caretColor: s,
            isActive: l = !1,
            className: c,
            iconClassName: E,
            onPopoutClick: y,
            popoutOpen: S = !1,
            popoutDisabled: A = !1,
            isTrayButton: N,
            applyStyles: P = !1,
        } = e,
        R = v(e, [
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
    let w = (0, m.Z)(a, l),
        D = null != s ? s : w,
        x = (0, d.Z)("(max-width: 456px)"),
        L = i.useRef(null),
        j = i.useContext(p.h9);
    i.useEffect(() => {
        null != L.current && (j ? L.current.pause() : L.current.play());
    }, [j]);
    let M = null != (t = R.onContextMenu) ? t : y,
        k = null == y && !N,
        U = null != y && !N,
        G = N && null != y,
        Z = (0, r.jsx)(
            I,
            O(b({}, R), {
                grow: !1,
                onContextMenu: M,
                iconClassName: o()(E, g.centerIcon, k && g.fullRegionIcon),
                className: o()(
                    x || P ? c : null,
                    l && g.active,
                    g.centerButton,
                    C[w],
                    k && g.fullRegionButton,
                    G && g.attachedButton,
                ),
            }),
        );
    return x
        ? Z
        : (0, r.jsxs)("div", {
              ref: n,
              className: o()(
                  g.attachedCaretButtonContainer,
                  S && g.popoutOpen,
                  c,
                  U && [g.fullRegionDropdownButton, T[w]],
              ),
              children: [
                  Z,
                  null != y
                      ? (0, r.jsx)(_.Z, {
                            children: (0, r.jsx)(u.P3F, {
                                "aria-label": h.intl.string(h.t.PdRCRg),
                                onClick: A ? void 0 : y,
                                className: o()(
                                    g.contextMenuNub,
                                    N && g.attachedCaret,
                                    C[D],
                                    S && [g.popoutOpen, g.active],
                                    A && g.disabled,
                                ),
                                children: (0, r.jsx)(f.Z, {
                                    className: o()(g.contextMenuCaret, S && g.open, A && g.disabled),
                                }),
                            }),
                        })
                      : null,
              ],
          });
}
