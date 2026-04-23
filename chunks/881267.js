t.d(l, { PlaygroundEmbed: () => C });
var n = t(627968),
    a = t(64700),
    s = t(659421),
    i = t(700623),
    r = t(331322),
    o = t(17928),
    u = t(349288),
    d = t(834730),
    c = t(821609),
    h = t(398590),
    f = t(287809),
    m = t(944771),
    g = t(3258),
    p = t(836156),
    v = t(652215),
    x = t(580400);
let w = {
    mana: { name: "Mana", icon: s.H, defaultSubtitle: "Explore the Mana Design System" },
    revenue: { name: "Revenue", icon: i.d, defaultSubtitle: "Explore Revenue Components" },
    void: { name: "Void", icon: s.H, defaultSubtitle: "Explore the Void Design System" },
};
function C(e) {
    let l = (0, o.bG)([f.default], () => {
            let e = f.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        t = a.useMemo(() => {
            let l;
            return null == (l = e.url.match(p.S)) || null == l[1] ? null : l[1].toLowerCase();
        }, [e.url]),
        i = (0, m.useComponentPlaygroundConfigs)(),
        C = a.useMemo(
            () =>
                (function (e) {
                    let l = new Map();
                    for (let t of e) for (let e of t.collections) l.set(e.id.toLowerCase(), e);
                    return l;
                })(i),
            [i],
        ),
        j = null != t ? C.get(t) : null,
        y = null != t ? w[t] : null,
        S = a.useMemo(() => {
            let l;
            if (null == j) return;
            let t = null == (l = e.url.match(p.S)) ? null : (l[3] ?? null);
            if (null != t)
                for (let e of j.groups) {
                    let l = e.stories.find((e) => e.id === t);
                    if (null != l) return l;
                }
        }, [e.url, j]),
        E = S?.name ?? (null != j ? `${j.name} Playground` : "Playground"),
        A =
            null != S && null != S.docs
                ? (0, n.jsx)(u.Anchor, { href: S.docs, children: "Documentation" })
                : null != y
                  ? y.defaultSubtitle
                  : "Explore Components",
        M = a.useCallback(() => {
            null != j &&
                (null != S
                    ? g.PlaygroundStore.setState({ selectedCollection: j.id, selectedStory: S.id })
                    : g.PlaygroundStore.setState({ selectedCollection: j.id, selectedStory: null }),
                (0, h.id)(v.zgK.COMPONENT_PLAYGROUND));
        }, [S, j]);
    if (!l || null == j) return null;
    let N = y?.icon ?? s.H;
    return (0, n.jsx)("div", {
        className: x.z,
        "data-has-story": null != S,
        children: (0, n.jsxs)(r.B, {
            direction: null == S ? "vertical" : "horizontal",
            align: null == S ? "start" : "center",
            gap: 12,
            justify: null == S ? "end" : "space-between",
            children: [
                (0, n.jsx)("div", {
                    className: x.w,
                    children: (0, n.jsxs)(r.B, {
                        direction: "horizontal",
                        align: "start",
                        gap: 8,
                        children: [
                            (0, n.jsx)(N, { size: "lg" }),
                            (0, n.jsxs)(r.B, {
                                direction: "vertical",
                                gap: 0,
                                children: [
                                    (0, n.jsx)(d.E, { variant: "text-md/semibold", children: E }),
                                    (0, n.jsx)(d.E, { variant: "text-sm/normal", children: A }),
                                ],
                            }),
                        ],
                    }),
                }),
                (0, n.jsx)(c.$, { size: "sm", onClick: M, text: "Open Playground", fullWidth: null == S }),
            ],
        }),
    });
}
