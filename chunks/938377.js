n.d(t, { Ay: () => g, FT: () => p, bR: () => x });
var l = n(477900),
    r = n(582128),
    a = n(691885),
    i = n(193249),
    s = n(834730),
    u = n(164892),
    o = n(599310),
    d = n(50277),
    c = n(720203),
    f = n(248675),
    h = n(375708),
    m = n(571955);
function p(e, t) {
    let [n, l] = r.useState(null),
        [a, i] = r.useState(e);
    return (
        e !== a && (i(e), l(null)),
        [
            n ?? e,
            r.useCallback(
                (e) => {
                    (l(e), t(e));
                },
                [t],
            ),
        ]
    );
}
function x(e) {
    let { settings: t, tiers: n, choices: s, disabled: u, onChange: c } = e,
        m = r.useMemo(
            () => s.main.map((e) => ({ id: e.id, label: e.label, value: e.id, description: d.oU[e.provider] })),
            [s.main],
        ),
        p = r.useMemo(() => s.thinking.map((e) => ({ id: e, label: d.hW[e] ?? e, value: e })), [s.thinking]);
    function x(e) {
        c((0, o.CM)(e));
    }
    let g = (0, o.Id)(t, n, t.tier);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != g
                ? (0, l.jsx)(a.l, {
                      label: h.intl.string(f.default["59TDiR"]),
                      options: m,
                      value: g,
                      onSelectionChange: (e) => x((0, o.t7)(t, t.tier, e)),
                      selectionMode: "single",
                      disabled: u,
                      fullWidth: !0,
                  })
                : null,
            (0, l.jsx)(a.l, {
                label: h.intl.string(f.default.fpdVCO),
                options: p,
                value: t.thinking ?? n?.[t.tier]?.thinking ?? "",
                onSelectionChange: (e) => x({ ...t, thinking: e }),
                selectionMode: "single",
                disabled: u,
                fullWidth: !0,
            }),
            (0, o.gz)(t, n, s.main)
                ? (0, l.jsx)(i.d, {
                      label: h.intl.string(f.default["5AblQX"]),
                      description: h.intl.string(f.default.QnUV8M),
                      checked: !0 === t.fast,
                      disabled: u,
                      onChange: (e) => x({ ...t, fast: e }),
                  })
                : null,
        ],
    });
}
function g(e) {
    let { settings: t, tiers: n, choices: r, disabled: a, onChange: i } = e,
        d = u.PY.indexOf(t.tier);
    return (0, l.jsxs)("div", {
        className: m.OA,
        children: [
            (0, l.jsxs)("div", {
                className: m.hs,
                children: [
                    (0, l.jsxs)("div", {
                        className: m.UT,
                        children: [
                            (0, l.jsx)(s.E, {
                                tag: "span",
                                variant: "text-md/medium",
                                color: "text-default",
                                children: h.intl.string(f.default.aBPQxX),
                            }),
                            (0, l.jsx)(s.E, {
                                tag: "span",
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: (0, o.Tc)(t.tier),
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: m.Nb,
                        children: [
                            (0, l.jsx)(s.E, {
                                tag: "span",
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: h.intl.string(f.default["/tlOR5"]),
                            }),
                            (0, l.jsx)(s.E, {
                                tag: "span",
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: h.intl.string(f.default.FxoUwB),
                            }),
                        ],
                    }),
                    (0, l.jsx)(c.A, {
                        activeIndex: d,
                        stops: u.PY.map(o.D0),
                        ariaLabel: h.intl.string(f.default.aBPQxX),
                        disabled: a,
                        onSelect: function (e) {
                            let n = u.PY[e];
                            null != n && n !== t.tier && i((0, o.CM)((0, o.j6)(t, n)));
                        },
                    }),
                ],
            }),
            (0, l.jsx)(x, { settings: t, tiers: n, choices: r, disabled: a, onChange: i }),
        ],
    });
}
