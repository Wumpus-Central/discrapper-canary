n.d(t, { Z: () => b }), n(642613);
var r = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    i = n(497598),
    o = n(792091),
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
        a = (0, d.sp)(),
        b = (0, p.G)("CollectiblesSortSelect"),
        E = n(),
        S = l.useMemo(() => f.aP.filter((e) => e.sortType !== o.E.RELEVANCE || E), [E]),
        v = l.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === o.E.RECENCY
                ? {
                      label: h.intl.string(h.t["51Bhi4"]),
                      value: "recent",
                  }
                : t === o.E.PRICE
                  ? n === i.F.ASC
                      ? {
                            label: h.intl.string(h.t.m8RVU1),
                            value: "price-asc",
                        }
                      : {
                            label: h.intl.string(h.t.zBwQJC),
                            value: "price-desc",
                        }
                  : t === o.E.RELEVANCE
                    ? {
                          label: h.intl.string(h.t["XoeT//"]),
                          value: "relevance",
                      }
                    : {
                          label: h.intl.string(h.t.Y68e5u),
                          value: "popularity",
                      };
        }, []),
        x = l.useCallback(
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
        O = l.useCallback(
            (e) => {
                let n = v(x(e));
                u.default.track(C.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == a ? void 0 : a.sessionId,
                    page_section: null == a ? void 0 : a.pageSection,
                    page_category: null == a ? void 0 : a.pageCategory,
                    page_index: null == a ? void 0 : a.pageIndex,
                    page_size: null == a ? void 0 : a.pageSize,
                    cta_name: "sort by ".concat(n.label.toLowerCase()),
                    page_type: "catalog",
                }),
                    t(x(e));
            },
            [a, v, x, t],
        ),
        y = v(e);
    return (0, r.jsx)("div", {
        className: s()(_.container, { [m.shopTakeOver]: b }),
        children: (0, r.jsx)(c.PhF, {
            options: S.map(v),
            select: O,
            isSelected: (e) => e === y.value,
            serialize: (e) => e,
            popoutWidth: 224,
            popoutClassName: s()({ [m.shopTakeOver]: b }),
        }),
    });
};
