r.d(n, {
    A7: function () {
        return I;
    },
    hQ: function () {
        return C;
    },
    lo: function () {
        return R;
    },
    yn: function () {
        return T;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(924826),
    c = r(91192),
    d = r(178940),
    f = r(1561),
    p = r(742746),
    h = r(326452),
    _ = r(993365),
    m = r(481060),
    g = r(388032),
    E = r(53843);
let v = 'data-listbox-item-id',
    y = 40,
    b = Object.freeze({
        STANDARD: E.selected,
        BRAND: E.selectedBrand
    });
function I(e) {
    let [n, r] = o.useState(() => new Set(e));
    return [
        n,
        o.useCallback((e) => {
            r((n) => {
                let r = new Set(n);
                return r.has(e) ? r.delete(e) : r.add(e), r;
            });
        }, [])
    ];
}
function T(e) {
    let [n, r] = o.useState(() => new Set(null != e ? [e] : void 0));
    return [
        n,
        o.useCallback((e) => {
            r(new Set([e]));
        }, [])
    ];
}
function S(e) {
    return String(e);
}
let A = o.createContext({
    activeDescendant: null,
    selected: new Set(),
    setSelected: () => null,
    itemToString: S
});
function C(e) {
    let { placeholder: n, children: r, value: i, onChange: s, className: d, listClassName: f, 'aria-label': b, multiSelect: I = !1, autoFocus: T = !1, maxVisibleItems: C = 5, itemToString: N = S, showScrollbar: R = !1 } = e,
        [O, D] = o.useState(''),
        [L] = o.useState(!0),
        [x, w] = o.useState(null),
        P = o.useId(),
        M = o.useRef(null);
    o.useLayoutEffect(() => {
        let e = document.querySelector('['.concat(v, '="').concat(x, '"]')),
            n = M.current;
        null != n &&
            null != e &&
            n.scrollIntoViewNode({
                node: e,
                padding: 12
            });
    }, [x]);
    let k = r(O),
        U = 0 === k.length,
        B = o.useId(),
        G = o.useCallback(
            () =>
                new Promise((e) => {
                    let n = M.current;
                    if (null == n) return e();
                    n.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        Z = o.useCallback(
            () =>
                new Promise((e) => {
                    let n = M.current;
                    if (null == n) return e();
                    n.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        F = o.useCallback((e, n) => {
            w(n);
            let r = document.querySelector(e),
                i = M.current;
            null != i && null != r && i.scrollIntoViewNode({ node: r });
        }, []),
        V = (0, u.ZP)({
            id: B,
            isEnabled: !0,
            useVirtualFocus: !0,
            scrollToStart: G,
            scrollToEnd: Z,
            setFocus: F
        }),
        j = R ? p.Tv : p.lW;
    return (0, a.jsx)(c.bG, {
        navigator: V,
        children: (0, a.jsx)(c.SJ, {
            children: (e) => {
                let { ref: r, onKeyDown: o, ...u } = e;
                return (0, a.jsxs)('div', {
                    ref: r,
                    role: 'combobox',
                    'aria-label': b,
                    'aria-expanded': L,
                    'aria-controls': L ? P : void 0,
                    'aria-owns': P,
                    'aria-haspopup': 'listbox',
                    className: l()(E.combobox, d),
                    children: [
                        (0, a.jsx)(h.E, {
                            autoFocus: T,
                            size: h.E.Sizes.MEDIUM,
                            placeholder: n,
                            query: O,
                            onChange: D,
                            onKeyDown: o,
                            onBlur: () => w(null),
                            onClear: () => D(''),
                            className: l()({ [E.searchWithScrollbar]: R }),
                            inputProps: {
                                'aria-multiline': !1,
                                'aria-activedescendant': null != x ? x : void 0
                            }
                        }),
                        (0, a.jsx)('div', {
                            children:
                                L &&
                                (U
                                    ? (0, a.jsxs)('div', {
                                          className: E.empty,
                                          children: [
                                              (0, a.jsx)(m.Heading, {
                                                  variant: 'heading-md/semibold',
                                                  children: g.intl.string(g.t['4o4z3d'])
                                              }),
                                              (0, a.jsx)(_.x, {
                                                  color: 'text-muted',
                                                  variant: 'text-md/normal',
                                                  children: g.intl.string(g.t.QwSXv7)
                                              })
                                          ]
                                      })
                                    : (0, a.jsx)(A.Provider, {
                                          value: {
                                              activeDescendant: x,
                                              selected: i,
                                              setSelected: s,
                                              itemToString: N
                                          },
                                          children: (0, a.jsx)(j, {
                                              ...u,
                                              style: { maxHeight: C * (y + 6) },
                                              'aria-multiselectable': I,
                                              id: P,
                                              ref: M,
                                              className: l()(E.list, f, { [E.scroller]: R }),
                                              sections: [k.length],
                                              sectionHeight: 0,
                                              rowHeight: y,
                                              renderRow: (e) => {
                                                  let { row: n } = e;
                                                  return k[n];
                                              },
                                              renderSection: () => null
                                          })
                                      }))
                        })
                    ]
                });
            }
        })
    });
}
let N = o.createContext(null);
function R(e) {
    var n;
    let { value: r, children: i, disabled: s = !1, selectedColor: u = b.STANDARD, ...d } = e,
        { activeDescendant: p, selected: h, setSelected: _, itemToString: m } = o.useContext(A),
        g = m(r),
        y = p === g,
        I = null !== (n = null == d ? void 0 : d.selected) && void 0 !== n ? n : h.has(r),
        T = (0, c.JA)(g);
    return (0, a.jsx)(f.P, {
        tag: 'li',
        id: g,
        onClick: () => (s ? null : _(r)),
        [v]: r,
        className: l()(E.item, {
            [E.focused]: y,
            [u]: I,
            [E.disabled]: s
        }),
        ...T,
        role: 'option',
        'aria-selected': I,
        'aria-disabled': s,
        children: (0, a.jsx)(N.Provider, {
            value: r,
            children: i
        })
    });
}
(R.Colors = b),
    (R.Label = function (e) {
        let { children: n } = e;
        return (0, a.jsx)('span', {
            className: E.itemLabel,
            children: n
        });
    }),
    (R.Icon = function (e) {
        let { children: n } = e;
        return (0, a.jsx)('span', {
            className: E.itemCheckbox,
            children: n
        });
    }),
    (R.Checkbox = function (e) {
        let { checked: n } = e,
            { selected: r } = o.useContext(A),
            i = o.useContext(N);
        return (0, a.jsx)('span', {
            className: E.itemCheckbox,
            children: (0, a.jsx)(d.X, {
                displayOnly: !0,
                value: null != n ? n : null != i && r.has(i),
                type: d.X.Types.INVERTED,
                size: 20
            })
        });
    }),
    (R.Checkmark = function () {
        let { selected: e } = o.useContext(A),
            n = o.useContext(N);
        return e.has(n)
            ? (0, a.jsx)('span', {
                  className: E.itemCheckbox,
                  children: (0, a.jsx)(m.CircleCheckIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 20,
                      height: 20
                  })
              })
            : null;
    });
