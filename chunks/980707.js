"use strict";
n.d(t, { W: () => eA, X: () => eh }), n(321073);
var i,
    r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(812729),
    d = n.n(o),
    c = n(741918),
    u = (((i = {}).UPDATE_ITEMS = "UPDATE_ITEMS"), (i.SET_FOCUS_PATH = "SET_FOCUS_PATH"), i);
function _(e, t) {
    return e.findIndex((e) => t === e.key);
}
function E(e) {
    return e.focusPath[e.focusPath.length - 1];
}
function A(e) {
    let t = e.items;
    for (let n = 0; n < e.focusPath.length - 1; n++) {
        if (null == t) return;
        let i = _(t, e.focusPath[n]);
        t = t[i].children;
    }
    return t;
}
function h(e, t) {
    let n = e,
        i = [];
    for (let e = 0; e < t.length && null != n; e++) {
        let r = t[e],
            a = _(n, r);
        if (a < 0 || a >= n.length) {
            let e = n[0];
            null != e && i.push(e.key);
            break;
        }
        i.push(r), (n = n[a].children);
    }
    return i;
}
function I(e) {
    let t = E(e),
        n = A(e);
    return null == n ? -1 : _(n, t);
}
function f(e, t) {
    switch (t.type) {
        case c.X2.NAVIGATE_UP:
            let n = E(e),
                i = A(e);
            if (null == i) return e;
            let r = (_(i, n) - 1) % i.length;
            if ((r < 0 && (r = i.length - 1), null == i[r])) return e;
            let a = { ...e, focusPath: [...e.focusPath.slice(0, -1), i[r].key] };
            return { ...a, focusIndex: I(a) };
        case c.X2.NAVIGATE_DOWN:
            let s = E(e),
                l = A(e);
            if (null == l) return e;
            let o = (_(l, s) + 1) % l.length;
            if (null == l[o]) return e;
            let d = { ...e, focusPath: [...e.focusPath.slice(0, -1), l[o].key] };
            return { ...d, focusIndex: I(d) };
        case c.X2.NAVIGATE_IN:
            return (function (e) {
                let t = E(e),
                    n = A(e);
                if (null == n) return e;
                let i = n[_(n, t)],
                    r = i?.children?.[0];
                if (null == r) return e;
                let a = { ...e, focusPath: [...e.focusPath, r.key] };
                return { ...a, focusIndex: I(a) };
            })(e);
        case c.X2.NAVIGATE_OUT:
            if (e.focusPath.length <= 1) return e;
            let u = { ...e, focusPath: e.focusPath.slice(0, -1) };
            return { ...u, focusIndex: I(u) };
        case "UPDATE_ITEMS":
            return (function (e, t) {
                let { items: n } = t,
                    i = { ...e, items: n, focusPath: h(n, e.focusPath) };
                return { ...i, focusIndex: I(i) };
            })(e, t);
        case "SET_FOCUS_PATH":
            return (function (e, t) {
                let { path: n } = t,
                    i = { ...e, focusPath: h(e.items, n) };
                return { ...i, focusIndex: I(i) };
            })(e, t);
        case c.X2.SELECT_FOCUSED_ITEM:
            return e;
        default:
            throw Error(`Menu navigator was given an unhandled action ${t.type}`);
    }
}
var p = n(602034),
    T = n(508382),
    m = n(315710),
    g = n(364522),
    S = n(289873),
    N = n(955572),
    C = n(775602);
let R = (0, n(945810).mj)({
    name: "2025-11-mana-context-menu",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function O(e) {
    return R.useConfig({ location: e }).enabled;
}
var L = n(477782),
    D = n(900283),
    y = n(32271);
function v() {
    let e = O("MenuSeparator");
    return (0, r.jsx)("div", {
        role: "separator",
        className: y.separator,
        style: { "--custom-menu-separator-margin": e ? "8px 0" : "8px" },
    });
}
let b = {
    default: y.colorDefault,
    brand: y.colorBrand,
    danger: y.colorDanger,
    premium: y.colorPremium,
    "premium-gradient": y.colorPremiumGradient,
    success: y.colorSuccess,
};
function M(e) {
    let { contents: t, label: n, className: i, color: a = "default" } = e;
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              "aria-label": n,
              role: "group",
              className: i,
              children: [
                  null != n
                      ? (0, r.jsx)("div", { className: l()(y.groupLabel, y.hideInteraction, b[a]), children: n })
                      : null,
                  t,
              ],
          });
}
var P = n(939249),
    U = n(834730),
    w = n(508770),
    G = n(320448);
