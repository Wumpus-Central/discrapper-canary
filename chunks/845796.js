n.d(t, { Z: () => E }), n(642613);
var r = n(54381),
    l = n(473749),
    a = n(120356),
    s = n.n(a),
    i = n(497598),
    o = n(792091),
    c = n(481060),
    u = n(626135),
    d = n(381585),
    f = n(501431),
    g = n(811847),
    b = n(215023),
    p = n(981631),
    h = n(388032),
    m = n(259163),
    C = n(868090);
let E = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, f.S)(),
        a = (0, d.sp)(),
        E = (0, g.B)("CollectiblesSortSelect"),
        v = n(),
        x = l.useMemo(() => b.aP.filter((e) => e.sortType !== o.E.RELEVANCE || v), [v]),
        S = l.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === o.E.RECENCY
                ? {
                      label: h.intl.string(h.t["51Bhiz"]),
                      value: "recent",
                      id: "recent",
                  }
                : t === o.E.PRICE
                  ? n === i.F.ASC
                      ? {
                            label: h.intl.string(h.t.m8RVU2),
                            value: "price-asc",
                            id: "price-asc",
                        }
                      : {
                            label: h.intl.string(h.t.zBwQJO),
                            value: "price-desc",
                            id: "price-desc",
                        }
                  : t === o.E.RELEVANCE
                    ? {
                          label: h.intl.string(h.t["XoeT/z"]),
                          value: "relevance",
                          id: "relevance",
                      }
                    : {
                          label: h.intl.string(h.t.Y68e5p),
                          value: "popularity",
                          id: "popularity",
                      };
        }, []),
        O = l.useCallback(
            (e) =>
                ({
                    recent: {
                        sortType: o.E.RECENCY,
                        sortDirection: i.F.DESC,
                    },
                    "price-asc": {
                        sortType: o.E.PRICE,
                        sortDirection: i.F.ASC,
                    },
                    "price-desc": {
                        sortType: o.E.PRICE,
                        sortDirection: i.F.DESC,
                    },
                    popularity: {
                        sortType: o.E.POPULARITY,
                        sortDirection: i.F.DESC,
                    },
                    relevance: {
                        sortType: o.E.RELEVANCE,
                        sortDirection: i.F.DESC,
                    },
                })[e],
            [],
        ),
        _ = l.useCallback(
            (e) => {
                let n = S(O(e));
                u.default.track(p.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == a ? void 0 : a.sessionId,
                    page_section: null == a ? void 0 : a.pageSection,
                    page_category: null == a ? void 0 : a.pageCategory,
                    page_index: null == a ? void 0 : a.pageIndex,
                    page_size: null == a ? void 0 : a.pageSize,
                    cta_name: "sort by ".concat(n.label.toLowerCase()),
                    page_type: "catalog",
                }),
                    t(O(e));
            },
            [a, S, O, t],
        ),
        y = S(e);
    return (0, r.jsx)("div", {
        className: s()(m.container, { [C.customCursors]: E }),
        children: (0, r.jsx)(c.PhF, {
            label: h.intl.string(h.t.uaX705),
            hideLabel: !0,
            options: x.map(S),
            onSelectionChange: _,
            value: y.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
