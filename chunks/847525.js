a.d(t, { A: () => g, e: () => x });
var n = a(627968),
    i = a(64700),
    l = a(503698),
    s = a.n(l),
    r = a(311907),
    o = a(397927),
    c = a(191711),
    d = a(773669),
    u = a(38181),
    m = a(767599),
    h = a(985018),
    p = a(897833);
function _(e) {
    let { category: t, count: a, onSelectCategory: l, selected: r } = e,
        c = i.useCallback(() => {
            l(t.id);
        }, [t.id, l]),
        u = a.toLocaleString(d.default.locale);
    return (0, n.jsxs)(o.DUT, {
        onClick: c,
        className: s()(p.L1, { [p.wH]: r }),
        children: [
            (0, n.jsx)(o.Text, { className: p.UU, variant: "text-sm/medium", color: "text-strong", children: t.name }),
            (0, n.jsx)(o.Text, { className: p.U9, variant: "text-sm/normal", color: "text-muted", children: u }),
        ],
    });
}
function g(e) {
    let { countsByCategory: t, onSelectCategory: a, selectedCategoryId: l } = e,
        s = (0, r.bG)([u.A], () => u.A.getCategories()),
        o = i.useMemo(() => [(0, m.AU)(), ...s.filter((e) => (t[e.id] ?? 0) !== 0)], [s, t]);
    return 0 === o.length
        ? null
        : (0, n.jsx)("div", {
              className: p.LZ,
              children: o.map((e) => {
                  let i = e.id,
                      s = t[i] ?? 0;
                  return (0, n.jsx)(_, { category: e, count: s, selected: i === l, onSelectCategory: () => a(e) }, i);
              }),
          });
}
function x(e) {
    let { countsByCategory: t, onSelectCategory: a, selectedCategoryId: l } = e,
        s = (0, r.bG)([u.A], () => u.A.getCategories()),
        d = i.useMemo(() => [(0, m.AU)(), ...s.filter((e) => (t[e.id] ?? 0) !== 0)], [s, t]),
        _ = i.useMemo(() => d.map((e) => ({ id: `${e.id}`, name: e.name, count: t[e.id] ?? 0 })), [d, t]),
        g = i.useCallback(
            (e) => {
                let t = d.find((t) => t.id === Number(e));
                null != t && a(t);
            },
            [a, d],
        ),
        x = i.useMemo(() => d.find((e) => e.id === l), [l, d]);
    return 0 === _.length
        ? null
        : (0, n.jsxs)("div", {
              className: p.kL,
              children: [
                  (0, n.jsx)(o.Text, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: h.intl.string(h.t.f09BQJ),
                  }),
                  (0, n.jsx)(c.A, {
                      items: _,
                      title: x?.name ?? "",
                      onSelect: g,
                      selected: `${l}`,
                      "aria-label": h.intl.string(h.t.WHdCwR),
                      variant: c.H.FILLED,
                  }),
              ],
          });
}
