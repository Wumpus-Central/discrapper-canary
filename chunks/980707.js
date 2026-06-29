"use strict";
n.d(t, { W: () => e_, X: () => eh }), n(321073);
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(812729),
    u = n.n(l),
    c = n(741918),
    d = (((i = {}).UPDATE_ITEMS = "UPDATE_ITEMS"), (i.SET_FOCUS_PATH = "SET_FOCUS_PATH"), i);
function _(e, t) {
    return e.findIndex((e) => t === e.key);
}
function h(e) {
    return e.focusPath[e.focusPath.length - 1];
}
function f(e) {
    let t = e.items;
    for (let n = 0; n < e.focusPath.length - 1; n++) {
        if (null == t) return;
        let i = _(t, e.focusPath[n]);
        t = t[i].children;
    }
    return t;
}
function p(e, t) {
    let n = e,
        i = [];
    for (let e = 0; e < t.length && null != n; e++) {
        let r = t[e],
            s = _(n, r);
        if (s < 0 || s >= n.length) {
            let e = n[0];
            null != e && i.push(e.key);
            break;
        }
        i.push(r), (n = n[s].children);
    }
    return i;
}
function E(e) {
    let t = h(e),
        n = f(e);
    return null == n ? -1 : _(n, t);
}
function m(e, t) {
    switch (t.type) {
        case c.X2.NAVIGATE_UP:
            let n = h(e),
                i = f(e);
            if (null == i) return e;
            let r = (_(i, n) - 1) % i.length;
            if ((r < 0 && (r = i.length - 1), null == i[r])) return e;
            let s = { ...e, focusPath: [...e.focusPath.slice(0, -1), i[r].key] };
            return { ...s, focusIndex: E(s) };
        case c.X2.NAVIGATE_DOWN:
            let a = h(e),
                o = f(e);
            if (null == o) return e;
            let l = (_(o, a) + 1) % o.length;
            if (null == o[l]) return e;
            let u = { ...e, focusPath: [...e.focusPath.slice(0, -1), o[l].key] };
            return { ...u, focusIndex: E(u) };
        case c.X2.NAVIGATE_IN:
            return (function (e) {
                let t = h(e),
                    n = f(e);
                if (null == n) return e;
                let i = n[_(n, t)],
                    r = i?.children?.[0];
                if (null == r) return e;
                let s = { ...e, focusPath: [...e.focusPath, r.key] };
                return { ...s, focusIndex: E(s) };
            })(e);
        case c.X2.NAVIGATE_OUT:
            if (e.focusPath.length <= 1) return e;
            let d = { ...e, focusPath: e.focusPath.slice(0, -1) };
            return { ...d, focusIndex: E(d) };
        case "UPDATE_ITEMS":
            return (function (e, t) {
                let { items: n } = t,
                    i = { ...e, items: n, focusPath: p(n, e.focusPath) };
                return { ...i, focusIndex: E(i) };
            })(e, t);
        case "SET_FOCUS_PATH":
            return (function (e, t) {
                let { path: n } = t,
                    i = { ...e, focusPath: p(e.items, n) };
                return { ...i, focusIndex: E(i) };
            })(e, t);
        case c.X2.SELECT_FOCUSED_ITEM:
            return e;
        default:
            throw Error(`Menu navigator was given an unhandled action ${t.type}`);
    }
}
var g = n(602034),
    A = n(508382),
    I = n(315710),
    T = n(364522),
    S = n(289873),
    y = n(955572),
    C = n(775602);
let N = (0, n(945810).mj)({
    name: "2025-11-mana-context-menu",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function v(e) {
    return N.useConfig({ location: e }).enabled;
}
var R = n(477782),
    O = n(900283),
    b = n(32271);
function D() {
    let e = v("MenuSeparator");
    return (0, r.jsx)("div", {
        role: "separator",
        className: b.separator,
        style: { "--custom-menu-separator-margin": e ? "8px 0" : "8px" },
    });
}
let L = {
    default: b.colorDefault,
    brand: b.colorBrand,
    danger: b.colorDanger,
    premium: b.colorPremium,
    "premium-gradient": b.colorPremiumGradient,
    success: b.colorSuccess,
};
function w(e) {
    let { contents: t, label: n, className: i, color: s = "default" } = e;
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              "aria-label": n,
              role: "group",
              className: i,
              children: [
                  null != n
                      ? (0, r.jsx)("div", { className: o()(b.groupLabel, b.hideInteraction, L[s]), children: n })
                      : null,
                  t,
              ],
          });
}
var M = n(939249),
    P = n(834730),
    x = n(508770),
    k = n(320448);
