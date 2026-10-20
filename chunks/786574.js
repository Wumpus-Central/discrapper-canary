(a.d(t, { N: () => c }), a(321073));
var n = a(477900),
    l = a(582128),
    i = a(84571),
    s = a(477782),
    r = a(583650),
    o = a(362688);
function c(e, t) {
    let [a, c] = l.useState(""),
        d = l.useMemo(() => {
            if ("" === a.trim()) return e;
            let t = a.toLowerCase().trim();
            return e.filter((e) => {
                let a = ((0, i.O)(e.name) ?? "").toLowerCase(),
                    n = (e.group ?? "").toLowerCase(),
                    l = e.tags ?? [];
                return (
                    a.includes(t) ||
                    e.id.toLowerCase().includes(t) ||
                    n.includes(t) ||
                    l.some((e) => e.toLowerCase().includes(t))
                );
            });
        }, [e, a]),
        { ungroupedTabs: u, sortedGroups: m } = l.useMemo(() => {
            let e = (function (e) {
                let t = new Map();
                for (let a of e) {
                    let e = t.get(a.group) ?? [];
                    (e.push(a), t.set(a.group, e));
                }
                return t;
            })(d.filter((e) => e.group !== o.fu.NONE));
            return {
                ungroupedTabs: d.filter((e) => e.group === o.fu.NONE),
                sortedGroups: o.BW.flatMap((t) => {
                    let a = e.get(t);
                    return null == a || 0 === a.length
                        ? []
                        : [
                              {
                                  group: t,
                                  sortedTabs: a.sort((e, t) =>
                                      ((0, i.O)(e.name) ?? "").localeCompare((0, i.O)(t.name) ?? ""),
                                  ),
                              },
                          ];
                }),
            };
        }, [d]),
        h = "" !== a.trim() ? (u[0] ?? m[0]?.sortedTabs[0])?.id : void 0;
    return [
        l.useMemo(
            () =>
                (0, n.jsx)(
                    s.aK,
                    {
                        id: "devtools-search",
                        control: (e, l) =>
                            (0, n.jsx)(r.V, {
                                ...e,
                                query: a,
                                onChange: c,
                                onKeyDown: (a) => {
                                    "Enter" === a.key && null != h && (a.preventDefault(), t(h), e.onClose?.());
                                },
                                placeholder: "Search DevTools...",
                                ref: l,
                            }),
                    },
                    "devtools-search",
                ),
            [a, h, t],
        ),
        ...l.useMemo(() => {
            let e = [];
            return (
                "" !== a.trim() && 0 === d.length
                    ? e.push(
                          (0, n.jsx)(
                              s.Dr,
                              { id: "devtools-no-results", label: `No DevTools found for "${a}"`, disabled: !0 },
                              "devtools-no-results",
                          ),
                      )
                    : (u.forEach((a) => {
                          let { id: l, name: r } = a;
                          return e.push((0, n.jsx)(s.Dr, { id: l, label: (0, i.O)(r) ?? "", action: () => t(l) }, l));
                      }),
                      m.forEach((l) => {
                          let { group: r, sortedTabs: o } = l;
                          "" === a.trim()
                              ? e.push(
                                    (0, n.jsx)(
                                        s.Dr,
                                        {
                                            id: `devtools-${r}`,
                                            label: r,
                                            children: (0, n.jsx)(s.rX, {
                                                children: o.map((e) =>
                                                    (0, n.jsx)(
                                                        s.Dr,
                                                        {
                                                            id: `devtools-${e.id}`,
                                                            label: (0, i.O)(e.name) ?? "",
                                                            action: () => t(e.id),
                                                        },
                                                        e.id,
                                                    ),
                                                ),
                                            }),
                                        },
                                        `devtools-${r}`,
                                    ),
                                )
                              : e.push(
                                    (0, n.jsx)(
                                        s.rX,
                                        {
                                            label: r,
                                            children: o.map((e) =>
                                                (0, n.jsx)(
                                                    s.Dr,
                                                    {
                                                        id: `devtools-filtered-${e.id}`,
                                                        label: (0, i.O)(e.name) ?? "",
                                                        action: () => t(e.id),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                        },
                                        `devtools-filtered-${r}`,
                                    ),
                                );
                      })),
                e
            );
        }, [d, u, m, a, t]),
    ];
}
