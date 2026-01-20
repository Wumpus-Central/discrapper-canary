n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(512722),
    a = n.n(l),
    s = n(481060),
    o = n(313201),
    c = n(584825),
    d = n(723047),
    u = n(727843),
    g = n(290348),
    f = n(518470),
    m = n(22902),
    b = n(783454),
    p = n(388032);
function h() {
    var e;
    let { editStateId: t } = (0, u.N)(),
        [n, l] = g.TT(t),
        [h, x] = g.F2(t),
        j = (0, c.oC)(t),
        { options: v } = (0, m.Z)(null != (e = null == j ? void 0 : j.active_trial) ? e : null),
        O = (0, f.Z)(),
        y = null != n,
        C = i.useCallback(
            (e) => {
                let t = v.find((e) => e.isDefault);
                a()(null != t, "Missing default trial duartion option"), l(e ? t.value : null);
            },
            [l, v],
        ),
        N = (0, d.mY)(),
        E = (0, o.Dt)(),
        I = (0, o.Dt)();
    return (0, r.jsxs)(b.Z, {
        title: p.intl.string(p.t["6anton"]),
        description: p.intl.string(p.t.urVijS),
        children: [
            (0, r.jsx)(s.rsf, {
                label: p.intl.string(p.t["+hTmdb"]),
                checked: y,
                onChange: (e) => C(e),
                disabled: N,
            }),
            (0, r.jsx)(s.PhF, {
                selectionMode: "single",
                label: p.intl.string(p.t.m1KuWd),
                description: p.intl.string(p.t.NB9NLF),
                "aria-labelledby": E,
                options: v,
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
                disabled: !y || N,
            }),
            (0, r.jsx)(s.LZC, { size: 24 }),
            (0, r.jsx)(s.PhF, {
                selectionMode: "single",
                label: p.intl.string(p.t["/JD9oe"]),
                description: p.intl.string(p.t.Cg5eBm),
                "aria-labelledby": I,
                options: O,
                formatOption: (e) => {
                    let { value: t, label: n } = e;
                    return {
                        id: t.toString(),
                        value: t,
                        label: n,
                    };
                },
                value: h,
                onSelectionChange: x,
                maxOptionsVisible: 5,
                disabled: !y || N,
            }),
        ],
    });
}
