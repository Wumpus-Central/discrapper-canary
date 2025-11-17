n.d(t, { Z: () => b }), n(642613);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(497598),
    s = n(792091),
    c = n(481060),
    u = n(626135),
    d = n(381585),
    p = n(501431),
    g = n(811847),
    f = n(215023),
    h = n(981631),
    C = n(388032),
    m = n(182668),
    _ = n(219588);
let b = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, p.S)(),
        i = (0, d.sp)(),
        b = (0, g.B)("CollectiblesSortSelect"),
        v = n(),
        x = l.useMemo(() => f.aP.filter((e) => e.sortType !== s.E.RELEVANCE || v), [v]),
        E = l.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === s.E.RECENCY
                ? {
                      label: C.intl.string(C.t["51Bhiz"]),
                      value: "recent",
                  }
                : t === s.E.PRICE
                  ? n === o.F.ASC
                      ? {
                            label: C.intl.string(C.t.m8RVU2),
                            value: "price-asc",
                        }
                      : {
                            label: C.intl.string(C.t.zBwQJO),
                            value: "price-desc",
                        }
                  : t === s.E.RELEVANCE
                    ? {
                          label: C.intl.string(C.t["XoeT/z"]),
                          value: "relevance",
                      }
                    : {
                          label: C.intl.string(C.t.Y68e5p),
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
                let n = E(O(e));
                u.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            [i, E, O, t],
        ),
        y = E(e);
    return (0, r.jsx)("div", {
        className: a()(m.container, { [_.customCursors]: b }),
        children: (0, r.jsx)(c.PhF, {
            options: x.map(E),
            select: S,
            isSelected: (e) => e === y.value,
            serialize: (e) => e,
            popoutWidth: 224,
            popoutClassName: a()({ [_.customCursors]: b }),
        }),
    });
};
