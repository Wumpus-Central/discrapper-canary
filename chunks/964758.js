n.d(t, {
    A: () => x,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(397927),
    c = n(915089),
    o = n(599941),
    d = n(11351),
    u = n(306444),
    f = n(922975),
    g = n(67097),
    b = n(244912),
    m = n(963175),
    p = n(985018);

function x() {
    var e;
    let { editStateId: t } = (0, u.O)(),
        [n, l] = f.V_(t),
        [x, h] = f.hh(t),
        j = (0, o.dL)(t),
        { options: O } = (0, b.A)(null != (e = null == j ? void 0 : j.active_trial) ? e : null),
        y = (0, g.A)(),
        v = null != n,
        A = i.useCallback(
            (e) => {
                let t = O.find((e) => e.isDefault);
                s()(null != t, "Missing default trial duartion option"), l(e ? t.value : null);
            },
            [l, O],
        ),
        E = (0, d.gN)(),
        N = (0, c.GV)(),
        _ = (0, c.GV)();
    return (0, r.jsxs)(m.A, {
        title: p.intl.string(p.t["6anton"]),
        description: p.intl.string(p.t.urVijS),
        children: [
            (0, r.jsx)(a.dOG, {
                label: p.intl.string(p.t["+hTmdb"]),
                checked: v,
                onChange: (e) => A(e),
                disabled: E,
            }),
            (0, r.jsx)(a.l6P, {
                selectionMode: "single",
                label: p.intl.string(p.t.m1KuWd),
                description: p.intl.string(p.t.NB9NLF),
                "aria-labelledby": N,
                options: O,
                formatOption: (e) => {
                    let { value: t, label: n } = e;
                    return {
                        id: t.interval.toString(),
                        value: t,
                        label: n,
                    };
                },
                placeholder: p.intl.string(p.t.WZG1BU),
                value: n,
                onSelectionChange: l,
                maxOptionsVisible: 5,
                disabled: !v || E,
            }),
            (0, r.jsx)(a.hKd, {
                size: 24,
            }),
            (0, r.jsx)(a.l6P, {
                selectionMode: "single",
                label: p.intl.string(p.t["/JD9oe"]),
                description: p.intl.string(p.t.Cg5eBm),
                "aria-labelledby": _,
                options: y,
                formatOption: (e) => {
                    let { value: t, label: n } = e;
                    return {
                        id: t.toString(),
                        value: t,
                        label: n,
                    };
                },
                value: x,
                onSelectionChange: h,
                maxOptionsVisible: 5,
                disabled: !v || E,
            }),
        ],
    });
}
