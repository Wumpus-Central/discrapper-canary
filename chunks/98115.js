l.d(t, { Ay: () => p, kn: () => x, u1: () => g });
var n = l(477900),
    a = l(582128),
    r = l(691885),
    i = l(193249),
    s = l(834730),
    u = l(673724),
    o = l(107698),
    d = l(313265),
    c = l(704855),
    f = l(50617),
    m = l(375708),
    h = l(425721);
function x(e, t) {
    let [l, n] = a.useState(null),
        [r, i] = a.useState(e);
    return (
        e !== r && (i(e), n(null)),
        [
            l ?? e,
            a.useCallback(
                (e) => {
                    (n(e), t(e));
                },
                [t],
            ),
        ]
    );
}
function g(e) {
    let { settings: t, tiers: l, choices: s, disabled: u, onChange: c } = e,
        h = a.useMemo(
            () => s.main.map((e) => ({ id: e.id, label: e.label, value: e.id, description: d.oU[e.provider] })),
            [s.main],
        ),
        x = a.useMemo(() => s.thinking.map((e) => ({ id: e, label: d.hW[e] ?? e, value: e })), [s.thinking]);
    function g(e) {
        c((0, o.zy)(e, l, s.main));
    }
    let p = (0, o.$G)(t, l, t.tier);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            null != p
                ? (0, n.jsx)(r.l, {
                      label: m.intl.string(f.default["9FRudW"]),
                      options: h,
                      value: p,
                      onSelectionChange: (e) => g((0, o.gh)(t, t.tier, e)),
                      selectionMode: "single",
                      disabled: u,
                      fullWidth: !0,
                  })
                : null,
            (0, n.jsx)(r.l, {
                label: m.intl.string(f.default["4AsQHS"]),
                options: x,
                value: t.thinking ?? l?.[t.tier]?.thinking ?? "",
                onSelectionChange: (e) => g({ ...t, thinking: e }),
                selectionMode: "single",
                disabled: u,
                fullWidth: !0,
            }),
            (0, o.$C)(t, l, s.main)
                ? (0, n.jsx)(i.d, {
                      label: m.intl.string(f.default.SYLSgx),
                      description: m.intl.string(f.default.HITWAI),
                      checked: !0 === t.fast,
                      disabled: u,
                      onChange: (e) => g({ ...t, fast: e }),
                  })
                : null,
        ],
    });
}
function p(e) {
    let { settings: t, tiers: l, choices: a, disabled: r, onChange: i } = e,
        d = u.ks.indexOf(t.tier);
    return (0, n.jsxs)("div", {
        className: h.OA,
        children: [
            (0, n.jsxs)("div", {
                className: h.hs,
                children: [
                    (0, n.jsxs)("div", {
                        className: h.UT,
                        children: [
                            (0, n.jsx)(s.E, {
                                tag: "span",
                                variant: "text-md/medium",
                                color: "text-default",
                                children: m.intl.string(f.default.GDs9Vq),
                            }),
                            (0, n.jsx)(s.E, {
                                tag: "span",
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: (0, o.is)(t.tier),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: h.Nb,
                        children: [
                            (0, n.jsx)(s.E, {
                                tag: "span",
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: m.intl.string(f.default["5DOL2g"]),
                            }),
                            (0, n.jsx)(s.E, {
                                tag: "span",
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: m.intl.string(f.default.OJIfkn),
                            }),
                        ],
                    }),
                    (0, n.jsx)(c.A, {
                        activeIndex: d,
                        stops: u.ks.map(o.eQ),
                        ariaLabel: m.intl.string(f.default.GDs9Vq),
                        disabled: r,
                        onSelect: function (e) {
                            let n = u.ks[e];
                            null != n && n !== t.tier && i((0, o.zy)((0, o.gc)(t, n), l, a.main));
                        },
                    }),
                ],
            }),
            (0, n.jsx)(g, { settings: t, tiers: l, choices: a, disabled: r, onChange: i }),
        ],
    });
}
