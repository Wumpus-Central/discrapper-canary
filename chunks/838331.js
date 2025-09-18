n.d(t, {
    A7: () => T,
    hQ: () => N,
    lo: () => P,
    yn: () => S,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(924826),
    l = n(91192),
    c = n(742746),
    u = n(326452),
    d = n(755721),
    f = n(481060),
    _ = n(388032),
    p = n(792323);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let O = "data-listbox-item-id",
    v = 40,
    I = Object.freeze({
        STANDARD: p.selected,
        BRAND: p.selectedBrand,
    });
function T(e) {
    let [t, n] = i.useState(() => new Set(e));
    return [
        t,
        i.useCallback((e) => {
            n((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n;
            });
        }, []),
    ];
}
function S(e) {
    let [t, n] = i.useState(() => new Set(null != e ? [e] : void 0));
    return [
        t,
        i.useCallback((e) => {
            n(new Set([e]));
        }, []),
    ];
}
function A(e) {
    return String(e);
}
let C = i.createContext({
    activeDescendant: null,
    selected: new Set(),
    setSelected: () => null,
    itemToString: A,
});
function N(e) {
    let {
            placeholder: t,
            children: n,
            value: a,
            onChange: d,
            className: h,
            listClassName: g,
            "aria-label": y,
            multiSelect: I = !1,
            autoFocus: T = !1,
            maxVisibleItems: S = 5,
            itemToString: N = A,
            emptyStateText: R,
            emptyStateHeader: P,
            onQueryChange: w,
        } = e,
        [D, x] = i.useState(""),
        L = i.useCallback(
            (e) => {
                x(e), null == w || w(e);
            },
            [w],
        ),
        [j] = i.useState(!0),
        [M, k] = i.useState(null),
        U = i.useId(),
        G = i.useRef(null);
    i.useLayoutEffect(() => {
        let e = document.querySelector("[".concat(O, '="').concat(M, '"]')),
            t = G.current;
        null != t &&
            null != e &&
            t.scrollIntoViewNode({
                node: e,
                padding: 12,
            });
    }, [M]);
    let B = n(D),
        Z = 0 === B.length,
        F = null != P ? P : _.intl.string(_.t["4o4z3d"]),
        V = i.useId(),
        H = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = G.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        Y = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = G.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        W = i.useCallback((e, t) => {
            k(t);
            let n = document.querySelector(e),
                r = G.current;
            null != r && null != n && r.scrollIntoViewNode({ node: n });
        }, []),
        K = (0, s.ZP)({
            id: V,
            isEnabled: !0,
            useVirtualFocus: !0,
            scrollToStart: H,
            scrollToEnd: Y,
            setFocus: W,
        });
    return (0, r.jsx)(l.bG, {
        navigator: K,
        children: (0, r.jsx)(l.SJ, {
            children: (e) => {
                var { ref: n, onKeyDown: i } = e,
                    s = b(e, ["ref", "onKeyDown"]);
                return (0, r.jsxs)("div", {
                    ref: n,
                    role: "combobox",
                    "aria-label": y,
                    "aria-expanded": j,
                    "aria-controls": j ? U : void 0,
                    "aria-owns": U,
                    "aria-haspopup": "listbox",
                    className: o()(p.combobox, h),
                    children: [
                        (0, r.jsx)("div", {
                            className: p.header,
                            children: (0, r.jsx)(u.E, {
                                size: "sm",
                                autoFocus: T,
                                placeholder: t,
                                query: D,
                                onChange: L,
                                onKeyDown: i,
                                onBlur: () => k(null),
                                onClear: () => L(""),
                                inputProps: {
                                    "aria-multiline": !1,
                                    "aria-activedescendant": null != M ? M : void 0,
                                },
                            }),
                        }),
                        (0, r.jsx)("div", {
                            children:
                                j &&
                                (Z
                                    ? (0, r.jsxs)("div", {
                                          className: p.empty,
                                          children: [
                                              (0, r.jsx)(f.X6q, {
                                                  variant: "heading-md/semibold",
                                                  children: F,
                                              }),
                                              (0, r.jsx)(f.Text, {
                                                  color: "text-muted",
                                                  variant: "text-md/normal",
                                                  children: null != R ? R : _.intl.string(_.t.QwSXv7),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(C.Provider, {
                                          value: {
                                              activeDescendant: M,
                                              selected: a,
                                              setSelected: d,
                                              itemToString: N,
                                          },
                                          children: (0, r.jsx)(
                                              c.Tv,
                                              E(m({}, s), {
                                                  style: { maxHeight: S * (v + 6) },
                                                  "aria-multiselectable": I,
                                                  id: U,
                                                  ref: G,
                                                  className: o()(p.list, p.scroller, g),
                                                  sections: [B.length],
                                                  sectionHeight: 0,
                                                  rowHeight: v,
                                                  renderRow: (e) => {
                                                      let { row: t } = e;
                                                      return B[t];
                                                  },
                                                  renderSection: () => null,
                                              }),
                                          ),
                                      })),
                        }),
                    ],
                });
            },
        }),
    });
}
let R = i.createContext(null);
function P(e) {
    var t,
        { value: n, children: a, disabled: s = !1, selectedColor: c = I.STANDARD } = e,
        u = b(e, ["value", "children", "disabled", "selectedColor"]);
    let { activeDescendant: d, selected: _, setSelected: h, itemToString: g } = i.useContext(C),
        y = g(n),
        v = d === y,
        T = null != (t = null == u ? void 0 : u.selected) ? t : _.has(n),
        S = (0, l.JA)(y);
    return (0, r.jsx)(
        f.P3F,
        E(
            m(
                {
                    tag: "li",
                    id: y,
                    onClick: () => (s ? null : h(n)),
                    [O]: n,
                    className: o()(p.item, {
                        [p.focused]: v,
                        [c]: T,
                        [p.disabled]: s,
                    }),
                },
                S,
            ),
            {
                role: "option",
                "aria-selected": T,
                "aria-disabled": s,
                children: (0, r.jsx)(R.Provider, {
                    value: n,
                    children: a,
                }),
            },
        ),
    );
}
(P.Colors = I),
    (P.Label = function (e) {
        let { children: t } = e;
        return (0, r.jsx)("span", {
            className: p.itemLabel,
            children: t,
        });
    }),
    (P.Icon = function (e) {
        let { children: t } = e;
        return (0, r.jsx)("span", {
            className: p.itemCheckbox,
            children: t,
        });
    }),
    (P.Checkbox = function (e) {
        let { checked: t } = e,
            { selected: n } = i.useContext(C),
            a = i.useContext(R);
        return (0, r.jsx)("span", {
            className: p.itemCheckbox,
            children: (0, r.jsx)(d.$q, {
                displayOnly: !0,
                value: null != t ? t : null != a && n.has(a),
                type: d.M0.INVERTED,
                size: 20,
            }),
        });
    }),
    (P.Checkmark = function () {
        let { selected: e } = i.useContext(C),
            t = i.useContext(R);
        return e.has(t)
            ? (0, r.jsx)("span", {
                  className: p.itemCheckbox,
                  children: (0, r.jsx)(f.owK, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                      height: 20,
                  }),
              })
            : null;
    });
