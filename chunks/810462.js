var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(232713),
    l = r(260866),
    u = r(481060),
    c = r(806966),
    d = r(28546),
    f = r(849736);
let p = o.forwardRef(function (e, n) {
    let { store: r, hasSendableExpressions: i, onKeyDown: p, gridNavigatorId: h, expressionsListRef: _, defaultSearchPlaceholder: m, emptySearchPlaceholder: g } = e,
        E = o.useRef(null),
        [v, y] = (0, d.Iu)((e) => [e.searchQuery, e.isSearchSuggestion], s.X),
        b = r.useStore((e) => e.searchPlaceholder),
        I = r.useStore((e) => e.inspectedExpressionPosition, s.X),
        T = o.useCallback(
            (e) => {
                var n;
                r.setActiveCategoryIndex('' === e ? 0 : c.c), r.setInspectedExpressionPosition(0, 0), r.setSearchPlaceholder(null), (0, d.ql)(e), null === (n = _.current) || void 0 === n || n.scrollTo(0);
            },
            [_, r]
        ),
        S = o.useCallback(() => {
            (0, d.ql)('');
        }, []);
    o.useImperativeHandle(n, () => ({
        focus: () => {
            var e;
            return null === (e = E.current) || void 0 === e ? void 0 : e.focus();
        }
    })),
        o.useLayoutEffect(() => {
            if (y) {
                var e;
                null === (e = E.current) || void 0 === e || e.focus();
            }
        }, [y]);
    let A = () => (null != b ? b : i || null == g ? m : g);
    return (0, a.jsx)('div', {
        className: f.wrapper,
        children: (0, a.jsx)(u.SearchBar, {
            autoFocus: i,
            disabled: !i,
            query: v,
            ref: E,
            size: u.SearchBar.Sizes.MEDIUM,
            placeholder: A(),
            onClear: S,
            onKeyDown: p,
            onChange: T,
            className: f.__invalid_searchBar,
            inputProps: {
                'aria-haspopup': 'grid',
                'aria-controls': h,
                'aria-expanded': !0,
                'aria-activedescendant': (0, l.NE)(h, I.columnIndex, I.rowIndex)
            }
        })
    });
});
n.Z = p;
