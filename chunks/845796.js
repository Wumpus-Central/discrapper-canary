(r.d(t, { Z: () => h }), r(642613));
var n = r(255367),
    l = r(73800),
    a = r(497598),
    i = r(792091),
    o = r(481060),
    s = r(626135),
    c = r(381585),
    u = r(501431),
    d = r(215023),
    p = r(981631),
    g = r(388032),
    f = r(970387);
let h = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: r } = (0, u.S)(),
        h = (0, c.sp)(),
        b = r(),
        _ = l.useMemo(() => d.aP.filter((e) => e.sortType !== i.E.RELEVANCE || b), [b]),
        m = l.useCallback((e) => {
            let { sortType: t, sortDirection: r } = e;
            return t === i.E.RECENCY
                ? {
                      label: g.intl.string(g.t['51Bhi4']),
                      value: 'recent'
                  }
                : t === i.E.PRICE
                  ? r === a.F.ASC
                      ? {
                            label: g.intl.string(g.t.m8RVU1),
                            value: 'price-asc'
                        }
                      : {
                            label: g.intl.string(g.t.zBwQJC),
                            value: 'price-desc'
                        }
                  : t === i.E.RELEVANCE
                    ? {
                          label: g.intl.string(g.t['XoeT//']),
                          value: 'relevance'
                      }
                    : {
                          label: g.intl.string(g.t.Y68e5u),
                          value: 'popularity'
                      };
        }, []),
        v = l.useCallback(
            (e) =>
                ({
                    recent: {
                        sortType: i.E.RECENCY,
                        sortDirection: a.F.DESC
                    },
                    'price-asc': {
                        sortType: i.E.PRICE,
                        sortDirection: a.F.ASC
                    },
                    'price-desc': {
                        sortType: i.E.PRICE,
                        sortDirection: a.F.DESC
                    },
                    popularity: {
                        sortType: i.E.POPULARITY,
                        sortDirection: a.F.DESC
                    },
                    relevance: {
                        sortType: i.E.RELEVANCE,
                        sortDirection: a.F.DESC
                    }
                })[e],
            []
        ),
        C = l.useCallback(
            (e) => {
                let r = m(v(e));
                (s.default.track(p.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == h ? void 0 : h.sessionId,
                    page_section: null == h ? void 0 : h.pageSection,
                    page_category: null == h ? void 0 : h.pageCategory,
                    page_index: null == h ? void 0 : h.pageIndex,
                    page_size: null == h ? void 0 : h.pageSize,
                    cta_name: 'sort by '.concat(r.label.toLowerCase()),
                    page_type: 'catalog'
                }),
                    t(v(e)));
            },
            [h, m, v, t]
        ),
        O = m(e);
    return (0, n.jsx)(o.PhF, {
        look: o.qQH.CUSTOM,
        className: f.custom,
        options: _.map(m),
        select: C,
        isSelected: (e) => e === O.value,
        serialize: (e) => e,
        popoutWidth: 224
    });
};
