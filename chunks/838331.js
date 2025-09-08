n.d(t, {
    A7: () => A,
    hQ: () => P,
    lo: () => D,
    yn: () => C,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(924826),
    l = n(91192),
    c = n(1561),
    u = n(742746),
    d = n(326452),
    f = n(993365),
    _ = n(755721),
    p = n(481060),
    h = n(388032),
    m = n(792323);
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
let I = "data-listbox-item-id",
    T = 40,
    S = Object.freeze({
        STANDARD: m.selected,
        BRAND: m.selectedBrand,
    });
function A(e) {
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
function C(e) {
    let [t, n] = i.useState(() => new Set(null != e ? [e] : void 0));
    return [
        t,
        i.useCallback((e) => {
            n(new Set([e]));
        }, []),
    ];
}
function N(e) {
    return String(e);
}
let R = i.createContext({
    activeDescendant: null,
    selected: new Set(),
    setSelected: () => null,
    itemToString: N,
});
function P(e) {
    let {
            placeholder: t,
            children: n,
            value: a,
            onChange: c,
            className: _,
            listClassName: g,
            "aria-label": b,
            multiSelect: v = !1,
            autoFocus: S = !1,
            maxVisibleItems: A = 5,
            itemToString: C = N,
            emptyStateText: P,
            emptyStateHeader: w,
            onQueryChange: D,
        } = e,
        [x, L] = i.useState(""),
        j = i.useCallback(
            (e) => {
                L(e), null == D || D(e);
            },
            [D],
        ),
        [M] = i.useState(!0),
        [k, U] = i.useState(null),
        G = i.useId(),
        B = i.useRef(null);
    i.useLayoutEffect(() => {
        let e = document.querySelector("[".concat(I, '="').concat(k, '"]')),
            t = B.current;
        null != t &&
            null != e &&
            t.scrollIntoViewNode({
                node: e,
                padding: 12,
            });
    }, [k]);
    let Z = n(x),
        F = 0 === Z.length,
        V = null != w ? w : h.intl.string(h.t["4o4z3d"]),
        H = i.useId(),
        Y = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = B.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        W = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = B.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        K = i.useCallback((e, t) => {
            U(t);
            let n = document.querySelector(e),
                r = B.current;
            null != r && null != n && r.scrollIntoViewNode({ node: n });
        }, []),
        z = (0, s.ZP)({
            id: H,
            isEnabled: !0,
            useVirtualFocus: !0,
            scrollToStart: Y,
            scrollToEnd: W,
            setFocus: K,
        });
    return (0, r.jsx)(l.bG, {
        navigator: z,
        children: (0, r.jsx)(l.SJ, {
            children: (e) => {
                var { ref: n, onKeyDown: i } = e,
                    s = O(e, ["ref", "onKeyDown"]);
                return (0, r.jsxs)("div", {
                    ref: n,
                    role: "combobox",
                    "aria-label": b,
                    "aria-expanded": M,
                    "aria-controls": M ? G : void 0,
                    "aria-owns": G,
                    "aria-haspopup": "listbox",
                    className: o()(m.combobox, _),
                    children: [
                        (0, r.jsx)("div", {
                            className: m.header,
                            children: (0, r.jsx)(d.E, {
                                size: "sm",
                                autoFocus: S,
                                placeholder: t,
                                query: x,
                                onChange: j,
                                onKeyDown: i,
                                onBlur: () => U(null),
                                onClear: () => j(""),
                                inputProps: {
                                    "aria-multiline": !1,
                                    "aria-activedescendant": null != k ? k : void 0,
                                },
                            }),
                        }),
                        (0, r.jsx)("div", {
                            children:
                                M &&
                                (F
                                    ? (0, r.jsxs)("div", {
                                          className: m.empty,
                                          children: [
                                              (0, r.jsx)(p.X6q, {
                                                  variant: "heading-md/semibold",
                                                  children: V,
                                              }),
                                              (0, r.jsx)(f.x, {
                                                  color: "text-muted",
                                                  variant: "text-md/normal",
                                                  children: null != P ? P : h.intl.string(h.t.QwSXv7),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(R.Provider, {
                                          value: {
                                              activeDescendant: k,
                                              selected: a,
                                              setSelected: c,
                                              itemToString: C,
                                          },
                                          children: (0, r.jsx)(
                                              u.Tv,
                                              y(E({}, s), {
                                                  style: { maxHeight: A * (T + 6) },
                                                  "aria-multiselectable": v,
                                                  id: G,
                                                  ref: B,
                                                  className: o()(m.list, m.scroller, g),
                                                  sections: [Z.length],
                                                  sectionHeight: 0,
                                                  rowHeight: T,
                                                  renderRow: (e) => {
                                                      let { row: t } = e;
                                                      return Z[t];
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
let w = i.createContext(null);
function D(e) {
    var t,
        { value: n, children: a, disabled: s = !1, selectedColor: u = S.STANDARD } = e,
        d = O(e, ["value", "children", "disabled", "selectedColor"]);
    let { activeDescendant: f, selected: _, setSelected: p, itemToString: h } = i.useContext(R),
        g = h(n),
        b = f === g,
        v = null != (t = null == d ? void 0 : d.selected) ? t : _.has(n),
        T = (0, l.JA)(g);
    return (0, r.jsx)(
        c.P,
        y(
            E(
                {
                    tag: "li",
                    id: g,
                    onClick: () => (s ? null : p(n)),
                    [I]: n,
                    className: o()(m.item, {
                        [m.focused]: b,
                        [u]: v,
                        [m.disabled]: s,
                    }),
                },
                T,
            ),
            {
                role: "option",
                "aria-selected": v,
                "aria-disabled": s,
                children: (0, r.jsx)(w.Provider, {
                    value: n,
                    children: a,
                }),
            },
        ),
    );
}
(D.Colors = S),
    (D.Label = function (e) {
        let { children: t } = e;
        return (0, r.jsx)("span", {
            className: m.itemLabel,
            children: t,
        });
    }),
    (D.Icon = function (e) {
        let { children: t } = e;
        return (0, r.jsx)("span", {
            className: m.itemCheckbox,
            children: t,
        });
    }),
    (D.Checkbox = function (e) {
        let { checked: t } = e,
            { selected: n } = i.useContext(R),
            a = i.useContext(w);
        return (0, r.jsx)("span", {
            className: m.itemCheckbox,
            children: (0, r.jsx)(_.$q, {
                displayOnly: !0,
                value: null != t ? t : null != a && n.has(a),
                type: _.M0.INVERTED,
                size: 20,
            }),
        });
    }),
    (D.Checkmark = function () {
        let { selected: e } = i.useContext(R),
            t = i.useContext(w);
        return e.has(t)
            ? (0, r.jsx)("span", {
                  className: m.itemCheckbox,
                  children: (0, r.jsx)(p.owK, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                      height: 20,
                  }),
              })
            : null;
    });
