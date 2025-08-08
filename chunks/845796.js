n.d(t, { Z: () => b }), n(642613);
var r = n(255367),
    l = n(73800),
    a = n(497598),
    i = n(792091),
    o = n(481060),
    s = n(626135),
    c = n(381585),
    u = n(501431),
    d = n(215023),
    p = n(981631),
    g = n(388032),
    f = n(970387);
let b = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, u.S)(),
        b = (0, c.sp)(),
        h = n(),
        m = l.useMemo(() => d.aP.filter((e) => e.sortType !== i.E.RELEVANCE || h), [h]),
        _ = l.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === i.E.RECENCY
                ? {
                      label: g.intl.string(g.t["51Bhi4"]),
                      value: "recent",
                  }
                : t === i.E.PRICE
                  ? n === a.F.ASC
                      ? {
                            label: g.intl.string(g.t.m8RVU1),
                            value: "price-asc",
                        }
                      : {
                            label: g.intl.string(g.t.zBwQJC),
                            value: "price-desc",
                        }
                  : t === i.E.RELEVANCE
                    ? {
                          label: g.intl.string(g.t["XoeT//"]),
                          value: "relevance",
                      }
                    : {
                          label: g.intl.string(g.t.Y68e5u),
                          value: "popularity",
                      };
        }, []),
        v = l.useCallback(
            (e) =>
                ({
                    recent: {
                        sortType: i.E.RECENCY,
                        sortDirection: a.F.DESC,
                    },
                    "price-asc": {
                        sortType: i.E.PRICE,
                        sortDirection: a.F.ASC,
                    },
                    "price-desc": {
                        sortType: i.E.PRICE,
                        sortDirection: a.F.DESC,
                    },
                    popularity: {
                        sortType: i.E.POPULARITY,
                        sortDirection: a.F.DESC,
                    },
                    relevance: {
                        sortType: i.E.RELEVANCE,
                        sortDirection: a.F.DESC,
                    },
                })[e],
            [],
        ),
        C = l.useCallback(
            (e) => {
                let n = _(v(e));
                s.default.track(p.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == b ? void 0 : b.sessionId,
                    page_section: null == b ? void 0 : b.pageSection,
                    page_category: null == b ? void 0 : b.pageCategory,
                    page_index: null == b ? void 0 : b.pageIndex,
                    page_size: null == b ? void 0 : b.pageSize,
                    cta_name: "sort by ".concat(n.label.toLowerCase()),
                    page_type: "catalog",
                }),
                    t(v(e));
            },
            [b, _, v, t],
        ),
        O = _(e);
    return (0, r.jsx)(o.PhF, {
        look: o.qQH.CUSTOM,
        className: f.custom,
        options: m.map(_),
        select: C,
        isSelected: (e) => e === O.value,
        serialize: (e) => e,
        popoutWidth: 224,
    });
};
