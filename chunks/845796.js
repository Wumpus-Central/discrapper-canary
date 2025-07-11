(n.d(t, { Z: () => p }), n(642613));
var r = n(255367),
    l = n(73800),
    o = n(497598),
    a = n(792091),
    i = n(481060),
    s = n(501431),
    c = n(215023),
    u = n(388032),
    d = n(970387);
let p = () => {
    let { sort: e, onSetSort: t } = (0, s.S)(),
        n = l.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === a.E.RECENCY
                ? n === o.F.DESC
                    ? {
                          label: u.intl.string(u.t['51Bhi4']),
                          value: 'recent'
                      }
                    : {
                          label: u.intl.string(u.t['l7S+cH']),
                          value: 'old'
                      }
                : t === a.E.PRICE
                  ? n === o.F.ASC
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
        p = l.useCallback(
            (e) =>
                ({
                    recent: {
                        sortType: a.E.RECENCY,
                        sortDirection: o.F.DESC
                    },
                    old: {
                        sortType: a.E.RECENCY,
                        sortDirection: o.F.ASC
                    },
                    'price-asc': {
                        sortType: a.E.PRICE,
                        sortDirection: o.F.ASC
                    },
                    'price-desc': {
                        sortType: a.E.PRICE,
                        sortDirection: o.F.DESC
                    },
                    popularity: {
                        sortType: a.E.POPULARITY,
                        sortDirection: o.F.DESC
                    },
                    relevance: {
                        sortType: a.E.RELEVANCE,
                        sortDirection: o.F.DESC
                    }
                })[e],
            []
        ),
        g = n(e);
    return (0, r.jsx)(i.PhF, {
        look: i.qQH.CUSTOM,
        className: d.custom,
        options: c.aP.map(n),
        select: (e) => t(p(e)),
        isSelected: (e) => e === g.value,
        serialize: (e) => e,
        popoutWidth: 224
    });
};
