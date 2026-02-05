n.d(t, { N: () => o }), n(321073);
var a = n(627968),
    s = n(64700),
    i = n(614820),
    l = n(397927),
    r = n(231643);
function o(e, t) {
    let [n, o] = s.useState(""),
        d = s.useMemo(() => {
            if ("" === n.trim()) return e;
            let t = n.toLowerCase().trim();
            return e.filter((e) => {
                let n = ((0, i.O)(e.name) ?? "").toLowerCase(),
                    a = (e.group ?? "").toLowerCase(),
                    s = e.tags ?? [];
                return (
                    n.includes(t) ||
                    e.id.toLowerCase().includes(t) ||
                    a.includes(t) ||
                    s.some((e) => e.toLowerCase().includes(t))
                );
            });
        }, [e, n]);
    return [
        s.useMemo(
            () =>
                (0, a.jsx)(
                    l.aK1,
                    {
                        id: "devtools-search",
                        control: (e, t) =>
                            (0, a.jsx)(l.VPO, {
                                ...e,
                                query: n,
                                onChange: o,
                                placeholder: "Search DevTools...",
                                ref: t,
                            }),
                    },
                    "devtools-search",
                ),
            [n],
        ),
        ...s.useMemo(() => {
            let e = [];
            if ("" !== n.trim() && 0 === d.length)
                e.push(
                    (0, a.jsx)(
                        l.Drp,
                        { id: "devtools-no-results", label: `No DevTools found for "${n}"`, disabled: !0 },
                        "devtools-no-results",
                    ),
                );
            else {
                let s = d.filter((e) => e.group === r.fu.NONE),
                    o = (function (e) {
                        let t = new Map();
                        for (let n of e) {
                            let e = t.get(n.group) ?? [];
                            e.push(n), t.set(n.group, e);
                        }
                        return t;
                    })(d.filter((e) => e.group !== r.fu.NONE));
                s.forEach((n) => {
                    let { id: s, name: r } = n;
                    return e.push((0, a.jsx)(l.Drp, { id: s, label: (0, i.O)(r) ?? "", action: () => t(s) }, s));
                }),
                    r.BW.forEach((s) => {
                        let r = o.get(s);
                        if (null != r && r.length > 0) {
                            let o = r.sort((e, t) => ((0, i.O)(e.name) ?? "").localeCompare((0, i.O)(t.name) ?? ""));
                            "" === n.trim()
                                ? e.push(
                                      (0, a.jsx)(
                                          l.Drp,
                                          {
                                              id: `devtools-${s}`,
                                              label: s,
                                              children: (0, a.jsx)(l.rXV, {
                                                  children: o.map((e) =>
                                                      (0, a.jsx)(
                                                          l.Drp,
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
                                          `devtools-${s}`,
                                      ),
                                  )
                                : e.push(
                                      (0, a.jsx)(
                                          l.rXV,
                                          {
                                              label: s,
                                              children: o.map((e) =>
                                                  (0, a.jsx)(
                                                      l.Drp,
                                                      {
                                                          id: `devtools-filtered-${e.id}`,
                                                          label: (0, i.O)(e.name) ?? "",
                                                          action: () => t(e.id),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          },
                                          `devtools-filtered-${s}`,
                                      ),
                                  );
                        }
                    });
            }
            return e;
        }, [d, n, t]),
    ];
}
