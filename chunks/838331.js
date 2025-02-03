n.d(t, {
    A7: () => y,
    hQ: () => T,
    lo: () => A
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(924826),
    l = n(91192),
    u = n(178940),
    c = n(1561),
    d = n(742746),
    f = n(326452),
    _ = n(993365),
    p = n(481060),
    h = n(388032),
    m = n(53843);
let g = 'data-listbox-item-id',
    E = 40,
    v = Object.freeze({
        STANDARD: m.selected,
        BRAND: m.selectedBrand
    });
function y(e) {
    let [t, n] = r.useState(() => new Set(e));
    return [
        t,
        r.useCallback((e) => {
            n((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n;
            });
        }, [])
    ];
}
function I(e) {
    return String(e);
}
let b = r.createContext({
    activeDescendant: null,
    selected: new Set(),
    setSelected: () => null,
    itemToString: I
});
function T(e) {
    let { placeholder: t, children: n, value: a, onChange: u, className: c, listClassName: v, 'aria-label': y, multiSelect: T = !1, autoFocus: S = !1, maxVisibleItems: A = 5, itemToString: N = I, showScrollbar: C = !1 } = e,
        [R, O] = r.useState(''),
        [D] = r.useState(!0),
        [x, L] = r.useState(null),
        P = r.useId(),
        w = r.useRef(null);
    r.useLayoutEffect(() => {
        let e = document.querySelector('['.concat(g, '="').concat(x, '"]')),
            t = w.current;
        null != t &&
            null != e &&
            t.scrollIntoViewNode({
                node: e,
                padding: 12
            });
    }, [x]);
    let M = n(R),
        k = 0 === M.length,
        U = r.useId(),
        G = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = w.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        B = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = w.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        Z = r.useCallback((e, t) => {
            L(t);
            let n = document.querySelector(e),
                i = w.current;
            null != i && null != n && i.scrollIntoViewNode({ node: n });
        }, []),
        F = (0, o.ZP)({
            id: U,
            isEnabled: !0,
            useVirtualFocus: !0,
            scrollToStart: G,
            scrollToEnd: B,
            setFocus: Z
        }),
        V = C ? d.Tv : d.lW;
    return (0, i.jsx)(l.bG, {
        navigator: F,
        children: (0, i.jsx)(l.SJ, {
            children: (e) => {
                let { ref: n, onKeyDown: r, ...o } = e;
                return (0, i.jsxs)('div', {
                    ref: n,
                    role: 'combobox',
                    'aria-label': y,
                    'aria-expanded': D,
                    'aria-controls': D ? P : void 0,
                    'aria-owns': P,
                    'aria-haspopup': 'listbox',
                    className: s()(m.combobox, c),
                    children: [
                        (0, i.jsx)(f.E, {
                            autoFocus: S,
                            size: f.E.Sizes.MEDIUM,
                            placeholder: t,
                            query: R,
                            onChange: O,
                            onKeyDown: r,
                            onBlur: () => L(null),
                            onClear: () => O(''),
                            className: s()({ [m.searchWithScrollbar]: C }),
                            inputProps: {
                                'aria-multiline': !1,
                                'aria-activedescendant': null != x ? x : void 0
                            }
                        }),
                        (0, i.jsx)('div', {
                            children:
                                D &&
                                (k
                                    ? (0, i.jsxs)('div', {
                                          className: m.empty,
                                          children: [
                                              (0, i.jsx)(p.X6q, {
                                                  variant: 'heading-md/semibold',
                                                  children: h.intl.string(h.t['4o4z3d'])
                                              }),
                                              (0, i.jsx)(_.x, {
                                                  color: 'text-muted',
                                                  variant: 'text-md/normal',
                                                  children: h.intl.string(h.t.QwSXv7)
                                              })
                                          ]
                                      })
                                    : (0, i.jsx)(b.Provider, {
                                          value: {
                                              activeDescendant: x,
                                              selected: a,
                                              setSelected: u,
                                              itemToString: N
                                          },
                                          children: (0, i.jsx)(V, {
                                              ...o,
                                              style: { maxHeight: A * (E + 6) },
                                              'aria-multiselectable': T,
                                              id: P,
                                              ref: w,
                                              className: s()(m.list, v, { [m.scroller]: C }),
                                              sections: [M.length],
                                              sectionHeight: 0,
                                              rowHeight: E,
                                              renderRow: (e) => {
                                                  let { row: t } = e;
                                                  return M[t];
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
let S = r.createContext(null);
function A(e) {
    var t;
    let { value: n, children: a, disabled: o = !1, selectedColor: u = v.STANDARD, ...d } = e,
        { activeDescendant: f, selected: _, setSelected: p, itemToString: h } = r.useContext(b),
        E = h(n),
        y = f === E,
        I = null !== (t = null == d ? void 0 : d.selected) && void 0 !== t ? t : _.has(n),
        T = (0, l.JA)(E);
    return (0, i.jsx)(c.P, {
        tag: 'li',
        id: E,
        onClick: () => (o ? null : p(n)),
        [g]: n,
        className: s()(m.item, {
            [m.focused]: y,
            [u]: I,
            [m.disabled]: o
        }),
        ...T,
        role: 'option',
        'aria-selected': I,
        'aria-disabled': o,
        children: (0, i.jsx)(S.Provider, {
            value: n,
            children: a
        })
    });
}
(A.Colors = v),
    (A.Label = function (e) {
        let { children: t } = e;
        return (0, i.jsx)('span', {
            className: m.itemLabel,
            children: t
        });
    }),
    (A.Icon = function (e) {
        let { children: t } = e;
        return (0, i.jsx)('span', {
            className: m.itemCheckbox,
            children: t
        });
    }),
    (A.Checkbox = function (e) {
        let { checked: t } = e,
            { selected: n } = r.useContext(b),
            a = r.useContext(S);
        return (0, i.jsx)('span', {
            className: m.itemCheckbox,
            children: (0, i.jsx)(u.X, {
                displayOnly: !0,
                value: null != t ? t : null != a && n.has(a),
                type: u.X.Types.INVERTED,
                size: 20
            })
        });
    }),
    (A.Checkmark = function () {
        let { selected: e } = r.useContext(b),
            t = r.useContext(S);
        return e.has(t)
            ? (0, i.jsx)('span', {
                  className: m.itemCheckbox,
                  children: (0, i.jsx)(p.owK, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 20,
                      height: 20
                  })
              })
            : null;
    });
