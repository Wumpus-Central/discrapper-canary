r.d(t, { Z: () => b }), r(642613);
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
    f = r(388032),
    g = r(970387);
let b = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: r } = (0, u.S)(),
        b = (0, c.sp)(),
        h = r(),
        m = l.useMemo(() => d.aP.filter((e) => e.sortType !== i.E.RELEVANCE || h), [h]),
        _ = l.useCallback((e) => {
            let { sortType: t, sortDirection: r } = e;
            return t === i.E.RECENCY
                ? {
                      label: f.intl.string(f.t["51Bhi4"]),
                      value: "recent",
                  }
                : t === i.E.PRICE
                  ? r === a.F.ASC
                      ? {
                            label: f.intl.string(f.t.m8RVU1),
                            value: "price-asc",
                        }
                      : {
                            label: f.intl.string(f.t.zBwQJC),
                            value: "price-desc",
                        }
                  : t === i.E.RELEVANCE
                    ? {
                          label: f.intl.string(f.t["XoeT//"]),
                          value: "relevance",
                      }
                    : {
                          label: f.intl.string(f.t.Y68e5u),
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
                let r = _(v(e));
                s.default.track(p.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == b ? void 0 : b.sessionId,
                    page_section: null == b ? void 0 : b.pageSection,
                    page_category: null == b ? void 0 : b.pageCategory,
                    page_index: null == b ? void 0 : b.pageIndex,
                    page_size: null == b ? void 0 : b.pageSize,
                    cta_name: "sort by ".concat(r.label.toLowerCase()),
                    page_type: "catalog",
                }),
                    t(v(e));
            },
            [b, _, v, t],
        ),
        O = _(e);
    return (0, n.jsx)(o.PhF, {
        look: o.qQH.CUSTOM,
        className: g.custom,
        options: m.map(_),
        select: C,
        isSelected: (e) => e === O.value,
        serialize: (e) => e,
        popoutWidth: 224,
    });
};