function x(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function k(e) {
    C.Ay.keyboardModeEnabled && e.current?.scrollIntoView({ block: "nearest" });
}
var F = n(745396),
    V = n(379261);
function B(e) {
    return O("MenuLabel") ? (0, r.jsx)(V.r, { children: e.children }) : e.children;
}
var H = n(844222),
    j = n(545442),
    W = n(133171),
    Y = n(486020);
function K(e) {
    let { accessory: t, isFocused: n } = e,
        { reducedMotion: i } = a.useContext(H.C);
    switch (t.type) {
        case "icon": {
            let { type: e, icon: n, color: i = "currentColor", className: a, ...s } = t;
            return (0, r.jsx)("div", {
                className: y.iconContainerLeft,
                children: (0, r.jsx)(n, { "aria-hidden": !0, color: i, ...s, className: l()(y.icon, a) }),
            });
        }
        case "emoji": {
            let e = (function (e, t, n) {
                let { emojiId: i, src: r, animated: a = !1 } = e;
                return null != i ? Y.Ay.getEmojiURL({ id: i, animated: a && (!n || t), size: 18 }) : r;
            })(t, n, i.enabled);
            return (0, r.jsx)("div", {
                className: y.iconContainerLeft,
                children: (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: e, className: y.icon }),
            });
        }
        case "image":
            return (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: y.imageAccessory });
        case "avatar":
            return (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: y.avatarAccessory });
        case "roleDot": {
            let { variant: e, color: n, colors: i } = t;
            return (0, r.jsx)("div", {
                className: y.roleDotAccessory,
                children:
                    "dot" === e
                        ? (0, r.jsx)(j.W, { color: n, colors: i, background: !1, tooltip: !1 })
                        : (0, r.jsx)(j.R, { color: n, colors: i ?? null }),
            });
        }
        case "status": {
            let { status: e } = t;
            return (0, r.jsx)("div", {
                className: y.statusAccessory,
                children: (0, r.jsx)(W.nW, { status: e, size: 10, color: n ? "currentColor" : void 0 }),
            });
        }
        case "guildTag":
            return (0, r.jsx)("div", { className: y.guildTagAccessory, children: t.element });
    }
}
function $(e) {
    let { indicator: t } = e,
        { type: n, icon: i, color: a = "currentColor", className: s, ...o } = t;
    return (0, r.jsx)("div", {
        className: y.iconContainer,
        children: (0, r.jsx)(i, { "aria-hidden": !0, color: a, ...o, className: l()(y.icon, s) }),
    });
}
var z = n(883632);
function q(e) {
    let {
            color: t = "default",
            label: n,
            void_label: i,
            icon: s,
            iconLeft: o,
            leadingAccessory: d,
            trailingIndicator: c,
            shortcut: u,
            subtext: _,
            subtextLineClamp: E,
            hasSubmenu: A,
            loading: h,
            badge: I,
            disabled: f,
            isFocused: p,
            menuItemProps: T,
            action: m,
            onClose: g,
            onFocus: N,
            className: C,
            focusedClassName: R,
            dontCloseOnActionIfHoldingShiftKey: L,
            dontCloseOnAction: v,
            iconProps: M,
        } = e,
        { onSelect: V, onInteraction: H } = a.useContext(D.x),
        j = a.useRef(null),
        W = O("MenuItem"),
        Y = a.useCallback(
            (e) => {
                if ((H?.({ type: D.Q.DEFAULT }), null == m)) return !1;
                (e.shiftKey && L) || v || g(),
                    e.persist(),
                    V?.(),
                    (e.nativeEvent.view ?? window).requestAnimationFrame(() => m(e));
            },
            [m, g, V, L, v, H],
        );
    return (
        a.useEffect(() => {
            p && (k(j), N?.());
        }, [p, N]),
        (0, r.jsxs)(P.D, {
            innerRef: j,
            className: l()(y.item, y.labelContainer, z.nM, b[t], C, { [y.disabled]: f, [y.focused]: p, [R ?? ""]: p }),
            onClick: f ? void 0 : Y,
            "aria-disabled": f,
            ...T,
            "data-menu-item": "true",
            "data-marquee-active": p,
            children: [
                W || d?.type === "status"
                    ? null != d && (0, r.jsx)(K, { accessory: d, isFocused: p })
                    : (0, F.O)(o)
                      ? o
                      : null != o &&
                        (0, r.jsx)("div", {
                            className: y.iconContainerLeft,
                            children: (0, r.jsx)(o, {
                                color: "currentColor",
                                ...M,
                                className: l()(y.icon, M?.className),
                            }),
                        }),
                (0, r.jsxs)("div", {
                    className: y.label,
                    children: [
                        (0, r.jsx)(B, { children: x(i ?? n, e) }),
                        null != _ &&
                            (0, r.jsx)(U.E, {
                                variant: "text-xs/normal",
                                className: l()(y.subtext, { [y.subtextLineClamp]: null != E }),
                                lineClamp: E,
                                children: _,
                            }),
                    ],
                }),
                null != u && (0, r.jsx)("div", { className: y.shortcutContainer, children: u }),
                null != I && (0, r.jsx)("div", { className: y.badgeContainer, children: (0, r.jsx)(w.E, { type: I }) }),
                h &&
                    (0, r.jsx)("div", {
                        className: y.iconContainer,
                        children: (0, r.jsx)(S.y, { type: S.y.Type.PULSING_ELLIPSIS }),
                    }),
                W
                    ? null != c && (0, r.jsx)($, { indicator: c })
                    : (0, F.O)(s)
                      ? s
                      : null != s &&
                        (0, r.jsx)("div", {
                            className: y.iconContainer,
                            children: (0, r.jsx)(s, {
                                color: "currentColor",
                                ...M,
                                className: l()(y.icon, M?.className),
                            }),
                        }),
                A &&
                    (0, r.jsx)("div", {
                        className: y.iconContainer,
                        children: (0, r.jsx)(G._, { size: "md", color: "currentColor", className: y.caret }),
                    }),
            ],
        })
    );
}
var Z = n(502939),
    X = n(623646),
    Q = n(962125);
