n.d(e, {
    PlaygroundEmbed: () => S,
}),
    n(896048),
    n(747238);
var t = n(627968),
    o = n(64700),
    u = n(934551),
    i = n(158954),
    r = n(311907),
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
let v = {
        mana: {
            name: "Mana",
            icon: u.PotionIcon,
            defaultSubtitle: "Explore the Mana Design System",
        },
        revenue: {
            name: "Revenue",
            icon: u.BillIcon,
            defaultSubtitle: "Explore Revenue Components",
        },
        void: {
            name: "Void",
            icon: u.PotionIcon,
            defaultSubtitle: "Explore the Void Design System",
        },
    },
    b = null;

function S(l) {
    var e, n;
    let S = (0, r.bG)([f.default], () => {
            let l = f.default.getCurrentUser();
            return (null == l ? void 0 : l.isStaff()) || (null == l ? void 0 : l.isStaffPersonal());
        }),
        y = o.useMemo(() => {
            let e;
            return null == (e = l.url.match(p.S)) || null == e[1] ? null : e[1].toLowerCase();
        }, [l.url]),
        C =
            null != y
                ? (function () {
                      if (null == b)
                          for (let l of ((b = new Map()), m.componentPlaygroundConfigs))
                              for (let e of l.collections) b.set(e.id.toLowerCase(), e);
                      return b;
                  })().get(y)
                : null,
        P = null != y ? v[y] : null,
        j = o.useMemo(() => {
            var e;
            let n;
            if (null == C) return;
            let t = null == (n = l.url.match(p.S)) ? null : null != (e = n[3]) ? e : null;
            if (null != t)
                for (let l of C.groups) {
                    let e = l.stories.find((l) => l.id === t);
                    if (null != e) return e;
                }
        }, [l.url, C]),
        w = null != (e = null == j ? void 0 : j.name) ? e : null != C ? "".concat(C.name, " Playground") : "Playground",
        E =
            null != j && null != j.docs
                ? (0, t.jsx)(a.Anchor, {
                      href: j.docs,
                      children: "Documentation",
                  })
                : null != P
                  ? P.defaultSubtitle
                  : "Explore Components",
        z = o.useCallback(() => {
            null != C &&
                (null != j
                    ? h.PlaygroundStore.setState({
                          selectedCollection: C.id,
                          selectedStory: j.id,
                      })
                    : h.PlaygroundStore.setState({
                          selectedCollection: C.id,
                          selectedStory: null,
                      }),
                (0, c.id)(g.zgK.COMPONENT_PLAYGROUND));
        }, [j, C]);
    if (!S || null == C) return null;
    let k = null != (n = null == P ? void 0 : P.icon) ? n : u.PotionIcon;
    return (0, t.jsx)("div", {
        className: x.z,
        "data-has-story": null != j,
        children: (0, t.jsxs)(i.BJc, {
            direction: null == j ? "vertical" : "horizontal",
            align: null == j ? "start" : "center",
            gap: 12,
            justify: null == j ? "end" : "space-between",
            children: [
                (0, t.jsx)("div", {
                    className: x.w,
                    children: (0, t.jsxs)(i.BJc, {
                        direction: "horizontal",
                        align: "start",
                        gap: 8,
                        children: [
                            (0, t.jsx)(k, {
                                size: "lg",
                            }),
                            (0, t.jsxs)(i.BJc, {
                                direction: "vertical",
                                gap: 0,
                                children: [
                                    (0, t.jsx)(s.E, {
                                        variant: "text-md/semibold",
                                        children: w,
                                    }),
                                    (0, t.jsx)(s.E, {
                                        variant: "text-sm/normal",
                                        children: E,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                (0, t.jsx)(d.$nd, {
                    size: "sm",
                    onClick: z,
                    text: "Open Playground",
                    fullWidth: null == j,
                }),
            ],
        }),
    });
}
