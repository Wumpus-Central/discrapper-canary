r.d(t, { Z: () => v }), r(642613);
var n = r(255367),
    l = r(73800),
    a = r(120356),
    i = r.n(a),
    o = r(497598),
    s = r(792091),
    c = r(481060),
    u = r(626135),
    d = r(381585),
    p = r(501431),
    g = r(642909),
    f = r(215023),
    b = r(981631),
    h = r(388032),
    m = r(841952),
    _ = r(138954);
let v = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: r } = (0, p.S)(),
        a = (0, d.sp)(),
        v = (0, g.G)("CollectiblesSortSelect"),
        O = r(),
        C = l.useMemo(() => f.aP.filter((e) => e.sortType !== s.E.RELEVANCE || O), [O]),
        E = l.useCallback((e) => {
            let { sortType: t, sortDirection: r } = e;
            return t === s.E.RECENCY
                ? {
                      label: h.intl.string(h.t["51Bhi4"]),
                      value: "recent",
                  }
                : t === s.E.PRICE
                  ? r === o.F.ASC
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
        S = l.useCallback(
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
        y = l.useCallback(
            (e) => {
                let r = E(S(e));
                u.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == a ? void 0 : a.sessionId,
                    page_section: null == a ? void 0 : a.pageSection,
                    page_category: null == a ? void 0 : a.pageCategory,
                    page_index: null == a ? void 0 : a.pageIndex,
                    page_size: null == a ? void 0 : a.pageSize,
                    cta_name: "sort by ".concat(r.label.toLowerCase()),
                    page_type: "catalog",
                }),
                    t(S(e));
            },
            [a, E, S, t],
        ),
        x = E(e);
    return (0, n.jsx)("div", {
        className: i()({ [_.shopTakeOver]: v }),
        children: (0, n.jsx)(c.PhF, {
            look: c.qQH.CUSTOM,
            className: m.custom,
            options: C.map(E),
            select: y,
            isSelected: (e) => e === x.value,
            serialize: (e) => e,
            popoutWidth: 224,
            popoutClassName: i()({ [_.shopTakeOver]: v }),
        }),
    });
};
