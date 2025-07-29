(r.d(t, { Z: () => p }), r(642613));
var n = r(255367),
    l = r(73800),
    i = r(497598),
    a = r(792091),
    o = r(481060),
    s = r(501431),
    c = r(215023),
    u = r(388032),
    d = r(970387);
let p = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: r } = (0, s.S)(),
        p = r(),
        f = l.useMemo(() => c.aP.filter((e) => e.sortType !== a.E.RELEVANCE || p), [p]),
        g = l.useCallback((e) => {
            let { sortType: t, sortDirection: r } = e;
            return t === a.E.RECENCY
                ? {
                      label: u.intl.string(u.t['51Bhi4']),
                      value: 'recent'
                  }
                : t === a.E.PRICE
                  ? r === i.F.ASC
                      ? {
                            label: u.intl.string(u.t.m8RVU1),
                            value: 'price-asc'
                        }
                      : {
                            label: u.intl.string(u.t.zBwQJC),
                            value: 'price-desc'
                        }
                  : t === a.E.RELEVANCE
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
                        sortType: a.E.RECENCY,
                        sortDirection: i.F.DESC
                    },
                    'price-asc': {
                        sortType: a.E.PRICE,
                        sortDirection: i.F.ASC
                    },
                    'price-desc': {
                        sortType: a.E.PRICE,
                        sortDirection: i.F.DESC
                    },
                    popularity: {
                        sortType: a.E.POPULARITY,
                        sortDirection: i.F.DESC
                    },
                    relevance: {
                        sortType: a.E.RELEVANCE,
                        sortDirection: i.F.DESC
                    }
                })[e],
            []
        ),
        b = g(e);
    return (0, n.jsx)(o.PhF, {
        look: o.qQH.CUSTOM,
        className: d.custom,
        options: f.map(g),
        select: (e) => t(h(e)),
        isSelected: (e) => e === b.value,
        serialize: (e) => e,
        popoutWidth: 224
    });
};
