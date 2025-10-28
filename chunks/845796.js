n.d(t, { Z: () => b }), n(642613);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    o = n.n(i),
    s = n(497598),
    a = n(792091),
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
        E = l.useMemo(() => f.aP.filter((e) => e.sortType !== a.E.RELEVANCE || v), [v]),
        x = l.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === a.E.RECENCY
                ? {
                      label: h.intl.string(h.t["51Bhiz"]),
                      value: "recent",
                  }
                : t === a.E.PRICE
                  ? n === s.F.ASC
                      ? {
                            label: h.intl.string(h.t.m8RVU2),
                            value: "price-asc",
                        }
                      : {
                            label: h.intl.string(h.t.zBwQJO),
                            value: "price-desc",
                        }
                  : t === a.E.RELEVANCE
                    ? {
                          label: h.intl.string(h.t["XoeT/z"]),
                          value: "relevance",
                      }
                    : {
                          label: h.intl.string(h.t.Y68e5p),
                          value: "popularity",
                      };
        }, []),
        O = l.useCallback(
            (e) =>
                ({
                    recent: {
                        sortType: a.E.RECENCY,
                        sortDirection: s.F.DESC,
                    },
                    "price-asc": {
                        sortType: a.E.PRICE,
                        sortDirection: s.F.ASC,
                    },
                    "price-desc": {
                        sortType: a.E.PRICE,
                        sortDirection: s.F.DESC,
                    },
                    popularity: {
                        sortType: a.E.POPULARITY,
                        sortDirection: s.F.DESC,
                    },
                    relevance: {
                        sortType: a.E.RELEVANCE,
                        sortDirection: s.F.DESC,
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
        className: o()(_.container, { [m.shopTakeOver]: b }),
        children: (0, r.jsx)(c.PhF, {
            options: E.map(x),
            select: S,
            isSelected: (e) => e === y.value,
            serialize: (e) => e,
            popoutWidth: 224,
            popoutClassName: o()({ [m.shopTakeOver]: b }),
        }),
    });
};
