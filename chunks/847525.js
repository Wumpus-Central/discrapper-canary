n.d(t, {
    A: () => _,
    e: () => b,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(191711),
    d = n(773669),
    u = n(38181),
    p = n(767599),
    h = n(985018),
    m = n(897833);

function g(e) {
    let { category: t, count: n, onSelectCategory: i, selected: s } = e,
        c = l.useCallback(() => {
            i(t.id);
        }, [t.id, i]),
        u = n.toLocaleString(d.default.locale);
    return (0, r.jsxs)(o.DUT, {
        onClick: c,
        className: a()(m.L1, {
            [m.wH]: s,
        }),
        children: [
            (0, r.jsx)(o.Text, {
                className: m.UU,
                variant: "text-sm/medium",
                color: "text-strong",
                children: t.name,
            }),
            (0, r.jsx)(o.Text, {
                className: m.U9,
                variant: "text-sm/normal",
                color: "text-muted",
                children: u,
            }),
        ],
    });
}

function _(e) {
    let { countsByCategory: t, onSelectCategory: n, selectedCategoryId: i } = e,
        a = (0, s.bG)([u.A], () => u.A.getCategories()),
        o = l.useMemo(
            () => [
                (0, p.AU)(),
                ...a.filter((e) => {
                    var n;
                    return (null != (n = t[e.id]) ? n : 0) !== 0;
                }),
            ],
            [a, t],
        );
    return 0 === o.length
        ? null
        : (0, r.jsx)("div", {
              className: m.LZ,
              children: o.map((e) => {
                  var l;
                  let a = e.id,
                      s = null != (l = t[a]) ? l : 0;
                  return (0, r.jsx)(
                      g,
                      {
                          category: e,
                          count: s,
                          selected: a === i,
                          onSelectCategory: () => n(e),
                      },
                      a,
                  );
              }),
          });
}

function b(e) {
    var t;
    let { countsByCategory: n, onSelectCategory: i, selectedCategoryId: a } = e,
        d = (0, s.bG)([u.A], () => u.A.getCategories()),
        g = l.useMemo(
            () => [
                (0, p.AU)(),
                ...d.filter((e) => {
                    var t;
                    return (null != (t = n[e.id]) ? t : 0) !== 0;
                }),
            ],
            [d, n],
        ),
        _ = l.useMemo(
            () =>
                g.map((e) => {
                    var t;
                    return {
                        id: "".concat(e.id),
                        name: e.name,
                        count: null != (t = n[e.id]) ? t : 0,
                    };
                }),
            [g, n],
        ),
        b = l.useCallback(
            (e) => {
                let t = g.find((t) => t.id === Number(e));
                null != t && i(t);
            },
            [i, g],
        ),
        f = l.useMemo(() => g.find((e) => e.id === a), [a, g]);
    return 0 === _.length
        ? null
        : (0, r.jsxs)("div", {
              className: m.kL,
              children: [
                  (0, r.jsx)(o.Text, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: h.intl.string(h.t.f09BQJ),
                  }),
                  (0, r.jsx)(c.A, {
                      items: _,
                      title: null != (t = null == f ? void 0 : f.name) ? t : "",
                      onSelect: b,
                      selected: "".concat(a),
                      "aria-label": h.intl.string(h.t.WHdCwR),
                      variant: c.H.FILLED,
                  }),
              ],
          });
}