function U(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function G(e) {
    C.Ay.keyboardModeEnabled && e.current?.scrollIntoView({ block: "nearest" });
}
var F = n(745396);
function V(e) {
    let t = s.useRef(null),
        [n, i] = s.useState(null),
        a = v("MenuLabel");
    return (s.useLayoutEffect(() => {
        if (a && null != t.current) {
            let { scrollWidth: e, clientWidth: n } = t.current;
            e > n ? i(e - n) : i(null);
        }
    }, [a, e.children]),
    a)
        ? (0, r.jsx)("div", {
              className: b.marqueeContainer,
              "data-overflow": null != n ? "" : void 0,
              children: (0, r.jsx)("span", {
                  ref: t,
                  className: b.marqueeText,
                  style: null != n ? { "--custom-marquee-overflow": `${n}px` } : void 0,
                  children: e.children,
              }),
          })
        : e.children;
}
var B = n(844222),
    j = n(545442),
    H = n(133171),
    Y = n(486020);
function W(e) {
    let { accessory: t, isFocused: n } = e,
        { reducedMotion: i } = s.useContext(B.C);
    switch (t.type) {
        case "icon": {
            let { type: e, icon: n, color: i = "currentColor", className: s, ...a } = t;
            return (0, r.jsx)("div", {
                className: b.iconContainerLeft,
                children: (0, r.jsx)(n, { "aria-hidden": !0, color: i, ...a, className: o()(b.icon, s) }),
            });
        }
        case "emoji": {
            let e = (function (e, t, n) {
                let { emojiId: i, src: r, animated: s = !1 } = e;
                return null != i ? Y.Ay.getEmojiURL({ id: i, animated: s && (!n || t), size: 18 }) : r;
            })(t, n, i.enabled);
            return (0, r.jsx)("div", {
                className: b.iconContainerLeft,
                children: (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: e, className: b.icon }),
            });
        }
        case "image":
            return (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: b.imageAccessory });
        case "avatar":
            return (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: b.avatarAccessory });
        case "roleDot": {
            let { variant: e, color: n, colors: i } = t;
            return (0, r.jsx)("div", {
                className: b.roleDotAccessory,
                children:
                    "dot" === e
                        ? (0, r.jsx)(j.W, { color: n, colors: i, background: !1, tooltip: !1 })
                        : (0, r.jsx)(j.R, { color: n, colors: i ?? null }),
            });
        }
        case "status": {
            let { status: e } = t;
            return (0, r.jsx)("div", {
                className: b.statusAccessory,
                children: (0, r.jsx)(H.nW, { status: e, size: 10, color: n ? "currentColor" : void 0 }),
            });
        }
        case "guildTag":
            return (0, r.jsx)("div", { className: b.guildTagAccessory, children: t.element });
    }
}
function K(e) {
    let { indicator: t } = e,
        { type: n, icon: i, color: s = "currentColor", className: a, ...l } = t;
    return (0, r.jsx)("div", {
        className: b.iconContainer,
        children: (0, r.jsx)(i, { "aria-hidden": !0, color: s, ...l, className: o()(b.icon, a) }),
    });
}
function $(e) {
    let {
            color: t = "default",
            label: n,
            void_label: i,
            icon: a,
            iconLeft: l,
            leadingAccessory: u,
            trailingIndicator: c,
            shortcut: d,
            subtext: _,
            subtextLineClamp: h,
            hasSubmenu: f,
            loading: p,
            badge: E,
            disabled: m,
            isFocused: g,
            menuItemProps: A,
            action: I,
            onClose: T,
            onFocus: y,
            className: C,
            focusedClassName: N,
            dontCloseOnActionIfHoldingShiftKey: R,
            dontCloseOnAction: D,
            iconProps: w,
        } = e,
        { onSelect: B, onInteraction: j } = s.useContext(O.x),
        H = s.useRef(null),
        Y = v("MenuItem"),
        $ = s.useCallback(
            (e) => {
                if ((j?.({ type: O.Q.DEFAULT }), null == I)) return !1;
                (e.shiftKey && R) || D || T(),
                    e.persist(),
                    B?.(),
                    (e.nativeEvent.view ?? window).requestAnimationFrame(() => I(e));
            },
            [I, T, B, R, D, j],
        );
    return (
        s.useEffect(() => {
            g && (G(H), y?.());
        }, [g, y]),
        (0, r.jsxs)(M.D, {
            innerRef: H,
            className: o()(b.item, b.labelContainer, L[t], C, { [b.disabled]: m, [b.focused]: g, [N ?? ""]: g }),
            onClick: m ? void 0 : $,
            "aria-disabled": m,
            ...A,
            "data-menu-item": "true",
            children: [
                Y || u?.type === "status"
                    ? null != u && (0, r.jsx)(W, { accessory: u, isFocused: g })
                    : (0, F.O)(l)
                      ? l
                      : null != l &&
                        (0, r.jsx)("div", {
                            className: b.iconContainerLeft,
                            children: (0, r.jsx)(l, {
                                color: "currentColor",
                                ...w,
                                className: o()(b.icon, w?.className),
                            }),
                        }),
                (0, r.jsxs)("div", {
                    className: b.label,
                    children: [
                        (0, r.jsx)(V, { children: U(i ?? n, e) }),
                        null != _ &&
                            (0, r.jsx)(P.E, {
                                variant: "text-xs/normal",
                                className: o()(b.subtext, { [b.subtextLineClamp]: null != h }),
                                lineClamp: h,
                                children: _,
                            }),
                    ],
                }),
                null != d && (0, r.jsx)("div", { className: b.shortcutContainer, children: d }),
                null != E && (0, r.jsx)("div", { className: b.badgeContainer, children: (0, r.jsx)(x.E, { type: E }) }),
                p &&
                    (0, r.jsx)("div", {
                        className: b.iconContainer,
                        children: (0, r.jsx)(S.y, { type: S.y.Type.PULSING_ELLIPSIS }),
                    }),
                Y
                    ? null != c && (0, r.jsx)(K, { indicator: c })
                    : (0, F.O)(a)
                      ? a
                      : null != a &&
                        (0, r.jsx)("div", {
                            className: b.iconContainer,
                            children: (0, r.jsx)(a, {
                                color: "currentColor",
                                ...w,
                                className: o()(b.icon, w?.className),
                            }),
                        }),
                f &&
                    (0, r.jsx)("div", {
                        className: b.iconContainer,
                        children: (0, r.jsx)(k._, { size: "md", color: "currentColor", className: b.caret }),
                    }),
            ],
        })
    );
}
var z = n(502939),
    q = n(623646),
    Z = n(962125);
