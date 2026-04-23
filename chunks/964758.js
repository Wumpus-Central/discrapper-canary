n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    s = n(284009),
    r = n.n(s),
    a = n(243721),
    o = n(691885),
    d = n(696986),
    c = n(915089),
    u = n(599941),
    m = n(11351),
    g = n(306444),
    h = n(922975),
    x = n(67097),
    _ = n(244912),
    p = n(963175),
    A = n(985018);
function E() {
    let { editStateId: e } = (0, g.O)(),
        [t, n] = h.V_(e),
        [s, E] = h.hh(e),
        f = (0, u.dL)(e),
        { options: j } = (0, _.A)(f?.active_trial ?? null),
        N = (0, x.A)(),
        I = null != t,
        C = l.useCallback(
            (e) => {
                let t = j.find((e) => e.isDefault);
                r()(null != t, "Missing default trial duartion option"), n(e ? t.value : null);
            },
            [n, j],
        ),
        b = (0, m.gN)(),
        v = (0, c.GV)(),
        S = (0, c.GV)();
    return (0, i.jsxs)(p.A, {
        title: A.intl.string(A.t["6anton"]),
        description: A.intl.string(A.t.urVijS),
        children: [
            (0, i.jsx)(a.d, { label: A.intl.string(A.t["+hTmdb"]), checked: I, onChange: (e) => C(e), disabled: b }),
            (0, i.jsx)(o.l, {
                selectionMode: "single",
                label: A.intl.string(A.t.m1KuWd),
                description: A.intl.string(A.t.NB9NLF),
                "aria-labelledby": v,
                options: j,
                formatOption: (e) => {
                    let { value: t, label: n } = e;
                    return { id: t.interval.toString(), value: t, label: n };
                },
                placeholder: A.intl.string(A.t.WZG1BU),
                value: t,
                onSelectionChange: n,
                maxOptionsVisible: 5,
                disabled: !I || b,
            }),
            (0, i.jsx)(d.h, { size: 24 }),
            (0, i.jsx)(o.l, {
                selectionMode: "single",
                label: A.intl.string(A.t["/JD9oe"]),
                description: A.intl.string(A.t.Cg5eBm),
                "aria-labelledby": S,
                options: N,
                formatOption: (e) => {
                    let { value: t, label: n } = e;
                    return { id: t.toString(), value: t, label: n };
                },
                value: s,
                onSelectionChange: E,
                maxOptionsVisible: 5,
                disabled: !I || b,
            }),
        ],
    });
}
