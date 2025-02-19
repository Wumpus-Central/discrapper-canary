n.d(t, {
    A7: () => N,
    hQ: () => R,
    lo: () => w
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(924826),
    l = n(91192),
    c = n(178940),
    u = n(1561),
    d = n(742746),
    f = n(326452),
    p = n(993365),
    _ = n(481060),
    h = n(388032),
    m = n(812296);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
            : v(Object(t)).forEach(function (n) {
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
let S = 'data-listbox-item-id',
    I = 40,
    T = Object.freeze({
        STANDARD: m.selected,
        BRAND: m.selectedBrand
    });
function N(e) {
    let [t, n] = i.useState(() => new Set(e));
    return [
        t,
        i.useCallback((e) => {
            n((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n;
            });
        }, [])
    ];
}
function A(e) {
    return String(e);
}
let C = i.createContext({
    activeDescendant: null,
    selected: new Set(),
    setSelected: () => null,
    itemToString: A
});
function R(e) {
    let { placeholder: t, children: n, value: o, onChange: c, className: u, listClassName: g, 'aria-label': v, multiSelect: O = !1, autoFocus: T = !1, maxVisibleItems: N = 5, itemToString: R = A, showScrollbar: P = !1 } = e,
        [w, D] = i.useState(''),
        [x] = i.useState(!0),
        [L, M] = i.useState(null),
        k = i.useId(),
        j = i.useRef(null);
    i.useLayoutEffect(() => {
        let e = document.querySelector('['.concat(S, '="').concat(L, '"]')),
            t = j.current;
        null != t &&
            null != e &&
            t.scrollIntoViewNode({
                node: e,
                padding: 12
            });
    }, [L]);
    let U = n(w),
        G = 0 === U.length,
        B = i.useId(),
        Z = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = j.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        F = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = j.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        V = i.useCallback((e, t) => {
            M(t);
            let n = document.querySelector(e),
                r = j.current;
            null != r && null != n && r.scrollIntoViewNode({ node: n });
        }, []),
        H = (0, s.ZP)({
            id: B,
            isEnabled: !0,
            useVirtualFocus: !0,
            scrollToStart: Z,
            scrollToEnd: F,
            setFocus: V
        }),
        W = P ? d.Tv : d.lW;
    return (0, r.jsx)(l.bG, {
        navigator: H,
        children: (0, r.jsx)(l.SJ, {
            children: (e) => {
                var { ref: n, onKeyDown: i } = e,
                    s = y(e, ['ref', 'onKeyDown']);
                return (0, r.jsxs)('div', {
                    ref: n,
                    role: 'combobox',
                    'aria-label': v,
                    'aria-expanded': x,
                    'aria-controls': x ? k : void 0,
                    'aria-owns': k,
                    'aria-haspopup': 'listbox',
                    className: a()(m.combobox, u),
                    children: [
                        (0, r.jsx)(f.E, {
                            autoFocus: T,
                            size: f.E.Sizes.MEDIUM,
                            placeholder: t,
                            query: w,
                            onChange: D,
                            onKeyDown: i,
                            onBlur: () => M(null),
                            onClear: () => D(''),
                            className: a()({ [m.searchWithScrollbar]: P }),
                            inputProps: {
                                'aria-multiline': !1,
                                'aria-activedescendant': null != L ? L : void 0
                            }
                        }),
                        (0, r.jsx)('div', {
                            children:
                                x &&
                                (G
                                    ? (0, r.jsxs)('div', {
                                          className: m.empty,
                                          children: [
                                              (0, r.jsx)(_.X6q, {
                                                  variant: 'heading-md/semibold',
                                                  children: h.NW.string(h.t['4o4z3d'])
                                              }),
                                              (0, r.jsx)(p.x, {
                                                  color: 'text-muted',
                                                  variant: 'text-md/normal',
                                                  children: h.NW.string(h.t.QwSXv7)
                                              })
                                          ]
                                      })
                                    : (0, r.jsx)(C.Provider, {
                                          value: {
                                              activeDescendant: L,
                                              selected: o,
                                              setSelected: c,
                                              itemToString: R
                                          },
                                          children: (0, r.jsx)(
                                              W,
                                              b(E({}, s), {
                                                  style: { maxHeight: N * (I + 6) },
                                                  'aria-multiselectable': O,
                                                  id: k,
                                                  ref: j,
                                                  className: a()(m.list, g, { [m.scroller]: P }),
                                                  sections: [U.length],
                                                  sectionHeight: 0,
                                                  rowHeight: I,
                                                  renderRow: (e) => {
                                                      let { row: t } = e;
                                                      return U[t];
                                                  },
                                                  renderSection: () => null
                                              })
                                          )
                                      }))
                        })
                    ]
                });
            }
        })
    });
}
let P = i.createContext(null);
function w(e) {
    var t,
        { value: n, children: o, disabled: s = !1, selectedColor: c = T.STANDARD } = e,
        d = y(e, ['value', 'children', 'disabled', 'selectedColor']);
    let { activeDescendant: f, selected: p, setSelected: _, itemToString: h } = i.useContext(C),
        g = h(n),
        v = f === g,
        O = null !== (t = null == d ? void 0 : d.selected) && void 0 !== t ? t : p.has(n),
        I = (0, l.JA)(g);
    return (0, r.jsx)(
        u.P,
        b(
            E(
                {
                    tag: 'li',
                    id: g,
                    onClick: () => (s ? null : _(n)),
                    [S]: n,
                    className: a()(m.item, {
                        [m.focused]: v,
                        [c]: O,
                        [m.disabled]: s
                    })
                },
                I
            ),
            {
                role: 'option',
                'aria-selected': O,
                'aria-disabled': s,
                children: (0, r.jsx)(P.Provider, {
                    value: n,
                    children: o
                })
            }
        )
    );
}
(w.Colors = T),
    (w.Label = function (e) {
        let { children: t } = e;
        return (0, r.jsx)('span', {
            className: m.itemLabel,
            children: t
        });
    }),
    (w.Icon = function (e) {
        let { children: t } = e;
        return (0, r.jsx)('span', {
            className: m.itemCheckbox,
            children: t
        });
    }),
    (w.Checkbox = function (e) {
        let { checked: t } = e,
            { selected: n } = i.useContext(C),
            o = i.useContext(P);
        return (0, r.jsx)('span', {
            className: m.itemCheckbox,
            children: (0, r.jsx)(c.X, {
                displayOnly: !0,
                value: null != t ? t : null != o && n.has(o),
                type: c.X.Types.INVERTED,
                size: 20
            })
        });
    }),
    (w.Checkmark = function () {
        let { selected: e } = i.useContext(C),
            t = i.useContext(P);
        return e.has(t)
            ? (0, r.jsx)('span', {
                  className: m.itemCheckbox,
                  children: (0, r.jsx)(_.owK, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 20,
                      height: 20
                  })
              })
            : null;
    });
