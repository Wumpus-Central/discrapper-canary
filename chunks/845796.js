n.d(t, { Z: () => b }), n(642613);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(497598),
    o = n(792091),
    c = n(481060),
    u = n(626135),
    d = n(381585),
    g = n(501431),
    p = n(811847),
    f = n(215023),
    m = n(981631),
    h = n(388032),
    C = n(815216),
    _ = n(664603);
let b = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, g.S)(),
        i = (0, d.sp)(),
        b = (0, p.B)("CollectiblesSortSelect"),
        v = n(),
        x = l.useMemo(() => f.aP.filter((e) => e.sortType !== o.E.RELEVANCE || v), [v]),
        E = l.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === o.E.RECENCY
                ? {
                      label: h.intl.string(h.t["51Bhiz"]),
                      value: "recent",
                  }
                : t === o.E.PRICE
                  ? n === s.F.ASC
                      ? {
                            label: h.intl.string(h.t.m8RVU2),
                            value: "price-asc",
                        }
                      : {
                            label: h.intl.string(h.t.zBwQJO),
                            value: "price-desc",
                        }
                  : t === o.E.RELEVANCE
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
                        sortType: o.E.RECENCY,
                        sortDirection: s.F.DESC,
                    },
                    "price-asc": {
                        sortType: o.E.PRICE,
                        sortDirection: s.F.ASC,
                    },
                    "price-desc": {
                        sortType: o.E.PRICE,
                        sortDirection: s.F.DESC,
                    },
                    popularity: {
                        sortType: o.E.POPULARITY,
                        sortDirection: s.F.DESC,
                    },
                    relevance: {
                        sortType: o.E.RELEVANCE,
                        sortDirection: s.F.DESC,
                    },
                })[e],
            [],
        ),
        S = l.useCallback(
            (e) => {
                let n = E(O(e));
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
            [i, E, O, t],
        ),
        y = E(e);
    return (0, r.jsx)("div", {
        className: a()(C.container, { [_.customCursors]: b }),
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
