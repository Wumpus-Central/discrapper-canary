var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(232713),
    l = r(260866),
    u = r(481060),
    c = r(806966),
    d = r(28546),
    f = r(849736);
let _ = s.forwardRef(function (e, n) {
    let { store: r, hasSendableExpressions: i, onKeyDown: _, gridNavigatorId: h, expressionsListRef: p, defaultSearchPlaceholder: m, emptySearchPlaceholder: g } = e,
        E = s.useRef(null),
        [v, I] = (0, d.Iu)((e) => [e.searchQuery, e.isSearchSuggestion], o.X),
        T = r.useStore((e) => e.searchPlaceholder),
        b = r.useStore((e) => e.inspectedExpressionPosition, o.X),
        y = s.useCallback(
            (e) => {
                var n;
                r.setActiveCategoryIndex('' === e ? 0 : c.c), r.setInspectedExpressionPosition(0, 0), r.setSearchPlaceholder(null), (0, d.ql)(e), null === (n = p.current) || void 0 === n || n.scrollTo(0);
            },
            [p, r]
        ),
        S = s.useCallback(() => {
            (0, d.ql)('');
        }, []);
    s.useImperativeHandle(n, () => ({
        focus: () => {
            var e;
            return null === (e = E.current) || void 0 === e ? void 0 : e.focus();
        }
    })),
        s.useLayoutEffect(() => {
            if (I) {
                var e;
                null === (e = E.current) || void 0 === e || e.focus();
            }
        }, [I]);
    let A = () => (null != T ? T : i || null == g ? m : g);
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
            onKeyDown: _,
            onChange: y,
            className: f.__invalid_searchBar,
            inputProps: {
                'aria-haspopup': 'grid',
                'aria-controls': h,
                'aria-expanded': !0,
                'aria-activedescendant': (0, l.NE)(h, b.columnIndex, b.rowIndex)
            }
        })
    });
});
n.Z = _;
