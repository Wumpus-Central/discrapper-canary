n.d(t, { Z: () => E }), n(642613);
var r = n(54381),
    l = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(497598),
    i = n(792091),
    c = n(199849),
    u = n(626135),
    d = n(381585),
    f = n(501431),
    g = n(811847),
    b = n(215023),
    p = n(981631),
    m = n(388032),
    h = n(259163),
    C = n(868090);
let E = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, f.S)(),
        a = (0, d.sp)(),
        E = (0, g.B)("CollectiblesSortSelect"),
        v = n(),
        S = l.useMemo(() => b.aP.filter((e) => e.sortType !== i.E.RELEVANCE || v), [v]),
        _ = l.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === i.E.RECENCY
                ? {
                      label: m.intl.string(m.t["51Bhiz"]),
                      value: "recent",
                  }
                : t === i.E.PRICE
                  ? n === o.F.ASC
                      ? {
                            label: m.intl.string(m.t.m8RVU2),
                            value: "price-asc",
                        }
                      : {
                            label: m.intl.string(m.t.zBwQJO),
                            value: "price-desc",
                        }
                  : t === i.E.RELEVANCE
                    ? {
                          label: m.intl.string(m.t["XoeT/z"]),
                          value: "relevance",
                      }
                    : {
                          label: m.intl.string(m.t.Y68e5p),
                          value: "popularity",
                      };
        }, []),
        x = l.useCallback(
            (e) =>
                ({
                    recent: {
                        sortType: i.E.RECENCY,
                        sortDirection: o.F.DESC,
                    },
                    "price-asc": {
                        sortType: i.E.PRICE,
                        sortDirection: o.F.ASC,
                    },
                    "price-desc": {
                        sortType: i.E.PRICE,
                        sortDirection: o.F.DESC,
                    },
                    popularity: {
                        sortType: i.E.POPULARITY,
                        sortDirection: o.F.DESC,
                    },
                    relevance: {
                        sortType: i.E.RELEVANCE,
                        sortDirection: o.F.DESC,
                    },
                })[e],
            [],
        ),
        O = l.useCallback(
            (e) => {
                let n = _(x(e));
                u.default.track(p.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            [a, _, x, t],
        ),
        y = _(e);
    return (0, r.jsx)("div", {
        className: s()(h.container, { [C.customCursors]: E }),
        children: (0, r.jsx)(c.B6, {
            options: S.map(_),
            select: O,
            isSelected: (e) => e === y.value,
            serialize: (e) => e,
            popoutWidth: 224,
            popoutClassName: s()({ [C.customCursors]: E }),
        }),
    });
};
