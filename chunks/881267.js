n.d(l, { PlaygroundEmbed: () => C });
var t = n(627968),
    o = n(64700),
    r = n(934551),
    u = n(158954),
    i = n(311907),
    a = n(349288),
    s = n(571356),
    d = n(732955),
    c = n(398590),
    f = n(287809),
    m = n(944771),
    h = n(3258),
    p = n(836156),
    g = n(652215),
    x = n(565003);
let S = {
    mana: { name: "Mana", icon: r.PotionIcon, defaultSubtitle: "Explore the Mana Design System" },
    revenue: { name: "Revenue", icon: r.BillIcon, defaultSubtitle: "Explore Revenue Components" },
    void: { name: "Void", icon: r.PotionIcon, defaultSubtitle: "Explore the Void Design System" },
};
function C(e) {
    let l = (0, i.bG)([f.default], () => {
            let e = f.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        n = o.useMemo(() => {
            let l;
            return null == (l = e.url.match(p.S)) || null == l[1] ? null : l[1].toLowerCase();
        }, [e.url]),
        C = (0, m.useComponentPlaygroundConfigs)(),
        y = o.useMemo(
            () =>
                (function (e) {
                    let l = new Map();
                    for (let n of e) for (let e of n.collections) l.set(e.id.toLowerCase(), e);
                    return l;
                })(C),
            [C],
        ),
        P = null != n ? y.get(n) : null,
        b = null != n ? S[n] : null,
        j = o.useMemo(() => {
            let l;
            if (null == P) return;
            let n = null == (l = e.url.match(p.S)) ? null : (l[3] ?? null);
            if (null != n)
                for (let e of P.groups) {
                    let l = e.stories.find((e) => e.id === n);
                    if (null != l) return l;
                }
        }, [e.url, P]),
        v = j?.name ?? (null != P ? `${P.name} Playground` : "Playground"),
        w =
            null != j && null != j.docs
                ? (0, t.jsx)(a.Anchor, { href: j.docs, children: "Documentation" })
                : null != b
                  ? b.defaultSubtitle
                  : "Explore Components",
        E = o.useCallback(() => {
            null != P &&
                (null != j
                    ? h.PlaygroundStore.setState({ selectedCollection: P.id, selectedStory: j.id })
                    : h.PlaygroundStore.setState({ selectedCollection: P.id, selectedStory: null }),
                (0, c.id)(g.zgK.COMPONENT_PLAYGROUND));
        }, [j, P]);
    if (!l || null == P) return null;
    let z = b?.icon ?? r.PotionIcon;
    return (0, t.jsx)("div", {
        className: x.z,
        "data-has-story": null != j,
        children: (0, t.jsxs)(u.BJc, {
            direction: null == j ? "vertical" : "horizontal",
            align: null == j ? "start" : "center",
            gap: 12,
            justify: null == j ? "end" : "space-between",
            children: [
                (0, t.jsx)("div", {
                    className: x.w,
                    children: (0, t.jsxs)(u.BJc, {
                        direction: "horizontal",
                        align: "start",
                        gap: 8,
                        children: [
                            (0, t.jsx)(z, { size: "lg" }),
                            (0, t.jsxs)(u.BJc, {
                                direction: "vertical",
                                gap: 0,
                                children: [
                                    (0, t.jsx)(s.E, { variant: "text-md/semibold", children: v }),
                                    (0, t.jsx)(s.E, { variant: "text-sm/normal", children: w }),
                                ],
                            }),
                        ],
                    }),
                }),
                (0, t.jsx)(d.$nd, { size: "sm", onClick: E, text: "Open Playground", fullWidth: null == j }),
            ],
        }),
    });
}
