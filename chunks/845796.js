n.d(t, { Z: () => b }), n(642613);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(497598),
    s = n(792091),
    c = n(481060),
    u = n(626135),
    d = n(381585),
    g = n(501431),
    p = n(642909),
    f = n(215023),
    C = n(981631),
    h = n(388032),
    _ = n(182668),
    m = n(345213);
let b = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, g.S)(),
        i = (0, d.sp)(),
        b = (0, p.G)("CollectiblesSortSelect"),
        v = n(),
        E = l.useMemo(() => f.aP.filter((e) => e.sortType !== s.E.RELEVANCE || v), [v]),
        x = l.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === s.E.RECENCY
                ? {
                      label: h.intl.string(h.t["51Bhi4"]),
                      value: "recent",
                  }
                : t === s.E.PRICE
                  ? n === o.F.ASC
                      ? {
                            label: h.intl.string(h.t.m8RVU1),
                            value: "price-asc",
                        }
                      : {
                            label: h.intl.string(h.t.zBwQJC),
                            value: "price-desc",
                        }
                  : t === s.E.RELEVANCE
                    ? {
                          label: h.intl.string(h.t["XoeT//"]),
                          value: "relevance",
                      }
                    : {
                          label: h.intl.string(h.t.Y68e5u),
                          value: "popularity",
                      };
        }, []),
        O = l.useCallback(
            (e) =>
                ({
                    recent: {
                        sortType: s.E.RECENCY,
                        sortDirection: o.F.DESC,
                    },
                    "price-asc": {
                        sortType: s.E.PRICE,
                        sortDirection: o.F.ASC,
                    },
                    "price-desc": {
                        sortType: s.E.PRICE,
                        sortDirection: o.F.DESC,
                    },
                    popularity: {
                        sortType: s.E.POPULARITY,
                        sortDirection: o.F.DESC,
                    },
                    relevance: {
                        sortType: s.E.RELEVANCE,
                        sortDirection: o.F.DESC,
                    },
                })[e],
            [],
        ),
        S = l.useCallback(
            (e) => {
                let n = x(O(e));
                u.default.track(C.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == i ? void 0 : i.sessionId,
                    page_section: null == i ? void 0 : i.pageSection,
                    page_category: null == i ? void 0 : i.pageCategory,
                    page_index: null == i ? void 0 : i.pageIndex,
                    page_size: null == i ? void 0 : i.pageSize,
                    cta_name: "sort by ".concat(n.label.toLowerCase()),
                    page_type: "catalog",
                }),
                    t(O(e));
            },
            [i, x, O, t],
        ),
        y = x(e);
    return (0, r.jsx)("div", {
        className: a()(_.container, { [m.shopTakeOver]: b }),
        children: (0, r.jsx)(c.PhF, {
            options: E.map(x),
            select: S,
            isSelected: (e) => e === y.value,
            serialize: (e) => e,
            popoutWidth: 224,
            popoutClassName: a()({ [m.shopTakeOver]: b }),
        }),
    });
};
