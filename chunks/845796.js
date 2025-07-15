(r.d(t, { Z: () => p }), r(642613));
var n = r(255367),
    l = r(73800),
    o = r(497598),
    i = r(792091),
    a = r(481060),
    s = r(501431),
    c = r(215023),
    u = r(388032),
    d = r(970387);
let p = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: r } = (0, s.S)(),
        p = r(),
        f = l.useMemo(() => c.aP.filter((e) => e.sortType !== i.E.RELEVANCE || p), [p]),
        g = l.useCallback((e) => {
            let { sortType: t, sortDirection: r } = e;
            return t === i.E.RECENCY
                ? {
                      label: u.intl.string(u.t['51Bhi4']),
                      value: 'recent'
                  }
                : t === i.E.PRICE
                  ? r === o.F.ASC
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
        b = g(e);
    return (0, n.jsx)(a.PhF, {
        look: a.qQH.CUSTOM,
        className: d.custom,
        options: f.map(g),
        select: (e) => t(h(e)),
        isSelected: (e) => e === b.value,
        serialize: (e) => e,
        popoutWidth: 224
    });
};
