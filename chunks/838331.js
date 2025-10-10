n.d(t, {
    A7: () => I,
    hQ: () => C,
    lo: () => R,
    yn: () => T,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(924826),
    l = n(91192),
    c = n(326452),
    u = n(755721),
    d = n(481060),
    f = n(388032),
    _ = n(792323);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let y = "data-listbox-item-id",
    O = 40,
    v = Object.freeze({
        STANDARD: _.selected,
        BRAND: _.selectedBrand,
    });
function I(e) {
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
function T(e) {
    let [t, n] = i.useState(() => new Set(null != e ? [e] : void 0));
    return [
        t,
        i.useCallback((e) => {
            n(new Set([e]));
        }, []),
    ];
}
function S(e) {
    return String(e);
}
let A = i.createContext({
    activeDescendant: null,
    selected: new Set(),
    setSelected: () => null,
    itemToString: S,
});
function C(e) {
    let {
            placeholder: t,
            children: n,
            value: a,
            onChange: u,
            className: p,
            listClassName: m,
            "aria-label": b,
            multiSelect: v = !1,
            autoFocus: I = !1,
            maxVisibleItems: T = 5,
            itemToString: C = S,
            emptyStateText: N,
            emptyStateHeader: R,
            onQueryChange: P,
        } = e,
        [w, D] = i.useState(""),
        L = i.useCallback(
            (e) => {
                D(e), null == P || P(e);
            },
            [P],
        ),
        [x] = i.useState(!0),
        [M, j] = i.useState(null),
        k = i.useId(),
        U = i.useRef(null);
    i.useLayoutEffect(() => {
        let e = document.querySelector("[".concat(y, '="').concat(M, '"]')),
            t = U.current;
        null != t &&
            null != e &&
            t.scrollIntoViewNode({
                node: e,
                padding: 12,
            });
    }, [M]);
    let G = n(w),
        B = 0 === G.length,
        Z = null != R ? R : f.intl.string(f.t["4o4z3d"]),
        F = i.useId(),
        V = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = U.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        H = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = U.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        Y = i.useCallback((e, t) => {
            j(t);
            let n = document.querySelector(e),
                r = U.current;
            null != r && null != n && r.scrollIntoViewNode({ node: n });
        }, []),
        W = (0, s.ZP)({
            id: F,
            isEnabled: !0,
            useVirtualFocus: !0,
            scrollToStart: V,
            scrollToEnd: H,
            setFocus: Y,
        });
    return (0, r.jsx)(l.bG, {
        navigator: W,
        children: (0, r.jsx)(l.SJ, {
            children: (e) => {
                var { ref: n, onKeyDown: i } = e,
                    s = E(e, ["ref", "onKeyDown"]);
                return (0, r.jsxs)("div", {
                    ref: n,
                    role: "combobox",
                    "aria-label": b,
                    "aria-expanded": x,
                    "aria-controls": x ? k : void 0,
                    "aria-owns": k,
                    "aria-haspopup": "listbox",
                    className: o()(_.combobox, p),
                    children: [
                        (0, r.jsx)("div", {
                            className: _.header,
                            children: (0, r.jsx)(c.E, {
                                size: "sm",
                                autoFocus: I,
                                placeholder: t,
                                query: w,
                                onChange: L,
                                onKeyDown: i,
                                onBlur: () => j(null),
                                onClear: () => L(""),
                                inputProps: {
                                    "aria-multiline": !1,
                                    "aria-activedescendant": null != M ? M : void 0,
                                },
                            }),
                        }),
                        (0, r.jsx)("div", {
                            children:
                                x &&
                                (B
                                    ? (0, r.jsxs)("div", {
                                          className: _.empty,
                                          children: [
                                              (0, r.jsx)(d.X6q, {
                                                  variant: "heading-md/semibold",
                                                  children: Z,
                                              }),
                                              (0, r.jsx)(d.Text, {
                                                  color: "text-muted",
                                                  variant: "text-md/normal",
                                                  children: null != N ? N : f.intl.string(f.t.QwSXv7),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(A.Provider, {
                                          value: {
                                              activeDescendant: M,
                                              selected: a,
                                              setSelected: u,
                                              itemToString: C,
                                          },
                                          children: (0, r.jsx)(
                                              d.Tvr,
                                              g(h({}, s), {
                                                  style: { maxHeight: T * (O + 6) },
                                                  "aria-multiselectable": v,
                                                  id: k,
                                                  ref: U,
                                                  className: o()(_.list, _.scroller, m),
                                                  sections: [G.length],
                                                  sectionHeight: 0,
                                                  rowHeight: O,
                                                  renderRow: (e) => {
                                                      let { row: t } = e;
                                                      return G[t];
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
let N = i.createContext(null);
function R(e) {
    var t,
        { value: n, children: a, disabled: s = !1, selectedColor: c = v.STANDARD } = e,
        u = E(e, ["value", "children", "disabled", "selectedColor"]);
    let { activeDescendant: f, selected: p, setSelected: m, itemToString: b } = i.useContext(A),
        O = b(n),
        I = f === O,
        T = null != (t = null == u ? void 0 : u.selected) ? t : p.has(n),
        S = (0, l.JA)(O);
    return (0, r.jsx)(
        d.P3F,
        g(
            h(
                {
                    tag: "li",
                    id: O,
                    onClick: () => (s ? null : m(n)),
                    [y]: n,
                    className: o()(_.item, {
                        [_.focused]: I,
                        [c]: T,
                        [_.disabled]: s,
                    }),
                },
                S,
            ),
            {
                role: "option",
                "aria-selected": T,
                "aria-disabled": s,
                children: (0, r.jsx)(N.Provider, {
                    value: n,
                    children: a,
                }),
            },
        ),
    );
}
(R.Colors = v),
    (R.Label = function (e) {
        let { children: t } = e;
        return (0, r.jsx)("span", {
            className: _.itemLabel,
            children: t,
        });
    }),
    (R.Icon = function (e) {
        let { children: t } = e;
        return (0, r.jsx)("span", {
            className: _.itemCheckbox,
            children: t,
        });
    }),
    (R.Checkbox = function (e) {
        let { checked: t } = e,
            { selected: n } = i.useContext(A),
            a = i.useContext(N);
        return (0, r.jsx)("span", {
            className: _.itemCheckbox,
            children: (0, r.jsx)(u.$q, {
                displayOnly: !0,
                value: null != t ? t : null != a && n.has(a),
                type: u.M0.INVERTED,
                size: 20,
            }),
        });
    }),
    (R.Checkmark = function () {
        let { selected: e } = i.useContext(A),
            t = i.useContext(N);
        return e.has(t)
            ? (0, r.jsx)("span", {
                  className: _.itemCheckbox,
                  children: (0, r.jsx)(d.owK, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                      height: 20,
                  }),
              })
            : null;
    });
