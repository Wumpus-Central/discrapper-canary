(n(323874), n(14289), n(35956));
var t = n(477900),
    r = n(582128),
    u = n(659421),
    o = n(700623),
    i = n(855986),
    a = n(821609),
    s = n(28863),
    d = n(331322),
    c = n(834730),
    f = n(398590),
    m = n(287809),
    h = n(944771),
    p = n(836156),
    g = n(101715),
    x = n(652215),
    b = n(302569);
let S = {
    mana: { name: "Mana", icon: u.H, defaultSubtitle: "Explore the Mana Design System" },
    revenue: { name: "Revenue", icon: o.d, defaultSubtitle: "Explore Revenue Components" },
    void: { name: "Void", icon: u.H, defaultSubtitle: "Explore the Void Design System" },
};
n.d(
    l,
    {},
    {
        PlaygroundEmbed: function (e) {
            let l = (0, i.bG)([m.default], () => {
                    let e = m.default.getCurrentUser();
                    return e?.isStaff() || e?.isStaffPersonal();
                }),
                n = r.useMemo(() => {
                    let l;
                    return null == (l = e.url.match(p.S)) || null == l[1] ? null : l[1].toLowerCase();
                }, [e.url]),
                o = (0, h.useComponentPlaygroundConfigs)(),
                y = r.useMemo(
                    () =>
                        (function (e) {
                            let l = new Map();
                            for (let n of e) for (let e of n.collections) l.set(e.id.toLowerCase(), e);
                            return l;
                        })(o),
                    [o],
                ),
                C = null != n ? y.get(n) : null,
                j = null != n ? S[n] : null,
                v = r.useMemo(() => {
                    let l;
                    if (null == C) return;
                    let n = null == (l = e.url.match(p.S)) ? null : (l[3] ?? null);
                    if (null != n)
                        for (let e of C.groups) {
                            let l = e.stories.find((e) => e.id === n);
                            if (null != l) return l;
                        }
                }, [e.url, C]),
                P = v?.name ?? (null != C ? `${C.name} Playground` : "Playground"),
                w =
                    null != v && null != v.docs
                        ? (0, t.jsx)(s.Anchor, { href: v.docs, children: "Documentation" })
                        : null != j
                          ? j.defaultSubtitle
                          : "Explore Components",
                E = r.useCallback(() => {
                    if (null == C) return;
                    let l =
                        null != v
                            ? (function (e) {
                                  let l = e.match(p.S),
                                      n = l?.[4],
                                      t = {};
                                  if (null == n || "" === n) return t;
                                  for (let [e, l] of new URLSearchParams(n)) t[e] = l;
                                  return t;
                              })(e.url)
                            : {};
                    (g.x.setState({
                        selectedCollection: C.id,
                        selectedStory: v?.id ?? null,
                        controlOverrides: Object.keys(l).length > 0 ? l : null,
                        currentProps: null,
                    }),
                        (0, f.id)(x.zgK.COMPONENT_PLAYGROUND));
                }, [v, C, e.url]);
            if (!l || null == C) return null;
            let k = j?.icon ?? u.H;
            return (0, t.jsx)("div", {
                className: b.z,
                "data-has-story": null != v,
                children: (0, t.jsxs)(d.B, {
                    direction: null == v ? "vertical" : "horizontal",
                    align: null == v ? "start" : "center",
                    gap: 12,
                    justify: null == v ? "end" : "space-between",
                    children: [
                        (0, t.jsx)("div", {
                            className: b.w,
                            children: (0, t.jsxs)(d.B, {
                                direction: "horizontal",
                                align: "start",
                                gap: 8,
                                children: [
                                    (0, t.jsx)(k, { size: "lg" }),
                                    (0, t.jsxs)(d.B, {
                                        direction: "vertical",
                                        gap: 0,
                                        children: [
                                            (0, t.jsx)(c.E, { variant: "body-md/semibold", children: P }),
                                            (0, t.jsx)(c.E, { variant: "body-sm/normal", children: w }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        (0, t.jsx)(a.$, { size: "sm", onClick: E, text: "Open Playground", fullWidth: null == v }),
                    ],
                }),
            });
        },
    },
);
