n.d(t, { Z: () => b }), n(642613);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(497598),
    o = n(792091),
    c = n(481060),
    u = n(626135),
    d = n(381585),
    p = n(501431),
    g = n(811847),
    f = n(215023),
    h = n(981631),
    C = n(388032),
    _ = n(182668),
    m = n(219588);
let b = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, p.S)(),
        i = (0, d.sp)(),
        b = (0, g.B)("CollectiblesSortSelect"),
        v = n(),
        E = l.useMemo(() => f.aP.filter((e) => e.sortType !== o.E.RELEVANCE || v), [v]),
        x = l.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === o.E.RECENCY
                ? {
                      label: C.intl.string(C.t["51Bhiz"]),
                      value: "recent",
                  }
                : t === o.E.PRICE
                  ? n === a.F.ASC
                      ? {
                            label: C.intl.string(C.t.m8RVU2),
                            value: "price-asc",
                        }
                      : {
                            label: C.intl.string(C.t.zBwQJO),
                            value: "price-desc",
                        }
                  : t === o.E.RELEVANCE
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
                        sortType: o.E.RECENCY,
                        sortDirection: a.F.DESC,
                    },
                    "price-asc": {
                        sortType: o.E.PRICE,
                        sortDirection: a.F.ASC,
                    },
                    "price-desc": {
                        sortType: o.E.PRICE,
                        sortDirection: a.F.DESC,
                    },
                    popularity: {
                        sortType: o.E.POPULARITY,
                        sortDirection: a.F.DESC,
                    },
                    relevance: {
                        sortType: o.E.RELEVANCE,
                        sortDirection: a.F.DESC,
                    },
                })[e],
            [],
        ),
        S = l.useCallback(
            (e) => {
                let n = x(O(e));
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
            [i, x, O, t],
        ),
        y = x(e);
    return (0, r.jsx)("div", {
        className: s()(_.container, { [m.customCursors]: b }),
        children: (0, r.jsx)(c.PhF, {
            options: E.map(x),
            select: S,
            isSelected: (e) => e === y.value,
            serialize: (e) => e,
            popoutWidth: 224,
            popoutClassName: s()({ [m.customCursors]: b }),
        }),
    });
};
