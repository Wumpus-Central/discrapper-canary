n.d(l, { PlaygroundEmbed: () => b }), n(323874), n(14289), n(35956);
var t = n(627968),
    r = n(64700),
    u = n(659421),
    o = n(700623),
    i = n(331322),
    a = n(17928),
    s = n(349288),
    d = n(834730),
    c = n(821609),
    f = n(398590),
    m = n(287809),
    h = n(944771),
    p = n(764451),
    g = n(836156),
    x = n(652215),
    S = n(580400);
let C = {
    mana: { name: "Mana", icon: u.H, defaultSubtitle: "Explore the Mana Design System" },
    revenue: { name: "Revenue", icon: o.d, defaultSubtitle: "Explore Revenue Components" },
    void: { name: "Void", icon: u.H, defaultSubtitle: "Explore the Void Design System" },
};
function b(e) {
    let l = (0, a.bG)([m.default], () => {
            let e = m.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        n = r.useMemo(() => {
            let l;
            return null == (l = e.url.match(g.S)) || null == l[1] ? null : l[1].toLowerCase();
        }, [e.url]),
        o = (0, h.useComponentPlaygroundConfigs)(),
        b = r.useMemo(
            () =>
                (function (e) {
                    let l = new Map();
                    for (let n of e) for (let e of n.collections) l.set(e.id.toLowerCase(), e);
                    return l;
                })(o),
            [o],
        ),
        j = null != n ? b.get(n) : null,
        v = null != n ? C[n] : null,
        y = r.useMemo(() => {
            let l;
            if (null == j) return;
            let n = null == (l = e.url.match(g.S)) ? null : (l[3] ?? null);
            if (null != n)
                for (let e of j.groups) {
                    let l = e.stories.find((e) => e.id === n);
                    if (null != l) return l;
                }
        }, [e.url, j]),
        P = y?.name ?? (null != j ? `${j.name} Playground` : "Playground"),
        w =
            null != y && null != y.docs
                ? (0, t.jsx)(s.Anchor, { href: y.docs, children: "Documentation" })
                : null != v
                  ? v.defaultSubtitle
                  : "Explore Components",
        E = r.useCallback(() => {
            if (null == j) return;
            let l =
                null != y
                    ? (function (e) {
                          let l = e.match(g.S),
                              n = l?.[4],
                              t = {};
                          if (null == n || "" === n) return t;
                          for (let [e, l] of new URLSearchParams(n)) t[e] = l;
                          return t;
                      })(e.url)
                    : {};
            p.PlaygroundStore.setState({
                selectedCollection: j.id,
                selectedStory: y?.id ?? null,
                controlOverrides: Object.keys(l).length > 0 ? l : null,
                currentProps: null,
            }),
                (0, f.id)(x.zgK.COMPONENT_PLAYGROUND);
        }, [y, j, e.url]);
    if (!l || null == j) return null;
    let k = v?.icon ?? u.H;
    return (0, t.jsx)("div", {
        className: S.z,
        "data-has-story": null != y,
        children: (0, t.jsxs)(i.B, {
            direction: null == y ? "vertical" : "horizontal",
            align: null == y ? "start" : "center",
            gap: 12,
            justify: null == y ? "end" : "space-between",
            children: [
                (0, t.jsx)("div", {
                    className: S.w,
                    children: (0, t.jsxs)(i.B, {
                        direction: "horizontal",
                        align: "start",
                        gap: 8,
                        children: [
                            (0, t.jsx)(k, { size: "lg" }),
                            (0, t.jsxs)(i.B, {
                                direction: "vertical",
                                gap: 0,
                                children: [
                                    (0, t.jsx)(d.E, { variant: "text-md/semibold", children: P }),
                                    (0, t.jsx)(d.E, { variant: "text-sm/normal", children: w }),
                                ],
                            }),
                        ],
                    }),
                }),
                (0, t.jsx)(c.$, { size: "sm", onClick: E, text: "Open Playground", fullWidth: null == y }),
            ],
        }),
    });
}
