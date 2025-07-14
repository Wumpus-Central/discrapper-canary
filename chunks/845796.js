(n.d(t, { Z: () => p }), n(642613));
var r = n(255367),
    l = n(73800),
    o = n(497598),
    i = n(792091),
    a = n(481060),
    s = n(501431),
    c = n(215023),
    u = n(388032),
    d = n(970387);
let p = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, s.S)(),
        p = n(),
        g = l.useMemo(() => c.aP.filter((e) => e.sortType !== i.E.RELEVANCE || p), [p]),
        f = l.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === i.E.RECENCY
                ? {
                      label: u.intl.string(u.t['51Bhi4']),
                      value: 'recent'
                  }
                : t === i.E.PRICE
                  ? n === o.F.ASC
                      ? {
                            label: u.intl.string(u.t.m8RVU1),
                            value: 'price-asc'
                        }
                      : {
                            label: u.intl.string(u.t.zBwQJC),
                            value: 'price-desc'
                        }
                  : t === i.E.RELEVANCE
                    ? {
                          label: u.intl.string(u.t['XoeT//']),
                          value: 'relevance'
                      }
                    : {
                          label: u.intl.string(u.t.Y68e5u),
                          value: 'popularity'
                      };
        }, []),
        h = l.useCallback(
            (e) =>
                ({
                    recent: {
                        sortType: i.E.RECENCY,
                        sortDirection: o.F.DESC
                    },
                    'price-asc': {
                        sortType: i.E.PRICE,
                        sortDirection: o.F.ASC
                    },
                    'price-desc': {
                        sortType: i.E.PRICE,
                        sortDirection: o.F.DESC
                    },
                    popularity: {
                        sortType: i.E.POPULARITY,
                        sortDirection: o.F.DESC
                    },
                    relevance: {
                        sortType: i.E.RELEVANCE,
                        sortDirection: o.F.DESC
                    }
                })[e],
            []
        ),
        b = f(e);
    return (0, r.jsx)(a.PhF, {
        look: a.qQH.CUSTOM,
        className: d.custom,
        options: g.map(f),
        select: (e) => t(h(e)),
        isSelected: (e) => e === b.value,
        serialize: (e) => e,
        popoutWidth: 224
    });
};
