n.d(t, { Z: () => b }), n(642613);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    s = n.n(i),
    o = n(497598),
    a = n(792091),
    c = n(199849),
    u = n(626135),
    d = n(381585),
    g = n(501431),
    f = n(811847),
    p = n(215023),
    m = n(981631),
    C = n(388032),
    h = n(182668),
    _ = n(219588);
let b = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, g.S)(),
        i = (0, d.sp)(),
        b = (0, f.B)("CollectiblesSortSelect"),
        E = n(),
        v = l.useMemo(() => p.aP.filter((e) => e.sortType !== a.E.RELEVANCE || E), [E]),
        S = l.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === a.E.RECENCY
                ? {
                      label: C.intl.string(C.t["51Bhiz"]),
                      value: "recent",
                  }
                : t === a.E.PRICE
                  ? n === o.F.ASC
                      ? {
                            label: C.intl.string(C.t.m8RVU2),
                            value: "price-asc",
                        }
                      : {
                            label: C.intl.string(C.t.zBwQJO),
                            value: "price-desc",
                        }
                  : t === a.E.RELEVANCE
                    ? {
                          label: C.intl.string(C.t["XoeT/z"]),
                          value: "relevance",
                      }
                    : {
                          label: C.intl.string(C.t.Y68e5p),
                          value: "popularity",
                      };
        }, []),
        x = l.useCallback(
            (e) =>
                ({
                    recent: {
                        sortType: a.E.RECENCY,
                        sortDirection: o.F.DESC,
                    },
                    "price-asc": {
                        sortType: a.E.PRICE,
                        sortDirection: o.F.ASC,
                    },
                    "price-desc": {
                        sortType: a.E.PRICE,
                        sortDirection: o.F.DESC,
                    },
                    popularity: {
                        sortType: a.E.POPULARITY,
                        sortDirection: o.F.DESC,
                    },
                    relevance: {
                        sortType: a.E.RELEVANCE,
                        sortDirection: o.F.DESC,
                    },
                })[e],
            [],
        ),
        O = l.useCallback(
            (e) => {
                let n = S(x(e));
                u.default.track(m.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == i ? void 0 : i.sessionId,
                    page_section: null == i ? void 0 : i.pageSection,
                    page_category: null == i ? void 0 : i.pageCategory,
                    page_index: null == i ? void 0 : i.pageIndex,
                    page_size: null == i ? void 0 : i.pageSize,
                    cta_name: "sort by ".concat(n.label.toLowerCase()),
                    page_type: "catalog",
                }),
                    t(x(e));
            },
            [i, S, x, t],
        ),
        y = S(e);
    return (0, r.jsx)("div", {
        className: s()(h.container, { [_.customCursors]: b }),
        children: (0, r.jsx)(c.B6, {
            options: v.map(S),
            select: O,
            isSelected: (e) => e === y.value,
            serialize: (e) => e,
            popoutWidth: 224,
            popoutClassName: s()({ [_.customCursors]: b }),
        }),
    });
};