function X(e) {
    let { parentItem: t, isFocused: n, menuSubmenuProps: i, rows: a, rowHeight: o, onScroll: l, listClassName: u } = e,
        c = s.useRef(null),
        d = s.useRef(null),
        _ = s.useRef(null),
        h = s.useRef(null),
        { isUsingKeyboardNavigation: f, focusIndex: p, ...E } = i;
    s.useLayoutEffect(() => {
        n && (G(c), _.current?.focus());
    }, [n]),
        s.useEffect(() => {
            n && p >= 0 && f && h.current?.scrollRowIntoView(p);
        }, [n, f, p]);
    let m = s.useCallback((e) => a[e], [a]);
    function g() {
        return (
            a.length > 0 &&
            (0, r.jsx)("div", {
                className: b.submenuPaddingContainer,
                children: (0, r.jsx)("div", {
                    className: b.submenu,
                    ...E,
                    ref: _,
                    children: (0, r.jsx)(Z.A, {
                        ref: h,
                        className: u,
                        listPadding: [6, 0, 6, 8],
                        onScroll: l,
                        renderRow: m,
                        rowCount: a.length,
                        rowHeight: o,
                    }),
                }),
            })
        );
    }
    if ((0, z.D)("MenuSubmenuListItem"))
        return (0, r.jsx)(A.Ow, {
            spacing: 4,
            placement: "right-start",
            autoFlip: !0,
            portal: !1,
            viewportPadding: 48,
            maxHeight: 360,
            renderLayer: g,
            children: (e) => {
                let { ref: n, props: i } = e;
                return (0, r.jsx)("div", { ref: n, ...i, children: t });
            },
        });
    let I = (0, r.jsx)(q.Q, {
        targetRef: d,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        fixed: !0,
        spacing: 4,
        position: "right",
        align: "top",
        className: b.submenuLayer,
        children: g,
    });
    return (0, r.jsxs)("div", { ref: c, children: [(0, r.jsx)("div", { ref: d }), t, n ? I : null] });
}
let Q = s.createContext("right-start");
function J(e) {
    let t = s.useContext(Q),
        { subMenuClassName: n, parentItem: i, isFocused: a, menuSubmenuProps: l, renderSubmenu: u } = e,
        { focusIndex: c, isUsingKeyboardNavigation: d, ..._ } = l,
        h = s.useRef(null),
        f = s.useRef(null),
        p = s.useRef(null),
        [E, m] = s.useState(!1);
    s.useLayoutEffect(() => {
        m(!0);
    }, []),
        s.useLayoutEffect(() => {
            a && G(h);
        }, [a]);
    let g = (0, r.jsx)("div", {
            className: b.submenuPaddingContainer,
            children: (0, r.jsx)("div", {
                className: o()(b.submenu, n),
                ..._,
                ref: p,
                children: (0, r.jsx)(T.Ip, { className: b.scroller, children: u() }),
            }),
        }),
        I = (0, z.D)("MenuSubmenuItem"),
        S = v("MenuSubmenuItem"),
        [y, C] = s.useState(!1);
    if (I)
        return (0, r.jsx)(A.Ow, {
            open: y || a,
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
                return (0, r.jsx)(Q.Provider, { value: t, children: g });
            },
            children: (e) => {
                let { ref: t, props: n } = e;
                return (0, r.jsx)("div", { ref: t, ...n, children: i });
            },
        });
    let N = (0, r.jsx)(q.Q, {
        targetRef: f,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        fixed: !0,
        spacing: 4,
        position: "right",
        align: "top",
        className: b.submenuLayer,
        children: () => g,
    });
    return (0, r.jsxs)("div", { ref: h, children: [(0, r.jsx)("div", { ref: f }), i, a && E ? N : null] });
}
function ee(e) {
    let {
            children: t,
            color: n = "default",
            isFocused: i = !1,
            disabled: a = !1,
            keepItemStyles: l = !1,
            menuItemProps: u,
            action: c,
            dontCloseOnActionIfHoldingShiftKey: d,
            dontCloseOnAction: _,
            onClose: h,
        } = e,
        f = s.useRef(null);
    s.useEffect(() => {
        i && G(f);
    }, [i]);
    let p = s.useCallback(
            (e) => {
                if (null == c) return !1;
                (e.shiftKey && d) || _ || h(), e.persist(), requestAnimationFrame(() => c(e));
            },
            [c, h, d, _],
        ),
        E = l ? o()(b.item, L[n], { [b.focused]: i }) : b.customItem;
    return (0, r.jsx)(M.D, {
        innerRef: f,
        className: E,
        onClick: a ? void 0 : p,
        "aria-disabled": a,
        ...u,
        children: t({ color: n, disabled: a, isFocused: i }),
    });
}
var et = n(658675);
function en(e) {
    let {
            color: t = "default",
            label: n,
            void_label: i,
            checked: a,
            subtext: l,
            subtextLineClamp: u,
            leftIcon: c,
            leadingAccessory: d,
            disabled: _,
            isFocused: h,
            menuItemProps: f,
            action: p,
            className: E,
            focusedClassName: m,
        } = e,
        { onInteraction: g } = s.useContext(O.x),
        A = v("MenuCheckboxItem"),
        I = s.useRef(null);
    s.useEffect(() => {
        h && G(I);
    }, [h]);
    let T = s.useCallback(
        (e) => {
            p(e), g?.({ type: O.Q.CHECKBOX });
        },
        [p, g],
    );
    return (0, r.jsxs)(M.D, {
        innerRef: I,
        className: o()(b.item, b.checkboxContainer, b.labelContainer, L[t], E, {
            [b.disabled]: _,
            [b.focused]: h,
            [m ?? ""]: h,
        }),
        onClick: _ ? void 0 : T,
        ...f,
        "aria-checked": a,
        "aria-disabled": _,
        children: [
            A
                ? null != d && (0, r.jsx)(W, { accessory: d, isFocused: h })
                : (0, F.O)(c)
                  ? c
                  : null != c &&
                    (0, r.jsx)("div", {
                        className: b.iconContainerLeft,
                        children: (0, r.jsx)(c, { color: "currentColor", className: b.icon }),
                    }),
            (0, r.jsxs)("div", {
                className: b.label,
                children: [
                    (0, r.jsx)(V, { children: U(i ?? n, { isFocused: h, disabled: _ }) }),
                    null != l &&
                        (0, r.jsx)(P.E, {
                            variant: "text-xs/normal",
                            className: o()(b.subtext, { [b.subtextLineClamp]: null != u }),
                            lineClamp: u,
                            children: l,
                        }),
                ],
            }),
            (0, r.jsx)("div", { className: b.iconContainer, children: (0, r.jsx)(et.P, { checked: a, disabled: _ }) }),
        ],
    });
}
var ei = n(773812);
function er(e) {
    let {
            color: t = "default",
            label: n,
            void_label: i,
            checked: a,
            subtext: l,
            subtextLineClamp: u,
            leftIcon: c,
            leadingAccessory: d,
            disabled: _,
            isFocused: h,
            menuItemProps: f,
            action: p,
        } = e,
        { onInteraction: E } = s.useContext(O.x),
        m = v("MenuRadioItem"),
        g = s.useRef(null);
    s.useEffect(() => {
        h && G(g);
    }, [h]);
    let A = s.useCallback(
        (e) => {
            p(e), E?.({ type: O.Q.RADIO });
        },
        [p, E],
    );
    return (0, r.jsxs)(M.D, {
        innerRef: g,
        className: o()(b.item, b.labelContainer, L[t], { [b.disabled]: _, [b.focused]: h }),
        onClick: _ ? void 0 : A,
        ...f,
        "aria-checked": a,
        "aria-disabled": _,
        children: [
            m
                ? null != d && (0, r.jsx)(W, { accessory: d, isFocused: h })
                : (0, F.O)(c)
                  ? c
                  : null != c &&
                    (0, r.jsx)("div", {
                        className: b.iconContainerLeft,
                        children: (0, r.jsx)(c, { color: "currentColor", className: b.icon }),
                    }),
            (0, r.jsxs)("div", {
                className: b.label,
                children: [
                    (0, r.jsx)(V, { children: U(i ?? n, { isFocused: h, disabled: _ }) }),
                    null != l &&
                        (0, r.jsx)(P.E, {
                            variant: "text-xs/normal",
                            className: o()(b.subtext, { [b.subtextLineClamp]: null != u }),
                            lineClamp: u,
                            children: l,
                        }),
                ],
            }),
            (0, r.jsx)("div", { className: b.iconContainer, children: (0, r.jsx)(ei.T, { checked: a, disabled: _ }) }),
        ],
    });
}
var es = n(243721);
function ea(e) {
    let {
            color: t = "default",
            label: n,
            subtext: i,
            subtextLineClamp: a,
            checked: l,
            disabled: u = !1,
            isFocused: c,
            menuItemProps: d,
            action: _,
            className: h,
        } = e,
        { onInteraction: f } = s.useContext(O.x),
        p = s.useRef(null);
    s.useEffect(() => {
        c && G(p);
    }, [c]);
    let E = s.useCallback(() => {
        _(!l), f?.({ type: O.Q.SWITCH });
    }, [_, l, f]);
    return (0, r.jsxs)(M.D, {
        innerRef: p,
        className: o()(b.item, b.switchItem, L[t], h, { [b.disabled]: u, [b.focused]: c }),
        onClick: u ? void 0 : E,
        "aria-checked": l,
        "aria-disabled": u,
        ...d,
        children: [
            null != n
                ? (0, r.jsx)("div", {
                      className: b.labelContainer,
                      children: (0, r.jsxs)("div", {
                          className: b.label,
                          children: [
                              (0, r.jsx)(V, { children: n }),
                              null != i &&
                                  (0, r.jsx)(P.E, {
                                      variant: "text-xs/normal",
                                      className: o()(b.subtext, { [b.subtextLineClamp]: null != a }),
                                      lineClamp: a,
                                      children: i,
                                  }),
                          ],
                      }),
                  })
                : null,
            (0, r.jsx)("div", {
                className: b.switchContainer,
                "aria-hidden": !0,
                children: (0, r.jsx)(es.d, { checked: l, disabled: u, displayOnly: !0 }),
            }),
        ],
    });
}
var eo = n(292666);
let el = { position: "absolute", visibility: "hidden", pointerEvents: "none", whiteSpace: "nowrap" };
function eu(e) {
    let {
            color: t = "default",
            label: n,
            value: i,
            onChange: a,
            placeholder: l = "",
            maxLength: u,
            disabled: c = !1,
            "aria-label": d,
            isFocused: _,
            menuItemProps: h,
        } = e,
        { onInteraction: f } = s.useContext(O.x),
        p = s.useRef(null),
        E = s.useRef(null),
        m = s.useRef(null),
        [g, A] = s.useState(null);
    s.useLayoutEffect(() => {
        if ("" === l || null == m.current || null == E.current) return void A(null);
        let e = E.current,
            t = window.getComputedStyle(e),
            n = m.current;
        (n.style.font = t.font), (n.style.letterSpacing = t.letterSpacing);
        let i = n.getBoundingClientRect().width,
            r = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight);
        A(Math.ceil(i + (Number.isNaN(r) ? 24 : r) + 2));
    }, [l]),
        s.useEffect(() => {
            _ && (G(p), E.current?.focus());
        }, [_]);
    let I = s.useCallback(
        (e) => {
            a(e), f?.({ type: O.Q.DEFAULT });
        },
        [a, f],
    );
    return (0, r.jsxs)("div", {
        ref: p,
        className: o()(b.item, b.textInputItem, b.hideInteraction, L[t], { [b.disabled]: c }),
        "aria-disabled": c,
        ...h,
        children: [
            null != n
                ? (0, r.jsx)("div", {
                      className: b.labelContainer,
                      children: (0, r.jsx)("div", { className: b.label, children: n }),
                  })
                : null,
            (0, r.jsxs)("div", {
                className: b.textInputWrapper,
                style: null != g ? { minWidth: g } : void 0,
                children: [
                    (0, r.jsx)("span", { ref: m, "aria-hidden": !0, style: el, children: l }),
                    (0, r.jsx)(eo.k, {
                        inputRef: E,
                        value: i,
                        onChange: I,
                        placeholder: l,
                        maxLength: u,
                        disabled: c,
                        "aria-label": d,
                    }),
                ],
            }),
        ],
    });
}
function ec(e) {
    let {
            color: t = "default",
            label: n,
            control: i,
            disabled: a,
            isFocused: l,
            isUsingKeyboardNavigation: u = !1,
            showDefaultFocus: c = !1,
            interactive: d = !0,
            menuItemProps: _,
            onClose: h,
        } = e,
        { onInteraction: f } = s.useContext(O.x),
        p = s.useRef(null),
        E = s.useRef(null);
    s.useLayoutEffect(() => {
        l ? (G(p), E.current?.focus()) : u && E.current?.blur?.();
    }, [l, u]);
    let m = s.useCallback(() => {
            E.current?.activate?.() && h();
        }, [h]),
        g = i(
            {
                onClose: h,
                disabled: a,
                isFocused: l,
                onInteraction: s.useCallback(
                    (e) => {
                        f?.({ type: e ?? O.Q.DEFAULT });
                    },
                    [f],
                ),
            },
            E,
        );
    return (0, r.jsxs)("div", {
        onClick: m,
        className: o()(b.item, L[t], {
            [b.disabled]: a,
            [b.focused]: c && l,
            [b.hideInteraction]: !c,
            [b.nonInteractive]: !d,
        }),
        "aria-disabled": a,
        ..._,
        children: [
            null != n
                ? (0, r.jsx)("div", {
                      className: b.labelContainer,
                      children: (0, r.jsx)("div", { className: b.label, children: n }),
                  })
                : null,
            g,
        ],
    });
}
function ed(e) {
    let {
            color: t = "default",
            disabled: n,
            isFocused: i,
            showDefaultFocus: a = !1,
            menuItemProps: l,
            children: u,
        } = e,
        c = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            if (!i) return;
            let e = c.current;
            if (null == e) return;
            G(c);
            let t = e.querySelector('[tabindex="0"]');
            t?.focus();
        }, [i]),
        (0, r.jsx)("div", {
            ref: c,
            className: o()(b.item, L[t], { [b.disabled]: n, [b.focused]: a && i, [b.hideInteraction]: !a }),
            "aria-disabled": n,
            ...l,
            children: u,
        })
    );
}
function e_(e) {
    let {
            navId: t,
            variant: n = "flexible",
            hideScroller: i = !1,
            className: a,
            children: l,
            onClose: _,
            onSelect: h,
            onInteraction: f,
        } = e,
        p = (function e(t) {
            return (function e(t) {
                return null == t
                    ? []
                    : s.Children.toArray(t).flatMap((t) =>
                          null == t
                              ? []
                              : Array.isArray(t)
                                ? e(t)
                                : t.type === s.Fragment
                                  ? (e(t.props.children) ?? [])
                                  : [t],
                      );
            })(t).reduce((t, n) => {
                if (n.type === R.bX) return t.push({ type: "separator", navigable: !1 }), t;
                if (n.type === R.rX) {
                    let i = e(n.props.children);
                    return (
                        i.length > 0 &&
                            (t.push({ type: "groupstart", length: i.length, navigable: !1, props: n.props }),
                            t.push(...i),
                            t.push({ type: "groupend", length: i.length, navigable: !1, props: n.props })),
                        t
                    );
                }
                if (n.type === R.Dr)
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
                if (n.type === R.sL)
                    return t.push({ type: "checkbox", key: n.props.id, navigable: !0, props: n.props }), t;
                if (n.type === R.iD)
                    return t.push({ type: "radio", key: n.props.id, navigable: !0, props: n.props }), t;
                else if (n.type === R.fP)
                    return t.push({ type: "switch", key: n.props.id, navigable: !0, props: n.props }), t;
                else if (n.type === R.Yn)
                    return t.push({ type: "textinput", key: n.props.id, navigable: !0, props: n.props }), t;
                else if (n.type === R.aK)
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
        })(l),
        E = (function e(t) {
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
        })(p),
        S = s.useRef([]);
    u()(S.current, E) || (S.current = E);
    let N = v("Menu"),
        L = p.find((e) => null != e.key)?.key,
        M = (function (e) {
            let {
                    navId: t,
                    items: n,
                    initialFocusPath: i,
                    onSelect: r,
                    enabled: a = !0,
                    closeMenu: o,
                    defaultIsUsingKeyboardNavigation: l = !1,
                } = e,
                u = s.useRef(a);
            s.useLayoutEffect(() => {
                u.current = a;
            }, [a]);
            let [_, h] = s.useReducer(m, { items: n, focusPath: i, focusIndex: -1 }),
                f = s.useMemo(() => (0, g.nF)(h, 30), [h]);
            s.useEffect(() => {
                h({ type: d.UPDATE_ITEMS, items: n });
            }, [n]);
            let { focusPath: p } = _,
                [E, A] = s.useState(!1),
                [I, T] = s.useState(l),
                [{ onItemFocusMemoizer: S, onItemMouseEnterMemoizer: y }] = s.useState(() => ({
                    onItemFocusMemoizer: new g.Lp((e) => () => {
                        A(!0), h({ type: d.SET_FOCUS_PATH, path: e.split("--") });
                    }),
                    onItemMouseEnterMemoizer: new g.Lp((e) => () => {
                        T(!1), h({ type: d.SET_FOCUS_PATH, path: e.split("--") });
                    }),
                })),
                C = s.useCallback(
                    (e) => {
                        var n, i, s;
                        if (!u.current) return;
                        e.key === c.D$.ESCAPE && null != o && (e.stopPropagation(), e.preventDefault(), o());
                        let a = (function (e) {
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
                        switch (a) {
                            case c.X2.NAVIGATE_UP:
                            case c.X2.NAVIGATE_DOWN:
                            case c.X2.NAVIGATE_IN:
                            case c.X2.NAVIGATE_OUT:
                                let l;
                                if (
                                    ("textarea" === (l = (n = e.target).tagName.toLowerCase()) ||
                                        ("input" === l
                                            ? ["text", "search", "email", "url", "tel", "password"].includes(n.type)
                                            : n.isContentEditable)) &&
                                    (a === c.X2.NAVIGATE_IN || a === c.X2.NAVIGATE_OUT)
                                )
                                    return;
                                e.preventDefault(), e.stopPropagation(), T(!0), f({ type: a });
                                return;
                            case c.X2.SELECT_FOCUSED_ITEM:
                                if (e.repeat || e.target.tabIndex >= 0) return;
                                if ((e.preventDefault(), e.stopPropagation(), T(!1), f({ type: a }), null != r))
                                    return void r(p);
                                let d =
                                    ((i = e.target.ownerDocument ?? document),
                                    (s = null != p ? `${(0, g.M4)(t, p.join("--"))}` : t),
                                    i.getElementById(s));
                                d?.click();
                        }
                    },
                    [f, t, p, r, o],
                ),
                N = s.useCallback(() => {
                    E || A(!0);
                }, [E]),
                v = s.useCallback(
                    (e) => {
                        e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && E && A(!1);
                    },
                    [E],
                ),
                R = s.useCallback(() => {
                    h({ type: d.SET_FOCUS_PATH, path: [] }), A(!1);
                }, []),
                O = s.useCallback((e) => e.every((e, t) => p[t] === e), [p]),
                b = s.useCallback(
                    () => ({
                        role: "menu",
                        id: t,
                        tabIndex: -1,
                        onKeyDown: C,
                        onFocus: N,
                        onBlur: v,
                        onMouseLeave: R,
                        "aria-activedescendant": p.length > 0 ? (0, g.M4)(t, p.join("--")) : void 0,
                    }),
                    [t, C, N, v, R, p],
                ),
                D = s.useCallback(
                    (e) => {
                        let { path: n } = e;
                        return {
                            role: "menu",
                            tabIndex: -1,
                            "aria-activedescendant": O(n) ? (0, g.M4)(t, p.join("--")) : void 0,
                            focusIndex: _.focusIndex,
                            isUsingKeyboardNavigation: I,
                        };
                    },
                    [t, p, O, _.focusIndex, I],
                ),
                L = s.useCallback(
                    (e) => {
                        let { path: n, hasSubmenu: i = !1, navigable: r = !0, role: s = "menuitem" } = e,
                            a = n.join("--");
                        return {
                            ...(i ? { "aria-expanded": O(n), "aria-haspopup": !0 } : {}),
                            role: s,
                            id: (0, g.M4)(t, a),
                            tabIndex: -1,
                            onFocus: r ? S.get(a) : () => {},
                            onMouseEnter: r ? y.get(a) : () => {},
                        };
                    },
                    [t, O, S, y],
                );
            return s.useMemo(
                () => ({
                    dispatch: f,
                    getContainerProps: b,
                    getSubmenuProps: D,
                    getItemProps: L,
                    isFocused: O,
                    isUsingKeyboardNavigation: I,
                }),
                [f, b, D, L, O, I],
            );
        })({
            navId: t,
            items: S.current,
            initialFocusPath: C.Ay.keyboardModeEnabled && null != L ? [L] : [],
            closeMenu: _,
            defaultIsUsingKeyboardNavigation: C.Ay.keyboardModeEnabled,
        });
    s.useEffect(() => {
        M.isUsingKeyboardNavigation ? C.Ay.keyboardModeEnabled || (0, y.uS)() : C.Ay.keyboardModeEnabled && (0, y.Bm)();
    }, [M.isUsingKeyboardNavigation]);
    let P = s.useRef(null),
        x = s.useContext(A.jQ),
        k = "none" !== (x?.focus ?? "none");
    (0, I.tj)(P, { disable: k }),
        s.useEffect(() => {
            k && P.current?.focus();
        }, [k]);
    let U = i ? T.d_ : T.Ip,
        G = s.useMemo(() => ({ onSelect: h, onInteraction: f }), [h, f]);
    return (0, r.jsx)(O.x.Provider, {
        value: G,
        children: (0, r.jsx)("div", {
            className: o()(b.menu, b[n], a),
            style: {
                "--custom-menu-viewport-padding": N ? "48px" : "16px",
                "--custom-menu-flexible-min-width": N ? "144px" : "188px",
            },
            ...M.getContainerProps(),
            ref: P,
            "aria-label": e["aria-label"],
            children: (0, r.jsxs)(U, {
                className: b.scroller,
                children: [
                    0 === p.length &&
                        (0, r.jsx)($, {
                            disabled: !0,
                            void_label: () => (0, r.jsx)(ef, {}),
                            menuItemProps: M.getItemProps({ path: ["empty"] }),
                            isFocused: !1,
                            onFocus: () => {},
                            onClose: _,
                        }),
                    p.length > 0 &&
                        (function e(t, n, i, s) {
                            let a = 0,
                                o = [];
                            return t.reduce((t, l, u) => {
                                let c = o.length > 0 ? o[o.length - 1] : t;
                                switch (l.type) {
                                    case "separator":
                                        c.push((0, r.jsx)(D, {}, `separator-${u}`)), (a = 0);
                                        break;
                                    case "groupstart":
                                        a > 0 && l.length > 0 && (c.push((0, r.jsx)(D, {}, `separator-${u}`)), (a = 0)),
                                            o.push([]);
                                        break;
                                    case "groupend":
                                        o.length > 0 &&
                                            t.push((0, r.jsx)(w, { contents: o.pop(), ...l.props }, `group-${u}`));
                                        break;
                                    case "item": {
                                        let {
                                                children: t,
                                                childRowHeight: o,
                                                onChildrenScroll: u,
                                                listClassName: d,
                                                subMenuClassName: _,
                                            } = l,
                                            h = null != t,
                                            f = [...i, l.key],
                                            p = n.isFocused(f),
                                            E = (0, r.jsx)(
                                                $,
                                                {
                                                    ...l.props,
                                                    ...(null != l.label
                                                        ? { label: l.label }
                                                        : { void_label: l.void_label }),
                                                    hasSubmenu: null != t,
                                                    isFocused: p,
                                                    menuItemProps: {
                                                        ...n.getItemProps({ path: f, hasSubmenu: h }),
                                                        ...(null != t ? { "aria-haspopup": !0 } : {}),
                                                    },
                                                    onClose: s,
                                                },
                                                l.key,
                                            );
                                        h
                                            ? null != o
                                                ? c.push(
                                                      (0, r.jsx)(
                                                          X,
                                                          {
                                                              ...l.props,
                                                              parentItem: E,
                                                              isFocused: p,
                                                              menuSubmenuProps: n.getSubmenuProps({ path: f }),
                                                              rows: e(t, n, f, s),
                                                              rowHeight: o,
                                                              onScroll: u,
                                                              listClassName: d,
                                                          },
                                                          `${l.key}-submenu`,
                                                      ),
                                                  )
                                                : c.push(
                                                      (0, r.jsx)(
                                                          J,
                                                          {
                                                              ...l.props,
                                                              subMenuClassName: _,
                                                              parentItem: E,
                                                              isFocused: p,
                                                              menuSubmenuProps: n.getSubmenuProps({ path: f }),
                                                              renderSubmenu: () => e(t, n, f, s),
                                                          },
                                                          `${l.key}-submenu`,
                                                      ),
                                                  )
                                            : c.push(E),
                                            a++;
                                        break;
                                    }
                                    case "customitem": {
                                        let e = [...i, l.key];
                                        c.push(
                                            (0, r.jsx)(
                                                ee,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({ path: e, navigable: l.navigable }),
                                                    onClose: s,
                                                    children: l.render,
                                                },
                                                l.key,
                                            ),
                                        ),
                                            a++;
                                        break;
                                    }
                                    case "checkbox": {
                                        let e = [...i, l.key];
                                        c.push(
                                            (0, r.jsx)(
                                                en,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({
                                                        path: e,
                                                        role: "menuitemcheckbox",
                                                    }),
                                                },
                                                l.key,
                                            ),
                                        ),
                                            a++;
                                        break;
                                    }
                                    case "radio": {
                                        let e = [...i, l.key];
                                        c.push(
                                            (0, r.jsx)(
                                                er,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({ path: e, role: "menuitemradio" }),
                                                },
                                                l.key,
                                            ),
                                        ),
                                            a++;
                                        break;
                                    }
                                    case "switch": {
                                        let e = [...i, l.key];
                                        c.push(
                                            (0, r.jsx)(
                                                ea,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({
                                                        path: e,
                                                        role: "menuitemcheckbox",
                                                    }),
                                                },
                                                l.key,
                                            ),
                                        ),
                                            a++;
                                        break;
                                    }
                                    case "textinput": {
                                        let e = [...i, l.key];
                                        c.push(
                                            (0, r.jsx)(
                                                eu,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({ path: e }),
                                                },
                                                l.key,
                                            ),
                                        ),
                                            a++;
                                        break;
                                    }
                                    case "control": {
                                        let e = [...i, l.key];
                                        c.push(
                                            (0, r.jsx)(
                                                ec,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    isUsingKeyboardNavigation: n.isUsingKeyboardNavigation,
                                                    menuItemProps: n.getItemProps({ path: e }),
                                                    onClose: s,
                                                },
                                                l.key,
                                            ),
                                        ),
                                            a++;
                                        break;
                                    }
                                    case "compositecontrol": {
                                        let e = [...i, l.key];
                                        c.push(
                                            (0, r.jsx)(
                                                ed,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({ path: e }),
                                                    onClose: s,
                                                    children: l.children,
                                                },
                                                l.key,
                                            ),
                                        ),
                                            a++;
                                    }
                                }
                                return t;
                            }, []);
                        })(p, M, [], _),
                ],
            }),
        }),
    });
}
function eh() {
    return (0, r.jsx)("div", { className: o()(b.menu, b.loader, b.flexible), children: (0, r.jsx)(S.y, {}) });
}
function ef() {
    let e = "\u266B (\u3064\uFF61\u25D5\u203F\u203F\u25D5\uFF61)\u3064 \u266A",
        [t, n] = s.useState(e);
    return (
        s.useEffect(() => {
            if (C.Ay.useReducedMotion) return;
            let t = setInterval(() => {
                n((t) => (t === e ? "\u266B \u2282(\uFF61\u25D5\u203F\u203F\u25D5\uFF61\u2282) \u266A" : e));
            }, 700);
            return () => clearInterval(t);
        }, []),
        (0, r.jsx)("div", { style: { width: "100%", textAlign: "center" }, children: t })
    );
}
