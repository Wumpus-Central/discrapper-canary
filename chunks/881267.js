n.d(l, { PlaygroundEmbed: () => y });
var t = n(627968),
    u = n(64700),
    r = n(659421),
    o = n(700623),
    i = n(331322),
    a = n(17928),
    s = n(349288),
    d = n(834730),
    c = n(821609),
    f = n(398590),
    m = n(287809),
    h = n(944771),
    p = n(848281),
    g = n(836156),
    x = n(652215),
    S = n(580400);
let C = {
    mana: { name: "Mana", icon: r.H, defaultSubtitle: "Explore the Mana Design System" },
    revenue: { name: "Revenue", icon: o.d, defaultSubtitle: "Explore Revenue Components" },
    void: { name: "Void", icon: r.H, defaultSubtitle: "Explore the Void Design System" },
};
function y(e) {
    let l = (0, a.bG)([m.default], () => {
            let e = m.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        n = u.useMemo(() => {
            let l;
            return null == (l = e.url.match(g.S)) || null == l[1] ? null : l[1].toLowerCase();
        }, [e.url]),
        o = (0, h.useComponentPlaygroundConfigs)(),
        y = u.useMemo(
            () =>
                (function (e) {
                    let l = new Map();
                    for (let n of e) for (let e of n.collections) l.set(e.id.toLowerCase(), e);
                    return l;
                })(o),
            [o],
        ),
        b = null != n ? y.get(n) : null,
        j = null != n ? C[n] : null,
        v = u.useMemo(() => {
            let l;
            if (null == b) return;
            let n = null == (l = e.url.match(g.S)) ? null : (l[3] ?? null);
            if (null != n)
                for (let e of b.groups) {
                    let l = e.stories.find((e) => e.id === n);
                    if (null != l) return l;
                }
        }, [e.url, b]),
        P = v?.name ?? (null != b ? `${b.name} Playground` : "Playground"),
        E =
            null != v && null != v.docs
                ? (0, t.jsx)(s.Anchor, { href: v.docs, children: "Documentation" })
                : null != j
                  ? j.defaultSubtitle
                  : "Explore Components",
        w = u.useCallback(() => {
            null != b &&
                (null != v
                    ? p.PlaygroundStore.setState({ selectedCollection: b.id, selectedStory: v.id })
                    : p.PlaygroundStore.setState({ selectedCollection: b.id, selectedStory: null }),
                (0, f.id)(x.zgK.COMPONENT_PLAYGROUND));
        }, [v, b]);
    if (!l || null == b) return null;
    let M = j?.icon ?? r.H;
    return (0, t.jsx)("div", {
        className: S.z,
        "data-has-story": null != v,
        children: (0, t.jsxs)(i.B, {
            direction: null == v ? "vertical" : "horizontal",
            align: null == v ? "start" : "center",
            gap: 12,
            justify: null == v ? "end" : "space-between",
            children: [
                (0, t.jsx)("div", {
                    className: S.w,
                    children: (0, t.jsxs)(i.B, {
                        direction: "horizontal",
                        align: "start",
                        gap: 8,
                        children: [
                            (0, t.jsx)(M, { size: "lg" }),
                            (0, t.jsxs)(i.B, {
                                direction: "vertical",
                                gap: 0,
                                children: [
                                    (0, t.jsx)(d.E, { variant: "text-md/semibold", children: P }),
                                    (0, t.jsx)(d.E, { variant: "text-sm/normal", children: E }),
                                ],
                            }),
                        ],
                    }),
                }),
                (0, t.jsx)(c.$, { size: "sm", onClick: w, text: "Open Playground", fullWidth: null == v }),
            ],
        }),
    });
}
