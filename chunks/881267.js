n.d(l, { PlaygroundEmbed: () => C });
var t = n(627968),
    o = n(64700),
    r = n(934551),
    i = n(158954),
    u = n(311907),
    a = n(349288),
    s = n(571356),
    d = n(732955),
    c = n(398590),
    f = n(287809),
    h = n(944771),
    m = n(3258),
    p = n(836156),
    g = n(652215),
    x = n(565003);
let S = {
        mana: { name: "Mana", icon: r.PotionIcon, defaultSubtitle: "Explore the Mana Design System" },
        revenue: { name: "Revenue", icon: r.BillIcon, defaultSubtitle: "Explore Revenue Components" },
        void: { name: "Void", icon: r.PotionIcon, defaultSubtitle: "Explore the Void Design System" },
    },
    y = null;
function C(e) {
    let l = (0, u.bG)([f.default], () => {
            let e = f.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        n = o.useMemo(() => {
            let l;
            return null == (l = e.url.match(p.S)) || null == l[1] ? null : l[1].toLowerCase();
        }, [e.url]),
        C =
            null != n
                ? (function () {
                      if (null == y)
                          for (let e of ((y = new Map()), h.componentPlaygroundConfigs))
                              for (let l of e.collections) y.set(l.id.toLowerCase(), l);
                      return y;
                  })().get(n)
                : null,
        P = null != n ? S[n] : null,
        b = o.useMemo(() => {
            let l;
            if (null == C) return;
            let n = null == (l = e.url.match(p.S)) ? null : (l[3] ?? null);
            if (null != n)
                for (let e of C.groups) {
                    let l = e.stories.find((e) => e.id === n);
                    if (null != l) return l;
                }
        }, [e.url, C]),
        j = b?.name ?? (null != C ? `${C.name} Playground` : "Playground"),
        v =
            null != b && null != b.docs
                ? (0, t.jsx)(a.Anchor, { href: b.docs, children: "Documentation" })
                : null != P
                  ? P.defaultSubtitle
                  : "Explore Components",
        w = o.useCallback(() => {
            null != C &&
                (null != b
                    ? m.PlaygroundStore.setState({ selectedCollection: C.id, selectedStory: b.id })
                    : m.PlaygroundStore.setState({ selectedCollection: C.id, selectedStory: null }),
                (0, c.id)(g.zgK.COMPONENT_PLAYGROUND));
        }, [b, C]);
    if (!l || null == C) return null;
    let E = P?.icon ?? r.PotionIcon;
    return (0, t.jsx)("div", {
        className: x.z,
        "data-has-story": null != b,
        children: (0, t.jsxs)(i.BJc, {
            direction: null == b ? "vertical" : "horizontal",
            align: null == b ? "start" : "center",
            gap: 12,
            justify: null == b ? "end" : "space-between",
            children: [
                (0, t.jsx)("div", {
                    className: x.w,
                    children: (0, t.jsxs)(i.BJc, {
                        direction: "horizontal",
                        align: "start",
                        gap: 8,
                        children: [
                            (0, t.jsx)(E, { size: "lg" }),
                            (0, t.jsxs)(i.BJc, {
                                direction: "vertical",
                                gap: 0,
                                children: [
                                    (0, t.jsx)(s.E, { variant: "text-md/semibold", children: j }),
                                    (0, t.jsx)(s.E, { variant: "text-sm/normal", children: v }),
                                ],
                            }),
                        ],
                    }),
                }),
                (0, t.jsx)(d.$nd, { size: "sm", onClick: w, text: "Open Playground", fullWidth: null == b }),
            ],
        }),
    });
}