function J(e) {
    let { parentItem: t, isFocused: n, menuSubmenuProps: i, rows: s, rowHeight: l, onScroll: o, listClassName: d } = e,
        c = a.useRef(null),
        u = a.useRef(null),
        _ = a.useRef(null),
        E = a.useRef(null),
        { isUsingKeyboardNavigation: A, focusIndex: h, ...I } = i;
    a.useLayoutEffect(() => {
        n && (k(c), _.current?.focus());
    }, [n]),
        a.useEffect(() => {
            n && h >= 0 && A && E.current?.scrollRowIntoView(h);
        }, [n, A, h]);
    let f = a.useCallback((e) => s[e], [s]);
    function p() {
        return (
            s.length > 0 &&
            (0, r.jsx)("div", {
                className: y.submenuPaddingContainer,
                children: (0, r.jsx)("div", {
                    className: y.submenu,
                    ...I,
                    ref: _,
                    children: (0, r.jsx)(Q.A, {
                        ref: E,
                        className: d,
                        listPadding: [6, 0, 6, 8],
                        onScroll: o,
                        renderRow: f,
                        rowCount: s.length,
                        rowHeight: l,
                    }),
                }),
            })
        );
    }
    if ((0, Z.D)("MenuSubmenuListItem"))
        return (0, r.jsx)(T.Ow, {
            spacing: 4,
            placement: "right-start",
            autoFlip: !0,
            portal: !1,
            viewportPadding: 48,
            maxHeight: 360,
            renderLayer: p,
            children: (e) => {
                let { ref: n, props: i } = e;
                return (0, r.jsx)("div", { ref: n, ...i, children: t });
            },
        });
    let m = (0, r.jsx)(X.Q, {
        targetRef: u,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        fixed: !0,
        spacing: 4,
        position: "right",
        align: "top",
        className: y.submenuLayer,
        children: p,
    });
    return (0, r.jsxs)("div", { ref: c, children: [(0, r.jsx)("div", { ref: u }), t, n ? m : null] });
}
let ee = a.createContext("right-start");
function et(e) {
    let t = a.useContext(ee),
        { subMenuClassName: n, parentItem: i, isFocused: s, menuSubmenuProps: o, renderSubmenu: d } = e,
        { focusIndex: c, isUsingKeyboardNavigation: u, ..._ } = o,
        E = a.useRef(null),
        A = a.useRef(null),
        h = a.useRef(null),
        [I, f] = a.useState(!1);
    a.useLayoutEffect(() => {
        f(!0);
    }, []),
        a.useLayoutEffect(() => {
            s && k(E);
        }, [s]);
    let p = (0, r.jsx)("div", {
            className: y.submenuPaddingContainer,
            children: (0, r.jsx)("div", {
                className: l()(y.submenu, n),
                ..._,
                ref: h,
                children: (0, r.jsx)(g.Ip, { className: y.scroller, children: d() }),
            }),
        }),
        m = (0, Z.D)("MenuSubmenuItem"),
        S = O("MenuSubmenuItem"),
        [N, C] = a.useState(!1);
    if (m)
        return (0, r.jsx)(T.Ow, {
            open: N || s,
            viewportPadding: 48,
            maxHeight: 360,
            onOpenChange: C,
            spacing: S ? -4 : 4,
            placement: t,
            portal: !1,
            crossAccessFlip: !1,
            trigger: "hover",
            renderLayer: (e) => {
                let { placement: t } = e;
                return (0, r.jsx)(ee.Provider, { value: t, children: p });
            },
            children: (e) => {
                let { ref: t, props: n } = e;
                return (0, r.jsx)("div", { ref: t, ...n, children: i });
            },
        });
    let R = (0, r.jsx)(X.Q, {
        targetRef: A,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        fixed: !0,
        spacing: 4,
        position: "right",
        align: "top",
        className: y.submenuLayer,
        children: () => p,
    });
    return (0, r.jsxs)("div", { ref: E, children: [(0, r.jsx)("div", { ref: A }), i, s && I ? R : null] });
}
function en(e) {
    let {
            children: t,
            color: n = "default",
            isFocused: i = !1,
            disabled: s = !1,
            keepItemStyles: o = !1,
            menuItemProps: d,
            action: c,
            dontCloseOnActionIfHoldingShiftKey: u,
            dontCloseOnAction: _,
            onClose: E,
        } = e,
        A = a.useRef(null);
    a.useEffect(() => {
        i && k(A);
    }, [i]);
    let h = a.useCallback(
            (e) => {
                if (null == c) return !1;
                (e.shiftKey && u) || _ || E(), e.persist(), requestAnimationFrame(() => c(e));
            },
            [c, E, u, _],
        ),
        I = o ? l()(y.item, b[n], { [y.focused]: i }) : y.customItem;
    return (0, r.jsx)(P.D, {
        innerRef: A,
        className: I,
        onClick: s ? void 0 : h,
        "aria-disabled": s,
        ...d,
        children: t({ color: n, disabled: s, isFocused: i }),
    });
}
var ei = n(658675);
function er(e) {
    let {
            color: t = "default",
            label: n,
            void_label: i,
            checked: s,
            subtext: o,
            subtextLineClamp: d,
            leftIcon: c,
            leadingAccessory: u,
            disabled: _,
            isFocused: E,
            menuItemProps: A,
            action: h,
            className: I,
            focusedClassName: f,
        } = e,
        { onInteraction: p } = a.useContext(D.x),
        T = O("MenuCheckboxItem"),
        m = a.useRef(null);
    a.useEffect(() => {
        E && k(m);
    }, [E]);
    let g = a.useCallback(
        (e) => {
            h(e), p?.({ type: D.Q.CHECKBOX });
        },
        [h, p],
    );
    return (0, r.jsxs)(P.D, {
        innerRef: m,
        className: l()(y.item, y.checkboxContainer, y.labelContainer, b[t], I, {
            [y.disabled]: _,
            [y.focused]: E,
            [f ?? ""]: E,
        }),
        onClick: _ ? void 0 : g,
        ...A,
        "aria-checked": s,
        "aria-disabled": _,
        children: [
            T
                ? null != u && (0, r.jsx)(K, { accessory: u, isFocused: E })
                : (0, F.O)(c)
                  ? c
                  : null != c &&
                    (0, r.jsx)("div", {
                        className: y.iconContainerLeft,
                        children: (0, r.jsx)(c, { color: "currentColor", className: y.icon }),
                    }),
            (0, r.jsxs)("div", {
                className: y.label,
                children: [
                    (0, r.jsx)(B, { children: x(i ?? n, { isFocused: E, disabled: _ }) }),
                    null != o &&
                        (0, r.jsx)(U.E, {
                            variant: "text-xs/normal",
                            className: l()(y.subtext, { [y.subtextLineClamp]: null != d }),
                            lineClamp: d,
                            children: o,
                        }),
                ],
            }),
            (0, r.jsx)("div", { className: y.iconContainer, children: (0, r.jsx)(ei.P, { checked: s, disabled: _ }) }),
        ],
    });
}
var ea = n(144228);
function es(e) {
    let {
            color: t = "default",
            label: n,
            void_label: i,
            checked: s,
            subtext: o,
            subtextLineClamp: d,
            leftIcon: c,
            leadingAccessory: u,
            disabled: _,
            isFocused: E,
            menuItemProps: A,
            action: h,
        } = e,
        { onInteraction: I } = a.useContext(D.x),
        f = O("MenuRadioItem"),
        p = a.useRef(null);
    a.useEffect(() => {
        E && k(p);
    }, [E]);
    let T = a.useCallback(
        (e) => {
            h(e), I?.({ type: D.Q.RADIO });
        },
        [h, I],
    );
    return (0, r.jsxs)(P.D, {
        innerRef: p,
        className: l()(y.item, y.labelContainer, b[t], { [y.disabled]: _, [y.focused]: E }),
        onClick: _ ? void 0 : T,
        ...A,
        "aria-checked": s,
        "aria-disabled": _,
        children: [
            f
                ? null != u && (0, r.jsx)(K, { accessory: u, isFocused: E })
                : (0, F.O)(c)
                  ? c
                  : null != c &&
                    (0, r.jsx)("div", {
                        className: y.iconContainerLeft,
                        children: (0, r.jsx)(c, { color: "currentColor", className: y.icon }),
                    }),
            (0, r.jsxs)("div", {
                className: y.label,
                children: [
                    (0, r.jsx)(B, { children: x(i ?? n, { isFocused: E, disabled: _ }) }),
                    null != o &&
                        (0, r.jsx)(U.E, {
                            variant: "text-xs/normal",
                            className: l()(y.subtext, { [y.subtextLineClamp]: null != d }),
                            lineClamp: d,
                            children: o,
                        }),
                ],
            }),
            (0, r.jsx)("div", { className: y.iconContainer, children: (0, r.jsx)(ea.T, { checked: s, disabled: _ }) }),
        ],
    });
}
var el = n(243721);
function eo(e) {
    let {
            color: t = "default",
            label: n,
            subtext: i,
            subtextLineClamp: s,
            checked: o,
            disabled: d = !1,
            isFocused: c,
            menuItemProps: u,
            action: _,
            className: E,
        } = e,
        { onInteraction: A } = a.useContext(D.x),
        h = a.useRef(null);
    a.useEffect(() => {
        c && k(h);
    }, [c]);
    let I = a.useCallback(() => {
        _(!o), A?.({ type: D.Q.SWITCH });
    }, [_, o, A]);
    return (0, r.jsxs)(P.D, {
        innerRef: h,
        className: l()(y.item, y.switchItem, b[t], E, { [y.disabled]: d, [y.focused]: c }),
        onClick: d ? void 0 : I,
        "aria-checked": o,
        "aria-disabled": d,
        ...u,
        children: [
            null != n
                ? (0, r.jsx)("div", {
                      className: y.labelContainer,
                      children: (0, r.jsxs)("div", {
                          className: y.label,
                          children: [
                              (0, r.jsx)(B, { children: n }),
                              null != i &&
                                  (0, r.jsx)(U.E, {
                                      variant: "text-xs/normal",
                                      className: l()(y.subtext, { [y.subtextLineClamp]: null != s }),
                                      lineClamp: s,
                                      children: i,
                                  }),
                          ],
                      }),
                  })
                : null,
            (0, r.jsx)("div", {
                className: y.switchContainer,
                "aria-hidden": !0,
                children: (0, r.jsx)(el.d, { checked: o, disabled: d, displayOnly: !0 }),
            }),
        ],
    });
}
var ed = n(292666);
let ec = { position: "absolute", visibility: "hidden", pointerEvents: "none", whiteSpace: "nowrap" };
function eu(e) {
    let {
            color: t = "default",
            label: n,
            value: i,
            onChange: s,
            placeholder: o = "",
            maxLength: d,
            disabled: c = !1,
            "aria-label": u,
            isFocused: _,
            menuItemProps: E,
        } = e,
        { onInteraction: A } = a.useContext(D.x),
        h = a.useRef(null),
        I = a.useRef(null),
        f = a.useRef(null),
        [p, T] = a.useState(null);
    a.useLayoutEffect(() => {
        if ("" === o || null == f.current || null == I.current) return void T(null);
        let e = I.current,
            t = window.getComputedStyle(e),
            n = f.current;
        (n.style.font = t.font), (n.style.letterSpacing = t.letterSpacing);
        let i = n.getBoundingClientRect().width,
            r = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight);
        T(Math.ceil(i + (Number.isNaN(r) ? 24 : r) + 2));
    }, [o]),
        a.useEffect(() => {
            _ && (k(h), I.current?.focus());
        }, [_]);
    let m = a.useCallback(
        (e) => {
            s(e), A?.({ type: D.Q.DEFAULT });
        },
        [s, A],
    );
    return (0, r.jsxs)("div", {
        ref: h,
        className: l()(y.item, y.textInputItem, y.hideInteraction, b[t], { [y.disabled]: c }),
        "aria-disabled": c,
        ...E,
        children: [
            null != n
                ? (0, r.jsx)("div", {
                      className: y.labelContainer,
                      children: (0, r.jsx)("div", { className: y.label, children: n }),
                  })
                : null,
            (0, r.jsxs)("div", {
                className: y.textInputWrapper,
                style: null != p ? { minWidth: p } : void 0,
                children: [
                    (0, r.jsx)("span", { ref: f, "aria-hidden": !0, style: ec, children: o }),
                    (0, r.jsx)(ed.k, {
                        inputRef: I,
                        value: i,
                        onChange: m,
                        placeholder: o,
                        maxLength: d,
                        disabled: c,
                        "aria-label": u,
                    }),
                ],
            }),
        ],
    });
}
function e_(e) {
    let {
            color: t = "default",
            label: n,
            control: i,
            disabled: s,
            isFocused: o,
            isUsingKeyboardNavigation: d = !1,
            showDefaultFocus: c = !1,
            interactive: u = !0,
            menuItemProps: _,
            onClose: E,
        } = e,
        { onInteraction: A } = a.useContext(D.x),
        h = a.useRef(null),
        I = a.useRef(null);
    a.useLayoutEffect(() => {
        o ? (k(h), I.current?.focus()) : d && I.current?.blur?.();
    }, [o, d]);
    let f = a.useCallback(() => {
            I.current?.activate?.() && E();
        }, [E]),
        p = i(
            {
                onClose: E,
                disabled: s,
                isFocused: o,
                onInteraction: a.useCallback(
                    (e) => {
                        A?.({ type: e ?? D.Q.DEFAULT });
                    },
                    [A],
                ),
            },
            I,
        );
    return (0, r.jsxs)("div", {
        onClick: f,
        className: l()(y.item, b[t], {
            [y.disabled]: s,
            [y.focused]: c && o,
            [y.hideInteraction]: !c,
            [y.nonInteractive]: !u,
        }),
        "aria-disabled": s,
        ..._,
        children: [
            null != n
                ? (0, r.jsx)("div", {
                      className: y.labelContainer,
                      children: (0, r.jsx)("div", { className: y.label, children: n }),
                  })
                : null,
            p,
        ],
    });
}
function eE(e) {
    let {
            color: t = "default",
            disabled: n,
            isFocused: i,
            showDefaultFocus: s = !1,
            menuItemProps: o,
            children: d,
        } = e,
        c = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            if (!i) return;
            let e = c.current;
            if (null == e) return;
            k(c);
            let t = e.querySelector('[tabindex="0"]');
            t?.focus();
        }, [i]),
        (0, r.jsx)("div", {
            ref: c,
            className: l()(y.item, b[t], { [y.disabled]: n, [y.focused]: s && i, [y.hideInteraction]: !s }),
            "aria-disabled": n,
            ...o,
            children: d,
        })
    );
}
function eA(e) {
    let {
            navId: t,
            variant: n = "flexible",
            hideScroller: i = !1,
            className: s,
            children: o,
            onClose: _,
            onSelect: E,
            onInteraction: A,
        } = e,
        h = (function e(t) {
            return (function e(t) {
                return null == t
                    ? []
                    : a.Children.toArray(t).flatMap((t) =>
                          null == t
                              ? []
                              : Array.isArray(t)
                                ? e(t)
                                : t.type === a.Fragment
                                  ? (e(t.props.children) ?? [])
                                  : [t],
                      );
            })(t).reduce((t, n) => {
                if (n.type === L.bX) return t.push({ type: "separator", navigable: !1 }), t;
                if (n.type === L.rX) {
                    let i = e(n.props.children);
                    return (
                        i.length > 0 &&
                            (t.push({ type: "groupstart", length: i.length, navigable: !1, props: n.props }),
                            t.push(...i),
                            t.push({ type: "groupend", length: i.length, navigable: !1, props: n.props })),
                        t
                    );
                }
                if (n.type === L.Dr)
                    return (
                        t.push(
                            null != n.props.render
                                ? {
                                      type: "customitem",
                                      key: n.props.id,
                                      navigable: null == n.props.navigable || n.props.navigable,
                                      render: n.props.render,
                                      props: n.props,
                                  }
                                : {
                                      type: "item",
                                      key: n.props.id,
                                      navigable: !0,
                                      label: n.props.label,
                                      void_label: n.props.void_label,
                                      children: n.props.children ? e(n.props.children) : void 0,
                                      onChildrenScroll: n.props.onChildrenScroll,
                                      props: n.props,
                                      childRowHeight: n.props.childRowHeight,
                                      listClassName: n.props.listClassName,
                                      subMenuClassName: n.props.subMenuClassName,
                                  },
                        ),
                        t
                    );
                if (n.type === L.sL)
                    return t.push({ type: "checkbox", key: n.props.id, navigable: !0, props: n.props }), t;
                if (n.type === L.iD)
                    return t.push({ type: "radio", key: n.props.id, navigable: !0, props: n.props }), t;
                else if (n.type === L.fP)
                    return t.push({ type: "switch", key: n.props.id, navigable: !0, props: n.props }), t;
                else if (n.type === L.Yn)
                    return t.push({ type: "textinput", key: n.props.id, navigable: !0, props: n.props }), t;
                else if (n.type === L.aK)
                    return (
                        t.push(
                            null != n.props.control
                                ? { type: "control", key: n.props.id, navigable: !0, props: n.props }
                                : {
                                      type: "compositecontrol",
                                      key: n.props.id,
                                      navigable: !1 !== n.props.interactive,
                                      children: n.props.children,
                                      props: n.props,
                                  },
                        ),
                        t
                    );
                throw Error(
                    `Menu API only allows Items and groups of Items as children. Received ${n?.type ?? n ?? typeof n} (${typeof n}) instead`,
                );
            }, []);
        })(o),
        I = (function e(t) {
            return t.reduce(
                (t, n) => (
                    n.navigable &&
                        t.push({
                            key: n.key,
                            children: "item" === n.type && null != n.children ? e(n.children) : void 0,
                        }),
                    t
                ),
                [],
            );
        })(h),
        S = a.useRef([]);
    d()(S.current, I) || (S.current = I);
    let R = O("Menu"),
        b = h.find((e) => null != e.key)?.key,
        P = (function (e) {
            let {
                    navId: t,
                    items: n,
                    initialFocusPath: i,
                    onSelect: r,
                    enabled: s = !0,
                    closeMenu: l,
                    defaultIsUsingKeyboardNavigation: o = !1,
                } = e,
                d = a.useRef(s);
            a.useLayoutEffect(() => {
                d.current = s;
            }, [s]);
            let [_, E] = a.useReducer(f, { items: n, focusPath: i, focusIndex: -1 }),
                A = a.useMemo(() => (0, p.nF)(E, 30), [E]);
            a.useEffect(() => {
                E({ type: u.UPDATE_ITEMS, items: n });
            }, [n]);
            let { focusPath: h } = _,
                [I, T] = a.useState(!1),
                [m, g] = a.useState(o),
                [{ onItemFocusMemoizer: S, onItemMouseEnterMemoizer: N }] = a.useState(() => ({
                    onItemFocusMemoizer: new p.Lp((e) => () => {
                        T(!0), E({ type: u.SET_FOCUS_PATH, path: e.split("--") });
                    }),
                    onItemMouseEnterMemoizer: new p.Lp((e) => () => {
                        g(!1), E({ type: u.SET_FOCUS_PATH, path: e.split("--") });
                    }),
                })),
                C = a.useCallback(
                    (e) => {
                        var n, i, a;
                        if (!d.current) return;
                        e.key === c.D$.ESCAPE && null != l && (e.stopPropagation(), e.preventDefault(), l());
                        let s = (function (e) {
                            switch (e.key) {
                                case c.D$.ENTER:
                                case c.D$.SPACE:
                                    return c.X2.SELECT_FOCUSED_ITEM;
                                case c.D$.UP:
                                    return c.X2.NAVIGATE_UP;
                                case c.D$.DOWN:
                                    return c.X2.NAVIGATE_DOWN;
                                case c.D$.RIGHT:
                                    return c.X2.NAVIGATE_IN;
                                case c.D$.LEFT:
                                    return c.X2.NAVIGATE_OUT;
                            }
                        })(e);
                        switch (s) {
                            case c.X2.NAVIGATE_UP:
                            case c.X2.NAVIGATE_DOWN:
                            case c.X2.NAVIGATE_IN:
                            case c.X2.NAVIGATE_OUT:
                                let o;
                                if (
                                    ("textarea" === (o = (n = e.target).tagName.toLowerCase()) ||
                                        ("input" === o
                                            ? ["text", "search", "email", "url", "tel", "password"].includes(n.type)
                                            : n.isContentEditable)) &&
                                    (s === c.X2.NAVIGATE_IN || s === c.X2.NAVIGATE_OUT)
                                )
                                    return;
                                e.preventDefault(), e.stopPropagation(), g(!0), A({ type: s });
                                return;
                            case c.X2.SELECT_FOCUSED_ITEM:
                                if (e.repeat || e.target.tabIndex >= 0) return;
                                if ((e.preventDefault(), e.stopPropagation(), g(!1), A({ type: s }), null != r))
                                    return void r(h);
                                let u =
                                    ((i = e.target.ownerDocument ?? document),
                                    (a = null != h ? `${(0, p.M4)(t, h.join("--"))}` : t),
                                    i.getElementById(a));
                                u?.click();
                        }
                    },
                    [A, t, h, r, l],
                ),
                R = a.useCallback(() => {
                    I || T(!0);
                }, [I]),
                O = a.useCallback(
                    (e) => {
                        e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && I && T(!1);
                    },
                    [I],
                ),
                L = a.useCallback(() => {
                    E({ type: u.SET_FOCUS_PATH, path: [] }), T(!1);
                }, []),
                D = a.useCallback((e) => e.every((e, t) => h[t] === e), [h]),
                y = a.useCallback(
                    () => ({
                        role: "menu",
                        id: t,
                        tabIndex: -1,
                        onKeyDown: C,
                        onFocus: R,
                        onBlur: O,
                        onMouseLeave: L,
                        "aria-activedescendant": h.length > 0 ? (0, p.M4)(t, h.join("--")) : void 0,
                    }),
                    [t, C, R, O, L, h],
                ),
                v = a.useCallback(
                    (e) => {
                        let { path: n } = e;
                        return {
                            role: "menu",
                            tabIndex: -1,
                            "aria-activedescendant": D(n) ? (0, p.M4)(t, h.join("--")) : void 0,
                            focusIndex: _.focusIndex,
                            isUsingKeyboardNavigation: m,
                        };
                    },
                    [t, h, D, _.focusIndex, m],
                ),
                b = a.useCallback(
                    (e) => {
                        let { path: n, hasSubmenu: i = !1, navigable: r = !0, role: a = "menuitem" } = e,
                            s = n.join("--");
                        return {
                            ...(i ? { "aria-expanded": D(n), "aria-haspopup": !0 } : {}),
                            role: a,
                            id: (0, p.M4)(t, s),
                            tabIndex: -1,
                            onFocus: r ? S.get(s) : () => {},
                            onMouseEnter: r ? N.get(s) : () => {},
                        };
                    },
                    [t, D, S, N],
                );
            return a.useMemo(
                () => ({
                    dispatch: A,
                    getContainerProps: y,
                    getSubmenuProps: v,
                    getItemProps: b,
                    isFocused: D,
                    isUsingKeyboardNavigation: m,
                }),
                [A, y, v, b, D, m],
            );
        })({
            navId: t,
            items: S.current,
            initialFocusPath: C.Ay.keyboardModeEnabled && null != b ? [b] : [],
            closeMenu: _,
            defaultIsUsingKeyboardNavigation: C.Ay.keyboardModeEnabled,
        });
    a.useEffect(() => {
        P.isUsingKeyboardNavigation ? C.Ay.keyboardModeEnabled || (0, N.uS)() : C.Ay.keyboardModeEnabled && (0, N.Bm)();
    }, [P.isUsingKeyboardNavigation]);
    let U = a.useRef(null),
        w = a.useContext(T.jQ),
        G = "none" !== (w?.focus ?? "none");
    (0, m.tj)(U, { disable: G }),
        a.useEffect(() => {
            G && U.current?.focus();
        }, [G]);
    let x = i ? g.d_ : g.Ip,
        k = a.useMemo(() => ({ onSelect: E, onInteraction: A }), [E, A]);
    return (0, r.jsx)(D.x.Provider, {
        value: k,
        children: (0, r.jsx)("div", {
            className: l()(y.menu, y[n], s),
            style: {
                "--custom-menu-viewport-padding": R ? "48px" : "16px",
                "--custom-menu-flexible-min-width": R ? "144px" : "188px",
            },
            ...P.getContainerProps(),
            ref: U,
            "aria-label": e["aria-label"],
            children: (0, r.jsxs)(x, {
                className: y.scroller,
                children: [
                    0 === h.length &&
                        (0, r.jsx)(q, {
                            disabled: !0,
                            void_label: () => (0, r.jsx)(eI, {}),
                            menuItemProps: P.getItemProps({ path: ["empty"] }),
                            isFocused: !1,
                            onFocus: () => {},
                            onClose: _,
                        }),
                    h.length > 0 &&
                        (function e(t, n, i, a) {
                            let s = 0,
                                l = [];
                            return t.reduce((t, o, d) => {
                                let c = l.length > 0 ? l[l.length - 1] : t;
                                switch (o.type) {
                                    case "separator":
                                        c.push((0, r.jsx)(v, {}, `separator-${d}`)), (s = 0);
                                        break;
                                    case "groupstart":
                                        s > 0 && o.length > 0 && (c.push((0, r.jsx)(v, {}, `separator-${d}`)), (s = 0)),
                                            l.push([]);
                                        break;
                                    case "groupend":
                                        l.length > 0 &&
                                            t.push((0, r.jsx)(M, { contents: l.pop(), ...o.props }, `group-${d}`));
                                        break;
                                    case "item": {
                                        let {
                                                children: t,
                                                childRowHeight: l,
                                                onChildrenScroll: d,
                                                listClassName: u,
                                                subMenuClassName: _,
                                            } = o,
                                            E = null != t,
                                            A = [...i, o.key],
                                            h = n.isFocused(A),
                                            I = (0, r.jsx)(
                                                q,
                                                {
                                                    ...o.props,
                                                    ...(null != o.label
                                                        ? { label: o.label }
                                                        : { void_label: o.void_label }),
                                                    hasSubmenu: null != t,
                                                    isFocused: h,
                                                    menuItemProps: {
                                                        ...n.getItemProps({ path: A, hasSubmenu: E }),
                                                        ...(null != t ? { "aria-haspopup": !0 } : {}),
                                                    },
                                                    onClose: a,
                                                },
                                                o.key,
                                            );
                                        E
                                            ? null != l
                                                ? c.push(
                                                      (0, r.jsx)(
                                                          J,
                                                          {
                                                              ...o.props,
                                                              parentItem: I,
                                                              isFocused: h,
                                                              menuSubmenuProps: n.getSubmenuProps({ path: A }),
                                                              rows: e(t, n, A, a),
                                                              rowHeight: l,
                                                              onScroll: d,
                                                              listClassName: u,
                                                          },
                                                          `${o.key}-submenu`,
                                                      ),
                                                  )
                                                : c.push(
                                                      (0, r.jsx)(
                                                          et,
                                                          {
                                                              ...o.props,
                                                              subMenuClassName: _,
                                                              parentItem: I,
                                                              isFocused: h,
                                                              menuSubmenuProps: n.getSubmenuProps({ path: A }),
                                                              renderSubmenu: () => e(t, n, A, a),
                                                          },
                                                          `${o.key}-submenu`,
                                                      ),
                                                  )
                                            : c.push(I),
                                            s++;
                                        break;
                                    }
                                    case "customitem": {
                                        let e = [...i, o.key];
                                        c.push(
                                            (0, r.jsx)(
                                                en,
                                                {
                                                    ...o.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({ path: e, navigable: o.navigable }),
                                                    onClose: a,
                                                    children: o.render,
                                                },
                                                o.key,
                                            ),
                                        ),
                                            s++;
                                        break;
                                    }
                                    case "checkbox": {
                                        let e = [...i, o.key];
                                        c.push(
                                            (0, r.jsx)(
                                                er,
                                                {
                                                    ...o.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({
                                                        path: e,
                                                        role: "menuitemcheckbox",
                                                    }),
                                                },
                                                o.key,
                                            ),
                                        ),
                                            s++;
                                        break;
                                    }
                                    case "radio": {
                                        let e = [...i, o.key];
                                        c.push(
                                            (0, r.jsx)(
                                                es,
                                                {
                                                    ...o.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({ path: e, role: "menuitemradio" }),
                                                },
                                                o.key,
                                            ),
                                        ),
                                            s++;
                                        break;
                                    }
                                    case "switch": {
                                        let e = [...i, o.key];
                                        c.push(
                                            (0, r.jsx)(
                                                eo,
                                                {
                                                    ...o.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({
                                                        path: e,
                                                        role: "menuitemcheckbox",
                                                    }),
                                                },
                                                o.key,
                                            ),
                                        ),
                                            s++;
                                        break;
                                    }
                                    case "textinput": {
                                        let e = [...i, o.key];
                                        c.push(
                                            (0, r.jsx)(
                                                eu,
                                                {
                                                    ...o.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({ path: e }),
                                                },
                                                o.key,
                                            ),
                                        ),
                                            s++;
                                        break;
                                    }
                                    case "control": {
                                        let e = [...i, o.key];
                                        c.push(
                                            (0, r.jsx)(
                                                e_,
                                                {
                                                    ...o.props,
                                                    isFocused: n.isFocused(e),
                                                    isUsingKeyboardNavigation: n.isUsingKeyboardNavigation,
                                                    menuItemProps: n.getItemProps({ path: e }),
                                                    onClose: a,
                                                },
                                                o.key,
                                            ),
                                        ),
                                            s++;
                                        break;
                                    }
                                    case "compositecontrol": {
                                        let e = [...i, o.key];
                                        c.push(
                                            (0, r.jsx)(
                                                eE,
                                                {
                                                    ...o.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({ path: e }),
                                                    onClose: a,
                                                    children: o.children,
                                                },
                                                o.key,
                                            ),
                                        ),
                                            s++;
                                    }
                                }
                                return t;
                            }, []);
                        })(h, P, [], _),
                ],
            }),
        }),
    });
}
function eh() {
    return (0, r.jsx)("div", { className: l()(y.menu, y.loader, y.flexible), children: (0, r.jsx)(S.y, {}) });
}
function eI() {
    let e = "\u266B (\u3064\uFF61\u25D5\u203F\u203F\u25D5\uFF61)\u3064 \u266A",
        [t, n] = a.useState(e);
    return (
        a.useEffect(() => {
            if (C.Ay.useReducedMotion) return;
            let t = setInterval(() => {
                n((t) => (t === e ? "\u266B \u2282(\uFF61\u25D5\u203F\u203F\u25D5\uFF61\u2282) \u266A" : e));
            }, 700);
            return () => clearInterval(t);
        }, []),
        (0, r.jsx)("div", { style: { width: "100%", textAlign: "center" }, children: t })
    );
}
