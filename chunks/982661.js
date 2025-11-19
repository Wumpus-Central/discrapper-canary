n.r(e), n.d(e, { PlaygroundEmbed: () => S }), n(388685), n(35282);
var t = n(54381),
    u = n(473749),
    o = n(657707),
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
    g = n(777461);
let v = {
        mana: {
            name: "Mana",
            icon: o.hh5,
            defaultSubtitle: "Explore the Mana Design System",
        },
        revenue: {
            name: "Revenue",
            icon: o.uMN,
            defaultSubtitle: "Explore Revenue Components",
        },
        void: {
            name: "Void",
            icon: o.hh5,
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
        C = u.useMemo(
            () =>
                (function (l) {
                    let e = l.match(p.u);
                    return null == e || null == e[1] ? null : e[1].toLowerCase();
                })(l.url),
            [l.url],
        ),
        j =
            null != C
                ? (function () {
                      if (null == y)
                          for (let l of ((y = new Map()), h.componentPlaygroundConfigs))
                              for (let e of l.collections) y.set(e.id.toLowerCase(), e);
                      return y;
                  })().get(C)
                : null,
        b = null != C ? v[C] : null,
        P = u.useMemo(() => {
            if (null == j) return;
            let e = (function (l) {
                var e;
                let n = l.match(p.u);
                return null == n ? null : null != (e = n[3]) ? e : null;
            })(l.url);
            if (null != e)
                for (let l of j.groups) {
                    let n = l.stories.find((l) => l.id === e);
                    if (null != n) return n;
                }
        }, [l.url, j]),
        k = null != (e = null == P ? void 0 : P.name) ? e : null != j ? "".concat(j.name, " Playground") : "Playground",
        M =
            null != P && null != P.docs
                ? (0, t.jsx)(a.Anchor, {
                      href: P.docs,
                      children: "Documentation",
                  })
                : null != b
                  ? b.defaultSubtitle
                  : "Explore Components",
        N = u.useCallback(() => {
            null != j &&
                (null != P
                    ? m.PlaygroundStore.setState({
                          selectedCollection: j.id,
                          selectedStory: P.id,
                      })
                    : m.PlaygroundStore.setState({
                          selectedCollection: j.id,
                          selectedStory: null,
                      }),
                (0, c.jN)(x.S9g.COMPONENT_PLAYGROUND));
        }, [P, j]);
    if (!S || null == j) return null;
    let _ = null != (n = null == b ? void 0 : b.icon) ? n : o.hh5;
    return (0, t.jsx)("div", {
        className: g.root,
        "data-has-story": null != P,
        children: (0, t.jsxs)(r.Kqy, {
            direction: null == P ? "vertical" : "horizontal",
            align: null == P ? "start" : "center",
            gap: 12,
            justify: null == P ? "end" : "space-between",
            children: [
                (0, t.jsx)("div", {
                    className: g.header,
                    children: (0, t.jsxs)(r.Kqy, {
                        direction: "horizontal",
                        align: "start",
                        gap: 8,
                        children: [
                            (0, t.jsx)(_, { size: "lg" }),
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
                                        children: M,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                (0, t.jsx)(d.zxk, {
                    size: "sm",
                    onClick: N,
                    text: "Open Playground",
                    fullWidth: null == P,
                }),
            ],
        }),
    });
}
