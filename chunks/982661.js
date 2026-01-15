n.r(e), n.d(e, { PlaygroundEmbed: () => S }), n(388685), n(35282);
var t = n(54381),
    o = n(473749),
    u = n(657707),
    r = n(793030),
    i = n(442837),
    a = n(756715),
    s = n(993365),
    d = n(159691),
    c = n(37234),
    f = n(594174),
    h = n(653592),
    m = n(156142),
    p = n(811364),
    x = n(981631),
    g = n(828338);
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
    y = null;
function S(l) {
    var e, n;
    let S = (0, i.e7)([f.default], () => {
            let l = f.default.getCurrentUser();
            return (null == l ? void 0 : l.isStaff()) || (null == l ? void 0 : l.isStaffPersonal());
        }),
        C = o.useMemo(
            () =>
                (function (l) {
                    let e = l.match(p.u);
                    return null == e || null == e[1] ? null : e[1].toLowerCase();
                })(l.url),
            [l.url],
        ),
        P =
            null != C
                ? (function () {
                      if (null == y)
                          for (let l of ((y = new Map()), h.componentPlaygroundConfigs))
                              for (let e of l.collections) y.set(e.id.toLowerCase(), e);
                      return y;
                  })().get(C)
                : null,
        b = null != C ? v[C] : null,
        j = o.useMemo(() => {
            if (null == P) return;
            let e = (function (l) {
                var e;
                let n = l.match(p.u);
                return null == n ? null : null != (e = n[3]) ? e : null;
            })(l.url);
            if (null != e)
                for (let l of P.groups) {
                    let n = l.stories.find((l) => l.id === e);
                    if (null != n) return n;
                }
        }, [l.url, P]),
        k = null != (e = null == j ? void 0 : j.name) ? e : null != P ? "".concat(P.name, " Playground") : "Playground",
        w =
            null != j && null != j.docs
                ? (0, t.jsx)(a.Anchor, {
                      href: j.docs,
                      children: "Documentation",
                  })
                : null != b
                  ? b.defaultSubtitle
                  : "Explore Components",
        E = o.useCallback(() => {
            null != P &&
                (null != j
                    ? m.PlaygroundStore.setState({
                          selectedCollection: P.id,
                          selectedStory: j.id,
                      })
                    : m.PlaygroundStore.setState({
                          selectedCollection: P.id,
                          selectedStory: null,
                      }),
                (0, c.jN)(x.S9g.COMPONENT_PLAYGROUND));
        }, [j, P]);
    if (!S || null == P) return null;
    let M = null != (n = null == b ? void 0 : b.icon) ? n : u.PotionIcon;
    return (0, t.jsx)("div", {
        className: g.root,
        "data-has-story": null != j,
        children: (0, t.jsxs)(r.Kqy, {
            direction: null == j ? "vertical" : "horizontal",
            align: null == j ? "start" : "center",
            gap: 12,
            justify: null == j ? "end" : "space-between",
            children: [
                (0, t.jsx)("div", {
                    className: g.header,
                    children: (0, t.jsxs)(r.Kqy, {
                        direction: "horizontal",
                        align: "start",
                        gap: 8,
                        children: [
                            (0, t.jsx)(M, { size: "lg" }),
                            (0, t.jsxs)(r.Kqy, {
                                direction: "vertical",
                                gap: 0,
                                children: [
                                    (0, t.jsx)(s.x, {
                                        variant: "text-md/semibold",
                                        children: k,
                                    }),
                                    (0, t.jsx)(s.x, {
                                        variant: "text-sm/normal",
                                        children: w,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                (0, t.jsx)(d.zxk, {
                    size: "sm",
                    onClick: E,
                    text: "Open Playground",
                    fullWidth: null == j,
                }),
            ],
        }),
    });
}
