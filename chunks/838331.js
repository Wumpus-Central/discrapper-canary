r.d(n, {
    A7: function () {
        return b;
    },
    hQ: function () {
        return N;
    },
    lo: function () {
        return R;
    },
    yn: function () {
        return y;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(924826),
    c = r(91192),
    d = r(178940),
    f = r(1561),
    _ = r(742746),
    h = r(326452),
    p = r(993365),
    m = r(481060),
    g = r(388032),
    E = r(53843);
let v = 'data-listbox-item-id',
    I = 40,
    T = Object.freeze({
        STANDARD: E.selected,
        BRAND: E.selectedBrand
    });
function b(e) {
    let [n, r] = s.useState(() => new Set(e));
    return [
        n,
        s.useCallback((e) => {
            r((n) => {
                let r = new Set(n);
                return r.has(e) ? r.delete(e) : r.add(e), r;
            });
        }, [])
    ];
}
function y(e) {
    let [n, r] = s.useState(() => new Set(null != e ? [e] : void 0));
    return [
        n,
        s.useCallback((e) => {
            r(new Set([e]));
        }, [])
    ];
}
function S(e) {
    return String(e);
}
let A = s.createContext({
    activeDescendant: null,
    selected: new Set(),
    setSelected: () => null,
    itemToString: S
});
function N(e) {
    let { placeholder: n, children: r, value: i, onChange: o, className: d, listClassName: f, 'aria-label': T, multiSelect: b = !1, autoFocus: y = !1, maxVisibleItems: N = 5, itemToString: C = S, showScrollbar: R = !1 } = e,
        [O, D] = s.useState(''),
        [L] = s.useState(!0),
        [x, w] = s.useState(null),
        P = s.useId(),
        M = s.useRef(null);
    s.useLayoutEffect(() => {
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
        B = s.useId(),
        G = s.useCallback(
            () =>
                new Promise((e) => {
                    let n = M.current;
                    if (null == n) return e();
                    n.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        Z = s.useCallback(
            () =>
                new Promise((e) => {
                    let n = M.current;
                    if (null == n) return e();
                    n.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        F = s.useCallback((e, n) => {
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
        j = R ? _.Tv : _.lW;
    return (0, a.jsx)(c.bG, {
        navigator: V,
        children: (0, a.jsx)(c.SJ, {
            children: (e) => {
                let { ref: r, onKeyDown: s, ...u } = e;
                return (0, a.jsxs)('div', {
                    ref: r,
                    role: 'combobox',
                    'aria-label': T,
                    'aria-expanded': L,
                    'aria-controls': L ? P : void 0,
                    'aria-owns': P,
                    'aria-haspopup': 'listbox',
                    className: l()(E.combobox, d),
                    children: [
                        (0, a.jsx)(h.E, {
                            autoFocus: y,
                            size: h.E.Sizes.MEDIUM,
                            placeholder: n,
                            query: O,
                            onChange: D,
                            onKeyDown: s,
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
                                              (0, a.jsx)(p.x, {
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
                                              setSelected: o,
                                              itemToString: C
                                          },
                                          children: (0, a.jsx)(j, {
                                              ...u,
                                              style: { maxHeight: N * (I + 6) },
                                              'aria-multiselectable': b,
                                              id: P,
                                              ref: M,
                                              className: l()(E.list, f, { [E.scroller]: R }),
                                              sections: [k.length],
                                              sectionHeight: 0,
                                              rowHeight: I,
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
let C = s.createContext(null);
function R(e) {
    var n;
    let { value: r, children: i, disabled: o = !1, selectedColor: u = T.STANDARD, ...d } = e,
        { activeDescendant: _, selected: h, setSelected: p, itemToString: m } = s.useContext(A),
        g = m(r),
        I = _ === g,
        b = null !== (n = null == d ? void 0 : d.selected) && void 0 !== n ? n : h.has(r),
        y = (0, c.JA)(g);
    return (0, a.jsx)(f.P, {
        tag: 'li',
        id: g,
        onClick: () => (o ? null : p(r)),
        [v]: r,
        className: l()(E.item, {
            [E.focused]: I,
            [u]: b,
            [E.disabled]: o
        }),
        ...y,
        role: 'option',
        'aria-selected': b,
        'aria-disabled': o,
        children: (0, a.jsx)(C.Provider, {
            value: r,
            children: i
        })
    });
}
(R.Colors = T),
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
            { selected: r } = s.useContext(A),
            i = s.useContext(C);
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
        let { selected: e } = s.useContext(A),
            n = s.useContext(C);
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
