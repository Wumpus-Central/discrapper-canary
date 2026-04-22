a.d(t, { A: () => x, e: () => A });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(311907),
    o = a(939249),
    c = a(834730),
    d = a(191711),
    u = a(773669),
    h = a(38181),
    m = a(767599),
    p = a(985018),
    _ = a(666168);
function g(e) {
    let { category: t, count: a, onSelectCategory: i, selected: r } = e,
        d = l.useCallback(() => {
            i(t.id);
        }, [t.id, i]),
        h = a.toLocaleString(u.default.locale);
    return (0, n.jsxs)(o.D, {
        onClick: d,
        className: s()(_.L1, { [_.wH]: r }),
        children: [
            (0, n.jsx)(c.E, { className: _.UU, variant: "text-sm/medium", color: "text-strong", children: t.name }),
            (0, n.jsx)(c.E, { className: _.U9, variant: "text-sm/normal", color: "text-muted", children: h }),
        ],
    });
}
function x(e) {
    let { countsByCategory: t, onSelectCategory: a, selectedCategoryId: i } = e,
        s = (0, r.bG)([h.A], () => h.A.getCategories()),
        o = l.useMemo(() => [(0, m.AU)(), ...s.filter((e) => (t[e.id] ?? 0) !== 0)], [s, t]);
    return 0 === o.length
        ? null
        : (0, n.jsx)("div", {
              className: _.LZ,
              children: o.map((e) => {
                  let l = e.id,
                      s = t[l] ?? 0;
                  return (0, n.jsx)(g, { category: e, count: s, selected: l === i, onSelectCategory: () => a(e) }, l);
              }),
          });
}
function A(e) {
    let { countsByCategory: t, onSelectCategory: a, selectedCategoryId: i } = e,
        s = (0, r.bG)([h.A], () => h.A.getCategories()),
        o = l.useMemo(() => [(0, m.AU)(), ...s.filter((e) => (t[e.id] ?? 0) !== 0)], [s, t]),
        u = l.useMemo(() => o.map((e) => ({ id: `${e.id}`, name: e.name, count: t[e.id] ?? 0 })), [o, t]),
        g = l.useCallback(
            (e) => {
                let t = o.find((t) => t.id === Number(e));
                null != t && a(t);
            },
            [a, o],
        ),
        x = l.useMemo(() => o.find((e) => e.id === i), [i, o]);
    return 0 === u.length
        ? null
        : (0, n.jsxs)("div", {
              className: _.kL,
              children: [
                  (0, n.jsx)(c.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: p.intl.string(p.t.f09BQJ),
                  }),
                  (0, n.jsx)(d.A, {
                      items: u,
                      title: x?.name ?? "",
                      onSelect: g,
                      selected: `${i}`,
                      "aria-label": p.intl.string(p.t.WHdCwR),
                      variant: d.H.FILLED,
                  }),
              ],
          });
}
