(r.d(t, { Z: () => p }), r(642613));
var n = r(255367),
    l = r(73800),
    i = r(497598),
    o = r(792091),
    a = r(481060),
    s = r(501431),
    c = r(215023),
    u = r(388032),
    d = r(970387);
let p = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: r } = (0, s.S)(),
        p = r(),
        f = l.useMemo(() => c.aP.filter((e) => e.sortType !== o.E.RELEVANCE || p), [p]),
        g = l.useCallback((e) => {
            let { sortType: t, sortDirection: r } = e;
            return t === o.E.RECENCY
                ? {
                      label: u.intl.string(u.t['51Bhi4']),
                      value: 'recent'
                  }
                : t === o.E.PRICE
                  ? r === i.F.ASC
                      ? {
                            label: u.intl.string(u.t.m8RVU1),
                            value: 'price-asc'
                        }
                      : {
                            label: u.intl.string(u.t.zBwQJC),
                            value: 'price-desc'
                        }
                  : t === o.E.RELEVANCE
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
                        sortType: o.E.RECENCY,
                        sortDirection: i.F.DESC
                    },
                    'price-asc': {
                        sortType: o.E.PRICE,
                        sortDirection: i.F.ASC
                    },
                    'price-desc': {
                        sortType: o.E.PRICE,
                        sortDirection: i.F.DESC
                    },
                    popularity: {
                        sortType: o.E.POPULARITY,
                        sortDirection: i.F.DESC
                    },
                    relevance: {
                        sortType: o.E.RELEVANCE,
                        sortDirection: i.F.DESC
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
