n.d(t, { Z: () => b }), n(642613);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    s = n(497598),
    a = n(792091),
    c = n(199849),
    u = n(626135),
    d = n(381585),
    g = n(501431),
    f = n(811847),
    p = n(215023),
    m = n(981631),
    h = n(388032),
    C = n(182668),
    _ = n(219588);
let b = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, g.S)(),
        i = (0, d.sp)(),
        b = (0, f.B)("CollectiblesSortSelect"),
        v = n(),
        E = l.useMemo(() => p.aP.filter((e) => e.sortType !== a.E.RELEVANCE || v), [v]),
        S = l.useCallback((e) => {
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
        x = l.useCallback(
            (e) => {
                let n = S(O(e));
                u.default.track(m.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            [i, S, O, t],
        ),
        y = S(e);
    return (0, r.jsx)("div", {
        className: o()(C.container, { [_.customCursors]: b }),
        children: (0, r.jsx)(c.B6, {
            options: E.map(S),
            select: x,
            isSelected: (e) => e === y.value,
            serialize: (e) => e,
            popoutWidth: 224,
            popoutClassName: o()({ [_.customCursors]: b }),
        }),
    });
};
