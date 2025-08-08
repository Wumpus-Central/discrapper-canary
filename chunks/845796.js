n.d(t, { Z: () => v }), n(642613);
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(497598),
    s = n(792091),
    c = n(481060),
    u = n(626135),
    d = n(381585),
    p = n(675997),
    g = n(501431),
    f = n(215023),
    b = n(981631),
    h = n(388032),
    m = n(970387),
    _ = n(306414);
let v = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, g.S)(),
        a = (0, d.sp)(),
        { enableShopTakeOver: v } = p.Z.useConfig({ location: "CollectiblesSortSelect" }),
        O = n(),
        C = l.useMemo(() => f.aP.filter((e) => e.sortType !== s.E.RELEVANCE || O), [O]),
        E = l.useCallback((e) => {
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
                let n = E(S(e));
                u.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == a ? void 0 : a.sessionId,
                    page_section: null == a ? void 0 : a.pageSection,
                    page_category: null == a ? void 0 : a.pageCategory,
                    page_index: null == a ? void 0 : a.pageIndex,
                    page_size: null == a ? void 0 : a.pageSize,
                    cta_name: "sort by ".concat(n.label.toLowerCase()),
                    page_type: "catalog",
                }),
                    t(S(e));
            },
            [a, E, S, t],
        ),
        x = E(e);
    return (0, r.jsx)("div", {
        className: i()({ [_.shopTakeOver]: v }),
        children: (0, r.jsx)(c.PhF, {
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
