(n(323874), n(14289), n(35956));
var t = n(477900),
    r = n(582128),
    o = n(659421),
    u = n(700623),
    i = n(855986),
    a = n(821609),
    s = n(28863),
    c = n(331322),
    d = n(834730),
    f = n(398590),
    m = n(287809),
    h = n(944771),
    p = n(836156),
    g = n(101715),
    x = n(652215),
    b = n(302569);
let S = {
    mana: { name: "Mana", icon: o.PotionIcon, defaultSubtitle: "Explore the Mana Design System" },
    revenue: { name: "Revenue", icon: u.BillIcon, defaultSubtitle: "Explore Revenue Components" },
    void: { name: "Void", icon: o.PotionIcon, defaultSubtitle: "Explore the Void Design System" },
};
n.d(
    e,
    {},
    {
        PlaygroundEmbed: function (l) {
            let e = (0, i.bG)([m.default], () => {
                    let l = m.default.getCurrentUser();
                    return l?.isStaff() || l?.isStaffPersonal();
                }),
                n = r.useMemo(() => {
                    let e;
                    return null == (e = l.url.match(p.S)) || null == e[1] ? null : e[1].toLowerCase();
                }, [l.url]),
                u = (0, h.useComponentPlaygroundConfigs)(),
                y = r.useMemo(
                    () =>
                        (function (l) {
                            let e = new Map();
                            for (let n of l) for (let l of n.collections) e.set(l.id.toLowerCase(), l);
                            return e;
                        })(u),
                    [u],
                ),
                C = null != n ? y.get(n) : null,
                P = null != n ? S[n] : null,
                j = r.useMemo(() => {
                    let e;
                    if (null == C) return;
                    let n = null == (e = l.url.match(p.S)) ? null : (e[3] ?? null);
                    if (null != n)
                        for (let l of C.groups) {
                            let e = l.stories.find((l) => l.id === n);
                            if (null != e) return e;
                        }
                }, [l.url, C]),
                v = j?.name ?? (null != C ? `${C.name} Playground` : "Playground"),
                w =
                    null != j && null != j.docs
                        ? (0, t.jsx)(s.Anchor, { href: j.docs, children: "Documentation" })
                        : null != P
                          ? P.defaultSubtitle
                          : "Explore Components",
                E = r.useCallback(() => {
                    if (null == C) return;
                    let e =
                        null != j
                            ? (function (l) {
                                  let e = l.match(p.S),
                                      n = e?.[4],
                                      t = {};
                                  if (null == n || "" === n) return t;
                                  for (let [l, e] of new URLSearchParams(n)) t[l] = e;
                                  return t;
                              })(l.url)
                            : {};
                    (g.x.setState({
                        selectedCollection: C.id,
                        selectedStory: j?.id ?? null,
                        controlOverrides: Object.keys(e).length > 0 ? e : null,
                        currentProps: null,
                    }),
                        (0, f.id)(x.zgK.COMPONENT_PLAYGROUND));
                }, [j, C, l.url]);
            if (!e || null == C) return null;
            let k = P?.icon ?? o.PotionIcon;
            return (0, t.jsx)("div", {
                className: b.z,
                "data-has-story": null != j,
                children: (0, t.jsxs)(c.B, {
                    direction: null == j ? "vertical" : "horizontal",
                    align: null == j ? "start" : "center",
                    gap: 12,
                    justify: null == j ? "end" : "space-between",
                    children: [
                        (0, t.jsx)("div", {
                            className: b.w,
                            children: (0, t.jsxs)(c.B, {
                                direction: "horizontal",
                                align: "start",
                                gap: 8,
                                children: [
                                    (0, t.jsx)(k, { size: "lg" }),
                                    (0, t.jsxs)(c.B, {
                                        direction: "vertical",
                                        gap: 0,
                                        children: [
                                            (0, t.jsx)(d.E, { variant: "body-md/semibold", children: v }),
                                            (0, t.jsx)(d.E, { variant: "body-sm/normal", children: w }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        (0, t.jsx)(a.$, { size: "sm", onClick: E, text: "Open Playground", fullWidth: null == j }),
                    ],
                }),
            });
        },
    },
);
