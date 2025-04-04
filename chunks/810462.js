n.d(t, { Z: () => d }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(788347),
    a = n(260866),
    s = n(481060),
    l = n(806966),
    c = n(28546),
    u = n(368020);
let d = i.forwardRef(function (e, t) {
    let { store: n, hasSendableExpressions: d, onKeyDown: f, gridNavigatorId: _, expressionsListRef: p, defaultSearchPlaceholder: h, emptySearchPlaceholder: m } = e,
        g = i.useRef(null),
        [E, b] = (0, c.Iu)((e) => [e.searchQuery, e.isSearchSuggestion], o.X),
        y = n.useStore((e) => e.searchPlaceholder),
        v = n.useStore((e) => e.inspectedExpressionPosition, o.X),
        O = i.useCallback(
            (e) => {
                var t;
                n.setActiveCategoryIndex('' === e ? 0 : l.c), n.setInspectedExpressionPosition(0, 0), n.setSearchPlaceholder(null), (0, c.ql)(e), null == (t = p.current) || t.scrollTo(0);
            },
            [p, n]
        ),
        I = i.useCallback(() => {
            (0, c.ql)('');
        }, []);
    i.useImperativeHandle(t, () => ({
        focus: () => {
            var e;
            return null == (e = g.current) ? void 0 : e.focus();
        }
    })),
        i.useLayoutEffect(() => {
            if (b) {
                var e;
                null == (e = g.current) || e.focus();
            }
        }, [b]);
    let S = () => (null != y ? y : d || null == m ? h : m);
    return (0, r.jsx)('div', {
        className: u.wrapper,
        children: (0, r.jsx)(s.E1j, {
            autoFocus: d,
            disabled: !d,
            query: E,
            ref: g,
            size: s.E1j.Sizes.MEDIUM,
            placeholder: S(),
            onClear: I,
            onKeyDown: f,
            onChange: O,
            className: u.__invalid_searchBar,
            inputProps: {
                'aria-haspopup': 'grid',
                'aria-controls': _,
                'aria-expanded': !0,
                'aria-activedescendant': (0, a.NE)(_, v.columnIndex, v.rowIndex)
            }
        })
    });
});
