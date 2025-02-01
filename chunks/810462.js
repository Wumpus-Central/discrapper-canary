n.d(t, { Z: () => d }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(232713),
    s = n(260866),
    o = n(481060),
    l = n(806966),
    u = n(28546),
    c = n(849736);
let d = r.forwardRef(function (e, t) {
    let { store: n, hasSendableExpressions: d, onKeyDown: f, gridNavigatorId: _, expressionsListRef: p, defaultSearchPlaceholder: h, emptySearchPlaceholder: m } = e,
        g = r.useRef(null),
        [E, v] = (0, u.Iu)((e) => [e.searchQuery, e.isSearchSuggestion], a.X),
        y = n.useStore((e) => e.searchPlaceholder),
        I = n.useStore((e) => e.inspectedExpressionPosition, a.X),
        T = r.useCallback(
            (e) => {
                var t;
                n.setActiveCategoryIndex('' === e ? 0 : l.c), n.setInspectedExpressionPosition(0, 0), n.setSearchPlaceholder(null), (0, u.ql)(e), null === (t = p.current) || void 0 === t || t.scrollTo(0);
            },
            [p, n]
        ),
        b = r.useCallback(() => {
            (0, u.ql)('');
        }, []);
    r.useImperativeHandle(t, () => ({
        focus: () => {
            var e;
            return null === (e = g.current) || void 0 === e ? void 0 : e.focus();
        }
    })),
        r.useLayoutEffect(() => {
            if (v) {
                var e;
                null === (e = g.current) || void 0 === e || e.focus();
            }
        }, [v]);
    let S = () => (null != y ? y : d || null == m ? h : m);
    return (0, i.jsx)('div', {
        className: c.wrapper,
        children: (0, i.jsx)(o.E1j, {
            autoFocus: d,
            disabled: !d,
            query: E,
            ref: g,
            size: o.E1j.Sizes.MEDIUM,
            placeholder: S(),
            onClear: b,
            onKeyDown: f,
            onChange: T,
            className: c.__invalid_searchBar,
            inputProps: {
                'aria-haspopup': 'grid',
                'aria-controls': _,
                'aria-expanded': !0,
                'aria-activedescendant': (0, s.NE)(_, I.columnIndex, I.rowIndex)
            }
        })
    });
});
