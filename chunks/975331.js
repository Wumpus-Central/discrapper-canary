n.d(t, { Z: () => x }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(512722),
    a = n.n(l),
    s = n(199849),
    o = n(481060),
    c = n(313201),
    d = n(584825),
    u = n(723047),
    g = n(727843),
    m = n(290348),
    p = n(518470),
    f = n(22902),
    h = n(783454),
    b = n(388032);
function x() {
    var e;
    let { editStateId: t } = (0, g.N)(),
        [n, l] = m.TT(t),
        [x, j] = m.F2(t),
        _ = (0, d.oC)(t),
        { options: v } = (0, f.Z)(null != (e = null == _ ? void 0 : _.active_trial) ? e : null),
        O = (0, p.Z)(),
        C = null != n,
        y = i.useCallback(
            (e) => {
                let t = v.find((e) => e.isDefault);
                a()(null != t, "Missing default trial duartion option"), l(e ? t.value : null);
            },
            [l, v],
        ),
        N = (0, u.mY)(),
        E = (0, c.Dt)(),
        I = (0, c.Dt)();
    return (0, r.jsxs)(h.Z, {
        title: b.intl.string(b.t["6anton"]),
        description: b.intl.string(b.t.urVijS),
        children: [
            (0, r.jsx)(o.rsf, {
                label: b.intl.string(b.t["+hTmdb"]),
                checked: C,
                onChange: (e) => y(e),
                disabled: N,
            }),
            (0, r.jsx)(s.y6, {
                label: b.intl.string(b.t.m1KuWd),
                description: b.intl.string(b.t.NB9NLF),
                "aria-labelledby": E,
                options: v,
                placeholder: b.intl.string(b.t.WZG1BU),
                value: n,
                onChange: l,
                maxVisibleItems: 5,
                isDisabled: !C || N,
            }),
            (0, r.jsx)(o.LZC, { size: 24 }),
            (0, r.jsx)(s.y6, {
                label: b.intl.string(b.t["/JD9oe"]),
                description: b.intl.string(b.t.Cg5eBm),
                "aria-labelledby": I,
                options: O,
                value: x,
                onChange: j,
                maxVisibleItems: 5,
                isDisabled: !C || N,
            }),
        ],
    });
}
