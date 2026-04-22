a.d(t, { N: () => d }), a(321073);
var n = a(627968),
    l = a(64700),
    i = a(614820),
    s = a(477782),
    r = a(583650),
    o = a(231643);
function d(e, t) {
    let [a, d] = l.useState(""),
        c = l.useMemo(() => {
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
        }, [e, a]);
    return [
        l.useMemo(
            () =>
                (0, n.jsx)(
                    s.aK,
                    {
                        id: "devtools-search",
                        control: (e, t) =>
                            (0, n.jsx)(r.V, { ...e, query: a, onChange: d, placeholder: "Search DevTools...", ref: t }),
                    },
                    "devtools-search",
                ),
            [a],
        ),
        ...l.useMemo(() => {
            let e = [];
            if ("" !== a.trim() && 0 === c.length)
                e.push(
                    (0, n.jsx)(
                        s.Dr,
                        { id: "devtools-no-results", label: `No DevTools found for "${a}"`, disabled: !0 },
                        "devtools-no-results",
                    ),
                );
            else {
                let l = c.filter((e) => e.group === o.fu.NONE),
                    r = (function (e) {
                        let t = new Map();
                        for (let a of e) {
                            let e = t.get(a.group) ?? [];
                            e.push(a), t.set(a.group, e);
                        }
                        return t;
                    })(c.filter((e) => e.group !== o.fu.NONE));
                l.forEach((a) => {
                    let { id: l, name: r } = a;
                    return e.push((0, n.jsx)(s.Dr, { id: l, label: (0, i.O)(r) ?? "", action: () => t(l) }, l));
                }),
                    o.BW.forEach((l) => {
                        let o = r.get(l);
                        if (null != o && o.length > 0) {
                            let r = o.sort((e, t) => ((0, i.O)(e.name) ?? "").localeCompare((0, i.O)(t.name) ?? ""));
                            "" === a.trim()
                                ? e.push(
                                      (0, n.jsx)(
                                          s.Dr,
                                          {
                                              id: `devtools-${l}`,
                                              label: l,
                                              children: (0, n.jsx)(s.rX, {
                                                  children: r.map((e) =>
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
                                          `devtools-${l}`,
                                      ),
                                  )
                                : e.push(
                                      (0, n.jsx)(
                                          s.rX,
                                          {
                                              label: l,
                                              children: r.map((e) =>
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
                                          `devtools-filtered-${l}`,
                                      ),
                                  );
                        }
                    });
            }
            return e;
        }, [c, a, t]),
    ];
}
